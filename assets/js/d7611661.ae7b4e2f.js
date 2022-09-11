"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[7147],{5318:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=m(a),u=r,f=y["".concat(d,".").concat(u)]||y[u]||c[u]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=y;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},7049:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return u},default:function(){return N},frontMatter:function(){return y},metadata:function(){return f},toc:function(){return g}});var n=a(5318),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&p(e,a,t[a]);if(l)for(var a of l(t))m.call(t,a)&&p(e,a,t[a]);return e};const y={id:"eye-gaze-directionality",title:"Eye Gaze Directionality"},u=void 0,f={unversionedId:"eye-gaze-directionality",id:"eye-gaze-directionality",title:"Eye Gaze Directionality",description:"Eye gaze directionality is another output we get from OpenFace. The variables below allow for measurements of eye gaze behavior.",source:"@site/../docs/eye-gaze-directionality.md",sourceDirName:".",slug:"/eye-gaze-directionality",permalink:"/aicure_opendbm/docs/next/eye-gaze-directionality",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/eye-gaze-directionality.md",tags:[],version:"current",lastUpdatedAt:1662909710,formattedLastUpdatedAt:"9/11/2022",frontMatter:{id:"eye-gaze-directionality",title:"Eye Gaze Directionality"},sidebar:"variable",previous:{title:"Eye Blink Behavior",permalink:"/aicure_opendbm/docs/next/eye-blink-behavior"},next:{title:"Facial Tremor",permalink:"/aicure_opendbm/docs/next/facial-tremor"}},k={},g=[{value:"Raw Variables",id:"raw-variables",level:3},{value:"Derived Variables",id:"derived-variables",level:3}],v={toc:g};function N(e){var t,a=e,{components:r}=a,p=((e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},v),p),i(t,o({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Eye gaze directionality is another output we get from OpenFace. The variables below allow for measurements of eye gaze behavior."),(0,n.kt)("h3",c({},{id:"raw-variables"}),"Raw Variables"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Variable"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_lefteyex")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"x coordinate of the left eye at the current video frame.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_lefteyey")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"y coordinate of the left eye at the current video frame.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_lefteyez")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"z coordinate of the left eye at the current video frame.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_righteyex")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"x coordinate of the right eye at the current video frame.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_righteyey")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"y coordinate of the right eye at the current video frame.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_righteyez")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"z coordinate of the right eye at the current video frame.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_leyedisp")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Euclidean displacement in the left eye gaze")," at the current video frame; this tells the overall movement in eye gaze direction in each frame.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_reyedisp")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Euclidean displacement in the right eye gaze")," at the current video frame; this tells the overall movement in eye gaze direction in each frame.")))),(0,n.kt)("h3",c({},{id:"derived-variables"}),"Derived Variables"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Variable"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_lefteyex_mean")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mean x coordinate of the left eye")," i.e. the average of the vector ",(0,n.kt)("inlineCode",{parentName:"td"},"mov_lefteyex"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_lefteyex_std")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Standard deviation of x coordinate of the left eye")," i.e. the standard deviation of the vector ",(0,n.kt)("inlineCode",{parentName:"td"},"mov_lefteyex"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_lefteyey_mean")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mean y coordinate of the left eye")," i.e. the average of the vector ",(0,n.kt)("inlineCode",{parentName:"td"},"mov_lefteyey"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_lefteyey_std")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Standard deviation of y coordinate of the left eye")," i.e. the standard deviation of the vector ",(0,n.kt)("inlineCode",{parentName:"td"},"mov_lefteyey"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_lefteyez_mean")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mean z coordinate of the left eye")," i.e. the average of the vector ",(0,n.kt)("inlineCode",{parentName:"td"},"mov_lefteyez"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_lefteyez_std")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Standard deviation of z coordinate of the left eye")," i.e. the standard deviation of the vector ",(0,n.kt)("inlineCode",{parentName:"td"},"mov_lefteyez"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_righteyex_mean")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mean x coordinate of the right eye")," i.e. the average of the vector ",(0,n.kt)("inlineCode",{parentName:"td"},"mov_righteyex"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_righteyex_std")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Standard deviation of x coordinate of the right eye")," i.e. the standard deviation of the vector ",(0,n.kt)("inlineCode",{parentName:"td"},"mov_righteyex"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_righteyey_mean")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mean y coordinate of the right eye")," i.e. the average of the vector ",(0,n.kt)("inlineCode",{parentName:"td"},"mov_righteyey"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_righteyey_std")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Standard deviation of y coordinate of the right eye")," i.e. the standard deviation of the vector ",(0,n.kt)("inlineCode",{parentName:"td"},"mov_righteyey"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_righteyez_mean")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mean z coordinate of the right eye")," i.e. the average of the vector ",(0,n.kt)("inlineCode",{parentName:"td"},"mov_righteyez"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_righteyez_std")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Standard deviation of z coordinate of the right eye")," i.e. the standard deviation of the vector ",(0,n.kt)("inlineCode",{parentName:"td"},"mov_righteyez"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_leyedisp_mean")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mean euclidean displacement in the left eye gaze")," over the course of the video.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_leyedisp_std")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Standard deviation of euclidean displacement in the left eye gaze")," over the course of the video.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_reyedisp_mean")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mean euclidean displacement in the right eye gaze")," over the course of the video.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"mov_reyedisp_std")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Standard deviation of euclidean displacement in the right eye gaze")," over the course of the video.")))))}N.isMDXComponent=!0}}]);