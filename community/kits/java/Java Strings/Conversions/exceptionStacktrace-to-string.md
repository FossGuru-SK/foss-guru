---
id: exceptionStacktrace-to-string
title: Convert Exception StackTrace to String in Java
description: 'Java program to convert error stack trace to String.'
sidebar_position: 14
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎭 Turning Java Stack Traces into Strings - The Fun Way

Ever wanted to capture Java exception stack traces as a string? Maybe to log them for debugging, store them in a database, or just show them off at parties? (Okay, maybe not that last one... but you get the idea! 😆)

Well, Java doesn’t have a direct API to do this (because why make life easy, right?). But don’t worry! We’ve got a couple of neat tricks up our sleeves. Let’s dive in! 🏊‍♂️

---

## 📝 1. Using `StringWriter` and `PrintWriter`

By default, `Throwable.printStackTrace()` sends the stack trace straight to `System.err`, which usually means your console gets flooded with red text. But what if you want it as a string? Easy! Just redirect it to a `StringWriter` via a `PrintWriter`.

### Steps to Convert StackTrace to String

1. Print the throwable stack trace to a `PrintWriter`.
2. Copy the contents of `PrintWriter` to `StringWriter`.
3. Use `StringWriter.toString()` to extract the final string.
4. Profit! 💰

And to make life even easier, we’ll use **try-with-resources** so that `StringWriter` and `PrintWriter` automatically clean up after themselves. 🙌

### Example Code

```java
NullPointerException npe = new NullPointerException("Custom error");
String errorStr = null;

try (StringWriter sw = new StringWriter();
     PrintWriter pw = new PrintWriter(sw)) {

  npe.printStackTrace(pw);
  errorStr = sw.toString();

} catch (IOException e) {
  throw new RuntimeException("Error while converting the stacktrace");
}

System.out.println(errorStr);
```

### Sample Output

```java
java.lang.NullPointerException: Custom error
    at com.howtodoinjava.demo.StackTrace.main(StackTrace.java:11)
```

---

## 🚀 2. Using Apache Commons `ExceptionUtils`

If you’re all about that **work smarter, not harder** life, then Apache Commons Lang3 has your back! It has a magical utility class called `ExceptionUtils`, which provides the `getStackTrace()` method to do all the heavy lifting for you. 🎩✨

### 📦 Step 1: Add Dependency (Maven Users Rejoice!)

```xml
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>3.12.0</version>
</dependency>
```

### 🏆 Step 2: Use It Like a Pro

```java
String errorStr = ExceptionUtils.getStackTrace(new NullPointerException("Custom error"));

System.out.println(errorStr);
```

### Sample Output1

```java
java.lang.NullPointerException: Custom error
    at com.howtodoinjava.demo.StringExample.main(StringExample.java:11)
```

---

## 🎉 Wrapping Up

So, the next time your Java code decides to throw a tantrum (a.k.a. an exception), you now know how to elegantly capture its **rage** as a string! 😜

- Want full control? **Use `StringWriter` + `PrintWriter`.**
- Want an easy life? **Use `ExceptionUtils.getStackTrace()`.**

Either way, happy debugging! 🐛🔍

Got questions? Drop them in the comments! 🚀
