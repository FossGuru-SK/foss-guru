"use strict";(self.webpackChunkfoss_guru=self.webpackChunkfoss_guru||[]).push([[1651],{5609:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"kits/java/Java Strings/Conversions/string-to-int","title":"Convert String to int in Java","description":"learned to parse a string (decimal, octal and hexadecimal) to int or Integer types using Integer.parseInt(), valueOf() and decode() methods.","source":"@site/community/kits/java/Java Strings/Conversions/string-to-int.md","sourceDirName":"kits/java/Java Strings/Conversions","slug":"/kits/java/Java Strings/Conversions/string-to-int","permalink":"/foss-guru/community/kits/java/Java Strings/Conversions/string-to-int","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"string-to-int","title":"Convert String to int in Java","description":"learned to parse a string (decimal, octal and hexadecimal) to int or Integer types using Integer.parseInt(), valueOf() and decode() methods.","sidebar_position":1},"sidebar":"community","previous":{"title":"Conversions","permalink":"/foss-guru/community/category/conversions"},"next":{"title":"Convert int to String in Java (with Performance Comparison)","permalink":"/foss-guru/community/kits/java/Java Strings/Conversions/int-to-string"}}');var i=s(4848),t=s(8453);const a={id:"string-to-int",title:"Convert String to int in Java",description:"learned to parse a string (decimal, octal and hexadecimal) to int or Integer types using Integer.parseInt(), valueOf() and decode() methods.",sidebar_position:1},o=void 0,c={},d=[{value:"\ud83d\ude80 Mastering Java String to int Conversion (The Fun Way!)",id:"-mastering-java-string-to-int-conversion-the-fun-way",level:2},{value:"1\ufe0f\u20e3 Using <code>Integer.parseInt()</code> (The Classic Way)",id:"1\ufe0f\u20e3-using-integerparseint-the-classic-way",level:2},{value:"\ud83d\udcdd Syntax",id:"-syntax",level:3},{value:"\u2728 Example Magic",id:"-example-magic",level:3},{value:"\u274c Beware of <code>NumberFormatException</code>",id:"-beware-of-numberformatexception",level:3},{value:"2\ufe0f\u20e3 Using <code>Integer.valueOf()</code> (The Cousin of <code>parseInt()</code>)",id:"2\ufe0f\u20e3-using-integervalueof-the-cousin-of-parseint",level:2},{value:"\ud83d\udd25 Example Fireworks",id:"-example-fireworks",level:3},{value:"3\ufe0f\u20e3 Using <code>Integer.decode()</code> (For the Fancy Number Nerds \ud83e\udd13)",id:"3\ufe0f\u20e3-using-integerdecode-for-the-fancy-number-nerds-",level:2},{value:"\ud83c\udfaf Example Conversions",id:"-example-conversions",level:3},{value:"\ud83c\udf89 Conclusion",id:"-conclusion",level:2}];function l(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Banner java icon",src:s(4769).A+"",width:"370",height:"364"})}),"\n",(0,i.jsx)(n.h2,{id:"-mastering-java-string-to-int-conversion-the-fun-way",children:"\ud83d\ude80 Mastering Java String to int Conversion (The Fun Way!)"}),"\n",(0,i.jsxs)(n.p,{children:["Ever found yourself staring at a ",(0,i.jsx)(n.code,{children:"String"})," and wishing it could magically transform into an ",(0,i.jsx)(n.code,{children:"int"}),"? Well, Java\u2019s got your back! Let's dive into the world of number conversions and make it a fun ride. \ud83c\udfa2"]}),"\n",(0,i.jsxs)(n.h2,{id:"1\ufe0f\u20e3-using-integerparseint-the-classic-way",children:["1\ufe0f\u20e3 Using ",(0,i.jsx)(n.code,{children:"Integer.parseInt()"})," (The Classic Way)"]}),"\n",(0,i.jsx)(n.h3,{id:"-syntax",children:"\ud83d\udcdd Syntax"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Integer.parseInt()"})," is like your reliable friend who always gets the job done. It takes a ",(0,i.jsx)(n.code,{children:"String"}),", chews it up (figuratively, of course), and spits out an ",(0,i.jsx)(n.code,{children:"int"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"It comes in three flavors:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public static int parseInt(String s) throws NumberFormatException { ... }\npublic static int parseInt(String s, int radix) throws NumberFormatException { ... }\npublic static int parseInt(String s, int beginIndex, int endIndex, int radix) throws NumberFormatException { ... }\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-example-magic",children:"\u2728 Example Magic"}),"\n",(0,i.jsx)(n.p,{children:"Let\u2019s turn some strings into integers like a Java wizard. \ud83e\uddd9\u200d\u2642\ufe0f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'Assertions.assertEquals(1001, Integer.parseInt("1001"));\nAssertions.assertEquals(513, Integer.parseInt("1001", 8));\nAssertions.assertEquals(1001, Integer.parseInt("amount=1001", 7, 11, 10));\n'})}),"\n",(0,i.jsx)(n.p,{children:"Cool, right? But wait\u2014there\u2019s a catch! \ud83d\udea8"}),"\n",(0,i.jsxs)(n.h3,{id:"-beware-of-numberformatexception",children:["\u274c Beware of ",(0,i.jsx)(n.code,{children:"NumberFormatException"})]}),"\n",(0,i.jsx)(n.p,{children:"Java is great, but it won't let you fool around with invalid numbers. If you try to pass nonsense, it'll throw a tantrum! \ud83d\ude21"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'Assertions.assertThrows(NumberFormatException.class, () -> {\n  Integer.parseInt(null);\n});\n\nAssertions.assertThrows(NumberFormatException.class, () -> {\n  Integer.parseInt("abc");\n});\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"2\ufe0f\u20e3-using-integervalueof-the-cousin-of-parseint",children:["2\ufe0f\u20e3 Using ",(0,i.jsx)(n.code,{children:"Integer.valueOf()"})," (The Cousin of ",(0,i.jsx)(n.code,{children:"parseInt()"}),")"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Integer.valueOf()"})," is basically ",(0,i.jsx)(n.code,{children:"parseInt()"}),", but it returns an ",(0,i.jsx)(n.code,{children:"Integer"})," object instead of a primitive ",(0,i.jsx)(n.code,{children:"int"}),". So, it\u2019s fancier. \ud83c\udfa9"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public static Integer valueOf(String s) throws NumberFormatException {...}\npublic static Integer valueOf(String s, int radix) throws NumberFormatException {...}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-example-fireworks",children:"\ud83d\udd25 Example Fireworks"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'Assertions.assertEquals(1001, Integer.valueOf("1001"));\nAssertions.assertEquals(513, Integer.valueOf("1001", 8));\n'})}),"\n",(0,i.jsx)(n.p,{children:"Oops, don't mess up the input! \ud83d\udea8"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'Assertions.assertThrows(NumberFormatException.class, () -> {\n  Integer.valueOf("abc");\n});\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"3\ufe0f\u20e3-using-integerdecode-for-the-fancy-number-nerds-",children:["3\ufe0f\u20e3 Using ",(0,i.jsx)(n.code,{children:"Integer.decode()"})," (For the Fancy Number Nerds \ud83e\udd13)"]}),"\n",(0,i.jsxs)(n.p,{children:["If you're dealing with different number formats like decimal, octal, or hexadecimal, ",(0,i.jsx)(n.code,{children:"Integer.decode()"})," is here to save the day! \ud83e\uddb8\u200d\u2642\ufe0f"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Decimal:"})," Just use numbers, optionally prefixed with ",(0,i.jsx)(n.code,{children:"+"})," or ",(0,i.jsx)(n.code,{children:"-"})," (e.g., ",(0,i.jsx)(n.code,{children:"+100"}),", ",(0,i.jsx)(n.code,{children:"-2022"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Octal:"})," Start with a ",(0,i.jsx)(n.code,{children:"0"})," (e.g., ",(0,i.jsx)(n.code,{children:"0404"}),", ",(0,i.jsx)(n.code,{children:"+0100"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Hexadecimal:"})," Start with ",(0,i.jsx)(n.code,{children:"0x"})," or ",(0,i.jsx)(n.code,{children:"0X"})," (e.g., ",(0,i.jsx)(n.code,{children:"0x334"}),", ",(0,i.jsx)(n.code,{children:"+0x100"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public static Integer decode(String s) throws NumberFormatException\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-example-conversions",children:"\ud83c\udfaf Example Conversions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'Assertions.assertEquals(100, Integer.decode("+100"));\nAssertions.assertEquals(64, Integer.decode("+0100"));\nAssertions.assertEquals(256, Integer.decode("+0x100"));\n'})}),"\n",(0,i.jsx)(n.p,{children:"Boom! Now you can handle numbers like a pro. \ud83d\udcaa"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"-conclusion",children:"\ud83c\udf89 Conclusion"}),"\n",(0,i.jsxs)(n.p,{children:["In this fun Java adventure, we:\n\u2705 Learned to convert a ",(0,i.jsx)(n.code,{children:"String"})," to ",(0,i.jsx)(n.code,{children:"int"})," using ",(0,i.jsx)(n.code,{children:"parseInt()"})," and ",(0,i.jsx)(n.code,{children:"valueOf()"}),".\n\u2705 Discovered ",(0,i.jsx)(n.code,{children:"decode()"})," for handling decimal, octal, and hexadecimal formats.\n\u2705 Realized Java doesn\u2019t like nonsense inputs (hello, ",(0,i.jsx)(n.code,{children:"NumberFormatException"}),"! \ud83d\udc4b)."]}),"\n",(0,i.jsx)(n.p,{children:"Now, go forth and convert your strings like a Java champion! \ud83c\udfc6"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Happy Coding! \ud83d\ude80\ud83d\ude03"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4769:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/banner-java-icon-0ae50e2293ff72244732cfbb42e27ed7.png"},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var r=s(6540);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);