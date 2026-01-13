import{j as e}from"./iframe-BlfSuYFp.js";import{useMDXComponents as s}from"./index-BGuuMXdz.js";import{M as a,f as r,P as l,h as c,i}from"./blocks-DY-qqUy5.js";import{a as d,L as h,I as m,b as u,W as p}from"./Checkbox.stories-CmaY3VyJ.js";import{D as f}from"./DesignTokensTable-DZl7SN6e.js";import"./preload-helper-PPVm8Dsz.js";import"./index-mWaaUyQY.js";import"./BorderSample-CyrGNfnJ.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample--wFmAxBN.js";import"./SpacingSample-pEbSTpNb.js";const v=`<!-- @license CC0-1.0 -->

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
`,x={checkbox:{color:{$value:"{ams.color.text.default}",$type:"color"},cursor:{$value:"{ams.cursor.interactive}"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},gap:{$value:"{ams.space.s}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"spacingSample"}},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"spacingSample"}},"text-decoration-thickness":{$value:"{ams.links.text-decoration-thickness}",$type:"dimension"},"text-underline-offset":{$value:"{ams.links.text-underline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"spacingSample"}},disabled:{cursor:{$value:"{ams.cursor.disabled}"},color:{$value:"{ams.color.interactive.disabled}",$type:"color"}},hover:{color:{$value:"{ams.color.interactive.hover}",$type:"color"},"text-decoration-line":{$value:"{ams.links.subtle.hover.text-decoration-line}"}},"checked-indicator":{stroke:{$value:"{ams.color.interactive.inverse}",$type:"color"}},"hover-indicator":{hover:{stroke:{$value:"{ams.color.interactive.hover}",$type:"color"}},invalid:{hover:{stroke:{$value:"{ams.color.interactive.invalid.hover}",$type:"color"}}}},"icon-container":{"block-size":{$value:"calc({ams.checkbox.font-size} * {ams.checkbox.line-height})",$type:"dimension"},"inline-size":{$value:"{ams.checkbox.font-size}",$type:"dimension"}},"indeterminate-indicator":{stroke:{$value:"{ams.color.interactive.inverse}",$type:"color"}},rectangle:{fill:{$value:"{ams.color.background}",$type:"color"},stroke:{$value:"{ams.color.interactive.default}",$type:"color"},checked:{fill:{$value:"{ams.color.interactive.default}",$type:"color"},disabled:{fill:{$value:"{ams.color.interactive.disabled}",$type:"color"}},hover:{fill:{$value:"{ams.color.interactive.hover}",$type:"color"}},invalid:{fill:{$value:"{ams.color.interactive.invalid.default}",$type:"color"},hover:{fill:{$value:"{ams.color.interactive.invalid.hover}",$type:"color"}}}},disabled:{stroke:{$value:"{ams.color.interactive.disabled}",$type:"color"}},hover:{stroke:{$value:"{ams.color.interactive.hover}",$type:"color"}},indeterminate:{fill:{$value:"{ams.color.interactive.default}",$type:"color"},disabled:{fill:{$value:"{ams.color.interactive.disabled}",$type:"color"}},hover:{fill:{$value:"{ams.color.interactive.hover}",$type:"color"}},invalid:{fill:{$value:"{ams.color.interactive.invalid.default}",$type:"color"},hover:{fill:{$value:"{ams.color.interactive.invalid.hover}",$type:"color"}}}},invalid:{stroke:{$value:"{ams.color.interactive.invalid.default}",$type:"color"},hover:{stroke:{$value:"{ams.color.interactive.invalid.hover}",$type:"color"}}}}}},b={ams:x};function n(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...s(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:d}),`
`,e.jsx(r,{children:v}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"long-label",children:"Long label"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(t.h3,{id:"in-a-field-set",children:"In a Field Set"}),`
`,e.jsx(t.p,{children:"Use a Field Set to group several Checkboxes with a legend, description and / or an Error Message."}),`
`,e.jsxs(t.p,{children:["Because of an ",e.jsx(t.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"NVDA bug"}),", we add the description text to the Field Set with ",e.jsx(t.code,{children:"aria-labelledby"}),`,
instead of `,e.jsx(t.code,{children:"aria-describedby"}),`.
Screen reader users will no longer be able to skip the description, but we think that is preferable to missing the description entirely.
The order of the `,e.jsx(t.code,{children:"id"}),"s is the order in which they are read by screen readers."]}),`
`,e.jsxs(t.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(t.code,{children:"aria-labelledby"})," and ",e.jsx(t.code,{children:"id"})," attributes from the Field Set."]}),`
`,e.jsxs(t.p,{children:["Do not use rich text (such as links or lists) in descriptions. ",e.jsx(t.a,{href:"/docs/components-forms-field--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsxs(t.p,{children:["Check ",e.jsx(t.a,{href:"/docs/components-forms-field-set--docs",children:"the Field Set docs"})," for more information on configuring it."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(t.h3,{id:"in-a-field-set-with-validation",children:"In a Field Set with validation"}),`
`,e.jsxs(t.p,{children:[`A Field Set with Checkboxes can become invalid.
In this case, connect an Error Message to the Field Set.
Because of `,e.jsx(t.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"the NVDA bug mentioned earlier"}),`,
we add the Error Message text to the label as well.
Add an `,e.jsx(t.code,{children:"aria-labelledby"})," attribute to the Field Set and provide the ",e.jsx(t.code,{children:"id"}),` of Error Message as its value.
The order of the `,e.jsx(t.code,{children:"id"}),"s is the order in which they are read by screen readers."]}),`
`,e.jsxs(t.p,{children:["Do not use rich text (such as links or lists) in an Error Message. ",e.jsx(t.a,{href:"/docs/components-forms-error-message--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsxs(t.p,{children:["Check ",e.jsx(t.a,{href:"/docs/components-forms-field-set--docs",children:"the Field Set docs"})," for more information on configuring it."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(t.h3,{id:"with-custom-icon",children:"With custom icon"}),`
`,e.jsxs(t.p,{children:[`Replace the icon with a custom version to use the Checkbox in a different theme or visual identity.
Use `,e.jsx(t.code,{children:"ams-checkbox__rectangle"}),", ",e.jsx(t.code,{children:"ams-checkbox__hover-indicator"}),", ",e.jsx(t.code,{children:"ams-checkbox__checked-indicator"}),`
and `,e.jsx(t.code,{children:"ams-checkbox__indeterminate-indicator"}),` classes in its SVG markup.
Websites for the City of Amsterdam must use the default icon.`]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(f,{tokens:b})]})}function I(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{I as default};
