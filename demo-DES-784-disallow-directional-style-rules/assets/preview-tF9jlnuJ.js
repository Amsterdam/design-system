const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-CBneLr1h.js","./iframe-CQIOn01H.js","./index-BwDkhjyp.js","./_commonjsHelpers-BosuxZz1.js","./react-18-CdTkaE-n.js","./index-B8XB3FuZ.js","./index-D0tze0rC.js","./index-COebWTXQ.js","./index-B8K4vdXH.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-CQIOn01H.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-CBneLr1h.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
