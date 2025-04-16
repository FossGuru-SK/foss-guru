---
id: tuple
title: Python Tuples
description: 'In Pyhton, a tuple is similar to list except it is immutable and are written with optional round brackets.'
sidebar_position: 4
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## 🐍 Python Tuples: The Chill Cousins of Lists 🎉

In Python-land, a tuple is like that chill friend who doesn’t change their mind. Think of it as a list… but with a “do not disturb” sign! 🚫✏️

Tuples are:

- ✅ **Immutable** (Once you make it, you can't shake it!)
- 📚 **Ordered** (It remembers its position)
- 🎭 **Heterogeneous** (Mix 'n match any data types!)
- 🔢 **Indexed** (Starts at 0, as usual)
- 🥚 **(Optionally) Parenthesized** (Parentheses are optional, but preferred – like wearing socks with shoes)
- ⚡ **Fast** when looping (because they’re low-maintenance)

Tuples are great when you want to pack related stuff together like... employee info! 👩‍💼👨‍💼

---

## 🎬 1. Creating a Tuple

Let’s roll!

```python
tuple1 = ()  # empty tuple
tuple2 = (1, "2", 3.0)
tuple3 = 1, "2", 3.0  # parentheses are optional
```

---

### 🎯 1.1. Tuple with One Item

Beware: Without a trailing comma, Python thinks you're just being dramatic with brackets!

```python
not_a_tuple = ("hello")      # Just a string
tuple_with_one = ("hello",)  # Now that’s a tuple!
```

---

### 🎁 1.2. Nested Tuples

Tuples within tuples — like inception but in Python.

```python
nested_tuple = ("hello", ("python", "world"))
```

---

## 🔍 2. Accessing Tuple Items

Use indices inside square brackets. Python’s counting starts at zero. Let’s do a mini treasure hunt! 🗺️

```python
Tuple = ("a", "b", "c", "d", "e", "f")

print(Tuple[0])    # 'a'
print(Tuple[-1])   # 'f'
print(Tuple[0:3])  # ('a', 'b', 'c')

Tuple = ("a", "b", "c", ("d", "e", "f"))
print(Tuple[3][1])  # 'e'
```

---

## 🔄 3. Looping through Tuples

Simple as pie 🥧

```python
Tuple = ("a", "b", "c")

for item in Tuple:
    print(item)
```

---

## ❓ 4. Existence Check

Check if an item exists with `in` or `not in` – your tuple’s bouncer at the club 🚷

```python
Tuple = ("a", "b", "c")

if "a" in Tuple:
    print("Yup, 'a' is in the house!")

if "x" not in Tuple:
    print("'x' got denied at the tuple-door.")
```

---

## 🧼 5. Sorting a Tuple

Want to sort your tuple? Use `sorted()` to keep things neat (note: returns a list, not a tuple!).

```python
Tuple = ("a", "c", "b", "e", "d")

sortedTuple = sorted(Tuple)
print(sortedTuple)  # ['a', 'b', 'c', 'd', 'e']
```

---

## 🔁 6. Repetition & Concatenation

Multiply or add tuples like a magician 🎩✨

```python
Tuple = ("a", "b")
print(Tuple * 3)  # ('a', 'b', 'a', 'b', 'a', 'b')

Tuple1 = ("a", "b")
Tuple2 = ("c", "d")
print(Tuple1 + Tuple2)  # ('a', 'b', 'c', 'd')
```

---

## 🎁 7. Packing & Unpacking Tuples

**Packing**: wrapping gifts 🎁  
**Unpacking**: opening them 🎉

```python
Tuple = ("a", "b", "c")  # Packing

x, y, z = Tuple          # Unpacking
print(x)  # 'a'
print(y)  # 'b'
print(z)  # 'c'
```

> ⚠️ Warning: Mismatched items will throw a tantrum (a.k.a. ValueError)

---

## 👩‍🔬 8. Named Tuples (Supercharged Tuples!)

NamedTuples from `collections` are like tuples with name tags! 💼

```python
import collections

Record = collections.namedtuple('Record', ['id', 'name', 'date'])

r1 = Record('1', 'RecordName', '12/12/2020')

print(r1[0])       # '1'
print(r1.name)     # 'RecordName'
```

---

## 🛠️ 9. Tuple Utility Methods

Let’s bring out the tuple toolbox 🧰

### ✅ 9.1 `any()`

```python
print(any(()))         # False
print(any((1,)))       # True
```

### 🏆 9.2 `min()` & 9.3 `max()`

```python
Tuple = (4, 1, 9)
print(min(Tuple))      # 1
print(max(Tuple))      # 9
```

### 📏 9.4 `len()`

```python
print(len(Tuple))      # 3
```

### ➕ 9.5 `sum()`

```python
print(sum(Tuple))      # 14
```

---

## 🎉 10. Conclusion

Tuples are:

- 🧱 Immutable (can’t be changed)
- 🧠 Ordered and Indexed
- 🎨 Heterogeneous
- 🚀 Faster for iteration

NamedTuples = Tuples + Superpowers.  
Tuples = Lists but stricter, faster, and cooler 😎

Happy Tuple-ing! 🐍🎈
