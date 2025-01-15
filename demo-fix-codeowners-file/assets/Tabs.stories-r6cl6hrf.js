import{j as t}from"./jsx-runtime-z8MfsBtr.js";import{H as B,P as S}from"./index.esm-DSD1WKm8.js";import{b as T}from"./exampleContent-CpGgN1Hc.js";import{c as m}from"./clsx-B-dksMZM.js";import{r}from"./index-D7uoVdV3.js";import{u as D}from"./useKeyboardFocus-CRUFsA_C.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const O={activeTab:0,tabsId:"",updateTab:()=>{}},g=r.createContext(O),P=r.forwardRef(({children:e,className:a,tab:s=0,...o},c)=>{const{activeTab:i,tabsId:n,updateTab:u}=r.useContext(g);return t.jsxs("button",{...o,"aria-controls":`${n}-panel-${s}`,"aria-selected":i===s,className:m("ams-tabs__button",a),id:`${n}-tab-${s}`,onClick:()=>{r.startTransition(()=>{u(s)})},ref:c,role:"tab",tabIndex:i===s?0:-1,children:[t.jsx("span",{"aria-hidden":"true",className:"ams-tabs__button-label-hidden",children:e}),t.jsx("span",{className:"ams-tabs__button-label",children:e})]})});P.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{tab:{defaultValue:{value:"0"},description:"An identifier.",name:"tab",required:!1,type:{name:"number"}}}}}catch{}const L=r.forwardRef(({children:e,className:a,...s},o)=>t.jsx("div",{...s,role:"tablist",ref:o,className:m("ams-tabs__list",a),children:e}));L.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const w=r.forwardRef(({tab:e,children:a,className:s,...o},c)=>{const{activeTab:i,tabsId:n}=r.useContext(g);return e!==i?null:t.jsx("div",{...o,role:"tabpanel","aria-labelledby":`${n}-tab-${e}`,id:`${n}-panel-${e}`,tabIndex:0,ref:c,className:m("ams-tabs__panel",s),children:a})});w.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{tab:{defaultValue:null,description:"The identifier of the corresponding Tab.",name:"tab",required:!0,type:{name:"number"}}}}}catch{}const C=r.forwardRef(({activeTab:e,children:a,className:s,...o},c)=>{const i=r.useId(),n=r.useRef(null),[u,p]=r.useState(0),f=r.useMemo(()=>Array.isArray(a)?a[0].props.children:[],[a]);r.useEffect(()=>{typeof e=="number"&&Number.isInteger(e)&&(e<0?p(0):e>f.length-1?p(f.length-1):p(e))},[e,f]);const $=R=>{p(R)};r.useImperativeHandle(c,()=>n.current);const{keyDown:A}=D(n,{rotating:!0,horizontally:!0});return t.jsx(g.Provider,{value:{activeTab:u,updateTab:$,tabsId:i},children:t.jsx("div",{...o,role:"tabs",ref:n,onKeyDown:A,className:m("ams-tabs",s),children:a})})});C.displayName="Tabs";const l=Object.assign(C,{Button:P,List:L,Panel:w});try{l.displayName="Tabs",l.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The number of the active tab. Corresponds to its `tab` value.",name:"activeTab",required:!1,type:{name:"number"}}}}}catch{}const _=1e3,E=({children:e})=>{console.log(`[ARTIFICIALLY SLOW] Adding a ${_}ms delay…`);let a=performance.now();for(;performance.now()-a<_;);return e},y=[{id:0,label:"Gegevens",body:T()},{id:1,label:"Aanslagen",body:T()},{id:2,label:"Documenten",body:t.jsxs(t.Fragment,{children:["(This tab panel simulates a load time of ",_," milliseconds.)",t.jsx(E,{})]})},{id:3,label:"Acties",body:T()}],V=[t.jsx(l.List,{children:y.map(({id:e,label:a})=>t.jsx(l.Button,{tab:e,children:a},a))},"tabsList"),y.map(({id:e,body:a,label:s})=>t.jsxs(l.Panel,{tab:e,children:[t.jsx(B,{className:"ams-mb--xs",level:3,children:s}),t.jsx(S,{children:a})]},s))],W={title:"Components/Containers/Tabs",component:l,args:{children:V},argTypes:{activeTab:{control:{type:"number",min:0,max:y.length-1}}}},d={},b={args:{activeTab:3}};var x,h,I;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(I=(h=d.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var N,j,v;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    activeTab: 3
  }
}`,...(v=(j=b.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const q=["Default","WithInitialTab"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:d,WithInitialTab:b,__namedExportsOrder:q,default:W},Symbol.toStringTag,{value:"Module"}));export{G as T,b as W};
