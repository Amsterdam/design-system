import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-BthE6Fri.js";import{r as n}from"./react-CuhE8UFk.js";import{c as r,f as i}from"./blocks-BB8xqr1V.js";import{t as a}from"./mdx-react-shim-CwoQP4qO.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(r,{title:`Docs/Developer Guide/Getting Started`}),`
`,(0,c.jsx)(t.h1,{id:`getting-started`,children:`Getting Started`}),`
`,(0,c.jsx)(t.h2,{id:`installing`,children:`Installing`}),`
`,(0,c.jsx)(t.p,{children:`Get the packages your need from npm.
These are all 5 of them:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`npm install @amsterdam/design-system-assets @amsterdam/design-system-css @amsterdam/design-system-react @amsterdam/design-system-react-icons @amsterdam/design-system-tokens
`})}),`
`,(0,c.jsx)(t.p,{children:`Import the components and stylesheets you need, for example:`}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import "@amsterdam/design-system-assets/font/index.css"
import "@amsterdam/design-system-css/dist/index.css"
import "@amsterdam/design-system-tokens/dist/index.css"
import { Paragraph } from "@amsterdam/design-system-react"

function App() {
  return <Paragraph>Hello, world!</Paragraph>
}

export default App
`})}),`
`,(0,c.jsx)(t.h2,{id:`reset-styles`,children:`Reset styles`}),`
`,(0,c.jsxs)(t.p,{children:[`Add the `,(0,c.jsx)(t.code,{children:`ams-body`}),` `,(0,c.jsx)(t.a,{href:`/docs/utilities-css-body--docs`,children:`class name`}),` to your document’s `,(0,c.jsx)(t.code,{children:`<body>`}),` tag.
This removes white space that the browser might add.
In Compact Mode, it also sets the background color to match the Page component seamlessly.`]}),`
`,(0,c.jsx)(t.p,{children:`We don’t have a separate, global reset stylesheet.
This follows from our component-based architecture: every component overwrites user agent styles on the elements they render.
You shouldn’t need a reset stylesheet.`}),`
`,(0,c.jsx)(t.h2,{id:`compact-mode`,children:`Compact Mode`}),`
`,(0,c.jsxs)(t.p,{children:[`If you use `,(0,c.jsx)(t.a,{href:`/docs/docs-developer-guide-modes--docs#compact-mode`,children:`Compact Mode`}),`,
import the stylesheets in this order – the compact tokens override the spacious ones.`]}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`import "@amsterdam/design-system-tokens/dist/index.css"
import "@amsterdam/design-system-tokens/dist/compact.css"
`})}),`
`,(0,c.jsx)(t.h2,{id:`contributing`,children:`Contributing`}),`
`,(0,c.jsxs)(t.p,{children:[`You’re welcome to contribute to this project.
Check our `,(0,c.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system/blob/develop/CONTRIBUTING.md`,rel:`nofollow`,children:`Contributing guidelines`}),` when you start.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};