import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{$ as i,b as a,y as o}from"./index.esm-C8Z1-wYV.js";import{n as s,t as c}from"./FileList-DWY1yvcO.js";var l,u,d;function f(){return(f=e((()=>{i(),l=n(),u=r(),d=()=>{let e=(0,l.useRef)(null),[t,n]=(0,l.useState)(null),r=()=>{e.current&&n(e.current.files)},i=r=>{if(t){let i=new DataTransfer;Array.from(t).forEach((e,t)=>{t!==r&&i.items.add(e)}),e.current&&(e.current.files=i.files),n(i.files)}};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{multiple:!0,onChange:r,ref:e}),t&&(0,u.jsx)(a,{children:Array.from(t).map((e,t)=>(0,u.jsx)(a.Item,{file:e,onDelete:()=>i(t)},e.name))})]})}})))()}var p=t({Default:()=>g,WithInput:()=>_,__namedExportsOrder:()=>v,default:()=>h}),m,h,g,_,v;function y(){return(y=e((()=>{s(),f(),m=r(),h={title:`Components/Forms/File List`,component:c,args:{children:[(0,m.jsx)(c.Item,{file:new File([`sample1`],`sample1.txt`,{lastModified:Date.now(),type:`text/plain`}),onDelete:()=>{}},`1`),(0,m.jsx)(c.Item,{file:new File([`sample2`],`sample2.txt`,{lastModified:Date.now(),type:`text/plain`}),onDelete:()=>{}},`2`)]},subcomponents:{"FileList.Item":c.Item}},g={},_={parameters:{docs:{canvas:{sourceState:`none`},codePanel:!1}},render:()=>(0,m.jsx)(d,{})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      },
      codePanel: false
    }
  },
  render: () => <FileInputWithFileList />
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithInput`]})))()}export{h as i,_ as n,y as r,p as t};