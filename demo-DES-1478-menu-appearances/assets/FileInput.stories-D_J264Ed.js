import{r as l,j as e,c as d,F as u,t as m,P as g}from"./iframe-B3gY7KL5.js";const i=l.forwardRef(({className:p,...c},n)=>e.jsx("input",{...c,className:d("ams-file-input",p),ref:n,type:"file"}));i.displayName="FileInput";try{i.displayName="FileInput",i.__docgenInfo={description:"",displayName:"FileInput",props:{}}}catch{}const F={title:"Components/Forms/File Input",component:i,args:{accept:void 0,disabled:!1,multiple:!1},argTypes:{accept:{control:{type:"text"}},disabled:{control:{type:"boolean"}},multiple:{control:{type:"boolean"}}}},r={},a={args:{multiple:!0}},s={args:{accept:"application/pdf"}},t={args:{disabled:!0}},o={render:p=>e.jsxs(u,{children:[e.jsx(m,{htmlFor:"input1",children:"Label"}),e.jsx(g,{id:"description1",children:"Omschrijving."}),e.jsx(i,{"aria-describedby":"description1",id:"input1",...p})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    accept: 'application/pdf'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Field>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      <FileInput aria-describedby="description1" id="input1" {...args} />
    </Field>
}`,...o.parameters?.docs?.source}}};const b=["Default","MultipleFiles","RestrictFileTypes","Disabled","InAField"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:t,InAField:o,MultipleFiles:a,RestrictFileTypes:s,__namedExportsOrder:b,default:F},Symbol.toStringTag,{value:"Module"}));export{t as D,f as F,o as I,a as M,s as R};
