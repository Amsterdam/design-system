import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-pByjoP3I.js";import{t as r}from"./jsx-runtime-BG4KOiPz.js";import{B as i,I as a,b as o,m as s,n as c,q as l}from"./index.esm-DDvEoL08.js";import{n as u,t as d}from"./Menu-BBa7bW79.js";import{n as f,r as p,t as m}from"./useViewportHasMinWidth-DvMDApCQ.js";import{f as h,o as g}from"./argTypes-BlEHYq0r.js";var _=t({AlwaysWide:()=>E,Default:()=>w,Expandable:()=>T,__namedExportsOrder:()=>D,default:()=>C}),v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{l(),u(),f(),v=n(),h(),y=r(),{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,x=[{href:`#`,icon:(0,y.jsx)(a,{}),text:`Dashboard`},{href:`#`,icon:(0,y.jsx)(o,{}),text:`Projecten`},{href:`#`,icon:(0,y.jsx)(s,{}),text:`Rapportages`},{href:`#`,icon:(0,y.jsx)(c,{}),text:`Analyses`},{href:`#`,icon:(0,y.jsx)(i,{}),text:`Instellingen`}],S=(e,t)=>{let[,n]=b(),r=!!t.parameters.fixedInWideWindow,i=p(`wide`),a=r?t.args.inWideWindow:i;return(0,v.useEffect)(()=>{r||n({inWideWindow:i})},[i,r,n]),(0,y.jsx)(e,{args:{...t.args,inWideWindow:a}})},C={title:`Components/Navigation/Menu`,component:d,args:{inWideWindow:!1},argTypes:{inWideWindow:g(`This prop gets automatically updated in Storybook. It is \`true\` when the viewport is wider than ${m.wide}.`)},decorators:[S],parameters:{themes:{options:[`Compact`,`Compact Lo-fi`]}},subcomponents:{"Menu.Link":d.Link}},w={args:{children:x.map(({text:e,...t})=>(0,v.createElement)(d.Link,{...t,key:e},e))}},T={args:{children:w.args?.children,expandable:!0}},E={args:{children:w.args?.children,expanded:!0}},D=[`Default`,`Expandable`,`AlwaysWide`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: menuItems.map(({
      text,
      ...restProps
    }) => <Menu.Link {...restProps} key={text}>
        {text}
      </Menu.Link>)
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: Default.args?.children,
    expandable: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: Default.args?.children,
    expanded: true
  }
}`,...E.parameters?.docs?.source}}}})))()}export{C as a,O as i,T as n,_ as r,E as t};