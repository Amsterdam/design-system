import{j as p}from"./jsx-runtime-BlAj40OV.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";const{useParameter:g,addons:v,useEffect:x,useMemo:w}=__STORYBOOK_MODULE_PREVIEW_API__;var y=Object.defineProperty,b=(e,t)=>{for(var r in t)y(e,r,{get:t[r],enumerable:!0})},f={};b(f,{initializeThemeState:()=>u,pluckThemeFromContext:()=>E,useThemeParameters:()=>d});var h="themes",R=`storybook/${h}`,M="theme",P={},A={REGISTER_THEMES:`${R}/REGISTER_THEMES`};function E({globals:e}){return e[M]||""}function d(){return g(h,P)}function u(e,t){v.getChannel().emit(A.REGISTER_THEMES,{defaultTheme:t,themes:e})}var O="html",c=e=>e.split(" ").filter(Boolean),L=({themes:e,defaultTheme:t,parentSelector:r=O})=>(u(Object.keys(e),t),(T,_)=>{let{themeOverride:s}=d(),a=E(_);return x(()=>{let n=s||a||t,o=document.querySelector(r);if(!o)return;Object.entries(e).filter(([l])=>l!==n).forEach(([l,S])=>{let m=c(S);m.length>0&&o.classList.remove(...m)});let i=c(e[n]);i.length>0&&o.classList.add(...i)},[s,a]),T()});const k={phone:{name:"Phone",styles:{height:"680px",width:"320px"},type:"mobile"},tablet:{name:"Tablet",styles:{height:"1080px",width:"832px"},type:"tablet"},desktop:{name:"Desktop",styles:{height:"1080px",width:"1600px"},type:"desktop"}},N={children:{table:{disable:!0}}},j=[e=>p.jsx("div",{lang:"nl",children:p.jsx(e,{})}),L({themes:{Spacious:"",Compact:"ams-theme--compact"},defaultTheme:"Spacious"})],G={backgrounds:{disable:!0},controls:{sort:"alpha"},options:{storySort:{order:["Docs",["Introduction","Developer Guide",["Getting Started"]],"Brand","Components",["Buttons","Containers","Feedback","Forms","Layout","Media","Navigation","Text"],"Utilities","Pages",["Introduction","Amsterdam.nl",["Home Page"]]]}},viewport:{viewports:k},viewMode:"docs",html:{root:'div[lang="nl"]'}};export{N as argTypes,j as decorators,G as parameters};
