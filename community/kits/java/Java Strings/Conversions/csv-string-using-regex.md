---
id: csv-string-using-regex
title: Split CSV String using Regex in Java
description: 'Learn to split string by comma or space and store in array or arraylist. Use given Java program to convert string to List in Java.'
sidebar_position: 10
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎉 Splitting and Handling CSV in Java - The Fun Way

Working with CSV (Comma-Separated Values) in Java? No worries! We’ve got some cool tricks to split, store, and play around with CSV data like a pro. Let’s dive in! 🚀

---

## 1️⃣ Splitting CSV with Regular Expression

Want to break up a CSV string into individual words? Use a regex pattern like `"\\s*,\\s*"` to handle those pesky spaces around commas! ✂️

```java
String blogName = "how, to, do, in, java";
String[] tokenArray = blogName.split("\\s*,\\s*");

Assertions.assertArrayEquals(new String[]{"how", "to", "do", "in", "java"}, tokenArray);
```

💡 **Magic Alert!** This regex cleans up extra spaces so you get clean words, not messy ones. Example:

```java
Assertions.assertArrayEquals(new String[]{"a", "b", "c"}, "a, b,c".split("\\s*,\\s*"));
Assertions.assertArrayEquals(new String[]{"a", "b", "c"}, "a,   b,    c".split("\\s*,\\s*"));
```

---

## 2️⃣ Convert Array to List 🗂️

So you’ve got an array, but lists are more fun? Use `Arrays.asList()` to get a **fixed-size, unmodifiable** list.

```java
String[] tokenArray = blogName.split("\\s*,\\s*");
List<String> tokenList = Arrays.asList(tokenArray);
```

💡 **Want a flexible (mutable) list?** Just copy it into an `ArrayList`!

```java
ArrayList<String> tokenArrayList = new ArrayList<>(Arrays.asList(tokenArray));
```

Now you can modify it however you like! 🎨

---

## 3️⃣ Convert a List to CSV String 🎭

Need to stitch that list back into a CSV? Java 8's `String.join()` makes it effortless!

```java
List<String> list = Arrays.asList("how", "to", "do", "in", "java");
String result = String.join(",", list);    //Delimited by comma
Assertions.assertEquals("how,to,do,in,java", result);
```

And boom! 🎆 You’ve got your list back into a nice CSV format.

---

## 🎯 Wrapping Up

Now you’re a CSV ninja 🥷 in Java! Whether you're splitting CSVs, converting arrays to lists, or joining them back, these tricks will make your life easier.

🚀 Happy Coding and Learning! 🎉
