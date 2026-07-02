import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{J as r,P as i,f as a,p as o,w as s}from"./index.esm-Biy4Zre3.js";import{L as c,t as l}from"./src-CCmgLtBV.js";import{i as u,l as d}from"./argTypes-J67b33k4.js";var f=e({Default:()=>h,InAField:()=>_,InAFieldWithValidation:()=>v,Size:()=>g,__namedExportsOrder:()=>y,default:()=>m}),p,m,h,g,_,v,y,b=t((()=>{r(),l(),d(),p=n(),m={title:`Components/Forms/Password Input`,component:c,args:{disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!1}},disabled:u,onChange:{table:{disable:!1}},size:{control:{min:1,type:`number`},description:`The width, expressed in the average number of characters.`}}},h={},g={args:{size:10}},_={render:e=>(0,p.jsxs)(o,{invalid:e.invalid,children:[(0,p.jsx)(s,{htmlFor:`input1`,children:`Label`}),(0,p.jsx)(i,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,p.jsx)(a,{id:`error1`,children:`Foutmelding.`}),(0,p.jsx)(c,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},v={args:{invalid:!0},render:e=>(0,p.jsxs)(o,{invalid:e.invalid,children:[(0,p.jsx)(s,{htmlFor:`input2`,children:`Label`}),(0,p.jsx)(i,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,p.jsx)(a,{id:`error2`,children:`Foutmelding.`}),(0,p.jsx)(c,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 10
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <PasswordInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <PasswordInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Size`,`InAField`,`InAFieldWithValidation`]}));b();export{h as Default,_ as InAField,v as InAFieldWithValidation,g as Size,y as __namedExportsOrder,m as default,b as n,f as t};