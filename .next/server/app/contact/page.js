(()=>{var e={};e.id=327,e.ids=[327],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},320:(e,s,a)=>{"use strict";a.r(s),a.d(s,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>d,routeModule:()=>h,tree:()=>c}),a(1843),a(4348),a(5866);var t=a(3191),r=a(8716),i=a(7922),n=a.n(i),o=a(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);a.d(s,l);let c=["",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,1843)),"C:\\Users\\Girija Sh. Mohanta\\Desktop\\Girija_portfolio\\src\\app\\contact\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,4348)),"C:\\Users\\Girija Sh. Mohanta\\Desktop\\Girija_portfolio\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\Girija Sh. Mohanta\\Desktop\\Girija_portfolio\\src\\app\\contact\\page.js"],m="/contact/page",p={require:a,loadChunk:()=>Promise.resolve()},h=new t.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},758:(e,s,a)=>{Promise.resolve().then(a.t.bind(a,2994,23)),Promise.resolve().then(a.t.bind(a,6114,23)),Promise.resolve().then(a.t.bind(a,9727,23)),Promise.resolve().then(a.t.bind(a,9671,23)),Promise.resolve().then(a.t.bind(a,1868,23)),Promise.resolve().then(a.t.bind(a,4759,23))},8081:(e,s,a)=>{Promise.resolve().then(a.bind(a,3125))},4545:(e,s,a)=>{Promise.resolve().then(a.bind(a,3865))},3865:(e,s,a)=>{"use strict";a.d(s,{default:()=>c});var t=a(326),r=a(7577),i=a(5047),n=a(434);a(372);var o=a(9497),l=a(3440);function c(){let e=(0,i.usePathname)(),[s,a]=(0,r.useState)(!1);return(0,t.jsxs)("nav",{className:"navbar",children:[(0,t.jsxs)("div",{className:"logo_container",children:[t.jsx("div",{className:"logo",children:(0,t.jsxs)(n.default,{href:"/",className:"logo_text",children:[t.jsx(o.G,{icon:l.ILF,className:"nav_icon"}),"Girija Shankar"]})}),(0,t.jsxs)("button",{className:`hamburger ${s?"open":""}`,onClick:()=>{a(!s)},children:[t.jsx("span",{className:"line"}),t.jsx("span",{className:"line"}),t.jsx("span",{className:"line"})]})]}),(0,t.jsxs)("ul",{className:`nav-links ${s?"open":""}`,children:[t.jsx("li",{children:(0,t.jsxs)(n.default,{href:"/",className:"/"===e?"active":"",children:[t.jsx(o.G,{icon:l.J9Y,className:"nav_icon"}),"Home"]})}),t.jsx("li",{children:(0,t.jsxs)(n.default,{href:"/about",className:"/about"===e?"active":"",children:[t.jsx(o.G,{icon:l.sqG,className:"nav_icon"}),"About"]})}),t.jsx("li",{children:(0,t.jsxs)(n.default,{href:"/projects",className:"/projects"===e?"active":"",children:[t.jsx(o.G,{icon:l.TmZ,className:"nav_icon"}),"Projects"]})}),t.jsx("li",{children:(0,t.jsxs)(n.default,{href:"/contact",className:"/contact"===e?"active":"",children:[t.jsx(o.G,{icon:l.FU$,className:"nav_icon"}),"Contact"]})})]})]})}},3125:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>n});var t=a(326),r=a(7577);function i(){return t.jsx("div",{className:"loader",children:t.jsx("div",{className:"spinner"})})}function n(){let[e,s]=(0,r.useState)({name:"",email:"",message:""}),[a,n]=(0,r.useState)(""),[o,l]=(0,r.useState)(!1),c=a=>{s({...e,[a.target.name]:a.target.value})},d=async a=>{a.preventDefault(),n("Sending..."),l(!0);try{let a=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),t=await a.json();a.ok?(n("Message sent successfully!"),s({name:"",email:"",message:""})):n("Failed to send message: "+t.message)}catch(e){n("An error occurred. Please try again later.")}finally{l(!1)}};return(0,t.jsxs)("div",{className:"contact-container",children:[o&&t.jsx(i,{}),(0,t.jsxs)("div",{className:"contact-map-section",children:[(0,t.jsxs)("h2",{children:["M",t.jsx("span",{children:"y Lo"}),"cation"]}),(0,t.jsxs)("p",{className:"contact_para",children:["Visit my office at the ",t.jsx("span",{children:"heart of"})," the city. I am always"," ",t.jsx("span",{children:"open"})," to meeting new people and ",t.jsx("span",{children:"discussing"})," ","exciting ",t.jsx("span",{children:"opportunities"}),"."]}),t.jsx("div",{className:"contact-map",children:t.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9354396548066!2d77.36561421500317!3d28.620877782419894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5490b69c6a3%3A0x1c52951542c1d54a!2sSector%2059%2C%20Noida%2C%20Uttar%20Pradesh%20201307%2C%20India!5e0!3m2!1sen!2sus!4v1692876324180!5m2!1sen!2sus",width:"100%",height:"350",allowFullScreen:"",loading:"lazy",title:"Noida Sector 59 Location",style:{border:0}})})]}),(0,t.jsxs)("div",{className:"contact-form",children:[(0,t.jsxs)("h1",{children:["Cont",t.jsx("span",{children:"act M"}),"e"]}),(0,t.jsxs)("p",{children:["Get in ",t.jsx("span",{children:"touch"})," with me via ",t.jsx("span",{children:"email"})," or social media."]}),(0,t.jsxs)("form",{onSubmit:d,children:[t.jsx("label",{htmlFor:"name",children:"Name:"}),t.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:c,required:!0}),t.jsx("label",{htmlFor:"email",children:"Email:"}),t.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:c,required:!0}),t.jsx("label",{htmlFor:"message",children:"Message:"}),t.jsx("textarea",{id:"message",name:"message",rows:"5",value:e.message,onChange:c,required:!0}),t.jsx("button",{type:"submit",children:"Send Message"})]}),a&&t.jsx("p",{children:a})]})]})}a(2711),a(1252)},1843:(e,s,a)=>{"use strict";a.r(s),a.d(s,{$$typeof:()=>n,__esModule:()=>i,default:()=>o});var t=a(8570);let r=(0,t.createProxy)(String.raw`C:\Users\Girija Sh. Mohanta\Desktop\Girija_portfolio\src\app\contact\page.js`),{__esModule:i,$$typeof:n}=r;r.default;let o=(0,t.createProxy)(String.raw`C:\Users\Girija Sh. Mohanta\Desktop\Girija_portfolio\src\app\contact\page.js#default`)},4348:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>d,metadata:()=>c});var t=a(9510);a(5023);var r=a(8570);let i=(0,r.createProxy)(String.raw`C:\Users\Girija Sh. Mohanta\Desktop\Girija_portfolio\src\app\NavBar.js`),{__esModule:n,$$typeof:o}=i;i.default;let l=(0,r.createProxy)(String.raw`C:\Users\Girija Sh. Mohanta\Desktop\Girija_portfolio\src\app\NavBar.js#default`),c={title:"Girija Portfolio",description:"Welcome to my portfolio website"};function d({children:e}){return(0,t.jsxs)("html",{lang:"en",children:[(0,t.jsxs)("head",{children:[t.jsx("title",{children:c.title}),t.jsx("meta",{name:"description",content:c.description}),t.jsx("link",{rel:"icon",href:"/assets/profile.png"})]}),(0,t.jsxs)("body",{children:[t.jsx(l,{}),t.jsx("main",{children:e})]})]})}},3881:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>r});var t=a(6621);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{},372:()=>{},2711:()=>{},1252:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),t=s.X(0,[948,728,621],()=>a(320));module.exports=t})();