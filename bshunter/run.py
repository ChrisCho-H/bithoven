# Runner for benchmark

import time
import json
from evaluator import SymbolicBasedEvaluator, AddressBasedEvaluator

LOG_COUNT = 100

def benchmark_target_vulnerability(vulnerability):    
    print("benchmark", vulnerability, "start")

    outputs = json.loads(open("TxOutputJson/"+vulnerability+".json").read())

    benchmark_info = {
        "total_cnt" : 0,
        "symbolic_cnt" : 0,
        "address_cnt" : 0,
        "total_amount" : 0,
        "symbolic_amount" : 0,
        "address_amount" : 0
    }

    if vulnerability == "simple_key":
        symbolic_based = SymbolicBasedEvaluator(simple_key_size=1000000)
        address_based = AddressBasedEvaluator(simple_key_size=1000000)
    else:
        symbolic_based = SymbolicBasedEvaluator()
        address_based = AddressBasedEvaluator()

    for output in outputs:
        symbolic_result = symbolic_based.EvaluateOutput(output)
        address_result = address_based.EvaluateOutput(output)

        benchmark_info["total_cnt"] += 1
        benchmark_info["total_amount"] += output["Value"]
        
        is_vulnerability = "is_"+vulnerability
        if symbolic_result[is_vulnerability]:
            benchmark_info["symbolic_cnt"] += 1
            benchmark_info["symbolic_amount"] += output["Value"]
        if address_result[is_vulnerability]:
            benchmark_info["address_cnt"] += 1
            benchmark_info["address_amount"] += output["Value"]

        if benchmark_info["total_cnt"] % LOG_COUNT ==0:
            print("benchmark", vulnerability, benchmark_info)
    
    print("finish", vulnerability, benchmark_info)

    return benchmark_info


def start():
    print("Select the subset of Bitcoin outputs to benchmark:")
    print("0. All")
    print("1. Unbinded-txid")
    print("2. Simple-key")
    print("3. Useless-sig ")
    print("4. Uncertain-sig")
    print("5. Impossible-key")
    print("6. Never-true")
    select = input("Please input a number (0~6): ")

    if select == "0":
        all_info = {
            "total_cnt" : 0,
            "symbolic_cnt" : 0,
            "address_cnt" : 0,
            "total_amount" : 0,
            "symbolic_amount" : 0,
            "address_amount" : 0
        }
        for vulnerability in ["unbinded_txid", "simple_key", "useless_sig", "uncertain_sig", "impossible_key", "never_true"]:
            benchmark_info = benchmark_target_vulnerability(vulnerability)
            for key in all_info:
                all_info[key] += benchmark_info[key]
        print("finish all", all_info)
    elif select == "1":
        benchmark_target_vulnerability("unbinded_txid")
    elif select == "2":
        benchmark_target_vulnerability("simple_key")
    elif select == "3":
        benchmark_target_vulnerability("useless_sig")
    elif select == "4":
        benchmark_target_vulnerability("uncertain_sig")
    elif select == "5":
        benchmark_target_vulnerability("impossible_key")
    elif select == "6":
        benchmark_target_vulnerability("never_true")
    else:
        return start()

start()