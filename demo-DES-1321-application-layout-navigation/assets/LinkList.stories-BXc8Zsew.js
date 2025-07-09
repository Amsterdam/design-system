import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{I as p,m as k,n as u,o as h,p as g}from"./index.esm-BXPVASbn.js";import{a as f}from"./exampleContent-r-zRGsZY.js";import{L as e}from"./LinkList-KDoUe5Ig.js";const L=f(),S={title:"Components/Navigation/Link List",component:e};e.Link;const d={args:{children:L.map((r,m)=>n.jsx(e.Link,{href:"#",children:r},m))}},l={args:{children:L[0],href:"#",icon:k},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:p,options:[void 0,...Object.keys(p)]},size:{control:{labels:{undefined:"medium"},type:"radio"},options:["small",void 0,"large"]}},decorators:[r=>n.jsx(e,{children:n.jsx(r,{})})],render:({children:r,...m})=>n.jsx(e.Link,{...m,children:r})},s={...d},o={...d,args:{children:[n.jsx(e.Link,{href:"#",icon:u,children:"Contactformulier"},"form"),n.jsx(e.Link,{href:"#",icon:h,children:"Adressen en openingstijden"},"address"),n.jsx(e.Link,{href:"#",icon:g,children:"Bel 14 020"},"phone")]}},i={...d,args:{children:[n.jsx(e.Link,{href:"#",size:"small",children:"Over deze website"},"about"),n.jsx(e.Link,{href:"#",size:"small",children:"Abonneer u op de nieuwsbrief"},"newsletter"),n.jsx(e.Link,{href:"#",size:"small",children:"Werken bij de gemeente Amsterdam"},"jobs")]}},t={...l},a={...l,args:{...l.args,color:"contrast"}},c={...l,args:{...l.args,color:"inverse"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<LinkList.Link href="#" icon={Icons.SpeechBalloonEllipsisIcon} key="form">
        Contactformulier
      </LinkList.Link>, <LinkList.Link href="#" icon={Icons.HouseIcon} key="address">
        Adressen en openingstijden
      </LinkList.Link>, <LinkList.Link href="#" icon={Icons.PhoneIcon} key="phone">
        Bel 14 020
      </LinkList.Link>]
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'contrast'
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'inverse'
  }
}`,...c.parameters?.docs?.source}}};const y=["Default","CustomIcons","SmallText","Link","ContrastColour","InverseColour"],T=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:a,CustomIcons:o,Default:s,InverseColour:c,Link:t,SmallText:i,__namedExportsOrder:y,default:S},Symbol.toStringTag,{value:"Module"}));export{o as C,c as I,T as L,i as S,t as a,a as b};
