import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-TDTH1RRN.js";import{a as p,i as m,n as h,r as g,t as _}from"./Field.stories-DKY1c7Hn.js";var v,y;function b(){return(b=e((()=>{v={field:{gap:{$deprecated:"Whitespace is now applied through the `ams.field-set.child.*` tokens. Will be removed on or after 2026-07-09.",$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},child:{"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"before-error-message":{"margin-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},invalid:{"border-inline-start":{$value:`{ams.border.width.l} solid {ams.color.feedback.error}`,$extensions:{"nl.amsterdam.type":`border`}},"padding-inline-start":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}},y={ams:v}})))()}function x(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(s,{of:_}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(t,{of:_}),`
`,(0,C.jsx)(n,{}),`
`,(0,C.jsx)(i,{}),`
`,(0,C.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,C.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsx)(r.p,{children:`Use a Field to wrap a single input together with its Label, description, and Error Message.`}),`
`,(0,C.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,C.jsxs)(r.p,{children:[`Use `,(0,C.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` to wrap multiple inputs.`]}),`
`,(0,C.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,C.jsx)(r.h4,{id:`no-rich-text`,children:`No rich text`}),`
`,(0,C.jsxs)(r.p,{children:[`Do not use rich text (such as links or lists) in descriptions.
Some screen readers, like VoiceOver, skip over rich text when reading out descriptions.
For more information, see `,(0,C.jsx)(r.a,{href:`https://nldesignsystem.nl/richtlijnen/formulieren/descriptions/inhoud/`,rel:`nofollow`,children:`NL Design System`}),`.`]}),`
`,(0,C.jsxs)(r.p,{children:[`Connect each related element to the input through `,(0,C.jsx)(r.code,{children:`aria-describedby`}),` so screen readers announce them.`]}),`
`,(0,C.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(r.h3,{id:`with-description`,children:`With description`}),`
`,(0,C.jsxs)(r.p,{children:[`A Field can have a description.
Make sure to connect this description to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,(0,C.jsx)(r.code,{children:`aria-describedby`}),` attribute to the input and provide the `,(0,C.jsx)(r.code,{children:`id`}),` of the describing element as its value.`]}),`
`,(0,C.jsx)(a,{of:g}),`
`,(0,C.jsx)(r.h3,{id:`with-validation`,children:`With validation`}),`
`,(0,C.jsxs)(r.p,{children:[`A Field can indicate if the contained input has a validation error.
Use an `,(0,C.jsx)(r.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` to describe the error.
Make sure to connect the Error Message to the input in the Field,
otherwise it won’t be read by a screen reader.
Add an `,(0,C.jsx)(r.code,{children:`aria-describedby`}),` attribute to the input and provide the `,(0,C.jsx)(r.code,{children:`id`}),` of Error Message as its value.`]}),`
`,(0,C.jsxs)(r.p,{children:[`Do not use rich text (such as links or lists) in an Error Message. `,(0,C.jsx)(r.a,{href:`/docs/components-forms-error-message--docs#no-rich-text`,children:`Find out why`}),`.`]}),`
`,(0,C.jsx)(a,{of:m}),`
`,(0,C.jsx)(r.h3,{id:`in-a-field-set`,children:`In a Field Set`}),`
`,(0,C.jsxs)(r.p,{children:[`Fields can be nested inside a Field Set.
Use the `,(0,C.jsx)(r.code,{children:`inFieldSet`}),` prop on the Labels of the Fields to show them in a lighter style.`]}),`
`,(0,C.jsx)(a,{of:h}),`
`,(0,C.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,C.jsx)(r.p,{children:`There’s no need to add white space between the children of a Field.
The component does this automatically.`}),`
`,(0,C.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,C.jsx)(r.p,{children:`The spacing between the children of a Field is not uniform.
Everything sits a small distance apart, except the element directly before an Error Message, which gets more room.
The message is then read as belonging to the field below it rather than to the description above it.`}),`
`,(0,C.jsx)(r.p,{children:`Browsers that cannot express that condition fall back to the same small gap everywhere, which is acceptable: the order still reads correctly, only the emphasis is lost.`}),`
`,(0,C.jsx)(r.p,{children:`An invalid Field is marked by a red rule along its leading edge and indented away from it.
The whole question shifts, so the error is visible while scanning a long form rather than only when reading the field itself.`}),`
`,(0,C.jsx)(r.p,{children:`In print, a Field is never split across two pages.`}),`
`,(0,C.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsxs)(r.p,{children:[`A Field renders a `,(0,C.jsx)(r.code,{children:`div`}),` with no role of its own and adds nothing to the accessibility tree.
It groups its parts visually, and nothing more.`]}),`
`,(0,C.jsxs)(r.p,{children:[`This is why ‘How to use’ insists on `,(0,C.jsx)(r.code,{children:`aria-describedby`}),`: the description and the Error Message are related to the input by that attribute alone, not by sitting inside the same Field.
Someone reading the field on its own would otherwise get the label and nothing else.`]}),`
`,(0,C.jsx)(r.p,{children:`The red rule marking an invalid Field is not announced either, and neither is the colour of the Error Message.
The hidden prefix inside the message is what says that something went wrong.`}),`
`,(0,C.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(r.ul,{children:[`
`,(0,C.jsxs)(r.li,{children:[(0,C.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` – wraps multiple inputs.`]}),`
`,(0,C.jsxs)(r.li,{children:[(0,C.jsx)(r.a,{href:`/docs/components-forms-label--docs`,children:`Label`}),` – names the input inside the Field.`]}),`
`,(0,C.jsxs)(r.li,{children:[(0,C.jsx)(r.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` – describes a validation error for the input.`]}),`
`]}),`
`,(0,C.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(f,{tokens:y})]})}function S(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=c(),u(),r(),d(),b(),p()})))()}w();export{S as default};