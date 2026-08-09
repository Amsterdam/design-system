import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,u as n}from"./blocks-CNG2gRRe.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";function o(e){let t={a:`a`,h1:`h1`,p:`p`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(n,{title:`Docs/Guidelines/Browser support`}),`
`,(0,c.jsx)(t.h1,{id:`browser-support`,children:`Browser support`}),`
`,(0,c.jsx)(t.p,{children:`We only use web platform features that the four major browsers have supported for at least 30 months.
This is considered a good trade-off between using modern web platform features and ensuring broad compatibility.`}),`
`,(0,c.jsxs)(t.p,{children:[`That threshold is the `,(0,c.jsx)(t.a,{href:`https://web.dev/baseline/`,rel:`nofollow`,children:`Baseline standard`}),` ‘Widely available’, measured across Chrome, Edge, Firefox, and Safari.
We use linters for CSS and JavaScript to enforce it.
These tools help us catch most usages of unsupported features early in the development process, allowing us to maintain our commitment to browser compatibility.`]}),`
`,(0,c.jsxs)(t.p,{children:[`They do not reach everything: the linter judges a declaration by the value written next to it, and our design tokens are generated into a stylesheet we exclude from linting, so the values they carry go unchecked.
We carefully test and review our code to minimize the risk of using unsupported values.
If you find any issues related to browser support, please `,(0,c.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system/issues`,rel:`nofollow`,children:`report them`}),` so we can address them promptly.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};