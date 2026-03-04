import{j as e}from"./iframe-77Z4eUX6.js";import{useMDXComponents as t}from"./index-BUzr1qXx.js";import{M as a,e as r,f as l,h as d,i as o}from"./blocks-BwZRJJ-R.js";import{a as c,V as h,H as m,N as p,I as u,D as x,b as f,c as b}from"./TextArea.stories-CC4YPIbF.js";import{D as v}from"./DesignTokensTable-KcEPP7zc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQHh2vXt.js";import"./exampleContent-B8t5xvDp.js";import"./BorderSample-CMyq3So1.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-vlmB_IkM.js";import"./ColorSample-cymTu7iM.js";import"./SpaceSample-QX3kW9A4.js";import"./TypographySample-BNAYVN_e.js";const $=`<!-- @license CC0-1.0 -->

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
`,y={"text-area":{"background-color":{$value:"{ams.inputs.background-color}",$type:"color"},"border-color":{$value:"{ams.inputs.border-color}",$type:"color"},"border-style":{$value:"{ams.inputs.border-style}",$extensions:{"nl.amsterdam.type":"borderStyle"}},"border-width":{$value:"{ams.inputs.border-width}",$extensions:{"nl.amsterdam.type":"borderWidth"}},color:{$value:"{ams.inputs.color}",$type:"color"},"font-family":{$value:"{ams.inputs.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.inputs.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"font-weight":{$value:"{ams.inputs.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.inputs.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}},"min-block-size":{$value:"calc({ams.typography.body-text.line-height} * 1em + 2 * {ams.text-area.padding-block})",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"outline-offset":{$value:"{ams.inputs.outline-offset}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-block":{$value:"{ams.inputs.padding-block}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-inline":{$value:"{ams.inputs.padding-inline}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},disabled:{color:{$value:"{ams.inputs.disabled.color}",$type:"color"},cursor:{$value:"{ams.cursor.disabled}"}},hover:{"box-shadow":{$value:"{ams.inputs.hover.box-shadow}"}},invalid:{"border-color":{$value:"{ams.inputs.invalid.border-color}",$type:"color"},hover:{"border-color":{$value:"{ams.inputs.invalid.hover.border-color}",$type:"color"},"box-shadow":{$value:"{ams.inputs.invalid.hover.box-shadow}"}}},placeholder:{color:{$value:"{ams.inputs.placeholder.color}",$type:"color"}}}},j={ams:y};function i(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...t(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(r,{children:$}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"vertical-resize",children:"Vertical resize"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"horizontal-resize",children:"Horizontal resize"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"no-resize",children:"No resize"}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(o,{of:u}),`
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
`,e.jsx(v,{tokens:j})]})}function R(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{R as default};
