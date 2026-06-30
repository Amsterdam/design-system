import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{b as n,d as r,f as i,g as a,i as o,m as s,o as c,s as l}from"./iframe-rCk9XOch.js";import{n as u,t as d}from"./DesignTokensTable-BqaAXww4.js";import{t as f}from"./mdx-react-shim-DaijD6p7.js";import{InverseColour as p,Level1 as m,Level2 as h,Level3 as g,Level4 as _,Sizes as v,WithIcon as y,n as b,t as x}from"./Heading.stories-DakICnEg.js";var S,C,w=e((()=>{S={heading:{1:{"font-size":{$value:`{ams.typography.heading.1.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.1.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},2:{"font-size":{$value:`{ams.typography.heading.2.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.2.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},3:{"font-size":{$value:`{ams.typography.heading.3.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.3.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},4:{"font-size":{$value:`{ams.typography.heading.4.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.4.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},5:{"font-size":{$value:`{ams.typography.heading.5.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.heading.5.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"text-wrap":{$value:`{ams.typography.heading.text-wrap}`,$extensions:{"nl.amsterdam.type":`textWrap`}},inverse:{color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}}}},C={ams:S}}));function T(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,D.jsxs)(D.Fragment,{children:[`
`,`
`,`
`,`
`,(0,D.jsx)(r,{of:x}),`
`,(0,D.jsx)(s,{}),`
`,(0,D.jsx)(l,{of:x}),`
`,(0,D.jsx)(i,{}),`
`,(0,D.jsx)(c,{}),`
`,(0,D.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,D.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,D.jsx)(t.p,{children:`Headings help the user scan the structure of a page.
They also introduce the content that follows them.`}),`
`,(0,D.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,D.jsxs)(t.p,{children:[`Use `,(0,D.jsx)(t.a,{href:`/docs/utilities-css-margin--docs`,children:`Margin`}),` or `,(0,D.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` to add vertical whitespace.`]}),`
`,(0,D.jsxs)(t.p,{children:[`Use the `,(0,D.jsx)(t.code,{children:`size`}),` prop to make a Heading visually larger or smaller, but sparingly and consistently.`]}),`
`,(0,D.jsxs)(t.p,{children:[`The `,(0,D.jsx)(t.code,{children:`level`}),` prop has no default; determine the correct level for each instance.
Every page should have one Heading with level 1.
Do not skip levels: a level 2 Heading must be followed by level 3, not level 4.`]}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsx)(t.li,{children:`Content pages, e.g. for articles, products, events etc. must not use the size prop on their Headings.`}),`
`,(0,D.jsx)(t.li,{children:`Most Headings on overview pages, e.g. Card, Table of Contents, and Link Sections, use a size of 'level-3'.`}),`
`,(0,D.jsx)(t.li,{children:`The same applies to large sections – e.g. Accordion, Alert, Dialog and the caption of a Table.
Most of them can be given a different size if appropriate.`}),`
`]}),`
`,(0,D.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,D.jsx)(t.h3,{id:`levels`,children:`Levels`}),`
`,(0,D.jsx)(t.p,{children:`We’ve limited the number of heading levels to four.
More detailed content should probably be split into multiple pages or have some sections merged.`}),`
`,(0,D.jsx)(t.h4,{id:`level-1`,children:`Level 1`}),`
`,(0,D.jsx)(o,{of:m}),`
`,(0,D.jsx)(t.h4,{id:`level-2`,children:`Level 2`}),`
`,(0,D.jsx)(o,{of:h}),`
`,(0,D.jsx)(t.h4,{id:`level-3`,children:`Level 3`}),`
`,(0,D.jsx)(o,{of:g}),`
`,(0,D.jsx)(t.h4,{id:`level-4`,children:`Level 4`}),`
`,(0,D.jsx)(o,{of:_}),`
`,(0,D.jsx)(t.h3,{id:`sizes`,children:`Sizes`}),`
`,(0,D.jsxs)(t.p,{children:[`Sometimes, it may be visually more suitable to make a heading appear a bit smaller.
The `,(0,D.jsx)(t.code,{children:`size`}),` prop can be used for this.
Do so sparingly; the sizes have been designed to match their semantic level.
Ensure that you still select a level that accurately represents the section’s hierarchy.
These, for example, are all Headings at level 2, but with sizes 1 to 5:`]}),`
`,(0,D.jsx)(o,{of:v}),`
`,(0,D.jsx)(t.h3,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,D.jsx)(t.p,{children:`Use the inverse colour if the Heading sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,(0,D.jsx)(o,{of:p}),`
`,(0,D.jsx)(t.h3,{id:`with-an-icon`,children:`With an icon`}),`
`,(0,D.jsxs)(t.p,{children:[`Headings can be paired with an icon.
Use a `,(0,D.jsx)(t.a,{href:`/docs/components-layout-row--docs`,children:`Row`}),` and the `,(0,D.jsx)(t.code,{children:`size`}),` prop of `,(0,D.jsx)(t.a,{href:`/docs/components-media-icon--docs`,children:`Icon`}),` to align them.`]}),`
`,(0,D.jsx)(o,{of:y}),`
`,(0,D.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,D.jsx)(t.p,{children:`Screen reader users navigate by heading to understand page structure.
An incorrect hierarchy disrupts their mental model of the page.`}),`
`,(0,D.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,D.jsxs)(t.ul,{children:[`
`,(0,D.jsxs)(t.li,{children:[(0,D.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`]}),`
`,(0,D.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,D.jsx)(d,{tokens:C})]})}function E(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,D.jsx)(t,{...e,children:(0,D.jsx)(T,{...e})}):T(e)}var D;e((()=>{D=t(),f(),a(),u(),w(),b()}))();export{E as default};