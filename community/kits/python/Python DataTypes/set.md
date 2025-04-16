---
id: set
title: Python Set
description: 'Python Sets are unordered collections of unique elements.'
sidebar_position: 5
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## 🐍 Let's Get Set-ting in Python! 🎉

**Sets in Python** are like that exclusive club where no duplicates are allowed, everyone is unindexed, and things are delightfully unordered. In this guide, we’re going to laugh, learn, and become *set-it-and-forget-it* pros!

---

## 1. 🧠 What is a Set?

Imagine a magical bag that:

- Randomly stores **unique, hashable** items 🧙
- Doesn’t believe in order or indexing 🚫📦
- Is defined using curly braces `{}` or the `set()` constructor

**Example? Absolutely!**

```python
# Curly curly, quite swirly
nameSet = {"alex", "brian", "charles"}

# The more verbose cousin
nameSet = set(("alex", "brian", "charles"))
```

🔍 Under the hood, sets are powered by dictionaries (yeah, that nerdy kid with superpowers from next door).

⚠️ **No mutables allowed** – lists and dictionaries are bouncers-denied. But tuples and immutable sets? Come on in!

---

## 2. 👀 Getting Values from a Set

### 2.1. 🌀 Loop-de-loop with `for`

No indexes, no slices, just pure looping love:

```python
nameSet = {"alex", "brian", "charles"}
for name in nameSet:
    print(name)
```

📦 **Output**:

```py
alex
brian
charles
```

### 2.2. 🕵️ Check Membership with `in`

```python
nameSet = {"alex", "brian", "charles"}

print("brian" in nameSet)
print("david" in nameSet)
```

🔍 **Output**:

```py
True
False
```

---

## 3. ➕ Adding Items Like a Pro

Need to add more people to your no-duplicate party?

- `add()` → adds **one** item
- `update()` → adds **many**

```python
nameSet = {"alex", "brian", "charles"}

nameSet.add("david")
print(nameSet)

nameSet.update(["evan", "frank", "george"])
print(nameSet)
```

🎉 **Output**:

```py
{'alex', 'charles', 'brian', 'david'}
{'brian', 'alex', 'david', 'frank', 'george', 'charles', 'evan'}
```

---

## 4. ➖ Removing Items Like a Ninja

### Choose your weapon wisely

- `remove()` – throws tantrum if item doesn’t exist ❌
- `discard()` – chill and quiet even if item is missing 😌
- `pop()` – removes and returns a surprise gift 🎁
- `clear()` – wipes the slate clean 🧽
- `del` – blows it into oblivion 💥

```python
nameSet = {"alex", "brian", "charles", "evan", "frank"}

nameSet.remove("frank")
print(nameSet)

nameSet.discard("evan")
print(nameSet)

name = nameSet.pop()
print(name)
print(nameSet)

nameSet.clear()
print(nameSet)

del nameSet
print(nameSet)
```

💣 **Output**:

```py
{'evan', 'alex', 'charles', 'brian'}
{'alex', 'charles', 'brian'}
alex
{'charles', 'brian'}
set()
Traceback (most recent call last):
  File "<string>", line 17, in <module>
NameError: name 'nameSet' is not defined
```

---

## 5. 🫱 Set Union – Combining Superpowers

Want to merge two sets into a mega-set?

```python
nameSet1 = {"alex", "brian", "charles"}
nameSet2 = {"evan", "frank"}

setUnion = nameSet1.union(nameSet2)
print(setUnion)
```

🧬 **Output**:

```py
{'charles', 'frank', 'alex', 'evan', 'brian'}
```

---

## 6. 🧰 Python Set Toolbox – Methods You Gotta Know

Let’s tour the Set theme park 🎢:

### 6.1. `add()` – Add a Friend

```python
nameSet = {"alex", "brian", "charles"}
nameSet.add("david")
print(nameSet)
```

📦 Output: `{'alex', 'brian', 'charles', 'david'}`

---

### 6.2. `clear()` – Clean Slate

```python
nameSet = {"alex", "brian", "charles"}
nameSet.clear()
print(nameSet)
```

🧽 Output: `set()`

---

### 6.3. `copy()` – Clone Wars

```python
nameSet = {"alex", "brian", "charles"}
copySet = nameSet.copy()
print(copySet)
```

🪞 Output: `{'alex', 'brian', 'charles'}`

---

### 6.4. `difference()` – What’s Missing?

```python
nameSet1 = {"alex", "brian", "charles"}
nameSet2 = {"alex", "brian", "david"}
diffSet = nameSet1.difference(nameSet2)
print(diffSet)
```

❓ Output: `{'charles'}`

---

### 6.5. `difference_update()` – Get Rid of the Overlap

```python
nameSet1 = {"alex", "brian", "charles"}
nameSet2 = {"alex", "brian", "david"}
nameSet1.difference_update(nameSet2)
print(nameSet1)
```

🧹 Output: `{'charles'}`

---

### 6.6. `discard()` – Politely Say Goodbye

```python
nameSet = {"alex", "brian", "charles"}
nameSet.discard("charles")
print(nameSet)
```

🚪 Output: `{'alex', 'brian'}`

---

### 6.7. `intersection()` – What Do We Have in Common?

```python
nameSet1 = {"alex", "brian", "charles"}
nameSet2 = {"alex", "brian", "david"}
diffSet = nameSet1.intersection(nameSet2)
print(diffSet)
```

🎯 Output: `{'alex', 'brian'}`

---

### 6.8. `intersection_update()` – Keep Only What’s Shared

```python
nameSet1 = {"alex", "brian", "charles"}
nameSet2 = {"alex", "brian", "david"}
nameSet1.intersection_update(nameSet2)
print(nameSet1)
```

🎛 Output: `{'alex', 'brian'}`

---

### 6.9. `isdisjoint()` – Are We Totally Different?

```python
nameSet1 = {"alex", "brian", "charles"}
nameSet2 = {"alex", "brian", "david"}
result = nameSet1.isdisjoint(nameSet2)
print(result)
```

🙅 Output: `False`

---

### 6.10. `issubset()` – Is This Set Part of the Cool Gang?

```python
nameSet1 = {"alex", "brian"}
nameSet2 = {"alex", "brian", "charles"}
result = nameSet1.issubset(nameSet2)
print(result)
```

👨‍👦 Output: `True`

---

### 6.11. `issuperset()` – Am I the Boss Here?

```python
nameSet1 = {"alex", "brian"}
nameSet2 = {"alex", "brian", "charles"}
result = nameSet1.issuperset(nameSet2)
print(result)
```

📉 Output: `False`

---

### 6.12. `pop()` – Surprise! You’re Gone

```python
nameSet = {"alex", "brian", "charles"}
print(nameSet.pop())
print(nameSet)
```

🎁 Output:

```py
alex
{'charles', 'brian'}
```

---

### 6.13. `remove()` – Bye, You

```python
nameSet = {"alex", "brian", "charles"}
nameSet.remove("alex")
print(nameSet)
```

🗑 Output: `{'charles', 'brian'}`

---

### 6.14. `symmetric_difference()` – What’s Not in Both?

```python
nameSet1 = {"alex", "brian", "charles"}
nameSet2 = {"alex", "brian", "david"}
result = nameSet1.symmetric_difference(nameSet2)
print(result)
```

🔄 Output: `{'david', 'charles'}`

---

### 6.15. `symmetric_difference_update()` – Forget the Common Stuff

```python
nameSet1 = {"alex", "brian", "charles"}
nameSet2 = {"alex", "brian", "david"}
nameSet1.symmetric_difference_update(nameSet2)
print(nameSet1)
```

🧠 Output: `{'david', 'charles'}`

---

### 6.16. `union()` – Combine Like Superheroes

```python
nameSet1 = {"alex", "brian", "charles"}
nameSet2 = {"alex", "brian", "david"}
result = nameSet1.union(nameSet2)
print(result)
```

🦸 Output: `{'alex', 'brian', 'david', 'charles'}`

---

### 6.17. `update()` – I’ll Take It All

```python
nameSet1 = {"alex", "brian", "charles"}
nameSet2 = {"alex", "brian", "david"}
nameSet1.update(nameSet2)
print(nameSet1)
```

📈 Output: `{'alex', 'brian', 'david', 'charles'}`

---

## 🎓 Happy Learning, You Set Superstar! 💫
