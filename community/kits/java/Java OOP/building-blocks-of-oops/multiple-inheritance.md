---
id: multiple-inheritance
title: Multiple Inheritance in Java
description: 'Multiple inheritance is a feature of some object-oriented computer programming languages in which an object or class can inherit characteristics and behavior from more than one parent object or parent class.'
sidebar_position: 6
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎭 Multiple Inheritance in Java – The Fun Side

Before Java 8, Java was like that strict parent who said, *"No, you can't have multiple inheritance, it's too dangerous!"* 😤 But with Java 8, default methods swooped in like superheroes, saving us from the *dreaded diamond problem* while allowing a taste of multiple inheritance. 🦸‍♂️

## 1️⃣ What is Multiple Inheritance?

Imagine you're a superhero with powers from *both* Superman 🦸‍♂️ and Batman 🦇! That’s multiple inheritance – a child class inheriting behaviors from more than one parent class.

However, Java classes still can't use `extends` for multiple classes (*no favoritism here!* 🙅). But Java does allow implementing multiple interfaces, which is kind of like multiple inheritance – with a twist! 🎭

💡 **Key Insight**: Interfaces only define *contracts* (rules), not concrete behavior... or at least, that was the case before Java 8.

### ❌ Why Can't Java Have Multiple Inheritance of Classes?

```java
class D extends A, B { // ❌ Nope, Java won't allow this!
}
```

If Java allowed this, we'd have a *headache* whenever two parent classes had the same method. Imagine the chaos! 💥🤯

## 2️⃣ Meet Default Methods – Java’s "Oops, We Forgot This" Feature

Ever tried adding a new method to an *existing* interface? It’s like trying to add pineapple to a pizza at an Italian restaurant. 🍕❌ You break things, people get mad!

To fix this, Java 8 introduced **default methods**. These are methods in interfaces that have a body and don't force implementing classes to override them. 🤯

Let's see an example:

```java
public interface Moveable {
    default void moveFast() {
        System.out.println("I am moving fast");
    }
}
```

Now, any class implementing `Moveable` gets `moveFast()` for free! 🎉

```java
class Animal implements Moveable { }

Animal tiger = new Animal();
tiger.moveFast(); // Output: I am moving fast
```

## 3️⃣ Multiple Inheritance with Default Methods? Yes, Please! 🏆

Java 8 allows interfaces to contain behavior, so if a class implements multiple interfaces, it *inherits* behaviors from multiple parents! 🚀

Example:

```java
interface Moveable {
    default void moveFast() {
        System.out.println("I am moving fast");
    }
}

interface Crawlable {
    default void crawl() {
        System.out.println("I am crawling");
    }
}

public class Animal implements Moveable, Crawlable { }

Animal self = new Animal();
self.moveFast(); // I am moving fast
self.crawl();    // I am crawling
```

Now, our `Animal` class is both a sprinter 🏃 and a crawler 🐛. Talk about versatility!

## 4️⃣ Possible Conflicts – When Java Has an Identity Crisis 🤦

What if two interfaces define **the same** method? Java won’t magically guess which one you meant. You have to *break the tie* manually. 🤷‍♂️

```java
interface Moveable {
    default void run() {
        System.out.println("I am moving fast");
    }
}

interface Crawlable {
    default void run() {
        System.out.println("I am crawling");
    }
}

public class Animal implements Moveable, Crawlable { }
```

Now, when we call:

```java
Animal animal = new Animal();
animal.run(); // 😱 Which run() should Java call?!
```

Java won’t decide for us! Instead, we must clarify:

```java
Moveable.super.run();   // Call Moveable's run() method
Crawlable.super.run();  // Call Crawlable's run() method
```

💡 **Moral of the Story:** If two parents give you different advice, you gotta *pick one!* 😆

---

And that’s all you need to know about Java’s *not-quite* multiple inheritance! 🎭

🔹 **Default methods** let interfaces define behavior without breaking existing implementations. 🚀
🔹 **Multiple interfaces** allow classes to inherit behavior from different parents. 🎉
🔹 **Conflicts?** Java says, *"You figure it out!"* 😜

Happy Learning! 🎓🚀
