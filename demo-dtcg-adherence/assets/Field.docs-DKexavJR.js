import{n as e}from"./chunk-BneVvdWh.js";import{At as t}from"./iframe-BY6BFzy7.js";import{r as n}from"./react-R3CUuDdq.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-C3naI7ce.js";import{n as l,t as u}from"./DesignTokensTable-Bfsm2FSg.js";import{t as d}from"./mdx-react-shim-DbkeoZER.js";import{InAFieldSet as f,WithDescription as p,WithValidation as m,n as h,t as g}from"./Field.stories-L1JAse_4.js";var _,v=e((()=>{_=`<!-- @license CC0-1.0 -->

# Field

Wraps a single input and its related elements. May indicate that the input has a validation error.

## Guidelines

- Only use Field to wrap a single input. Use [Field Set](/docs/components-forms-field-set--docs) to wrap multiple inputs.
- There’s no need to add white space between the children of a Field. The component does this automatically.
`})),y,b,x=e((()=>{y={field:{gap:{$deprecated:`Will be removed in release 5.0.0.`,$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},child:{"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"before-error-message":{"margin-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},invalid:{"border-inline-start":{$value:`{ams.border.width.l} solid {ams.color.feedback.error}`,$extensions:{"nl.amsterdam.type":`border`}},"padding-inline-start":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}},b={ams:y}}));function S(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,...n(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(r,{of:g}),`
`,(0,w.jsx)(c,{children:_}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(a,{}),`
`,(0,w.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(t.h3,{id:`with-description`,children:`With description`}),`
`,(0,w.jsxs)(t.p,{children:[`A Field can have a description.
Make sure to connect this description to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,(0,w.jsx)(t.code,{children:`aria-describedby`}),` attribute to the input and provide the `,(0,w.jsx)(t.code,{children:`id`}),` of the describing element as its value.`]}),`
`,(0,w.jsx)(t.h4,{id:`no-rich-text`,children:`No rich text`}),`
`,(0,w.jsxs)(t.p,{children:[`Do not use rich text (such as links or lists) in descriptions.
Some screen readers, like VoiceOver, skip over rich text when reading out descriptions.
For more information, see `,(0,w.jsx)(t.a,{href:`https://nldesignsystem.nl/richtlijnen/formulieren/descriptions/inhoud/`,rel:`nofollow`,children:`NL Design System`}),`.`]}),`
`,(0,w.jsx)(s,{of:p}),`
`,(0,w.jsx)(t.h3,{id:`with-validation`,children:`With validation`}),`
`,(0,w.jsxs)(t.p,{children:[`A Field can indicate if the contained input has a validation error.
Use an `,(0,w.jsx)(t.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` to describe the error.
Make sure to connect the Error Message to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,(0,w.jsx)(t.code,{children:`aria-describedby`}),` attribute to the input and provide the `,(0,w.jsx)(t.code,{children:`id`}),` of Error Message as its value.`]}),`
`,(0,w.jsxs)(t.p,{children:[`Do not use rich text (such as links or lists) in an Error Message. `,(0,w.jsx)(t.a,{href:`/docs/components-forms-error-message--docs#no-rich-text`,children:`Find out why`}),`.`]}),`
`,(0,w.jsx)(s,{of:m}),`
`,(0,w.jsx)(t.h3,{id:`in-a-field-set`,children:`In a Field Set`}),`
`,(0,w.jsxs)(t.p,{children:[`Fields can be nested inside a Field Set.
Use the `,(0,w.jsx)(t.code,{children:`inFieldSet`}),` prop on the Labels of the Fields to show them in a lighter style.`]}),`
`,(0,w.jsx)(s,{of:f}),`
`,(0,w.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(u,{tokens:b})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),d(),i(),h(),v(),x(),l()}))();export{C as default};