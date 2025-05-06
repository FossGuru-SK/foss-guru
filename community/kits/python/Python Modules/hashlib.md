---
id: hashlib
title: Python hashlib
description: 'Learn to calculate the Hash of a file in Python, with examples. It is also called the file checksum or digest.'
sidebar_position: 2
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## 🧪 Python File Hashing: Or How to Give Your Files a Digital Fingerprint 🔍

Ever wish you could tell if a file's been tampered with, like a secret agent checking for bugs in their phone? 💼🔎 That’s where **file hashes** come in! They’re like a file's unchangeable signature (unless the file *is* changed 👀).

In this laughably serious tutorial, you’ll:

- Learn what a hash/checksum/digest is (spoiler: not a gym move).
- See how to use Python’s `hashlib` module like a pro.
- Generate file hashes that look as secure as Fort Knox 🔐.

> 📚 **Read More (but not now)**: [File checksum in Java]  
> (Because if it's not Java, is it really a programming tutorial?)

---

## 1. 🧠 What Are Hash Algorithms?

A **hash function** is a cryptographic spell 🧙‍♂️ that takes any input and returns a fixed-length string of gibberish that’s always the same for the same input — no matter how many times you run it!

Why is that cool?

- It's used to store passwords **without actually storing passwords** 🔒.
- It lets you verify if a file was altered during transmission (a.k.a. anti-hacker wizardry).
- It makes your app look 10x smarter with just one import.

So the next time you’re transferring a top-secret file, don’t forget to pass its hash along for a security handshake 🤝. If the hash matches, it’s legit. If it doesn’t—RUN! 🏃‍♀️💨

---

## 2. 🔍 `hashlib` — Your Python Hashing Toolbox

Python makes hashing easier than reheating pizza 🍕. Just use the built-in `hashlib` module.

### Wanna see all the cool algorithms it supports?

```python
import hashlib

print(hashlib.algorithms_guaranteed)
```

🖨️ **Output:**

```python
{'shake_256', 'sha1', 'blake2s', 'sha3_224', 'sha512', 
 'sha3_256', 'sha224', 'sha256', 'sha3_384', 
 'sha384', 'blake2b', 'sha3_512', 'shake_128', 'md5'}
```

These aren’t spell names from Hogwarts—they’re cryptographic power tools 💥.

---

## 3. 🧑‍💻 Python File Hash Examples

Let’s get our hands dirty and generate some serious hashes! 🔐

---

### 🥇 Example 1: SHA256 — The Gold Standard of File Hashing

This is like the Schwarzenegger of hash functions. Strong. Reliable. Future-proof.

```python
import hashlib # hashlib module
import os.path # For file handling
from os import path
 
def hash_file(filename):
 
  if path.isfile(filename) is False:
    raise Exception("File not found for hash operation") 
 
  # make a hash object
  h_sha256 = hashlib.sha256()
 
  # open file for reading in binary mode
  with open(filename,'rb') as file:
 
    # read file in chunks and update hash
    chunk = 0
    while chunk != b'':
      chunk = file.read(1024) 
      h_sha256.update(chunk)
 
  # return the hex digest
  return h_sha256.hexdigest()
 
####### Example Usage
message = hash_file("Python")
print(message)
```

🖨️ **Output:**

```python
8964ed69cac034a6bc88ad33089500b6a26a62f19e1574f2f8fbfddeb9a30667
```

Not bad, huh? That’s one solid, chunky hash 🧱.

---

### ⚠️ Example 2: SHA1 — The “Hey Grandpa” of Hashing (Not Recommended)

SHA1 had its time, but it's now mostly used by museums and retro computing enthusiasts.

```python
import hashlib # hashlib module
import os.path # For file handling
from os import path
 
def hash_file(filename):
 
  if path.isfile(filename) is False:
    raise Exception("File not found for hash operation") 
 
  # make a hash object
  h = hashlib.sha1()
 
  # open file for reading in binary mode
  with open(filename,'rb') as file:
 
    # read file in chunks and update hash
    chunk = 0
    while chunk != b'':
      chunk = file.read(1024) 
      h.update(chunk)
 
  # return the hex digest
  return h.hexdigest()
 
####### Example Usage
message = hash_file("Python")
print(message)
```

🖨️ **Output:**

```python
498fd2d318447f9d0fac30c6e0997c03861c679b
```

Yep, it still works… but maybe stick to SHA256, unless you're feeling nostalgic 🧓.

---

### 🚫 Example 3: MD5 — The Retired Champion of the Internet (Also Not Recommended)

MD5 used to be cool until hackers got really good at math. Now it’s just hanging out in the cryptographic nursing home 🧓📼.

```python
import hashlib # hashlib module
import os.path # For file handling
from os import path
 
def hash_file(filename):
 
  if path.isfile(filename) is False:
    raise Exception("File not found for hash operation") 
 
  # make a hash object
  md5_h = hashlib.md5()
 
  # open file for reading in binary mode
  with open(filename,'rb') as file:
 
    # read file in chunks and update hash
    chunk = 0
    while chunk != b'':
      chunk = file.read(1024) 
      md5_h.update(chunk)
 
  # return the hex digest
  return md5_h.hexdigest()
 
####### Example Usage
message = hash_file("Python")
print(message)
```

🖨️ **Output:**

```python
ee6dcaf64b270667125a33f9b7bebb75
```

Nice try, MD5. You were great in the ‘90s. But it’s 2025. Go home, you’re drunk.

---

## 🥳 That’s a Wrap

You now know how to:

- Create file hashes with Python like a cryptographic ninja 🥷
- Compare digests like a detective 🕵️
- Avoid outdated algorithms that are basically made of tissue paper 🧻

Now go forth, protect your files, and throw SHA256 at anyone who tries to mess with them.

Happy Hashing! 🔐🚀
