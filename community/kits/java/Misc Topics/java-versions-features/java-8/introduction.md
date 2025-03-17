---
id: introduction
title: Java 8 Features Intro
description: 'Features in short'
sidebar_position: 1
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## Java 8 Features with Examples

Java 8 was released in early 2014. This tutorial lists down important Java 8 features with examples such as lambda expressions, Java streams, functional interfaces, default methods, and date-time API changes.

## 1. Lambda Expressions

Lambda expressions are known to many of us who have worked on other popular programming languages like Scala. In Java programming language, a Lambda expression (or function) is just an anonymous function, i.e., a function with no name and without being bound to an identifier.

Lambda expressions are written precisely where it’s needed, typically as a parameter to some other function.

### 1.1 Syntax

A few basic syntaxes of lambda expressions are:

```java
(parameters) -> expression
(parameters) -> { statements; }
() -> expression
```

A typical lambda expression example:

```java
//This function takes two parameters and returns their sum
(x, y) -> x + y  
```

Please note that based on the type of `x` and `y`, we may use the method in multiple places. Parameters can match to `int`, `Integer`, or simply `String`. Based on context, it will either add two integers or concatenate two strings.

### 1.2 Rules for Writing Lambda Expressions

- A lambda expression can have zero, one, or more parameters.
- The type of the parameters can be explicitly declared or inferred from the context.
- Multiple parameters are enclosed in mandatory parentheses and separated by commas.
- When there is a single parameter, if its type is inferred, it is not mandatory to use parentheses.
- The body of the lambda expressions can contain zero, one, or more statements.
- If the body of a lambda expression has a single statement, curly brackets are not mandatory, and the return type of the anonymous function is the same as that of the body expression. If there is more than one statement, curly brackets must be used.

[Read More: Java 8 Lambda Expressions Tutorial](./lambda-expression.md)

## 2. Functional Interfaces

Functional interfaces are also called Single Abstract Method interfaces (SAM Interfaces). A functional interface permits exactly one abstract method.

Java 8 introduces `@FunctionalInterface` annotation that we can use to ensure a functional interface follows the contract.

### 2.1 Functional Interface Example

```java
//Optional annotation
@FunctionalInterface
public interface MyFirstFunctionalInterface {
    public void firstWork();
}
```

A functional interface is valid even if the `@FunctionalInterface` annotation is omitted. It helps the compiler enforce a single abstract method inside the interface.

Default methods are not abstract, so we can add as many as needed.

If a functional interface overrides one of the public methods of `java.lang.Object`, it does not count toward the interface’s abstract method count.

Example:

```java
@FunctionalInterface
public interface MyFirstFunctionalInterface {
    public void firstWork();

    @Override
    public String toString();

    @Override
    public boolean equals(Object obj);
}
```

[Read More: Java 8 Functional Interface Tutorial](./functional-interface.md)

## 3. Default Methods

Java 8 allows non-abstract methods in interfaces using default methods. These methods enable lambda expression functionality.

Default methods help introduce new functionality in interfaces while ensuring binary compatibility with older versions.

Example:

```java
public interface Moveable {
    default void move() {
        System.out.println("I am moving");
    }
}
```

If a class implements this interface, it can call `move()` directly:

```java
public class Animal implements Moveable {
    public static void main(String[] args) {
        Animal tiger = new Animal();
        tiger.move();
    }
}
```

**Output:**

```java
I am moving
```

If a class wants to customize `move()`, it can override the method.

[Read More: Java 8 Default Methods Tutorial](../../../Java%20OOP/building-blocks-of-oops/multiple-inheritance.md)

## 4. Java 8 Streams

The Streams API in Java 8 provides a mechanism for processing data efficiently, including filtering, transformation, and aggregation.

### 4.1 Stream API Example

Example of filtering a collection of Strings:

```java
List<String> items = ...; // Initialize the list
String prefix = "str";
List<String> filteredList = items.stream()
          .filter(e -> (!e.startsWith(prefix)))
          .collect(Collectors.toList());
```

[Read More: Java 8 Internal vs. External Iteration](./lambda-expression.md)

## 5. Java 8 Date/Time API Changes

Java 8 introduced a new Date and Time API (JSR-310), also known as ThreeTen, which simplifies date handling.

### 5.1 Date Classes

- `LocalDate` represents a date without time or time-zone.
- `LocalTime` represents a time without date or time-zone.
- `LocalDateTime` represents a date and time without a time-zone.
- `OffsetDate`, `OffsetTime`, and `OffsetDateTime` support time-zone offsets.
- `ZoneId` is used for working with time zones.

Example:

```java
LocalDate localDate = LocalDate.now();
LocalTime localTime = LocalTime.of(12, 20);
LocalDateTime localDateTime = LocalDateTime.now();
OffsetDateTime offsetDateTime = OffsetDateTime.now();
ZonedDateTime zonedDateTime = ZonedDateTime.now(ZoneId.of("Europe/Paris"));
```

### 5.2 Timestamp and Duration Classes

- `Instant` represents an instant in time with nanosecond precision.
- `Duration` represents a time difference between two timestamps.

Example:

```java
Instant instant = Instant.now();
Instant instant1 = instant.plus(Duration.ofMillis(5000));
Instant instant2 = instant.minus(Duration.ofMillis(5000));
Instant instant3 = instant.minusSeconds(10);
```

`Duration` represents small time units like milliseconds, seconds, minutes, and hours, whereas `Period` is used for larger time durations:

```java
Duration duration = Duration.ofMillis(5000);
duration = Duration.ofSeconds(60);
duration = Duration.ofMinutes(10);
Period period = Period.ofDays(6);
period = Period.ofMonths(6);
period = Period.between(LocalDate.now(), LocalDate.now().plusDays(60));
```

[Read More: Java 8 Date and Time API Changes](./date-time.md)

## Happy Learning! 🎉
