import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,p as a,u as o}from"./blocks-msKSRvUz.js";import{t as s}from"./jsx-runtime-ATHzeHXA.js";import{i as c,r as l}from"./react-Dyi61YEg.js";import{n as u,t as d}from"./DesignTokensTable-C_VbPrDa.js";import{n as f,t as p}from"./InvalidFormAlert.stories-Dp8DtKDx.js";var m,h;function g(){return(g=e((()=>{m={"invalid-form-alert":{"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},h={ams:m}})))()}function _(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...c(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[`
`,`
`,`
`,`
`,(0,y.jsx)(o,{of:p}),`
`,(0,y.jsx)(a,{}),`
`,(0,y.jsx)(t,{of:p}),`
`,(0,y.jsx)(n,{}),`
`,(0,y.jsx)(i,{}),`
`,(0,y.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,y.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,y.jsx)(r.p,{children:`Always show an Invalid Form Alert when there is a validation error, even if there’s only one.`}),`
`,(0,y.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,y.jsx)(r.p,{children:`You must link the errors in the Invalid Form Alert to the answer they relate to.`}),`
`,(0,y.jsxs)(r.p,{children:[`For questions that require a user to answer using a single field, like a file upload, select, textarea or text input, link to the `,(0,y.jsx)(r.code,{children:`id`}),` of that field.`]}),`
`,(0,y.jsxs)(r.p,{children:[`When a user has to enter their answer into multiple fields, such as day, month and year fields, link to the `,(0,y.jsx)(r.code,{children:`id`}),` of the first field that contains an error.
If you do not know which field contains an error, link to the `,(0,y.jsx)(r.code,{children:`id`}),` of the first field.`]}),`
`,(0,y.jsxs)(r.p,{children:[`For questions that require a user to select one or more options from a list using Radios or Checkboxes, link to the `,(0,y.jsx)(r.code,{children:`id`}),` of the first Radio or Checkbox.`]}),`
`,(0,y.jsxs)(r.p,{children:[`Each `,(0,y.jsx)(r.code,{children:`id`}),` becomes the `,(0,y.jsx)(r.code,{children:`href`}),` of a link, so it needs a leading number sign (`,(0,y.jsx)(r.code,{children:`#`}),`).`]}),`
`,(0,y.jsxs)(r.p,{children:[`Put the Invalid Form Alert directly above the first question on the page.
Place it outside of the `,(0,y.jsx)(r.code,{children:`<form>`}),`-tag, `,(0,y.jsx)(r.a,{href:`https://nldesignsystem.nl/richtlijnen/formulieren/meerdere-stappen/#plaats-de-informatie-over-waar-de-gebruiker-is-in-de-stappen-boven-het-formulier`,rel:`nofollow`,children:`to make sure screen readers do not skip it`}),`.`]}),`
`,(0,y.jsx)(r.p,{children:`The heading level of the Invalid Form Alert depends on where in the page it is placed; this may differ per page.`}),`
`,(0,y.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,y.jsxs)(r.p,{children:[`This component adds the error count to the document title,
in line with `,(0,y.jsx)(r.a,{href:`https://design-system.service.gov.uk/patterns/validation/#how-to-tell-the-user-about-validation-errors`,rel:`nofollow`,children:`GOV.UK guidelines for informing users about validation errors`}),`.`]}),`
`,(0,y.jsx)(r.p,{children:`This component receives focus the first time it gets displayed on a page.
This allows keyboard users to quickly navigate to the errors in the form.
It also scrolls the component into view if it isn’t already.
Note: this functionality has been disabled on this page, to prevent unexpected focus behaviour.`}),`
`,(0,y.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,y.jsxs)(r.p,{children:[`An Invalid Form Alert is an `,(0,y.jsx)(r.a,{href:`/docs/components-feedback-alert--docs`,children:`Alert`}),` holding a `,(0,y.jsx)(r.a,{href:`/docs/components-navigation-link-list--docs`,children:`Link List`}),`, rather than a component with a look of its own.
A reader who has met the red Alert elsewhere on the site recognises it here, and the errors read as what they are: a list of links to the questions that need attention.`]}),`
`,(0,y.jsx)(r.p,{children:`The component renders nothing at all when there are no errors, so a form needs no condition around it.`}),`
`,(0,y.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,y.jsx)(r.p,{children:`The Alert is focused the first time it appears and scrolled into view, which moves a keyboard user straight to the summary instead of leaving them where they submitted from.
It is given a negative tab index so that it can be focused this way without becoming a stop that everyone has to pass on every later visit to the form.`}),`
`,(0,y.jsxs)(r.p,{children:[`Each error is a link to the field it concerns, so following one moves focus into the form at the question that needs answering.
This is what ‘How to use’ is protecting when it asks for the `,(0,y.jsx)(r.code,{children:`id`}),` of the first field of a group: a link to the group as a whole would land nowhere in particular.`]}),`
`,(0,y.jsx)(r.p,{children:`The error count is added to the document title as well.
A screen reader announces the title when a page loads or a route changes, so someone who submits a form and lands back on it hears that something went wrong before reading anything.`}),`
`,(0,y.jsxs)(r.p,{children:[`Placing the component outside the `,(0,y.jsx)(r.code,{children:`form`}),` element, as ‘How to use’ asks, is what keeps some screen readers from skipping it in their forms mode.`]}),`
`,(0,y.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,y.jsxs)(r.ul,{children:[`
`,(0,y.jsxs)(r.li,{children:[(0,y.jsx)(r.a,{href:`/docs/components-forms-error-message--docs`,children:`Error Message`}),` – the per-field message linked from the Invalid Form Alert.`]}),`
`,(0,y.jsxs)(r.li,{children:[(0,y.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` – wraps a single input with its Label, description, and Error Message.`]}),`
`,(0,y.jsxs)(r.li,{children:[(0,y.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` – wraps a group of inputs with a shared Error Message.`]}),`
`]}),`
`,(0,y.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,y.jsx)(d,{tokens:h})]})}function v(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=s(),l(),r(),u(),g(),f()})))()}b();export{v as default};