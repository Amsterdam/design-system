import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{P as r,X as i,f as a,p as o,w as s}from"./index.esm-CGKJ42vs.js";import{l as c,t as l}from"./src-BE3mV4H6.js";import{d as u,s as d}from"./argTypes-CQXDxDHP.js";import{l as f,m as p}from"./exampleContent-Cni407gr.js";import{n as m,t as h}from"./decorators-C0fl23KJ.js";var g=t({Default:()=>y,Disabled:()=>w,HorizontalResize:()=>x,InAField:()=>T,InAFieldWithValidation:()=>E,Invalid:()=>C,NoResize:()=>S,VerticalResize:()=>b,__namedExportsOrder:()=>D,default:()=>v}),_,v,y,b,x,S,C,w,T,E,D,O=e((()=>{i(),l(),u(),h(),p(),_=n(),v={title:`Components/Forms/Text Area`,component:c,args:{defaultValue:f(),disabled:!1,invalid:!1},argTypes:{cols:{control:{min:1,type:`number`},description:`The width, expressed in the average number of characters.`},defaultValue:{table:{disable:!1}},disabled:d,onChange:{table:{disable:!1}},resize:{control:{labels:{undefined:`both (default)`},type:`radio`},options:[void 0,`none`,`horizontal`,`vertical`]},rows:{control:{min:1,type:`number`},description:`The number of lines to show.`}},decorators:[m(`7-of-12-columns`)]},y={},b={args:{resize:`vertical`}},x={args:{resize:`horizontal`}},S={args:{resize:`none`}},C={args:{invalid:!0}},w={args:{disabled:!0}},T={render:e=>(0,_.jsxs)(o,{invalid:e.invalid,children:[(0,_.jsx)(s,{htmlFor:`input1`,children:`Label`}),(0,_.jsx)(r,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,_.jsx)(a,{id:`error1`,children:`Foutmelding.`}),(0,_.jsx)(c,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},E={args:{invalid:!0},render:e=>(0,_.jsxs)(o,{invalid:e.invalid,children:[(0,_.jsx)(s,{htmlFor:`input2`,children:`Label`}),(0,_.jsx)(r,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,_.jsx)(a,{id:`error2`,children:`Foutmelding.`}),(0,_.jsx)(c,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    resize: 'vertical'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    resize: 'horizontal'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    resize: 'none'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextArea aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TextArea aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...E.parameters?.docs?.source}}},D=[`Default`,`VerticalResize`,`HorizontalResize`,`NoResize`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`]}));O();export{y as Default,w as Disabled,x as HorizontalResize,T as InAField,E as InAFieldWithValidation,C as Invalid,S as NoResize,b as VerticalResize,D as __namedExportsOrder,v as default,O as n,g as t};