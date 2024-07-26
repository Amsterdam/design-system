import{j as r}from"./jsx-runtime-BlAj40OV.js";import{e as _,I as d,f as D,g as P,h as B}from"./index.esm-Bsc2owIZ.js";import{i as E,c as H}from"./decorators-CweBkPI6.js";import{a as R}from"./exampleContent-hIIPvEhU.js";import{L as e}from"./LinkList-mVZ7vby0.js";const p=R(),W={title:"Components/Navigation/Link List",component:e};e.Link,p[0],_;const L={args:{children:p.map((n,m)=>r.jsx(e.Link,{href:"#",children:n},m))}},l={args:{children:p[0],contrastColor:!1,href:"#",icon:_,inverseColor:!1},argTypes:{contrastColor:{control:{type:"boolean"}},inverseColor:{control:{type:"boolean"}},icon:{control:{type:"select"},options:Object.keys(d),mapping:d},size:{control:{type:"radio",labels:{small:"small",undefined:"medium",large:"large"}},options:["small",void 0,"large"]}},decorators:[n=>r.jsx(e,{children:r.jsx(n,{})}),E,H],render:({children:n,...m})=>r.jsx(e.Link,{...m,children:n})},s={...L},o={...L,args:{children:[r.jsx(e.Link,{href:"#",icon:D,children:"Contactformulier"},"form"),r.jsx(e.Link,{href:"#",icon:P,children:"Adressen en openingstijden"},"address"),r.jsx(e.Link,{href:"#",icon:B,children:"Bel 14 020"},"phone")]}},t={...L,args:{children:[r.jsx(e.Link,{href:"#",size:"small",children:"Over deze website"},"about"),r.jsx(e.Link,{href:"#",size:"small",children:"Abonneer u op de nieuwsbrief"},"newsletter"),r.jsx(e.Link,{href:"#",size:"small",children:"Werken bij de gemeente Amsterdam"},"jobs")]}},a={...l},i={...l,args:{...l.args,contrastColor:!0}},c={...l,args:{...l.args,inverseColor:!0}};var k,u,g;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,f,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,y,j;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var b,v,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...LinkStoryTemplate
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var T,I,z;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    contrastColor: true
  }
}`,...(z=(I=i.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var w,A,O;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    inverseColor: true
  }
}`,...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const M=["Default","CustomIcons","SmallText","Link","ContrastColour","InverseColour"],K=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:i,CustomIcons:o,Default:s,InverseColour:c,Link:a,SmallText:t,__namedExportsOrder:M,default:W},Symbol.toStringTag,{value:"Module"}));export{o as C,c as I,K as L,t as S,a,i as b};
