---
id: string-to-inputstream
title: Convert String to InputStream in Java
description: 'Java example to convert String to InputStream using ByteArrayInputStream and IOUtils classes. Writing String to InputSteam is a frequent job .'
sidebar_position: 8
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎸 Rocking Java: Convert String to InputStream Like a Pro

Ever found yourself needing to turn a simple `String` into an `InputStream`? Whether you're slinging code in a high-stakes production app or just flexing your Java muscles, knowing this trick will make your life easier! 💡

### 🔥 Why Should You Care?

Writing strings to streams is an everyday thing in Java, and having a few slick shortcuts up your sleeve can save the day! Let's dive into some cool ways to do this.

## 1️⃣ Using `ByteArrayInputStream` 🏆

This is the simplest and most no-nonsense way to get an `InputStream` from a `String`. No external dependencies, just pure Java magic. ✨

📌 How does it work?

- The `getBytes()` method converts the `String` into a byte array.
- The `ByteArrayInputStream` takes those bytes and gives you an `InputStream`.

```java
String string = "howtodoinjava.com";
InputStream instream = new ByteArrayInputStream(string.getBytes());
```

🔥 **Pro Tip:** Want to specify a charset? Use `getBytes(Charset charset)`. The `StandardCharsets` class makes it easy:

```java
InputStream instream = new ByteArrayInputStream(string.getBytes(StandardCharsets.UTF_8));
```

## 2️⃣ The Apache Commons IO Power Move 🦸‍♂️

If you're using [Apache Commons IO](https://mvnrepository.com/artifact/commons-io/commons-io) (which many projects already do), you can make your code look even slicker. 😎

### 📦 First, Add This Dependency (if you're using Maven)

```xml
<dependency>
    <groupId>commons-io</groupId>
    <artifactId>commons-io</artifactId>
    <version>2.11.0</version>
</dependency>
```

### 🛠️ Then, Use `IOUtils.toInputStream()`

This method makes your code ultra-readable! 🚀

```java
String string = "howtodoinjava.com";
InputStream inStream = IOUtils.toInputStream(string, StandardCharsets.UTF_8);
```

## 🏁 Final Thoughts

Both methods are great, but if you want a clean, dependency-free solution, go for `ByteArrayInputStream`. If you're already using Apache Commons, then `IOUtils.toInputStream()` is a fantastic alternative! 💡

🚀 **Now, go forth and stream like a boss!** 🚀

---
📣 Got questions? Drop them in the comments!

🎉 **Happy Coding!** 🎉
