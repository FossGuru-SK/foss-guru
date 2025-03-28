---
id: introduction
title: Java 11 Features (LTS) Intro
description: 'Features in short'
sidebar_position: 1
---
![Banner java icon](@site/static/img/kits/java/banner-java-icon.png)

## Java 11 [LTS] Features 🚀

Java 11 (released in September 2018) includes many important and useful updates. Let’s explore the new features and improvements it brings for developers and architects.

## 1. HTTP Client API 🌐

Java had `HttpURLConnection` class for a long time for HTTP communication. However, over time, application requirements have become more complex and demanding. Before Java 11, developers had to use feature-rich libraries like Apache HttpComponents or OkHttp.

Java 9 introduced an `HttpClient` implementation as an experimental feature. It has now matured into a final feature in Java 11, allowing applications to make HTTP communications without any external dependencies.

### 1.1. How to use HttpClient

A typical HTTP interaction with the `java.net.http` module involves:

1. Creating an instance of `HttpClient` and configuring it as needed.
2. Creating an instance of `HttpRequest` and populating the information.
3. Passing the request to the client, performing the request, and retrieving an instance of `HttpResponse`.
4. Processing the information contained in the `HttpResponse`.

The HTTP API can handle both **synchronous** and **asynchronous** communication.

### 1.2. Synchronous Request Example 🔄

```java
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class HttpClientExample {
    public static void main(String[] args) {
        HttpClient httpClient = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();
        
        try {
            String urlEndpoint = "https://postman-echo.com/get";
            URI uri = URI.create(urlEndpoint + "?foo1=bar1&foo2=bar2");
            HttpRequest request = HttpRequest.newBuilder()
                        .uri(uri)
                        .build();
            HttpResponse<String> response = httpClient.send(request,
                              HttpResponse.BodyHandlers.ofString()); 
            
            System.out.println("Status code: " + response.statusCode());                            
            System.out.println("Headers: " + response.headers().allValues("content-type"));               
            System.out.println("Body: " + response.body()); 
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
```

### 1.3. Asynchronous Request Example ⚡

Asynchronous communication is useful if we don’t want to wait for the response. We provide a callback handler that gets executed when the response is available.

```java
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Stream;
import static java.util.stream.Collectors.toList;

public class AsyncHttpClientExample {
    public static void main(String[] args) {
        final List<URI> uris = Stream.of(
                "https://www.google.com/",
                "https://www.github.com/",
                "https://www.yahoo.com/"
                ).map(URI::create).collect(toList());      
        
        HttpClient httpClient = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .followRedirects(HttpClient.Redirect.ALWAYS)
                .build();
        
        CompletableFuture[] futures = uris.stream()
                  .map(uri -> verifyUri(httpClient, uri))
                  .toArray(CompletableFuture[]::new);     
        
        CompletableFuture.allOf(futures).join();           
    }

    private static CompletableFuture<Void> verifyUri(HttpClient httpClient, URI uri) {
        HttpRequest request = HttpRequest.newBuilder()
                        .timeout(Duration.ofSeconds(5))
                        .uri(uri)
                        .build();
        
        return httpClient.sendAsync(request, HttpResponse.BodyHandlers.ofString())
                  .thenApply(HttpResponse::statusCode)
                  .thenApply(statusCode -> statusCode == 200)
                  .exceptionally(ex -> false)
                  .thenAccept(valid -> {
                      if (valid) {
                          System.out.println("[SUCCESS] Verified " + uri);
                      } else {
                          System.out.println("[FAILURE] Could not verify " + uri);
                      }
                  });                                    
    }
}
```

## 2. Launch Single-File Programs Without Compilation ⚙️

Java 11 allows executing Java source code contained in a single file without the need to compile it first.

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

Run it directly:

```sh
$ java HelloWorld.java
Hello World!
```

## 3. String API Changes ✨

### 3.1. `String.repeat(Integer)`

```java
System.out.println("1".repeat(5)); // Output: 11111
```

### 3.2. `String.isBlank()`

```java
System.out.println(" ".isBlank()); // true
System.out.println("abc".isBlank()); // false
```

### 3.3. `String.strip()`

```java
System.out.println("   hi  ".strip()); // "hi"
System.out.println("   hi  ".stripLeading()); // "hi  "
System.out.println("   hi  ".stripTrailing()); // "   hi"
```

### 3.4. `String.lines()`

```java
String text = "hello\nworld";
text.lines().forEach(System.out::println);
```

## 4. Collection.toArray(IntFunction) 🛠️

```java
List<String> names = List.of("alex", "brian", "charles");
String[] namesArr = names.toArray(String[]::new); 
```

## 5. Files.readString() and Files.writeString() 📂

```java
String content = Files.readString(Path.of("helloworld.txt"), StandardCharsets.UTF_8);
Files.writeString(Path.of("output.txt"), "Hello World!", StandardCharsets.UTF_8);
```

## 6. Optional.isEmpty() 🏷️

```java
Optional<String> opt = Optional.ofNullable(null);
System.out.println(opt.isEmpty()); // true
```

---

**Drop me your questions related to these new API changes in Java 11.** 😊

💡 *Happy Learning!* 🎉

**Ref:** Java 11 release doc 📖
