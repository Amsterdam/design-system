import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-DfR5stV9.js";import{r as n}from"./react-DpP64Bee.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-DUceMP7x.js";import{n as l,t as u}from"./DesignTokensTable-DLey2c5Z.js";import{t as d}from"./mdx-react-shim-C8mDzYxN.js";import{InAFieldSet as f,InAFieldSetWithValidation as p,WithCustomIcon as m,n as h,t as g}from"./Radio.stories-CeBWnN9m.js";var _,v=e((()=>{_=`<!-- @license CC0-1.0 -->

# Radio

Allows users to select one option from a list.

## Guidelines

- Do not assume that users will know how many options they can select based on the visual difference between Radios and Checkboxes alone.
  If needed, add a hint explaining this, for example, ‘Select one option’.
- Order Radios alphabetically by default.
  In some cases, it can be helpful to order them from most-to-least common options.
  For example, you could order options for ‘Where do you live?’ based on population size.
  However you should do this with extreme caution as it can reinforce bias.
  If in doubt, order alphabetically.
- Labels should be concise. Try to keep labels shorter than 4 words.
- Do not check a radio button initially.
  This prevents users from leaving the question unanswered.
  It also increases the chance of submitting a wrong answer.
- Use a [Checkbox](/docs/components-forms-checkbox--docs) when a user can select more than 1 option from a list.
`})),y,b,x=e((()=>{y={radio:{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"checked-indicator":{fill:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},disabled:{fill:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}},"disabled-invalid":{fill:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{fill:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}}},hover:{fill:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},invalid:{fill:{$value:`{ams.color.interactive.invalid.default}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{fill:{$value:`{ams.color.interactive.invalid.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}},"hover-indicator":{hover:{stroke:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},invalid:{hover:{stroke:{$value:`{ams.color.interactive.invalid.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}},circle:{fill:{$value:`{ams.color.background.default}`,$extensions:{"nl.amsterdam.type":`color`}},stroke:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},disabled:{stroke:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}},"disabled-invalid":{stroke:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{stroke:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}}},hover:{stroke:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},invalid:{stroke:{$value:`{ams.color.interactive.invalid.default}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{stroke:{$value:`{ams.color.interactive.invalid.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}},disabled:{color:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}},hover:{color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}},"icon-container":{"block-size":{$value:`calc({ams.radio.font-size} * {ams.radio.line-height})`,$extensions:{"nl.amsterdam.type":`dimension`}},"inline-size":{$value:`{ams.radio.font-size}`,$extensions:{"nl.amsterdam.type":`dimension`}}}}},b={ams:y}}));function S(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(r,{of:g}),`
`,(0,w.jsx)(c,{children:_}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(a,{}),`
`,(0,w.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(t.h3,{id:`in-a-field-set`,children:`In a Field Set`}),`
`,(0,w.jsx)(t.p,{children:`Use a Field Set to group several Radios with a legend, description and / or an Error Message.`}),`
`,(0,w.jsxs)(t.p,{children:[`Add `,(0,w.jsx)(t.code,{children:`role="radiogroup"`}),` to the Field Set to have it explicitly announced as a radio group (the default role is just ‘group’).
The ‘radio group’ role also allows using `,(0,w.jsx)(t.code,{children:`aria-required`}),` on Field Set; that isn’t allowed for the ‘group’ role.
Even so, always set `,(0,w.jsx)(t.code,{children:`aria-required`}),` on the individual Radios as well to ensure that screen readers can read it.`]}),`
`,(0,w.jsxs)(t.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,w.jsx)(t.code,{children:`aria-describedby`}),` from the Field Set.`]}),`
`,(0,w.jsxs)(t.p,{children:[`Check `,(0,w.jsx)(t.a,{href:`/docs/components-forms-field-set--docs`,children:`the Field Set docs`}),` for more information on configuring it.`]}),`
`,(0,w.jsx)(s,{of:f}),`
`,(0,w.jsx)(t.h3,{id:`in-a-field-set-with-validation`,children:`In a Field Set with validation`}),`
`,(0,w.jsxs)(t.p,{children:[`A Field Set with a Radio group can become invalid.
In this case, connect an Error Message to the Field Set.
Add an `,(0,w.jsx)(t.code,{children:`aria-describedby`}),` attribute to the Field Set and provide the `,(0,w.jsx)(t.code,{children:`id`}),` of Error Message as its value.`]}),`
`,(0,w.jsxs)(t.p,{children:[`Do not use rich text (such as links or lists) in an Error Message. `,(0,w.jsx)(t.a,{href:`/docs/components-forms-error-message--docs#no-rich-text`,children:`Find out why`}),`.`]}),`
`,(0,w.jsxs)(t.p,{children:[`Check `,(0,w.jsx)(t.a,{href:`/docs/components-forms-field-set--docs`,children:`the Field Set docs`}),` for more information on configuring it.`]}),`
`,(0,w.jsx)(s,{of:p}),`
`,(0,w.jsx)(t.h3,{id:`with-custom-icon`,children:`With custom icon`}),`
`,(0,w.jsxs)(t.p,{children:[`Replace the icon with a custom version to use the Radio in a different theme or visual identity.
Use `,(0,w.jsx)(t.code,{children:`ams-radio__circle`}),`, `,(0,w.jsx)(t.code,{children:`ams-radio__hover-indicator`}),` and `,(0,w.jsx)(t.code,{children:`ams-radio__checked-indicator`}),` classes in its SVG markup.
Websites for the City of Amsterdam must use the default icon.`]}),`
`,(0,w.jsx)(s,{of:m}),`
`,(0,w.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(u,{tokens:b})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),d(),i(),h(),v(),x(),l()}))();export{C as default};