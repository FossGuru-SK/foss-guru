---
id: string-to-string-array
title: Convert String to String[] in Java
description: 'Java examples to convert a string into string array using String.split() and java.util.regex.Pattern.slipt() methods.'
sidebar_position: 6
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🤹‍♂️ Java String to String Array (and Back!) – The Fun Way

Ever wanted to break a string into tiny little pieces and then put it back together like a digital puzzle? Java's got you covered! Let's dive into the magical world of `String.split()` and `Pattern.split()` – and then, like a good magician, we'll bring it all back with `String.join()`! 🎩✨

---

## 🔥 Breaking Strings Apart (String ➝ String Array)

### 1️⃣ Using `String.split()` – The Easy Way

Just like slicing a pizza 🍕, `split()` lets you divide a string into multiple pieces based on a delimiter.

```java
String names = "alex,brian,charles,david";

String[] namesArray = names.split(","); // [alex, brian, charles, david]
```

Boom! You've got an array of names, ready for action. 🚀

---

### 2️⃣ Using `Pattern.split()` – The Regex Ninja Move 🤺

If you like things fancy, you can use `Pattern.split()` instead. Think of it like wielding a lightsaber instead of a butter knife. ⚔️

```java
String names = "alex,brian,charles,david";

Pattern pattern = Pattern.compile(",");
String[] namesArray = pattern.split(names); // [alex, brian, charles, david]
```

It does the same thing but allows for more complex pattern matching. Imagine splitting a string based on multiple delimiters – yeah, it's that powerful! 💪

---

## 🧩 Putting Strings Back Together (String Array ➝ String)

Now, let's reverse the magic trick and reassemble our strings with `String.join()`!

```java
String[] tokens = {"How", "To", "Do", "In", "Java"};

String blogName1 = String.join("", tokens);  // HowToDoInJava
String blogName2 = String.join(" ", tokens); // How To Do In Java
String blogName3 = String.join("-", tokens); // How-To-Do-In-Java
```

Whether you like your words squished together, spaced out, or dashed up, `String.join()` has your back! 💥

---

### 🏆 Conclusion

Splitting and joining strings in Java is like playing with LEGO bricks – break them apart and snap them back together however you like! 🧱

💬 Got questions? Drop them in the comments below!

**Happy Coding!** 🎉
