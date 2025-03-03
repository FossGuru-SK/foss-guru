---
id: object-oriented-programming
title: Object Oriented Programming
description: 'Learn, what is OOP in general?'
sidebar_position: 1
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🤖 Object-Oriented Programming (OOP) - The Fun Way! 🎉

Object-Oriented Programming (OOP) is like organizing your messy room into drawers, shelves, and boxes. Instead of throwing everything into one giant pile (looking at you, spaghetti coders 🍝), we group related things together into objects.

These objects have **attributes** (data) and **methods** (behavior), just like real-world entities. Think of a dog 🐶: It has **attributes** (breed, color, age) and **methods** (bark, fetch, nap). Cool, right? 😎

---

## 🎓 The Four Pillars of OOP

In OOP, we rely on four superpowers 🦸‍♂️ known as:

- **Abstraction** 🤯 - Hiding unnecessary details (like a car’s engine, you just press the pedal and go!)
- **Encapsulation** 🔐 - Wrapping data and functions into a protective bubble (like a burrito 🌯!)
- **Inheritance** 👪 - Passing down traits from parent to child (like how you got your dad’s bad jokes 😂)
- **Polymorphism** 🎭 - One thing, many forms (a chameleon changing color 🎨)

Let's explore these in a fun way! 🚀

---

## 1️⃣ OOP - What’s the Big Deal? 🤔

Back in the day, programmers wrote code using **binary** (literally 0s and 1s – yikes! 😱). Then came structured programming (functions! Yay!). But as programs got bigger and messier, things started breaking.

Enter **OOP** – the superhero 🦸‍♀️ that helped us model software based on the real world! Now, instead of tangled logic, we have well-defined objects interacting smoothly.

### 🎭 Objects & Classes – The Building Blocks 🏗️

A **class** is like a blueprint 🏠, and an **object** is a house built from that blueprint.

```java
public class Employee {
    private long id;
    private String name;
    private String role;
    
    public Employee(long id, String name, String role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
    
    public void work() {
        System.out.println(name + " is working hard! 💪");
    }
}
```

Now we can create employees just like a factory! 🏭

```java
Employee bob = new Employee(1, "Bob", "Engineer");
bob.work(); // Output: Bob is working hard! 💪
```

---

## 2️⃣ The Four Superpowers of OOP 🦸‍♂️

### 2.1 🤯 Abstraction - Less is More

Do you care how your phone makes calls? Nope, you just dial! 📞 That’s **abstraction** – hiding the complex stuff and showing only what’s necessary.

```java
public class Car {
    public void drive() {
        System.out.println("Vroom! 🚗💨");
    }
}
```

You don’t need to know about engines, fuel injection, or horsepower – just press the gas and go! 🏎️

---

### 2.2 🔐 Encapsulation - Keep Your Secrets Safe

Imagine if anyone could directly access your bank account balance! 😱 That’s why we **encapsulate** data by making it `private` and controlling access with `getters` and `setters`.

```java
public class BankAccount {
    private double balance = 1000.0;
    
    public double getBalance() {
        return balance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposit successful! 💰");
        }
    }
}
```

Now nobody can **directly** mess with your money! 💵💪

---

### 2.3 👪 Inheritance - Like Father, Like Son

Your parents passed down their genes, and Java classes pass down their properties! Let’s say we have an **Employee** class, and we want to create a specialized **Manager** class.

```java
public class Employee {
    protected String name;
    public void work() {
        System.out.println(name + " is working!");
    }
}

public class Manager extends Employee {
    public void holdMeeting() {
        System.out.println(name + " is holding a meeting! 📊");
    }
}
```

Now, **Manager** can do everything an **Employee** does, plus **hold meetings**. Neat! 🤩

---

### 2.4 🎭 Polymorphism - One Name, Many Forms

A superhero can fight with **fists, lasers, or webs** – all different forms of **attack**! Similarly, polymorphism lets us define a common method that behaves differently depending on the context.

```java
public class Animal {
    public void makeSound() {
        System.out.println("Some generic animal sound 🐾");
    }
}

public class Dog extends Animal {
    public void makeSound() {
        System.out.println("Woof! 🐶");
    }
}

public class Cat extends Animal {
    public void makeSound() {
        System.out.println("Meow! 🐱");
    }
}
```

Now:

```java
Animal myPet = new Dog();
myPet.makeSound(); // Woof! 🐶
```

Different behaviors, same method name! That’s the magic of polymorphism! ✨

---

## 3️⃣ More Object Oriented Programming Concepts

Apart from the above 4 building blocks of OOP, we have a few more concepts that play an important role in building the whole understanding.

Before going deeper, we shall understand the term module. In general programming, a module is a class or sub-application that performs unique functionality. In an HR application, a class can perform various functions such as sending emails, generating salary slips, calculating the age of the employee, etc.

### 3.1. Coupling

Coupling is the measure of the degree of interdependence between the modules. Coupling refers to how strongly a software element is connected to other elements. A good software will have low coupling.

It means a class should perform a unique task or only tasks that are independent of other tasks. E.g. an EmailValidator class will only validate the email. Similarly, EmailSender class will only send emails.

If we include both functionalities within a single class EmailUtils then it is an example of tight coupling.

### 3.2. Cohesion

Cohesion is the internal glue that keeps the module together. Good software design will have high cohesion.

It means a class/module should include all the information needed to perform its function without any dependency. For example, an EmailSender class should be able to configure SMTP server, and accept the sender’s email, subject and content. Basically, it should focus on sending emails only.

The application should not use EmailSender for any other function other than sending an email. Low cohesion results in monolithic classes that are difficult to maintain, understand and reduce reusability.

### 3.3. Association

Association refers to the relationship between objects who have independent lifecycles without ownership of each other.

Let’s take an example of a teacher and student. Multiple students can associate with a single teacher, and a single student can associate with multiple teachers, but both have their own lifecycles.

Both can be created and deleted independently so when a teacher leaves the school, we don’t need to delete any students, and when a student leaves the school, we don’t need to delete any teachers.

### 3.4. Aggregation

Association refers to the relationship between objects who have independent lifecycles, but ‘WITH ownership’. It is between child and parent classes where child objects cannot belong to another parent object.

Let’s take an example of a cell phone and a cell phone battery. A single battery can belong to only one phone at a time. If the phone stops working, and we delete it from our database, the phone battery will not be deleted because it may still be functional. So in aggregation, while there is ownership, objects have their own lifecycle.

### 3.5. Composition

Composition refers to relationships when objects don’t have an independent lifecycle. All child objects will be deleted if the parent object is deleted.

For example, the relationship between questions and answers. Single questions can have multiple answers, but the answers cannot belong to multiple questions. If we delete a question, all its answers will automatically be deleted.

## 4️⃣ Best Practices

### 4.1. Favor Composition over Inheritance

Inheritance and composition, both promote code reusability. But the use of composition is preferred over inheritance.

An implementation of composition over inheritance typically begins with the creation of various interfaces representing the behaviors that the system must exhibit. Interfaces enable polymorphic behavior. Classes implementing the identified interfaces are built and added to business domain classes as needed. Thus, system behaviors are realized without inheritance.

```java
interface Printable {
    print();
}

interface Convertible {
    print();
}

class HtmlReport implements Printable, Convertible
{

}

class PdfReport implements Printable
{

}

class XmlReport implements Convertible
{

}
```

### 4.2. Program to Interface, Not to the Implementation

This leads to flexible code that can work with any new implementation of the interface. We should aim to use interfaces as variables, as return types of a method or as the argument type of methods.

Interfaces act as superclass types. In this way, we can create more specializations of the interface in the future without modifying the existing code.

### 4.3. DRY (Don’t Repeat Yourself)

Don’t write duplicate code, instead use abstraction to abstract common things in one place.

As a thumb rule, if you write the same piece of code at two places – consider extracting in a separate function and calling the function at both places.

### 4.4. Encapsulate What Changes

All software gets changes over time. So, encapsulate the code you expect or suspect to be changed in the future.

In Java, use private methods to hide such implementations from clients so that when you make a change, the client is not forced to change its code.

The use of design patterns is also recommended to achieve encapsulation. For example, the factory design pattern encapsulates object creation code and provides flexibility to introduce a new type later without impacting existing clients.

### 4.5. Single Responsibility Principle

It is one of the Solid principles of OOP class design. It emphasizes that one class should have one and only one responsibility.

In other words, we should write, change, and maintain a class for only one purpose. This will give us the flexibility to make future changes without worrying about changes’ impacts on another entity.

### 4.6. Open-Closed Principle

It emphasizes that software components should be open for extension, but closed for modification.

This means that our classes should be designed so that whenever fellow developers want to change the flow of control in specific conditions in the application, all they need to do is extend our class and override some functions, and that’s it.

If other developers cannot design desired behavior due to constraints put by our class, then we should reconsider changing our class.

There are a lot of other concepts and definitions in the whole OOP paradigm which we will learn in other tutorials.

This Java OOP tutorial discusses the 4 major pillars of OOP in Java, with easy-to-understand programs and snippets. Drop your questions in the comments section.

## 🎉 Wrapping Up

OOP is like organizing a theme park 🎢:

- **Abstraction** hides unnecessary details (you just enjoy the ride 🎡)
- **Encapsulation** keeps things protected (safety harness! 🎢)
- **Inheritance** shares features (rides have common structures 🎠)
- **Polymorphism** allows flexibility (rollercoasters with loops or drops 🎇)

Master these, and you’ll write code that’s **clean, reusable, and fun to maintain!** 😎

🚀 **Happy Coding!** 🚀
