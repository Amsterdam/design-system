import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{B as r,O as i,_ as a,g as o,nt as s}from"./index.esm-wvfaR2gM.js";import{n as c,r as l,t as u}from"./TextInput-BXer-V-i.js";import{c as d,f}from"./argTypes-Diu0Wtb4.js";var p=t({DecimalNumber:()=>x,Default:()=>g,Disabled:()=>w,EmailAddress:()=>_,InAField:()=>T,InAFieldWithValidation:()=>E,Invalid:()=>C,PhoneNumber:()=>y,Size:()=>S,WebAddress:()=>v,WholeNumber:()=>b,__namedExportsOrder:()=>D,default:()=>h}),m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{s(),c(),f(),m=n(),h={title:`Components/Forms/Text Input`,component:u,args:{defaultValue:`Amsterdam`,disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!1}},disabled:d,onChange:{table:{disable:!1}},size:{control:{min:1,type:`number`},description:`The width, expressed in the average number of characters.`},type:{control:{labels:{undefined:`text (default)`},type:`radio`},options:[void 0,...l.filter(e=>e!==`text`)]}}},g={},_={args:{defaultValue:`designsystem@amsterdam.nl`,size:30,type:`email`}},v={args:{defaultValue:`https://designsystem.amsterdam/`,size:40,type:`url`}},y={args:{defaultValue:`14020`,size:15,type:`tel`}},b={args:{defaultValue:`20`,inputMode:`numeric`,pattern:`[0-9]*`,size:5,spellCheck:!1}},x={args:{defaultValue:`12.75`,pattern:`[0-9.,]*`,size:5,spellCheck:!1}},S={args:{defaultValue:`1011 PN`,size:7}},C={args:{defaultValue:`Deze waarde is ongeldig`,invalid:!0}},w={args:{defaultValue:`Deze waarde kan niet veranderd worden`,disabled:!0}},T={args:{defaultValue:``},render:e=>(0,m.jsxs)(a,{invalid:e.invalid,children:[(0,m.jsx)(i,{htmlFor:`input1`,children:`Label`}),(0,m.jsx)(r,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,m.jsx)(o,{id:`error1`,children:`Foutmelding.`}),(0,m.jsx)(u,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},E={args:{defaultValue:``,invalid:!0},render:e=>(0,m.jsxs)(a,{invalid:e.invalid,children:[(0,m.jsx)(i,{htmlFor:`input2`,children:`Label`}),(0,m.jsx)(r,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,m.jsx)(o,{id:`error2`,children:`Foutmelding.`}),(0,m.jsx)(u,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'designsystem@amsterdam.nl',
    size: 30,
    type: 'email'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'https://designsystem.amsterdam/',
    size: 40,
    type: 'url'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '14020',
    size: 15,
    type: 'tel'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '20',
    inputMode: 'numeric',
    pattern: '[0-9]*',
    size: 5,
    spellCheck: false
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '12.75',
    pattern: '[0-9.,]*',
    size: 5,
    spellCheck: false
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '1011 PN',
    size: 7
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Deze waarde is ongeldig',
    invalid: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Deze waarde kan niet veranderd worden',
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ''
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Default`,`EmailAddress`,`WebAddress`,`PhoneNumber`,`WholeNumber`,`DecimalNumber`,`Size`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`]})))()}export{E as a,S as c,b as d,O as f,T as i,p as l,w as n,C as o,h as p,_ as r,y as s,x as t,v as u};