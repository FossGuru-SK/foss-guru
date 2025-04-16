---
id: dictionary
title: Python Dictionary
description: 'A Dictionary in Python is a collection data type which is unordered, mutable and indexed. In Python, dictionaries are written with curly brackets { }, and store key-value pairs.'
sidebar_position: 2
---
![banner-python](@site/static/img/kits/python/banner-python.png)

### 📚 `fun_with_python_dictionaries.md`

## 🐍 Fun with Python Dictionaries! 🧠💥

Welcome to the world of **Python Dictionaries** – where curly braces `{}` become treasure chests, and key-value pairs are your loot! ⚔️💰

A **Dictionary** in Python is like your magical backpack: unordered (so it might take a sec to find stuff), mutable (you can change what’s inside), and indexed (but in a key-unique way).

In short:  
> 🧳 Dictionary = HashTable from Java + Python’s charm + chaos of an unordered sock drawer.

---

## 1. 🧾 Creating the Dictionary

### 1.1. With Curly Braces – The OG Way

Just slap some key-value pairs inside `{}` like it’s a grocery list.

```python
# an empty dictionary
Dict = {}

# a dictionary with 3 items
Dict = {
  "Name": "sujit",
  "Age": 30,
  "Blog": "fossguru"
}

print(Dict)
```

🖨️ Output:

```py
{'Age': 30, 'Name': 'sujit', 'Blog': 'fossguru'}
```

### 1.2. Using the `dict()` Constructor – The Fancy Pants Way

Why just write curly braces when you can *summon* dictionaries using `dict()`? 🎩✨

```python
# Creating a Dictionary with dict() method
Dict = dict({1: 'Python', 2: 'Example'})
print(Dict)

# Creating a Dictionary with tuples
Dict = dict([(1, 'Python'), (2, 'Example')])
print(Dict)

# Notice that the keys are not the string literals
Dict = dict(firstName="sujit", lastName="karne", age=30)
print(Dict)
```

🖨️ Output:

```py
{1: 'Python', 2: 'Example'}
{1: 'Python', 2: 'Example'}
{'firstName': 'sujit', 'lastName': 'karne', 'age': 30}
```

---

## 2. 🔍 Accessing the Values – Show Me the Loot

Two ways to get to your precious dictionary values:

- `Dict[key]` – Classic but may scream (`KeyError`) if key is missing!
- `Dict.get(key)` – Nicer, calmer, lets you provide a backup value.

```python
Dict = {
  "name":"sujit",
  "blog":"fossguru",
  "age":30
}

print(Dict["name"])
print(Dict.get("age"))

print(Dict.get("country"))
print(Dict.get("country", "India"))
```

🖨️ Output:

```py
sujit
30
None
India
```

---

## 3. 🕵️‍♀️ Is That Key Even There?

Before opening a mystery box, make sure it exists. 🧐

### 3.1. `key in Dict`

```python
Dict = {
  "name":"sujit",
  "blog":"fossguru",
  "age":30
}

if "name" in Dict:
  print("name is present")
else:
  print("name is not present")
```

🖨️ Output:

```py
name is present
```

### 3.2. `key not in Dict`

```python
Dict = {
  "name":"sujit",
  "blog":"fossguru",
  "age":30
}

if "country" not in Dict:
  print("country is not present")
else:
  print("country is present")
```

🖨️ Output:

```py
country is not present
```

---

## 4. 🛠️ Adding / Updating the Values

New name? Different country? Dictionaries don’t mind your identity crisis.

```python
Dict = {
  "name":"sujit",
  "blog":"fossguru",
  "age":30
}
print(Dict["name"])

# Updating the name
Dict["name"] = "Alex"
print(Dict["name"])

# Updating the name with update() method
Dict.update({"name": "Brian"})
print(Dict["name"])

# Adding a new item - country
Dict.update({"country": "India"})
print(Dict["country"])
```

🖨️ Output:

```py
sujit
Alex
Brian
India
```

---

## 5. 💣 Deleting Dictionary Items

### 5.1. Using `del` – The Nuclear Option

```python
Dict = {
  "name":"sujit",
  "blog":"fossguru",
  "age":30
}
print(Dict)

# Deleting the name
del Dict["name"]
print(Dict)

# Deleting the dictionary
del Dict
print(Dict)
```

🖨️ Output:

```py
{'name': 'sujit', 'blog': 'fossguru', 'age': 30}
{'blog': 'fossguru', 'age': 30}

Traceback (most recent call last):
  File "<string>", line 14, in <module>
NameError: name 'Dict' is not defined
```

### 5.2. `pop()` – A Gentle Kick Out

```python
Dict = {
  "name":"sujit",
  "blog":"fossguru",
  "age":30
}
print(Dict)

# Deleting the name
Dict.pop("name")
print(Dict)
```

🖨️ Output:

```py
{'name': 'sujit', 'blog': 'fossguru', 'age': 30}
{'blog': 'fossguru', 'age': 30}
```

### 5.3. `clear()` – The Clean Slate

```python
Dict = {
  "name":"sujit",
  "blog":"fossguru",
  "age":30
}
print(Dict)

# Clear all the dictionary items
Dict.clear()
print(Dict)
```

🖨️ Output:

```py
{'name': 'sujit', 'blog': 'fossguru', 'age': 30}
{}
```

---

## 6. 🔁 Iterating Over Dictionary Items – For Loop Party 🎉

### 6.1. Classic `for` Loop

```python
Dict = {
  "name":"sujit",
  "blog":"fossguru",
  "age":30
}

for k in Dict:
  v = Dict[k]
  print("Key :" + k + ", Value: " + str(v))
```

🖨️ Output:

```py
Key :name, Value: sujit
Key :blog, Value: fossguru
Key :age, Value: 30
```

### 6.2. Values Only – `values()` method

```python
Dict = {
  "name":"sujit",
  "blog":"fossguru"
}

for v in Dict.values():
  print("Value :" + v)
```

🖨️ Output:

```py
Value :sujit
Value :fossguru
```

### 6.3. Full Combo – `items()` method

```python
Dict = {
  "name":"sujit",
  "blog":"fossguru"
}

for i in Dict.items():
  print(i)
  print("Key :" + i[0] + ", Value: " + i[1])
```

🖨️ Output:

```py
('name', 'sujit')
Key :name, Value: sujit

('blog', 'fossguru')
Key :blog, Value: fossguru
```

---

## 7. 🧙‍♂️ Built-in Dictionary Magic Spells (a.k.a. Methods)

| Method | Description |
|--------|-------------|
| `clear()` | Clears everything. Poof! |
| `copy()` | Makes a clone, no evil twin. |
| `fromkeys()` | Mass-produce keys with the same value. |
| `get()` | Retrieves values gently. |
| `items()` | Shows key-value pairs in a tuple outfit. |
| `keys()` | Just the keys, please. |
| `pop()` | Bye-bye specific key. |
| `popitem()` | Bye-bye last item. |
| `setdefault()` | Adds key if missing. |
| `update()` | Updates or adds stuff. |
| `values()` | Just the values, no strings attached. |

Examples? Coming right up 🍿:

```python
Dict = {"name":"sujit", "blog":"fossguru"}
Dict.clear()
print(Dict)
```

```py
{}
```

```python
Dict = {"name":"sujit", "blog":"fossguru"}
myDict = Dict.copy()
print(myDict)
```

```py
{'name': 'sujit', 'blog': 'fossguru'}
```

```python
keys = ('key1', 'key2', 'key3')
value = 0

Dict = dict.fromkeys(keys, value)

print(Dict)
```

```py
{'key1': 0, 'key2': 0, 'key3': 0}
```

```python
Dict = {"name":"sujit", "blog":"fossguru"}

print(Dict.get("name"))
```

```py
sujit
```

...and so on! You’ve got the power now 🧠⚡

---

🎉 Congrats! You're now officially a Python Dictionary Wizard! 🧙‍♀️🐍
