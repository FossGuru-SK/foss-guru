---
id: private-interface-methods
title: Private Methods in Interface – Java 9
description: 'Java 9 onward, you are allowed to include private methods in interfaces.'
sidebar_position: 2
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## Mastering Java 9 Private Methods in Interfaces (With a Fun Twist!)

Java 9 brought us an exciting upgrade—private methods in interfaces! 🎉 That’s right, interfaces finally got a taste of encapsulation. This means cleaner, more maintainable code without cluttering implementing classes. Let's dive in and have some fun while learning!

## 📖 Table of Contents

- **Interfaces till Java 7**
- **Static & Default Methods in Java 8**
- **Private Methods in Java 9**
- **Java 9 Private Interface Method Example**
- **Summary**

---

## 🕰️ Interfaces Till Java 7 – The Old-School Way

Back in the Java 7 days (and earlier), interfaces were like strict teachers—only allowing public abstract methods. No fun, no flexibility! Implementing classes HAD to provide method definitions.

```java
public interface CustomInterface {
    public abstract void method();
}

public class CustomClass implements CustomInterface {
    @Override
    public void method() {
        System.out.println("Hello World");
    }

    public static void main(String[] args){
        CustomInterface instance = new CustomClass();
        instance.method();
    }
}
```

**Output:**

```java
Hello World
```

---

## 🚀 Java 8 – Static & Default Methods Enter the Scene

Java 8 decided to shake things up! It allowed static and default methods inside interfaces. Finally, interfaces got some built-in functionality without forcing subclasses to implement everything!

```java
public interface CustomInterface {
    public abstract void method1();
    
    public default void method2() {
        System.out.println("default method");
    }
    
    public static void method3() {
        System.out.println("static method");
    }
}

public class CustomClass implements CustomInterface {
    @Override
    public void method1() {
        System.out.println("abstract method");
    }
    
    public static void main(String[] args){
        CustomInterface instance = new CustomClass();
        instance.method1();
        instance.method2();
        CustomInterface.method3();
    }
}
```

**Output:**

```java
abstract method
default method
static method
```

📝 **Note:** The `public` modifier is optional in interface methods, but we’ve included it here for clarity.

---

## 🎩 Java 9 – Private Methods Join the Party

With Java 9, interfaces got **private methods**! This means better code reuse **inside** the interface without exposing those methods to implementing classes. It’s like having secret superpowers! 🦸‍♂️

### Key Rules for Private Methods in Interfaces

1. 🚫 **Private interface methods cannot be abstract**.
2. 🏠 **They can only be used inside the interface**.
3. 🔄 **Private static methods can be used inside static and non-static interface methods**.
4. ❌ **Non-static private methods cannot be used inside private static methods**.

Example:

```java
public interface CustomInterface {
    public abstract void method1();
    
    public default void method2() {
        method4();  // private method inside default method
        method5();  // static method inside non-static method
        System.out.println("default method");
    }
    
    public static void method3() {
        method5(); // static method inside another static method
        System.out.println("static method");
    }
    
    private void method4(){
        System.out.println("private method");
    }
    
    private static void method5(){
        System.out.println("private static method");
    }
}

public class CustomClass implements CustomInterface {
    @Override
    public void method1() {
        System.out.println("abstract method");
    }
    
    public static void main(String[] args){
        CustomInterface instance = new CustomClass();
        instance.method1();
        instance.method2();
        CustomInterface.method3();
    }
}
```

**Output:**

```java
abstract method
private method
private static method
default method
private static method
static method
```

🎉 See? Private methods keep things neat and tidy inside interfaces!

---

## 🏗️ Java 9 Private Interface Method Example – A Cool Calculator

Let's see private methods in action! We’ll build a **CustomCalculator** interface that adds **even and odd numbers** separately, using a private method to keep things DRY (Don’t Repeat Yourself).

### **CustomCalculator.java – Interface**

```java
import java.util.function.IntPredicate;
import java.util.stream.IntStream;

public interface CustomCalculator
{
    default int addEvenNumbers(int... nums) {
        return add(n -> n % 2 == 0, nums);
    }

    default int addOddNumbers(int... nums) {
        return add(n -> n % 2 != 0, nums);
    }

    private int add(IntPredicate predicate, int... nums) {
        return IntStream.of(nums)
                .filter(predicate)
                .sum();
    }
}
```

### **Main.java – Class**

```java
public class Main implements CustomCalculator {
    public static void main(String[] args) {
        CustomCalculator demo = new Main();
         
        int sumOfEvens = demo.addEvenNumbers(1,2,3,4,5,6,7,8,9);
        System.out.println(sumOfEvens);
         
        int sumOfOdds = demo.addOddNumbers(1,2,3,4,5,6,7,8,9);
        System.out.println(sumOfOdds);
    }
}
```

**Output:**

```java
20
25
```

Boom! 💥 Our private `add` method makes sure we don’t write the same filtering logic twice. Less code, more fun!

---

## 🎯 Summary – Java 9 Private Interface Methods At a Glance

Java 9 lets interfaces have **private** and **private static** methods to improve **code reuse** without exposing them to implementing classes. Here's a quick comparison of interface methods across versions:

| Method Type       | Since When |
|------------------|------------|
| public abstract  | Java 7      |
| public default   | Java 8      |
| public static    | Java 8      |
| private          | Java 9      |
| private static   | Java 9      |

Got questions? Drop them in the comments! ✍️

Happy Learning & Happy Coding! 🚀

**Ref:** [JEP 213](https://openjdk.org/jeps/213)
