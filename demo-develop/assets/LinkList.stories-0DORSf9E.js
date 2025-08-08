import{j as n,I as d,k,l as u,m as h,n as g}from"./iframe-BJ_Ctx3d.js";import{a as f}from"./exampleContent-B7cDFRSs.js";import{L as e}from"./LinkList-fGl14wMO.js";const p=f(),S={title:"Components/Navigation/Link List",component:e};e.Link;const m={args:{children:p.map(r=>n.jsx(e.Link,{href:"#",children:r},r))}},l={args:{children:p[0],href:"#",icon:k},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:d,options:[void 0,...Object.keys(d)]},size:{control:{labels:{undefined:"medium"},type:"radio"},options:["small",void 0,"large"]}},decorators:[r=>n.jsx(e,{children:n.jsx(r,{})})],render:({children:r,...L})=>n.jsx(e.Link,{...L,children:r})},s={...m},o={...m,args:{children:[n.jsx(e.Link,{href:"#",icon:u,children:"Contactformulier"},"form"),n.jsx(e.Link,{href:"#",icon:h,children:"Adressen en openingstijden"},"address"),n.jsx(e.Link,{href:"#",icon:g,children:"Bel 14 020"},"phone")]}},i={...m,args:{children:[n.jsx(e.Link,{href:"#",size:"small",children:"Over deze website"},"about"),n.jsx(e.Link,{href:"#",size:"small",children:"Abonneer u op de nieuwsbrief"},"newsletter"),n.jsx(e.Link,{href:"#",size:"small",children:"Werken bij de gemeente Amsterdam"},"jobs")]}},a={...l},t={...l,args:{...l.args,color:"contrast"}},c={...l,args:{...l.args,color:"inverse"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'contrast'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'inverse'
  }
}`,...c.parameters?.docs?.source}}};const y=["Default","CustomIcons","SmallText","Link","ContrastColour","InverseColour"],x=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:t,CustomIcons:o,Default:s,InverseColour:c,Link:a,SmallText:i,__namedExportsOrder:y,default:S},Symbol.toStringTag,{value:"Module"}));export{o as C,c as I,x as L,i as S,a,t as b};
