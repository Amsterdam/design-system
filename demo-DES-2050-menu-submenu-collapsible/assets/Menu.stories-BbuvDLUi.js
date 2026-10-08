import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{F as i,K as a,n as o,p as s,y as c,z as l}from"./index.esm-AVY4e8gu.js";import{n as u,t as d}from"./Menu-D0GDXbZr.js";import{n as f,t as p}from"./useViewportHasMinWidth-p3rGIlmn.js";import{f as m,o as h}from"./argTypes-Diu0Wtb4.js";var g=t({CollapsibleSubmenu:()=>A,Default:()=>E,Expandable:()=>D,Expanded:()=>O,WithSubmenu:()=>k,__namedExportsOrder:()=>j,default:()=>T}),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{a(),u(),f(),_=n(),m(),v=r(),y=n(),{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,x=[{href:`#`,icon:(0,v.jsx)(i,{}),text:`Dashboard`},{href:`#`,icon:(0,v.jsx)(c,{}),text:`Projecten`},{href:`#`,icon:(0,v.jsx)(s,{}),text:`Rapportages`},{href:`#`,icon:(0,v.jsx)(o,{}),text:`Analyses`},{href:`#`,icon:(0,v.jsx)(l,{}),text:`Instellingen`}].map(({text:e,...t})=>(0,y.createElement)(d.Link,{...t,key:e},e)),S=[(0,v.jsx)(d.Link,{href:`#`,icon:(0,v.jsx)(i,{}),children:`Dashboard`},`Dashboard`),(0,v.jsxs)(d.Item,{href:`#`,icon:(0,v.jsx)(c,{}),label:`Projecten`,children:[(0,v.jsx)(d.Link,{href:`#`,children:`Overzicht`},`Overzicht`),(0,v.jsx)(d.Link,{href:`#`,children:`Planning`},`Planning`),(0,v.jsx)(d.Link,{href:`#`,children:`Team`},`Team`)]},`Projecten`),(0,v.jsx)(d.Link,{href:`#`,icon:(0,v.jsx)(s,{}),children:`Rapportages`},`Rapportages`),(0,v.jsx)(d.Link,{href:`#`,icon:(0,v.jsx)(o,{}),children:`Analyses`},`Analyses`),(0,v.jsx)(d.Link,{href:`#`,icon:(0,v.jsx)(l,{}),children:`Instellingen`},`Instellingen`)],C=[(0,v.jsx)(d.Link,{href:`#`,icon:(0,v.jsx)(i,{}),children:`Dashboard`},`Dashboard`),(0,v.jsxs)(d.Item,{defaultExpanded:!0,href:`#`,icon:(0,v.jsx)(c,{}),label:`Projecten`,children:[(0,v.jsx)(d.Link,{"aria-current":`page`,href:`#`,children:`Overzicht`},`Overzicht`),(0,v.jsx)(d.Link,{href:`#`,children:`Planning`},`Planning`),(0,v.jsx)(d.Link,{href:`#`,children:`Team`},`Team`)]},`Projecten`),(0,v.jsx)(d.Link,{href:`#`,icon:(0,v.jsx)(s,{}),children:`Rapportages`},`Rapportages`),(0,v.jsx)(d.Link,{href:`#`,icon:(0,v.jsx)(o,{}),children:`Analyses`},`Analyses`),(0,v.jsx)(d.Link,{href:`#`,icon:(0,v.jsx)(l,{}),children:`Instellingen`},`Instellingen`)],w=(e,t)=>{let[,n]=b(),r=!!t.parameters.fixedInWideWindow;return(0,_.useEffect)(()=>{if(r||typeof window>`u`||!window.matchMedia)return;let e=window.matchMedia(`(min-width: ${p.wide})`);n({inWideWindow:e.matches});let t=e=>n({inWideWindow:e.matches});return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[r,n]),(0,v.jsx)(e,{})},T={title:`Components/Navigation/Menu`,component:d,args:{inWideWindow:!1},argTypes:{inWideWindow:h(`This prop gets automatically updated in Storybook. It is \`true\` when the viewport is wider than ${p.wide}.`)},decorators:[w],parameters:{themes:{options:[`Compact`,`Compact Lo-fi`]}},subcomponents:{"Menu.Item":d.Item,"Menu.Link":d.Link}},E={args:{children:x}},D={args:{children:x,expandable:!0}},O={args:{children:x,defaultExpanded:!0,expandable:!0}},k={args:{children:S,defaultExpanded:!0,expandable:!0}},A={args:{children:C,collapsible:!0,defaultExpanded:!0,expandable:!0}},j=[`Default`,`Expandable`,`Expanded`,`WithSubmenu`,`CollapsibleSubmenu`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: defaultMenuChildren
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: defaultMenuChildren,
    expandable: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: defaultMenuChildren,
    defaultExpanded: true,
    expandable: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: menuWithSubmenuChildren,
    defaultExpanded: true,
    expandable: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    children: collapsibleMenuChildren,
    collapsible: true,
    defaultExpanded: true,
    expandable: true
  }
}`,...A.parameters?.docs?.source}}}})))()}export{k as a,g as i,D as n,M as o,O as r,T as s,A as t};