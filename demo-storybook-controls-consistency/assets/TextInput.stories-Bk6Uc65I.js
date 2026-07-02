import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-BTu_umhU.js";import{t as i}from"./jsx-runtime-BCDDjCIb.js";import{n as a,t as o}from"./iframe-hsgz0TgF.js";import{J as s,P as c,f as l,p as u,w as d}from"./index.esm-D8eqIj5U.js";import{o as f,t as p}from"./src-C1A9rIMv.js";import{i as m,l as h}from"./argTypes-J67b33k4.js";var g,_,v,y,b=t((()=>{g=i(),a(),_=n(r()),v=[`email`,`tel`,`text`,`url`],y=(0,_.forwardRef)(({className:e,dir:t,invalid:n,type:r=`text`,...i},a)=>(0,g.jsx)(`input`,{...i,"aria-invalid":n||void 0,className:o(`ams-text-input`,e),dir:t??`auto`,ref:a,type:r})),y.displayName=`TextInput`,y.__docgenInfo={description:`A form field in which a user can enter text.

@see {@link https://designsystem.amsterdam/?path=/docs/components-forms-text-input--docs Text Input docs at Amsterdam Design System}`,methods:[],displayName:`TextInput`,props:{type:{defaultValue:{value:`'text'`,computed:!1},required:!1}}}})),x=e({DecimalNumber:()=>k,Default:()=>w,Disabled:()=>M,EmailAddress:()=>T,InAField:()=>N,InAFieldWithValidation:()=>P,Invalid:()=>j,PhoneNumber:()=>D,Size:()=>A,WebAddress:()=>E,WholeNumber:()=>O,__namedExportsOrder:()=>F,default:()=>C}),S,C,w,T,E,D,O,k,A,j,M,N,P,F,I=t((()=>{s(),b(),p(),h(),S=i(),C={title:`Components/Forms/Text Input`,component:f,args:{defaultValue:`Amsterdam`,disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!1}},disabled:m,onChange:{table:{disable:!1}},size:{control:{min:1,type:`number`},description:`The width, expressed in the average number of characters.`},type:{control:{labels:{undefined:`text (default)`},type:`radio`},options:[void 0,...v.filter(e=>e!==`text`)]}}},w={},T={args:{defaultValue:`designsystem@amsterdam.nl`,size:30,type:`email`}},E={args:{defaultValue:`https://designsystem.amsterdam/`,size:40,type:`url`}},D={args:{defaultValue:`14020`,size:15,type:`tel`}},O={args:{defaultValue:`20`,inputMode:`numeric`,pattern:`[0-9]*`,size:5,spellCheck:!1}},k={args:{defaultValue:`12.75`,pattern:`[0-9.,]*`,size:5,spellCheck:!1}},A={args:{defaultValue:`1011 PN`,size:7}},j={args:{defaultValue:`Deze waarde is ongeldig`,invalid:!0}},M={args:{defaultValue:`Deze waarde kan niet veranderd worden`,disabled:!0}},N={args:{defaultValue:``},render:e=>(0,S.jsxs)(u,{invalid:e.invalid,children:[(0,S.jsx)(d,{htmlFor:`input1`,children:`Label`}),(0,S.jsx)(c,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,S.jsx)(l,{id:`error1`,children:`Foutmelding.`}),(0,S.jsx)(f,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},P={args:{defaultValue:``,invalid:!0},render:e=>(0,S.jsxs)(u,{invalid:e.invalid,children:[(0,S.jsx)(d,{htmlFor:`input2`,children:`Label`}),(0,S.jsx)(c,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,S.jsx)(l,{id:`error2`,children:`Foutmelding.`}),(0,S.jsx)(f,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'designsystem@amsterdam.nl',
    size: 30,
    type: 'email'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'https://designsystem.amsterdam/',
    size: 40,
    type: 'url'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '14020',
    size: 15,
    type: 'tel'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '20',
    inputMode: 'numeric',
    pattern: '[0-9]*',
    size: 5,
    spellCheck: false
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '12.75',
    pattern: '[0-9.,]*',
    size: 5,
    spellCheck: false
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '1011 PN',
    size: 7
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Deze waarde is ongeldig',
    invalid: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Deze waarde kan niet veranderd worden',
    disabled: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ''
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F=[`Default`,`EmailAddress`,`WebAddress`,`PhoneNumber`,`WholeNumber`,`DecimalNumber`,`Size`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`]}));I();export{k as DecimalNumber,w as Default,M as Disabled,T as EmailAddress,N as InAField,P as InAFieldWithValidation,j as Invalid,D as PhoneNumber,A as Size,E as WebAddress,O as WholeNumber,F as __namedExportsOrder,C as default,I as n,x as t};