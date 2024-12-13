import{j as n}from"./jsx-runtime-BjgbQsUx.js";import{e as _,I as d,f as P,g as B,h as D}from"./index.esm-Bz9pa_xK.js";import{a as E}from"./exampleContent-hIIPvEhU.js";import{L as e}from"./LinkList-DlaAvMMY.js";const O=E(),H={title:"Components/Navigation/Link List",component:e};e.Link;const L={args:{children:O.map((r,m)=>n.jsx(e.Link,{href:"#",children:r},m))}},l={args:{children:O[0],contrastColor:!1,href:"#",icon:_,inverseColor:!1},argTypes:{icon:{control:{type:"select",labels:{undefined:"none"}},options:[void 0,...Object.keys(d)],mapping:d},size:{control:{type:"radio",labels:{undefined:"medium"}},options:["small",void 0,"large"]}},decorators:[r=>n.jsx(e,{children:n.jsx(r,{})})],render:({children:r,...m})=>n.jsx(e.Link,{...m,children:r})},s={...L},o={...L,args:{children:[n.jsx(e.Link,{href:"#",icon:P,children:"Contactformulier"},"form"),n.jsx(e.Link,{href:"#",icon:B,children:"Adressen en openingstijden"},"address"),n.jsx(e.Link,{href:"#",icon:D,children:"Bel 14 020"},"phone")]}},t={...L,args:{children:[n.jsx(e.Link,{href:"#",size:"small",children:"Over deze website"},"about"),n.jsx(e.Link,{href:"#",size:"small",children:"Abonneer u op de nieuwsbrief"},"newsletter"),n.jsx(e.Link,{href:"#",size:"small",children:"Werken bij de gemeente Amsterdam"},"jobs")]}},i={...l},a={...l,args:{...l.args,contrastColor:!0}},c={...l,args:{...l.args,inverseColor:!0}};var p,k,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(u=(k=s.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var g,h,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<LinkList.Link key="form" href="#" icon={Icons.ChattingIcon}>
        Contactformulier
      </LinkList.Link>, <LinkList.Link key="address" href="#" icon={Icons.HousingIcon}>
        Adressen en openingstijden
      </LinkList.Link>, <LinkList.Link key="phone" href="#" icon={Icons.PhoneIcon}>
        Bel 14 020
      </LinkList.Link>]
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,y,j;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<LinkList.Link key="about" href="#" size="small">
        Over deze website
      </LinkList.Link>, <LinkList.Link key="newsletter" href="#" size="small">
        Abonneer u op de nieuwsbrief
      </LinkList.Link>, <LinkList.Link key="jobs" href="#" size="small">
        Werken bij de gemeente Amsterdam
      </LinkList.Link>]
  }
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var C,b,x;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  ...LinkStoryTemplate
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var v,T,I;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    contrastColor: true
  }
}`,...(I=(T=a.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var z,w,A;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    inverseColor: true
  }
}`,...(A=(w=c.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const R=["Default","CustomIcons","SmallText","Link","ContrastColour","InverseColour"],F=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:a,CustomIcons:o,Default:s,InverseColour:c,Link:i,SmallText:t,__namedExportsOrder:R,default:H},Symbol.toStringTag,{value:"Module"}));export{o as C,c as I,F as L,t as S,i as a,a as b};
