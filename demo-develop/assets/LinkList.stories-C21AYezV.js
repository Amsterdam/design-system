import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{B as r,K as i,P as a,b as o}from"./index.esm-Cf2AflXd.js";import{C as s,Y as c,nt as l}from"./index.esm-CuBy5koj.js";import{n as u,t as d}from"./LinkList-CZhGsIDR.js";import{g as f,u as p}from"./exampleContent-DRei7MoO.js";var m=t({CustomIcons:()=>S,Default:()=>y,LinkToTheWiderSet:()=>x,SmallText:()=>C,WithHeading:()=>b,__namedExportsOrder:()=>w,default:()=>_}),h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{l(),i(),u(),f(),h=n(),g=p(),_={title:`Components/Navigation/Link List`,component:d,subcomponents:{"LinkList.Link":d.Link}},v={args:{children:g.map(e=>(0,h.jsx)(d.Link,{href:`#`,children:e},e))}},y={...v},b={...v,render:({children:e,...t})=>(0,h.jsxs)(`div`,{className:`ams-prose`,children:[(0,h.jsx)(s,{level:3,children:`Adres en inschrijving`}),(0,h.jsx)(d,{...t,children:e})]})},x={...v,render:({children:e,...t})=>(0,h.jsxs)(`div`,{className:`ams-prose`,children:[(0,h.jsx)(d,{...t,children:e}),(0,h.jsx)(c,{href:`#`,children:`Alle onderwerpen`})]})},S={...v,args:{children:[(0,h.jsx)(d.Link,{href:`#`,icon:(0,h.jsx)(r,{}),children:`Contactformulier`},`form`),(0,h.jsx)(d.Link,{href:`#`,icon:(0,h.jsx)(o,{}),children:`Adressen en openingstijden`},`address`),(0,h.jsx)(d.Link,{href:`#`,icon:(0,h.jsx)(a,{}),children:`Bel 14 020`},`phone`)]}},C={...v,args:{children:[(0,h.jsx)(d.Link,{href:`#`,size:`small`,children:`Over deze website`},`about`),(0,h.jsx)(d.Link,{href:`#`,size:`small`,children:`Abonneer u op de nieuwsbrief`},`newsletter`),(0,h.jsx)(d.Link,{href:`#`,size:`small`,children:`Werken bij de gemeente Amsterdam`},`jobs`)]}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: ({
    children,
    ...args
  }) =>
  // ams-prose sets the vertical rhythm between the heading and the list.
  <div className="ams-prose">
      <Heading level={3}>Adres en inschrijving</Heading>
      <LinkList {...args}>{children}</LinkList>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: ({
    children,
    ...args
  }) =>
  // ams-prose sets the medium the vertical space guidance asks for between the list and the link below it.
  <div className="ams-prose">
      <LinkList {...args}>{children}</LinkList>
      <StandaloneLink href="#">Alle onderwerpen</StandaloneLink>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithHeading`,`LinkToTheWiderSet`,`CustomIcons`,`SmallText`]})))()}export{b as a,C as i,m as n,T as o,x as r,_ as s,S as t};