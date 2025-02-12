---
id: statement
title: Java Statement
description: 'Java Language Statement'
sidebar_position: 15
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🏗️ Java Block Statements – Now with Extra Fun! 🎉

## 🤔 What is a Block Statement?

Imagine you have a to-do list. You can complete each task one by one, or you can group similar tasks together (like “groceries” or “work stuff”). Java does something similar with **block statements**! 🏗️

A **block statement** is just a bunch of Java statements wrapped up inside `{}` curly braces. Why? Because sometimes Java needs you to use a single statement, but you have a *whole* bunch of them. So, put them in a block, and boom 💥—problem solved!

### 📌 Example

```java
{
    int var = 20;
    var++;
}
```

Simple, right? The statements inside `{}` are treated as **one**. Like a coding burrito 🌯—all ingredients wrapped up nicely together.

---

## 🔍 Scope of Variables Inside Blocks 🕵️

Java is a bit territorial. If you declare a variable inside a block, it **stays** inside that block. It won’t be available outside—kind of like a top-secret club! 🤫

### ❌ Example of Scope Violation 🚫

```java
{
    int var = 20;
    var++;
}

// Oh no! Java says NOPE! 🚨
System.out.println(var); // ERROR: var is out of scope!
```
See? `var` was declared inside the block, so Java refuses to acknowledge its existence outside of it. Typical Java. 😅

### 🏗️ Nested Blocks

You can **nest** blocks inside each other (like Russian dolls! 🎭). Inner blocks can access variables from outer blocks, but outer blocks *cannot* access variables from inner blocks. It’s like a VIP lounge—higher-ups can enter, but the interns can’t sneak into the executive suite. 😆

---

## 🚀 Blocks During Object Creation

Here’s where things get spicy! 🌶️

Block statements don’t have to live inside methods! You can also use them inside **classes** to handle initialization logic.

### 🔥 Non-Static vs Static Blocks

- **Non-static blocks** → Run **every time** you create a new object. 🔄
- **Static blocks** → Run **only once** when the class is loaded. 🚀

### Example

```java
public class MyDemoAction {
    private Integer variable = 10;

    public MyDemoAction() {
        System.out.println("MyDemoAction Constructor");
    }

    {
        // Non-static block statement - runs every time an object is created!
        System.out.println("Hello from a non-static block! 🏗️");
    }

    static {
        // Static block statement - runs only once when the class loads!
        System.out.println("Hello from a static block! 🚀");
    }

    private void someMethod() {
        System.out.println("HowToDoInJava.com");
    }
}
```

### 💡 What Happens When You Run This?

1. The static block executes **first** (only once).
2. Each time you create an object, the **non-static block** runs before the constructor.
3. Finally, the constructor runs.

This is Java’s way of making sure certain setup tasks are done, **with or without** creating an object! 🎩✨

---

## 🎯 The Takeaway

That’s all, folks! Now you know how to use **block statements** like a pro! 🏆

✅ Use `{}` to group multiple statements into one.
✅ Remember: variables inside a block **stay inside** the block.
✅ Static blocks run **once**, while non-static blocks run **every time** an object is created.

Hope you had fun learning! Happy coding! 🚀🎉
