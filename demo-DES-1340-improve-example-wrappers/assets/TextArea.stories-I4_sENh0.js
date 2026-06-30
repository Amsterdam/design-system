import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./jsx-runtime-BqsN2jGA.js";import{J as r,P as i,f as a,p as o,w as s}from"./index.esm-CCC_cZNy.js";import{c,t as l}from"./src-CArDBTAb.js";import{c as u,p as d}from"./exampleContent--bKQaizt.js";var f=e({Default:()=>h,Disabled:()=>b,HorizontalResize:()=>_,InAField:()=>x,InAFieldWithValidation:()=>S,Invalid:()=>y,NoResize:()=>v,VerticalResize:()=>g,__namedExportsOrder:()=>C,default:()=>m}),p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{r(),l(),d(),p=n(),m={title:`Components/Forms/Text Area`,component:c,args:{defaultValue:u(),disabled:!1,invalid:!1},argTypes:{cols:{control:{type:`number`},description:`The width, expressed in the average number of characters.`},defaultValue:{table:{disable:!1}},disabled:{description:`Prevents interaction. Avoid if possible.`},onChange:{table:{disable:!1}},resize:{control:{labels:{horizontal:`horizontal`,none:`none`,undefined:`default`,vertical:`vertical`},type:`radio`},options:[void 0,`none`,`horizontal`,`vertical`]},rows:{control:{type:`number`},description:`The number of lines to show`}}},h={},g={args:{resize:`vertical`}},_={args:{resize:`horizontal`}},v={args:{resize:`none`}},y={args:{invalid:!0}},b={args:{disabled:!0}},x={render:e=>(0,p.jsxs)(o,{invalid:e.invalid,children:[(0,p.jsx)(s,{htmlFor:`input1`,children:`Label`}),(0,p.jsx)(i,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,p.jsx)(a,{id:`error1`,children:`Foutmelding.`}),(0,p.jsx)(c,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},S={args:{invalid:!0},render:e=>(0,p.jsxs)(o,{invalid:e.invalid,children:[(0,p.jsx)(s,{htmlFor:`input2`,children:`Label`}),(0,p.jsx)(i,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,p.jsx)(a,{id:`error2`,children:`Foutmelding.`}),(0,p.jsx)(c,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    resize: 'vertical'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    resize: 'horizontal'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    resize: 'none'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextArea aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TextArea aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...S.parameters?.docs?.source}}},C=[`Default`,`VerticalResize`,`HorizontalResize`,`NoResize`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`]}));w();export{h as Default,b as Disabled,_ as HorizontalResize,x as InAField,S as InAFieldWithValidation,y as Invalid,v as NoResize,g as VerticalResize,C as __namedExportsOrder,m as default,w as n,f as t};