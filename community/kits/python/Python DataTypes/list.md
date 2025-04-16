---
id: list
title: Python Lists
description: 'In Python, lists are ordered, indexed (indices start at 0), mutable, heterogeneous (items need not be of the same type) and written CSV in square brackets.'
sidebar_position: 3
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## 🐍 Let's Get Loopy with Python Lists 🎉

Welcome to your **Python List Adventure** — where boring bullet points turn into belly laughs! Buckle up, we're about to get list-y!

---

## 🤓 What Even *Is* a List?

In Python, a list is like a magical backpack 🧳 that:

- ✅ Remembers the order you put stuff in (ordered)
- 🧮 Keeps everything neat with numbers starting from 0 (indexed)
- 🔄 Let's you swap things in and out like a mood ring (mutable)
- 🧙 Can hold a unicorn, a potato, and a disco ball all at once (heterogeneous)
- 🧱 Is created using square brackets `[]` (because... geometry!)

---

## 1️⃣ Creating a List – The Birth of Brilliance

```python
# Empty backpack
empty = []

# List of super fun subjects
listOfSubjects = ['physics', 'chemistry', "mathematics"]

# List of ID badges
listOfIds = [0, 1, 2, 3, 4]

# A random party of types
miscList = [0, 'one', 2, 'three']

# Nested mayhem: lists within lists
lists = [['A', 'B', 'C'], ['D', 'E', 'F']]
```

---

## 2️⃣ Adding Stuff – Make Your List a VIP Club 🏰

```python
charList = []

charList.append("a")  
charList.append("b")

print(charList)  # ['a', 'b']

# Insert 'c' at index 3... wait, list only has 2 items? Python’s chill with that.
charList.insert(3, "c")

print(charList)  # ['a', 'b', 'c']

# Try to insert at index 10. No explosions here.
charList.insert(10, "d")

print(charList)  # ['a', 'b', 'c', 'd']
```

---

## 3️⃣ Accessing Items – The List’s Peek-a-Boo Game 👀

```python
numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(numList[0])       # 0
print(numList[1:5])     # [1, 2, 3, 4]
print(numList[:3])      # [0, 1, 2]
print(numList[7:])      # [7, 8, 9]
print(numList[-8:-5])   # [2, 3, 4] (Reverse magic!)
```

---

## 4️⃣ Modify Like a List Surgeon 👨‍⚕️

```python
charList = ["a", "b", "c"]

charList[2] = "d"

print(charList)  # ['a', 'b', 'd']
```

---

## 5️⃣ Iterating – Say Hello to Every List Item 👋

```python
charList = ["a", "b", "c"]

for x in charList:
    print(x)
# Output:
# a
# b
# c
```

> 📌 P.S. Python’s sensitive! Indent properly or face the wrath of indentation errors.

---

## 6️⃣ Is it *In* the List or Not? The Suspense! 😱

```python
charList = ["a", "b", "c"]

if "a" in charList:
    print("a is present")

if "d" in charList:
    print("d is present")
else:
    print("d is NOT present")
```

---

## 7️⃣ Size Matters – How Long is My List? 📏

```python
charList = ["a", "b", "c"]
print(len(charList))  # 3
```

---

## 8️⃣ Delete Like a Ninja – Bye Bye Items! 👋

### 🧽 8.1 remove() – Yeet by Value

```python
charList = ["a", "b", "c"]
charList.remove("c")
print(charList)  # ['a', 'b']
```

### 🍿 8.2 pop() – Pull Out by Index or Last

```python
charList = ["a", "b", "c", "d"]
charList.pop()     # 'd' gone
print(charList)    # ['a', 'b', 'c']
charList.pop(1)    # 'b' gone
print(charList)    # ['a', 'c']
```

### 💨 8.3 clear() – List Dusting 101

```python
charList = ["a", "b", "c", "d"]
charList.clear()
print(charList)  # []
```

### 💣 8.4 del – The List Assassin

```python
charList = ["a", "b", "c", "d"]
del charList[0]
print(charList)  # ['b', 'c', 'd']
del charList
# print(charList)  # 💥 Boom! NameError
```

---

## 9️⃣ Merging Lists – When Two Become One ❤️

```python
charList = ["a", "b", "c"]
numList = [1, 2, 3]

joinedList = charList + numList
print(joinedList)  # ['a', 'b', 'c', 1, 2, 3]

charList.extend(numList)
print(charList)  # ['a', 'b', 'c', 1, 2, 3]
```

---

## 🔟 List Methods – The Fancy Toolbox 🔧

### 🧁 append()

```python
charList = ["a", "b", "c"]
charList.append("d")
print(charList)  # ['a', 'b', 'c', 'd']
```

### 🧼 clear()

```python
charList = ["a", "b", "c"]
charList.clear()
print(charList)  # []
```

### 🪞 copy()

```python
charList = ["a", "b", "c"]
newList = charList.copy()
print(newList)  # ['a', 'b', 'c']
```

### 🔢 count()

```python
charList = ["a", "b", "c"]
print(charList.count('a'))  # 1
```

### 🧩 extend()

```python
charList = ["a", "b", "c"]
numList = [1, 2, 3]
charList.extend(numList)
print(charList)  # ['a', 'b', 'c', 1, 2, 3]
```

### 🔍 index()

```python
charList = ["a", "b", "c"]
print(charList.index('a'))  # 0
```

### 🧙 insert()

```python
charList = ["a", "b", "c"]
charList.insert(3, 'd')
print(charList)  # ['a', 'b', 'c', 'd']
```

### 🍿 pop()

```python
charList = ["a", "b", "c", "d"]
charList.pop()
print(charList)  # ['a', 'b', 'c']
charList.pop(1)
print(charList)  # ['a', 'c']
```

### 🗑️ remove()

```python
charList = ["a", "b", "c", "d"]
charList.remove('d')
print(charList)  # ['a', 'b', 'c']
```

### 🔄 reverse()

```python
charList = ["a", "b", "c", "d"]
charList.reverse()
print(charList)  # ['d', 'c', 'b', 'a']
```

### 🧙‍♂️ sort()

```python
charList = ["a", "c", "b", "d"]
charList.sort()
print(charList)  # ['a', 'b', 'c', 'd']
```

---

## 🎓 That’s All, Folks! 🎬

Keep calm and `append()` on. Python lists are flexible, powerful, and fun — kinda like duct tape, but for data!

Happy Learning & Happy List-ing! 🐍🎉
