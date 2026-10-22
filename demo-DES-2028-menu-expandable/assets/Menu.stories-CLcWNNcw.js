import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{B as i,I as a,b as o,m as s,n as c,q as l}from"./index.esm-BwInuVoJ.js";import{n as u,t as d}from"./Menu-DM40_ZkX.js";import{n as f,r as p,t as m}from"./useViewportHasMinWidth-p3rGIlmn.js";import{f as h,o as g}from"./argTypes-Diu0Wtb4.js";var _=t({AlwaysWide:()=>D,Default:()=>T,Expandable:()=>E,__namedExportsOrder:()=>O,default:()=>w}),v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{l(),u(),f(),v=n(),h(),y=r(),b=n(),{useArgs:x}=__STORYBOOK_MODULE_PREVIEW_API__,S=[{href:`#`,icon:(0,y.jsx)(a,{}),text:`Dashboard`},{href:`#`,icon:(0,y.jsx)(o,{}),text:`Projecten`},{href:`#`,icon:(0,y.jsx)(s,{}),text:`Rapportages`},{href:`#`,icon:(0,y.jsx)(c,{}),text:`Analyses`},{href:`#`,icon:(0,y.jsx)(i,{}),text:`Instellingen`}],C=(e,t)=>{let[,n]=x(),r=!!t.parameters.fixedInWideWindow,i=p(`wide`),a=r?t.args.inWideWindow:i;return(0,v.useEffect)(()=>{r||n({inWideWindow:i})},[i,r,n]),(0,y.jsx)(e,{args:{...t.args,inWideWindow:a}})},w={title:`Components/Navigation/Menu`,component:d,args:{inWideWindow:!1},argTypes:{inWideWindow:g(`This prop gets automatically updated in Storybook. It is \`true\` when the viewport is wider than ${m.wide}.`)},decorators:[C],parameters:{themes:{options:[`Compact`,`Compact Lo-fi`]}},subcomponents:{"Menu.Link":d.Link}},T={args:{children:S.map(({text:e,...t})=>(0,b.createElement)(d.Link,{...t,key:e},e))}},E={args:{children:T.args?.children,expandable:!0}},D={args:{children:T.args?.children,expanded:!0}},O=[`Default`,`Expandable`,`AlwaysWide`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: menuItems.map(({
      text,
      ...restProps
    }) => <Menu.Link {...restProps} key={text}>
        {text}
      </Menu.Link>)
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: Default.args?.children,
    expandable: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: Default.args?.children,
    expanded: true
  }
}`,...D.parameters?.docs?.source}}}})))()}export{w as a,k as i,E as n,_ as r,D as t};