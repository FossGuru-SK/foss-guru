---
id: introduction
title: Java 10 Features Intro
description: 'Features in short'
sidebar_position: 1
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## Java 10 Features

After Java 9 release, Java 10 came very quickly. Unlike its previous release, Java 10 does not have that many exciting features, still, it has a few important updates which will change the way you code, and other future Java versions.

### Table of Contents

- [JEP 286: Local Variable Type Inference](./java-var.md)
- [JEP 322: Time-Based Release Versioning](./time-based-release-versioning.md)
- JEP 304: Garbage-Collector Interface
- JEP 307: Parallel Full GC for G1
- JEP 316: Heap Allocation on Alternative Memory Devices
- JEP 296: Consolidate the JDK Forest into a Single Repository
- JEP 310: Application Class-Data Sharing
- JEP 314: Additional Unicode Language-Tag Extensions
- JEP 319: Root Certificates
- JEP 317: Experimental Java-Based JIT Compiler
- JEP 312: Thread-Local Handshakes
- JEP 313: Remove the Native-Header Generation Tool
- New Added APIs and Options
- Removed APIs and Options

### JEP 286: Local Variable Type Inference

Java has now `var` style declarations. It allows you to declare a local variable without specifying its type. The type of variable will be inferred from the type of the actual object created. It claims to be the only real feature for developers in JDK 10. e.g.

```java
var str = "Hello world";
// or
String str = "Hello world";
```

In the above example, both statements are equivalent. In the first statement, the type of `str` is determined by the type of assignment which is of `String` type.

### JEP 322: Time-Based Release Versioning

Starting from Java 10, Oracle has adapted a time-based version-string scheme. The new format of the version number is:

```java
$FEATURE.$INTERIM.$UPDATE.$PATCH
```

Unlike the old releases, the new time-based releases will not be delayed, and features will be released every six months, with no constraints on what features can go out in the releases.

There are Long Term Releases (LTS) as well, mainly for enterprise customers. LTS versions will offer premier and sustained support from Oracle and will be targeted every 3 years. Updates for these releases will be available for at least three years.

### JEP 304: Garbage-Collector Interface

In earlier JDK structures, the components that made up a Garbage Collector (GC) implementation were scattered throughout various parts of the code base. In Java 10, it has been changed to a clean interface within the JVM source code to allow alternative collectors to be quickly and easily integrated. This will improve source-code isolation of different garbage collectors.

This is purely refactoring. Everything that worked before needs to work afterward, and performance should not regress.

### JEP 307: Parallel Full GC for G1

Java 9 introduced G1 (garbage first) garbage collector. The G1 garbage collector is designed to avoid full collections, but when the concurrent collections can’t reclaim memory fast enough, a fallback full GC will occur.

The current implementation of the full GC for G1 uses a single-threaded mark-sweep-compact algorithm. This change will parallelize the mark-sweep-compact algorithm and use the same number of threads. It will be triggered when concurrent threads for collection can’t revive the memory fast enough.

The number of threads can be controlled by the `-XX:ParallelGCThreads` option.

### JEP 316: Heap Allocation on Alternative Memory Devices

The goal of this change is to enable the HotSpot VM to allocate the Java object heap on an alternative memory device, such as an NV-DIMM, specified by the user.

To allocate the heap in such memory we can add a new option:

```java
-XX:AllocateHeapAt=<path>
```

This option would take a path to the file system and use memory mapping to achieve the desired result of allocating the object heap on the memory device.

### JEP 296: Consolidate the JDK Forest into a Single Repository

As part of this change, numerous repositories of the JDK forest are combined into a single repository to simplify and streamline development.

In JDK 9, there are eight repositories:

```java
root, corba, hotspot, jaxp, jaxws, jdk, langtools, nashorn
```

In the consolidated forests, code for Java modules is generally combined under a single top-level `src` directory.

### JEP 310: Application Class-Data Sharing

The goal of this feature is to improve the startup footprint, extending the existing Class-Data Sharing (CDS) feature to allow application classes to be placed in the shared archive.

Specify the `-XX:+UseAppCDS` command-line option to enable class data sharing for the system class loader, the platform class loader, and other user-defined class loaders.

### JEP 314: Additional Unicode Language-Tag Extensions

Enhances `java.util.Locale` and related APIs to implement additional Unicode extensions of BCP 47 language tags.

Additional extensions:

- `cu` (currency type)
- `fw` (first day of the week)
- `rg` (region override)
- `tz` (time zone)

### JEP 319: Root Certificates

The `cacerts` keystore, which is part of the JDK, is populated with a set of root certificates issued by the CAs of Oracle’s Java SE Root CA Program.

### JEP 317: Experimental Java-Based JIT Compiler

Enables the Java-based JIT compiler, Graal, to be used as an experimental JIT compiler on the Linux/x64 platform.

To enable Graal as the JIT compiler:

```java
-XX:+UnlockExperimentalVMOptions -XX:+UseJVMCICompiler
```

### JEP 312: Thread-Local Handshakes

Allows execution of a callback on application threads without performing a global VM safepoint, improving VM performance.

### JEP 313: Remove the Native-Header Generation Tool

Removes the `javah` tool from the JDK, as header files for compiling JNI code can now be generated through `javac`.

### New Added APIs and Options

| API | Description |
|------|-------------|
| `Optional.orElseThrow()` | New method for `Optional`, synonymous with `get()`. |
| `List.copyOf()`, `Set.copyOf()`, `Map.copyOf()` | Create new unmodifiable collection instances. |
| `Collectors.toUnmodifiableList()` | Collect elements of a `Stream` into an unmodifiable collection. |

### Removed APIs and Options

| API | Description |
|------|-------------|
| `Runtime.getLocalizedInputStream()`, `Runtime.getLocalizedOutputStream()` | Part of an obsolete internationalization mechanism. |

Java 10 introduces incremental but significant improvements, setting the stage for future enhancements.
