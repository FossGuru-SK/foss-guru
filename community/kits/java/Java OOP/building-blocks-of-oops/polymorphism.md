---
id: polymorphism
title: Polymorphism in Java
description: 'Polymorphism in Java is the ability to create member functions or fields that behaves differently in different programmatic contexts.'
sidebar_position: 4
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎭 Polymorphism in Java - The Shape-Shifting Superpower

Polymorphism in Java is like a master of disguise—it allows a class to behave differently in different contexts. It's one of the four pillars of [object-oriented programming (OOP)](./object-oriented-programming.md), along with [inheritance](./inheritance.md), [abstraction](./abstraction.md), and [encapsulation](./encapsulation.md). Think of it as an actor playing different roles in different movies! 🎬

---

## 🤔 What is Polymorphism?

Polymorphism lets a class act like a chameleon, adapting to different scenarios. Imagine a superhero who wears different costumes but still remains the same person inside! 🦸‍♂️

In Java, we can relate polymorphism to one interface having multiple implementations. The contract remains the same, but each class implements it differently.

For example, a reference variable of a superclass can refer to an instance of a subclass:

```java
Object o = new Object(); // o can hold the reference of any subtype

Object o = new String();
Object o = new Integer();
```

Here, `String` and `Integer` are subclasses of `Object`. It's like calling someone "Human" whether they are an athlete, a scientist, or a musician! 🎶🏃‍♂️🔬

---

## 🔀 Types of Polymorphism

Java polymorphism comes in two flavors:

1. **Compile-time polymorphism** (a.k.a. method overloading, static binding)
2. **Runtime polymorphism** (a.k.a. method overriding, dynamic binding)

These types are specific to Java, though polymorphism exists in many forms across different programming languages.

---

## 🏗️ 1. Compile-Time Polymorphism (Method Overloading)

As the name suggests, in compile-time polymorphism, the method to be executed is determined at **compile time**. It is achieved using method overloading.

### ✨ How does it work?

An object can have multiple methods with the same name, but different:

- **Number of parameters**
- **Parameter types**

### 🔢 Example: Calculator Class

```java
public class Calculator {

  public Integer sum(Integer a, Integer b) {
    return a + b;
  }

  public Float sum(Float a, Float b) {
    return a + b;
  }

  public Double sum(Double a, Double b) {
    return a + b;
  }
}
```

Now, when we invoke `sum()`, the compiler decides which method to call based on argument types. It's like a waiter knowing whether you want coffee ☕ or tea 🍵 based on your order!

```java
Calculator calc = new Calculator();
Integer sum1 = calc.sum(1 ,2);
Float sum2 = calc.sum(1f ,2f);
Double sum3 = calc.sum(1d ,2d);
```

---

## ⏳ 2. Runtime Polymorphism (Method Overriding)

Runtime polymorphism is all about **method overriding**. The method that gets executed is determined **at runtime**, based on the actual instance of the object.

### 🐾 Example: Animal Kingdom 🐶🐱

Think of an `Animal` class with a `makeNoise()` method. Dogs 🐕 bark, cats 🐈 meow, but both are still animals!

```java
class Animal {
  public void makeNoise() {
    System.out.println("Some sound");
  }
}

class Dog extends Animal {
  public void makeNoise() {
    System.out.println("Bark");
  }
}

class Cat extends Animal {
  public void makeNoise() {
    System.out.println("Meow");
  }
}
```

### 🛎️ Calling the Method

At runtime, Java decides which method to invoke based on the actual instance:

```java
Animal cat = new Cat();
cat.makeNoise(); // Prints "Meow"

Animal dog = new Dog();
dog.makeNoise(); // Prints "Bark"
```

This is like a remote control! 🎮 The button is the same, but whether you control a toy car 🚗 or a drone 🚁 depends on the actual object!

---

## 🎯 Conclusion

- Polymorphism allows objects, methods, and variables to take **multiple forms**.
- Java supports **method overloading (compile-time)** and **method overriding (runtime)** polymorphism.
- Operator overloading exists in Java **only for the `+` operator** (e.g., adding numbers vs. concatenating strings).

Polymorphism makes Java **flexible, scalable, and powerful**—just like a superhero with multiple disguises! 🦸‍♀️💪

Happy Coding! 🚀😃
