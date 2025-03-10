---
id: setup-ollama
title: Ollama Local Setup and Spring AI Integration
description: 'Learn to download, install, and run an LLM model using Ollama. Also learn to configure Spring AI Ollama module to access the model’s chat API.'
sidebar_position: 4
---
![Banner Spring AI Icon](@site/static/img/kits/spring-ai/spring_ai_logo.png)

## 🚀 Mastering Ollama: Install, Run & Connect with Spring AI 🤖

Want to bring AI magic to your local machine? Buckle up! This guide will walk you through installing Ollama, running powerful LLMs, and connecting them with Spring AI. It's like OpenAI's GPT, but you run it yourself! Let's dive in! 🎉

---

## 🧐 What is Ollama?

Ollama is your AI sidekick that lets you run large language models (LLMs) right on your computer. Think of it as Docker, but for AI models! 🛠️ Instead of spinning up databases or message queues, Ollama lets you effortlessly download, install, and chat with AI models like **LLaMA-2, Mistral, CodeLLaMA and DeepSeek-R1**. You can even fine-tune them for your needs. Cool, right? 😎

---

## 🔧 Installing Ollama

Ollama is easy to set up, and you have **three ways** to get it running.

### 1️⃣ One-Click Installer (Easiest!) 🖱️

For Windows & Mac users who love simplicity.

✅ **Steps:**

- Visit [Ollama's website](https://ollama.com/) 🌍
- Smash that **Download** button 📥
- Run the installer (.exe for Windows, .dmg for Mac)
- Follow the on-screen setup wizard 🧙
- Once installed, fire it up with:

  ```sh
  ollama serve
  ```

🎉 Done! Easy, right?

---

### 2️⃣ Command Line Installation (For the Techies) 🖥️

Perfect for Linux users who love typing commands. 💻

```sh
curl -fsSL https://ollama.com/install.sh | sh
ollama serve
```

🚀 Boom! You're up and running.

---

### 3️⃣ Running Ollama in Docker (For the Container Wizards) 🐳

Want to isolate Ollama in a container? Here's how:

```sh
docker pull ollama/ollama
docker run -d --gpus all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

📝 If you have multiple GPUs, replace `all` with the specific GPU ID.

Start it with:

```sh
docker start ollama
ollama serve
```

And you're ready to roll! 🎢

---

## 🤖 Download & Run a Model

Time to get your hands dirty! Let's grab a powerful AI model and chat with it. 🗣️

```sh
ollama run gemma2
```

This command **downloads** the Gemma2 model (if you don't have it already) and gets it **ready for action**. Just type your prompts, and let AI do the magic! ✨

---

## 🔌 Connecting to Ollama API (AI in Your Apps!)

Ollama provides a REST API at `http://localhost:11434`, making it super easy to integrate with your apps.

💡 **Try this out!**

```sh
curl http://localhost:11434/api/generate -d '{
  "model": "llama3",
  "prompt": "Why is the sky blue?"
}'
```

🌍 You can also use Postman or any HTTP client to test it.

---

## ⚡ Using Ollama with Spring AI

Just like OpenAI, Spring AI makes it easy to talk to Ollama. Here's how you can integrate it into your Java project.

### 📦 1. Add Maven Dependency

```xml
<dependency>
  <groupId>org.springframework.ai</groupId>
  <artifactId>spring-ai-ollama-spring-boot-starter</artifactId>
</dependency>
```

### 🔧 2. Configure Base URL & Model Name

By default, Spring AI assumes **localhost:11434** with model `mistral`. You can tweak it like this:

```properties
spring.ai.ollama.base-url=http://localhost:11434
spring.ai.ollama.chat.options.model=gemma
spring.ai.ollama.chat.options.temperature=0.4
```

Or in Java:

```java
@Bean
OllamaChatModel ollamaChatModel(@Value("spring.ai.ollama.base-url") String baseUrl) {
  return new OllamaChatModel(new OllamaApi(baseUrl),
    OllamaOptions.create()
      .withModel("gemma")
      .withTemperature(0.4f));
}
```

### 💬 3. Send AI Prompts & Get Responses

Want to chat with your AI model? Easy!

```java
@Autowired
OllamaChatModel chatModel;

chatModel.stream(new Prompt(
    "Generate the names of 5 famous pirates.",
    OllamaOptions.create()
      .withModel("gemma2")
      .withTemperature(0.4F)
)).subscribe(chatResponse -> {
  System.out.print(chatResponse.getResult().getOutput().getContent());
});
```

Or use synchronous calls:

```java
ChatResponse response = chatModel.call(
  new Prompt(
    "Generate the names of 5 famous pirates.",
    OllamaOptions.create()
      .withModel("gemma2")
      .withTemperature(0.4F)
  ));

response.getResults().stream()
  .map(generation -> generation.getOutput().getContent())
  .forEach(System.out::println);
```

🚀 Now your Spring Boot app can talk to an AI model just like ChatGPT!

---

## 🎯 Wrapping Up

In this guide, we:
✅ Installed Ollama in multiple ways 🛠️
✅ Downloaded & ran an AI model 🤖
✅ Connected to the Ollama API 🔌
✅ Integrated it with **Spring AI** 🚀

Ollama is a **game-changer** for local AI development. Whether you're building chatbots, AI-powered apps, or fine-tuning models, **you're now ready to conquer the AI world!** 🌎💡

**Happy Coding! 🚀🔥**
