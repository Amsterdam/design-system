import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{P as r,X as i,f as a,p as o,w as s}from"./index.esm-CGKJ42vs.js";import{B as c,t as l}from"./src-BE3mV4H6.js";import{d as u,s as d}from"./argTypes-CQXDxDHP.js";import{n as f,t as p}from"./decorators-C0fl23KJ.js";var m=t({Default:()=>_,InAField:()=>y,InAFieldWithValidation:()=>b,Size:()=>v,__namedExportsOrder:()=>x,default:()=>g}),h,g,_,v,y,b,x,S=e((()=>{i(),l(),u(),p(),h=n(),g={title:`Components/Forms/Password Input`,component:c,args:{disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!1}},disabled:d,onChange:{table:{disable:!1}},size:{control:{min:1,type:`number`},description:`The width, expressed in the average number of characters.`}},decorators:[f(`7-of-12-columns`)]},_={},v={args:{size:10}},y={render:e=>(0,h.jsxs)(o,{invalid:e.invalid,children:[(0,h.jsx)(s,{htmlFor:`input1`,children:`Label`}),(0,h.jsx)(r,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,h.jsx)(a,{id:`error1`,children:`Foutmelding.`}),(0,h.jsx)(c,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},b={args:{invalid:!0},render:e=>(0,h.jsxs)(o,{invalid:e.invalid,children:[(0,h.jsx)(s,{htmlFor:`input2`,children:`Label`}),(0,h.jsx)(r,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,h.jsx)(a,{id:`error2`,children:`Foutmelding.`}),(0,h.jsx)(c,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 10
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <PasswordInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <PasswordInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Size`,`InAField`,`InAFieldWithValidation`]}));S();export{_ as Default,y as InAField,b as InAFieldWithValidation,v as Size,x as __namedExportsOrder,g as default,S as n,m as t};