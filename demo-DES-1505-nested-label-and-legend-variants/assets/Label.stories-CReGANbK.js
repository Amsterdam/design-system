import{r as b,j as o,c as f}from"./iframe-EkBBJOoa.js";import{H as _}from"./Hint-D11GHJDi.js";const n=b.forwardRef(({children:i,className:c,hint:p,inFieldSet:l,isPageHeading:u,optional:m,...h},g)=>{const d=o.jsxs("label",{...h,className:f("ams-label",l&&"ams-label--in-fieldset",c),ref:g,children:[i," ",o.jsx(_,{hint:p,inFieldSet:l,optional:m})]});return u?o.jsx("h1",{className:"ams-label__heading",children:d}):d});n.displayName="Label";try{n.displayName="Label",n.__docgenInfo={description:"",displayName:"Label",props:{inFieldSet:{defaultValue:null,description:`Whether the label is nested inside a fieldset.
This will show the label in a lighter style.`,name:"inFieldSet",required:!1,type:{name:"boolean"}},isPageHeading:{defaultValue:null,description:`Render a level 1 heading around the label.
Set this if the Field is the only content of the page.`,name:"isPageHeading",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Show a custom hint text.",name:"hint",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Appends the text '(niet verplicht)' to the label or legend if no hint is provided. Use when the associated inputs are optional.",name:"optional",required:!1,type:{name:"boolean"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const S={title:"Components/Forms/Label",component:n,args:{children:"Label",hint:"",optional:!1},argTypes:{children:{description:"The text content.",table:{disable:!1}}}},e={},a={args:{optional:!0}},t={args:{hint:"not required"}},r={args:{isPageHeading:!0}},s={args:{inFieldSet:!0,optional:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    optional: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    hint: 'not required'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    isPageHeading: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    inFieldSet: true,
    optional: true
  }
}`,...s.parameters?.docs?.source}}};const y=["Default","Optional","WithHint","WithHeading","InAFieldSet"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:e,InAFieldSet:s,Optional:a,WithHeading:r,WithHint:t,__namedExportsOrder:y,default:S},Symbol.toStringTag,{value:"Module"}));export{s as I,n as L,a as O,t as W,L as a,r as b,S as m};
