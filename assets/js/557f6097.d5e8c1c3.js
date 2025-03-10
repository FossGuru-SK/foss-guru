"use strict";(self.webpackChunkfoss_guru=self.webpackChunkfoss_guru||[]).push([[9496],{528:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"kits/spring-ai/Model/image-model","title":"Spring AI ImageModel (Text-to-Image)","description":"This Spring tutorial discusses the basics of Spring AI APIs for image generation using OpenAI\u2019s DALL-E and Stability AI with examples.","source":"@site/community/kits/spring-ai/Model/image-model.md","sourceDirName":"kits/spring-ai/Model","slug":"/kits/spring-ai/Model/image-model","permalink":"/foss-guru/community/kits/spring-ai/Model/image-model","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"image-model","title":"Spring AI ImageModel (Text-to-Image)","description":"This Spring tutorial discusses the basics of Spring AI APIs for image generation using OpenAI\u2019s DALL-E and Stability AI with examples.","sidebar_position":2},"sidebar":"community","previous":{"title":"Spring AI EmbeddingModel","permalink":"/foss-guru/community/kits/spring-ai/Model/embedding-model"},"next":{"title":"Spring AI SpeechModel (Text-to-Speech)","permalink":"/foss-guru/community/kits/spring-ai/Model/speech-model"}}');var s=i(4848),t=i(8453);const r={id:"image-model",title:"Spring AI ImageModel (Text-to-Image)",description:"This Spring tutorial discusses the basics of Spring AI APIs for image generation using OpenAI\u2019s DALL-E and Stability AI with examples.",sidebar_position:2},o=void 0,l={},d=[{value:"\ud83d\uddbc\ufe0f Spring AI: Fun with Image Generation",id:"\ufe0f-spring-ai-fun-with-image-generation",level:2},{value:"\ud83c\udfa8 LLMs + AI = Magic Images! \ud83e\uddd9\u200d\u2642\ufe0f",id:"-llms--ai--magic-images-\ufe0f",level:2},{value:"\ud83c\udf1f Supported Image Generation Wizards",id:"-supported-image-generation-wizards",level:3},{value:"\ud83d\udee0\ufe0f Step 1: Add Dependencies (Because Magic Needs Tools!)",id:"\ufe0f-step-1-add-dependencies-because-magic-needs-tools",level:2},{value:"\ud83c\udfad Step 2: Meet the Image Generation API",id:"-step-2-meet-the-image-generation-api",level:2},{value:"\u2728 How to Cast an Image Spell",id:"-how-to-cast-an-image-spell",level:3},{value:"\ud83d\udd27 Step 3: Creating the <code>ImageModel</code>",id:"-step-3-creating-the-imagemodel",level:2},{value:"\ud83c\udfae Step 4: Creating the Image Generation Controller",id:"-step-4-creating-the-image-generation-controller",level:2},{value:"\ud83c\udf10 Step 5: Configuring the Base URL",id:"-step-5-configuring-the-base-url",level:2},{value:"\ud83d\udee0\ufe0f Step 6: Testing Your Image Generation API \ud83c\udfaf",id:"\ufe0f-step-6-testing-your-image-generation-api-",level:2},{value:"\ud83c\udfac Conclusion: AI Art, Made Easy! \ud83c\udfc1",id:"-conclusion-ai-art-made-easy-",level:2}];function g(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Banner Spring AI Icon",src:i(9666).A+"",width:"1022",height:"239"})}),"\n",(0,s.jsx)(n.h2,{id:"\ufe0f-spring-ai-fun-with-image-generation",children:"\ud83d\uddbc\ufe0f Spring AI: Fun with Image Generation"}),"\n",(0,s.jsx)(n.h2,{id:"-llms--ai--magic-images-\ufe0f",children:"\ud83c\udfa8 LLMs + AI = Magic Images! \ud83e\uddd9\u200d\u2642\ufe0f"}),"\n",(0,s.jsxs)(n.p,{children:["Ever wanted to turn your wildest imaginations into reality? Well, sort of! Large Language Models (LLMs) like ",(0,s.jsx)(n.strong,{children:"DALL-E, Stable Diffusion, Midjourney, Imagen, GauGAN, Pixray,"})," and more can generate stunning images from just a simple text prompt. \ud83d\udd8c\ufe0f\u2728"]}),"\n",(0,s.jsxs)(n.p,{children:["Lucky for us, ",(0,s.jsx)(n.strong,{children:"Spring AI"})," makes it super easy to integrate these magical capabilities into our applications. \ud83d\ude80"]}),"\n",(0,s.jsx)(n.h3,{id:"-supported-image-generation-wizards",children:"\ud83c\udf1f Supported Image Generation Wizards"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DALL-E"})," (by OpenAI)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DALL-E"})," (by Azure OpenAI)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Stable Diffusion"})," (by Stability AI)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CogView"})," (by ZhiPuAI & QianFan)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This guide will walk you through the Spring AI module for text-to-image generation, with real code examples! \ud83c\udfad"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\ufe0f-step-1-add-dependencies-because-magic-needs-tools",children:"\ud83d\udee0\ufe0f Step 1: Add Dependencies (Because Magic Needs Tools!)"}),"\n",(0,s.jsxs)(n.p,{children:["To enable OpenAI API support, add the following to your ",(0,s.jsx)(n.code,{children:"pom.xml"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.springframework.ai</groupId>\n    <artifactId>spring-ai-openai-spring-boot-starter</artifactId>\n</dependency>\n"})}),"\n",(0,s.jsx)(n.p,{children:"For Stability AI\u2019s API support, add:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.springframework.ai</groupId>\n    <artifactId>spring-ai-stability-ai-spring-boot-starter</artifactId>\n</dependency>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default, these dependencies automatically configure an ",(0,s.jsx)(n.code,{children:"imageClient"})," bean. Want to disable it? Just set the following in ",(0,s.jsx)(n.code,{children:"application.properties"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-properties",children:"spring.ai.openai.image.enabled=false\nspring.ai.stabilityai.image.enabled=false\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-step-2-meet-the-image-generation-api",children:"\ud83c\udfad Step 2: Meet the Image Generation API"}),"\n",(0,s.jsx)(n.p,{children:"Spring AI provides a bunch of cool classes and interfaces to make image generation a breeze. Here\u2019s the A-list:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Core Class"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"What It Does"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ImageModel"})}),(0,s.jsxs)(n.td,{children:["The main actor! Calls ",(0,s.jsx)(n.code,{children:"imagePrompt"})," and returns ",(0,s.jsx)(n.code,{children:"ImageResponse"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ImageMessage"})}),(0,s.jsx)(n.td,{children:"Holds the text and its importance in shaping the image. \ud83c\udfad"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ImagePrompt"})}),(0,s.jsxs)(n.td,{children:["A fancy box containing ",(0,s.jsx)(n.code,{children:"ImageMessage"})," objects and request options. \ud83c\udf81"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ImageOptions"})}),(0,s.jsx)(n.td,{children:"Specifies extra magic (resolution, quality, etc.). \ud83c\udfa8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ImageResponse"})}),(0,s.jsx)(n.td,{children:"The AI's response, containing one or more generated images. \ud83d\uddbc\ufe0f"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ImageGeneration"})}),(0,s.jsx)(n.td,{children:"The actual image output and related metadata. \ud83d\udcf8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ImageGenerationMetadata"})}),(0,s.jsx)(n.td,{children:"Metadata describing the generated image. \ud83c\udff7\ufe0f"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"-how-to-cast-an-image-spell",children:"\u2728 How to Cast an Image Spell"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'@RestController\npublic class OpenAiImageController {\n\n    private final OpenAiImageModel imageModel;\n\n    @Autowired\n    public OpenAiImageController(OpenAiImageModel imageModel) {\n        this.imageModel = imageModel;\n    }\n\n    @GetMapping("/ask/image")\n    public ImageResponse generateImage(@RequestParam(value = "message", defaultValue = "Horse running behind tiger") String messgae) {\n        return imageModel.call(\n                new ImagePrompt(messgae,\n                        OpenAiImageOptions.builder()\n                                .quality("hd")\n                                .N(4)\n                                .height(1024)\n                                .width(1024).build())\n\n        );\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Boom! \ud83d\udc31\ud83d\udca8\ud83d\udc2d"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h2,{id:"-step-3-creating-the-imagemodel",children:["\ud83d\udd27 Step 3: Creating the ",(0,s.jsx)(n.code,{children:"ImageModel"})]}),"\n",(0,s.jsxs)(n.p,{children:["Spring AI provides two classes that implement the ",(0,s.jsx)(n.code,{children:"ImageModel"})," interface:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"OpenAiImageModel"})," (for DALL-E \ud83e\udde0\ud83c\udfa8)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"StabilityAiImageModel"})," (for Stable Diffusion \ud83c\udf0a)"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Define an ",(0,s.jsx)(n.code,{children:"ImageModel"})," bean in your config file:"]}),"\n",(0,s.jsxs)(n.p,{children:["\ud83d\udce2 ",(0,s.jsx)(n.strong,{children:"Pro Tip:"})," Keep your API keys out of your code! Store them safely in ",(0,s.jsx)(n.code,{children:"application.properties"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-properties",children:"spring.ai.openai.api-key=${OPENAI_API_KEY}\n# OR\nspring.ai.stability.api-key=${STABILITY_API_KEY}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-step-4-creating-the-image-generation-controller",children:"\ud83c\udfae Step 4: Creating the Image Generation Controller"}),"\n",(0,s.jsx)(n.p,{children:"Time to roll up our sleeves and make some API magic! Let\u2019s create a simple REST controller to generate images on demand. \ud83e\uddd1\u200d\ud83d\udcbb"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'import org.springframework.ai.image.ImagePrompt;\nimport org.springframework.ai.image.ImageResponse;\nimport org.springframework.ai.openai.OpenAiImageModel;\nimport org.springframework.ai.openai.OpenAiImageOptions;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestParam;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class OpenAiImageController {\n\n    private final OpenAiImageModel imageModel;\n\n    @Autowired\n    public OpenAiImageController(OpenAiImageModel imageModel) {\n        this.imageModel = imageModel;\n    }\n\n    @GetMapping("/ask/image")\n    public ImageResponse generateImage(@RequestParam(value = "message", defaultValue = "Horse running behind tiger") String messgae) {\n        return imageModel.call(\n                new ImagePrompt(messgae,\n                        OpenAiImageOptions.builder()\n                                .quality("hd")\n                                .N(4)\n                                .height(1024)\n                                .width(1024).build())\n\n        );\n    }\n\n    @GetMapping("/ask/image/withUrl")\n    public String generateImageUrl(@RequestParam(value = "message", defaultValue = "Horse running behind tiger") String messgae) {\n        ImageResponse imageResponse = imageModel.call(new ImagePrompt(messgae, OpenAiImageOptions.builder().quality("hd").N(4).height(1024).width(1024).build()));\n        String imageUrl = imageResponse.getResult().getOutput().getUrl();\n        return "Redirect to:" + imageUrl;\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\ud83d\udd01 This same code works for Stability AI too\u2014just swap in ",(0,s.jsx)(n.code,{children:"StabilityAiImageModel"}),". \ud83d\udd04"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-step-5-configuring-the-base-url",children:"\ud83c\udf10 Step 5: Configuring the Base URL"}),"\n",(0,s.jsx)(n.p,{children:"By default, Spring AI selects these URLs for image generation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-properties",children:"spring.ai.openai.image.base-url=api.openai.com\n# OR\nspring.ai.stabilityai.image.base-url=api.stability.ai/v1\n"})}),"\n",(0,s.jsx)(n.p,{children:"Want to use a custom endpoint? Just override these properties. Easy peasy! \ud83c\udf4b"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\ufe0f-step-6-testing-your-image-generation-api-",children:"\ud83d\udee0\ufe0f Step 6: Testing Your Image Generation API \ud83c\udfaf"}),"\n",(0,s.jsx)(n.p,{children:"Let\u2019s test it! Send a prompt like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"GET /ask/image/withUrl?message=Horse runing behind Tiger\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ud83c\udf89 You\u2019ll get back a URL. Copy and paste it into your browser to see the generated image! \ud83c\udfc6"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-conclusion-ai-art-made-easy-",children:"\ud83c\udfac Conclusion: AI Art, Made Easy! \ud83c\udfc1"}),"\n",(0,s.jsxs)(n.p,{children:["With Spring AI, turning text into images is ",(0,s.jsx)(n.strong,{children:"ridiculously easy and fun"}),"! \ud83e\udd29 We covered:\n\u2705 Adding dependencies \ud83c\udfd7\ufe0f\n\u2705 Setting up image generation APIs \ud83d\uddbc\ufe0f\n\u2705 Configuring ",(0,s.jsx)(n.code,{children:"ImageModel"})," \ud83c\udfa8\n\u2705 Creating a REST Controller \ud83d\ude80\n\u2705 Generating images with a simple API call! \ud83c\udfad"]}),"\n",(0,s.jsx)(n.p,{children:"Now go ahead\u2014experiment, explore, and bring your AI-powered artistic visions to life! \u2728"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Happy Coding & Image Generating!"})," \ud83d\ude80\ud83c\udfa8"]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},9666:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/spring_ai_logo-85ebfad6246caa6a26060f054d26ebc8.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var a=i(6540);const s={},t=a.createContext(s);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);