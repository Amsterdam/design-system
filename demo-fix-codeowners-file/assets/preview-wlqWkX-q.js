const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./axe-gp8rn00I.js","./_commonjsHelpers-CqkleIqs.js"])))=>i.map(i=>d[i]);
import{_ as N}from"./iframe-D0-o99zA.js";import"../sb-preview/runtime.js";const{addons:S}=__STORYBOOK_MODULE_PREVIEW_API__,{global:U}=__STORYBOOK_MODULE_GLOBAL__;var o="storybook/a11y",y=`${o}/result`,L=`${o}/request`,d=`${o}/running`,A=`${o}/error`,T=`${o}/manual`,r={RESULT:y,REQUEST:L,RUNNING:d,ERROR:A,MANUAL:T},{document:g}=U,a=S.getChannel(),l=!1,_,R={config:{},options:{}},v=async(n,e)=>{e!=null&&e.manual||await s(n,e??R)},s=async(n,e=R)=>{_=n;try{if(!l){l=!0,a.emit(r.RUNNING);let{default:t}=await N(()=>import("./axe-gp8rn00I.js").then(f=>f.a),__vite__mapDeps([0,1]),import.meta.url),{element:m="#storybook-root",config:i,options:O={}}=e,E=g.querySelector(m);if(!E)return;t.reset(),i&&t.configure(i);let c=await t.run(E,O),u=JSON.parse(JSON.stringify(c));_===n?a.emit(r.RESULT,u):(l=!1,s(_))}}catch(t){a.emit(r.ERROR,t)}finally{l=!1}};a.on(r.REQUEST,v);a.on(r.MANUAL,s);
