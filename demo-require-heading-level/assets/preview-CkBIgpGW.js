import{j as c}from"./jsx-runtime-z8MfsBtr.js";import{r as g}from"./index.esm-BttBa8Jf.js";import"./index-D7uoVdV3.js";import{c as b}from"./clsx-B-dksMZM.js";import"./index-C9rmetsa.js";import"./index.esm-X3U7dYaT.js";import"./_commonjsHelpers-CqkleIqs.js";const{useParameter:x,addons:f,useEffect:v,useMemo:H}=__STORYBOOK_MODULE_PREVIEW_API__;var y=Object.defineProperty,R=(e,t)=>{for(var r in t)y(e,r,{get:t[r],enumerable:!0})},k={};R(k,{initializeThemeState:()=>u,pluckThemeFromContext:()=>h,useThemeParameters:()=>E});var d="themes",M=`storybook/${d}`,P="theme",A={},C={REGISTER_THEMES:`${M}/REGISTER_THEMES`};function h({globals:e}){return e[P]||""}function E(){return x(d,A)}function u(e,t){f.getChannel().emit(C.REGISTER_THEMES,{defaultTheme:t,themes:e})}var O="html",p=e=>e.split(" ").filter(Boolean),L=({themes:e,defaultTheme:t,parentSelector:r=O})=>(u(Object.keys(e),t),(T,_)=>{let{themeOverride:s}=E(),a=h(_);return v(()=>{let n=s||a||t,o=document.querySelector(r);if(!o)return;Object.entries(e).filter(([m])=>m!==n).forEach(([m,S])=>{let l=p(S);l.length>0&&o.classList.remove(...l)});let i=p(e[n]);i.length>0&&o.classList.add(...i)},[s,a]),T()});const D={phone:{name:"Phone",styles:{height:"680px",width:"320px"},type:"mobile"},tablet:{name:"Tablet",styles:{height:"1080px",width:"832px"},type:"tablet"},desktop:{name:"Desktop",styles:{height:"1080px",width:"1600px"},type:"desktop"}},U={children:{table:{disable:!0}}},K=[(e,{args:t})=>c.jsx(g,{className:b({"ams-docs-dark-background":t.inverseColor,"ams-docs-light-background":t.contrastColor}),lang:"nl",children:c.jsx(e,{})}),L({themes:{Spacious:"",Compact:"ams-theme--compact"},defaultTheme:"Spacious"})],Y={backgrounds:{disable:!0},controls:{sort:"alpha"},grid:{disable:!0},options:{storySort:{order:["Docs",["Introduction","Developer Guide",["Getting Started"]],"Brand","Components",["Buttons","Containers","Feedback","Forms","Layout","Media","Navigation","Text"],"Utilities","Pages",["Introduction","Amsterdam.nl",["Home Page"]]]}},viewport:{viewports:D},viewMode:"docs",html:{root:".ams-screen"}};export{U as argTypes,K as decorators,Y as parameters};
