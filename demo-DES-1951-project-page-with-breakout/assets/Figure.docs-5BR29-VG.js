import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-CTXfc7x0.js";import{n as p,r as m,t as h}from"./Figure.stories-BpGYwYPQ.js";import{r as g,t as _}from"./FigureCaption.stories-C7FUmrzi.js";var v,y;function b(){return(b=e((()=>{v={figure:{gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},caption:{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"text-wrap":{$value:`balance`,$extensions:{"nl.amsterdam.type":`textWrap`}},inverse:{color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}}}}},y={ams:v}})))()}function x(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,...l(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(s,{of:h}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(t,{of:h}),`
`,(0,C.jsx)(n,{}),`
`,(0,C.jsx)(r.p,{children:`This component has no props to configure.`}),`
`,(0,C.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,C.jsx)(r.h3,{id:`caption`,children:`Caption`}),`
`,(0,C.jsx)(r.p,{children:`Describes the content.`}),`
`,(0,C.jsx)(a,{of:_}),`
`,(0,C.jsx)(i,{of:_}),`
`,(0,C.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,C.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsx)(r.p,{children:`Use a Figure to add a caption to an image, table, citation, illustration, diagram, code snippet, etc.`}),`
`,(0,C.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,C.jsxs)(r.p,{children:[`Do not repeat the caption in the `,(0,C.jsx)(r.code,{children:`alt`}),` of an image inside the Figure.
The caption already names the Figure for assistive technology, so the same words in both places are announced twice.`]}),`
`,(0,C.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(r.h3,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,C.jsx)(r.p,{children:`Use the inverse colour if the Figure Caption sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,(0,C.jsx)(a,{of:p}),`
`,(0,C.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,C.jsx)(r.p,{children:`The caption sits below the content it belongs to, separated by a small gap rather than a rule or a background.
Proximity alone ties the two together, which keeps a Figure usable around any kind of content.`}),`
`,(0,C.jsx)(r.p,{children:`A caption is set at the size of small body text, with the tighter line height that goes with it.
It keeps the ordinary text colour instead of being greyed down, so a reader who needs the caption is not asked to read weaker text than the rest of the page.`}),`
`,(0,C.jsxs)(r.p,{children:[`A Figure has no margins of its own.
Browsers indent a `,(0,C.jsx)(r.code,{children:`figure`}),` by default; that indent is removed, which makes vertical rhythm a property of the layout rather than of the component.`]}),`
`,(0,C.jsx)(r.p,{children:`A caption that runs onto more than one line has its line lengths balanced, so it does not end on a single short word.`}),`
`,(0,C.jsxs)(r.p,{children:[`Words that are too long for the line are hyphenated rather than left to overflow.
The browser decides where to split them, so the `,(0,C.jsx)(r.a,{href:`/docs/docs-developer-guide-localisation--docs#specify-the-language-for-the-entire-document`,children:`language of the document`}),` must be set correctly.`]}),`
`,(0,C.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsxs)(r.p,{children:[`A Figure renders a `,(0,C.jsx)(r.code,{children:`figure`}),` element with a `,(0,C.jsx)(r.code,{children:`figcaption`}),` inside it.
The pair is exposed as a figure, and the caption becomes its accessible name, so the caption describes the whole grouping rather than floating beside it as loose text.`]}),`
`,(0,C.jsx)(r.p,{children:`That grouping is what makes the caption more than proximity: it survives for someone who never sees the two sit together.`}),`
`,(0,C.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(f,{tokens:y})]})}function S(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=c(),u(),r(),d(),b(),m(),g()})))()}w();export{S as default};