"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[9622],{5318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6537:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return b}});var n=a(5318),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&u(e,a,t[a]);if(s)for(var a of s(t))p.call(t,a)&&u(e,a,t[a]);return e};const d={id:"mac-linux-usage",title:"Mac / Linux Usage"},h=void 0,m={unversionedId:"mac-linux-usage",id:"mac-linux-usage",title:"Mac / Linux Usage",description:"Mac / Linux",source:"@site/../docs/mac-linux-usage.md",sourceDirName:".",slug:"/mac-linux-usage",permalink:"/aicure_opendbm/docs/next/mac-linux-usage",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/mac-linux-usage.md",tags:[],version:"current",lastUpdatedAt:1658605703,formattedLastUpdatedAt:"7/23/2022",frontMatter:{id:"mac-linux-usage",title:"Mac / Linux Usage"},sidebar:"docs",previous:{title:"More Resources",permalink:"/aicure_opendbm/docs/next/more-resources"},next:{title:"Windows Usage",permalink:"/aicure_opendbm/docs/next/windows-usage"}},f={},b=[{value:"Mac / Linux",id:"mac--linux",level:2},{value:"Input path",id:"input-path",level:3},{value:"Output Path",id:"output-path",level:3},{value:"DBM Group",id:"dbm-group",level:3},{value:"Transcription",id:"transcription",level:3}],k={toc:b};function g(e){var t,a=e,{components:o}=a,u=((e,t)=>{var a={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},k),u),r(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h2",c({},{id:"mac--linux"}),"Mac / Linux"),(0,n.kt)("p",null,"Congratulations, it\u2019s way easier to use OpenDBM on Mac or Linux compared to Windows."),(0,n.kt)("p",null,"Essentially, all you need to do is run a single command from the ",(0,n.kt)("strong",{parentName:"p"},"open_dbm")," folder. Here it is: "),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"% bash process_dbm.sh --input_path=<...> --output_path=<...>\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"bash")," is the command that calls the script process_dbm.sh. "),(0,n.kt)("p",null,"There are two required parameters, the ",(0,n.kt)("inlineCode",{parentName:"p"},"--input_path")," and the ",(0,n.kt)("inlineCode",{parentName:"p"},"--output_path"),". We\u2019ll go over these in Sections 3.1.1 and 3.1.2. There are also two useful optional parameters: ",(0,n.kt)("inlineCode",{parentName:"p"},"--dbm_group")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"--tr"),". We\u2019ll go over those in Sections 3.1.3 and 3.1.4."),(0,n.kt)("h3",c({},{id:"input-path"}),"Input path"),(0,n.kt)("p",null,"This is simply the path to the data you want to process. For example, let\u2019s pretend you want to process all the videos in the ",(0,n.kt)("strong",{parentName:"p"},"sample_data")," folder that comes included with OpenDBM:"),(0,n.kt)("figure",null,(0,n.kt)("img",{src:"/docs/assets/mac_linux_1.png",width:"1000",alt:"Sample Data screenshot"}),(0,n.kt)("figcaption",null,"Sample Data screenshot")),(0,n.kt)("p",null,"The path to this data would be something like ",(0,n.kt)("strong",{parentName:"p"},"/Users/JohnWick/open_dbm/sample_data"),". So, for the ",(0,n.kt)("inlineCode",{parentName:"p"},"--input_path")," parameter in the command, you\u2019d put in the path to that folder like this: ",(0,n.kt)("inlineCode",{parentName:"p"},"--input_path=/Users/JohnWick/open_dbm/sample_data"),". By doing so, you\u2019re asking to process all four videos in that folder. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Helpful tip:")," On Mac, if you \u2018copy\u2019 the folder you want to process from ",(0,n.kt)("strong",{parentName:"p"},"Finder")," and \u2018paste\u2019 it into ",(0,n.kt)("strong",{parentName:"p"},"Terminal"),", it automatically pastes the path to that folder.")),(0,n.kt)("p",null,"OpenDBM allows for processing of individual video/audio files or bulk processing of several video/audio files saved together in a folder. The input path can either lead to a single file, in which case only that file will be processed, or it can lead to a folder with several files, in which case all compatible files in that folder will be processed. This path can be anywhere."),(0,n.kt)("p",null,"All video files must be in ",(0,n.kt)("strong",{parentName:"p"},"MP4")," or ",(0,n.kt)("strong",{parentName:"p"},"MOV")," format and all audio files must be in ",(0,n.kt)("strong",{parentName:"p"},"WAV")," or ",(0,n.kt)("strong",{parentName:"p"},"MP3")," format. The current version of the package leaves the responsibility of converting file types to the correct format to the user; hopefully future versions will handle more file types. Please be careful when using online tools to convert video that may contain sensitive information. If the specified input path does not direct to any ",(0,n.kt)("strong",{parentName:"p"},"MP4, MOV, WAV, or MP3")," files, nothing will happen."),(0,n.kt)("p",null,"At this point, this is what our (incomplete) command would look like:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"% bash process_dbm.sh \n--input_path=/Users/JohnWick/open_dbm/sample_data \n--output_path=<...> \n")),(0,n.kt)("p",null,"Just in case it\u2019s causing any confusion to beginners, ",(0,n.kt)("inlineCode",{parentName:"p"},"--input_path")," does not need to be on a new line here; I\u2019m just showing it this way for clarity (you should enter everything on the same line). This applies to the whole document."),(0,n.kt)("h3",c({},{id:"output-path"}),"Output Path"),(0,n.kt)("p",null,"This is the path where a new folder named ",(0,n.kt)("strong",{parentName:"p"},"output")," will be created and all calculated digital biomarker data will be stored. The structure of the data output is described in Chapter 4."),(0,n.kt)("p",null,"Let\u2019s say, in our example, we want to save our outputted variables on the ",(0,n.kt)("strong",{parentName:"p"},"Desktop"),". The processing command starts looking like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"% bash process_dbm.sh \n--input_path=/Users/JohnWick/open_dbm/sample_data --output_path=/Users/JohnWick/Desktop \n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--input_path")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"--output_path")," are the only two mandatory parameters of the processing function. You should be able to process data at this point. The next two sections go over two optional inputs that are probably pretty good to be familiar with."),(0,n.kt)("h3",c({},{id:"dbm-group"}),"DBM Group"),(0,n.kt)("p",null,"There are several categories of digital biomarkers (DBMs) that are calculated by OpenDBM: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Facial,")," referring to measurements of facial behavior"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Acoustic")," , referring to measurements of vocal acoustics "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Speech,")," referring to measurement of language characteristics"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Movement")," , referring to motor and oculomotor functioning")),(0,n.kt)("p",null,"By default, OpenDBM calculates all of these from any video that is inputted. If only audio is inputted, it calculates acoustic and speech variables. But the user may not be interested in all four types of variables (e.g., maybe they just want to calculate digital biomarkers related to vocal acoustics). In that case, the --dbm_group input can be used to limit the calculation to only that category of biomarker. This functionality exists both to reduce on processing time and to allow for simplicity during subsequent data analysis downstream (see Chapter 4). "),(0,n.kt)("p",null,"There are four possible inputs here: facial, acoustic, speech, and movement. "),(0,n.kt)("p",null,"So, if the user only wants acoustic biomarkers, the processing script would look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"% bash process_dbm.sh \n--input_path=/Users/JohnWick/open_dbm/sample_data --output_path=/Users/JohnWick/Desktop \n--dbm_group=\u2019acoustic\u2019\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," You do need to include the quotation marks around your input for --dbm_group.")),(0,n.kt)("p",null,"If you want, you can also select more than one group of biomarkers. For example, if you wanted to calculate both acoustic and speech biomarkers but not facial or movement ones, your command would look like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"% bash process_dbm.sh \n--input_path=/Users/JohnWick/open_dbm/sample_data --output_path=/Users/JohnWick/Desktop \n--dbm_group=\u2019acoustic speech\u2019\n")),(0,n.kt)("h3",c({},{id:"transcription"}),"Transcription"),(0,n.kt)("p",null,"If the data being processed contains speech, OpenDBM will transcribe that speech into text and calculate a number of measurements from the transcribed text (see Section 5.3 for all speech biomarker variables). However, the speech transcription itself is not saved. This is because it may not always be in the interest of the user to save the transcribed speech. In cases where the user is processing sensitive patient data that may contain ",(0,n.kt)("a",c({parentName:"p"},{href:"https://www.hhs.gov/answers/hipaa/what-is-phi/index.html"}),"Protected Health Information (PHI)"),", ",(0,n.kt)("strong",{parentName:"p"},"the transcribed speech is still considered PHI")," and is subject to strict privacy regulations. Everything that is by default saved in the ",(0,n.kt)("strong",{parentName:"p"},"output")," folder is intentionally designed to not be PHI. "),(0,n.kt)("p",null,"Now, if the user ",(0,n.kt)("em",{parentName:"p"},"wants")," the transcribed text, they have the ",(0,n.kt)("em",{parentName:"p"},"option")," to save it in the ",(0,n.kt)("strong",{parentName:"p"},"output")," folder. They can do this using the ",(0,n.kt)("inlineCode",{parentName:"p"},"--tr")," parameter, and setting it to \u2018on\u2019, as shown below. When they do this, the transcribed text is saved in the output folder as described in Section 4.2.2. "),(0,n.kt)("p",null,"We only advise that the user do this if the data output is being stored in a location where PHI data can be stored, and that the data output folder will never find its way to a place where PHI data can not be stored. I am not your lawyer, nor am I liable for the wrath of HIPAA and GDPR coming down upon you, but please know that transcribed speech is indeed considered PHI, and you do need to make sure you are following all regulations and have full patient consent for it."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"% bash process_dbm.sh --input_path=/Users/JohnWick/open_dbm/sample_data --output_path=/Users/JohnWick/Desktop \n--dbm_group=\u2019acoustic speech\u2019\n--tr=on\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," The \u2018on\u2019 in the ",(0,n.kt)("inlineCode",{parentName:"p"},"--tr")," parameter does not require quotation marks. Why? VJ was lazy.")),(0,n.kt)("p",null,"And that\u2019s it! By executing the ",(0,n.kt)("inlineCode",{parentName:"p"},"bash process_dbm.sh")," command as described in this chapter, you can process data and calculate digital biomarkers. Section 3.2 repeats all this information for folks on Windows. You can skip to Chapter 4, which details how the data output is structured."))}g.isMDXComponent=!0}}]);