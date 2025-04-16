"use strict";(self.webpackChunkfoss_guru=self.webpackChunkfoss_guru||[]).push([[5098],{2097:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"kits/python/Python DataTypes/strings","title":"Python Strings","description":"Learn about Python string datatype and its functions. Learn how to format, align, find length and other such useful programs and exercises.","source":"@site/community/kits/python/Python DataTypes/strings.md","sourceDirName":"kits/python/Python DataTypes","slug":"/kits/python/Python DataTypes/strings","permalink":"/foss-guru/community/kits/python/Python DataTypes/strings","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"strings","title":"Python Strings","description":"Learn about Python string datatype and its functions. Learn how to format, align, find length and other such useful programs and exercises.","sidebar_position":2},"sidebar":"community","previous":{"title":"Python Integer (with Examples)","permalink":"/foss-guru/community/kits/python/Python DataTypes/integer"},"next":{"title":"Python Lists","permalink":"/foss-guru/community/kits/python/Python DataTypes/list"}}');var t=i(4848),r=i(8453);const l={id:"strings",title:"Python Strings",description:"Learn about Python string datatype and its functions. Learn how to format, align, find length and other such useful programs and exercises.",sidebar_position:2},a=void 0,d={},o=[{value:"\ud83d\udc0d Python Strings: The Fun-Filled Guide You Didn&#39;t Know You Needed \ud83c\udf89",id:"-python-strings-the-fun-filled-guide-you-didnt-know-you-needed-",level:2},{value:"1. \ud83c\udf88 Creating a String",id:"1--creating-a-string",level:2},{value:"2. \u2702\ufe0f Substring or Slicing",id:"2-\ufe0f-substring-or-slicing",level:2},{value:"3. \ud83c\udfaf Strings as Arrays",id:"3--strings-as-arrays",level:2},{value:"4. \ud83d\udccf String Length",id:"4--string-length",level:2},{value:"5. \ud83d\udc85 String Formatting",id:"5--string-formatting",level:2},{value:"6. \ud83d\udee0\ufe0f String Methods",id:"6-\ufe0f-string-methods",level:2},{value:"6.1. <code>capitalize()</code>",id:"61-capitalize",level:3},{value:"6.2. <code>casefold()</code>",id:"62-casefold",level:3},{value:"6.3. <code>center()</code>",id:"63-center",level:3},{value:"6.4. <code>count()</code>",id:"64-count",level:3},{value:"6.5. <code>encode()</code>",id:"65-encode",level:3},{value:"6.6. <code>endswith()</code>",id:"66-endswith",level:3},{value:"6.7. <code>expandtabs()</code>",id:"67-expandtabs",level:3},{value:"6.8. <code>find()</code>",id:"68-find",level:3},{value:"6.9. <code>format()</code>",id:"69-format",level:3},{value:"6.10. <code>format_map()</code>",id:"610-format_map",level:3},{value:"6.11. <code>index()</code>",id:"611-index",level:3},{value:"6.12. <code>isalnum()</code>",id:"612-isalnum",level:3},{value:"6.13. <code>isalpha()</code>",id:"613-isalpha",level:3},{value:"6.14. <code>isdecimal()</code>",id:"614-isdecimal",level:3},{value:"6.15. <code>isdigit()</code>",id:"615-isdigit",level:3},{value:"6.16. <code>isidentifier()</code>",id:"616-isidentifier",level:3},{value:"6.17. <code>islower()</code>",id:"617-islower",level:3},{value:"6.18. <code>isnumeric()</code>",id:"618-isnumeric",level:3},{value:"6.19. <code>isprintable()</code>",id:"619-isprintable",level:3},{value:"6.20. <code>isspace()</code>",id:"620-isspace",level:3},{value:"6.21. <code>istitle()</code>",id:"621-istitle",level:3},{value:"6.22. <code>isupper()</code>",id:"622-isupper",level:3},{value:"6.23. <code>join()</code>",id:"623-join",level:3},{value:"6.24. <code>ljust()</code>",id:"624-ljust",level:3},{value:"\ud83c\udfc1 Conclusion",id:"-conclusion",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"banner-python",src:i(7523).A+"",width:"240",height:"240"})}),"\n",(0,t.jsxs)(n.p,{children:["Sure! Here's a more fun, witty, and engaging version of your Python Strings guide \u2014 in ",(0,t.jsx)(n.strong,{children:"Markdown format"})," \u2014 keeping ",(0,t.jsx)(n.strong,{children:"all examples unchanged"}),". Ready for some string theory (without the physics)? \ud83d\ude04"]}),"\n",(0,t.jsx)(n.h2,{id:"-python-strings-the-fun-filled-guide-you-didnt-know-you-needed-",children:"\ud83d\udc0d Python Strings: The Fun-Filled Guide You Didn't Know You Needed \ud83c\udf89"}),"\n",(0,t.jsxs)(n.p,{children:["Welcome to the magical land of Python strings \u2014 where characters party together and do amazing things! \u2728 Whether you're slicing, dicing, or formatting strings, this guide has got your back with jokes, clarity, and examples that just ",(0,t.jsx)(n.em,{children:"click"}),". Let's dive in!"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"1--creating-a-string",children:"1. \ud83c\udf88 Creating a String"}),"\n",(0,t.jsx)(n.p,{children:"Strings in Python are like the cool kids \u2014 flexible, expressive, and super useful."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"They're made of Unicode characters. Fancy, huh?"}),"\n",(0,t.jsxs)(n.li,{children:["They can be wrapped in ",(0,t.jsx)(n.strong,{children:"single quotes"})," ",(0,t.jsx)(n.code,{children:"'"})," or ",(0,t.jsx)(n.strong,{children:"double quotes"})," ",(0,t.jsx)(n.code,{children:'"'})," (Python doesn't play favorites)."]}),"\n",(0,t.jsxs)(n.li,{children:["You can write entire novels because there\u2019s ",(0,t.jsx)(n.em,{children:"no limit"})," to the length."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"str = 'hello world'\nstr = \"hello world\"\n"})}),"\n",(0,t.jsx)(n.p,{children:"Need a string that spans lines like Shakespeare's sonnets? Use triple quotes!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"str = '''Say hello\n  to python\n  programming'''\n\nstr = \"\"\"Say hello\n  to python\n  programming\"\"\"\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u26a0\ufe0f Fun fact: Python doesn\u2019t have a ",(0,t.jsx)(n.code,{children:"char"})," type. Even ",(0,t.jsx)(n.code,{children:"'a'"})," is a string. Talk about commitment to string life!"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"2-\ufe0f-substring-or-slicing",children:"2. \u2702\ufe0f Substring or Slicing"}),"\n",(0,t.jsx)(n.p,{children:"Want just a slice of the string pie? Use slicing!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"str = 'hello world'\nprint(str[2:5])  # llo\n"})}),"\n",(0,t.jsx)(n.p,{children:"Feeling a bit negative? Use negative indexing to slice from the back like a string ninja:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"print(str[-5:-2])  # wor\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"3--strings-as-arrays",children:"3. \ud83c\udfaf Strings as Arrays"}),"\n",(0,t.jsx)(n.p,{children:"Treat strings like arrays! That\u2019s right \u2014 you can access characters with brackets."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"str = 'hello world'\nprint(str[0])  # h\nprint(str[1])  # e\nprint(str[2])  # l\n"})}),"\n",(0,t.jsx)(n.p,{children:"But don\u2019t get too bold:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"print(str[20])  # IndexError: string index out of range\n"})}),"\n",(0,t.jsx)(n.p,{children:"Oops \ud83d\ude05"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"4--string-length",children:"4. \ud83d\udccf String Length"}),"\n",(0,t.jsxs)(n.p,{children:["Measure your string's length like a pro tailor with ",(0,t.jsx)(n.code,{children:"len()"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"str = 'hello world'\nprint(len(str))  # 11\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"5--string-formatting",children:"5. \ud83d\udc85 String Formatting"}),"\n",(0,t.jsxs)(n.p,{children:["Add some pizzazz with placeholders ",(0,t.jsx)(n.code,{children:"{}"})," and ",(0,t.jsx)(n.code,{children:"format()"}),"!"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"age = 36\nname = 'Lokesh'\ntxt = \"My name is {} and my age is {}\"\nprint(txt.format(name, age))  # My name is Lokesh and my age is 36\n"})}),"\n",(0,t.jsx)(n.p,{children:"Positional arguments? Python\u2019s got you:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'txt = "My age is {1} and the name is {0}"\nprint(txt.format(name, age))  # My age is 36 and the name is Lokesh\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"6-\ufe0f-string-methods",children:"6. \ud83d\udee0\ufe0f String Methods"}),"\n",(0,t.jsxs)(n.h3,{id:"61-capitalize",children:["6.1. ",(0,t.jsx)(n.code,{children:"capitalize()"})]}),"\n",(0,t.jsxs)(n.p,{children:["Because ",(0,t.jsx)(n.em,{children:"everyone"})," deserves to feel important:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"name = 'lokesh gupta'\nprint(name.capitalize())  # Lokesh gupta\n\ntxt = '38 yrs old lokesh gupta'\nprint(txt.capitalize())  # 38 yrs old lokesh gupta\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"62-casefold",children:["6.2. ",(0,t.jsx)(n.code,{children:"casefold()"})]}),"\n",(0,t.jsxs)(n.p,{children:["Turns ",(0,t.jsx)(n.em,{children:"ANYTHING"})," lowercase \u2014 even uppercase rage:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"txt = 'My Name is Lokesh Gupta'\nprint(txt.casefold())  # my name is lokesh gupta\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"63-center",children:["6.3. ",(0,t.jsx)(n.code,{children:"center()"})]}),"\n",(0,t.jsx)(n.p,{children:"Line up and look sharp, string! \ud83c\udfaf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"txt = \"hello world\"\nx = txt.center(20)\nprint(x)  # '    hello world     '\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"64-count",children:["6.4. ",(0,t.jsx)(n.code,{children:"count()"})]}),"\n",(0,t.jsx)(n.p,{children:"How often does a letter appear? Let\u2019s count 'em:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'txt = "hello world"\nprint(txt.count("o"))         # 2\nprint(txt.count("o", 4, 7))   # 1\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"65-encode",children:["6.5. ",(0,t.jsx)(n.code,{children:"encode()"})]}),"\n",(0,t.jsx)(n.p,{children:"Speak computer? This one translates your string:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"txt = \"My name is \xe5mber\"\nx = txt.encode()\nprint(x)  # b'My name is \\xc3\\xa5mber'\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"66-endswith",children:["6.6. ",(0,t.jsx)(n.code,{children:"endswith()"})]}),"\n",(0,t.jsx)(n.p,{children:"Check how your string signs off:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'txt = "hello world"\nprint(txt.endswith("world"))   # True\nprint(txt.endswith("planet"))  # False\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"67-expandtabs",children:["6.7. ",(0,t.jsx)(n.code,{children:"expandtabs()"})]}),"\n",(0,t.jsx)(n.p,{children:"Tabs getting out of hand? Reign them in!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"txt = \"hello\\tworld\"\nprint(txt.expandtabs(2))   # 'hello world'\nprint(txt.expandtabs(4))   # 'hello   world'\nprint(txt.expandtabs(16))  # 'hello           world'\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"68-find",children:["6.8. ",(0,t.jsx)(n.code,{children:"find()"})]}),"\n",(0,t.jsx)(n.p,{children:"Like playing hide-and-seek with characters:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'txt = "My name is Lokesh Gupta"\nx = txt.find("e")\nprint(x)  # 6\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"69-format",children:["6.9. ",(0,t.jsx)(n.code,{children:"format()"})]}),"\n",(0,t.jsx)(n.p,{children:"Same magic as earlier \u2014 insert values smoothly."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"age = 36\nname = 'Lokesh'\ntxt = \"My name is {} and my age is {}\"\nprint(txt.format(name, age))\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"610-format_map",children:["6.10. ",(0,t.jsx)(n.code,{children:"format_map()"})]}),"\n",(0,t.jsx)(n.p,{children:"Use a dictionary like a formatting wizard \ud83e\uddd9:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"params = {'name':'Lokesh Gupta', 'age':'38'} \ntxt = \"My name is {name} and age is {age}\"\nx = txt.format_map(params)\nprint(x)\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"611-index",children:["6.11. ",(0,t.jsx)(n.code,{children:"index()"})]}),"\n",(0,t.jsxs)(n.p,{children:["Like ",(0,t.jsx)(n.code,{children:"find()"})," but with a temper (throws errors when not found):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'txt = "My name is Lokesh Gupta"\nprint(txt.index("e"))  # 6\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'txt.index("z")  # ValueError: substring not found\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"612-isalnum",children:["6.12. ",(0,t.jsx)(n.code,{children:"isalnum()"})]}),"\n",(0,t.jsx)(n.p,{children:"Letters + numbers = \u2705"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'print("LokeshGupta".isalnum())     # True\nprint("Lokesh Gupta".isalnum())    # False\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"613-isalpha",children:["6.13. ",(0,t.jsx)(n.code,{children:"isalpha()"})]}),"\n",(0,t.jsx)(n.p,{children:"All alphabets, all the time:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'print("LokeshGupta".isalpha())       # True\nprint("Lokesh Gupta".isalpha())      # False\nprint("LokeshGupta38".isalpha())     # False\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"614-isdecimal",children:["6.14. ",(0,t.jsx)(n.code,{children:"isdecimal()"})]}),"\n",(0,t.jsx)(n.p,{children:"Strictly digits \u2014 no decimals allowed here! \ud83d\udeab"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'print("12345".isdecimal())      # True\nprint("123.45".isdecimal())     # False\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"615-isdigit",children:["6.15. ",(0,t.jsx)(n.code,{children:"isdigit()"})]}),"\n",(0,t.jsxs)(n.p,{children:["More flexible than ",(0,t.jsx)(n.code,{children:"isdecimal()"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'print("12345".isdigit())        # True\nprint("1234\\u00B2".isdigit())   # True\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"616-isidentifier",children:["6.16. ",(0,t.jsx)(n.code,{children:"isidentifier()"})]}),"\n",(0,t.jsx)(n.p,{children:"Want a legit variable name? Check it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'print("Lokesh_Gupta_38".isidentifier())    # True\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"617-islower",children:["6.17. ",(0,t.jsx)(n.code,{children:"islower()"})]}),"\n",(0,t.jsx)(n.p,{children:"All lowercase? Say no more:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'print("lokesh_gupta".islower())  # True\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"618-isnumeric",children:["6.18. ",(0,t.jsx)(n.code,{children:"isnumeric()"})]}),"\n",(0,t.jsx)(n.p,{children:"Even exponents and Unicode numerals are welcome here:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'print("1234\\u00B2".isnumeric())  # True\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"619-isprintable",children:["6.19. ",(0,t.jsx)(n.code,{children:"isprintable()"})]}),"\n",(0,t.jsx)(n.p,{children:"Can your string make it to a printed page?"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'print("Lokesh\\tGupta".isprintable())  # False\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"620-isspace",children:["6.20. ",(0,t.jsx)(n.code,{children:"isspace()"})]}),"\n",(0,t.jsx)(n.p,{children:"Only spaces? Yup, it's a thing."}),"\n",(0,t.jsxs)(n.h3,{id:"621-istitle",children:["6.21. ",(0,t.jsx)(n.code,{children:"istitle()"})]}),"\n",(0,t.jsx)(n.p,{children:"Title Case \u2014 like a book title:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'print("Lokesh Gupta".istitle())  # True\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"622-isupper",children:["6.22. ",(0,t.jsx)(n.code,{children:"isupper()"})]}),"\n",(0,t.jsx)(n.p,{children:"All caps? SHOUTING? You bet."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'print("LOKESH GUPTA".isupper())  # True\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"623-join",children:["6.23. ",(0,t.jsx)(n.code,{children:"join()"})]}),"\n",(0,t.jsx)(n.p,{children:"Join the string gang with a cool separator:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'myTuple = ("Lokesh", "Gupta", "38")\nx = "#".join(myTuple)\nprint(x)  # Lokesh#Gupta#38\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"624-ljust",children:["6.24. ",(0,t.jsx)(n.code,{children:"ljust()"})]}),"\n",(0,t.jsx)(n.p,{children:"Left-align like a polite string:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'txt = "lokesh"\nx = txt.ljust(20, "-")\nprint(x)  # lokesh--------------\n'})}),"\n",(0,t.jsx)(n.p,{children:"(\ud83c\udf89 End of this wacky, wonderful string ride!)"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"-conclusion",children:"\ud83c\udfc1 Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"Strings in Python are more than just words \u2014 they're tools, toys, and treasures waiting to be explored. So keep slicing, formatting, and playing around. After all, code should be fun! \ud83e\uddd1\u200d\ud83d\udcbb\ud83d\udc83"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},7523:(e,n,i)=>{i.d(n,{A:()=>s});const s="data:image/png;base64,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"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);