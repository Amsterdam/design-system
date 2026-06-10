import{n as e}from"./chunk-DnJy8xQt.js";import{Wt as t}from"./iframe-Dak--dB-.js";import{r as n}from"./react-Dm5D40f9.js";import{a as r,f as i,i as a,l as o,m as s,u as c}from"./blocks-D6FlSyUT.js";import{n as l,t as u}from"./DesignTokensTable-M-LIyGlI.js";import{t as d}from"./mdx-react-shim-BgEP09T9.js";import{n as f,t as p}from"./InvalidFormAlert.stories-B3v4ftEx.js";var m,h,g=e((()=>{m={"invalid-form-alert":{"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},h={ams:m}}));function _(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[`
`,`
`,`
`,`
`,(0,y.jsx)(o,{of:p}),`
`,(0,y.jsx)(i,{}),`
`,(0,y.jsx)(r,{of:p}),`
`,(0,y.jsx)(c,{}),`
`,(0,y.jsx)(a,{}),`
`,(0,y.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,y.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,y.jsx)(t.p,{children:`Always show an Invalid Form Alert when there is a validation error, even if there’s only one.`}),`
`,(0,y.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,y.jsx)(t.p,{children:`You must link the errors in the Invalid Form Alert to the answer they relate to.`}),`
`,(0,y.jsxs)(t.p,{children:[`For questions that require a user to answer using a single field, like a file upload, select, textarea or text input, link to the `,(0,y.jsx)(t.code,{children:`id`}),` of that field.`]}),`
`,(0,y.jsxs)(t.p,{children:[`When a user has to enter their answer into multiple fields, such as day, month and year fields, link to the `,(0,y.jsx)(t.code,{children:`id`}),` of the first field that contains an error.
If you do not know which field contains an error, link to the `,(0,y.jsx)(t.code,{children:`id`}),` of the first field.`]}),`
`,(0,y.jsxs)(t.p,{children:[`For questions that require a user to select one or more options from a list using Radios or Checkboxes, link to the `,(0,y.jsx)(t.code,{children:`id`}),` of the first Radio or Checkbox.`]}),`
`,(0,y.jsxs)(t.p,{children:[`Put the Invalid Form Alert directly above the first question on the page.
Place it outside of the `,(0,y.jsx)(t.code,{children:`<form>`}),`-tag, `,(0,y.jsx)(t.a,{href:`https://nldesignsystem.nl/richtlijnen/formulieren/meerdere-stappen/#plaats-de-informatie-over-waar-de-gebruiker-is-in-de-stappen-boven-het-formulier`,rel:`nofollow`,children:`to make sure screen readers do not skip it`}),`.`]}),`
`,(0,y.jsx)(t.p,{children:`The heading level of the Invalid Form Alert depends on where in the page it is placed; this may differ per page.`}),`
`,(0,y.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,y.jsxs)(t.p,{children:[`This component adds the error count to the document title,
in line with `,(0,y.jsx)(t.a,{href:`https://design-system.service.gov.uk/patterns/validation/#how-to-tell-the-user-about-validation-errors`,rel:`nofollow`,children:`GOV.UK guidelines for informing users about validation errors`}),`.`]}),`
`,(0,y.jsx)(t.p,{children:`This component receives focus the first time it gets displayed on a page.
This allows keyboard users to quickly navigate to the errors in the form.
It also scrolls the component into view if it isn’t already.
Note: this functionality has been disabled on this page, to prevent unexpected focus behaviour.`}),`
`,(0,y.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,y.jsxs)(t.ul,{children:[`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` – the per-field message linked from the Invalid Form Alert.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` – wraps a single input with its Label, description, and Error Message.`]}),`
`,(0,y.jsxs)(t.li,{children:[(0,y.jsx)(t.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` – wraps a group of inputs with a shared Error Message.`]}),`
`]}),`
`,(0,y.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,y.jsx)(u,{tokens:h})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=t(),d(),s(),f(),g(),l()}))();export{v as default};