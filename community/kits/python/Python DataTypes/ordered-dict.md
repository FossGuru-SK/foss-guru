---
id: ordered-dictionary
title: Python OrderedDict
description: 'Learn the differences between a dictionary and OrderedDict, and also how to create, update and delete the items from the Python OrderedDict.'
sidebar_position: 6
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## 🐍 Python's OrderedDict – Order With a Splash of Sass

Ever felt like your regular dictionary just didn’t respect the **order of things**? Like that one coworker who always jumps the lunch queue? Well, say hello to `OrderedDict` – the VIP list of dictionaries where **order is everything**.

Let’s dive into the wild world of `OrderedDict` with examples, jokes, and a sprinkle of Pythonic charm.

---

## 🎯 Quick Reference

```python
from collections import OrderedDict

user = OrderedDict(name='sujit', id='100', email='admin@gmail.com')

# Iteration
for key in user:
    print(key + ":" + user[key])
    
# Add a Key at the last
user['location'] = 'India'

# Update a Key
user['email'] = 'admin@fossgurusujit.com'

# Delete a Key
del user['email']

# Pop item from last and start
user.popitem()  # from last of dictionary
user.popitem(last=False) # from start of dictionary

# Move item to last and start
user.move_to_end('id')  # move to last
user.move_to_end('id', False)   # move to start
```

---

## 1. 🧠 What in the World is an OrderedDict?

An `OrderedDict` is like that super organized friend who remembers everything – in order! It’s a subclass of `dict` that keeps keys in the exact order you shoved them in. Unlike the old-school `dict` (pre-3.7), which used to just throw your data around like confetti at a wedding.

> ⚠️ Keeping order does come at a cost – **50% more memory**, but hey, it’s the price of class.

---

## 2. 🛠️ Creating Your Fancy OrderedDict

Let’s summon one from the depths of `collections`:

```python
from collections import OrderedDict
```

🎉 Now create one:

```python
user = OrderedDict()
user['name'] = 'sujit'
user['id'] = 100
user['email'] = 'admin@gmail.com'

print(user)
# OrderedDict([('name', 'sujit'), ('id', 100), ('email', 'admin@gmail.com')])
```

Or flex your constructor muscles:

```python
user = OrderedDict(name='sujit', id=100, email='admin@gmail.com')
print(user)
# OrderedDict([('name', 'sujit'), ('id', 100), ('email', 'admin@gmail.com')])
```

🔧 Need a default value for multiple keys? `fromkeys()` got you:

```python
keys = ['id', 'name', 'email']
user = OrderedDict.fromkeys(keys, 0)
```

---

## 3. 🔁 Marching Through an OrderedDict Like a Boss

Loop it like a pro, folks:

```python
user = OrderedDict(name='sujit', id="100", email='admin@gmail.com')

# Using keys directly
for key in user:
    print(key + ":" + user[key])

for key in user.keys():
    print(key + ":" + user[key])

# Using items (because you're fancy)
for key, value in user.items():
    print(key + ":" + value)
```

Output like poetry:

```python
name:sujit
id:100
email:admin@gmail.com
name:sujit
id:100
email:admin@gmail.com
name:sujit
id:100
email:admin@gmail.com
```

---

## 4. ✍️ Add, Zap, and Morph Keys Like a Dict Wizard

Because `OrderedDict` is mutable, you can do all the usual key sorcery:

```python
user = OrderedDict(name='sujit', id=100, email='admin@gmail.com')
user['location'] = 'India'
print(user)
# OrderedDict([('name', 'sujit'), ('id', 100), ('email', 'admin@gmail.com'), ('location', 'India')])
```

🧪 Updating values won’t mess up the order:

```python
user['email'] = 'admin@fossgurusujit.com'
```

🗑️ Delete that key like it never existed:

```python
del user['email']
```

---

## 5. 🌐 JSON – Now With Preserved Sass

Need that order preserved in JSON too? `OrderedDict` won’t let you down:

```python
from collections import OrderedDict
import json

d = OrderedDict()
d['how'] = 1
d['to'] = 2
d['do'] = 3
d['in'] = 4
d['java'] = 5

json.dumps(d)
# '{"how": 1, "to": 2, "do": 3, "in": 4, "java": 5}'
```

Even your JSON wears a tuxedo now.

---

## 6. ⚖️ OrderedDict vs. dict – Let’s Rumble

Let’s settle this showdown:

### 6.1 🎯 `move_to_end()` – Because Sometimes Keys Need a Vacation

Want to move keys around like a boss? You got this.

```python
user = OrderedDict(name='sujit', id="100", email='admin@gmail.com')
user.move_to_end('id')
# Now 'id' is at the end
user.move_to_end('id', False)
# Now 'id' is back at the front
```

```python
print(user)
# OrderedDict([('id', '100'), ('name', 'sujit'), ('email', 'admin@gmail.com')])
```

### 6.2 🧹 `popitem()` – Gentle Kicking Out From Either End

In a regular `dict`, `popitem()` just tosses the last item. OrderedDict? It gives you options, like a fancy coffee shop.

```python
user = OrderedDict(name='sujit', id="100", email='admin@gmail.com')
print(user.popitem())           # ('email', 'admin@gmail.com')
print(user.popitem(last=False)) # ('name', 'sujit')
```

---

## 7. 🎓 That’s a Wrap

In this whirlwind of a tutorial, you’ve learned:

- What an OrderedDict is (fancy!)
- How to create one (with style!)
- How to loop, update, and delete (like a pro!)
- Differences with regular `dict` (OrderedDict wins on class)

> Keep your dictionaries classy and **in order**.  
> Happy Coding, Pythonistas! 🐍💻
