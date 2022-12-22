"use strict";(self.webpackChunkwww_cloudcarbonfootprint_org=self.webpackChunkwww_cloudcarbonfootprint_org||[]).push([[971],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(o),f=r,h=l["".concat(u,".").concat(f)]||l[f]||p[f]||i;return o?n.createElement(h,a(a({ref:t},d),{},{components:o})):n.createElement(h,a({ref:t},d))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},1269:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return l},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var n=o(3117),r=(o(7294),o(3905));const i={id:"overview",title:"Overview",slug:"/",sidebar_position:1},a=void 0,c={unversionedId:"overview",id:"overview",title:"Overview",description:"Cloud Carbon Footprint provides a way for organizations to measure, monitor, and reduce their carbon emissions from the cloud. It supports connecting to multiple cloud providers, allowing you to get a full picture of your cloud emissions.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",slug:"/",sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Methodology",permalink:"/docs/methodology"}},u={},s=[{value:"Vision",id:"vision",level:3},{value:"How it works",id:"how-it-works",level:3},{value:"Fitting Cloud Carbon Footprint to your needs",id:"fitting-cloud-carbon-footprint-to-your-needs",level:3},{value:"Trying it out",id:"trying-it-out",level:3}],d={toc:s};function l(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Cloud Carbon Footprint provides a way for organizations to measure, monitor, and reduce their carbon emissions from the cloud. It supports connecting to multiple cloud providers, allowing you to get a full picture of your cloud emissions."),(0,r.kt)("h3",{id:"vision"},"Vision"),(0,r.kt)("p",null,"The vision for this product is to be a trusted tool for its accuracy and comprehensiveness, and aids organizations to take tangible steps towards reducing their cloud emissions. In its future, we see built-in intelligence to make recommendations on actions that can be taken and what impact they will have."),(0,r.kt)("p",null,"As an open source project, we hope that its evolution and direction is community driven and meets the needs and use cases identified. We welcome all feedback and input on how this product can grow, in terms of directions, features, methodology changes, and code updates.  "),(0,r.kt)("p",null,"For more visibility into the work planned and happening, please visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/projects/1"},"project board")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/issues/new/choose"},"create an issue.")," If you have feedback, questions, or if you\u2019d like to collaborate on shaping the product direction, please reach out to ",(0,r.kt)("a",{parentName:"p",href:"mailto:green-cloud@thoughtworks.com"},"green-cloud@thoughtworks.com"),"."),(0,r.kt)("h3",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"Cloud Carbon Footprint works by taking your cloud provider usage data, converting it into energy, and then taking into account the power usage effectiveness of the cloud provider\u2019s data centers and the carbon intensity of the region where the data center pulls power from.",(0,r.kt)("br",{parentName:"p"}),"\n","For a more detailed and in depth explanation into the approach and methodology, please reference the ",(0,r.kt)("a",{parentName:"p",href:"/docs/methodology"},"Methodology Page.")),(0,r.kt)("h3",{id:"fitting-cloud-carbon-footprint-to-your-needs"},"Fitting Cloud Carbon Footprint to your needs"),(0,r.kt)("p",null,"The code has been written using domain driven design, to allow for easy extension and customization. With the core estimation logic, API, front-end dashboard, and CLI separated, it is possible to fit it to your needs, for instance using the core logic or API within an existing application, or displaying the dashboard within an existing dev portal."),(0,r.kt)("h3",{id:"trying-it-out"},"Trying it out"),(0,r.kt)("p",null,"We have provided a few ways for you to get up and running, depending on your situation. To simply test out Cloud Carbon Footprint quickly, we have provided a few packages that can help you quickly spin up the whole app or the portion(s) you need. To test drive, visit the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started"},"Try Now")," page."),(0,r.kt)("p",null,"If you are looking to run the app locally or to contribute, we recommend ",(0,r.kt)("a",{parentName:"p",href:"/docs/introduction"},"reviewing how to get started"),". After doing so, you can get up and ",(0,r.kt)("a",{parentName:"p",href:"/docs/run-with-mocked-data"},"running quickly with mocked data"),", or go ahead and ",(0,r.kt)("a",{parentName:"p",href:"/docs/introduction#connecting-your-data"},"connect your own cloud data")," and estimate your actual emissions."))}l.isMDXComponent=!0}}]);