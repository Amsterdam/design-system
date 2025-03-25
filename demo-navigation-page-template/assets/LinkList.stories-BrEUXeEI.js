import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{I as L,e as _,f as P,g as B,h as D}from"./index.esm-DlBD7MQf.js";import{a as E}from"./exampleContent-PGFPgakh.js";import{L as e}from"./LinkList-CsZ6_KB9.js";const O=E(),H={title:"Components/Navigation/Link List",component:e};e.Link;const d={args:{children:O.map((r,m)=>n.jsx(e.Link,{href:"#",children:r},m))}},l={args:{children:O[0],href:"#",icon:_},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:L,options:[void 0,...Object.keys(L)]},size:{control:{labels:{undefined:"medium"},type:"radio"},options:["small",void 0,"large"]}},decorators:[r=>n.jsx(e,{children:n.jsx(r,{})})],render:({children:r,...m})=>n.jsx(e.Link,{...m,children:r})},s={...d},o={...d,args:{children:[n.jsx(e.Link,{href:"#",icon:P,children:"Contactformulier"},"form"),n.jsx(e.Link,{href:"#",icon:B,children:"Adressen en openingstijden"},"address"),n.jsx(e.Link,{href:"#",icon:D,children:"Bel 14 020"},"phone")]}},i={...d,args:{children:[n.jsx(e.Link,{href:"#",size:"small",children:"Over deze website"},"about"),n.jsx(e.Link,{href:"#",size:"small",children:"Abonneer u op de nieuwsbrief"},"newsletter"),n.jsx(e.Link,{href:"#",size:"small",children:"Werken bij de gemeente Amsterdam"},"jobs")]}},t={...l},a={...l,args:{...l.args,color:"contrast"}},c={...l,args:{...l.args,color:"inverse"}};var p,k,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(u=(k=s.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var g,h,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<LinkList.Link href="#" icon={Icons.ChattingIcon} key="form">
        Contactformulier
      </LinkList.Link>, <LinkList.Link href="#" icon={Icons.HousingIcon} key="address">
        Adressen en openingstijden
      </LinkList.Link>, <LinkList.Link href="#" icon={Icons.PhoneIcon} key="phone">
        Bel 14 020
      </LinkList.Link>]
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,y,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<LinkList.Link href="#" key="about" size="small">
        Over deze website
      </LinkList.Link>, <LinkList.Link href="#" key="newsletter" size="small">
        Abonneer u op de nieuwsbrief
      </LinkList.Link>, <LinkList.Link href="#" key="jobs" size="small">
        Werken bij de gemeente Amsterdam
      </LinkList.Link>]
  }
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var b,v,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...LinkStoryTemplate
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,T,I;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'contrast'
  }
}`,...(I=(T=a.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var z,w,A;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'inverse'
  }
}`,...(A=(w=c.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const R=["Default","CustomIcons","SmallText","Link","ContrastColour","InverseColour"],F=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:a,CustomIcons:o,Default:s,InverseColour:c,Link:t,SmallText:i,__namedExportsOrder:R,default:H},Symbol.toStringTag,{value:"Module"}));export{o as C,c as I,F as L,i as S,t as a,a as b};
