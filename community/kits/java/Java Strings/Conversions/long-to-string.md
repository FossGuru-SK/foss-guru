---
id: long-to-string
title: Convert long to String in Java
description: 'Java example to convert long to String in two different ways using String.valueOf(long l) and Long.toString(long l) methods. Both are static methods.'
sidebar_position: 4
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🏆 Mastering Long to String Conversion in Java 🚀

Converting a `long` to a `String` in Java? No worries! We’ve got two super simple ways to do it. Whether you're a Java ninja or just getting started, this guide will make it fun! 😎

## ⚡ Quick Reference

Here's the TL;DR version:

```java
long number = 123456789L;
     
String strValue1 = String.valueOf(number);

String strValue2 = Long.toString(number);
```

Easy, right? Now, let’s break it down. 🛠️

---

## 1️⃣ Using `String.valueOf()`

The **`String.valueOf()`** method is your go-to if you want a quick and reliable way to get the `String` version of your long number. It does all the heavy lifting for you behind the scenes.

### 📌 Example

```java
long number = 123456789L;

String strValue = String.valueOf(number); // long to String conversion

// Verify the result
System.out.println(strValue); // Output: 123456789
```

💡 **Fun fact:** This method internally calls `Long.toString(long)`, so it's basically a wrapper for the next method! 🏆

---

## 2️⃣ Using `Long.toString()`

Prefer calling the **`Long.toString()`** method directly? No problem! This method gets the job done just as efficiently. 🎯

### 📌 Example

```java
long number = 123456789L;

String strValue = Long.toString(number); // long to String conversion

// Verify the result
System.out.println(strValue); // Output: 123456789
```

🚨 **Warning:** If the long value is `null`, `Long.toString()` might throw a `NullPointerException`, but hey, you're working with primitives, so no worries there!

---

## 🎯 Wrapping Up

Both methods will get you the same result, so pick whichever one you like! Whether you prefer the versatile `String.valueOf()` or the direct `Long.toString()`, you're now officially a pro at long-to-string conversions in Java! 🎉

👉 Want to learn the reverse? Check out **how to [convert a String to Long](./string-to-long.md) in Java**!

🔗 Happy Coding & Keep Learning! 🚀🔥
