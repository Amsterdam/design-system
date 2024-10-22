import{j as r}from"./jsx-runtime-BlAj40OV.js";import{f as K,g as V,P as Y}from"./index.esm-QkFYv5nO.js";import{c as Z}from"./clsx-B-dksMZM.js";import{r as a}from"./index-Cs7sjTYM.js";import{P as h}from"./Paragraph-BWS5kDPY.js";const d=a.forwardRef(({showFiles:t,className:A,...U},G)=>{const b=a.useId(),W=a.useRef(null),[u,q]=a.useState(null),s=a.useRef(null);a.useImperativeHandle(G,()=>s.current);const m=()=>{s.current&&q(s.current.files)};a.useEffect(()=>t&&s.current?(s.current.addEventListener("change",m),()=>{var e;(e=s.current)==null||e.removeEventListener("change",m)}):()=>window.removeEventListener("change",m),[t]);const C=(e,g=3,F=!0)=>{const f=["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(Math.abs(e)<1)return e+(F?" ":"")+f[0];const y=Math.min(Math.floor(Math.log10(Math.abs(e))/3),f.length-1),H=Number((Math.abs(e)/1e3**y).toPrecision(g));return(e<0?"-":"")+H+(F?" ":"")+f[y]};return r.jsxs(r.Fragment,{children:[t&&r.jsx("label",{htmlFor:b,className:"ams-file-input__label",children:r.jsx(h,{children:"Selecteer of sleep uw bestanden hier"})}),r.jsx("input",{...U,id:t?b:void 0,ref:s,className:Z("ams-file-input",t&&"ams-file-input--has-preview",A),type:"file"}),t&&r.jsx("div",{ref:W,className:"ams-file-input__preview",children:u&&u.length>0?Array.from(u).map((e,g)=>r.jsxs(h,{children:[r.jsx("img",{src:URL.createObjectURL(e),alt:e.name,width:100,height:"auto"}),e.name," (",C(e.size),") (",e.type,")"]},g)):r.jsx(h,{children:"Geen bestanden geselecteerd"})})]})});d.displayName="FileInput";try{d.displayName="FileInput",d.__docgenInfo={description:"",displayName:"FileInput",props:{showFiles:{defaultValue:null,description:"",name:"showFiles",required:!1,type:{name:"boolean"}}}}}catch{}const $={title:"Components/Forms/File Input",component:d,args:{accept:void 0,multiple:!1,disabled:!1},argTypes:{accept:{control:{type:"text"}},multiple:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},n={},i={args:{multiple:!0}},o={args:{accept:"application/pdf"}},l={args:{disabled:!0}},c={render:t=>r.jsxs(K,{children:[r.jsx(V,{htmlFor:"input1",children:"Label"}),r.jsx(Y,{id:"description1",size:"small",children:"Omschrijving."}),r.jsx(d,{"aria-describedby":"description1",id:"input1",...t})]})},p={args:{showFiles:!0,multiple:!0}};var x,j,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(v=(j=n.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var _,I,P;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    multiple: true
  }
}`,...(P=(I=i.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var M,R,S;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    accept: 'application/pdf'
  }
}`,...(S=(R=o.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var w,B,L;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(L=(B=l.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var E,N,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Field>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      <FileInput aria-describedby="description1" id="input1" {...args} />
    </Field>
}`,...(O=(N=c.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var T,D,z;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    showFiles: true,
    multiple: true
  }
}`,...(z=(D=p.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};const k=["Default","MultipleFiles","RestrictFileTypes","Disabled","InAField","WithPreview"],te=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Disabled:l,InAField:c,MultipleFiles:i,RestrictFileTypes:o,WithPreview:p,__namedExportsOrder:k,default:$},Symbol.toStringTag,{value:"Module"}));export{l as D,te as F,c as I,i as M,o as R};
