import{j as e}from"./iframe-CRTJBgXn.js";import{useMDXComponents as o}from"./index-BjUmgdaN.js";import{M as r,f as a,P as i,h as p,i as d}from"./blocks-Ci-H-2vN.js";import{a as h,W as c}from"./ProgressList.stories-Dcf-PZlp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-mxwz5HLJ.js";import"./exampleContent-DRope23M.js";import"./Icon-BSI-_GY7.js";import"./Heading-BVVyThBr.js";const l=`<!-- @license CC0-1.0 -->

# Progress List

Displays the progress of a sequence of steps, with optional additional details per step.

## Guidelines

- Choose the correct level for the steps’ headings.
- Assign a status to each step: _completed_ or _current_.
  Steps without a status are considered _upcoming_.
- Maintain a correct chronological order.
  Only one step may be _current_; preceding steps must be _completed_.
- Progress List must only be used on a white background.
`;/*@license CC0-1.0*/function n(s){const t={code:"code",h2:"h2",h3:"h3",p:"p",...o(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:h}),`
`,e.jsx(a,{children:l}),`
`,e.jsx(i,{}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"with-substeps",children:"With substeps"}),`
`,e.jsx(t.p,{children:`A step may contain a list of substeps.
They are visually subordinate to their parent step: their indicators are smaller, and they do not display a heading.
If needed, headings can still be added into their content.
Substeps must use a heading level one lower than that of the parent steps.`}),`
`,e.jsxs(t.p,{children:["Don’t forget to set the ",e.jsx(t.code,{children:"hasSubsteps"})," prop on the parent step."]}),`
`,e.jsx(d,{of:c})]})}function M(s={}){const{wrapper:t}={...o(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{M as default};
