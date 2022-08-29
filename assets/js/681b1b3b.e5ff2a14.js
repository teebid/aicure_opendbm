"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[7125],{5318:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3897:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return h}});var a=r(5318),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&d(e,r,t[r]);return e};const u={id:"pause-characteristics",title:"Pause Characteristics"},m=void 0,f={unversionedId:"pause-characteristics",id:"version-2.0/pause-characteristics",title:"Pause Characteristics",description:"Fundamental frequency is usually zero when there is no voice detected. Using this understanding, frames where voice is or is not present can be determined and used to characterize pauses during speech and silence during the audio file. These metrics are quantified here.",source:"@site/versioned_docs/version-2.0/pause-characteristics.md",sourceDirName:".",slug:"/pause-characteristics",permalink:"/aicure_opendbm/docs/2.0/pause-characteristics",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/pause-characteristics.md",tags:[],version:"2.0",lastUpdatedAt:1661237380,formattedLastUpdatedAt:"8/23/2022",frontMatter:{id:"pause-characteristics",title:"Pause Characteristics"},sidebar:"variable",previous:{title:"Shimmer",permalink:"/aicure_opendbm/docs/2.0/shimmer"},next:{title:"Voice Prevalence",permalink:"/aicure_opendbm/docs/2.0/voice-prevalence"}},b={},h=[{value:"Raw Variables",id:"raw-variables",level:2},{value:"Derived Variables",id:"derived-variables",level:2}],k={toc:h};function g(e){var t,r=e,{components:n}=r,d=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=p(p({},k),d),i(t,o({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Fundamental frequency is usually zero when there is no voice detected. Using this understanding, frames where voice is or is not present can be determined and used to characterize pauses during speech and silence during the audio file. These metrics are quantified here."),(0,a.kt)("h2",p({},{id:"raw-variables"}),"Raw Variables"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Variable"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"aco_pausetime")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Pause time.")," Length of time with no speech detected.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"aco_totaltime")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Video length.")," The length of the video.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"aco_speakingtime")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Time spoken.")," The total length of time with speech detected.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"aco_numpauses")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Number of pauses.")," Number of instances with no speech.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"aco_pausefrac")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Pause time.")," aco_pausetime divided by aco_totaltime.")))),(0,a.kt)("h2",p({},{id:"derived-variables"}),"Derived Variables"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Variable"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"aco_pausetime_mean")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Pause time.")," Length of time with no speech detected.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"aco_totaltime_mean")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Video length.")," The length of the video.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"aco_numpauses_mean")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Number of pauses.")," Number of instances with no speech.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"aco_pausefrac_mean")),(0,a.kt)("td",p({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Fraction of video with pauses.")," ",(0,a.kt)("inlineCode",{parentName:"td"},"aco_pausetime_mean")," divided by ",(0,a.kt)("inlineCode",{parentName:"td"},"aco_totaltime_mean"),".")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: The overlap between raw and derived variables for this section may be confusing; it\u2019s a leftover effect of how our code is organized in the AiCure product, where several videos from the same individual at the same time point are averaged. For your purposes, simply rely on the derived variables here.")))}g.isMDXComponent=!0}}]);