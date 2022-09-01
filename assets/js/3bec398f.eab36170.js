"use strict";(self.webpackChunkopendbm_website=self.webpackChunkopendbm_website||[]).push([[6653],{5318:function(t,l,n){n.d(l,{Zo:function(){return i},kt:function(){return m}});var e=n(7378);function r(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function u(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function a(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?u(Object(n),!0).forEach((function(l){r(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function k(t,l){if(null==t)return{};var n,e,r=function(t,l){if(null==t)return{};var n,e,r={},u=Object.keys(t);for(e=0;e<u.length;e++)n=u[e],l.indexOf(n)>=0||(r[n]=t[n]);return r}(t,l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(e=0;e<u.length;e++)n=u[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=e.createContext({}),o=function(t){var l=e.useContext(d),n=l;return t&&(n="function"==typeof t?t(l):a(a({},l),t)),n},i=function(t){var l=o(t.components);return e.createElement(d.Provider,{value:l},t.children)},c={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},s=e.forwardRef((function(t,l){var n=t.components,r=t.mdxType,u=t.originalType,d=t.parentName,i=k(t,["components","mdxType","originalType","parentName"]),s=o(n),m=r,p=s["".concat(d,".").concat(m)]||s[m]||c[m]||u;return n?e.createElement(p,a(a({ref:l},i),{},{components:n})):e.createElement(p,a({ref:l},i))}));function m(t,l){var n=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var u=n.length,a=new Array(u);a[0]=s;var k={};for(var d in l)hasOwnProperty.call(l,d)&&(k[d]=l[d]);k.originalType=t,k.mdxType="string"==typeof t?t:r,a[1]=k;for(var o=2;o<u;o++)a[o]=n[o];return e.createElement.apply(null,a)}return e.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6892:function(t,l,n){n.r(l),n.d(l,{assets:function(){return _},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return f}});var e=n(5318),r=Object.defineProperty,u=Object.defineProperties,a=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,l,n)=>l in t?r(t,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[l]=n,c=(t,l)=>{for(var n in l||(l={}))d.call(l,n)&&i(t,n,l[n]);if(k)for(var n of k(l))o.call(l,n)&&i(t,n,l[n]);return t};const s={id:"basic-usage",title:"Basic Usage"},m=void 0,p={unversionedId:"basic-usage",id:"version-2.1/basic-usage",title:"Basic Usage",description:"Prerequisites read",source:"@site/versioned_docs/version-2.1/basic-usage.md",sourceDirName:".",slug:"/basic-usage",permalink:"/aicure_opendbm/docs/basic-usage",draft:!1,editUrl:"https://github.com/AiCure/open_dbm/blob/master/docs/../docs/basic-usage.md",tags:[],version:"2.1",lastUpdatedAt:1662062107,formattedLastUpdatedAt:"9/1/2022",frontMatter:{id:"basic-usage",title:"Basic Usage"},sidebar:"docs",previous:{title:"OpenFace Installation",permalink:"/aicure_opendbm/docs/openface-docker-installation"},next:{title:"Installation for Beginner",permalink:"/aicure_opendbm/docs/beginner-installation"}},_={},f=[{value:"Prerequisites read",id:"prerequisites-read",level:4}],h={toc:f};function b(t){var l,n=t,{components:r}=n,i=((t,l)=>{var n={};for(var e in t)d.call(t,e)&&l.indexOf(e)<0&&(n[e]=t[e]);if(null!=t&&k)for(var e of k(t))l.indexOf(e)<0&&o.call(t,e)&&(n[e]=t[e]);return n})(n,["components"]);return(0,e.kt)("wrapper",(l=c(c({},h),i),u(l,a({components:r,mdxType:"MDXLayout"}))),(0,e.kt)("h4",c({},{id:"prerequisites-read"}),"Prerequisites read"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("a",c({parentName:"li"},{href:"dependencies-installation"}),"Dependencies Installation")),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("a",c({parentName:"li"},{href:"openface-docker-installation"}),"OpenFace Installation")),(0,e.kt)("li",{parentName:"ul"},"Make sure to install the distribution package first.")),(0,e.kt)("pre",null,(0,e.kt)("code",c({parentName:"pre"},{className:"language-commandline"}),"pip install opendbm\n")),(0,e.kt)("p",null,"In this section, we are gonna show the basic instruction on how to get biomarker variable from OpenDBM API"),(0,e.kt)("pre",null,(0,e.kt)("code",c({parentName:"pre"},{className:"language-python"}),"from opendbm import Movement\n\n# code below is how to access to other dbm groups\n# from opendbm import FacialActivity, VerbalAccoustics, Speech\n")),(0,e.kt)("pre",null,(0,e.kt)("code",c({parentName:"pre"},{className:"language-python"}),'path = "movement_video_test.mp4"\n')),(0,e.kt)("pre",null,(0,e.kt)("code",c({parentName:"pre"},{className:"language-python"}),"#initiate the model\nmodel = Movement()\n")),(0,e.kt)("pre",null,(0,e.kt)("code",c({parentName:"pre"},{className:"language-python"}),"#Feed input data to the model\nmodel.fit(path)\n")),(0,e.kt)("p",null,"After we processed the data with our model, now we can get all biomarker variables related to the Movement category"),(0,e.kt)("pre",null,(0,e.kt)("code",c({parentName:"pre"},{className:"language-python"}),"#Get facial tremor\ntremor = model.get_facial_tremor()\ntremor.to_dataframe().T\n")),(0,e.kt)("div",null,(0,e.kt)("table",{border:"1",class:"dataframe",style:{width:"50%"}},(0,e.kt)("thead",null,(0,e.kt)("tr",{style:{textAlign:"right"}},(0,e.kt)("th",null),(0,e.kt)("th",null,"0"))),(0,e.kt)("tbody",null,(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_features_mean_5"),(0,e.kt)("td",null,"8.594771")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_tremor_median_5"),(0,e.kt)("td",null,"3.87593")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_disp_median_5"),(0,e.kt)("td",null,"0.728575")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_corr_5"),(0,e.kt)("td",null,"0.254649")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_features_mean_12"),(0,e.kt)("td",null,"3.719481")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_tremor_median_12"),(0,e.kt)("td",null,"2.806784")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_disp_median_12"),(0,e.kt)("td",null,"0.723145")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_corr_12"),(0,e.kt)("td",null,"0.456196")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_features_mean_8"),(0,e.kt)("td",null,"6.721486")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_tremor_median_8"),(0,e.kt)("td",null,"3.586131")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_disp_median_8"),(0,e.kt)("td",null,"0.825251")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_corr_8"),(0,e.kt)("td",null,"0.391167")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_features_mean_48"),(0,e.kt)("td",null,"2.860846")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_tremor_median_48"),(0,e.kt)("td",null,"2.174091")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_disp_median_48"),(0,e.kt)("td",null,"0.86145")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_corr_48"),(0,e.kt)("td",null,"0.646405")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_features_mean_54"),(0,e.kt)("td",null,"3.678142")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_tremor_median_54"),(0,e.kt)("td",null,"2.669815")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_disp_median_54"),(0,e.kt)("td",null,"0.886973")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_corr_54"),(0,e.kt)("td",null,"0.578275")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_features_mean_28"),(0,e.kt)("td",null,"0.0")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_tremor_median_28"),(0,e.kt)("td",null,"0.0")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_disp_median_28"),(0,e.kt)("td",null,"0.677184")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_corr_28"),(0,e.kt)("td",null,"1.0")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_features_mean_51"),(0,e.kt)("td",null,"0.765473")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_tremor_median_51"),(0,e.kt)("td",null,"0.54762")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_disp_median_51"),(0,e.kt)("td",null,"0.750383")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_corr_51"),(0,e.kt)("td",null,"0.897752")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_features_mean_66"),(0,e.kt)("td",null,"1.971278")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_tremor_median_66"),(0,e.kt)("td",null,"1.49907")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_disp_median_66"),(0,e.kt)("td",null,"0.938139")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_corr_66"),(0,e.kt)("td",null,"0.776121")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_features_mean_57"),(0,e.kt)("td",null,"2.70601")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_tremor_median_57"),(0,e.kt)("td",null,"2.019033")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_disp_median_57"),(0,e.kt)("td",null,"0.988482")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"fac_corr_57"),(0,e.kt)("td",null,"0.713824")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"error_reason"),(0,e.kt)("td",null))))),(0,e.kt)("pre",null,(0,e.kt)("code",c({parentName:"pre"},{className:"language-python"}),"##Get Eye Blink\neye_blink = model.get_eye_blink()\neye_blink.to_dataframe()\n")),(0,e.kt)("div",null,(0,e.kt)("table",{border:"1",class:"dataframe",style:{width:"50%"}},(0,e.kt)("thead",null,(0,e.kt)("tr",{style:{textAlign:"right"}},(0,e.kt)("th",null),(0,e.kt)("th",null,"mov_blink_ear"),(0,e.kt)("th",null,"vid_dur"),(0,e.kt)("th",null,"fps"),(0,e.kt)("th",null,"mov_blinkframes"),(0,e.kt)("th",null,"mov_blinkdur"),(0,e.kt)("th",null,"dbm_master_url"))),(0,e.kt)("tbody",null,(0,e.kt)("tr",null,(0,e.kt)("th",null,"0"),(0,e.kt)("td",null,"0.124566"),(0,e.kt)("td",null,"33.877313"),(0,e.kt)("td",null,"29"),(0,e.kt)("td",null,"19"),(0,e.kt)("td",null,"0.655172"),(0,e.kt)("td",null,"movement_video_test.mp4")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"1"),(0,e.kt)("td",null,"0.125343"),(0,e.kt)("td",null,"33.877313"),(0,e.kt)("td",null,"29"),(0,e.kt)("td",null,"49"),(0,e.kt)("td",null,"1.034483"),(0,e.kt)("td",null,"movement_video_test.mp4")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"2"),(0,e.kt)("td",null,"0.108713"),(0,e.kt)("td",null,"33.877313"),(0,e.kt)("td",null,"29"),(0,e.kt)("td",null,"120"),(0,e.kt)("td",null,"2.448276"),(0,e.kt)("td",null,"movement_video_test.mp4")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"3"),(0,e.kt)("td",null,"0.097553"),(0,e.kt)("td",null,"33.877313"),(0,e.kt)("td",null,"29"),(0,e.kt)("td",null,"169"),(0,e.kt)("td",null,"1.689655"),(0,e.kt)("td",null,"movement_video_test.mp4")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"4"),(0,e.kt)("td",null,"0.111874"),(0,e.kt)("td",null,"33.877313"),(0,e.kt)("td",null,"29"),(0,e.kt)("td",null,"241"),(0,e.kt)("td",null,"2.482759"),(0,e.kt)("td",null,"movement_video_test.mp4")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"5"),(0,e.kt)("td",null,"0.077082"),(0,e.kt)("td",null,"33.877313"),(0,e.kt)("td",null,"29"),(0,e.kt)("td",null,"328"),(0,e.kt)("td",null,"3.000000"),(0,e.kt)("td",null,"movement_video_test.mp4")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"6"),(0,e.kt)("td",null,"0.124804"),(0,e.kt)("td",null,"33.877313"),(0,e.kt)("td",null,"29"),(0,e.kt)("td",null,"387"),(0,e.kt)("td",null,"2.034483"),(0,e.kt)("td",null,"movement_video_test.mp4")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"7"),(0,e.kt)("td",null,"0.082149"),(0,e.kt)("td",null,"33.877313"),(0,e.kt)("td",null,"29"),(0,e.kt)("td",null,"506"),(0,e.kt)("td",null,"4.103448"),(0,e.kt)("td",null,"movement_video_test.mp4")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"8"),(0,e.kt)("td",null,"0.083041"),(0,e.kt)("td",null,"33.877313"),(0,e.kt)("td",null,"29"),(0,e.kt)("td",null,"550"),(0,e.kt)("td",null,"1.517241"),(0,e.kt)("td",null,"movement_video_test.mp4")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"9"),(0,e.kt)("td",null,"0.148836"),(0,e.kt)("td",null,"33.877313"),(0,e.kt)("td",null,"29"),(0,e.kt)("td",null,"687"),(0,e.kt)("td",null,"4.724138"),(0,e.kt)("td",null,"movement_video_test.mp4")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"10"),(0,e.kt)("td",null,"0.099926"),(0,e.kt)("td",null,"33.877313"),(0,e.kt)("td",null,"29"),(0,e.kt)("td",null,"734"),(0,e.kt)("td",null,"1.620690"),(0,e.kt)("td",null,"movement_video_test.mp4")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"11"),(0,e.kt)("td",null,"0.083078"),(0,e.kt)("td",null,"33.877313"),(0,e.kt)("td",null,"29"),(0,e.kt)("td",null,"809"),(0,e.kt)("td",null,"2.586207"),(0,e.kt)("td",null,"movement_video_test.mp4")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"12"),(0,e.kt)("td",null,"0.124501"),(0,e.kt)("td",null,"33.877313"),(0,e.kt)("td",null,"29"),(0,e.kt)("td",null,"847"),(0,e.kt)("td",null,"1.310345"),(0,e.kt)("td",null,"movement_video_test.mp4")),(0,e.kt)("tr",null,(0,e.kt)("th",null,"13"),(0,e.kt)("td",null,"0.149668"),(0,e.kt)("td",null,"33.877313"),(0,e.kt)("td",null,"29"),(0,e.kt)("td",null,"931"),(0,e.kt)("td",null,"2.896552"),(0,e.kt)("td",null,"movement_video_test.mp4"))))))}b.isMDXComponent=!0}}]);