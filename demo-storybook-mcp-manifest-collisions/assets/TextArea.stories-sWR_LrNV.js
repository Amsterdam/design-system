import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{E as r,I as i,Q as a,h as o,m as s}from"./index.esm-DnN1Fzc5.js";import{n as c,t as l}from"./TextArea-B9dXw9pz.js";import{m as u,u as d}from"./exampleContent-DsZ2XVq0.js";import{d as f,s as p}from"./argTypes-CTYEle7b.js";var m=t({Default:()=>v,Disabled:()=>C,HorizontalResize:()=>b,InAField:()=>w,InAFieldWithValidation:()=>T,Invalid:()=>S,NoResize:()=>x,VerticalResize:()=>y,__namedExportsOrder:()=>E,default:()=>_}),h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{a(),c(),f(),u(),h=n(),g=d(),_={title:`Components/Forms/Text Area`,component:l,args:{defaultValue:g,disabled:!1,invalid:!1},argTypes:{cols:{control:{min:1,type:`number`},description:`The width, expressed in the average number of characters.`},defaultValue:{table:{disable:!1}},disabled:p,onChange:{table:{disable:!1}},resize:{control:{labels:{undefined:`both (default)`},type:`radio`},options:[void 0,`none`,`horizontal`,`vertical`]},rows:{control:{min:1,type:`number`},description:`The number of lines to show.`}}},v={},y={args:{resize:`vertical`}},b={args:{resize:`horizontal`}},x={args:{resize:`none`}},S={args:{invalid:!0}},C={args:{disabled:!0}},w={render:e=>(0,h.jsxs)(o,{invalid:e.invalid,children:[(0,h.jsx)(r,{htmlFor:`input1`,children:`Label`}),(0,h.jsx)(i,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,h.jsx)(s,{id:`error1`,children:`Foutmelding.`}),(0,h.jsx)(l,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},T={args:{invalid:!0},render:e=>(0,h.jsxs)(o,{invalid:e.invalid,children:[(0,h.jsx)(r,{htmlFor:`input2`,children:`Label`}),(0,h.jsx)(i,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,h.jsx)(s,{id:`error2`,children:`Foutmelding.`}),(0,h.jsx)(l,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Default`,`VerticalResize`,`HorizontalResize`,`NoResize`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`]})))()}export{S as a,y as c,T as i,D as l,b as n,x as o,w as r,m as s,C as t,_ as u};