---
id: for-each-loop
title: Java for-each loop
description: 'Java Language for-each loop'
sidebar_position: 5
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🚀 The For-Each Loop in Java – A Smoother Ride! 🎢

Since Java 1.5, the **for-each loop** (a.k.a. enhanced for-loop) has been making life easier for Java developers. Imagine a world where you don’t have to juggle index counters or worry about the dreaded `ArrayIndexOutOfBoundsException`. Sounds like a dream, right? Well, Java delivered! 🎉

The **for-each loop** is a sleek, modern way to iterate through arrays and collections without dealing with pesky index variables. No more **off-by-one** errors or accidentally skipping elements – just smooth sailing. ⛵

---

## 🧑‍💻 1. Syntax – Say Goodbye to Indexes! 👋

The **for-each loop** doesn’t rely on an index variable. Instead, it elegantly cycles through elements like a well-trained butler serving dishes at a fancy dinner. 🍽️

```java
for(T item : arrayOrCollection) {
    // Do something with item
}
```

- `T` is the type of elements in the array or collection.
- `item` takes on the value of each element, one at a time.
- `arrayOrCollection` is the source of the data we’re iterating through.

---

## 🎯 2. Iterating Through an Array – So Easy, a Caveman Could Do It! 🦴

Let’s see how a **for-each loop** makes iterating over an array effortless:

```java
int[] numArray = {10, 20, 30, 40};

for (int item : numArray) {
    System.out.println(item);
}
```

### 🔍 What Happens Behind the Scenes?

- **1st iteration:** `item = 10`
- **2nd iteration:** `item = 20`
- **3rd iteration:** `item = 30`
- **4th iteration:** `item = 40`

**Output:** 📢

```java
10
20
30
40
```

No messy indexes, no off-by-one errors – just clean, elegant iteration! 😎

---

## 📜 3. Iterating Through a List – Same Magic! 🪄

The **for-each loop** works just as smoothly with collections:

```java
List<String> list = List.of("A", "B", "C");

for (String item : list) {
    System.out.println(item);
}
```

**Output:** 🎤

```java
A
B
C
```

Just pass in the collection instead of an array, and boom – it works like a charm! 🎩✨

---

## ⚡ 4. Using the `forEach()` Method – Java 8’s Game Changer 🕹️

Since **Java 8**, there’s an even fancier way to loop through elements: the **forEach() method**. It’s like the for-each loop, but **functional** and even more concise!

```java
List<String> list = List.of("A", "B", "C");

list.forEach(System.out::println);
```

**Output:** 📌

```java
A
B
C
```

Here, `System.out::println` is a **method reference**, which means "for each element, just print it." No need for curly braces or loop declarations! 🔥

---

## ❓ Got Questions About the For-Each Loop? 🤔

Drop me a message, and I’ll help you out faster than Java’s garbage collector cleans up memory! 🗑️💨

Until then…

** Happy Coding! 🚀🎉 **
