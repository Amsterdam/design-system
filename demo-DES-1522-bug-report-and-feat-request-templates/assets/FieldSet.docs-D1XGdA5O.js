import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{E as n,a as r,f as i,i as a,l as o,m as s,n as c,u as l}from"./blocks-DO7v5WJH.js";import{n as u,t as d}from"./DesignTokensTable-CTr73Go6.js";import{t as f}from"./mdx-react-shim-BRUvlz7y.js";import{WithANestedFieldSet as p,WithDescription as m,WithHeadingInLegend as h,WithHint as g,WithValidation as _,n as v,t as y}from"./FieldSet.stories-AKAmJ_Mi.js";var b,x,S=e((()=>{b={"field-set":{child:{"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"before-error-message":{"margin-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"before-field-or-field-set":{"margin-block-end":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"between-fields-and-field-sets":{"margin-block-end":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},invalid:{"border-inline-start":{$value:`{ams.border.width.l} solid {ams.color.feedback.error}`,$extensions:{"nl.amsterdam.type":`border`}},"padding-inline-start":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},legend:{"margin-block-end":{$deprecated:"Whitespace is now applied through the `ams.field-set.child.*` tokens. Will be removed on or after 2026-07-09.",$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.heading.3.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.heading.3.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"text-wrap":{$value:`{ams.typography.heading.text-wrap}`,$extensions:{"nl.amsterdam.type":`textWrap`}},"in-fieldset":{"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}}}}},x={ams:b}}));function C(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(o,{of:y}),`
`,(0,T.jsx)(i,{}),`
`,(0,T.jsx)(r,{of:y}),`
`,(0,T.jsx)(l,{}),`
`,(0,T.jsx)(a,{}),`
`,(0,T.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,T.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,T.jsxs)(t.p,{children:[`Group a collection of `,(0,T.jsx)(t.a,{href:`/docs/components-forms-radio--docs`,children:`Radio`}),` buttons or `,(0,T.jsx)(t.a,{href:`/docs/components-forms-checkbox--docs`,children:`Checkboxes`}),` into a Field Set.
This allows them to share a label, description, and error message, while each option still has its own label.`]}),`
`,(0,T.jsx)(t.p,{children:`A Field Set can also express the relation between a group of inputs or other controls.
For instance, you might want to group several text inputs into one Field Set when requesting an address or various parts of a name.`}),`
`,(0,T.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,T.jsxs)(t.p,{children:[`Use a `,(0,T.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` to wrap a single input instead.`]}),`
`,(0,T.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,T.jsxs)(t.p,{children:[`Mark a Field Set as `,(0,T.jsx)(t.code,{children:`optional`}),` only for a list of Radios or Checkboxes, and if selecting any option is not necessary.`]}),`
`,(0,T.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(t.h3,{id:`with-description`,children:`With description`}),`
`,(0,T.jsxs)(t.p,{children:[`A Field Set can have a description.
Make sure to connect this description to the Field Set or a specific input,
otherwise this won’t be read by a screen reader.
Add an `,(0,T.jsx)(t.code,{children:`aria-describedby`}),` attribute to the Field Set
and provide the `,(0,T.jsx)(t.code,{children:`id`}),` of the describing element as its value.`]}),`
`,(0,T.jsxs)(t.p,{children:[`Do not use rich text (such as links or lists) in descriptions. `,(0,T.jsx)(t.a,{href:`/docs/components-forms-field--docs#no-rich-text`,children:`Find out why`}),`.`]}),`
`,(0,T.jsx)(c,{of:m}),`
`,(0,T.jsx)(t.h3,{id:`with-hint`,children:`With Hint`}),`
`,(0,T.jsxs)(t.p,{children:[`A Field Set can indicate whether all of the inputs it contains are optional or required.
Make sure to add `,(0,T.jsx)(t.code,{children:`aria-required`}),` to `,(0,T.jsx)(`em`,{children:`all`}),` form elements in the Field Set when they are required.`]}),`
`,(0,T.jsx)(c,{of:g}),`
`,(0,T.jsx)(t.h3,{id:`with-validation`,children:`With Validation`}),`
`,(0,T.jsxs)(t.p,{children:[`A Field Set can indicate whether any of the inputs it contains has a validation error.
Use an `,(0,T.jsx)(t.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` to describe the error.
Make sure to connect the Error Message to the correct input in the Field Set,
otherwise it won’t be read by a screen reader.
Add an `,(0,T.jsx)(t.code,{children:`aria-describedby`}),` attribute to the input and provide the `,(0,T.jsx)(t.code,{children:`id`}),` of Error Message as its value.`]}),`
`,(0,T.jsxs)(t.p,{children:[`Do not use rich text (such as links or lists) in an Error Message. `,(0,T.jsx)(t.a,{href:`/docs/components-forms-error-message--docs#no-rich-text`,children:`Find out why`}),`.`]}),`
`,(0,T.jsx)(c,{of:_}),`
`,(0,T.jsx)(t.h3,{id:`with-heading-in-legend`,children:`With Heading in Legend`}),`
`,(0,T.jsxs)(t.p,{children:[`If the Field Set is the only content on the page, its Legend serves as the main heading as well.
Set `,(0,T.jsx)(t.code,{children:`legendIsPageHeading`}),` to include an `,(0,T.jsx)(t.code,{children:`h1`}),` element to reflect this.`]}),`
`,(0,T.jsx)(c,{of:h}),`
`,(0,T.jsx)(t.h3,{id:`with-a-nested-field-set`,children:`With a nested Field Set`}),`
`,(0,T.jsxs)(t.p,{children:[`A Field Set can be nested inside another Field Set.
Use the `,(0,T.jsx)(t.code,{children:`inFieldSet`}),` prop to show the legend in a lighter style.`]}),`
`,(0,T.jsx)(c,{of:p}),`
`,(0,T.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,T.jsx)(t.p,{children:`There’s no need to add white space between the children of a Field Set.
The component does this automatically.`}),`
`,(0,T.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` – wraps a single input.`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.a,{href:`/docs/components-forms-radio--docs`,children:`Radio`}),` – one of the inputs typically grouped in a Field Set.`]}),`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.a,{href:`/docs/components-forms-checkbox--docs`,children:`Checkbox`}),` – one of the inputs typically grouped in a Field Set.`]}),`
`]}),`
`,(0,T.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(d,{tokens:x})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),f(),s(),v(),S(),u()}))();export{w as default};