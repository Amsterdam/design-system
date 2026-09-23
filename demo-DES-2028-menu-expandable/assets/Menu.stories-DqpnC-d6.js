import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{F as i,K as a,n as o,p as s,v as c,z as l}from"./index.esm-Cf2AflXd.js";import{n as u,t as d}from"./Menu-JPEzLMZz.js";import{n as f,t as p}from"./useViewportHasMinWidth-p3rGIlmn.js";import{f as m,o as h}from"./argTypes-Diu0Wtb4.js";var g=t({Collapsible:()=>T,CollapsibleExpanded:()=>E,Default:()=>w,__namedExportsOrder:()=>D,default:()=>C}),_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{a(),u(),f(),_=n(),m(),v=r(),y=n(),{useArgs:b}=__STORYBOOK_MODULE_PREVIEW_API__,x=[{href:`#`,icon:(0,v.jsx)(i,{}),text:`Dashboard`},{href:`#`,icon:(0,v.jsx)(c,{}),text:`Projecten`},{href:`#`,icon:(0,v.jsx)(s,{}),text:`Rapportages`},{href:`#`,icon:(0,v.jsx)(o,{}),text:`Analyses`},{href:`#`,icon:(0,v.jsx)(l,{}),text:`Instellingen`}],S=(e,t)=>{let[,n]=b(),r=!!t.parameters.fixedInWideWindow;return(0,_.useEffect)(()=>{if(r||typeof window>`u`||!window.matchMedia)return;let e=window.matchMedia(`(min-width: ${p.wide})`);n({inWideWindow:e.matches});let t=e=>n({inWideWindow:e.matches});return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[r,n]),(0,v.jsx)(e,{})},C={title:`Components/Navigation/Menu`,component:d,args:{inWideWindow:!1},argTypes:{inWideWindow:h(`This prop gets automatically updated in Storybook. It is \`true\` when the viewport is wider than ${p.wide}.`)},decorators:[S],parameters:{themes:{options:[`Compact`,`Compact Lo-fi`]}},subcomponents:{"Menu.Link":d.Link}},w={args:{children:x.map(({text:e,...t})=>(0,y.createElement)(d.Link,{...t,key:e},e))}},T={args:{children:w.args?.children,collapsible:!0}},E={args:{children:w.args?.children,collapsible:!0,defaultExpanded:!0}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    collapsible: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: Default.args?.children,
    collapsible: true,
    defaultExpanded: true
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`Collapsible`,`CollapsibleExpanded`]})))()}export{C as a,O as i,E as n,g as r,T as t};