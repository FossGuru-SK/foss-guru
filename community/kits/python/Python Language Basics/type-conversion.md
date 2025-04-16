---
id: type-conversion
title: Python Type Conversion and Type Casting
description: 'Learn implicit and explicit data type conversions in python.'
sidebar_position: 7
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## 🧙‍♂️ Python Type Conversion Magic

Ever wished Python could just *read your mind* and figure out how to turn a number into a string or a float into an octopus? 🐙 Okay, maybe not the last one—but Python **does** handle data type conversions with style (and a bit of nerdy flair). Let’s dig into this magical realm of **type conversions**! 🎩✨

---

## 1. 🌀 What is Type Conversion Anyway?

Type conversion is when Python decides to **change clothes**—that is, change a value from one type to another.

Just like how Clark Kent turns into Superman (with less spandex), a number can become a string, or an integer can become a float!

Python has two ways of pulling off these costume changes:

- 🦄 **Implicit Type Conversion**: Python says, “Don’t worry, I got this.”
- 💪 **Explicit Type Conversion**: You say, “Python, do it *this* way.”

---

## 2. 🦄 Implicit Type Conversion: Python Plays It Smart

When Python *magically* changes types on its own without asking you—voilà! That's **implicit conversion**.

It promotes smaller types to bigger ones like a thoughtful friend handing you an umbrella 🌂 when it rains. Why? To **avoid data loss**.

### 🧪 Example: int ➡️ float

```python
int_val = 11
flo_val = 1.1

flo_sum = int_val + flo_val

print("datatype of flo_sum:", type(flo_sum))
print("value of flo_sum:", flo_sum)
```

**Output:**

```py
datatype of flo_sum: <class 'float'>
value of flo_sum: 12.1
```

### ⚠️ Example: TypeError Chaos

```python
int_val = 11
str_val = "1.1"

val_sum = int_val + str_val
```

**Output:**

```py
Traceback (most recent call last):
  File "<string>", line 4, in <module>
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

💥 Boom! Python says, “Sorry, I can’t mash numbers and words together like that. I’m not a blender!” 🥤

---

## 3. 💪 Explicit Type Conversion: You Take the Wheel

Time to show Python who’s boss. With **explicit type conversion**, *you* decide how data types should be changed.

Python gives us magical spells (a.k.a. **built-in functions**) like `int()`, `str()`, `float()`, etc., to do our bidding.

### 🎩 Example: Add int + str (The Right Way)

```python
int_val = 11
str_val = "1.1"

val_sum = str(int_val) + str_val

print("datatype of val_sum:", type(val_sum))
print("value of val_sum:", val_sum)
```

**Output:**

```py
datatype of val_sum: <class 'str'>
value of val_sum: 111.1
```

Or you can go the other way—use `float()` to convert the string `"1.1"` into a float. It’s like swapping your bike for a rocket. 🚀

---

## 4. 🧰 The Wizard's Toolbox: Type Conversion Functions

Python hands you a toolbox full of handy converters. Use them wisely (or recklessly—your call 😎).

| Function       | What It Does                                            |
|----------------|---------------------------------------------------------|
| `chr(number)`  | Converts a number to its ASCII character. 🧙‍♂️          |
| `int(str, base)` | Converts string to int. Defaults to base 10. 🔢        |
| `float()`      | Converts to floating-point number. 🐠                    |
| `ord()`        | Character to integer (ASCII). 🔡 ➡️ 🔢                    |
| `hex()`        | Integer to hexadecimal. 255 becomes `'0xff'`. 💾        |
| `oct()`        | Integer to octal. 🐙                                     |
| `tuple()`      | Converts to a tuple. 📦                                 |
| `set()`        | Converts to a set (no duplicates allowed). 🚫🔁         |
| `list()`       | Converts to a list. 📋                                   |
| `dict()`       | Tuple to dictionary (ordered). 📖                        |
| `str()`        | Converts anything to string. ✍️                         |
| `complex(a,b)` | Turns numbers into complex numbers. 🧠                  |

---

## 5. 🎉 Conclusion: You Now Speak Pythonese

- Python is polite and *tries* to convert types for you. That’s **implicit** conversion.
- Sometimes Python needs a little nudge—enter **explicit** conversion.
- Not all types get along. Try converting between cats and dogs at your own risk. 🐱+🐶❌
- Implicit = safe (no data loss). Explicit = dangerous but powerful (data loss possible).

```python
float_val = 5.9
int_val = int(float_val)  # Uh oh, goodbye decimals! 👋
print(int_val)  # Outputs: 5
```

Stay curious, experiment boldly, and remember: **with great power comes great `TypeError`s**! 🕸️

---

🧠 **Happy Learning, Pythonista!** 🐍✨
