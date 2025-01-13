import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as s}from"./index-BAvqEBP-.js";import{ae as a,aq as r,ar as l,as as c,at as i}from"./index-DN5t4iaf.js";import{C as d,L as h,I as p,a as f}from"./Checkbox.stories-DzV9aFEo.js";import"./index-C9rmetsa.js";import"./index-D7uoVdV3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-b4P9THbr.js";import"../sb-preview/runtime.js";import"./index-D-OUEn-9.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index.esm-DAG4DwtI.js";import"./clsx-B-dksMZM.js";import"./index.esm-CKYHBquS.js";const m=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function o(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:d}),`
`,e.jsx(r,{children:m}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"long-label",children:"Long label"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"in-a-field-set",children:"In a Field Set"}),`
`,e.jsx(n.p,{children:"Use a Field Set to group several Checkboxes with a legend, description and / or an Error Message."}),`
`,e.jsxs(n.p,{children:["Because of an ",e.jsx(n.a,{href:"https://github.com/nvaccess/nvda/issues/12718",rel:"nofollow",children:"NVDA bug"}),", we add the description text to the Field Set with ",e.jsx(n.code,{children:"aria-labelledby"}),`,
instead of `,e.jsx(n.code,{children:"aria-describedby"}),"."]}),`
`,e.jsxs(n.p,{children:["If you don’t need the description, remove its Paragraph and the Paragraphs ",e.jsx(n.code,{children:"id"})," from the Field Set ",e.jsx(n.code,{children:"aria-labelledby"}),"."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field-set--docs",children:"the Field Set docs"})," for more information on configuring it."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"in-a-field-set-with-validation",children:"In a Field Set with validation"}),`
`,e.jsxs(n.p,{children:["If the Checkbox can become invalid, add an Error Message component and its ",e.jsx(n.code,{children:"id"})," to the ",e.jsx(n.code,{children:"aria-labelledby"})," attribute of the Field Set."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field-set--docs",children:"the Field Set docs"})," for more information on configuring it."]}),`
`,e.jsx(i,{of:f})]})}function q(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{q as default};
