---
id: priority-queue
title: Python Priority Queue
description: 'Learn to implement a priority queue in Python using the queue.PriorityQueue class, heapq and bisect modules with examples.'
sidebar_position: 7
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## Priority Queue in Python

A **priority queue** is an abstract data type similar to a regular queue, but each element has an associated priority. Elements with higher priority are served first. If two elements share the same priority, they are served in the order of insertion.

Unlike a **FIFO queue**, a priority queue serves elements based on their priority. Common use cases include job scheduling and message processing systems.

---

### 1. Using `queue.PriorityQueue`

Python's `queue` module provides a built-in `PriorityQueue` class. It retrieves the lowest-valued entries first, with a time complexity of **O(log n)**.

To handle non-comparable elements, wrap data using a custom class:

```python
from dataclasses import dataclass, field
from typing import Any
from queue import PriorityQueue

@dataclass(order=True)
class Data:
    priority: int
    item: Any = field(compare=False)

q = PriorityQueue()
q.put(Data(5, "how"))
q.put(Data(4, "are"))
q.put(Data(1, "you"))
q.put(Data(3, "my"))
q.put(Data(2, "friend"))

while not q.empty():
    print(q.get())
```

**Output:**

```py
Data(priority=1, item='my')
Data(priority=2, item='friend')
Data(priority=3, item='you')
Data(priority=4, item='are')
Data(priority=5, item='how')
```

---

### 2. Using `heapq` Module

#### 2.1. Implementation

The `heapq` module offers a binary heap (min-heap) where the smallest element is always at index `0`.

```python
import heapq

class PriorityQueue:
    def __init__(self):
        self._queue = []
        self._index = 0

    def push(self, item, priority):
        heapq.heappush(self._queue, (-priority, self._index, item))  # max-heap
        self._index += 1

    def pop(self):
        return heapq.heappop(self._queue)[-1]
```

#### 2.2. Demo

```python
class Item:
    def __init__(self, name): self.name = name
    def __repr__(self): return f'Item({self.name!r})'

q = PriorityQueue()
q.push(Item('how'), 1)
q.push(Item('are'), 5)
q.push(Item('you'), 4)
q.push(Item('my'), 2)
q.push(Item('friend'), 1)

print(q.pop())  # Item('are')
print(q.pop())  # Item('you')
print(q.pop())  # Item('my')
print(q.pop())  # Item('how')
print(q.pop())  # Item('friend')
```

---

### 3. Using `bisect` Module

#### 3.1. Implementation

The `bisect` module maintains a sorted list using binary search for efficient insertion.

```python
import bisect

class PriorityQueue:
    def __init__(self):
        self.queue = []

    def insert(self, item, priority):
        bisect.insort(self.queue, (priority, item))

    def pop(self):
        return self.queue.pop()[1]
```

#### 3.2. Demo

```python
q = PriorityQueue()
q.insert('how', 5)
q.insert('are', 4)
q.insert('you', 5)
q.insert('my', 8)
q.insert('friend', 1)

for _ in range(5):
    print(q.pop())
```

**Output:**

```py
my
how
you
are
friend
```

---

### 4. Conclusion

This guide demonstrated three ways to implement a priority queue in Python:

- `queue.PriorityQueue` (thread-safe, FIFO for same priority)
- `heapq` (efficient custom queues)
- `bisect` (maintains a sorted list)

Choose based on your performance and thread-safety requirements.

**Happy Learning!**
