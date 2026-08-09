import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{B as r,O as i,_ as a,nt as o}from"./index.esm-DVcegsS3.js";import{n as s,t as c}from"./FileInput-CWoi6Ieb.js";import{c as l,f as u}from"./argTypes-Diu0Wtb4.js";var d=t({Default:()=>m,Disabled:()=>_,InAField:()=>v,MultipleFiles:()=>h,RestrictFileTypes:()=>g,__namedExportsOrder:()=>y,default:()=>p}),f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{o(),s(),u(),f=n(),p={title:`Components/Forms/File Input`,component:c,args:{disabled:!1,multiple:!1},argTypes:{accept:{control:{type:`text`},description:`The file types that the user can select.`},disabled:l,multiple:{description:`Allows selecting more than one file.`},onChange:{table:{disable:!1}}}},m={},h={args:{multiple:!0}},g={args:{accept:`application/pdf`}},_={args:{disabled:!0}},v={render:e=>(0,f.jsxs)(a,{children:[(0,f.jsx)(i,{htmlFor:`input1`,children:`Label`}),(0,f.jsx)(r,{id:`description1`,children:`Omschrijving.`}),(0,f.jsx)(c,{"aria-describedby":`description1`,id:`input1`,...e})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Default`,`MultipleFiles`,`RestrictFileTypes`,`Disabled`,`InAField`]})))()}export{g as a,h as i,d as n,b as o,v as r,p as s,_ as t};