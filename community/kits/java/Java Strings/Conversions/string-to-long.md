---
id: string-to-long
title: Convert String to long in Java
description: 'Java examples of converting a String to a long type using Long.parseLong(String), Long.valueOf(String) and new Long(String) constructor.'
sidebar_position: 3
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🏗️ Java Fun: Converting Strings to Longs 🎢

Ever found yourself in a Java jungle trying to convert a String into a Long? Fear not, brave coder! Let's explore three ways to achieve this transformation while having a bit of fun. 🎉

## ⚡ Quick Reference

```java
String number = "2018"; // A String, not just a number!

long value1 = Long.parseLong(number, 10);  // The classic way!

long value2 = Long.valueOf(number);  // Another solid choice!

long value3 = new Long(number);  // Deprecated, but hey, it’s an option!
```

---

## 🛠️ 1. Using `Long.valueOf(String)`

Think of `Long.valueOf()` as a magic decoder ring for numbers in String disguise. It takes a String, checks if it's made of decimal digits, and **poof!**—out comes a long. The first character can be a `+` or `-`, but no funny business, or it throws a tantrum (*NumberFormatException*). 🤯

### 🎭 Example

```java
String positiveNumber = "+12001";
long value1 = Long.valueOf(positiveNumber);   // 12001L

String negativeNumber = "-22002";
long value2 = Long.valueOf(negativeNumber);   // -22002L
```

🚨 **Warning!** Try sneaking in a non-number character, and Java will catch you red-handed:

```java
Assertions.assertThrows(NumberFormatException.class, () -> {
  Long.valueOf("alexa");
});
```

---

## 🎯 2. Using `Long.parseLong(String)`

This method is `valueOf()`'s twin, just without the extra wrapping. Same rules apply—only decimal digits and an optional `+` or `-` sign are allowed. It does the job, and it does it well! 🏆

### 🏋️‍♂️ Example

```java
String positiveNumber = "+12001";
long value1 = Long.parseLong(positiveNumber);   // 12001L

String negativeNumber = "-22002";
long value2 = Long.parseLong(negativeNumber);   // -22002L
```

### 🕵️‍♂️ Bonus Trick: Different Number Bases

Want to parse a hexadecimal (base 16) number? No problem!

```java
String numberInHex = "-FF";
long value = Long.parseLong(numberInHex, 16);   // -255L
```

---

## 🚀 3. Using `new Long(String)` Constructor (Old School)

Back in the day (before Java 9), you could create a Long object using the `new Long(String)` constructor. But like disco pants, this approach is **deprecated**. 🕺

```java
long value = new Long("100");   // 100L
```

Use `parseLong()` instead—it’s faster, cooler, and Java won’t yell at you. 😎

---

## ☠️ 4. Beware the `NumberFormatException` Monster! 🐉

If your input string contains anything **other than** decimal digits (and an optional sign at the start), Java will throw a `NumberFormatException` at you faster than you can say "Oops!" 😱

```java
String number = "12001xyz";
long value = Long.parseLong(number);
```

💥 **Boom! Runtime error incoming:**

```java
Exception in thread "main" java.lang.NumberFormatException: For input string: "12001xyz"
    at java.lang.NumberFormatException.forInputString(NumberFormatException.java:65)
    at java.lang.Long.parseLong(Long.java:589)
    at java.lang.Long.<init>(Long.java:965)
    at com.howtodoinjava.StringExample.main(StringExample.java:9)
```

So, keep those Strings clean, stick to digits, and happy coding! 🚀

---

## 🎉 Happy Learning!! 🧑‍💻
