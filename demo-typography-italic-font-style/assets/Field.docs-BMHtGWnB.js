import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{a as n,f as r,i,l as a,m as o,n as s,u as c,v as l}from"./iframe-DKTKNzSI.js";import{n as u,t as d}from"./DesignTokensTable-B9R1f4iG.js";import{t as f}from"./mdx-react-shim-CjEaAEVa.js";import{InAFieldSet as p,WithDescription as m,WithValidation as h,n as g,t as _}from"./Field.stories-CYObwxeK.js";var v,y,b=e((()=>{v={field:{gap:{$deprecated:"Whitespace is now applied through the `ams.field-set.child.*` tokens. Will be removed on or after 2026-07-09.",$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},child:{"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"before-error-message":{"margin-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},invalid:{"border-inline-start":{$value:`{ams.border.width.l} solid {ams.color.feedback.error}`,$extensions:{"nl.amsterdam.type":`border`}},"padding-inline-start":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}},y={ams:v}}));function x(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(a,{of:_}),`
`,(0,C.jsx)(r,{}),`
`,(0,C.jsx)(n,{of:_}),`
`,(0,C.jsx)(c,{}),`
`,(0,C.jsx)(i,{}),`
`,(0,C.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,C.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsx)(t.p,{children:`Use a Field to wrap a single input together with its Label, description, and Error Message.`}),`
`,(0,C.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,C.jsxs)(t.p,{children:[`Use `,(0,C.jsx)(t.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` to wrap multiple inputs.`]}),`
`,(0,C.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,C.jsxs)(t.p,{children:[`Do not use rich text (such as links or lists) in descriptions.
Some screen readers, like VoiceOver, skip over rich text when reading out descriptions.
For more information, see `,(0,C.jsx)(t.a,{href:`https://nldesignsystem.nl/richtlijnen/formulieren/descriptions/inhoud/`,rel:`nofollow`,children:`NL Design System`}),`.`]}),`
`,(0,C.jsxs)(t.p,{children:[`Connect each related element to the input through `,(0,C.jsx)(t.code,{children:`aria-describedby`}),` so screen readers announce them.`]}),`
`,(0,C.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(t.h3,{id:`with-description`,children:`With description`}),`
`,(0,C.jsxs)(t.p,{children:[`A Field can have a description.
Make sure to connect this description to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,(0,C.jsx)(t.code,{children:`aria-describedby`}),` attribute to the input and provide the `,(0,C.jsx)(t.code,{children:`id`}),` of the describing element as its value.`]}),`
`,(0,C.jsx)(s,{of:m}),`
`,(0,C.jsx)(t.h3,{id:`with-validation`,children:`With validation`}),`
`,(0,C.jsxs)(t.p,{children:[`A Field can indicate if the contained input has a validation error.
Use an `,(0,C.jsx)(t.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` to describe the error.
Make sure to connect the Error Message to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,(0,C.jsx)(t.code,{children:`aria-describedby`}),` attribute to the input and provide the `,(0,C.jsx)(t.code,{children:`id`}),` of Error Message as its value.`]}),`
`,(0,C.jsxs)(t.p,{children:[`Do not use rich text (such as links or lists) in an Error Message. `,(0,C.jsx)(t.a,{href:`/docs/components-forms-error-message--docs#no-rich-text`,children:`Find out why`}),`.`]}),`
`,(0,C.jsx)(s,{of:h}),`
`,(0,C.jsx)(t.h3,{id:`in-a-field-set`,children:`In a Field Set`}),`
`,(0,C.jsxs)(t.p,{children:[`Fields can be nested inside a Field Set.
Use the `,(0,C.jsx)(t.code,{children:`inFieldSet`}),` prop on the Labels of the Fields to show them in a lighter style.`]}),`
`,(0,C.jsx)(s,{of:p}),`
`,(0,C.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,C.jsx)(t.p,{children:`There’s no need to add white space between the children of a Field.
The component does this automatically.`}),`
`,(0,C.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(t.ul,{children:[`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` – wraps multiple inputs.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`/docs/components-forms-label--docs`,children:`Label`}),` – names the input inside the Field.`]}),`
`,(0,C.jsxs)(t.li,{children:[(0,C.jsx)(t.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` – describes a validation error for the input.`]}),`
`]}),`
`,(0,C.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(d,{tokens:y})]})}function S(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;e((()=>{C=t(),f(),o(),u(),b(),g()}))();export{S as default};