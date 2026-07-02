import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,g as i}from"./iframe-B701rQ8T.js";import{t as a}from"./mdx-react-shim-Bf6fhmiW.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,p:`p`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(r,{title:`Docs/Developer Guide/Browser Support`}),`
`,(0,c.jsx)(t.h1,{id:`browser-support`,children:`Browser Support`}),`
`,(0,c.jsxs)(t.p,{children:[`The Amsterdam Design System uses the `,(0,c.jsx)(t.a,{href:`https://web.dev/baseline/`,rel:`nofollow`,children:`Baseline standard`}),` 'Widely available' for browser support. This means we only use features that have been supported in the 4 major browsers (Chrome, Edge, Firefox, and Safari) for at least 30 months.
This is considered a good trade-off between using modern web platform features and ensuring broad compatibility.`]}),`
`,(0,c.jsx)(t.p,{children:`We use linters for CSS and JavaScript to enforce this.
These tools help us catch most usages of unsupported features early in the development process, allowing us to maintain our commitment to browser compatibility.`}),`
`,(0,c.jsxs)(t.p,{children:[`However, there is a limitation: we use a lot of CSS custom properties (CSS variables) in our design system.
Linters cannot check whether the combination of a CSS property that has a CSS variable as its value adheres to the Baseline standard.
For example, a linter can verify that the `,(0,c.jsx)(t.code,{children:`grid-template-columns`}),` property is widely supported,
but it cannot determine whether the value assigned to it via a CSS variable is also widely supported.`]}),`
`,(0,c.jsxs)(t.p,{children:[`We carefully test and review our code to minimize the risk of using unsupported values.
If you find any issues related to browser support, please `,(0,c.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system/issues`,rel:`nofollow`,children:`report them`}),` so we can address them promptly.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};