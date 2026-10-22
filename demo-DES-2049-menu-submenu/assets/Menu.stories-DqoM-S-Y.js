import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{B as i,I as a,b as o,m as s,n as c,q as l}from"./index.esm-BwInuVoJ.js";import{n as u,t as d}from"./Menu-Bpef4p1e.js";import{n as f,r as p,t as m}from"./useViewportHasMinWidth-p3rGIlmn.js";import{f as h,o as g}from"./argTypes-Diu0Wtb4.js";var _=t({AlwaysWide:()=>k,Default:()=>E,Expandable:()=>D,WithSubmenu:()=>O,__namedExportsOrder:()=>A,default:()=>T}),v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{l(),u(),f(),v=n(),h(),y=r(),b=n(),{useArgs:x}=__STORYBOOK_MODULE_PREVIEW_API__,S=[{href:`#`,icon:(0,y.jsx)(a,{}),text:`Dashboard`},{href:`#`,icon:(0,y.jsx)(o,{}),text:`Projecten`},{href:`#`,icon:(0,y.jsx)(s,{}),text:`Rapportages`},{href:`#`,icon:(0,y.jsx)(c,{}),text:`Analyses`},{href:`#`,icon:(0,y.jsx)(i,{}),text:`Instellingen`}].map(({text:e,...t})=>(0,b.createElement)(d.Link,{...t,key:e},e)),C=[(0,y.jsx)(d.Link,{href:`#`,icon:(0,y.jsx)(a,{}),children:`Dashboard`},`Dashboard`),(0,y.jsxs)(d.Item,{href:`#`,icon:(0,y.jsx)(o,{}),label:`Projecten`,children:[(0,y.jsx)(d.Link,{href:`#`,children:`Overzicht`},`Overzicht`),(0,y.jsx)(d.Link,{href:`#`,children:`Planning`},`Planning`),(0,y.jsx)(d.Link,{href:`#`,children:`Team`},`Team`)]},`Projecten`),(0,y.jsx)(d.Link,{href:`#`,icon:(0,y.jsx)(s,{}),children:`Rapportages`},`Rapportages`),(0,y.jsx)(d.Link,{href:`#`,icon:(0,y.jsx)(c,{}),children:`Analyses`},`Analyses`),(0,y.jsx)(d.Link,{href:`#`,icon:(0,y.jsx)(i,{}),children:`Instellingen`},`Instellingen`)],w=(e,t)=>{let[,n]=x(),r=!!t.parameters.fixedInWideWindow,i=p(`wide`),a=r?t.args.inWideWindow:i;return(0,v.useEffect)(()=>{r||n({inWideWindow:i})},[i,r,n]),(0,y.jsx)(e,{args:{...t.args,inWideWindow:a}})},T={title:`Components/Navigation/Menu`,component:d,args:{inWideWindow:!1},argTypes:{inWideWindow:g(`This prop gets automatically updated in Storybook. It is \`true\` when the viewport is wider than ${m.wide}.`)},decorators:[w],parameters:{themes:{options:[`Compact`,`Compact Lo-fi`]}},subcomponents:{"Menu.Item":d.Item,"Menu.Link":d.Link}},E={args:{children:S}},D={args:{children:S,expandable:!0}},O={args:{children:C,defaultExpanded:!0,expandable:!0}},k={args:{children:E.args?.children,expanded:!0}},A=[`Default`,`Expandable`,`WithSubmenu`,`AlwaysWide`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
    children: menuWithSubmenuChildren,
    defaultExpanded: true,
    expandable: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: Default.args?.children,
    expanded: true
  }
}`,...k.parameters?.docs?.source}}}})))()}export{j as a,O as i,D as n,T as o,_ as r,k as t};