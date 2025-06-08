---
id: introduction
title: Java 15 Features Intro
description: 'Features in short'
sidebar_position: 1
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎉 Java 15 – New Features With a Twist of Humor ☕

**Release Date:** September 15th, 2020  
**Frequency:** Every 6 months, like clockwork.  
**Mood:** Still Java, but cooler.

Brace yourself, brave developer, for Java 15 is not just a number—it’s a tale of sealed secrets, invisible classes, and rebellious record-keepers. Grab your virtual coffee, and let's dive in! 🚀

---

## 1. 🛡️ Sealed Classes and Interfaces (Preview) – JEP 360

Before Java 15, any class could walk up to your public class and say, “Yo, I’m your child now.” Not anymore!

Enter **sealed classes and interfaces**, the bouncers of Java inheritance. Using the `sealed` keyword, you can now **whitelist** the classes allowed to extend or implement your base class/interface. Total control, baby. ✋

Here's how the VIP list looks:

```java
sealed class Account
    permits CurrentAccount, SavingAccount, LoanAccount {
}

final class CurrentAccount extends Account {}
non-sealed class SavingAccount extends Account {}
sealed class LoanAccount extends Account permits HomeloanAccount, AutoloanAccount {}

final class HomeloanAccount extends LoanAccount{}
final class AutoloanAccount extends LoanAccount{}
````

**Translation:**

* `sealed` = “You can’t sit with us… unless you’re on the list.”
* `final` = “End of the line.”
* `non-sealed` = “Free spirit. Do what you want.”

📚 *Read More: Sealed Classes and Interfaces*

---

## 2. 🔏 EdDSA Algorithm – JEP 339

Need a signature that’s both **faster** and **more secure** than your doctor’s? Say hello to **EdDSA** (Edwards-Curve Digital Signature Algorithm)!

```java
KeyPairGenerator kpg = KeyPairGenerator.getInstance("Ed25519");
KeyPair kp = kpg.generateKeyPair();

byte[] msg = "test_string".getBytes(StandardCharsets.UTF_8);

Signature sig = Signature.getInstance("Ed25519");
sig.initSign(kp.getPrivate());
sig.update(msg);
byte[] s = sig.sign();

String encodedString = Base64.getEncoder().encodeToString(s);
System.out.println(encodedString);
```

It's like a digital wax seal for your data. Fancy AND secure. 🔐

📚 *Read More: Java EdDSA (Ed25519 / Ed448) Example*

---

## 3. 🕶️ Hidden Classes – JEP 371

These aren’t just shy classes. They’re **invisible ninjas** of the JVM. 🥷

Hidden classes can’t be accessed by other classes' bytecode and are perfect for **frameworks that create classes at runtime**.

Why hide them?

* So your framework internals don’t clutter the JVM.
* So you can **unload** them guilt-free.
* So you don’t have to rely on that sketchy `sun.misc.Unsafe` guy anymore.

---

## 4. 🌟 Other Enhancements (Cool Stuff Corner)

### 4.1 🧩 Pattern Matching for `instanceof` (Second Preview) – JEP 375

Less boilerplate. More magic. You can now combine type checks and casting in a single line. 🎯

```java
if (obj instanceof String s) {
    // s is now a String you can use directly. No casting. Woohoo!
}

// Real-world example
if(customer instanceof PersonalCustomer pCustomer) {
    customerName = String.join(" ",
        pCustomer.getFirstName(), 
        pCustomer.getMiddleName(), 
        pCustomer.getLastName());
} else if(customer instanceof BusinessCustomer bCustomer) {
    customerName = bCustomer.getLegalName();
}
```

📚 *Read More: Pattern Matching for instanceof*

---

### 4.2 🪦 Removed Nashorn JavaScript Engine – JEP 372

First introduced in Java 8, Nashorn was Java’s answer to “Hey, let’s do JS too!”
But ECMAScript evolves faster than a Java developer rejecting frontend tasks. 😅

So Nashorn’s out. Bye bye, JS in JVM. 👋

---

### 4.3 📡 Reimplement Legacy DatagramSocket API – JEP 373

The DatagramSocket API got a glow-up! ✨

* Easier debugging
* Friendly with upcoming **virtual threads**
* Helps Project Loom nap better 😴

---

### 4.4 🧾 Records (Second Preview) – JEP 384

Records are Java’s way of saying:
“Let’s stop writing boilerplate and just store some dang data!”

```java
record User(String name, int age) {}
```

Boom! You get:

* `constructor`
* `getters`
* `equals()`
* `hashCode()`
* `toString()`

And yes, trying to mutate fields via reflection now throws an `IllegalAccessException`. Sorry hackers! 🚫

---

### 4.5 🧵 Text Blocks – JEP 378

Multi-line strings are here, and they’re beautiful.
No more `\n`, no more `+`, just triple quotes and peace. ✌️

```java
String dbSchema =   """
        CREATE TABLE 'TEST'.'EMPLOYEE'
        (
          'ID' INT NOT NULL DEFAULT 0 ,
          'FIRST_NAME' VARCHAR(100) NOT NULL ,
          'LAST_NAME' VARCHAR(100) NULL ,
          'STAT_CD' TINYINT NOT NULL DEFAULT 0
        );
        """;
```

📚 *Read More: Text Blocks*

---

### 4.6 🗑️ Garbage Collection – JEPs 377 & 379

* **ZGC** and **Shenandoah** are now official, not just experimental. 🧪❌
* **G1** is still the default.

Java’s garbage collectors just keep getting smarter (unlike your roommate).

---

## 5. 🏁 Conclusion

Java 15 brings us:

* 🛡️ Sealed classes
* 🕶️ Hidden classes
* 🧾 Records
* 🧵 Text blocks
* 🔏 EdDSA signatures
* 💀 Goodbye Nashorn
* 🧠 Smarter pattern matching
* 🗑️ Upgraded GCs

Whether you’re a curious coder or a battle-hardened Java warrior, Java 15 has a little something for everyone.

**Stay sealed, hidden, and immutable, my friends.** ☕💻

---

**Happy Learning!!** 🎉
