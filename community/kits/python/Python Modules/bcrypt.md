---
id: bcrypt
title: Python bcrypt
description: 'Learn to use Python bcrypt module for hashing a plain text password into encrypted String'
sidebar_position: 1
---
![banner-python](@site/static/img/kits/python/banner-python.png)

### 📦 `bcrypt` in Python: Making Your Passwords Look Like Secret Agents 🕵️‍♂️

So you want to make your passwords look like they're from MI6 and can't be cracked by mere mortals? Enter **bcrypt** – your password’s personal bodyguard 💪.

In this tutorial, we’ll learn how to:

- Hash a plain password into a Fort Knox-level encrypted string 🏰
- Verify whether a user is legit or just pretending to be you 🧑‍💻

---

## 1. Meet Your Bouncer: `bcrypt` Module

The **bcrypt algorithm** was crafted by the genius duo 🧠 **Niels Provos** and **David Mazières**, using the mighty **Blowfish cipher** (not to be confused with an actual blowfish 🐡).

Why use bcrypt?

- 🔐 **Salt** is added to every password—so even if two people have “123456,” they’ll still look different when hashed.
- ⏱️ It supports adjustable "rounds" to increase the cost of hashing (i.e., it burns more CPU cycles to resist brute-force attacks).
- 🦾 You can increase the rounds as your machines get stronger... just like leveling up in a video game!

---

## 1.1. 🧪 Installing `bcrypt`

Let's get this thing installed before your passwords start crying for help.

```bash
# Get the latest & greatest version
pip install bcrypt

# OR if you want to go retro 🎮
pip install python-bcrypt==0.3.2
```

---

## 1.2. ⚙️ Bcrypt Toolkit – What’s in the Box?

| Method              | Description |
|---------------------|-------------|
| `gensalt(rounds)`   | Generates a random salt (think of it as adding spices to your hash). You can tweak the `rounds` to make it stronger. Default = 12. |
| `hashpw(passwd, salt)` | Hashes your password with the given salt. |
| `checkpw(passwd, hashed)` | Checks whether your user is who they *claim* to be. |

---

## 2. 💻 Let’s Get Our Hands Dirty – Examples

---

### 🔐 Example 1: Hashing a Password Like a Boss

```python
import bcrypt

passwd = b'user_password'

# Hashing the password for the first time
hashed = bcrypt.hashpw(passwd, bcrypt.gensalt())

print("Password hash is:", hashed)
```

📦 **Program Output**:

```py
Password hash is :  b'$2b$12$rt0asWjvT0IkAOfqlhKSau.f2UTMhMpGtlIYArco7MSKERkBhwioC'
```

Boom! Now your password looks like it belongs in The Matrix 😎.

---

### 🧪 Example 2: Verifying the Password (a.k.a. the Truth Detector)

```python
import bcrypt

passwd = b'user_password'

# Hashing again for demonstration
hashed = bcrypt.hashpw(passwd, bcrypt.gensalt(10))

# Now checking if the password matches the hash
matched = bcrypt.checkpw(passwd, hashed)

print("Password match is:", matched)
```

🔎 **Program Output**:

```py
Password match is :  True
```

That’s right! ✅ Your password passed the vibe check.

---

## 🎉 Wrap-Up

Congrats! You’ve just learned how to:

- Convert your password into something that looks like encrypted alien language 🛸
- Validate users with ninja-level password checks 🥷
- Sleep peacefully at night knowing your passwords are salted and hashed 🛏️

So go forth, secure your apps, and never store passwords in plain text again… or the dev gods will find you 😈.

---

Happy Hashing! 🔐🔥
