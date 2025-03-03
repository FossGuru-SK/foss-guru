---
id: abstraction
title: Abstraction in Java
description: 'Learn more about abstraction in java.'
sidebar_position: 3
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎭 Abstraction in Java – The Art of Hiding the Mess

Ever wondered why you can operate a TV remote without needing a PhD in electronics? That, my friend, is **abstraction** in action! Java, just like your remote, keeps the complex stuff under the hood so you can focus on just pressing the right buttons (or in our case, calling the right methods).

---

## 🧐 What is Abstraction in OOP?

In **Object-Oriented Programming (OOP)**, abstraction is like a VIP pass—it lets you use cool stuff without worrying about how it works inside. It's all about **defining objects that do things, store data, and interact with each other**, while hiding unnecessary details.

Abstraction is everywhere! From simple methods to complex frameworks, it keeps things clean, simple, and manageable.

---

## 🎭 Types of Abstraction

There are two main flavors of abstraction:

### 1️⃣ Data Abstraction 🍕

Think of data abstraction like ordering pizza. You tell the restaurant what toppings you want (**public methods**), but you don’t need to know how they knead the dough or where they source the cheese from (**hidden implementation**). The pizza arrives, and you enjoy it. Simple!

### 2️⃣ Control Abstraction 🎛️

Imagine writing the same code over and over—sounds boring, right? **Control abstraction** helps by wrapping repetitive tasks into reusable functions. It's like a microwave’s “Popcorn” button—you don’t need to set the temperature and time manually; just press a button and boom, popcorn! 🍿

---

## 🚀 How to Achieve Abstraction in Java?

Java makes abstraction happen using **interfaces** and **abstract classes**.

- **Interfaces** = 100% abstraction (like a contract: "Hey, implement these methods, but how you do it is up to you!")
- **Abstract Classes** = Partial abstraction ("I'll give you some methods, but you still have some work to do!")

Let’s dive into an example that shows abstraction in action!

---

## 🎩 Abstraction Using Interfaces

Imagine we’re running reports in an application, and all we care about is calling `run()`. We don't need to know how each report crunches numbers behind the scenes.

```java
public interface Report {
    List<Object> run(ReportContext reportContext);
}

public class ReportContext {
    // Fields and setup
}

public class EmployeeReport implements Report {
    @Override
    public List<Object> run(ReportContext reportContext) {
        System.out.println("Executing employee report");
        return null;
    }
}

public class SalaryReport implements Report {
    @Override
    public List<Object> run(ReportContext reportContext) {
        System.out.println("Executing salary report");
        return null;
    }
}
```

Now let’s run the reports! 🏃‍♂️

```java
public class Main {
    public static void main(String[] args) {
        ReportContext reportContext = new ReportContext();
        
        Report eReport = new EmployeeReport();
        eReport.run(reportContext);

        Report sReport = new SalaryReport();
        sReport.run(reportContext);
    }
}
```

### 📌 Output

```java
Executing employee report
Executing salary report
```

Boom! 🎉 The reports run without us worrying about their internals. That’s **abstraction magic!** ✨

---

## 🤔 Abstraction vs. Encapsulation – What's the Difference?

| Feature | Abstraction 🎭 | Encapsulation 🔒 |
|---------|--------------|-----------------|
| **Purpose** | Hide implementation details | Protect data from unauthorized access |
| **Achieved using** | Interfaces, Abstract classes | Private variables, Public getters/setters |
| **Example** | TV remote (you press a button, it works) | Capsule pill (you know it works, but can’t see inside) |

In short, **abstraction hides the complexity**, while **encapsulation protects the data**. They go hand-in-hand like peanut butter and jelly. 🥪

---

## 🎓 Final Thoughts

Abstraction helps make Java (and life) **less complicated**. Next time you use a microwave, a car, or even your favorite app, remember—you don’t need to know how it works internally; you just need to use it effectively!

🔍 Want to learn more? Stay tuned for my next post: *Exploring Interfaces and Abstract Classes in Java!* 🚀

**Happy Coding!** 🎉👨‍💻
