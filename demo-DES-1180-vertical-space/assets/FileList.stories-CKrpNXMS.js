import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{t as w,u}from"./index.esm-Bbl-Ydi0.js";import{r as m}from"./index-C0MU9AHG.js";import{c as h}from"./clsx-B-dksMZM.js";import{x as N}from"./index.esm-DvoLfDtE.js";import{I as D}from"./Icon-CJVFfJZC.js";import{B as S}from"./Button-CjSAP85z.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const R=(e,s=3)=>{const r=["bytes","kB","MB","GB"];if(e===0)return"0 bytes";const i=Math.floor(Math.log10(e)/3);return`${(e/Math.pow(1e3,i)).toPrecision(s)} ${r[i]}`};/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const d=e=>{switch(e){case"image/gif":return"gif";case"image/jpeg":return"jpg";case"image/png":return"png";case"text/plain":return"txt";case"application/pdf":return"pdf";case"application/msword":case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return"Word";case"application/vnd.ms-excel":case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":return"Excel";case"application/vnd.ms-powerpoint":case"application/vnd.openxmlformats-officedocument.presentationml.presentation":return"PowerPoint";default:return"Document"}};try{d.displayName="formatFileType",d.__docgenInfo={description:"",displayName:"formatFileType",props:{}}}catch{}const j=m.forwardRef(({className:e,file:s,onDelete:r,...i},c)=>t.jsxs("li",{...i,className:h("ams-file-list__item",e),ref:c,children:[t.jsx("div",{className:"ams-file-list__item-preview",children:s.type.startsWith("image/")?t.jsx("img",{alt:s.name,src:URL.createObjectURL(s)}):t.jsx(D,{size:"heading-3",square:!0,svg:N})}),t.jsxs("div",{className:"ams-file-list__item-info",children:[s.name,t.jsxs("div",{className:"ams-file-input__item-details",children:["(",d(s.type),", ",R(s.size),")"]})]}),r&&t.jsx("div",{children:t.jsx(S,{onClick:()=>r(),variant:"tertiary",children:"Verwijder"})})]}));j.displayName="FileList.Item";try{FileList.Item.displayName="FileList.Item",FileList.Item.__docgenInfo={description:"",displayName:"FileList.Item",props:{file:{defaultValue:null,description:"",name:"file",required:!0,type:{name:"File"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"(() => void)"}}}}}catch{}const I=m.forwardRef(({children:e,className:s,...r},i)=>t.jsx("ul",{...r,className:h("ams-file-list",s),ref:i,children:e}));I.displayName="FileList";const l=Object.assign(I,{Item:j});try{l.displayName="FileList",l.__docgenInfo={description:"",displayName:"FileList",props:{}}}catch{}const b=()=>{const e=m.useRef(null),[s,r]=m.useState(null),i=()=>{e.current&&r(e.current.files)},c=p=>{if(s){const a=new DataTransfer;Array.from(s).forEach((v,L)=>{L!==p&&a.items.add(v)}),e.current&&(e.current.files=a.files),r(a.files)}};return t.jsxs(t.Fragment,{children:[t.jsx(w,{multiple:!0,onChange:i,ref:e}),s&&t.jsx(u,{children:Array.from(s).map((p,a)=>t.jsx(u.Item,{file:p,onDelete:()=>c(a)},a))})]})},M={title:"Components/Forms/File List",component:l,args:{children:[t.jsx(l.Item,{file:new File(["sample1"],"sample1.txt",{lastModified:Date.now(),type:"text/plain"}),onDelete:()=>{}},"1"),t.jsx(l.Item,{file:new File(["sample2"],"sample2.txt",{lastModified:Date.now(),type:"text/plain"}),onDelete:()=>{}},"2")]}},n={},o={parameters:{docs:{canvas:{sourceState:"none"}}},render:()=>t.jsx(b,{})};var f,_,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(_=n.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var F,g,y;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <FileInputWithFileList />
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const W=["Default","WithInput"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithInput:o,__namedExportsOrder:W,default:M},Symbol.toStringTag,{value:"Module"}));export{q as F,o as W};
