import{P,j as o}from"./index.esm-kmrc-QzO.js";import{e as n}from"./exampleContent-DCqAwpyi.js";const C={title:"Text/Paragraph",component:P,args:{inverseColor:!1},argTypes:{size:{control:{type:"select",labels:{undefined:"default",large:"large",small:"small"}},options:[void 0,"large","small"]}}},r={args:{children:n()},decorators:[(t,c)=>o.jsx("div",{className:c.args.inverseColor?"amsterdam-docs-dark-background":void 0,children:o.jsx(t,{})})]},e={args:{children:n(),size:"large"}},a={args:{children:n(),size:"small"}},s={args:{children:n(),inverseColor:!0},decorators:[(t,c)=>o.jsx("div",{className:c.args.inverseColor?"amsterdam-docs-dark-background":void 0,children:o.jsx(t,{})})]};var l,d,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: exampleParagraph()
  },
  decorators: [(Story, context) => <div className={context.args.inverseColor ? 'amsterdam-docs-dark-background' : undefined}>
        <Story />
      </div>]
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,p,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: exampleParagraph(),
    size: 'large'
  }
}`,...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,v,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: exampleParagraph(),
    size: 'small'
  }
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,S,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: exampleParagraph(),
    inverseColor: true
  },
  decorators: [(Story, context) => <div className={context.args.inverseColor ? 'amsterdam-docs-dark-background' : undefined}>
        <Story />
      </div>]
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const b=["Default","Large","Small","InvertedColor"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:r,InvertedColor:s,Large:e,Small:a,__namedExportsOrder:b,default:C},Symbol.toStringTag,{value:"Module"}));export{r as D,s as I,e as L,y as P,a as S};
