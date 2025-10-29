import{j as e}from"./iframe-Cs4oYJ2S.js";import{useMDXComponents as r}from"./index-BF9oCYnU.js";import{M as a}from"./blocks-BwcIFuOL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CH2FsuBZ.js";/*@license CC0-1.0*/function n(s){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{title:"Docs/Developer Guide/Getting Started"}),`
`,e.jsx(t.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(t.h2,{id:"react",children:"React"}),`
`,e.jsx(t.p,{children:"Install the packages you need, for instance:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-sh",children:`npm install @amsterdam/design-system-assets @amsterdam/design-system-css @amsterdam/design-system-react @amsterdam/design-system-react-icons @amsterdam/design-system-tokens
`})}),`
`,e.jsx(t.p,{children:"Import the components and stylesheets you need, for example:"}),`
`,`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import "@amsterdam/design-system-assets/font/index.css"
import "@amsterdam/design-system-css/dist/index.css"
import "@amsterdam/design-system-tokens/dist/index.css"
import { Paragraph } from "@amsterdam/design-system-react"

function App() {
  return <Paragraph>Hello, world!</Paragraph>
}

export default App
`})}),`
`,e.jsx(t.h2,{id:"compact-mode",children:"Compact Mode"}),`
`,e.jsxs(t.p,{children:[`For applications, the large text and ample white space of the theme can be counterproductive.
That’s why there is a compact mode.
To use the compact mode, import the compact CSS `,e.jsx(t.strong,{children:"after"})," the theme CSS, like so:"]}),`
`,`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`import "@amsterdam/design-system-tokens/dist/index.css"
import "@amsterdam/design-system-tokens/dist/compact.css"
`})}),`
`,e.jsx(t.h2,{id:"contributing",children:"Contributing"}),`
`,e.jsxs(t.p,{children:["Do you want to contribute to this project? Please review ",e.jsx(t.a,{href:"https://github.com/Amsterdam/design-system/blob/develop/CONTRIBUTING.md",rel:"nofollow",children:"our Contributing guidelines"}),"."]})]})}function p(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{p as default};
