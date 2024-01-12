import{L as T,k as d,j as a,P as D,l as F}from"./index.esm-OD6yB53t.js";const M={title:"Navigation/Link",component:T,argTypes:{icon:{control:{type:"select"},options:Object.keys(d),mapping:d,table:{category:"API"}},onBackground:{control:{type:"select",labels:{undefined:"default",light:"light",dark:"dark"}},options:[void 0,"light","dark"],table:{category:"API"}},variant:{control:{type:"select",labels:{standalone:"standalone",inline:"inline",inList:"inList"}},options:["standalone","inline","inList"],table:{category:"API",defaultValue:{summary:"standalone"}}},href:{name:"href",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},rel:{name:"rel",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},target:{name:"target",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}}},args:{children:"Linktekst",href:"#",onBackground:void 0}},r={},n={},s={args:{children:"typograaf",variant:"inline"},decorators:[e=>a.jsxs(D,{children:["Jouw ",a.jsx(e,{})," biedt mij zulke exquise schreven!"]})]},t={args:{variant:"inList"}},o={args:{variant:"inList",icon:F}},i={args:{onBackground:"dark"},decorators:[e=>a.jsx("div",{style:{background:"#004699",display:"inline",padding:"16px"},children:a.jsx(e,{})})]},c={args:{onBackground:"light"},decorators:[e=>a.jsx("div",{style:{background:"#FFE600",display:"inline",padding:"16px"},children:a.jsx(e,{})})]};var l,u,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,m,y;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(y=(m=n.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var k,h,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'typograaf',
    variant: 'inline'
  },
  decorators: [Story => <Paragraph>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>]
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var L,f,v;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'inList'
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var S,x,I;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'inList',
    icon: Icons.EmailIcon
  }
}`,...(I=(x=o.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var j,B,P;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(P=(B=i.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var E,_,q;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(q=(_=c.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const O=["Default","Standalone","Inline","InList","InListWithIcon","onDarkBackground","onLightBackground"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:r,InList:t,InListWithIcon:o,Inline:s,Standalone:n,__namedExportsOrder:O,default:M,onDarkBackground:i,onLightBackground:c},Symbol.toStringTag,{value:"Module"}));export{s as I,z as L,n as S,t as a,o as b,c,i as o};
