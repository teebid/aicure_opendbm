"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[8349],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6386:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7378),r=n(8944),o="tabItem_wHwb",i=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function d({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},7789:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(7378),r=n(8944),o=n(4185),i=n(7886),l=n(7184),s=n(2112),u="tabList_J5MA",c="tabItem_l0OV",d=Object.defineProperty,p=Object.defineProperties,f=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&v(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&v(e,n,t[n]);return e};function g(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:b,groupId:h,className:v}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=null!=b?b:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,i.l)(w,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===m?m:null!=(n=null!=m?m:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==O&&!w.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:j,setTabGroupChoices:D}=(0,l.U)(),[T,P]=(0,a.useState)(O),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=h){const e=j[h];null!=e&&e!==T&&w.some((t=>t.value===e))&&P(e)}const E=e=>{const t=e.currentTarget,n=N.indexOf(t),a=w[n].value;a!==T&&(x(t),P(a),null!=h&&D(h,String(a)))},M=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;a=null!=(t=N[n])?t:N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=null!=(n=N[t])?n:N[N.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},v)},w.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(o=y({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>N.push(e),onKeyDown:M,onFocus:E,onClick:E},n),i={className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":T===e})},p(o,f(i))),null!=t?t:e);var o,i}))),o?(0,a.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function w(e){const t=(0,o.Z)();return a.createElement(g,y({key:String(t)},e))}},1674:function(e,t,n){var a=n(3445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",l=r?"macos":o?"windows":"linux";t.Z={defaultGuide:"dep-install",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",defaultAndroidLanguage:"java",javaScriptSpecLanguages:[{label:"Flow",value:"flow"},{label:"TypeScript",value:"typescript"}],defaultJavaScriptSpecLanguages:"flow",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),getLibraryNotesTabs:(e=["researchers","data_scientist","engineer"])=>[e.includes("researchers")?{label:"Researchers",value:"researchers"}:void 0,e.includes("data_scientist")?{label:"Data Sciencetist",value:"data_scientist"}:void 0,e.includes("engineer")?{label:"Python Engineer",value:"engineer"}:void 0].filter(Boolean),guides:[{label:"Install Dependencies",value:"dep-install"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}],androidLanguages:[{label:"Java",value:"java"},{label:"Kotlin",value:"kotlin"}]}},1191:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return g}});var a=n(5318),r=n(7789),o=n(6386),i=n(1674),l=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&f(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&f(e,n,t[n]);return e};const b={id:"getting-started",title:"Introduction",description:"This helpful guide lays out the prerequisites for learning OpenDBM, using these docs, and setting up your environment."},h=void 0,v={unversionedId:"getting-started",id:"getting-started",title:"Introduction",description:"This helpful guide lays out the prerequisites for learning OpenDBM, using these docs, and setting up your environment.",source:"@site/../docs/introduction.md",sourceDirName:".",slug:"/getting-started",permalink:"/aicure_opendbm/docs/next/getting-started",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/introduction.md",tags:[],version:"current",lastUpdatedAt:1658605703,formattedLastUpdatedAt:"7/23/2022",frontMatter:{id:"getting-started",title:"Introduction",description:"This helpful guide lays out the prerequisites for learning OpenDBM, using these docs, and setting up your environment."},sidebar:"docs",next:{title:"Dependencies Installation",permalink:"/aicure_opendbm/docs/next/dependencies-installation"}},y={},g=[{value:"How to use these docs",id:"how-to-use-these-docs",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Developer Notes",id:"developer-notes",level:2}],w={toc:g};function k(e){var t,n=e,{components:l}=n,f=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},w),f),s(t,u({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("div",{className:"content-banner"},(0,a.kt)("p",null,"Welcome to the very start of your OpenDBM journey! If you're looking for straight install and usage instructions, you can move to ",(0,a.kt)("a",{href:"dependencies-installation"},"this section"),". Continue reading for an introduction of OpenDBM before installing."),(0,a.kt)("img",{className:"content-banner-img",src:"/docs/assets/aicure_white.png",alt:" "})),(0,a.kt)("p",null,"OpenDBM is an open-source tool for measurement of digital biomarkers from video and audio of patient behavior. It is built on existing software packages used to quantify behavioral characteristics. Our goal is to increase accessibility of methods in digital phenotyping to researchers trying to understand the relationship between neuropsychiatric illnesses and their behavioral manifestations. "),(0,a.kt)("p",null,"Through OpenDBM, a user can objectively and sensitively measure behavioral characteristics such as facial activity, vocal acoustics, characteristics of speech, patterns of movement, and oculomotion. From those behavioral characteristics, they can measure clinically meaningful symptomatology such as emotional expressivity, prosody of voice, valence of speech, and severity of tremor\u2013\u2013among many others. "),(0,a.kt)("p",null,"We hope to encourage researchers to use objective quantification of symptomatology in their analyses and to inspire them to contribute their own code, leading to a central repository of methods. Only by doing so can academia, healthcare, and industry collaborate effectively on the advancement of digital measurement of health and create access to novel tools in digital phenotyping."),(0,a.kt)("h2",m({},{id:"how-to-use-these-docs"}),"How to use these docs"),(0,a.kt)("p",null,"The purpose of this document is to fully detail the specifications of OpenDBM. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chapter 2 describes how to install and set up OpenDBM on your system."),(0,a.kt)("li",{parentName:"ul"},"Chapter 3 outlines how to use OpenDBM to calculate digital biomarkers from data."),(0,a.kt)("li",{parentName:"ul"},"Chapter 4 provides information on how the data output is organized and analyzed."),(0,a.kt)("li",{parentName:"ul"},"Chapter 5 lists and describes all digital biomarker variables outputted by OpenDBM."),(0,a.kt)("li",{parentName:"ul"},"Chapter 6 details considerations to have in mind for any data that is being processed."),(0,a.kt)("li",{parentName:"ul"},"Chapter 7 contains additional resources for the user and links to instructional videos.")),(0,a.kt)("h2",m({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("p",null,"To work with OpenDBM, you will need to have an understanding of Python fundamentals. If you\u2019re new to Python or need a refresher, you can ",(0,a.kt)("a",m({parentName:"p"},{href:"https://docs.python.org/3/tutorial/"}),"dive in")," or ",(0,a.kt)("a",m({parentName:"p"},{href:"https://www.w3schools.com/python/"}),"brush up")," at your convenience."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"While we do our best to assume no prior knowledge of Python, these are valuable topics of study for the aspiring OpenDBM users. Where sensible, we have linked to resources and articles that go more in depth.")),(0,a.kt)("h2",m({},{id:"developer-notes"}),"Developer Notes"),(0,a.kt)("p",null,"People from many different development backgrounds are learning OpenDBM. You may have different experience between researchers, data scientist and python engineer and more. We try to write for all enthutiast from all backgrounds. Sometimes we provide explanations specific to one platform or another like so:"),(0,a.kt)(r.Z,{groupId:"guide",defaultValue:"researchers",values:i.Z.getLibraryNotesTabs(["researchers","data_scientist","engineer"]),mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"researchers",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Clinical Researchers may be familiar with this concept."))),(0,a.kt)(o.Z,{value:"data_scientist",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Data scientist may be familiar with this concept."))),(0,a.kt)(o.Z,{value:"engineer",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Python developers may be familiar with this concept.")))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Now that you know how this guide works, it's time to get to start OpenDBM installation: ",(0,a.kt)("a",m({parentName:"p"},{href:"/aicure_opendbm/docs/next/dependencies-installation"}),"Dependencies Installation"),"."))}k.isMDXComponent=!0}}]);