"use strict";(self.webpackChunkreplibyte=self.webpackChunkreplibyte||[]).push([[366],{3905:function(e,n,a){a.d(n,{Zo:function(){return p},kt:function(){return d}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=t.createContext({}),i=function(e){var n=t.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},p=function(e){var n=i(e.components);return t.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=i(a),d=r,f=u["".concat(m,".").concat(d)]||u[d]||c[d]||l;return a?t.createElement(f,s(s({ref:n},p),{},{components:a})):t.createElement(f,s({ref:n},p))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9873:function(e,n,a){a.r(n),a.d(n,{assets:function(){return p},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var t=a(7462),r=a(3366),l=(a(7294),a(3905)),s=["components"],o={sidebar_position:7},m="Transformers",i={unversionedId:"transformers",id:"transformers",title:"Transformers",description:"A transformer is useful to change/hide the value of a specified column. Replibyte provides pre-made transformers. You can also build your own Transformer in web assembly.",source:"@site/docs/transformers.md",sourceDirName:".",slug:"/transformers",permalink:"/docs/transformers",editUrl:"https://github.com/Qovery/replibyte/tree/main/website/docs/transformers.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Datastores",permalink:"/docs/datastores"},next:{title:"I. Create a dump",permalink:"/docs/guides/create-a-dump"}},p={},c=[{value:"Random",id:"random",level:2},{value:"Examples",id:"examples",level:3},{value:"First name",id:"first-name",level:2},{value:"Examples",id:"examples-1",level:3},{value:"Email",id:"email",level:2},{value:"Examples",id:"examples-2",level:3},{value:"Keep first character",id:"keep-first-character",level:2},{value:"Examples",id:"examples-3",level:3},{value:"Phone number",id:"phone-number",level:2},{value:"Examples",id:"examples-4",level:3},{value:"Credit-card",id:"credit-card",level:2},{value:"Examples",id:"examples-5",level:3},{value:"Redacted",id:"redacted",level:2},{value:"Examples",id:"examples-6",level:3},{value:"Transient",id:"transient",level:2},{value:"Custom with Web Assembly (wasm)",id:"custom-with-web-assembly-wasm",level:2}],u={toc:c};function d(e){var n=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"transformers"},"Transformers"),(0,l.kt)("p",null,"A transformer is useful to change/hide the value of a specified column. Replibyte provides pre-made transformers. You can also ",(0,l.kt)("a",{parentName:"p",href:"#wasm"},"build your own Transformer in web assembly"),"."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Examples are with SQL input and output to reflect the change made by the transformer."))),(0,l.kt)("p",null,"To list the transformers available use"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"replibyte -c conf.yaml transformer list\n \n name            | description\n-----------------+--------------------------------------------------------------------------------------------\n email           | Generate an email address (string only). [john.doe@company.com]->[tony.stark@avengers.com]\n first-name      | Generate a first name (string only). [Lucas]->[Georges]\n phone-number    | Generate a phone number (string only).\n random          | Randomize value but keep the same length (string only). [AAA]->[BBB]\n keep-first-char | Keep only the first character of the column.\n transient       | Does not modify the value.\n credit-card     | Generate a credit card number (string only).\n redacted        | Obfuscate your sensitive data (string only). [4242 4242 4242 4242]->[424****************]\n ...\n")),(0,l.kt)("h2",{id:"random"},"Random"),(0,l.kt)("p",null,"Randomize value but keep the same length."),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  connection_uri: $DATABASE_URL\n  transformers:\n    - database: public\n      table: my_table\n      columns:\n        - name: description\n          transformer_name: random\n# ...\n")),(0,l.kt)("p",null,"SQL input:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO public.my_table (description) VALUE ('Hello World');\n")),(0,l.kt)("p",null,"SQL output:"),(0,l.kt)("p",null,"Random string value of the same length."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO public.my_table (description) VALUE ('Awdka Qdkqd');\n")),(0,l.kt)("h2",{id:"first-name"},"First name"),(0,l.kt)("p",null,"Generate a fake first name."),(0,l.kt)("h3",{id:"examples-1"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  connection_uri: $DATABASE_URL\n  transformers:\n    - database: public\n      table: my_table\n      columns:\n        - name: first_name\n          transformer_name: first-name\n# ...\n")),(0,l.kt)("p",null,"SQL input:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO public.my_table (first_name) VALUE ('Lucas');\n")),(0,l.kt)("p",null,"SQL output:"),(0,l.kt)("p",null,"Fake name from a dictionary of names."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO public.my_table (first_name) VALUE ('Georges');\n")),(0,l.kt)("h2",{id:"email"},"Email"),(0,l.kt)("p",null,"Replace the string value by a fake email address."),(0,l.kt)("h3",{id:"examples-2"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  connection_uri: $DATABASE_URL\n  transformers:\n    - database: public\n      table: my_table\n      columns:\n        - name: contact_email\n          transformer_name: email\n# ...\n")),(0,l.kt)("p",null,"SQL input:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO public.my_table (contact_email) VALUE ('tony.stark@random.com');\n")),(0,l.kt)("p",null,"SQL output:"),(0,l.kt)("p",null,"Fake name from a dictionary of names."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO public.my_table (contact_email) VALUE ('toto@domain.tld');\n")),(0,l.kt)("h2",{id:"keep-first-character"},"Keep first character"),(0,l.kt)("p",null,"Keep only the first character of the column."),(0,l.kt)("h3",{id:"examples-3"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  connection_uri: $DATABASE_URL\n  transformers:\n    - database: public\n      table: my_table\n      columns:\n        - name: first_name\n          transformer_name: keep-first-char\n# ...\n")),(0,l.kt)("p",null,"SQL input:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO public.my_table (first_name) VALUE ('Lucas');\n")),(0,l.kt)("p",null,"SQL output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO public.my_table (first_name) VALUE ('L');\n")),(0,l.kt)("h2",{id:"phone-number"},"Phone number"),(0,l.kt)("p",null,"Generate a phone number. (US only at the moment)"),(0,l.kt)("h3",{id:"examples-4"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  connection_uri: $DATABASE_URL\n  transformers:\n    - database: public\n      table: my_table\n      columns:\n        - name: contact_phone\n          transformer_name: phone-number\n# ...\n")),(0,l.kt)("p",null,"SQL input:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO public.my_table (contact_phone) VALUE ('+123456789');\n")),(0,l.kt)("p",null,"SQL output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO public.my_table (contact_phone) VALUE ('+356433821');\n")),(0,l.kt)("h2",{id:"credit-card"},"Credit-card"),(0,l.kt)("p",null,"Generate a credit card number"),(0,l.kt)("h3",{id:"examples-5"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  connection_uri: $DATABASE_URL\n  transformers:\n    - database: public\n      table: my_table\n      columns:\n        - name: payment_card\n          transformer_name: card-number\n# ...\n")),(0,l.kt)("p",null,"SQL input:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO public.my_table (payment_card) VALUE ('1234123412341234');\n")),(0,l.kt)("p",null,"SQL output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO public.my_table (payment_card) VALUE ('5678567856785678');\n")),(0,l.kt)("h2",{id:"redacted"},"Redacted"),(0,l.kt)("p",null,"Obfuscate your sensitive data."),(0,l.kt)("h3",{id:"examples-6"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  connection_uri: $DATABASE_URL\n  transformers:\n    - database: public\n      table: my_table\n      columns:\n        - name: payment_card\n          transformer_name: redacted\n# ...\n")),(0,l.kt)("p",null,"SQL input:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO public.my_table (payment_card) VALUE ('1234 1234 1234 1234');\n")),(0,l.kt)("p",null,"SQL output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO public.my_table (payment_card) VALUE ('1234***************');\n")),(0,l.kt)("h2",{id:"transient"},"Transient"),(0,l.kt)("p",null,"Does not change anything (good for testing purpose)"),(0,l.kt)("h2",{id:"custom-with-web-assembly-wasm"},"Custom with Web Assembly (wasm)"),(0,l.kt)("p",null,"Are you ready to get into the matrix? Take a look ",(0,l.kt)("a",{parentName:"p",href:"/docs/advanced-guides/web-assembly-transformer"},"here")," \ud83d\udc40"))}d.isMDXComponent=!0}}]);