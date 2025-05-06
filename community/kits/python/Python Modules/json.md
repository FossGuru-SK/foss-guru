---
id: json
title: Python JSON
description: 'Learn to read a JSON file in Python with the help of json.load() method which reads the data into a Python object.'
sidebar_position: 4
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## 🧠 How to Read JSON in Python Without Losing Your Sanity (or Your Data)

Welcome to the world of `json.load()` – your best pal when it comes to unboxing JSON files into shiny Python objects! Whether you’re building apps, scraping data, or just trying to figure out what that mysterious `data.json` file actually holds… this guide is for YOU.

Buckle up. It's about to get *deserializational* 😎

---

## 🔍 TL;DR – Show Me the Code

If you’re the kind of person who opens gifts before reading the card, here’s your quick-start gift:

```python
import json
 
with open('file_dir_location/data.json') as fp:
  data = json.load(fp)
 
# The data is of type 'dict'
print(data)
```

👆 Boom! You just read a JSON file and converted it into a Python object like a pro. 🎩✨

---

## 🧬 1. What on Earth is `json.load()`?

Glad you asked! `json.load()` is like your bilingual buddy who reads JSON and translates it into Python.

### 🎓 Translation Guide: JSON to Python

| JSON         | Python     |
|--------------|------------|
| `object`     | `dict`     |
| `array`      | `list`     |
| `string`     | `str`      |
| `number (int)` | `int`    |
| `number (real)` | `float` |
| `true`       | `True`     |
| `false`      | `False`    |
| `null`       | `None`     |

Basically, `json.load()` turns this:

```json
{"name": "AI Bot", "age": 3, "isSmart": true}
```

Into this:

```python
{'name': 'AI Bot', 'age': 3, 'isSmart': True}
```

It’s like magic… but better, because it’s Pythonic.

---

## 🧪 2. Reading JSON Files – Let’s Get Our Hands Dirty

### 🧾 Example 1: Reading a JSON File from the Filesystem

Suppose you have a file named `users.json` that looks like this:

```json
[
    {
        "id": 1,
        "name": "Sujit",
        "username": "Sujit",
        "email": "Sujit@gmail.com"
    },
    {
        "id": 2,
        "name": "Brian",
        "username": "brian",
        "email": "brian@gmail.com"
    }
]
```

Your Python script can read it like this:

```python
import json
 
with open('users.json') as fp:
  data = json.load(fp)
 
# list
print(type(data))
 
# Verify read data
print(data)
```

🖨️ Program output:

```python
<class 'list'>

[{'id': 1, 'name': 'Sujit', 'username': 'Sujit', 'email': 'Sujit@gmail.com'}, 
 {'id': 2, 'name': 'Brian', 'username': 'brian', 'email': 'brian@gmail.com'}]
```

📌 **Note:** The root of the JSON is an array, so Python loads it as a list of dictionaries. It’s like a digital address book, but without the annoying paper cuts.

---

### 🌍 Example 2: Reading a JSON File from the Interwebs

Because sometimes your data lives far, far away (in the Cloud ☁️).

We'll use the trusty `requests` library — think of it as your HTTP butler.

```python
import json
import requests
 
response = requests.get("https://jsonplaceholder.typicode.com/users")
users = json.loads(response.text)
 
print(users)
```

🎁 Program output:
We won’t spoil the surprise here. Run the program to see a list of 10 beautiful JSON objects—each representing a fake user.

But here’s a sneak peek:

```json
[{'id': 1, 'name': 'Leanne Graham', 'username': 'Bret', 'email': 'Sincere@april.biz'}, ... ]
```

Yes, it’s fake data, but hey, it works great for testing and learning!

---

## 🎉 Conclusion: Go Forth and Deserialize

Now you know how to:

- Read JSON from a file like a code wizard 🧙
- Talk to web servers and grab JSON from URLs 📡
- Transform raw JSON into structured Python data 🐍

So next time someone says "can you parse this JSON?", you can smile smugly and say:

> “Absolutely. Would you like that loaded or pretty-printed?”

Happy Learning & Stay JSON-tastic! 💾✨
