import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-pByjoP3I.js";import{t as r}from"./jsx-runtime-BG4KOiPz.js";import{B as i,I as a,b as o,m as s,n as c,q as l}from"./index.esm-BKXztnhd.js";import{b as u,tt as d}from"./index.esm-3mjjFAGv.js";import{n as f,t as p}from"./Menu-Dn2pTP1R.js";import{n as m,t as h}from"./useViewportHasMinWidth-DvMDApCQ.js";import{f as g,o as _}from"./argTypes-BlEHYq0r.js";var v=t({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{d(),l(),f(),m(),y=n(),g(),b=r(),{useArgs:x}=__STORYBOOK_MODULE_PREVIEW_API__,S=[{href:`#dashboard`,icon:(0,b.jsx)(a,{}),text:`Dashboard`},{href:`#projecten`,icon:(0,b.jsx)(o,{}),text:`Projecten`},{href:`#rapportage`,icon:(0,b.jsx)(s,{}),text:`Rapportages`},{href:`#analyses`,icon:(0,b.jsx)(c,{}),text:`Analyses`},{href:`#instellingen`,icon:(0,b.jsx)(i,{}),text:`Instellingen`}],C=e=>{let[,t]=x();return(0,y.useEffect)(()=>{if(typeof window>`u`||!window.matchMedia)return;let e=window.matchMedia(`(min-width: ${h.wide})`);t({inWideWindow:e.matches});let n=e=>t({inWideWindow:e.matches});return e.addEventListener(`change`,n),()=>e.removeEventListener(`change`,n)},[t]),(0,b.jsx)(u,{children:(0,b.jsx)(u.Cell,{span:`all`,children:(0,b.jsx)(e,{})})})},w={title:`Components/Navigation/Menu`,component:p,args:{inWideWindow:!1},argTypes:{inWideWindow:_(`This prop gets automatically updated in Storybook. It is \`true\` when the viewport is wider than ${h.wide}.`)},decorators:[C],parameters:{themes:{options:[`Compact`,`Compact Lo-fi`]}},subcomponents:{"Menu.Link":p.Link}},T={render:e=>{let[t,n]=(0,y.useState)(S[0].text);return(0,b.jsx)(p,{...e,children:S.map(({text:e,...r})=>(0,y.createElement)(p.Link,{...r,"aria-current":t===e?`page`:void 0,key:e,onClick:t=>{t.preventDefault(),n(e)}},e))})}},E=[`Default`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [current, setCurrent] = useState(menuItems[0].text);
    return <Menu {...args}>
        {menuItems.map(({
        text,
        ...restProps
      }) => <Menu.Link {...restProps} aria-current={current === text ? 'page' : undefined} key={text} onClick={event => {
        event.preventDefault();
        setCurrent(text);
      }}>
            {text}
          </Menu.Link>)}
      </Menu>;
  }
} satisfies Story`,...T.parameters?.docs?.source}}}})))()}export{w as i,v as n,D as r,T as t};