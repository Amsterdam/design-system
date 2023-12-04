import{H as I,j as c}from"./index.esm-kmrc-QzO.js";import{b as d}from"./exampleContent-DCqAwpyi.js";const O={title:"Text/Heading",component:I,args:{inverseColor:!1},argTypes:{level:{control:"radio",options:[1,2,3,4]},size:{control:"radio",options:["level-1","level-2","level-3","level-4"]},inverseColor:{control:"boolean"}}},e={decorators:[(t,l)=>c.jsx("div",{className:l.args.inverseColor?"amsterdam-docs-dark-background":void 0,children:c.jsx(t,{})})]},r={args:{children:d()}},a={args:{children:d(),level:2}},s={args:{children:d(),level:3}},o={args:{children:d(),level:4}},n={args:{children:d(),inverseColor:!0},decorators:[(t,l)=>c.jsx("div",{className:l.args.inverseColor?"amsterdam-docs-dark-background":void 0,children:c.jsx(t,{})})]};var i,m,g;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  decorators: [(Story, context) => <div className={context.args.inverseColor ? 'amsterdam-docs-dark-background' : undefined}>
        <Story />
      </div>]
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,u,v;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: exampleHeading()
  }
}`,...(v=(u=r.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var x,H,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: exampleHeading(),
    level: 2
  }
}`,...(S=(H=a.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var h,b,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: exampleHeading(),
    level: 3
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,j,k;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: exampleHeading(),
    level: 4
  }
}`,...(k=(j=o.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var y,_,N;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: exampleHeading(),
    inverseColor: true
  },
  decorators: [(Story, context) => <div className={context.args.inverseColor ? 'amsterdam-docs-dark-background' : undefined}>
        <Story />
      </div>]
}`,...(N=(_=n.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const T=["Default","Heading1","Heading2","Heading3","Heading4","InvertedColor"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Heading1:r,Heading2:a,Heading3:s,Heading4:o,InvertedColor:n,__namedExportsOrder:T,default:O},Symbol.toStringTag,{value:"Module"}));export{E as H,n as I,r as a,a as b,s as c,o as d};
