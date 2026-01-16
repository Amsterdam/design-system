import{j as e}from"./iframe-DPj8zFkz.js";import{useMDXComponents as o}from"./index-CRZ-QGrF.js";import{M as r,f as i,P as a,h as p,i as c}from"./blocks-D58uLzUf.js";import{a as h,W as d}from"./ProgressList.stories-DHJcO_EH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKYvKsmH.js";import"./exampleContent-DRope23M.js";import"./Icon-DXeiuVU1.js";import"./Heading-CP6wDaY6.js";const l=`<!-- @license CC0-1.0 -->

# Progress List

Displays the progress of a sequence of steps, with optional additional details per step.

## Guidelines

- Choose the correct level for the steps’ headings.
- Assign a status to each step: _completed_ or _current_.
  Steps without a status are considered _upcoming_.
- Maintain a correct chronological order.
  Only one step may be _current_; preceding steps must be _completed_.
- Use the Progress List only on a white background.
  This is a limitation of the current implementation.
`;/*@license CC0-1.0*/function s(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:h}),`
`,e.jsx(i,{children:l}),`
`,e.jsx(a,{}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"with-substeps",children:"With substeps"}),`
`,e.jsx(t.p,{children:`A step may contain a list of substeps.
They are visually subordinate to their parent step: their indicators are smaller, and they do not display a heading.
If needed, headings can still be added into their content.`}),`
`,e.jsxs(t.p,{children:["Don’t forget to set the ",e.jsx(t.code,{children:"hasSubsteps"})," prop on the parent step."]}),`
`,e.jsx(c,{of:d})]})}function M(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{M as default};
