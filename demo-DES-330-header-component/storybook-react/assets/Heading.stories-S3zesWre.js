import{H as I,j as c}from"./index.esm-TvWdbKsd.js";import{b as e}from"./exampleContent-TBzjRFzx.js";const O={title:"Text/Heading",component:I,args:{children:e(),inverseColor:!1},argTypes:{level:{control:"radio",options:[1,2,3,4]},size:{control:"radio",options:["level-1","level-2","level-3","level-4","level-5","level-6"]},inverseColor:{control:"boolean"}}},r={args:{children:e()},decorators:[(t,l)=>c.jsx("div",{className:l.args.inverseColor?"amsterdam-docs-dark-background":void 0,children:c.jsx(t,{})})]},a={args:{children:e()}},s={args:{children:e(),level:2}},o={args:{children:e(),level:3}},n={args:{children:e(),level:4}},d={args:{children:e(),inverseColor:!0},decorators:[(t,l)=>c.jsx("div",{className:l.args.inverseColor?"amsterdam-docs-dark-background":void 0,children:c.jsx(t,{})})]};var i,m,g;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: exampleHeading()
  },
  decorators: [(Story, context) => <div className={context.args.inverseColor ? 'amsterdam-docs-dark-background' : undefined}>
        <Story />
      </div>]
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var p,u,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: exampleHeading()
  }
}`,...(v=(u=a.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var x,H,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: exampleHeading(),
    level: 2
  }
}`,...(h=(H=s.parameters)==null?void 0:H.docs)==null?void 0:h.source}}};var S,b,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: exampleHeading(),
    level: 3
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,j,k;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: exampleHeading(),
    level: 4
  }
}`,...(k=(j=n.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var y,_,N;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: exampleHeading(),
    inverseColor: true
  },
  decorators: [(Story, context) => <div className={context.args.inverseColor ? 'amsterdam-docs-dark-background' : undefined}>
        <Story />
      </div>]
}`,...(N=(_=d.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const T=["Default","Heading1","Heading2","Heading3","Heading4","InvertedColor"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Heading1:a,Heading2:s,Heading3:o,Heading4:n,InvertedColor:d,__namedExportsOrder:T,default:O},Symbol.toStringTag,{value:"Module"}));export{E as H,d as I,a,s as b,o as c,n as d};
