import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{J as r,P as i,f as a,p as o,w as s}from"./index.esm-CXl0WGPA.js";import{c,t as l}from"./src-Dk4zeSri.js";import{f as u,s as d}from"./argTypes-K2rctYNz.js";import{l as f,m as p}from"./exampleContent-CFoxZuYq.js";var m=e({Default:()=>_,Disabled:()=>S,HorizontalResize:()=>y,InAField:()=>C,InAFieldWithValidation:()=>w,Invalid:()=>x,NoResize:()=>b,VerticalResize:()=>v,__namedExportsOrder:()=>T,default:()=>g}),h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{r(),l(),u(),p(),h=n(),g={title:`Components/Forms/Text Area`,component:c,args:{defaultValue:f(),disabled:!1,invalid:!1},argTypes:{cols:{control:{min:1,type:`number`},description:`The width, expressed in the average number of characters.`},defaultValue:{table:{disable:!1}},disabled:d,onChange:{table:{disable:!1}},resize:{control:{labels:{undefined:`both (default)`},type:`radio`},options:[void 0,`none`,`horizontal`,`vertical`]},rows:{control:{min:1,type:`number`},description:`The number of lines to show.`}}},_={},v={args:{resize:`vertical`}},y={args:{resize:`horizontal`}},b={args:{resize:`none`}},x={args:{invalid:!0}},S={args:{disabled:!0}},C={render:e=>(0,h.jsxs)(o,{invalid:e.invalid,children:[(0,h.jsx)(s,{htmlFor:`input1`,children:`Label`}),(0,h.jsx)(i,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,h.jsx)(a,{id:`error1`,children:`Foutmelding.`}),(0,h.jsx)(c,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},w={args:{invalid:!0},render:e=>(0,h.jsxs)(o,{invalid:e.invalid,children:[(0,h.jsx)(s,{htmlFor:`input2`,children:`Label`}),(0,h.jsx)(i,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,h.jsx)(a,{id:`error2`,children:`Foutmelding.`}),(0,h.jsx)(c,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    resize: 'vertical'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    resize: 'horizontal'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    resize: 'none'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextArea aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TextArea aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...w.parameters?.docs?.source}}},T=[`Default`,`VerticalResize`,`HorizontalResize`,`NoResize`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`]}));E();export{_ as Default,S as Disabled,y as HorizontalResize,C as InAField,w as InAFieldWithValidation,x as Invalid,b as NoResize,v as VerticalResize,T as __namedExportsOrder,g as default,E as n,m as t};