import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-Bbrs_2h_.js";import{a as p,i as m,n as h,r as g,t as _}from"./Radio.stories-BGESsNrB.js";var v,y;function b(){return(b=e((()=>{v={radio:{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"checked-indicator":{fill:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},disabled:{fill:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}},"disabled-invalid":{fill:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{fill:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}}},hover:{fill:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},invalid:{fill:{$value:`{ams.color.interactive.invalid.default}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{fill:{$value:`{ams.color.interactive.invalid.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}},"hover-indicator":{hover:{stroke:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},invalid:{hover:{stroke:{$value:`{ams.color.interactive.invalid.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}},circle:{fill:{$value:`{ams.color.background.default}`,$extensions:{"nl.amsterdam.type":`color`}},stroke:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},disabled:{stroke:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}},"disabled-invalid":{stroke:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{stroke:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}}},hover:{stroke:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},invalid:{stroke:{$value:`{ams.color.interactive.invalid.default}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{stroke:{$value:`{ams.color.interactive.invalid.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}},disabled:{color:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}}},hover:{color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}},"icon-container":{"block-size":{$value:`calc({ams.radio.font-size} * {ams.radio.line-height})`,$extensions:{"nl.amsterdam.type":`dimension`}},"inline-size":{$value:`{ams.radio.font-size}`,$extensions:{"nl.amsterdam.type":`dimension`}}}}},y={ams:v}})))()}function x(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(s,{of:g}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(t,{of:g}),`
`,(0,C.jsx)(n,{}),`
`,(0,C.jsx)(i,{}),`
`,(0,C.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,C.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsx)(r.p,{children:`Use a Radio when the user must select exactly one option from a list.`}),`
`,(0,C.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,C.jsxs)(r.p,{children:[`Use a `,(0,C.jsx)(r.a,{href:`/docs/components-forms-checkbox--docs`,children:`Checkbox`}),` when a user can select more than 1 option from a list.`]}),`
`,(0,C.jsx)(r.p,{children:`Do not assume that users will know how many options they can select based on the visual difference between Radios and Checkboxes alone.
If needed, add a hint explaining this, for example, ‘Select one option’.`}),`
`,(0,C.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,C.jsx)(r.p,{children:`Order Radios alphabetically by default.
In some cases, it can be helpful to order them from most-to-least common options.
For example, you could order options for ‘Where do you live?’ based on population size.
However you should do this with extreme caution as it can reinforce bias.
If in doubt, order alphabetically.`}),`
`,(0,C.jsx)(r.p,{children:`Do not check a Radio initially.
This prevents users from leaving the question unanswered.
It also increases the chance of submitting a wrong answer.`}),`
`,(0,C.jsx)(r.p,{children:`Wrap a list of Radios in a Field Set so they share a legend and any description or Error Message.`}),`
`,(0,C.jsxs)(r.p,{children:[`When a group of Radios fails validation, set `,(0,C.jsx)(r.code,{children:`invalid`}),` on every Radio in it.
The group as a whole lacks a valid answer; no single option is at fault.`]}),`
`,(0,C.jsx)(r.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,C.jsx)(r.p,{children:`Labels should be concise.
Try to keep labels shorter than 4 words.`}),`
`,(0,C.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(r.h3,{id:`in-a-field-set`,children:`In a Field Set`}),`
`,(0,C.jsx)(r.p,{children:`Use a Field Set to group several Radios with a legend, description and / or an Error Message.`}),`
`,(0,C.jsxs)(r.p,{children:[`Add `,(0,C.jsx)(r.code,{children:`role="radiogroup"`}),` to the Field Set to have it explicitly announced as a radio group (the default role is just ‘group’).
The ‘radio group’ role also allows using `,(0,C.jsx)(r.code,{children:`aria-required`}),` on Field Set; that isn’t allowed for the ‘group’ role.
Even so, always set `,(0,C.jsx)(r.code,{children:`aria-required`}),` on the individual Radios as well to ensure that screen readers can read it.`]}),`
`,(0,C.jsxs)(r.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,C.jsx)(r.code,{children:`aria-describedby`}),` from the Field Set.`]}),`
`,(0,C.jsxs)(r.p,{children:[`Check `,(0,C.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`the Field Set docs`}),` for more information on configuring it.`]}),`
`,(0,C.jsx)(a,{of:_}),`
`,(0,C.jsx)(r.h3,{id:`in-a-field-set-with-validation`,children:`In a Field Set with validation`}),`
`,(0,C.jsxs)(r.p,{children:[`A Field Set with a Radio group can become invalid.
In this case, connect an Error Message to the Field Set.
Add an `,(0,C.jsx)(r.code,{children:`aria-describedby`}),` attribute to the Field Set and provide the `,(0,C.jsx)(r.code,{children:`id`}),` of Error Message as its value.`]}),`
`,(0,C.jsxs)(r.p,{children:[`Do not use rich text (such as links or lists) in an Error Message. `,(0,C.jsx)(r.a,{href:`/docs/components-forms-error-message--docs#no-rich-text`,children:`Find out why`}),`.`]}),`
`,(0,C.jsxs)(r.p,{children:[`Check `,(0,C.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`the Field Set docs`}),` for more information on configuring it.`]}),`
`,(0,C.jsx)(a,{of:h}),`
`,(0,C.jsx)(r.h3,{id:`with-custom-icon`,children:`With custom icon`}),`
`,(0,C.jsxs)(r.p,{children:[`Replace the icon with a custom version to use the Radio in a different theme or visual identity.
Use `,(0,C.jsx)(r.code,{children:`ams-radio__circle`}),`, `,(0,C.jsx)(r.code,{children:`ams-radio__hover-indicator`}),` and `,(0,C.jsx)(r.code,{children:`ams-radio__checked-indicator`}),` classes in its SVG markup.
Websites for the City of Amsterdam must use the default icon.`]}),`
`,(0,C.jsx)(a,{of:m}),`
`,(0,C.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,C.jsx)(r.p,{children:`The circle is drawn as an SVG inside the label rather than by the browser, which is what makes a custom icon possible at all and keeps the control identical across browsers.
It carries a separate ring that appears on hover, so the circle grows a halo instead of changing size or colour.`}),`
`,(0,C.jsxs)(r.p,{children:[`A Radio is round and a `,(0,C.jsx)(r.a,{href:`/docs/components-forms-checkbox--docs`,children:`Checkbox`}),` is square, which is the only thing distinguishing one from the other at a glance.
That difference is easy to miss, which is why ‘When not to use’ asks for a hint saying how many options may be chosen rather than trusting the shape to say it.`]}),`
`,(0,C.jsx)(r.p,{children:`In forced colours mode the drawing is redone in system colours, since the fills the tokens set are ignored there.`}),`
`,(0,C.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsxs)(r.p,{children:[`A Radio renders a native `,(0,C.jsx)(r.code,{children:`input`}),` inside a `,(0,C.jsx)(r.code,{children:`label`}),`, so the whole label is the target and the browser supplies the role, the checked state, and the arrow-key behaviour that moves between the options of a group.`]}),`
`,(0,C.jsx)(r.p,{children:`The input is not hidden away: it is reduced to no width, which keeps it focusable, announced, and submitted with the form.
Its focus ring is moved onto the label so the ring surrounds the circle and its text rather than a control with no size.`}),`
`,(0,C.jsxs)(r.p,{children:[`A group of Radios takes one stop in the tab order, and the arrow keys move within it.
That is browser behaviour tied to the shared `,(0,C.jsx)(r.code,{children:`name`}),`, so give every Radio in a group the same one.`]}),`
`,(0,C.jsx)(r.p,{children:`Marking every Radio in a failed group as invalid — as ‘How to use’ asks — is what puts the state on each option a screen reader reaches, since the group itself is only announced once.`}),`
`,(0,C.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(r.ul,{children:[`
`,(0,C.jsxs)(r.li,{children:[(0,C.jsx)(r.a,{href:`/docs/components-forms-checkbox--docs`,children:`Checkbox`}),` – when a user can select more than one option.`]}),`
`,(0,C.jsxs)(r.li,{children:[(0,C.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` – groups several Radios with a shared legend.`]}),`
`]}),`
`,(0,C.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(f,{tokens:y})]})}function S(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=c(),u(),r(),d(),b(),p()})))()}w();export{S as default};