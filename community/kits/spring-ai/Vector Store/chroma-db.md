---
id: chroma-db
title: ChromaDB
description: 'In Spring AI, the role of a vector database is to store vector embeddings and facilitate similarity searches for these embeddings. Learn with examples.'
sidebar_position: 2
---
![Banner Spring AI Icon](@site/static/img/kits/spring-ai/spring_ai_logo.png)

## 🚀 Spring AI & Vector Databases: A Fun Ride into the World of AI-Powered Search

## 🤖 What is a Vector Database?

Imagine you're Sherlock Holmes, but instead of a magnifying glass, you have a powerful AI that finds related stuff in a giant pile of data! 🕵️‍♂️ That’s what a vector database does! It stores **vector embeddings** (fancy term for long lists of numbers) and helps with similarity searches. But hold on, a vector store doesn't **create** the embeddings—it just **stores** them. To create these magical vectors, you need an **EmbeddingModel**.

### 🧐 What’s a Vector?

A vector is basically a **super-smart list of numbers** that represents things like text, images, audio, or even your pet’s mood (ok, maybe not that last one). Each number in a vector represents different attributes like sentiment, intensity, and context.

By calculating distances between these vectors, we can find similarities. This process is called **semantic search**—because it’s not just searching words, it’s searching *meaning*!

### 🔎 How Does a Vector Database Work?

1. **Data Storage:** Your raw data (text, images, videos, etc.) gets transformed into vectors using an AI model and stored.
2. **Data Retrieval:** When you search, your query is converted into a vector, and the database finds the most similar vectors.
3. **Calculating Similarity:** Various formulas are used to find the ‘closeness’ of two vectors:
   - **Euclidean Distance**: Straight-line distance between two vectors.
   - **Cosine Similarity**: Measures the angle between vectors.
   - **Manhattan Distance**: The sum of absolute differences between vector components.
   - **Jaccard Similarity**: Measures overlap between two sets.

Popular vector databases include **Pinecone, Elasticsearch, Chroma, Weaviate, and Quadrant**. Some are open-source, some are startups, and all are pretty cool! 😎

---

## 🌱 Spring AI & The VectorStore Interface

In Spring AI, the **VectorStore** interface is your go-to tool for working with vector databases. It helps you store documents and perform similarity searches. Here’s what it looks like:

```java
public interface VectorStore {
  void add(List<Document> documents);
  Optional<Boolean> delete(List<String> idList);
  List<Document> similaritySearch(String query);
  List<Document> similaritySearch(SearchRequest request);
}
```

And the **Document** class:

```java
public class Document implements Content {
    private Map<String, Object> metadata;
    private String content;
    private List<Double> embedding = new ArrayList<>();
    //...
}
```

---

## 📥 Storing & Querying Documents

Spring Boot makes life easy by **autoconfiguring** a `VectorStore` bean when it detects a vector database starter module. Example:

```java
@Autowired
VectorStore vectorStore;
```

### 🗄️ Storing Documents

```java
List<Document> documents = List.of(
    new Document("...content..."),
    new Document("...content..."),
    new Document("...content...")
);
vectorStore.add(documents);
```

### 🔍 Searching for Similar Documents

```java
List<Document> results = vectorStore.similaritySearch(
    SearchRequest.query("...search-terms...").withTopK(5)
);
```

Spring AI supports **multiple vector databases**, and more will be added in the future. Check the official docs for the latest list. 📜

---

## 🛠️ SimpleVectorStore: A No-Fuss Demo Store

For quick demos, use **SimpleVectorStore**—a lightweight version of a vector store, similar to H2 for relational databases.

```java
public class SimpleVectorStore implements VectorStore {
    public void add(List<Document> documents) {...}
    public List<Document> similaritySearch(SearchRequest request) {...}
    public void save(File file) {...}
    public void load(File file) {...}
    public void load(Resource resource) {...}
    //...
}
```

To use it:

```java
@Bean
SimpleVectorStore vectorStore(EmbeddingModel embeddingModel) {
    return new SimpleVectorStore(embeddingModel);
}
```

---

## 🔥 Vector Store Demo with ChromaDB

Let's see **Spring AI in action** by setting up a **ChromaDB**-powered vector store.

### 🏗️ Step 1: Setup ChromaDB with Docker Compose

```yaml
version: '3.9'

networks:
  net:
    driver: bridge

services:
  server:
    image: ghcr.io/chroma-core/chroma:latest
    environment:
      - IS_PERSISTENT=TRUE
    volumes:
      - chroma-data:/chroma/chroma/
    ports:
      - 8000:8000
    networks:
      - net

volumes:
  chroma-data:
    driver: local
```

### 📦 Step 2: Add Dependencies

```xml
<dependency>
  <groupId>org.springframework.ai</groupId>
  <artifactId>spring-ai-openai-spring-boot-starter</artifactId>
</dependency>
<dependency>
  <groupId>org.springframework.ai</groupId>
  <artifactId>spring-ai-chroma-store-spring-boot-starter</artifactId>
</dependency>
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-docker-compose</artifactId>
  <scope>runtime</scope>
  <optional>true</optional>
</dependency>
```

### 📖 Step 3: Load Data into Vector Store

```java
@Component
public class VectorStoreLoader implements ApplicationRunner {
    @Autowired
    VectorStore vectorStore;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        List<Document> documents = new ArrayList<>();
        TikaDocumentReader reader = new TikaDocumentReader(new ClassPathResource("CallingRates.pdf"));
        documents.addAll(reader.get());
        vectorStore.add(documents);

        System.out.println("Added documents to vector store");
    }
}
```

### 🔎 Step 4: Perform Similarity Search

```java
List<Document> documents = vectorStore.similaritySearch("investigation");
documents.stream().forEach(System.out::println);
```

**Output:**

```java
Document{id='7cec17aa-...', metadata={source=story.md, distance=0.7674138}, content='...', media=[]}
Document{id='42726cdb-...', metadata={source=story.text, distance=0.8732333}, content='...', media=[]}
Document{id='9aad7daa-...', metadata={source=story.pdf, distance=0.8799484}, content='...', media=[]}
```

---

## 🎉 Conclusion

We explored the magical world of vector databases and how **Spring AI** makes it easier to work with them. From storing and querying vectors to setting up **ChromaDB** with **Docker Compose**, we’ve seen how you can integrate vector search into your applications.

🚀 **Go forth and build amazing AI-powered search applications!**

Happy Coding! ✨🎊
