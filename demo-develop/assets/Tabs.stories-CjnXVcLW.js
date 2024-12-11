import{j as t}from"./jsx-runtime-j_jdvEMj.js";import{H as B,P as S}from"./index.esm-D8PFa1_D.js";import{b as _}from"./exampleContent-hIIPvEhU.js";import{c as m}from"./clsx-B-dksMZM.js";import{r}from"./index-B-o1Wr-g.js";import{u as D}from"./useKeyboardFocus-CRUFsA_C.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const O={activeTab:0,tabsId:"",updateTab:()=>{}},x=r.createContext(O),L=r.forwardRef(({children:e,className:a,tab:s=0,...o},c)=>{const{activeTab:i,tabsId:n,updateTab:u}=r.useContext(x);return t.jsxs("button",{...o,"aria-controls":`${n}-panel-${s}`,"aria-selected":i===s,className:m("ams-tabs__button",a),id:`${n}-tab-${s}`,onClick:()=>{r.startTransition(()=>{u(s)})},ref:c,role:"tab",tabIndex:i===s?0:-1,children:[t.jsx("span",{"aria-hidden":"true",className:"ams-tabs__button-label-hidden",children:e}),t.jsx("span",{className:"ams-tabs__button-label",children:e})]})});L.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{tab:{defaultValue:{value:"0"},description:"An identifier.",name:"tab",required:!1,type:{name:"number"}}}}}catch{}const w=r.forwardRef(({children:e,className:a,...s},o)=>t.jsx("div",{...s,role:"tablist",ref:o,className:m("ams-tabs__list",a),children:e}));w.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const C=r.forwardRef(({tab:e,children:a,className:s,...o},c)=>{const{activeTab:i,tabsId:n}=r.useContext(x);return e!==i?null:t.jsx("div",{...o,role:"tabpanel","aria-labelledby":`${n}-tab-${e}`,id:`${n}-panel-${e}`,tabIndex:0,ref:c,className:m("ams-tabs__panel",s),children:a})});C.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{tab:{defaultValue:null,description:"The identifier of the corresponding Tab.",name:"tab",required:!0,type:{name:"number"}}}}}catch{}const $=r.forwardRef(({activeTab:e,children:a,className:s,...o},c)=>{const i=r.useId(),n=r.useRef(null),[u,p]=r.useState(0),f=r.useMemo(()=>Array.isArray(a)?a[0].props.children.map(T=>T):[],[a]);r.useEffect(()=>{typeof e=="number"&&Number.isInteger(e)&&(e<0?p(0):e>f.length-1?p(f.length-1):p(e))},[e,f]);const A=T=>{p(T)};r.useImperativeHandle(c,()=>n.current);const{keyDown:R}=D(n,{rotating:!0,horizontally:!0});return t.jsx(x.Provider,{value:{activeTab:u,updateTab:A,tabsId:i},children:t.jsx("div",{...o,role:"tabs",ref:n,onKeyDown:R,className:m("ams-tabs",s),children:a})})});$.displayName="Tabs";const l=Object.assign($,{Button:L,List:w,Panel:C});try{l.displayName="Tabs",l.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The number of the active tab. Corresponds to its `tab` value.",name:"activeTab",required:!1,type:{name:"number"}}}}}catch{}const y=1e3,E=({children:e})=>{console.log(`[ARTIFICIALLY SLOW] Adding a ${y}ms delay…`);let a=performance.now();for(;performance.now()-a<y;);return e},g=[{id:0,label:"Gegevens",body:_()},{id:1,label:"Aanslagen",body:_()},{id:2,label:"Documenten",body:t.jsxs(t.Fragment,{children:["(This tab panel simulates a load time of ",y," milliseconds.)",t.jsx(E,{})]})},{id:3,label:"Acties",body:_()}],V=[t.jsx(l.List,{children:g.map(({id:e,label:a})=>t.jsx(l.Button,{tab:e,children:a},a))},"tabsList"),g.map(({id:e,body:a,label:s})=>t.jsxs(l.Panel,{tab:e,children:[t.jsx(B,{className:"ams-mb--xs",level:3,children:s}),t.jsx(S,{children:a})]},s))],W={title:"Components/Containers/Tabs",component:l,args:{children:V},argTypes:{activeTab:{control:{type:"number",min:0,max:g.length-1}}}},d={},b={args:{activeTab:3}};var h,I,N;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(N=(I=d.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var j,v,P;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    activeTab: 3
  }
}`,...(P=(v=b.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};const q=["Default","WithInitialTab"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:d,WithInitialTab:b,__namedExportsOrder:q,default:W},Symbol.toStringTag,{value:"Module"}));export{G as T,b as W};