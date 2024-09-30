import{j as e}from"./jsx-runtime-BlAj40OV.js";import{e as D,f as L,P as O}from"./index.esm-BmVHhNQk.js";import{c as P}from"./clsx-B-dksMZM.js";import{r as R}from"./index-Cs7sjTYM.js";const i=R.forwardRef(({className:p,...I},S)=>e.jsx("input",{...I,ref:S,className:P("ams-file-input",p),type:"file"}));i.displayName="FileInput";try{i.displayName="FileInput",i.__docgenInfo={description:"",displayName:"FileInput",props:{}}}catch{}const v={title:"Components/Forms/File Input",component:i,args:{accept:void 0,multiple:!1,disabled:!1},argTypes:{accept:{control:{type:"text"}},multiple:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},r={},a={args:{multiple:!0}},s={args:{accept:"application/pdf"}},t={args:{disabled:!0}},o={render:p=>e.jsxs(D,{children:[e.jsx(L,{htmlFor:"input1",children:"Label"}),e.jsx(O,{id:"description1",size:"small",children:"Omschrijving."}),e.jsx(i,{"aria-describedby":"description1",id:"input1",...p})]})};var n,c,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    multiple: true
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,b,F;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    accept: 'application/pdf'
  }
}`,...(F=(b=s.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var f,y,_;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const M=["Default","MultipleFiles","RestrictFileTypes","Disabled","InAField"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:t,InAField:o,MultipleFiles:a,RestrictFileTypes:s,__namedExportsOrder:M,default:v},Symbol.toStringTag,{value:"Module"}));export{t as D,A as F,o as I,a as M,s as R};
