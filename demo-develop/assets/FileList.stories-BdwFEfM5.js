import{a as e,i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./react-a45N5K9M.js";import{t as i}from"./jsx-runtime-BqsN2jGA.js";import{X as a,v as o,y as s}from"./iframe-DOUzLRMB.js";import{bt as c,t as l}from"./src-C-hqDUIu.js";var u,d,f,p=t((()=>{a(),u=n(r()),d=i(),f=()=>{let e=(0,u.useRef)(null),[t,n]=(0,u.useState)(null),r=()=>{e.current&&n(e.current.files)},i=r=>{if(t){let i=new DataTransfer;Array.from(t).forEach((e,t)=>{t!==r&&i.items.add(e)}),e.current&&(e.current.files=i.files),n(i.files)}};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{multiple:!0,onChange:r,ref:e}),t&&(0,d.jsx)(s,{children:Array.from(t).map((e,t)=>(0,d.jsx)(s.Item,{file:e,onDelete:()=>i(t)},e.name))})]})}})),m=e({Default:()=>_,WithInput:()=>v,__namedExportsOrder:()=>y,default:()=>g}),h,g,_,v,y,b=t((()=>{l(),p(),h=i(),g={title:`Components/Forms/File List`,component:c,args:{children:[(0,h.jsx)(c.Item,{file:new File([`sample1`],`sample1.txt`,{lastModified:Date.now(),type:`text/plain`}),onDelete:()=>{}},`1`),(0,h.jsx)(c.Item,{file:new File([`sample2`],`sample2.txt`,{lastModified:Date.now(),type:`text/plain`}),onDelete:()=>{}},`2`)]}},_={},v={parameters:{docs:{canvas:{sourceState:`none`},codePanel:!1}},render:()=>(0,h.jsx)(f,{})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      },
      codePanel: false
    }
  },
  render: () => <FileInputWithFileList />
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithInput`]}));b();export{_ as Default,v as WithInput,y as __namedExportsOrder,g as default,b as n,m as t};