"use strict";(()=>{var e={};e.id=473,e.ids=[473,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},5064:(e,t,r)=>{r.r(t),r.d(t,{config:()=>_,default:()=>g,getServerSideProps:()=>b,getStaticPaths:()=>m,getStaticProps:()=>S,reportWebVitals:()=>v,routeModule:()=>q,unstable_getServerProps:()=>h,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>A,unstable_getStaticProps:()=>x});var n={};r.r(n),r.d(n,{default:()=>f});var a=r(7093),o=r(5244),i=r(1323),s=r(1682),l=r.n(s),u=r(8141),d=r.n(u),p=r(1185),P=r.n(p);let c=new(P()).Schema({name:{type:String,required:!0},email:{type:String,required:!0},message:{type:String,required:!0}},{timestamps:!0}),f=P().models.Contact||P().model("Contact",c),g=(0,i.l)(n,"default"),S=(0,i.l)(n,"getStaticProps"),m=(0,i.l)(n,"getStaticPaths"),b=(0,i.l)(n,"getServerSideProps"),_=(0,i.l)(n,"config"),v=(0,i.l)(n,"reportWebVitals"),x=(0,i.l)(n,"unstable_getStaticProps"),A=(0,i.l)(n,"unstable_getStaticPaths"),y=(0,i.l)(n,"unstable_getStaticParams"),h=(0,i.l)(n,"unstable_getServerProps"),j=(0,i.l)(n,"unstable_getServerSideProps"),q=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/models/Contact",pathname:"/models/Contact",bundlePath:"",filename:""},components:{App:d(),Document:l()},userland:n})},8141:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let n=r(167),a=r(997),o=n._(r(6689)),i=r(5782);async function s(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,i.loadGetInitialProps)(t,r)}}class l extends o.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,a.jsx)(e,{...t})}}l.origGetInitialProps=s,l.getInitialProps=s,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1185:e=>{e.exports=require("mongoose")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[682],()=>r(5064));module.exports=n})();