import{r as h,j as e,c as m}from"./iframe-Cpqq6kav.js";import{H as u}from"./Hint-C_78G9K7.js";const n=h.forwardRef(({children:o,className:i,hint:l,isPageHeading:g,optional:c,...d},p)=>g?e.jsx("h1",{className:"ams-label__heading",children:e.jsxs("label",{...d,className:m("ams-label",i),ref:p,children:[o," ",e.jsx(u,{hint:l,optional:c})]})}):e.jsxs("label",{...d,className:m("ams-label",i),ref:p,children:[o," ",e.jsx(u,{hint:l,optional:c})]}));n.displayName="Label";try{n.displayName="Label",n.__docgenInfo={description:"",displayName:"Label",props:{hint:{defaultValue:null,description:"Show a custom hint text.",name:"hint",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Appends the text '(niet verplicht)' to the label or legend if no hint is provided. Use when the associated inputs are optional.",name:"optional",required:!1,type:{name:"boolean"}},isPageHeading:{defaultValue:null,description:"Render a level 1 heading around the label",name:"isPageHeading",required:!1,type:{name:"boolean"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const b={title:"Components/Forms/Label",component:n,args:{children:"Label",hint:"",optional:!1},argTypes:{children:{description:"The text content.",table:{disable:!1}}}},a={},r={args:{optional:!0}},t={args:{hint:"not required"}},s={args:{isPageHeading:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    optional: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    hint: 'not required'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isPageHeading: true
  }
}`,...s.parameters?.docs?.source}}};const f=["Default","Optional","WithHint","WithHeading"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Optional:r,WithHeading:s,WithHint:t,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{y as L,r as O,t as W,s as a};
