---
id: while-loop
title: Java while loop
description: 'Java Language while loop'
sidebar_position: 6
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎢 The "While" Loop Rollercoaster in Java 🎢

Welcome to the thrilling world of Java's `while` loop! Buckle up, because once you start, there's no stopping until the condition says so! 🎡🎠

## 🎭 What is a `while` Loop?

A `while` loop is like that friend who won’t leave your house until you say the magic words: *"Loop terminated!"* It keeps executing a block of statements as long as the given condition remains true. The moment the condition flips to `false`, the loop waves goodbye and exits. ✌️

### 🏆 Best Practice

If you don't know beforehand how many times a loop should run, use a `while` loop. It's like a bottomless buffet – you keep eating (iterating) until you're full (condition is false). 😋

---

## 🏗️ Syntax

```java
while (condition-expression) {
     // Statement(s) to execute repeatedly
}
```

### 🎯 Key Rules

- The `condition-expression` must be a boolean (`true` or `false`).
- If it's `true`, the loop keeps running.
- If it's `false`, the loop taps out. 🙅‍♂️
- Be careful! If the condition never becomes `false`, congrats! You've created an **infinite loop**! (More on that disaster later. 😅)

---

## 🎬 How the `while` Loop Works

1. Check the condition.
2. If `true`, execute the loop body.
3. Rinse and repeat until the condition turns `false`.
4. Exit the loop and continue with the rest of the code.

Think of it like a treadmill: you keep running as long as you *want* (or until you pass out). 🏃‍♂️💨

---

## 🏁 Examples

### 1️⃣ Print Numbers from 1 to 5

Let’s warm up with a simple example. We’ll use a `while` loop to print numbers from **1 to 5**.

```java
int counter = 1;

while (counter <= 5) {
    System.out.println(counter);
    counter++; // Increment the counter, or we'll be stuck forever!
}
```

🎉 **Output:**

```java
1
2
3
4
5
```

---

### 2️⃣ Iterating Through a List

Got a list of things? No problem! Let's loop through them using an `Iterator`.

```java
List<String> list = List.of("A", "B", "C");
Iterator<String> iterator = list.iterator();

while (iterator.hasNext()) {
    System.out.println(iterator.next());
}
```

🎉 **Output:**

```java
A
B
C
```

---

### 3️⃣ Looping Through an Array

Arrays are like sushi platters 🍣 – you can go through each piece one by one.

```java
Integer[] array = {1, 2, 3, 4, 5};
int index = 0;

while (index < array.length) {
    System.out.println(array[index]);
    index++;
}
```

🎉 **Output:**

```java
1
2
3
4
5
```

---

## ⚠️ The Dreaded **Infinite Loop** 😱

Oops! If you forget to update the condition inside the loop, you might end up in an **endless loop**, like a song stuck on repeat. 🔁

```java
Integer[] array = {1, 2, 3, 4, 5};
int index = 0;

while (index < array.length)  // Uh-oh! Forgot to increment `index`
{
    System.out.println(array[index]);
}
```

🚨 **What happens?** The program keeps printing the same value *forever* until your computer melts or you manually stop it. 🔥

💡 **Fix:** Increment the `index` inside the loop to ensure termination.

---

## 🤔 `while` vs. `for` Loop – The Showdown! ⚔️

| Feature       | `while` Loop | `for` Loop |
|--------------|------------|------------|
| Condition   | Mandatory  | Mandatory  |
| Initialization | Outside the loop | Inside the loop |
| Increment/Update | Inside the loop body | In loop header |

### 🎭 `for` Loop Syntax

```java
for (initialization; condition-expression; update) {
    // Statements
}
```

### 🔄 Equivalent `while` Loop

```java
initialization;
while (condition-expression) {
    // Statements
    update;
}
```

👉 Moral of the story? If you need a *controlled* number of iterations, go with `for`. If the loop needs to run indefinitely until some condition is met, `while` is your go-to. ✅

---

## 🛑 Using `break` in a `while` Loop

Sometimes, you need an emergency exit! The `break` keyword can help you **stop the loop immediately**.

```java
int i = 1;

while (true) {  // Whoa! An infinite loop!
    if (i <= 5) {
        System.out.println(i);
        i++;
    } else {
        break;  // Escape hatch! 🚀
    }
}
```

🎉 **Output:**

```java
1
2
3
4
5
```

---

## 🎉 Wrapping Up

Java's `while` loop is a powerful tool that keeps your code **lean** and **efficient**. Whether you're looping through a collection, waiting for user input, or just having fun with infinite loops (not recommended! 😆), mastering `while` loops will make you a **Java champion**! 🏆

Happy Coding! 🚀💻
