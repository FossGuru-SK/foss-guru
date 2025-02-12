---
id: switch
title: Java Switch
description: 'Java Language Switch statement'
sidebar_position: 2
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎭 Java Switch Statements: The Drama of Code Execution 🎭

Java switch statements are like the drama queens of programming—giving multiple possible execution paths with flair! They swoop in to replace if-else statements, making our code look cleaner, sharper, and, well, just more fabulous. 💅

But wait—switch statements have evolved! Over time, they’ve learned new tricks, and in this tutorial, we’ll explore both the basics and the glow-ups in later Java versions. 🌟

---

## 🎬 Act 1: The Basics of Switch Statements

### 📜 Syntax

Here’s the classic switch statement format:

```java
switch (expression) {
    case labelOne:
        statements;
        break;
    case labelTwo:
        statements;
        break;
    case labelThree:
        statements;
        break;
    default:
        statements;
}
```

🧐 **Rules of Engagement:**

- Expression value must be one of these VIPs:
  - Primitive types (byte, short, char, int)
  - Wrapper classes (Character, Byte, Short, Integer)
  - Enums (since Java 5)
  - Strings (since Java 7)
- Labels must be **compile-time constants**—no last-minute surprises allowed! ⏳

### 🎭 Execution Flow

Here’s how the magic happens:

1. Java evaluates the switch expression. 📊
2. If the datatype of the expression and case labels don’t match—boom! Compilation error. 🚨
3. If a match is found, execution starts there and continues until a `break` statement stops the fun.
4. No match? The `default` case jumps in like an understudy on opening night! 🎤

💡 **Pro Tip:** You don’t *need* a `break` after `default`, because the curtain falls naturally at the end of the switch statement. 🎭

---

## 🎬 Act 2: Making Decisions Like a Pro

### 🏖️ Is It a Weekday or Weekend?

Let’s check if today is a chill weekend or a gotta-work weekday! 🏝️

#### **Traditional Switch Statement**

```java
public class SwitchStatement {
    public static void main(String[] args) {
        System.out.println("Tuesday is : " + isWeekDay(Day.TUE));
        System.out.println("Sunday is : " + isWeekDay(Day.SUN));
    }
    
    public static Boolean isWeekDay(Day day) {
        Boolean result = false;
        switch(day) {
            case MON, TUE, WED, THUR, FRI:
                result = true;
                break;
            case SAT, SUN:
                result = false;
                break;
            default:
                throw new IllegalArgumentException("Invalid day: " + day.name());
        }
        return result;
    }
}

enum Day {
    MON, TUE, WED, THUR, FRI, SAT, SUN
}
```

✅ Works fine, but let’s make it *even better*!

### 🎨 Cleaner, Sleeker Version with Arrow Syntax

```java
public static Boolean isWeekDay(Day day) {
    return switch(day) {
        case MON, TUE, WED, THUR, FRI -> true;
        case SAT, SUN -> false;
        default -> throw new IllegalArgumentException("Invalid day: " + day.name());
    };
}
```

💥 **Boom! No more `break` statements!**

---

## 🎬 Act 3: Switch Expressions Enter the Scene 🎭

### 🔄 Switch Expression = Less Boilerplate

Java 12 introduced **switch expressions**—the switch statement but *with an IQ boost* 🧠:

```java
public static Boolean isWeekDay(Day day) {
     return switch(day) {
        case MON, TUE, WED, THUR, FRI -> {
            System.out.println("It's a weekday");
            yield true;
        }
        case SAT, SUN -> {
            System.out.println("It's a weekend");
            yield false;
        }
        default -> throw new IllegalArgumentException("Invalid day: " + day.name());
    };
}
```

📢 **The `yield` keyword** lets you execute multiple statements before returning a value. Neat, right? 🤩

---

## 🎬 Act 4: Mind-Blowing Use Cases 🤯

### 🔍 Type Checking with Switch Statements

Remember the *old* way of checking an object's type? 👵

```java
Object o;
if (o instanceof String) {
    String s = (String) o;
    System.out.println("String: " + s);
} else if (o instanceof Integer) {
    Integer i = (Integer) o;
    System.out.println("Integer: " + i);
}
```

😴 Boring! Here’s the *new* way in Java 17:

```java
switch (o) {
    case Integer i -> System.out.println("Integer: " + i);
    case String s -> System.out.println("String: " + s);
    default -> System.out.println("Unknown type");
}
```

🔥 **Less code, same magic!**

### 🛑 Handling `null` Values (Java 17+)

Before Java 17, `null` would cause a **NullPointerException** 💀

```java
if (s == null) {
    System.out.println("Oops!");
    return;
}
switch (s) {
    case "Foo", "Bar" -> System.out.println("Great");
    default -> System.out.println("Ok");
}
```

In Java 17, you can *actually* switch on `null`:

```java
switch (s) {
    case null -> System.out.println("Oops");
    case "Foo", "Bar" -> System.out.println("Great");
    default -> System.out.println("Ok");
}
```

💯 **Game-changer!**

---

## 🎬 Act 5: The Drama of Restrictions 🎭

### ⚠️ Case Labels Must Be Within Data Type Range

This **won’t** compile:

```java
byte b = 10;
switch (b) {
    case 5:
        b++;
        break;
    case 150: // ❌ Compile-time error! 150 > 127
        b--;
        break;
}
```

### ⚠️ Duplicate Case Labels? Not on My Watch! ⛔

```java
int num = 10;
switch (num) {
    case 10:
        num++;
        break;
    case 10: // ❌ Duplicate case label!
        num--;
        break;
}
```

🚨 **Java won’t let you be redundant!**

---

## 🎉 The Final Bow

Switch statements are like *superstar actors*—dramatic, efficient, and full of surprises. From **basic switches** to **arrow syntax, switch expressions, and type checking**, we’ve seen how Java makes decision-making in code way more elegant. 💃🕺

Keep coding, and remember: **always break your cases… unless Java does it for you!** 😆

Happy Learning! 🚀
