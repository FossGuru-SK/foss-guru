---
id: comments
title: Java Comments
description: 'Java Language Comments'
sidebar_position: 14
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🤓 Java Comments: The Secret Notes of Code Wizards

Welcome, brave coder! Ever wanted to sneak secret messages into your code? Or maybe leave a riddle for your future self? Well, Java comments are here to save the day! These magical texts are completely ignored by the Java compiler, making them perfect for explanations, disabling code, or just messing with your teammates. Let's dive into the wonderful world of Java comments! 🚀

## 📢 Why Should We Write Comments?

Comments are like sticky notes for your code! You might want to:

✅ Explain what a variable, method, or class does (because future-you will forget!)

✅ Leave notes for other developers (or confuse them, your choice!)

✅ Temporarily disable some code without deleting it (because you never know when you'll need it again!)

Check out this legendary example of Java comments in action:

```java
/**
 * Contains method to greet users by their name and location.
 *
 * @author Sujit Karne (and possibly a friendly AI 😉)
 */
public class Main {

 /**
  * Launches the application.
  *
  * @param args - Application startup arguments
  */
 public static void main(String[] args) {
  System.out.println(getMessage("Sujit", "India"));
 }

 /**
  * Generates a heartwarming welcome message.
  *
  * @param name - Name of the visitor
  * @param region - Location
  * @return - Welcome message (guaranteed to make them smile 😃)
  */
 public static String getMessage (String name, String region) {
  return "Hello " + name + ", Welcome to " + region + " !!";
 }
}
```

---

## 🎭 Types of Java Comments

There are **three** main types of comments in Java, each with its own superpower:

### 🗨️ 1. Single-Line Comment

Great for quick notes. Just add `//` before your comment and boom—instant wisdom! 🚀

```java
// Initialize the counter variable to 0 (so it doesn't count imaginary numbers)
int counter = 0;
```

### 📜 2. Multi-Line Comment

Perfect for long-winded explanations. Just wrap your text between `/*` and `*/`.

```java
/*
 * This function returns a counter variable.
 * Use it wisely, as it holds the fate of loops!
 */
public int getCounter() {
  return 42; // Because 42 is always the answer 😉
}
```

### 📖 3. Java Documentation Comment

These special comments are used to generate fancy HTML docs! Start with `/**` and let the magic begin.

```java
/**
 * Returns a counter value with a starting point.
 *
 * @param seed - The starting number (plant wisely 🌱)
 * @return counter value (ready to count stuff!)
 */
public int getCounter(int seed) {
  return seed;
}
```

Some special Javadoc tags you can use:

| Tag | Description | Applies to |
|------|------------|------------|
| `@see` | Links to a related class/method | Class, method, variable |
| `@code` | Formats text as source code | Class, method, variable |
| `@link` | Adds a hyperlink | Class, method, variable |
| `@author` | Declares the author's name | Class |
| `@version` | Specifies the version | Class |
| `@param` | Describes method parameters | Method |
| `@return` | Describes return value | Method |
| `@exception` | Describes thrown exceptions | Method |
| `@deprecated` | Marks obsolete code | Class, method, variable |
| `@since` | Notes API version | Variable |

---

## ⚡ Comment Shortcuts (for Lazy Coders 💤)

If you're using Eclipse, type `/**` and press Enter—BOOM! Auto-generated comments appear like magic. 🧙‍♂️

## 🛠️ Javadoc Utility

Javadoc is the ultimate tool for turning your comments into beautiful, official-looking documentation.

### 🏗️ Generating JavaDocs from the Command Line

1. Open your terminal.
2. Make sure `javadoc` is in your PATH.
3. Run this command:

```sh
javadoc -d C:/temp Main.java
```

### 🖥️ Generating JavaDocs from Eclipse

1. Right-click your project/package.
2. Select `Export... -> Javadoc` and click Next.
3. Choose options and click Finish.

Now you have a shiny new Java documentation site! 🎉

---

## 🏎️ Do Comments Affect Performance?

Nope! Comments are like ghost messages—completely invisible to the Java compiler. They do not slow down your code at all!

---

## 🏆 Java Comment Best Practices

🚀 Use these golden rules to become a comment ninja:

✅ **Don't over-comment** – If your code is clear, let it speak for itself!

✅ **Keep it neat** – Align and format comments properly.

✅ **Write for humans** – No cryptic messages, please! Keep it simple and understandable.

✅ **Use Javadoc comments** – Future developers (including you) will thank you!

✅ **Avoid unnecessary comments** – If you feel like explaining every line, maybe refactor your code instead!

---

## 🎉 Final Words

Comments are your secret weapon in Java! Use them wisely, keep them fun, and make your code easier to understand.

Happy coding! 🚀😃
