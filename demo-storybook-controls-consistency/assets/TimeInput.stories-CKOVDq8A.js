import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{J as r,P as i,f as a,p as o,w as s}from"./index.esm-CXl0WGPA.js";import{i as c,t as l}from"./src-Dk4zeSri.js";import{f as u,s as d}from"./argTypes-K2rctYNz.js";var f=e({Default:()=>h,Disabled:()=>_,InAField:()=>v,InAFieldWithValidation:()=>y,Invalid:()=>g,__namedExportsOrder:()=>b,default:()=>m}),p,m,h,g,_,v,y,b,x=t((()=>{r(),l(),u(),p=n(),m={title:`Components/Forms/Time Input`,component:c,args:{disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!1}},disabled:d,onChange:{table:{disable:!1}}}},h={},g={args:{invalid:!0}},_={args:{disabled:!0}},v={render:e=>(0,p.jsxs)(o,{invalid:e.invalid,children:[(0,p.jsx)(s,{htmlFor:`input1`,children:`Label`}),(0,p.jsx)(i,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,p.jsx)(a,{id:`error1`,children:`Foutmelding.`}),(0,p.jsx)(c,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},y={args:{invalid:!0},render:e=>(0,p.jsxs)(o,{invalid:e.invalid,children:[(0,p.jsx)(s,{htmlFor:`input2`,children:`Label`}),(0,p.jsx)(i,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,p.jsx)(a,{id:`error2`,children:`Foutmelding.`}),(0,p.jsx)(c,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`]}));x();export{h as Default,_ as Disabled,v as InAField,y as InAFieldWithValidation,g as Invalid,b as __namedExportsOrder,m as default,x as n,f as t};