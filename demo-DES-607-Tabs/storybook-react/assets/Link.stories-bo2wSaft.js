import{L,l as i,j as e,P as j}from"./index.esm-FyDjFim0.js";const B={title:"Navigation/Link",component:L,argTypes:{icon:{control:{type:"select"},options:Object.keys(i),mapping:i,table:{category:"API"}},onBackground:{control:{type:"radio",labels:{undefined:"default",light:"light",dark:"dark"}},options:[void 0,"light","dark"],table:{category:"API"}},variant:{control:{type:"radio",labels:{standalone:"standalone",inline:"inline",inList:"inList"}},options:["standalone","inline","inList"],table:{category:"API",defaultValue:{summary:"standalone"}}},href:{name:"href",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},rel:{name:"rel",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},target:{name:"target",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}}},args:{children:"Linktekst",href:"#",onBackground:void 0}},r={},n={},t={args:{children:"typograaf",variant:"inline"},decorators:[a=>e.jsxs(j,{children:["Jouw ",e.jsx(a,{})," biedt mij zulke exquise schreven!"]})]},o={args:{onBackground:"dark"},decorators:[a=>e.jsx("div",{style:{background:"#004699",display:"inline",padding:"16px"},children:e.jsx(a,{})})]},s={args:{onBackground:"light"},decorators:[a=>e.jsx("div",{style:{background:"#FFE600",display:"inline",padding:"16px"},children:e.jsx(a,{})})]};var d,c,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,y,k;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'typograaf',
    variant: 'inline'
  },
  decorators: [Story => <Paragraph>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>]
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var b,h,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,x,v;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const P=["Default","Standalone","Inline","onDarkBackground","onLightBackground"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Inline:t,Standalone:n,__namedExportsOrder:P,default:B,onDarkBackground:o,onLightBackground:s},Symbol.toStringTag,{value:"Module"}));export{t as I,_ as L,n as S,s as a,o};
