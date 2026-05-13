import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-DDO2Ni87.js";import{r as n}from"./react-DsELjsEB.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-Lopf3MEI.js";import{n as l,t as u}from"./DesignTokensTable-XYpzvGO9.js";import{t as d}from"./mdx-react-shim-CVPVjORH.js";import{CustomPrefix as f,WithCustomIcon as p,n as m,t as h}from"./ErrorMessage.stories-ozeicPFS.js";var g,_=e((()=>{g=`<!-- @license CC0-1.0 -->

# Error Message

Show an error message when there is a form field validation error.
In the error message explain what went wrong and how to fix it.

For guidance and examples on using error messages in a form,
refer to the [Field](/docs/components-forms-field--docs) and [Field Set](/docs/components-forms-field-set--docs) documentation.

Read the documentation by [NL Design System](https://www.nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen) and [Gov.uk](https://design-system.service.gov.uk/components/error-message/) for more information on the contents of error messages and when to show them.
`})),v,y,b=e((()=>{v={"error-message":{color:{$value:`{ams.color.feedback.error}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}}},y={ams:v}}));function x(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(r,{of:h}),`
`,(0,C.jsx)(c,{children:g}),`
`,(0,C.jsx)(t.h2,{id:`no-rich-text`,children:`No rich text`}),`
`,(0,C.jsxs)(t.p,{children:[`Do not use rich text (such as links or lists) in an Error Message.
Some screen readers, like VoiceOver, skip over rich text when reading out descriptions.
For more information, see `,(0,C.jsx)(t.a,{href:`https://nldesignsystem.nl/richtlijnen/formulieren/descriptions/inhoud/`,rel:`nofollow`,children:`NL Design System`}),`.`]}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(a,{}),`
`,(0,C.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(t.h3,{id:`custom-prefix`,children:`Custom prefix`}),`
`,(0,C.jsxs)(t.p,{children:[`Error messages are automatically prefixed with a visually hidden text, the Dutch word "Invoerfout".
This makes the error message more clear for screen reader users.
If you want to change this prefix, to support another language for example, you can use the `,(0,C.jsx)(t.code,{children:`prefix`}),` prop.`]}),`
`,(0,C.jsx)(s,{of:f}),`
`,(0,C.jsx)(t.h3,{id:`with-custom-icon`,children:`With custom icon`}),`
`,(0,C.jsx)(t.p,{children:`Replace the icon with another to use Error Message in a different theme or visual identity.
Websites for the City of Amsterdam must use the default icon.`}),`
`,(0,C.jsx)(s,{of:p}),`
`,(0,C.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(u,{tokens:y})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),d(),i(),m(),_(),b(),l()}))();export{S as default};