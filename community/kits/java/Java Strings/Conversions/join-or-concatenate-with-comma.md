---
id: join-or-concatenate-with-comma
title: Join or Concatenate Strings with Comma in Java
description: 'Learn to join string array with delimiter to produce single string. Use listed java example to convert list of strings or array of strings to single string.'
sidebar_position: 7
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🤹 Java String Joining Fun! 🎭

Hey there, Java ninjas! 🥋 Today, we’re diving into the world of **string concatenation**. But wait—this isn't your boring old textbook tutorial. We’re going to make string joining as exciting as assembling your dream burger! 🍔

Ever found yourself needing to **glue** together an array of strings, especially when dealing with JSON, XML, or just some fancy output formatting? Well, sit tight because we’ve got you covered! 🚀

---

## 🎯 1. Java 8 – Using `String.join()`

Java 8 brought us some cool tools, and `String.join()` is one of them! Think of it as the **duct tape** for your strings. 🛠️

### 🔹 1.1. Join String Literals

If your strings are **all over the place**, this method lets you tie them together in one neat package.

```java
String joinedString = String.join(",", "How", "To", "Do", "In", "Java");  
System.out.println(joinedString);  // How,To,Do,In,Java
```

✨ *Boom! Instant list without even using an array.*

### 🔹 1.2. Joining an Array or List

Got a string **herd** (a.k.a. an array)? Round them up into one!

```java
String[] strArray = { "How", "To", "Do", "In", "Java" };
String joinedString = String.join(",", strArray);
System.out.println(joinedString);  // How,To,Do,In,Java
```

---

## 🎨 2. Java 8 – `StringJoiner` for Fancy Output

If you like your output **well-dressed**, `StringJoiner` is here to give it some pizzazz. ✨

### 🔹 2.1. Syntax Magic

Think of `StringJoiner` as a personal stylist for your strings—adding **delimiters**, **prefixes**, and **suffixes**.

```java
StringJoiner joiner = new StringJoiner("," ,"[", "]");
String joinedString = joiner.add("How")
      .add("To")
      .add("Do")
      .add("In")
      .add("Java")
      .toString();
System.out.println(joinedString);  // [How,To,Do,In,Java]
```

---

## 🚀 3. Java 8 – `Collectors.joining()` for Stream Lovers

Are you into **functional programming** and **streams**? Well, Java has got your back! 💪

```java
List<String> tokens = Arrays.asList("How", "To", "Do", "In", "Java");
String joinedString = tokens.stream()
      .collect(Collectors.joining(",", "[", "]"));
System.out.println(joinedString);  // [How,To,Do,In,Java]
```

💡 *Perfect for handling lists in a breeze!*

---

## 🛠️ 4. Apache Commons – `StringUtils.join()`

If you’re a **power user**, the **Apache Commons** library has some next-level string manipulation tools. 🦸‍♂️

**First, add this to your Maven dependencies:**

```xml
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>3.12.0</version>
</dependency>
```

### 🔹 4.1. Joining Like a Pro

```java
String[] strArray = { "How", "To", "Do", "In", "Java" };
String joinedString = StringUtils.join(strArray);
System.out.println(joinedString);   // HowToDoInJava

String joinedString2 = StringUtils.join(strArray, ",");
System.out.println(joinedString2);  // How,To,Do,In,Java
```

🚀 *Super fast, super easy!*

---

## 🎉 Wrapping Up

No matter how you like your **string sandwich**, Java has **tons of ways** to help you join your ingredients together! 🥪

If you have **questions, thoughts, or just want to share your favorite joke**, drop them in the comments! 😆👇

**Happy Coding!** 👨‍💻🎈
