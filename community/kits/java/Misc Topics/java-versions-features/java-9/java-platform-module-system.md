---
id: java-platform-module-system
title: Java Platform Module System
description: 'JPMS (Java Platform Module System) is the major enhancement in Java 9.'
sidebar_position: 1
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🚀 Java Platform Module System (JPMS) – The Fun Version 🎭

Welcome to the exciting, slightly quirky world of JPMS (Java Platform Module System)! 🎩✨ Java 9 brought us something fancy called **Project Jigsaw** 🧩, and trust me, it’s a game-changer. If you’ve ever wrestled with dependencies and felt like you were coding inside a spaghetti bowl 🍝, then JPMS is here to save the day!

## 🧐 What the Heck is a Module Anyway?

Think of a **module** as a VIP club in your Java application. It has its own entrance (public APIs), its own secret rooms (private implementation), and it only lets in guests it trusts (explicit dependencies). In simple terms, modules are **super-organized packages with extra rules**.

### 🛡️ The Three Golden Rules of Modules

1. **Strong Encapsulation 🔒** – Hide the messy details, so your module is like a magician’s trick – looks smooth on the outside, but nobody knows what’s happening underneath!
2. **Stable Abstraction 🎭** – Offer clear and stable public APIs, so others can use your module without breaking things every time you tweak your code.
3. **Explicit Dependencies 🧾** – Clearly declare what your module needs, avoiding those nasty surprise runtime errors that make you question your life choices.

## 🚨 The Java 8 Problem – A Messy Apartment 🏚️

Before Java 9, organizing your code was like living in an apartment with no walls – everything was just... *there*. Java used **packages** to group classes, and **access modifiers** (public, private, etc.) to control visibility. But dependency management? That was a total **free-for-all**. 😵‍💫

- You imported whatever you needed. 🚚
- You compiled your code. 📦
- At runtime, everything could break because dependencies were unclear. 💥
- Tools like Maven and Gradle became our band-aids. 🩹

## 🏆 JPMS to the Rescue

With Java 9, we get **modules that actually know what they need**. It’s like Marie Kondo came in and decluttered our dependencies. 🧹✨ Here’s how JPMS fixes our problems:

1. **It modularizes the JDK itself** – Meaning Java’s core is now a neat, structured set of modules instead of one giant blob.
2. **It provides a module system for developers** – So we can write **clean, well-structured, and scalable** applications.

### 🏗️ Java Base Module – The VIP of Java

Java 9 introduced a special **java.base** module – the mother of all modules. Every module automatically depends on it. No exceptions. It’s the **Beyoncé of Java** – you can’t ignore it. 🕶️

### 🧐 Modular vs. Non-Modular Code – Spot the Difference

- A **module** is basically just a fancy jar file, with a `module-info.class` file in it.
- To use a module, you put it in the **modulepath** instead of the classpath. (Yes, new terms to learn, yay! 🎉)
- If you throw a modular jar into the classpath, Java ignores its module system and treats it like a normal jar. 🙄

## 🤓 How to Write Modular Code (Because You’re Fancy Now)

### 1️⃣ Create a Java Modular Project 🏗️

Start a new Java project. Give it a cool name. I chose **JavaAppOne**, but you can call it **Codezilla** if you want. 😎

### 2️⃣ Create Java Modules 📦

Let’s add two modules: `helloworld` and `test`.

#### **Project Structure:**

```java
Java 9 Modules Project Structure
  ├── helloworld
  │   ├── module-info.java
  │   ├── com.howtodoinjava.demo.HelloWorldApp.java
  ├── test
  │   ├── module-info.java
  │   ├── com.test.TestApp.java
```

#### **helloworld/module-info.java**

```java
module helloworld {
    exports com.howtodoinjava.demo;
}
```

#### **HelloWorldApp.java**

```java
package com.howtodoinjava.demo;

public class HelloWorldApp {
    public static void sayHello() {
        System.out.println("Hello from HelloWorldApp");
    }
}
```

#### **test/module-info.java**

```java
module test {
    requires helloworld;
}
```

#### **TestApp.java**

```java
package com.test;

import com.howtodoinjava.demo.HelloWorldApp;

public class TestApp {
    public static void main(String[] args) {
        HelloWorldApp.sayHello();
    }
}
```

### 3️⃣ Finally, Run Your Modular Code 🏃

#### **Output:**

```java
Hello from HelloWorldApp
```

BOOM. 💥 Modules are working! 🎉

## 🎯 The Final Word – Why Should You Care?

JPMS isn’t just another Java feature – it’s an **architectural revolution**. 🏛️ If you’ve ever heard horror stories about **spaghetti architectures** and **messy monoliths**, modularity is here to save the day. 🦸

But is JPMS perfect? Nope. 🤷 Some frameworks are still catching up, and it may take a while for full adoption. But Java has taken **a big leap forward**, and it’s worth getting ahead of the curve. 🚀

### 🎊 Happy Learning, and May Your Code Always Compile! 🎊
