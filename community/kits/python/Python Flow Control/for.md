---
id: for
title: Python for Loop (with Examples)
description: 'Python for loop is used to iterate over a list or sequence. Follow these examples to iterate over a list, tuple, dictionary, and set using for-loop.'
sidebar_position: 2
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## 🎉 Let's Get Loopy: The Wild World of Python `for` Loops! 🐍

So you're about to dive into the magical land of Python `for` loops? Buckle up, because you're going to repeat stuff until your code is *so* efficient it basically does the work for you. Think of a `for` loop as a fancy robot that goes through each item in a sequence and does your bidding.

Python lets you `for` loop through almost *everything*:

- 🍕 List
- 🎁 Tuple
- 📚 Dictionary
- 🌀 Set
- 🧵 String
- 📏 Range

## 🧠 The Loop Blueprint

```python
for val in sequence:
    statement(s)
```

Here, `val` is the super cool intern you’ve hired to go through your sequence and handle each item one by one. When the sequence is done—boom! The loop peaces out.

---

## 1. 🤹 Python `for` Loop with List

You’ve got a list of names. You want to greet them. Let’s loop!

```python
names = ["alex", "brian", "charles"]
for x in names:
  print('Current name is :', x)
```

🖨️ Output:

```py
Current name is : alex
Current name is : brian
Current name is : charles
```

---

## 2. 🧵 Looping Through a Tuple (fancy list that can’t be changed)

```python
mytuple = ("item1", "item1", "item3")

for e in mytuple:
    print("Current item is", e)
```

🖨️ Output:

```py
Current item is item1
Current item is item1
Current item is item3
```

---

## 3. 📓 Looping Through a Dictionary

Dictionaries are like little boxes with labels and things inside. You can loop over keys, values, or both!

```python
colors_dict = {'color': 'blue', 'fruit': 'apple', 'pet': 'dog'}

for key in colors_dict.keys():
    print(key)

for item in colors_dict.items():
    print(item)
```

🖨️ Output:

```py
color
fruit
pet
('color', 'blue')
('fruit', 'apple')
('pet', 'dog')
```

---

## 4. 🔀 Looping Through a Set

Sets are like bags of random things. Order is not guaranteed. Surprises await!

```python
myset = set(["item1", "item2", "item3"])

for e in myset:
    print("Current item is", e)
```

🖨️ Output (order may vary!):

```py
Current item is item3
Current item is item2
Current item is item1
```

---

## 5. 🔤 Looping Through a String

Strings = chains of characters. Time to inspect each letter like a detective 🕵️.

```python
name = "alex"
for x in name:
  print("Current char is", x)
```

🖨️ Output:

```py
Current char is a
Current char is l
Current char is e
Current char is x
```

---

## 6. 🎯 Looping with `range()`

Want to count stuff? Say hello to `range()` — Python's built-in number line.

```python
for i in range(5):
 print(i)
```

🖨️ Output:

```py
0
1
2
3
4
```

---

## 7. ⛔ `break` and 🕺 `continue` — Drama in the Loop

### Break: "I’m done. Bye!"

```python
names = ["alex", "brian", "charles"]

print("Loop started")

for x in names:
  print(x)
  if x == "brian":
   break;

print("Loop ended")
```

🖨️ Output:

```py
Loop started
alex
brian
Loop ended
```

### Continue: "Skip this one, move along!"

```python
names = ["alex", "brian", "charles"]

print("Loop started")

for x in names:
  if x == "brian":
   continue;
  print(x) 

print("Loop ended")
```

🖨️ Output:

```py
Loop started
alex
charles
Loop ended
```

---

## 8. 🍩 `for`...`else`: The Plot Twist Ending

When the loop ends without any interruptions (`break`), the `else` gets its moment to shine.

```python
names = ["alex", "brian", "charles"]
 
for x in names:
  print(x) 
else:
  print("No name is left in the list") 
```

🖨️ Output:

```py
alex
brian
charles
No name is left in the list
```

---

Got questions? Confused by sets or strings? 🧠  
Drop me your doubts — and remember...

🐍 Happy Looping, Pythonistas! 😄
