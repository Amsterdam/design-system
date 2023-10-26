import{L as P,o as d,j as n,P as E,p as _}from"./index.esm-f5e8df3d.js";const q={title:"Navigation/Link",component:P,argTypes:{icon:{control:{type:"select"},options:Object.keys(d),mapping:d,table:{category:"API"}},onBackground:{control:{type:"select",labels:{default:"default",light:"light",dark:"dark"}},options:["default","light","dark"],table:{category:"API",defaultValue:{summary:"default"}}},variant:{control:{type:"select",labels:{standalone:"standalone",inline:"inline",inList:"inList"}},options:["standalone","inline","inList"],table:{category:"API",defaultValue:{summary:"standalone"}}},href:{name:"href",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},rel:{name:"rel",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},target:{name:"target",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}}},args:{children:"Linktekst",href:"#"}},a={args:{onBackground:void 0}},r={args:{children:"typograaf",href:"#",variant:"inline",onBackground:void 0},decorators:[e=>n.jsxs(E,{children:["Jouw ",n.jsx(e,{})," biedt mij zulke exquise schreven!"]})]},o={args:{children:"Linktekst",href:"#",variant:"inList",onBackground:void 0}},t={args:{children:"Linktekst",href:"#",variant:"inList",onBackground:void 0,icon:_}},s={args:{onBackground:"dark"},decorators:[e=>n.jsx("div",{style:{background:"#004699",display:"inline",padding:"16px"},children:n.jsx(e,{})})]},i={args:{onBackground:"light"},decorators:[e=>n.jsx("div",{style:{background:"#FFE600",display:"inline",padding:"16px"},children:n.jsx(e,{})})]};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    onBackground: undefined // Workaround to avoid 'onBackground' being set to an empty function
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,p,m;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'typograaf',
    href: '#',
    variant: 'inline',
    onBackground: undefined
  },
  decorators: [Story => <Paragraph>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>]
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var k,y,h;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Linktekst',
    href: '#',
    variant: 'inList',
    onBackground: undefined
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,L,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Linktekst',
    href: '#',
    variant: 'inList',
    onBackground: undefined,
    icon: Icons.EmailIcon
  }
}`,...(b=(L=t.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var v,S,B;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(B=(S=s.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var x,I,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(I=i.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const T=["Standalone","Inline","InList","InListWithIcon","onDarkBackground","onLightBackground"],F=Object.freeze(Object.defineProperty({__proto__:null,InList:o,InListWithIcon:t,Inline:r,Standalone:a,__namedExportsOrder:T,default:q,onDarkBackground:s,onLightBackground:i},Symbol.toStringTag,{value:"Module"}));export{r as I,F as L,a as S,o as a,t as b,i as c,s as o};
//# sourceMappingURL=Link.stories-3343e99a.js.map
