---
id: introduction
title: Java 18 Features Intro
description: 'Features in short'
sidebar_position: 1
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## ☕ Java 18 – The Feature Drop You Didn't Know You Needed 😎

📅 **Release Date:** March 22, 2022  
💡 **Theme:** Cleaner, simpler, faster – and just a touch experimental

Java 18 burst onto the scene like that one friend who shows up with nine new party tricks and a web server in their backpack. Whether you're a seasoned dev or just here for the code snacks, there’s something in this release for everyone.

---

## 🎁 What's in the Java 18 Gift Basket?

There are **9 new developer features**, including a **Simple Web Server** (yes, you read that right – *simple*, not *Spring Boot-sized*) and another round of *Pattern Matching for `switch`* (still trying to get it right, apparently).

Below are the **14 JEPs** bundled with Java 18:

---

### JEP 400: 🌐 UTF-8 by Default

Java said, “Why are we still guessing encodings?”  
Now, **UTF-8 is the default charset** for Java source files, property files, and more – no matter where you are on Earth or in the multiverse.

---

### JEP 408: 📦 Simple Web Server

Want a basic file server without dragging in Apache or Nginx?  
Introducing `SimpleFileServer` – your **no-setup, no-fuss HTTP file server**.

```sh
# One-liner server magic
$ jwebserver
````

> Perfect for testing, demos, or when you just want to feel like a hacker.

---

### JEP 413: 📚 Code Snippets in Java API Documentation

You can now embed **working code snippets** in your Javadoc using `@snippet` tags.

```java
/**
 * This method does a thing.
 * {@snippet :
 *   var list = List.of("Java", "18");
 *   list.forEach(System.out::println);
 * }
 */
```

> Because real devs read the docs (sometimes).

---

### JEP 416: 🧠 Reimplement Core Reflection with Method Handles

Under the hood, Java has swapped out some dusty old internals in reflection for **faster, more modern MethodHandles**. No change to your code, just faster black magic.

---

### JEP 417: 🧮 Vector API (Third Incubator)

Yes, **Vector API** is still incubating – but now with even better support for vector computations. If you're doing low-level math stuff, this one’s for you.

> Faster math, happier CPU, more bragging rights.

---

### JEP 418: 🌍 Internet-Address Resolution SPI

You can now **plug in your own DNS resolver**!
Whether you're building privacy tools, testing network code, or just like reinventing the wheel – Java's got you.

> Finally, you don’t have to trust your OS’s DNS. Your move, hackers. 🔒

---

### JEP 419: 🧠 Foreign Function & Memory API (Second Incubator)

Still in incubation, but now more powerful and stable. This API lets Java talk to native libraries **without JNI**. Yes, *without JNI*.

> Use native code *like a civilized person*, without sacrificing your sanity.

---

### JEP 420: 🔄 Pattern Matching for `switch` (Second Preview)

The `switch` statement keeps evolving like a Pokémon. You can now use **pattern matching** with types in `switch`.

```java
switch (obj) {
    case String s -> System.out.println("Text: " + s);
    case Integer i -> System.out.println("Number: " + i);
    default -> System.out.println("Unknown type");
}
```

> One step closer to writing clean, expressive code in Java. Just imagine!

---

### JEP 421: 🪦 Deprecate Finalization for Removal

Java’s long-term breakup with finalizers continues. This JEP formally deprecates them with intent to remove.

> Pro tip: Use `try-with-resources` and `Cleaner` instead.
> Finalizers were *never* cool.

---

## 🏁 Final Thoughts

Java 18 might not be an LTS, but it’s like a tech-savvy cousin who drops in with cool toys and performance upgrades. From a built-in web server to better native integration and smarter pattern matching – this release is a **developer playground**.

---

> 🚀 Pro Move: Try out Java 18 in a side project. You’ll get all the fun with none of the commitment (until the next LTS).

---

🎉 **Happy Coding!**
