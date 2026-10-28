import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-BG4KOiPz.js";import{V as r,_ as i,g as a,k as o,rt as s}from"./index.esm-CeIUkm58.js";import{n as c,t as l}from"./TextArea-Bderqr9h.js";import{f as u,g as d}from"./exampleContent-IbnonNTi.js";import{c as f,f as p}from"./argTypes-BlEHYq0r.js";var m=t({Default:()=>v,Disabled:()=>C,HorizontalResize:()=>b,InAField:()=>w,Invalid:()=>S,NoResize:()=>x,VerticalResize:()=>y,WithValidation:()=>T,__namedExportsOrder:()=>E,default:()=>_}),h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{s(),c(),p(),d(),h=n(),g=u(),_={title:`Components/Forms/Text Area`,component:l,args:{defaultValue:g,disabled:!1,invalid:!1},argTypes:{cols:{control:{min:1,type:`number`},description:`The width, expressed in the average number of characters.`},defaultValue:{table:{disable:!1}},disabled:f,onChange:{table:{disable:!1}},resize:{control:{labels:{undefined:`both (default)`},type:`radio`},options:[void 0,`none`,`horizontal`,`vertical`]},rows:{control:{min:1,type:`number`},description:`The number of lines to show.`}}},v={},y={args:{resize:`vertical`}},b={args:{resize:`horizontal`}},x={args:{resize:`none`}},S={args:{invalid:!0}},C={args:{disabled:!0}},w={render:e=>(0,h.jsxs)(i,{invalid:e.invalid,children:[(0,h.jsx)(o,{htmlFor:`input1`,children:`Label`}),(0,h.jsx)(r,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,h.jsx)(a,{id:`error1`,children:`Foutmelding.`}),(0,h.jsx)(l,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},T={args:{invalid:!0},render:e=>(0,h.jsxs)(i,{invalid:e.invalid,children:[(0,h.jsx)(o,{htmlFor:`input2`,children:`Label`}),(0,h.jsx)(r,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,h.jsx)(a,{id:`error2`,children:`Foutmelding.`}),(0,h.jsx)(l,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},E=[`Default`,`VerticalResize`,`HorizontalResize`,`NoResize`,`Invalid`,`Disabled`,`InAField`,`WithValidation`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    resize: 'vertical'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    resize: 'horizontal'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    resize: 'none'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TextArea aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TextArea aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...T.parameters?.docs?.source}}}})))()}export{x as a,T as c,S as i,D as l,b as n,m as o,w as r,y as s,C as t,_ as u};