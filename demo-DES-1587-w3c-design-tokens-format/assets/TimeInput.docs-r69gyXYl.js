import{j as e}from"./iframe-C5ecNl_V.js";import{useMDXComponents as t}from"./index-Yn57qL7G.js";import{M as a,f as r,P as d,h as l,i as o}from"./blocks-DUgbiV_s.js";import{a as c,I as h,D as m,b as p,c as u}from"./TimeInput.stories-DUkRnz7B.js";import{D as v}from"./DesignTokensTable-Cdn5cVe9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C03HJkHV.js";const x=`<!-- @license CC0-1.0 -->

# Time Input

Helps users enter time.

## Visual considerations

This component uses a native time input, which is styled differently in different browsers and operating systems.
Recreating the native functionality is quite difficult and prone to accessibility errors, which is why we’ve chosen not to do that.
This does mean that this component does not look identical on all browsers and operating systems.
`,f={"time-input":{"background-color":{$value:"{ams.inputs.background-color}",$type:"color"},"border-color":{$value:"{ams.inputs.border-color}",$type:"color"},"border-style":{$value:"{ams.inputs.border-style}",$extensions:{"ams.type":"borderStyle"}},"border-width":{$value:"{ams.inputs.border-width}",$extensions:{"ams.type":"borderWidth"}},color:{$value:"{ams.inputs.color}",$type:"color"},"font-family":{$value:"{ams.inputs.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.inputs.font-size}",$extensions:{"ams.type":"fontSize"}},"font-weight":{$value:"{ams.inputs.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.inputs.line-height}",$extensions:{"ams.type":"lineHeight"}},"outline-offset":{$value:"{ams.inputs.outline-offset}",$extensions:{"ams.type":"outlineOffset"}},"padding-block":{$value:"{ams.inputs.padding-block}",$extensions:{"ams.type":"paddingBlock"}},"padding-inline":{$value:"{ams.inputs.padding-inline}",$extensions:{"ams.type":"paddingInline"}},disabled:{color:{$value:"{ams.inputs.disabled.color}",$type:"color"},cursor:{$value:"{ams.cursor.disabled}",$extensions:{"ams.type":"cursor"}},"calendar-picker-indicator":{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='%23767676'><path d='M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 16 0zm.9 28v-2h-2v1.9A11.8 11.8 0 0 1 4.1 17H6v-2H4.1A11.8 11.8 0 0 1 15 4.1V6h2V4.1A11.8 11.8 0 0 1 27.9 15H26v2h1.9a11.9 11.9 0 0 1-11 11zm.1-13h4v2h-6V9h2v6z'/></svg>")`,$extensions:{"ams.type":"background"}}}},hover:{"box-shadow":{$value:"{ams.inputs.hover.box-shadow}",$extensions:{"ams.type":"boxShadow"}},"calendar-picker-indicator":{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='%23003677'><path d='M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 16 0zm.9 28v-2h-2v1.9A11.8 11.8 0 0 1 4.1 17H6v-2H4.1A11.8 11.8 0 0 1 15 4.1V6h2V4.1A11.8 11.8 0 0 1 27.9 15H26v2h1.9a11.9 11.9 0 0 1-11 11zm.1-13h4v2h-6V9h2v6z'/></svg>")`,$extensions:{"ams.type":"background"}}}},invalid:{"border-color":{$value:"{ams.inputs.invalid.border-color}",$type:"color"},hover:{"border-color":{$value:"{ams.inputs.invalid.hover.border-color}",$type:"color"},"box-shadow":{$value:"{ams.inputs.invalid.hover.box-shadow}",$extensions:{"ams.type":"boxShadow"}}}},"calendar-picker-indicator":{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='%23004699'><path d='M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 16 0zm.9 28v-2h-2v1.9A11.8 11.8 0 0 1 4.1 17H6v-2H4.1A11.8 11.8 0 0 1 15 4.1V6h2V4.1A11.8 11.8 0 0 1 27.9 15H26v2h1.9a11.9 11.9 0 0 1-11 11zm.1-13h4v2h-6V9h2v6z'/></svg>")`,$extensions:{"ams.type":"background"}},cursor:{$value:"{ams.cursor.interactive}",$extensions:{"ams.type":"cursor"}}}}},g={ams:f};function i(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...t(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(r,{children:x}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(n.p,{children:"Use a Field to group a Time Input with a Label, description and / or an Error Message."}),`
`,e.jsxs(n.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(n.code,{children:"aria-describedby"})," from the Time Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"in-a-field-with-validation",children:"In a Field with validation"}),`
`,e.jsxs(n.p,{children:["If the Time Input can become invalid, add an Error Message and its ",e.jsx(n.code,{children:"id"})," to the ",e.jsx(n.code,{children:"aria-describedby"})," attribute of the Time Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(v,{tokens:g})]})}function A(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{A as default};
