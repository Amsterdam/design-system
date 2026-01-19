import{j as e}from"./iframe-Ds5hPfnj.js";import{useMDXComponents as t}from"./index-D8uEBF35.js";import{M as a,f as r,P as d,h as l,i as n}from"./blocks-D9na97cF.js";import{a as c,V as h,H as m,N as p,I as u,D as x,b as f,c as b}from"./TextArea.stories-BkmdQ43w.js";import{D as y}from"./DesignTokensTable-D-5V4mAw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-QkjnO30K.js";import"./exampleContent-Du2yH2Fl.js";import"./BorderSample-BNrnKrHa.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-CRNPoomG.js";import"./SpaceSample-CSG3Dgin.js";import"./TypographySample-BOzwJ_nI.js";const v=`<!-- @license CC0-1.0 -->

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
`,$={"text-area":{"background-color":{$value:"{ams.inputs.background-color}",$type:"color"},"border-color":{$value:"{ams.inputs.border-color}",$type:"color"},"border-style":{$value:"{ams.inputs.border-style}",$extensions:{"amsterdam.designsystem.type":"borderStyle"}},"border-width":{$value:"{ams.inputs.border-width}",$extensions:{"amsterdam.designsystem.type":"borderWidth"}},color:{$value:"{ams.inputs.color}",$type:"color"},"font-family":{$value:"{ams.inputs.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.inputs.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.inputs.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.inputs.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"min-block-size":{$value:"calc({ams.typography.body-text.line-height} * 1em + 2 * {ams.text-area.padding-block})",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"outline-offset":{$value:"{ams.inputs.outline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-block":{$value:"{ams.inputs.padding-block}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-inline":{$value:"{ams.inputs.padding-inline}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},disabled:{color:{$value:"{ams.inputs.disabled.color}",$type:"color"},cursor:{$value:"{ams.cursor.disabled}"}},hover:{"box-shadow":{$value:"{ams.inputs.hover.box-shadow}"}},invalid:{"border-color":{$value:"{ams.inputs.invalid.border-color}",$type:"color"},hover:{"border-color":{$value:"{ams.inputs.invalid.hover.border-color}",$type:"color"},"box-shadow":{$value:"{ams.inputs.invalid.hover.box-shadow}"}}},placeholder:{color:{$value:"{ams.inputs.placeholder.color}",$type:"color"}}}},g={ams:$};function i(o){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...t(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(r,{children:v}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"vertical-resize",children:"Vertical resize"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s.h3,{id:"horizontal-resize",children:"Horizontal resize"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(s.h3,{id:"no-resize",children:"No resize"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h4,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(s.p,{children:"Use a Field to group a Text Area with a Label, description and / or an Error Message."}),`
`,e.jsxs(s.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(s.code,{children:"aria-describedby"})," from the Text Input."]}),`
`,e.jsxs(s.p,{children:["Check ",e.jsx(s.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(s.h4,{id:"in-a-field-with-validation",children:"In a Field with validation"}),`
`,e.jsxs(s.p,{children:["If the Text Area can become invalid, add an Error Message and its ",e.jsx(s.code,{children:"id"})," to the ",e.jsx(s.code,{children:"aria-describedby"})," prop of the Text Area."]}),`
`,e.jsxs(s.p,{children:["Check ",e.jsx(s.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(s.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(y,{tokens:g})]})}function H(o={}){const{wrapper:s}={...t(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(i,{...o})}):i(o)}export{H as default};
