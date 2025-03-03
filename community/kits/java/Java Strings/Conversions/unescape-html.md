---
id: unescape-html
title: How to Unescape HTML in Java
description: 'Java examples unescapes an HTML string to a string containing the actual Unicode characters using StringEscapeUtils and a custom method.'
sidebar_position: 12
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🏆 Unescaping HTML in Java: Because Code Deserves to Breathe

Ever looked at `&lt;java&gt;public static void main(String[] args) { ... }&lt;/java&gt;` and thought, *"Wow, that’s an ancient spell!"*? Well, fear not, brave developer! Today, we shall unmask these cryptic symbols and return them to their former glory! 💪🔥

## 1️⃣ The Magic of `StringEscapeUtils.unescapeHtml4()` 🪄

Apache Commons Text brings us a powerful tool to unescape HTML like a pro! But first, let's summon it with Maven:

```xml
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-text</artifactId>
    <version>1.10.0</version>
</dependency>
```

### 🔥 The Spell: `unescapeHtml4()`

- Takes an escaped HTML string and restores it to its true form.
- If you pass `null`, it gracefully returns `null` (because it’s polite!).
- Recognizes all standard HTML 4.0 entities.
- If it encounters an unknown entity, it shrugs and leaves it alone. 😎

#### 🏗 Example

```java
String escapedString = "&lt;java&gt;public static void main(String[] args) { ... }&lt;/java&gt;";
     
String unEscapedHTML = StringEscapeUtils.unescapeHtml4(escapedString);

System.out.println(unEscapedHTML);
```

🎉 **Output:**

```plaintext
<java>public static void main(String[] args) { ... }</java>
```

Ahhh, that’s better! Now our Java code can breathe! 😌

---

## 2️⃣ Rolling Our Own Unescaper (a.k.a. Doing It the Hard Way 🤓)

Want to impress your teammates by reinventing the wheel? Here’s how you can build your own unescaper with plain Java!

### 🏗 The DIY Approach

```java
private static HashMap<String, String> htmlEntities;

static {
    htmlEntities = new HashMap<>();
    htmlEntities.put("&lt;", "<");
    htmlEntities.put("&gt;", ">");
    htmlEntities.put("&amp;", "&");
    htmlEntities.put("&quot;", "\"");
    htmlEntities.put("&nbsp;", " ");
    htmlEntities.put("&copy;", "\u00a9");
    htmlEntities.put("&reg;", "\u00ae");
    htmlEntities.put("&euro;", "\u20a0");
}

public static final String unescapeHTML(String source) {
    int i, j;
    boolean continueLoop;
    int skip = 0;
    
    do {
        continueLoop = false;
        i = source.indexOf("&", skip);
        if (i > -1) {
            j = source.indexOf(";", i);
            if (j > i) {
                String entityToLookFor = source.substring(i, j + 1);
                String value = htmlEntities.get(entityToLookFor);
                if (value != null) {
                    source = source.substring(0, i) + value + source.substring(j + 1);
                    continueLoop = true;
                } else {
                    skip = i + 1;
                    continueLoop = true;
                }
            }
        }
    } while (continueLoop);
    return source;
}
```

#### 🏗 Example Usage

```java
String input = "&lt;java&gt;public static void main(String[] args) { ... }&lt;/java&gt;";
     
String output = unescapeHTML(input);

System.out.println(output);
```

🎉 **Output:**

```plaintext
<java>public static void main(String[] args) { ... }</java>
```

---

## 🎯 The Takeaway

- **Use Apache Commons** if you value your time. ⏳
- **Build your own** if you enjoy a bit of coding adventure. 🏗
- Either way, you now have the power to **unleash your HTML-escaped text into its readable form!** 🚀

Happy Coding! 🎉🎨
