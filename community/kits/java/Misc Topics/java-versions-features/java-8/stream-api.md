---
id: stream-api
title: Java Stream API
description: 'Real-world Examples for Beginners'
sidebar_position: 3
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## **Java Streams: The Fun Edition!**

### **What is a Stream?**

Alright, picture this: You're watching your favorite show on Netflix (or YouTube, if you're a cat-video enthusiast). The show starts playing immediately—no waiting for the entire season to download! This magical phenomenon is called streaming. Java Streams work similarly: they process data **on-demand** rather than storing everything in memory like an overstuffed burrito.

So, a Java Stream is basically a conveyor belt of data elements from a source (like a **List** or an **Array**) that allows us to perform operations in a **lazy and efficient** manner.

### **Stream Basics: Like a Cool Kids’ Pipeline**

Most stream operations (called **intermediate operations**) return a Stream, which means we can **chain them together** like a row of dominoes. This is called a **stream pipeline**—fancy, right?

Stream operations fall into two categories:

1. **Intermediate operations** - These are like prep cooks in a restaurant, chopping, slicing, and dicing data before passing it along.
2. **Terminal operations** - These actually do something useful, like serving your meal!

### **Java Stream Example: Filtering Even Numbers**

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

List<Integer> evenNumbers = numbers.stream()
    .filter(n -> n % 2 == 0)   // Only keep even numbers
    .toList(); // Collect results into a new list

System.out.println("Even Numbers List: " + evenNumbers); // [2, 4, 6, 8, 10]
```

The magic here is **lazy evaluation**, meaning Java doesn’t do anything until it absolutely has to—just like a procrastinating college student!

---

## **Creating Streams: Bringing Data to Life!**

### **1. Stream.of() - The Lazy Man’s Stream**

```java
Stream<Integer> stream = Stream.of(1,2,3,4,5,6,7,8,9);
stream.forEach(System.out::println);
```

It's like summoning numbers out of thin air! Poof! 🎩🐇

### **2. Stream.of(array) - Because Arrays Deserve Love Too**

```java
Stream<Integer> stream = Stream.of(new Integer[]{1,2,3,4,5,6,7,8,9});
stream.forEach(System.out::println);
```

Now, your boring old arrays can join the fun!

### **3. List.stream() - Because Lists Rule**

```java
List<Integer> list = new ArrayList<>();
for(int i = 1; i < 10; i++){
      list.add(i);
}
Stream<Integer> stream = list.stream();
stream.forEach(System.out::println);
```

### **4. Stream.generate() - Randomness Galore!**

```java
Stream<Integer> randomNumbers = Stream.generate(() -> (new Random()).nextInt(100));
randomNumbers.limit(20).forEach(System.out::println);
```

Need a bunch of random numbers for a game? BOOM. 🎲

### **5. Stream of String Chars or Tokens - Breaking it Down**

```java
IntStream stream = "12345_abcdefg".chars();
stream.forEach(System.out::println);

// OR
Stream<String> stream = Stream.of("A$B$C".split("\\$"));
stream.forEach(System.out::println);
```

Because sometimes you just want to explode a string into tiny bits. 💥

---

## **Stream Collectors: Putting the Pieces Back Together**

Once you're done messing around with data, you probably want to **collect** it back into something useful. Enter: **Collectors!**

### **1. Collect Stream Elements to a List**

```java
List<Integer> evenNumbersList = numbers.stream()
                                    .filter(i -> i % 2 == 0)
                                    .collect(Collectors.toList());
System.out.println(evenNumbersList);
```

### **2. Collect Stream Elements to an Array**

```java
Integer[] evenNumbersArr = numbers.stream()
                               .filter(i -> i % 2 == 0)
                               .toArray(Integer[]::new);
System.out.println(Arrays.toString(evenNumbersArr));
```

If you ever wondered how to turn a stream into a **List, Set, or even a Map**, Collectors are your best friends! 🛠️

---

## **Stream Operations: The Superpowers of Streams**

Let’s say we have a list of names:

```java
List<String> memberNames = Arrays.asList("Amitabh", "Shekhar", "Aman", "Rahul", "Shahrukh", "Salman", "Yana", "Lokesh");
```

### **1. Intermediate Operations - The Prep Work**

#### **Stream.filter() - Keep What You Want**

```java
memberNames.stream()
           .filter(s -> s.startsWith("A"))
           .forEach(System.out::println);
```

💡 **Output:**

```java
Amitabh
Aman
```

#### **Stream.map() - Transform Like a Wizard**

```java
memberNames.stream()
           .filter(s -> s.startsWith("A"))
           .map(String::toUpperCase)
           .forEach(System.out::println);
```

💡 **Output:**

```java
AMITABH
AMAN
```

#### **Stream.sorted() - Because Order Matters**

```java
memberNames.stream()
           .sorted()
           .forEach(System.out::println);
```

---

### **2. Terminal Operations - Time to Get Stuff Done!**

#### **Stream.forEach() - Do Something with Every Element**

```java
memberNames.forEach(System.out::println);
```

#### **Stream.collect() - Store the Magic!**

```java
List<String> uppercaseNames = memberNames.stream()
                                         .map(String::toUpperCase)
                                         .collect(Collectors.toList());
System.out.println(uppercaseNames);
```

💡 **Output:**

```java
[AMITABH, AMAN, LOKESH, RAHUL, SALMAN, SHAHRUKH, SHEKHAR, YANA]
```

#### **Stream.anyMatch() - Checking for Matches**

```java
boolean matchedResult = memberNames.stream()
        .anyMatch(s -> s.startsWith("A"));
System.out.println(matchedResult);  // true
```

---

## Parallel Streams

With the Fork/Join framework added in Java SE 7, we have efficient machinery for implementing parallel operations in our applications.

But implementing a fork/join framework is a complex task, and if not done right; it is a source of complex multi-threading bugs that have the potential to crash the application. With the introduction of internal iterations, we got the possibility of operations to be done in parallel more efficiently.

To enable parallelism, all we have to do is to create a parallel stream, instead of a sequential stream. And to our surprise, this is really very easy.

In any of the above-listed stream examples, anytime we want to do a particular job using multiple threads in parallel cores, all we have to call parallelStream() method instead of stream() method.

```java
List<Integer> list = new ArrayList<Integer>();
for(int i = 1; i< 10; i++){
 list.add(i);
}

//Here creating a parallel stream
Stream<Integer> stream = list.parallelStream();  

Integer[] evenNumbersArr = stream.filter(i -> i%2 == 0).toArray(Integer[]::new);
System.out.print(evenNumbersArr);

```

A key driver for Stream APIs is making parallelism more accessible to developers. While the Java platform provides strong support for concurrency and parallelism already, developers face unnecessary impediments in migrating their code from sequential to parallel as needed.

Therefore, it is important to encourage idioms that are both sequential- and parallel-friendly. This is facilitated by shifting the focus towards describing what computation should be performed rather than how it should be performed.

It is also important to strike the balance between making parallelism easier and not going so far as to make it invisible. Making parallelism transparent would introduce non-determinism and the possibility of data races where users might not expect it.

---

## Stream Methods

### Creating Streams

- concat()
- empty()
- generate()
- iterate()
- of()

### Intermediate Operations

- filter()
- map()
- flatMap()
- distinct()
- sorted()
- peek()
- limit()
- skip()

### Terminal Operations

- forEach()
- forEachOrdered()
- toArray()
- reduce()
- collect()
- min()
- max()
- count()
- anyMatch()
- allMatch()
- noneMatch()
- findFirst()
- findAny()

---

## **Wrapping Up**

Java Streams are an absolute **game-changer** in handling data efficiently. Whether you're **filtering**, **mapping**, **sorting**, or **collecting**, streams allow you to write **clean, readable, and efficient code**.

So go ahead, start streaming your data like a pro! 🚀
