import{j as r}from"./jsx-runtime-BlAj40OV.js";import{e as _,I as L,f as D}from"./index.esm-DR1h-95S.js";import{i as P,c as B}from"./decorators-CweBkPI6.js";import{a as E}from"./exampleContent-hIIPvEhU.js";import{L as e}from"./LinkList-DgONTizv.js";const O=E(),R={title:"Components/Navigation/Link List",component:e};e.Link;const d={args:{children:O.map((n,m)=>r.jsx(e.Link,{href:"#",children:n},m))}},l={args:{children:O[0],contrastColor:!1,href:"#",icon:_,inverseColor:!1},argTypes:{icon:{control:{type:"select"},options:Object.keys(L),mapping:L},size:{control:{type:"radio",labels:{undefined:"medium"}},options:["small",void 0,"large"]}},decorators:[n=>r.jsx(e,{children:r.jsx(n,{})}),P,B],render:({children:n,...m})=>r.jsx(e.Link,{...m,children:n})},s={...d},o={...d,args:{children:[r.jsx(e.Link,{href:"#",icon:void 0,children:"Contactformulier"},"form"),r.jsx(e.Link,{href:"#",icon:void 0,children:"Adressen en openingstijden"},"address"),r.jsx(e.Link,{href:"#",icon:D,children:"Bel 14 020"},"phone")]}},t={...d,args:{children:[r.jsx(e.Link,{href:"#",size:"small",children:"Over deze website"},"about"),r.jsx(e.Link,{href:"#",size:"small",children:"Abonneer u op de nieuwsbrief"},"newsletter"),r.jsx(e.Link,{href:"#",size:"small",children:"Werken bij de gemeente Amsterdam"},"jobs")]}},i={...l},a={...l,args:{...l.args,contrastColor:!0}},c={...l,args:{...l.args,inverseColor:!0}};var p,k,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...(u=(k=s.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var f,g,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,y,C;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(y=t.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var j,b,x;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(w=c.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const W=["Default","CustomIcons","SmallText","Link","ContrastColour","InverseColour"],G=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:a,CustomIcons:o,Default:s,InverseColour:c,Link:i,SmallText:t,__namedExportsOrder:W,default:R},Symbol.toStringTag,{value:"Module"}));export{o as C,c as I,G as L,t as S,i as a,a as b};
