---
id: association-aggregation-composition
title: Association, Aggregation and Composition in Java
description: 'Learn the difference between association, aggregation and composition in Java with source code, examples and real-life usecases.'
sidebar_position: 2
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎭 Association, Aggregation, and Composition – The OOP Relationship Drama

In the world of object-oriented programming (OOP), classes don’t just sit around doing nothing—they form relationships! These relationships can be as casual as acquaintances, as exclusive as BFFs, or as clingy as conjoined twins. And that’s exactly what Association, Aggregation, and Composition are all about! 🎬

Just like in real life, some relationships are chill, some are a bit possessive, and others are totally codependent. Let’s dive into this hilarious relationship drama! 🤓

![Association](@site/static/img/kits/java/association-aggregation-composition-img.png)

---

## 1️⃣ Association: The "We Know Each Other" Relationship 🏫

Association is the most flexible type of relationship. It’s like two people who work in the same office but don’t owe each other anything. They exist independently but interact when needed. No unnecessary drama! 🤝

### Example: Teacher 👨‍🏫 & Student 🧑‍🎓

- A student can have multiple teachers.
- A teacher can teach multiple students.
- But if one leaves, the other continues to exist. No heartbreaks here! 💔

```java
class Teacher {
  List<Student> students;
  
  public void teach() {
    // Teach stuff 🎓
  }
}

class Student {
  List<Teacher> teachers;
  
  public void learn() {
    // Learn stuff 📚
  }
}
```

🔹 Association can take different forms:

- One-to-One
- One-to-Many
- Many-to-One
- Many-to-Many

This means that just like in school, a student can have multiple teachers, and a teacher can have multiple students, but they don’t own each other. No attachments! 😆

---

## 2️⃣ Aggregation: The "I Own You, But You Can Leave" Relationship 📱🔋

Aggregation is like a phone and its battery. The phone has a battery, but if the phone gets destroyed (RIP 📱), the battery can still be used elsewhere!

### Example: CellPhone 📲 & Battery 🔋

- A battery can belong to only one phone at a time.
- If the phone dies, the battery can be used in another phone.
- The phone and battery have independent lifecycles, but there is some level of ownership.

```java
class CellPhone {
  CellBattery battery;
  
  public void ring() {
    // Riiiiing 📞
  }
}

class CellBattery {
  short remainingEnergy;
  
  public void charge() {
    // Charging...⚡
  }
}
```

🔋 If we need to check the battery percentage, we must first access the phone:

```java
short remainingEnergy = phone.getBattery().getRemainingEnergy();
```

So while the battery belongs to the phone, it doesn’t have to die with it. A practical relationship! 😎

---

## 3️⃣ Composition: The "We Are Inseparable" Relationship ❓➡️📝

Composition is the strictest relationship. It’s like a question and its answers. If you delete the question, what’s the point of the answers? They go down together! 🚀

### Example: Question ❓ & Answer ✅

- A question has multiple answers.
- An answer belongs to a specific question.
- If the question is deleted, all answers vanish into the void. 🕳️

```java
class Question {
  int id;
  String text;
  List<Answer> answers;
}

class Answer {
  long id;
  String text;
  boolean correct;
}
```

❌ Delete the question, and poof! All answers disappear too! Magic? No, just composition! ✨

---

## 🎯 Conclusion: What’s the Difference? 🤔

| Relationship Type | Ownership? | Lifecycle Dependency? | Example |
|------------------|------------|----------------------|---------|
| **Association** | Nope ❌ | Independent 💃 | Teacher & Student 👩‍🏫👨‍🎓 |
| **Aggregation** | Yes ✅ | Independent 💪 | Phone & Battery 📱🔋 |
| **Composition** | Yes ✅ | Dependent 😱 | Question & Answer ❓📝 |

Sometimes, deciding between association, aggregation, and composition is harder than picking a movie to watch. But with these fun examples, you’ll never mix them up again! 🎉

Have questions? Drop them in the comments! 🚀

**Happy Learning!** 😃
