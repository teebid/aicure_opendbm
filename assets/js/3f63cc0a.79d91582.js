"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[6106],{5318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2766:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return y}});var n=r(5318),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e};const f={id:"pro-installation",title:"Installation for Pro",description:"Pro Installation"},d=void 0,m={unversionedId:"pro-installation",id:"pro-installation",title:"Installation for Pro",description:"Pro Installation",source:"@site/../docs/pro-installation.md",sourceDirName:".",slug:"/pro-installation",permalink:"/aicure_opendbm/docs/next/pro-installation",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/pro-installation.md",tags:[],version:"current",lastUpdatedAt:1658605703,formattedLastUpdatedAt:"7/23/2022",frontMatter:{id:"pro-installation",title:"Installation for Pro",description:"Pro Installation"},sidebar:"docs",previous:{title:"Installation for Beginner",permalink:"/aicure_opendbm/docs/next/beginner-installation"},next:{title:"More Resources",permalink:"/aicure_opendbm/docs/next/more-resources"}},b={},y=[],O={toc:y};function g(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=s(s({},O),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Clone OpenDBM onto your system. Make sure you have docker installed and running. From the repo, run  "),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"docker build --tag dbm . \n")),(0,n.kt)("p",null,"to install the docker image. Then, you\u2019re good to go."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Now that you\u2019ve covered OpenDBM installation, let\u2019s dive deeper on some of these core modules by looking at ",(0,n.kt)("a",s({parentName:"p"},{href:"mac-linux-usage"}),"Usage"),"."))}g.isMDXComponent=!0}}]);