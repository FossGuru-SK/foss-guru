---
id: Keywords
title: Keywords
description: 'Java Language Keywords'
sidebar_position: 4
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

In total, Java has **51** reserved words that have very specific meanings and cannot be used as identifiers in the application code.

Also, **16** contextual keywords are treated as keywords when found in a specific context. Programmers should not use these keywords for anything other than what they are meant to be.

## Java Keywords & Contextual Keywords

## What is a Keyword in Java?

Keywords are reserved words in Java with special meanings. They cannot be used for variables, class names, or methods.

Example:

```java
int age; // 'int' is a keyword, can't be used as a variable name
```

Fun Fact: If Java let us use keywords as variables, we'd have nightmares debugging code like:

```java
int int = 5; if if = true then do while while = false!
```

## Java Keywords

Here are the 51 keywords you can't use as identifiers:

| Keyword   | Description |
|-----------|------------|
| `abstract` | Defines an incomplete class/method. |
| `assert` | Helps test assumptions. |
| `boolean` | Holds `true` or `false`. |
| `break` | Exits loops or switch cases. |
| `byte` | Stores numbers from -128 to 127. |
| `case` | Defines cases in switch statements. |
| `catch` | Handles exceptions. |
| `char` | Stores a single character. |
| `class` | Defines a class. |
| `const` | Reserved but unused. Use `final` instead. |
| `continue` | Skips to next loop iteration. |
| `default` | Specifies default behavior in switch and interfaces. |
| `do` | Executes code at least once in loops. |
| `double` | 64-bit floating point. |
| `else` | Defines an alternative branch in if-statements. |
| `enum` | Creates an enumeration. |
| `extends` | Extends a class. |
| `final` | Prevents modification. |
| `finally` | Always executes after try-catch. |
| `float` | 32-bit floating point. |
| `for` | Starts a for-loop. |
| `goto` | Reserved but not used. |
| `if` | Creates a condition. |
| `implements` | Implements an interface. |
| `import` | Imports packages/classes. |
| `instanceof` | Checks object type. |
| `int` | Stores 32-bit integers. |
| `interface` | Defines an interface. |
| `long` | Stores 64-bit integers. |
| `native` | Indicates platform-specific code. |
| `new` | Creates objects. |
| `package` | Declares a package. |
| `private` | Limits access to a class. |
| `protected` | Allows access within package & subclasses. |
| `public` | Allows access everywhere. |
| `return` | Returns from a method. |
| `short` | Stores 16-bit integers. |
| `static` | Belongs to the class, not instances. |
| `strictfp` | Ensures floating-point consistency. |
| `super` | Refers to parent class. |
| `switch` | Allows multiple execution paths. |
| `synchronized` | Ensures thread safety. |
| `this` | Refers to the current object. |
| `throw` | Throws an exception. |
| `throws` | Declares possible exceptions. |
| `transient` | Excludes variable from serialization. |
| `try` | Defines error-handling code. |
| `void` | Specifies no return value. |
| `volatile` | Prevents variable caching. |
| `while` | Loops while condition is true. |
| `_` (underscore) | Prevents underscore as an identifier (Java 9+). |

Example:

```java
class SuperHero {
    final String name = "JavaMan"; // Cannot be changed
    public void fly() { System.out.println("Up, up and compile!"); }
}
```

## Contextual Keywords

These 16 words are keywords only in certain contexts.

| Keyword     | Description |
|-------------|------------|
| `exports`   | Used in Java modules. |
| `module`    | Declares modules. |
| `non-sealed` | Defines flexible sealed classes. |
| `open`      | Opens modules. |
| `opens`     | Allows reflection access. |
| `permits`   | Lists subclasses for a sealed class. |
| `provides`  | Specifies service providers. |
| `record`    | Defines immutable data types. |
| `requires`  | Declares module dependencies. |
| `sealed`    | Restricts class hierarchy. |
| `to`        | Defines dependencies between modules. |
| `transitive` | Indicates inherited dependencies. |
| `uses`      | Declares service dependencies. |
| `var`       | Allows local type inference. |
| `with`      | Used in module directives. |
| `yield`     | Returns a value from a switch expression. |

Example:

```java
sealed interface Superhero permits Superman, Batman {}
record Batman(String gadget) implements Superhero {}
```

Fun Fact: Java 15 introduced `sealed`, making sure your superhero team doesn’t get random recruits like `ClownMan`!

Now go forth and Java like a pro! 🚀
