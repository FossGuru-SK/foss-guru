---
id: constructor
title: Java Constructor
description: 'Java constructors are special method-like constructs that allow fully initializing the object state before other classes can use it.'
sidebar_position: 1
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎉 Java Constructors - The Ultimate Guide (With a Fun Twist!)

Java constructors are like the fairy godmothers of objects 🧚✨—they make sure everything is set up before your object steps into the big, bad world of your application! These special constructs ensure that your object is fully initialized and ready to roll before other classes start poking at it. And the magic word to invoke them? **new**!

---

## 🚀 1. What is a Constructor in Java?

Think of a constructor as a VIP backstage pass to initialize an object before anyone else gets their hands on it. It looks like a method, but it’s NOT exactly a method. Here’s how it works:

```java
public class MyClass {
  public MyClass() {
    // Constructor magic happens here
  }
}
```

When you create a new object, the Java Virtual Machine (JVM) does a few things:

1. 📦 Allocates memory in the heap.
2. 🎬 Calls the constructor (you can have more than one!) to set things up.
3. 🛠️ Initializes object attributes with default or provided values.

By default, Java sneaks in an empty constructor if you don’t define one. Sneaky, huh? 🤭

---

## 🎯 2. Rules of Java Constructor Club (Yes, there are rules!)

Before you go constructor-crazy, keep these golden rules in mind:

✅ The constructor **must** have the same name as the class.
✅ No return type—not even `void`!
✅ No `return` statement inside the constructor. 🚫
✅ You can overload constructors (because variety is the spice of life!).
✅ If you use `super()`, it **must** be the first statement in the constructor.

---

## 🔧 3. Default vs. Parameterized Constructors

There are two types of constructors:

### 🆓 3.1. Default Constructor (a.k.a. The Freebie!)

If you don’t create a constructor, Java will **kindly** create a default one for you.

```java
public class Employee {
  public Employee() {
     super(); // Calls parent class constructor (if any)
  }
}
```

You can override the default constructor if you want to add some extra spice:

```java
public class Employee {
  public Employee() {
     this.age = calculateAgeFromDateOfBirth();
  }
}
```

### 🎯 3.2. Parameterized Constructor (Bring on the Customization!)

Want to initialize an object with specific values? Enter the parameterized constructor!

```java
public class Employee {
  private String firstName;
  private String lastName;

  public Employee() { }
  public Employee(String firstName) { }
  public Employee(String firstName, String lastName) { }
}
```

**Heads up!** If you define any parameterized constructor, Java **won’t** generate a default one for you. You’ll have to write it yourself. 💪

```java
Employee employee = new Employee();  // ❌ Compilation error!
```

---

## 🔄 4. Constructor Chaining with `this()` and `super()`

### 🔁 4.1. Calling Another Constructor in the Same Class with `this()`

Instead of rewriting logic, call one constructor from another within the same class using `this()`!

```java
public Employee() { }

public Employee(String firstName) {
  this(); // Calls default constructor
}

public Employee(String firstName, String lastName) {
  this(firstName); // Calls constructor with one parameter
}
```

### 🏗️ 4.2. Calling Parent Class’s Constructor with `super()`

Want to start by initializing the parent class first? Use `super()`.

```java
public class Parent {
  public Parent() {
    // Parent constructor logic
  }
}

public class Child extends Parent {
  public Child() {
    super(); // Calls Parent's constructor first
  }
}
```

---

## 🔒 5. Private Constructors (The "Do Not Touch" Mode)

Ever wanted to prevent others from creating objects of a class? Say hello to **private constructors!**

**Why?** Because we sometimes want to control the number of instances created—like in the Singleton Pattern.

```java
public class DemoSingleton implements Serializable {
    private static final long serialVersionUID = 1L;

    private DemoSingleton() { }

    private static class DemoSingletonHolder {
        public static final DemoSingleton INSTANCE = new DemoSingleton();
    }

    public static DemoSingleton getInstance() {
        return DemoSingletonHolder.INSTANCE;
    }

    protected Object readResolve() {
        return getInstance();
    }
}
```

This ensures **only one instance** of `DemoSingleton` exists throughout the application. 🔥

---

## 🎉 That’s a Wrap

And there you have it—Java constructors made fun and easy! 😎 Now go ahead and flex your constructor skills. Have questions? Drop them in the comments!

**Happy Coding! 🚀**
