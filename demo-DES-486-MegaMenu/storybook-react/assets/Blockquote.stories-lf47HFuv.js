import{B as u,j as o}from"./index.esm-unIA4CDj.js";import{a as t}from"./exampleContent-TBzjRFzx.js";const p={title:"Text/Blockquote",component:u,args:{children:t(),inverseColor:!1},argTypes:{inverseColor:{control:"boolean"}}},e={args:{children:t()},decorators:[(s,a)=>o.jsx("div",{className:a.args.inverseColor?"amsterdam-docs-dark-background":void 0,children:o.jsx(s,{})})]},r={args:{children:t(),inverseColor:!0},decorators:[(s,a)=>o.jsx("div",{className:a.args.inverseColor?"amsterdam-docs-dark-background":void 0,children:o.jsx(s,{})})]};var n,d,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: exampleQuote()
  },
  decorators: [(Story, context) => <div className={context.args.inverseColor ? 'amsterdam-docs-dark-background' : undefined}>
        <Story />
      </div>]
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,i,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: exampleQuote(),
    inverseColor: true
  },
  decorators: [(Story, context) => <div className={context.args.inverseColor ? 'amsterdam-docs-dark-background' : undefined}>
        <Story />
      </div>]
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const v=["Default","InvertedColor"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:e,InvertedColor:r,__namedExportsOrder:v,default:p},Symbol.toStringTag,{value:"Module"}));export{k as B,r as I};
