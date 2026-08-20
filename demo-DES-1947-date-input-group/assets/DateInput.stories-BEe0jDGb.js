import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{B as r,O as i,_ as a,g as o,nt as s}from"./index.esm-DHWNm0sj.js";import{n as c,r as l,t as u}from"./DateInput-BUyi68tZ.js";import{c as d,f}from"./argTypes-Diu0Wtb4.js";var p=t({DateTime:()=>_,Default:()=>g,Disabled:()=>y,InAField:()=>b,InAFieldWithValidation:()=>x,Invalid:()=>v,__namedExportsOrder:()=>S,default:()=>h}),m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{s(),l(),f(),m=n(),h={title:`Components/Forms/Date Input`,component:u,args:{disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!1}},disabled:d,onChange:{table:{disable:!1}},type:{control:{labels:{undefined:`date (default)`},type:`radio`},options:[void 0,...c.filter(e=>e!==`date`)]}}},g={},_={args:{type:`datetime-local`}},v={args:{invalid:!0}},y={args:{disabled:!0}},b={render:e=>(0,m.jsxs)(a,{invalid:e.invalid,children:[(0,m.jsx)(i,{htmlFor:`input1`,children:`Label`}),(0,m.jsx)(r,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,m.jsx)(o,{id:`error1`,children:`Foutmelding.`}),(0,m.jsx)(u,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},x={args:{invalid:!0},render:e=>(0,m.jsxs)(a,{invalid:e.invalid,children:[(0,m.jsx)(i,{htmlFor:`input2`,children:`Label`}),(0,m.jsx)(r,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,m.jsx)(o,{id:`error2`,children:`Foutmelding.`}),(0,m.jsx)(u,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'datetime-local'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`DateTime`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`]})))()}export{x as a,h as c,b as i,_ as n,v as o,y as r,C as s,p as t};