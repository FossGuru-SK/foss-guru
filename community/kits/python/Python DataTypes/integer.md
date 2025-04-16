---
id: integer
title: Python Integer (with Examples)
description: 'In Python, the int data type (integer) represents whole numbers that can be positive or negative and can have unlimited precision.'
sidebar_position: 1
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## 🧠 Python Integers – The Whole (Number) Truth with a Twist! 🎢

In Python, `int` stands for “integer” — and it's the rockstar of the number world 🎸.  
These are the whole numbers — no fractions, no decimals, just solid digits from the land of +, –, and 0️⃣.

Oh, and Python integers? They don’t believe in limits.  
Big dreams, big numbers. 💪

---

## 🎯 Quick Snippet: Let's Play with Some Integers

```python
# Declaring integers
x = 5
y = -10

# Performing arithmetic operations
sum_result = x + y  
difference_result = x - y  
multiplication_result = x * y  
quotient_result = x / y  

# Exponentiation
power_result = x ** 2      # Raises x to the power of 2

# Modulo operation
remainder_result = x % 3       # Computes the remainder when x is divided by 3
```

---

## 1️⃣ What in the World is an Integer in Python?

Python `int`s are:

- Whole numbers — no decimal drama allowed.  
- Can be good (positive), bad (negative), or just... neutral (zero 😐).  
- Can be *REALLY* huge — Python doesn't mind.  
- Can use underscores `_` to look cooler and more readable.
- Great for doing math tricks: +, –, *, / — bring it on!

```python
x = 10
y = 12345678987654321
z = 12_34_56

print(x)   # 10
print(y)   # 12345678987654321
print(z)   # 123456
```

---

## 2️⃣ Not Just Decimal: Meet Octal and Hexadecimal Friends 🎭

Python integers know how to party in different number systems too!

- **Octal**: Uses base 8, starts with `0o`, and dances with digits from 0–7.
- **Hexadecimal**: Uses base 16, starts with `0x`, and parties with 0–9 + A–F (or a–f).

```python
octalInt = 0o22
hexInt = 0xAA

print(octalInt)  # 18
print(hexInt)  # 170
```

⚠️ Note: No exponential showoffs here — octal and hex like to keep things grounded.

---

## 3️⃣ Let's Get Mathy – Arithmetic Operations 🎲

### 3.1 ➕➖✖️➗ Basic Operations

Python math is super chill and familiar. But watch out — `/` gives a **float**, even if it *looks* like an integer division.

Use `//` if you want to chop off the decimal part like a boss 😎.

```python
x = 22
y = 5

print (x + y)   # Prints 27
print (x - y)   # Prints 17
print (x * y)   # Prints 110

print (x / y)   # Prints 4.4
print (x // y)   # Prints 4
print (x % y)   # Prints 2
print ( divmod(x, y) ) # Prints (4, 2)
```

### 3.2 🔁 Increment and Decrement

No `++` or `--` like other languages. Python is more expressive:

```python
x = 10
y = 10

x += 1
print (x) # Prints 11

x += 5
print (x) # Prints 16

y -= 1
print (y) # Prints 9

y -= 5
print (y) # Prints 4
```

Python: "Why type two plus signs when one `+=` will do?"

### 3.3 🌠 Exponents – Power Up

Need to raise something to the power of something else? Say no more:

```python
x = 10
y = 2

print (x ** y) # Prints 100
```

Boom 💥 Instant math wizardry.

---

## 4️⃣ What Am I? Check My Type! 🕵️‍♂️

Python lets you double-check types — great for when you're debugging and second-guessing your variables like "Are you *really* an int?"

### Using `isinstance()` – The Friendly Detective

```python
x = 42

if isinstance(x, int):
    print("x is an integer")
else:
    print("x is not an integer")
```

### Using `type()` – The Straight Shooter

```python
x = 42

if type(x) is int:
    print("x is an integer")
else:
    print("x is not an integer")
```

---

## 5️⃣ Turning Integers into Strings (Without Magic)

Need to turn a number into a wordy thing?  
Use `str()` to charm your integer into a string!

```python
integer_value = 42

string_value = str(integer_value)
```

Want to jazz it up for display?

```python
formatted_string = "The number is {}".format(integer_value)
```

Now that’s some well-dressed data. 👔

---

## 6️⃣ Turning Strings into Integers (a bit risky ⚠️)

Use `int()` to try turning a string into an actual number.

```python
string_value = '10'

int_value = int( string_value )  # 10
```

But be careful! Not all strings are numeric:

```python
string_value = "abc"

try:
    integer_value = int(string_value)
    print(integer_value)
except ValueError:
    print(f"Cannot convert '{string_value}' to an integer.")
```

Avoid the crash. Handle it like a pro. 👨‍💻

---

## 🏁 Conclusion: Integer League – Power Level: Unlimited ♾️

Integers in Python are:

- Fast 🏎️  
- Powerful 💪  
- Versatile 🎩  
- Limitless (literally) 🌌  

Whether you're counting sheep 🐑 or building rocket software 🚀, Python `int`s are always ready to crunch numbers for you.

Happy Number-Crunching! 🎉
