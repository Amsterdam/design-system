import{j as r}from"./jsx-runtime-BlAj40OV.js";import{e as _,I as d,f as D,g as P,h as B}from"./index.esm-DQgjFsBh.js";import{i as E,c as H}from"./decorators-CweBkPI6.js";import{a as R}from"./exampleContent-hIIPvEhU.js";import{L as e}from"./LinkList-MjnznahE.js";const O=R(),W={title:"Components/Navigation/Link List",component:e};e.Link;const L={args:{children:O.map((n,m)=>r.jsx(e.Link,{href:"#",children:n},m))}},l={args:{children:O[0],contrastColor:!1,href:"#",icon:_,inverseColor:!1},argTypes:{icon:{control:{type:"select",labels:{undefined:"none"}},options:[void 0,...Object.keys(d)],mapping:d},size:{control:{type:"radio",labels:{undefined:"medium"}},options:["small",void 0,"large"]}},decorators:[n=>r.jsx(e,{children:r.jsx(n,{})}),E,H],render:({children:n,...m})=>r.jsx(e.Link,{...m,children:n})},s={...L},o={...L,args:{children:[r.jsx(e.Link,{href:"#",icon:D,children:"Contactformulier"},"form"),r.jsx(e.Link,{href:"#",icon:P,children:"Adressen en openingstijden"},"address"),r.jsx(e.Link,{href:"#",icon:B,children:"Bel 14 020"},"phone")]}},t={...L,args:{children:[r.jsx(e.Link,{href:"#",size:"small",children:"Over deze website"},"about"),r.jsx(e.Link,{href:"#",size:"small",children:"Abonneer u op de nieuwsbrief"},"newsletter"),r.jsx(e.Link,{href:"#",size:"small",children:"Werken bij de gemeente Amsterdam"},"jobs")]}},i={...l},a={...l,args:{...l.args,contrastColor:!0}},c={...l,args:{...l.args,inverseColor:!0}};var p,k,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,C,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(C=t.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var j,b,v;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...LinkStoryTemplate
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,T,I;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(A=(w=c.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const M=["Default","CustomIcons","SmallText","Link","ContrastColour","InverseColour"],K=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:a,CustomIcons:o,Default:s,InverseColour:c,Link:i,SmallText:t,__namedExportsOrder:M,default:W},Symbol.toStringTag,{value:"Module"}));export{o as C,c as I,K as L,t as S,i as a,a as b};
