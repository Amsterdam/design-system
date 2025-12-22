import{j as e}from"./iframe-CXEcHPCS.js";import{useMDXComponents as a}from"./index-DKi0kqzi.js";import{M as r,f as t,P as l,h as d,i as o}from"./blocks-DRNchBCZ.js";import{a as h,V as c,H as m,N as u,I as p,D as x,b as f,c as b}from"./TextArea.stories-DA7-na6u.js";import{D as v}from"./DesignTokensTable-iIScG0Gu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DOSOlYin.js";import"./exampleContent-Du2yH2Fl.js";const j=`<!-- @license CC0-1.0 -->

# TextArea

A form field that allows the user to input text over multiple lines.

## Guidelines

- Use a TextArea when users need to enter more than 1 sentence of text, such as a comment or description.
- The height of the TextArea should be appropriate for the information to be entered.
- A TextArea must have a label, and in most cases, this label should be visible.
- Use \`spellcheck="false"\` for fields that may contain sensitive information, such as passwords and personal data.
  Some browser extensions for spell-checking send this information to external servers.

## Accessibility

- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/Techniques/html/H91.html) requires that the TextArea has a label or title attribute.
`,g={"text-area":{"background-color":{value:"{ams.inputs.background-color}"},"border-color":{value:"{ams.inputs.border-color}"},"border-style":{value:"{ams.inputs.border-style}"},"border-width":{value:"{ams.inputs.border-width}"},color:{value:"{ams.inputs.color}"},"font-family":{value:"{ams.inputs.font-family}"},"font-size":{value:"{ams.inputs.font-size}"},"font-weight":{value:"{ams.inputs.font-weight}"},"line-height":{value:"{ams.inputs.line-height}"},"min-block-size":{value:"calc({ams.typography.body-text.line-height} * 1em + 2 * {ams.text-area.padding-block})"},"outline-offset":{value:"{ams.inputs.outline-offset}"},"padding-block":{value:"{ams.inputs.padding-block}"},"padding-inline":{value:"{ams.inputs.padding-inline}"},disabled:{color:{value:"{ams.inputs.disabled.color}"},cursor:{value:"{ams.cursor.disabled}"}},hover:{"box-shadow":{value:"{ams.inputs.hover.box-shadow}"}},invalid:{"border-color":{value:"{ams.inputs.invalid.border-color}"},hover:{"border-color":{value:"{ams.inputs.invalid.hover.border-color}"},"box-shadow":{value:"{ams.inputs.invalid.hover.box-shadow}"}}},placeholder:{color:{value:"{ams.inputs.placeholder.color}"}}}},w={ams:g};function i(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...a(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(r,{of:h}),`
`,e.jsx(t,{children:j}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"vertical-resize",children:"Vertical resize"}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.h3,{id:"horizontal-resize",children:"Horizontal resize"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"no-resize",children:"No resize"}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h4,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(n.p,{children:"Use a Field to group a Text Area with a Label, description and / or an Error Message."}),`
`,e.jsxs(n.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(n.code,{children:"aria-describedby"})," from the Text Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(o,{of:f}),`
`,e.jsx(n.h4,{id:"in-a-field-with-validation",children:"In a Field with validation"}),`
`,e.jsxs(n.p,{children:["If the Text Area can become invalid, add an Error Message and its ",e.jsx(n.code,{children:"id"})," to the ",e.jsx(n.code,{children:"aria-describedby"})," prop of the Text Area."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(v,{tokens:w})]})}function D(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{D as default};
