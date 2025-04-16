---
id: python-nlargest-nsmallest
title: Python find largest N (top N) or smallest N items
description: 'Python examples to find the largest (or the smallest) N elements from a collection of elements using nlargest() and nsmallest() functions from heapq library.'
sidebar_position: 3
---
![banner-python](@site/static/img/kits/python/banner-python.png)

## ✅ **When to Use `heapq.nlargest()` or `nsmallest()`**

- You need the **top N** largest or smallest elements **without sorting the entire dataset**.
- Works with both simple iterables and **complex data structures** (using `key`).
- Efficient for **large data**, especially when `N` is much smaller than the total number of elements.

---

### 🔍 **Extra Tip: Use `min()` and `max()` when N = 1**

```python
nums = [1, 8, 2, 23, 7, -4, 18, 23, 42, 37, 2]
print(max(nums))  # 42
print(min(nums))  # -4

#Also with another example
import heapq

company = [
   {'name': 'IBM', 'shares': 100, 'price': 91.1},
   {'name': 'AAPL', 'shares': 50, 'price': 543.22},
   {'name': 'FB', 'shares': 200, 'price': 21.09},
   {'name': 'HPQ', 'shares': 35, 'price': 31.75},
   {'name': 'YHOO', 'shares': 45, 'price': 16.35},
   {'name': 'ACME', 'shares': 75, 'price': 115.65}
]

cheap = heapq.nsmallest(1, company, key= lambda s: s['price'])
print("smallest", cheap)

cheap = heapq.nsmallest(3, company, key= lambda s: s['price'])
print("3 smallest", cheap)

cheapest = min(company, key= lambda s: s['price'])
print("Cheapest Company",cheapest)

expensive = max(company, key= lambda s: s['price'])
print("Expensive Company", expensive)
```

This is more efficient than calling `nlargest(1, nums)[0]`.

---

### ⚙️ **If you ever need to extract by multiple conditions**, you can chain `key` logic

```python
# Highest value per share (price per share)
expensive_by_value = heapq.nlargest(3, portfolio, key=lambda s: s['price'] * s['shares'])
```

---

Let me know if you’d like to see:

- A custom comparator version
- How `heapq` is implemented under the hood
- Performance comparison with sorting

Happy Pythoning! 🐍
