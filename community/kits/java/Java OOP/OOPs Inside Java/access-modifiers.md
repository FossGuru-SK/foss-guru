---
id: access-modifiers
title: Java Access Modifiers
description: 'Java provides four access modifiers to set access levels for fields, methods and constructors i.e. public, private, protected, and default.'
sidebar_position: 2
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎭 Java Access Modifiers – Who Gets to Peek? 🤔

Java has four **access modifiers** that control who can snoop around in your classes, variables, methods, and constructors. Think of them as security levels at a top-secret agency! 🕵️‍♂️

## 1. The VIP List – Access Modifiers at a Glance 👀

| Access Modifier | Who Can Peek? 👀 |
|---------------|-----------------|
| **public** | Open to the world! 🌍 |
| **protected** | Accessible to package mates and subclass spies! 🕵️‍♀️ |
| **default** (package-private) | Only package buddies allowed! 🚪|
| **private** | Only the class itself can access. Strictly confidential! 🔒 |

The access levels go from the friendliest (public) to the most exclusive (private):

>**Note:** **public > protected > default (package-private) > private**

---

## 1.1. **public** – The Social Butterfly 🦋

A **public** class, method, or constructor is available to everyone, everywhere. Think of it like a celebrity – anyone can approach!

```java
public class Data {

  private String format;

  public String getFormat() {
    return this.format;
  }

  public void setFormat(String format) {
    this.format = format;
  }
}
```

### Fun Fact

All fields in an **interface** are **public static final** by default! No secrets there! 🤐

---

## 1.2. **protected** – Friends and Family Only 🤝

A **protected** member is visible in the same package and to subclasses outside the package. It's like an *exclusive club* – your package-mates and family (subclasses) are welcome!

```java
public class Data {

  protected void displayMessage() {
    System.out.println("Test message");
  }
}
```

### 📌 In the Same Package

```java
public class Main {
  public static void main(String[] args) {
    Data data = new Data();
    data.displayMessage(); // Works fine 🎉
  }
}
```

### ❌ Outside the Package? No Entry

If you try to access `displayMessage()` outside its package **without inheritance**, Java will slam the door shut! 🚪❌

```plaintext
'displayMessage()' has protected access in 'com.example.Data'
```

### ✅ Inheritance to the Rescue

```java
public class Main extends Data {
  public static void main(String[] args) {
    Main main = new Main();
    main.displayMessage(); // Works! 🎊
  }
}
```

---

## 1.3. **default (package-private)** – The Neighborhood Watch 👀

If you don’t specify an access modifier, **Java assumes it's 'default'** (a.k.a package-private). That means only *classes in the same package* can access it.

```java
public class Data {
  void displayMessage() {
    System.out.println("Default Test message");
  }
}
```

### ❌ Not Allowed Outside the Package

```plaintext
'displayMessage()' is not public in 'com.example.Data'. Cannot be accessed from outside package.
```

---

## 1.4. **private** – Top Secret! 🚫

A **private** member is the most restrictive – only accessible within the class. It's like having a personal diary 🔐 – no one else can read it!

```java
public class Data {

  private void displayMessage() {
    System.out.println("Top Secret Message!");
  }
}
```

Attempting to access it from another class? 🚨 Access Denied! 🚨

```plaintext
'displayMessage()' has private access in 'Data'
```

---

## 2. Levels of Access Control 🔑

There are **two levels** of access control in Java:

1. **Class-level access** – A class can be `public` or `default` (package-private). Top-level classes **cannot** be `private` or `protected`.
2. **Member-level access** – Fields, methods, and constructors can use `public`, `protected`, `default`, or `private`.

🔹 **Local variables and parameters?** They **cannot** have access modifiers – they are automatically private to the method! 🤫

---

## 3. Conclusion – Choose Wisely! 🧐

Access levels matter **in two big ways**:

1. **When using external classes** – Access levels determine what parts of those classes you can use.
2. **When writing your own classes** – You decide what to expose and what to keep private. A well-thought-out access control strategy prevents unintended misuse and errors! 🚀

### Quick Tips 📌

✅ Use **private** whenever possible – Only expose what’s necessary! 🔒
✅ Use **default** for package-scoped access. 🏡
✅ Use **protected** for inheritance scenarios. 👪
✅ Use **public** when you want everyone to have access. 🌎

---

🎉 **Happy Learning!** 🚀
