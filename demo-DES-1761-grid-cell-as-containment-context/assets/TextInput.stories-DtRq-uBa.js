import{n as e,o as t,r as n}from"./chunk-zsgVPwQN.js";import{At as r,K as i,N as a,jt as o,kt as s,m as c,mn as l,p as u,w as d}from"./iframe-Bmd7fM3i.js";import{i as f,t as p}from"./src-CdzR-dx7.js";var m,h,g,_,v=e((()=>{m=o(),r(),h=t(l()),g=[`email`,`tel`,`text`,`url`],_=(0,h.forwardRef)(({className:e,dir:t,invalid:n,type:r=`text`,...i},a)=>(0,m.jsx)(`input`,{...i,"aria-invalid":n||void 0,className:s(`ams-text-input`,e),dir:t??`auto`,ref:a,type:r})),_.displayName=`TextInput`,_.__docgenInfo={description:`@see {@link https://designsystem.amsterdam/?path=/docs/components-forms-text-input--docs Text Input docs at Amsterdam Design System}`,methods:[],displayName:`TextInput`,props:{type:{defaultValue:{value:`'text'`,computed:!1},required:!1}}}})),y=n({DecimalNumber:()=>D,Default:()=>S,Disabled:()=>A,EmailAddress:()=>C,InAField:()=>j,InAFieldWithValidation:()=>M,Invalid:()=>k,PhoneNumber:()=>T,Size:()=>O,WebAddress:()=>w,WholeNumber:()=>E,__namedExportsOrder:()=>N,default:()=>x}),b,x,S,C,w,T,E,D,O,k,A,j,M,N,P=e((()=>{i(),v(),p(),b=o(),x={title:`Components/Forms/Text Input`,component:f,args:{defaultValue:`Amsterdam`,disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!0}},disabled:{description:`Prevents interaction. Avoid if possible.`},invalid:{description:`Whether the value fails a validation rule.`},size:{control:{min:0,type:`number`},description:`The width, expressed in the average number of characters.`},type:{control:{labels:{undefined:`text (default)`},type:`radio`},options:[void 0,...g.filter(e=>e!==`text`)]}}},S={},C={args:{defaultValue:`designsystem@amsterdam.nl`,size:30,type:`email`}},w={args:{defaultValue:`https://designsystem.amsterdam/`,size:40,type:`url`}},T={args:{defaultValue:`14020`,size:15,type:`tel`}},E={args:{defaultValue:`20`,inputMode:`numeric`,pattern:`[0-9]*`,size:5,spellCheck:!1}},D={args:{defaultValue:`12.75`,pattern:`[0-9.,]*`,size:5,spellCheck:!1}},O={args:{defaultValue:`1011 PN`,size:7}},k={args:{defaultValue:`Deze waarde is ongeldig`,invalid:!0}},A={args:{defaultValue:`Deze waarde kan niet veranderd worden`,disabled:!0}},j={args:{defaultValue:``},render:e=>(0,b.jsxs)(c,{invalid:e.invalid,children:[(0,b.jsx)(d,{htmlFor:`input1`,children:`Label`}),(0,b.jsx)(a,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,b.jsx)(u,{id:`error1`,children:`Foutmelding.`}),(0,b.jsx)(f,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},M={args:{defaultValue:``,invalid:!0},render:e=>(0,b.jsxs)(c,{invalid:e.invalid,children:[(0,b.jsx)(d,{htmlFor:`input2`,children:`Label`}),(0,b.jsx)(a,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,b.jsx)(u,{id:`error2`,children:`Foutmelding.`}),(0,b.jsx)(f,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'designsystem@amsterdam.nl',
    size: 30,
    type: 'email'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'https://designsystem.amsterdam/',
    size: 40,
    type: 'url'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '14020',
    size: 15,
    type: 'tel'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '20',
    inputMode: 'numeric',
    pattern: '[0-9]*',
    size: 5,
    spellCheck: false
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '12.75',
    pattern: '[0-9.,]*',
    size: 5,
    spellCheck: false
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '1011 PN',
    size: 7
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Deze waarde is ongeldig',
    invalid: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'Deze waarde kan niet veranderd worden',
    disabled: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: ''
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N=[`Default`,`EmailAddress`,`WebAddress`,`PhoneNumber`,`WholeNumber`,`DecimalNumber`,`Size`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`]}));P();export{D as DecimalNumber,S as Default,A as Disabled,C as EmailAddress,j as InAField,M as InAFieldWithValidation,k as Invalid,T as PhoneNumber,O as Size,w as WebAddress,E as WholeNumber,N as __namedExportsOrder,x as default,P as n,y as t};