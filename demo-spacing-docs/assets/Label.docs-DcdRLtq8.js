import{n as e}from"./chunk-DnJy8xQt.js";import{Bt as t}from"./iframe-DFGespqw.js";import{r as n}from"./react-B_Eq4Lxg.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-CJ1ltURr.js";import{n as l,t as u}from"./DesignTokensTable-Dxkw56F2.js";import{t as d}from"./mdx-react-shim-_nmSEW3T.js";import{InAFieldSet as f,Optional as p,WithHeading as m,WithHint as h,n as g,t as _}from"./Label.stories-BNpsS1l4.js";var v,y=e((()=>{v=`<!-- @license CC0-1.0 -->

# Label

Describes a form control.

## Guidelines

- Always associate a form element (such as an \`input\` or \`textarea\`) with a label.
- Set \`optional\` to \`true\` if the input is not required.
- Use \`hint\` to show a custom hint text.
`})),b,x,S=e((()=>{b={label:{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.heading.3.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.heading.3.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"text-wrap":{$value:`{ams.typography.heading.text-wrap}`,$extensions:{"nl.amsterdam.type":`textWrap`}},"in-fieldset":{"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}}}},x={ams:b}}));function C(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(r,{of:_}),`
`,(0,T.jsx)(c,{children:v}),`
`,(0,T.jsx)(o,{}),`
`,(0,T.jsx)(a,{}),`
`,(0,T.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(t.h3,{id:`optional`,children:`Optional`}),`
`,(0,T.jsxs)(t.p,{children:[`Use the `,(0,T.jsx)(t.code,{children:`optional`}),` prop to indicate that the user doesn’t need to fill in the field to submit the form.`]}),`
`,(0,T.jsx)(s,{of:p}),`
`,(0,T.jsx)(t.h3,{id:`with-hint`,children:`With hint`}),`
`,(0,T.jsxs)(t.p,{children:[`Use the `,(0,T.jsx)(t.code,{children:`hint`}),` prop to either customize the text for the optional property or provide another type of remark.`]}),`
`,(0,T.jsxs)(t.p,{children:[`Note: ensure the hint meets `,(0,T.jsx)(t.a,{href:`https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/`,rel:`nofollow`,children:`language level B1`}),`.
For the same reason, the default hint text in Dutch is ‘niet verplicht’, not ‘optioneel’.`]}),`
`,(0,T.jsx)(s,{of:h}),`
`,(0,T.jsx)(t.h3,{id:`with-heading`,children:`With Heading`}),`
`,(0,T.jsxs)(t.p,{children:[`If the parent Field is the only content on the page, its Label serves as the main heading as well.
Set `,(0,T.jsx)(t.code,{children:`isPageHeading`}),` to include an `,(0,T.jsx)(t.code,{children:`h1`}),` element to reflect this.`]}),`
`,(0,T.jsx)(s,{of:m}),`
`,(0,T.jsx)(t.h3,{id:`in-a-field-set`,children:`In a Field Set`}),`
`,(0,T.jsxs)(t.p,{children:[`When a Label is used in a Field inside a Field Set, use the `,(0,T.jsx)(t.code,{children:`inFieldSet`}),` prop to show it in a lighter style.`]}),`
`,(0,T.jsx)(s,{of:f}),`
`,(0,T.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(u,{tokens:x})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),d(),i(),g(),y(),S(),l()}))();export{w as default};