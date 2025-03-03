---
id: immutable-class
title: Immutable Classes in Java
description: 'Learn about immutable objects, records and collections in Java and create a Java class immutable step by step with examples.'
sidebar_position: 17
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🚀 The Fun Guide to Java Immutability 🎉

## 🔥 What is Immutability?

Imagine having a magical box 🧙‍♂️ that, once sealed, never lets you change what’s inside. That’s what an **immutable object** is in Java—once created, it stays the same forever! ❄️ Any modifications? Nope! You’ll have to create a brand-new object instead. 

Let’s see an example with the legendary `String` class:

```java
String string = "test";
String newString = string.toLowerCase();  // Creates a new String
```

Here, `string` remains untouched, while `newString` holds the modified value. Java is all about playing it safe! 😎

---

## 🗂️ Immutability in Collections

Java gives us three cool ways to create immutable collections:

1️⃣ **Unmodifiable collections**  
2️⃣ **Immutable factory methods (Java 9+)**  
3️⃣ **Immutable copies (Java 10+)**  

```java
Collections.unmodifiableList(recordList);  // Unmodifiable list
List.of(new Record(1, "test"));  // Factory methods in Java 9
List.copyOf(recordList);  // Java 10
```

🚨 **Warning:** These are only "shallowly immutable." You can’t add or remove elements, but the existing elements inside can still mutate. 😱

Example:

```java
List<Record> list = List.of(new Record(1, "value"));
System.out.println(list); // [Record(id=1, name=value)]

list.get(0).setName("modified-value");
System.out.println(list); // [Record(id=1, name=modified-value)]
```

To achieve **true immutability**, only add immutable objects to the collection. This ensures that even if someone gets a reference to an element, they **CAN’T** modify it. 🚀

---

## 🎨 How to Create an Immutable Class

Java suggests the following to craft a bulletproof **immutable class**:

✅ **No setter methods!** Setters allow change, which we don’t want. ❌
✅ **Make fields `final` and `private`.** Once set, never modified. 🔐
✅ **Prevent method overriding.** Just make the class `final`. 🎭
✅ **Handle mutable fields cautiously!** If an object has a list, return a new copy instead of the original.

```java
final class Record {
  private final long id;
  private final String name;
  private final List<String> tokens;

  public Record(long id, String name, List<String> tokens) {
    this.id = id;
    this.name = name;
    this.tokens = List.copyOf(tokens);
  }

  public long getId() { return id; }
  public String getName() { return name; }
  public List<String> getTokens() { return tokens; }

  @Override
  public String toString() {
    return "Record{" +
        "id=" + id +
        ", name='" + name + '\'' +
        ", tokens=" + tokens +
        '}';
  }
}
```

Let’s try modifying it:

```java
List<String> tokens = new ArrayList<>();
tokens.add("active");

Record record = new Record(1, "value", tokens);
System.out.println(record);   // Record{id=1, name='value', tokens=[active]}

record.getTokens().add("new token"); 
System.out.println(record);   // Record{id=1, name='value', tokens=[active]}
```

**BOOM! 🔥 The original object remains unchanged!**

---

## ⚡ Immutability with Java Records

Java **records** (introduced in Java 14) remove boilerplate code while making objects immutable. 🎉

```java
record Record(long id, String name, List<String> tokens){
  public List<String> tokens() {
    return List.copyOf(tokens);
  }
}
```

Testing immutability:

```java
List<String> tokens = new ArrayList<>();
tokens.add("active");

Record record = new Record(1, "value", tokens);
System.out.println(record);   // Record{id=1, name='value', tokens=[active]}

record.tokens().add("new token");
System.out.println(record);   // Record{id=1, name='value', tokens=[active]}
```

Records enforce **immutability** with **less code!** 🏆

---

## 📚 Immutable Classes in JDK

Java already has a ton of built-in **immutable** classes:

✔ `java.lang.String`  
✔ Wrapper classes (`Integer`, `Long`, `Double`, etc.)  
✔ `java.math.BigInteger` and `BigDecimal`  
✔ Unmodifiable collections (`Collections.singletonMap()`)  
✔ `java.util.UUID`  
✔ Java Enums 🔥  
✔ Java 8 Date/Time API (`LocalDate`, `LocalTime`)  
✔ **Record types** 🎯  

---

## 🎯 Why Should You Care?

### ✅ Predictability
Immutable objects **never change**, making debugging much easier! 🧐

### ✅ Thread-Safety
Since nothing changes, no race conditions or synchronization nightmares. **Win!** 🏆

### ✅ No More Copying!
Immutable objects don’t need a **copy constructor** or **clone()**. Java just reuses them. 🔄

### ✅ Better Performance 🚀
Caching? Check! Memoization? Check! Immutable objects are perfect for optimization.

---

## 🎬 Conclusion

Immutable classes in Java:

✅ **Are simple to construct, test, and use**  
✅ **Eliminate synchronization issues**  
✅ **Make great Map keys and Set elements**  
✅ **Ensure ‘failure atomicity’** (If an error occurs, objects are never left in a bad state)  

### **Pro Tip:** Always aim to make your Java classes immutable. It saves you from a ton of headaches down the road! 😃


🚀 **Happy Coding!** 🚀

