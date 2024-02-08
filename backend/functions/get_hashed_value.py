from cryptography.hazmat.primitives import hashes

def get_hashed_value(string):
  string = string.encode()
  digest = hashes.Hash(hashes.SHA256())
  digest.update(string)
  hash_value = digest.finalize()
  return hash_value.hex()
