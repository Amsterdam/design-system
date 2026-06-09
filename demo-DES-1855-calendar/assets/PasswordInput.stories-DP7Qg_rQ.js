import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{E as n,I as r,Wt as i,X as a,h as o,m as s}from"./iframe-DUmJMFQL.js";import{S as c,t as l}from"./src-iWUwQSS6.js";var u=t({Default:()=>p,InAField:()=>h,InAFieldWithValidation:()=>g,Size:()=>m,__namedExportsOrder:()=>_,default:()=>f}),d,f,p,m,h,g,_,v=e((()=>{a(),l(),d=i(),f={title:`Components/Forms/Password Input`,component:c,args:{disabled:!1,invalid:!1},argTypes:{disabled:{description:`Prevents interaction. Avoid if possible.`},size:{control:{min:0,type:`number`},description:`The width, expressed in the average number of characters.`}}},p={},m={args:{size:10}},h={render:e=>(0,d.jsxs)(o,{invalid:e.invalid,children:[(0,d.jsx)(n,{htmlFor:`input1`,children:`Label`}),(0,d.jsx)(r,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,d.jsx)(s,{id:`error1`,children:`Foutmelding.`}),(0,d.jsx)(c,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},g={args:{invalid:!0},render:e=>(0,d.jsxs)(o,{invalid:e.invalid,children:[(0,d.jsx)(n,{htmlFor:`input2`,children:`Label`}),(0,d.jsx)(r,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,d.jsx)(s,{id:`error2`,children:`Foutmelding.`}),(0,d.jsx)(c,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 10
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <PasswordInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <PasswordInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Size`,`InAField`,`InAFieldWithValidation`]}));v();export{p as Default,h as InAField,g as InAFieldWithValidation,m as Size,_ as __namedExportsOrder,f as default,v as n,u as t};