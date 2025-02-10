---
id: hello-world
title: Hello World Program
description: 'Java Language hello-world program'
sidebar_position: 5
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## The "Hello, World!" Program: A Fun and Engaging Introduction to Java

In any programming language, a "Hello, World!" program is the gateway to coding—a simple yet powerful incantation that magically brings text to life on your screen. Think of it as your first "hello" to the coding universe, a warm-up before diving into more complex spells (a.k.a. real-world applications).

In this tutorial, we’ll explore how to write a "Hello, World!" program in Java, from the latest Java 21 features to the traditional verbose approach. Buckle up, because it’s going to be an amusing ride!

## 1. Java Hello World Program – Java 21 and Later 🚀

Since Java 21, coding newbies get a little gift: unnamed classes and instance main methods. This means we can write Java programs with minimal syntax. Less boilerplate, more fun!

Here’s how simple it gets:

### **HelloWorld.java**

```java
void main() {
    System.out.println("Hello, World!");
}
```

Yes, that's the whole program! Just save it as `HelloWorld.java` and run it. It’s like Java finally decided to give us a break.

When executed, you’ll see:

```java
Hello, World!
```

And just like that, you're officially a Java developer! 🎉

---

## 2. Java Hello World Program [≤ Java 20] 🏛️

Before Java 21, we had to be a little more "formal" (read: verbose). Here’s the classic way to print "Hello, World!":

### *HelloWorld.java*

```java
public class HelloWorld {

    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

🔍 **Key Observations:**

- **`public class HelloWorld`**: Java is an object-oriented language, so everything goes inside a class.
- **`public static void main(String[] args)`**: The main method is the program’s entry point.
- **`System.out.println("Hello, World!");`**: The magic spell that prints our message!

💡 Pro Tip: **Write it yourself instead of copy-pasting.** It'll help you understand Java’s case sensitivity better. (Trust me, missing a capital letter here and there will haunt you later!)

---

## 3. Compiling and Executing the Program ⚙️

Unlike some languages where you can just run the source file directly (*cough* Python *cough*), Java requires an extra step: **compilation**.

### **Step 1: Compile the Program**

```java
javac HelloWorld.java
```

This creates a `HelloWorld.class` file containing Java **bytecode**. But bytecode isn’t directly executable—Java needs its own special interpreter, the **Java Virtual Machine (JVM)**.

### **Step 2: Run the Program**

```java
java HelloWorld
```

*Output:*

```java
Hello, World!
```

🔴 **Important:** Don’t include the `.class` extension when running the file. Just type `java HelloWorld`, not `java HelloWorld.class`.

### **Bonus: Running a Java 11+ Program Without Compilation**

Since Java 11, you can skip the explicit compilation step for simple single-file programs. Just run:

```java
java HelloWorld.java
```

It's like Java finally realized that life is too short for unnecessary steps!

---

## 4. How Does It Work? 🧐

Let’s break down the classic Java 20 and earlier version:

```java
public static void main(String[] args) { ... }
```

### **Deep Dive into the Main Method:**

- **`public`**: Allows JVM to call this method from anywhere.
- **`static`**: Lets Java execute it without needing an object of the class.
- **`void`**: Means this method doesn’t return anything.
- **`main`**: The method name—Java looks for this when starting execution.
- **`String[] args`**: An array to accept command-line arguments (not needed here but useful later!).

And then we have:

```java
System.out.println("Hello, World!");
```

- **`System.out`**: Standard output stream.
- **`println`**: Prints the text with a newline at the end.

So, when you put everything together, Java sees this as:

1. "Okay, I found the `main` method!"
2. "There's a command to print something. Let's display it."
3. "Mission accomplished!"

And boom—"Hello, World!" appears on your screen! 🎆

---

## Conclusion 🎯

Writing your first Java program is like saying "hello" to a new adventure. With Java 21, things have gotten a lot simpler, but knowing the classic way is still essential. Now that you’ve mastered this first step, you’re ready to explore more complex concepts—variables, loops, and beyond!

Happy coding! 🚀
