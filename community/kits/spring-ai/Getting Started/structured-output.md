---
id: structured-output
title: Spring AI Structured Output Converters
description: 'Spring AI Structured Output Converters (List, Map and Bean)'
sidebar_position: 3
---
![Banner Spring AI Icon](@site/static/img/kits/spring-ai/spring_ai_logo.png)

## 🚀 Fun with Spring AI Structured Output Converters

So, you’ve got an LLM (Large Language Model) churning out text, but you need it structured neatly—no wild, unstructured responses allowed! Enter **Spring AI Structured Output Converters**—your best buddies for transforming AI-generated chaos into well-organized **Lists, Maps, or Java Beans**. 🎩✨

These converters ensure that the AI plays nice by:

1. **Giving clear instructions** about the required format (JSON, XML, etc.).
2. **Parsing the response** into neat Java objects—no messy surprises! 🎯

## 🛠 1. Setup

Before we unleash the AI magic, make sure your system is ready to roll:

### 🔑 Set up OpenAI API Key

```bash
export OPENAI_API_KEY=[your_openai_api_key]
```

And let’s make sure your Spring Boot app knows where to find it:

```properties
spring.ai.openai.api-key=${OPENAI_API_KEY}
```

### 📦 Add Dependencies

Add the magic potion (Spring AI OpenAI dependency) to your `pom.xml`:

```xml
<dependency>
  <groupId>org.springframework.ai</groupId>
  <artifactId>spring-ai-openai-spring-boot-starter</artifactId>
</dependency>
```

Now, we’re ready to explore the converters! 🚀

---

## 🌍 2. **MapOutputConverter**: The "Everything-in-a-Map" Trick

This converter ensures LLM responds in a **Map format** (RFC8259-compliant JSON). Think of it like stuffing AI’s response neatly into a HashMap. 🗺️

```java
public class MapOutputConverter extends AbstractMessageOutputConverter<Map<String, Object>> {
    @Override
    public String getFormat() {
        return """
            Your response should be in JSON format.
            The data structure for the JSON should match this Java class: java.util.HashMap
            Do not include any explanations, only provide an RFC8259-compliant JSON response.
        """;
    }
}
```

### 🎯 Example: Country-Capital Lookup

```java
@GetMapping("/country-capital-service/map")
public Map<String, Object> getCapitalNamesInMap(@RequestParam String countryNamesCsv) {
  if (countryNamesCsv == null || countryNamesCsv.isEmpty()) {
    throw new IllegalArgumentException("Country names CSV cannot be null or empty");
  }

  MapOutputConverter converter = new MapOutputConverter();
  PromptTemplate pt = new PromptTemplate("For these countries {countryNamesCsv}, return their capitals. {format}");
  Prompt renderedPrompt = pt.create(Map.of("countryNamesCsv", countryNamesCsv, "format", converter.getFormat()));

  ChatResponse response = chatClient.call(renderedPrompt);
  return converter.parse(response.getResult().getOutput().getContent());
}
```

✅ Output? A sweet, structured JSON response, neatly packed in a **Map**! 🗺️

---

## 📝 3. **ListOutputConverter**: "Gimme a List!"

This one is all about lists! It forces the AI to return **comma-separated values** (CSV) and then parses them into a Java List. 📝

```java
public class ListOutputConverter extends AbstractConversionServiceOutputConverter<List<String>> {
    @Override
    public String getFormat() {
        return """
            Your response should be a list of comma-separated values.
            eg: `foo, bar, baz`
        """;
    }
}
```

### 🎯 Example: Capital Cities as a List

```java
@GetMapping("/country-capital-service/list")
public List<String> getCapitalNamesInList(@RequestParam String countryNamesCsv) {
  if (countryNamesCsv == null || countryNamesCsv.isEmpty()) {
    throw new IllegalArgumentException("Country names CSV cannot be null or empty");
  }

  ListOutputConverter converter = new ListOutputConverter(new DefaultConversionService());
  PromptTemplate pt = new PromptTemplate("For these countries {countryNamesCsv}, return their capitals. {format}");
  Prompt renderedPrompt = pt.create(Map.of("countryNamesCsv", countryNamesCsv, "format", converter.getFormat()));

  ChatResponse response = chatClient.call(renderedPrompt);
  return converter.parse(response.getResult().getOutput().getContent());
}
```

✅ Expected Output: `"New Delhi, Washington D.C., Ottawa, Jerusalem"` neatly parsed into a `List<String>`. ✅

---

## 🏗 4. **BeanOutputConverter**: The "Shape It Like a POJO" Trick

This converter tells AI to shape the response according to a **Java POJO**—no extra fluff! 🎭

```java
public class BeanOutputConverter<T> implements StructuredOutputConverter<T> {
    @Override
    public String getFormat() {
        return """
            Your response should be in JSON format.
            Do not include explanations or markdown. Just an RFC8259-compliant JSON response.
            JSON Schema to follow:
            ```%s```
        """;
    }
}
```

### 🎯 Example: Top 10 Cities of a Country

```java
public record Pair(String countryName, List<String> cities) {}

@GetMapping("/country-capital-service/bean")
public Pair getCapitalNamesInPojo(@RequestParam String countryName) {
  BeanOutputConverter<Pair> converter = new BeanOutputConverter<>(Pair.class);
  PromptTemplate pt = new PromptTemplate("For {countryName}, return the 10 most popular cities. {format}");
  Prompt renderedPrompt = pt.create(Map.of("countryName", countryName, "format", converter.getFormat()));

  ChatResponse response = chatClient.call(renderedPrompt);
  return converter.parse(response.getResult().getOutput().getContent());
}
```

✅ AI now returns a **Pair object** with `countryName` and `List<String> cities`. 🎉

---

## 🎬 5. Conclusion

Spring AI Structured Output Converters are the **boss level cheats** for making LLMs respond in a **structured and predictable** format. Whether you need **Maps, Lists, or Java Beans**, these converters keep everything in order. 🧹💡

So go ahead—experiment, tweak, and see what kind of structured magic you can pull off! 🔥

Happy Coding! 🧑‍💻🎉
