---
id: time-based-release-versioning
title: Java Version – Time-Based Release Versioning
description: 'Starting from Java 10, Oracle has adapted time based version-string scheme [JEP 322].'
sidebar_position: 3
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## Java Versioning Scheme (JEP 322)

Starting from **Java 10**, Oracle has adapted a **time-based version-string scheme** ([JEP 322](http://openjdk.java.net/jeps/322)). The new time-based model has replaced the feature-based, multi-year release model of the past. Unlike the old releases, the new **time-based releases will not be delayed**, and features will be released **every six months**, with no constraints on what features can go out in the releases.

## Update Releases

Update releases will occur **every quarter** _(January, April, July, October)_. These update releases will be strictly limited to:

- Fixes of security issues 🔒
- Regressions 🛠️
- Bugs in newer features 🐛

Each feature release will receive **two updates** before the next feature release.

---

## Java Version Format

If you run the command `java -version` in your terminal/command prompt, you'll see output similar to:

```sh
C:\Users\Lokesh>java -version
java version "10.0.1" 2018-04-17
Java(TM) SE Runtime Environment 18.3 (build 10.0.1+10)
Java HotSpot(TM) 64-Bit Server VM 18.3 (build 10.0.1+10, mixed mode)
```

### New Version Format

```plaintext
$FEATURE.$INTERIM.$UPDATE.$PATCH
```

| Counter    | Description |
|------------|-------------|
| **$FEATURE** | Incremented every **6 months** based on feature releases (e.g., JDK 10, JDK 11). (Formerly `$MAJOR`.) |
| **$INTERIM** | Usually **zero**, as there are no interim releases in a 6-month period. It increases for non-feature releases that contain **compatible bug fixes and enhancements**, but no incompatible changes. (Formerly `$MINOR`.) |
| **$UPDATE** | Incremented for **compatible update releases** that fix security issues, regressions, and bugs in newer features. (Formerly `$SECURITY`.) |
| **$PATCH** | Incremented only for **emergency releases** to fix critical issues. |

Version numbers are compared **numerically** and **pointwise**. Examples:

- `10.0.4` is **less than** `10.1.2`
- `10.0.2` is **less than** `10.0.2.1` (missing elements are considered smaller)

---

## Java Version API

Want to get version details programmatically? Use `Runtime.version()`! 🎯

```java
Version version = Runtime.version();
System.out.println(version.feature());  // 10
System.out.println(version.interim());  // 0
System.out.println(version.update());   // 1
System.out.println(version.patch());    // 0
```

### Parse an Existing Version

```java
Version version = Runtime.Version.parse("10.0.1");
System.out.println(version.feature());  // 10
System.out.println(version.interim());  // 0
System.out.println(version.update());   // 1
System.out.println(version.patch());    // 0
```

---

## Long-Term Support (LTS) 🔥

LTS versions are mainly for **enterprise customers**. These versions:

- Offer **premier and sustained support** from Oracle
- Are targeted **every 3 years**
- Receive updates for **at least three years**

LTS versions will **explicitly display "LTS"** in the output of `java -version`. Example:

```plaintext
11.0.2+13-LTS
```

---

### Happy Learning! 🚀
