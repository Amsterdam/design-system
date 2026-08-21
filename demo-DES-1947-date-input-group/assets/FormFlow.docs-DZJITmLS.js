import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,p as r,u as i}from"./blocks-msKSRvUz.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./PageAnatomy-pJk8pKno.js";import{n as u,t as d}from"./FormFlow.stories-n_s5xPXD.js";var f;function p(){return(p=e((()=>{f=[[{height:`line`,label:`Back link`}],[{height:`body`,label:`Questions`}]]})))()}function m(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[`
`,`
`,`
`,`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(r,{}),`
`,(0,g.jsx)(t,{of:d}),`
`,(0,g.jsxs)(n.p,{children:[`Start with asking `,(0,g.jsx)(n.a,{href:`https://www.gov.uk/service-manual/design/form-structure#start-with-one-thing-per-page`,rel:`nofollow`,children:`one thing per page`}),`.
This can be a single question, or a group of related questions.`]}),`
`,(0,g.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsx)(n.p,{children:`This schematic shows the sections of a question page and how the grids and vertical space work.`}),`
`,(0,g.jsx)(l,{labels:f,of:d,story:`MultipleQuestions`}),`
`,(0,g.jsx)(n.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,g.jsx)(n.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,g.jsx)(n.p,{children:`Use this flow for any task a visitor completes by answering questions: an application, a report, a registration.`}),`
`,(0,g.jsx)(n.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,g.jsxs)(n.p,{children:[`Use a `,(0,g.jsx)(n.a,{href:`/docs/pages-public-product-page--docs`,children:`Product Page`}),` to explain the task and lead into this flow.`]}),`
`,(0,g.jsx)(n.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,g.jsx)(n.p,{children:`Ask one thing per page, and write each question as the label or legend rather than as a separate sentence above it.`}),`
`,(0,g.jsx)(n.h2,{id:`variants`,children:`Variants`}),`
`,(0,g.jsx)(n.h3,{id:`landing-page`,children:`Landing Page`}),`
`,(0,g.jsx)(n.p,{children:`Most form flows start with a landing page that explains the process and provides a call to action to start the form flow.`}),`
`,`
`,`
`,(0,g.jsx)(n.h3,{id:`single-question`,children:`Single Question`}),`
`,(0,g.jsxs)(n.p,{children:[`On a form page with one question, the label or legend for the question is the level 1 heading of the page.
For labels, wrap the `,(0,g.jsx)(n.code,{children:`h1`}),` around it.
For legends, wrap it around the `,(0,g.jsx)(n.code,{children:`h1`}),`.`]}),`
`,(0,g.jsxs)(n.p,{children:[`For more information, see `,(0,g.jsx)(n.a,{href:`https://design-system.service.gov.uk/get-started/labels-legends-headings/`,rel:`nofollow`,children:`Making labels and legends headings`}),`.`]}),`
`,(0,g.jsx)(n.h3,{id:`single-question-with-subquestions`,children:`Single Question With Subquestions`}),`
`,(0,g.jsx)(n.p,{children:`A single question can have subquestions. Wrap the Fields in a Field Set, and use the Field Set’s legend as the level 1 heading of the page.`}),`
`,(0,g.jsx)(n.h3,{id:`with-multiple-questions`,children:`With Multiple Questions`}),`
`,(0,g.jsxs)(n.p,{children:[`When a form page has multiple questions, place an `,(0,g.jsx)(n.code,{children:`h1`}),` outside the `,(0,g.jsx)(n.code,{children:`form`}),`-tag,
which describes the group of questions.`]}),`
`,(0,g.jsxs)(n.p,{children:[`For more information, see `,(0,g.jsx)(n.a,{href:`https://design-system.service.gov.uk/patterns/question-pages/#asking-complex-questions-without-using-hint-text`,rel:`nofollow`,children:`Question pages - Asking complex questions without using hint text`})]}),`
`,(0,g.jsx)(n.h3,{id:`with-validation-error`,children:`With Validation Error`}),`
`,(0,g.jsx)(n.p,{children:`If the user’s answers fail validation:`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:`show them the page again, with the form fields as the user filled them in`}),`
`,(0,g.jsxs)(n.li,{children:[`show an `,(0,g.jsx)(n.a,{href:`/docs/components-forms-invalid-form-alert--docs`,children:`Invalid Form Alert`}),` at the top of the `,(0,g.jsx)(n.code,{children:`main`}),` container, and move keyboard focus to it`]}),`
`,(0,g.jsxs)(n.li,{children:[`add ‘(X invoerfouten) ’ to the beginning of the page `,(0,g.jsx)(n.code,{children:`<title>`}),` so that screen readers announce it immediately (Invalid Form Alert does this automatically)`]}),`
`,(0,g.jsxs)(n.li,{children:[`show `,(0,g.jsx)(n.a,{href:`/docs/components-forms-error-message--docs`,children:`Error message`}),` components next to fields with errors`]}),`
`]}),`
`,(0,g.jsxs)(n.p,{children:[`See the `,(0,g.jsx)(n.a,{href:`/docs/components-forms-field--docs#with-validation`,children:`Field`}),` and `,(0,g.jsx)(n.a,{href:`/docs/components-forms-field-set--docs#with-validation`,children:`Field Set`}),` docs on how to mark them as invalid.`]}),`
`,(0,g.jsx)(n.p,{children:`Validate the user’s answers when they click on the submit button.
Generally speaking, avoid validating the information in a field before the user has finished entering it or when they move away from the field.`}),`
`,(0,g.jsx)(n.p,{children:`For more information:`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.a,{href:`https://design-system.service.gov.uk/patterns/validation/`,rel:`nofollow`,children:`Recover from validation errors`})}),`
`,(0,g.jsx)(n.li,{children:(0,g.jsx)(n.a,{href:`https://design-system.service.gov.uk/components/error-summary/`,rel:`nofollow`,children:`Error summary`})}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsx)(n.p,{children:`On a page with one question, the label or legend for that question is the level 1 heading of the page, so the heading and the question are the same thing rather than two readings of it.`}),`
`,(0,g.jsxs)(n.p,{children:[`On a page with several, the level 1 heading sits outside the `,(0,g.jsx)(n.code,{children:`form`}),` and describes the group.`]}),`
`,(0,g.jsxs)(n.p,{children:[`An `,(0,g.jsx)(n.a,{href:`/docs/components-forms-invalid-form-alert--docs`,children:`Invalid Form Alert`}),` takes focus when validation fails, and prefixes the page `,(0,g.jsx)(n.code,{children:`<title>`}),` with the number of errors so a screen reader announces it immediately.`]}),`
`,(0,g.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-public-product-page--docs`,children:`Product Page`}),` – explains the task this flow carries out.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-forms-invalid-form-alert--docs`,children:`Invalid Form Alert`}),` – the summary at the top of a failed page.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-forms-field--docs`,children:`Field`}),` – how to mark a single question invalid.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`https://design-system.service.gov.uk/patterns/question-pages/`,rel:`nofollow`,children:`Gov.uk on question pages`}),` – the pattern this flow follows.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`https://nldesignsystem.nl/richtlijnen/formulieren/`,rel:`nofollow`,children:`NL Design System on forms`}),` – the national guidance.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=a(),s(),n(),c(),p(),u()})))()}_();export{h as default};