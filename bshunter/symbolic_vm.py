"""
Ref:

Bitcoin Wiki: https://en.bitcoin.it/wiki/Script
From Bitcoin Core: https://bitcoin.org/en/bitcoin-core/ -> Resources(footer) -> Bitcoin Wiki

In more details, the VM holds a list of stacks (aka “state” in traditional symbolic execution).
Each stack is equipped with its constraints and current program counter (PC).
The VM executes operations for each stack and then keep their final status in the memory for further detection.
Given a conditional operation (e.g. IF), since it has two branches (True and False), one stack will be split into two, with opposite constraints. 
Then the two stacks are added to the VM’s list, waiting for next operations.
The operational semantics of the VM can be divided into “Flow control”, “Stack”, “Splice”, “Bitwise logic”, “Arithmetic”, “Crypto”, “Locktime”, “Reserved words”, defined in the community wiki.
"""

import z3
import copy
import util

MAX_STEPS = 100000

class BTCstack:

    def __init__(self, verbose=False) -> None:
        self.raw_stack = []
        self.alt_stack = []
        self.constraints = []
        self.symbol_cnt = 0
        self.next_pc = 0
        self.endif_pcs = []
        self.solver = None
        self.verbose = verbose
        # self.op_history = []
    
    """
    def __deepcopy__(self):
        new_stack = BTCstack()
        for i in self.raw_stack:
            new_stack.raw_stack.append(i)
        for i in self.constraints:
            new_stack.constraints.append(i)
        new_stack.symbol_cnt = self.symbol_cnt
        new_stack.next_pc = self.next_pc
        for i in self.if_pc:
            new_stack.if_pc.append(i)
    """


    def Pop(self):
        if len(self.raw_stack) == 0:
            symbol_name = "stack_"+str(self.symbol_cnt)
            ret = z3.Int(symbol_name)
            self.symbol_cnt += 1
            return ret
        else:
            return self.raw_stack.pop()


    def PopAlt(self):
        if len(self.alt_stack) == 0:
            symbol_name = "altstack_"+str(self.symbol_cnt)
            ret = z3.Int(symbol_name)
            self.symbol_cnt += 1
            return ret
        else:
            return self.alt_stack.pop()


    def PushDepth(self):
        symbol_name = "depth_"+str(self.symbol_cnt)
        ret = z3.Int(symbol_name)
        self.raw_stack.append(ret)
        self.symbol_cnt += 1

    def PushInt(self, int_elem):
        self.raw_stack.append(int_elem)
    
    def PushRaw(self, raw_elem):
        if raw_elem == "decodingerr":
            self.constraints.append(False)
            return
        if len(raw_elem) >= 7 and raw_elem[-7:]=="[error]":
            self.constraints.append(False)
            return
        if len(raw_elem) == 0:
            return

        int_elem = 0
        is_int = {'10': True, '11': True, '12': True, '13': True, '14': True, '15': True, '16': True}
        if len(raw_elem) < 2 or raw_elem in is_int:
            int_elem = int(raw_elem)
        elif raw_elem == "-1":
            int_elem = -1
        else:
            # raw to int
            int_elem = util.raw2int(raw_elem)
        self.raw_stack.append(int_elem)
    
    def Check(self):
        self.solver = z3.Solver()
        for constraint in self.constraints:
            # print(constraint)
            self.solver.add(constraint)
        return self.solver.check()
    
    def Model(self):
        return self.solver.model()

class BTCvm:

    def __init__(self, script, verbose=False) -> None:
        self.script = script
        init_stack = BTCstack()
        self.open_stacks = [init_stack]
        self.final_stacks = []
        self.verbose = verbose

    def execute_script(self):
        for op_code in self.script:
            if op_code=="OP_VERIF" or op_code=="OP_VERNOTIF":
                open_stack = self.open_stacks[0]
                final_stack = self.execute_op(open_stack, "OP_INVALID")[0]
                self.final_stacks.append(final_stack)
                return

        steps = 0
        while len(self.open_stacks) > 0:
            """
            next_pcs = []
            for open_stack in self.open_stacks:
                next_pcs.append(open_stack.next_pc)
            print(next_pcs)
            """
            open_stack  = self.open_stacks.pop()
            next_pc = open_stack.next_pc
            if next_pc < len(self.script):
                # print("doing, ", open_stack.next_pc)
                new_stacks = self.execute_op(open_stack)
                for new_stack in new_stacks:
                    self.open_stacks.append(new_stack)
                    # print("finish, next", new_stack.next_pc, len(self.script))
                steps += 1
                if steps > MAX_STEPS:
                    raise Exception("Too Many Steps")
            else:
                final_stack = self.execute_op(open_stack, "OP_VERIFY")[0]
                self.final_stacks.append(final_stack)

    def check_stacks(self):
        sat = 0
        unsat = 0
        for final_stack in self.final_stacks:
            if final_stack.Check()==z3.sat:
                sat += 1
            else:
                unsat += 1
        return sat, unsat
    
    def model_stacks(self):
        has_model = 0
        no_model = 0
        for final_stack in self.final_stacks:
            try:
                final_stack.Model()
                has_model += 1
            except:
                no_model += 1
        return has_model, no_model

    def scanif(self, pc):
        childif = 0
        else_pc = None
        endif_pc = len(self.script)
        for i in range(pc+1, len(self.script)):
            op = self.script[i]
            if op == "OP_IF" or op=="OP_NOTIF":
                childif += 1
            elif op == "OP_ELSE":
                if childif == 0:
                    else_pc = i+1
            elif op == "OP_ENDIF":
                if childif == 0:
                    endif_pc = i+1
                else:
                    childif -= 1
            if endif_pc != len(self.script):
                break
        # print(pc, else_pc, endif_pc)
        return else_pc, endif_pc

    def execute_op(self, btcstack, opcode=None):
        if opcode == None:
            next_pc = btcstack.next_pc
            opcode = self.script[next_pc]
            # btcstack.op_history.append(opcode)
            if self.verbose:
                print(btcstack.raw_stack, btcstack.alt_stack)
                print(next_pc, opcode)

        # Flow control
        if opcode=="OP_NOP":
            return self.OP_NOP(btcstack)
        elif opcode=="OP_IF":
            else_pc, endif_pc = self.scanif(next_pc)
            return self.OP_IF(btcstack, else_pc, endif_pc)
        elif opcode=="OP_NOTIF":
            else_pc, endif_pc = self.scanif(next_pc)
            return self.OP_NOTIF(btcstack, else_pc, endif_pc)
        elif opcode=="OP_ELSE":
            return self.OP_ELSE(btcstack)
        elif opcode=="OP_ENDIF":
            return self.OP_ENDIF(btcstack)
        elif opcode=="OP_VERIFY":
            return self.OP_VERIFY(btcstack)
        elif opcode=="OP_RETURN":
            return self.OP_RETURN(btcstack)
        # Stack
        elif opcode=="OP_TOALTSTACK":
            return self.OP_TOALTSTACK(btcstack)
        elif opcode=="OP_FROMALTSTACK":
            return self.OP_FROMALTSTACK(btcstack)
        elif opcode=="OP_IFDUP":
            return self.OP_IFDUP(btcstack)
        elif opcode=="OP_DEPTH":
            return self.OP_DEPTH(btcstack)
        elif opcode=="OP_DROP":
            return self.OP_DROP(btcstack)
        elif opcode=="OP_DUP":
            return self.OP_DUP(btcstack)
        elif opcode=="OP_NIP":
            return self.OP_NIP(btcstack)
        elif opcode=="OP_OVER":
            return self.OP_OVER(btcstack)
        elif opcode=="OP_PICK":
            return self.OP_PICK(btcstack)
        elif opcode=="OP_ROLL":
            return self.OP_ROLL(btcstack)
        elif opcode=="OP_ROT":
            return self.OP_ROT(btcstack)
        elif opcode=="OP_SWAP":
            return self.OP_SWAP(btcstack)
        elif opcode=="OP_TUCK":
            return self.OP_TUCK(btcstack)
        elif opcode=="OP_2DROP":
            return self.OP_2DROP(btcstack)
        elif opcode=="OP_2DUP":
            return self.OP_2DUP(btcstack)
        elif opcode=="OP_3DUP":
            return self.OP_3DUP(btcstack)
        elif opcode=="OP_2OVER":
            return self.OP_2OVER(btcstack)
        elif opcode=="OP_2SWAP":
            return self.OP_2SWAP(btcstack)
        elif opcode=="OP_2ROT":
            return self.OP_2ROT(btcstack)
        # Splice
        elif opcode=="OP_CAT":
            return self.OP_DISABLED(btcstack)
        elif opcode=="OP_SUBSTR":
            return self.OP_DISABLED(btcstack)
        elif opcode=="OP_LEFT":
            return self.OP_DISABLED(btcstack)
        elif opcode=="OP_RIGHT":
            return self.OP_DISABLED(btcstack)
        elif opcode=="OP_SIZE":
            return self.OP_SIZE(btcstack)
        # Bitwise logic
        elif opcode=="OP_INVERT":
            return self.OP_DISABLED(btcstack)
        elif opcode=="OP_AND":
            return self.OP_DISABLED(btcstack)
        elif opcode=="OP_OR":
            return self.OP_DISABLED(btcstack)
        elif opcode=="OP_XOR":
            return self.OP_DISABLED(btcstack)
        elif opcode=="OP_EQUAL":
            return self.OP_EQUAL(btcstack)
        elif opcode=="OP_EQUALVERIFY":
            return self.OP_EQUALVERIFY(btcstack)
        # Arithmetic
        elif opcode=="OP_1ADD":
            return self.OP_1ADD(btcstack)
        elif opcode=="OP_1SUB":
            return self.OP_1SUB(btcstack)
        elif opcode=="OP_2MUL":
            return self.OP_DISABLED(btcstack)
        elif opcode=="OP_2DIV":
            return self.OP_DISABLED(btcstack)
        elif opcode=="OP_NEGATE":
            return self.OP_NEGATE(btcstack)
        elif opcode=="OP_ABS":
            return self.OP_ABS(btcstack)
        elif opcode=="OP_NOT":
            return self.OP_NOT(btcstack)
        elif opcode=="OP_0NOTEQUAL":
            return self.OP_0NOTEQUAL(btcstack)
        elif opcode=="OP_ADD":
            return self.OP_ADD(btcstack)
        elif opcode=="OP_SUB":
            return self.OP_SUB(btcstack)
        elif opcode=="OP_MUL":
            return self.OP_DISABLED(btcstack)
        elif opcode=="OP_DIV":
            return self.OP_DISABLED(btcstack)
        elif opcode=="OP_MOD":
            return self.OP_DISABLED(btcstack)
        elif opcode=="OP_LSHIFT":
            return self.OP_DISABLED(btcstack)
        elif opcode=="OP_RSHIFT":
            return self.OP_DISABLED(btcstack)
        elif opcode=="OP_BOOLAND":
            return self.OP_BOOLAND(btcstack)
        elif opcode=="OP_BOOLOR":
            return self.OP_BOOLOR(btcstack)
        elif opcode=="OP_NUMEQUAL":
            return self.OP_NUMEQUAL(btcstack)
        elif opcode=="OP_NUMEQUALVERIFY":
            return self.OP_NUMEQUALVERIFY(btcstack)
        elif opcode=="OP_NUMNOTEQUAL":
            return self.OP_NUMNOTEQUAL(btcstack)
        elif opcode=="OP_LESSTHAN":
            return self.OP_LESSTHAN(btcstack)
        elif opcode=="OP_GREATERTHAN":
            return self.OP_GREATERTHAN(btcstack)
        elif opcode=="OP_LESSTHANOREQUAL":
            return self.OP_LESSTHANOREQUAL(btcstack)
        elif opcode=="OP_GREATERTHANOREQUAL":
            return self.OP_GREATERTHANOREQUAL(btcstack)
        elif opcode=="OP_MIN":
            return self.OP_MIN(btcstack)
        elif opcode=="OP_MAX":
            return self.OP_MAX(btcstack)
        elif opcode=="OP_WITHIN":
            return self.OP_WITHIN(btcstack)
        # Crypto
        elif opcode=="OP_RIPEMD160":
            return self.OP_RIPEMD160(btcstack)
        elif opcode=="OP_SHA256":
            return self.OP_SHA256(btcstack)
        elif opcode=="OP_SHA1":
            return self.OP_SHA1(btcstack)
        elif opcode=="OP_HASH160":
            return self.OP_HASH160(btcstack)
        elif opcode=="OP_HASH256":
            return self.OP_HASH256(btcstack)
        elif opcode=="OP_CODESEPARATOR":
            return self.OP_CODESEPARATOR(btcstack)
        elif opcode=="OP_CHECKSIG":
            return self.OP_CHECKSIG(btcstack)
        elif opcode=="OP_CHECKSIGVERIFY":
            return self.OP_CHECKSIGVERIFY(btcstack)
        elif opcode=="OP_CHECKMULTISIG":
            return self.OP_CHECKMULTISIG(btcstack)
        elif opcode=="OP_CHECKMULTISIGVERIFY":
            return self.OP_CHECKMULTISIGVERIFY(btcstack)
        # Locktime
        elif opcode=="OP_CHECKLOCKTIMEVERIFY" or opcode=="OP_NOP2":
            return self.OP_CHECKLOCKTIMEVERIFY(btcstack)
        elif opcode=="OP_CHECKSEQUENCEVERIFY" or opcode=="OP_NOP3":
            return self.OP_CHECKSEQUENCEVERIFY(btcstack)
        # Reserved words
        elif opcode=="OP_RESERVED":
            return self.OP_INVALID(btcstack)
        elif opcode=="OP_VER":
            return self.OP_INVALID(btcstack)
        elif opcode=="OP_RESERVED1":
            return self.OP_INVALID(btcstack)
        elif opcode=="OP_RESERVED2":
            return self.OP_INVALID(btcstack)
        elif opcode=="OP_INVALIDOPCODE":
            return self.OP_INVALID(btcstack)
        elif opcode=="OP_INVALID":
            return self.OP_INVALID(btcstack)
        elif len(opcode)>6 and opcode[:6]=="OP_NOP":
            return self.OP_NOP1(btcstack)
        elif opcode=="[empty]":
            return self.OP_NOP(btcstack)
        # Constants
        else:
            btcstack.PushRaw(opcode)
            btcstack.next_pc += 1
            return [btcstack]
    

    def OP_ADD(self, btcstack):
        a = btcstack.Pop()
        b = btcstack.Pop()
        int_elem = a+b
        btcstack.PushInt(int_elem)
        btcstack.next_pc += 1
        return [btcstack]
     
    def OP_SUB(self, btcstack):
        a = btcstack.Pop()
        b = btcstack.Pop()
        int_elem = a-b
        btcstack.PushInt(int_elem)
        btcstack.next_pc += 1
        return [btcstack]

    def OP_1ADD(self, btcstack):
        a = btcstack.Pop()
        b = 1
        int_elem = a+b
        btcstack.PushInt(int_elem)
        btcstack.next_pc += 1
        return [btcstack]
     
    def OP_1SUB(self, btcstack):
        a = btcstack.Pop()
        b = 1
        int_elem = a-b
        btcstack.PushInt(int_elem)
        btcstack.next_pc += 1
        return [btcstack]

    def OP_NEGATE(self, btcstack):
        a = btcstack.Pop()
        int_elem = -a
        btcstack.PushInt(int_elem)
        btcstack.next_pc += 1
        return [btcstack]


    def OP_EQUAL(self, btcstack):
        a = btcstack.Pop()
        b = btcstack.Pop()
        btcstack.next_pc += 1
        new_stack = copy.deepcopy(btcstack)
        btcstack.constraints.append(a==b)
        btcstack.PushInt(1)
        new_stack.constraints.append(a!=b)
        new_stack.PushInt(0)
        return [btcstack, new_stack]

    def OP_EQUALVERIFY(self, btcstack):
        self.OP_EQUAL(btcstack)
        self.OP_VERIFY(btcstack)
        btcstack.next_pc -= 1
        return [btcstack]
        

    def OP_NUMEQUAL(self, btcstack):
        a = btcstack.Pop()
        b = btcstack.Pop()
        btcstack.next_pc += 1
        new_stack = copy.deepcopy(btcstack)
        btcstack.constraints.append(a==b)
        btcstack.PushInt(1)
        new_stack.constraints.append(a!=b)
        new_stack.PushInt(0)
        return [btcstack, new_stack]


    def OP_NUMEQUALVERIFY(self, btcstack):
        self.OP_EQUAL(btcstack)
        self.OP_VERIFY(btcstack)
        btcstack.next_pc -= 1
        return [btcstack]
        
    def OP_NUMNOTEQUAL(self, btcstack):
        a = btcstack.Pop()
        b = btcstack.Pop()
        btcstack.next_pc += 1
        new_stack = copy.deepcopy(btcstack)
        btcstack.constraints.append(a!=b)
        btcstack.PushInt(1)
        new_stack.constraints.append(a==b)
        new_stack.PushInt(0)
        return [btcstack, new_stack]

    def OP_2DUP(self, btcstack):
        a = btcstack.Pop()
        b = btcstack.Pop()
        btcstack.PushInt(b)
        btcstack.PushInt(a)
        btcstack.PushInt(b)
        btcstack.PushInt(a)
        btcstack.next_pc += 1
        return [btcstack]

    def OP_3DUP(self, btcstack):
        a = btcstack.Pop()
        b = btcstack.Pop()
        c = btcstack.Pop()
        btcstack.PushInt(c)
        btcstack.PushInt(b)
        btcstack.PushInt(a)
        btcstack.PushInt(c)
        btcstack.PushInt(b)
        btcstack.PushInt(a)
        btcstack.next_pc += 1
        return [btcstack]
     
    def OP_DUP(self, btcstack):
        a = btcstack.Pop()
        btcstack.PushInt(a)
        btcstack.PushInt(a)
        btcstack.next_pc += 1
        return [btcstack]
    
    def OP_HASH160(self, btcstack):
        a = btcstack.Pop()
        symbol_name = "hash160_"+str(a)
        ret = z3.Int(symbol_name)
        btcstack.PushInt(ret)
        btcstack.next_pc += 1
        return [btcstack]
    
    def OP_CHECKSIG(self, btcstack):
        # print("OP_CHECKSIG", btcstack.raw_stack)
        pubkey = btcstack.Pop()
        sig = btcstack.Pop()
        symbol_name = "checksig_"+str(pubkey)+":"+str(sig)
        ret = z3.Int(symbol_name)
        btcstack.PushInt(ret)
        btcstack.next_pc += 1
        return [btcstack]
    
    def OP_NOP(self, btcstack):
        btcstack.next_pc += 1
        return [btcstack]

    def OP_DROP(self, btcstack):
        btcstack.Pop()
        btcstack.next_pc += 1
        return [btcstack]

    def OP_2DROP(self, btcstack):
        btcstack.Pop()
        btcstack.Pop()
        btcstack.next_pc += 1
        return [btcstack]

    def OP_NIP(self, btcstack):
        a = btcstack.Pop()
        b = btcstack.Pop()
        btcstack.PushInt(a)
        btcstack.next_pc += 1
        return [btcstack]
        
    def OP_SHA256(self, btcstack):
        a = btcstack.Pop()
        symbol_name = "sha256_"+str(a)
        ret = z3.Int(symbol_name)
        btcstack.PushInt(ret)
        btcstack.next_pc += 1
        return [btcstack]

    def OP_SHA1(self, btcstack):
        a = btcstack.Pop()
        symbol_name = "sha1_"+str(a)
        ret = z3.Int(symbol_name)
        btcstack.PushInt(ret)
        btcstack.next_pc += 1
        return [btcstack]
    
    def OP_CHECKLOCKTIMEVERIFY(self, btcstack):
        a = btcstack.Pop()
        symbol_name = "locktime"
        locktime = z3.Int(symbol_name)
        constraint = (a<=locktime)
        btcstack.constraints.append(constraint)
        constraint = (a>=0)
        btcstack.constraints.append(constraint)
        btcstack.PushInt(a)
        btcstack.next_pc += 1
        return [btcstack]

    def OP_NOP1(self, btcstack):
        btcstack.next_pc += 1
        return [btcstack]

    def OP_2SWAP(self, btcstack):
        a = btcstack.Pop()
        b = btcstack.Pop()
        c = btcstack.Pop()
        d = btcstack.Pop()
        btcstack.PushInt(b)
        btcstack.PushInt(a)
        btcstack.PushInt(d)
        btcstack.PushInt(c)
        btcstack.next_pc += 1
        return [btcstack]

    def OP_IFDUP(self, btcstack):
        top = btcstack.Pop()
        btcstack.PushInt(top)
        btcstack.next_pc += 1
        new_stack = copy.deepcopy(btcstack)
        new_stack.PushInt(top)
        
        btcstack.constraints.append(top==0)
        new_stack.constraints.append(top!=0)
        
        return [btcstack, new_stack]
   
    def OP_VERIFY(self, btcstack):
        top = btcstack.Pop()
        
        btcstack.constraints.append(top!=0)
        
        btcstack.next_pc += 1
        return [btcstack]
    
    def OP_IF(self, btcstack, else_pc, endif_pc):
        top = btcstack.Pop()
        new_stack = copy.deepcopy(btcstack)

        btcstack.constraints.append(top!=0)
        new_stack.constraints.append(top==0)

        btcstack.next_pc += 1
        btcstack.endif_pcs.append(endif_pc)
        
        if else_pc != None:
            new_stack.next_pc = else_pc
            new_stack.endif_pcs.append(endif_pc)
        else:
            new_stack.next_pc = endif_pc
        
        return [btcstack, new_stack]

    
    def OP_NOTIF(self, btcstack, else_pc, endif_pc):
        top = btcstack.Pop()
        new_stack = copy.deepcopy(btcstack)

        btcstack.constraints.append(top==0)
        new_stack.constraints.append(top!=0)

        btcstack.next_pc += 1
        btcstack.endif_pcs.append(endif_pc)
        
        if else_pc != None:
            new_stack.next_pc = else_pc
            new_stack.endif_pcs.append(endif_pc)
        else:
            new_stack.next_pc = endif_pc
        
        return [btcstack, new_stack]
        
        
    def OP_ELSE(self, btcstack):
        endif_pc = btcstack.endif_pcs.pop()
        btcstack.next_pc = endif_pc
        return [btcstack]
    
    def OP_ENDIF(self, btcstack):
        endif_pc = btcstack.endif_pcs.pop()
        btcstack.next_pc = endif_pc
        return [btcstack]

    def OP_2OVER(self, btcstack):
        x4 = btcstack.Pop()
        x3 = btcstack.Pop()
        x2 = btcstack.Pop()
        x1 = btcstack.Pop()
        btcstack.PushInt(x1)
        btcstack.PushInt(x2)
        btcstack.PushInt(x3)
        btcstack.PushInt(x4)
        btcstack.PushInt(x1)
        btcstack.PushInt(x2)
        btcstack.next_pc += 1
        return [btcstack]

    def OP_DEPTH(self, btcstack):
        btcstack.PushDepth()
        btcstack.next_pc += 1
        return [btcstack]

    def OP_MIN(self, btcstack):
        a = btcstack.Pop()
        b = btcstack.Pop()
        btcstack.next_pc += 1
        new_stack = copy.deepcopy(btcstack)

        btcstack.constraints.append(a<b)
        btcstack.PushInt(a)
        new_stack.constraints.append(a>=b)
        new_stack.PushInt(b)

        return [btcstack, new_stack]

    def OP_MAX(self, btcstack):
        a = btcstack.Pop()
        b = btcstack.Pop()
        btcstack.next_pc += 1
        new_stack = copy.deepcopy(btcstack)

        btcstack.constraints.append(a<b)
        btcstack.PushInt(b)
        new_stack.constraints.append(a>=b)
        new_stack.PushInt(a)

        return [btcstack, new_stack]

    def OP_HASH256(self, btcstack):
        a = btcstack.Pop()
        symbol_name = "hash256_"+str(a)
        ret = z3.Int(symbol_name)
        btcstack.PushInt(ret)
        btcstack.next_pc += 1
        return [btcstack]

    def OP_PICK(self, btcstack):
        num = btcstack.Pop()
        if type(num)==z3.z3.ArithRef:
            raise Exception("pick num unknown: "+str(num))
        
        if num < 100 and num>0:
            temp = []
            for i in range(num+1):
                x = btcstack.Pop()
                temp.append(x)
            target = temp[-1]
            while len(temp)>0:
                x = temp.pop()
                btcstack.PushInt(x)
            btcstack.PushInt(target)
            btcstack.next_pc += 1
        else:
            btcstack.constraints.append(False)
            btcstack.next_pc = len(self.script)
        return [btcstack]

    def OP_ROLL(self, btcstack):
        num = btcstack.Pop()
        if type(num)==z3.z3.ArithRef:
            raise Exception("roll num unknown: "+str(num))
        
        if num < 100 and num>0:
            temp = []
            for i in range(num+1):
                x = btcstack.Pop()
                temp.append(x)
            target = temp.pop()
            while len(temp)>0:
                x = temp.pop()
                btcstack.PushInt(x)
            btcstack.PushInt(target)
            btcstack.next_pc += 1
        else:
            btcstack.constraints.append(False)
            btcstack.next_pc = len(self.script)
            
        return [btcstack]



    def OP_CHECKMULTISIG(self, btcstack):
        symbol_name = "checkmultisig_"

        pknum = btcstack.Pop()
        if type(pknum)==z3.z3.ArithRef:
            symbol_name += "pknumunknown"
        else:
            if pknum < 100:
                symbol_name += str(pknum)+"_"
                for i in range(pknum):
                    pubkey = btcstack.Pop()
                    if i>0:
                        symbol_name += ":"
                    symbol_name += str(pubkey)
            else:
                symbol_name += "pknumtoobig"
    
        signum = btcstack.Pop()
        if type(signum)==z3.z3.ArithRef:
            symbol_name += "_signumunknown"
        else:
            if signum < 100:
                symbol_name += "_"+str(signum)
                for i in range(signum):
                    btcstack.Pop()
                # Bitcoin Wiki: Due to a bug, one extra unused value is removed from the stack.
                btcstack.Pop()
            else:
                symbol_name += "_signumtoobig"

        ret = z3.Int(symbol_name)
        btcstack.PushInt(ret)
        btcstack.next_pc += 1
        return [btcstack]

    def OP_RETURN(self, btcstack):
        btcstack.constraints.append(False)
        btcstack.next_pc = len(self.script)
        return [btcstack]

    def OP_DISABLED(self, btcstack):
        btcstack.constraints.append(False)
        btcstack.next_pc = len(self.script)
        return [btcstack]

    def OP_INVALID(self, btcstack):
        btcstack.constraints.append(False)
        btcstack.next_pc = len(self.script)
        return [btcstack]

    def OP_SIZE(self, btcstack):
        a = btcstack.Pop()
        btcstack.PushInt(a)
        symbol_name = "size_"+str(a)
        ret = z3.Int(symbol_name)
        btcstack.PushInt(ret)
        btcstack.next_pc += 1
        return [btcstack]

    def OP_SWAP(self, btcstack):
        a = btcstack.Pop()
        b = btcstack.Pop()
        btcstack.PushInt(a)
        btcstack.PushInt(b)
        btcstack.next_pc += 1
        return [btcstack]

    def OP_TUCK(self, btcstack):
        x2 = btcstack.Pop()
        x1 = btcstack.Pop()
        btcstack.PushInt(x2)
        btcstack.PushInt(x1)
        btcstack.PushInt(x2)
        btcstack.next_pc += 1
        return [btcstack]

    def OP_BOOLOR(self, btcstack):
        a = btcstack.Pop()
        b = btcstack.Pop()
        btcstack.next_pc += 1
        new_stack = copy.deepcopy(btcstack)
        a_ = (a!=0)
        b_ = (b!=0)
        c = z3.Or(a_, b_)
        btcstack.constraints.append(c)
        btcstack.PushInt(1)
        new_stack.constraints.append(z3.Not(c))
        new_stack.PushInt(0)
        return [btcstack, new_stack]

    def OP_BOOLAND(self, btcstack):
        a = btcstack.Pop()
        b = btcstack.Pop()
        btcstack.next_pc += 1
        new_stack = copy.deepcopy(btcstack)
        a_ = (a!=0)
        b_ = (b!=0)
        c = z3.And(a_, b_)
        btcstack.constraints.append(c)
        btcstack.PushInt(1)
        new_stack.constraints.append(z3.Not(c))
        new_stack.PushInt(0)
        return [btcstack, new_stack]


    def OP_LESSTHAN(self, btcstack):
        b = btcstack.Pop()
        a = btcstack.Pop()
        btcstack.next_pc += 1
        new_stack = copy.deepcopy(btcstack)
        btcstack.constraints.append(a<b)
        btcstack.PushInt(1)
        new_stack.constraints.append(a>=b)
        new_stack.PushInt(0)
        return [btcstack, new_stack]

    def OP_GREATERTHAN(self, btcstack):
        b = btcstack.Pop()
        a = btcstack.Pop()
        btcstack.next_pc += 1
        new_stack = copy.deepcopy(btcstack)
        btcstack.constraints.append(a>b)
        btcstack.PushInt(1)
        new_stack.constraints.append(a<=b)
        new_stack.PushInt(0)
        return [btcstack, new_stack]

    def OP_LESSTHANOREQUAL(self, btcstack):
        b = btcstack.Pop()
        a = btcstack.Pop()
        btcstack.next_pc += 1
        new_stack = copy.deepcopy(btcstack)
        btcstack.constraints.append(a<=b)
        btcstack.PushInt(1)
        new_stack.constraints.append(a>b)
        new_stack.PushInt(0)
        return [btcstack, new_stack]

    def OP_GREATERTHANOREQUAL(self, btcstack):
        b = btcstack.Pop()
        a = btcstack.Pop()
        btcstack.next_pc += 1
        new_stack = copy.deepcopy(btcstack)
        btcstack.constraints.append(a>=b)
        btcstack.PushInt(1)
        new_stack.constraints.append(a<b)
        new_stack.PushInt(0)
        return [btcstack, new_stack]
        

    def OP_NOT(self, btcstack):
        a = btcstack.Pop()
        btcstack.next_pc += 1
        new_stack = copy.deepcopy(btcstack)

        con = z3.Or(a==0, a==1)

        btcstack.constraints.append(con)
        btcstack.PushInt(1-a)
        new_stack.constraints.append(z3.Not(con))
        new_stack.PushInt(0)

        return [btcstack, new_stack]

    def OP_0NOTEQUAL(self, btcstack):
        a = btcstack.Pop()
        btcstack.next_pc += 1
        new_stack = copy.deepcopy(btcstack)

        btcstack.constraints.append(a==0)
        btcstack.PushInt(0)
        new_stack.constraints.append(a!=0)
        new_stack.PushInt(1)
        
        return [btcstack, new_stack]



    def OP_ABS(self, btcstack):
        a = btcstack.Pop()
        btcstack.next_pc += 1
        new_stack = copy.deepcopy(btcstack)

        btcstack.constraints.append(a>=0)
        btcstack.PushInt(a)
        new_stack.constraints.append(a<0)
        new_stack.PushInt(-a)
    
        return [btcstack, new_stack]

    def OP_WITHIN(self, btcstack):
        max = btcstack.Pop()
        min = btcstack.Pop()
        x = btcstack.Pop()
        btcstack.next_pc += 1
        new_stack = copy.deepcopy(btcstack)

        c = z3.And(x<max, x>=min)
        btcstack.constraints.append(c)
        btcstack.PushInt(1)
        new_stack.constraints.append(z3.Not(c))
        new_stack.PushInt(0)
        return [btcstack, new_stack]

    def OP_TOALTSTACK(self, btcstack):
        a = btcstack.Pop()
        btcstack.alt_stack.append(a)
        btcstack.next_pc += 1
        return [btcstack]
    
    def OP_FROMALTSTACK(self, btcstack):
        a = btcstack.PopAlt()
        btcstack.PushInt(a)
        btcstack.next_pc += 1
        return [btcstack]

    def OP_CHECKSIGVERIFY(self, btcstack):
        self.OP_CHECKSIG(btcstack)
        self.OP_VERIFY(btcstack)
        btcstack.next_pc -= 1
        return [btcstack]

    def OP_RIPEMD160(self, btcstack):
        a = btcstack.Pop()
        symbol_name = "ripemd160_"+str(a)
        ret = z3.Int(symbol_name)
        btcstack.PushInt(ret)
        btcstack.next_pc += 1
        return [btcstack]

    def OP_CHECKMULTISIGVERIFY(self, btcstack):
        self.OP_CHECKMULTISIG(btcstack)
        self.OP_VERIFY(btcstack)
        btcstack.next_pc -= 1
        return [btcstack]

    def OP_CHECKSEQUENCEVERIFY(self, btcstack):
        a = btcstack.Pop()
        symbol_name = "sequence"
        sequence = z3.Int(symbol_name)
        constraint = (a<sequence)
        btcstack.constraints.append(constraint)
        btcstack.PushInt(a)
        btcstack.next_pc += 1
        return [btcstack]
    
    def OP_OVER(self, btcstack):
        x2 = btcstack.Pop()
        x1 = btcstack.Pop()
        btcstack.PushInt(x1)
        btcstack.PushInt(x2)
        btcstack.PushInt(x1)
        btcstack.next_pc += 1
        return [btcstack]

    def OP_CODESEPARATOR(self, btcstack):
        btcstack.next_pc += 1
        return [btcstack]

    def OP_ROT(self, btcstack):
        x3 = btcstack.Pop()
        x2 = btcstack.Pop()
        x1 = btcstack.Pop()
        btcstack.PushInt(x2)
        btcstack.PushInt(x3)
        btcstack.PushInt(x1)
        btcstack.next_pc += 1
        return [btcstack]

    def OP_2ROT(self, btcstack):
        x6 = btcstack.Pop()
        x5 = btcstack.Pop()
        x4 = btcstack.Pop()
        x3 = btcstack.Pop()
        x2 = btcstack.Pop()
        x1 = btcstack.Pop()
        btcstack.PushInt(x3)
        btcstack.PushInt(x4)
        btcstack.PushInt(x5)
        btcstack.PushInt(x6)
        btcstack.PushInt(x1)
        btcstack.PushInt(x2)
        btcstack.next_pc += 1
        return [btcstack]

def RunScript(asm, txid=None):
    # print("running", txid, asm)
    btcvm = BTCvm(asm.split(" "))
    btcvm.execute_script()
    return btcvm
