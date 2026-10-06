import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t,h as n,i as r,u as i}from"./blocks-C8qI43rQ.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./FormatPostalCode.stories-BF-qT9qL.js";function u(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...o(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[`
`,`
`,`
`,(0,f.jsx)(i,{of:l}),`
`,(0,f.jsx)(n.h1,{id:`format-postal-code`,children:`Format Postal Code`}),`
`,(0,f.jsx)(n.p,{children:`Formats a Dutch postal code as four digits, a space, and two uppercase letters.`}),`
`,(0,f.jsx)(t,{}),`
`,(0,f.jsx)(r,{}),`
`,(0,f.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-tsx`,children:`import { formatPostalCode } from "@amsterdam/design-system-react";

formatPostalCode("1014ba"); // '1014 BA'
formatPostalCode("1014 ba"); // '1014 BA'
formatPostalCode("1014 BA"); // '1014 BA'
`})}),`
`,(0,f.jsx)(n.h2,{id:`guidelines`,children:`Guidelines`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsx)(n.li,{children:`Normalises common input variations: missing space, lowercase letters, surrounding whitespace.`}),`
`,(0,f.jsx)(n.li,{children:`Registries such as the BAG store postal codes without a space, so this is the form you will usually pass in.`}),`
`,(0,f.jsx)(n.li,{children:`Returns the input unchanged if it does not match the Dutch postal code pattern (4 digits + 2 letters).`}),`
`,(0,f.jsx)(n.li,{children:`Formats any four digits followed by two letters, on purpose.
It deliberately does not reject a number range or a combination of letters: postal codes starting with a zero are being introduced for Bonaire, Sint Eustatius, and Saba, and letters that were once left out have since been issued.
A stricter check would reject addresses that are real.`}),`
`]}),`
`,(0,f.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[`Do not add an `,(0,f.jsx)(n.code,{children:`aria-label`}),` to spell out the postal code.
It overrides the way people have set up their screen reader to read numbers and letters, which is their choice to make, not ours.`]}),`
`]})]})}function d(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;function p(){return(p=e((()=>{f=a(),s(),n(),c()})))()}p();export{d as default};