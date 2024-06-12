import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{a as x}from"./exampleContent-CRK3_7Hv.js";import{c as f}from"./clsx-B-dksMZM.js";import{r as t}from"./index-uCp2LrAq.js";import{u as G}from"./useKeyboardFocus-CRUFsA_C.js";import{H as u}from"./Heading-CGpdaMNv.js";import{P as T}from"./Paragraph-DpVlyIEJ.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const V={activeTab:0,tabsId:"",updateTab:()=>{}},_=t.createContext(V),w=t.forwardRef(({children:a,className:n,tab:r=0,...o},c)=>{const{activeTab:i,updateTab:l,tabsId:m}=t.useContext(_);return e.jsx("button",{...o,role:"tab",id:`${m}-tab-${r}`,"aria-controls":`${m}-panel-${r}`,"aria-selected":i===r,tabIndex:i===r?0:-1,ref:c,onClick:()=>{t.startTransition(()=>{l(r)})},className:f("ams-tabs__button",n),children:a})});w.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{tab:{defaultValue:{value:"0"},description:"An identifier.",name:"tab",required:!1,type:{name:"number"}}}}}catch{}const A=t.forwardRef(({children:a,className:n,...r},o)=>e.jsx("div",{...r,role:"tablist",ref:o,className:f("ams-tabs__list",n),children:a}));A.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const R=t.forwardRef(({tab:a,children:n,className:r,...o},c)=>{const{activeTab:i,tabsId:l}=t.useContext(_);return a!==i?null:e.jsx("div",{...o,role:"tabpanel","aria-labelledby":`${l}-tab-${a}`,id:`${l}-panel-${a}`,tabIndex:0,ref:c,className:f("ams-tabs__panel",r),children:n})});R.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{tab:{defaultValue:null,description:"The identifier of the corresponding Tab.",name:"tab",required:!0,type:{name:"number"}}}}}catch{}const S=t.forwardRef(({activeTab:a,children:n,className:r,...o},c)=>{const i=t.useId(),[l,m]=t.useState(a??0),h=t.useRef(null),C=O=>{m(O)};t.useImperativeHandle(c,()=>h.current);const{keyDown:D}=G(h,{rotating:!0,horizontally:!0});return e.jsx(_.Provider,{value:{activeTab:l,updateTab:C,tabsId:i},children:e.jsx("div",{...o,role:"tabs",ref:h,onKeyDown:D,className:f("ams-tabs",r),children:n})})});S.displayName="Tabs";const s=Object.assign(S,{Button:w,List:A,Panel:R});try{s.displayName="Tabs",s.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The initial active tab.",name:"activeTab",required:!1,type:{name:"number"}}}}}catch{}const W=({children:a})=>{console.log("[ARTIFICIALLY SLOW] Adding a 1000ms delay");let n=performance.now();for(;performance.now()-n<1e3;);return a},q={title:"Components/Containers/Tabs",component:s};s.Button;const $=[e.jsxs(s.List,{children:[e.jsx(s.Button,{tab:0,children:"Gegevens"}),e.jsx(s.Button,{tab:1,children:"Aanslagen"}),e.jsx(s.Button,{tab:2,children:"Documenten"}),e.jsx(s.Button,{tab:3,children:"Acties"})]},0),e.jsx(s.Panel,{tab:0,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(u,{level:3,children:"Gegevens"}),e.jsx(T,{children:x()})]})},1),e.jsx(s.Panel,{tab:1,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(u,{level:3,children:"Aanslagen"}),e.jsx(T,{children:x()})]})},2),e.jsx(s.Panel,{tab:2,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(u,{level:3,children:"Documenten"}),e.jsx(T,{children:"(This tab panel simulates a load time of 500 milliseconds.)"}),e.jsx(W,{})]})},3),e.jsx(s.Panel,{tab:3,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(u,{level:3,children:"Acties"}),e.jsx(T,{children:x()})]})},4)],d={args:{children:$}},b={args:{activeTab:3,children:$}},p={args:{children:"Gegevens",tab:0,disabled:!1},argTypes:{children:{table:{disable:!1}},tab:{control:{type:"number",min:0,max:9}}},render:({children:a,...n})=>e.jsx(s.Button,{...n,children:a})};var g,y,j;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: defaultTabs
  }
}`,...(j=(y=d.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var v,I,P;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    activeTab: 3,
    children: defaultTabs
  }
}`,...(P=(I=b.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var N,B,L;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Gegevens',
    tab: 0,
    disabled: false
  },
  argTypes: {
    children: {
      table: {
        disable: false
      }
    },
    tab: {
      control: {
        type: 'number',
        min: 0,
        max: 9
      }
    }
  },
  render: ({
    children,
    ...args
  }) => <Tabs.Button {...args}>{children}</Tabs.Button>
}`,...(L=(B=p.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const E=["Default","WithInitialTab","Tab"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Tab:p,WithInitialTab:b,__namedExportsOrder:E,default:q},Symbol.toStringTag,{value:"Module"}));export{J as T,b as W,p as a};
