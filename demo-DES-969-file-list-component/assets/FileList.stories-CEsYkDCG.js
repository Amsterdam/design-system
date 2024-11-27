import{j as t}from"./jsx-runtime-j_jdvEMj.js";import{u as j,v as w}from"./index.esm-2G6zoFwB.js";import{r as m}from"./index-B-o1Wr-g.js";import{x as B}from"./index.esm-B0p2MFFl.js";import{c as L}from"./clsx-B-dksMZM.js";import{I as N}from"./Icon-D1obyjGa.js";import{B as D}from"./Button-CLCAbUHj.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const d=e=>{switch(e){case"image/gif":return"gif";case"image/jpeg":return"jpg";case"image/png":return"png";case"text/plain":return"txt";case"application/pdf":return"pdf";case"application/msword":return"Word";case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return"Word";case"application/vnd.ms-excel":return"Excel";case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":return"Excel";case"application/vnd.ms-powerpoint":return"PowerPoint";case"application/vnd.openxmlformats-officedocument.presentationml.presentation":return"PowerPoint";default:return e}};try{d.displayName="formatFileType",d.__docgenInfo={description:"",displayName:"formatFileType",props:{}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const I=(e,s=3)=>{const a=["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(e===0)return"0 B";const i=Math.floor(Math.log10(e)/3);return`${(e/Math.pow(1e3,i)).toPrecision(s)}${a[i]}`},p=m.forwardRef(({files:e,onDelete:s,className:a,...i},c)=>t.jsx("div",{...i,ref:c,className:L("ams-file-list",a),children:Array.from(e).map((r,n)=>t.jsxs("div",{className:"ams-file-list__file",children:[t.jsx("div",{className:"ams-file-list__file-preview",children:r.type.includes("image")?t.jsx("img",{src:URL.createObjectURL(r),alt:r.name}):t.jsx(N,{svg:B,size:"level-3",square:!0})}),t.jsxs("div",{className:"ams-file-list__file-name",children:[r.name,t.jsxs("div",{className:"ams-file-input__file-details",children:["(",d(r.type),", ",I(r.size),")"]})]}),s&&t.jsx("div",{children:t.jsx(D,{variant:"tertiary",onClick:()=>s(n),children:"Verwijder"})})]},n))}));p.displayName="FileList";try{p.displayName="FileList",p.__docgenInfo={description:"",displayName:"FileList",props:{files:{defaultValue:null,description:"",name:"files",required:!0,type:{name:"FileList"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"((index: number) => void)"}}}}}catch{}const S=()=>{const e=m.useRef(null),[s,a]=m.useState(null),i=()=>{e.current&&a(e.current.files)},c=r=>{if(s){const n=new DataTransfer;Array.from(s).forEach((y,v)=>{v!==r&&n.items.add(y)}),e.current&&(e.current.files=n.files),a(n.files)}};return t.jsxs(t.Fragment,{children:[t.jsx(j,{multiple:!0,ref:e,onChange:i}),s&&t.jsx(w,{files:s,onDelete:c})]})},u=new DataTransfer;u.items.add(new File(["sample1"],"sample1.txt",{type:"text/plain",lastModified:Date.now()}));u.items.add(new File(["sample2"],"sample2.txt",{type:"text/plain",lastModified:Date.now()}));const T=u.files,b={title:"Components/Forms/File List",component:p,args:{files:T},argTypes:{files:{table:{disable:!0}}}},o={},l={parameters:{docs:{canvas:{sourceState:"none"}}},render:()=>t.jsx(S,{})};var f,x,_;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(_=(x=o.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var g,F,h;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <FileInputWithFileList />
}`,...(h=(F=l.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};const E=["Default","WithInput"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithInput:l,__namedExportsOrder:E,default:b},Symbol.toStringTag,{value:"Module"}));export{q as F,l as W};
