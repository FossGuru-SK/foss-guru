---
id: introduction
title: introduction
description: 'Java Language Versions and Features'
sidebar_position: 1
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## Java 21 Features [LTS]

Java 21 was released on 19-Sep-2023, as the next long-term support (LTS) release of Oracle’s standard Java implementation. Java 21 includes the following 15 features:

- **JEP-430**: String Templates (Preview)
- **JEP-431**: Sequenced Collections
- **JEP-439**: Generational ZGC
- **JEP-440**: Record Patterns
- **JEP-441**: Pattern Matching for switch
- **JEP-442**: Foreign Function & Memory API (Third Preview)
- **JEP-443**: Unnamed Patterns and Variables (Preview)
- **JEP-444**: Virtual Threads
- **JEP-445**: Unnamed Classes and Instance Main Methods (Preview)
- **JEP-446**: Scoped Values (Preview)
- **JEP-448**: Vector API (Sixth Incubator)
- **JEP-449**: Deprecate the Windows 32-bit x86 Port for Removal
- **JEP-451**: Prepare to Disallow the Dynamic Loading of Agents
- **JEP-452**: Key Encapsulation Mechanism API
- **JEP-453**: Structured Concurrency (Preview)

## Java 20 Features

Java 20 was released on March 21, 2023. The main feature in this release is **Scoped Values**, which is intended to replace thread-local variables.

- **JEP-429**: Scoped Values (Incubator)
- **JEP-432**: Record Patterns (Second Preview)
- **JEP-433**: Pattern Matching for switch (Fourth Preview)
- **JEP-434**: Foreign Function & Memory API (Second Preview)
- **JEP-436**: Virtual Threads (Second Preview)
- **JEP-437**: Structured Concurrency (Second Incubator)
- **JEP-438**: Vector API (Fifth Incubator)

## Java 19 Features

Java 19 was released on September 20, 2022.

- **JEP-405**: Record Patterns (Preview)
- **JEP-422**: Linux/RISC-V Port
- **JEP-424**: Foreign Function & Memory API (Preview)
- **JEP-425**: Virtual Threads (Preview)
- **JEP-426**: Vector API (Fourth Incubator)
- **JEP-427**: Pattern Matching for switch (Third Preview)
- **JEP-428**: Structured Concurrency (Incubator)

## Java 18 Features

Java 18 GA was released on 22 March 2022. It includes nine new developer features.

- **JEP-400**: UTF-8 by Default
- **JEP-408**: Simple Web Server
- **JEP-413**: Code Snippets in Java API Documentation
- **JEP-416**: Reimplement Core Reflection with Method Handles
- **JEP-417**: Vector API (Third Incubator)
- **JEP-418**: Internet-Address Resolution SPI
- **JEP-419**: Foreign Function & Memory API (Second Incubator)
- **JEP-420**: Pattern Matching for switch (Second Preview)
- **JEP-421**: Deprecate Finalization for Removal

## Java 17 Features [LTS]

Java 17 was released on September 14, 2021. It is an LTS (Long Term Support) release.

- **JEP-306**: Restore Always-Strict Floating-Point Semantics
- **JEP-356**: Enhanced Pseudo-Random Number Generators
- **JEP-391**: macOS/AArch64 Port
- **JEP-409**: Sealed Classes
- **JEP-410**: Remove the Experimental AOT and JIT Compiler
- **JEP-412**: Foreign Function & Memory API (Incubator)

## Java 16 Features

Java 16 was released on 16 March 2021.

- **JEP-394**: Pattern Matching for `instanceof`
- **JEP-395**: Records
- **JEP-396**: Strongly Encapsulate JDK Internals by Default
- **JEP-397**: Sealed Classes (Second Preview)

## Java 15 Features

Java 15 was released on 15-Sep-2020.

- **JEP-360**: Sealed Classes and Interfaces (Preview)
- **JEP-339**: EdDSA Algorithm
- **JEP-371**: Hidden Classes

## Java 14 Features

Java 14 was released on March 17, 2020.

- **JEP-305**: Pattern Matching for `instanceof` (Preview)
- **JEP-359**: Records (Preview)
- **JEP-361**: Switch Expressions (Standard)
- **JEP 368**: Text Blocks (Second Preview)
- **JEP 358**: Helpful NullPointerExceptions
- **JEP 343**: Packaging Tool (Incubator)
- **JEP 345**: NUMA-Aware Memory Allocation for G1
- **JEP 349**: JFR Event Streaming
- **JEP 352**: Non-Volatile Mapped Byte Buffers
- **JEP 363**: Remove the Concurrent Mark Sweep (CMS) Garbage Collector
- **JEP 367**: Remove the Pack200 Tools and API
- **JEP 370**: Foreign-Memory Access API (Incubator)

## Java 13 Features

Java 13 was released on September 17, 2019.

- **JEP-355**: Text Blocks (Preview)
- **JEP-354**: Switch Expressions Enhancements (Preview)
- **JEP 353**: Reimplement the Legacy Socket API
- **JEP 350**: Dynamic CDS Archive
- **JEP 351**: ZGC: Uncommit Unused Memory
- **FileSystems.newFileSystem() Method**
- **DOM and SAX Factories with Namespace Support**

## Java 12 Features

Java 12 was released on March 19, 2019.

- [**Collectors.teeing()** in Stream API](./java-12/introduction.md)
- **Switch Expressions (Preview)**
- **Files.mismatch(Path, Path)**
- **Compact Number Formatting**
- **Support for Unicode 11**
- **Switch Expressions (Preview)**

## Java 11 Features [LTS]

Java 11 was released on September 2018.

- **HTTP Client API**
- **Launch Single-File Programs Without Compilation**
- **String API Changes**
- **Collection.toArray(IntFunction)**
- **Files.readString() and Files.writeString()**
- **Optional.isEmpty()**

## Java 10 Features

Java 10 came quickly after Java 9 and introduced a few important updates.

- [**JEP-286**: Local Variable Type Inference](./java-10/java-var.md)
- [**JEP-322**: Time-Based Release Versioning](./java-10/time-based-release-versioning.md)
- **JEP 304**: Garbage-Collector Interface
- **JEP 307**: Parallel Full GC for G1
- **JEP 316**: Heap Allocation on Alternative Memory Devices
- **JEP 296**: Consolidate the JDK Forest into a Single Repository
- **JEP 310**: Application Class-Data Sharing
- **JEP 314**: Additional Unicode Language-Tag Extensions
- **JEP 319**: Root Certificates
- **JEP 317**: Experimental Java-Based JIT Compiler
- **JEP 312**: Thread-Local Handshakes
- **JEP 313**: Remove the Native-Header Generation Tool
- **New Added APIs and Options**
- **Removed APIs and Options**

## Java 9 Features

Java 9 was released in September 2017. The biggest change was modularization.

- [**Java platform module system**](./java-9/java-platform-module-system.md)
- [**Interface Private Methods**](./java-9/private-interface-method.md)
- **JShell – REPL Tool**
- **HTTP 2 Client**
- **Platform and JVM Logging**
- **Process API Updates**
- **Collection API Updates**
- **Improvements in Stream API**
- **Multi-Release JAR Files**
- **@Deprecated Tag Changes**
- **Stack Walking**
- **Java Docs Updates**
- **Miscellaneous Other Features**

## Java 8 Features

Java 8 was released on March 18, 2014.

- [**Lambda expression support in APIs**](./java-8/lambda-expression.md)
- [**Stream API**](./java-8/stream-api.md)
- [**Functional interfaces and default methods**](./java-8/functional-interface.md)
- [**New Date and Time API**](./java-8/date-time.md)
- **methods**
- **Optionals**
- **Nashorn – JavaScript runtime which allows developers to embed JavaScript code within applications**
- **Annotation on Java Types**
- **Unsigned Integer Arithmetic**
- **Repeating annotations**
- **Statically-linked JNI libraries**
- **Launch JavaFX applications from jar files**
- **Remove the permanent generation from GC**
