---
id: pg-vector
title: PgVector Store
description: 'Learn to configure Postgres PgVectorStore to store the vectors generated with OpenAI and Ollama embedding models in a Spring AI project.'
sidebar_position: 1
---
![Banner Spring AI Icon](@site/static/img/kits/spring-ai/spring_ai_logo.png)

## 🚀 Fun with PgVectorStore, OpenAI, and Ollama in Spring AI

So, you’ve decided to dive into the magical world of **Spring AI**, **Postgres**, and **PgVectorStore**? Buckle up! We’re about to turn your database into a vector-storing, AI-boosted, RAG-ready beast! 🦾🔥

---

## 🏗️ Step 1: Installing the Postgres PgVector Database

PgVector is like that cool kid in the database world who can store vectors and find similar ones in a snap! Let’s get it up and running.

### 🐳 1.1. Using Docker

Why complicate things when Docker makes life easy? Run this:

```sh
docker run -it --rm --name postgres -p 5432:5432 \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e VECTOR_STORE_TYPE=pgVector \
  pgvector/pgvector:pg16
```

Or, if you’re fancy and use **Docker Compose**, here’s your setup:

```yaml
services:
  postgres:
    image: pgvector/pgvector:pg16
    container_name: postgres
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      VECTOR_STORE_TYPE: pgVector
```

🚨 **Heads up!** If you already have Postgres running, don’t forget to enable the extensions `vector`, `hstore`, and `uuid-ossp`.

---

## ⚙️ Step 2: Configuring PgVector with Spring AI

Spring AI does the heavy lifting for us! Just set:

```properties
spring.ai.vectorstore.pgvector.initialize-schema=true
```

And it will magically run this schema setup:

```sql
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS hstore;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS vector_store (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  content text,
  metadata json,
  embedding vector(1536)
);

CREATE INDEX ON vector_store USING HNSW (embedding vector_cosine_ops);
```

💡 **Pro Tip:** You can customize the index type, distance type, and dimensions via `application.properties`!

---

## 🤖 Step 3: Configuring PgVectorStore with OpenAI Embedding Models

Want to make your app super smart with OpenAI? Let's do this! 🧠

### 3.1. Add Dependencies

```xml
<dependency>
  <groupId>org.springframework.ai</groupId>
  <artifactId>spring-ai-openai-spring-boot-starter</artifactId>
</dependency>
<dependency>
  <groupId>org.springframework.ai</groupId>
  <artifactId>spring-ai-pgvector-store-spring-boot-starter</artifactId>
</dependency>
```

### 3.2. Properties Configuration

```properties
spring.ai.openai.api-key=${OPENAI_API_KEY}
spring.ai.openai.chat.model=gpt-4
spring.ai.openai.embedding.model=text-embedding-ada-002
```

### 3.3. Demo App - Let's Test It

```java
@SpringBootApplication
public class App implements CommandLineRunner {

  public static void main(String[] args) {
    SpringApplication.run(App.class);
  }

  private final VectorStore vectorStore;

  public App(VectorStore vectorStore) {
    this.vectorStore = vectorStore;
  }

  @Override
  public void run(String... args) {
    List<Document> documents = List.of(
      new Document("Java is a high-level programming language."),
      new Document("It is used for enterprise apps and Android development."),
      new Document("Java has strong typing and automatic memory management.")
    );
    
    vectorStore.add(documents);
    
    List<Document> results = vectorStore
      .similaritySearch(SearchRequest.query("programming language").withTopK(1));
    
    results.forEach(doc -> System.out.println(doc.getContent()));
  }
}
```

🎉 **Output:**

```
Java is a high-level programming language.
```

---

## 🤯 Step 4: Configuring PgVectorStore with Ollama Embedding Models

Wanna run LLMs locally? Meet **Ollama**! 🏡🦙

### 4.1. Run Ollama with Docker

```sh
docker run -d --gpus all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

Now download & run a model:

```sh
ollama run mistral
```

### 4.2. Add Dependencies

```xml
<dependency>
  <groupId>org.springframework.ai</groupId>
  <artifactId>spring-ai-ollama-spring-boot-starter</artifactId>
</dependency>
```

### 4.3. Properties Configuration

```properties
spring.ai.ollama.embedding.options.model=mistral
spring.ai.ollama.chat.options.model=mistral
```

### 4.4. Demo App - Ollama in Action

Same as OpenAI, but powered by **Mistral**! ⚡

---

## 🚨 Step 5: "Oops, Too Many Dimensions!"

**Error:** `column cannot have more than 2000 dimensions`

**Why?** PgVector can’t handle **>2000 dimensions** for certain index types.

### Fix Options

1. Use a different vector store (like **ChromDB**).
2. Set `index-type=none` (⚠️ Only for dev, NOT for production!).
3. Reduce dimensions under 2000.

Example:

```properties
spring.ai.vectorstore.pgvector.index-type=none # Dev only!
spring.ai.vectorstore.pgvector.dimensions=4096
```

---

## 🎯 Summary - What We Achieved Today

- ✅ Installed Postgres with PgVector extension.
- ✅ Configured **Spring AI** for automatic setup.
- ✅ Connected **PgVector** with OpenAI & Ollama.
- ✅ Built a cool **Spring Boot** app to store & retrieve embeddings!
- ✅ Solved the **2000-dimension error** like a boss. 😎

🚀 **Happy Learning & Happy Coding!** 🎉
