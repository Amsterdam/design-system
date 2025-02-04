import{j as s}from"./jsx-runtime-z8MfsBtr.js";import{H as B,P as S}from"./index.esm-DRxV1DZ-.js";import{b as T}from"./exampleContent-fW-Djhm4.js";import{c as m}from"./clsx-B-dksMZM.js";import{r}from"./index-D7uoVdV3.js";import{u as D}from"./useKeyboardFocus-nadMEUdd.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const O={activeTab:0,tabsId:"",updateTab:()=>{}},g=r.createContext(O),P=r.forwardRef(({children:e,className:a,tab:t=0,...o},c)=>{const{activeTab:i,tabsId:n,updateTab:u}=r.useContext(g);return s.jsxs("button",{...o,"aria-controls":`${n}-panel-${t}`,"aria-selected":i===t,className:m("ams-tabs__button",a),id:`${n}-tab-${t}`,onClick:()=>{r.startTransition(()=>{u(t)})},ref:c,role:"tab",tabIndex:i===t?0:-1,children:[s.jsx("span",{"aria-hidden":"true",className:"ams-tabs__button-label-hidden",children:e}),s.jsx("span",{className:"ams-tabs__button-label",children:e})]})});P.displayName="Tabs.Button";try{Tabs.Button.displayName="Tabs.Button",Tabs.Button.__docgenInfo={description:"",displayName:"Tabs.Button",props:{tab:{defaultValue:{value:"0"},description:"An identifier.",name:"tab",required:!1,type:{name:"number"}}}}}catch{}const L=r.forwardRef(({children:e,className:a,...t},o)=>s.jsx("div",{...t,className:m("ams-tabs__list",a),ref:o,role:"tablist",children:e}));L.displayName="Tabs.List";try{Tabs.List.displayName="Tabs.List",Tabs.List.__docgenInfo={description:"",displayName:"Tabs.List",props:{}}}catch{}const w=r.forwardRef(({children:e,className:a,tab:t,...o},c)=>{const{activeTab:i,tabsId:n}=r.useContext(g);return t!==i?null:s.jsx("div",{...o,"aria-labelledby":`${n}-tab-${t}`,className:m("ams-tabs__panel",a),id:`${n}-panel-${t}`,ref:c,role:"tabpanel",tabIndex:0,children:e})});w.displayName="Tabs.Panel";try{Tabs.Panel.displayName="Tabs.Panel",Tabs.Panel.__docgenInfo={description:"",displayName:"Tabs.Panel",props:{tab:{defaultValue:null,description:"The identifier of the corresponding Tab.",name:"tab",required:!0,type:{name:"number"}}}}}catch{}const C=r.forwardRef(({activeTab:e,children:a,className:t,...o},c)=>{const i=r.useId(),n=r.useRef(null),[u,p]=r.useState(0),f=r.useMemo(()=>Array.isArray(a)?a[0].props.children:[],[a]);r.useEffect(()=>{typeof e=="number"&&Number.isInteger(e)&&(e<0?p(0):e>f.length-1?p(f.length-1):p(e))},[e,f]);const $=R=>{p(R)};r.useImperativeHandle(c,()=>n.current);const{keyDown:A}=D(n,{horizontally:!0,rotating:!0});return s.jsx(g.Provider,{value:{activeTab:u,tabsId:i,updateTab:$},children:s.jsx("div",{...o,className:m("ams-tabs",t),onKeyDown:A,ref:n,children:a})})});C.displayName="Tabs";const l=Object.assign(C,{Button:P,List:L,Panel:w});try{l.displayName="Tabs",l.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"The number of the active tab. Corresponds to its `tab` value.",name:"activeTab",required:!1,type:{name:"number"}}}}}catch{}const _=1e3,E=({children:e})=>{console.log(`[ARTIFICIALLY SLOW] Adding a ${_}ms delay…`);let a=performance.now();for(;performance.now()-a<_;);return e},y=[{body:T(),id:0,label:"Gegevens"},{body:T(),id:1,label:"Aanslagen"},{body:s.jsxs(s.Fragment,{children:["(This tab panel simulates a load time of ",_," milliseconds.)",s.jsx(E,{})]}),id:2,label:"Documenten"},{body:T(),id:3,label:"Acties"}],V=[s.jsx(l.List,{children:y.map(({id:e,label:a})=>s.jsx(l.Button,{tab:e,children:a},a))},"tabsList"),y.map(({body:e,id:a,label:t})=>s.jsxs(l.Panel,{tab:a,children:[s.jsx(B,{className:"ams-mb--xs",level:3,children:t}),s.jsx(S,{children:e})]},t))],W={title:"Components/Containers/Tabs",component:l,args:{children:V},argTypes:{activeTab:{control:{max:y.length-1,min:0,type:"number"}}}},d={},b={args:{activeTab:3}};var x,h,I;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(I=(h=d.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var N,j,v;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    activeTab: 3
  }
}`,...(v=(j=b.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const q=["Default","WithInitialTab"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:d,WithInitialTab:b,__namedExportsOrder:q,default:W},Symbol.toStringTag,{value:"Module"}));export{G as T,b as W};
