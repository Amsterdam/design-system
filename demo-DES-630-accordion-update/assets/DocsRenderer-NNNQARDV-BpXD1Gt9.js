import{_ as p}from"./iframe-1z7OGk8d.js";import{R as e,r as c}from"./index-CBqU2yxZ.js";import{r as l,u}from"./react-18-D8cruF67.js";import{C as h,A as E,H as d,D as x}from"./index-BYxjbY4N.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";var _={code:h,a:E,...d},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},H=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=x;return new Promise((m,a)=>{p(()=>import("./index-DI5IigMn.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:i})=>l(e.createElement(D,{showException:a,key:Math.random()},e.createElement(i,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>m())})},this.unmount=t=>{u(t)}}};export{H as DocsRenderer,_ as defaultComponents};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-DI5IigMn.js","./index-CBqU2yxZ.js","./_commonjsHelpers-BosuxZz1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
