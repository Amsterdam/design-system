import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{E as n,a as r,f as i,i as a,l as o,m as s,n as c,u as l}from"./blocks-D0DQfXZI.js";import{n as u,t as d}from"./DesignTokensTable-5dtFb42G.js";import{t as f}from"./mdx-react-shim-C93Nhy9P.js";import{InAFieldSet as p,InAFieldSetWithValidation as m,WithCustomIcon as h,n as g,t as _}from"./Radio.stories-CMCD2i31.js";var v,y,b=e((()=>{v={radio:{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"checked-indicator":{fill:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},disabled:{fill:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}},"disabled-invalid":{fill:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{fill:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}}},hover:{fill:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},invalid:{fill:{$value:`{ams.color.interactive.invalid.default}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{fill:{$value:`{ams.color.interactive.invalid.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}},"hover-indicator":{hover:{stroke:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},invalid:{hover:{stroke:{$value:`{ams.color.interactive.invalid.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}},circle:{fill:{$value:`{ams.color.background.default}`,$extensions:{"nl.amsterdam.type":`color`}},stroke:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},disabled:{stroke:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}},"disabled-invalid":{stroke:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{stroke:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}}},hover:{stroke:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},invalid:{stroke:{$value:`{ams.color.interactive.invalid.default}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{stroke:{$value:`{ams.color.interactive.invalid.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}},disabled:{color:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}},hover:{color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}},"icon-container":{"block-size":{$value:`calc({ams.radio.font-size} * {ams.radio.line-height})`,$extensions:{"nl.amsterdam.type":`dimension`}},"inline-size":{$value:`{ams.radio.font-size}`,$extensions:{"nl.amsterdam.type":`dimension`}}}}},y={ams:v}}));function x(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(o,{of:_}),`
`,(0,C.jsx)(i,{}),`
`,(0,C.jsx)(r,{of:_}),`
`,(0,C.jsx)(l,{}),`
`,(0,C.jsx)(a,{}),`
`,(0,C.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,C.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsx)(t.p,{children:`Use a Radio when the user must select exactly one option from a list.`}),`
`,(0,C.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,C.jsxs)(t.p,{children:[`Use a `,(0,C.jsx)(t.a,{href:`/docs/components-forms-checkbox--docs`,children:`Checkbox`}),` when a user can select more than 1 option from a list.`]}),`
`,(0,C.jsx)(t.p,{children:`Do not assume that users will know how many options they can select based on the visual difference between Radios and Checkboxes alone.
If needed, add a hint explaining this, for example, ‘Select one option’.`}),`
`,(0,C.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,C.jsx)(t.p,{children:`Order Radios alphabetically by default.
In some cases, it can be helpful to order them from most-to-least common options.
For example, you could order options for ‘Where do you live?’ based on population size.
However you should do this with extreme caution as it can reinforce bias.
If in doubt, order alphabetically.`}),`
`,(0,C.jsx)(t.p,{children:`Do not check a Radio initially.
This prevents users from leaving the question unanswered.
It also increases the chance of submitting a wrong answer.`}),`
`,(0,C.jsx)(t.p,{children:`Wrap a list of Radios in a Field Set so they share a legend and any description or Error Message.`}),`
`,(0,C.jsx)(t.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,C.jsx)(t.p,{children:`Labels should be concise.
Try to keep labels shorter than 4 words.`}),`
`,(0,C.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(t.h3,{id:`in-a-field-set`,children:`In a Field Set`}),`
`,(0,C.jsx)(t.p,{children:`Use a Field Set to group several Radios with a legend, description and / or an Error Message.`}),`
`,(0,C.jsxs)(t.p,{children:[`Add `,(0,C.jsx)(t.code,{children:`role="radiogroup"`}),` to the Field Set to have it explicitly announced as a radio group (the default role is just ‘group’).
The ‘radio group’ role also allows using `,(0,C.jsx)(t.code,{children:`aria-required`}),` on Field Set; that isn’t allowed for the ‘group’ role.
Even so, always set `,(0,C.jsx)(t.code,{children:`aria-required`}),` on the individual Radios as well to ensure that screen readers can read it.`]}),`
`,(0,C.jsxs)(t.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,C.jsx)(t.code,{children:`aria-describedby`}),` from the Field Set.`]}),`
`,(0,C.jsxs)(t.p,{children:[`Check `,(0,C.jsx)(t.a,{href:`/docs/components-forms-field-set--docs`,children:`the Field Set docs`}),` for more information on configuring it.`]}),`
`,(0,C.jsx)(c,{of:p}),`
`,(0,C.jsx)(t.h3,{id:`in-a-field-set-with-validation`,children:`In a Field Set with validation`}),`
`,(0,C.jsxs)(t.p,{children:[`A Field Set with a Radio group can become invalid.
In this case, connect an Error Message to the Field Set.
Add an `,(0,C.jsx)(t.code,{children:`aria-describedby`}),` attribute to the Field Set and provide the `,(0,C.jsx)(t.code,{children:`id`}),` of Error Message as its value.`]}),`
`,(0,C.jsxs)(t.p,{children:[`Do not use rich text (such as links or lists) in an Error Message. `,(0,C.jsx)(t.a,{href:`/docs/components-forms-error-message--docs#no-rich-text`,children:`Find out why`}),`.`]}),`
`,(0,C.jsxs)(t.p,{children:[`Check `,(0,C.jsx)(t.a,{href:`/docs/components-forms-field-set--docs`,children:`the Field Set docs`}),` for more information on configuring it.`]}),`
`,(0,C.jsx)(c,{of:m}),`
`,(0,C.jsx)(t.h3,{id:`with-custom-icon`,children:`With custom icon`}),`
`,(0,C.jsxs)(t.p,{children:[`Replace the icon with a custom version to use the Radio in a different theme or visual identity.
Use `,(0,C.jsx)(t.code,{children:`ams-radio__circle`}),`, `,(0,C.jsx)(t.code,{children:`ams-radio__hover-indicator`}),` and `,(0,C.jsx)(t.code,{children:`ams-radio__checked-indicator`}),` classes in its SVG markup.
Websites for the City of Amsterdam must use the default icon.`]}),`
`,(0,C.jsx)(c,{of:h}),`
`,(0,C.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`/docs/components-forms-checkbox--docs`,children:`Checkbox`}),` – when a user can select more than one option.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` – groups several Radios with a shared legend.`]}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(d,{tokens:y})]})}function S(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),f(),s(),g(),b(),u()}))();export{S as default};