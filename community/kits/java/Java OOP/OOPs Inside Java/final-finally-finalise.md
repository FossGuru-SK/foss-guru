---
id: final-finally-finalise
title: Java final, finally and finalize
description: 'Difference between final, finally and finalize in Java'
sidebar_position: 4
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎉 Java Fun: final, finally, and finalize Explained! 🚀

Welcome to this exciting Java tutorial where we unravel the mysteries of `final`, `finally`, and `finalize`. Buckle up! 🚀

---

## 🏆 1. Java `final` Keyword

The `final` keyword is like a "No Entry" sign for modifications. It can be applied to **variables**, **methods**, and **classes**, but it behaves differently in each case. Let’s explore! 🔍

### 🔹 1.1. `final` Variables – Once Set, Forever Unchanged

A variable marked `final` can be assigned a value **only once**! Here’s where you can initialize it:

✔ At the time of declaration 🏗️  
✔ Inside the constructor 🏠  

#### **Code Time! ⏳**

```java
public class MyClass {
  // During declaration
  public final String MAJOR_VERSION = "1";
  public final String MINOR_VERSION;
   
  public MyClass()  {
    // In constructor
    this.MINOR_VERSION = "2";
  }
}
```

💡 **Fact:** Once initialized, trying to change a `final` variable will lead to a **compilation error** 🚨:  
> "The final field MyClass.VERSION cannot be assigned."

---

### 🔹 1.2. `final` Methods – No Override Allowed! 🚫

A method marked `final` is like a parent who says, "No, you can't change the family rules!" 🎭  
It **cannot** be overridden by child classes.

#### **Code Time0! ⏳**

```java
public class ParentClass {
  public final void showMyName() {
    System.out.println("In ParentClass");
  }
}
```

❌ **Trying to override this method?** Say hello to a **compile-time error**:
> "Cannot override the final method from ParentClass."

---

### 🔹 1.3. `final` Classes – The End of Inheritance! ⛔

A `final` class is **off-limits** for inheritance. No subclasses allowed! 🚷

#### **Code Time1! ⏳**

```java
public final class ParentClass {
  public void showMyName() {
    System.out.println("In ParentClass");
  }
}
```

👀 **Trying to inherit from this class?**  

🚨 ERROR: *"Cannot inherit from final ParentClass."*

---

## 💥 2. Java `finally` Block – Cleanup Crew in Action! 🧹

The `finally` block is like that one friend who **ALWAYS shows up**, no matter what. Whether an exception occurs or not, this block **will execute**.

### 🛠 **Use Case:** Releasing Resources

✔ Closing files 📂  
✔ Closing database connections 🗄️  
✔ Releasing memory 🧠  

#### **Code Time2! ⏳**

```java
try {
    // Open file 📁
    // Read file 📖
}
catch(Exception e) {
    // Handle exception 🚨
}
finally {
    // Close file 🔒
}
```

💡 **Fact:** The `finally` block is like a janitor—it **always cleans up** before leaving the room! 🧽

---

## 🗑️ 3. Java `finalize()` Method – Garbage Collector’s Goodbye! 👋

⚠️ **Note:** Java 18 (`JEP-421`) has **deprecated** `finalize()`, and it will be **removed** in a future release! 😱

`finalize()` is a **special method** that the **garbage collector** calls when an object is about to be trashed! 🗑️

### 🔹 **Defined in `Object` Class**

```java
protected void finalize() throws Throwable
```

### 🚀 **Key Facts:**

✔ Used for **cleanup** before the object is destroyed. 🧹  
✔ If an exception is thrown in `finalize()`, **it's ignored**. 🚫  
✔ `finalize()` is **never** called more than once for the same object. 🔄❌  

📢 **Pro Tip:** Instead of `finalize()`, use **try-with-resources** or **cleaners** for resource management. 😎

---

## 🎯 4. Conclusion – The Final Showdown! 🎬

| Keyword   | Purpose 🎯 | Can Be Used With? 🤔 | Key Rule 📜 |
|-----------|-----------|----------------------|-------------|
| `final`   | Restriction 🛑 | Variables, Methods, Classes | No changes allowed! ❌ |
| `finally` | Cleanup 🧹 | Try-Catch Blocks | Always executes! 🔄 |
| `finalize()` | Cleanup Before GC 🗑️ | Objects | Deprecated! 🚨 |

💡 **Fun Fact:** The only thing `final`, `finally`, and `finalize()` have in common is… **they all start with ‘final’!** 🤯

---

🔥 **That’s it, folks!** You’re now a pro at `final`, `finally`, and `finalize()`! Keep coding and stay awesome! 💻✨

Happy Learning! 🚀😃
