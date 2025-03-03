---
id: inheritance
title: Java Inheritance
description: 'Java Inheritance refers to the ability of a child class to inherit all the non-private properties and methods from the parent class.'
sidebar_position: 4
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🏆 Inheritance in Java – The Fun Way! 🎉

Inheritance in Java is like getting superpowers from your parents. Imagine if you could inherit your dad’s driving skills or your mom’s cooking expertise—well, in Java, classes can do just that! 😎

Inheritance is one of the four pillars of object-oriented programming (OOP), allowing child classes to acquire all the non-private goodies (properties and methods) from their parent class. It’s like getting hand-me-downs but way more useful! 🏗️

---

## 🧐 1. What is Inheritance in Java?

In Java, inheritance means a class (child/subclass) extends another class (parent/superclass) to inherit its properties. The magic keyword here is `extends`.

```java
public class Parent {
}

public class Child extends Parent {  // The child class is extending the Parent class
}
```

👶 ➡️ 🧑 Just like how a child inherits traits from their parents, Java classes do the same!

---

## 🚀 2. Inheritance in Action

Let’s say we have an `Employee` class. Every employee has basic details, but some employees (like managers) have extra perks—like subordinates! 🤵

```java
public class Employee {
    private Long id;
    private String firstName;
    private String lastName;
    // Getters and Setters
}

public class Manager extends Employee {
    private List<Employee> subordinates;

    public Manager(long id, String firstName, String lastName, List<Employee> subordinates) {
        super(id, firstName, lastName);
        this.subordinates = subordinates;
    }
}
```

👀 Now, let’s test if our `Manager` class got the employee attributes.

```java
Manager manager = new Manager(1L, "Sujit", "Karne", List.of(new Employee(2L, "Alex", "Dave")));
System.out.println(manager);
```

🖨️ **Output:**

```java
Manager{id=1, firstName='Sujit', lastName='Karne', subordinates=[Employee{id=2, firstName='Alex', lastName='Dave'}]}
```

Without inheritance, we would have written `id`, `firstName`, and `lastName` in multiple places—yuck! 🤢 Code duplication = bad. Reusability = good. ✅

---

## 🌳 3. Types of Inheritance

Java supports four types of inheritance, depending on how classes are structured.

### 🏠 3.1 Single Inheritance

A single child class extends a single parent class. This is the "one kid, one parent" scenario.

```java
class Animal {
    void makeSound() {
        System.out.println("Some sound");
    }
}
class Dog extends Animal {
    void bark() {
        System.out.println("Woof!");
    }
}
```

### 🏗️ 3.2 Multi-level Inheritance

This is like a grandparent-parent-child relationship.

```java
class Grandparent {
    void wisdom() {
        System.out.println("Grandparents are wise");
    }
}
class Parent extends Grandparent {
    void experience() {
        System.out.println("Parents are experienced");
    }
}
class Child extends Parent {
    void energy() {
        System.out.println("Children have energy");
    }
}
```

### 🌳 3.3 Hierarchical Inheritance

One parent, multiple children. Imagine one powerful superhero (parent) and multiple sidekicks (children).

```java
class Parent {
    void parentMethod() {
        System.out.println("Parent method");
    }
}
class Child1 extends Parent {
}
class Child2 extends Parent {
}
```

### 🤹 3.4 Multiple Inheritance (via Interfaces)

Java doesn’t allow multiple inheritance with classes, but we can achieve it with interfaces. Think of it as inheriting different superpowers from different sources. 💪

```java
interface Flyable {
    void fly();
}
interface Swimmable {
    void swim();
}
class Superhero implements Flyable, Swimmable {
    public void fly() { System.out.println("Flying high!"); }
    public void swim() { System.out.println("Swimming fast!"); }
}
```

> **_NOTE:_** Till JDK 1.7, multiple inheritance was not possible in java. But from JDK 1.8 onwards, multiple inheritance is possible via use of interfaces with default methods.

---

## 🎯 4. Accessing Parent Class Members

### 🎁 4.1 Constructors

To call a parent class constructor, use `super()`. Remember, it must be the **first statement** inside the child class constructor. 🚨

```java
public class Manager extends Employee {
    public Manager() {
        super(); // Must be first statement
        // Other statements
    }
}
```

### 🔍 4.2 Fields

Non-private fields are inherited, but private fields? Nope! ❌ Use getters and setters instead.

```java
Manager manager = new Manager(...);
manager.getId();
manager.getFirstName();
manager.getLastName();
```

⚠️ Be careful when both parent and child have fields with the same name!

```java
class Employee {
    int rating = 100;
}
class Manager extends Employee {
    int rating = 200;
}
Manager manager = new Manager();
System.out.println(manager.rating);   // 200
Employee mgrEmployee = new Manager();
System.out.println(mgrEmployee.rating);   // 100
```

**Why?** Because **fields are accessed based on reference type!** 🧠

### 🎬 4.3 Methods

Child classes can call non-private methods of the parent class.

```java
public class Manager extends Employee {
    @Override
    public String toString() {
        return "Manager{" +
            "id=" + getId() +
            ", firstName='" + getFirstName() + "'" +
            ", lastName='" + getLastName() + "'" +
            "}”;
    }
}
```

But if both classes have a method with the same name? The method from the **actual instance type** is used. 🎭

```java
class Employee {
    public int getRating() { return 100; }
}
class Manager extends Employee {
    public int getRating() { return 200; }
}
Manager manager = new Manager();
System.out.println(manager.getRating());   // 200
Employee mgrEmployee = new Manager();
System.out.println(mgrEmployee.getRating());   // 200
```

---

## 🎉 5. Conclusion

🔹 Inheritance follows an IS-A relationship.
🔹 Child classes inherit non-private members from the parent class.
🔹 Java uses `extends` for class inheritance and interfaces for multiple inheritance.
🔹 Fields are accessed from the reference type, while methods are from the instance type.

**Happy Coding!** 🎈
