---
id: scoped-values
title: Scoped Values
description: 'In Java 21, Scoped values are implicit method parameters and help in sharing data with virtual threads that can be created in millions.'
sidebar_position: 2
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## ☕ Java Scoped Values: The Cool New Kid on the Concurrency Block (With Jokes!)

Welcome to your Java stand-up show disguised as a concurrency tutorial. We’re diving deep into `Scoped Values`, the heroic replacement for the aging (and slightly inefficient) `ThreadLocal`. Buckle up, this journey includes legacy tales, evil memory footprints, and the triumphant rise of Scoped Values!

---

## 🎭 The ThreadLocal Drama

### 1. Sharing Data – The "Old Way"

Back in Java 1.2, developers used `ThreadLocal` variables to sneak data across different parts of an app – like passing cheat sheets in class without getting caught. No need to explicitly pass them in methods, just declare a static field and boom 💥 – instant invisibility!

### 1.1. Enter `ThreadLocal` (the MVP of 2002)

```java
public static ThreadLocal<String> CONTEXT = ThreadLocal.withInitial(() -> null);

Thread parentThread = new Thread(() -> {
    CONTEXT.set("TestValue");
    insideParentThread();
});

parentThread.start();

void insideParentThread() {
    System.out.println("ThreadLocal Value in insideParentThread(): " + CONTEXT.get());
}
```

➡️ Output:

```java
ThreadLocal Value in insideParentThread(): TestValue
```

So far, so good. But wait...

### 1.2. Uh-oh: Child Threads Can’t Peek at Parent’s ThreadLocal 👶

```java
Thread parentThread = new Thread(() -> {
    CONTEXT.set("TestValue");
    insideParentThread_1();

    Thread childThread = new Thread(() -> insideChildThread());
    childThread.start();

    insideParentThread_2();
});
```

➡️ Output:

```java
ThreadLocal Value in insideParentThread_1(): TestValue
ThreadLocal Value in insideParentThread_2(): TestValue
ThreadLocal Value in insideChildThread(): null
```

Child’s like: “Where’s my context, dad?” 😢

### 1.3. InheritableThreadLocal: The Hand-Me-Down Fix 👕

```java
public static InheritableThreadLocal<String> CONTEXT = new InheritableThreadLocal();
```

Now the kid thread gets the goods too. But wait... creating a million threads? Get ready to summon the Garbage Collection Kraken. 🐙

---

## 🧙 Scoped Values to the Rescue

### 2. What Are Scoped Values?

Think of them as magical, immutable method parameters that don’t need to be passed. Set it once, use it anywhere in a **bounded** context. Even better? **Forked virtual threads** can access them without duplicating memory! 🧵✨

### 2.1. How They Work

```java
private static final ScopedValue<String> CONTEXT = ScopedValue.newInstance();

ScopedValue.runWhere(CONTEXT, "TestValue", () -> doSomething());
```

Easy-peasy! The value is magically available in `doSomething()` without you manually doing anything.

### 2.2. Scoped Values in Virtual Threads

```java
ScopedValue.runWhere(CONTEXT, "TestValue", () -> {
  insideParentThread();

  try (var scope = new StructuredTaskScope<String>()) {
    scope.fork(() -> insideChildThread1());
    scope.fork(() -> insideChildThread2());
    scope.join();
  }
});
```

And no memory duplication! 🧠💾

---

## 💾 Scoped Values = Memory Win

Scoped Values don’t create new instances per thread like `ThreadLocal` or `InheritableThreadLocal`. Since Java is pass-by-value (a.k.a. pass-the-reference), all threads just borrow the reference.

Millions of virtual threads = still **just one object**. How cool is that? 😎

And they’re **immutable**! No rogue thread can sneak in and change the value to "YOLO" halfway through. 🙅‍♂️

---

## ⚠️ Beware: Outside the Bounded Context = No Value

```java
System.out.println("isBound(): " + CONTEXT.isBound());
System.out.println("Value: " + CONTEXT.orElse(null));
```

➡️ Output:

```java
isBound(): false
Value: null
```

Moral: Stay in your scope, kids.

---

## 🔁 Rebinding Scoped Values in Child Threads

```java
ScopedValue.runWhere(CONTEXT, "Test Value", () -> {
  System.out.println("Start value: " + CONTEXT.get());
  doSomething();
  System.out.println("End value: " + CONTEXT.get());
});

public void doSomething() {
  ScopedValue.runWhere(CONTEXT, "Changed Value", () -> {
    System.out.println("Child scope: " + CONTEXT.get());
    doSomethingAgain();
  });
}
```

➡️ Output:

```java
Start value: Test Value
Child scope: Changed Value
Child scope again: Changed Value
End value: Test Value
```

Parent stays pure, child gets their own flavor. 🍦

---

## 📦 Sharing Multiple Scoped Values? Bundle Up

```java
public record ApplicationContext (Principal principal, Role role, Region region) { }

ScopedValue.runWhere(ApplicationContext, CONTEXT, () -> {
  doSomething();
});
```

Why carry 3 bags when you can pack one suitcase? 🧳

---

## ✅ Conclusion

Scoped Values are here to tackle the ThreadLocal legacy and its messy memory habits. Use them, especially if you're diving into **millions of virtual threads** and want your app to stay lean and mean.

You’ve just learned:

* The drama of `ThreadLocal` and its children
* Why `ScopedValue` is the new MVP
* Scoped context, rebinding, and memory magic
* Best practices for data sharing in concurrent apps

🎓 **Happy Learning! Now go impress your JVM.**
