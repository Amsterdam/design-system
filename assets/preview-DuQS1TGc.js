import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import{o as g}from"./index.esm-CTzaYrgX.js";import{d as f}from"./index-DrFu-skq.js";import"./index-G8LIXM5I.js";import{c as x}from"./clsx-B-dksMZM.js";import"./index-yBjzXJbu.js";import"./index.esm-DvoLfDtE.js";import"./_commonjsHelpers-CqkleIqs.js";const{useParameter:O,addons:y,useEffect:P,useMemo:V,definePreview:$}=__STORYBOOK_MODULE_PREVIEW_API__,{deprecate:R}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var L=Object.defineProperty,u=(e,t)=>{for(var r in t)L(e,r,{get:t[r],enumerable:!0})},M={};u(M,{initialGlobals:()=>G});var s="themes",k=`storybook/${s}`,T="theme",h={},A={REGISTER_THEMES:`${k}/REGISTER_THEMES`},G={[T]:""},w={};u(w,{initializeThemeState:()=>v,pluckThemeFromContext:()=>_,useThemeParameters:()=>C});function _({globals:e}){return e[T]||""}function C(e){return R(f`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),e?e.parameters[s]??h:O(s,h)}function v(e,t){y.getChannel().emit(A.REGISTER_THEMES,{defaultTheme:t,themes:e})}var D="html",E=e=>e.split(" ").filter(Boolean),I=({themes:e,defaultTheme:t,parentSelector:r=D})=>(v(Object.keys(e),t),(S,o)=>{let{themeOverride:i}=o.parameters[s]??{},n=_(o);return P(()=>{let m=i||n||t,a=document.querySelector(r);if(!a)return;Object.entries(e).filter(([c])=>c!==m).forEach(([c,b])=>{let p=E(b);p.length>0&&a.classList.remove(...p)});let l=E(e[m]);l.length>0&&a.classList.add(...l)},[i,n]),S()});const N={phone:{name:"Phone",styles:{height:"680px",width:"320px"},type:"mobile"},tablet:{name:"Tablet",styles:{height:"1080px",width:"832px"},type:"tablet"},desktop:{name:"Desktop",styles:{height:"1080px",width:"1600px"},type:"desktop"}},q={children:{table:{disable:!0}}},W=[(e,{args:t})=>d.jsx(g,{className:x({"ams-docs-dark-background":t.color==="inverse","ams-docs-light-background":t.color==="contrast"}),lang:"nl",children:d.jsx(e,{})}),I({defaultTheme:"Spacious",themes:{Compact:"ams-theme--compact",Spacious:""}})],J={backgrounds:{disable:!0},controls:{sort:"alpha"},grid:{disable:!0},html:{root:".ams-screen"},options:{storySort:{order:["Docs",["Introduction","Developer Guide",["Getting Started"]],"Brand","Components",["Buttons","Containers","Feedback","Forms","Layout","Media","Navigation","Text"],"Utilities","Pages",["Introduction","Amsterdam.nl",["Home Page"]]]}},viewMode:"docs",viewport:{viewports:N}};export{q as argTypes,W as decorators,J as parameters};
