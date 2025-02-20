---
id: do-while-loop
title: Java do-while loop
description: 'Java Language do-while loop'
sidebar_position: 7
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎢 Java Do-While Loop: The "At Least Once" Ride! 🎡

Ever wanted a loop that **guarantees** at least one execution, no matter what? Well, say hello to the **do-while loop**—the thrill ride of Java loops! 🎠 Unlike its cautious cousin, the `while` loop, the `do-while` loop dives straight in and only checks if it should continue **after** the first run. 🚀

---

## 🧐 The "Must-Know" Syntax

Here’s how you write a `do-while` loop:

```java
do {
    // Execute this block at least once
} while (condition);
```

### Key Takeaways 📝

- The loop **always** runs at least once—no ifs, ands, or buts! 🙌
- The condition is checked **after** execution, unlike a `while` loop.
- **Don't forget the semicolon** ( `;` ) after `while (condition);` or Java will give you the "silent treatment" (a.k.a. errors 😅).
- Can be exited early with a `break` statement if needed.

---

## 🏁 Example: Counting from 1 to 5

Here’s a simple example of a `do-while` loop in action:

```java
int i = 1;
do {
    System.out.println(i);
    i++;
} while (i <= 5);
```

**Output:**

```java
1
2
3
4
5
```

Even if `i` started at `6`, the loop would **still** print `6` once before checking the condition! 🤯

---

## 🥊 Do-While vs While: The Showdown

What’s the real difference between `while` and `do-while` loops? Let's compare:

```java
int i = -10;

// Simple while loop
while (i > 0) {
    System.out.println(i);  // Does not print anything!
    i++;
}

// Do-while loop

do {
    System.out.println(i);  // Prints -10 and THEN exits!
    i++;
} while (i > 0);
```

### Key Difference 🎯

- `while`: Checks **before** executing → Might **never** run ❌
- `do-while`: Checks **after** executing → Runs **at least once** ✅

---

## 🚨 Watch Out for Infinite Loops! 🚨

If you forget to update your condition inside the loop, you might end up in an **infinite loop**. Like this... 😱

```java
do {
    System.out.println("This will never end... send help! 😵");
} while (true); // No exit condition!
```

Make sure to **modify your condition variable** inside the loop, or you’ll be staring at your terminal forever. 😂

---

## 🎉 Final Thoughts

The `do-while` loop is perfect when you need to execute a block **at least once**, regardless of the condition. It's especially useful for:
✅ Menus that should display at least once 📜
✅ User input validation loops ⌨️
✅ Cases where checking conditions **before** execution doesn’t make sense 🤔

Now go forth and **loop responsibly!** 💻🔥

** Happy Coding! 🚀**
