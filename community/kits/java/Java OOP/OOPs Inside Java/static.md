---
id: static
title: Java Static
description: 'Static keyword in java can be applied on variables, methods, blocks, import and inner classes. Learn the effect of using static keyword in detail.'
sidebar_position: 3
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎉 The Fun Side of the `static` Keyword in Java! 🚀

The `static` keyword in Java is like that one friend who's always around—reliable, ever-present, and never needs an invite! You can slap `static` on variables, methods, blocks, imports, and even inner classes. Let's dive in and uncover the magic of `static` in Java, one step at a time!

---

## 📌 Table of Contents

1. [Static Variable](#1️⃣-static-variable)
2. [Static Method](#2️⃣-static-method)
3. [Static Import Statement](#3️⃣-static-import-statement)
4. [Static Block](#4️⃣-static-block)
5. [Static Class](#5️⃣-static-class)
6. [Summary](#-summary)

---

## 1️⃣ Static Variable

### 🎯 What’s the Deal with Static Variables?

A `static` variable is like a celebrity—there’s only one of it in the entire program, and everyone wants access!

#### **Syntax:**

```java
ACCESS_MODIFER static DATA_TYPE VARNAME;
```

Example:

```java
public static Integer staticVar;
```

This means:

- **Only one copy exists**, no matter how many instances of the class are created.
- **Accessible to all instances**—change it in one place, and it updates everywhere!

#### **Example:**

```java
public class JavaStaticExample {
  public static void main(String[] args) {
    DataObject objOne = new DataObject();
    objOne.staticVar = 10;
    objOne.nonStaticVar = 20;

    DataObject objTwo = new DataObject();

    System.out.println(objTwo.staticVar);   // 10
    System.out.println(objTwo.nonStaticVar); // null

    DataObject.staticVar = 30;  // Direct Access

    System.out.println(objOne.staticVar);   // 30
    System.out.println(objTwo.staticVar);   // 30
  }
}

class DataObject {
  public static Integer staticVar;
  public Integer nonStaticVar;
}
```

#### **Output:**

```java
10
null
30
30
```

Notice how updating `staticVar` updates it everywhere? That’s the power of `static`!

---

## 2️⃣ Static Method

### 📢 What’s So Special About Static Methods?

- A `static` method belongs to the **class, not the instance**.
- It **can’t access non-static variables**.
- Can be called **without creating an object**.

#### **Syntax:1**

```java
ACCESS_MODIFER static RETURN_TYPE METHOD_NAME;
```

#### **Example:1**

```java
public class JavaStaticExample {
  public static void main(String[] args) {
    DataObject.staticVar = 30;

    Integer value1 = DataObject.getStaticVar(); // class reference
    DataObject objOne = new DataObject();
    Integer value2 = objOne.getStaticVar();   // instance reference

    System.out.println(value1);
    System.out.println(value2);
  }
}

class DataObject {
  public static Integer staticVar;

  public static Integer getStaticVar() {
    return staticVar;
  }
}
```

#### **Output:1**

```java
30
30
```

(Yes, you can call it using an instance, but that’s just extra effort! 😆)

---

## 3️⃣ Static Import Statement

### 🔌 Plug & Play: Importing Static Members

Just like normal imports, but specifically for **static** members!

#### **Syntax:2**

```java
import static <<package>>.<<type>>.<<static member>>;
```

#### **Example:2**

```java
import static java.lang.System.out;

public class JavaStaticExample {
  public static void main(String[] args) {
    DataObject.staticVar = 30;
    out.println(DataObject.staticVar);  // No need for System.out.println()
  }
}

class DataObject {
  public static Integer staticVar;
}
```

#### **Output:2**

```java
30
```

(One less `System.out`, one more happy developer! 😎)

---

## 4️⃣ Static Block

### 🏗️ Initializing Before You Even Begin

A **static block** runs **before anything else in the class**!

#### **Example:3**

```java
class DataObject {
  static {
    System.out.println("Inside static initializer");
  }
}
```

#### **Output:3**

```java
Inside static initializer
```

Multiple static blocks? No worries, they execute **in order**!

---

## 5️⃣ Static Class

### 🏰 The Inner Static Class

In Java, you **can’t** have a top-level `static` class, but you **can** have a `static` nested class!

#### **Example:4**

```java
public class JavaStaticExample {
  public static void main(String[] args) {
    System.out.println(DataObject.StaticInnerClass.innerStaticVar);
  }
}

class DataObject {
  static class StaticInnerClass {
    static Integer innerStaticVar = 70;
  }
}
```

#### **Output:4**

```java
70
```

(Inner classes are the VIP members of `static`!)

---

## 🎯 Summary

🔹 `static` variables and methods belong to the **class, not objects**.

🔹 You **don’t** need an instance to access `static` members.

🔹 **Non-static** members **can’t** be accessed inside `static` methods, blocks, or inner classes.

🔹 **Multiple static blocks** execute **in order**.

🔹 **Only inner classes** can be `static`.

🔹 **Static imports** make your life easier by allowing you to use static members **without class references**.

🎉 **Congratulations! You just mastered the `static` keyword in Java!** 🚀

Happy Coding! 😃👨‍💻👩‍💻
