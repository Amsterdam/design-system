import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-pByjoP3I.js";import{t as r}from"./jsx-runtime-BG4KOiPz.js";import{B as i,I as a,b as o,m as s,n as c,q as l}from"./index.esm-BKXztnhd.js";import{n as u,t as d}from"./Menu-D9R58uH2.js";import{n as f,t as p}from"./useViewportHasMinWidth-DvMDApCQ.js";import{f as m,o as h}from"./argTypes-BlEHYq0r.js";var g=t({Default:()=>C,__namedExportsOrder:()=>w,default:()=>S}),_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{l(),u(),f(),_=n(),m(),v=r(),{useArgs:y}=__STORYBOOK_MODULE_PREVIEW_API__,b=[{href:`#dashboard`,icon:(0,v.jsx)(a,{}),text:`Dashboard`},{href:`#projecten`,icon:(0,v.jsx)(o,{}),text:`Projecten`},{href:`#rapportage`,icon:(0,v.jsx)(s,{}),text:`Rapportages`},{href:`#analyses`,icon:(0,v.jsx)(c,{}),text:`Analyses`},{href:`#instellingen`,icon:(0,v.jsx)(i,{}),text:`Instellingen`}],x=e=>{let[,t]=y();return(0,_.useEffect)(()=>{if(typeof window>`u`||!window.matchMedia)return;let e=window.matchMedia(`(min-width: ${p.wide})`);t({inWideWindow:e.matches});let n=e=>t({inWideWindow:e.matches});return e.addEventListener(`change`,n),()=>e.removeEventListener(`change`,n)},[t]),(0,v.jsx)(e,{})},S={title:`Components/Navigation/Menu`,component:d,args:{inWideWindow:!1},argTypes:{inWideWindow:h(`This prop gets automatically updated in Storybook. It is \`true\` when the viewport is wider than ${p.wide}.`)},decorators:[x],parameters:{themes:{options:[`Compact`,`Compact Lo-fi`]}},subcomponents:{"Menu.Link":d.Link}},C={render:e=>{let[t,n]=(0,_.useState)(b[0].text);return(0,v.jsx)(d,{...e,children:b.map(({text:e,...r})=>(0,_.createElement)(d.Link,{...r,"aria-current":t===e?`page`:void 0,key:e,onClick:t=>{t.preventDefault(),n(e)}},e))})}},w=[`Default`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
} satisfies Story`,...C.parameters?.docs?.source}}}})))()}export{S as i,g as n,T as r,C as t};