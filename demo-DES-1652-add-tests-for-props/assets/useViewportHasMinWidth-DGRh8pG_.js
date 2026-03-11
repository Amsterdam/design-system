import{r as n}from"./iframe-C0PqUvnd.js";const d={medium:"37.5rem",wide:"72.5rem"},s=t=>{const[o,r]=n.useState(!1);return n.useEffect(()=>{if(typeof window>"u")return;const a=`(min-width: ${d[t]})`,e=window.matchMedia(a),i=()=>r(e.matches);return r(e.matches),e.addEventListener("change",i),()=>e.removeEventListener("change",i)},[t]),o};try{s.displayName="useViewportHasMinWidth",s.__docgenInfo={description:`Hook to determine if the viewport width is at or beyond a given breakpoint.

**Prefer CSS media queries over this hook.** Use this only when viewport-dependent
logic must run in JavaScript, e.g. for interactions or dynamic behaviour that cannot
be expressed in CSS. CSS media queries are more performant, better supported across
stacks, and easier to maintain.`,displayName:"useViewportHasMinWidth",props:{}}}catch{}export{d as B,s as u};
