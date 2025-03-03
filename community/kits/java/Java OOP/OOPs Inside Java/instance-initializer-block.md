---
id: instance-initializer-block
title: Java Instance Initializer Block
description: 'Java instance initializers are the code blocks containing the instructions to run every time a new class instance is created in runtime.'
sidebar_position: 5
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎉 Java Instance Initializers - The Secret Sauce of Object Creation! 🚀

Java instance initializers are like little magic tricks that run every time you create an object. They’re those sneaky code blocks that help initialize things without cluttering up your constructors. Let’s dive in! 🏊‍♂️

---

## 🧑‍💻 1. Syntax - The Mysterious Curly Braces {}

An instance initializer block is created using curly braces `{}`. Inside those braces, you put all the fancy initialization logic that every constructor would otherwise have to repeat. Here’s how it looks:

```java
public class DemoClass {

  public DemoClass() {
    // Constructor stuff
  }

  /* Mysterious initializer block */
  {
    // Magic initialization happens here! 🎩✨
  }
}
```

---

## ⚙️ 2. How Does the Instance Initializer Block Work?

During compilation, the Java compiler sneakily moves the initializer block’s bytecode **right after** the `super()` statement in every constructor. Let’s check this out in action:

```java
public class Main {

  public Main() {
    System.out.println("Statement in constructor");
  }

  {
    System.out.println("Statement in initializer");
  }
}
```

🔍 After compilation, this is what Java logically does:

```java
public class Main {

  public Main() {
    super();
    System.out.println("Statement in initializer");
    System.out.println("Statement in constructor");
  }
}
```

📢 **Output when an instance is created:**

```java
Statement in initializer
Statement in constructor
```

---

## 📜 3. Initializer Blocks Run in Sequence (Order Matters!)

If a class has multiple initializer blocks, they **execute in the order they appear in the class**. First come, first served! 🍽️

```java
public class Main {

  public Main() {
    System.out.println("Statement in constructor 2");
  }

  {
    System.out.println("Statement in initializer 1");
  }

  {
    System.out.println("Statement in initializer 2");
  }
}
```

📢 **Output:**

```java
Statement in initializer 1
Statement in initializer 2
Statement in constructor 2
```

See? The initializers always go **before** the constructor statements! 🤯

---

## 👨‍👩‍👦 4. Inheritance - The Family Tree of Initializers 🌳

When you mix instance initializers with inheritance, here’s what happens when you create a **ChildClass** object:

1. The child class constructor is called.
2. The first statement in the child constructor is `super()`, which calls the parent constructor.
3. The **parent’s initializers** execute **before** the parent constructor.
4. The **parent’s constructor** runs.
5. The **child’s initializers** execute **before** the child constructor.
6. Finally, the **child’s constructor** runs.

Let’s see it in action:

```java
class ParentClass {

  public ParentClass() {
    System.out.println("In ParentClass Constructor");
  }

  {
    System.out.println("In ParentClass Instance Initializer");
  }
}

class ChildClass extends ParentClass {

  public ChildClass() {
    super();  // Java does this for you if you forget!
    System.out.println("In ChildClass Constructor");
  }

  {
    System.out.println("In ChildClass Instance Initializer 1");
  }

  {
    System.out.println("In ChildClass Instance Initializer 2");
  }
}
```

📢 **Output when we create a `ChildClass` object:**

```java
In ParentClass Instance Initializer
In ParentClass Constructor
In ChildClass Instance Initializer 1
In ChildClass Instance Initializer 2
In ChildClass Constructor
```

Boom! The parent’s initializers and constructor run **before** the child’s. 🤯

---

## 🌟 5. Features of Instance Initializers

Instance initializers are pretty cool! Here are their key **superpowers**:

✅ You can define **multiple** initializers in a class.
✅ They **execute in order** from top to bottom.
✅ Parent class initializers execute **before** child class initializers.
✅ If you don’t provide `super()`, Java inserts it for you in the child constructor.
✅ After all initializers finish, the **constructor statements** execute.
✅ You can call **this()** and **super()** in initializers to mess with constructor chaining.

---

## 🎉 Final Thoughts

Instance initializers might seem like Java’s hidden Easter eggs 🥚, but they serve a solid purpose! They reduce redundancy in constructors and make initialization neat and efficient.

So next time you write a constructor, ask yourself – **“Could this be an initializer block instead?”** 🤔

**Happy Learning! Keep Coding! 🚀😃**
