import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{E as r,I as i,Q as a,h as o}from"./index.esm-WLKLoVms.js";import{n as s,t as c}from"./FileInput-CVLeV8wL.js";import{d as l,s as u}from"./argTypes-CTYEle7b.js";var d=t({Default:()=>m,Disabled:()=>_,InAField:()=>v,MultipleFiles:()=>h,RestrictFileTypes:()=>g,__namedExportsOrder:()=>y,default:()=>p}),f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{a(),s(),l(),f=n(),p={title:`Components/Forms/File Input`,component:c,args:{accept:void 0,disabled:!1,multiple:!1},argTypes:{accept:{control:{type:`text`},description:`The file types that the user can select.`},disabled:u,multiple:{description:`Allows selecting more than one file.`},onChange:{table:{disable:!1}}}},m={},h={args:{multiple:!0}},g={args:{accept:`application/pdf`}},_={args:{disabled:!0}},v={render:e=>(0,f.jsxs)(o,{children:[(0,f.jsx)(r,{htmlFor:`input1`,children:`Label`}),(0,f.jsx)(i,{id:`description1`,children:`Omschrijving.`}),(0,f.jsx)(c,{"aria-describedby":`description1`,id:`input1`,...e})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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