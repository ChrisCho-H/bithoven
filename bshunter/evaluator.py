"""
The evaluator SymbolicBasedEvaluator and AddressBasedEvaluator for detecting vulnerabilites from Bitcoin scripts.
SymbolicBasedEvaluator requires the dependency of the symbolic Bitcoin script VM.
"""

from symbolic_vm import RunScript
import simple_keygen
import impossible_keygen
import util
import z3


class SymbolicBasedEvaluator:
    
    def __init__(self, simple_key_size=100):

        simple_keys = simple_keygen.get_simple_publickeys(simple_key_size)
        self.simple_keys_set = set()
        for key in simple_keys:
            self.simple_keys_set.add(str(util.raw2int(key)))

        simple_keyhashes = simple_keygen.get_simple_publickeyhashes(simple_key_size)
        self.simple_keyhashes_set = set()
        for key in simple_keyhashes:
            self.simple_keyhashes_set.add(str(util.raw2int(key)))
        
        if simple_key_size>100:
            print("simple key generated", len(self.simple_keys_set))

        impossible_publickeyandhashes = impossible_keygen.get_impossible_publickeyandhashes()
        self.impossible_value_set = set(impossible_publickeyandhashes)

    def check_is_impossible(self, key):
        # print("check_is_impossible", key)
        if key[:8]=="checksig" or key[:5]=="stack":
            return False
        if int(key)<=16 and int(key)>=-1:
            return True
        raw_elem = util.int2raw(int(key))
        # print("raw_elem", raw_elem)
        chars_cnt = {}
        for i in raw_elem:
            if i not in chars_cnt:
                chars_cnt[i] = 0
            chars_cnt[i] += 1
        if len(chars_cnt)<5:
            return True
        for i in chars_cnt:
            if chars_cnt[i] > len(raw_elem)/3:
                # print("chars_cnt[i] > len(raw_elem)/3", chars_cnt[i], i)
                return True
        if raw_elem in self.impossible_value_set:
            # print("impossible_value_set!!!")
            return True
        return False


    def EvaluateAsm(self, asm):

        try:
            util.clear()
            btcvm = RunScript(asm)
        except Exception as err:
            print("----Exception----")
            print(asm)
            print(err)
            print("-----------------")
            return {
                "err": str(err)
            }
        else:
            
            result_stacks = []
            for stack in btcvm.final_stacks:
                temp = {
                    "constraints": str(stack.constraints)
                }
                if stack.Check() == z3.sat:
                    temp["sat"] = 1
                    temp["model"] = str(stack.Model())
                else:
                    temp["sat"] = 0
                result_stacks.append(temp)
            
            print(result_stacks)

            is_unbinded_txid = False
            is_never_true = True
            is_useless_sig = False
            is_uncertain_sig = False
            is_simple_key = False

            maybe_impossible_key = False
            no_possible_key = True

            is_impossible_key = None

            for stack in result_stacks:
                if stack["sat"]:
                    is_never_true = False
                    model = stack["model"]
                    if "checksig" not in model and "checkmultisig" not in model:
                        is_unbinded_txid = True
                    else:
                        maybe_impossible_key = True
                        sub_is_useless_sig = True
                        sub_is_impossible_key = False
                        model_ = model.replace("\n", "").replace(" ", "")[1:-1]
                        model_arr = model_.split(",")
                        for one_model in model_arr:
                            one_model_pair = one_model.split("=")
                            key = one_model_pair[0]
                            value = one_model_pair[1]
                            if "checksig" in key or "checkmultisig" in key:
                                if value=="1":
                                    sub_is_useless_sig = False
                            if "checksig" in key:
                                public_key_sig = key[9:]
                                public_key = public_key_sig.split(":")[0]
                                sig = public_key_sig.split(":")[1]
                                if public_key in self.simple_keys_set:
                                    is_simple_key = True
                                if self.check_is_impossible(public_key):
                                    sub_is_impossible_key = True
                                    # print("sub_is_impossible_key", sub_is_impossible_key, key)
                                elif public_key[:5]=="stack" and sig[:5]=="stack":
                                    equal_cnt = 0
                                    public_key_equal = public_key+"="
                                    sig_euqal = sig+"="
                                    for temp_model in model_arr:
                                        if public_key_equal in temp_model:
                                            equal_cnt += 1
                                        if sig_euqal in temp_model:
                                            equal_cnt += 1
                                    if equal_cnt <2:
                                        # print(equal_cnt)
                                        is_uncertain_sig = True
                                        # print(model_arr)
                                
                            if "checkmultisig" in key:
                                public_key_arr = key.split("_")[2].split(":")
                                for public_key in public_key_arr:
                                    if public_key in self.simple_keys_set:
                                        is_simple_key = True
                                if "unknown" in key:
                                    is_uncertain_sig = True
                            if "hash" in key:
                                # print(value, len(self.simple_keyhashes_set))
                                if value in self.simple_keyhashes_set:
                                    is_simple_key = True
                                if self.check_is_impossible(value):
                                    sub_is_impossible_key = True
                                    # print("hash key impossible", model)

                        if sub_is_useless_sig:
                            is_useless_sig = True
                        if sub_is_impossible_key == False:
                            no_possible_key = False

            is_impossible_key =  maybe_impossible_key and no_possible_key
            return {
                # "asm": asm,
                "is_unbinded_txid": is_unbinded_txid,
                "is_simple_key": is_simple_key,
                "is_useless_sig": is_useless_sig,
                "is_uncertain_sig": is_uncertain_sig,
                "is_impossible_key": is_impossible_key,
                "is_never_true": is_never_true
            }


    def EvaluateOutput(self, output):
        
        asm = output["OutputScript"]

        if output["Type"] == "Pay-to-Script-Hash":
            asm = output["ExactScript"]
        if output["Type"] == "Pay-to-Witness-Script-Hash":
            asm = output["ExactScript"]


        try:
            util.clear()
            btcvm = RunScript(asm)
            # print(asm)
        except Exception as err:
            print("----Exception----")
            print(asm)
            print(err)
            print("-----------------")
            return {
                "err": str(err)
            }
        else:
            
            result_stacks = []
            for stack in btcvm.final_stacks:
                temp = {
                    "constraints": str(stack.constraints)
                }
                if stack.Check() == z3.sat:
                    temp["sat"] = 1
                    temp["model"] = str(stack.Model())
                else:
                    temp["sat"] = 0
                result_stacks.append(temp)
            
            # print(result_stacks)

            is_unbinded_txid = False
            is_never_true = True
            is_useless_sig = False
            is_uncertain_sig = False
            is_simple_key = False

            maybe_impossible_key = False
            no_possible_key = True

            is_impossible_key = None

            for stack in result_stacks:
                if stack["sat"]:
                    is_never_true = False
                    model = stack["model"]
                    if "checksig" not in model and "checkmultisig" not in model:
                        is_unbinded_txid = True
                    else:
                        maybe_impossible_key = True
                        sub_is_useless_sig = True
                        sub_is_impossible_key = False
                        model_ = model.replace("\n", "").replace(" ", "")[1:-1]
                        model_arr = model_.split(",")
                        for one_model in model_arr:
                            one_model_pair = one_model.split("=")
                            key = one_model_pair[0]
                            value = one_model_pair[1]
                            if "checksig" in key or "checkmultisig" in key:
                                if value=="1":
                                    sub_is_useless_sig = False
                            if "checksig" in key:
                                public_key_sig = key[9:]
                                public_key = public_key_sig.split(":")[0]
                                sig = public_key_sig.split(":")[1]
                                if public_key in self.simple_keys_set:
                                    is_simple_key = True
                                if self.check_is_impossible(public_key):
                                    sub_is_impossible_key = True
                                    # print("sub_is_impossible_key", sub_is_impossible_key, key)
                                elif public_key[:5]=="stack" and sig[:5]=="stack":
                                    equal_cnt = 0
                                    public_key_equal = public_key+"="
                                    sig_euqal = sig+"="
                                    for temp_model in model_arr:
                                        if public_key_equal in temp_model:
                                            equal_cnt += 1
                                        if sig_euqal in temp_model:
                                            equal_cnt += 1
                                    if equal_cnt <2:
                                        is_uncertain_sig = True
                                        
                            if "checkmultisig" in key:
                                public_key_arr = key.split("_")[2].split(":")
                                for public_key in public_key_arr:
                                    if public_key in self.simple_keys_set:
                                        is_simple_key = True
                                if "unknown" in key:
                                    is_uncertain_sig = True
                            if "hash" in key:
                                # print(value, len(self.simple_keyhashes_set))
                                if value in self.simple_keyhashes_set:
                                    is_simple_key = True
                                if self.check_is_impossible(value):
                                    sub_is_impossible_key = True
                                    # print("hash key impossible", model)

                        if sub_is_useless_sig:
                            is_useless_sig = True
                        if sub_is_impossible_key == False:
                            no_possible_key = False

            is_impossible_key =  maybe_impossible_key and no_possible_key
            return {
                # "asm": asm,
                "is_unbinded_txid": is_unbinded_txid,
                "is_simple_key": is_simple_key,
                "is_useless_sig": is_useless_sig,
                "is_uncertain_sig": is_uncertain_sig,
                "is_impossible_key": is_impossible_key,
                "is_never_true": is_never_true
            }




class AddressBasedEvaluator:

    def __init__(self, simple_key_size=100):
        simple_addrs = simple_keygen.get_simple_addrs(simple_key_size)
        self.simple_addrs_set = set(simple_addrs)

        if simple_key_size>100:
            print("simple key generated", len(self.simple_addrs_set))

        impossible_addrs = impossible_keygen.get_impossible_addrs()
        self.impossible_addrs_set = set(impossible_addrs)


    def EvaluateOutput(self, output):
        addrs = output["OutputAddresses"]
        if output["ExactAddresses"] != None:
            addrs = output["ExactAddresses"]

        is_unbinded_txid = None
        is_never_true = None
        is_useless_sig = None
        is_uncertain_sig = None
        is_simple_key = None
        is_impossible_key = None

        if addrs != None:
            for addr in addrs:
                if addr in self.simple_addrs_set:
                    is_simple_key = True
                if addr in self.impossible_addrs_set:
                    is_impossible_key = True
        else:
            if output["Type"] == "Null-data" and output["Value"]>0:
                is_never_true = True


        return {
            "is_unbinded_txid": is_unbinded_txid,
            "is_simple_key": is_simple_key,
            "is_useless_sig": is_useless_sig,
            "is_uncertain_sig": is_uncertain_sig,
            "is_impossible_key": is_impossible_key,
            "is_never_true": is_never_true
        }