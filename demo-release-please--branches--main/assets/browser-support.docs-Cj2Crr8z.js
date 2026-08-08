import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,u as n}from"./blocks-CNG2gRRe.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,p:`p`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(n,{title:`Docs/Developer guide/Browser support`}),`
`,(0,c.jsx)(t.h1,{id:`browser-support`,children:`Browser support`}),`
`,(0,c.jsxs)(t.p,{children:[`The Amsterdam Design System uses the `,(0,c.jsx)(t.a,{href:`https://web.dev/baseline/`,rel:`nofollow`,children:`Baseline standard`}),` 'Widely available' for browser support. This means we only use features that have been supported in the 4 major browsers (Chrome, Edge, Firefox, and Safari) for at least 30 months.
This is considered a good trade-off between using modern web platform features and ensuring broad compatibility.`]}),`
`,(0,c.jsx)(t.p,{children:`We use linters for CSS and JavaScript to enforce this.
These tools help us catch most usages of unsupported features early in the development process, allowing us to maintain our commitment to browser compatibility.`}),`
`,(0,c.jsxs)(t.p,{children:[`However, there is a limitation: we use a lot of CSS custom properties (CSS variables) in our design system.
The Baseline linter judges each declaration by the value written next to it, and does not follow a `,(0,c.jsx)(t.code,{children:`var()`}),` reference to the value behind it.
It does check the declaration of a custom property itself, so the ones a component defines for its own use are covered.
Our design tokens are generated into a stylesheet that we exclude from linting, so the values they carry are the ones that go unchecked.
For example, `,(0,c.jsx)(t.code,{children:`color`}),` is widely available and `,(0,c.jsx)(t.code,{children:`light-dark()`}),` is not, but `,(0,c.jsx)(t.code,{children:`color: var(--ams-alert-background-color)`}),` gives the linter no way to tell which one it ends up with.`]}),`
`,(0,c.jsx)(t.p,{children:`Where the value behind a token matters, we resolve it ourselves.
Our own Stylelint rules follow a token reference through as many aliases as it takes and judge the value it ends at, which is how we check grid tracks, font stacks, font sizes, and list markers today.
The same approach could be applied to Baseline if we find we need it.`}),`
`,(0,c.jsxs)(t.p,{children:[`We carefully test and review our code to minimize the risk of using unsupported values.
If you find any issues related to browser support, please `,(0,c.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system/issues`,rel:`nofollow`,children:`report them`}),` so we can address them promptly.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};