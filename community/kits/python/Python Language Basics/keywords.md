---
id: keywords
title: Python Keywords
description: 'Python Keywords'
sidebar_position: 2
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## Python Keywords: The VIPs of Your Code Party 🎉

Welcome to the whimsical world of Python keywords! Think of them as the VIP guests at your coding soirée—they have special roles and are off-limits for mundane tasks like naming your variables or functions. Let's embark on a fun-filled journey to meet these 35 distinguished characters.

## 1. How to Reveal All Keywords 🕵️‍♂️

Curious about who made it to the VIP list? Just ask Python politely:

```python
>>> help("keywords")
```

And voilà, Python spills the beans:

```py
Here is a list of the Python keywords. Enter any keyword to get more help.

False               class               from                or
None                continue            global              pass
True                def                 if                  raise
and                 del                 import              return
as                  elif                in                  try
assert              else                is                  while
async               except              lambda              with
await               finally             nonlocal            yield
break               for                 not
```

Want the inside scoop on a particular keyword? Just inquire:

```python
>>> help("break")
```

And Python will regale you with tales of the "break" statement.

## 2. Mingling with Python Keywords 🥳

Let's break the ice and get to know these keywords better, complete with some entertaining examples.

### 2.1. Value Keywords: The Truthful Trio

- **True**: The ever-optimistic one.
  
  ```python
  print(5 < 6)  # Outputs: True
  ```

- **False**: The skeptical companion.
  
  ```python
  print(5 > 6)  # Outputs: False
  ```

- **None**: The mysterious stranger representing the absence of a value.
  
  ```python
  x = None
  if x:
      print("x is True")
  elif x is False:
      print("x is False")
  else:
      print("x is None")  # Outputs: x is None
  ```

### 2.2. Operator Keywords: The Logical Crew

- **and**: The matchmaker ensuring both conditions are compatible.
  
  ```python
  x = (5 > 3 and 5 > 10)
  print(x)  # Outputs: False
  ```

- **or**: The flexible friend who accepts either condition.
  
  ```python
  x = (5 > 3 or 5 > 10)
  print(x)  # Outputs: True
  ```

- **not**: The contrarian who flips the truth.
  
  ```python
  x = False
  print(not x)  # Outputs: True
  ```

- **in**: The detective checking for membership.
  
  ```python
  fruits = ["apple", "banana", "cherry"]
  if "banana" in fruits:
      print("yes")  # Outputs: yes
  ```

- **is**: The identity inspector.
  
  ```python
  a = ["apple", "banana", "cherry"]
  b = ["apple", "banana", "cherry"]
  c = a
  print(a is b)  # Outputs: False
  print(a is c)  # Outputs: True
  ```

### 2.3. Flow Control Keywords: The Traffic Directors

- **if**, **elif**, **else**: The decision-makers.

  ```python
  i = 5
  if i > 0:
      print("Positive")
  elif i == 0:
      print("ZERO")
  else:
      print("Negative")
  ```

- **for**: The looper through sequences.

  ```python
  for x in range(1, 4):
      print(x)
  ```

- **while**: The repetitive one until a condition changes.

  ```python
  x = 0
  while x < 3:
      print(x)
      x += 1
  ```

- **break**: The party pooper who stops the loop.

  ```python
  i = 1
  while i < 5:
      print(i)
      if i == 3:
          break
      i += 1
  ```

- **continue**: The skipper who jumps to the next iteration.

  ```python
  for i in range(5):
      if i == 3:
          continue
      print(i)
  ```

### 2.4. Structural Keywords: The Architects

- **def**: The function designer.

  ```python
  def my_function():
      print("Hello world !!")
  my_function()
  ```

- **class**: The blueprint creator.

  ```python
  class User:
      name = "John"
      age = 36
  ```

- **with**: The context manager.

  ```python
  with open('file.txt', 'r') as file:
      data = file.read()
  ```

- **as**: The alias assigner.

  ```python
  import calendar as c
  print(c.month_name[1])  # Outputs: January
  ```

- **pass**: The placeholder for future code.

  ```python
  for x in [0, 1, 2]:
      pass
  ```

- **lambda**: The anonymous function maker.

  ```python
  x = lambda a, b, c: a + b + c
  print(x(5, 6, 2))  # Outputs: 13
  ```

### 2.5. Import Keywords: The Connectors

- **import**: The module importer.

  ```python
  import datetime
  ```

- **from**: The selective importer.

  ```python
  from datetime import time
  ```

### 2.6. Variable Declaration Keywords: The Scope Setters

- **del**: The eliminator.

  ```python
  x = "hello"
  del x
  ```

- **global**: The global variable declarer.

  ```python
  def myfunction():
      global x
      x = "hello"
  ```

- **nonlocal**: The non-local variable declarer.

  ```python
  def myfunc1():
      x = "John"
      def myfunc2():
          nonlocal x
          x = "hello"
      myfunc2()
      return x
  print(myfunc1())  # Outputs: hello
  ```

### 2.7. Value Returning Keywords: The Returners

- **return**: The value sender.

  ```python
  def sumNum():
      return 3 + 3
  ```

- **yield**: The generator.

It is used to end a function and it returns a generator.

  ```python
  def countdown(num):
      print("Starting")
      while num > 0:
          yield num
          num -= 1
  val = countdown(5)
  print(next(val))  # Outputs: Starting \n 5
  ```

### 2.8. Exception Handling Keywords: The Error Handlers

- **try**: The tester.

  ```python
  try:
      x > 3
  except:
      print("Something went wrong")
  ```

- **except**

- **raise**
It is used to raise an exception, manually.

```p
x = "hello"
if not type(x) is int:
    raise TypeError("Only integers are allowed")
```

- **finally**
It defines a code block which will be executed no matter if the try block raises an error or not.

```py
try:
    x > 3
except:
    print("Something went wrong")
finally:
   print("I will always get executed")
```

- **assert**
It can be used for debugging the code. It tests a condition and returns True , if not, the program will raise an AssertionError.

```py
x = "hello"
assert x == "goodbye", "x should be 'hello'"  # AssertionError
```

### 2.9. Asynchronous Programming Keywords

These keywords help writing the asynchronous application flows.

- **async**
It is used to declare a function as a coroutine, much like what the @asyncio.coroutine decorator does.

```py
async def ping_server(ip):
```

- **await**
It is used to call async coroutine.

```py
async def ping_local():
    return await ping_server('192.168.1.1')
```

Happy coding! 😄🐍
