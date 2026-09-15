# The genreator that prepares a set of impossible public keys and hashes.
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
    ##print("first sha256: %s"%firstSHA256.hexdigest().upper())
    secondSHA256 = hashlib.sha256(firstSHA256.digest())
    ##print("second sha256: %s"%secondSHA256.hexdigest().upper())
    checksum = secondSHA256.digest()[:4]
    payload = version + public_address + checksum
    ##print("Hex address: %s"%binascii.hexlify(payload).decode().upper())
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
    # this returns the concatenated x and y coordinates for the supplied private address
    # the prepended 04 is used to signify that it's uncompressed
    if sys.version_info.major > 2:
        return (bytes.fromhex("04") + SigningKey.from_string(private_key, curve=SECP256k1).verifying_key.to_string())
    else:
        return (bytearray.fromhex("04") + SigningKey.from_string(private_key, curve=SECP256k1).verifying_key.to_string())

def get_public_address(public_key):
    address = hashlib.sha256(public_key).digest()
    ##print("public key hash256: %s"%hashlib.sha256(public_key).hexdigest().upper())
    h = hashlib.new('ripemd160')
    h.update(address)
    address = h.digest()
    ##print("RIPEMD-160: %s"%h.hexdigest().upper())
    return address

def getAddr(hex_string):
    private_key = get_private_key(hex_string)
    public_key = get_public_key(private_key)
    public_address = get_public_address(public_key)
    bitcoin_address = base58_encode("00", public_address)
    return bitcoin_address;

def get_impossible_addrs():
    ret = []
    for i in "0123456789abcdef":
        for j in "0123456789abcdef":
            public_key_str = i+j
            public_key = bytes.fromhex(public_key_str)
            public_address = get_public_address(public_key)
            bitcoin_address = base58_encode("00", public_address)
            #print(public_key_str, bitcoin_address)
            ret.append(bitcoin_address) 
    for i in "0123456789abcdef":
        for j in "0123456789abcdef":
            public_key_str = ""
            for k in range(32):
                public_key_str += i+j
            public_key = bytes.fromhex(public_key_str)
            public_address = get_public_address(public_key)
            bitcoin_address = base58_encode("00", public_address)
            #print(public_key_str, bitcoin_address)
            ret.append(bitcoin_address) 
    for i in "0123456789abcdef":
        for j in "0123456789abcdef":
            public_address_str = "00000000000000000000000000000000000000"+i+j
            public_address = bytes.fromhex(public_address_str)
            bitcoin_address = base58_encode("00", public_address)
            #print(public_address_str, bitcoin_address)
            ret.append(bitcoin_address) 
    for i in "0123456789abcdef":
        for j in "0123456789abcdef":
            public_address_str = ""
            for k in range(20):
                public_address_str += i+j
            public_address = bytes.fromhex(public_address_str)
            bitcoin_address = base58_encode("00", public_address)
            #print(public_address_str, bitcoin_address)
            ret.append(bitcoin_address) 
    return ret




def get_impossible_publickeyandhashes():
    ret = []
    for i in "0123456789abcdef":
        for j in "0123456789abcdef":
            public_key_str = i+j
            public_key = bytes.fromhex(public_key_str)
            public_key_hash = get_public_address(public_key).hex()
            ret.append(public_key) 
            ret.append(public_key_hash) 
    for i in "0123456789abcdef":
        for j in "0123456789abcdef":
            public_key_str = ""
            for k in range(32):
                public_key_str += i+j
            public_key = bytes.fromhex(public_key_str)
            public_key_hash = get_public_address(public_key).hex()
            ret.append(public_key) 
            ret.append(public_key_hash) 
    for i in "0123456789abcdef":
        for j in "0123456789abcdef":
            public_address_str = "00000000000000000000000000000000000000"+i+j
            public_address = bytes.fromhex(public_address_str)
            public_key_hash = public_address.hex()
            ret.append(public_key_hash) 
    for i in "0123456789abcdef":
        for j in "0123456789abcdef":
            public_address_str = ""
            for k in range(20):
                public_address_str += i+j
            public_address = bytes.fromhex(public_address_str)
            public_key_hash = public_address.hex()
            ret.append(public_key_hash)
    return ret

