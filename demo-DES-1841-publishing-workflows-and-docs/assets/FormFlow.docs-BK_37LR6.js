import{n as e}from"./chunk-DnJy8xQt.js";import{Bt as t}from"./iframe-CKVgZQBQ.js";import{r as n}from"./react-BgIsXq40.js";import{c as r,f as i}from"./blocks-D-Hn-W1x.js";import{t as a}from"./mdx-react-shim-Fosv90_y.js";import{n as o,t as s}from"./FormFlow.stories-DDUJE9L2.js";function c(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[`
`,`
`,(0,u.jsx)(r,{of:s}),`
`,(0,u.jsx)(t.h1,{id:`form-flow`,children:`Form Flow`}),`
`,(0,u.jsxs)(t.p,{children:[`These examples describe a user-friendly form flow.
Form pages have a minimal header and footer in order to remove distractions.
Start with asking `,(0,u.jsx)(t.a,{href:`https://www.gov.uk/service-manual/design/form-structure#start-with-one-thing-per-page`,rel:`nofollow`,children:`one thing per page`}),`.
This can be a single question, or a group of related questions.`]}),`
`,(0,u.jsx)(t.h2,{id:`landing-page`,children:`Landing Page`}),`
`,(0,u.jsx)(t.p,{children:`Most form flows start with a landing page that explains the process and provides a call to action to start the form flow.`}),`
`,`
`,`
`,(0,u.jsx)(t.h2,{id:`single-question`,children:`Single Question`}),`
`,(0,u.jsxs)(t.p,{children:[`On a form page with one question, the label or legend for the question is the level 1 heading of the page.
For labels, wrap the `,(0,u.jsx)(t.code,{children:`h1`}),` around it.
For legends, wrap it around the `,(0,u.jsx)(t.code,{children:`h1`}),`.`]}),`
`,(0,u.jsxs)(t.p,{children:[`For more information, see `,(0,u.jsx)(t.a,{href:`https://design-system.service.gov.uk/get-started/labels-legends-headings/`,rel:`nofollow`,children:`Making labels and legends headings`}),`.`]}),`
`,(0,u.jsx)(t.h2,{id:`single-question-with-subquestions`,children:`Single Question With Subquestions`}),`
`,(0,u.jsx)(t.p,{children:`A single question can have subquestions. Wrap the Fields in a Field Set, and use the Field Set’s legend as the level 1 heading of the page.`}),`
`,(0,u.jsx)(t.h2,{id:`with-multiple-questions`,children:`With Multiple Questions`}),`
`,(0,u.jsxs)(t.p,{children:[`When a form page has multiple questions, place an `,(0,u.jsx)(t.code,{children:`h1`}),` outside the `,(0,u.jsx)(t.code,{children:`form`}),`-tag,
which describes the group of questions.`]}),`
`,(0,u.jsxs)(t.p,{children:[`For more information, see `,(0,u.jsx)(t.a,{href:`https://design-system.service.gov.uk/patterns/question-pages/#asking-complex-questions-without-using-hint-text`,rel:`nofollow`,children:`Question pages - Asking complex questions without using hint text`})]}),`
`,(0,u.jsx)(t.h2,{id:`with-validation-error`,children:`With Validation Error`}),`
`,(0,u.jsx)(t.p,{children:`If the user’s answers fail validation:`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:`show them the page again, with the form fields as the user filled them in`}),`
`,(0,u.jsxs)(t.li,{children:[`show an `,(0,u.jsx)(t.a,{href:`/docs/components-forms-invalid-form-alert--docs`,children:`Invalid Form Alert`}),` at the top of the `,(0,u.jsx)(t.code,{children:`main`}),` container, and move keyboard focus to it`]}),`
`,(0,u.jsxs)(t.li,{children:[`add ‘(X invoerfouten) ’ to the beginning of the page `,(0,u.jsx)(t.code,{children:`<title>`}),` so that screen readers announce it immediately (Invalid Form Alert does this automatically)`]}),`
`,(0,u.jsxs)(t.li,{children:[`show `,(0,u.jsx)(t.a,{href:`/docs/components-forms-error-message--docs`,children:`Error message`}),` components next to fields with errors`]}),`
`]}),`
`,(0,u.jsxs)(t.p,{children:[`See the `,(0,u.jsx)(t.a,{href:`/docs/components-forms-field--docs#with-validation`,children:`Field`}),` and `,(0,u.jsx)(t.a,{href:`/docs/components-forms-field-set--docs#with-validation`,children:`Field Set`}),` docs on how to mark them as invalid.`]}),`
`,(0,u.jsx)(t.p,{children:`Validate the user’s answers when they click on the submit button.
Generally speaking, avoid validating the information in a field before the user has finished entering it or when they move away from the field.`}),`
`,(0,u.jsx)(t.p,{children:`For more information:`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:(0,u.jsx)(t.a,{href:`https://design-system.service.gov.uk/patterns/validation/`,rel:`nofollow`,children:`Recover from validation errors`})}),`
`,(0,u.jsx)(t.li,{children:(0,u.jsx)(t.a,{href:`https://design-system.service.gov.uk/components/error-summary/`,rel:`nofollow`,children:`Error summary`})}),`
`]}),`
`,(0,u.jsx)(t.h2,{id:`references`,children:`References`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsx)(t.li,{children:(0,u.jsx)(t.a,{href:`https://design-system.service.gov.uk/patterns/question-pages/`,rel:`nofollow`,children:`Gov.uk on question pages`})}),`
`,(0,u.jsx)(t.li,{children:(0,u.jsx)(t.a,{href:`https://nldesignsystem.nl/richtlijnen/formulieren/`,rel:`nofollow`,children:`NL Design System on forms`})}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),a(),i(),o()}))();export{l as default};