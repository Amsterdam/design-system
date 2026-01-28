import{j as e}from"./iframe-CgT_rn2k.js";import{useMDXComponents as o}from"./index-DQbnsFnw.js";import{M as r,f as a,P as d,h as c,i}from"./blocks-lxuW4Khk.js";import{a as l,W as h,b as m,I as p}from"./Field.stories-BM1aaeuO.js";import{D as x}from"./DesignTokensTable-CmCYa4m4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-oKttLyh-.js";import"./exampleContent-Du2yH2Fl.js";import"./BorderSample-CkwM9uLl.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-D2L7qNPw.js";import"./SpaceSample-D5tNWEyJ.js";import"./TypographySample-BrsIPEbs.js";const u=`<!-- @license CC0-1.0 -->

# Field

Wraps a single input and its related elements. May indicate that the input has a validation error.

## Guidelines

- Only use Field to wrap a single input. Use [Field Set](/docs/components-forms-field-set--docs) to wrap multiple inputs.
- There’s no need to add white space between the children of a Field. The component does this automatically.
`,j={field:{child:{"margin-block-end":{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"before-error-message":{"margin-block-end":{$value:"{ams.space.s}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}}}},invalid:{"border-inline-start":{$value:"{ams.border.width.l} solid {ams.color.feedback.error}"},"padding-inline-start":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}}}}},f={ams:j};function t(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...o(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(r,{of:l}),`
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
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"with-validation",children:"With validation"}),`
`,e.jsxs(n.p,{children:[`A Field can indicate if the contained input has a validation error.
Use an `,e.jsx(n.a,{href:"/docs/components-forms-error-message--docs",children:"Error Message"}),` to describe the error.
Make sure to connect the Error Message to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(n.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(n.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsxs(n.p,{children:["Do not use rich text (such as links or lists) in an Error Message. ",e.jsx(n.a,{href:"/docs/components-forms-error-message--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"in-a-field-set",children:"In a Field Set"}),`
`,e.jsxs(n.p,{children:[`Fields can be nested inside a Field Set.
Use the `,e.jsx(n.code,{children:"inFieldSet"})," prop on the Labels of the Fields to show them in a lighter style."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(x,{tokens:f})]})}function A(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{A as default};
