---
id: comments
title: Python Comments
description: 'Python Comments'
sidebar_position: 3
---
![banner-python](@site/static/img/kits/python/banner-python.png)

In Python 3, comments are super useful for explaining your code—like sticky notes to your future self or teammates. Here's how to do both **single-line** and **multi-line** comments:

## 📝 Single-line Comments

Use the `#` symbol. Everything after `#` on that line is ignored by Python.

```python
# This is a single-line comment
print("Hello, World!")  # This prints a greeting
```

---

## 📝 Multi-line Comments (Two Options)

### Option 1: Multiple `#` lines (most common and recommended)

```python
# This is a multi-line comment
# written across several lines.
# Each line starts with a '#'.
print("This works great!")
```

#### Option 2: Triple Quotes (`'''` or `"""`) — a sneaky workaround
Technically, triple quotes create a multi-line string, but if it's not assigned to anything, Python ignores it. So, it's **used like** a comment:

```python
'''
This is a multi-line comment
using triple quotes.
Not technically a comment, but it works.
'''
print("Still works fine!")

"""
This is another way using double quotes.
Used for multi-line docstrings too.
"""
```

> ⚠️ **Note:** Use triple quotes for **docstrings** (i.e., documentation for functions/classes), and `#` for real comments. Triple-quoted "comments" are still technically strings, so overuse may affect performance slightly in large scripts.

---

### ✅ Quick Summary

| Type         | Syntax                |
|--------------|------------------------|
| Single-line  | `# This is a comment`  |
| Multi-line   | `# Line 1\n# Line 2`   |
| Alt Multi-line | `''' Text '''` or `""" Text """` |

Want help commenting part of your code? Just share it—I can help 😀
