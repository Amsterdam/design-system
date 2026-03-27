import{j as e}from"./iframe-Czx-_c1G.js";import{useMDXComponents as o}from"./index-DniyLBPi.js";import{M as r,P as a}from"./blocks-DvfWnsyB.js";import{F as i}from"./FormatPostalCode.stories-BFRXLUOO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAexXiCi.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:i}),`
`,e.jsx(t.h1,{id:"format-postal-code",children:"Format Postal Code"}),`
`,e.jsx(t.p,{children:"Formats a Dutch postal code as four digits, a space, and two uppercase letters."}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { formatPostalCode } from "@amsterdam/design-system-react";

formatPostalCode("1014ba"); // '1014 BA'
formatPostalCode("1014 ba"); // '1014 BA'
formatPostalCode("1014 BA"); // '1014 BA'
`})}),`
`,e.jsx(t.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Normalises common input variations: missing space, lowercase letters, surrounding whitespace."}),`
`,e.jsx(t.li,{children:"Returns the input unchanged if it does not match the Dutch postal code pattern (4 digits + 2 letters)."}),`
`]}),`
`,e.jsx(t.h2,{id:"preview",children:"Preview"}),`
`,e.jsx(a,{})]})}function u(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{u as default};
