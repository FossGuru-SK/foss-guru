---
id: introduction
title: Guide to String Class
description: 'Strings are always the most used constructs in any programming language. Learn to work on String in Java.'
sidebar_position: 1
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎸 Java Strings: The Rockstar of Text Handling! 🎶

A **String** in Java is like your favorite song lyrics—once written, you can't change them! Strings are objects of the `java.lang.String` class and hold an **immutable** sequence of characters. But don’t worry, Java provides plenty of ways to manipulate them like a DJ remixing a track! 🎧

---

## 🎬 1. Creating a New String

### 1.1. String Literal - The Shortcut! 🚀

String literals are like instant coffee—quick, efficient, and always stored in the **String Constant Pool** for better performance. Just wrap your text in double quotes, and you're good to go!

```java
String blogName = "howtodoinjava.com";
String welcomeMessage = "Hello World !!";
```

### 1.2. String Object - The Memory Hog 🤯

If you insist on creating a brand-new instance every time (maybe you like to live dangerously?), use the `new` keyword. But beware—each string gets its own memory space in the **heap**, making it a bit of a memory hog.

```java
String blogName1 = new String("howtodoinjava.com");
String blogName2 = new String("howtodoinjava.com");
String blogName3 = new String("howtodoinjava.com");
```

Now you have **three** different objects containing the same value. Hope you’ve got extra RAM! 💾

---

## 🎛 2. String Methods - Java’s DJ Deck 🎚

Java Strings come with a *ton* of built-in methods to manipulate them like a pro DJ remixing beats! 🎵

### 🎯 Character Sniping

- `char charAt(int index)` → Fetches the character at a given index (like picking your favorite pizza topping 🍕).

### 🏆 Comparing Strings

- `boolean equals(Object obj)` → Checks if two strings match **exactly**.
- `boolean equalsIgnoreCase(String string)` → Same as `equals()` but ignores UPPER/lower case differences.
- `int compareTo(String string)` → Compares strings lexicographically (dictionary order!).
- `int compareToIgnoreCase(String string)` → Same as `compareTo()`, but case doesn’t matter.

### 🚀 Searching in Strings

- `boolean startsWith(String prefix)` → Does the string start with this? (Like checking if a phone number starts with +1 📞).
- `boolean endsWith(String suffix)` → Does it end with this? (Like checking if an email is from `.com`).
- `int indexOf(String str)` → Finds the **first** occurrence of a substring.
- `int lastIndexOf(String str)` → Finds the **last** occurrence of a substring.

### ✂️ Slicing & Dicing

- `String substring(int beginIndex)` → Extracts a part of the string starting at `beginIndex`.
- `String substring(int beginIndex, int endIndex)` → Extracts part of the string between `beginIndex` and `endIndex`.

### 🔀 String Manipulation

- `String concat(String str)` → Joins two strings, like best friends holding hands! 🤝
- `String replace(char oldChar, char newChar)` → Replaces **every** occurrence of `oldChar` with `newChar`.
- `String replace(String target, String replacement)` → Replaces **all** occurrences of `target` with `replacement`.
- `String trim()` → Removes pesky leading and trailing spaces.

### 🔡 Case Conversions

- `String toUpperCase()` → ALL CAPS LIKE YOU’RE SHOUTING!
- `String toLowerCase()` → whisper mode... 🤫

### 📌 Checking Stuff

- `boolean contains(CharSequence s)` → Does the string contain this sequence?
- `boolean isEmpty()` → Returns true if the string has zero characters.

### 🔣 Encoding & Decoding

- `char[] toCharArray()` → Breaks the string into an array of characters.
- `byte[] getBytes()` → Converts the string into a sequence of bytes.

### 📏 Measuring & Formatting

- `int length()` → Returns the number of characters in the string (handy for Twitter limits!).
- `static String format()` → Returns a formatted string (like printf but cooler).

### 🎭 Pattern Matching & Replacement

- `boolean matches(String regex)` → Checks if the string matches a regex pattern.
- `String replaceAll(String regex, String replacement)` → Replaces **all** matches of a pattern.
- `String replaceFirst(String regex, String replacement)` → Replaces **only the first** match.

### 🔗 Joining Strings

- `static String join(CharSequence delimiter, CharSequence... elements)` → Joins multiple strings with a specified separator. Think CSV files! 📄

```java
String result = String.join(", ", "Apple", "Banana", "Cherry");
System.out.println(result); // Output: Apple, Banana, Cherry
```

---

## 🎉 Conclusion: String Magic in Java ✨

Strings in Java are super powerful, but **immutable**—meaning they can’t be changed directly. However, with so many built-in methods, you can twist and tweak them in almost any way imaginable. 🚀

Whether you need to **split, search, compare, replace, or format** strings, Java has got your back! So go ahead and start playing around with these string methods. Who knows? You might just compose the next hit Java song! 🎶

Happy coding! 🖥️😎
