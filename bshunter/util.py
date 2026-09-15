INT_TO_RAW = {}

def raw2int(raw_elem):
    global INT_TO_RAW
    # print("raw2int", raw_elem)
    if raw_elem == "":
        return 0
    int_elem = 0
    v = bytes.fromhex(raw_elem)
    for i in range(len(v)):
        val = v[i]
        int_elem |= int(val) << (8*i)
    if v[-1] & 0x80 != 0:
        temp =  int_elem - (int(0x80) << (8*(len(v)-1)))
        int_elem = -temp
    INT_TO_RAW[int_elem] = raw_elem
    return int_elem

def int2raw(int_elem):
    global INT_TO_RAW
    # print("int2raw", int_elem)
    if int_elem in INT_TO_RAW:
        return INT_TO_RAW[int_elem]

    if int_elem == 0:
        return "0"
    isNegative = (int_elem < 0)
    if isNegative:
        int_elem = -int_elem
    result = []
    while int_elem > 0:
        result.append(int_elem & 0xff)
        int_elem >>= 8

    if result[len(result)-1] & 0x80 != 0:
        extraByte = 0x00
        if isNegative:
            extraByte = 0x80
        result.append(extraByte)
    elif isNegative:
        result[len(result)-1] |= 0x80
    return bytes(result).hex()

def clear():
    global INT_TO_RAW
    # print(len(INT_TO_RAW))
    INT_TO_RAW = {}
