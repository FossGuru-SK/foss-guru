"use strict";(self.webpackChunkfoss_guru=self.webpackChunkfoss_guru||[]).push([[7887],{8593:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"kits/spring-ai/Getting Started/prompt-templates","title":"Spring AI PromptTemplate","description":"Custom prompts like a pro","source":"@site/community/kits/spring-ai/Getting Started/prompt-templates.md","sourceDirName":"kits/spring-ai/Getting Started","slug":"/kits/spring-ai/Getting Started/prompt-templates","permalink":"/foss-guru/community/kits/spring-ai/Getting Started/prompt-templates","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"prompt-templates","title":"Spring AI PromptTemplate","description":"Custom prompts like a pro","sidebar_position":2},"sidebar":"community","previous":{"title":"Spring AI - The Basics","permalink":"/foss-guru/community/kits/spring-ai/Getting Started/basics"},"next":{"title":"Spring AI Structured Output Converters","permalink":"/foss-guru/community/kits/spring-ai/Getting Started/structured-output"}}');var a=s(4848),r=s(8453);const i={id:"prompt-templates",title:"Spring AI PromptTemplate",description:"Custom prompts like a pro",sidebar_position:2},o=void 0,l={},p=[{value:"\ud83e\udd16 Mastering Spring AI Prompt Templates",id:"-mastering-spring-ai-prompt-templates",level:2},{value:"\ud83c\udfad What&#39;s the Big Deal with Prompts?",id:"-whats-the-big-deal-with-prompts",level:2},{value:"\ud83d\udcd6 Quick Reference Guide (Because Who Reads Long Docs?)",id:"-quick-reference-guide-because-who-reads-long-docs",level:2},{value:"\ud83c\udfac Step 1: Get to know Message and there types",id:"-step-1-get-to-know-message-and-there-types",level:2},{value:"\ud83e\uddd0 Step 2: AI Roles \u2013 Who\u2019s Who in the Conversation?",id:"-step-2-ai-roles--whos-who-in-the-conversation",level:2},{value:"\ud83c\udfae Step 3: Talking to AI with Prompt API",id:"-step-3-talking-to-ai-with-prompt-api",level:2},{value:"\ud83c\udfa8 Step 4: PromptTemplate API \u2013 The Picasso of AI Conversations \ud83c\udfa8",id:"-step-4-prompttemplate-api--the-picasso-of-ai-conversations-",level:2},{value:"\ud83c\udfc6 Step 5: Leveling Up \u2013 Combining Multiple Prompts",id:"-step-5-leveling-up--combining-multiple-prompts",level:2},{value:"\ud83d\udcc2 Step 6: Keeping Things Organized \u2013 Injecting Template Strings as Resources",id:"-step-6-keeping-things-organized--injecting-template-strings-as-resources",level:2},{value:"<code>/resources/prompts/system-message.st</code>",id:"resourcespromptssystem-messagest",level:3},{value:"Java Code",id:"java-code",level:3},{value:"\ud83c\udf89 Step 7: Final Thoughts \u2013 AI Prompting Like a Pro",id:"-step-7-final-thoughts--ai-prompting-like-a-pro",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Banner Spring AI Icon",src:s(9666).A+"",width:"1022",height:"239"})}),"\n",(0,a.jsx)(t.h2,{id:"-mastering-spring-ai-prompt-templates",children:"\ud83e\udd16 Mastering Spring AI Prompt Templates"}),"\n",(0,a.jsx)(t.h2,{id:"-whats-the-big-deal-with-prompts",children:"\ud83c\udfad What's the Big Deal with Prompts?"}),"\n",(0,a.jsx)(t.p,{children:"Imagine you're chatting with a super-intelligent AI, and all it takes to get a great response is how well you ask a question. That\u2019s what prompts are all about! In the realm of AGI (Artificial General Intelligence) and LLMs (Large Language Models), prompts are like magic spells\u2014you craft them, and the AI conjures up an answer. \ud83e\ude84\u2728"}),"\n",(0,a.jsxs)(t.p,{children:["Back in the day, prompts were just simple questions like: ",(0,a.jsx)(t.em,{children:'"Hey AI, what\'s up?"'})," But now, with evolution (yes, AI evolves too!), they can differentiate between questions, instructions, and even philosophical dilemmas. \ud83e\udd2f"]}),"\n",(0,a.jsxs)(t.p,{children:["This is where ",(0,a.jsx)(t.strong,{children:"Spring AI PromptTemplate"})," swoops in like a superhero to save us from bland prompts. Let\u2019s explore its wonders!"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"-quick-reference-guide-because-who-reads-long-docs",children:"\ud83d\udcd6 Quick Reference Guide (Because Who Reads Long Docs?)"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'String promptText = """\n    Tell about {topic} to a {age}-year-old person.\n    """;\n\n//Get from user\nString topic = "Black Hole";  \nint age = 14;\n\nPromptTemplate promptTemplate = new PromptTemplate(promptText);\nMessage message = promptTemplate.createMessage(Map.of("topic", topic, "age", age));\n\nPrompt prompt = new Prompt(List.of(message, message2, ...));\nGeneration generation = chatModel.call(prompt).getResult();\n'})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"-step-1-get-to-know-message-and-there-types",children:"\ud83c\udfac Step 1: Get to know Message and there types"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"message and their type",src:s(9537).A+"",width:"720",height:"405"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["Note: ",(0,a.jsx)(t.code,{children:"getContent()"})," is replaced with ",(0,a.jsx)(t.code,{children:"getText()"})," as SpringAI is also evovling so you can understand that \ud83d\ude00"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"-step-2-ai-roles--whos-who-in-the-conversation",children:"\ud83e\uddd0 Step 2: AI Roles \u2013 Who\u2019s Who in the Conversation?"}),"\n",(0,a.jsxs)(t.p,{children:["Every good conversation has different personalities. In AI land, these are called ",(0,a.jsx)(t.strong,{children:"roles"}),":"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"ROLE"}),(0,a.jsx)(t.th,{children:"API/Class"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"USER"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"UserMessage"})}),(0,a.jsx)(t.td,{children:"That\u2019s you! Asking the AI deep or silly questions."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"ASSISTANT"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"AssistantMessage"})}),(0,a.jsx)(t.td,{children:"The AI answering your deep or silly questions."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"SYSTEM"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"SystemMessage"})}),(0,a.jsx)(t.td,{children:"The secret boss behind the scenes, controlling how AI thinks. \ud83e\udde0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"FUNCTION"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"FunctionMessage"})}),(0,a.jsx)(t.td,{children:"AI\u2019s external tools\u2014like calling an API to fetch the latest cat memes. \ud83d\udc31"})]})]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"-step-3-talking-to-ai-with-prompt-api",children:"\ud83c\udfae Step 3: Talking to AI with Prompt API"}),"\n",(0,a.jsxs)(t.p,{children:["Conversations with AI are managed through ",(0,a.jsx)(t.strong,{children:"ModelRequest"})," and ",(0,a.jsx)(t.strong,{children:"ModelResponse"}),". It\u2019s like placing an order at a restaurant:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"ModelRequest"})," = What you ask the AI (your order)"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"ModelResponse"})," = What the AI serves back (your meal \ud83c\udf54)"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Example Code:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'@GetMapping("/tourist/guide")\n    public String touristGuide(@RequestParam(value = "country", defaultValue = "India") String countryName) {\n        PromptTemplate pt = new PromptTemplate(promptUserMessageTemplate);\n        Prompt prompt = pt.create(Map.of("location", countryName));\n        return chatModel.call(prompt).getResult().getOutput().getText();\n    }\n'})}),"\n",(0,a.jsx)(t.p,{children:"Output: provided Germany as input"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'Certainly! Here are five of Germany\'s most famous tourist spots, each accompanied by a brief description highlighting their uniqueness:\n\n1. **Berlin**  \n   The capital city is renowned for its rich cultural and historical landmarks, such as the iconic Brandenburg Gate symbolizing the Berlin Wall and the Reichstag building home to Germany\'s parliament.\n\n2. **Munich**  \n   Known as the "City of the Future," Munich boasts historic sites like the grand Sch\xf6nbrunn Palace, vibrant nightlife, and the renowned Oktoberfest celebration in its old town.\n\n3. **Stuttgart**  \n   This city is celebrated for its musical heritage, home to the world\'s largest organ, along with its picturesque gardens and cultural museums.\n\n4. **Hainaut Castle (Frankfurt)**  \n   A historic fortress offering panoramic views of the surrounding landscape, it also features extensive gardens, making it a popular spot in Frankfurt am Main.\n\n5. **Black Forest Park (Saarbr\xfccken)**  \n   Located near Saarbr\xfccken, this park is a haven for nature enthusiasts with miles of hiking trails and the opportunity to visit ancient beech trees known as "Giant Trees."\n\nEach destination offers a unique experience, from cultural exploration in Berlin to natural beauty in the Black Forest.\n'})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"-step-4-prompttemplate-api--the-picasso-of-ai-conversations-",children:"\ud83c\udfa8 Step 4: PromptTemplate API \u2013 The Picasso of AI Conversations \ud83c\udfa8"}),"\n",(0,a.jsxs)(t.p,{children:["We don\u2019t always talk in plain sentences. Sometimes, we like to ",(0,a.jsx)(t.strong,{children:"personalize"})," our messages (like adding emojis! \ud83d\ude1c). That\u2019s where ",(0,a.jsx)(t.code,{children:"PromptTemplate"})," comes in."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'PromptTemplate promptTemplate = new PromptTemplate("Tell me about {subject}. Explain if I am {age} years old.");\n\n//Obtain these values from user\nString subject = "USA Elections";\nint age = 14;\n\nPrompt prompt = promptTemplate.create(Map.of("subject", subject, "age", age));\nString output = chatModel\n  .call(prompt)\n  .getResult()\n  .getOutput()\n  .getText();\n\nSystem.out.println(output);\n'})}),"\n",(0,a.jsxs)(t.p,{children:["\ud83d\udce2 ",(0,a.jsx)(t.strong,{children:"Output:"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"Tell me about USA Elections. Explain if I am 14 years old.\nUSA Elections are the process where people in the United States choose who will be their leaders...\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"-step-5-leveling-up--combining-multiple-prompts",children:"\ud83c\udfc6 Step 5: Leveling Up \u2013 Combining Multiple Prompts"}),"\n",(0,a.jsx)(t.p,{children:"What if multiple roles want to say something? No problem! Just stack \u2018em up like a delicious AI sandwich. \ud83e\udd6a"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'@GetMapping("/tourist/guide/system")\n    public String touristGuideSystem(@RequestParam(value = "country", defaultValue = "India") String countryName) {\n        //Create Message with User messageType\n        PromptTemplate userPromptTemplate = new PromptTemplate(promptUserMessageTemplate);\n        Message userMessage = userPromptTemplate.createMessage(Map.of("location", countryName));\n\n        //Create Message with System messageType\n        SystemPromptTemplate systemPromptTemplate = new SystemPromptTemplate(promptSystemMessageTemplate);\n        Message systemMessage = systemPromptTemplate.createMessage(Map.of("name", "Siri"));\n\n        //Create Prompt with both user and message\n        Prompt prompt = new Prompt(List.of(userMessage, systemMessage));\n        return chatModel.call(prompt).getResult().getOutput().getText();\n    }\n'})}),"\n",(0,a.jsx)(t.p,{children:"Output: for input as India (generated response is greeting user then exiting statements are also nice)"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"Hello! Welcome to India, known for its vibrant culture and stunning landscapes! The country offers a rich variety of tourist spots that captivate visitors from around the world. Here are five must-visit destinations:\n\n1. **Jaipur (Pink City)**: Renowned for its striking pink sandstone architecture, Jaipur is famous for the Amber Palace and Hawa Mahal, offering a serene retreat surrounded byhillside landscapes.\n\n2. **Tajah Mahal**: Located in Agra near Delhi, this architectural marvel designed by Sir Edwin Landseer symbolizes love and reflects the intricate craftsmanship of Mughal art.\n\n3. **Canals of Calcutta (Palghat Gap)**: Experience a blend of colonial charm and waterways with this network of canals that highlight Kolkata's history and culture.\n\n4. **Western Ghats**: Known for their lush greenery, wildlife reserves like Bandhavgarh Tiger Reserve, and breathtaking hilltop views, these ranges are a haven for nature enthusiasts.\n\n5. **Ooty Tea Plantations**: A picturesque hill station offering tea plantations, misty valleys, and serene gardens, perfect for a getaway with panoramic landscapes.\n\nThank you for considering India as your next destination!\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Youn can checkout repo for DeepSeek AI where i have already provided reference implementation for you ",(0,a.jsx)(t.a,{href:"https://github.com/FossGuru-SK/spring-ai-samples/tree/main/deepseek-ai",children:"deepseek-ai using ollama"})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"-step-6-keeping-things-organized--injecting-template-strings-as-resources",children:"\ud83d\udcc2 Step 6: Keeping Things Organized \u2013 Injecting Template Strings as Resources"}),"\n",(0,a.jsx)(t.p,{children:"If you don\u2019t want a cluttered Java file, store prompt templates separately! Just like separating your socks and shoes. \ud83e\udde6\ud83d\udc5f"}),"\n",(0,a.jsx)(t.h3,{id:"resourcespromptssystem-messagest",children:(0,a.jsx)(t.code,{children:"/resources/prompts/system-message.st"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"You are a helpful AI assistant named {name}.\nGreet the user, summarize, then answer the request.\nAlways end with a thank-you message.\n"})}),"\n",(0,a.jsx)(t.h3,{id:"java-code",children:"Java Code"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'@Value("classpath:/prompts/system-message.st")\nprivate Resource promptSystemMessage;\n\nSystemPromptTemplate systemPromptTemplate = new SystemPromptTemplate(systemText);\nMessage systemMessage = systemPromptTemplate.createMessage(Map.of("name", "Siri"));\n'})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"-step-7-final-thoughts--ai-prompting-like-a-pro",children:"\ud83c\udf89 Step 7: Final Thoughts \u2013 AI Prompting Like a Pro"}),"\n",(0,a.jsxs)(t.p,{children:["We\u2019ve covered:\n\u2705 Different roles in an AI convo\n\u2705 How to craft dynamic prompts\n\u2705 Using ",(0,a.jsx)(t.code,{children:"PromptTemplate"})," like a boss\n\u2705 Combining multiple prompts for epic AI responses\n\u2705 Keeping things clean with resource files"]}),"\n",(0,a.jsxs)(t.p,{children:["\ud83d\udce2 ",(0,a.jsx)(t.strong,{children:"Pro Tip:"})," Play around with different prompt styles and see what wacky, wise, or wonderful responses you get!"]}),"\n",(0,a.jsxs)(t.p,{children:["\ud83d\udd17 Want more? Check out ",(0,a.jsx)(t.a,{href:"https://github.com/langchain4j",children:"LangChain4J Structured Output Example"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Happy Prompting! \ud83d\ude80\ud83c\udf89"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9537:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/spring-ai-message-type-245b0b0839ed385b4c99f65970126efc.png"},9666:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/spring_ai_logo-85ebfad6246caa6a26060f054d26ebc8.png"},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var n=s(6540);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);