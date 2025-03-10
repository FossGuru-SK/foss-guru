---
id: basics
title: Spring AI - The Basics
description: 'Getting Started with Spring AI (with Examples).'
sidebar_position: 1
---
![Banner Spring AI Icon](@site/static/img/kits/spring-ai/spring_ai_logo.png)

## 🚀 Guide to Spring AI with LLMs 🎉

Large Language Models (LLMs) like GPT-4, Claude, Gemini, and Mistral are taking the AI world by storm! They power awesome applications like ChatGPT, turning everyday software into brainy, chatty, and sometimes even sassy companions. But wait—how do we get these AI marvels into our Java applications? That’s where **Spring AI** swoops in like a coding superhero! 🦸‍♂️💻

Spring AI makes it ridiculously easy for Java developers to tap into the power of LLMs using the magic of **autoconfiguration** and **client-API-based programming**. Whether you want chatbots, image generation, or AI-powered assistants, Spring AI is your AI bestie. Let’s dive in! 🏊‍♂️

---

## 🤝 Let's Play with OpenAI

## 1️⃣ Setting Up Your Spring AI Project 🛠️

Every epic Java project needs dependencies. To get Spring AI running, add this to your **pom.xml**:

```xml
<properties>
  <java.version>21</java.version>
  <spring-ai.version>1.0.0-SNAPSHOT</spring-ai.version>
</properties>

<dependency>
  <groupId>org.springframework.ai</groupId>
  <artifactId>spring-ai-openai-spring-boot-starter</artifactId>
</dependency>
```

Since Spring AI is still **a work in progress** (like all of us, right? 😅), grab it from the milestone repo:

```xml
<repositories>
  <repository>
   <id>spring-milestones</id>
   <name>Spring Milestones</name>
   <url>https://repo.spring.io/milestone</url>
   <snapshots>
    <enabled>false</enabled>
   </snapshots>
  </repository>
  <repository>
   <id>spring-snapshots</id>
   <name>Spring Snapshots</name>
   <url>https://repo.spring.io/snapshot</url>
   <releases>
    <enabled>false</enabled>
   </releases>
  </repository>
 </repositories>
```

And don’t forget some extra goodies:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
```

Now, we’re all set! 🎉

---

## 2️⃣ Getting Your Magic Key 🗝️

Before we start summoning AI wisdom, you need an API key! Think of it as your **VIP pass** to communicate with OpenAI (or any other provider). For this guide, we’re using **OpenAI’s GPT-3.5-turbo** model, so we created an account on OpenAI’s website and shelled out a whopping **$5** for access. (Cheaper than a fancy latte! ☕)

### How to Store Your API Key (Like a Secret Agent 🕵️‍♂️)

Instead of carelessly throwing your API key into your code (because that’s a security **no-no** 🚫), store it in your **environment variables**:

#### 🖥️ Linux/Mac

```sh
export OPENAI_API_KEY=[your_super_secret_key]
```

#### 🖥️ Windows

1. Open **System Properties**
2. Add a new **environment variable**
3. Name it `OPENAI_API_KEY` and paste your key

Now, let’s reference it in `application.properties`:

```properties
spring.ai.openai.api-key=${OPENAI_API_KEY}
```

Boom! Secure and ready to roll. 🚀

---

## 3️⃣ What Can Spring AI Do? 🧐

Spring AI is your **AI Swiss Army knife**, helping you with everything from text chat to image generation, speech synthesis, and even **Retrieval Augmented Generation (RAG)** (which sounds fancy but just means “smarter AI responses”).

### Key Features

- **ChatClient**: Talk to AI, get responses. Simple!
- **ImageModel**: Convert text into images. AI-powered art, anyone? 🎨
- **SpeechModel**: Turn text into speech (so your app can literally talk back to users). 🗣️
- **AudioTranscriptionModel**: Convert speech into text. Podcast transcriptions, anyone?
- **EmbeddingModel**: Make AI “remember” things for better recommendations.

### Sample RestController

```java
@RestController
public class OpenAiChatController {

    private final OpenAiChatModel chatModel;


    @Autowired
    public OpenAiChatController(OpenAiChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @GetMapping("/ask")
    public String askMeAnything(@RequestParam(value = "question", defaultValue = "Who are you?") String question) {
        return chatModel.call(new Prompt(question)).getResult().getOutput().getText();

    }
}
```

---

## 4️⃣ AI Output: Not Just Plain Text 📝➡️🎨🔊

Spring AI doesn’t just spew out plain text. It can shape responses in **specific formats** (JSON, XML, lists, maps—you name it!). This is super handy when building AI-powered applications that require structured data.

| Output Type | What It Does |
|------------|-------------|
| **BeanOutputConverter** | Converts AI responses into Java Beans 📦 |
| **ListOutputConverter** | Converts responses into lists 📜 |
| **MapOutputConverter** | Converts responses into key-value pairs 🔑 |

---

## 5️⃣ Making AI Even Smarter: RAG & Vector Stores 📚🔍

Spring AI allows you to **feed AI specific documents** so it responds **based on actual facts** instead of making things up (we’re looking at you, hallucinating AI 👀).

### Document Processing Features

- **Read from PDFs, JSON, Markdown, etc.** 📄
- **Transform and store documents as vectors** 🧩
- **Query documents for AI-powered search** 🔎

Spring AI integrates with **vector databases** like Chroma, Pinecone, Redis, and PostgreSQL **for ultra-smart similarity searches**.

---

## 6️⃣ Let’s Get Chatty: AI Chat Completion Example 💬

Time for some real action! Let’s **ask OpenAI a question** using Spring AI:

### application.properties

```java
server.port=8082
spring.ai.openai.api-key=${OPENAI_API_KEY}
```

### OpenAiChatApplication.java

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OpenAiChatApplication {
    public static void main(String[] args) {
        SpringApplication.run(OpenAiChatApplication.class, args);
    }
}
```

### OpenAiChatController.java

```java
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OpenAiChatController {

    private final OpenAiChatModel chatModel;


    @Autowired
    public OpenAiChatController(OpenAiChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @GetMapping("/ask")
    public String askMeAnything(@RequestParam(value = "question", defaultValue = "Who are you?") String question) {
        return chatModel.call(new Prompt(question)).getResult().getOutput().getText();

    }
}
```

Hit `http://localhost:8082/ask?question=Tell me a joke` and get AI-powered laughs! 🤣

For more details on code component you can take look on repo [spring-ai-samples](https://github.com/FossGuru-SK/spring-ai-samples) 👀 for this example check [open-ai-chat-model](https://github.com/FossGuru-SK/spring-ai-samples/tree/main/open-ai/open-ai-chat-model) 🫣

---

## 🎉 Wrapping Up

Spring AI **supercharges** your Java applications with cutting-edge AI capabilities. Whether you’re building **chatbots, voice assistants, AI-powered search, or even meme generators**, Spring AI has your back! 💪

- 🔹 **Secure your API keys** (seriously, don’t leak them 😆)
- 🔹 **Set up dependencies & configurations**
- 🔹 **Choose your AI task—chat, images, speech, search, or all of the above!**
- 🔹 **Make your Java app ridiculously smart!** 🧠✨

Now go forth and **unleash AI awesomeness** in your Spring Boot projects! 🚀🔥

---
**_Happy Coding! 🎯_**
