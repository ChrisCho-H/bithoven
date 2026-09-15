import simple_keygen
import util

class Tracer:
    
    def __init__(self, simple_key_size=100):

        hex_simple_keys = simple_keygen.get_simple_publickeys(simple_key_size)
        self.hex_simple_keys_set = set()
        for key in hex_simple_keys:
            self.hex_simple_keys_set.add(key)

    def trace_unbinded_txid(self, output):
        opcodes = output["SpentTrace"]["Opcodes"]
        stacksAfter = output["SpentTrace"]["Stacks"]

        verifies = set([
            "OP_CHECKSIGVERIFY",
            "OP_CHECKMULTISIGVERIFY",
        ])
        checks = set([
            "OP_CHECKSIG",
            "OP_CHECKMULTISIG",
        ])
        
        for step in range(len(opcodes)):
            opcode = opcodes[step]
            if opcode in verifies:
                return False
            if opcode in checks:
                stack = stacksAfter[step].split(";")[:-1]
                if stack[-1] == "01":
                    # print(output)
                    return False
                else:
                    print(output)
                    exit()
        
        return True


    def trace_simple_key(self, output):
        opcodes = output["SpentTrace"]["Opcodes"]
        stacksAfter = output["SpentTrace"]["Stacks"]

        onesig = set([
            "OP_CHECKSIGVERIFY",
            "OP_CHECKSIG",
        ])
        multisig = ([
            "OP_CHECKMULTISIGVERIFY",
            "OP_CHECKMULTISIG",
        ])
        
        for step in range(len(opcodes)):
            opcode = opcodes[step]
            if opcode in onesig:
                stackBefore = stacksAfter[step-1]
                stack = stackBefore.split(";")[:-1]
                pubkey = stack.pop()
                if pubkey in self.hex_simple_keys_set:
                    return True
            if opcode in multisig:
                stackBefore = stacksAfter[step-1]
                stack = stackBefore.split(";")[:-1]
                pubkey_num = stack.pop()
                for i in range(0, util.raw2int(pubkey_num)):
                    pubkey = stack.pop()
                    if pubkey in self.hex_simple_keys_set:
                        return True
                    
        print(output)
        return False


    def trace_useless_sig(self, output):
        opcodes = output["SpentTrace"]["Opcodes"]
        stacksAfter = output["SpentTrace"]["Stacks"]

        sigops = set([
            "OP_CHECKSIG",
            "OP_CHECKMULTISIG",
        ])

        for step in range(len(opcodes)):
            opcode = opcodes[step]
            if opcode in sigops:
                stack = stacksAfter[step].split(";")[:-1]
                if stack[-1] == "01":
                    return False
                    
        return True

    def trace_uncertain_sig(self, output):
        opcodes = output["SpentTrace"]["Opcodes"]
        stacksAfter = output["SpentTrace"]["Stacks"]

        onesig = set([
            "OP_CHECKSIGVERIFY",
            "OP_CHECKSIG",
        ])
        multisig = ([
            "OP_CHECKMULTISIGVERIFY",
            "OP_CHECKMULTISIG",
        ])
        
        # print(output)
        asm = output["OutputScript"]
        if output["ExactScript"] != None:
            asm = output["ExactScript"]

        certain = asm.split(" ")

        for step in range(len(opcodes)):
            opcode = opcodes[step]
            if opcode in onesig:
                stackBefore = stacksAfter[step-1]
                stack = stackBefore.split(";")[:-1]
                pubkey = stack.pop()
                sig = stack.pop()
                public_key_bytes = bytes.fromhex(pubkey)
                sig_bytes = bytes.fromhex(sig)
                pubkey_hash = simple_keygen.get_public_address(public_key_bytes).hex()
                sig_hash = simple_keygen.get_public_address(sig_bytes).hex()
                #print("checksig", pubkey, sig, pubkey_hash, sig_hash)
                #print("certain", certain)
                if pubkey not in certain and sig not in certain and pubkey_hash not in certain and sig_hash not in certain:
                    return True
            if opcode in multisig:
                stackBefore = stacksAfter[step-1]
                stack = stackBefore.split(";")[:-1]
                pubkey_num = stack.pop()
                pubkeys = []
                for i in range(0, util.raw2int(pubkey_num)):
                    pubkeys.append(stack.pop())
                sig_num = stack.pop()
                if pubkey_num not in certain:
                    # print("True", asm, stack)
                    return True
                if sig_num not in certain:
                    # print("True", asm, stack)
                    return True
                print(asm)
        
        have = False
        for opcode in opcodes:
            if opcode in onesig or opcode in multisig:
                have = True
        # if not have:
        #     print("Not Concern")
        # else:
        #     print(output)
        return False
