import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as r}from"./index-CRbi4mQH.js";import{M as a}from"./index-FjG_8Ye2.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BEiGUrOi.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";/*@license CC0-1.0*/function n(t){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{title:"Docs/Getting started/Developers"}),`
`,e.jsx(s.h1,{id:"getting-started-for-developers",children:"Getting started for developers"}),`
`,e.jsx(s.h2,{id:"react",children:"React"}),`
`,e.jsx(s.p,{children:"Install the packages you need, for instance:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`  npm install
  @amsterdam/design-system-assets
  @amsterdam/design-system-css
  @amsterdam/design-system-react
  @amsterdam/design-system-react-icons
  @amsterdam/design-system-tokens
`})}),`
`,e.jsx(s.p,{children:"Import the components and stylesheets you need, for example:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`import { Paragraph } from "@amsterdam/design-system-react";

import "@amsterdam/design-system-assets/font/index.css";
import "@amsterdam/design-system-css/dist/index.css";
import "@amsterdam/design-system-tokens/dist/index.css";

function App() {
  return <Paragraph>Hello world</Paragraph>;
}

export default App;
`})}),`
`,e.jsx(s.h2,{id:"compact-mode",children:"Compact mode"}),`
`,e.jsxs(s.p,{children:[`For applications, the large text and ample white space of the theme can be counterproductive.
That’s why there is a compact mode.
To use the compact mode, import the compact CSS `,e.jsx(s.strong,{children:"after"})," the theme CSS, like so:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`import "@amsterdam/design-system-tokens/dist/index.css";
import "@amsterdam/design-system-tokens/dist/compact.css";
`})})]})}function u(t={}){const{wrapper:s}={...r(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(n,{...t})}):n(t)}export{u as default};
