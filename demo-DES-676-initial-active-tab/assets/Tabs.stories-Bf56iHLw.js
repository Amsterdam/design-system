import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{a as x}from"./exampleContent-CRK3_7Hv.js";import{c as T}from"./clsx-B-dksMZM.js";import{r as s}from"./index-uCp2LrAq.js";import{u as V}from"./useKeyboardFocus-CRUFsA_C.js";import{H as u}from"./Heading-CGpdaMNv.js";import{P as m}from"./Paragraph-DpVlyIEJ.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const W={activeTab:0,tabsId:"",updateTab:()=>{}},_=s.createContext(W),L=s.forwardRef(({children:a,className:n,tab:r=0,...o},c)=>{const{activeTab:i,tabsId:l,updateTab:f}=s.useContext(_);return e.jsx("button",{...o,"aria-controls":`${l}-panel-${r}`,"aria-selected":i===r,className:T("ams-tabs__button",n),id:`${l}-tab-${r}`,onClick:()=>{s.startTransition(()=>{f(r)})},ref:c,role:"tab",tabIndex:i===r?0:-1,children:a})});L.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{tab:{defaultValue:{value:"0"},description:"An identifier.",name:"tab",required:!1,type:{name:"number"}}}}}catch{}const A=s.forwardRef(({children:a,className:n,...r},o)=>e.jsx("div",{...r,role:"tablist",ref:o,className:T("ams-tabs__list",n),children:a}));A.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const R=s.forwardRef(({tab:a,children:n,className:r,...o},c)=>{const{activeTab:i,tabsId:l}=s.useContext(_);return a!==i?null:e.jsx("div",{...o,role:"tabpanel","aria-labelledby":`${l}-tab-${a}`,id:`${l}-panel-${a}`,tabIndex:0,ref:c,className:T("ams-tabs__panel",r),children:n})});R.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{tab:{defaultValue:null,description:"The identifier of the corresponding Tab.",name:"tab",required:!0,type:{name:"number"}}}}}catch{}const S=s.forwardRef(({activeTab:a,children:n,className:r,...o},c)=>{const i=s.useId(),[l,f]=s.useState(a??0),h=s.useRef(null),D=G=>{f(G)};s.useImperativeHandle(c,()=>h.current);const{keyDown:O}=V(h,{rotating:!0,horizontally:!0});return e.jsx(_.Provider,{value:{activeTab:l,updateTab:D,tabsId:i},children:e.jsx("div",{...o,role:"tabs",ref:h,onKeyDown:O,className:T("ams-tabs",r),children:n})})});S.displayName="Tabs";const t=Object.assign(S,{Button:L,List:A,Panel:R});try{t.displayName="Tabs",t.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The initially active tab.",name:"activeTab",required:!1,type:{name:"number"}}}}}catch{}const $=1e3,q=({children:a})=>{console.log("[ARTIFICIALLY SLOW] Adding a 1000ms delay");let n=performance.now();for(;performance.now()-n<$;);return a},E={title:"Components/Containers/Tabs",component:t,argTypes:{activeTab:{control:{type:"number",min:0,max:3}}}};t.Button;const C=[e.jsxs(t.List,{children:[e.jsx(t.Button,{tab:0,children:"Gegevens"}),e.jsx(t.Button,{tab:1,children:"Aanslagen"}),e.jsx(t.Button,{tab:2,children:"Documenten"}),e.jsx(t.Button,{tab:3,children:"Acties"})]},0),e.jsx(t.Panel,{tab:0,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(u,{level:3,children:"Gegevens"}),e.jsx(m,{children:x()})]})},1),e.jsx(t.Panel,{tab:1,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(u,{level:3,children:"Aanslagen"}),e.jsx(m,{children:x()})]})},2),e.jsx(t.Panel,{tab:2,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(u,{level:3,children:"Documenten"}),e.jsxs(m,{children:["(This tab panel simulates a load time of ",$," milliseconds.)"]}),e.jsx(q,{})]})},3),e.jsx(t.Panel,{tab:3,children:e.jsxs("div",{style:{paddingTop:"2rem"},children:[e.jsx(u,{level:3,children:"Acties"}),e.jsx(m,{children:x()})]})},4)],d={args:{children:C}},b={args:{activeTab:3,children:C}},p={args:{children:"Gegevens",disabled:!1,tab:0},argTypes:{children:{table:{disable:!1}},disabled:{table:{disable:!0}},tab:{control:{type:"number",min:0,max:3}}},render:({children:a,...n})=>e.jsx(t.Button,{...n,children:a})};var y,g,j;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: defaultTabs
  }
}`,...(j=(g=d.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var v,P,B;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    activeTab: 3,
    children: defaultTabs
  }
}`,...(B=(P=b.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var I,N,w;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(N=p.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const H=["Default","WithInitialTab","TabButton"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:d,TabButton:p,WithInitialTab:b,__namedExportsOrder:H,default:E},Symbol.toStringTag,{value:"Module"}));export{Q as T,b as W,p as a};
