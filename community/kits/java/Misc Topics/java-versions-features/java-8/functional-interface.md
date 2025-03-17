---
id: functional-interface
title: Functional Interfaces in Java
description: 'Introduced in Java 8 -  a functional interface is simply an interface that has exactly one abstract method. Learn more about functional interfaces in this tutorial.'
sidebar_position: 4
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎭 The Hilarious Guide to Functional Interfaces in Java 8 🎭

## 🎤 1. What’s the Deal with Functional Interfaces?

Functional interfaces are the cool kids of Java 8! Think of them as the VIPs of lambda expressions—they have exactly ONE abstract method, and they’re proud of it! Let’s dive in. 🚀

### 🎯 1.1. The One and Only: A Single Abstract Method

A functional interface is like a stand-up comedian—it has only one main act! This single abstract method is what makes it functional (and cool). These are also called **Single Abstract Method (SAM) Interfaces**.

But hey, Java allows some *extras* without ruining the party:

✅ [Default methods](../../../Java%20OOP/building-blocks-of-oops/multiple-inheritance.md)

✅ [Static methods](../../../Java%20OOP/OOPs%20Inside%20Java/static.md)

✅ Public methods inherited from `Object` (because Java loves inheritance 🤷‍♂️)

### 🎭 1.2. The Magic of Lambda Expressions 🎩✨

Lambda expressions make functional interfaces come alive! Let’s look at a classic example with `Comparator`:

```java
@FunctionalInterface
public interface Comparator<T> {
    int compare(T o1, T o2);
    boolean equals(Object obj); // Inherited from Object, so doesn’t count!
    // Default methods can chill here too...
}
```

Now, let's put this into action using lambdas! 🚀

```java
// Compare employees by ID
Comparator<Employee> compareById = Comparator.comparing(e -> e.getId());

// Compare employees by first name
Comparator<Employee> compareByFirstName = Comparator.comparing(e -> e.getFirstName());
```

Boom! Functional interfaces + lambdas = ❤️

## 🚀 2. @FunctionalInterface Annotation

Java 8 introduced `@FunctionalInterface`, which is like putting a “VIP” badge on your interface! 🎟️ It tells the compiler, “Hey, this is a functional interface—don’t mess with it!”

```java
@FunctionalInterface
public interface MyFirstFunctionalInterface {
    void firstWork();
}
```

Now, what if you try to sneak in another abstract method? 🤔

```java
@FunctionalInterface
public interface MyFirstFunctionalInterface {
    void firstWork();
    void doSomeMoreWork();  // ❌ Compiler says NOPE!
}
```

🔥 **Error:** “Too many methods, buddy! You had ONE job!” 🔥

So, use `@FunctionalInterface` wisely—it helps prevent accidental bloopers!

## 🤖 3. Functional Interfaces in the JDK

Java didn’t stop at just creating functional interfaces—it threw in a whole bunch of them for us! Here are some of the most popular ones:

🎭 **Runnable** – Has only `run()`. Just do it!

⚖ **Comparable** – Uses `compareTo()`. Because ordering matters!

🎬 **ActionListener** – Has `actionPerformed()`. Click-click, boom!

📞 **Callable** – Calls something and returns a result.

🔍 **Predicate** – Takes a value and returns `true` or `false`. (A real judge!)

🤝 **BiPredicate** – Like `Predicate`, but with two inputs.

👀 **Consumer** – Takes an input, does something with it, and returns nothing. (Classic overachiever!)

🍽 **BiConsumer** – Same as `Consumer` but with two inputs. (Sharing is caring!)

🎁 **Supplier** – Supplies a value when needed. (A gift that keeps on giving!)

🔄 **`Function<T, R>`** – Takes an input `T` and returns `R`. (The transformation master!)

⚡ **`BiFunction<T, U, R>`** – Takes two inputs `T` and `U` and returns `R`. (Like a chemistry experiment!)

## 🛠 4. Demo Time! Let’s Square Up! 📐

Here’s a functional interface in action, calculating squares like a math genius:

```java
Function<Integer, Integer> square = x -> x * x;
System.out.println(square.apply(5));  // Prints 25 🎉
```

## 🎉 5. Conclusion

So, what did we learn today?

✅ Functional interfaces have exactly **one** abstract method (and that’s non-negotiable!).

✅ Lambda expressions are their **best friends**. ❤️

✅ `@FunctionalInterface` helps us **avoid accidental mistakes**. 🛑

✅ Java provides **many ready-to-use functional interfaces** for all our coding needs. 🎁

So, go forth and function-ify your Java code! Happy coding! 🚀🔥
