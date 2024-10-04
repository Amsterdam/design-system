import{j as r}from"./jsx-runtime-BlAj40OV.js";import{H as B,P as S}from"./index.esm-CQjfvN-_.js";import{b as _}from"./exampleContent-hIIPvEhU.js";import{c as u}from"./clsx-B-dksMZM.js";import{r as s}from"./index-Cs7sjTYM.js";import{u as D}from"./useKeyboardFocus-CRUFsA_C.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const O={activeTab:0,tabsId:"",updateTab:()=>{}},x=s.createContext(O),L=s.forwardRef(({children:e,className:a,tab:t=0,...o},c)=>{const{activeTab:i,tabsId:n,updateTab:m}=s.useContext(x);return r.jsx("button",{...o,"aria-controls":`${n}-panel-${t}`,"aria-selected":i===t,className:u("ams-tabs__button",a),id:`${n}-tab-${t}`,onClick:()=>{s.startTransition(()=>{m(t)})},ref:c,role:"tab",tabIndex:i===t?0:-1,children:e})});L.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{tab:{defaultValue:{value:"0"},description:"An identifier.",name:"tab",required:!1,type:{name:"number"}}}}}catch{}const w=s.forwardRef(({children:e,className:a,...t},o)=>r.jsx("div",{...t,role:"tablist",ref:o,className:u("ams-tabs__list",a),children:e}));w.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const C=s.forwardRef(({tab:e,children:a,className:t,...o},c)=>{const{activeTab:i,tabsId:n}=s.useContext(x);return e!==i?null:r.jsx("div",{...o,role:"tabpanel","aria-labelledby":`${n}-tab-${e}`,id:`${n}-panel-${e}`,tabIndex:0,ref:c,className:u("ams-tabs__panel",t),children:a})});C.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{tab:{defaultValue:null,description:"The identifier of the corresponding Tab.",name:"tab",required:!0,type:{name:"number"}}}}}catch{}const $=s.forwardRef(({activeTab:e,children:a,className:t,...o},c)=>{const i=s.useId(),n=s.useRef(null),[m,p]=s.useState(0),f=s.useMemo(()=>Array.isArray(a)?a[0].props.children.map(T=>T):[],[a]);s.useEffect(()=>{typeof e=="number"&&Number.isInteger(e)&&(e<0?p(0):e>f.length-1?p(f.length-1):p(e))},[e,f]);const A=T=>{p(T)};s.useImperativeHandle(c,()=>n.current);const{keyDown:R}=D(n,{rotating:!0,horizontally:!0});return r.jsx(x.Provider,{value:{activeTab:m,updateTab:A,tabsId:i},children:r.jsx("div",{...o,role:"tabs",ref:n,onKeyDown:R,className:u("ams-tabs",t),children:a})})});$.displayName="Tabs";const l=Object.assign($,{Button:L,List:w,Panel:C});try{l.displayName="Tabs",l.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The number of the active tab. Corresponds to its `tab` value.",name:"activeTab",required:!1,type:{name:"number"}}}}}catch{}const y=1e3,E=({children:e})=>{console.log(`[ARTIFICIALLY SLOW] Adding a ${y}ms delay…`);let a=performance.now();for(;performance.now()-a<y;);return e},g=[{id:0,label:"Gegevens",body:_()},{id:1,label:"Aanslagen",body:_()},{id:2,label:"Documenten",body:r.jsxs(r.Fragment,{children:["(This tab panel simulates a load time of ",y," milliseconds.)",r.jsx(E,{})]})},{id:3,label:"Acties",body:_()}],V=[r.jsx(l.List,{children:g.map(({id:e,label:a})=>r.jsx(l.Button,{tab:e,children:a},a))},"tabsList"),g.map(({id:e,body:a,label:t})=>r.jsxs(l.Panel,{tab:e,children:[r.jsx(B,{level:3,children:t}),r.jsx(S,{children:a})]},t))],W={title:"Components/Containers/Tabs",component:l,args:{children:V},argTypes:{activeTab:{control:{type:"number",min:0,max:g.length-1}}}},d={},b={args:{activeTab:3}};var h,I,v;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(v=(I=d.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var j,N,P;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    activeTab: 3
  }
}`,...(P=(N=b.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};const q=["Default","WithInitialTab"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:d,WithInitialTab:b,__namedExportsOrder:q,default:W},Symbol.toStringTag,{value:"Module"}));export{G as T,b as W};
