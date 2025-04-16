---
id: strings
title: Python Strings
description: 'Learn about Python string datatype and its functions. Learn how to format, align, find length and other such useful programs and exercises.'
sidebar_position: 2
---
![banner-python](@site/static/img/kits/python/banner-python.png)

Sure! Here's a more fun, witty, and engaging version of your Python Strings guide — in **Markdown format** — keeping **all examples unchanged**. Ready for some string theory (without the physics)? 😄

## 🐍 Python Strings: The Fun-Filled Guide You Didn't Know You Needed 🎉

Welcome to the magical land of Python strings — where characters party together and do amazing things! ✨ Whether you're slicing, dicing, or formatting strings, this guide has got your back with jokes, clarity, and examples that just *click*. Let's dive in!

---

## 1. 🎈 Creating a String

Strings in Python are like the cool kids — flexible, expressive, and super useful.

- They're made of Unicode characters. Fancy, huh?
- They can be wrapped in **single quotes** `'` or **double quotes** `"` (Python doesn't play favorites).
- You can write entire novels because there’s *no limit* to the length.

```python
str = 'hello world'
str = "hello world"
```

Need a string that spans lines like Shakespeare's sonnets? Use triple quotes!

```python
str = '''Say hello
  to python
  programming'''

str = """Say hello
  to python
  programming"""
```

⚠️ Fun fact: Python doesn’t have a `char` type. Even `'a'` is a string. Talk about commitment to string life!

---

## 2. ✂️ Substring or Slicing

Want just a slice of the string pie? Use slicing!

```python
str = 'hello world'
print(str[2:5])  # llo
```

Feeling a bit negative? Use negative indexing to slice from the back like a string ninja:

```python
print(str[-5:-2])  # wor
```

---

## 3. 🎯 Strings as Arrays

Treat strings like arrays! That’s right — you can access characters with brackets.

```python
str = 'hello world'
print(str[0])  # h
print(str[1])  # e
print(str[2])  # l
```

But don’t get too bold:

```python
print(str[20])  # IndexError: string index out of range
```

Oops 😅

---

## 4. 📏 String Length

Measure your string's length like a pro tailor with `len()`:

```python
str = 'hello world'
print(len(str))  # 11
```

---

## 5. 💅 String Formatting

Add some pizzazz with placeholders `{}` and `format()`!

```python
age = 36
name = 'Lokesh'
txt = "My name is {} and my age is {}"
print(txt.format(name, age))  # My name is Lokesh and my age is 36
```

Positional arguments? Python’s got you:

```python
txt = "My age is {1} and the name is {0}"
print(txt.format(name, age))  # My age is 36 and the name is Lokesh
```

---

## 6. 🛠️ String Methods

### 6.1. `capitalize()`

Because *everyone* deserves to feel important:

```python
name = 'lokesh gupta'
print(name.capitalize())  # Lokesh gupta

txt = '38 yrs old lokesh gupta'
print(txt.capitalize())  # 38 yrs old lokesh gupta
```

### 6.2. `casefold()`

Turns *ANYTHING* lowercase — even uppercase rage:

```python
txt = 'My Name is Lokesh Gupta'
print(txt.casefold())  # my name is lokesh gupta
```

### 6.3. `center()`

Line up and look sharp, string! 🎯

```python
txt = "hello world"
x = txt.center(20)
print(x)  # '    hello world     '
```

### 6.4. `count()`

How often does a letter appear? Let’s count 'em:

```python
txt = "hello world"
print(txt.count("o"))         # 2
print(txt.count("o", 4, 7))   # 1
```

### 6.5. `encode()`

Speak computer? This one translates your string:

```python
txt = "My name is åmber"
x = txt.encode()
print(x)  # b'My name is \xc3\xa5mber'
```

### 6.6. `endswith()`

Check how your string signs off:

```python
txt = "hello world"
print(txt.endswith("world"))   # True
print(txt.endswith("planet"))  # False
```

### 6.7. `expandtabs()`

Tabs getting out of hand? Reign them in!

```python
txt = "hello\tworld"
print(txt.expandtabs(2))   # 'hello world'
print(txt.expandtabs(4))   # 'hello   world'
print(txt.expandtabs(16))  # 'hello           world'
```

### 6.8. `find()`

Like playing hide-and-seek with characters:

```python
txt = "My name is Lokesh Gupta"
x = txt.find("e")
print(x)  # 6
```

### 6.9. `format()`

Same magic as earlier — insert values smoothly.

```python
age = 36
name = 'Lokesh'
txt = "My name is {} and my age is {}"
print(txt.format(name, age))
```

### 6.10. `format_map()`

Use a dictionary like a formatting wizard 🧙:

```python
params = {'name':'Lokesh Gupta', 'age':'38'} 
txt = "My name is {name} and age is {age}"
x = txt.format_map(params)
print(x)
```

### 6.11. `index()`

Like `find()` but with a temper (throws errors when not found):

```python
txt = "My name is Lokesh Gupta"
print(txt.index("e"))  # 6
```

```python
txt.index("z")  # ValueError: substring not found
```

### 6.12. `isalnum()`

Letters + numbers = ✅

```python
print("LokeshGupta".isalnum())     # True
print("Lokesh Gupta".isalnum())    # False
```

### 6.13. `isalpha()`

All alphabets, all the time:

```python
print("LokeshGupta".isalpha())       # True
print("Lokesh Gupta".isalpha())      # False
print("LokeshGupta38".isalpha())     # False
```

### 6.14. `isdecimal()`

Strictly digits — no decimals allowed here! 🚫

```python
print("12345".isdecimal())      # True
print("123.45".isdecimal())     # False
```

### 6.15. `isdigit()`

More flexible than `isdecimal()`:

```python
print("12345".isdigit())        # True
print("1234\u00B2".isdigit())   # True
```

### 6.16. `isidentifier()`

Want a legit variable name? Check it:

```python
print("Lokesh_Gupta_38".isidentifier())    # True
```

### 6.17. `islower()`

All lowercase? Say no more:

```python
print("lokesh_gupta".islower())  # True
```

### 6.18. `isnumeric()`

Even exponents and Unicode numerals are welcome here:

```python
print("1234\u00B2".isnumeric())  # True
```

### 6.19. `isprintable()`

Can your string make it to a printed page?

```python
print("Lokesh\tGupta".isprintable())  # False
```

### 6.20. `isspace()`

Only spaces? Yup, it's a thing.

### 6.21. `istitle()`

Title Case — like a book title:

```python
print("Lokesh Gupta".istitle())  # True
```

### 6.22. `isupper()`

All caps? SHOUTING? You bet.

```python
print("LOKESH GUPTA".isupper())  # True
```

### 6.23. `join()`

Join the string gang with a cool separator:

```python
myTuple = ("Lokesh", "Gupta", "38")
x = "#".join(myTuple)
print(x)  # Lokesh#Gupta#38
```

### 6.24. `ljust()`

Left-align like a polite string:

```python
txt = "lokesh"
x = txt.ljust(20, "-")
print(x)  # lokesh--------------
```

(🎉 End of this wacky, wonderful string ride!)

---

## 🏁 Conclusion

Strings in Python are more than just words — they're tools, toys, and treasures waiting to be explored. So keep slicing, formatting, and playing around. After all, code should be fun! 🧑‍💻💃
