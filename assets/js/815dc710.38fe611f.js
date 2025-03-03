"use strict";(self.webpackChunkfoss_guru=self.webpackChunkfoss_guru||[]).push([[5708],{4390:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>g});const i=JSON.parse('{"id":"kits/java/Java Strings/Conversions/long-to-string","title":"Convert long to String in Java","description":"Java example to convert long to String in two different ways using String.valueOf(long l) and Long.toString(long l) methods. Both are static methods.","source":"@site/community/kits/java/Java Strings/Conversions/long-to-string.md","sourceDirName":"kits/java/Java Strings/Conversions","slug":"/kits/java/Java Strings/Conversions/long-to-string","permalink":"/foss-guru/community/kits/java/Java Strings/Conversions/long-to-string","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"long-to-string","title":"Convert long to String in Java","description":"Java example to convert long to String in two different ways using String.valueOf(long l) and Long.toString(long l) methods. Both are static methods.","sidebar_position":4},"sidebar":"community","previous":{"title":"Convert String to long in Java","permalink":"/foss-guru/community/kits/java/Java Strings/Conversions/string-to-long"},"next":{"title":"Convert Date to String and String to Date in Java","permalink":"/foss-guru/community/kits/java/Java Strings/Conversions/date-to-string-to-date"}}');var o=t(4848),r=t(8453);const s={id:"long-to-string",title:"Convert long to String in Java",description:"Java example to convert long to String in two different ways using String.valueOf(long l) and Long.toString(long l) methods. Both are static methods.",sidebar_position:4},a=void 0,l={},g=[{value:"\ud83c\udfc6 Mastering Long to String Conversion in Java \ud83d\ude80",id:"-mastering-long-to-string-conversion-in-java-",level:2},{value:"\u26a1 Quick Reference",id:"-quick-reference",level:2},{value:"1\ufe0f\u20e3 Using <code>String.valueOf()</code>",id:"1\ufe0f\u20e3-using-stringvalueof",level:2},{value:"\ud83d\udccc Example",id:"-example",level:3},{value:"2\ufe0f\u20e3 Using <code>Long.toString()</code>",id:"2\ufe0f\u20e3-using-longtostring",level:2},{value:"\ud83d\udccc Example",id:"-example-1",level:3},{value:"\ud83c\udfaf Wrapping Up",id:"-wrapping-up",level:2}];function c(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Banner java icon",src:t(4769).A+"",width:"370",height:"364"})}),"\n",(0,o.jsx)(e.h2,{id:"-mastering-long-to-string-conversion-in-java-",children:"\ud83c\udfc6 Mastering Long to String Conversion in Java \ud83d\ude80"}),"\n",(0,o.jsxs)(e.p,{children:["Converting a ",(0,o.jsx)(e.code,{children:"long"})," to a ",(0,o.jsx)(e.code,{children:"String"})," in Java? No worries! We\u2019ve got two super simple ways to do it. Whether you're a Java ninja or just getting started, this guide will make it fun! \ud83d\ude0e"]}),"\n",(0,o.jsx)(e.h2,{id:"-quick-reference",children:"\u26a1 Quick Reference"}),"\n",(0,o.jsx)(e.p,{children:"Here's the TL;DR version:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"long number = 123456789L;\n     \nString strValue1 = String.valueOf(number);\n\nString strValue2 = Long.toString(number);\n"})}),"\n",(0,o.jsx)(e.p,{children:"Easy, right? Now, let\u2019s break it down. \ud83d\udee0\ufe0f"}),"\n",(0,o.jsx)(e.hr,{}),"\n",(0,o.jsxs)(e.h2,{id:"1\ufe0f\u20e3-using-stringvalueof",children:["1\ufe0f\u20e3 Using ",(0,o.jsx)(e.code,{children:"String.valueOf()"})]}),"\n",(0,o.jsxs)(e.p,{children:["The ",(0,o.jsx)(e.strong,{children:(0,o.jsx)(e.code,{children:"String.valueOf()"})})," method is your go-to if you want a quick and reliable way to get the ",(0,o.jsx)(e.code,{children:"String"})," version of your long number. It does all the heavy lifting for you behind the scenes."]}),"\n",(0,o.jsx)(e.h3,{id:"-example",children:"\ud83d\udccc Example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"long number = 123456789L;\n\nString strValue = String.valueOf(number); // long to String conversion\n\n// Verify the result\nSystem.out.println(strValue); // Output: 123456789\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\ud83d\udca1 ",(0,o.jsx)(e.strong,{children:"Fun fact:"})," This method internally calls ",(0,o.jsx)(e.code,{children:"Long.toString(long)"}),", so it's basically a wrapper for the next method! \ud83c\udfc6"]}),"\n",(0,o.jsx)(e.hr,{}),"\n",(0,o.jsxs)(e.h2,{id:"2\ufe0f\u20e3-using-longtostring",children:["2\ufe0f\u20e3 Using ",(0,o.jsx)(e.code,{children:"Long.toString()"})]}),"\n",(0,o.jsxs)(e.p,{children:["Prefer calling the ",(0,o.jsx)(e.strong,{children:(0,o.jsx)(e.code,{children:"Long.toString()"})})," method directly? No problem! This method gets the job done just as efficiently. \ud83c\udfaf"]}),"\n",(0,o.jsx)(e.h3,{id:"-example-1",children:"\ud83d\udccc Example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:"long number = 123456789L;\n\nString strValue = Long.toString(number); // long to String conversion\n\n// Verify the result\nSystem.out.println(strValue); // Output: 123456789\n"})}),"\n",(0,o.jsxs)(e.p,{children:["\ud83d\udea8 ",(0,o.jsx)(e.strong,{children:"Warning:"})," If the long value is ",(0,o.jsx)(e.code,{children:"null"}),", ",(0,o.jsx)(e.code,{children:"Long.toString()"})," might throw a ",(0,o.jsx)(e.code,{children:"NullPointerException"}),", but hey, you're working with primitives, so no worries there!"]}),"\n",(0,o.jsx)(e.hr,{}),"\n",(0,o.jsx)(e.h2,{id:"-wrapping-up",children:"\ud83c\udfaf Wrapping Up"}),"\n",(0,o.jsxs)(e.p,{children:["Both methods will get you the same result, so pick whichever one you like! Whether you prefer the versatile ",(0,o.jsx)(e.code,{children:"String.valueOf()"})," or the direct ",(0,o.jsx)(e.code,{children:"Long.toString()"}),", you're now officially a pro at long-to-string conversions in Java! \ud83c\udf89"]}),"\n",(0,o.jsxs)(e.p,{children:["\ud83d\udc49 Want to learn the reverse? Check out ",(0,o.jsxs)(e.strong,{children:["how to ",(0,o.jsx)(e.a,{href:"/foss-guru/community/kits/java/Java%20Strings/Conversions/string-to-long",children:"convert a String to Long"})," in Java"]}),"!"]}),"\n",(0,o.jsx)(e.p,{children:"\ud83d\udd17 Happy Coding & Keep Learning! \ud83d\ude80\ud83d\udd25"})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}},4769:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/banner-java-icon-0ae50e2293ff72244732cfbb42e27ed7.png"},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>a});var i=t(6540);const o={},r=i.createContext(o);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);