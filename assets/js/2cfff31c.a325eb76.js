"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[648],{5318:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return y}});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=s(a),y=n,u=c["".concat(o,".").concat(y)]||c[y]||p[y]||i;return a?r.createElement(u,l(l({ref:t},d),{},{components:a})):r.createElement(u,l({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:n,l[1]=m;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8502:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return y},default:function(){return v},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return k}});var r=a(5318),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&d(e,a,t[a]);if(m)for(var a of m(t))s.call(t,a)&&d(e,a,t[a]);return e};const c={id:"facial-asymmetry",title:"Facial Asymmetry"},y=void 0,u={unversionedId:"facial-asymmetry",id:"facial-asymmetry",title:"Facial Asymmetry",description:"Using facial landmark detection described in Section 5.1.1, an additional measurement that is made is that of facial asymmetry. Frame-wise and overall asymmetry in landmarks on the left vs. right side of the face is quantified and saved in the following raw and derived variables.",source:"@site/../docs/facial-asymmetry.md",sourceDirName:".",slug:"/facial-asymmetry",permalink:"/aicure_opendbm/docs/next/facial-asymmetry",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/facial-asymmetry.md",tags:[],version:"current",lastUpdatedAt:1662062107,formattedLastUpdatedAt:"9/1/2022",frontMatter:{id:"facial-asymmetry",title:"Facial Asymmetry"},sidebar:"variable",previous:{title:"Overall expressivity",permalink:"/aicure_opendbm/docs/next/overall-expressivity"},next:{title:"Pain Expressivity",permalink:"/aicure_opendbm/docs/next/pain-expressivity"}},f={},k=[{value:"Raw Variables",id:"raw-variables",level:2},{value:"Derived Variables",id:"derived-variables",level:2}],b={toc:k};function v(e){var t,a=e,{components:n}=a,d=((e,t)=>{var a={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=p(p({},b),d),i(t,l({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Using facial landmark detection described in Section 5.1.1, an additional measurement that is made is that of facial asymmetry. Frame-wise and overall asymmetry in landmarks on the left vs. right side of the face is quantified and saved in the following raw and derived variables."),(0,r.kt)("h2",p({},{id:"raw-variables"}),"Raw Variables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Variable"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"fac_asymmaskmouth")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mouth asymmetry.")," Frame-wise asymmetry in the mouth area.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"fac_asymmaskeye")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Eye asymmetry.")," Frame-wise asymmetry in the eye area.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"fac_asymmaskeyebrow")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Eyebrow asymmetry.")," Frame-wise asymmetry in the Eyebrow area.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"fac_asymmaskcom")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Overall asymmetry.")," Frame-wise asymmetry across the face.")))),(0,r.kt)("h2",p({},{id:"derived-variables"}),"Derived Variables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Variable"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"fac_asymmaskmouth_mean")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mouth asymmetry mean")," across the video.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"fac_asymmaskmouth_std")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mouth asymmetry standard deviation")," across the video.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"fac_asymmaskeye_mean")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Eye asymmetry mean")," across the video.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"fac_asymmaskeye_std")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Eye asymmetry standard deviation")," across the video.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"fac_asymmaskeyebrow_mean")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Eyebrow asymmetry mean")," across the video.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"fac_asymmaskeyebrow_std")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Eyebrow asymmetry standard deviation")," across the video.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"fac_asymmaskcom_mean")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Overall asymmetry mean")," across the video.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"fac_asymmaskcom_std")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Overall asymmetry standard deviation")," across the video.")))))}v.isMDXComponent=!0}}]);