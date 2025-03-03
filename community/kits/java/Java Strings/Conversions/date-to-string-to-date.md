---
id: date-to-string-to-date
title: Convert Date to String and String to Date in Java
description: 'Java example to convert Date to String and wise versa.'
sidebar_position: 5
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎉 Java Date Shenanigans! 🎉

Time flies when you're having fun, but in Java, you need some serious tricks to handle it! Let's dive into the magical world of `java.util.Date` and learn how to create, format, parse, and manipulate dates like a true time wizard! 🧙‍♂️

---

## ⏳ 1. Formatting a Date to String

Java's `SimpleDateFormat` lets you turn a `Date` into a beautifully formatted string. But beware! It's **not thread-safe**, so don't go sharing it recklessly. 😱

```java
SimpleDateFormat sdf = new SimpleDateFormat("dd/M/yyyy");
String date = sdf.format(new Date());
```

### 🛠 Common Date Patterns

| Pattern | Example |
|---------|---------|
| yyyy-MM-dd (ISO) | "2018-07-14" |
| dd-MMM-yyyy | "14-Jul-2018" |
| dd/MM/yyyy | "14/07/2018" |
| E, MMM dd yyyy | "Sat, Jul 14 2018" |
| h:mm a | "12:08 PM" |
| yyyy-MM-dd'T'HH:mm:ssZ | "2018-07-14T14:31:30+0530" |

---

## 🔍 2. Parsing a String to Date

Ever received a date as a string and wondered how to turn it into a real date? `SimpleDateFormat.parse()` to the rescue! 🦸‍♂️

```java
SimpleDateFormat sdf = new SimpleDateFormat("dd-M-yyyy hh:mm:ss");
String dateInString = "15-10-2015 10:20:56";
Date date = sdf.parse(dateInString);
```

---

## ⏰ 3. Getting Current Date and Time

Want to know what time it is? Java's `Date` class has your back! 😎

```java
SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
Date date = new Date();
System.out.println(dateFormat.format(date));
```

Since Java 8, we have fancier options like `LocalDate` and `LocalTime`:

```java
LocalDate today = LocalDate.now();
System.out.println("Today's Local date : " + today);

LocalTime time = LocalTime.now();
System.out.println("Local time now : " + time);
```

---

## 🔄 4. Convert between Date and Calendar

### 📅 4.1. Calendar to Date

```java
Calendar calendar = Calendar.getInstance();
Date date = calendar.getTime();
```

### 🕰 4.2. Date to Calendar

```java
SimpleDateFormat sdf = new SimpleDateFormat("dd-M-yyyy hh:mm:ss");
String dateInString = "27-04-2016 10:22:56";
Date date = sdf.parse(dateInString);

Calendar calendar = Calendar.getInstance();
calendar.setTime(date);
```

---

## ⚖️ 5. Comparing Two Dates

Time to settle the "who's older" debate! The `compareTo()` method can tell if one date is before, after, or the same as another. 🤔

```java
Date date1 = new Date();
Date date2 = new Date();

int comparison = date1.compareTo(date2);
```

| Result | Meaning |
|--------|---------|
| `0` | Both dates are identical! 🤝 |
| `< 0` | `date1` is before `date2` ⏪ |
| `> 0` | `date1` is after `date2` ⏩ |

---

## 📆 6. Extracting Days, Months, and Years

Need to pull apart a date and get specific components? `Calendar` has you covered! 🗓️

```java
Calendar calendar = Calendar.getInstance();
calendar.setTime(new Date());

int year       = calendar.get(Calendar.YEAR);
int month      = calendar.get(Calendar.MONTH); // Jan = 0, not 1 😲
int dayOfMonth = calendar.get(Calendar.DAY_OF_MONTH);
int dayOfWeek  = calendar.get(Calendar.DAY_OF_WEEK);
int hourOfDay  = calendar.get(Calendar.HOUR_OF_DAY);
int minute     = calendar.get(Calendar.MINUTE);
int second     = calendar.get(Calendar.SECOND);
```

---

## 🎊 Conclusion

Java’s date handling might seem tricky at first, but once you get the hang of it, you’ll be a **Date-Time Ninja**! 🥷 Keep practicing, and remember: **Never trust `SimpleDateFormat` in a multithreaded environment!** 😅

**Happy Learning & Happy Coding! 🚀**
