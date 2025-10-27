import{j as e}from"./iframe-DI-Triy-.js";import{useMDXComponents as o}from"./index-BaX_rE0G.js";import{M as r}from"./blocks-CqiavnsH.js";import{F as t}from"./FormFlow.stories-ZjSNjOyr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-5O6CmR3q.js";import"./Layout-bdU7iojh.js";import"./PageFooter.stories-18xjKaxx.js";/*@license CC0-1.0*/function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:t}),`
`,e.jsx(n.h1,{id:"form-flow",children:"Form Flow"}),`
`,e.jsxs(n.p,{children:[`These examples describe a user-friendly form flow.
Form pages have a minimal header and footer in order to remove distractions.
Start with asking `,e.jsx(n.a,{href:"https://www.gov.uk/service-manual/design/form-structure#start-with-one-thing-per-page",rel:"nofollow",children:"one thing per page"}),`.
This can be a single question, or a group of related questions.`]}),`
`,e.jsx(n.h2,{id:"landing-page",children:"Landing Page"}),`
`,e.jsx(n.p,{children:"Most form flows start with a landing page that explains the process and provides a call to action to start the form flow."}),`
`,`
`,`
`,e.jsx(n.h2,{id:"with-one-question",children:"With One Question"}),`
`,e.jsxs(n.p,{children:[`On a form page with one question, the label or legend for the question is the level 1 heading of the page.
For labels, wrap the `,e.jsx(n.code,{children:"h1"}),` around it.
For legends, wrap it around the `,e.jsx(n.code,{children:"h1"}),"."]}),`
`,e.jsxs(n.p,{children:["For more information, see ",e.jsx(n.a,{href:"https://design-system.service.gov.uk/get-started/labels-legends-headings/",rel:"nofollow",children:"Making labels and legends headings"}),"."]}),`
`,e.jsx(n.h2,{id:"with-multiple-questions",children:"With Multiple Questions"}),`
`,e.jsxs(n.p,{children:["When a form page has multiple questions, place an ",e.jsx(n.code,{children:"h1"})," outside the ",e.jsx(n.code,{children:"form"}),`-tag,
which describes the group of questions.`]}),`
`,e.jsxs(n.p,{children:["For more information, see ",e.jsx(n.a,{href:"https://design-system.service.gov.uk/patterns/question-pages/#asking-complex-questions-without-using-hint-text",rel:"nofollow",children:"Question pages - Asking complex questions without using hint text"})]}),`
`,e.jsx(n.h2,{id:"with-validation-error",children:"With Validation Error"}),`
`,e.jsx(n.p,{children:"If the user’s answers fail validation:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"show them the page again, with the form fields as the user filled them in"}),`
`,e.jsxs(n.li,{children:["show an ",e.jsx(n.a,{href:"/docs/components-forms-invalid-form-alert--docs",children:"Invalid Form Alert"})," at the top of the ",e.jsx(n.code,{children:"main"})," container, and move keyboard focus to it"]}),`
`,e.jsxs(n.li,{children:["add ‘(X invoerfouten) ’ to the beginning of the page ",e.jsx(n.code,{children:"<title>"})," so that screen readers announce it immediately (Invalid Form Alert does this automatically)"]}),`
`,e.jsxs(n.li,{children:["show ",e.jsx(n.a,{href:"/docs/components-forms-error-message--docs",children:"Error message"})," components next to fields with errors"]}),`
`]}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.a,{href:"/docs/components-forms-field--docs#with-validation",children:"Field"})," and ",e.jsx(n.a,{href:"/docs/components-forms-field-set--docs#with-validation",children:"Field Set"})," docs on how to mark them as invalid."]}),`
`,e.jsx(n.p,{children:`Validate the user’s answers when they click on the submit button.
Generally speaking, avoid validating the information in a field before the user has finished entering it or when they move away from the field.`}),`
`,e.jsx(n.p,{children:"For more information:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://design-system.service.gov.uk/patterns/validation/",rel:"nofollow",children:"Recover from validation errors"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://design-system.service.gov.uk/components/error-summary/",rel:"nofollow",children:"Error summary"})}),`
`]}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://design-system.service.gov.uk/patterns/question-pages/",rel:"nofollow",children:"Gov.uk on question pages"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://nldesignsystem.nl/richtlijnen/formulieren/",rel:"nofollow",children:"NL Design System on forms"})}),`
`]})]})}function u(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{u as default};
