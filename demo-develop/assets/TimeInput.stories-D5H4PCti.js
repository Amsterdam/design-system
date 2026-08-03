import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{E as r,I as i,Q as a,h as o,m as s}from"./index.esm-cAj_xdzm.js";import{n as c,t as l}from"./TimeInput-DL_Dg4Rd.js";import{d as u,s as d}from"./argTypes-CTYEle7b.js";var f=t({Default:()=>h,Disabled:()=>_,InAField:()=>v,InAFieldWithValidation:()=>y,Invalid:()=>g,__namedExportsOrder:()=>b,default:()=>m}),p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{a(),c(),u(),p=n(),m={title:`Components/Forms/Time Input`,component:l,args:{disabled:!1,invalid:!1},argTypes:{defaultValue:{table:{disable:!1}},disabled:d,onChange:{table:{disable:!1}}}},h={},g={args:{invalid:!0}},_={args:{disabled:!0}},v={render:e=>(0,p.jsxs)(o,{invalid:e.invalid,children:[(0,p.jsx)(r,{htmlFor:`input1`,children:`Label`}),(0,p.jsx)(i,{id:`description1`,children:`Omschrijving.`}),e.invalid&&(0,p.jsx)(s,{id:`error1`,children:`Foutmelding.`}),(0,p.jsx)(l,{"aria-describedby":`description1${e.invalid?` error1`:``}`,id:`input1`,...e})]})},y={args:{invalid:!0},render:e=>(0,p.jsxs)(o,{invalid:e.invalid,children:[(0,p.jsx)(r,{htmlFor:`input2`,children:`Label`}),(0,p.jsx)(i,{id:`description2`,children:`Omschrijving.`}),e.invalid&&(0,p.jsx)(s,{id:`error2`,children:`Foutmelding.`}),(0,p.jsx)(l,{"aria-describedby":`description2${e.invalid?` error2`:``}`,id:`input2`,...e})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <TimeInput aria-describedby={\`description1\${args.invalid ? ' error1' : ''}\`} id="input1" {...args} />
    </Field>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    invalid: true
  },
  render: args => <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2">Omschrijving.</Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <TimeInput aria-describedby={\`description2\${args.invalid ? ' error2' : ''}\`} id="input2" {...args} />
    </Field>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Invalid`,`Disabled`,`InAField`,`InAFieldWithValidation`]})))()}export{f as a,g as i,v as n,x as o,y as r,m as s,_ as t};