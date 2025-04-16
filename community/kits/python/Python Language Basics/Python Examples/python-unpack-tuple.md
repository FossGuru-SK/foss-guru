---
id: python-unpack-tuple
title: Python Unpack Tuple with Variable Length
description: 'Python example to unpack tuple or sequence or iterable such that the tuple may be longer than N elements, causing a “too many values to unpack” exception.'
sidebar_position: 4
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## Tuple Unpacking with Variable Length in Python

In Python, we can unpack a tuple with a variable length using **star expressions** (also known as **extended unpacking**). If the number of variables doesn’t match the number of values, it can raise a `"too many values to unpack"` exception.

---

## 1. Unpack a Tuple with Variable Length

**Star expressions**, introduced in Python 3, allow us to assign parts of a tuple to variables while collecting the rest into a list using the `*` operator.

### Example

```python
# Example tuple with a variable length
my_tuple = (1, 2, 3, 4, 5)

# Unpack the first two elements and collect the rest in another variable
first, second, *rest = my_tuple

# Print the results
print("First:", first)
print("Second:", second)
print("Rest:", rest)
```

**Output:**

```py
First: 1  
Second: 2  
Rest: [3, 4, 5]
```

We can use the star expression at **various positions** in variable assignments to dynamically collect elements — at the beginning, middle, or end.

### Another Example

```python
# Example tuple with a variable length
my_tuple = (1, 2, 3, 4, 5)

# Collect the first two elements, skip the third, and collect the rest
first, second, *skip, last = my_tuple

# Print the results
print("First:", first)
print("Second:", second)
print("Last:", last)
print("Skipped:", skip)
```

**Output:**

```py
First: 1  
Second: 2  
Last: 5  
Skipped: [3, 4]
```

---

## 2. Unpack Tuple and Ignore Unwanted Values

Sometimes, we may want to ignore specific elements in a tuple. In such cases, we can use the **underscore (`_`)** as a placeholder to discard values.

### Example1

```python
# Example tuple with unwanted values
my_tuple = (1, 2, 3, 4, 5)

# Unpack the tuple and ignore unwanted values
first, _, third, _, _ = my_tuple

# Print the values you're interested in
print("First:", first)
print("Third:", third)
```

---

## 3. Error: Too Many Values to Unpack

This error occurs when the number of variables on the left-hand side of the assignment doesn’t match the number of values in the tuple, **and you're not using a star expression**.

### Problematic Example

```python
my_tuple = (1, 2, 3, 4, 5)

first, second, third = my_tuple  # ❌ Too many values
```

**Error Output:**

```py
Traceback (most recent call last):
  File "<string>", line 3, in <module>
ValueError: too many values to unpack (expected 3)
```

---

**✅ Tip:** Always use `*rest` when you're unsure about the number of elements in the tuple or want to collect extras cleanly.

---

Happy Learning! 🎉
