import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{C as o,P as p,G as r,n as h,u as j,p as g,q as x,o as n,a as i,v}from"./index.esm-C_eFfWAb.js";import{i as b,A as u,B as f,C as y,D as S,g as _}from"./index.esm-BmSTY5-j.js";const k=()=>e.jsx("div",{className:"ams-application-sidebar",children:e.jsx(o,{gap:"large",children:c.level1.map(({Icon:a,label:s},l)=>e.jsxs(o,{className:"ams-application-column--halign-center",gap:"extra-small",children:[a&&e.jsx(a,{fill:"white",width:24}),e.jsx(p,{inverseColor:!0,size:"small",children:s})]},l))})}),m=()=>Math.floor(Math.random()*26)+65,N=()=>String.fromCharCode(m(),m()),L=()=>e.jsx(r,{children:e.jsx(r.Cell,{span:"all",children:e.jsx(h,{appName:"Amopis",links:e.jsx(j,{label:N()}),logoLink:"amopis",logoLinkTitle:"Naar de homepage van Amopis"})})}),t=({children:a})=>e.jsxs(e.Fragment,{children:[e.jsx(g,{href:"#main",children:"Direct naar inhoud"}),e.jsx(x,{className:"ams-theme ams-theme--compact ams-application-screen",maxWidth:"x-wide",children:e.jsxs("div",{className:"ams-application-container",children:[e.jsx(k,{}),e.jsxs("div",{className:"ams-application-content",children:[e.jsx(L,{}),e.jsx("div",{id:"main",className:"ams-application-body",children:a}),e.jsx(r,{paddingVertical:"small",children:e.jsx(r.Cell,{span:"all",children:e.jsxs(n,{children:[e.jsx(n.Link,{href:"#",children:"E-mail je vraag of feedback"}),e.jsx(n.Link,{href:"#",children:"Bekijk veelgestelde vragen"}),e.jsx(n.Link,{href:"#",children:"Bekijk releasebeschrijving"})]})})})]})]})})]});try{t.displayName="Layout",t.__docgenInfo={description:"",displayName:"Layout",props:{}}}catch{}const c={level1:[{Icon:b,label:"Dashboard"},{Icon:u,label:"Projecten"},{Icon:f,label:"Rapportages"},{Icon:y,label:"Analyses"},{Icon:S,label:"Instellingen"}],level2:[{label:"Projectdetails"},{label:"Projectstructuur"},{label:"Planning"},{label:"Capaciteitsraming"},{label:"Financiën"}],level3:[{label:"Overzicht"},{label:"Kerngegevens"},{label:"Projectinformatie"},{label:"Projectgrenzen"},{label:"Projectcodes"},{label:"Autorisaties"}]},A={parameters:{layout:"fullscreen",themes:{themeOverride:"Compact"}},decorators:[a=>e.jsx(t,{children:e.jsx(a,{})})]},d=({activeTab:a})=>e.jsxs(i,{activeTab:a,children:[e.jsx(i.List,{className:"ams-application-tabs-vertical",children:c.level2.map(({label:s},l)=>e.jsxs(i.Button,{tab:l,children:[e.jsx(v,{size:"level-6",svg:_}),s]},s))}),c.level2.map(({label:s},l)=>e.jsx(i.Panel,{tab:l,style:{display:"none"}},s))]});try{d.displayName="Submenu",d.__docgenInfo={description:"",displayName:"Submenu",props:{activeTab:{defaultValue:null,description:"",name:"activeTab",required:!1,type:{name:"number"}}}}}catch{}export{d as S,A as c,c as m};
