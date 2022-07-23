"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[6689],{5318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),f=n,v=c["".concat(l,".").concat(f)]||c[f]||u[f]||i;return r?a.createElement(v,o(o({ref:t},p),{},{components:r})):a.createElement(v,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3415:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return c},metadata:function(){return v},toc:function(){return m}});var a=r(5318),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))d.call(t,r)&&p(e,r,t[r]);return e};const c={id:"derived-variables",title:"Derived Variables"},f=void 0,v={unversionedId:"derived-variables",id:"version-2.1/derived-variables",title:"Derived Variables",description:"OpenDBM Output",source:"@site/versioned_docs/version-2.1/derived-variables.md",sourceDirName:".",slug:"/derived-variables",permalink:"/aicure_opendbm/docs/derived-variables",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/derived-variables.md",tags:[],version:"2.1",lastUpdatedAt:1658605703,formattedLastUpdatedAt:"7/23/2022",frontMatter:{id:"derived-variables",title:"Derived Variables"},sidebar:"docs",previous:{title:"Windows Usage",permalink:"/aicure_opendbm/docs/windows-usage"},next:{title:"Raw Variables",permalink:"/aicure_opendbm/docs/raw-variables"}},b={},m=[{value:"OpenDBM Output",id:"opendbm-output",level:2},{value:"Derived Variables",id:"derived-variables",level:2}],h={toc:m};function w(e){var t,r=e,{components:n}=r,p=((e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},h),p),i(t,o({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h2",u({},{id:"opendbm-output"}),"OpenDBM Output"),(0,a.kt)("p",null,"In the previous chapter, we went over how to process data using OpenDBM and learned that when we do so, we save a folder called ",(0,a.kt)("strong",{parentName:"p"},"output")," in the location we specify. This chapter is all about what\u2019s in that folder and all the wonderful things we can do with it. "),(0,a.kt)("p",null,"The first thing you\u2019ll see is that the ",(0,a.kt)("strong",{parentName:"p"},"output")," folder is divided into ",(0,a.kt)("inlineCode",{parentName:"p"},"raw_variables")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"derived_variables"),". As Chapter 5 explains, for each biomarker, both ",(0,a.kt)("strong",{parentName:"p"},"raw variables")," and ",(0,a.kt)("strong",{parentName:"p"},"derived variables")," are calculated. Raw variables are often frame-wise values containing measurements according to the temporal resolution of the inputted file (e.g. happiness expressivity in each frame of video in an inputted video file or audio intensity for each audio frame in an audio file). Derived variables are abstractions of their respective raw variables (e.g. average happiness expressivity across a video or standard deviation of audio intensity over the course of the audio file). Chapter 5  goes into more detail and lists all raw and derived biomarker variables. The purpose of this chapter is to first just explain the structure of the data output from OpenDBM."),(0,a.kt)("h2",u({},{id:"derived-variables"}),"Derived Variables"),(0,a.kt)("p",null,"For derived variables, a single CSV file is outputted. This CSV file, named derived_output.csv, contains a row for each video/audio file that was inputted. If only a single file was processed, the CSV file will have only one row. If several were inputted, then several rows will be outputted."),(0,a.kt)("p",null,"And, in case you forgot what files and/or excel sheets look like, here are some illustrations:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/docs/assets/derived_var_1.png",width:"1000",alt:"Screenshot of output file"}),(0,a.kt)("figcaption",null,"Screenshot of output file.")),(0,a.kt)("p",null,"Essentially, the derived variables CSV file is the best place to go for most simple analyses. ",(0,a.kt)("a",u({parentName:"p"},{href:"https://www.youtube.com/watch?v=QQY_QA1Y5BM"}),"In this instructional video"),", we conduct a sample data analysis in a made-up experiment and use the derived variable output to test effects of a \u2018treatment\u2019 on emotional expressivity in the face."))}w.isMDXComponent=!0}}]);