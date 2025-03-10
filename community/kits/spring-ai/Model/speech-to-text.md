---
id: speech-to-text
title: Spring AI Speech to Text Example
description: 'Spring AI currently supports only OpenAI’s and AzureOpenAI’s whisper model for speech transcription to JSON or TEXT files using OpenAiAudioTranscriptionModel class.'
sidebar_position: 4
---
![Banner Spring AI Icon](@site/static/img/kits/spring-ai/spring_ai_logo.png)

## 🎤 Spring AI Whisper Model: Speech-to-Text Magic! 🚀

Spring AI currently plays nice with OpenAI’s and AzureOpenAI’s Whisper model for turning your multilingual speech into transcribed text (JSON or TEXT format). Wanna stay updated on the latest models? Check out OpenAI’s site! 🧙‍♂️✨

---

## 1️⃣ Getting Started: Let’s Transcribe Like a Pro! 🎙️

Since Spring AI is all about OpenAI models right now, we roll with `OpenAiAudioTranscriptionModel` to convert audio files into text. If Spring AI gets more transcription buddies in the future, we’ll extract a common `AudioTranscriptionModel` interface.

### 🔧 First Things First: Add This Dependency

Before diving in, make sure you add the `spring-ai-openai-spring-boot-starter` dependency to your project. Trust me, it’s the secret sauce! 🏗️

```xml
<dependency>
  <groupId>org.springframework.ai</groupId>
  <artifactId>spring-ai-openai-spring-boot-starter</artifactId>
</dependency>
```

### 🔥 Autoconfiguration Magic

Spring Boot’s auto-config does the heavy lifting, creating an `OpenAiAudioTranscriptionModel` instance with these default settings:

```properties
# 🔑 API Key - Don’t forget this one!
spring.ai.openai.api-key=${OPENAI_API_KEY}  

# 🎙️ Default Configuration
spring.ai.openai.audio.transcription.options.model=whisper-1
spring.ai.openai.audio.transcription.options.response-format=json  # json, text, srt, verbose_json or vtt
spring.ai.openai.audio.transcription.options.temperature=0  # sampling temperature, between 0 and 1
spring.ai.openai.audio.transcription.options.timestamp_granularities=segment  # segment or word (or both)
```

### 📜 Choose Your Format

Pick your flavor of transcription output:

- **json**: Structured response format (for the nerds 🤓)
- **text**: Plain ol’ text (classic!)
- **srt**: Subtitle file format 🎬
- **verbose_json**: More metadata than you’ll ever need
- **vtt**: Perfect for web video captions 🖥️

### 🎛️ More Configuration Options

Want to get fancy? Customize your transcription output with these:

```properties
# 📝 Guide the model’s style or continue a previous segment
spring.ai.openai.audio.transcription.options.prompt={prompt}  

# 🌍 Language setting (ISO-639-1 format, e.g., "en")
spring.ai.openai.audio.transcription.options.language={language}
```

### 🏗️ Inject the Transcription Model Into Your Spring App

```java
@RestController
class TranscriptionController {

  private final OpenAiAudioTranscriptionModel transcriptionModel;

  TranscriptionController(OpenAiAudioTranscriptionModel transcriptionModel) {
    this.transcriptionModel = transcriptionModel;
  }

  // handler methods
}
```

---

## 2️⃣ Manual Configuration: Take Control! 🎛️

You’re a DIYer? No problem! Just need the API key:

```java
var openAiAudioApi = new OpenAiAudioApi(System.getenv("OPENAI_API_KEY"));
var transcriptionModel = new OpenAiAudioTranscriptionModel(openAiAudioApi);
```

Wanna tweak things further? Use `OpenAiAudioSpeechOptions` like a boss:

```java
OpenAiAudioTranscriptionOptions options = OpenAiAudioTranscriptionOptions.builder()
  .withLanguage("en")
  .withPrompt("Create transcription for this audio file.")
  .withTemperature(0f)
  .withResponseFormat(TranscriptResponseFormat.TEXT)
  .build();

var openAiAudioApi = new OpenAiAudioApi(System.getenv("OPENAI_API_KEY"));
var transcriptionModel = new OpenAiAudioTranscriptionModel(openAiAudioApi, options);
```

---

## 3️⃣ Speech-to-Text Transcription Example 🎤➡️📜

Time to put it all together! Use the `call()` method to transcribe an audio file.

```java
@Value("classpath:speech.mp3")
Resource audioFile;

AudioTranscriptionResponse response = transcriptionModel.call(new AudioTranscriptionPrompt(audioFile));
String text = response.getResult().getOutput();
```

Or integrate it into a REST API:

```java
@RestController
public class OpenAiSpeechToTextController {

    private final OpenAiAudioTranscriptionModel transcriptionModel;

    @Autowired
    public OpenAiSpeechToTextController(OpenAiAudioTranscriptionModel transcriptionModel) {
        this.transcriptionModel = transcriptionModel;
    }

    @GetMapping("/transcription")
    public String getSpeechToText(@Value("classpath:speech.mp3") Resource audioFile) {
        return transcriptionModel.call(new AudioTranscriptionPrompt(audioFile))
                .getResult()
                .getOutput();
    }

    @GetMapping("/transcription_v2")
    public String getSpeechToTextDetails(@Value("classpath:speech.mp3") Resource audioFile) {

        var transcriptionOptions = OpenAiAudioTranscriptionOptions.builder()
                .responseFormat(OpenAiAudioApi.TranscriptResponseFormat.TEXT)
                .temperature(0f)
                .build();

        var transcriptionResponse = transcriptionModel
                .call(new AudioTranscriptionPrompt(audioFile, transcriptionOptions));
        return transcriptionResponse.getResult().getOutput();
    }

}
```

🔊 **Note:** We’re using `speech.mp3` for demo purposes. Replace it with your own files!

---

## 4️⃣ Summary: What We Learned Today 🎓

- Spring AI **only** supports OpenAI’s Whisper model for now.
- **`OpenAiAudioTranscriptionModel`** is your go-to class for transcriptions.
- Just add `spring-ai-openai-spring-boot-starter`, and boom 💥—you’re good to go!
- Use `application.properties` to tweak the default configurations.
- Prefer manual control? Use the `OpenAiAudioTranscriptionOptions` builder.

🎉 **Now go forth and transcribe like a pro!** 🎙️✨

---

**_Happy Learning!** 🚀_
