---
id: interface-abstract-class
title: Java Interface vs. Abstract Class
description: 'Learn about java abstract classes vs interfaces in detail and when to use interfaces and abstract classes in solving design issues in Java 8.'
sidebar_position: 3
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🏆 The Ultimate Java Showdown: Abstract Class vs. Interface

Abstract classes and interfaces are the MVPs of Java APIs! But how do they differ? Let's break it down in a fun way. Grab your popcorn, folks! 🍿

## 1️⃣ Abstract Class - The "Almost There" Blueprint 🎭

An **abstract class** is like an incomplete superhero—strong, but still missing a piece of the puzzle. It’s defined using the `abstract` keyword and **may or may not** contain abstract methods.

### Example Time! 🎬

```java
public abstract class TestAbstractClass {

    public abstract void abstractMethod(); // Unfinished business 🧐
    public void normalMethod()  { ... method body ... } // All good here! ✅
}
```

⚠️ **Important Rule**: If a class has an abstract method, the whole class must be declared as `abstract`! Otherwise, Java will give you a stern look. 👀

🤔 **So, why use something you can't even instantiate?**

Because it's meant to be **extended**! Think of it like a foundation for your dream house. 🏡

```java
class ChildClass extends TestAbstractClass {

  @Override
  public void abstractMethod() {
    // Completing the unfinished business! 🎉
  }
}
```

---

## 2️⃣ Interface - The "Contract" You Can't Ignore 📜

An **interface** is like a rulebook 📖—every class that signs up must follow all the rules. All methods in an interface are inherently **public and abstract** (unless you're Java 8+—more on that later! 😉).

### Example 🚀

```java
public interface TestInterface {
    void implementMe(); // A promise you HAVE to keep! 🤝
}
```

And if a class wants to be part of this elite group? It **must** implement the methods!

```java
public class TestMain implements TestInterface {
    @Override
    public void implementMe() {
        // Following the contract! ✅
    }
}
```

---

## 3️⃣ Abstract Class Implementing an Interface 🤯

The only time you **don't** need to override an interface method is if you declare the class `abstract`. Then, it just sits there, waiting for someone else to complete the work. 🛠️

```java
public abstract class AbstractClass implements TestInterface {
    // No need to override implementMe() 😌
}
```

But when a normal class extends it? No more free rides! 🎢

```java
public class ChildClass extends AbstractClass {
    @Override
    public void implementMe() {
        // Finally doing the work! 🔥
    }
}
```

---

## 4️⃣ Abstract Class vs. Interface: The Ultimate Face-Off! ⚡

| Feature  | Abstract Class 🏛️ | Interface 📜 |
|----------|------------------|-------------|
| Methods | Can have **both** abstract & non-abstract methods | **Only abstract methods** (until Java 8) |
| Access Modifiers | Can be `public`, `protected`, `private` | **Only `public`** |
| Static Methods | Allowed ✅ | **Not allowed** (except default methods in Java 8) |
| Multiple Inheritance | ❌ Only **one** superclass | ✅ Can implement **multiple** interfaces |
| Instantiation | ❌ Nope, can't do it | ❌ Nope, still can't |

---

## 5️⃣ When to Use What? 🤷‍♂️

### 🛠 **Use Abstract Classes When...**

- You need to **add partial behavior**
- You want to reuse code (like `HttpServlet` in Java EE 🌐)
- You need **shared state** (like instance variables)

#### Example

```java
public abstract class HttpServlet {
    public void init() {
        System.out.println("Initialization done!");
    }
    public abstract void service(); // Must be implemented!
}
```

### 📜 **Use Interfaces When...**

- You need **pure abstraction** (just contracts, no implementation)
- You want **multiple inheritance-like behavior**
- You need to define **different behaviors in different places**

#### Example1

```java
public interface Map<K, V> {
    void put(K key, V value);
    V get(K key);
}
```

---

## 6️⃣ Java 8: Default Methods - The Game Changer! 🎮

Since Java 8, interfaces can have **default methods**! This means they can provide **some** implementation, making them *almost* like abstract classes. 😲

```java
public interface Moveable {
    default void move(){
        System.out.println("I am moving");
    }
}
```

And now, any class implementing `Moveable` can just use the default method OR override it!

```java
public class Animal implements Moveable {
    public static void main(String[] args){
        Animal tiger = new Animal();
        tiger.move();   // Output: I am moving 🏃‍♂️
    }
}
```

Or, if you prefer your own twist:

```java
public class Animal implements Moveable {
    public void move(){
        System.out.println("I am running");
    }
    public static void main(String[] args){
        Animal tiger = new Animal();
        tiger.move();   // Output: I am running 🏃‍♂️💨
    }
}
```

---

## 7️⃣ Java 8's Impact on the Abstract Class vs. Interface Battle ⚔️

With **default methods**, interfaces have gotten a serious upgrade. The only **major** difference left is that Java **still** doesn’t allow [multiple inheritance](../building-blocks-of-oops/multiple-inheritance.md) of classes, but **does** allow multiple interface implementations.

🎯 **Key Takeaway**: Interfaces now do almost everything an abstract class can! So, always think about your design before choosing one over the other.

---

### 🎉 Conclusion: Who Wins? 🤔

Both **abstract classes** and **interfaces** have their place in Java. It all depends on **what you need**:
✅ Need to define behavior? **Use an abstract class!**
✅ Need a strict contract with multiple implementations? **Use an interface!**

💡 Choose wisely, and **happy coding!** 🚀🔥
