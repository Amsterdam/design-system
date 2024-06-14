import{j as t}from"./jsx-runtime-X2b_N9AH.js";import{a as _}from"./exampleContent-CRK3_7Hv.js";import{c as m}from"./clsx-B-dksMZM.js";import{r as s}from"./index-uCp2LrAq.js";import{u as V}from"./useKeyboardFocus-CRUFsA_C.js";import{H as W}from"./Heading-CGpdaMNv.js";import{P as q}from"./Paragraph-DpVlyIEJ.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const F={activeTab:0,tabsId:"",updateTab:()=>{}},h=s.createContext(F),C=s.forwardRef(({children:e,className:a,tab:r=0,...l},d)=>{const{activeTab:i,tabsId:n,updateTab:T}=s.useContext(h);return t.jsx("button",{...l,"aria-controls":`${n}-panel-${r}`,"aria-selected":i===r,className:m("ams-tabs__button",a),id:`${n}-tab-${r}`,onClick:()=>{s.startTransition(()=>{T(r)})},ref:d,role:"tab",tabIndex:i===r?0:-1,children:e})});C.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{tab:{defaultValue:{value:"0"},description:"An identifier.",name:"tab",required:!1,type:{name:"number"}}}}}catch{}const R=s.forwardRef(({children:e,className:a,...r},l)=>t.jsx("div",{...r,role:"tablist",ref:l,className:m("ams-tabs__list",a),children:e}));R.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const S=s.forwardRef(({tab:e,children:a,className:r,...l},d)=>{const{activeTab:i,tabsId:n}=s.useContext(h);return e!==i?null:t.jsx("div",{...l,role:"tabpanel","aria-labelledby":`${n}-tab-${e}`,id:`${n}-panel-${e}`,tabIndex:0,ref:d,className:m("ams-tabs__panel",r),children:a})});S.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{tab:{defaultValue:null,description:"The identifier of the corresponding Tab.",name:"tab",required:!0,type:{name:"number"}}}}}catch{}const $=s.forwardRef(({activeTab:e,children:a,className:r,...l},d)=>{const i=s.useId(),n=s.useRef(null),[T,u]=s.useState(0),f=s.useMemo(()=>Array.isArray(a)?a[0].props.children.map(y=>y):[],[a]);s.useEffect(()=>{typeof e=="number"&&Number.isInteger(e)&&(e<0?u(0):e>f.length-1?u(f.length-1):u(e))},[e,f]);const O=y=>{u(y)};s.useImperativeHandle(d,()=>n.current);const{keyDown:E}=V(n,{rotating:!0,horizontally:!0});return t.jsx(h.Provider,{value:{activeTab:T,updateTab:O,tabsId:i},children:t.jsx("div",{...l,role:"tabs",ref:n,onKeyDown:E,className:m("ams-tabs",r),children:a})})});$.displayName="Tabs";const o=Object.assign($,{Button:C,List:R,Panel:S});try{o.displayName="Tabs",o.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The initially active tab.",name:"activeTab",required:!1,type:{name:"number"}}}}}catch{}const D=1e3,G=({children:e})=>{console.log("[ARTIFICIALLY SLOW] Adding a 1000ms delay");let a=performance.now();for(;performance.now()-a<D;);return e},g=[{label:"Gegevens",body:_()},{label:"Aanslagen",body:_()},{label:"Documenten",body:t.jsxs(t.Fragment,{children:["(This tab panel simulates a load time of ",D," milliseconds.)",t.jsx(G,{})]})},{label:"Acties",body:_()}],x=[t.jsx(o.List,{children:g.map((e,a)=>t.jsx(o.Button,{tab:a,children:e.label},e.label))},"tabsList"),...g.map((e,a)=>t.jsx(o.Panel,{tab:a,children:t.jsxs("div",{style:{paddingTop:"2rem"},children:[t.jsx(W,{level:3,children:e.label}),t.jsx(q,{children:e.body})]})},e.label))],H={title:"Components/Containers/Tabs",component:o,argTypes:{children:x,activeTab:{control:{type:"number",min:0,max:g.length-1}}}};o.Button;const c={args:{children:x}},b={args:{activeTab:3,children:x}},p={args:{children:"Gegevens",disabled:!1,tab:0},argTypes:{children:{table:{disable:!1}},disabled:{table:{disable:!0}},tab:{control:{type:"number",min:0,max:3}}},render:({children:e,...a})=>t.jsx(o.Button,{...a,children:e})};var j,v,I;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: defaultTabs
  }
}`,...(I=(v=c.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var N,P,B;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    activeTab: 3,
    children: defaultTabs
  }
}`,...(B=(P=b.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var L,w,A;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(A=(w=p.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const k=["Default","WithInitialTab","TabButton"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:c,TabButton:p,WithInitialTab:b,__namedExportsOrder:k,default:H},Symbol.toStringTag,{value:"Module"}));export{X as T,b as W,p as a};
