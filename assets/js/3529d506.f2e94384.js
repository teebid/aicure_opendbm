"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[4237],{5318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),d=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(r),s=a,f=c["".concat(m,".").concat(s)]||c[s]||p[s]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4458:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return b}});var n=r(5318),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))d.call(t,r)&&u(e,r,t[r]);return e};const c={id:"vocal-tremor",title:"Vocal Tremor"},s=void 0,f={unversionedId:"vocal-tremor",id:"vocal-tremor",title:"Vocal Tremor",description:"Vocal tremor is measured according to the methods described in this paper by Marcus Bruckl and we highly suggest reading that work to help better understand the variables below.",source:"@site/../docs/vocal-tremor.md",sourceDirName:".",slug:"/vocal-tremor",permalink:"/aicure_opendbm/docs/next/vocal-tremor",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/vocal-tremor.md",tags:[],version:"current",lastUpdatedAt:1658605703,formattedLastUpdatedAt:"7/23/2022",frontMatter:{id:"vocal-tremor",title:"Vocal Tremor"},sidebar:"variable",previous:{title:"Facial Tremor",permalink:"/aicure_opendbm/docs/next/facial-tremor"}},y={},b=[{value:"Raw Variables",id:"raw-variables",level:3},{value:"Derived Variables",id:"derived-variables",level:3}],g={toc:b};function k(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},g),u),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Vocal tremor is measured according to the methods described in ",(0,n.kt)("a",p({parentName:"p"},{href:"https://www.researchgate.net/publication/288142544_Vocal_tremor_measurement_based_on_autocorrelation_of_contours"}),"this paper")," by Marcus Bruckl and we highly suggest reading that work to help better understand the variables below."),(0,n.kt)("h3",p({},{id:"raw-variables"}),"Raw Variables"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Variable"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_freqtremfreq")),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Frequency tremor frequency (FTrF):")," Frequency of the strongest low-frequency modulation of Fundamental frequency contour.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_freqtremindex")),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Frequency tremor intensity index (FTrI):")," Intensity or magnitude of the strongest low frequency modulation of Fundamental frequency contour.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_freqtrempindex")),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Frequency tremor power index (FTrP):")," Power index of the strongest low frequency modulation of Fundamental frequency contour.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_amptremfreq")),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Amplitude tremor frequency (ATrF):")," Frequency of the strongest low-frequency modulation of Amplitude contour.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_amptremindex")),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Amplitude tremor intensity index (ATrI):")," Intensity/magnitude of the strongest low frequency modulation of Amplitude contour.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_amptrempindex")),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Amplitude tremor power index (ATrP):")," Power index of the strongest low frequency modulation of Amplitude contour.")))),(0,n.kt)("h3",p({},{id:"derived-variables"}),"Derived Variables"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Variable"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_freqtremfreq_mean")),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mean frequency tremor frequency (FTrF):")," Frequency of the strongest low-frequency modulation of Fundamental frequency contour.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_freqtremindex_mean")),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mean frequency tremor intensity index (FTrI):")," Intensity or magnitude of the strongest low frequency modulation of Fundamental frequency contour.contour.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_freqtrempindex_mean")),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mean frequency tremor power index (FTrP):")," Power index of the strongest low frequency modulation of Fundamental frequency contour.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_amptremfreq_mean")),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mean amplitude tremor frequency (ATrF):")," Frequency of the strongest low-frequency modulation of Amplitude contour.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_amptremindex_mean")),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mean amplitude tremor intensity index (ATrI):")," Intensity/magnitude of the strongest low frequency modulation of Amplitude contour.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_amptrempindex_mean")),(0,n.kt)("td",p({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mean amplitude tremor power index (ATrP):")," Power index of the strongest low frequency modulation of Amplitude contour.")))))}k.isMDXComponent=!0}}]);