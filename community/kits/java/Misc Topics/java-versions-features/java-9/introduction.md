---
id: introduction
title: Java 9 Features Intro
description: 'Features in short'
sidebar_position: 1
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## Java 9 Features

Java 9 is bringing lots of new enhancements which are going to affect your programming style and habit in a big way. The biggest change is the modularization of Java. It’s another big change after Lambdas in Java 8. In this article, I am listing down changes which will be part of the JDK 9 release.

## What is new in Java 9

- [Java platform module system](./java-platform-module-system.md)
- [Interface Private Methods](./private-interface-method.md)
- HTTP 2 Client
- JShell - REPL Tool
- Platform and JVM Logging
- Process API Updates
- Collection API Updates
- Stream API Improvements
- Multi-Release JAR Files
- @Deprecated Tag Changes
- Stack Walking
- Java Docs Updates
- Miscellaneous Other Features

## Java Platform Module System

JPMS (Java Platform Module System) is the core highlight of the new Java 9 release. It is also known as Project Jigsaw. A module is a new construct similar to packages. An application developed using new modular programming can be seen as a collection of interacting modules with well-defined boundaries and dependencies between those modules.

The JPMS consists of providing support for writing modular applications as well as modularizing the JDK source code. JDK 9 is coming with around 92 modules (changes are possible in the GA release). Java 9 Module System has a `java.base` Module, known as the Base Module. It is an independent module and does NOT depend on any other modules. By default, all other modules depend on `java.base`.

### In Java modular programming

- A module is typically just a JAR file that has a `module-info.class` file at the root.
- To use a module, include the JAR file into `modulepath` instead of the `classpath`. A modular JAR file added to the `classpath` is treated as a normal JAR file, and `module-info.class` will be ignored.

#### Example module-info.java

```java
module helloworld {
    exports com.howtodoinjava.demo;
}
 
module test {
    requires helloworld;
}
```

## Interface Private Methods

Java 8 allowed default methods in interfaces, which was widely appreciated. However, interfaces still lacked private methods. From Java 9 onwards, private methods are allowed in interfaces.

These private methods improve code reusability inside interfaces. For example, if two default methods need to share code, a private interface method allows them to do so without exposing it to implementing classes.

### Rules for private methods in interfaces

- Private interface methods cannot be abstract.
- Private methods can be used only inside the interface.
- Private static methods can be used inside both static and non-static interface methods.
- Private non-static methods cannot be used inside private static methods.

#### Example

```java
public interface CustomCalculator {
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

## HTTP/2 Client

The HTTP/1.1 client was released in 1997, and much has changed since then. Java 9 introduces a new API that is cleaner and clearer, with support for HTTP/2. The new API consists of three major classes: `HttpClient`, `HttpRequest`, and `HttpResponse`.

### Example1

```java
HttpClient httpClient = HttpClient.newHttpClient();
HttpRequest httpRequest = HttpRequest.newBuilder().uri(new URI("https://howtodoinjava.com/")).GET().build();
HttpResponse<String> httpResponse = httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString());
System.out.println(httpResponse.body());
```

The new API also supports asynchronous HTTP requests using `httpClient.sendAsync()`, returning a `CompletableFuture` object. The request can even be canceled before completion.

### Example2

```java
if (httpResponse.isDone()) {
    System.out.println(httpResponse.get().statusCode());
    System.out.println(httpResponse.get().body());
} else {
    httpResponse.cancel(true);
}
```

## JShell – REPL Tool

JShell is a new command-line interactive tool shipped with JDK 9 [JEP 222] to evaluate Java code snippets interactively. It allows immediate execution of Java code without creating a full application.

### Features

- Launch inbuilt code editor in a separate window
- Launch an external code editor
- Execute code on save operation in external editors
- Load pre-written classes from the filesystem

## Platform and JVM Logging

JDK 9 introduces improved logging in platform classes and JVM components through a new logging API. It allows using a logging framework of your choice (e.g., Log4J2) as the backend.

### Key Points

- This API is intended for use by JDK classes, not application classes.
- Application code should continue using existing logging APIs.
- The API does not allow configuring the logger programmatically.

JDK 9 also adds a new command-line option, `-Xlog`, which provides a single point of access for all JVM log messages.

## Process API Updates

Java 9 improves process management with `java.lang.ProcessHandle.Info`, which provides details about any process, such as:

- The command used to start the process
- Command-line arguments
- Start time and total execution time
- The user who created the process

### Example3

```java
ProcessHandle processHandle = ProcessHandle.current();
ProcessHandle.Info processInfo = processHandle.info();
 
System.out.println(processHandle.pid());
System.out.println(processInfo.arguments().isPresent());
System.out.println(processInfo.command().orElse("Unknown"));
System.out.println(processInfo.startInstant().orElse(null));
```

## Collection API Updates

Java 9 introduces immutable collections using new factory methods.

### Example4

```java
import java.util.*;
 
public class ImmutableCollections {
    public static void main(String[] args) {
        List<String> namesList = List.of("Lokesh", "Amit", "John");
        Set<String> namesSet = Set.of("Lokesh", "Amit", "John");
        Map<String, String> namesMap = Map.ofEntries(
            Map.entry("1", "Lokesh"),
            Map.entry("2", "Amit"),
            Map.entry("3", "Brian")
        );
    }
}
```

## Stream API Improvements

Java 9 introduces new methods in the Stream API:

- `takeWhile` and `dropWhile` for filtering elements based on predicates
- `Stream.ofNullable()` to create a stream from a nullable value

## Multi-Release JAR Files

Previously, all classes had to be packaged in a single JAR file. Java 9 introduces multi-release JAR files, allowing different versions of classes for different Java versions.

---

This document covers the major enhancements introduced in Java 9. These changes significantly improve modularity, efficiency, and usability in Java development.
