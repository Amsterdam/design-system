const __vite__fileDeps=["./index-CRbi4mQH.js","./index-uCp2LrAq.js","./_commonjsHelpers-BosuxZz1.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as p}from"./iframe-B_M-43md.js";import{R as e,r as c}from"./index-uCp2LrAq.js";import{r as u,u as l}from"./react-18-DAjhTQGP.js";import{C as h,A as E,H as d,D as x}from"./index-D0yzeh5w.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";var D={code:h,a:E,...d},_=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},H=class{constructor(){this.render=async(t,r,n)=>{let s={...D,...r==null?void 0:r.components},a=x;return new Promise((m,i)=>{p(async()=>{const{MDXProvider:o}=await import("./index-CRbi4mQH.js");return{MDXProvider:o}},__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:o})=>u(e.createElement(_,{showException:i,key:Math.random()},e.createElement(o,{components:s},e.createElement(a,{context:t,docsParameter:r}))),n)).then(()=>m())})},this.unmount=t=>{l(t)}}};export{H as DocsRenderer,D as defaultComponents};