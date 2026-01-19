import{j as e}from"./iframe-Ds5hPfnj.js";import{useMDXComponents as o}from"./index-D8uEBF35.js";import{M as a,f as r,P as d,h as l,i as s}from"./blocks-D9na97cF.js";import{a as h,W as c,b as p,c as m,d as u,e as f}from"./FieldSet.stories-DG71iqv4.js";import{D as g}from"./DesignTokensTable-D-5V4mAw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-QkjnO30K.js";import"./exampleContent-Du2yH2Fl.js";import"./Hint-DkLaS5YN.js";import"./BorderSample-BNrnKrHa.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-CRNPoomG.js";import"./SpaceSample-CSG3Dgin.js";import"./TypographySample-BOzwJ_nI.js";const x=`<!-- @license CC0-1.0 -->

# Field Set

A component to group related form inputs.

## Guidelines

- Use Field Set when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single Field Set when asking for an address.
- Set \`optional\` to \`true\` if all inputs in a Field Set are not required.
- Use \`hint\` to show a custom hint text.
- There’s no need to add white space between the children of a Field Set. The component does this automatically.

## Relevant WCAG requirements

- [WCAG 1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html): Field Set labels the purpose of a group of inputs.

## References

- [Providing a description for groups of form controls using fieldset and legend elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H71)
`,y={"field-set":{child:{"margin-block-end":{$value:"{ams.space.xs}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}},"before-error-message":{"margin-block-end":{$value:"{ams.space.s}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}}},"before-field-or-field-set":{"margin-block-end":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}}},"between-fields-and-field-sets":{"margin-block-end":{$value:"{ams.space.l}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}}}},invalid:{"border-inline-start":{$value:"{ams.border.width.l} solid {ams.color.feedback.error}"},"padding-inline-start":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"amsterdam.designsystem.subtype":"space"}}},legend:{color:{$value:"{ams.color.text.default}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.heading.3.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.heading.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.heading.3.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},"text-wrap":{$value:"{ams.typography.heading.text-wrap}"},"in-fieldset":{"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"}}}}},j={ams:y};function i(t){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:h}),`
`,e.jsx(r,{children:x}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-description",children:"With description"}),`
`,e.jsxs(n.p,{children:[`A Field Set can have a description.
Make sure to connect this description to the Field Set or a specific input,
otherwise this won’t be read by a screen reader.
Add an `,e.jsx(n.code,{children:"aria-describedby"}),` attribute to the Field Set
and provide the `,e.jsx(n.code,{children:"id"})," of the describing element as its value."]}),`
`,e.jsxs(n.p,{children:["Do not use rich text (such as links or lists) in descriptions. ",e.jsx(n.a,{href:"/docs/components-forms-field--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"with-hint",children:"With Hint"}),`
`,e.jsxs(n.p,{children:[`A Field Set can indicate whether all of the inputs it contains are optional or required.
Make sure to add `,e.jsx(n.code,{children:"aria-required"})," to ",e.jsx("em",{children:"all"})," form elements in the Field Set when they are required."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"with-validation",children:"With Validation"}),`
`,e.jsxs(n.p,{children:[`A Field Set can indicate whether any of the inputs it contains has a validation error.
Use an `,e.jsx(n.a,{href:"/docs/components-forms-error-message--docs",children:"Error Message"}),` to describe the error.
Make sure to connect the Error Message to the correct input in the Field Set,
otherwise it won’t be read by a screen reader.
Add an `,e.jsx(n.code,{children:"aria-describedby"})," attribute to the input and provide the ",e.jsx(n.code,{children:"id"})," of Error Message as its value."]}),`
`,e.jsxs(n.p,{children:["Do not use rich text (such as links or lists) in an Error Message. ",e.jsx(n.a,{href:"/docs/components-forms-error-message--docs#no-rich-text",children:"Find out why"}),"."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"with-heading-in-legend",children:"With Heading in Legend"}),`
`,e.jsxs(n.p,{children:[`If the Field Set is the only content on the page, its Legend serves as the main heading as well.
Set `,e.jsx(n.code,{children:"legendIsPageHeading"})," to include an ",e.jsx(n.code,{children:"h1"})," element to reflect this."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"with-a-nested-field-set",children:"With a nested Field Set"}),`
`,e.jsxs(n.p,{children:[`A Field Set can be nested inside another Field Set.
Use the `,e.jsx(n.code,{children:"inFieldSet"})," prop to show the legend in a lighter style."]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(g,{tokens:j})]})}function q(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{q as default};
