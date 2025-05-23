import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as D,d as L,P as O}from"./index.esm-C5sO23TF.js";import{c as P}from"./clsx-B-dksMZM.js";import{r as R}from"./index-G8LIXM5I.js";const i=R.forwardRef(({className:p,...I},S)=>e.jsx("input",{...I,className:P("ams-file-input",p),ref:S,type:"file"}));i.displayName="FileInput";try{i.displayName="FileInput",i.__docgenInfo={description:"",displayName:"FileInput",props:{}}}catch{}const v={title:"Components/Forms/File Input",component:i,args:{accept:void 0,disabled:!1,multiple:!1},argTypes:{accept:{control:{type:"text"}},disabled:{control:{type:"boolean"}},multiple:{control:{type:"boolean"}}}},r={},a={args:{multiple:!0}},s={args:{accept:"application/pdf"}},t={args:{disabled:!0}},o={render:p=>e.jsxs(D,{children:[e.jsx(L,{htmlFor:"input1",children:"Label"}),e.jsx(O,{id:"description1",size:"small",children:"Omschrijving."}),e.jsx(i,{"aria-describedby":"description1",id:"input1",...p})]})};var c,n,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
