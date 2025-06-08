---
id: virtual-threads
title: Java Virtual Threads
description: 'Features in short'
sidebar_position: 1
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## ☕ Java Virtual Threads – Now With 100% More Fun

### 🤹‍♂️ Welcome to the Circus of Concurrency

Java has always been juggling threads like a pro, but guess what? In Java 19 (🎉 released on Sept 20, 2022), we got our hands on *virtual threads* from Project Loom. These magical threads promise high-throughput, low-latency, and enough acrobatics to keep your CPU entertained.

---

## 🎩 What Are Virtual Threads? (JEP-425)

Imagine creating *millions* of threads with the same ease as brewing a cup of coffee ☕. That’s virtual threads for you — lightweight, JVM-managed threads that don’t boss around your OS. They are like the introverts of the thread world: efficient, low-maintenance, and never causing drama.

* Stored in JVM heap (not OS stack — take that, syscalls!)
* Scheduled via a JVM's work-stealing ForkJoinPool (yep, JVM is the conductor of this orchestra 🎼)
* Only one virtual thread per platform thread at a time — no overcrowding please

---

## 🧓 A Quick History Lesson: Traditional Threads

### 1.1 Platform Threads: The OGs

They’re basically `java.lang.Thread` but under the hood, they’re just OS threads in Java suits. They're resource-hungry and not fans of large parties.

So, Java devs used **thread pools** to keep costs down — kinda like carpooling but with threads.

### 1.2 Why They Weren’t Party Animals

* Limited by hardware.
* Each request = one thread. So 10K requests? Say goodbye to your CPU.
* Blocked threads waiting for DBs or services = CPU on nap time. 😴

### 1.3 Reactive Programming: The Over-Caffeinated Friend

Asynchronous callbacks? Yes. Simple code? Nope. Debugging? Ha! Good luck.

Reactive made threads wait less, but made code look like spaghetti 🍝.

Virtual threads = best of both worlds. Same syntax, async scalability.

---

## 🚀 Why Virtual Threads Are Awesome

* They’re `java.lang.Thread`, just lighter. Like diet soda with all the flavor.
* You can make *millions* of them without setting off CPU alarms 🚨
* They chill in memory, don’t demand OS resources, and come with their own JVM butler 🕴️
* Same thread-per-request model — but virtual threads don’t hog CPU while they nap

Perfect for I/O-bound stuff like networking, queues, and waiting-for-life moments.

---

## 🔍 Platform vs Virtual: The Showdown

* **Daemon-Only**: Virtual threads *always* wear the daemon cape 🦸
* **No Thread Groups**: They have their own secret club: `"VirtualThreads"`
* **Priority Ignorance**: Setting priority? They just smile and ignore you.
* **Unsupported Methods**: `stop()`, `suspend()`, `resume()`? LOL, nope.

---

## 🧪 Performance Face-Off: Platform vs Virtual

```java
final AtomicInteger atomicInteger = new AtomicInteger();
Runnable runnable = () -> {
  try {
    Thread.sleep(Duration.ofSeconds(1));
  } catch(Exception e) {
    System.out.println(e);
  }
  System.out.println("Work Done - " + atomicInteger.incrementAndGet());
};
```

### 🐢 With Platform Threads

```java
try (var executor = Executors.newFixedThreadPool(100)) {
  for(int i = 0; i < 10_000; i++) {
    executor.submit(runnable);
  }
}
```

⏱️ Output: `Total elapsed time: ~101 seconds`

### 🚀 With Virtual Threads

```java
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
  for(int i = 0; i < 10_000; i++) {
    executor.submit(runnable);
  }
}
```

⏱️ Output: `Total elapsed time: ~1.5 seconds`

---

## 🧙‍♂️ How to Summon a Virtual Thread

### 5.1 With `Thread.startVirtualThread()`

```java
Thread vThread = Thread.startVirtualThread(() -> System.out.println("Running in VT!"));
```

### 5.2 With `Thread.Builder`

```java
Thread.Builder builder = Thread.ofVirtual().name("JVM-Thread");
Thread t1 = builder.start(() -> System.out.println("Hello from t1"));
```

### 5.3 With `Executors.newVirtualThreadPerTaskExecutor()`

```java
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    IntStream.range(0, 10_000).forEach(i -> {
        executor.submit(() -> {
            Thread.sleep(Duration.ofSeconds(1));
            return i;
        });
    });
}
```

---

## 😴 Unstarted Virtual Thread

```java
Thread vThread = Thread.ofVirtual().unstarted(() -> System.out.println("I'm lazy until started"));
vThread.start();
```

---

## ⏳ Waiting for VTs to Finish

```java
vThread.join();
```

Or be fancy:

```java
vThread.join(Duration.ofSeconds(5));
```

---

## 📜 Best Practices (Or, How Not to Be a Thread Villain)

### 8.1 ❌ Don’t Pool Virtual Threads

They’re cheap! No coupon required. Use `Semaphore` if you want to limit access:

```java
private static final Semaphore SEMAPHORE = new Semaphore(50);
SEMAPHORE.acquire();
try {
  // Access your resource
} finally {
  SEMAPHORE.release();
}
```

### 8.2 ⚠️ Easy on the ThreadLocals

Million threads = million ThreadLocals = ☠️ memory mayhem. Consider using **Extent-Local Variables (JEP-429)**

### 8.3 🛠 Use `ReentrantLock` Instead of `synchronized`

```java
private final ReentrantLock lock = new ReentrantLock();
public void m() {
  lock.lock();
  try {
    // critical section
  } finally {
    lock.unlock();
  }
}
```

---

## 🎓 Final Words

Virtual threads won’t run your code faster, but they’ll scale like a champ 🏋️. Combined with structured concurrency (coming soon to a blog post near you), they’re set to revolutionize Java threading.

So go ahead — start a million threads. Your CPU won’t even blink. 😎

Happy Learning! 🎉
