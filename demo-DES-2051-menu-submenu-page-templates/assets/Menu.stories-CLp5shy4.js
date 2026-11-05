import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-pByjoP3I.js";import{t as r}from"./jsx-runtime-BG4KOiPz.js";import{B as i,I as a,b as o,m as s,n as c,q as l}from"./index.esm-DDvEoL08.js";import{n as u,t as d}from"./Menu-t-VcpG-U.js";import{n as f,r as p,t as m}from"./useViewportHasMinWidth-DvMDApCQ.js";import{f as h,o as g}from"./argTypes-BlEHYq0r.js";var _=t({AlwaysWide:()=>k,CollapsibleSubmenu:()=>A,Default:()=>E,Expandable:()=>D,WithSubmenu:()=>O,__namedExportsOrder:()=>j,default:()=>T}),v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{l(),u(),f(),v=n(),h(),y=r(),{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,x=[{href:`#`,icon:(0,y.jsx)(a,{}),text:`Dashboard`},{href:`#`,icon:(0,y.jsx)(o,{}),text:`Projecten`},{href:`#`,icon:(0,y.jsx)(s,{}),text:`Rapportages`},{href:`#`,icon:(0,y.jsx)(c,{}),text:`Analyses`},{href:`#`,icon:(0,y.jsx)(i,{}),text:`Instellingen`}].map(({text:e,...t})=>(0,v.createElement)(d.Link,{...t,key:e},e)),S=[(0,y.jsx)(d.Link,{href:`#`,icon:(0,y.jsx)(a,{}),children:`Dashboard`},`Dashboard`),(0,y.jsxs)(d.Item,{href:`#`,icon:(0,y.jsx)(o,{}),label:`Projecten`,children:[(0,y.jsx)(d.Link,{href:`#`,children:`Overzicht`},`Overzicht`),(0,y.jsx)(d.Link,{href:`#`,children:`Planning`},`Planning`),(0,y.jsx)(d.Link,{href:`#`,children:`Team`},`Team`)]},`Projecten`),(0,y.jsx)(d.Link,{href:`#`,icon:(0,y.jsx)(s,{}),children:`Rapportages`},`Rapportages`),(0,y.jsx)(d.Link,{href:`#`,icon:(0,y.jsx)(c,{}),children:`Analyses`},`Analyses`),(0,y.jsx)(d.Link,{href:`#`,icon:(0,y.jsx)(i,{}),children:`Instellingen`},`Instellingen`)],C=[(0,y.jsx)(d.Link,{href:`#`,icon:(0,y.jsx)(a,{}),children:`Dashboard`},`Dashboard`),(0,y.jsxs)(d.Item,{defaultExpanded:!0,href:`#`,icon:(0,y.jsx)(o,{}),label:`Projecten`,children:[(0,y.jsx)(d.Link,{"aria-current":`page`,href:`#`,children:`Overzicht`},`Overzicht`),(0,y.jsx)(d.Link,{href:`#`,children:`Planning`},`Planning`),(0,y.jsx)(d.Link,{href:`#`,children:`Team`},`Team`)]},`Projecten`),(0,y.jsx)(d.Link,{href:`#`,icon:(0,y.jsx)(s,{}),children:`Rapportages`},`Rapportages`),(0,y.jsx)(d.Link,{href:`#`,icon:(0,y.jsx)(c,{}),children:`Analyses`},`Analyses`),(0,y.jsx)(d.Link,{href:`#`,icon:(0,y.jsx)(i,{}),children:`Instellingen`},`Instellingen`)],w=(e,t)=>{let[,n]=b(),r=!!t.parameters.fixedInWideWindow,i=p(`wide`),a=r?t.args.inWideWindow:i;return(0,v.useEffect)(()=>{r||n({inWideWindow:i})},[i,r,n]),(0,y.jsx)(e,{args:{...t.args,inWideWindow:a}})},T={title:`Components/Navigation/Menu`,component:d,args:{inWideWindow:!1},argTypes:{inWideWindow:g(`This prop gets automatically updated in Storybook. It is \`true\` when the viewport is wider than ${m.wide}.`)},decorators:[w],parameters:{themes:{options:[`Compact`,`Compact Lo-fi`]}},subcomponents:{"Menu.Item":d.Item,"Menu.Link":d.Link}},E={args:{children:x}},D={args:{children:x,expandable:!0}},O={args:{children:S,defaultExpanded:!0,expandable:!0}},k={args:{children:E.args?.children,expanded:!0}},A={args:{children:C,collapsibleSubmenus:!0,defaultExpanded:!0,expandable:!0}},j=[`Default`,`Expandable`,`WithSubmenu`,`AlwaysWide`,`CollapsibleSubmenu`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    children: collapsibleMenuChildren,
    collapsibleSubmenus: true,
    defaultExpanded: true,
    expandable: true
  }
}`,...A.parameters?.docs?.source}}}})))()}export{O as a,_ as i,A as n,M as o,D as r,T as s,k as t};