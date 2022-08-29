"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[498],{5318:function(e,t,i){i.d(t,{Zo:function(){return l},kt:function(){return p}});var n=i(7378);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=d(i),p=r,f=h["".concat(c,".").concat(p)]||h[p]||u[p]||a;return i?n.createElement(f,o(o({ref:t},l),{},{components:i})):n.createElement(f,o({ref:t},l))}));function p(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},553:function(e,t,i){i.r(t),i.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return v}});var n=i(5318),r=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,l=(e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,u=(e,t)=>{for(var i in t||(t={}))c.call(t,i)&&l(e,i,t[i]);if(s)for(var i of s(t))d.call(t,i)&&l(e,i,t[i]);return e};const h={id:"video-guidelines",title:"Video Guidelines"},p=void 0,f={unversionedId:"video-guidelines",id:"version-2.0/video-guidelines",title:"Video Guidelines",description:"Generally speaking\u2013\u2013and forgive me if this is too obvious\u2013\u2013OpenDBM is meant to calculate behavioral characteristics and subsequently derive digital biomarkers from video of an individual\u2019s head/face area and there is a basic expectation that the video will be of that individual (e.g. patient during a clinical interview) facing generally towards the direction of the camera lens. Some key points to consider regarding video that is processed are detailed below.",source:"@site/versioned_docs/version-2.0/video-guidelines.md",sourceDirName:".",slug:"/video-guidelines",permalink:"/aicure_opendbm/docs/2.0/video-guidelines",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/video-guidelines.md",tags:[],version:"2.0",lastUpdatedAt:1661237380,formattedLastUpdatedAt:"8/23/2022",frontMatter:{id:"video-guidelines",title:"Video Guidelines"},sidebar:"guidelines",previous:{title:"Supported File Types",permalink:"/aicure_opendbm/docs/2.0/supported-file-types"},next:{title:"Audio Guidelines",permalink:"/aicure_opendbm/docs/2.0/audio-guidelines"}},m={},v=[{value:"Direction of head",id:"direction-of-head",level:2},{value:"Persons per video",id:"persons-per-video",level:2},{value:"Video data quality",id:"video-data-quality",level:2}],b={toc:v};function g(e){var t,i=e,{components:r}=i,l=((e,t)=>{var i={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&d.call(e,n)&&(i[n]=e[n]);return i})(i,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),l),a(t,o({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Generally speaking\u2013\u2013and forgive me if this is too obvious\u2013\u2013OpenDBM is meant to calculate behavioral characteristics and subsequently derive digital biomarkers from video of an individual\u2019s head/face area and there is a basic expectation that the video will be of that individual (e.g. patient during a clinical interview) facing generally towards the direction of the camera lens. Some key points to consider regarding video that is processed are detailed below."),(0,n.kt)("h2",u({},{id:"direction-of-head"}),"Direction of head"),(0,n.kt)("p",null,"If for some frames of the video, the head is not pointing towards the camera, it is possible that no visual biomarker variables will be processed for those frames. Hence, it is recommended that most if not all of the video be of the face pointing towards the camera. To find out which frames in a video were or were not processed, go through the raw variable output and locate any ",(0,n.kt)("strong",{parentName:"p"},"nan")," entries: those are likely because there was no face detected in those frames (there\u2019s more on this in Section 5.1)."),(0,n.kt)("h2",u({},{id:"persons-per-video"}),"Persons per video"),(0,n.kt)("p",null,"Each video should be unique to one person. If more than one person is present in any given frame of video, the package will get confused and only make measurements on one of the heads/faces, with no real way to determine which one of the individuals is being used to make the measurements. Furthermore, even if one head is shown at a time but the same video contains more than one unique person, then the derived variable measurements will be disrupted in that they will be averaged for all faces shown, instead of limiting calculations to a unique face."),(0,n.kt)("p",null,"In many cases, the user may be processing videos of a clinician-patient interview and that video either contains shots of both the interviewer and the patient\u2019s face (such as ",(0,n.kt)("a",u({parentName:"p"},{href:"https://youtu.be/7_gmIvbjt3w?t=138"}),"this one"),"). The user must spatially crop the video to ensure that only the face of the individual whose behavior the user is interested in measuring (I\u2019m assuming it\u2019s the patient) is in the video\u2013\u2013not the interviewer. In other cases, the video may cycle between the patient and interviewer (such as ",(0,n.kt)("a",u({parentName:"p"},{href:"https://www.youtube.com/watch?v=4YhpWZCdiZc&t=302s"}),"this one"),"). Here, the user must temporally crop the video so that only shots that contain the patient\u2019s face are processed, and not the ones of the interviewer\u2019s face. It can also be the case that a caretaker or guardian is sitting next to the patient during the interview (such as ",(0,n.kt)("a",u({parentName:"p"},{href:"https://youtu.be/I7QiPXqL9pY?t=117"}),"this one"),"). Here, too, the user must spatially crop the video to only include the face of the individual whose behavior they want to measure."),(0,n.kt)("h2",u({},{id:"video-data-quality"}),"Video data quality"),(0,n.kt)("p",null,"Please be cognizant of data quality. This includes ensuring that the face is close enough to the camera that individual features are distinguishable, that lighting is consistent across the face e.g. there are no strong shadows, etc. that are going across the face, which could affect the calculations. It is also important that the entirety of the face is in the frame, which can sometimes be an issue if the face is too close to the camera e.g. if the individual is recording on a smartphone front-facing camera and brings it close to their face to speak."))}g.isMDXComponent=!0}}]);