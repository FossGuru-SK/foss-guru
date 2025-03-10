---
id: embedding-model
title: Spring AI EmbeddingModel
description: 'In Spring AI Vector Embedding tutorial, learn what is a vector or embedding, how it helps in semantic searches, and how to generate embeddings using AI.'
sidebar_position: 1
---
![Banner Spring AI Icon](@site/static/img/kits/spring-ai/spring_ai_logo.png)

## 🚀 Spring AI Vector Embeddings – A Fun & Engaging Guide

Welcome to the **Spring AI Vector Embedding** tutorial! 🎉 Here, we'll unravel the mysteries of vectors, embeddings, and how they supercharge **semantic searches**. Plus, we’ll generate embeddings using **popular LLM models** like OpenAI and DeepseekAI using Ollama! 🤖✨

---

## 🤔 1. What is a Vector Embedding?

Imagine you're in a room full of people speaking different languages. How do you find someone who understands you? **Vector embeddings** work like a universal translator—turning words, sentences, and even images into **arrays of numbers** that capture meaning! 🔢💡

In AI terms, a **vector (or embedding)** is a magical array of numbers that represents an object, be it a **word, sentence, image, audio snippet,** or even **a product description**. 📦

Each number in the vector is a **component**, corresponding to a **dimension** in hyperspace (yes, like sci-fi 🚀). More dimensions mean **more details** about the object!

### 🌟 Example Time

Let’s take the word **“happiness”** and give it some numbers:

```plaintext
[2.5, 1.3, 0.8]
```

- **2.5** → Emotional positivity (yay! 🎉)
- **1.3** → Emotional intensity (oh wow! 😃)
- **0.8** → Context usage (poetry or science? 🤔)

Now, here’s the kicker: these numbers don’t mean much alone, but **together, they create a powerful representation**! 🧠✨

---

## 🔍 2. Semantic Search: Finding Meaning, Not Just Words

Ever wondered how Google knows exactly what you're looking for, even when you type **weird search queries**? That’s **semantic search** in action! 🕵️‍♂️💡

Instead of matching **exact words**, semantic search looks at **meaning**. It uses **vector distances**—small distances = **high similarity**, big distances = **low similarity**. 🔬

🚀 **Real-world applications:**

- **Google Search** 🧐 – Finds the perfect answer, even if your query is gibberish.
- **Netflix & Spotify** 🎶 – Suggests movies & songs you *actually* like.
- **Chatbots & AI Assistants** 🤖 – Understands you better than your best friend!

---

## 🏗 3. Meet the **EmbeddingModel** Interface

Spring AI makes embedding easy with the **EmbeddingModel** interface! 🎯

Think of it as your **personal AI librarian**, transforming text into numerical vectors! 📚🔢

```java
public interface EmbeddingModel extends Model<EmbeddingRequest, EmbeddingResponse> {
  List<Double> embed(String text);
  List<Double> embed(Document document);
  EmbeddingResponse embedForResponse(List<String> texts);
  EmbeddingResponse call(EmbeddingRequest request);
}
```

![spring-ai-embedding-model](@site/static/img/kits/spring-ai/spring-ai-embedding-model.png)

💡 **The `embedForResponse()` method** gives extra metadata, just in case you want more than just numbers!

### ⚡ Usage Example

```java
String text = "...";
List<Double> embeddings = embeddingModel.embed(text);
```

Or, for more control:

```java
List<Double> embeddings = embeddingModel.call(
  new EmbeddingRequest(List.of(text), OpenAiEmbeddingOptions.builder()
    .withModel("text-embedding-3-small")
    .withUser("jon.snow") // Because he knows nothing, right? 😆
    .build()))
  .getResult().getOutput();
```

---

## 🚀 4. EmbeddingModel Implementations

Spring AI supports **tons of embedding models**! 🏆 Each has its own **implementation class**.

| Provider         | Implementation Class            | Supported Models |
|-----------------|---------------------------------|------------------|
| OpenAI         | OpenAiEmbeddingModel           | text-embedding-ada-002, text-embedding-3-large, text-embedding-3-small |
| Azure OpenAI   | AzureOpenAiEmbeddingModel      | text-embedding-ada-002 |
| Ollama         | OllamaEmbeddingModel          | mistral |
| PostgresML     | PostgresMlEmbeddingModel      | distilbert-base-uncased |
| Mistral AI     | MistralAiEmbeddingModel       | mistral-embed |
| MiniMax        | MiniMaxEmbeddingModel         | embo-01 |
| QianFan        | QianFanEmbeddingModel         | bge_large_zh |
| Amazon Bedrock | BedrockTitanEmbeddingModel    | amazon.titan-embed-image-v1 |

📜 **For the full list, check the [official docs](https://docs.spring.io/spring-ai/reference/api/embeddings.html)!**

---

## 🎬 5. Let’s Get Our Hands Dirty: DeepseekAI Demo

We’ll use Ollama’s **mxbai-embed-large** and **nomic-embed-text** model to generate vector embeddings. 🛠✨

### 🛠 5.1. Maven Setup

First, add the **Spring Boot starter** dependency:

```xml
<dependencies>
  <dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-ollama-spring-boot-starter</artifactId>
  </dependency>
</dependencies>
```

🔑 **Don’t forget to add your application properties!**

```properties
server.port=8084
spring.ai.ollama.base-url=http://localhost:11434
spring.ai.ollama.chat.options.model=deepseek-r1:latest
spring.ai.ollama.chat.options.temperature=0.7
spring.ai.ollama.init.pull-model-strategy=always
spring.ai.ollama.init.pull-model-strategy.embedding.additional-models=mxbai-embed-large
```

### 🎛 5.2. DeepseekAiEmbeddingModel Bean

Spring Boot **auto-configures** an `DeepseekAiEmbeddingModel` bean. Just **inject it** into your class:

```java
@RestController
public class DeepseekAiEmbeddingController {

    private final EmbeddingModel embeddingModel;

    @Autowired
    public DeepseekAiEmbeddingController(EmbeddingModel embeddingModel) {
        this.embeddingModel = embeddingModel;
    }

    @GetMapping("/ai/embedding")
    public Map embed(@RequestParam(value = "message", defaultValue = "tell me a joke") String message) {
        EmbeddingResponse embeddingResponse = embeddingModel.embedForResponse(List.of(message));
        return Map.of("embedding", embeddingResponse);
    }

}
```

🛠 **Test it with a REST tool!** 🚀

![spring-ai-embedding-result](@site/static/img/kits/spring-ai/spring-ai-embedding-result.png)

---

## 🎯 6. Wrapping It Up

🎉 Here’s what we covered:

✅ **Vectors (embeddings)** represent objects in numerical form.
✅ **Semantic search** finds meaning instead of just words.
✅ The **EmbeddingModel** interface is your AI magic wand! 🪄
✅ Spring AI supports **multiple embedding models**.
✅ We saw a **live demo** using Deepseek AI with Ollama!

💡 **What’s next?** Start building cool AI-powered apps! 🚀💡

👉 **Happy Learning & Happy Coding!** 🦾🔥
