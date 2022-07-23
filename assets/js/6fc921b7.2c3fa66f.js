"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[5537],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7770:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return f}});var a=n(5318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&u(e,n,t[n]);return e};const d={id:"windows-usage",title:"Windows Usage"},h=void 0,m={unversionedId:"windows-usage",id:"version-2.1/windows-usage",title:"Windows Usage",description:"Windows",source:"@site/versioned_docs/version-2.1/windows-usage.md",sourceDirName:".",slug:"/windows-usage",permalink:"/aicure_opendbm/docs/windows-usage",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/windows-usage.md",tags:[],version:"2.1",lastUpdatedAt:1658605703,formattedLastUpdatedAt:"7/23/2022",frontMatter:{id:"windows-usage",title:"Windows Usage"},sidebar:"docs",previous:{title:"Mac / Linux Usage",permalink:"/aicure_opendbm/docs/mac-linux-usage"},next:{title:"Derived Variables",permalink:"/aicure_opendbm/docs/derived-variables"}},g={},f=[{value:"Windows",id:"windows",level:2},{value:"Starting the container",id:"starting-the-container",level:3},{value:"Running the main processing script",id:"running-the-main-processing-script",level:3},{value:"Input path",id:"input-path",level:3},{value:"Output path",id:"output-path",level:3},{value:"DBM Group",id:"dbm-group",level:3},{value:"Transcription",id:"transcription",level:3},{value:"Retrieving the output",id:"retrieving-the-output",level:3}],b={toc:f};function k(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},b),u),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("h2",c({},{id:"windows"}),"Windows"),(0,a.kt)("p",null,"Here, we will walk you through how to use the pipeline on Windows. Unfortunately, this process is a little more involved than on Mac/Linux."),(0,a.kt)("h3",c({},{id:"starting-the-container"}),"Starting the container"),(0,a.kt)("p",null,"After a successful build (see Section 2), running the following command should show you something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"> docker images\nREPOSITORY   TAG       IMAGE ID       CREATED           SIZE\ndbm          latest    91e593533c96   26 minutes ago    4.98GB\npython       3.6       25bb503fe8c4   5 days ago        874MB\nubuntu       18.04     6526a1858e5d   3 weeks ago       64.2MB\n")),(0,a.kt)("p",null,"The images have been created but there is still no container. Note the value under IMAGE ID for the ",(0,a.kt)("strong",{parentName:"p"},"dbm")," REPOSITORY and enter it in the command below:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"> docker run -it <IMAGE ID for dbm REPOSITORY> /bin/bash\n")),(0,a.kt)("p",null,"Once you create a new container from this image and execute the container, you can exit anytime by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"root@<CONTAINER ID>:/app# exit\n")),(0,a.kt)("p",null,"If the previous steps were done correctly, you should be able to see your container when running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'> docker ps -a\nCONTAINER ID    IMAGE          COMMAND       CREATED          STATUS     \n7557af03538d    91e593533c96   "/bin/bash"   27 seconds ago   Exited (0)\n')),(0,a.kt)("p",null,"You can now start the container by using the CONTAINER ID above."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"> docker start <CONTAINER ID>\n")),(0,a.kt)("p",null,"Next, you will need to enter the container to execute the pipeline. Remember you can exit the container by typing ",(0,a.kt)("strong",{parentName:"p"},"exit")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"> docker exec -it <CONTAINER ID> bash\n")),(0,a.kt)("h3",c({},{id:"running-the-main-processing-script"}),"Running the main processing script"),(0,a.kt)("p",null,"You are now ready to start processing data. Let\u2019s test if we are set up properly by processing the sample data included in the Github repository. In this example, we will process files in the folder ",(0,a.kt)("strong",{parentName:"p"},"sample_data"),", and return the output to a folder on Desktop."),(0,a.kt)("p",null,"First you need to ",(0,a.kt)("strong",{parentName:"p"},"move")," the directory containing the data you want to process into the docker container in order to execute the pipeline. You can do this using:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"> docker cp .../sample_data <CONTAINER ID>:/app/\n")),(0,a.kt)("p",null,"Verify the location of the ",(0,a.kt)("strong",{parentName:"p"},"sample_data")," directory and its contents in the docker container:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"> docker exec -it <CONTAINER ID> bash\nroot@<CONTAINER ID>:/app# cd sample_data\nroot@<CONTAINER ID>:/app/sample_data# ls\nsubj01_timepoint01.mp4\nsubj01_timepoint02.mp4\nsubj02_timepoint01.mp4\nsubj02_timepoint02.mp4\nroot@<CONTAINER ID>:/app/sample_data# cd ..\nroot@<CONTAINER ID>:/app#\n")),(0,a.kt)("p",null,"This should put you back into the container root directory. This location contains the file",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"process_data.py"),", and calling this script will process video and audio data using the given parameters."),(0,a.kt)("p",null,"In this example, calling the main processing script ",(0,a.kt)("strong",{parentName:"p"},"process_data.py")," will look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"root@<CONTAINER ID>:/app# python3 process_data.py \n--input_path sample_data/ \n--output_path sample_output/\n--dbm_group facial acoustic movement speech \n--tr on\n")),(0,a.kt)("p",null,"The parameters that need to be specified when calling the script are described below."),(0,a.kt)("h3",c({},{id:"input-path"}),"Input path"),(0,a.kt)("p",null,"The location of the files you want to process. If this path leads to a folder, all (supported) files will be processed, but it is also possible to have the path lead to a single file. The supported file formats are currently MP3 and WAV for audio files, and MP4 and MOV for video files. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," this path needs to be inside your docker container.")),(0,a.kt)("h3",c({},{id:"output-path"}),"Output path"),(0,a.kt)("p",null,"The location of the folder where the processed data will be saved. If the folder does not already exist, the path will be generated with the output files saved within it. Similar to the input path, the output path will need to be located ",(0,a.kt)("strong",{parentName:"p"},"inside")," the docker container. Only after successfully running the processing script will you be able to move the output folder out of the container and into your system."),(0,a.kt)("h3",c({},{id:"dbm-group"}),"DBM Group"),(0,a.kt)("p",null,"The biomarker groups you want to calculate, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Facial, ")," referring to measurements of facial behavior"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Acoustic")," , referring to measurements of vocal acoustics "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Speech, ")," referring to measurement of language characteristics"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Movement")," , referring to motor and oculomotor functioning")),(0,a.kt)("p",null,"For a list of all biomarkers within each group, see Section 5. If no group is passed, all possible biomarker groups will be calculated."),(0,a.kt)("h3",c({},{id:"transcription"}),"Transcription"),(0,a.kt)("p",null,"If the data passed contains speech, OpenDBM will transcribe and produce speech variables. ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"However, the transcription itself will not be saved by default."))," If you are processing sensitive patient data, you should know that transcribed speech is still considered PHI. In case you are ",(0,a.kt)("em",{parentName:"p"},"sure")," you\u2019d like to save a copy of the speech transcription, you can turn this toggle ",(0,a.kt)("strong",{parentName:"p"},"on"),"."),(0,a.kt)("h3",c({},{id:"retrieving-the-output"}),"Retrieving the output"),(0,a.kt)("p",null,"If you navigate to the output path within the docker container you should see the output folder you passed earlier containing both a raw and derived output directory. "),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"root@<CONTAINER ID>:/app# cd sample_output/\nroot@<CONTAINER ID>:/app/sample_output# ls\nroot@<CONTAINER ID>:/app/sample_output#\nraw_variables/ derived_variables/\n")),(0,a.kt)("p",null,"You won\u2019t be able to see these files in your system as long as they are in the container, so you need to run the following command to copy them back into your system."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"root@<CONTAINER ID>:/app# exit\n> docker cp <CONTAINER ID>:/app/sample_output Desktop/sample_data\n")),(0,a.kt)("p",null,"Your processed files will be located in the path Desktop/sample_data/sample_output. You\u2019re all set with using OpenDBM! In the next section, we will go over how the outputs are structured."))}k.isMDXComponent=!0}}]);