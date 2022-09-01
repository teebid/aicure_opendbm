"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[559],{5318:function(e,t,i){i.d(t,{Zo:function(){return l},kt:function(){return p}});var n=i(7378);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(i),p=a,f=h["".concat(c,".").concat(p)]||h[p]||d[p]||o;return i?n.createElement(f,r(r({ref:t},l),{},{components:i})):n.createElement(f,r({ref:t},l))}));function p(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<o;u++)r[u]=i[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},9965:function(e,t,i){i.r(t),i.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return b}});var n=i(5318),a=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,t,i)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,d=(e,t)=>{for(var i in t||(t={}))c.call(t,i)&&l(e,i,t[i]);if(s)for(var i of s(t))u.call(t,i)&&l(e,i,t[i]);return e};const h={id:"audio-guidelines",title:"Audio Guidelines"},p=void 0,f={unversionedId:"audio-guidelines",id:"version-2.0/audio-guidelines",title:"Audio Guidelines",description:"Similar to video, the assumption here is that it is the voice and speech of a patient that is being characterized. OpenDBM calculates acoustic measures from the sound wave that it is getting. So, if there is any sound in the audio file that is not the patient\u2019s voice, OpenDBM does not separate that out, and any subsequent measurements (think: the loudness of the sound, frequency of the waveform, and other acoustic features like the harmonics to noise ratio) will be from of all the sound in the audio file\u2013\u2013and not just the patient\u2019s voice. Similarly, if our objective is to characterize aspects of the speech, OpenDBM is transcribing all the speech that it can hear. So, if more than one person is speaking in the audio file, you\u2019re calculating variables from all of that speech\u2013\u2013not just the patient\u2019s. Below are some points to take into consideration.",source:"@site/versioned_docs/version-2.0/audio-guidelines.md",sourceDirName:".",slug:"/audio-guidelines",permalink:"/aicure_opendbm/docs/2.0/audio-guidelines",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/audio-guidelines.md",tags:[],version:"2.0",lastUpdatedAt:1662062107,formattedLastUpdatedAt:"9/1/2022",frontMatter:{id:"audio-guidelines",title:"Audio Guidelines"},sidebar:"guidelines",previous:{title:"Video Guidelines",permalink:"/aicure_opendbm/docs/2.0/video-guidelines"},next:{title:"Behavioral Considerations",permalink:"/aicure_opendbm/docs/2.0/behavioral-considerations"}},m={},b=[{value:"Empty/quiet spaces",id:"emptyquiet-spaces",level:2},{value:"Background noise",id:"background-noise",level:2},{value:"Video data quality",id:"video-data-quality",level:2},{value:"Persons per audio",id:"persons-per-audio",level:2}],g={toc:b};function v(e){var t,i=e,{components:a}=i,l=((e,t)=>{var i={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&u.call(e,n)&&(i[n]=e[n]);return i})(i,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),l),o(t,r({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Similar to video, the assumption here is that it is the voice and speech of a patient that is being characterized. OpenDBM calculates acoustic measures from the sound wave that it is getting. So, if there is any sound in the audio file that is not the patient\u2019s voice, OpenDBM does not separate that out, and any subsequent measurements (think: the loudness of the sound, frequency of the waveform, and other acoustic features like the harmonics to noise ratio) will be from of all the sound in the audio file\u2013\u2013and not just the patient\u2019s voice. Similarly, if our objective is to characterize aspects of the speech, OpenDBM is transcribing all the speech that it can hear. So, if more than one person is speaking in the audio file, you\u2019re calculating variables from all of that speech\u2013\u2013not just the patient\u2019s. Below are some points to take into consideration."),(0,n.kt)("h2",d({},{id:"emptyquiet-spaces"}),"Empty/quiet spaces"),(0,n.kt)("p",null,"If there is empty space at the beginning and end of an audio file, it is advised that the file is cropped at the head and the tail to ensure that the empty space does not contribute to downstream calculations. However, this does not mean that all empty space during speech should be cropped out considering those pauses in speech may actually be biomarkers of health and functioning. However, if the user's audio file contains separate sections of speech, then it is recommended that the file is trimmed accordingly."),(0,n.kt)("h2",d({},{id:"background-noise"}),"Background noise"),(0,n.kt)("p",null,"Given the package will process variables from any audio that is inputted, that includes any background noise that may be part of the file. Background noise will lead to a lower signal-to-noise ratio for all audio marker calculations and should be minimized whenever possible. If an audio file has sustained background noise (e.g. a fan, a murmur in a room), it will affect the accuracy of the calculations. Future versions of this package may conduct additional steps to remove background noise but for now, the user must be cognizant of how other sounds in the audio file may be impacting the measurements."),(0,n.kt)("h2",d({},{id:"video-data-quality"}),"Video data quality"),(0,n.kt)("p",null,"Please be cognizant of data quality. This includes ensuring that the face is close enough to the camera that individual features are distinguishable, that lighting is consistent across the face e.g. there are no strong shadows, etc. that are going across the face, which could affect the calculations. It is also important that the entirety of the face is in the frame, which can sometimes be an issue if the face is too close to the camera e.g. if the individual is recording on a smartphone front-facing camera and brings it close to their face to speak."),(0,n.kt)("h2",d({},{id:"persons-per-audio"}),"Persons per audio"),(0,n.kt)("p",null,"Similar to Section 6.2.2, OpenDBM\u2019s assumption is that only one person is represented in the audio. Hence, if the audio contains the voice and/or speech of persons other than the individual whose behavior the user is trying to measure, then it is the user\u2019s responsibility to crop out those parts of the audio. In such cases, the user can crop out all relevant sections, save them separately, and process them separately as individual files\u2013\u2013or they can concatenate them after cropping and process them as one file. In either case, the final measurements are not affected, so we suggest doing whatever is more convenient and requires less manual work."))}v.isMDXComponent=!0}}]);