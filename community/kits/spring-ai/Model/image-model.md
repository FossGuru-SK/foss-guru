---
id: image-model
title: Spring AI ImageModel (Text-to-Image)
description: 'This Spring tutorial discusses the basics of Spring AI APIs for image generation using OpenAI’s DALL-E and Stability AI with examples.'
sidebar_position: 2
---
![Banner Spring AI Icon](@site/static/img/kits/spring-ai/spring_ai_logo.png)

## 🖼️ Spring AI: Fun with Image Generation

## 🎨 LLMs + AI = Magic Images! 🧙‍♂️

Ever wanted to turn your wildest imaginations into reality? Well, sort of! Large Language Models (LLMs) like **DALL-E, Stable Diffusion, Midjourney, Imagen, GauGAN, Pixray,** and more can generate stunning images from just a simple text prompt. 🖌️✨

Lucky for us, **Spring AI** makes it super easy to integrate these magical capabilities into our applications. 🚀

### 🌟 Supported Image Generation Wizards

- **DALL-E** (by OpenAI)
- **DALL-E** (by Azure OpenAI)
- **Stable Diffusion** (by Stability AI)
- **CogView** (by ZhiPuAI & QianFan)

This guide will walk you through the Spring AI module for text-to-image generation, with real code examples! 🎭

---

## 🛠️ Step 1: Add Dependencies (Because Magic Needs Tools!)

To enable OpenAI API support, add the following to your `pom.xml`:

```xml
<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-openai-spring-boot-starter</artifactId>
</dependency>
```

For Stability AI’s API support, add:

```xml
<dependency>
    <groupId>org.springframework.ai</groupId>
    <artifactId>spring-ai-stability-ai-spring-boot-starter</artifactId>
</dependency>
```

By default, these dependencies automatically configure an `imageClient` bean. Want to disable it? Just set the following in `application.properties`:

```properties
spring.ai.openai.image.enabled=false
spring.ai.stabilityai.image.enabled=false
```

---

## 🎭 Step 2: Meet the Image Generation API

Spring AI provides a bunch of cool classes and interfaces to make image generation a breeze. Here’s the A-list:

| **Core Class** | **What It Does** |
|--------------|-----------------|
| `ImageModel` | The main actor! Calls `imagePrompt` and returns `ImageResponse`. |
| `ImageMessage` | Holds the text and its importance in shaping the image. 🎭 |
| `ImagePrompt` | A fancy box containing `ImageMessage` objects and request options. 🎁 |
| `ImageOptions` | Specifies extra magic (resolution, quality, etc.). 🎨 |
| `ImageResponse` | The AI's response, containing one or more generated images. 🖼️ |
| `ImageGeneration` | The actual image output and related metadata. 📸 |
| `ImageGenerationMetadata` | Metadata describing the generated image. 🏷️ |

### ✨ How to Cast an Image Spell

```java
@RestController
public class OpenAiImageController {

    private final OpenAiImageModel imageModel;

    @Autowired
    public OpenAiImageController(OpenAiImageModel imageModel) {
        this.imageModel = imageModel;
    }

    @GetMapping("/ask/image")
    public ImageResponse generateImage(@RequestParam(value = "message", defaultValue = "Horse running behind tiger") String messgae) {
        return imageModel.call(
                new ImagePrompt(messgae,
                        OpenAiImageOptions.builder()
                                .quality("hd")
                                .N(4)
                                .height(1024)
                                .width(1024).build())

        );
    }
}
```

Boom! 🐱💨🐭

---

## 🔧 Step 3: Creating the `ImageModel`

Spring AI provides two classes that implement the `ImageModel` interface:

- `OpenAiImageModel` (for DALL-E 🧠🎨)
- `StabilityAiImageModel` (for Stable Diffusion 🌊)

Define an `ImageModel` bean in your config file:

📢 **Pro Tip:** Keep your API keys out of your code! Store them safely in `application.properties`:

```properties
spring.ai.openai.api-key=${OPENAI_API_KEY}
# OR
spring.ai.stability.api-key=${STABILITY_API_KEY}
```

---

## 🎮 Step 4: Creating the Image Generation Controller

Time to roll up our sleeves and make some API magic! Let’s create a simple REST controller to generate images on demand. 🧑‍💻

```java
import org.springframework.ai.image.ImagePrompt;
import org.springframework.ai.image.ImageResponse;
import org.springframework.ai.openai.OpenAiImageModel;
import org.springframework.ai.openai.OpenAiImageOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OpenAiImageController {

    private final OpenAiImageModel imageModel;

    @Autowired
    public OpenAiImageController(OpenAiImageModel imageModel) {
        this.imageModel = imageModel;
    }

    @GetMapping("/ask/image")
    public ImageResponse generateImage(@RequestParam(value = "message", defaultValue = "Horse running behind tiger") String messgae) {
        return imageModel.call(
                new ImagePrompt(messgae,
                        OpenAiImageOptions.builder()
                                .quality("hd")
                                .N(4)
                                .height(1024)
                                .width(1024).build())

        );
    }

    @GetMapping("/ask/image/withUrl")
    public String generateImageUrl(@RequestParam(value = "message", defaultValue = "Horse running behind tiger") String messgae) {
        ImageResponse imageResponse = imageModel.call(new ImagePrompt(messgae, OpenAiImageOptions.builder().quality("hd").N(4).height(1024).width(1024).build()));
        String imageUrl = imageResponse.getResult().getOutput().getUrl();
        return "Redirect to:" + imageUrl;
    }
}
```

🔁 This same code works for Stability AI too—just swap in `StabilityAiImageModel`. 🔄

---

## 🌐 Step 5: Configuring the Base URL

By default, Spring AI selects these URLs for image generation:

```properties
spring.ai.openai.image.base-url=api.openai.com
# OR
spring.ai.stabilityai.image.base-url=api.stability.ai/v1
```

Want to use a custom endpoint? Just override these properties. Easy peasy! 🍋

---

## 🛠️ Step 6: Testing Your Image Generation API 🎯

Let’s test it! Send a prompt like:

```java
GET /ask/image/withUrl?message=Horse runing behind Tiger
```

🎉 You’ll get back a URL. Copy and paste it into your browser to see the generated image! 🏆

---

## 🎬 Conclusion: AI Art, Made Easy! 🏁

With Spring AI, turning text into images is **ridiculously easy and fun**! 🤩 We covered:
✅ Adding dependencies 🏗️
✅ Setting up image generation APIs 🖼️
✅ Configuring `ImageModel` 🎨
✅ Creating a REST Controller 🚀
✅ Generating images with a simple API call! 🎭

Now go ahead—experiment, explore, and bring your AI-powered artistic visions to life! ✨

**Happy Coding & Image Generating!** 🚀🎨
