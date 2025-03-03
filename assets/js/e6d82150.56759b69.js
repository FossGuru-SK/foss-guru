"use strict";(self.webpackChunkfoss_guru=self.webpackChunkfoss_guru||[]).push([[7598],{471:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"kits/java/Java OOP/building-blocks-of-oops/abstraction","title":"Abstraction in Java","description":"Learn more about abstraction in java.","source":"@site/community/kits/java/Java OOP/building-blocks-of-oops/abstraction.md","sourceDirName":"kits/java/Java OOP/building-blocks-of-oops","slug":"/kits/java/Java OOP/building-blocks-of-oops/abstraction","permalink":"/foss-guru/community/kits/java/Java OOP/building-blocks-of-oops/abstraction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"abstraction","title":"Abstraction in Java","description":"Learn more about abstraction in java.","sidebar_position":3},"sidebar":"community","previous":{"title":"Association, Aggregation and Composition in Java","permalink":"/foss-guru/community/kits/java/Java OOP/building-blocks-of-oops/association-aggregation-composition"},"next":{"title":"Java Inheritance","permalink":"/foss-guru/community/kits/java/Java OOP/building-blocks-of-oops/inheritance"}}');var i=n(4848),a=n(8453);const o={id:"abstraction",title:"Abstraction in Java",description:"Learn more about abstraction in java.",sidebar_position:3},r=void 0,c={},l=[{value:"\ud83c\udfad Abstraction in Java \u2013 The Art of Hiding the Mess",id:"-abstraction-in-java--the-art-of-hiding-the-mess",level:2},{value:"\ud83e\uddd0 What is Abstraction in OOP?",id:"-what-is-abstraction-in-oop",level:2},{value:"\ud83c\udfad Types of Abstraction",id:"-types-of-abstraction",level:2},{value:"1\ufe0f\u20e3 Data Abstraction \ud83c\udf55",id:"1\ufe0f\u20e3-data-abstraction-",level:3},{value:"2\ufe0f\u20e3 Control Abstraction \ud83c\udf9b\ufe0f",id:"2\ufe0f\u20e3-control-abstraction-\ufe0f",level:3},{value:"\ud83d\ude80 How to Achieve Abstraction in Java?",id:"-how-to-achieve-abstraction-in-java",level:2},{value:"\ud83c\udfa9 Abstraction Using Interfaces",id:"-abstraction-using-interfaces",level:2},{value:"\ud83d\udccc Output",id:"-output",level:3},{value:"\ud83e\udd14 Abstraction vs. Encapsulation \u2013 What&#39;s the Difference?",id:"-abstraction-vs-encapsulation--whats-the-difference",level:2},{value:"\ud83c\udf93 Final Thoughts",id:"-final-thoughts",level:2}];function d(t){const e={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Banner java icon",src:n(4769).A+"",width:"370",height:"364"})}),"\n",(0,i.jsx)(e.h2,{id:"-abstraction-in-java--the-art-of-hiding-the-mess",children:"\ud83c\udfad Abstraction in Java \u2013 The Art of Hiding the Mess"}),"\n",(0,i.jsxs)(e.p,{children:["Ever wondered why you can operate a TV remote without needing a PhD in electronics? That, my friend, is ",(0,i.jsx)(e.strong,{children:"abstraction"})," in action! Java, just like your remote, keeps the complex stuff under the hood so you can focus on just pressing the right buttons (or in our case, calling the right methods)."]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"-what-is-abstraction-in-oop",children:"\ud83e\uddd0 What is Abstraction in OOP?"}),"\n",(0,i.jsxs)(e.p,{children:["In ",(0,i.jsx)(e.strong,{children:"Object-Oriented Programming (OOP)"}),", abstraction is like a VIP pass\u2014it lets you use cool stuff without worrying about how it works inside. It's all about ",(0,i.jsx)(e.strong,{children:"defining objects that do things, store data, and interact with each other"}),", while hiding unnecessary details."]}),"\n",(0,i.jsx)(e.p,{children:"Abstraction is everywhere! From simple methods to complex frameworks, it keeps things clean, simple, and manageable."}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"-types-of-abstraction",children:"\ud83c\udfad Types of Abstraction"}),"\n",(0,i.jsx)(e.p,{children:"There are two main flavors of abstraction:"}),"\n",(0,i.jsx)(e.h3,{id:"1\ufe0f\u20e3-data-abstraction-",children:"1\ufe0f\u20e3 Data Abstraction \ud83c\udf55"}),"\n",(0,i.jsxs)(e.p,{children:["Think of data abstraction like ordering pizza. You tell the restaurant what toppings you want (",(0,i.jsx)(e.strong,{children:"public methods"}),"), but you don\u2019t need to know how they knead the dough or where they source the cheese from (",(0,i.jsx)(e.strong,{children:"hidden implementation"}),"). The pizza arrives, and you enjoy it. Simple!"]}),"\n",(0,i.jsx)(e.h3,{id:"2\ufe0f\u20e3-control-abstraction-\ufe0f",children:"2\ufe0f\u20e3 Control Abstraction \ud83c\udf9b\ufe0f"}),"\n",(0,i.jsxs)(e.p,{children:["Imagine writing the same code over and over\u2014sounds boring, right? ",(0,i.jsx)(e.strong,{children:"Control abstraction"})," helps by wrapping repetitive tasks into reusable functions. It's like a microwave\u2019s \u201cPopcorn\u201d button\u2014you don\u2019t need to set the temperature and time manually; just press a button and boom, popcorn! \ud83c\udf7f"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"-how-to-achieve-abstraction-in-java",children:"\ud83d\ude80 How to Achieve Abstraction in Java?"}),"\n",(0,i.jsxs)(e.p,{children:["Java makes abstraction happen using ",(0,i.jsx)(e.strong,{children:"interfaces"})," and ",(0,i.jsx)(e.strong,{children:"abstract classes"}),"."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Interfaces"}),' = 100% abstraction (like a contract: "Hey, implement these methods, but how you do it is up to you!")']}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Abstract Classes"}),' = Partial abstraction ("I\'ll give you some methods, but you still have some work to do!")']}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Let\u2019s dive into an example that shows abstraction in action!"}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"-abstraction-using-interfaces",children:"\ud83c\udfa9 Abstraction Using Interfaces"}),"\n",(0,i.jsxs)(e.p,{children:["Imagine we\u2019re running reports in an application, and all we care about is calling ",(0,i.jsx)(e.code,{children:"run()"}),". We don't need to know how each report crunches numbers behind the scenes."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'public interface Report {\n    List<Object> run(ReportContext reportContext);\n}\n\npublic class ReportContext {\n    // Fields and setup\n}\n\npublic class EmployeeReport implements Report {\n    @Override\n    public List<Object> run(ReportContext reportContext) {\n        System.out.println("Executing employee report");\n        return null;\n    }\n}\n\npublic class SalaryReport implements Report {\n    @Override\n    public List<Object> run(ReportContext reportContext) {\n        System.out.println("Executing salary report");\n        return null;\n    }\n}\n'})}),"\n",(0,i.jsx)(e.p,{children:"Now let\u2019s run the reports! \ud83c\udfc3\u200d\u2642\ufe0f"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"public class Main {\n    public static void main(String[] args) {\n        ReportContext reportContext = new ReportContext();\n        \n        Report eReport = new EmployeeReport();\n        eReport.run(reportContext);\n\n        Report sReport = new SalaryReport();\n        sReport.run(reportContext);\n    }\n}\n"})}),"\n",(0,i.jsx)(e.h3,{id:"-output",children:"\ud83d\udccc Output"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"Executing employee report\nExecuting salary report\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Boom! \ud83c\udf89 The reports run without us worrying about their internals. That\u2019s ",(0,i.jsx)(e.strong,{children:"abstraction magic!"})," \u2728"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"-abstraction-vs-encapsulation--whats-the-difference",children:"\ud83e\udd14 Abstraction vs. Encapsulation \u2013 What's the Difference?"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Feature"}),(0,i.jsx)(e.th,{children:"Abstraction \ud83c\udfad"}),(0,i.jsx)(e.th,{children:"Encapsulation \ud83d\udd12"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"Purpose"})}),(0,i.jsx)(e.td,{children:"Hide implementation details"}),(0,i.jsx)(e.td,{children:"Protect data from unauthorized access"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"Achieved using"})}),(0,i.jsx)(e.td,{children:"Interfaces, Abstract classes"}),(0,i.jsx)(e.td,{children:"Private variables, Public getters/setters"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"Example"})}),(0,i.jsx)(e.td,{children:"TV remote (you press a button, it works)"}),(0,i.jsx)(e.td,{children:"Capsule pill (you know it works, but can\u2019t see inside)"})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:["In short, ",(0,i.jsx)(e.strong,{children:"abstraction hides the complexity"}),", while ",(0,i.jsx)(e.strong,{children:"encapsulation protects the data"}),". They go hand-in-hand like peanut butter and jelly. \ud83e\udd6a"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"-final-thoughts",children:"\ud83c\udf93 Final Thoughts"}),"\n",(0,i.jsxs)(e.p,{children:["Abstraction helps make Java (and life) ",(0,i.jsx)(e.strong,{children:"less complicated"}),". Next time you use a microwave, a car, or even your favorite app, remember\u2014you don\u2019t need to know how it works internally; you just need to use it effectively!"]}),"\n",(0,i.jsxs)(e.p,{children:["\ud83d\udd0d Want to learn more? Stay tuned for my next post: ",(0,i.jsx)(e.em,{children:"Exploring Interfaces and Abstract Classes in Java!"})," \ud83d\ude80"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Happy Coding!"})," \ud83c\udf89\ud83d\udc68\u200d\ud83d\udcbb"]})]})}function h(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},4769:(t,e,n)=>{n.d(e,{A:()=>s});const s=n.p+"assets/images/banner-java-icon-0ae50e2293ff72244732cfbb42e27ed7.png"},8453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>r});var s=n(6540);const i={},a=s.createContext(i);function o(t){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),s.createElement(a.Provider,{value:e},t.children)}}}]);