import{j as r}from"./jsx-runtime-BlAj40OV.js";import{f as C,g as G,P as H}from"./index.esm-XNjBXQjP.js";import{l as K}from"./index.esm-DhU8I_qX.js";import{c as V}from"./clsx-B-dksMZM.js";import{r as a}from"./index-Cs7sjTYM.js";import{I as Y}from"./Icon-msbkstIT.js";const d=a.forwardRef(({showFiles:s,className:M,...z},D)=>{const T=a.useId(),O=a.useRef(null),[u,W]=a.useState(null),t=a.useRef(null);a.useImperativeHandle(D,()=>t.current);const m=()=>{t.current&&W(t.current.files)};a.useEffect(()=>s&&t.current?(t.current.addEventListener("change",m),()=>{var e;(e=t.current)==null||e.removeEventListener("change",m)}):()=>window.removeEventListener("change",m),[s]);const A=(e,q=3)=>{const $=["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(e===0)return"0 B";const f=Math.floor(Math.log10(e)/3);return`${(e/Math.pow(1e3,f)).toPrecision(q)}${$[f]}`},U=e=>{switch(e){case"image/gif":return"gif";case"image/jpeg":return"jpg";case"image/png":return"png";case"application/pdf":return"PDF";case"application/msword":return"Word";case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return"Word";case"application/vnd.ms-excel":return"Excel";case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":return"Excel";case"application/vnd.ms-powerpoint":return"PowerPoint";case"application/vnd.openxmlformats-officedocument.presentationml.presentation":return"PowerPoint";default:return e}};return r.jsxs(r.Fragment,{children:[r.jsx("input",{...z,id:s?T:void 0,ref:t,className:V("ams-file-input",s&&"ams-file-input--has-preview",M),type:"file"}),s&&r.jsx("div",{ref:O,className:"ams-file-input__preview",children:u&&u.length>0?Array.from(u).map(e=>r.jsxs("div",{className:"ams-file-input__file",children:[r.jsx("div",{className:"ams-file-input__file-preview",children:e.type.includes("image")?r.jsx("img",{src:URL.createObjectURL(e),alt:e.name,width:50,height:"auto"}):r.jsx(Y,{svg:K,size:"level-3",square:!0})}),r.jsxs("div",{className:"ams-file-input__file-title",children:[e.name,r.jsxs("div",{className:"ams-file-input__file-details",children:["(",U(e.type)," ",A(e.size)," )"]})]})]})):null})]})});d.displayName="FileInput";try{d.displayName="FileInput",d.__docgenInfo={description:"",displayName:"FileInput",props:{showFiles:{defaultValue:null,description:"",name:"showFiles",required:!1,type:{name:"boolean"}}}}}catch{}const Z={title:"Components/Forms/File Input",component:d,args:{accept:void 0,multiple:!1,disabled:!1},argTypes:{accept:{control:{type:"text"}},multiple:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},i={},n={args:{multiple:!0}},o={args:{accept:"application/pdf"}},c={args:{disabled:!0}},l={render:s=>r.jsxs(C,{children:[r.jsx(G,{htmlFor:"input1",children:"Label"}),r.jsx(H,{id:"description1",size:"small",children:"Omschrijving."}),r.jsx(d,{"aria-describedby":"description1",id:"input1",...s})]})},p={args:{showFiles:!0,multiple:!0}};var g,h,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,F,_;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    multiple: true
  }
}`,...(_=(F=n.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var y,b,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    accept: 'application/pdf'
  }
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var w,I,P;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(P=(I=c.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var S,B,R;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Field>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      <FileInput aria-describedby="description1" id="input1" {...args} />
    </Field>
}`,...(R=(B=l.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var E,L,N;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    showFiles: true,
    multiple: true
  }
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const k=["Default","MultipleFiles","RestrictFileTypes","Disabled","InAField","WithPreview"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Disabled:c,InAField:l,MultipleFiles:n,RestrictFileTypes:o,WithPreview:p,__namedExportsOrder:k,default:Z},Symbol.toStringTag,{value:"Module"}));export{c as D,ae as F,l as I,n as M,o as R};
