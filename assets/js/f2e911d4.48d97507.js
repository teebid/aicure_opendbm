"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[4731],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6386:function(e,t,n){n.d(t,{Z:function(){return p}});var o=n(7378),r=n(8944),a="tabItem_wHwb",l=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return o.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(a,n)},{hidden:t}),e)}},7789:function(e,t,n){n.d(t,{Z:function(){return w}});var o=n(7378),r=n(8944),a=n(4185),l=n(7886),i=n(7184),s=n(2112),u="tabList_J5MA",c="tabItem_l0OV",p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&y(e,n,t[n]);if(h)for(var n of h(t))b.call(t,n)&&y(e,n,t[n]);return e};function k(e){var t,n;const{lazy:a,block:p,defaultValue:h,values:f,groupId:b,className:y}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=null!=f?f:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,l.l)(w,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===h?h:null!=(n=null!=h?h:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==O&&!w.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:D,setTabGroupChoices:T}=(0,i.U)(),[I,N]=(0,o.useState)(O),j=[],{blockElementScrollPositionUntilNextRender:P}=(0,s.o5)();if(null!=b){const e=D[b];null!=e&&e!==I&&w.some((t=>t.value===e))&&N(e)}const B=e=>{const t=e.currentTarget,n=j.indexOf(t),o=w[n].value;o!==I&&(P(t),N(o),null!=b&&T(b,String(o)))},M=e=>{var t,n;let o=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;o=null!=(t=j[n])?t:j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;o=null!=(n=j[t])?n:j[j.length-1];break}}null==o||o.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},y)},w.map((({value:e,label:t,attributes:n})=>{return o.createElement("li",(a=g({role:"tab",tabIndex:I===e?0:-1,"aria-selected":I===e,key:e,ref:e=>j.push(e),onKeyDown:M,onFocus:B,onClick:B},n),l={className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":I===e})},d(a,m(l))),null!=t?t:e);var a,l}))),a?(0,o.cloneElement)(k.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function w(e){const t=(0,a.Z)();return o.createElement(k,g({key:String(t)},e))}},743:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return h},metadata:function(){return b},toc:function(){return g}});var o=n(5318),r=n(7789),a=n(6386),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&d(e,n,t[n]);return e};const h={id:"beginner-installation",title:"Installation for Beginner",description:"Beginner Installation"},f=void 0,b={unversionedId:"beginner-installation",id:"beginner-installation",title:"Installation for Beginner",description:"Beginner Installation",source:"@site/../docs/beginner-installation.md",sourceDirName:".",slug:"/beginner-installation",permalink:"/aicure_opendbm/docs/next/beginner-installation",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/beginner-installation.md",tags:[],version:"current",lastUpdatedAt:1661237380,formattedLastUpdatedAt:"8/23/2022",frontMatter:{id:"beginner-installation",title:"Installation for Beginner",description:"Beginner Installation"},sidebar:"docs",previous:{title:"Dependencies Installation",permalink:"/aicure_opendbm/docs/next/dependencies-installation"},next:{title:"Installation for Pro",permalink:"/aicure_opendbm/docs/next/pro-installation"}},y={},g=[{value:"OpenDBM installation for beginners",id:"opendbm-installation-for-beginners",level:2},{value:"Install GitHub and clone OpenDBM",id:"install-github-and-clone-opendbm",level:3},{value:"Install Docker and build your images",id:"install-docker-and-build-your-images",level:3},{value:"Get familiar with docker",id:"get-familiar-with-docker",level:4},{value:"Build Docker image",id:"build-docker-image",level:4}],k={toc:g};function w(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&u)for(var o of u(e))t.indexOf(o)<0&&p.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=m(m({},k),d),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"This chapter should help with getting OpenDBM set up on your system. OpenDBM is meant to be accessible to everyone\u2013\u2013including folks who are not necessarily technical. If you feel comfortable with terminal, git, and docker, skip to Section 2.2. For everyone else, Section 2.1 accomplishes the same steps in Section 2.2\u2013\u2013just with a lot more guidance along the way."),(0,o.kt)("h2",m({},{id:"opendbm-installation-for-beginners"}),"OpenDBM installation for beginners"),(0,o.kt)("p",null,"Alright, you want to measure digital biomarkers from your data but all of this pretty much just feels like magic right now. No worries, you do not need to know how to code to use OpenDBM. We\u2019ll break it down for you. Let\u2019s get started. "),(0,o.kt)("h3",m({},{id:"install-github-and-clone-opendbm"}),"Install GitHub and clone OpenDBM"),(0,o.kt)("p",null,"GitHub is just where we\u2013\u2013and most other people\u2013\u2013store code and other stuff. They do so in \u2018repositories\u2019 or \u2018repos,\u2019 which are basically just folders of code (and other stuff). The first thing you\u2019re going to do is clone i.e. copy/download the OpenDBM repo from GitHub into a folder on your computer. You can do this manually, even though that\u2019s lame, or by using the GitHub CLI."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"manual",label:"The manual way",default:!0,mdxType:"TabItem"},"You can manually clone the [repo](https://github.com/AiCure/open_dbm/discussions) by finding the Download ZIP button shown below:",(0,o.kt)("figure",null,(0,o.kt)("img",{src:"/docs/assets/githubodbm.png",width:"1000",alt:"Screenshot of OpenDBM Github page"}),(0,o.kt)("figcaption",null,"Screenshot of OpenDBM Github page.")),(0,o.kt)("p",null,"Then, you can save the (unzipped) folder anywhere you want on your computer. Make sure it\u2019s an easy location since you\u2019ll have to navigate to it a lot to use OpenDBM.")),(0,o.kt)(a.Z,{value:"better",label:"The better way",mdxType:"TabItem"},(0,o.kt)("p",null,"GitHub also has a command line interface (CLI) that allows you to conduct a lot of GitHub-related operations straight from your ",(0,o.kt)("strong",{parentName:"p"},"Terminal")," (if you\u2019re on Mac/Linux) or ",(0,o.kt)("strong",{parentName:"p"},"Command Prompt")," (if you\u2019re on a PC). This is really helpful down the road for a bunch of reasons."),(0,o.kt)("p",null,"To get started with GitHub CLI, just follow the instructions ",(0,o.kt)("a",m({parentName:"p"},{href:"https://github.com/cli/cli#installation"}),"they\u2019ve laid out")," on their website."),(0,o.kt)("p",null,"Once you\u2019re done with that, you can use the GitHub CLI to clone OpenDBM. "),(0,o.kt)("p",null,"But first, let\u2019s open ",(0,o.kt)("strong",{parentName:"p"},"Terminal / Command Prompt")," and navigate to the folder where you want to store the OpenDBM code. If you have never used Terminal or Command Prompt before, no worries: These are good links for quick primers on navigating folders in ",(0,o.kt)("a",m({parentName:"p"},{href:"https://computers.tutsplus.com/tutorials/navigating-the-terminal-a-gentle-introduction--mac-3855"}),"Mac")," and ",(0,o.kt)("a",m({parentName:"p"},{href:"https://riptutorial.com/cmd/example/8646/navigating-in-cmd"}),"Windows"),"."),(0,o.kt)("p",null,"Once you\u2019re in the folder where you want to clone OpenDBM, you can use git clone by pasting the command shown below into ",(0,o.kt)("strong",{parentName:"p"},"Terminal / Command Prompt")," and hitting Enter. Once you do that, it\u2019ll download the OpenDBM code from GitHub onto your system (this will take a little bit). "),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/AiCure/open_dbm.git\n")),(0,o.kt)("p",null,"Once that\u2019s done, you should be able to see a folder in your ",(0,o.kt)("strong",{parentName:"p"},"Finder / File Explorer")," (or from within ",(0,o.kt)("strong",{parentName:"p"},"Terminal / Command Prompt"),", of course) called open_dbm with all the contents you saw listed on the GutHub repo. Now we\u2019re getting somewhere."))),(0,o.kt)("h3",m({},{id:"install-docker-and-build-your-images"}),"Install Docker and build your images"),(0,o.kt)("p",null,"Anytime you install a proper application on your computer (e.g. let\u2019s say you download Spotify or Skype), it will most likely come with all the things it needs to be able to run successfully. I\u2019m sorry to say this is absolutely not the case when downloading software from GitHub. "),(0,o.kt)("p",null,"As has been mentioned before, OpenDBM is built \u2018on top of\u2019 a bunch of existing open source tools. That means it depends on a lot of other software to function and do the things it needs to do. And the user is responsible for scouring the internet for OpenDBM\u2019s \u2018dependencies,\u2019 listed in the requirements.txt file that comes with it, and installing each and every one of them. "),(0,o.kt)("p",null,"Normally, that\u2019s exactly what you\u2019d have to do\u2013\u2013and we wouldn\u2019t feel bad about it; it\u2019s just how things are. But, we found that some of OpenDBM\u2019s critical dependencies, such as OpenFace, are actually quite finicky to install\u2013\u2013even for pros. So, we\u2019ve come up with a solution."),(0,o.kt)("p",null,"We\u2019re happy to report that OpenDBM does indeed come with all its dependencies. But there are a few extra steps involved to make that work\u2013\u2013and it requires learning a bit about Docker."),(0,o.kt)("h4",m({},{id:"get-familiar-with-docker"}),"Get familiar with docker"),(0,o.kt)("p",null,"As is so wonderfully summarized on ",(0,o.kt)("a",m({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/architecture/microservices/container-docker-introduction/docker-defined"}),"this website"),", \u201cDocker is an open-source project for automating the deployment of applications as portable, self-sufficient containers that can run on the cloud or on-premises. Docker is also a company that promotes and evolves this technology.\u201d"),(0,o.kt)("p",null,"Basically, it packages up all the dependencies that you would otherwise have to install into a \u2018container,\u2019 where all dependencies conveniently come pre-installed. So, as long as you\u2019re using OpenDBM from within that container, you need not worry about all the dependencies. "),(0,o.kt)("p",null,"This will all make more sense in a bit. "),(0,o.kt)("p",null,"So, follow the ",(0,o.kt)("a",m({parentName:"p"},{href:"https://docs.docker.com/desktop/"}),"instructions on the Docker website")," to install Docker on your system. We recommend you use the latest stable version. Once downloaded and installed, launch Docker, open Terminal / Command Prompt, and check the version to ensure that Docker is properly installed and running:"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"% docker --version\nDocker version 19.03.12, build 48a66213fe\n")),(0,o.kt)("p",null,"If you\u2019re on a Mac, Docker should also show up in your Menu bar (I would give a screenshot for PC too but unfortunately I don\u2019t have one). Make sure it states \u2018Docker Desktop is running\u2019"),(0,o.kt)("figure",null,(0,o.kt)("img",{src:"/docs/assets/docker_running.png",width:"500",alt:"Screenshot of Docker running"}),(0,o.kt)("figcaption",null,"Screenshot of Docker running.")),(0,o.kt)("h4",m({},{id:"build-docker-image"}),"Build Docker image"),(0,o.kt)("p",null,"When you cloned OpenDBM onto your computer, it contained a Docker file (you can see for yourself; it\u2019s called Dockerfile). This file is basically a set of instructions that will create the docker image upon which the aforementioned Docker container will be built. Don\u2019t sweat the details; you can build the Docker image just by using a single command."),(0,o.kt)("p",null,"While in ",(0,o.kt)("strong",{parentName:"p"},"Terminal / Command Prompt"),", navigate to the inside of the folder where you cloned OpenDBM. So, if you cloned OpenDBM in ",(0,o.kt)("strong",{parentName:"p"},"/Users/JohnWick"),", then ",(0,o.kt)("strong",{parentName:"p"},"cd")," into the ",(0,o.kt)("strong",{parentName:"p"},"open_dbm")," folder so that when you type the ",(0,o.kt)("strong",{parentName:"p"},"pwd")," command, you should see that you\u2019re in ",(0,o.kt)("strong",{parentName:"p"},"/Users/JohnWick/open_dbm"),". From here, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"% docker build --tag dbm .\n")),(0,o.kt)("p",null,"This should set off an installation script to build the docker image. It will take some time to run. On a regular Macbook Pro, that\u2019s around 20-40 minutes to fully execute."),(0,o.kt)("p",null,"Once it\u2019s done running, you can run the following command and it should show you the Docker image that you just created."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"% docker images\n\nREPOSITORY     TAG        IMAGE ID         CREATED         SIZE\ndbm            latest     4ad5c2b21553     2 hours ago     4.98GB\n")),(0,o.kt)("p",null,"If you run into any problems here, please use the ",(0,o.kt)("a",m({parentName:"p"},{href:"https://github.com/AiCure/open_dbm/issues"}),"Issues")," tab on the OpenDBM GitHub page to report the error you see and we will try our best to resolve it as soon as possible. We\u2019ve even created an Issue template for you to follow that should pop up automatically."),(0,o.kt)("p",null,"Let\u2019s say you don\u2019t run into any issues and everything runs smoothly. You\u2019re\u2026 kinda done with installation. You can skip ",(0,o.kt)("a",m({parentName:"p"},{href:"pro-installation"}),"Installation for Pro"),". Chapter 3 will go over how to use OpenDBM to calculate digital biomarkers from your data. Good news: That also just requires a single command."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now that you\u2019ve covered OpenDBM installation, let\u2019s dive deeper on some of these core modules by looking at ",(0,o.kt)("a",m({parentName:"p"},{href:"mac-linux-usage"}),"Usage"),"."))}w.isMDXComponent=!0}}]);