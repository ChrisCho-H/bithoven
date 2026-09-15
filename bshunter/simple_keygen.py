# The genreator that prepares a set of simple private keys and the corresponding public keys.
# Some of the usage of hash code are from the Internet/Google.


import hashlib
from ecdsa import SECP256k1, SigningKey
import sys

# 58 character alphabet used
BASE58_ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

def from_bytes (data, big_endian = False):
    if isinstance(data, str):
        data = bytearray(data)
    if big_endian:
        data = reversed(data)
    num = 0
    for offset, byte in enumerate(data):
        num += byte << (offset * 8)
    return num
    
def base58_encode(version, public_address):
    """
    Gets a Base58Check string
    See https://en.bitcoin.it/wiki/Base58Check_encoding
    """
    if sys.version_info.major > 2:
        version = bytes.fromhex(version)
    else:
        version = bytearray.fromhex(version)
    firstSHA256 = hashlib.sha256(version + public_address)
    secondSHA256 = hashlib.sha256(firstSHA256.digest())
    checksum = secondSHA256.digest()[:4]
    payload = version + public_address + checksum
    if sys.version_info.major > 2:
        result = int.from_bytes(payload, byteorder="big")
    else:
        result = from_bytes(payload, True)
    # count the leading 0s
    padding = len(payload) - len(payload.lstrip(b'\0'))
    encoded = []

    while result != 0:
        result, remainder = divmod(result, 58)
        encoded.append(BASE58_ALPHABET[remainder])

    return padding*"1" + "".join(encoded)[::-1]

def get_private_key(hex_string):
    if sys.version_info.major > 2:
        return bytes.fromhex(hex_string.zfill(64))
    else:
        return bytearray.fromhex(hex_string.zfill(64))

def get_public_key(private_key):
    
    if sys.version_info.major > 2:
        return (bytes.fromhex("04") + SigningKey.from_string(private_key, curve=SECP256k1).verifying_key.to_string())
    else:
        return (bytearray.fromhex("04") + SigningKey.from_string(private_key, curve=SECP256k1).verifying_key.to_string())

def get_public_address(public_key):
    address = hashlib.sha256(public_key).digest()
    
    h = hashlib.new('ripemd160')
    h.update(address)
    address = h.digest()
    return address

def getAddr(hex_string):
    private_key = get_private_key(hex_string)
    public_key = get_public_key(private_key)
    public_address = get_public_address(public_key)
    bitcoin_address = base58_encode("00", public_address)
    return bitcoin_address;


def generate_public_key(hex_string):
    private_key = get_private_key(hex_string)
    public_key = get_public_key(private_key)
    return public_key.hex()


def generate_public_key_hash(hex_string):
    private_key = get_private_key(hex_string)
    public_key = get_public_key(private_key)
    public_address = get_public_address(public_key)
    return public_address.hex()



def get_simple_publickeys(key_size):
    ret = []
    for i in range(1,key_size):
        if i % 1000==0:
            print("preparing simple publickeys", i)
        ret.append(generate_public_key(str(i))) 

    for i in "0123456789abcdef":
        for j in "0123456789abcdef":
            private_key_str = ""
            for k in range(32):
                private_key_str += i+j
            if int(private_key_str, 16) > 115792089237316195423570985008687907852837564279074904382605163141518161494337:
                continue
            if int(private_key_str, 16) < 1:
                continue
            pubkey = generate_public_key(private_key_str)
            ret.append(pubkey)
    return ret


def get_simple_publickeyhashes(key_size):
    ret = []
    for i in range(1,key_size):
        if i % 1000==0:
            print("preparing simple publickeyhashes", i)
        ret.append(generate_public_key_hash(str(i))) 

    for i in "0123456789abcdef":
        for j in "0123456789abcdef":
            private_key_str = ""
            for k in range(32):
                private_key_str += i+j
            if int(private_key_str, 16) > 115792089237316195423570985008687907852837564279074904382605163141518161494337:
                continue
            if int(private_key_str, 16) < 1:
                continue
            pubkeyhash = generate_public_key_hash(private_key_str)
            ret.append(pubkeyhash)

    return ret


def get_simple_addrs(key_size):
    ret = []
    for i in range(1,key_size):
        if i % 1000==0:
            print("preparing simple addresses", i)
        ret.append(getAddr(str(i))) 
    
    for i in "0123456789abcdef":
        for j in "0123456789abcdef":
            private_key_str = ""
            for k in range(32):
                private_key_str += i+j
            if int(private_key_str, 16) > 115792089237316195423570985008687907852837564279074904382605163141518161494337:
                continue
            if int(private_key_str, 16) < 1:
                continue
            addr = getAddr(private_key_str)
            ret.append(addr)
            
    # print(len(ret))
    return ret