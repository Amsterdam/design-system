import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{P as r,X as i,p as a,w as o}from"./index.esm-CGKJ42vs.js";import{kt as s,t as c}from"./src-BE3mV4H6.js";import{d as l,s as u}from"./argTypes-CQXDxDHP.js";import{n as d,t as f}from"./decorators-C0fl23KJ.js";var p=t({Default:()=>g,Disabled:()=>y,InAField:()=>b,MultipleFiles:()=>_,RestrictFileTypes:()=>v,__namedExportsOrder:()=>x,default:()=>h}),m,h,g,_,v,y,b,x,S=e((()=>{i(),c(),l(),f(),m=n(),h={title:`Components/Forms/File Input`,component:s,args:{accept:void 0,disabled:!1,multiple:!1},argTypes:{accept:{control:{type:`text`},description:`The file types that the user can select.`},disabled:u,multiple:{description:`Allows selecting more than one file.`},onChange:{table:{disable:!1}}},decorators:[d(`7-of-12-columns`)]},g={},_={args:{multiple:!0}},v={args:{accept:`application/pdf`}},y={args:{disabled:!0}},b={render:e=>(0,m.jsxs)(a,{children:[(0,m.jsx)(o,{htmlFor:`input1`,children:`Label`}),(0,m.jsx)(r,{id:`description1`,children:`Omschrijving.`}),(0,m.jsx)(s,{"aria-describedby":`description1`,id:`input1`,...e})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    accept: 'application/pdf'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Field>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      <FileInput aria-describedby="description1" id="input1" {...args} />
    </Field>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`MultipleFiles`,`RestrictFileTypes`,`Disabled`,`InAField`]}));S();export{g as Default,y as Disabled,b as InAField,_ as MultipleFiles,v as RestrictFileTypes,x as __namedExportsOrder,h as default,S as n,p as t};