---
id: date-time
title: Java 8 Date Time API
description: 'Java 8 contains the new Date and Time APIs/classes (JSR-310), called ThreeTen, which will change how you have been handling dates in Java.'
sidebar_position: 5
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## Java Date and Time: The Ultimate Upgrade 🎉

For years, Java developers struggled with `Date` and `Calendar` classes. They were cumbersome, confusing, and full of surprises (not the good kind). The `Date` class lacked essential features, and `Calendar` was as easy to use as a 90s VCR remote.

Then came **Java 8**, our knight in shining armor! 🦸‍♂️ The new **Date and Time API [(JSR-310)](https://github.com/ThreeTen)** revolutionized date handling with clarity, immutability, and ease of use.

## 🚀 Key Features

- **Immutable & Thread-safe:** No more accidental modifications.
- **Human-Readable Methods:** `plusDays(5)`, `minusWeeks(2)`, `isLeapYear()`, etc.
- **Built-in Time Zones & Adjusters:** Finally, no more timezone nightmares!

## 1️⃣ Working with Dates and Times

### 📅 1.1 LocalDate: Date Without Time

```java
LocalDate today = LocalDate.now();
System.out.println(today); // 2025-02-27
```

### ⏰ 1.2 LocalTime: Time Without Date

```java
LocalTime now = LocalTime.now();
System.out.println(now); // 14:30:15.123
```

### 📆 1.3 LocalDateTime: Both Date and Time

```java
LocalDateTime timestamp = LocalDateTime.now();
System.out.println(timestamp); // 2025-02-27T14:30:15.123
```

### 🌍 1.4 ZonedDateTime: Timezone-Aware

```java
ZonedDateTime zonedNow = ZonedDateTime.now(ZoneId.of("Asia/Tokyo"));
System.out.println(zonedNow); // 2025-02-27T14:30+09:00[Asia/Tokyo]
```

## 2️⃣ Measuring Time Intervals

### ⏳ 2.1 Instant: Timestamps in UTC

```java
Instant instant = Instant.now();
System.out.println(instant); // 2025-02-27T05:30:15.123Z
```

### ⏲️ 2.2 Duration: Time Between Instants

```java
Duration gap = Duration.between(instant, instant.plusSeconds(600));
System.out.println(gap.toMinutes()); // 10
```

### 📆 2.3 Period: Difference Between Dates

```java
Period period = Period.between(LocalDate.of(2020, 2, 27), LocalDate.of(2025, 2, 27));
System.out.println(period.getYears()); // 5
```

## 3️⃣ Utility Classes & Formatting

### 🗓️ Adjusting Dates

```java
LocalDate nextSunday = LocalDate.now().with(TemporalAdjusters.next(DayOfWeek.SUNDAY));
System.out.println(nextSunday); // 2025-03-02
```

### 🎨 Formatting Dates

```java
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd MMM yyyy, HH:mm");
System.out.println(LocalDateTime.now().format(formatter)); // 27 Feb 2025, 14:30
```

---

The **Java 8 Date & Time API** is a massive improvement, making it easier and safer to work with dates. No more juggling `Date`, `Calendar`, and `SimpleDateFormat`.

**Happy Coding! 🚀**
