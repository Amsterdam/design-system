import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./jsx-runtime-BqsN2jGA.js";import{E as r,I as i,X as a,h as o}from"./iframe-BZdfl_Wp.js";import{St as s,t as c}from"./src-C1xryYL6.js";var l=e({Default:()=>f,Disabled:()=>h,InAField:()=>g,MultipleFiles:()=>p,RestrictFileTypes:()=>m,__namedExportsOrder:()=>_,default:()=>d}),u,d,f,p,m,h,g,_,v=t((()=>{a(),c(),u=n(),d={title:`Components/Forms/File Input`,component:s,args:{accept:void 0,disabled:!1,multiple:!1},argTypes:{accept:{control:{type:`text`}},disabled:{control:{type:`boolean`}},multiple:{control:{type:`boolean`}},onChange:{table:{disable:!1}}}},f={},p={args:{multiple:!0}},m={args:{accept:`application/pdf`}},h={args:{disabled:!0}},g={render:e=>(0,u.jsxs)(o,{children:[(0,u.jsx)(r,{htmlFor:`input1`,children:`Label`}),(0,u.jsx)(i,{id:`description1`,children:`Omschrijving.`}),(0,u.jsx)(s,{"aria-describedby":`description1`,id:`input1`,...e})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    accept: 'application/pdf'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <Field>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1">Omschrijving.</Paragraph>
      <FileInput aria-describedby="description1" id="input1" {...args} />
    </Field>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`MultipleFiles`,`RestrictFileTypes`,`Disabled`,`InAField`]}));v();export{f as Default,h as Disabled,g as InAField,p as MultipleFiles,m as RestrictFileTypes,_ as __namedExportsOrder,d as default,v as n,l as t};