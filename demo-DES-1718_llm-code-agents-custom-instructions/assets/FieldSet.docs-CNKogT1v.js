import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-GmyBfqKJ.js";import{r as n}from"./react-RY8N8R-x.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-BMurOIz2.js";import{n as l,t as u}from"./DesignTokensTable-DuQFSEjW.js";import{t as d}from"./mdx-react-shim-ynubY8I9.js";import{WithANestedFieldSet as f,WithDescription as p,WithHeadingInLegend as m,WithHint as h,WithValidation as g,n as _,t as v}from"./FieldSet.stories-Drb6ZzTw.js";var y,b=e((()=>{y=`<!-- @license CC0-1.0 -->

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
`})),x,S,C=e((()=>{x={"field-set":{child:{"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"before-error-message":{"margin-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"before-field-or-field-set":{"margin-block-end":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"between-fields-and-field-sets":{"margin-block-end":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},invalid:{"border-inline-start":{$value:`{ams.border.width.l} solid {ams.color.feedback.error}`,$extensions:{"nl.amsterdam.type":`border`}},"padding-inline-start":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},legend:{"margin-block-end":{$deprecated:"Whitespace is now applied through the `ams.field-set.child.*` tokens. Will be removed on or after 2026-07-09.",$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.heading.3.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.heading.3.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"text-wrap":{$value:`{ams.typography.heading.text-wrap}`,$extensions:{"nl.amsterdam.type":`textWrap`}},"in-fieldset":{"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}}}}},S={ams:x}}));function w(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,...n(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[`
`,`
`,`
`,`
`,(0,E.jsx)(r,{of:v}),`
`,(0,E.jsx)(c,{children:y}),`
`,(0,E.jsx)(o,{}),`
`,(0,E.jsx)(a,{}),`
`,(0,E.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,E.jsx)(t.h3,{id:`with-description`,children:`With description`}),`
`,(0,E.jsxs)(t.p,{children:[`A Field Set can have a description.
Make sure to connect this description to the Field Set or a specific input,
otherwise this won’t be read by a screen reader.
Add an `,(0,E.jsx)(t.code,{children:`aria-describedby`}),` attribute to the Field Set
and provide the `,(0,E.jsx)(t.code,{children:`id`}),` of the describing element as its value.`]}),`
`,(0,E.jsxs)(t.p,{children:[`Do not use rich text (such as links or lists) in descriptions. `,(0,E.jsx)(t.a,{href:`/docs/components-forms-field--docs#no-rich-text`,children:`Find out why`}),`.`]}),`
`,(0,E.jsx)(s,{of:p}),`
`,(0,E.jsx)(t.h3,{id:`with-hint`,children:`With Hint`}),`
`,(0,E.jsxs)(t.p,{children:[`A Field Set can indicate whether all of the inputs it contains are optional or required.
Make sure to add `,(0,E.jsx)(t.code,{children:`aria-required`}),` to `,(0,E.jsx)(`em`,{children:`all`}),` form elements in the Field Set when they are required.`]}),`
`,(0,E.jsx)(s,{of:h}),`
`,(0,E.jsx)(t.h3,{id:`with-validation`,children:`With Validation`}),`
`,(0,E.jsxs)(t.p,{children:[`A Field Set can indicate whether any of the inputs it contains has a validation error.
Use an `,(0,E.jsx)(t.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` to describe the error.
Make sure to connect the Error Message to the correct input in the Field Set,
otherwise it won’t be read by a screen reader.
Add an `,(0,E.jsx)(t.code,{children:`aria-describedby`}),` attribute to the input and provide the `,(0,E.jsx)(t.code,{children:`id`}),` of Error Message as its value.`]}),`
`,(0,E.jsxs)(t.p,{children:[`Do not use rich text (such as links or lists) in an Error Message. `,(0,E.jsx)(t.a,{href:`/docs/components-forms-error-message--docs#no-rich-text`,children:`Find out why`}),`.`]}),`
`,(0,E.jsx)(s,{of:g}),`
`,(0,E.jsx)(t.h3,{id:`with-heading-in-legend`,children:`With Heading in Legend`}),`
`,(0,E.jsxs)(t.p,{children:[`If the Field Set is the only content on the page, its Legend serves as the main heading as well.
Set `,(0,E.jsx)(t.code,{children:`legendIsPageHeading`}),` to include an `,(0,E.jsx)(t.code,{children:`h1`}),` element to reflect this.`]}),`
`,(0,E.jsx)(s,{of:m}),`
`,(0,E.jsx)(t.h3,{id:`with-a-nested-field-set`,children:`With a nested Field Set`}),`
`,(0,E.jsxs)(t.p,{children:[`A Field Set can be nested inside another Field Set.
Use the `,(0,E.jsx)(t.code,{children:`inFieldSet`}),` prop to show the legend in a lighter style.`]}),`
`,(0,E.jsx)(s,{of:f}),`
`,(0,E.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,E.jsx)(u,{tokens:S})]})}function T(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;e((()=>{E=t(),d(),i(),_(),b(),C(),l()}))();export{T as default};