import{j as e}from"./jsx-runtime-BlAj40OV.js";import{F as A,e as D,P as L}from"./index.esm-DZTeNGND.js";import{c as O}from"./clsx-B-dksMZM.js";import{r as P}from"./index-Cs7sjTYM.js";const i=P.forwardRef(({className:p,...I},S)=>e.jsx("input",{...I,ref:S,className:O("ams-file-input",p),type:"file"}));i.displayName="FileInput";try{i.displayName="FileInput",i.__docgenInfo={description:"",displayName:"FileInput",props:{}}}catch{}const v={title:"Components/Forms/File Input",component:i,args:{accept:void 0,multiple:!1,disabled:!1},argTypes:{accept:{control:{type:"text"}},multiple:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},r={},a={args:{multiple:!0}},s={args:{accept:"application/pdf"}},t={args:{disabled:!0}},o={render:p=>e.jsxs(A,{children:[e.jsx(D,{htmlFor:"input1",children:"Label"}),e.jsx(L,{id:"description1",size:"small",children:"Omschrijving."}),e.jsx(i,{"aria-describedby":"description1",id:"input1",...p})]})};var c,n,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    multiple: true
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,b,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    accept: 'application/pdf'
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var F,y,_;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(_=(y=t.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var x,h,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Field>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      <FileInput aria-describedby="description1" id="input1" {...args} />
    </Field>
}`,...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const M=["Default","Multiple","Accept","Disabled","InAField"],T=Object.freeze(Object.defineProperty({__proto__:null,Accept:s,Default:r,Disabled:t,InAField:o,Multiple:a,__namedExportsOrder:M,default:v},Symbol.toStringTag,{value:"Module"}));export{s as A,t as D,T as F,o as I,a as M};
