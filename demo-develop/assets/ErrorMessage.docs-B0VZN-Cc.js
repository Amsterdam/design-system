import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-CqryReaq.js";import{t as c}from"./jsx-runtime-Bq1bXGty.js";import{i as l}from"./react-BnCtKaSV.js";import{n as u,t as d}from"./DesignTokensTable-BnJYrgVe.js";import{t as f}from"./mdx-react-shim-9RzcSRdq.js";import{CustomPrefix as p,WithCustomIcon as m,n as h,t as g}from"./ErrorMessage.stories-DXv3Xyux.js";var _,v,y=e((()=>{_={"error-message":{color:{$value:`{ams.color.feedback.error}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}}},v={ams:_}}));function b(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(s,{of:g}),`
`,(0,S.jsx)(o,{}),`
`,(0,S.jsx)(t,{of:g}),`
`,(0,S.jsx)(n,{}),`
`,(0,S.jsx)(i,{}),`
`,(0,S.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,S.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,S.jsxs)(r.p,{children:[`Show an Error Message above a form field that has a validation error.
For guidance and examples on using error messages in a form,
refer to the `,(0,S.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` and `,(0,S.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` documentation.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Read the documentation by `,(0,S.jsx)(r.a,{href:`https://www.nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen`,rel:`nofollow`,children:`NL Design System`}),` and `,(0,S.jsx)(r.a,{href:`https://design-system.service.gov.uk/components/error-message/`,rel:`nofollow`,children:`Gov.uk`}),` for more information on the contents of error messages and when to show them.`]}),`
`,(0,S.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,S.jsx)(r.h4,{id:`no-rich-text`,children:`No rich text`}),`
`,(0,S.jsxs)(r.p,{children:[`Do not use rich text (such as links or lists) in an Error Message.
Some screen readers, like VoiceOver, skip over rich text when reading out descriptions.
For more information, see `,(0,S.jsx)(r.a,{href:`https://nldesignsystem.nl/richtlijnen/formulieren/descriptions/inhoud/`,rel:`nofollow`,children:`NL Design System`}),`.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Connect the Error Message to the input it describes through the input's `,(0,S.jsx)(r.code,{children:`aria-describedby`}),` attribute.`]}),`
`,(0,S.jsx)(r.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,S.jsx)(r.p,{children:`Explain what went wrong and how to fix it.`}),`
`,(0,S.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(r.h3,{id:`custom-prefix`,children:`Custom prefix`}),`
`,(0,S.jsxs)(r.p,{children:[`Error messages are automatically prefixed with a visually hidden text, the Dutch word ‘Invoerfout’.
This makes the error message more clear for screen reader users.
If you want to change this prefix, to support another language for example, you can use the `,(0,S.jsx)(r.code,{children:`prefix`}),` prop.`]}),`
`,(0,S.jsx)(a,{of:p}),`
`,(0,S.jsx)(r.h3,{id:`with-custom-icon`,children:`With custom icon`}),`
`,(0,S.jsx)(r.p,{children:`Replace the icon with another to use Error Message in a different theme or visual identity.
Websites for the City of Amsterdam must use the default icon.`}),`
`,(0,S.jsx)(a,{of:m}),`
`,(0,S.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,S.jsxs)(r.p,{children:[`An Error Message is red text with an icon before it, and nothing else: no background, no border, no box.
The `,(0,S.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` around it is what marks the error more heavily, with a red rule along its leading edge, so the message itself can stay quiet.`]}),`
`,(0,S.jsx)(r.p,{children:`The icon keeps the message from depending on its colour alone, which is what a reader who does not distinguish red from the text around it needs.`}),`
`,(0,S.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsxs)(r.p,{children:[`An Error Message renders a `,(0,S.jsx)(r.code,{children:`p`}),` element, so it is read as ordinary text when the field it describes is reached through `,(0,S.jsx)(r.code,{children:`aria-describedby`}),`.`]}),`
`,(0,S.jsx)(r.p,{children:`It opens with a word that is in the markup and hidden visually — ‘Invoerfout’ by default.
A description read out on its own gives no clue that it is an error, so the prefix supplies the context that the colour and the icon carry visually.`}),`
`,(0,S.jsxs)(r.p,{children:[`The component does not announce itself when it appears, and it is not a live region.
Announcing it is the job of the field that now describes it, or of an `,(0,S.jsx)(r.a,{href:`/docs/components-forms-invalid-form-alert--docs`,children:`Invalid Form Alert`}),` at the top of the form.`]}),`
`,(0,S.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,S.jsxs)(r.ul,{children:[`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` – wraps a single input with its Label, description, and Error Message.`]}),`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/components-forms-field-set--docs`,children:`Field Set`}),` – wraps a group of inputs with a shared Error Message.`]}),`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/components-forms-invalid-form-alert--docs`,children:`Invalid Form Alert`}),` – summarises all form errors at the top of the page.`]}),`
`]}),`
`,(0,S.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(d,{tokens:v})]})}function x(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;e((()=>{S=c(),f(),r(),u(),y(),h()}))();export{x as default};