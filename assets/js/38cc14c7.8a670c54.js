"use strict";(self.webpackChunkfoss_guru=self.webpackChunkfoss_guru||[]).push([[5329],{2382:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"kits/python/Python DataTypes/tuple","title":"Python Tuples","description":"In Pyhton, a tuple is similar to list except it is immutable and are written with optional round brackets.","source":"@site/community/kits/python/Python DataTypes/tuple.md","sourceDirName":"kits/python/Python DataTypes","slug":"/kits/python/Python DataTypes/tuple","permalink":"/foss-guru/community/kits/python/Python DataTypes/tuple","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"tuple","title":"Python Tuples","description":"In Pyhton, a tuple is similar to list except it is immutable and are written with optional round brackets.","sidebar_position":4},"sidebar":"community","previous":{"title":"Python Lists","permalink":"/foss-guru/community/kits/python/Python DataTypes/list"},"next":{"title":"Python Set","permalink":"/foss-guru/community/kits/python/Python DataTypes/set"}}');var s=t(4848),l=t(8453);const r={id:"tuple",title:"Python Tuples",description:"In Pyhton, a tuple is similar to list except it is immutable and are written with optional round brackets.",sidebar_position:4},o=void 0,a={},c=[{value:"\ud83d\udc0d Python Tuples: The Chill Cousins of Lists \ud83c\udf89",id:"-python-tuples-the-chill-cousins-of-lists-",level:2},{value:"\ud83c\udfac 1. Creating a Tuple",id:"-1-creating-a-tuple",level:2},{value:"\ud83c\udfaf 1.1. Tuple with One Item",id:"-11-tuple-with-one-item",level:3},{value:"\ud83c\udf81 1.2. Nested Tuples",id:"-12-nested-tuples",level:3},{value:"\ud83d\udd0d 2. Accessing Tuple Items",id:"-2-accessing-tuple-items",level:2},{value:"\ud83d\udd04 3. Looping through Tuples",id:"-3-looping-through-tuples",level:2},{value:"\u2753 4. Existence Check",id:"-4-existence-check",level:2},{value:"\ud83e\uddfc 5. Sorting a Tuple",id:"-5-sorting-a-tuple",level:2},{value:"\ud83d\udd01 6. Repetition &amp; Concatenation",id:"-6-repetition--concatenation",level:2},{value:"\ud83c\udf81 7. Packing &amp; Unpacking Tuples",id:"-7-packing--unpacking-tuples",level:2},{value:"\ud83d\udc69\u200d\ud83d\udd2c 8. Named Tuples (Supercharged Tuples!)",id:"-8-named-tuples-supercharged-tuples",level:2},{value:"\ud83d\udee0\ufe0f 9. Tuple Utility Methods",id:"\ufe0f-9-tuple-utility-methods",level:2},{value:"\u2705 9.1 <code>any()</code>",id:"-91-any",level:3},{value:"\ud83c\udfc6 9.2 <code>min()</code> &amp; 9.3 <code>max()</code>",id:"-92-min--93-max",level:3},{value:"\ud83d\udccf 9.4 <code>len()</code>",id:"-94-len",level:3},{value:"\u2795 9.5 <code>sum()</code>",id:"-95-sum",level:3},{value:"\ud83c\udf89 10. Conclusion",id:"-10-conclusion",level:2}];function p(e){const n={blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"banner-python",src:t(7523).A+"",width:"240",height:"240"})}),"\n",(0,s.jsx)(n.h2,{id:"-python-tuples-the-chill-cousins-of-lists-",children:"\ud83d\udc0d Python Tuples: The Chill Cousins of Lists \ud83c\udf89"}),"\n",(0,s.jsx)(n.p,{children:"In Python-land, a tuple is like that chill friend who doesn\u2019t change their mind. Think of it as a list\u2026 but with a \u201cdo not disturb\u201d sign! \ud83d\udeab\u270f\ufe0f"}),"\n",(0,s.jsx)(n.p,{children:"Tuples are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u2705 ",(0,s.jsx)(n.strong,{children:"Immutable"})," (Once you make it, you can't shake it!)"]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udcda ",(0,s.jsx)(n.strong,{children:"Ordered"})," (It remembers its position)"]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83c\udfad ",(0,s.jsx)(n.strong,{children:"Heterogeneous"})," (Mix 'n match any data types!)"]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83d\udd22 ",(0,s.jsx)(n.strong,{children:"Indexed"})," (Starts at 0, as usual)"]}),"\n",(0,s.jsxs)(n.li,{children:["\ud83e\udd5a ",(0,s.jsx)(n.strong,{children:"(Optionally) Parenthesized"})," (Parentheses are optional, but preferred \u2013 like wearing socks with shoes)"]}),"\n",(0,s.jsxs)(n.li,{children:["\u26a1 ",(0,s.jsx)(n.strong,{children:"Fast"})," when looping (because they\u2019re low-maintenance)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Tuples are great when you want to pack related stuff together like... employee info! \ud83d\udc69\u200d\ud83d\udcbc\ud83d\udc68\u200d\ud83d\udcbc"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-1-creating-a-tuple",children:"\ud83c\udfac 1. Creating a Tuple"}),"\n",(0,s.jsx)(n.p,{children:"Let\u2019s roll!"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'tuple1 = ()  # empty tuple\ntuple2 = (1, "2", 3.0)\ntuple3 = 1, "2", 3.0  # parentheses are optional\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"-11-tuple-with-one-item",children:"\ud83c\udfaf 1.1. Tuple with One Item"}),"\n",(0,s.jsx)(n.p,{children:"Beware: Without a trailing comma, Python thinks you're just being dramatic with brackets!"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'not_a_tuple = ("hello")      # Just a string\ntuple_with_one = ("hello",)  # Now that\u2019s a tuple!\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"-12-nested-tuples",children:"\ud83c\udf81 1.2. Nested Tuples"}),"\n",(0,s.jsx)(n.p,{children:"Tuples within tuples \u2014 like inception but in Python."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'nested_tuple = ("hello", ("python", "world"))\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-2-accessing-tuple-items",children:"\ud83d\udd0d 2. Accessing Tuple Items"}),"\n",(0,s.jsx)(n.p,{children:"Use indices inside square brackets. Python\u2019s counting starts at zero. Let\u2019s do a mini treasure hunt! \ud83d\uddfa\ufe0f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'Tuple = ("a", "b", "c", "d", "e", "f")\n\nprint(Tuple[0])    # \'a\'\nprint(Tuple[-1])   # \'f\'\nprint(Tuple[0:3])  # (\'a\', \'b\', \'c\')\n\nTuple = ("a", "b", "c", ("d", "e", "f"))\nprint(Tuple[3][1])  # \'e\'\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-3-looping-through-tuples",children:"\ud83d\udd04 3. Looping through Tuples"}),"\n",(0,s.jsx)(n.p,{children:"Simple as pie \ud83e\udd67"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'Tuple = ("a", "b", "c")\n\nfor item in Tuple:\n    print(item)\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-4-existence-check",children:"\u2753 4. Existence Check"}),"\n",(0,s.jsxs)(n.p,{children:["Check if an item exists with ",(0,s.jsx)(n.code,{children:"in"})," or ",(0,s.jsx)(n.code,{children:"not in"})," \u2013 your tuple\u2019s bouncer at the club \ud83d\udeb7"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'Tuple = ("a", "b", "c")\n\nif "a" in Tuple:\n    print("Yup, \'a\' is in the house!")\n\nif "x" not in Tuple:\n    print("\'x\' got denied at the tuple-door.")\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-5-sorting-a-tuple",children:"\ud83e\uddfc 5. Sorting a Tuple"}),"\n",(0,s.jsxs)(n.p,{children:["Want to sort your tuple? Use ",(0,s.jsx)(n.code,{children:"sorted()"})," to keep things neat (note: returns a list, not a tuple!)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Tuple = (\"a\", \"c\", \"b\", \"e\", \"d\")\n\nsortedTuple = sorted(Tuple)\nprint(sortedTuple)  # ['a', 'b', 'c', 'd', 'e']\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-6-repetition--concatenation",children:"\ud83d\udd01 6. Repetition & Concatenation"}),"\n",(0,s.jsx)(n.p,{children:"Multiply or add tuples like a magician \ud83c\udfa9\u2728"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Tuple = (\"a\", \"b\")\nprint(Tuple * 3)  # ('a', 'b', 'a', 'b', 'a', 'b')\n\nTuple1 = (\"a\", \"b\")\nTuple2 = (\"c\", \"d\")\nprint(Tuple1 + Tuple2)  # ('a', 'b', 'c', 'd')\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-7-packing--unpacking-tuples",children:"\ud83c\udf81 7. Packing & Unpacking Tuples"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Packing"}),": wrapping gifts \ud83c\udf81",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Unpacking"}),": opening them \ud83c\udf89"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Tuple = (\"a\", \"b\", \"c\")  # Packing\n\nx, y, z = Tuple          # Unpacking\nprint(x)  # 'a'\nprint(y)  # 'b'\nprint(z)  # 'c'\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u26a0\ufe0f Warning: Mismatched items will throw a tantrum (a.k.a. ValueError)"}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-8-named-tuples-supercharged-tuples",children:"\ud83d\udc69\u200d\ud83d\udd2c 8. Named Tuples (Supercharged Tuples!)"}),"\n",(0,s.jsxs)(n.p,{children:["NamedTuples from ",(0,s.jsx)(n.code,{children:"collections"})," are like tuples with name tags! \ud83d\udcbc"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import collections\n\nRecord = collections.namedtuple('Record', ['id', 'name', 'date'])\n\nr1 = Record('1', 'RecordName', '12/12/2020')\n\nprint(r1[0])       # '1'\nprint(r1.name)     # 'RecordName'\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\ufe0f-9-tuple-utility-methods",children:"\ud83d\udee0\ufe0f 9. Tuple Utility Methods"}),"\n",(0,s.jsx)(n.p,{children:"Let\u2019s bring out the tuple toolbox \ud83e\uddf0"}),"\n",(0,s.jsxs)(n.h3,{id:"-91-any",children:["\u2705 9.1 ",(0,s.jsx)(n.code,{children:"any()"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"print(any(()))         # False\nprint(any((1,)))       # True\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"-92-min--93-max",children:["\ud83c\udfc6 9.2 ",(0,s.jsx)(n.code,{children:"min()"})," & 9.3 ",(0,s.jsx)(n.code,{children:"max()"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"Tuple = (4, 1, 9)\nprint(min(Tuple))      # 1\nprint(max(Tuple))      # 9\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"-94-len",children:["\ud83d\udccf 9.4 ",(0,s.jsx)(n.code,{children:"len()"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"print(len(Tuple))      # 3\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"-95-sum",children:["\u2795 9.5 ",(0,s.jsx)(n.code,{children:"sum()"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"print(sum(Tuple))      # 14\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-10-conclusion",children:"\ud83c\udf89 10. Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"Tuples are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ud83e\uddf1 Immutable (can\u2019t be changed)"}),"\n",(0,s.jsx)(n.li,{children:"\ud83e\udde0 Ordered and Indexed"}),"\n",(0,s.jsx)(n.li,{children:"\ud83c\udfa8 Heterogeneous"}),"\n",(0,s.jsx)(n.li,{children:"\ud83d\ude80 Faster for iteration"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["NamedTuples = Tuples + Superpowers.",(0,s.jsx)(n.br,{}),"\n","Tuples = Lists but stricter, faster, and cooler \ud83d\ude0e"]}),"\n",(0,s.jsx)(n.p,{children:"Happy Tuple-ing! \ud83d\udc0d\ud83c\udf88"})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},7523:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,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"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);