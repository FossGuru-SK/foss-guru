---
id: sealed-classes-interfaces
title: Sealed Classes and Interfaces
description: 'In Java, by default, there is no restriction on a class which public interfaces it can impliment. Since Java 15, now a class or interface can be declared sealed class or sealed interface using the modifier sealed.'
sidebar_position: 2
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🛡️ Sealed Classes and Interfaces in Java 15 – Now With 100% More Sass ☕

Welcome, brave Java warrior! Today, we embark on a journey through the mysterious and powerful realm of **sealed classes and interfaces**—a realm where only the chosen few are allowed to inherit.

Before Java 15, your public interfaces were wide open like a coffee shop with no closing hours. Now? We’re slapping on some velvet ropes and exclusive guest lists. 🚫👨‍💻

---

## 1. 🔐 Sealed Classes

### 1.1 🎭 `sealed` Modifier and `permits` Keyword

By default, Java classes are like open mic nights—**anyone** can walk up and implement your public interface. But now with Java 15’s *preview feature*, you can **seal the deal**.

How? Just toss in the magical `sealed` modifier, and declare your **A-list subclasses** using `permits`. 💫

```java
sealed class Account
    permits CurrentAccount, SavingAccount, LoanAccount {
}

final class CurrentAccount extends Account {}
non-sealed class SavingAccount extends Account {}
sealed class LoanAccount extends Account permits HomeloanAccount, AutoloanAccount {}

final class HomeloanAccount extends LoanAccount {}
final class AutoloanAccount extends LoanAccount {}
````

🎉 **Result?** Only these 3 subclasses are allowed to extend `Account`. No party crashers allowed!
🎯 And for `LoanAccount`, only `HomeloanAccount` and `AutoloanAccount` get VIP access.

---

### 1.2 🧬 `final`, `sealed`, and `non-sealed` Subclasses

Once you're on the guest list, how you behave matters:

* `final`: “I’m the last in my line. No one inherits from me. Period.” 🔒
* `sealed`: “You can inherit, but only if you’re invited.” 🔐
* `non-sealed`: “I’m chill. Anyone can extend me. Live your life.” 🎈

💡 **Important:** A sealed class **cannot** force its subclasses to keep the sealing tradition. Rebels gonna rebel.

---

### 1.3 📦 Packaging of Sealed Classes

There are some **location rules** to keep your sealed family together:

* All permitted subclasses must be **in the same module**.
* If you're in the **unnamed module**, then they must be in the **same package**.
* Bonus hack: If you put all the subclasses in the **same `.java` file**, you can **omit the `permits` keyword**!

Example:

```java
public sealed class Account {}    // No 'permits' keyword needed

final class CurrentAccount extends Account {}
non-sealed class SavingAccount extends Account {}
sealed class LoanAccount extends Account {}

final class HomeloanAccount extends LoanAccount {}
final class AutoloanAccount extends LoanAccount {}
```

🧙 Magical, isn’t it?

---

### 1.4 📇 Records as Sealed Subclasses

Guess what? You can totally add a **record class** to the `permits` list! Because records are:

* Automatically `final`
* Immutable
* Made for modeling data with ✨ style ✨

So go ahead and drop a record into your sealed class family. They won’t ruin the party.

---

### 1.5 🧪 API Support

Java's reflection API decided to get in on the action too. Say hello to:

* `Class::permittedSubclasses()` → Returns a nice little array of all the permitted subclasses.
* `Class::isSealed()` → Returns `true` if the class is sealed. 🔍

Now you can seal and reflect at the same time. 💅

---

## 2. 🤝 Sealed Interfaces

Interfaces wanted in on the fun—and Java said, “Sure, why not?”

Same rules, just a different vibe. Add `sealed` to your interface and use `permits` to name the lucky few who can implement or extend it.

```java
public sealed interface IReport
        permits Printable, Formattable, ExcelReport, PdfReport {
}

non-sealed interface Printable extends IReport {}
non-sealed interface Formattable extends IReport {}
non-sealed class ExcelReport implements IReport {}
non-sealed class PdfReport implements IReport {}
```

🧾 Sealed interfaces follow **the exact same declaration rules** as sealed classes. No extra drama.

---

## 3. 🧠 When Should You Use Sealed Classes?

You know that one time you wrote 10 `instanceof` checks and STILL missed a subclass? Yeah... sealed classes are here to save you.

Why use them?

* Lock down class hierarchies like a boss.
* Prevent surprise subclassing from rogue developers.
* Help the compiler ensure you've handled **all the cases** in your `instanceof` checks.

Future versions of Java + pattern matching = **no more default or else blocks**. 🙌

As soon as a new subclass joins the sealed class squad, the compiler taps you on the shoulder and says, “Yo, you forgot to handle this one.”

---

** 🎉 Happy Learning!!

That’s the sealed class circus, folks!
Use it to tame your type hierarchies, control subclassing chaos, and become the master of your Java destiny. 🧙‍♂️☕

Until next time—keep your classes sealed and your bugs revealed!
