---
id: prompt-templates
title: Spring AI PromptTemplate
description: 'Custom prompts like a pro'
sidebar_position: 2
---
![Banner Spring AI Icon](@site/static/img/kits/spring-ai/spring_ai_logo.png)

## 🤖 Mastering Spring AI Prompt Templates

## 🎭 What's the Big Deal with Prompts?

Imagine you're chatting with a super-intelligent AI, and all it takes to get a great response is how well you ask a question. That’s what prompts are all about! In the realm of AGI (Artificial General Intelligence) and LLMs (Large Language Models), prompts are like magic spells—you craft them, and the AI conjures up an answer. 🪄✨

Back in the day, prompts were just simple questions like: *"Hey AI, what's up?"* But now, with evolution (yes, AI evolves too!), they can differentiate between questions, instructions, and even philosophical dilemmas. 🤯

This is where **Spring AI PromptTemplate** swoops in like a superhero to save us from bland prompts. Let’s explore its wonders!

---

## 📖 Quick Reference Guide (Because Who Reads Long Docs?)

```java
String promptText = """
    Tell about {topic} to a {age}-year-old person.
    """;

//Get from user
String topic = "Black Hole";  
int age = 14;

PromptTemplate promptTemplate = new PromptTemplate(promptText);
Message message = promptTemplate.createMessage(Map.of("topic", topic, "age", age));

Prompt prompt = new Prompt(List.of(message, message2, ...));
Generation generation = chatModel.call(prompt).getResult();
```

---

## 🎬 Step 1: Get to know Message and there types

![message and their type](@site/static/img/kits/spring-ai/spring-ai-message-type.png)

>>Note: `getContent()` is replaced with `getText()` as SpringAI is also evovling so you can understand that 😀

---

## 🧐 Step 2: AI Roles – Who’s Who in the Conversation?

Every good conversation has different personalities. In AI land, these are called **roles**:

| ROLE        | API/Class          | Description |
|------------|------------------|-------------|
| **USER**   | `UserMessage`     | That’s you! Asking the AI deep or silly questions. |
| **ASSISTANT** | `AssistantMessage` | The AI answering your deep or silly questions. |
| **SYSTEM** | `SystemMessage`   | The secret boss behind the scenes, controlling how AI thinks. 🧠 |
| **FUNCTION** | `FunctionMessage` | AI’s external tools—like calling an API to fetch the latest cat memes. 🐱 |

---

## 🎮 Step 3: Talking to AI with Prompt API

Conversations with AI are managed through **ModelRequest** and **ModelResponse**. It’s like placing an order at a restaurant:

- `ModelRequest` = What you ask the AI (your order)
- `ModelResponse` = What the AI serves back (your meal 🍔)

Example Code:

```java
@GetMapping("/tourist/guide")
    public String touristGuide(@RequestParam(value = "country", defaultValue = "India") String countryName) {
        PromptTemplate pt = new PromptTemplate(promptUserMessageTemplate);
        Prompt prompt = pt.create(Map.of("location", countryName));
        return chatModel.call(prompt).getResult().getOutput().getText();
    }
```

Output: provided Germany as input

```java
Certainly! Here are five of Germany's most famous tourist spots, each accompanied by a brief description highlighting their uniqueness:

1. **Berlin**  
   The capital city is renowned for its rich cultural and historical landmarks, such as the iconic Brandenburg Gate symbolizing the Berlin Wall and the Reichstag building home to Germany's parliament.

2. **Munich**  
   Known as the "City of the Future," Munich boasts historic sites like the grand Schönbrunn Palace, vibrant nightlife, and the renowned Oktoberfest celebration in its old town.

3. **Stuttgart**  
   This city is celebrated for its musical heritage, home to the world's largest organ, along with its picturesque gardens and cultural museums.

4. **Hainaut Castle (Frankfurt)**  
   A historic fortress offering panoramic views of the surrounding landscape, it also features extensive gardens, making it a popular spot in Frankfurt am Main.

5. **Black Forest Park (Saarbrücken)**  
   Located near Saarbrücken, this park is a haven for nature enthusiasts with miles of hiking trails and the opportunity to visit ancient beech trees known as "Giant Trees."

Each destination offers a unique experience, from cultural exploration in Berlin to natural beauty in the Black Forest.
```

---

## 🎨 Step 4: PromptTemplate API – The Picasso of AI Conversations 🎨

We don’t always talk in plain sentences. Sometimes, we like to **personalize** our messages (like adding emojis! 😜). That’s where `PromptTemplate` comes in.

```java
PromptTemplate promptTemplate = new PromptTemplate("Tell me about {subject}. Explain if I am {age} years old.");

//Obtain these values from user
String subject = "USA Elections";
int age = 14;

Prompt prompt = promptTemplate.create(Map.of("subject", subject, "age", age));
String output = chatModel
  .call(prompt)
  .getResult()
  .getOutput()
  .getText();

System.out.println(output);
```

📢 **Output:**

```java
Tell me about USA Elections. Explain if I am 14 years old.
USA Elections are the process where people in the United States choose who will be their leaders...
```

---

## 🏆 Step 5: Leveling Up – Combining Multiple Prompts

What if multiple roles want to say something? No problem! Just stack ‘em up like a delicious AI sandwich. 🥪

```java
@GetMapping("/tourist/guide/system")
    public String touristGuideSystem(@RequestParam(value = "country", defaultValue = "India") String countryName) {
        //Create Message with User messageType
        PromptTemplate userPromptTemplate = new PromptTemplate(promptUserMessageTemplate);
        Message userMessage = userPromptTemplate.createMessage(Map.of("location", countryName));

        //Create Message with System messageType
        SystemPromptTemplate systemPromptTemplate = new SystemPromptTemplate(promptSystemMessageTemplate);
        Message systemMessage = systemPromptTemplate.createMessage(Map.of("name", "Siri"));

        //Create Prompt with both user and message
        Prompt prompt = new Prompt(List.of(userMessage, systemMessage));
        return chatModel.call(prompt).getResult().getOutput().getText();
    }
```

Output: for input as India (generated response is greeting user then exiting statements are also nice)

```java
Hello! Welcome to India, known for its vibrant culture and stunning landscapes! The country offers a rich variety of tourist spots that captivate visitors from around the world. Here are five must-visit destinations:

1. **Jaipur (Pink City)**: Renowned for its striking pink sandstone architecture, Jaipur is famous for the Amber Palace and Hawa Mahal, offering a serene retreat surrounded byhillside landscapes.

2. **Tajah Mahal**: Located in Agra near Delhi, this architectural marvel designed by Sir Edwin Landseer symbolizes love and reflects the intricate craftsmanship of Mughal art.

3. **Canals of Calcutta (Palghat Gap)**: Experience a blend of colonial charm and waterways with this network of canals that highlight Kolkata's history and culture.

4. **Western Ghats**: Known for their lush greenery, wildlife reserves like Bandhavgarh Tiger Reserve, and breathtaking hilltop views, these ranges are a haven for nature enthusiasts.

5. **Ooty Tea Plantations**: A picturesque hill station offering tea plantations, misty valleys, and serene gardens, perfect for a getaway with panoramic landscapes.

Thank you for considering India as your next destination!
```

Youn can checkout repo for DeepSeek AI where i have already provided reference implementation for you [deepseek-ai using ollama](https://github.com/FossGuru-SK/spring-ai-samples/tree/main/deepseek-ai)

---

## 📂 Step 6: Keeping Things Organized – Injecting Template Strings as Resources

If you don’t want a cluttered Java file, store prompt templates separately! Just like separating your socks and shoes. 🧦👟

### `/resources/prompts/system-message.st`

```java
You are a helpful AI assistant named {name}.
Greet the user, summarize, then answer the request.
Always end with a thank-you message.
```

### Java Code

```java
@Value("classpath:/prompts/system-message.st")
private Resource promptSystemMessage;

SystemPromptTemplate systemPromptTemplate = new SystemPromptTemplate(systemText);
Message systemMessage = systemPromptTemplate.createMessage(Map.of("name", "Siri"));
```

---

## 🎉 Step 7: Final Thoughts – AI Prompting Like a Pro

We’ve covered:
✅ Different roles in an AI convo
✅ How to craft dynamic prompts
✅ Using `PromptTemplate` like a boss
✅ Combining multiple prompts for epic AI responses
✅ Keeping things clean with resource files

📢 **Pro Tip:** Play around with different prompt styles and see what wacky, wise, or wonderful responses you get!

🔗 Want more? Check out [LangChain4J Structured Output Example](https://github.com/langchain4j).

**Happy Prompting! 🚀🎉**
