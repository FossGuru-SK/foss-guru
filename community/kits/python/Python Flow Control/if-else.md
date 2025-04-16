---
id: if-else
title: Python if … elif … else Statements
description: 'Learn about Python conditional statements if, elif, else statements, indentation rules and shorthand if statements with examples.'
sidebar_position: 1
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## 🐍 Python Control Flow – The "Ifs", "Elses" & Dramatic Twists 🎭

Ever wondered how Python decides what to do when it's torn between choices? 🤔  
Meet the **Conditional Statements** – the dramatic decision-makers of Python!  
These include `if`, `if...else`, and `if...elif` – Python's way of saying *"Choose your destiny!"*

---

## 🧠 Quick Brain Teaser

```python
a = 0

if a > 0:
    print("a is greater than 0")
elif a < 0:
    print("a is less than 0")
else:
    print("a is 0")
```

Just like your mood on a Monday morning, Python checks whether `a` is feeling high, low, or just neutral.

---

## 1. Using `if` – The Curious Checker 🤓

Python's `if` is like that nosy friend who checks if something is true, then spills the beans.

```python
a = 10
b = 20

if b > a:
  print("b is greater than a")      #Prints this message
```

### 1.1. 🪜 Mind the Indentation

Unlike other languages that use curly braces (`{}`), Python loves to keep things clean and indented. Think of it like polite formatting – mess it up, and Python gets passive-aggressive (aka throws errors).

### 1.2. 🤝 Teamwork with Logical Operators

Want to combine forces like Avengers? Use:

- `and` – both conditions must be true 🟢🟢
- `or` – at least one condition must be true 🟢🔴

```python
a = 10
b = 20
c = 30

if b > a and c > a:
  print("b and c are greater than a")   #Prints this message
```

### 1.3. 😎 One-Liner Coolness: Shorthand `if`

Why write a full-blown if block when you can whisper it in one line?

```python
if b > a: print("b is greater than a")
```

Perfect for when you're in a hurry or want to look fancy in front of your colleagues.

---

## 2. Using `if...else` – Python's Plan B 💡

If Python checks a condition and it turns out false, it goes:

> "No worries, I’ve got a backup plan!" – *Python, probably.*

```python
a = 100
b = 20

if b > a:
  print("b is greater than a")
else:
  print("b is smaller than a")     #Prints this message
```

Now in **shorthand** style – because we’re too cool for multiline sometimes:

```python
a = 100
b = 20

print("b is greater than a") if (b > a) else print("b is smaller than a")  #Prints 'b is smaller than a'
```

---

## 3. `elif` – Python's Backup of the Backup 🚨

`elif` is like saying:

> "Okay, if Plan A didn’t work… maybe Plan B?"

```python
x = 100
y = 200
z = 300

if y < x:
 print('y is less than x')
elif y < z:
 print('y is less than z')  #Prints this message
```

Each condition is checked in order until Python finds the one that hits the jackpot. 🎰

---

## 4. 🕵️‍♀️ Nested `if...else` – The Russian Dolls of Logic

You can hide `if` inside another `if` like secrets in a mystery novel. It’s called nesting.

```python
a = 20

if a > 10:
    print("a is greater than 10") #Prints this message
    if a < 20:
        print("a is less than 20")
    else:
        print("a is equal to 20")    #Prints this message
```

You can nest as deep as your heart (and indentation) desires. Just don’t forget where you are 😵‍💫.

---

## 5. Empty `if` – When You’ve Got Nothing to Say 🤐

Python won’t let you ghost an `if`. If you really have nothing to do, just say:

> "pass" – like a chill reply in a group chat.

```python
x = 100
y = 200

if x < y:
 pass
```

No drama, no action. Just vibes.

---

## 🎉 Happy Learning, You Code Ninja! 🐍💻

Remember: Python's `if`, `else`, and `elif` are your tools to tame logic beasts.  
Use them wisely, and may your conditions always be `True`! 😉
