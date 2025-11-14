import{j as e}from"./iframe-EkBBJOoa.js";import{useMDXComponents as o}from"./index-CSNhsIq-.js";import{M as n}from"./blocks-D26SfkwK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BKH2GyVu.js";/*@license CC0-1.0*/function r(s){const t={a:"a",code:"code",h1:"h1",p:"p",...o(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(n,{title:"Docs/Developer Guide/Browser Support"}),`
`,e.jsx(t.h1,{id:"browser-support",children:"Browser Support"}),`
`,e.jsxs(t.p,{children:["The Amsterdam Design System uses the ",e.jsx(t.a,{href:"https://web.dev/baseline/",rel:"nofollow",children:"Baseline standard"}),` 'Widely available' for browser support. This means we only use features that have been supported in the 4 major browsers (Chrome, Edge, Firefox, and Safari) for at least 30 months.
This is considered a good trade-off between using modern web platform features and ensuring broad compatibility.`]}),`
`,e.jsx(t.p,{children:`We use linters for CSS and JavaScript to enforce this.
These tools help us catch most usages of unsupported features early in the development process, allowing us to maintain our commitment to browser compatibility.`}),`
`,e.jsxs(t.p,{children:[`However, there is a limitation: we use a lot of CSS custom properties (CSS variables) in our design system.
Linters cannot check whether the combination of a CSS property that has a CSS variable as its value adheres to the Baseline standard.
For example, a linter can verify that the `,e.jsx(t.code,{children:"grid-template-columns"}),` property is widely supported,
but it cannot determine whether the value assigned to it via a CSS variable is also widely supported.`]}),`
`,e.jsxs(t.p,{children:[`We carefully test and review our code to minimize the risk of using unsupported values.
If you find any issues related to browser support, please `,e.jsx(t.a,{href:"https://github.com/Amsterdam/design-system/issues",rel:"nofollow",children:"report them"})," so we can address them promptly."]})]})}function h(s={}){const{wrapper:t}={...o(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(r,{...s})}):r(s)}export{h as default};
