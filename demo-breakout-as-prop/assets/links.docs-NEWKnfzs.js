import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,g as i}from"./iframe-BSgyFvO3.js";import{n as a,t as o}from"./DesignTokensTable-Jm7UFal_.js";import{t as s}from"./mdx-react-shim-BlF3Jt0t.js";var c,l,u=e((()=>{c={links:{$description:`Shared base styles for all link-like components.`,color:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-thickness":{$value:{value:.125,unit:`rem`},$type:`dimension`,$extensions:{"nl.amsterdam.hint":`2px`,"nl.amsterdam.subtype":`space`}},"text-underline-offset":{$value:{value:.15625,unit:`rem`},$type:`dimension`,$extensions:{"nl.amsterdam.hint":`2.5px`,"nl.amsterdam.subtype":`space`}},hover:{$description:`On hover the underline thickens and moves closer to the text.`,color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-thickness":{$value:{value:.1875,unit:`rem`},$type:`dimension`,$extensions:{"nl.amsterdam.hint":`3px`,"nl.amsterdam.subtype":`space`}},"text-underline-offset":{$value:{value:.09375,unit:`rem`},$type:`dimension`,$extensions:{"nl.amsterdam.hint":`1.5px`,"nl.amsterdam.subtype":`space`}}},subtle:{$description:`For links that are already recognisable from context, e.g. in navigation menus. No underline by default; underline appears on hover.`,"text-decoration-line":{$value:`none`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},hover:{"text-decoration-line":{$value:`underline`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}},contrast:{$description:`For links on coloured backgrounds where the default blue lacks sufficient contrast.`,color:{$value:`{ams.color.interactive.contrast}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{color:{$value:`{ams.color.interactive.contrast}`,$extensions:{"nl.amsterdam.type":`color`}}}},inverse:{$description:`For links on dark backgrounds.`,color:{$value:`{ams.color.interactive.inverse}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{color:{$value:`{ams.color.interactive.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}}}}},l={ams:c}}));function d(e){let t={h1:`h1`,h2:`h2`,p:`p`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[`
`,`
`,`
`,(0,p.jsx)(r,{title:`Brand/Design Tokens/Links`}),`
`,(0,p.jsx)(t.h1,{id:`links`,children:`Links`}),`
`,(0,p.jsx)(t.p,{children:`Several link components share the same appearance in various aspects.
This set of common tokens maintains their visual consistency.`}),`
`,(0,p.jsx)(t.h2,{id:`default`,children:`Default`}),`
`,(0,p.jsx)(t.p,{children:`Our default links have the following styles:`}),`
`,(0,p.jsx)(o,{exclude:[`subtle`,`contrast`,`inverse`],path:`ams.links`,showDescriptions:!0,tokens:l}),`
`,(0,p.jsx)(t.h2,{id:`subtle`,children:`Subtle`}),`
`,(0,p.jsx)(t.p,{children:`Subtle links are used in places where the context helps indicate that the text is a link.
For instance, in the Page Header or Pagination components.
As a result, their styling can be less obvious.`}),`
`,(0,p.jsx)(o,{hideExamples:!0,path:`ams.links.subtle`,tokens:l}),`
`,(0,p.jsx)(t.h2,{id:`contrast`,children:`Contrast`}),`
`,(0,p.jsx)(t.p,{children:`Links on light (but not white) backgrounds use the interactive contrast colour.`}),`
`,(0,p.jsx)(o,{path:`ams.links.contrast`,tokens:l}),`
`,(0,p.jsx)(t.h2,{id:`inverse`,children:`Inverse`}),`
`,(0,p.jsx)(t.p,{children:`On dark backgrounds, links have the inverse colour.`}),`
`,(0,p.jsx)(o,{path:`ams.links.inverse`,tokens:l}),`
`,(0,p.jsx)(t.h2,{id:`how-to-use`,children:`How to use`}),`
`,(0,p.jsx)(t.p,{children:`Use these tokens if you recreate our React components with different technology, or if you create a new link component.`})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),i(),a(),u()}))();export{f as default};