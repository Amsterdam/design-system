import{j as t}from"./jsx-runtime-j_jdvEMj.js";import{u as v,v as w}from"./index.esm-Wail507x.js";import{r as m}from"./index-B-o1Wr-g.js";import{x as L}from"./index.esm-B0p2MFFl.js";import{c as D}from"./clsx-B-dksMZM.js";import{I as N}from"./Icon-D1obyjGa.js";import{B as I}from"./Button-CLCAbUHj.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const S=(e,s=3)=>{const a=["bytes","kB","MB","GB"];if(e===0)return"0 B";const i=Math.floor(Math.log10(e)/3);return`${(e/Math.pow(1e3,i)).toPrecision(s)} ${a[i]}`};/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const d=e=>{switch(e){case"image/gif":return"gif";case"image/jpeg":return"jpg";case"image/png":return"png";case"text/plain":return"txt";case"application/pdf":return"pdf";case"application/msword":case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return"Word";case"application/vnd.ms-excel":case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":return"Excel";case"application/vnd.ms-powerpoint":case"application/vnd.openxmlformats-officedocument.presentationml.presentation":return"PowerPoint";default:return"Document"}};try{d.displayName="formatFileType",d.__docgenInfo={description:"",displayName:"formatFileType",props:{}}}catch{}const p=m.forwardRef(({files:e,onDelete:s,className:a,...i},c)=>t.jsx("ol",{...i,ref:c,className:D("ams-file-list",a),children:Array.from(e).map((r,n)=>t.jsxs("li",{className:"ams-file-list__file",children:[t.jsx("div",{className:"ams-file-list__file-preview",children:r.type.includes("image")?t.jsx("img",{src:URL.createObjectURL(r),alt:r.name}):t.jsx(N,{svg:L,size:"level-3",square:!0})}),t.jsxs("div",{className:"ams-file-list__file-info",children:[r.name,t.jsxs("div",{className:"ams-file-input__file-details",children:["(",d(r.type),", ",S(r.size),")"]})]}),s&&t.jsx("div",{children:t.jsx(I,{variant:"tertiary",onClick:()=>s(n),children:"Verwijder"})})]},n))}));p.displayName="FileList";try{p.displayName="FileList",p.__docgenInfo={description:"",displayName:"FileList",props:{files:{defaultValue:null,description:"",name:"files",required:!0,type:{name:"FileList"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"((index: number) => void)"}}}}}catch{}const T=()=>{const e=m.useRef(null),[s,a]=m.useState(null),i=()=>{e.current&&a(e.current.files)},c=r=>{if(s){const n=new DataTransfer;Array.from(s).forEach((h,j)=>{j!==r&&n.items.add(h)}),e.current&&(e.current.files=n.files),a(n.files)}};return t.jsxs(t.Fragment,{children:[t.jsx(v,{multiple:!0,ref:e,onChange:i}),s&&t.jsx(w,{files:s,onDelete:c})]})},f=new DataTransfer;f.items.add(new File(["sample1"],"sample1.txt",{type:"text/plain",lastModified:Date.now()}));f.items.add(new File(["sample2"],"sample2.txt",{type:"text/plain",lastModified:Date.now()}));const b=f.files,M={title:"Components/Forms/File List",component:p,args:{files:b},argTypes:{files:{table:{disable:!0}}}},o={},l={parameters:{docs:{canvas:{sourceState:"none"}}},render:()=>t.jsx(T,{})};var u,x,_;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(_=(x=o.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var g,F,y;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <FileInputWithFileList />
}`,...(y=(F=l.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};const B=["Default","WithInput"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithInput:l,__namedExportsOrder:B,default:M},Symbol.toStringTag,{value:"Module"}));export{C as F,l as W};
