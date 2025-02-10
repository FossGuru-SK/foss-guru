---
id: Introduction
title: Introduction
description: 'Java Language Basic Information'
sidebar_position: 1
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 1. What is Java Programming Language

Java is a high-level, object-oriented programming language developed by James Gosling and his team at Sun Microsystems (now owned by Oracle). It’s like the Swiss Army knife of programming languages: versatile, portable, and designed to "write once, run anywhere."

```bash
Funny Example:
"Java is like that one friend who shows up prepared for everything—whether it’s building a web app, creating Android games, or controlling your smart fridge. If Java had a motto, it would be: 'I got this.'"
```

Java code gets compiled into bytecode, which can run on any platform with a Java Virtual Machine (JVM). It’s like creating a recipe that works in every country—whether the kitchen uses gas, electric, or magic stoves.

Java is concurrent, object-oriented, and intended to let application developers “write once, run anywhere” (WORA). Java is considered a fast language, almost as fast as languages like C and Rust, but it uses a lot of memory in comparison to these languages.

![Banner java icon](@site/static/img/kits/java/jdk-kit.png)

## 2. History of Java

Java was born in 1995, which makes it old enough to drink (and debug) in most countries. It was initially called "Oak" after a tree outside James Gosling’s office, but they switched to "Java" because—surprise—it’s a type of coffee. Clearly, caffeine was the fuel behind this creation.

```bash
Fun Anecdote:
"Imagine the brainstorming session: 'Oak is cool, but coffee keeps us awake to code. Let’s go with Java!' And the rest, as they say, is history."
```

Java’s original purpose? Power interactive TV. But it turned out Java was better at running apps than making you binge-watch your favorite shows.

Java was originally developed by James Gosling at Sun Microsystems (which has since been acquired by Oracle Corporation) and released in 1995 as a core component of Sun Microsystems’ Java platform. The language derives much of its syntax from C and C++, but it has fewer low-level facilities than either of them.

The Java programming language was designed to be a machine-independent programming language powerful enough to replace native executable code. Initially started with Applets (embedded components in a webpage), Java is today the most used platform for web-based applications and web services. Today, an offshoot of the Java platform is the basis for Google’s Android operating system which powers billions of phones and other mobile devices.

Oracle Corporation is the current owner of the official implementation of the Java SE platform, following their acquisition of Sun Microsystems on January 27, 2010. This implementation is based on the original implementation of Java by Sun. The Oracle implementation is available for Microsoft Windows, Mac OS X, Linux, and Solaris.

The Oracle implementation is packaged into two different distributions:

- **Java Runtime Environment (JRE)**: which contains the parts of the Java SE platform required to run Java programs and is intended for end users.
- **Java Development Kit (JDK)**: which is intended for software developers and includes development tools such as the Java compiler, Javadoc, Jar, and a debugger.

We can read about all the previous [Java releases and their features](https://www.java.com/releases/) in the linked post.

## 3. Java Virtual Machine

Think of the JVM as the translator who ensures your Java code is understood everywhere. You write the code, the JVM converts it into something the machine understands, and voilà, your program runs. It’s like having a universal adapter for every plug in the world.

```bash
Funny Analogy:
"The JVM is like a magical chef. You give it the bytecode recipe, and it cooks up a dish that tastes amazing on every operating system—Windows, Linux, or macOS."
```

**Pro Tip**: Without the JVM, your Java code would be as useful as a coffee cup without coffee.

## 4. Automatic Memory Management

Java comes with a garbage collector, a background process that tidies up unused memory. It’s like having a cleaning robot for your code. You don’t have to worry about memory leaks or accidentally leaving variables lying around.

```bash
Funny Scenario:
"Imagine a garbage collector for your life. Ate chips? The collector picks up the bag. Wrote bad code? Well, it’s still up to you to fix that!"
```

Garbage collection ensures that memory management is efficient and hands-free. But beware: while the garbage collector is working hard, it’s still good to code responsibly.

## 5. Hello World Program

The classic "Hello, World!" program is like the handshake of programming languages. In Java, it’s straightforward:

```code
public class Application {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

The traditional “Hello, world!” program can be written in Java as. Java source file must be named after the public class they contain, appending the suffix .java, for example, Application.java.

The source file must first be compiled into bytecode, using a Java compiler, producing a file named Application.class. Only then can it be executed, or ‘launched’.

```bash
javac Application.java
```

The entry point for any Java program is the main() method. To execute the main() method, use the java command with the class name.

```bash
java Application.class
```

```bash
Funny Explanation:
"This is Java saying, 'Hi! I’m ready to conquer the world with you—one line of code at a time.'"
```

When you run this program, it prints "Hello, World!" to the console, marking your first step into the magical realm of Java programming.

## 6. Features of Java

Java boasts a buffet of features that make it the go-to language for developers. Here are some key highlights:

### 6.1 Platform-Independent

Write the code once, and it runs anywhere with a JVM. It’s like owning a universal remote that works on every TV.

### 6.2 Object-Oriented

Java is built around objects and classes, making code reusable and organized. Think of it as Lego blocks—you can build anything if you know how to stack them.

### 6.3 Robust

Java takes care of error handling and memory management. It’s like having a safety net for your code.

### 6.4 Multithreaded

Java allows you to run multiple tasks simultaneously. Imagine cooking pasta, making sauce, and preparing garlic bread—all at the same time.

### 6.5 Secure

Java’s security features are like a bouncer for your code, ensuring no shady elements sneak in.

### 6.6 OS Architecture-neutral

Java compiler generates an OS architecture-neutral class file or bytecode. For example, in C programming, int data type occupies 2 bytes of memory for 32-bit architecture and 4 bytes of memory for 64-bit architecture. However, it occupies 4 bytes of memory for both 32 and 64-bit architectures in Java.

```bash
Funny Recap:
"If Java were a person, it would be that friend who shows up to the party with snacks, fixes your Wi-Fi, and even drives you home—securely!"
```
