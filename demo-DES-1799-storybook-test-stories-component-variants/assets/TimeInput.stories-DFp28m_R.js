import{n as e,r as t}from"./chunk-zsgVPwQN.js";import{At as n,G as r,N as i,m as a,p as o,w as s}from"./iframe-LMw21FmS.js";import{r as c,t as l}from"./src-BY2PK9H5.js";var u=t({Default:()=>p,Disabled:()=>h,InAField:()=>g,InAFieldWithValidation:()=>_,Invalid:()=>m,__namedExportsOrder:()=>v,default:()=>f}),d,f,p,m,h,g,_,v,y=e((()=>{r(),l(),d=n(),f={title:`Components/Forms/Time Input`,component:c,args:{disabled:!1,invalid:!1},argTypes:{disabled:{description:`Prevents interaction. Avoid if possible.`}}},p={},m={args:{invalid:!0}},h={args:{disabled:!0}},g={render:e=>(0,d.jsxs)(a,{invalid:e.invalid,children:[(0,d.jsx)(s,{htmlFor:`input1`,children:`Label`}),(0,d.jsx)(i,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,d.jsx)(o,{id:`error1`,children:`Foutmelding.`}),(0,d.jsx)(c,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},_={args:{invalid:!0},render:e=>(0,d.jsxs)(a,{invalid:e.invalid,children:[(0,d.jsx)(s,{htmlFor:`input2`,children:`Label`}),(0,d.jsx)(i,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,d.jsx)(o,{id:`error2`,children:`Foutmelding.`}),(0,d.jsx)(c,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TimeInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TimeInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`]}));y();export{p as Default,h as Disabled,g as InAField,_ as InAFieldWithValidation,m as Invalid,v as __namedExportsOrder,f as default,y as n,u as t};