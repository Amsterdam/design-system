import{r as l,j as e,c as d,F as u,u as m,P as g}from"./iframe-B8vkLnOn.js";const o=l.forwardRef(({className:n,...p},c)=>e.jsx("input",{...p,className:d("ams-file-input",n),ref:c,type:"file"}));o.displayName="FileInput";try{o.displayName="FileInput",o.__docgenInfo={description:"",displayName:"FileInput",props:{}}}catch{}const F={title:"Components/Forms/File Input",component:o,args:{accept:void 0,disabled:!1,multiple:!1},argTypes:{accept:{control:{type:"text"}},disabled:{control:{type:"boolean"}},multiple:{control:{type:"boolean"}}}},r={},a={args:{multiple:!0}},s={args:{accept:"application/pdf"}},t={args:{disabled:!0}},i={render:n=>e.jsxs(u,{children:[e.jsx(m,{htmlFor:"input1",children:"Label"}),e.jsx(g,{id:"description1",size:"small",children:"Omschrijving."}),e.jsx(o,{"aria-describedby":"description1",id:"input1",...n})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Field>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      <FileInput aria-describedby="description1" id="input1" {...args} />
    </Field>
}`,...i.parameters?.docs?.source}}};const b=["Default","MultipleFiles","RestrictFileTypes","Disabled","InAField"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Disabled:t,InAField:i,MultipleFiles:a,RestrictFileTypes:s,__namedExportsOrder:b,default:F},Symbol.toStringTag,{value:"Module"}));export{t as D,f as F,i as I,a as M,s as R};
