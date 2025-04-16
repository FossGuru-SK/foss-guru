---
id: introducation
title: Python Code Samples
description: 'Read, understand, and practice these Python examples to better understand the Python language.'
sidebar_position: 1
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## 🐍 Python Basic Examples

Read, understand, and practice these Python examples to better understand the Python language. These simple Python programs will help us understand Python’s basic programming concepts.

All the programs on this page are tested and should work on all platforms.

---

## 1. 📢 Python Program to Print Hello World

A very simple Python program that displays “Hello, World!” on the screen.

```python
print("Hello, World!")
```

---

## 2. 🔄 Python Program to Get the Dictionary Intersection

Python examples to find common items between 2 or more dictionaries i.e. dictionary intersection items.

```python
dict1 = {'a': 1, 'b': 2, 'c': 3}
dict2 = {'b': 2, 'c': 4, 'd': 5}

intersection = dict1.items() & dict2.items()
print("Common items:", intersection)
```

[More ways to achieve the same](./python-dict-intersection.md).

---

## 3. 📊 Python Program to Find the Largest or Smallest N Items

Python examples to find the largest (or the smallest) N elements from a collection of elements using `nlargest()` and `nsmallest()` functions from `heapq` library.

```python
import heapq

nums = [1, 8, 2, 23, 7, -4, 18, 23, 42, 37, 2]

largest_three = heapq.nlargest(3, nums)
smallest_three = heapq.nsmallest(3, nums)

print("3 Largest:", largest_three)
print("3 Smallest:", smallest_three)
```

[More ways to achieve the same](./python-nlargest-nsmallest.md).

---

## 4. 📦 Python Program to Unpack Tuples into Variables or Arguments

Python examples to unpack an N-element tuple or sequence into a collection of N variables.

```python
# Unpacking into variables
data = ('ACME', 50, 91.1)
name, shares, price = data

print("Name:", name)
print("Shares:", shares)
print("Price:", price)

# Unpacking into function arguments
def sample_func(x, y, z):
    print(x + y + z)

params = (10, 20, 30)
sample_func(*params)
```

[More ways to achieve the same](./python-unpack-tuple.md).

---

## 5. 🔍 Python Program to Use `max()` and `min()` Functions

Python examples to find the largest (or the smallest) item in a collection (e.g. list, set or array) of comparable elements using `max()` and `min()` methods.

```python
values = [10, 4, 23, 1, 56, 3]

max_val = max(values)
min_val = min(values)

print("Maximum value:", max_val)
print("Minimum value:", min_val)
```

---

🧠 **Happy Learning !!**
