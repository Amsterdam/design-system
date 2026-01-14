import{j as e}from"./iframe-B-hL_0Ik.js";import{useMDXComponents as r}from"./index-wwsLrtBb.js";import{M as i,f as a,P as m,h,i as s}from"./blocks-D50KQJvQ.js";import{a as c,C as d,W as l}from"./ErrorMessage.stories-D442GcLN.js";import{D as p}from"./DesignTokensTable-D8sl-jCk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dz7aTctx.js";import"./Icon-BapNMd1v.js";import"./BorderSample-MMWi1tqo.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-_eJkxoIo.js";import"./TypographySample-B8VxI2pN.js";const f=`<!-- @license CC0-1.0 -->

# Error Message

Show an error message when there is a form field validation error.
In the error message explain what went wrong and how to fix it.

For guidance and examples on using error messages in a form,
refer to the [Field](/docs/components-forms-field--docs) and [Field Set](/docs/components-forms-field-set--docs) documentation.

Read the documentation by [NL Design System](https://www.nldesignsystem.nl/richtlijnen/formulieren/foutmeldingen) and [Gov.uk](https://design-system.service.gov.uk/components/error-message/) for more information on the contents of error messages and when to show them.
`,u={"error-message":{color:{$value:"{ams.color.feedback.error}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},gap:{$value:"{ams.space.xs}",$type:"dimension"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}}}},x={ams:u};function t(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...r(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(i,{of:c}),`
`,e.jsx(a,{children:f}),`
`,e.jsx(n.h2,{id:"no-rich-text",children:"No rich text"}),`
`,e.jsxs(n.p,{children:[`Do not use rich text (such as links or lists) in an Error Message.
Some screen readers, like VoiceOver, skip over rich text when reading out descriptions.
For more information, see `,e.jsx(n.a,{href:"https://nldesignsystem.nl/richtlijnen/formulieren/descriptions/inhoud/",rel:"nofollow",children:"NL Design System"}),"."]}),`
`,e.jsx(m,{}),`
`,e.jsx(h,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"custom-prefix",children:"Custom prefix"}),`
`,e.jsxs(n.p,{children:[`Error messages are automatically prefixed with a visually hidden text, the Dutch word "Invoerfout".
This makes the error message more clear for screen reader users.
If you want to change this prefix, to support another language for example, you can use the `,e.jsx(n.code,{children:"prefix"})," prop."]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h3,{id:"with-custom-icon",children:"With custom icon"}),`
`,e.jsx(n.p,{children:`Replace the icon with another to use Error Message in a different theme or visual identity.
Websites for the City of Amsterdam must use the default icon.`}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(p,{tokens:x})]})}function S(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{S as default};
