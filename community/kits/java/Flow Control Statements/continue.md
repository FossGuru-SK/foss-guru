---
id: continue
title: Java continue statement
description: 'Java Language continue statement'
sidebar_position: 9
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🚀 Java `continue` Statement: The Art of Skipping! 🎭

The `continue` statement in Java is like that one friend who skips all the boring parts of a conversation and jumps straight to the good stuff. 😆 It helps us skip the current iteration of a loop and move on to the next one—no hard feelings!

### 🎯 What's the Deal with `continue`?

The `continue` statement works inside **for**, **while**, or **do-while** loops and behaves almost like `break`, except it doesn’t rudely terminate the loop—it just skips the current iteration and moves to the next.

### 🤔 How Does It Work?

- In a **for loop**, `continue` jumps directly to the increment/decrement part.
- In a **while** or **do-while** loop, `continue` sends control straight to the condition check.

Let’s see `continue` in action:

```java
int n = 10;
for (int i = 0; i < n; i++) {
    if (i % 2 != 0) { // Skip odd numbers
        continue;
    }
    System.out.print(i + " ");
}
```

🔹 **Output:**

```java
0 2 4 6 8
```

See? All the odd numbers just vanished! Magic? Nope. Just `continue` doing its thing. 🪄

---

## 🔥 Syntax of `continue`

The syntax is as simple as skipping leg day at the gym. 💪

```java
while (testExpression) {
  // Some statements
  if (continue-condition)
    continue;
  // More statements (skipped if continue is hit)
}
```

When the `continue-condition` is met, Java skips the remaining code inside the loop and jumps straight to the next iteration.

---

## 🎭 Types of `continue` Statements

Java offers **two flavors** of `continue` statements:

### 🍩 1. Unlabeled `continue`

This is the basic form of `continue`. It simply skips the current iteration of the loop it’s in.

```java
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue; // Skip even numbers
    }
    System.out.println("Odd number: " + i);
}
```

🔹 **Output:**

```java
Odd number: 1
Odd number: 3
Odd number: 5
Odd number: 7
Odd number: 9
```

### 🎯 2. Labeled `continue`

Sometimes, you need more control. Labeled `continue` lets you skip an iteration in an **outer loop** instead of just the current one. Think of it as a VIP pass to the next level. 🎟️

```java
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (j == 1) {
            continue outer; // Skip to the next iteration of outer loop
        }
        System.out.println("i = " + i + ", j = " + j);
    }
}
```

🔹 **Output:**

```java
i = 0, j = 0
i = 1, j = 0
i = 2, j = 0
```

Whenever `j == 1`, it skips the rest of the inner loop and moves to the next iteration of the outer loop. Pretty neat, right? 😎

---

## 🎬 `continue` in Action: A Real-Life Example

Let’s use `continue` to print only odd numbers from 0 to 9:

```java
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue; // Skip even numbers
    }
    System.out.println("The number is " + i);
}
```

🔹 **Output:**

```java
The number is 1
The number is 3
The number is 5
The number is 7
The number is 9
```

Now, what if we *don’t* use `continue`? We can achieve the same result with an `if` statement:

```java
for (int i = 0; i < 10; i++) {
    if (i % 2 != 0) {
        System.out.println("The number is " + i);
    }
}
```

The result is the same, but hey—sometimes `continue` just makes things more fun! 🎢

---

## ⚠️ A Word of Caution

While `continue` is super useful, don’t overuse it! Too many `continue` and `break` statements can make your code hard to read. Sometimes, a simple `if` statement does the job just as well.

---

## 🎉 Conclusion

The `continue` statement is like a "skip this one" button for loops. It’s useful when you need to avoid certain iterations without stopping the entire loop. 🚀

- Use **unlabeled `continue`** to skip the current iteration.
- Use **labeled `continue`** when working with nested loops.
- Don’t abuse it—clean code is happy code! 😃

**That’s all, folks! Keep coding and keep skipping the boring parts!** 🎈

Happy Learning! 🚀😃
