"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[751],{5318:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5616:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return y}});var n=r(5318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e};const p={id:"formant-frequencies",title:"Formant Frequencies"},m=void 0,d={unversionedId:"formant-frequencies",id:"version-2.1/formant-frequencies",title:"Formant Frequencies",description:"Formant Frequencies (f1-4)",source:"@site/versioned_docs/version-2.1/formant-frequencies.md",sourceDirName:".",slug:"/formant-frequencies",permalink:"/aicure_opendbm/docs/formant-frequencies",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/formant-frequencies.md",tags:[],version:"2.1",lastUpdatedAt:1659961989,formattedLastUpdatedAt:"8/8/2022",frontMatter:{id:"formant-frequencies",title:"Formant Frequencies"},sidebar:"variable",previous:{title:"Fundamental Frequency",permalink:"/aicure_opendbm/docs/fundamental-frequency"},next:{title:"Audio Intensity",permalink:"/aicure_opendbm/docs/audio-intensity"}},b={},y=[{value:"Formant Frequencies (f<sub>1-4</sub>)",id:"formant-frequencies-f1-4",level:2},{value:"Raw Variables",id:"raw-variables",level:2},{value:"Derived Variables",id:"derived-variables",level:2}],k={toc:y};function v(e){var t,r=e,{components:a}=r,c=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},k),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h2",f({},{id:"formant-frequencies-f1-4"}),"Formant Frequencies (f",(0,n.kt)("sub",null,"1-4"),")"),(0,n.kt)("p",null,"Formants are spectral peaks in the sound spectrum that are typically distributed in bands across different frequencies",(0,n.kt)("sup",f({parentName:"p"},{id:"fnref-1"}),(0,n.kt)("a",f({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),". OpenDBM outputs values for the first four formants (f",(0,n.kt)("sub",null,"1-4"),"), with N in the variable names in the tables below referring to the formant number."),(0,n.kt)("h2",f({},{id:"raw-variables"}),"Raw Variables"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Variable"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"aco_fmN")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Formant frequency.")," Frame-wise formant frequency (f",(0,n.kt)("sub",null,"N"),") measurements, with N being 1, 2, 3, or 4, referring to the 1st, 2nd, 3rd, or 4th formant respectively.")))),(0,n.kt)("h2",f({},{id:"derived-variables"}),"Derived Variables"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Variable"),(0,n.kt)("th",f({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"aco_fmN_mean")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Formant frequency mean.")," Mean of the Nth formant (f",(0,n.kt)("sub",null,"N"),") across all audio frames.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"aco_fmN_std")),(0,n.kt)("td",f({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Formant frequency standard deviation.")," Standard deviation of the Nth formant (f",(0,n.kt)("sub",null,"N"),") across all audio frames.")))),(0,n.kt)("div",f({},{className:"footnotes"}),(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",f({parentName:"ol"},{id:"fn-1"}),(0,n.kt)("a",f({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Fundamental_frequency"}),"https://en.wikipedia.org/wiki/Fundamental_frequency"),(0,n.kt)("a",f({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}v.isMDXComponent=!0}}]);