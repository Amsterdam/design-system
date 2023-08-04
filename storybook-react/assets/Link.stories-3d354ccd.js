import{a as I,j as a,P}from"./index.esm-46c318fe.js";const _={title:"Link",component:I,argTypes:{onBackground:{control:{type:"select",labels:{default:"default",light:"light",dark:"dark"}},options:["default","light","dark"],table:{category:"API",defaultValue:{summary:"default"}}},variant:{control:{type:"select",labels:{standalone:"standalone",standaloneBold:"standaloneBold",inline:"inline",inList:"inList"}},options:["standalone","standaloneBold","inline","inList"],table:{category:"API",defaultValue:{summary:"standalone"}}},href:{name:"href",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},rel:{name:"rel",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}},target:{name:"target",type:{name:"string",required:!1},table:{category:"HTML attribute",defaultValue:{summary:""}}}},args:{children:"Linktekst",href:"#"}},n={args:{onBackground:void 0}},r={args:{variant:"standaloneBold",onBackground:void 0}},o={args:{children:"typograaf",href:"#",variant:"inline",onBackground:void 0},decorators:[e=>a.jsxs(P,{children:["Jouw ",a.jsx(e,{})," biedt mij zulke exquise schreven!"]})]},t={args:{children:"Linktekst",href:"#",variant:"inList",onBackground:void 0}},s={args:{onBackground:"dark"},decorators:[e=>a.jsx("div",{style:{background:"#004699",display:"inline",padding:"16px"},children:a.jsx(e,{})})]},d={args:{onBackground:"light"},decorators:[e=>a.jsx("div",{style:{background:"#FFE600",display:"inline",padding:"16px"},children:a.jsx(e,{})})]};var i,l,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    onBackground: undefined // Workaround to avoid 'onBackground' being set to an empty function
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var u,g,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'standaloneBold',
    onBackground: undefined
  }
}`,...(p=(g=r.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,k,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'typograaf',
    href: '#',
    variant: 'inline',
    onBackground: undefined
  },
  decorators: [Story => <Paragraph>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>]
}`,...(y=(k=o.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var f,h,B;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Linktekst',
    href: '#',
    variant: 'inList',
    onBackground: undefined
  }
}`,...(B=(h=t.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var b,v,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var L,x,j;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(j=(x=d.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const q=["Standalone","StandaloneBold","Inline","InList","onDarkBackground","onLightBackground"],V=Object.freeze(Object.defineProperty({__proto__:null,InList:t,Inline:o,Standalone:n,StandaloneBold:r,__namedExportsOrder:q,default:_,onDarkBackground:s,onLightBackground:d},Symbol.toStringTag,{value:"Module"}));export{o as I,V as L,n as S,r as a,t as b,d as c,s as o};
//# sourceMappingURL=Link.stories-3d354ccd.js.map
