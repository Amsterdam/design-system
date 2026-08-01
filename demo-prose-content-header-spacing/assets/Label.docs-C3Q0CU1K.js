import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-BNU5MZYy.js";import{a as p,i as m,n as h,o as g,r as _,t as v}from"./Label.stories-DE8_oaOW.js";var y,b;function x(){return(x=e((()=>{y={label:{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.heading.3.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.heading.3.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"text-wrap":{$value:`{ams.typography.heading.text-wrap}`,$extensions:{"nl.amsterdam.type":`textWrap`}},"in-fieldset":{"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}}}},b={ams:y}})))()}function S(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(s,{of:h}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(t,{of:h}),`
`,(0,w.jsx)(n,{}),`
`,(0,w.jsx)(i,{}),`
`,(0,w.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,w.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,w.jsxs)(r.p,{children:[`Always associate a form element (such as an `,(0,w.jsx)(r.code,{children:`input`}),` or `,(0,w.jsx)(r.code,{children:`textarea`}),`) with a Label.`]}),`
`,(0,w.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,w.jsxs)(r.p,{children:[`Set `,(0,w.jsx)(r.code,{children:`optional`}),` to `,(0,w.jsx)(r.code,{children:`true`}),` if the input is not required.
Use `,(0,w.jsx)(r.code,{children:`hint`}),` to show a custom hint text.`]}),`
`,(0,w.jsxs)(r.p,{children:[`Mark the optional fields rather than the required ones, as `,(0,w.jsx)(r.a,{href:`https://nldesignsystem.nl/richtlijnen/formulieren/voorkom-fouten/verplichte-velden/`,rel:`nofollow`,children:`the NL Design System guideline on required fields`}),` recommends.
A form should ask only what it needs, so most of its fields are required.
Mark the required fields instead when most fields are optional.`]}),`
`,(0,w.jsxs)(r.p,{children:[`Despite its name, `,(0,w.jsx)(r.code,{children:`inFieldSet`}),` has no structural effect: it only changes how the Label and its hint look.`]}),`
`,(0,w.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(r.h3,{id:`optional`,children:`Optional`}),`
`,(0,w.jsxs)(r.p,{children:[`Use the `,(0,w.jsx)(r.code,{children:`optional`}),` prop to indicate that the user doesn’t need to fill in the field to submit the form.`]}),`
`,(0,w.jsx)(a,{of:_}),`
`,(0,w.jsx)(r.h3,{id:`with-hint`,children:`With hint`}),`
`,(0,w.jsxs)(r.p,{children:[`Use the `,(0,w.jsx)(r.code,{children:`hint`}),` prop to either customize the text for the optional property or provide another type of remark.`]}),`
`,(0,w.jsxs)(r.p,{children:[`Note: ensure the hint meets `,(0,w.jsx)(r.a,{href:`https://www.amsterdam.nl/schrijfwijzer/heldere-taal-basis-onze-huisstijl/`,rel:`nofollow`,children:`language level B1`}),`.
For the same reason, the default hint text in Dutch is ‘niet verplicht’, not ‘optioneel’.`]}),`
`,(0,w.jsx)(a,{of:p}),`
`,(0,w.jsx)(r.h3,{id:`with-heading`,children:`With Heading`}),`
`,(0,w.jsxs)(r.p,{children:[`If the parent Field holds the only question on the page, its Label serves as the main heading as well.
Set `,(0,w.jsx)(r.code,{children:`isPageHeading`}),` to include an `,(0,w.jsx)(r.code,{children:`h1`}),` element to reflect this.`]}),`
`,(0,w.jsx)(a,{of:m}),`
`,(0,w.jsx)(r.h3,{id:`in-a-field-set`,children:`In a Field Set`}),`
`,(0,w.jsxs)(r.p,{children:[`When a Label is used in a Field inside a Field Set, use the `,(0,w.jsx)(r.code,{children:`inFieldSet`}),` prop to show it in a lighter style.`]}),`
`,(0,w.jsx)(a,{of:v}),`
`,(0,w.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,w.jsx)(r.p,{children:`A Label is set in bold, at the size of a level 3 Heading and with the tighter line height that goes with it.
A question in a form is treated as a small heading, because that is what it is: the thing a reader scans for when working out what is being asked.`}),`
`,(0,w.jsx)(r.p,{children:`Inside a Field Set that weight drops to regular.
The legend then carries the emphasis for the group, and the labels of the individual options read as answers rather than as questions of their own.`}),`
`,(0,w.jsx)(r.p,{children:`A Label that runs onto more than one line has its line lengths balanced, so it never ends on a single short word above the field.`}),`
`,(0,w.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,w.jsxs)(r.p,{children:[`A Label renders a `,(0,w.jsx)(r.code,{children:`label`}),` element tied to its input, so activating the label moves focus to the field and a screen reader announces the label when the field is reached.`]}),`
`,(0,w.jsx)(r.p,{children:`The hint is written inside the label.
It becomes part of the accessible name of the field, which is what makes ‘niet verplicht’ reach someone who never sees it beside the text.`}),`
`,(0,w.jsxs)(r.p,{children:[(0,w.jsx)(r.code,{children:`isPageHeading`}),` wraps the label in an `,(0,w.jsx)(r.code,{children:`h1`}),` rather than replacing it.
The text then serves as the heading of the page and as the name of the field at once, so navigating by heading and reaching the input both produce the same words.`]}),`
`,(0,w.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,w.jsxs)(r.ul,{children:[`
`,(0,w.jsxs)(r.li,{children:[(0,w.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` – wraps a single input together with its Label.`]}),`
`,(0,w.jsxs)(r.li,{children:[(0,w.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` – uses a legend instead of a Label to name a group of inputs.`]}),`
`]}),`
`,(0,w.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(f,{tokens:b})]})}function C(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;function T(){return(T=e((()=>{w=c(),u(),r(),d(),x(),g()})))()}T();export{C as default};