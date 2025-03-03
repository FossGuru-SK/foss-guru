---
id: escape-html
title: Java Escape HTML – Encode Special Characters
description: 'Java examples to escape HTML using the StringEscapeUtils.escapeHtml4(), Spring’s HtmlUtils.htmlEscape() and custom logic for special cases.'
sidebar_position: 11
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🤖 HTML Escaping in Java – The Fun Way! 🎭

Ah, HTML escaping—the superhero of web development! 🦸‍♂️ Without it, your Java strings might throw a tantrum and wreak havoc on your beautiful web pages. But fear not! In this article, we’ll explore what HTML escaping is, why it’s your best buddy, and how to do it like a pro (or at least like someone who knows their stuff).

---

## 1️⃣ What is HTML Escaping? 🤔

HTML escaping is like giving special characters a disguise so they don’t get misinterpreted by browsers. Think of it like a ninja mask for characters that might cause trouble in your HTML.

### Special Characters in HTML (a.k.a. The Trouble Makers 🙄)

| Character | Escaped Version |
|-----------|----------------|
| `<`       | `&lt;`         |
| `>`       | `&gt;`         |
| `&`       | `&amp;`         |
| `"`       | `&quot;`         |
| `'`       | `&#39;`         |

If you don’t escape these bad boys, your HTML might break like a cheap chair. Even worse, it can lead to XSS attacks where bad actors inject nasty scripts into your pages. Yikes! 😱

---

## 2️⃣ Escaping HTML using `StringEscapeUtils` 🛠️

Apache Commons-Text to the rescue! 🦸‍♀️ This handy library helps us escape and unescape HTML with zero stress.

### Step 1: Add the dependency to your project 🏗️

```xml
<dependency>
  <groupId>org.apache.commons</groupId>
  <artifactId>commons-text</artifactId>
  <version>1.4</version>
</dependency>
```

### Step 2: Use `escapeHtml4()` to escape HTML like a boss 😎

```java
import org.apache.commons.text.StringEscapeUtils;

String unEscapedString = "<java>public static void main(String[] args) { ... }</java>";
String escapedHTML = StringEscapeUtils.escapeHtml4(unEscapedString);

System.out.println(escapedHTML); // Now your browser won’t freak out!
```

**Output:**

```html
&lt;java&gt;public static void main(String[] args) { ... }&lt;/java&gt;
```

**Note:** The apostrophe (`'`) is a rebel and isn’t supported as `&apos;`, so beware! 🚨

---

## 3️⃣ Escaping HTML in Spring Framework 🌱

Spring makes it even easier with `HtmlUtils`. Because who doesn’t love built-in helpers? 🥳

```java
import org.springframework.web.util.HtmlUtils;

String input = "<script>alert('Hello, World!');</script>";
String escapedHtml = HtmlUtils.htmlEscape(input);

System.out.println("Escaped HTML: " + escapedHtml);
```

**Output:**

```html
Escaped HTML: &lt;script&gt;alert(&#39;Hello, World!&#39;);&lt;/script&gt;
```

Phew! That could have been a security disaster! 💥

---

## 4️⃣ Rolling Your Own HTML Escaper (Because You Like a Challenge 💪)

Sometimes, you want full control over how HTML escaping works. Enter, **DIY Mode!** 🛠️

```java
import java.util.HashMap;

public class StringUtils {
    private static final HashMap<Character, String> htmlEncodeChars = new HashMap<>();

    static {
        htmlEncodeChars.put('<', "&lt;");
        htmlEncodeChars.put('>', "&gt;");
        htmlEncodeChars.put('&', "&amp;");
        htmlEncodeChars.put('"', "&quot;");
    }

    public static String encodeHtml(String input) {
        StringBuilder encoded = new StringBuilder();
        for (char c : input.toCharArray()) {
            encoded.append(htmlEncodeChars.getOrDefault(c, String.valueOf(c)));
        }
        return encoded.toString();
    }
}
```

### Using the custom encoder

```java
String unEscapedString = "<java>public static void main(String[] args) { ... }</java>";
String escapedHTML = StringUtils.encodeHtml(unEscapedString);

System.out.println(escapedHTML);
```

And voilà! 🎉 Your HTML is now safe and sound. 🏰

---

## 🎯 Conclusion: Keep Your HTML Safe and Secure! 🔒

HTML escaping isn’t just about making sure your website looks right—it’s a key security measure. Whether you use `StringEscapeUtils`, `HtmlUtils`, or roll your own method, **always escape user-generated input** to avoid rendering issues and security vulnerabilities. 💡

Now go forth and escape those characters like a true HTML ninja! 🥷🔥
