---
id: introduction
title: Java 14 Features Intro
description: 'Features in short'
sidebar_position: 1
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎉 Java 14: The Fun Ride of New Features! 🚀

Java 14 officially hit the scene on **March 17, 2020**, bringing a fresh wave of exciting features! Buckle up as we take a joyful ride through some of the **16** new goodies added to our beloved Java programming language. ☕😃

> You can grab the **JDK 14 binaries** [here](https://www.oracle.com/java/technologies/javase/jdk14-archive-downloads.html). Now, let’s get started! 🏎️💨

---

## 1️⃣ JEP 305 – Pattern Matching for `instanceof` (Preview)

Ever felt like Java made you write too many **boring type checks**? Well, Java 14 is here to rescue you! 🦸‍♂️

Now, `instanceof` has been upgraded with **pattern matching**, allowing us to avoid redundant casting. Here’s how it works:

```java
if (obj instanceof String s) {
    // No need for explicit casting, s is already a String!
} else {
    // Sorry, obj is not a String 😔
}
```

✅ **No more manual casting!** If `obj` is a `String`, Java automatically assigns it to `s`.

💡 **But be careful!** This only works if `obj` is **not null**.

👉 [Read More](https://openjdk.org/jeps/305)

---

## 2️⃣ JEP 368 – Text Blocks (Second Preview)

Tired of **escaping quotes** and **string concatenation nightmares**? 🥴

**Text Blocks** to the rescue! 🦸‍♀️ Say goodbye to messy multi-line strings and embrace the beauty of triple double-quotes (`"""`).

```java
String textBlock = """
    Hello,
    World!
    Welcome to Java 14 🎉
    """;
```

💡 **Cool Fact:** Text blocks behave exactly like `String` literals, so you can use them anywhere!

```java
String string = "Hello";
String textBlock = """
                    World""";
System.out.println(string + textBlock); // HelloWorld
```

👉 [Read More](https://openjdk.org/jeps/368)

---

## 3️⃣ JEP 358 – Helpful NullPointerExceptions 😱

Let’s be honest – **NullPointerExceptions (NPEs)** have haunted every Java developer at some point. 😨 But Java 14 makes debugging them a breeze! 🎉

Enable this magic by running your program with:

```java
-XX:+ShowCodeDetailsInExceptionMessages
```

Now, when an NPE strikes, Java will tell you exactly **which variable was null!** 🎯

```java
public class HelpfulNPEExample {
    public static void main(String[] args) {
        Employee e = null;
        System.out.println(e.getName());
    }
}
```

🔥 **Before:** `NullPointerException`
🔥 **Now:** `Cannot invoke "Employee.getName()" because "e" is null`

No more guessing games! 🎯

👉 [Read More](https://openjdk.org/jeps/358)

---

## 4️⃣ JEP 359 – Records (Preview) 📋

Java 14 introduces **Records**, a fancy way of saying: *“No more boilerplate code for data classes!”* 🎉

```java
public record EmployeeRecord(Long id, String firstName, String lastName, String email, int age) {}
```

💡 **No need to manually write** `getters`, `equals()`, `hashCode()`, and `toString()` – Java generates them all! 🎩✨

👉 [Read More](https://openjdk.org/jeps/359)

---

## 5️⃣ JEP 361 – Switch Expressions (Standard) 🎛️

The **Switch Statement** just leveled up! Now it **returns values** and supports **multiple case labels**. 🎯

```java
public static Boolean isWeekDay(Day day) {
    return switch(day) {
        case MON, TUE, WED, THUR, FRI -> {
            System.out.println("It is a Weekday!");
            yield true;
        }
        case SAT, SUN -> {
            System.out.println("It is the Weekend!");
            yield false;
        }
    };
}
```

💡 **No more break statements!** And for enums, **default cases are optional**!

👉 [Read More](https://openjdk.org/jeps/361)

---

## 6️⃣ Other Cool Features 🛠️

### 🔹 JEP 343 – Packaging Tool (Incubator)

**Create native installers** for Java applications (MSI, EXE, DMG, RPM, DEB). 🏗️

```sh
jpackage --name myapp --input lib --main-jar main.jar
```

### 🔹 JEP 345 – NUMA-Aware Memory Allocation for G1

**Better memory management** for multi-core processors. ⚡

### 🔹 JEP 349 – JFR Event Streaming 📊

Continuous **JDK Flight Recorder (JFR)** event monitoring.

### 🔹 JEP 352 – Non-Volatile Mapped Byte Buffers 💾

Support for **persistent memory** in `MappedByteBuffer`.

### 🔹 JEP 363 – Remove CMS Garbage Collector 🗑️

CMS is **gone**! Time to embrace **G1 or ZGC**.

### 🔹 JEP 367 – Remove Pack200 API 🚫

Pack200 compression is history! Java is getting **lighter**.

### 🔹 JEP 370 – Foreign-Memory Access API (Incubator)

**Safely access non-heap memory** (e.g., native or persistent memory). 🚀

---

### 🎉 That’s a Wrap! 🎬

Java 14 is packed with **awesome features** to make coding more fun and efficient! Have questions? Drop them in the comments below! 💬👇

** Happy Coding! 🚀☕**
