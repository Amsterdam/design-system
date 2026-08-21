import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-BQKRe05W.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-Blkzz5S5.js";import{a as p,c as m,i as h,n as g,o as _,r as v,s as y,t as b}from"./FieldSet.stories-FXDwqLHW.js";var x,S;function C(){return(C=e((()=>{x={"field-set":{child:{"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"before-error-message":{"margin-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"before-field-or-field-set":{"margin-block-end":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},"between-fields-and-field-sets":{"margin-block-end":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},invalid:{"border-inline-start":{$value:`{ams.border.width.l} solid {ams.color.feedback.error}`,$extensions:{"nl.amsterdam.type":`border`}},"padding-inline-start":{$value:`{ams.space.m}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},legend:{"margin-block-end":{$deprecated:"Whitespace is now applied through the `ams.field-set.child.*` tokens. Will be removed on or after 2026-07-09.",$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.heading.3.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.heading.3.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"text-wrap":{$value:`{ams.typography.heading.text-wrap}`,$extensions:{"nl.amsterdam.type":`textWrap`}},"in-fieldset":{"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}}}}},S={ams:x}})))()}function w(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[`
`,`
`,`
`,`
`,(0,E.jsx)(s,{of:g}),`
`,(0,E.jsx)(o,{}),`
`,(0,E.jsx)(t,{of:g}),`
`,(0,E.jsx)(n,{}),`
`,(0,E.jsx)(i,{}),`
`,(0,E.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,E.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,E.jsxs)(r.p,{children:[`Group a collection of `,(0,E.jsx)(r.a,{href:`/docs/components-forms-radio--docs`,children:`Radio`}),` buttons or `,(0,E.jsx)(r.a,{href:`/docs/components-forms-checkbox--docs`,children:`Checkboxes`}),` into a Field Set.
This allows them to share a label, description, and error message, while each option still has its own label.`]}),`
`,(0,E.jsx)(r.p,{children:`A Field Set can also express the relation between a group of inputs or other controls.
For instance, you might want to group several text inputs into one Field Set when requesting an address or various parts of a name.`}),`
`,(0,E.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,E.jsxs)(r.p,{children:[`Use a `,(0,E.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` to wrap a single input instead.`]}),`
`,(0,E.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,E.jsxs)(r.p,{children:[`Mark a Field Set as `,(0,E.jsx)(r.code,{children:`optional`}),` only for a list of Radios or Checkboxes, and if selecting any option is not necessary.`]}),`
`,(0,E.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,E.jsx)(r.h3,{id:`with-description`,children:`With description`}),`
`,(0,E.jsxs)(r.p,{children:[`A Field Set can have a description.
Make sure to connect this description to the Field Set or a specific input,
otherwise this won’t be read by a screen reader.
Add an `,(0,E.jsx)(r.code,{children:`aria-describedby`}),` attribute to the Field Set
and provide the `,(0,E.jsx)(r.code,{children:`id`}),` of the describing element as its value.`]}),`
`,(0,E.jsxs)(r.p,{children:[`Do not use rich text (such as links or lists) in descriptions. `,(0,E.jsx)(r.a,{href:`/docs/components-forms-field--docs#no-rich-text`,children:`Find out why`}),`.`]}),`
`,(0,E.jsx)(a,{of:h}),`
`,(0,E.jsx)(r.h3,{id:`with-hint`,children:`With Hint`}),`
`,(0,E.jsxs)(r.p,{children:[`A Field Set can indicate whether all of the inputs it contains are optional or required.
Make sure to add `,(0,E.jsx)(r.code,{children:`aria-required`}),` to `,(0,E.jsx)(`em`,{children:`all`}),` form elements in the Field Set when they are required.`]}),`
`,(0,E.jsx)(a,{of:_}),`
`,(0,E.jsx)(r.h3,{id:`with-validation`,children:`With Validation`}),`
`,(0,E.jsxs)(r.p,{children:[`A Field Set can indicate whether any of the inputs it contains has a validation error.
Use an `,(0,E.jsx)(r.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` to describe the error.
Make sure to connect the Error Message to the correct input in the Field Set,
otherwise it won’t be read by a screen reader.
Add an `,(0,E.jsx)(r.code,{children:`aria-describedby`}),` attribute to the input and provide the `,(0,E.jsx)(r.code,{children:`id`}),` of Error Message as its value.`]}),`
`,(0,E.jsxs)(r.p,{children:[`Do not use rich text (such as links or lists) in an Error Message. `,(0,E.jsx)(r.a,{href:`/docs/components-forms-error-message--docs#no-rich-text`,children:`Find out why`}),`.`]}),`
`,(0,E.jsx)(a,{of:y}),`
`,(0,E.jsx)(r.h3,{id:`disabled`,children:`Disabled`}),`
`,(0,E.jsx)(r.p,{children:`A disabled Field Set disables every form control it contains, in a single attribute rather than one per control.`}),`
`,(0,E.jsxs)(r.p,{children:[`The Field Set itself keeps its appearance: the legend and the labels stay in their usual colour.
Each control inside shows that it is unavailable in its own way, so a `,(0,E.jsx)(r.a,{href:`/docs/components-forms-text-input--docs`,children:`Text Input`}),` takes the same grey fill and grey text it has when it is disabled on its own.`]}),`
`,(0,E.jsx)(a,{of:b}),`
`,(0,E.jsx)(r.h3,{id:`with-heading-in-legend`,children:`With Heading in Legend`}),`
`,(0,E.jsxs)(r.p,{children:[`If the Field Set holds the only question on the page, its Legend serves as the main heading as well.
Set `,(0,E.jsx)(r.code,{children:`legendIsPageHeading`}),` to include an `,(0,E.jsx)(r.code,{children:`h1`}),` element to reflect this.`]}),`
`,(0,E.jsx)(a,{of:p}),`
`,(0,E.jsx)(r.h3,{id:`with-a-nested-field-set`,children:`With a nested Field Set`}),`
`,(0,E.jsxs)(r.p,{children:[`A Field Set can be nested inside another Field Set.
Use the `,(0,E.jsx)(r.code,{children:`inFieldSet`}),` prop to show the legend in a lighter style.`]}),`
`,(0,E.jsx)(a,{of:v}),`
`,(0,E.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,E.jsx)(r.p,{children:`There’s no need to add white space between the children of a Field Set.
The component does this automatically.`}),`
`,(0,E.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,E.jsx)(r.p,{children:`The spacing between the children of a Field Set climbs in four steps.
Ordinary children sit close together; the element before an Error Message gets more room; the element before a nested Field or Field Set more again; and two of those in a row are furthest apart.
Depth in a form is expressed by white space rather than by boxes or rules, so the more a Field Set holds, the more clearly its parts separate.`}),`
`,(0,E.jsx)(r.p,{children:`Browsers that cannot express those conditions fall back to the smallest gap everywhere, which is acceptable: the order still reads correctly, only the grouping is flatter.`}),`
`,(0,E.jsx)(r.p,{children:`The legend loses the notch a browser normally cuts for it in the border, because there is no border to cut.
It is laid out so that a border would pass around it rather than through it, which keeps the option open for a theme that draws one.`}),`
`,(0,E.jsxs)(r.p,{children:[`An invalid Field Set is marked by a red rule along its leading edge and indented away from it, the same way a `,(0,E.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` is.`]}),`
`,(0,E.jsxs)(r.p,{children:[`A Field Set does not grow to fit an input that asks for a width of its own, such as a Text Input with a `,(0,E.jsx)(r.code,{children:`size`}),` attribute.
Without that, a single wide field would stretch the whole group and the layout around it.`]}),`
`,(0,E.jsx)(r.p,{children:`In print, a Field Set is never split across two pages.`}),`
`,(0,E.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,E.jsxs)(r.p,{children:[`A Field Set has the implicit ARIA role `,(0,E.jsx)(r.code,{children:`group`}),`.
Set `,(0,E.jsx)(r.code,{children:`role="radiogroup"`}),` when it groups `,(0,E.jsx)(r.a,{href:`/docs/components-forms-radio--docs`,children:`Radio`}),` buttons, so that screen readers announce it as a radio group.
That role also permits `,(0,E.jsx)(r.code,{children:`aria-required`}),` on the Field Set, which the `,(0,E.jsx)(r.code,{children:`group`}),` role does not allow.`]}),`
`,(0,E.jsx)(r.p,{children:`The legend names that group, and screen readers repeat it before each option inside it.
Someone moving from one Radio to the next therefore hears which question they are answering, not just the answer they are on.`}),`
`,(0,E.jsxs)(r.p,{children:[(0,E.jsx)(r.code,{children:`legendIsPageHeading`}),` wraps the legend in an `,(0,E.jsx)(r.code,{children:`h1`}),` rather than replacing it, so the same words serve as the heading of the page and as the name of the group.`]}),`
`,(0,E.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,E.jsxs)(r.ul,{children:[`
`,(0,E.jsxs)(r.li,{children:[(0,E.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` – wraps a single input.`]}),`
`,(0,E.jsxs)(r.li,{children:[(0,E.jsx)(r.a,{href:`/docs/components-forms-radio--docs`,children:`Radio`}),` – one of the inputs typically grouped in a Field Set.`]}),`
`,(0,E.jsxs)(r.li,{children:[(0,E.jsx)(r.a,{href:`/docs/components-forms-checkbox--docs`,children:`Checkbox`}),` – one of the inputs typically grouped in a Field Set.`]}),`
`]}),`
`,(0,E.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,E.jsx)(f,{tokens:S})]})}function T(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;function D(){return(D=e((()=>{E=c(),u(),r(),d(),C(),m()})))()}D();export{T as default};