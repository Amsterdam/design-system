import{j as e}from"./iframe-CVuVHAkN.js";import{useMDXComponents as o}from"./index-CVKheSHy.js";import{M as r,f as i,P as a,h as p,i as c}from"./blocks-BVp3AORL.js";import{a as h,W as d}from"./ProgressList.stories-ByxhAZcI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-e9TtdHeq.js";import"./exampleContent-Du2yH2Fl.js";import"./Icon-Cyv39Lf_.js";import"./Heading-LMNuf_fZ.js";import"./getHeadingTag-Dv1eMqvl.js";const l=`<!-- @license CC0-1.0 -->

# Progress List

Displays the progress of a sequence of steps, with optional additional details per step.

## Guidelines

- Choose the correct level for the steps’ headings.
- Assign a status to each step: _completed_ or _current_.
  Steps without a status are considered _upcoming_.
- Maintain a correct chronological order.
  Only one step may be _current_; preceding steps must be _completed_.
- Progress List must only be used on a white background.
`;function n(t){const s={code:"code",h2:"h2",h3:"h3",p:"p",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:h}),`
`,e.jsx(i,{children:l}),`
`,e.jsx(a,{}),`
`,e.jsx(p,{}),`
`,e.jsx(s.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(s.h3,{id:"with-substeps",children:"With substeps"}),`
`,e.jsx(s.p,{children:`A step may contain a list of substeps.
They are visually subordinate to their parent step: their indicators are smaller, and they do not display a heading.`}),`
`,e.jsxs(s.p,{children:["Don’t forget to set the ",e.jsx(s.code,{children:"hasSubsteps"})," prop on the parent step."]}),`
`,e.jsx(c,{of:d})]})}function C(t={}){const{wrapper:s}={...o(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(n,{...t})}):n(t)}export{C as default};
