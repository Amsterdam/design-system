import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{N as s,H as i,P as c}from"./index.esm-1aP2PtIx.js";import{r as S}from"./index-4g5l5LRQ.js";import{e as m}from"./exampleContent-GJvLNqvD.js";const a=S.memo(function(){console.log("[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />");let n=[];for(let l=0;l<500;l++)n.push(e.jsx(f,{index:l},l));return e.jsx("ul",{className:"items",children:n})});function f({index:t}){let n=performance.now();for(;performance.now()-n<1;);return e.jsxs("li",{className:"item",children:["Post #",t+1]})}const w={title:"Navigation/Tabs",component:s,argTypes:{children:{table:{disable:!0}}}};s.Button;const P={args:{children:[e.jsxs(e.Fragment,{children:[e.jsxs(s.List,{children:[e.jsx(s.Button,{tab:0,label:"Gegevens"}),e.jsx(s.Button,{tab:1,label:"Aanslagen"}),e.jsx(s.Button,{tab:2,label:"Documenten"}),e.jsx(s.Button,{tab:3,label:"Acties"})]}),e.jsxs(s.Panel,{tab:0,children:[e.jsx(i,{level:3,children:"Gegevens"}),e.jsx(c,{children:m()})]}),e.jsxs(s.Panel,{tab:1,children:[e.jsx(i,{level:3,children:"Aanslagen"}),e.jsx(c,{children:m()})]}),e.jsxs(s.Panel,{tab:2,children:[e.jsx(i,{level:3,children:"Documenten"}),e.jsx(c,{children:"Simulate a tab that takes 500ms to load."}),e.jsx(a,{})]}),e.jsxs(s.Panel,{tab:3,children:[e.jsx(i,{level:3,children:"Acties"}),e.jsx(c,{children:m()})]})]})]}},y={args:{label:"Gegevens",tab:1,isDisabled:!1},render:({...t})=>e.jsx(s.Button,{...t})},r={...P},o={...y};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`memo(function SlowTab() {
  // Log once. The actual slowdown is inside SlowPost.
  console.log('[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />');
  let items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }
  return <ul className="items">{items}</ul>;
})`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,x,j;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(j=(x=r.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var g,h,T;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...TabStoryTemplate
}`,...(T=(h=o.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const v=["SlowTab","Default","Tab"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:r,SlowTab:a,Tab:o,__namedExportsOrder:v,default:w},Symbol.toStringTag,{value:"Module"}));export{I as T,o as a};
