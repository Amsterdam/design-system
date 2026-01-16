import{j as e}from"./iframe-uxbocvhH.js";import{useMDXComponents as t}from"./index-DFMMLfX7.js";import{M as a,f as r,P as d,h as l,i}from"./blocks-BssHdGui.js";import{a as m,I as c,D as h,b as p,c as u}from"./TimeInput.stories-CRZJE4Y4.js";import{D as v}from"./DesignTokensTable-BUtJCWfB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DO8zuPcp.js";import"./BorderSample-B286f-of.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-CsY7mZ-z.js";import"./SpaceSample-CvPDXNsc.js";import"./TypographySample-B9OR55kX.js";const f=`<!-- @license CC0-1.0 -->

# Time Input

Helps users enter time.

## Visual considerations

This component uses a native time input, which is styled differently in different browsers and operating systems.
Recreating the native functionality is quite difficult and prone to accessibility errors, which is why we’ve chosen not to do that.
This does mean that this component does not look identical on all browsers and operating systems.
`,g={"time-input":{"background-color":{$value:"{ams.inputs.background-color}",$type:"color"},"border-color":{$value:"{ams.inputs.border-color}",$type:"color"},"border-style":{$value:"{ams.inputs.border-style}",$extensions:{"amsterdam.designsystem.type":"borderStyle"}},"border-width":{$value:"{ams.inputs.border-width}",$extensions:{"amsterdam.designsystem.type":"borderWidth"}},color:{$value:"{ams.inputs.color}",$type:"color"},"font-family":{$value:"{ams.inputs.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.inputs.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.inputs.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.inputs.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"outline-offset":{$value:"{ams.inputs.outline-offset}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-block":{$value:"{ams.inputs.padding-block}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"padding-inline":{$value:"{ams.inputs.padding-inline}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},disabled:{color:{$value:"{ams.inputs.disabled.color}",$type:"color"},cursor:{$value:"{ams.cursor.disabled}"},"calendar-picker-indicator":{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='%23767676'><path d='M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 16 0zm.9 28v-2h-2v1.9A11.8 11.8 0 0 1 4.1 17H6v-2H4.1A11.8 11.8 0 0 1 15 4.1V6h2V4.1A11.8 11.8 0 0 1 27.9 15H26v2h1.9a11.9 11.9 0 0 1-11 11zm.1-13h4v2h-6V9h2v6z'/></svg>")`}}},hover:{"box-shadow":{$value:"{ams.inputs.hover.box-shadow}"},"calendar-picker-indicator":{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='%23003677'><path d='M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 16 0zm.9 28v-2h-2v1.9A11.8 11.8 0 0 1 4.1 17H6v-2H4.1A11.8 11.8 0 0 1 15 4.1V6h2V4.1A11.8 11.8 0 0 1 27.9 15H26v2h1.9a11.9 11.9 0 0 1-11 11zm.1-13h4v2h-6V9h2v6z'/></svg>")`}}},invalid:{"border-color":{$value:"{ams.inputs.invalid.border-color}",$type:"color"},hover:{"border-color":{$value:"{ams.inputs.invalid.hover.border-color}",$type:"color"},"box-shadow":{$value:"{ams.inputs.invalid.hover.box-shadow}"}}},"calendar-picker-indicator":{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='%23004699'><path d='M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 16 0zm.9 28v-2h-2v1.9A11.8 11.8 0 0 1 4.1 17H6v-2H4.1A11.8 11.8 0 0 1 15 4.1V6h2V4.1A11.8 11.8 0 0 1 27.9 15H26v2h1.9a11.9 11.9 0 0 1-11 11zm.1-13h4v2h-6V9h2v6z'/></svg>")`},cursor:{$value:"{ams.cursor.interactive}"}}}},x={ams:g};function o(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...t(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:m}),`
`,e.jsx(r,{children:f}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(n.p,{children:"Use a Field to group a Time Input with a Label, description and / or an Error Message."}),`
`,e.jsxs(n.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(n.code,{children:"aria-describedby"})," from the Time Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"in-a-field-with-validation",children:"In a Field with validation"}),`
`,e.jsxs(n.p,{children:["If the Time Input can become invalid, add an Error Message and its ",e.jsx(n.code,{children:"id"})," to the ",e.jsx(n.code,{children:"aria-describedby"})," attribute of the Time Input."]}),`
`,e.jsxs(n.p,{children:["Check ",e.jsx(n.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(v,{tokens:x})]})}function T(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{T as default};
