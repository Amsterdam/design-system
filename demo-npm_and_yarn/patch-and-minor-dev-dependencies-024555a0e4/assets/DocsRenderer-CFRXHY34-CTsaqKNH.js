const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BAvqEBP-.js","./index-D7uoVdV3.js","./_commonjsHelpers-CqkleIqs.js","./index-C9rmetsa.js"])))=>i.map(i=>d[i]);
import{_ as p}from"./iframe-CW8RRdAc.js";import{R as e,r as c}from"./index-D7uoVdV3.js";import{H as u,A as l,C as h,D as d}from"./index-D5fXJR9w.js";import{renderElement as E,unmountElement as x}from"./react-18-tKZeUmeO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C9rmetsa.js";import"./jsx-runtime-z8MfsBtr.js";import"./index-wgz3LQUQ.js";import"./index-Cu4lwwaE.js";import"./index-Brs1icLk.js";import"./index-ogSvIofg.js";var D={code:h,a:l,...u},_=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},O=class{constructor(){this.render=async(t,r,n)=>{let s={...D,...r==null?void 0:r.components},m=d;return new Promise((i,a)=>{p(async()=>{const{MDXProvider:o}=await import("./index-BAvqEBP-.js");return{MDXProvider:o}},__vite__mapDeps([0,1,2,3]),import.meta.url).then(({MDXProvider:o})=>E(e.createElement(_,{showException:a,key:Math.random()},e.createElement(o,{components:s},e.createElement(m,{context:t,docsParameter:r}))),n)).then(()=>i())})},this.unmount=t=>{x(t)}}};export{O as DocsRenderer,D as defaultComponents};
