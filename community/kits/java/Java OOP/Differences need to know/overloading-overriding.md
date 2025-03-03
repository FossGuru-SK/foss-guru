---
id: overloading-overriding
title: Java Method Overloading vs. Method Overriding
description: 'Learn the difference between method overloading and method overriding in java, which mainly involve method name, signature, parameters list and return type.'
sidebar_position: 1
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🤹‍♂️ Method Overloading vs. Method Overriding in Java 🎭

Java is like a magic show 🎩✨ when it comes to method overloading and overriding. They both play crucial roles in object-oriented programming, but they have very different tricks up their sleeves! Let’s break them down with a bit of fun and, of course, easy-to-follow examples.

And hey, if you're preparing for an interview, buckle up—this is a popular Java question! 🎯

---

## 🆚 Method Overloading vs. Method Overriding

Here’s a quick battle between the two:

| **Aspect**               | **Method Overloading** 🛠 | **Method Overriding** 🔄 |
|--------------------------|--------------------------|--------------------------|
| **Definition**          | Multiple methods in the **same class** with **same name** but different parameters. | Child class provides a **specific implementation** of a method from the parent class, keeping the same method signature. |
| **Inheritance**         | Not related to inheritance. Methods belong to the **same class**. | All about inheritance! The child class **inherits** and modifies the method. |
| **Return Type**         | Can be **same or different**. | Must be **same** or a **subtype**. |
| **Method Signature**    | Same name, **different parameters**. | Same name, **same parameters**. |
| **Polymorphism**       | **Compile-time polymorphism** (decided at compile time). | **Runtime polymorphism** (decided at runtime). |

Now, let’s dive into each one separately. 🤿

---

## 🎭 Method Overloading: The Shape-Shifting Trick

Method overloading allows you to define **multiple methods** with the **same name** but **different parameters**—like a magician changing costumes! 🪄

### 🔑 Rules of Method Overloading

### 1️⃣ Method Arguments Must Be Different

Think of method overloading like a barista knowing how to make **espresso ☕**, **latte ☕🥛**, and **cappuccino ☕🫧**. The method name is the same (`makeCoffee`), but the ingredients (parameters) change!

```java
public class Calculator {
  public Integer sum(Integer a, Integer b) {
    return a + b;
  }

  public Integer sum(Float a, Integer b) {
    return a.intValue() + b;
  }
}
```

✅ **Valid overloading:** Different parameter types!

### 2️⃣ Return Types Don't Matter (Only Parameters Do!)

Changing only the return type? 🚨 **Error ahead!** The compiler will think you’re trying to make two identical methods.

```java
public class Calculator {
  public Integer sum(Integer a, Integer b) {
    return a + b;
  }

  public Double sum(Integer a, Integer b) {
    return new Double(a + b); // ❌ Compiler error!
  }
}
```

🙅‍♂️ **Invalid overloading:** Only the return type changed!

### 3️⃣ Exceptions Don’t Count

Throwing different exceptions? Java doesn’t care when it comes to overloading. It only checks method signatures!

```java
public class Calculator {
  public Integer sum(Integer a, Integer b) throws NullPointerException{
    return a + b;
  }
  
  public Integer sum(Integer a, Integer b) throws IllegalArgumentException{
    return a + b;
  }
}
```

🔍 **Still invalid**—same parameters, so it’s NOT an overload.

---

## 🏆 Method Overriding: The Rebel Child 😈

Method overriding is when the child class **modifies** a method inherited from the parent class. Think of it like a rebellious teenager rewriting the house rules! 🏠➡️🏢

### 🔑 Rules of Method Overriding

### 1️⃣ Method Arguments Must Be **Exactly** the Same

The overridden method **must have the same** name, return type, and parameters.

```java
class Parent {
  public Integer sum(Integer a, Integer b) {
    return a + b;
  }
}

class Child extends Parent {
  public Integer sum(Integer a, Integer b) {
    return a + b;
  }
}
```

✅ **Valid overriding:** Everything matches!

### 2️⃣ Return Type Can Be a Subtype (But Not Different)

Your child class **can** return a subtype (Integer instead of Number).

```java
class Parent {
  public Number sum(Integer a, Integer b) {
    return a + b;
  }
}

class Child extends Parent {
  public Integer sum(Integer a, Integer b) {
    return a + b;
  }
}
```

✅ **Valid:** Integer is a subtype of Number!

But change it to **String**, and Java will throw a tantrum. 😡

```java
class Parent {
  public Number sum(Integer a, Integer b) {
    return a + b;
  }
}

class Child extends Parent {
  public String sum(Integer a, Integer b) {
    return a.toString() + b.toString(); // ❌ Compiler error!
  }
}
```

🙅‍♂️ **Invalid:** String is NOT a subtype of Number.

### 3️⃣ Thrown Exception Can Be a Subtype

Your child class **can** throw a smaller exception but **not a bigger one**.

```java
class Parent {
  public String readFile(String file) throws FileNotFoundException {
    return null;
  }
}

class Child extends Parent {
  public String readFile(String file) throws RuntimeException {
    return null;
  }
}
```

✅ **Valid:** `RuntimeException` is an unchecked exception!

But throw **IOException**, and Java goes 🔥 **Nope!**

```java
class Child extends Parent {
  public String readFile(String file) throws IOException {
    return null;
  }
}
```

🚨 **Compiler error:** IOException is higher than FileNotFoundException.

### 4️⃣ No Overriding Private, Static, or Final Methods

Private methods are like **family secrets**—they never get passed down. 🤫
Static methods belong to the **class itself**, not instances.
Final methods are **set in stone** and cannot be changed.

```java
class Parent {
  private String readFile(String file) {
    return null;
  }
}

class Child extends Parent {
  public String readFile(String file) { // ❌ Not overriding!
    return null;
  }
}
```

✅ No error, but this **isn’t** overriding—because `readFile()` in `Parent` is **private**.

### 5️⃣ Overriding Method Cannot Reduce Access Scope

If `Parent` method is `protected`, `Child` **must** keep it `protected` or `public` (but NOT private!).

```java
class Parent {
  protected String readFile(String file){
    return null;
  }
}

class Child extends Parent {
  public String readFile(String file) {
    return null;
  }
}
```

✅ **Valid:** `protected` → `public` (allowed).

---

## ✅ How to Verify Method Overriding

Use `@Override` to ensure correct overriding! If there’s a mistake, the compiler **will** catch it. 🕵️‍♂️

```java
class Child extends Parent {
  @Override
  public String readFile(String file) {
    return null;
  }
}
```

---

## 🎯 Conclusion

Method **overloading** gives multiple ways to use a method in the same class, while **overriding** lets a child class customize a method from its parent. Both are powerful—but use them wisely!

🚀 **Happy coding!** 🎉
