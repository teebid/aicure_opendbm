"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[3672],{5318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,v=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9831:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return c},metadata:function(){return v},toc:function(){return m}});var n=r(5318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&u(e,r,t[r]);return e};const c={id:"opendbm-docker-output",title:"Derived Variables"},f=void 0,v={unversionedId:"opendbm-docker-output",id:"opendbm-docker-output",title:"Derived Variables",description:"OpenDBM Output",source:"@site/../docs/derived-variables.md",sourceDirName:".",slug:"/opendbm-docker-output",permalink:"/aicure_opendbm/docs/next/opendbm-docker-output",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/derived-variables.md",tags:[],version:"current",lastUpdatedAt:1661959761,formattedLastUpdatedAt:"8/31/2022",frontMatter:{id:"opendbm-docker-output",title:"Derived Variables"},sidebar:"docs",previous:{title:"Windows Usage",permalink:"/aicure_opendbm/docs/next/windows-usage"},next:{title:"Raw Variables",permalink:"/aicure_opendbm/docs/next/raw-variables"}},b={},m=[{value:"OpenDBM Output",id:"opendbm-output",level:2},{value:"Derived Variables",id:"derived-variables",level:2}],h={toc:m};function w(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},h),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h2",d({},{id:"opendbm-output"}),"OpenDBM Output"),(0,n.kt)("p",null,"In the previous chapter, we went over how to process data using OpenDBM and learned that when we do so, we save a folder called ",(0,n.kt)("strong",{parentName:"p"},"output")," in the location we specify. This chapter is all about what\u2019s in that folder and all the wonderful things we can do with it. "),(0,n.kt)("p",null,"The first thing you\u2019ll see is that the ",(0,n.kt)("strong",{parentName:"p"},"output")," folder is divided into ",(0,n.kt)("inlineCode",{parentName:"p"},"raw_variables")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"derived_variables"),". As Chapter 5 explains, for each biomarker, both ",(0,n.kt)("strong",{parentName:"p"},"raw variables")," and ",(0,n.kt)("strong",{parentName:"p"},"derived variables")," are calculated. Raw variables are often frame-wise values containing measurements according to the temporal resolution of the inputted file (e.g. happiness expressivity in each frame of video in an inputted video file or audio intensity for each audio frame in an audio file). Derived variables are abstractions of their respective raw variables (e.g. average happiness expressivity across a video or standard deviation of audio intensity over the course of the audio file). Chapter 5  goes into more detail and lists all raw and derived biomarker variables. The purpose of this chapter is to first just explain the structure of the data output from OpenDBM."),(0,n.kt)("h2",d({},{id:"derived-variables"}),"Derived Variables"),(0,n.kt)("p",null,"For derived variables, a single CSV file is outputted. This CSV file, named derived_output.csv, contains a row for each video/audio file that was inputted. If only a single file was processed, the CSV file will have only one row. If several were inputted, then several rows will be outputted."),(0,n.kt)("p",null,"And, in case you forgot what files and/or excel sheets look like, here are some illustrations:"),(0,n.kt)("figure",null,(0,n.kt)("img",{src:"/docs/assets/derived_var_1.png",width:"1000",alt:"Screenshot of output file"}),(0,n.kt)("figcaption",null,"Screenshot of output file.")),(0,n.kt)("p",null,"Essentially, the derived variables CSV file is the best place to go for most simple analyses. ",(0,n.kt)("a",d({parentName:"p"},{href:"https://www.youtube.com/watch?v=QQY_QA1Y5BM"}),"In this instructional video"),", we conduct a sample data analysis in a made-up experiment and use the derived variable output to test effects of a \u2018treatment\u2019 on emotional expressivity in the face."))}w.isMDXComponent=!0}}]);