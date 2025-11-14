import{j as e}from"./iframe-EkBBJOoa.js";import{useMDXComponents as o}from"./index-CSNhsIq-.js";import{M as r,f as a,P as c,h as d,i as s}from"./blocks-D26SfkwK.js";import{a as h,L as l,I as x,b as f,W as u}from"./Checkbox.stories-BxfoT4aK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKH2GyVu.js";const m=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function i(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:h}),`
`,e.jsx(a,{children:m}),`
`,e.jsx(c,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"long-label",children:"Long label"}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.h3,{id:"in-a-field-set",children:"In a Field Set"}),`
`,e.jsx(n.p,{children:"Use a Field Set to group several Checkboxes with a legend, description and / or an Error Message."}),`
`,e.jsxs(n.p,{children:["Because of an ",e.jsx(n.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"NVDA bug"}),", we add the description text to the Field Set with ",e.jsx(n.code,{children:"aria-labelledby"}),`,
instead of `,e.jsx(n.code,{children:"aria-describedby"}),`.
Screen reader users will no longer be able to skip the description, but we think that is preferable to missing the description entirely.
The order of the `,e.jsx(n.code,{children:"id"}),"s is the order in which they are read by screen readers."]}),`
`,e.jsxs(n.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(n.code,{children:"aria-labelledby"})," and ",e.jsx(n.code,{children:"id"})," attributes from the Field Set."]}),`
`,e.jsxs(n.p,{children:["Do not use rich text (such as links or lists) in descriptions. ",e.jsx(n.a,{href:"/docs/components-forms-field--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field-set--docs",children:"the Field Set docs"})," for more information on configuring it."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"in-a-field-set-with-validation",children:"In a Field Set with validation"}),`
`,e.jsxs(n.p,{children:[`A Field Set with Checkboxes can become invalid.
In this case, connect an Error Message to the Field Set.
Because of `,e.jsx(n.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"the NVDA bug mentioned earlier"}),`,
we add the Error Message text to the label as well.
Add an `,e.jsx(n.code,{children:"aria-labelledby"})," attribute to the Field Set and provide the ",e.jsx(n.code,{children:"id"}),` of Error Message as its value.
The order of the `,e.jsx(n.code,{children:"id"}),"s is the order in which they are read by screen readers."]}),`
`,e.jsxs(n.p,{children:["Do not use rich text (such as links or lists) in an Error Message. ",e.jsx(n.a,{href:"/docs/components-forms-error-message--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field-set--docs",children:"the Field Set docs"})," for more information on configuring it."]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"with-custom-icon",children:"With custom icon"}),`
`,e.jsxs(n.p,{children:[`Replace the icon with a custom version to use the Checkbox in a different theme or visual identity.
Use `,e.jsx(n.code,{children:"ams-checkbox__rectangle"}),", ",e.jsx(n.code,{children:"ams-checkbox__hover-indicator"}),", ",e.jsx(n.code,{children:"ams-checkbox__checked-indicator"}),`
and `,e.jsx(n.code,{children:"ams-checkbox__indeterminate-indicator"}),` classes in its SVG markup.
Applications for the City of Amsterdam must use the default icon.`]}),`
`,e.jsx(s,{of:u})]})}function y(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{y as default};
