import{j as p}from"./jsx-runtime-BlAj40OV.js";import{u as g}from"./index.esm-CXPFsmgB.js";import"./index-Cs7sjTYM.js";import"./clsx-B-dksMZM.js";import"./index.esm-DQgjFsBh.js";import"./_commonjsHelpers-BosuxZz1.js";const{useParameter:x,addons:b,useEffect:y,useMemo:B}=__STORYBOOK_MODULE_PREVIEW_API__;var f=Object.defineProperty,v=(e,t)=>{for(var r in t)f(e,r,{get:t[r],enumerable:!0})},R={};v(R,{initializeThemeState:()=>u,pluckThemeFromContext:()=>E,useThemeParameters:()=>d});var h="themes",M=`storybook/${h}`,P="theme",A={},O={REGISTER_THEMES:`${M}/REGISTER_THEMES`};function E({globals:e}){return e[P]||""}function d(){return x(h,A)}function u(e,t){b.getChannel().emit(O.REGISTER_THEMES,{defaultTheme:t,themes:e})}var L="html",c=e=>e.split(" ").filter(Boolean),k=({themes:e,defaultTheme:t,parentSelector:r=L})=>(u(Object.keys(e),t),(T,_)=>{let{themeOverride:s}=d(),a=E(_);return y(()=>{let i=s||a||t,o=document.querySelector(r);if(!o)return;Object.entries(e).filter(([m])=>m!==i).forEach(([m,S])=>{let l=c(S);l.length>0&&o.classList.remove(...l)});let n=c(e[i]);n.length>0&&o.classList.add(...n)},[s,a]),T()});const C={phone:{name:"Phone",styles:{height:"680px",width:"320px"},type:"mobile"},tablet:{name:"Tablet",styles:{height:"1080px",width:"832px"},type:"tablet"},desktop:{name:"Desktop",styles:{height:"1080px",width:"1600px"},type:"desktop"}},F={children:{table:{disable:!0}}},H=[e=>p.jsx(g,{lang:"nl",children:p.jsx(e,{})}),k({themes:{Spacious:"",Compact:"ams-theme--compact"},defaultTheme:"Spacious"})],U={backgrounds:{disable:!0},controls:{sort:"alpha"},grid:{disable:!0},options:{storySort:{order:["Docs",["Introduction","Developer Guide",["Getting Started"]],"Brand","Components",["Buttons","Containers","Feedback","Forms","Layout","Media","Navigation","Text"],"Utilities","Pages",["Introduction","Amsterdam.nl",["Home Page"]]]}},viewport:{viewports:C},viewMode:"docs"};export{F as argTypes,H as decorators,U as parameters};