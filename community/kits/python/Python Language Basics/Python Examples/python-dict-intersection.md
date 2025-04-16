---
id: python-dict-intersection
title: Python Dict Intersection - Find Common Keys
description: 'Python examples to find common keys between two dictionaries i.e. dictionary intersection items. Learn to compare two dictionaries keys and values.'
sidebar_position: 2
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## 📘 Python Dictionary Intersection

In Python, a dictionary is used to store key-value pairs. Dictionary intersection involves finding the common elements (keys or values) between two or more dictionaries.

```python
a = {'x': 1, 'y': 2, 'z': 3}
b = {'u': 1, 'v': 2, 'w': 3, 'x': 1, 'y': 2}

commonKeys = a.keys() & b.keys()
print(commonKeys)   # {'y', 'x'}

commonItems = a.items() & b.items()
print(commonItems)  # {('x', 1), ('y', 2)}
```

Python offers multiple ways to perform dictionary intersections. Let’s dive into some of the common techniques.

## 1. 🔗 Dictionary Intersection using `&` Operator

The simplest method to find the intersection of keys, values or items is to use `&` (ampersand) operator between two dictionaries. This operator creates a new dictionary containing only the key-value pairs that are common to both dictionaries.

In the following example, when we convert a dictionary to a set using `set()`, it considers only the keys of the dictionary and discards any duplicate keys. When we use the `&` operator to perform the set intersection operation between `setA` and `setB`, it results in a new set `setOfCommonKeys` containing keys that exist in both dictionaries.

```python
dictA = { 'x' : 1, 'y' : 2, 'z' : 3 }
dictB = { 'u' : 1, 'v' : 2, 'w' : 3, 'x'  : 1, 'y': 2 }

# commonKeys = dictA.keys() & dictB.keys()
# print(commonKeys)   # {'y', 'x'}

setA = set(dictA)
setB = set(dictB)

setOfCommonKeys = setA & setB
print(setOfCommonKeys)  # Prints {'x', 'y'}
```

We can use this operator with other collection types to write more robust code as well.

## 2. 📌 Dictionary Intersection using `set.intersection()`

In Python, the `set.intersection()` method returns a set that contains the items that exist in both Set `a` and Set `b`.

```python
dictA = { 'x' : 1, 'y' : 2, 'z' : 3 }
dictB = { 'u' : 1, 'v' : 2, 'w' : 3, 'x'  : 1, 'y': 2 }

setA = set(dictA)
setB = set(dictB)

setOfCommonKeys = setA.intersection(setB)

print(setOfCommonKeys)  # Prints {'x', 'y'}
```

## 3. 🧮 Dictionary Intersection using `collections` Module

The `collections` module in Python provides the `Counter` class, which can be used to find the intersection of dictionaries.

```python
from collections import Counter

dictA = { 'x' : 1, 'y' : 2, 'z' : 3 }
dictB = { 'u' : 1, 'v' : 2, 'w' : 3, 'x'  : 1, 'y': 2 }

common_keys = (Counter(dictA) & Counter(dictB)).keys()

print(set(common_keys))  # Prints {'x', 'y'}
```


## 4. 🧠 Dictionary Intersection using Comprehension

One of the most straightforward ways to find common keys between dictionaries is by using dictionary comprehension.

When given two dictionaries `dict1` and `dict2`, using dictionary comprehension, we iterate through the keys of `dict1` and check if each key exists in `dict2`. If a key is found in both dictionaries, we add it to the `common_keys` dictionary along with its value.

```python
dictA = { 'x' : 1, 'y' : 2, 'z' : 3 }
dictB = { 'u' : 1, 'v' : 2, 'w' : 3, 'x'  : 1, 'y': 2 }

common_keys = {key: dictA[key] for key in dictA if key in dictB}

print(common_keys)  # Prints {'x': 1, 'y': 2}
```

💬 Drop me your questions related to checking if two dictionaries have the same keys in Python.

🧠 **Happy Learning !!**
