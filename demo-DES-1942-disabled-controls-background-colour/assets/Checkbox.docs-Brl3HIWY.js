import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-DWfcufWc.js";import{a as p,i as m,n as h,o as g,r as _,s as v,t as y}from"./Checkbox.stories-VcKA9TEB.js";var b,x;function S(){return(S=e((()=>{b={checkbox:{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},cursor:{$value:`{ams.cursor.interactive}`,$extensions:{"nl.amsterdam.type":`cursor`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},disabled:{cursor:{$value:`{ams.cursor.disabled}`,$extensions:{"nl.amsterdam.type":`cursor`}},color:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}},hover:{color:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}},"checked-indicator":{stroke:{$value:`{ams.color.interactive.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},"hover-indicator":{hover:{stroke:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},invalid:{hover:{stroke:{$value:`{ams.color.interactive.invalid.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}},"icon-container":{"block-size":{$value:`calc({ams.checkbox.font-size} * {ams.checkbox.line-height})`,$extensions:{"nl.amsterdam.type":`dimension`}},"inline-size":{$value:`{ams.checkbox.font-size}`,$extensions:{"nl.amsterdam.type":`dimension`}}},"indeterminate-indicator":{stroke:{$value:`{ams.color.interactive.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},rectangle:{fill:{$value:`{ams.color.background.default}`,$extensions:{"nl.amsterdam.type":`color`}},stroke:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},checked:{fill:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},disabled:{fill:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}},hover:{fill:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},invalid:{fill:{$value:`{ams.color.interactive.invalid.default}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{fill:{$value:`{ams.color.interactive.invalid.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}},disabled:{fill:{$value:`{ams.inputs.disabled.background-color}`,$extensions:{"nl.amsterdam.type":`color`}},stroke:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}},hover:{stroke:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},indeterminate:{fill:{$value:`{ams.color.interactive.default}`,$extensions:{"nl.amsterdam.type":`color`}},disabled:{fill:{$value:`{ams.color.interactive.disabled}`,$extensions:{"nl.amsterdam.type":`color`}}},hover:{fill:{$value:`{ams.color.interactive.hover}`,$extensions:{"nl.amsterdam.type":`color`}}},invalid:{fill:{$value:`{ams.color.interactive.invalid.default}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{fill:{$value:`{ams.color.interactive.invalid.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}},invalid:{stroke:{$value:`{ams.color.interactive.invalid.default}`,$extensions:{"nl.amsterdam.type":`color`}},hover:{stroke:{$value:`{ams.color.interactive.invalid.hover}`,$extensions:{"nl.amsterdam.type":`color`}}}}}}},x={ams:b}})))()}function C(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(s,{of:y}),`
`,(0,T.jsx)(o,{}),`
`,(0,T.jsx)(t,{of:y}),`
`,(0,T.jsx)(n,{}),`
`,(0,T.jsx)(i,{}),`
`,(0,T.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,T.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,T.jsx)(r.p,{children:`Use Checkboxes for one or multiple choices that do not exclude each other.
Each Checkbox operates independently of other Checkboxes in a list at the same hierarchical level.
Checking an additional Checkbox does not affect other selections in that list.`}),`
`,(0,T.jsx)(r.p,{children:`Use a Checkbox to answer a closed question if multiple answers are possible.`}),`
`,(0,T.jsx)(r.p,{children:`Use a group of Checkboxes to filter data on a page, in a menu, or within a component.`}),`
`,(0,T.jsx)(r.p,{children:`A Checkbox can also be used for bulk selection or deselection of an entire list of Checkboxes.
Still, it should be clear that the bulk selection Checkbox is at a different hierarchical level than the list being fully selected or deselected.`}),`
`,(0,T.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,T.jsxs)(r.p,{children:[`Use a `,(0,T.jsx)(r.a,{href:`/docs/components-forms-radio--docs`,children:`Radio`}),` when a user can select only one option from a list.`]}),`
`,(0,T.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,T.jsx)(r.p,{children:`Wrap a list of Checkboxes in a Field Set with a legend describing what the list is about.
For example, if the Checkboxes are used to get answers to a question, the legend is the question.`}),`
`,(0,T.jsx)(r.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,T.jsx)(r.p,{children:`A label starts with a capital letter.
It does not have punctuation at the end if it is a single sentence, word, or fragment.
It is written in the first person when asking the user to agree to the terms and conditions.`}),`
`,(0,T.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(r.h3,{id:`long-label`,children:`Long label`}),`
`,(0,T.jsx)(a,{of:p}),`
`,(0,T.jsx)(r.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,T.jsxs)(r.p,{children:[`A disabled Checkbox fills its square to show it is unavailable.
Switch on `,(0,T.jsx)(r.code,{children:`checked`}),` or `,(0,T.jsx)(r.code,{children:`indeterminate`}),` to see that a selected disabled Checkbox keeps its darker fill, so the mark stays legible.`]}),`
`,(0,T.jsx)(a,{of:h}),`
`,(0,T.jsx)(r.h3,{id:`in-a-field-set`,children:`In a Field Set`}),`
`,(0,T.jsx)(r.p,{children:`Use a Field Set to group several Checkboxes with a legend, description and / or an Error Message.`}),`
`,(0,T.jsxs)(r.p,{children:[`Because of an `,(0,T.jsx)(r.a,{href:`https://github.com/nvaccess/nvda/issues/12718`,rel:`nofollow`,children:`NVDA bug`}),`, we add the description text to the Field Set with `,(0,T.jsx)(r.code,{children:`aria-labelledby`}),`,
instead of `,(0,T.jsx)(r.code,{children:`aria-describedby`}),`.
Screen reader users will no longer be able to skip the description, but we think that is preferable to missing the description entirely.
The order of the `,(0,T.jsx)(r.code,{children:`id`}),`s is the order in which they are read by screen readers.`]}),`
`,(0,T.jsxs)(r.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,T.jsx)(r.code,{children:`aria-labelledby`}),` and `,(0,T.jsx)(r.code,{children:`id`}),` attributes from the Field Set.`]}),`
`,(0,T.jsxs)(r.p,{children:[`Do not use rich text (such as links or lists) in descriptions. `,(0,T.jsx)(r.a,{href:`/docs/components-forms-field--docs#no-rich-text`,children:`Find out why`}),`.`]}),`
`,(0,T.jsxs)(r.p,{children:[`Check `,(0,T.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`the Field Set docs`}),` for more information on configuring it.`]}),`
`,(0,T.jsx)(a,{of:_}),`
`,(0,T.jsx)(r.h3,{id:`in-a-field-set-with-validation`,children:`In a Field Set with validation`}),`
`,(0,T.jsxs)(r.p,{children:[`A Field Set with Checkboxes can become invalid.
In this case, connect an Error Message to the Field Set.
Because of `,(0,T.jsx)(r.a,{href:`https://github.com/nvaccess/nvda/issues/12718`,rel:`nofollow`,children:`the NVDA bug mentioned earlier`}),`,
we add the Error Message text to the label as well.
Add an `,(0,T.jsx)(r.code,{children:`aria-labelledby`}),` attribute to the Field Set and provide the `,(0,T.jsx)(r.code,{children:`id`}),` of Error Message as its value.
The order of the `,(0,T.jsx)(r.code,{children:`id`}),`s is the order in which they are read by screen readers.`]}),`
`,(0,T.jsxs)(r.p,{children:[`Do not use rich text (such as links or lists) in an Error Message. `,(0,T.jsx)(r.a,{href:`/docs/components-forms-error-message--docs#no-rich-text`,children:`Find out why`}),`.`]}),`
`,(0,T.jsxs)(r.p,{children:[`Check `,(0,T.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`the Field Set docs`}),` for more information on configuring it.`]}),`
`,(0,T.jsx)(a,{of:m}),`
`,(0,T.jsx)(r.h3,{id:`with-custom-icon`,children:`With custom icon`}),`
`,(0,T.jsxs)(r.p,{children:[`Replace the icon with a custom version to use the Checkbox in a different theme or visual identity.
Use `,(0,T.jsx)(r.code,{children:`ams-checkbox__rectangle`}),`, `,(0,T.jsx)(r.code,{children:`ams-checkbox__hover-indicator`}),`, `,(0,T.jsx)(r.code,{children:`ams-checkbox__checked-indicator`}),`
and `,(0,T.jsx)(r.code,{children:`ams-checkbox__indeterminate-indicator`}),` classes in its SVG markup.
Websites for the City of Amsterdam must use the default icon.`]}),`
`,(0,T.jsx)(a,{of:g}),`
`,(0,T.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,T.jsx)(r.p,{children:`A list of Checkboxes is vertically stacked to enhance readability and usability.`}),`
`,(0,T.jsx)(r.p,{children:`The box is drawn as an SVG inside the label rather than by the browser, which is what makes a custom icon possible at all and keeps the control identical across browsers.
It carries a separate ring that appears on hover, so the box grows a halo instead of changing size or colour.`}),`
`,(0,T.jsx)(r.p,{children:`The box and the label sit in one line box that never breaks between them, and the label may wrap onto as many lines as it needs beside it.`}),`
`,(0,T.jsx)(r.p,{children:`Checked, indeterminate, invalid and disabled each change one thing: the fill, the mark inside, the outline colour, or the text colour.
The states can therefore combine — an invalid checked box, a disabled indeterminate one — without any pair of them fighting over the same property.`}),`
`,(0,T.jsx)(r.p,{children:`In forced colours mode the drawing is redone in system colours: the box takes the field colours, a selected one the active text colour, and a disabled one the greyed text colour.
The fills the tokens set are ignored there, so without this a checked box and an empty one would look the same.`}),`
`,(0,T.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,T.jsxs)(r.p,{children:[`A Checkbox renders a native `,(0,T.jsx)(r.code,{children:`input`}),` inside a `,(0,T.jsx)(r.code,{children:`label`}),`, so the whole label is the target and the browser supplies the role, the checked state and the keyboard behaviour.`]}),`
`,(0,T.jsx)(r.p,{children:`The input is not hidden away: it is reduced to no width, which keeps it focusable, announced, and submitted with the form.
Its focus ring is moved onto the label so the ring surrounds the box and its text rather than a control with no size.
Browsers without support for the modern focus rules show that ring for every focus, including a click, which is the safer way round.`}),`
`,(0,T.jsx)(r.p,{children:`The indeterminate state is a visual and programmatic state of the checkbox itself, not a third value.
A form submits it as unchecked, so a bulk-selection box in that state says something about the list below it and nothing about its own value.`}),`
`,(0,T.jsxs)(r.p,{children:[`The invalid styling responds to `,(0,T.jsx)(r.code,{children:`aria-invalid="true"`}),` and to the browser’s own `,(0,T.jsx)(r.code,{children:`:invalid`}),` state alike.`]}),`
`,(0,T.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,T.jsxs)(r.ul,{children:[`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.a,{href:`/docs/components-forms-radio--docs`,children:`Radio`}),` – when a user can select only one option from a list.`]}),`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` – groups several Checkboxes with a shared legend.`]}),`
`]}),`
`,(0,T.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(f,{tokens:x})]})}function w(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;function E(){return(E=e((()=>{T=c(),u(),r(),d(),S(),v()})))()}E();export{w as default};