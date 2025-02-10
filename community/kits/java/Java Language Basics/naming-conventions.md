---
id: Naming Conventions
title: Naming Conventions
description: 'Java Language Naming Conventions'
sidebar_position: 3
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## A Guide to Naming Stuff Like a Pro (and Not a Monster)

Naming things in programming is hard. Like, “trying to fold a fitted sheet” hard. But fear not! Java naming conventions exist to bring order to chaos and prevent your code from looking like a toddler’s scribble on a wall.

Here’s a crash course in how to name things in Java without accidentally summoning the coding gods’ wrath.

### 1. Classes and Interfaces

Rule: Class and interface names should be nouns, start with an uppercase letter, and use camel case.
Why? Because your class is a big deal—it deserves to stand tall and proud.

Examples:

✅ UserAccount, MagicPotion, SpaceShip \
❌ myclass, classyMcClassFace, thingy

Funny Tip:
"Naming a class Thing is like naming your dog 'Dog.' Sure, it works, but good luck explaining it to anyone."

### 2. Methods

Rule: Method names should be verbs or action phrases, start with a lowercase letter, and use camel case.
Why? Because methods do stuff, and verbs scream action!

Examples:

✅ getUserName(), launchRocket(), mixPotion() \
❌ doStuff(), thing(), launch (seriously, launch what?!)

Funny Tip:
"A method named doStuff() is like telling someone, 'Go somewhere and do something.' Sure, it’s a command, but it’s not helpful!"

### 3. Variables

Rule: Variables should be short, meaningful names written in camel case, starting with a lowercase letter.
Why? Because variables are like labels—they should tell you what’s inside.

Examples:

✅ userName, rocketFuel, magicPotionCount \
❌ x, stuff, bananaVariable123

Funny Tip:
"If your variable name requires an explanation in the comments, you’ve failed. Name it well, or prepare to write an essay."

### 4. Constants

Rule: Constants should be all uppercase with words separated by underscores.
Why? Because constants are loud and proud—think of them as the code equivalent of someone shouting, "THIS VALUE NEVER CHANGES!"

Examples:

✅ MAX_USERS, PI, DEFAULT_TIMEOUT \
❌ maxusers, neverChange, constantBro

Funny Tip:
"Naming a constant PI is cool. Naming it Pie is cruel. Don’t trick your future self into thinking dessert is involved."

### 5. Packages

Rule: Package names should be lowercase, concise, and use dot notation to organize logically.
Why? Because packages are like folders—clean organization makes everything easier to find.

Examples:

✅ com.company.projectname, org.example.utils \
❌ com.example.MyProjectFolder, junk.drawer

Funny Tip:
"Packages are like your closet—keep it organized, or you’ll be digging through chaos to find that one pair of socks (or class)."

### 6. Camel Case vs. Snake Case

Camel Case: Words are smushed together, and each new word starts with a capital letter. E.g., camelCaseIsCool.
Snake Case: Words are separated by underscores. E.g., snake_case_is_slow_and_steady.
Funny Analogy:
"Camel case is like a smooth roller coaster—up and down, but sleek. Snake case is like crawling on the ground. Use camel case unless explicitly told otherwise."

### 7. Why Naming Conventions Matter

Readability: Your code should be understandable even to a sleep-deprived programmer.
Maintainability: Clear names make debugging feel less like solving a crime.
Teamwork: Your teammates will hate you less if your names make sense. (Or at least hate you for other reasons.)

> **Note:**
> Since Java 9, the single character `_` is an invalid name for a variable, but _a and __ (a double `_` ) are legal names.

### 8. Naming Generic Types

Generic type parameter names should be uppercase single letters. The letter 'T' for type is typically recommended. In JDK classes, E is used for collection elements, S is used for service loaders, and K and V are used for map keys and values.

```bash
public interface Map <K,V> {}

public interface List<E> extends Collection<E> {}

Iterator<E> iterator() {}
```

### 9. Naming Enums

Similar to class constants, enumeration names should be all uppercase letters.

```bash
enum Direction {NORTH, EAST, SOUTH, WEST}
```

### 10. Bonus: Naming Crimes to Avoid

Here are a few naming sins that’ll have your future self shaking their fist at past you:

The Vague Name:
`stuff`, `data`, `thingy` \
"You knew what it meant once. Now it’s a mystery!"

The Overly Long Name:
`theNumberOfUsersWhoLoggedInTodayAndAlsoCheckedNotifications` \
"Cool story, but TL;DR."

The Copy-Paste Disaster:
`temp`, `temp2`, `temp3` \
"Nothing says 'I stopped caring' like a chain of temps."

The Joke Name:
lol, wut, yolo \
"Funny now, embarrassing later."
