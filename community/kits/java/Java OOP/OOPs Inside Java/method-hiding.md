---
id: method-hiding
title: Method Hiding in Java
description: 'Declaring similar static methods in parent and child classes is called method hiding. For non-static methods, it is method overriding.'
sidebar_position: 6
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎭 Java Method Hiding vs. Overriding

In Java, **you can't** override `private`, `static`, or `final` methods from the parent class in a child class. If you try with `private` or `final` methods, the compiler will **scream at you with errors**. But with `static` methods? The compiler is like, *"Go ahead, but don't call it overriding!"* 😆

When you declare **static methods with the same name and arguments** in both parent and child classes, Java calls it **method hiding**, not overriding. For **non-static** methods, it's real **method overriding**.

## 1️⃣ Understanding Method Hiding with an Example

Check out this code where both `Parent` and `Child` classes have a static method `display()`. Everything compiles fine, no compiler tantrums here. 🎉

```java
class Parent {
  static void display() {
    System.out.println("Super");
  }
}

class Child extends Parent {
  static void display() {
    System.out.println("Sub");
  }
}
```

Now, let’s test it:

```java
Parent instance = new Child();
instance.display(); // Prints: Super
```

Wait, what? Shouldn’t it print *Sub*? 🤔 Nope! Since `display()` is **static**, Java binds it to the reference type (`Parent`) at compile time. **Static methods belong to the class, not instances!**

## 2️⃣ Can We Override Static Methods by Making Them Non-static in Child Class?

Nope! 🚫 Java won't let you remove the `static` keyword in the child class if the parent method is static. If you try, the compiler will *rage quit* and throw an error. 💥

If we change the `display()` method in `Child` to a **non-static** method:

```java
class Child extends Parent {
  void display() {  // ❌ ERROR: Can't override static method
    System.out.println("Sub");
  }
}
```

Java compiler: **"Excuse me, what are you trying to do?"** 🤨

## 3️⃣ Conclusion 🏁

In Java, **method overriding** applies only to **instance methods**. When it comes to **static methods**, it’s called **method hiding**, because static methods belong to the class, not instances.

So, remember:
✅ **Instance methods** → Can be overridden.
✅ **Static methods** → Can only be hidden.
✅ **Final and Private methods** → Cannot be overridden (Java won’t even negotiate this one! 🙅‍♂️).

📚 Even the **Java Language Specification** confirms this! So if anyone tells you otherwise, hand them this doc and watch them go: 😲

Happy Learning! 🚀
