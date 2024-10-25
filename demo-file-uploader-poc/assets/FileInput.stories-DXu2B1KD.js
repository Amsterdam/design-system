import{j as e}from"./jsx-runtime-BlAj40OV.js";import{f as K,g as V,P as Y}from"./index.esm-BXgNtSrJ.js";import{l as Z}from"./index.esm-DhU8I_qX.js";import{c as $}from"./clsx-B-dksMZM.js";import{r as a}from"./index-Cs7sjTYM.js";import{P as h}from"./Paragraph-BWS5kDPY.js";import{I as k}from"./Icon-msbkstIT.js";const d=a.forwardRef(({showFiles:s,className:A,...U},q)=>{const b=a.useId(),G=a.useRef(null),[u,W]=a.useState(null),t=a.useRef(null);a.useImperativeHandle(q,()=>t.current);const m=()=>{t.current&&W(t.current.files)};a.useEffect(()=>s&&t.current?(t.current.addEventListener("change",m),()=>{var r;(r=t.current)==null||r.removeEventListener("change",m)}):()=>window.removeEventListener("change",m),[s]);const C=(r,f=3,x=!0)=>{const g=["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(Math.abs(r)<1)return r+(x?" ":"")+g[0];const j=Math.min(Math.floor(Math.log10(Math.abs(r))/3),g.length-1),H=Number((Math.abs(r)/1e3**j).toPrecision(f));return(r<0?"-":"")+H+(x?" ":"")+g[j]};return e.jsxs(e.Fragment,{children:[s&&e.jsx("label",{htmlFor:b,className:"ams-file-input__label",tabIndex:1,children:e.jsx(h,{children:"Selecteer of sleep uw bestanden hier"})}),e.jsx("input",{...U,id:s?b:void 0,ref:t,className:$("ams-file-input",s&&"ams-file-input--has-preview",A),type:"file"}),s&&e.jsx("div",{ref:G,className:"ams-file-input__preview",children:u&&u.length>0?Array.from(u).map((r,f)=>e.jsxs("div",{className:"ams-file-input__file",children:[e.jsx("div",{className:"ams-file-input__thumb",children:r.type.includes("image")?e.jsx("img",{src:URL.createObjectURL(r),alt:r.name,width:100,height:"auto"}):e.jsx(k,{svg:Z,size:"level-5",square:!0})}),e.jsxs(h,{children:[r.name,e.jsx("br",{}),C(r.size)," (",r.type,")"]},f)]})):e.jsx(h,{children:"Geen bestanden geselecteerd"})})]})});d.displayName="FileInput";try{d.displayName="FileInput",d.__docgenInfo={description:"",displayName:"FileInput",props:{showFiles:{defaultValue:null,description:"",name:"showFiles",required:!1,type:{name:"boolean"}}}}}catch{}const J={title:"Components/Forms/File Input",component:d,args:{accept:void 0,multiple:!1,disabled:!1},argTypes:{accept:{control:{type:"text"}},multiple:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},n={},i={args:{multiple:!0}},o={args:{accept:"application/pdf"}},l={args:{disabled:!0}},c={render:s=>e.jsxs(K,{children:[e.jsx(V,{htmlFor:"input1",children:"Label"}),e.jsx(Y,{id:"description1",size:"small",children:"Omschrijving."}),e.jsx(d,{"aria-describedby":"description1",id:"input1",...s})]})},p={args:{showFiles:!0,multiple:!0}};var v,F,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(y=(F=n.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};var _,I,P;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    multiple: true
  }
}`,...(P=(I=i.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var S,M,R;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    accept: 'application/pdf'
  }
}`,...(R=(M=o.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var w,B,L;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(L=(B=l.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var N,E,D;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <Field>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      <FileInput aria-describedby="description1" id="input1" {...args} />
    </Field>
}`,...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var O,T,z;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    showFiles: true,
    multiple: true
  }
}`,...(z=(T=p.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};const Q=["Default","MultipleFiles","RestrictFileTypes","Disabled","InAField","WithPreview"],ie=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Disabled:l,InAField:c,MultipleFiles:i,RestrictFileTypes:o,WithPreview:p,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{l as D,ie as F,c as I,i as M,o as R};
