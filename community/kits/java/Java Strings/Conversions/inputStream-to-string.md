---
id: inputStream-to-string
title: Convert InputStream to String in Java
description: 'Learn to convert InputStream to String using Google guava IO’s ByteSource and CharStreams, BufferedReader, Scanner, and IOUtils classes.'
sidebar_position: 9
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## 🎉 Converting InputStream to String in Java - The Fun Way! 🚀

Ever found yourself wrestling with an `InputStream` and thinking, *"I wish this was a String already!"*? Well, fret no more! Today, we're diving into multiple ways to convert an `InputStream` into a `String` like a Java ninja. 🥷💻

---

## 1️⃣ Using `InputStream.readAllBytes()` (Since Java 9) 🔥

If you're using Java 9+, you're in luck! The `readAllBytes()` method turns your stream into a byte array faster than you can say "Stream!" 📜💨

```java
InputStream in = new FileInputStream(new File("C:/temp/test.txt"));

String fileContent = new String(in.readAllBytes());
```

⚠️ Warning: Avoid using this for files larger than **2GB** unless you enjoy OutOfMemoryErrors! 🚨

---

## 2️⃣ Using `BufferedReader` - The Old Reliable 📖

Ah, `BufferedReader`... The grandparent of Java file reading. Super efficient and still going strong! 🏋️‍♂️

```java
InputStream in = new FileInputStream(new File("C:/temp/test.txt"));
BufferedReader reader = new BufferedReader(new InputStreamReader(in));

StringBuilder out = new StringBuilder();
String line;
while ((line = reader.readLine()) != null) {
    out.append(line);
}
String fileContent = out.toString();   
reader.close();
```

Or, if you're feeling fancy with **Java 8**, go for this sleek, stream-based approach: 🌊

```java
InputStream in = new FileInputStream(new File("C:/temp/test.txt"));
String newLine = System.getProperty("line.separator");

String fileContent;
try (Stream<String> lines = new BufferedReader(new InputStreamReader(in)).lines()) {
    fileContent = lines.collect(Collectors.joining(newLine));
}
```

---

## 3️⃣ Google Guava IO - The Modern Magic ✨

If you love Google's open-source tools, **Guava** has some great utilities! 🚀

### 3.1 Dependencies 📦

Add this to your `pom.xml`:

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>31.1-jre</version>
</dependency>
```

### 3.2 Using `ByteSource` 📜

```java
InputStream inputStream = new FileInputStream(new File("C:/temp/test.txt"));

ByteSource byteSource = new ByteSource() {
    @Override
    public InputStream openStream() throws IOException {
        return inputStream;
    }
};

String fileContent = byteSource.asCharSource(Charsets.UTF_8).read();
```

### 3.3 Using `CharStreams` 🎭

```java
InputStream inputStream = new FileInputStream(new File("C:/temp/test.txt"));
String fileContent;

try (final Reader reader = new InputStreamReader(inputStream)) {
    fileContent = CharStreams.toString(reader);
}
System.out.println(fileContent);
```

---

## 4️⃣ Apache Commons IO - The Power Tool ⚡

If your project already has Apache Commons IO, why not use its magic? 🪄

### 4.1 Dependencies 📦

```xml
<dependency>
    <groupId>commons-io</groupId>
    <artifactId>commons-io</artifactId>
    <version>2.11.0</version>
</dependency>
```

### 4.2 Using `IOUtils` 🛠️

Two ways to make it work like a charm! ✨

```java
// Method 1: IOUtils.copy()
StringWriter writer = new StringWriter();
IOUtils.copy(new FileInputStream(new File("C:/temp/test.txt")), writer, "UTF-8");
String fileContent = writer.toString();
System.out.println(fileContent);

// Method 2: IOUtils.toString()
String fileContent = IOUtils.toString(new FileInputStream(new File("C:/temp/test.txt")), "UTF-8");
System.out.println(fileContent);
```

---

## 5️⃣ Java `Scanner` - The Underdog 🤹‍♂️

Not the most famous approach, but hey, it works! Scanner reads **tokens** from the stream, and in this case, we grab everything in one go. 🎩✨

```java
FileInputStream fin = new FileInputStream(new File("C:/temp/test.txt"));
java.util.Scanner scanner = new java.util.Scanner(fin, "UTF-8").useDelimiter("\\A");

String fileContent = scanner.hasNext() ? scanner.next() : "";
scanner.close();
```

---

## 🚀 Wrap-Up

That’s it, folks! We've covered **five** awesome ways to convert an `InputStream` to a `String` in Java. Pick your favorite and start coding like a pro! 😎🔥

Happy Coding! 🎉🐱‍💻
