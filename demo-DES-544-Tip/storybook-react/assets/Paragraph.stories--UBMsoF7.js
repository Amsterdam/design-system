import{P as C,j as o}from"./index.esm-hsfH36rw.js";import{e as b}from"./exampleContent-l8yDkOfs.js";const h=b(),j={title:"Text/Paragraph",component:C,args:{children:h,inverseColor:!1},argTypes:{size:{control:{type:"select",labels:{undefined:"default",large:"large",small:"small"}},options:[void 0,"large","small"]}}},r={decorators:[(t,n)=>o.jsx("div",{className:n.args.inverseColor?"amsterdam-docs-dark-background":void 0,children:o.jsx(t,{})})]},e={args:{size:"large"}},a={args:{size:"small"}},s={args:{inverseColor:!0},decorators:[(t,n)=>o.jsx("div",{className:n.args.inverseColor?"amsterdam-docs-dark-background":void 0,children:o.jsx(t,{})})]};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  decorators: [(Story, context) => <div className={context.args.inverseColor ? 'amsterdam-docs-dark-background' : undefined}>
        <Story />
      </div>]
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,i,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(g=(i=e.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};var p,u,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(v=(u=a.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var x,S,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    inverseColor: true
  },
  decorators: [(Story, context) => <div className={context.args.inverseColor ? 'amsterdam-docs-dark-background' : undefined}>
        <Story />
      </div>]
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const k=["Default","Large","Small","InvertedColor"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:r,InvertedColor:s,Large:e,Small:a,__namedExportsOrder:k,default:j},Symbol.toStringTag,{value:"Module"}));export{r as D,s as I,e as L,z as P,a as S};
