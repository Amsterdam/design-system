import{j as t}from"./jsx-runtime-CKrituN3.js";import{d as g}from"./exampleContent-Ban077Ng.js";import{c as k}from"./clsx-B-dksMZM.js";import{r as f}from"./index-CBqU2yxZ.js";const a=f.forwardRef(({children:e,className:o,inverseColor:u,...p},v)=>t.jsx("blockquote",{...p,ref:v,className:k("ams-blockquote",u&&"ams-blockquote--inverse-color",o),children:e}));a.displayName="Blockquote";a.__docgenInfo={description:"",methods:[],displayName:"Blockquote",props:{inverseColor:{required:!1,tsType:{name:"boolean"},description:`De kleur van het citaat.
Gebruik deze property om het citaat in tegenovergestelde kleur te tonen.`}}};const x=g(),b={title:"Components/Text/Blockquote",component:a,args:{children:x,inverseColor:!1},argTypes:{children:{table:{disable:!1}},inverseColor:{control:"boolean"}}},r={decorators:[(e,o)=>t.jsx("div",{className:o.args.inverseColor?"ams-docs-dark-background":void 0,children:t.jsx(e,{})})]},s={args:{inverseColor:!0},decorators:[(e,o)=>t.jsx("div",{className:o.args.inverseColor?"ams-docs-dark-background":void 0,children:t.jsx(e,{})})]};var n,c,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  decorators: [(Story, context) => <div className={context.args.inverseColor ? 'ams-docs-dark-background' : undefined}>
        <Story />
      </div>]
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,i,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  },
  decorators: [(Story, context) => <div className={context.args.inverseColor ? 'ams-docs-dark-background' : undefined}>
        <Story />
      </div>]
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const C=["Default","InvertedColor"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:r,InvertedColor:s,__namedExportsOrder:C,default:b},Symbol.toStringTag,{value:"Module"}));export{_ as B,s as I};
