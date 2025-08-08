import{j as e,I as d,k,l as u,m as h}from"./iframe-Dv64ekkv.js";import{a as g}from"./exampleContent-B9pMnolB.js";import{L as n}from"./LinkList-JgLsn8q8.js";const p=g(),f={title:"Components/Navigation/Link List",component:n};n.Link;const m={args:{children:p.map(r=>e.jsx(n.Link,{href:"#",children:r},r))}},l={args:{children:p[0],href:"#"},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:d,options:[void 0,...Object.keys(d)]},size:{control:{labels:{undefined:"medium"},type:"radio"},options:["small",void 0,"large"]}},decorators:[r=>e.jsx(n,{children:e.jsx(r,{})})],render:({children:r,...L})=>e.jsx(n.Link,{...L,children:r})},s={...m},o={...m,args:{children:[e.jsx(n.Link,{href:"#",icon:e.jsx(k,{}),children:"Contactformulier"},"form"),e.jsx(n.Link,{href:"#",icon:e.jsx(u,{}),children:"Adressen en openingstijden"},"address"),e.jsx(n.Link,{href:"#",icon:e.jsx(h,{}),children:"Bel 14 020"},"phone")]}},i={...m,args:{children:[e.jsx(n.Link,{href:"#",size:"small",children:"Over deze website"},"about"),e.jsx(n.Link,{href:"#",size:"small",children:"Abonneer u op de nieuwsbrief"},"newsletter"),e.jsx(n.Link,{href:"#",size:"small",children:"Werken bij de gemeente Amsterdam"},"jobs")]}},t={...l},a={...l,args:{...l.args,color:"contrast"}},c={...l,args:{...l.args,color:"inverse"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  args: {
    children: [<LinkList.Link href="#" icon={<SpeechBalloonEllipsisIcon />} key="form">
        Contactformulier
      </LinkList.Link>, <LinkList.Link href="#" icon={<HouseIcon />} key="address">
        Adressen en openingstijden
      </LinkList.Link>, <LinkList.Link href="#" icon={<PhoneIcon />} key="phone">
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
}`,...c.parameters?.docs?.source}}};const S=["Default","CustomIcons","SmallText","Link","ContrastColour","InverseColour"],x=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:a,CustomIcons:o,Default:s,InverseColour:c,Link:t,SmallText:i,__namedExportsOrder:S,default:f},Symbol.toStringTag,{value:"Module"}));export{o as C,c as I,x as L,i as S,t as a,a as b};
