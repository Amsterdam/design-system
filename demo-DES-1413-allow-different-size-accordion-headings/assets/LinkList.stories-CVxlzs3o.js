import{j as e,I as L,H as u,k as g,l as h,m as f}from"./iframe-CZs940Vb.js";import{a as j}from"./exampleContent-B7cDFRSs.js";import{L as n}from"./LinkList-GkvRjcWL.js";const k=j(),S={title:"Components/Navigation/Link List",component:n};n.Link;const d={args:{children:k.map(s=>e.jsx(n.Link,{href:"#",children:s},s))}},m={args:{children:k[0],href:"#"},argTypes:{color:{control:{labels:{undefined:"default"},type:"radio"},options:[void 0,"contrast","inverse"]},icon:{control:{labels:{undefined:"none"},type:"select"},mapping:L,options:[void 0,...Object.keys(L)]},size:{control:{labels:{undefined:"medium"},type:"radio"},options:["small",void 0,"large"]}},decorators:[s=>e.jsx(n,{children:e.jsx(s,{})})],render:({children:s,...p})=>e.jsx(n.Link,{...p,children:s})},r={...d},o={...d,render:({children:s,...p})=>e.jsxs(e.Fragment,{children:[e.jsx(u,{className:"ams-mb-s",level:3,size:"level-4",children:"Adres en inschrijving"}),e.jsx(n,{...p,children:s})]})},i={...d,args:{children:[e.jsx(n.Link,{href:"#",icon:e.jsx(g,{}),children:"Contactformulier"},"form"),e.jsx(n.Link,{href:"#",icon:e.jsx(h,{}),children:"Adressen en openingstijden"},"address"),e.jsx(n.Link,{href:"#",icon:e.jsx(f,{}),children:"Bel 14 020"},"phone")]}},a={...d,args:{children:[e.jsx(n.Link,{href:"#",size:"small",children:"Over deze website"},"about"),e.jsx(n.Link,{href:"#",size:"small",children:"Abonneer u op de nieuwsbrief"},"newsletter"),e.jsx(n.Link,{href:"#",size:"small",children:"Werken bij de gemeente Amsterdam"},"jobs")]}},t={...m},c={...m,args:{...m.args,color:"contrast"}},l={...m,args:{...m.args,color:"inverse"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: ({
    children,
    ...args
  }) => <>
      <Heading className="ams-mb-s" level={3} size="level-4">
        Adres en inschrijving
      </Heading>
      <LinkList {...args}>{children}</LinkList>
    </>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'contrast'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'inverse'
  }
}`,...l.parameters?.docs?.source}}};const y=["Default","WithHeading","CustomIcons","SmallText","Link","ContrastColour","InverseColour"],T=Object.freeze(Object.defineProperty({__proto__:null,ContrastColour:c,CustomIcons:i,Default:r,InverseColour:l,Link:t,SmallText:a,WithHeading:o,__namedExportsOrder:y,default:S},Symbol.toStringTag,{value:"Module"}));export{i as C,l as I,T as L,a as S,o as W,t as a,c as b};
