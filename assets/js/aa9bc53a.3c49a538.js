"use strict";(self.webpackChunkreplibyte=self.webpackChunkreplibyte||[]).push([[450],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6283:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],u={title:"V. Delete a dump",sidebar_position:6},i="Delete a dump",p={unversionedId:"guides/delete-a-dump",id:"guides/delete-a-dump",title:"V. Delete a dump",description:"The backup delete command comes with 3 different deleting strategies.",source:"@site/docs/guides/5-delete-a-dump.md",sourceDirName:"guides",slug:"/guides/delete-a-dump",permalink:"/docs/guides/delete-a-dump",editUrl:"https://github.com/Qovery/replibyte/webiste/docs/guides/5-delete-a-dump.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"V. Delete a dump",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"IV. Subset a dump",permalink:"/docs/guides/subset-a-dump"},next:{title:"Deploy with Docker",permalink:"/docs/advanced-guides/deploy-with-docker"}},c={},s=[{value:"Delete by backup name",id:"delete-by-backup-name",level:2},{value:"Delete backups older than 2 days",id:"delete-backups-older-than-2-days",level:2},{value:"Keep only the last <code>10</code> backups",id:"keep-only-the-last-10-backups",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"delete-a-dump"},"Delete a dump"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"backup delete")," command comes with 3 different deleting strategies."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Delete a backup by its name"),(0,l.kt)("li",{parentName:"ol"},"Delete backups older than a specified number of days"),(0,l.kt)("li",{parentName:"ol"},"Keep only a maximum number of backups")),(0,l.kt)("h2",{id:"delete-by-backup-name"},"Delete by backup name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"replibyte -c prod-conf.yaml backup delete <BACKUP_NAME>\n")),(0,l.kt)("p",null,"This is the simplest strategy you can find."),(0,l.kt)("p",null,"The list of available backups can be retrieved by running the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"replibyte -c prod-conf.yaml backup list\n\ntype          name                    size    when                    compressed  encrypted\nPostgreSQL    backup-1647706359405    154MB   Yesterday at 03:00 am   true        true\nPostgreSQL    backup-1647731334517    152MB   2 days ago at 03:00 am  true        true\nPostgreSQL    backup-1647734369306    149MB   3 days ago at 03:00 am  true        true\n")),(0,l.kt)("h2",{id:"delete-backups-older-than-2-days"},"Delete backups older than 2 days"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"replibyte -c prod-conf.yaml backup delete --older-than=2d\n")),(0,l.kt)("p",null,"Only the day unit is supported for now, other units could come in the future."),(0,l.kt)("h2",{id:"keep-only-the-last-10-backups"},"Keep only the last ",(0,l.kt)("inlineCode",{parentName:"h2"},"10")," backups"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"replibyte -c prod-conf.yaml backup delete --keep-last=10\n")))}m.isMDXComponent=!0}}]);