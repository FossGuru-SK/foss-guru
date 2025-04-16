---
id: variables
title: Python Variables (with Examples)
description: 'In Python tutorial, learn the basics of variables, naming conventions, and the difference between local and global variables with examples.'
sidebar_position: 4
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## 🐍 Python Variables: The Cool Kid’s Guide 🎩

Welcome to the world of **Python variables** — where data gets stored, changed, juggled, and sometimes even misplaced (oops). Think of a variable as your pet jar that holds jellybeans (or maybe integers, strings, lists...).

In this epic journey, you’ll learn the essentials of variables, naming rituals, the mystery of scopes (local vs. global), and a few sorcerer-level tricks like chained assignments. Buckle up!

---

## 🏷️ 1. Python Variable Naming Convention

Before you name your variable `GandalfTheGray`, there are a few sacred scrolls (rules) you should honor:

- 🥇 Must start with a **letter (a-z, A-Z)** or an **underscore (_)**.
- 🔢 Can include **letters, numbers, and underscores** (party mix).
- 🔠 **Case-sensitive!** `myVariable` ≠ `myvariable`.
- 🚫 Avoid using Python’s holy reserved words like `if`, `for`, `while`, etc.
- 🌐 Unicode is welcome! You can name a variable `π` or `名字` if that’s your jam.

---

## 🧪 2. Declaring a Variable in Python

Python is chill — you don’t have to scream the data type like in other languages. Just throw a value at a name, and boom 💥 — you’ve got a variable.

### 🎯 2.1 Simple Variable Assignments

```python
# Assigning an integer value to a variable
age = 25

# Assigning a string value to a variable
name = "Alice"

# Assigning a list of numbers to a variable
scores = [90, 85, 88, 92]
```

Wanna be fancy?

```python
author = 'Sujit'
blogName = "FOSS GURU"
```

Single or double quotes — your choice. Python isn’t picky like some people on dating apps.

---

### 🔗 2.2 Chained Assignments

Want to clone a value across multiple variables like a boss? Do this:

```python
i = j = k = 20

print(i)  # prints 20
print(j)  # prints 20
print(k)  # prints 20
```

Now all your variables are twins. Or triplets. Or quadruplets. You get the idea.

---

### 🧙‍♂️ 2.3 Declaring Multiple Variables in One Line

Why write three lines when one will do?

```python
x, y, z = 10, 20, 30

print("x:", x)
print("y:", y)
print("z:", z)
```

Perfect for when you're unpacking a treasure chest (aka list/tuple) 🧳

---

### 🔁 2.4 Variable Re-declaration

Python’s flexible. Today `index` is a number, tomorrow it’s a string. Who are we to judge?

```python
index = 10
index = 20
index = "NA"  # index is now a string variable

print(index)  # prints NA
```

You can change its type faster than a cat changes its mind.

---

## 🧠 3. Local vs Global Variables

A tale of two kingdoms: **Localandia** and **Globalopolis**. 🎭

---

### 🏠 3.1 Local Variable

Born and raised inside a function. They don’t know what the outside world looks like.

```python
def my_function():
    x = 10
    print("Inside the function, x =", x)

my_function()
```

Outside the function? `x` is a ghost. 👻

---

### 🌍 3.2 Global Variable

This is your loud neighbor who shows up everywhere.

```python
y = 20

def my_function():
    global y
    print("Inside the function, y =", y)
    y = 30  # changing the neighborhood!

my_function()
print("Outside the function, y =", y)
```

Output:

```py
Inside the function, y = 20
Outside the function, y = 30
```

⚠️ **Best Practice Tip:** Avoid modifying globals like it’s a buffet. Keep them sacred unless you really must.

---

## 🔥 4. Variable Examples You’ll Actually Use

Let’s do some real-life wizardry 🧙

---

### 🧮 4.1 Calculating Area of a Rectangle

```python
length = 10
width = 5
area = length * width

print("The area of the rectangle is:", area)
```

Yup, we’re all architects now 🏗️

---

### 🧩 4.2 Concatenating Strings

```python
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name

print("Full Name:", full_name)
```

Now go build your very own name generator 💡

---

### 🍎 4.3 Working with Lists

```python
fruits = ["apple", "banana", "cherry"]
print("Second fruit:", fruits[1])
fruits.append("orange")
print("Updated list of fruits:", fruits)
```

Python lists: Your digital fruit basket 🧺

### ❓ Drop Your Variable Questions

Got doubts? Confusions? Existential crises related to variables? Hit me up!

**Happy Learning & May Your Variables Always Be Bug-Free!** 🚀🐍
