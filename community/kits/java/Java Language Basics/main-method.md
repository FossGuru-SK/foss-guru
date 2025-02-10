---
id: main-method
title: Java's `main()` Method
description: 'Java Language `main()` Method'
sidebar_position: 7
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎭 The Hilarious Saga of Java's `main()` Method 🎭

Ever wondered why Java’s `main()` method is **public, static, and void**? Why is it called `main`? And what sorcery does the **JVM** perform when it gets summoned? 🤔

Buckle up, because we’re about to embark on an epic journey into the depths of Java's `main()` method! 🚀

## 🎬 Java 21: The Plot Twist

Since **Java 21**, you can now create instance `main()` methods without the **public** and **static** keywords, and even ditch the method arguments! Java developers everywhere rejoiced… and then continued writing `public static void main(String[] args)`. 🤷‍♂️

But don’t worry! If you’re still rocking the **classic class-based Java**, everything in this article still applies. 😉

---

## 1️⃣ **Java `main()` Method Syntax**

First, let’s refresh our memory with the classic syntax of the `main()` method:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!!");
    }
}
```

This is the **“Open Sesame”** of Java programs! Without it, your Java application is like a party with no host—awkward and non-functional. 🫠

---

## 2️⃣ **Why is `main` Public?**

Excellent question! The truth? No one really knows. 😅 But let's analyze it:

- The `main()` method needs to be accessible **to the JVM** so it can launch your application like a boss. 💼
- Even if Java used **Java Native Interface (JNI)** to invoke `main()`, making it **public** keeps things **simple and obvious**.
- Also, why **not** public? Every method has an access modifier, and `main()` just follows the crowd! 🤷‍♀️

💡 **Fun Fact:** If `main()` is **not public**, there’s **no compilation error**—just a **runtime disaster**! 🔥

```java
public class Main {
    void static main(String[] args) {  // Oops! Bad syntax!
        System.out.println("Hello, World!!");
    }
}
```

💀 **Output:**

```java
Error: Main method not found in class Main, please define the main method as:
   public static void main(String[] args)
```

Moral of the story? **Java likes things public.** 😎

---

## 3️⃣ **Why Static?**

Imagine a world where `main()` wasn’t static. Now, to invoke it, Java would need to create an **object of the class first**. 🤯 But wait...

- What if the class had multiple constructors? Which one should Java use? 🤷
- What if the constructor had parameters? Where would the JVM get them from? 🧐

Sounds like a nightmare, right? **This is why `main()` is static!** Java keeps it simple and avoids unnecessary drama. 🎭

💡 **If you remove `static`, Java won't complain at compile-time, but will smack you at runtime!**

```java
public class Main {
    public void main(String[] args) {
        System.out.println("Hello, World!!");
    }
}
```

💀 **Output:**

```java
Error: Main method is not static in class Main, please define the main method as:
   public static void main(String[] args)
```

Lesson learned: **Always keep your `main()` method static!** 🔥

---

## 4️⃣ **Why Void?**

Because **who’s going to use the return value? The JVM? Nah.**

- Java programs **end when `main()` finishes**, so there's no need to return anything.
- Want to tell the JVM something? Use `System.exit(int)`. A **non-zero** exit code means **“something went wrong”**. 😬
- Otherwise, Java just wants to **run your code and move on with life.** 😎

---

## 5️⃣ **Why is it Called `main`?**

Honestly? **Because C and C++ did it first.** 🏴‍☠️

- The name **could have been anything**, but standardization makes life easier.
- Most programmers were already comfortable with `main()`, so **Java just went with the flow.** 🌊

If it were up to us? We’d probably name it **“launchMePlease()”** or **“letTheMagicBegin()”**. 😂

---

## 6️⃣ **What Happens Internally When You Call `main()`?**

When you run:

```java
java Main
```

Here’s what actually happens:

1. `java.exe` (yes, it's not the JVM) starts executing.
2. It makes **Java Native Interface (JNI)** calls.
3. The actual JVM is loaded as a **DLL file** (because `java.exe` is just a simple C program!).
4. The JVM:
   - Loads the **class containing `main()`**.
   - Looks for a **public static void main(String[] args)** method.
   - Converts command-line arguments into a **String array**.
   - Calls `main()` and lets the magic unfold! 🎩✨

🚀 **In short, Java reflection + native calls = your program running!**

---

## 7️⃣ **The Mysterious `main()` Method in Java Source Code**

Want to see what happens behind the scenes? Peek into the **Java source code**:

```c
/* Get the application's main class. */
if (jarfile != 0) {
    mainClassName = GetMainClassName(env, jarfile);
    ...
}

mainClass = LoadClass(env, classname);
if (mainClass == NULL) {
    /* exception occurred */
    ...
}

/* Get the application's main method */
mainID = (*env)->GetStaticMethodID(env, mainClass, "main", "([Ljava/lang/String;)V");
...

/* Invoke main method. */
(*env)->CallStaticVoidMethod(env, mainClass, mainID, mainArgs);
```

**Translation:** Java goes full **ninja mode**, locates `main()`, checks it’s `static`, and then BOOM 💥—your program runs! 🔥

---

## 🎯 **Final Thoughts**

💡 The `main()` method is **the beating heart of every Java application.** It’s the **starting point**, the **entry gate**, and the **launch pad** of your code. 🚀

Most developers use it, few question it, and even fewer truly **understand** it. Hopefully, now you do! 😎

**Happy Learning, and May Your Java Always Compile!** ☕🔥
