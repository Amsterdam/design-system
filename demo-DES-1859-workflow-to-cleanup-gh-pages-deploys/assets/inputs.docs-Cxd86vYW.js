import{n as e}from"./chunk-DnJy8xQt.js";import{Ht as t}from"./iframe-Dg0ZX6bk.js";import{r as n}from"./react-YZnX_jCb.js";import{c as r,f as i}from"./blocks-BTR3ZNmT.js";import{n as a,t as o}from"./DesignTokensTable-DdSwx74S.js";import{t as s}from"./mdx-react-shim-B5O_24tO.js";var c,l,u=e((()=>{c={inputs:{$description:`Shared base styles for all form input components: text inputs, selects, text areas, etc.`,"background-color":{$value:`{ams.color.background.default}`,$extensions:{"nl.amsterdam.type":`color`}},"border-color":{$value:`currentColor`,$type:`color`,$description:`Uses currentColor so the border adapts to the text colour, including in error states.`},"border-style":{$value:`solid`,$extensions:{"nl.amsterdam.type":`borderStyle`}},"border-width":{$value:`{ams.border.width.m}`,$extensions:{"nl.amsterdam.type":`borderWidth`}},color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:1.4,$description:`Tighter than body text (1.6) to keep inputs compact. Buttons also use this to match.`,$extensions:{"nl.amsterdam.subtype":`lineHeight`},$type:`number`},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},disabled:{color:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}},hover:{"box-shadow":{$type:`shadow`,$description:`An inset shadow that reinforces the border on hover without shifting the layout.`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:{value:0,unit:`rem`},blur:{value:0,unit:`rem`},spread:`{ams.border.width.s}`,color:`currentColor`}}},invalid:{"border-color":{$value:`{ams.color.interactive.invalid.default}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{"border-color":{$value:`{ams.color.interactive.invalid.hover}`,$extensions:{"nl.amsterdam.type":`color`}},"box-shadow":{$type:`shadow`,$description:`An inset shadow using the hover variation of the invalid interactive colour.`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:{value:0,unit:`rem`},blur:{value:0,unit:`rem`},spread:`{ams.border.width.s}`,color:`{ams.color.interactive.invalid.hover}`}}}},placeholder:{color:{$value:`{ams.color.text.secondary}`,$extensions:{"nl.amsterdam.type":`color`}}}}},l={ams:c}}));function d(e){let t={a:`a`,h1:`h1`,h2:`h2`,p:`p`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[`
`,`
`,(0,p.jsx)(r,{title:`Brand/Design Tokens/Inputs`}),`
`,(0,p.jsx)(t.h1,{id:`inputs`,children:`Inputs`}),`
`,(0,p.jsx)(t.p,{children:`Several input components share the same appearance in various aspects.
This set of common tokens maintains their visual consistency.`}),`
`,(0,p.jsxs)(t.p,{children:[`These tokens are used by
`,(0,p.jsx)(t.a,{href:`/docs/components-forms-date-input--docs`,children:`Date Input`}),`,
`,(0,p.jsx)(t.a,{href:`/docs/components-forms-file-input--docs`,children:`File Input`}),`,
`,(0,p.jsx)(t.a,{href:`/docs/components-forms-password-input--docs`,children:`Password Input`}),`,
`,(0,p.jsx)(t.a,{href:`/docs/components-forms-search-field--docs`,children:`Search Field`}),`,
`,(0,p.jsx)(t.a,{href:`/docs/components-forms-select--docs`,children:`Select`}),`,
`,(0,p.jsx)(t.a,{href:`/docs/components-forms-text-area--docs`,children:`Text Area`}),`,
`,(0,p.jsx)(t.a,{href:`/docs/components-forms-text-input--docs`,children:`Text Input`}),`,
`,(0,p.jsx)(t.a,{href:`/docs/components-forms-time-input--docs`,children:`Time Input`}),` and
(one of them) by `,(0,p.jsx)(t.a,{href:`/docs/components-buttons-button--docs`,children:`Button`}),`.`]}),`
`,(0,p.jsx)(t.h2,{id:`default`,children:`Default`}),`
`,(0,p.jsx)(o,{exclude:[`disabled`,`hover`,`invalid`,`placeholder`],path:`ams.inputs`,showDescriptions:!0,tokens:l}),`
`,(0,p.jsx)(t.h2,{id:`disabled`,children:`Disabled`}),`
`,(0,p.jsx)(o,{path:`ams.inputs.disabled`,showDescriptions:!0,tokens:l}),`
`,(0,p.jsx)(t.h2,{id:`hover`,children:`Hover`}),`
`,(0,p.jsx)(o,{path:`ams.inputs.hover`,showDescriptions:!0,tokens:l}),`
`,(0,p.jsx)(t.h2,{id:`invalid`,children:`Invalid`}),`
`,(0,p.jsx)(o,{path:`ams.inputs.invalid`,showDescriptions:!0,tokens:l}),`
`,(0,p.jsx)(t.h2,{id:`placeholder`,children:`Placeholder`}),`
`,(0,p.jsx)(o,{path:`ams.inputs.placeholder`,showDescriptions:!0,tokens:l}),`
`,(0,p.jsx)(t.h2,{id:`how-to-use`,children:`How to use`}),`
`,(0,p.jsx)(t.p,{children:`Use these tokens if you recreate our React components with different technology, or if you create a new input component.`})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),i(),a(),u()}))();export{f as default};