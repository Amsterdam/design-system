import{j as r}from"./jsx-runtime-BlAj40OV.js";import{e as C,f as V,P as $}from"./index.esm-GWGs2B8X.js";import{k as G}from"./index.esm-Dn56MWuB.js";import{c as H}from"./clsx-B-dksMZM.js";import{r as a}from"./index-Cs7sjTYM.js";import{I as K}from"./Icon-msbkstIT.js";import{B as Y}from"./Button-_g0sYxe8.js";const u=a.forwardRef(({showFiles:s,className:D,...O},A)=>{const W=a.useId(),U=a.useRef(null),[g,v]=a.useState(null),t=a.useRef(null);a.useImperativeHandle(A,()=>t.current);const h=()=>{t.current&&v(t.current.files)};a.useEffect(()=>s&&t.current?(t.current.addEventListener("change",h),()=>{var e;(e=t.current)==null||e.removeEventListener("change",h)}):()=>window.removeEventListener("change",h),[s]);const k=(e,m=3)=>{const i=["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(e===0)return"0 B";const f=Math.floor(Math.log10(e)/3);return`${(e/Math.pow(1e3,f)).toPrecision(m)}${i[f]}`},q=e=>{switch(e){case"image/gif":return"gif";case"image/jpeg":return"jpg";case"image/png":return"png";case"application/pdf":return"pdf";case"application/msword":return"Word";case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return"Word";case"application/vnd.ms-excel":return"Excel";case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":return"Excel";case"application/vnd.ms-powerpoint":return"PowerPoint";case"application/vnd.openxmlformats-officedocument.presentationml.presentation":return"PowerPoint";default:return e}};return r.jsxs(r.Fragment,{children:[r.jsx("input",{...O,id:s?W:void 0,ref:t,className:H("ams-file-input",s&&"ams-file-input--has-preview",D),type:"file"}),s&&r.jsx("div",{ref:U,className:"ams-file-input__preview",children:g&&g.length>0?Array.from(g).map(e=>r.jsxs("div",{className:"ams-file-input__file",children:[r.jsx("div",{className:"ams-file-input__file-preview",children:e.type.includes("image")?r.jsx("img",{src:URL.createObjectURL(e),alt:e.name,width:50,height:"auto"}):r.jsx(K,{svg:G,size:"level-3",square:!0})}),r.jsxs("div",{className:"ams-file-input__file-title",children:[e.name,r.jsxs("div",{className:"ams-file-input__file-details",children:["(",q(e.type),", ",k(e.size)," )"]})]}),r.jsx(Y,{variant:"tertiary",onClick:()=>{v(m=>{const i=new DataTransfer;return Array.from(m||[]).forEach(f=>i.items.add(f)),i.items.remove(Array.from(m||[]).indexOf(e)),t.current&&(t.current.files=i.files),i.files})},children:"Verwijder"})]})):null})]})});u.displayName="FileInput";try{u.displayName="FileInput",u.__docgenInfo={description:"",displayName:"FileInput",props:{showFiles:{defaultValue:null,description:"",name:"showFiles",required:!1,type:{name:"boolean"}}}}}catch{}const Z={title:"Components/Forms/File Input",component:u,args:{accept:void 0,multiple:!1,disabled:!1},argTypes:{accept:{control:{type:"text"}},multiple:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},n={},o={args:{multiple:!0}},c={args:{accept:"application/pdf"}},l={args:{disabled:!0}},p={render:s=>r.jsxs(C,{children:[r.jsx(V,{htmlFor:"input1",children:"Label"}),r.jsx($,{id:"description1",size:"small",children:"Omschrijving."}),r.jsx(u,{"aria-describedby":"description1",id:"input1",...s})]})},d={args:{showFiles:!0,multiple:!0}};var x,y,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var _,F,b;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    multiple: true
  }
}`,...(b=(F=o.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var w,I,P;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    accept: 'application/pdf'
  }
}`,...(P=(I=c.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var B,S,E;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(E=(S=l.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var R,L,N;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <Field>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      <FileInput aria-describedby="description1" id="input1" {...args} />
    </Field>
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var M,T,z;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    showFiles: true,
    multiple: true
  }
}`,...(z=(T=d.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};const J=["Default","MultipleFiles","RestrictFileTypes","Disabled","InAField","WithPreview"],ne=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Disabled:l,InAField:p,MultipleFiles:o,RestrictFileTypes:c,WithPreview:d,__namedExportsOrder:J,default:Z},Symbol.toStringTag,{value:"Module"}));export{l as D,ne as F,p as I,o as M,c as R};
