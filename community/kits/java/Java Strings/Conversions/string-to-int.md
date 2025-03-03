---
id: string-to-int
title: Convert String to int in Java
description: 'learned to parse a string (decimal, octal and hexadecimal) to int or Integer types using Integer.parseInt(), valueOf() and decode() methods.'
sidebar_position: 1
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🚀 Mastering Java String to int Conversion (The Fun Way!)

Ever found yourself staring at a `String` and wishing it could magically transform into an `int`? Well, Java’s got your back! Let's dive into the world of number conversions and make it a fun ride. 🎢

## 1️⃣ Using `Integer.parseInt()` (The Classic Way)

### 📝 Syntax

`Integer.parseInt()` is like your reliable friend who always gets the job done. It takes a `String`, chews it up (figuratively, of course), and spits out an `int`.

It comes in three flavors:

```java
public static int parseInt(String s) throws NumberFormatException { ... }
public static int parseInt(String s, int radix) throws NumberFormatException { ... }
public static int parseInt(String s, int beginIndex, int endIndex, int radix) throws NumberFormatException { ... }
```

### ✨ Example Magic

Let’s turn some strings into integers like a Java wizard. 🧙‍♂️

```java
Assertions.assertEquals(1001, Integer.parseInt("1001"));
Assertions.assertEquals(513, Integer.parseInt("1001", 8));
Assertions.assertEquals(1001, Integer.parseInt("amount=1001", 7, 11, 10));
```

Cool, right? But wait—there’s a catch! 🚨

### ❌ Beware of `NumberFormatException`

Java is great, but it won't let you fool around with invalid numbers. If you try to pass nonsense, it'll throw a tantrum! 😡

```java
Assertions.assertThrows(NumberFormatException.class, () -> {
  Integer.parseInt(null);
});

Assertions.assertThrows(NumberFormatException.class, () -> {
  Integer.parseInt("abc");
});
```

---

## 2️⃣ Using `Integer.valueOf()` (The Cousin of `parseInt()`)

`Integer.valueOf()` is basically `parseInt()`, but it returns an `Integer` object instead of a primitive `int`. So, it’s fancier. 🎩

```java
public static Integer valueOf(String s) throws NumberFormatException {...}
public static Integer valueOf(String s, int radix) throws NumberFormatException {...}
```

### 🔥 Example Fireworks

```java
Assertions.assertEquals(1001, Integer.valueOf("1001"));
Assertions.assertEquals(513, Integer.valueOf("1001", 8));
```

Oops, don't mess up the input! 🚨

```java
Assertions.assertThrows(NumberFormatException.class, () -> {
  Integer.valueOf("abc");
});
```

---

## 3️⃣ Using `Integer.decode()` (For the Fancy Number Nerds 🤓)

If you're dealing with different number formats like decimal, octal, or hexadecimal, `Integer.decode()` is here to save the day! 🦸‍♂️

- **Decimal:** Just use numbers, optionally prefixed with `+` or `-` (e.g., `+100`, `-2022`)
- **Octal:** Start with a `0` (e.g., `0404`, `+0100`)
- **Hexadecimal:** Start with `0x` or `0X` (e.g., `0x334`, `+0x100`)

```java
public static Integer decode(String s) throws NumberFormatException
```

### 🎯 Example Conversions

```java
Assertions.assertEquals(100, Integer.decode("+100"));
Assertions.assertEquals(64, Integer.decode("+0100"));
Assertions.assertEquals(256, Integer.decode("+0x100"));
```

Boom! Now you can handle numbers like a pro. 💪

---

## 🎉 Conclusion

In this fun Java adventure, we:
✅ Learned to convert a `String` to `int` using `parseInt()` and `valueOf()`.
✅ Discovered `decode()` for handling decimal, octal, and hexadecimal formats.
✅ Realized Java doesn’t like nonsense inputs (hello, `NumberFormatException`! 👋).

Now, go forth and convert your strings like a Java champion! 🏆

**Happy Coding! 🚀😃**
