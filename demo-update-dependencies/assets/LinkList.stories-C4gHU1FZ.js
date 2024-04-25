import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as m,d as A,e as w,f as _,g as D}from"./index.esm-DjZ2yxjc.js";import{c as E}from"./exampleContent-CRK3_7Hv.js";import{L as n}from"./LinkList-BmpxO9J_.js";const k=E(),F={title:"Components/Navigation/Link List",component:n,args:{children:k.map((r,l)=>e.jsx(n.Link,{href:"#",children:r},l))}},P={title:"Components/Navigation/Link List Link",component:n.Link,argTypes:{icon:{control:{type:"select"},options:Object.keys(m),mapping:m,defaultValue:A},onBackground:{control:{type:"radio",labels:{undefined:"(not set)",light:"light",dark:"dark"}},options:[void 0,"light","dark"]},size:{control:{type:"radio",labels:{small:"small",undefined:"medium",large:"large"}},options:["small",void 0,"large"]}}},H={},c={args:{href:"#"},argTypes:P.argTypes,decorators:[r=>e.jsx(n,{children:e.jsx(r,{})})],render:({children:r,...l})=>e.jsx(n.Link,{...l,children:r})},s={...H},o={args:{children:[e.jsx(n.Link,{href:"#",icon:w,children:"Contactformulier"},"form"),e.jsx(n.Link,{href:"#",icon:_,children:"Adressen en openingstijden"},"address"),e.jsx(n.Link,{href:"#",icon:D,children:"Bel 14 020"},"phone")]}},i={args:{children:[e.jsx(n.Link,{href:"#",size:"small",children:"Over deze website"},"about"),e.jsx(n.Link,{href:"#",size:"small",children:"Abonneer u op de nieuwsbrief"},"newsletter"),e.jsx(n.Link,{href:"#",size:"small",children:"Werken bij de gemeente Amsterdam"},"jobs")]}},a={...c,args:{children:"Alles over openbare orde en veiligheid",href:"#",onBackground:void 0,size:void 0}},t={...c,args:{children:k[0],href:"#",onBackground:"dark"},decorators:[...c.decorators,r=>e.jsx("div",{style:{background:"#004699",padding:"1rem"},children:e.jsx(r,{})})]},d={...c,args:{children:k[0],href:"#",onBackground:"light"},decorators:[...c.decorators,r=>e.jsx("div",{style:{background:"#FFE600",padding:"1rem"},children:e.jsx(r,{})})]};var g,p,L;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...LinkTemplate
}`,...(L=(p=s.parameters)==null?void 0:p.docs)==null?void 0:L.source}}};var u,h,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: [<LinkList.Link key="form" href="#" icon={Icons.ChattingIcon}>
        Contactformulier
      </LinkList.Link>, <LinkList.Link key="address" href="#" icon={Icons.HousingIcon}>
        Adressen en openingstijden
      </LinkList.Link>, <LinkList.Link key="phone" href="#" icon={Icons.PhoneIcon}>
        Bel 14 020
      </LinkList.Link>]
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,S,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: [<LinkList.Link key="about" href="#" size="small">
        Over deze website
      </LinkList.Link>, <LinkList.Link key="newsletter" href="#" size="small">
        Abonneer u op de nieuwsbrief
      </LinkList.Link>, <LinkList.Link key="jobs" href="#" size="small">
        Werken bij de gemeente Amsterdam
      </LinkList.Link>]
  }
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var j,v,x;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    children: 'Alles over openbare orde en veiligheid',
    href: '#',
    onBackground: undefined,
    size: undefined
  }
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var T,B,z;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    children: links[0],
    href: '#',
    onBackground: 'dark'
  },
  decorators: [...LinkStoryTemplate.decorators, Story => <div style={{
    background: '#004699',
    padding: '1rem'
  }}>
        <Story />
      </div>]
}`,...(z=(B=t.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var O,C,I;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    children: links[0],
    href: '#',
    onBackground: 'light'
  },
  decorators: [...LinkStoryTemplate.decorators, Story => <div style={{
    background: '#FFE600',
    padding: '1rem'
  }}>
        <Story />
      </div>]
}`,...(I=(C=d.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};const M=["Default","CustomIcons","SmallText","Link","OnDarkBackground","OnLightBackground"],q=Object.freeze(Object.defineProperty({__proto__:null,CustomIcons:o,Default:s,Link:a,OnDarkBackground:t,OnLightBackground:d,SmallText:i,__namedExportsOrder:M,default:F},Symbol.toStringTag,{value:"Module"}));export{o as C,q as L,t as O,i as S,a,d as b};
