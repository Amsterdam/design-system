import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import{o as g}from"./index.esm-C0Dkabds.js";import{d as b}from"./index-DrFu-skq.js";import"./index-C0MU9AHG.js";import{c as f}from"./clsx-B-dksMZM.js";import"./index-yBjzXJbu.js";import"./index.esm-DvoLfDtE.js";import"./_commonjsHelpers-CqkleIqs.js";const{useParameter:v,addons:x,useEffect:O,useMemo:Y}=__STORYBOOK_MODULE_PREVIEW_API__,{deprecate:y}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var R=Object.defineProperty,P=(e,t)=>{for(var r in t)R(e,r,{get:t[r],enumerable:!0})},s="themes",L=`storybook/${s}`,M="theme",h={},k={REGISTER_THEMES:`${L}/REGISTER_THEMES`},A={};P(A,{initializeThemeState:()=>T,pluckThemeFromContext:()=>u,useThemeParameters:()=>C});function u({globals:e}){return e[M]||""}function C(e){return y(b`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),e?e.parameters[s]??h:v(s,h)}function T(e,t){x.getChannel().emit(k.REGISTER_THEMES,{defaultTheme:t,themes:e})}var D="html",E=e=>e.split(" ").filter(Boolean),I=({themes:e,defaultTheme:t,parentSelector:r=D})=>(T(Object.keys(e),t),(_,a)=>{let{themeOverride:i}=a.parameters[s]??{},n=u(a);return O(()=>{let m=i||n||t,o=document.querySelector(r);if(!o)return;Object.entries(e).filter(([l])=>l!==m).forEach(([l,S])=>{let p=E(S);p.length>0&&o.classList.remove(...p)});let c=E(e[m]);c.length>0&&o.classList.add(...c)},[i,n]),_()});const N={phone:{name:"Phone",styles:{height:"680px",width:"320px"},type:"mobile"},tablet:{name:"Tablet",styles:{height:"1080px",width:"832px"},type:"tablet"},desktop:{name:"Desktop",styles:{height:"1080px",width:"1600px"},type:"desktop"}},z={children:{table:{disable:!0}}},V=[(e,{args:t})=>d.jsx(g,{className:f({"ams-docs-dark-background":t.color==="inverse","ams-docs-light-background":t.color==="contrast"}),lang:"nl",children:d.jsx(e,{})}),I({defaultTheme:"Spacious",themes:{Compact:"ams-theme--compact",Spacious:""}})],$={backgrounds:{disable:!0},controls:{sort:"alpha"},grid:{disable:!0},html:{root:".ams-screen"},options:{storySort:{order:["Docs",["Introduction","Developer Guide",["Getting Started"]],"Brand","Components",["Buttons","Containers","Feedback","Forms","Layout","Media","Navigation","Text"],"Utilities","Pages",["Introduction","Amsterdam.nl",["Home Page"]]]}},viewMode:"docs",viewport:{viewports:N}};export{z as argTypes,V as decorators,$ as parameters};
