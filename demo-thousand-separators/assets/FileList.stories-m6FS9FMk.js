import{a as e,n as t,r as n}from"./chunk-DnJy8xQt.js";import{Vt as r,Y as i,_ as a,v as o,wn as s}from"./iframe-D5ncU2zr.js";import{G as c,t as l}from"./src-B_gdUw9S.js";var u,d,f,p=t((()=>{i(),u=e(s()),d=r(),f=()=>{let e=(0,u.useRef)(null),[t,n]=(0,u.useState)(null),r=()=>{e.current&&n(e.current.files)},i=r=>{if(t){let i=new DataTransfer;Array.from(t).forEach((e,t)=>{t!==r&&i.items.add(e)}),e.current&&(e.current.files=i.files),n(i.files)}};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{multiple:!0,onChange:r,ref:e}),t&&(0,d.jsx)(o,{children:Array.from(t).map((e,t)=>(0,d.jsx)(o.Item,{file:e,onDelete:()=>i(t)},e.name))})]})}})),m=n({Default:()=>_,WithInput:()=>v,__namedExportsOrder:()=>y,default:()=>g}),h,g,_,v,y,b=t((()=>{l(),p(),h=r(),g={title:`Components/Forms/File List`,component:c,args:{children:[(0,h.jsx)(c.Item,{file:new File([`sample1`],`sample1.txt`,{lastModified:Date.now(),type:`text/plain`}),onDelete:()=>{}},`1`),(0,h.jsx)(c.Item,{file:new File([`sample2`],`sample2.txt`,{lastModified:Date.now(),type:`text/plain`}),onDelete:()=>{}},`2`)]}},_={},v={parameters:{docs:{canvas:{sourceState:`none`},codePanel:!1}},render:()=>(0,h.jsx)(f,{})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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