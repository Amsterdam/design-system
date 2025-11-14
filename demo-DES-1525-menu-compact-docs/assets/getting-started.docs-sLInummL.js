import{j as e}from"./iframe-BZluX4x9.js";import{useMDXComponents as o}from"./index-BRGA4xTC.js";import{M as r}from"./blocks-BOxBWI1-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DY-manVc.js";/*@license CC0-1.0*/function n(t){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{title:"Docs/Developer Guide/Getting Started"}),`
`,e.jsx(s.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(s.h2,{id:"installing",children:"Installing"}),`
`,e.jsx(s.p,{children:`Get the packages your need from npm.
These are all 5 of them:`}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sh",children:`npm install @amsterdam/design-system-assets @amsterdam/design-system-css @amsterdam/design-system-react @amsterdam/design-system-react-icons @amsterdam/design-system-tokens
`})}),`
`,e.jsx(s.p,{children:"Import the components and stylesheets you need, for example:"}),`
`,`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import "@amsterdam/design-system-assets/font/index.css"
import "@amsterdam/design-system-css/dist/index.css"
import "@amsterdam/design-system-tokens/dist/index.css"
import { Paragraph } from "@amsterdam/design-system-react"

function App() {
  return <Paragraph>Hello, world!</Paragraph>
}

export default App
`})}),`
`,e.jsx(s.h2,{id:"compact-mode",children:"Compact Mode"}),`
`,e.jsxs(s.p,{children:["If you use ",e.jsx(s.a,{href:"http://localhost:6006/?path=/docs/docs-developer-guide-modes--docs#compact-mode",rel:"nofollow",children:"Compact Mode"}),`,
import the stylesheets in this order – the compact tokens override the spacious ones.`]}),`
`,`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import "@amsterdam/design-system-tokens/dist/index.css"
import "@amsterdam/design-system-tokens/dist/compact.css"
`})}),`
`,e.jsx(s.h2,{id:"contributing",children:"Contributing"}),`
`,e.jsxs(s.p,{children:[`You’re welcome to contribute to this project.
Check our `,e.jsx(s.a,{href:"https://github.com/Amsterdam/design-system/blob/develop/CONTRIBUTING.md",rel:"nofollow",children:"our Contributing guidelines"})," if you start."]})]})}function l(t={}){const{wrapper:s}={...o(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(n,{...t})}):n(t)}export{l as default};
