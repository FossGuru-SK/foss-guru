---
id: pass-by-reference-value
title: Java Pass-by-Value-or-by-Reference
description: 'Java Language Pass-by-Value or Pass-by-Reference'
sidebar_position: 16
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎭 Java: Pass-by-Value vs. Pass-by-Reference – The Final Verdict

There’s been an age-old debate: *"Is Java pass-by-value or pass-by-reference?"* 🤔 Well, let’s put this mystery to rest once and for all. Java is **pass-by-value**. Period. Full stop. 🎤⬇️

If Java were pass-by-reference, we’d be able to swap objects like in C, but alas, we can’t! (If you just gasped in horror, don’t worry—keep reading.)

---

## 🎯 1. Java is Pass-by-Value (No, Really!)

When you pass an object to a method, its **memory address** (reference) is copied into a new variable, which means both point to the same instance. However, if you change the reference inside the method, the original reference remains blissfully unchanged.

If Java were pass-by-reference, changing the reference inside a method would also change the original reference—but it doesn’t! 🔍

### 💡 Proof by Code (Because Seeing is Believing)

```java
public class Foo {
    private String attribute;

    public Foo(String a) {
        this.attribute = a;
    }
    
    public String getAttribute() {
        return attribute;
    }
    
    public void setAttribute(String attribute) {
        this.attribute = attribute;
    }
}

public class Main {
    public static void main(String[] args) {
        Foo f = new Foo("f");
        changeReference(f); // ❌ Won’t change the original reference!
        modifyReference(f); // ✅ Will modify the object’s attribute!
    }
    
    public static void changeReference(Foo a) {
        Foo b = new Foo("b");
        a = b;  // This changes only 'a', not the original reference!
    }
    
    public static void modifyReference(Foo c) {
        c.setAttribute("c");  // This modifies the actual object referenced by 'f'!
    }
}
```

---

## 🔍 2. Breaking It Down – Step by Step

Let’s analyze what happens at runtime:

### Step 1️⃣

```java
Foo f = new Foo("f");
```

👉 Creates an instance of `Foo` with `attribute = "f"`, and `f` holds a reference to this object.

---

### Step 2️⃣

```java
public static void changeReference(Foo a)
```

👉 A new reference `a` is declared and initially assigned `null`.

---

### Step 3️⃣

```java
changeReference(f);
```

👉 When calling `changeReference(f)`, `a` gets assigned the same reference as `f`.

---

### Step 4️⃣

```java
Foo b = new Foo("b");  // inside changeReference method
```

👉 A new `Foo` instance is created, and `b` now references it.

---

### Step 5️⃣

```java
a = b;
```

👉 *Oops!* This only changes `a` inside the method. `f` is still pointing to its original object. **No change for `f`!** 🙃

---

### Step 6️⃣

```java
modifyReference(Foo c);
```

👉 `c` is another reference to the same object as `f`.

---

### Step 7️⃣

```java
c.setAttribute("c");
```

👉 **Boom!** 💥 The object's attribute is modified, so `f.getAttribute()` now returns "c".

---

## 🎉 Conclusion: Java is Pass-by-Value

If Java were pass-by-reference, `changeReference(f);` would have changed the original reference, but it didn’t. Instead, `modifyReference(f);` worked because it changed the **object’s state**, not its reference. 🧠💡

So next time someone asks *"Is Java pass-by-reference?"* just smile and drop this article on them. 😏

Happy Learning! 🚀
