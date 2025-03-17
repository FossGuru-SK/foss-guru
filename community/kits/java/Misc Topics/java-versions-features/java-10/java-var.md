---
id: java-var
title: Java var Keyword - var is not keyword
description: 'Java var keyword allows declaring a variable without explicitly specifying its type.'
sidebar_position: 2
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## Java's "var" Keyword – Making Code Shorter and Life Easier (and Funnier!)

Java has been on a mission to reduce verbosity in its syntax, like a chef trimming unnecessary ingredients for a perfect dish. First, it introduced the Diamond operator `<>`, and now, it has given us `var` ([JEP 286](https://openjdk.org/jeps/286)) to declare variables.

So, what's the deal with `var`? Well, instead of writing long-winded type declarations, the compiler does the heavy lifting and infers the type for you. Think of it as Java going, *"Relax, I got this!"* 🚀

## The Magic of `var`

Consider this example:

```java
var str = "Hello world";
```

This is Java being smart and automatically understanding that `str` is of type `String`. Essentially, the above line is equivalent to:

```java
String str = "Hello world";
```

### 1. Declare and Initialize – A Must

Java is quite strict about `var`. You **must** initialize the variable right when you declare it. Otherwise, Java throws a tantrum (a.k.a a compilation error). 😱

❌ Bad:

```java
var i; // ERROR: Cannot use 'var' on variable without initializer
```

✅ Good:

```java
var j = 10; // Works like a charm!
```

### 2. `var` is NOT a Keyword! (Surprise! 🎉)

Even though `var` *looks* like a keyword, it isn’t. This means you can have a variable **named** `var`. Java won't stop you (but your teammates might). 🙈

```java
var var = 10; // Java: "Sure, why not?"
int var = 10; // Still valid!
```

But just because you *can* doesn’t mean you *should*! (Please, think of future developers!)

### 3. Where Can You Use `var`? 🤔

Java is picky about where `var` can be used. It works in:

- **Local variables with initializers**
- **Indexes in enhanced for-loops**
- **Loop variables in traditional for-loops**

#### ✅ Allowed

```java
var blogName = "howtodoinjava.com"; // Local variable with initializer

for (var object : dataList) { // Enhanced for-loop index
    System.out.println(object);
}

for (var i = 0; i < dataList.size(); i++) { // Traditional for-loop variable
    System.out.println(dataList.get(i));
}
```

#### ❌ Not Allowed

Java says **NO!** to `var` in these cases:

- Method parameters
- Constructor parameters
- Method return types
- Class fields
- Catch block parameters

```java
public class Application {
    // var firstName; ❌ Not allowed as class fields
    
    // public Application(var param) { } ❌ Not allowed as constructor parameter
    
    // try { } catch (var ex) { } ❌ Not allowed in catch blocks
    
    // public var demoMethod() { return null; } ❌ Not allowed in return types
    
    // public Integer demoMethod2(var input) { return null; } ❌ Not allowed in method parameters
}
```

### 4. Performance? No Worries! 😎

Since Java determines the type **at compile time**, the resulting bytecode is identical to explicitly declared types. This means **no extra runtime processing**, no extra memory usage, and no performance impact. In short: Java is still lightning fast! ⚡

### 5. Conclusion 🎯

Using `var` can make code **concise** and **easier to read**, especially when dealing with complex generics. But don’t overdo it—too much `var` and your code might start looking like an unsolvable puzzle. 🧩

Use it wisely, and Java will love you back! ❤️

**Happy Coding! 🚀**
