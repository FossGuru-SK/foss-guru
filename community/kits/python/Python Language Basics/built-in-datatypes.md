---
id: data-types
title: Python Built-in Data Types
description: 'A data type defines the type of a variable. In this guide, we’ll explore some of the most commonly used built-in data types in Python with examples.'
sidebar_position: 6
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## Python's Built-in Data Types: A Fun and Witty Guide

Welcome to the whimsical world of Python's built-in data types! In Python, everything is an object, which means data types are actually classes, and variables are instances of these classes. Think of it as a grand masquerade ball where variables don the costumes of their respective data type classes. Let's embark on this entertaining journey through Python's most commonly used built-in data types, sprinkled with humor and practical examples.

## 1. Built-in Data Types: The Grand Overview

Python comes with a delightful assortment of built-in data types, ready to cater to your every whim:

| Category           | Data types / Class names                        |
|--------------------|-------------------------------------------------|
| Text/String Types  | `str`                                           |
| Numeric Types      | `int`, `float`, `complex`                       |
| Sequence Types     | `list`, `tuple`, `range`                        |
| Mapping Types      | `dict`                                          |
| Set Types          | `set`, `frozenset`                              |
| Boolean Types      | `bool`                                          |
| Binary Types       | `bytes`, `bytearray`, `memoryview`              |
| None Type          | `NoneType`                                      |

Now, let's dive deeper into each of these fascinating types.

## 2. String Type: The Chatterbox

Strings are sequences of characters enclosed in single, double, or triple quotes. Triple quotes are especially handy for those verbose, multi-line strings that just can't stop talking.

```python
name = "Alice"
greeting = 'Hello, World!'
```

Strings love to mingle. You can concatenate them to form new strings or slice them to get a substring:

```python
message = name + ", " + greeting  # Concatenation
print(message)  # Prints: Alice, Hello, World!

substring = message[0:5]
print(substring)  # Prints: Alice
```

## 3. Numeric Types: The Number Crunchers

Python offers three main numeric types, each with its own quirks:

- **`int`**: The stalwart integer, holding signed numbers of unlimited length. It's like a bottomless pit for whole numbers.
- **`float`**: The floating-point number, accurate up to 15 decimal places. Perfect for when you need that extra precision.
- **`complex`**: The enigmatic complex number, containing both real and imaginary parts. For when reality just isn't enough.

Examples:

```python
x = 2
x = int(2)

y = 2.5
y = float(2.5)

z = 100 + 3j
z = complex(100 + 3j)
```

## 4. Sequence Types: The Organized Collectors

Sequence types are the Marie Kondos of Python, keeping elements in order:

- **`list`**: An ordered sequence enclosed in square brackets. Lists are versatile and can hold items of different types, even other lists. They bring joy to your data organization.

  ```python
  my_list = [1, 'apple', 3.14, [4, 5]]
  ```

- **`tuple`**: Similar to lists but immutable, meaning once they're set, they can't be changed. Tuples are the reliable, unchanging friends in your code.

  ```python
  my_tuple = (1, 'apple', 3.14)
  ```

- **`range`**: Represents an immutable sequence of numbers, often used for looping a specific number of times in for loops. It's like a number line at your disposal.

  ```python
  my_range = range(1, 6)  # Represents numbers from 1 to 5 (inclusive)
  ```

## 5. Mapping Type: The Key-Value Matchmaker

**`dict`** (short for dictionary) is Python's built-in mapping type, a collection of key-value pairs enclosed in curly braces. It's like a matchmaking service, pairing keys with their corresponding values.

```python
person = {'name': 'Alice', 'age': 30}
grades = {'math': 95, 'history': 85, 'science': 90}
```

## 6. Set Types: The Unique Collectors

Sets are collections of unique items, perfect for when you want to avoid duplicates:

- **`set`**: An unordered collection of unique items enclosed within curly braces. Think of it as a guest list where no one gets invited twice.

  ```python
  num_set = {1, 2, 3, 4, 5}
  char_set = {'a', 'b', 'c'}
  ```

- **`frozenset`**: The immutable sibling of `set`. Once created, it can't be changed, making it hashable and usable as a key in dictionaries. It's like a guest list set in stone.

  ```python
  immutable_set = frozenset([1, 2, 3])
  ```

## 7. Boolean Type: The Truth Seekers

Booleans represent truth values, either `True` or `False`. They're the judges in the court of conditional statements.

```python
x = True
y = False

print(x)  # True
print(y)  # False

print(bool(1))  # True
print(bool(0))  # False
```

## 8. Binary Types: The Byte Wranglers

When dealing with binary data, Python offers:

- **`bytes`**: An immutable sequence of bytes, perfect for handling binary data like files or network communication.

  ```python
  my_bytes = b'Hello, World!'
  ```

- **`bytearray`**: A mutable sequence of bytes, allowing in-place modification. Great for when you need to tweak binary data on the fly.

  ```python
  my_bytearray = bytearray([72, 101, 108, 108, 111])
  ```

- **`memoryview`**: Provides a view into the memory of another binary object without copying it. Efficient for large data manipulation.

  ```python
  data = bytearray([1, 2, 3, 4, 5])
  mem_view = memoryview(data)
  ```

## 9. None Type: The Mysterious Absence

**`None`** represents the absence of a value, like a placeholder for nothingness. It's Python's way of saying, "There's nothing here."

```python
no_value = None
```

## 10. How to Check the Data Type of a Variable?

Curious about a variable's data type? Python's `type()` function is here to satisfy your curiosity.

```python
x = 5
print(type(x))  # <class 'int'>

y = 'fossgurusujit.com'
print(type(y))  # <class 'str'>
```

## 11. Conclusion

Understanding Python's built-in data types is like getting to know the characters in a play. Each has its own role, quirks, and interactions. Mastering them will make you a more effective and joyful Python programmer.

Happy Coding! 🎉
