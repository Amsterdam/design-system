import{j as e}from"./iframe-Bmrc2w1V.js";import{useMDXComponents as r}from"./index-WwlvaWsw.js";import{M as o,f as a,P as d,h as c,i as s}from"./blocks-YNuK5ii9.js";import{a as l,W as h,b as p,I as m}from"./Field.stories-BZmf29_b.js";import{D as x}from"./DesignTokensTable-BHYDyZRD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DPIRNYdQ.js";import"./exampleContent-Du2yH2Fl.js";import"./ColorSample-fwW8OQjW.js";const u=`<!-- @license CC0-1.0 -->

# Field

Wraps a single input and its related elements. May indicate that the input has a validation error.

## Guidelines

- Only use Field to wrap a single input. Use [Field Set](/docs/components-forms-field-set--docs) to wrap multiple inputs.
`,j={field:{gap:{$value:"{ams.space.s}",$type:"dimension"},invalid:{"border-inline-start":{$value:"{ams.border.width.l} solid {ams.color.feedback.error}",$type:"color"},"padding-inline-start":{$value:"{ams.space.m}",$type:"dimension"}}}},f={ams:j};function t(i){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...r(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(o,{of:l}),`
`,e.jsx(a,{children:u}),`
`,e.jsx(d,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-description",children:"With description"}),`
`,e.jsxs(n.p,{children:[`A Field can have a description.
Make sure to connect this description to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(n.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(n.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsx(n.h4,{id:"no-rich-text",children:"No rich text"}),`
`,e.jsxs(n.p,{children:[`Do not use rich text (such as links or lists) in descriptions.
Some screen readers, like VoiceOver, skip over rich text when reading out descriptions.
For more information, see `,e.jsx(n.a,{href:"https://nldesignsystem.nl/richtlijnen/formulieren/descriptions/inhoud/",rel:"nofollow",children:"NL Design System"}),"."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"with-validation",children:"With validation"}),`
`,e.jsxs(n.p,{children:[`A Field can indicate if the contained input has a validation error.
Use an `,e.jsx(n.a,{href:"/docs/components-forms-error-message--docs",children:"Error Message"}),` to describe the error.
Make sure to connect the Error Message to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(n.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(n.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsxs(n.p,{children:["Do not use rich text (such as links or lists) in an Error Message. ",e.jsx(n.a,{href:"/docs/components-forms-error-message--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"in-a-field-set",children:"In a Field Set"}),`
`,e.jsxs(n.p,{children:[`Fields can be nested inside a Field Set.
Use the `,e.jsx(n.code,{children:"inFieldSet"})," prop on the Labels of the Fields to show them in a lighter style."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(x,{tokens:f})]})}function E(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{E as default};
