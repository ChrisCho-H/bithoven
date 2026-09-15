import json
from tracer import Tracer

def trace_target_vulnerability(vulnerability):    
    print("trace", vulnerability, "start")

    outputs = json.loads(open("TxOutputJson/"+vulnerability+".json").read())

    trace_info = {
        "total_cnt" : len(outputs),
        "spent_cnt" : 0,
        "vulnerable_spent_cnt" : 0,
        "total_amount" : 0,
        "spent_amount" : 0,
        "vulnerable_spent_amount" : 0,
    }

    if vulnerability =="unbinded_txid":
        tracer = Tracer()
        for output in outputs:
            trace_info["total_amount"] += output["Value"]
            if output["SpentTrace"] != None:
                trace_info["spent_cnt"] += 1
                trace_info["spent_amount"] += output["Value"]
                is_vulnerable_spent = tracer.trace_unbinded_txid(output)
                if is_vulnerable_spent:
                    trace_info["vulnerable_spent_cnt"] += 1
                    trace_info["vulnerable_spent_amount"] += output["Value"]
                    
                
    if vulnerability =="useless_sig":
        tracer = Tracer()
        for output in outputs:
            trace_info["total_amount"] += output["Value"]
            if output["SpentTrace"] != None:
                trace_info["spent_cnt"] += 1
                trace_info["spent_amount"] += output["Value"]
                is_vulnerable_spent = tracer.trace_useless_sig(output)
                if is_vulnerable_spent:
                    trace_info["vulnerable_spent_cnt"] += 1
                    trace_info["vulnerable_spent_amount"] += output["Value"]

    if vulnerability =="simple_key":
        tracer = Tracer(simple_key_size=1000000)
        for output in outputs:
            trace_info["total_amount"] += output["Value"]
            if output["SpentTrace"] != None:
                trace_info["spent_cnt"] += 1
                trace_info["spent_amount"] += output["Value"]
                is_vulnerable_spent = tracer.trace_simple_key(output)
                if is_vulnerable_spent:
                    trace_info["vulnerable_spent_cnt"] += 1
                    trace_info["vulnerable_spent_amount"] += output["Value"]

    if vulnerability =="uncertain_sig": 
        tracer = Tracer()
        for output in outputs:
            trace_info["total_amount"] += output["Value"]
            if output["SpentTrace"] != None:
                trace_info["spent_cnt"] += 1
                trace_info["spent_amount"] += output["Value"]
                is_vulnerable_spent = tracer.trace_uncertain_sig(output)
                if is_vulnerable_spent:
                    trace_info["vulnerable_spent_cnt"] += 1
                    trace_info["vulnerable_spent_amount"] += output["Value"]

    
    print("finish", vulnerability, trace_info)

    return trace_info

def start():
    print("Select the subset of Bitcoin outputs to trace:")
    print("0. All")
    print("1. Unbinded-txid")
    print("2. Simple-key")
    print("3. Useless-sig ")
    print("4. Uncertain-sig")
    select = input("Please input a number (0~4): ")

    if select == "0":
        all_info = {
            "total_cnt" : 0,
            "spent_cnt" : 0,
            "vulnerable_spent_cnt" : 0,
            "total_amount" : 0,
            "spent_amount" : 0,
            "vulnerable_spent_amount" : 0,
        }
        for vulnerability in ["simple_key", "unbinded_txid",  "useless_sig", "uncertain_sig"]:
            trace_info = trace_target_vulnerability(vulnerability)
            for key in all_info:
                all_info[key] += trace_info[key]
        print("finish all", all_info)
    elif select == "1":
        trace_target_vulnerability("unbinded_txid")
    elif select == "2":
        trace_target_vulnerability("simple_key")
    elif select == "3":
        trace_target_vulnerability("useless_sig")
    elif select == "4":
        trace_target_vulnerability("uncertain_sig")
    else:
        return start()

start()