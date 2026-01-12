import{j as e}from"./iframe-CVHWAku5.js";import{useMDXComponents as t}from"./index-D82qsLYG.js";import{M as l,f as r,P as a,h as d,i as s}from"./blocks-De8HMR0p.js";import{a as c,G as m,I as h,D as p,b as u,c as f}from"./Select.stories-B1q6BNDu.js";import{D as v}from"./DesignTokensTable-C50YNnmD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CpOhRrvD.js";import"./BorderSample-mkA2fkcc.js";const x=`<!-- @license CC0-1.0 -->

# Select

A form control that allows users to select one or more options from a list.

## References

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
`,g={select:{"background-color":{$value:"{ams.inputs.background-color}",$type:"color"},"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='%23004699' fill-rule='evenodd' d='m16 25.757-16-16 2.91-2.9L16 19.937l13.09-13.08 2.91 2.9z'/></svg>")`},"background-position":{$value:"right {ams.space.m} center"},"border-color":{$value:"{ams.inputs.border-color}",$type:"color"},"border-style":{$value:"{ams.inputs.border-style}",$extensions:{"amsterdam.designsystem.type":"borderStyle"}},"border-width":{$value:"{ams.inputs.border-width}",$extensions:{"amsterdam.designsystem.type":"borderWidth"}},color:{$value:"{ams.inputs.color}",$type:"color"},"font-family":{$value:"{ams.inputs.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.inputs.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.inputs.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.inputs.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"outline-offset":{$value:"{ams.inputs.outline-offset}",$type:"dimension"},"padding-block":{$value:"{ams.inputs.padding-block}",$type:"dimension"},"padding-inline":{$value:"{ams.inputs.padding-inline} calc(2 * {ams.inputs.padding-inline} + 1em)",$type:"dimension"},disabled:{"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='%23767676' fill-rule='evenodd' d='m16 25.757-16-16 2.91-2.9L16 19.937l13.09-13.08 2.91 2.9z'/></svg>")`},color:{$value:"{ams.inputs.disabled.color}",$type:"color"},cursor:{$value:"{ams.cursor.disabled}"}},hover:{"box-shadow":{$value:"{ams.inputs.hover.box-shadow}"},"background-image":{$value:`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path fill='%23003677' fill-rule='evenodd' d='m16 25.757-16-16 2.91-2.9L16 19.937l13.09-13.08 2.91 2.9z'/></svg>")`}},invalid:{"border-color":{$value:"{ams.inputs.invalid.border-color}",$type:"color"},hover:{"border-color":{$value:"{ams.inputs.invalid.hover.border-color}",$type:"color"},"box-shadow":{$value:"{ams.inputs.invalid.hover.box-shadow}"}}},option:{disabled:{color:{$value:"{ams.color.interactive.disabled}",$type:"color"}}}}},b={ams:g};function i(n){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...t(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(l,{of:c}),`
`,e.jsx(r,{children:x}),`
`,e.jsx(a,{}),`
`,e.jsx(d,{}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(o.h3,{id:"multiple",children:"Multiple"}),`
`,e.jsxs(o.p,{children:[`Avoid adding functionality to allow selecting multiple options. Multi select is harder to use
on desktop as they require the user to hold down the `,e.jsx(o.code,{children:"Ctrl"})," or ",e.jsx(o.code,{children:"Cmd"}),` key while clicking on the options.
It is recommended to use checkboxes instead.`]}),`
`,e.jsx(o.h3,{id:"grouped",children:"Grouped"}),`
`,e.jsxs(o.p,{children:["Use the ",e.jsx(o.code,{children:"Select.Group"}),` component to group options.
The component requires a `,e.jsx(o.code,{children:"label"})," attribute."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(o.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(o.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(o.h3,{id:"in-a-field",children:"In a Field"}),`
`,e.jsx(o.p,{children:"Use a Field to group a Select with a Label, description and / or an Error Message."}),`
`,e.jsxs(o.p,{children:["If you don’t need the description, remove its Paragraph and the ",e.jsx(o.code,{children:"aria-describedby"})," from the Select."]}),`
`,e.jsxs(o.p,{children:["Check ",e.jsx(o.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(o.h3,{id:"in-a-field-with-validation",children:"In a Field with validation"}),`
`,e.jsxs(o.p,{children:["If the Select can become invalid, add an Error Message and its ",e.jsx(o.code,{children:"id"})," to the ",e.jsx(o.code,{children:"aria-describedby"})," attribute of the Select."]}),`
`,e.jsxs(o.p,{children:["Check ",e.jsx(o.a,{href:"/docs/components-forms-field--docs",children:"the Field docs"})," for more information on configuring it."]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(o.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(v,{tokens:b})]})}function S(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(i,{...n})}):i(n)}export{S as default};
