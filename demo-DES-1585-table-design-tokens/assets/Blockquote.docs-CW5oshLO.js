import{j as t}from"./iframe-Ds5hPfnj.js";import{useMDXComponents as s}from"./index-D8uEBF35.js";import{M as r,f as a,P as i,h as l,i as m}from"./blocks-D9na97cF.js";import{a as h,I as c}from"./Blockquote.stories-C10lvtO8.js";import{D as u}from"./DesignTokensTable-D-5V4mAw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-QkjnO30K.js";import"./exampleContent-Du2yH2Fl.js";import"./BorderSample-BNrnKrHa.js";import"./formatTokenValue-BYjgZrXg.js";import"./ColorSample-CRNPoomG.js";import"./SpaceSample-CSG3Dgin.js";import"./TypographySample-BOzwJ_nI.js";const p=`<!-- @license CC0-1.0 -->

# Blockquote

We use blockquotes to emphasize citations.
A quote appears differently from the main text to make it stand out.

## Guidelines

- Quote someone’s literal written or oral text.
- A quote has a width of half or a whole column of text.
- The component adds the correct quotation marks.

## Relevant WCAG requirements

- [WCAG 3.1.2](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html): if the citation is in a language other than that of the surrounding content, indicate so through the \`lang\` attribute.
`,d={blockquote:{color:{$value:"{ams.color.text.default}",$type:"color"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.x-large.font-size}",$extensions:{"amsterdam.designsystem.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.bold.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.x-large.line-height}",$extensions:{"amsterdam.designsystem.type":"lineHeight"}},inverse:{color:{$value:"{ams.color.text.inverse}",$type:"color"}}}},f={ams:d};function n(o){const e={h2:"h2",h3:"h3",p:"p",...s(),...o.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,`
`,`
`,t.jsx(r,{of:h}),`
`,t.jsx(a,{children:p}),`
`,t.jsx(i,{}),`
`,t.jsx(l,{}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(e.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,t.jsx(e.p,{children:`Use the inverse colour if the Blockquote sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,t.jsx(m,{of:c}),`
`,t.jsx(e.h2,{id:"tokens",children:"Tokens"}),`
`,t.jsx(u,{tokens:f})]})}function D(o={}){const{wrapper:e}={...s(),...o.components};return e?t.jsx(e,{...o,children:t.jsx(n,{...o})}):n(o)}export{D as default};
