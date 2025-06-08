---
id: java-eddsa
title: Java EdDSA (Ed25519 / Ed448)
description: 'EdDSA (Edwards-Curve Digital Signature Algorithm) [RFC 8032] is another additional digital signature scheme added in Java 15 thorough JEP 339.'
sidebar_position: 3
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🔐 EdDSA in Java 15 – The Cool New Kid on the Crypto Block (JEP 339)

Java 15 decided to shake up the cryptography party by inviting a new guest—**EdDSA** (a.k.a. *Edwards-Curve Digital Signature Algorithm*). And spoiler alert: this guest came prepared, stylish, and fast.

Let’s get to know this new cryptographic superstar better. 🎩✨

---

## 📦 What’s EdDSA?

> *"Hey ECDSA, we love you, but meet your sleeker cousin: EdDSA."*

✅ EdDSA is introduced in **Java 15** via **JEP 339**  
✅ It's defined in [RFC 8032](https://datatracker.ietf.org/doc/html/rfc8032)  
❌ No, it doesn't replace the existing ECDSA—it just brings more 🔥 to the table.

---

## 🔢 EdDSA Parameter Choices

| Algorithm Name | Description |
|----------------|-------------|
| `EdDSA`        | The generic Edwards-Curve signature algorithm as per RFC 8032 |
| `Ed25519`      | RFC 8032 flavor with 255 bits of cryptographic goodness |
| `Ed448`        | The beefier 448-bit version (for when you want extra security calories) |

---

## 🚀 1. Why EdDSA Rocks (Especially with Ed25519)

Here’s why EdDSA is basically the rockstar of digital signatures:

- ⚡ **Platform-agnostic and blazing fast**: Faster than ECDSA, and not tied down to any OS drama.
- 🕶️ **Constant-time execution**: No secret key length leaks. Bye-bye, timing attacks!
- 🧩 **Standardized parameters**: Built-in options like Ed25519 and Ed448 with friendly identifiers.
- 🌐 **TLS 1.3 Ready**: It’s one of **only three** allowed signature schemes for TLS 1.3. Yeah, it's elite.

---

## 🧪 2. Java EdDSA in Action (aka “Edward Signs Stuff”)

Here’s a Java example showing how to generate a signature using Ed25519.  
This is not a crypto movie, but it sure is **electrifying**:

```java
import java.nio.charset.StandardCharsets;
import java.security.*;
import java.util.Base64;

public class EdwardAlgoExample {
  public static void main(String[] args)
      throws NoSuchAlgorithmException, InvalidKeyException, SignatureException {

    KeyPairGenerator kpg = KeyPairGenerator.getInstance("Ed25519");
    KeyPair kp = kpg.generateKeyPair();

    byte[] msg = "test_string".getBytes(StandardCharsets.UTF_8);

    Signature sig = Signature.getInstance("Ed25519");
    sig.initSign(kp.getPrivate());
    sig.update(msg);
    byte[] s = sig.sign();

    String encodedString = Base64.getEncoder().encodeToString(s);
    System.out.println(encodedString);
  }
}
````

🔐 **What’s happening here?**

- We generate a key pair using `Ed25519`.
- We create a digital signature for `"test_string"`.
- Then we Base64-encode that bad boy and print it like a proud parent.

🖨️ **Sample Output:**

```java
O+FQIdJylUF0GW//O+gVGmsAwGDQBuCZkULqgQdpvj
H3koFL3wpSrwN1zzjgWOGLXtyDFrJxvwD1J7rIIY+AAw==
```

(Note: Output will change every time—unless you’re in a cryptographically cursed timeline.)

---

## 🧠 TL;DR

- ✅ EdDSA is sleek, secure, and modern.
- ✅ Use `Ed25519` for strong, fast signatures.
- ✅ Java 15 makes it super simple to implement.
- ✅ It’s a perfect fit for TLS 1.3 and your next secure app.

---

** 🎉 Happy Learning!!

You’ve just unlocked the secrets of EdDSA in Java 15. Go forth and sign things—with flair, and cryptographic confidence! 💼🕵️‍♂️
