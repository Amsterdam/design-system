import{r as s}from"./iframe-RGjhHglL.js";const c={medium:"37.5rem",wide:"72.5rem"},i=t=>{const[o,r]=s.useState(!1);return s.useEffect(()=>{if(typeof window>"u")return;const a=`(min-width: ${c[t]})`,e=window.matchMedia(a),n=()=>r(e.matches);return r(e.matches),e.addEventListener("change",n),()=>e.removeEventListener("change",n)},[t]),o};try{i.displayName="useIsAfterBreakpoint",i.__docgenInfo={description:`Hook to determine if the viewport width is at or beyond a given breakpoint.

**Prefer CSS media queries over this hook.** Use this only when viewport-dependent
logic must run in JavaScript, e.g. for interactions or dynamic behavior that cannot
be expressed in CSS. CSS media queries are more performant, better supported across
stacks, and easier to maintain.`,displayName:"useIsAfterBreakpoint",props:{}}}catch{}export{c as B,i as u};
