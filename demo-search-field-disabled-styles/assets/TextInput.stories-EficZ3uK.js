import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{P as r,X as i,f as a,p as o,w as s}from"./index.esm-BuUwYaWY.js";import{c,o as l,s as u,t as d}from"./src-Df6CyQ3K.js";import{d as f,s as p}from"./argTypes-CQXDxDHP.js";var m=t({DecimalNumber:()=>S,Default:()=>_,Disabled:()=>T,EmailAddress:()=>v,InAField:()=>E,InAFieldWithValidation:()=>D,Invalid:()=>w,PhoneNumber:()=>b,Size:()=>C,WebAddress:()=>y,WholeNumber:()=>x,__namedExportsOrder:()=>O,default:()=>g}),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k=e((()=>{i(),d(),u(),f(),h=n(),g={title:`Components/Forms/Text Input`,component:l,args:{defaultValue:`Amsterdam`,disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!1}},disabled:p,onChange:{table:{disable:!1}},size:{control:{min:1,type:`number`},description:`The width, expressed in the average number of characters.`},type:{control:{labels:{undefined:`text (default)`},type:`radio`},options:[void 0,...c.filter(e=>e!==`text`)]}}},_={},v={args:{defaultValue:`designsystem@amsterdam.nl`,size:30,type:`email`}},y={args:{defaultValue:`https://designsystem.amsterdam/`,size:40,type:`url`}},b={args:{defaultValue:`14020`,size:15,type:`tel`}},x={args:{defaultValue:`20`,inputMode:`numeric`,pattern:`[0-9]*`,size:5,spellCheck:!1}},S={args:{defaultValue:`12.75`,pattern:`[0-9.,]*`,size:5,spellCheck:!1}},C={args:{defaultValue:`1011 PN`,size:7}},w={args:{defaultValue:`Deze waarde is ongeldig`,invalid:!0}},T={args:{defaultValue:`Deze waarde kan niet veranderd worden`,disabled:!0}},E={args:{defaultValue:``},render:e=>(0,h.jsxs)(o,{invalid:e.invalid,children:[(0,h.jsx)(s,{htmlFor:`input1`,children:`Label`}),(0,h.jsx)(r,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,h.jsx)(a,{id:`error1`,children:`Foutmelding.`}),(0,h.jsx)(l,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},D={args:{defaultValue:``,invalid:!0},render:e=>(0,h.jsxs)(o,{invalid:e.invalid,children:[(0,h.jsx)(s,{htmlFor:`input2`,children:`Label`}),(0,h.jsx)(r,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,h.jsx)(a,{id:`error2`,children:`Foutmelding.`}),(0,h.jsx)(l,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'designsystem@amsterdam.nl',
    size: 30,
    type: 'email'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'https://designsystem.amsterdam/',
    size: 40,
    type: 'url'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '14020',
    size: 15,
    type: 'tel'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '20',
    inputMode: 'numeric',
    pattern: '[0-9]*',
    size: 5,
    spellCheck: false
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '12.75',
    pattern: '[0-9.,]*',
    size: 5,
    spellCheck: false
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '1011 PN',
    size: 7
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Deze waarde is ongeldig',
    invalid: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Deze waarde kan niet veranderd worden',
    disabled: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ''
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '',
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...D.parameters?.docs?.source}}},O=[`Default`,`EmailAddress`,`WebAddress`,`PhoneNumber`,`WholeNumber`,`DecimalNumber`,`Size`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`]}));k();export{S as DecimalNumber,_ as Default,T as Disabled,v as EmailAddress,E as InAField,D as InAFieldWithValidation,w as Invalid,b as PhoneNumber,C as Size,y as WebAddress,x as WholeNumber,O as __namedExportsOrder,g as default,k as n,m as t};