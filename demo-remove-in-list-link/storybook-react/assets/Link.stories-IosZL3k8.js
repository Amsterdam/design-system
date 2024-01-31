import{L as v,j as a,P as j}from"./index.esm-9d7ZuBKV.js";const L={title:"Navigation/Link",component:v,argTypes:{onBackground:{control:{type:"radio",labels:{undefined:"default",light:"light",dark:"dark"}},options:[void 0,"light","dark"],table:{category:"API"}},variant:{control:{type:"radio"},options:["standalone","inline"],table:{category:"API",defaultValue:{summary:"standalone"}}},href:{name:"href",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},rel:{name:"rel",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},target:{name:"target",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}}},args:{children:"Linktekst",href:"#",onBackground:void 0}},r={},n={},o={args:{children:"typograaf",variant:"inline"},decorators:[e=>a.jsxs(j,{children:["Jouw ",a.jsx(e,{})," biedt mij zulke exquise schreven!"]})]},t={args:{onBackground:"dark"},decorators:[e=>a.jsx("div",{style:{background:"#004699",display:"inline",padding:"16px"},children:a.jsx(e,{})})]},s={args:{onBackground:"light"},decorators:[e=>a.jsx("div",{style:{background:"#FFE600",display:"inline",padding:"16px"},children:a.jsx(e,{})})]};var i,d,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,u,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,m,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'typograaf',
    variant: 'inline'
  },
  decorators: [Story => <Paragraph>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>]
}`,...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var k,h,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    onBackground: 'dark'
  },
  decorators: [Story => <div style={{
    background: '#004699',
    display: 'inline',
    padding: '16px'
  }}>
        <Story />
      </div>]
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,S,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    onBackground: 'light'
  },
  decorators: [Story => <div style={{
    background: '#FFE600',
    display: 'inline',
    padding: '16px'
  }}>
        <Story />
      </div>]
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const B=["Default","Standalone","Inline","onDarkBackground","onLightBackground"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Inline:o,Standalone:n,__namedExportsOrder:B,default:L,onDarkBackground:t,onLightBackground:s},Symbol.toStringTag,{value:"Module"}));export{o as I,_ as L,n as S,s as a,t as o};
