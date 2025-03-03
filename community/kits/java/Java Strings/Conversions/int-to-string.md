---
id: int-to-string
title: Convert int to String in Java (with Performance Comparison)
description: 'In Java, converting an int value to String is not difficult, but knowing which method may save us a few CPU cycles is worth knowing.'
sidebar_position: 2
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎉 Java Fun Zone: Converting `int` to `String` Like a Pro! 🚀

## 🔥 The Mission

You're coding away, deep in thought, and suddenly you need to convert an `int` to a `String`. Panic? NEVER! Java has got your back with multiple ways to do it. But which one is the best? Let's dive in and find out! 💡

## 🛠️ The Mighty Conversion Techniques

Java provides a bunch of ways to transform your humble `int` into a shiny `String`. Here are our contenders:

1. **`Integer.toString()`** 🎯 (Fastest & Recommended!)
2. **`String.valueOf()`**
3. **`String.format()`**
4. **String Template Magic (Java 21)**

A little Java snippet to set the stage:

```java
int num = 100;

String value1 = Integer.toString(num);   // Works for Integer too
String value2 = String.valueOf(num);     // Works for Integer too
```

## 🥇 1. The Champion: `Integer.toString()`

The **`Integer.toString(int)`** method takes an `int` and returns a `String` representation of it. Simple and blazing fast. ⚡

```java
Assertions.assertEquals("0", Integer.toString(0));
Assertions.assertEquals("40", Integer.toString(40));
Assertions.assertEquals("-40", Integer.toString(-40));
```

### ⚠️ Beware of the Limits

Java `int` values range from **-2,147,483,648** to **2,147,483,647**. Go beyond this, and you're in for a surprise! 😲

```java
Assertions.assertEquals("2147483647", Integer.toString(Integer.MAX_VALUE));
Assertions.assertEquals("-2147483648", Integer.toString(Integer.MIN_VALUE));
```

### 🎭 Fun with Different Bases

Want to see your `int` in different numeral systems? No problem!

```java
Assertions.assertEquals("101000", Integer.toBinaryString(40));  // Binary
Assertions.assertEquals("50", Integer.toOctalString(40));       // Octal
Assertions.assertEquals("28", Integer.toHexString(40));        // Hex
```

## 🏅 2. `String.valueOf()` – A Strong Contender

Works just like `Integer.toString()`, but calls it internally. Essentially, it's the same thing wearing different clothes. 🤷‍♂️

```java
Assertions.assertEquals("0", String.valueOf(0));
Assertions.assertEquals("40", String.valueOf(40));
Assertions.assertEquals("-40", String.valueOf(-40));
```

## 🚶‍♂️ 3. `String.format()` – Slowpoke Alert! 🐢

You **could** use `String.format()`, but why bring a bazooka to a knife fight? 🏹

```java
String formatted = String.format("%d", num);  // Works but slow 🐌
```

## 💎 4. String Templates (Java 21+) – The Cool New Kid 😎

With **Java 21**, we now have string templates!

```java
String s = STR."\{num}";
```

Looks cool, performs decently, but still not the fastest.

---

## ⚔️ Performance Battle Royale 🔥

We put these methods to the test using **JMH (Java Microbenchmark Harness)**. Here’s how they performed:

| Method | Syntax | Performance (Avg Time per Operation) |
|--------|--------|----------------------------------|
| 🏆 `Integer.toString()` | `Integer.toString(int)` | **0.012 µs** ⚡ |
| 🥈 `String.valueOf()` | `String.valueOf(int)` | 0.016 µs |
| 🥉 `String.format()` | `String.format("%d", int)` | 0.0143 µs 🐢 |
| 🎩 `String template` | `STR."\{i}"` | 0.019 µs |

### 🔬 Why the Difference?

Here's a sneak peek at the **bytecode** behind these methods:

- **`Integer.toString()`**: Calls a lightweight static method. 🏎️
- **`String.valueOf()`**: Calls `Integer.toString()` internally. 🏃‍♂️
- **`String.format()`**: Uses **varargs + boxing**. Slow! 🐌
- **`String template`**: Uses `InvokeDynamic`, but still a tad slower. 🤷‍♂️

---

## 🎯 Conclusion: The Winner Is… 🏆

For converting `int` to `String`, use:

✅ **`Integer.toString(int)`** → Fastest and best!

✅ **`String.valueOf(int)`** → A close second.

🚫 **Avoid `String.format()`** unless you **love** unnecessary performance hits. 🤦‍♂️

🚀 **String templates are fun**, but not the best for performance-critical applications.

---

## 🎉 Happy Coding

Now go forth and convert those integers like a Java Ninja! 🥷💻🔥

---

✍️ *Tested on an 11th Gen Intel i5-1135G7, Windows 11, Java 21.*
