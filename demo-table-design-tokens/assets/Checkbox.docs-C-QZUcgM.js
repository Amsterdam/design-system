import{j as e}from"./iframe-CXEcHPCS.js";import{useMDXComponents as s}from"./index-DKi0kqzi.js";import{M as a,f as r,P as l,h as c,i as o}from"./blocks-DRNchBCZ.js";import{a as d,L as h,I as u,b as v,W as f}from"./Checkbox.stories-Co3cDs6j.js";import{D as m}from"./DesignTokensTable-iIScG0Gu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DOSOlYin.js";const x=`<!-- @license CC0-1.0 -->

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
`,b={checkbox:{color:{value:"{ams.color.text.default}"},cursor:{value:"{ams.cursor.interactive}"},"font-family":{value:"{ams.typography.font-family}"},"font-size":{value:"{ams.typography.body-text.font-size}"},"font-weight":{value:"{ams.typography.body-text.font-weight}"},gap:{value:"{ams.space.s}"},"line-height":{value:"{ams.typography.body-text.line-height}"},"outline-offset":{value:"{ams.focus.outline-offset}"},"text-decoration-thickness":{value:"{ams.links.text-decoration-thickness}"},"text-underline-offset":{value:"{ams.links.text-underline-offset}"},disabled:{cursor:{value:"{ams.cursor.disabled}"},color:{value:"{ams.color.interactive.disabled}"}},hover:{color:{value:"{ams.color.interactive.hover}"},"text-decoration-line":{value:"{ams.links.subtle.hover.text-decoration-line}"}},"checked-indicator":{stroke:{value:"{ams.color.interactive.inverse}"}},"hover-indicator":{hover:{stroke:{value:"{ams.color.interactive.hover}"}},invalid:{hover:{stroke:{value:"{ams.color.interactive.invalid.hover}"}}}},"icon-container":{"block-size":{value:"calc({ams.checkbox.font-size} * {ams.checkbox.line-height})"},"inline-size":{value:"{ams.checkbox.font-size}"}},"indeterminate-indicator":{stroke:{value:"{ams.color.interactive.inverse}"}},rectangle:{fill:{value:"{ams.color.background}"},stroke:{value:"{ams.color.interactive.default}"},checked:{fill:{value:"{ams.color.interactive.default}"},disabled:{fill:{value:"{ams.color.interactive.disabled}"}},hover:{fill:{value:"{ams.color.interactive.hover}"}},invalid:{fill:{value:"{ams.color.interactive.invalid.default}"},hover:{fill:{value:"{ams.color.interactive.invalid.hover}"}}}},disabled:{stroke:{value:"{ams.color.interactive.disabled}"}},hover:{stroke:{value:"{ams.color.interactive.hover}"}},indeterminate:{fill:{value:"{ams.color.interactive.default}"},disabled:{fill:{value:"{ams.color.interactive.disabled}"}},hover:{fill:{value:"{ams.color.interactive.hover}"}},invalid:{fill:{value:"{ams.color.interactive.invalid.default}"},hover:{fill:{value:"{ams.color.interactive.invalid.hover}"}}}},invalid:{stroke:{value:"{ams.color.interactive.invalid.default}"},hover:{stroke:{value:"{ams.color.interactive.invalid.hover}"}}}}}},p={ams:b};function n(i){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...s(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:d}),`
`,e.jsx(r,{children:x}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"long-label",children:"Long label"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(t.h3,{id:"in-a-field-set",children:"In a Field Set"}),`
`,e.jsx(t.p,{children:"Use a Field Set to group several Checkboxes with a legend, description and / or an Error Message."}),`
`,e.jsxs(t.p,{children:["Because of an ",e.jsx(t.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"NVDA bug"}),", we add the description text to the Field Set with ",e.jsx(t.code,{children:"aria-labelledby"}),`,
instead of `,e.jsx(t.code,{children:"aria-describedby"}),`.
Screen reader users will no longer be able to skip the description, but we think that is preferable to missing the description entirely.
The order of the `,e.jsx(t.code,{children:"id"}),"s is the order in which they are read by screen readers."]}),`
`,e.jsxs(t.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(t.code,{children:"aria-labelledby"})," and ",e.jsx(t.code,{children:"id"})," attributes from the Field Set."]}),`
`,e.jsxs(t.p,{children:["Do not use rich text (such as links or lists) in descriptions. ",e.jsx(t.a,{href:"/docs/components-forms-field--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsxs(t.p,{children:["Check ",e.jsx(t.a,{href:"/docs/components-forms-field-set--docs",children:"the Field Set docs"})," for more information on configuring it."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(t.h3,{id:"in-a-field-set-with-validation",children:"In a Field Set with validation"}),`
`,e.jsxs(t.p,{children:[`A Field Set with Checkboxes can become invalid.
In this case, connect an Error Message to the Field Set.
Because of `,e.jsx(t.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"the NVDA bug mentioned earlier"}),`,
we add the Error Message text to the label as well.
Add an `,e.jsx(t.code,{children:"aria-labelledby"})," attribute to the Field Set and provide the ",e.jsx(t.code,{children:"id"}),` of Error Message as its value.
The order of the `,e.jsx(t.code,{children:"id"}),"s is the order in which they are read by screen readers."]}),`
`,e.jsxs(t.p,{children:["Do not use rich text (such as links or lists) in an Error Message. ",e.jsx(t.a,{href:"/docs/components-forms-error-message--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsxs(t.p,{children:["Check ",e.jsx(t.a,{href:"/docs/components-forms-field-set--docs",children:"the Field Set docs"})," for more information on configuring it."]}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(t.h3,{id:"with-custom-icon",children:"With custom icon"}),`
`,e.jsxs(t.p,{children:[`Replace the icon with a custom version to use the Checkbox in a different theme or visual identity.
Use `,e.jsx(t.code,{children:"ams-checkbox__rectangle"}),", ",e.jsx(t.code,{children:"ams-checkbox__hover-indicator"}),", ",e.jsx(t.code,{children:"ams-checkbox__checked-indicator"}),`
and `,e.jsx(t.code,{children:"ams-checkbox__indeterminate-indicator"}),` classes in its SVG markup.
Websites for the City of Amsterdam must use the default icon.`]}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(m,{tokens:p})]})}function F(i={}){const{wrapper:t}={...s(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{F as default};
