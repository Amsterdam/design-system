import{j as e}from"./iframe-ARQpVmVY.js";import{useMDXComponents as r}from"./index-B8AJSYld.js";import{M as o,c as a,P as d,e as c,f as s}from"./blocks-BjkyrsWy.js";import{F as h,W as l,a as p}from"./Field.stories-COWeRZmH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-1NnVX0_R.js";import"./exampleContent-DRope23M.js";const m=`<!-- @license CC0-1.0 -->

# Field

Wraps a single input and its related elements. May indicate that the input has a validation error.

## Guidelines

- Only use Field to wrap a single input. Use [Field Set](/docs/components-forms-field-set--docs) to wrap multiple inputs.
`;/*@license CC0-1.0*/function t(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{of:h}),`
`,e.jsx(a,{children:m}),`
`,e.jsx(d,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-description",children:"With description"}),`
`,e.jsxs(n.p,{children:[`A Field can have a description.
Make sure to connect this description to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(n.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(n.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsxs(n.p,{children:[`Do not use rich text (such as links or lists) in descriptions.
Some screen readers, like VoiceOver, skip over rich text when reading out descriptions.
For more information, see `,e.jsx(n.a,{href:"https://nldesignsystem.nl/richtlijnen/formulieren/descriptions/inhoud/",rel:"nofollow",children:"NL Design System"}),"."]}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.h3,{id:"with-validation",children:"With validation"}),`
`,e.jsxs(n.p,{children:[`A Field can indicate if the contained input has a validation error.
Use an `,e.jsx(n.a,{href:"/docs/components-forms-error-message--docs",children:"Error Message"}),` to describe the error.
Make sure to connect the Error Message to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(n.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(n.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsxs(n.p,{children:[`Do not use rich text (such as links or lists) in an Error Message.
Some screen readers, like VoiceOver, skip over rich text when reading out descriptions.
For more information, see `,e.jsx(n.a,{href:"https://nldesignsystem.nl/richtlijnen/formulieren/descriptions/inhoud/",rel:"nofollow",children:"NL Design System"}),"."]}),`
`,e.jsx(s,{of:p})]})}function w(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{w as default};
