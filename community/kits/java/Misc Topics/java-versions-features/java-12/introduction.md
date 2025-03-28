---
id: introduction
title: Java 12 Features Intro
description: 'Features in short'
sidebar_position: 1
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎉 Java 12 – What's New and Exciting? 🚀

Java 12 (released on March 19, 2019) brought some cool new features and improvements for developers and architects. Let’s dive in and explore what's fresh and exciting in the world of Java! 😎

---

## 1️⃣ Collectors.teeing() in Stream API 🎯

Ever wished you could process a stream into two different collectors and then merge the results? Well, Java 12 says, *"Wish granted!"* 🧞‍♂️

The new `teeing()` collector allows you to do exactly that! It takes two collectors, processes the stream through both, and then merges the results using a function.

### Example 🏆

Want to find both the highest and lowest salary in a single statement? Here you go:

```java
SalaryRange salaryRange = Stream
        .of(56700, 67600, 45200, 120000, 77600, 85000)
        .collect(teeing(
                minBy(Integer::compareTo),
                maxBy(Integer::compareTo),
                SalaryRange::fromOptional));
```

How cool is that? 🤩

---

## 2️⃣ String API Changes ✨

### 2.1. `String.indent()` 🏠

Need to adjust the indentation of a string? Just use `.indent()` and let Java handle the whitespace for you!

```java
String result = "foo\nbar\nbar2".indent(4);
System.out.println(result);
```

#### Output

```java
    foo
    bar
    bar2
```

(Note: Java even adds a newline if it's missing. Neat, right? 🤓)

---

### 2.2. `String.transform()` 🔄

Tired of chaining multiple string operations? `transform()` lets you apply a function to transform a string in one go!

```java
List<String> names = List.of("   Alex", "brian");
List<String> transformedNames = new ArrayList<>();

for (String name : names) {
    String transformedName = name.transform(String::strip)
                      .transform(StringUtils::toCamelCase);
    transformedNames.add(transformedName);
}
```

🚀 **One method to rule them all!**

---

### 2.3. String Constants 🏗️

Java 12 brings some under-the-hood improvements to the `String` class, adding support for `Constable` and `ConstantDesc`. These are mostly useful for bytecode parsing and generation (looking at you, **Byte Buddy** users! 👀).

---

## 3️⃣ `Files.mismatch(Path, Path)` 🔍

Ever wondered how to compare two files and spot the first difference? Java 12’s `Files.mismatch()` does exactly that!

```java
Path file1 = tempDir.resolve("helloworld1.txt");
Path file2 = tempDir.resolve("helloworld2.txt");

long diff = Files.mismatch(file1, file2); // Returns position of first mismatch or -1 if identical
```

**Finally!** No more reading files manually for comparison. 🎉

---

## 4️⃣ Compact Number Formatting 🔢

Reading big numbers can be a headache. Who wants to see `3,600,000` when `3.6M` is so much easier? 🤯

Java 12 introduces `NumberFormat.getCompactNumberInstance()` to format numbers in a compact way!

```java
NumberFormat formatter = NumberFormat.getCompactNumberInstance(Locale.US, NumberFormat.Style.SHORT);
String formattedString = formatter.format(25000L);  // 25K
```

Now your UI can display numbers like a pro! 🏆

---

## 5️⃣ Support for Unicode 11 🌍

Java 12 now supports **Unicode 11**, bringing **684 new characters** (including new emojis! 🎉🔥🤣).

Now you can safely use **🦄, 🥑, and 🤖** in your Java programs! 🎈

---

## 6️⃣ Switch Expressions (Preview) 🔄

Switch statements just got a major **upgrade**! 🚀 Instead of writing verbose case blocks, you can now use **arrow syntax** and directly assign values!

### Before (Old and Boring 😴)

```java
boolean isWeekend = switch (day)
        {
            case MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY -> false;

            case SATURDAY, SUNDAY -> true;

            default -> throw new IllegalStateException("Illegal day entry :: " + day);
        };

        System.out.println(isWeekend);  //true or false - based on current day
```

### After (New and Sleek ✨)

```java
boolean isWeekend = switch (day) {
  case MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY -> false;
  case SATURDAY, SUNDAY -> true;
  default -> throw new IllegalStateException("Illegal day entry :: " + day);
};
```

🔥 **Less code, more readability!** (Don't forget to enable preview mode: `--enable-preview`)

---

## 🚀 Wrapping Up

Java 12 may not be an LTS release, but it surely packs some great features! From powerful collectors to better string handling and improved file operations, there's a lot to love! ❤️

Got questions? Drop them in the comments (or just code them away! 😆).

Happy Learning and Happy Coding! 🎉👨‍💻👩‍💻
