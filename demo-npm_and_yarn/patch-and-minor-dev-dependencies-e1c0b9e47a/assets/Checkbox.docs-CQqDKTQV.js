import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-BrayXyei.js";import{r as n}from"./react-oCAR5XSR.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-CE0mU8to.js";import{n as l,t as u}from"./DesignTokensTable-C6pVlgHX.js";import{t as d}from"./mdx-react-shim-DojbLbVr.js";import{InAFieldSet as f,InAFieldSetWithValidation as p,LongLabel as m,WithCustomIcon as h,n as g,t as _}from"./Checkbox.stories-BvAsCv-1.js";var v,y=e((()=>{v=`<!-- @license CC0-1.0 -->

# Checkbox

Allows users to make a selection or agree to terms.

## Guidelines

- Checkboxes are used for one or multiple choices that do not exclude each other.
- Each checkbox operates independently of other checkboxes in a list at the same hierarchical level.
  Checking an additional checkbox does not affect other selections in that list.
- You can use a checkbox for bulk selection or deselection of an entire list of checkboxes.
  Still, it should be clear that the bulk selection checkbox is at a different hierarchical level than the list being fully selected or deselected.
- Use a group of checkboxes to filter data on a page, in a menu, or within a component.
- A checkbox can answer a closed question if multiple answers are possible.
- A list of checkboxes is vertically stacked to enhance readability and usability.
- A list of checkboxes should be in a \`fieldset\` with a \`legend\` describing what the list is about.
  For example, if the checkboxes are used to get answers to a question, the \`legend\` is the question.

## Checkbox labels

A label starts with a capital letter.
It does not have punctuation at the end if it is a single sentence, word, or fragment.
It is written in the first person when asking the user to agree to the terms and conditions.

## Relevant WCAG requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html): It is clear for both users and programmatically what the purpose of a form field is.

Checkbox is an interactive element, and the [general requirements and guidelines for interactivity](/docs/docs-developer-guide-interactivity--docs) apply.
`})),b,x,S=e((()=>{b={checkbox:{color:{$value:`{ams.color.text.default}`,$type:`color`},cursor:{$value:`{ams.cursor.interactive}`},"font-family":{$value:`{ams.typography.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$type:`fontWeight`},gap:{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$type:`dimension`},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},disabled:{cursor:{$value:`{ams.cursor.disabled}`},color:{$value:`{ams.color.interactive.disabled}`,$type:`color`}},hover:{color:{$value:`{ams.color.interactive.hover}`,$type:`color`},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`},"text-decoration-thickness":{$deprecated:"Use `ams.checkbox.text-decoration-thickness` instead. Will be removed in release 4.0.0.",$value:`{ams.border.width.m}`,$type:`dimension`}},"checked-indicator":{stroke:{$value:`{ams.color.interactive.inverse}`,$type:`color`}},"hover-indicator":{hover:{stroke:{$value:`{ams.color.interactive.hover}`,$type:`color`}},invalid:{hover:{stroke:{$value:`{ams.color.interactive.invalid.hover}`,$type:`color`}}}},"icon-container":{"block-size":{$value:`calc({ams.checkbox.font-size} * {ams.checkbox.line-height})`,$type:`dimension`},"inline-size":{$value:`{ams.checkbox.font-size}`,$type:`dimension`}},"indeterminate-indicator":{stroke:{$value:`{ams.color.interactive.inverse}`,$type:`color`}},rectangle:{fill:{$value:`{ams.color.background}`,$type:`color`},stroke:{$value:`{ams.color.interactive.default}`,$type:`color`},checked:{fill:{$value:`{ams.color.interactive.default}`,$type:`color`},disabled:{fill:{$value:`{ams.color.interactive.disabled}`,$type:`color`},hover:{fill:{$deprecated:`Will be removed in release 4.0.0.`,$value:`{ams.color.interactive.disabled}`,$type:`color`}}},hover:{fill:{$value:`{ams.color.interactive.hover}`,$type:`color`},"disabled-invalid":{fill:{$deprecated:`Will be removed in release 4.0.0.`,$value:`{ams.color.interactive.disabled}`,$type:`color`}}},invalid:{fill:{$value:`{ams.color.interactive.invalid.default}`,$type:`color`},hover:{fill:{$value:`{ams.color.interactive.invalid.hover}`,$type:`color`}}}},disabled:{stroke:{$value:`{ams.color.interactive.disabled}`,$type:`color`}},hover:{stroke:{$value:`{ams.color.interactive.hover}`,$type:`color`},"disabled-invalid":{stroke:{$deprecated:`Will be removed in release 4.0.0.`,$value:`{ams.color.interactive.disabled}`,$type:`color`}}},indeterminate:{fill:{$value:`{ams.color.interactive.default}`,$type:`color`},disabled:{fill:{$value:`{ams.color.interactive.disabled}`,$type:`color`},hover:{fill:{$deprecated:`Will be removed in release 4.0.0.`,$value:`{ams.color.interactive.disabled}`,$type:`color`}}},hover:{fill:{$value:`{ams.color.interactive.hover}`,$type:`color`},"disabled-invalid":{fill:{$deprecated:`Will be removed in release 4.0.0.`,$value:`{ams.color.interactive.disabled}`,$type:`color`}}},invalid:{fill:{$value:`{ams.color.interactive.invalid.default}`,$type:`color`},hover:{fill:{$value:`{ams.color.interactive.invalid.hover}`,$type:`color`}}}},invalid:{stroke:{$value:`{ams.color.interactive.invalid.default}`,$type:`color`},hover:{stroke:{$value:`{ams.color.interactive.invalid.hover}`,$type:`color`}}}}}},x={ams:b}}));function C(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(r,{of:_}),`
`,(0,T.jsx)(c,{children:v}),`
`,(0,T.jsx)(o,{}),`
`,(0,T.jsx)(a,{}),`
`,(0,T.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(t.h3,{id:`long-label`,children:`Long label`}),`
`,(0,T.jsx)(s,{of:m}),`
`,(0,T.jsx)(t.h3,{id:`in-a-field-set`,children:`In a Field Set`}),`
`,(0,T.jsx)(t.p,{children:`Use a Field Set to group several Checkboxes with a legend, description and / or an Error Message.`}),`
`,(0,T.jsxs)(t.p,{children:[`Because of an `,(0,T.jsx)(t.a,{href:`https://github.com/nvaccess/nvda/issues/12718`,rel:`nofollow`,children:`NVDA bug`}),`, we add the description text to the Field Set with `,(0,T.jsx)(t.code,{children:`aria-labelledby`}),`,
instead of `,(0,T.jsx)(t.code,{children:`aria-describedby`}),`.
Screen reader users will no longer be able to skip the description, but we think that is preferable to missing the description entirely.
The order of the `,(0,T.jsx)(t.code,{children:`id`}),`s is the order in which they are read by screen readers.`]}),`
`,(0,T.jsxs)(t.p,{children:[`If you don’t need the description, remove its Paragraph and the `,(0,T.jsx)(t.code,{children:`aria-labelledby`}),` and `,(0,T.jsx)(t.code,{children:`id`}),` attributes from the Field Set.`]}),`
`,(0,T.jsxs)(t.p,{children:[`Do not use rich text (such as links or lists) in descriptions. `,(0,T.jsx)(t.a,{href:`/docs/components-forms-field--docs#no-rich-text`,children:`Find out why`}),`.`]}),`
`,(0,T.jsxs)(t.p,{children:[`Check `,(0,T.jsx)(t.a,{href:`/docs/components-forms-field-set--docs`,children:`the Field Set docs`}),` for more information on configuring it.`]}),`
`,(0,T.jsx)(s,{of:f}),`
`,(0,T.jsx)(t.h3,{id:`in-a-field-set-with-validation`,children:`In a Field Set with validation`}),`
`,(0,T.jsxs)(t.p,{children:[`A Field Set with Checkboxes can become invalid.
In this case, connect an Error Message to the Field Set.
Because of `,(0,T.jsx)(t.a,{href:`https://github.com/nvaccess/nvda/issues/12718`,rel:`nofollow`,children:`the NVDA bug mentioned earlier`}),`,
we add the Error Message text to the label as well.
Add an `,(0,T.jsx)(t.code,{children:`aria-labelledby`}),` attribute to the Field Set and provide the `,(0,T.jsx)(t.code,{children:`id`}),` of Error Message as its value.
The order of the `,(0,T.jsx)(t.code,{children:`id`}),`s is the order in which they are read by screen readers.`]}),`
`,(0,T.jsxs)(t.p,{children:[`Do not use rich text (such as links or lists) in an Error Message. `,(0,T.jsx)(t.a,{href:`/docs/components-forms-error-message--docs#no-rich-text`,children:`Find out why`}),`.`]}),`
`,(0,T.jsxs)(t.p,{children:[`Check `,(0,T.jsx)(t.a,{href:`/docs/components-forms-field-set--docs`,children:`the Field Set docs`}),` for more information on configuring it.`]}),`
`,(0,T.jsx)(s,{of:p}),`
`,(0,T.jsx)(t.h3,{id:`with-custom-icon`,children:`With custom icon`}),`
`,(0,T.jsxs)(t.p,{children:[`Replace the icon with a custom version to use the Checkbox in a different theme or visual identity.
Use `,(0,T.jsx)(t.code,{children:`ams-checkbox__rectangle`}),`, `,(0,T.jsx)(t.code,{children:`ams-checkbox__hover-indicator`}),`, `,(0,T.jsx)(t.code,{children:`ams-checkbox__checked-indicator`}),`
and `,(0,T.jsx)(t.code,{children:`ams-checkbox__indeterminate-indicator`}),` classes in its SVG markup.
Websites for the City of Amsterdam must use the default icon.`]}),`
`,(0,T.jsx)(s,{of:h}),`
`,(0,T.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(u,{tokens:x})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),d(),i(),g(),y(),S(),l()}))();export{w as default};