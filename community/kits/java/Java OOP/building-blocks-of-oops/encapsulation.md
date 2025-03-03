---
id: encapsulation
title: Encapsulation in Java
description: 'In Java, abstraction and encapsulation help in creating abstract actors in the system. Encapsulation is the realization of abstraction.'
sidebar_position: 5
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🏗️ Encapsulation vs Abstraction – The OOP Superheroes

Encapsulation and Abstraction are two of the **Fantastic Four** pillars of Object-Oriented Programming (OOP). These two concepts help keep our code clean, modular, and safe from accidental (or intentional 😈) misuse.

In this post, we’ll break them down in a fun and engaging way, and explore the key differences between them. Buckle up! 🚀

---

## 1️⃣ Encapsulation in Simple Words 🏰🔐

Think of **Encapsulation** as a **security system** for your class. It wraps up the data (**state**) and the methods (**behavior**) inside a class, hiding the details from the outside world.

👉 It’s like a **capsule pill**—you know it helps with headaches, but you don’t need to know the complex chemistry inside!

A well-encapsulated class prevents direct access to sensitive data while allowing controlled interactions through **public methods**.

### Example: The Report Writer 📄

Imagine we have a **ReportWriter** class that controls where reports are saved. Instead of allowing direct access to the storage location, we **encapsulate** it using private attributes and public getter/setter methods:

```java
class ReportWriter {

  private String defaultLocation;

  public String getDefaultLocation() {
    return defaultLocation;
  }

  public void setDefaultLocation(String defaultLocation) {
    if(defaultLocation != null)
      this.defaultLocation = defaultLocation;
  }

  public void writeReport(String reportType) {
    // Report writing magic happens here... 🎩✨
  }
}
```

👉 Here, **defaultLocation** is private, so no one can mess with it directly. They must go through `setDefaultLocation()`! Encapsulation at its finest! 🎯

---

## 2️⃣ Whatever Changes, Encapsulate It! 🔄

A wise developer once said:

> *“Whatever changes, encapsulate it.”* 🧠💡

And it makes total sense! Changes can happen at runtime (**data updates**) or in future releases (**implementation changes**). Encapsulation ensures:

✅ Other classes only use what they’re **allowed** to use.
✅ The interface remains stable while the implementation can evolve.
✅ No accidental breakage of client code when changes are made.

If every class interacts **only** through well-defined public methods, you can modify internal details anytime without breaking the whole system. Sounds like a **superpower**, right? 💪

---

## 3️⃣ What is Abstraction? 🎭🎩

**Abstraction** is the art of **hiding complexity** and showing only the **essential details**. Imagine using a smartphone 📱—you know how to send a text or make a call, but do you know how the hardware and circuits work inside? Nope. And that’s **abstraction** in action! 😃

You interact with your phone through its public interface (**buttons, touchscreen, apps**), but the internal implementation (**chips, signals, transistors**) is hidden from you.

### Example: The Report Writer Again 📝

```java
class ReportWriter {

  public void writeReport(String reportType) {
    // Clients only care about calling this method.
    // They don't need to know HOW it's done! 🎭
  }
}
```

👉 Clients only see **writeReport()**, but they have **no clue** what’s happening behind the scenes! That’s **abstraction**! 🕶️

---

## 4️⃣ Encapsulation vs Abstraction ⚔️

Let’s summarize the battle between these two OOP warriors:

| Feature          | Encapsulation 🏰 | Abstraction 🎭 |
|-----------------|-----------------|--------------|
| **What it does** | Protects data & behavior | Hides complexity |
| **Focuses on** | **How** something works | **What** something does |
| **Analogy** | A pill capsule 💊 (You can’t see inside) | A smartphone 📱 (You use it without knowing the circuits) |
| **Example** | `private` variables, `get()` and `set()` methods | Abstract classes, interfaces |

---

## 5️⃣ HashMap: A Real-World Example 🗺️

Let’s take **HashMap**, a Java classic! 🎩

1️⃣ **Abstraction:** The client only cares about `put()` and `get()` methods.
2️⃣ **Encapsulation:** Internally, the HashMap has `private` storage (`Entry[] table`), and all modifications go through controlled methods.

```java
// Abstraction: Client only sees this
hashMap.put("key", "value");
String val = hashMap.get("key");

// Encapsulation: Internal implementation (hidden!)
private static class Entry {
    // Secret sauce of HashMap 🔐
}
```

👆 **Encapsulation makes sure** that we **can’t** directly access the `Entry[] table`.
👆 **Abstraction ensures** we just call `put()` and `get()`, without knowing the intricate hashing mechanism!

---

## 🎯 Conclusion: The OOP Dynamic Duo 🦸‍♂️🦸‍♀️

🚀 **Encapsulation** protects the inner workings of a class by controlling access.
🚀 **Abstraction** allows you to focus on what an object does, not how it does it.

When combined, these two principles make your code:
✅ More **secure** 🔒
✅ Easier to **maintain** 🛠️
✅ More **scalable** 📈

So next time you write Java code, remember:

**“Encapsulate the details, abstract the complexity!”** 🎯

Happy Coding! 🎉🚀
