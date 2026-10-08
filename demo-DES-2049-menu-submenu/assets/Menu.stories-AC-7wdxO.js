import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{F as i,K as a,n as o,p as s,y as c,z as l}from"./index.esm-AVY4e8gu.js";import{n as u,t as d}from"./Menu-D8QKkX_Q.js";import{n as f,t as p}from"./useViewportHasMinWidth-p3rGIlmn.js";import{f as m,o as h}from"./argTypes-Diu0Wtb4.js";var g=t({Default:()=>T,Expandable:()=>E,Expanded:()=>D,WithSubmenu:()=>O,__namedExportsOrder:()=>k,default:()=>w}),_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{a(),u(),f(),_=n(),m(),v=r(),y=n(),{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,x=[{href:`#`,icon:(0,v.jsx)(i,{}),text:`Dashboard`},{href:`#`,icon:(0,v.jsx)(c,{}),text:`Projecten`},{href:`#`,icon:(0,v.jsx)(s,{}),text:`Rapportages`},{href:`#`,icon:(0,v.jsx)(o,{}),text:`Analyses`},{href:`#`,icon:(0,v.jsx)(l,{}),text:`Instellingen`}].map(({text:e,...t})=>(0,y.createElement)(d.Link,{...t,key:e},e)),S=[(0,v.jsx)(d.Link,{href:`#`,icon:(0,v.jsx)(i,{}),children:`Dashboard`},`Dashboard`),(0,v.jsxs)(d.Item,{href:`#`,icon:(0,v.jsx)(c,{}),label:`Projecten`,children:[(0,v.jsx)(d.Link,{href:`#`,children:`Overzicht`},`Overzicht`),(0,v.jsx)(d.Link,{href:`#`,children:`Planning`},`Planning`),(0,v.jsx)(d.Link,{href:`#`,children:`Team`},`Team`)]},`Projecten`),(0,v.jsx)(d.Link,{href:`#`,icon:(0,v.jsx)(s,{}),children:`Rapportages`},`Rapportages`),(0,v.jsx)(d.Link,{href:`#`,icon:(0,v.jsx)(o,{}),children:`Analyses`},`Analyses`),(0,v.jsx)(d.Link,{href:`#`,icon:(0,v.jsx)(l,{}),children:`Instellingen`},`Instellingen`)],C=(e,t)=>{let[,n]=b(),r=!!t.parameters.fixedInWideWindow;return(0,_.useEffect)(()=>{if(r||typeof window>`u`||!window.matchMedia)return;let e=window.matchMedia(`(min-width: ${p.wide})`);n({inWideWindow:e.matches});let t=e=>n({inWideWindow:e.matches});return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[r,n]),(0,v.jsx)(e,{})},w={title:`Components/Navigation/Menu`,component:d,args:{inWideWindow:!1},argTypes:{inWideWindow:h(`This prop gets automatically updated in Storybook. It is \`true\` when the viewport is wider than ${p.wide}.`)},decorators:[C],parameters:{themes:{options:[`Compact`,`Compact Lo-fi`]}},subcomponents:{"Menu.Item":d.Item,"Menu.Link":d.Link}},T={args:{children:x}},E={args:{children:x,expandable:!0}},D={args:{children:x,defaultExpanded:!0,expandable:!0}},O={args:{children:S,defaultExpanded:!0,expandable:!0}},k=[`Default`,`Expandable`,`Expanded`,`WithSubmenu`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: defaultMenuChildren
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: defaultMenuChildren,
    expandable: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: defaultMenuChildren,
    defaultExpanded: true,
    expandable: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: menuWithSubmenuChildren,
    defaultExpanded: true,
    expandable: true
  }
}`,...O.parameters?.docs?.source}}}})))()}export{A as a,O as i,D as n,w as o,g as r,E as t};