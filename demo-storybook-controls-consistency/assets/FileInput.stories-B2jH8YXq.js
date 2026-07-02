import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{J as r,P as i,p as a,w as o}from"./index.esm-Biy4Zre3.js";import{Et as s,t as c}from"./src-CCmgLtBV.js";import{i as l,l as u}from"./argTypes-J67b33k4.js";var d=e({Default:()=>m,Disabled:()=>_,InAField:()=>v,MultipleFiles:()=>h,RestrictFileTypes:()=>g,__namedExportsOrder:()=>y,default:()=>p}),f,p,m,h,g,_,v,y,b=t((()=>{r(),c(),u(),f=n(),p={title:`Components/Forms/File Input`,component:s,args:{accept:void 0,disabled:!1,multiple:!1},argTypes:{accept:{control:{type:`text`},description:`The file types that the user can select.`},disabled:l,multiple:{description:`Allows selecting more than one file.`},onChange:{table:{disable:!1}}}},m={},h={args:{multiple:!0}},g={args:{accept:`application/pdf`}},_={args:{disabled:!0}},v={render:e=>(0,f.jsxs)(a,{children:[(0,f.jsx)(o,{htmlFor:`input1`,children:`Label`}),(0,f.jsx)(i,{id:`description1`,children:`Omschrijving.`}),(0,f.jsx)(s,{"aria-describedby":`description1`,id:`input1`,...e})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    accept: 'application/pdf'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Field>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      <FileInput aria-describedby="description1" id="input1" {...args} />
    </Field>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`MultipleFiles`,`RestrictFileTypes`,`Disabled`,`InAField`]}));b();export{m as Default,_ as Disabled,v as InAField,h as MultipleFiles,g as RestrictFileTypes,y as __namedExportsOrder,p as default,b as n,d as t};