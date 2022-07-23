"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[7855],{5318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7160:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return b}});var a=r(5318),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&p(e,r,t[r]);return e};const d={id:"raw-variables",title:"Raw Variables"},f=void 0,m={unversionedId:"raw-variables",id:"version-2.0/raw-variables",title:"Raw Variables",description:"Raw Variables",source:"@site/versioned_docs/version-2.0/raw-variables.md",sourceDirName:".",slug:"/raw-variables",permalink:"/aicure_opendbm/docs/2.0/raw-variables",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/raw-variables.md",tags:[],version:"2.0",lastUpdatedAt:1658605703,formattedLastUpdatedAt:"7/23/2022",frontMatter:{id:"raw-variables",title:"Raw Variables"},sidebar:"docs",previous:{title:"Derived Variables",permalink:"/aicure_opendbm/docs/2.0/derived-variables"}},h={},b=[{value:"Raw Variables",id:"raw-variables",level:2},{value:"OpenFace output",id:"openface-output",level:3},{value:"Speech transcription",id:"speech-transcription",level:3}],v={toc:b};function y(e){var t,r=e,{components:n}=r,p=((e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},v),p),i(t,o({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("h2",u({},{id:"raw-variables"}),"Raw Variables"),(0,a.kt)("p",null,"The raw variable data structure is slightly more complicated. The hierarchy is described below:"),(0,a.kt)("figure",null,(0,a.kt)("img",{src:"/docs/assets/raw_variables1.png",width:"1000",alt:"Variables hierarchy"}),(0,a.kt)("figcaption",null,"Variables hierarchy")),(0,a.kt)("p",null,"Under the ",(0,a.kt)("strong",{parentName:"p"},"raw_variables")," folder, there will be a folder for each ",(0,a.kt)("strong",{parentName:"p"},"filename"),". Under each filename\u2019s folder, there will be a folder for each DBM group as described in Section 3.1.3 and Chapter 5: ",(0,a.kt)("strong",{parentName:"p"},"facial, acoustic, speech, and movement"),". In each of the DBM group folders, there will be sub- folders for biomarkers e.g. the acoustic ",(0,a.kt)("strong",{parentName:"p"},"intensity")," folder has data for audio intensity (Section 5.2.3). WIthin the biomarker folder will be a CSV file that contains frame-by-frame values for variables in it. In the case of audio intensity, the audio intensity raw variable CSV file has the ",(0,a.kt)("inlineCode",{parentName:"p"},"aco_int")," values in decibels for ",(0,a.kt)("em",{parentName:"p"},"each frame of audio")," in the video file, whereas the ",(0,a.kt)("inlineCode",{parentName:"p"},"aco_int_mean")," ",(0,a.kt)("em",{parentName:"p"},"derived")," variable would simply have the mean intensity of all frames in that file."),(0,a.kt)("h3",u({},{id:"openface-output"}),"OpenFace output"),(0,a.kt)("p",null,"As has been mentioned before, OpenDBM relies on OpenFace for a lot of its measurements. In case the user is interested in going upstream to that level of data, the ",(0,a.kt)("strong",{parentName:"p"},"<filename",">","_openface")," folder just contains the OpenFace output, including action units, eye gaze data, and head movement calculations. Some other facial and movement measurements are acquired using facial landmark data, which is also an output from OpenFace, though relies on a different model. That OpenFace data is saved in ",(0,a.kt)("strong",{parentName:"p"},"<filename",">","_openface_lmk"),". Both of the raw OpenFace output folders are there in case a user is interested in building their own raw / derived variables. If the user is simply interested in using OpenDBM\u2019s existing measures, they can ignore these folders."),(0,a.kt)("h3",u({},{id:"speech-transcription"}),"Speech transcription"),(0,a.kt)("p",null,"Assuming the user used the ",(0,a.kt)("inlineCode",{parentName:"p"},"--tr=on")," option when executing the processing command, OpenDBM will save the text for any speech that was transcribed in a folder called ",(0,a.kt)("strong",{parentName:"p"},"deepspeech"),". All transcription is done using an open source software package called ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/mozilla/DeepSpeech"}),"DeepSpeech")," This folder simply contains the output that DeepSpeech provides. Similar to the OpenFace output, the speech transcription is saved in case the user wants to dig deeper and perhaps derive their own measures. We do ask that you read Section 3.1.4 before you save speech transcriptions."))}y.isMDXComponent=!0}}]);