import{r as g,j as n,c as h}from"./iframe-BIgtA7Iv.js";import{H as f}from"./Hint-BJlokX98.js";const s=g.forwardRef(({children:o,className:l,hint:c,isPageHeading:d,optional:p,...m},u)=>{const i=n.jsxs("label",{...m,className:h("ams-label",l),ref:u,children:[o," ",n.jsx(f,{hint:c,optional:p})]});return d?n.jsx("h1",{className:"ams-label__heading",children:i}):i});s.displayName="Label";try{s.displayName="Label",s.__docgenInfo={description:"",displayName:"Label",props:{hint:{defaultValue:null,description:"Show a custom hint text.",name:"hint",required:!1,type:{name:"string"}},optional:{defaultValue:null,description:"Appends the text '(niet verplicht)' to the label or legend if no hint is provided. Use when the associated inputs are optional.",name:"optional",required:!1,type:{name:"boolean"}},isPageHeading:{defaultValue:null,description:`Render a level 1 heading around the label.
Set this if the Field is the only content of the page.`,name:"isPageHeading",required:!1,type:{name:"boolean"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const b={title:"Components/Forms/Label",component:s,args:{children:"Label",hint:"",optional:!1},argTypes:{children:{description:"The text content.",table:{disable:!1}}}},e={},a={args:{optional:!0}},t={args:{hint:"not required"}},r={args:{isPageHeading:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const _=["Default","Optional","WithHint","WithHeading"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Optional:a,WithHeading:r,WithHint:t,__namedExportsOrder:_,default:b},Symbol.toStringTag,{value:"Module"}));export{H as L,a as O,t as W,r as a};
