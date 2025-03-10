---
id: speech-model
title: Spring AI SpeechModel (Text-to-Speech)
description: 'In Spring AI, SpeechModel and StreamingSpeechModel interfaces allow to interact with Text-to-Speech APIs of supported LLMs such as tts-1 by OpenAI.'
sidebar_position: 3
---
![Banner Spring AI Icon](@site/static/img/kits/spring-ai/spring_ai_logo.png)

## 🎤 Spring AI Text-to-Speech (TTS) – Making Your App Talk Like a Pro

Ever wanted your app to have a smooth, life-like voice? 🎶 Well, you're in luck! Spring AI makes it super easy to convert text into speech using OpenAI’s TTS models like `tts-1` and `tts-1-hd`. So, let's dive in and make our apps a little chattier! 😃

---

## 🎙️ 1. SpeechModel & StreamingSpeechModel – The Talkative Duo

Spring AI gives us **two powerful interfaces** to bring our text to life:

- **SpeechModel**: Converts text into speech and returns an audio file. Simple and sweet! 🍬
- **StreamingSpeechModel**: Streams audio in real-time for that podcast-like feel. 🎧

### 🔥 Who's in Charge?

Meet **OpenAiAudioSpeechModel** – the class that implements both interfaces:

```java
public class OpenAiAudioSpeechModel implements SpeechModel, StreamingSpeechModel {
    // Magic happens here!
}
```

---

## 🚀 2. Getting Started – Let’s Set Things Up

Before we make your app talk, we need to add some secret sauce:

```xml
<dependency>
  <groupId>org.springframework.ai</groupId>
  <artifactId>spring-ai-openai-spring-boot-starter</artifactId>
</dependency>
```

### 🛠️ Default Configurations

Spring Boot does the heavy lifting, but you can tweak settings to match your vibe:

```properties
# API Key is mandatory!
spring.ai.openai.api-key=${OPENAI_API_KEY}  

# Customize your voice
spring.ai.openai.audio.speech=tts-1
spring.ai.openai.audio.speech.options.voice=alloy  # Choose from alloy, echo, fable, onyx, nova, or shimmer
spring.ai.openai.audio.speech.options.response-format=mp3  # Available: mp3, opus, aac, flac, wav, pcm
spring.ai.openai.audio.speech.options.speed=1.0  # Speed it up or slow it down (0.0 - 1.0)
```

### 🎯 Injecting the Speech Model

Want your controller to talk? Just inject the SpeechModel like this:

```java
@RestController
public class OpenAiSpeechController {

    private final OpenAiAudioSpeechModel speechModel;

    @Autowired
    public OpenAiSpeechController(OpenAiAudioSpeechModel speechModel) {
        this.speechModel = speechModel;
    }

    @GetMapping("/ask/speech")
    public byte[] generateSpeechFromText(@RequestParam(value = "message", defaultValue = "I am cool AI assitantce") String message) {
        return speechModel.call(message);
    }
}
```

---

## 🎩 3. Creating a SpeechModel Programmatically (Because We Can!)

Don’t want to rely on auto-config? No worries – do it yourself:

```java
var openAiAudioApi = new OpenAiAudioApi(System.getenv("OPENAI_API_KEY"));
var speechModel = new OpenAiAudioSpeechModel(openAiAudioApi);
```

Want a custom voice and format? Fine-tune it with **OpenAiAudioSpeechOptions**:

```java
OpenAiAudioSpeechOptions speechOptions = OpenAiAudioSpeechOptions.builder()
  .withModel(OpenAiAudioApi.TtsModel.TTS_1.getValue())
  .withResponseFormat(AudioResponseFormat.MP3)
  .withVoice(OpenAiAudioApi.SpeechRequest.Voice.ALLOY)
  .withSpeed(1.0f)
  .build();

var openAiAudioApi = new OpenAiAudioApi(System.getenv("OPENAI_API_KEY"));
SpeechModel speechModel = new OpenAiAudioSpeechModel(openAiAudioApi, speechOptions);
```

---

## 🎶 4. Converting Text to Speech – The Real Deal

Enough talk (ironically) – let’s **convert text into speech!**

```java
SpeechResponse speechResponse = speechModel.call(new SpeechPrompt(message));
byte[] audio = speechResponse.getResult().getOutput();
```

### 🔥 Example Controller

Want to turn any text into an MP3 file? Here you go:

```java
@RestController
public class OpenAiSpeechController {

    private final OpenAiAudioSpeechModel speechModel;

    @Autowired
    public OpenAiSpeechController(OpenAiAudioSpeechModel speechModel) {
        this.speechModel = speechModel;
    }

    @GetMapping("/ask/speech")
    public byte[] generateSpeechFromText(@RequestParam(value = "message", defaultValue = "I am cool AI assitantce") String message) {
        return speechModel.call(message);
    }
}
```

🔍 **How to Test?** Fire up Postman and send a POST request to `/speech` with a text body. Listen to your app speak! 🎤

---

## 🎧 5. Streaming Speech – For the Real Pros

Want real-time, low-latency streaming (like live radio)? Say hello to `stream()`!

```java
@GetMapping("/stream-speech")
    Flux<SpeechResponse> streamingSpeech(@RequestParam String message) {
        var openAiAudioApi = new OpenAiAudioApi(System.getenv("OPENAI_API_KEY"));

        var openAiAudioSpeechModel = new OpenAiAudioSpeechModel(openAiAudioApi);

        OpenAiAudioSpeechOptions speechOptions = OpenAiAudioSpeechOptions.builder()
                .voice(OpenAiAudioApi.SpeechRequest.Voice.ALLOY)
                .speed(1.0f)
                .responseFormat(OpenAiAudioApi.SpeechRequest.AudioResponseFormat.MP3)
                .model(OpenAiAudioApi.TtsModel.TTS_1.value)
                .build();

        SpeechPrompt speechPrompt = new SpeechPrompt("Today is a wonderful day to build something people love!", speechOptions);

        Flux<SpeechResponse> responseStream = openAiAudioSpeechModel.stream(speechPrompt);
        return responseStream;
    }
}
```

>>Note: OpenAiAudioApi getting deprecated since = "1.0.0-M6"

### 🎬 What Happens?

- The response is sent **in chunks**, perfect for streaming audio like a **live narrator**! 📻
- Try calling `/stream-speech` in the browser – you’ll see the **audio streaming in real-time**!

---

## 🎯 6. The Grand Finale – What Did We Learn?

- **Spring AI + OpenAI = Magic!** ✨
- **SpeechModel** converts text into full audio files.
- **StreamingSpeechModel** provides real-time speech streaming.
- **Configuration is easy** with Spring Boot auto-config.
- **Customization is king** – choose your voice, format, and speed.

💡 **Now go make your app talk!** 🎙️🔥

---

_Happy Coding & Keep Talking!_ 🥳🎤
