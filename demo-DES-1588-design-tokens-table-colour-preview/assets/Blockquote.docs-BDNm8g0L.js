import{j as e}from"./iframe-BaUwxCZl.js";import{useMDXComponents as s}from"./index-DT8EWbKi.js";import{M as r,f as a,P as i,h as l,i as h}from"./blocks-CZ3PMVOZ.js";import{a as m,I as c}from"./Blockquote.stories-D3zBhZS4.js";import{D as u}from"./DesignTokensTable-CXEFAGMk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQaJWg6X.js";import"./exampleContent-Du2yH2Fl.js";import"./BorderSample-C_ASJ1Bz.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-omcdFyU3.js";const p=`<!-- @license CC0-1.0 -->

# Blockquote

We use blockquotes to emphasize citations.
A quote appears differently from the main text to make it stand out.

## Guidelines

- Quote someone’s literal written or oral text.
- A quote has a width of half or a whole column of text.
- The component adds the correct quotation marks.

## Relevant WCAG requirements

- [WCAG 3.1.2](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html): if the citation is in a language other than that of the surrounding content, indicate so through the \`lang\` attribute.
`,d={blockquote:{color:{$value:"{ams.color.text.default}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.x-large.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.bold.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.x-large.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},inverse:{color:{$value:"{ams.color.text.inverse}",$type:"color"}}}},f={ams:d};function n(o){const t={h2:"h2",h3:"h3",p:"p",...s(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(r,{of:m}),`
`,e.jsx(a,{children:p}),`
`,e.jsx(i,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(t.p,{children:`Use the inverse colour if the Blockquote sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,e.jsx(h,{of:c}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(u,{tokens:f})]})}function M(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{M as default};
