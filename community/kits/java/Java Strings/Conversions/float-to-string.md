---
id: float-to-string
title: Convert Float to String in Java
description: 'Learn to convert float value to String using Float.toString() and String.valueOf() methods and format float to n decimal points.'
sidebar_position: 15
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🏄 Float to String Conversion in Java – Ride the Waves of Precision

Ever tried turning a float into a string in Java? It's like trying to explain a math joke—some get it instantly, others just stare. 😆 No worries, though! We’ve got a few smooth tricks up our sleeve to make this conversion as easy as floating on water. 🌊

## 1️⃣ Using `Float.toString()` – The Go-To Surfer 🏄‍♂️

The `Float.toString()` method transforms your float into a string effortlessly. Works like a charm for both positive and negative numbers!

```java
float PI = 3.1415927f;
float negativePI = -3.1415927f;

Assertions.assertEquals("3.1415927", Float.toString(PI));
Assertions.assertEquals("-3.1415927", Float.toString(negativePI));
```

### But wait… what if the float is being sneaky? 🤔

- If the argument is `NaN`, the result is the string **"NaN"**. (No worries, no exceptions thrown!)
- If the float is **infinity**, it gracefully returns **"Infinity"**.

```java
Assertions.assertEquals("NaN", Float.toString(0.0f / 0.0f));
Assertions.assertEquals("Infinity", Float.toString(Float.POSITIVE_INFINITY));
Assertions.assertEquals("-Infinity", Float.toString(Float.NEGATIVE_INFINITY));
```

## 2️⃣ Using `String.valueOf()` – The Chilled-Out Alternative 🧊

`String.valueOf()` is like that cool friend who just repeats what you say. 😎 It internally calls `Float.toString()`, so the behavior is exactly the same.

```java
float PI = 3.1415927f;
float negativePI = -3.1415927f;

Assertions.assertEquals("3.1415927", String.valueOf(PI));
Assertions.assertEquals("-3.1415927", String.valueOf(negativePI));
```

## 3️⃣ Formatting Float to **N** Decimal Points 🎯

If you don’t want to scare your friends with too many decimal points, you can **format** the float using `NumberFormat.format(float)`. This lets you set how many decimals you want.

### Example: Formatting to **2 decimal points**

```java
NumberFormat formatter = new DecimalFormat("0.00");
Assertions.assertEquals("3.14", formatter.format(PI));
```

Boom! Now your float is all dressed up and looking sharp. 🔥

## 🎉 Wrapping Up

Today, we rode the waves of float-to-string conversion and learned:
✅ `Float.toString()` is the recommended way.
✅ `String.valueOf()` is basically the same thing but looks cooler.
✅ Formatting with `NumberFormat` makes your float look polished.

So, next time your float needs a wardrobe change, you know what to do! 🕶️ Drop your questions in the comments.

**Happy Learning & Keep Coding! 🚀**
