import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{P as r,X as i,f as a,p as o,w as s}from"./index.esm-CGKJ42vs.js";import{c,o as l,s as u,t as d}from"./src-BE3mV4H6.js";import{d as f,s as p}from"./argTypes-CQXDxDHP.js";import{n as m,t as h}from"./decorators-C0fl23KJ.js";var g=t({DecimalNumber:()=>w,Default:()=>y,Disabled:()=>D,EmailAddress:()=>b,InAField:()=>O,InAFieldWithValidation:()=>k,Invalid:()=>E,PhoneNumber:()=>S,Size:()=>T,WebAddress:()=>x,WholeNumber:()=>C,__namedExportsOrder:()=>A,default:()=>v}),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j=e((()=>{i(),d(),u(),f(),h(),_=n(),v={title:`Components/Forms/Text Input`,component:l,args:{defaultValue:`Amsterdam`,disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!1}},disabled:p,onChange:{table:{disable:!1}},size:{control:{min:1,type:`number`},description:`The width, expressed in the average number of characters.`},type:{control:{labels:{undefined:`text (default)`},type:`radio`},options:[void 0,...c.filter(e=>e!==`text`)]}},decorators:[m(`7-of-12-columns`)]},y={},b={args:{defaultValue:`designsystem@amsterdam.nl`,size:30,type:`email`}},x={args:{defaultValue:`https://designsystem.amsterdam/`,size:40,type:`url`}},S={args:{defaultValue:`14020`,size:15,type:`tel`}},C={args:{defaultValue:`20`,inputMode:`numeric`,pattern:`[0-9]*`,size:5,spellCheck:!1}},w={args:{defaultValue:`12.75`,pattern:`[0-9.,]*`,size:5,spellCheck:!1}},T={args:{defaultValue:`1011 PN`,size:7}},E={args:{defaultValue:`Deze waarde is ongeldig`,invalid:!0}},D={args:{defaultValue:`Deze waarde kan niet veranderd worden`,disabled:!0}},O={args:{defaultValue:``},render:e=>(0,_.jsxs)(o,{invalid:e.invalid,children:[(0,_.jsx)(s,{htmlFor:`input1`,children:`Label`}),(0,_.jsx)(r,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,_.jsx)(a,{id:`error1`,children:`Foutmelding.`}),(0,_.jsx)(l,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},k={args:{defaultValue:``,invalid:!0},render:e=>(0,_.jsxs)(o,{invalid:e.invalid,children:[(0,_.jsx)(s,{htmlFor:`input2`,children:`Label`}),(0,_.jsx)(r,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,_.jsx)(a,{id:`error2`,children:`Foutmelding.`}),(0,_.jsx)(l,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'designsystem@amsterdam.nl',
    size: 30,
    type: 'email'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'https://designsystem.amsterdam/',
    size: 40,
    type: 'url'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '14020',
    size: 15,
    type: 'tel'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '20',
    inputMode: 'numeric',
    pattern: '[0-9]*',
    size: 5,
    spellCheck: false
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '12.75',
    pattern: '[0-9.,]*',
    size: 5,
    spellCheck: false
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '1011 PN',
    size: 7
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Deze waarde is ongeldig',
    invalid: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Deze waarde kan niet veranderd worden',
    disabled: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ''
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`Default`,`EmailAddress`,`WebAddress`,`PhoneNumber`,`WholeNumber`,`DecimalNumber`,`Size`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`]}));j();export{w as DecimalNumber,y as Default,D as Disabled,b as EmailAddress,O as InAField,k as InAFieldWithValidation,E as Invalid,S as PhoneNumber,T as Size,x as WebAddress,C as WholeNumber,A as __namedExportsOrder,v as default,j as n,g as t};