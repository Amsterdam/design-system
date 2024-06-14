import{j as a}from"./jsx-runtime-X2b_N9AH.js";import{a as W}from"./exampleContent-CRK3_7Hv.js";import{c as m}from"./clsx-B-dksMZM.js";import{r as s}from"./index-uCp2LrAq.js";import{u as q}from"./useKeyboardFocus-CRUFsA_C.js";import{P as y}from"./Paragraph-DpVlyIEJ.js";import{H as E}from"./Heading-CGpdaMNv.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const F={activeTab:0,tabsId:"",updateTab:()=>{}},_=s.createContext(F),$=s.forwardRef(({children:e,className:t,tab:n=0,...o},d)=>{const{activeTab:i,tabsId:l,updateTab:u}=s.useContext(_);return a.jsx("button",{...o,"aria-controls":`${l}-panel-${n}`,"aria-selected":i===n,className:m("ams-tabs__button",t),id:`${l}-tab-${n}`,onClick:()=>{s.startTransition(()=>{u(n)})},ref:d,role:"tab",tabIndex:i===n?0:-1,children:e})});$.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{tab:{defaultValue:{value:"0"},description:"An identifier.",name:"tab",required:!1,type:{name:"number"}}}}}catch{}const C=s.forwardRef(({children:e,className:t,...n},o)=>a.jsx("div",{...n,role:"tablist",ref:o,className:m("ams-tabs__list",t),children:e}));C.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const R=s.forwardRef(({tab:e,children:t,className:n,...o},d)=>{const{activeTab:i,tabsId:l}=s.useContext(_);return e!==i?null:a.jsx("div",{...o,role:"tabpanel","aria-labelledby":`${l}-tab-${e}`,id:`${l}-panel-${e}`,tabIndex:0,ref:d,className:m("ams-tabs__panel",n),children:t})});R.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{tab:{defaultValue:null,description:"The identifier of the corresponding Tab.",name:"tab",required:!0,type:{name:"number"}}}}}catch{}const S=s.forwardRef(({activeTab:e,children:t,className:n,...o},d)=>{const i=s.useId(),[l,u]=s.useState(e??0),T=s.useRef(null),D=V=>{u(V)};s.useImperativeHandle(d,()=>T.current);const{keyDown:O}=q(T,{rotating:!0,horizontally:!0});return a.jsx(_.Provider,{value:{activeTab:l,updateTab:D,tabsId:i},children:a.jsx("div",{...o,role:"tabs",ref:T,onKeyDown:O,className:m("ams-tabs",n),children:t})})});S.displayName="Tabs";const r=Object.assign(S,{Button:$,List:C,Panel:R});try{r.displayName="Tabs",r.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The initially active tab.",name:"activeTab",required:!1,type:{name:"number"}}}}}catch{}const A=1e3,G=({children:e})=>{console.log("[ARTIFICIALLY SLOW] Adding a 1000ms delay");let t=performance.now();for(;performance.now()-t<A;);return e},f=a.jsx(y,{children:W()}),h=[{label:"Gegevens",body:f},{label:"Aanslagen",body:f},{label:"Documenten",body:a.jsxs(a.Fragment,{children:[a.jsxs(y,{children:["(This tab panel simulates a load time of ",A," milliseconds.)"]}),a.jsx(G,{})]})},{label:"Acties",body:f}],g=[a.jsx(r.List,{children:h.map((e,t)=>a.jsx(r.Button,{tab:t,children:e.label},e.label))},"tabsList"),...h.map((e,t)=>a.jsx(r.Panel,{tab:t,children:a.jsxs("div",{style:{paddingTop:"2rem"},children:[a.jsx(E,{level:3,children:e.label}),a.jsx(y,{children:e.body})]})},e.label))],H={title:"Components/Containers/Tabs",component:r,argTypes:{children:g,activeTab:{control:{type:"number",min:0,max:3}}}};r.Button;const c={args:{children:g}},b={args:{activeTab:3,children:g}},p={args:{children:"Gegevens",disabled:!1,tab:0},argTypes:{children:{table:{disable:!1}},disabled:{table:{disable:!0}},tab:{control:{type:"number",min:0,max:3}}},render:({children:e,...t})=>a.jsx(r.Button,{...t,children:e})};var x,v,j;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: defaultTabs
  }
}`,...(j=(v=c.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var I,N,P;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    activeTab: 3,
    children: defaultTabs
  }
}`,...(P=(N=b.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var B,L,w;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Gegevens',
    disabled: false,
    tab: 0
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    disabled: {
      table: {
        disable: true
      }
    },
    tab: {
      control: {
        type: 'number',
        min: 0,
        max: 3
      }
    }
  },
  render: ({
    children,
    ...args
  }) => <Tabs.Button {...args}>{children}</Tabs.Button>
}`,...(w=(L=p.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};const k=["Default","WithInitialTab","TabButton"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:c,TabButton:p,WithInitialTab:b,__namedExportsOrder:k,default:H},Symbol.toStringTag,{value:"Module"}));export{X as T,b as W,p as a};
