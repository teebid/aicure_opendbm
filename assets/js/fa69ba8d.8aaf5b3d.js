"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[9566],{5318:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,d=p["".concat(u,".").concat(m)]||p[m]||s[m]||o;return r?n.createElement(d,i(i({ref:t},f),{},{components:r})):n.createElement(d,i({ref:t},f))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8552:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return y}});var n=r(5318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&f(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&f(e,r,t[r]);return e};const p={id:"formant-frequencies",title:"Formant Frequencies"},m=void 0,d={unversionedId:"formant-frequencies",id:"formant-frequencies",title:"Formant Frequencies",description:"Formant Frequencies (f1-4)",source:"@site/../docs/formant-frequencies.md",sourceDirName:".",slug:"/formant-frequencies",permalink:"/aicure_opendbm/docs/next/formant-frequencies",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/formant-frequencies.md",tags:[],version:"current",lastUpdatedAt:1658605703,formattedLastUpdatedAt:"7/23/2022",frontMatter:{id:"formant-frequencies",title:"Formant Frequencies"},sidebar:"variable",previous:{title:"Fundamental Frequency",permalink:"/aicure_opendbm/docs/next/fundamental-frequency"},next:{title:"Audio Intensity",permalink:"/aicure_opendbm/docs/next/audio-intensity"}},b={},y=[{value:"Formant Frequencies (f<sub>1-4</sub>)",id:"formant-frequencies-f1-4",level:2},{value:"Raw Variables",id:"raw-variables",level:2},{value:"Derived Variables",id:"derived-variables",level:2}],k={toc:y};function v(e){var t,r=e,{components:a}=r,f=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},k),f),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h2",s({},{id:"formant-frequencies-f1-4"}),"Formant Frequencies (f",(0,n.kt)("sub",null,"1-4"),")"),(0,n.kt)("p",null,"Formants are spectral peaks in the sound spectrum that are typically distributed in bands across different frequencies",(0,n.kt)("sup",s({parentName:"p"},{id:"fnref-1"}),(0,n.kt)("a",s({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),". OpenDBM outputs values for the first four formants (f",(0,n.kt)("sub",null,"1-4"),"), with N in the variable names in the tables below referring to the formant number."),(0,n.kt)("h2",s({},{id:"raw-variables"}),"Raw Variables"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Variable"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"aco_fmN")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Formant frequency.")," Frame-wise formant frequency (f",(0,n.kt)("sub",null,"N"),") measurements, with N being 1, 2, 3, or 4, referring to the 1st, 2nd, 3rd, or 4th formant respectively.")))),(0,n.kt)("h2",s({},{id:"derived-variables"}),"Derived Variables"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Variable"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"aco_fmN_mean")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Formant frequency mean.")," Mean of the Nth formant (f",(0,n.kt)("sub",null,"N"),") across all audio frames.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"aco_fmN_std")),(0,n.kt)("td",s({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Formant frequency standard deviation.")," Standard deviation of the Nth formant (f",(0,n.kt)("sub",null,"N"),") across all audio frames.")))),(0,n.kt)("div",s({},{className:"footnotes"}),(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",s({parentName:"ol"},{id:"fn-1"}),(0,n.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Fundamental_frequency"}),"https://en.wikipedia.org/wiki/Fundamental_frequency"),(0,n.kt)("a",s({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}v.isMDXComponent=!0}}]);