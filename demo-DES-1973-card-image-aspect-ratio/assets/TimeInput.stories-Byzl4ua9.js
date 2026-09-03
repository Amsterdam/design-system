import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{B as r,O as i,_ as a,g as o,nt as s}from"./index.esm-kHd2KeDW.js";import{n as c,t as l}from"./TimeInput-Dz5B8zGW.js";import{c as u,f as d}from"./argTypes-Diu0Wtb4.js";var f=t({Default:()=>h,Disabled:()=>_,InAField:()=>v,InAFieldWithValidation:()=>y,Invalid:()=>g,__namedExportsOrder:()=>b,default:()=>m}),p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{s(),c(),d(),p=n(),m={title:`Components/Forms/Time Input`,component:l,args:{disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!1}},disabled:u,onChange:{table:{disable:!1}}}},h={},g={args:{invalid:!0}},_={args:{disabled:!0}},v={render:e=>(0,p.jsxs)(a,{invalid:e.invalid,children:[(0,p.jsx)(i,{htmlFor:`input1`,children:`Label`}),(0,p.jsx)(r,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,p.jsx)(o,{id:`error1`,children:`Foutmelding.`}),(0,p.jsx)(l,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},y={args:{invalid:!0},render:e=>(0,p.jsxs)(a,{invalid:e.invalid,children:[(0,p.jsx)(i,{htmlFor:`input2`,children:`Label`}),(0,p.jsx)(r,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,p.jsx)(o,{id:`error2`,children:`Foutmelding.`}),(0,p.jsx)(l,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TimeInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TimeInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`]})))()}export{f as a,g as i,v as n,x as o,y as r,m as s,_ as t};