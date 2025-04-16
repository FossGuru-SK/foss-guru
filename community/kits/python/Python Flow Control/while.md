---
id: while
title: Python while Loop (with Examples)
description: 'Learn to execute Python statement(s) as long as a condition is True with the help of python while loop.'
sidebar_position: 3
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## 🐍 Python `while` Loop – The Fun Way

Welcome to the world of *loopy logic*! 😄  
Let’s talk about Python’s `while` loop — the loop that just **keeps going**... until it’s told to stop.

## 1. 🌀 The `while` Loop

A `while` loop repeats a block of code *as long as* a certain condition remains `True`.  
Think of it like watching episodes of your favorite show until Netflix asks, “Are you still watching?”

**Use Case?**  
When you don’t know how many times something needs to run, but you're willing to keep going till some condition says, "That's enough!"

### Example: Print numbers from 1 to 5

```python
i = 1
n = 5
while i <= n:
  print(i)
  i += 1
```

**Program Output:**

```py
1
2
3
4
5
```

Here’s what’s happening:

- `i` starts at 1.
- As long as `i <= 5`, we keep printing and incrementing `i`.
- Once `i` hits 6, the condition becomes `False`, and the loop bails out.

⚠️ **Warning:**  
If you forget to update `i`, this loop could go on forever — and you may end up staring at your screen until the end of time. 🕰️

Oh, and remember: Python *loves indentation*. Get it wrong and Python throws a tantrum. 😤

---

## 2. 🎬 `while` Loop + `else` Statement

Yes, you read that right — `while` loops have `else` clauses too!  
The `else` block kicks in when the loop condition becomes `False` (and NOT when broken out early).

### Example

```python
i = 1
while i <= 5:
  print(i)
  i += 1
else:
  print('The while loop ends')
```

**Program Output:**

```py
1
2
3
4
5
The while loop ends
```

👋 It’s like the loop’s way of saying goodbye once it’s done looping.

---

## 3. 💥 `break` – Emergency Exit

The `break` statement lets you *bail out of the loop early*.  
Perfect for those “I’m done here” moments.

### Example1

```python
i = 1
while i <= 5:
  print(i)
  if i == 3:
    break
  i += 1
print("Statement after while loop")
```

**Program Output:**

```py
1
2
3
Statement after while loop
```

Notice: The loop *could* have gone till 5, but we slammed the brakes at 3. 🛑

---

## 4. ⏭️ `continue` – Skip and Move On

Sometimes you don’t want to exit the loop — you just want to skip a single iteration and keep going.  
Enter: `continue`.

### Example: Print only odd numbers

```python
i = 0
while i <= 5:
  i += 1
  if i % 2 == 0:
    continue
  print(i)
print("Statement after while loop")
```

**Program Output:**

```py
1
3
5
Statement after while loop
```

Even numbers are given the cold shoulder here. ❄️  
When `i` is even, we skip the `print` and go back to the top of the loop.

---

🎉 That’s a wrap on Python `while` loops!

Got questions? Loop back to me anytime! 😉

Happy Learning & Happy Looping! 🚀
