import{r as n}from"./iframe-CwiD41tY.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const a={medium:"37.5rem",wide:"72.5rem"},o=e=>{const[t,r]=n.useState(!1);return n.useLayoutEffect(()=>{if(e&&typeof window<"u"){const s=window.matchMedia(`(min-width: ${a[e]})`);s.matches!==t&&r(s.matches);const i=()=>r(s.matches);return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)}},[t,e]),t};try{o.displayName="useIsAfterBreakpoint",o.__docgenInfo={description:"",displayName:"useIsAfterBreakpoint",props:{}}}catch{}export{a as B,o as u};
