import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-1Ha5aU2j.js";import{M as s,e as i,P as h,f as p,h as a}from"./index-BSLqTP04.js";import{P as c,L as l,S as d,I as g,W as x}from"./Paragraph.stories-Di6bbeT7.js";import"./index-yBjzXJbu.js";import"./index-C0MU9AHG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cn5fndqW.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-DvoLfDtE.js";import"./exampleContent-PGFPgakh.js";import"./Paragraph-Dg4TdYBs.js";import"./clsx-B-dksMZM.js";import"./Row-CGXAxOLh.js";import"./Icon-CJVFfJZC.js";const m=`<!-- @license CC0-1.0 -->

# Paragraph

Represents a paragraph of running text, form instructions, and other standalone text fragments.

## Guidelines

- Group sentences that belong together into a paragraph.
  Start a new paragraph when the text shifts to a different topic or has its own purpose.
- Consider whether a paragraph with more than 7 sentences or 140 words would be clearer if you divide the text into two paragraphs.
  Texts with not overly long paragraphs are easier to understand, and grouping makes information quicker to locate.

## Relevant WCAG rules

- [WCAG 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): Blocks that look like a paragraph are also recognized by a computer as a paragraph.
- [WCAG 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): The contrast of black text on a white background is high enough.
- [WCAG 1.4.4](https://www.w3.org/TR/WCAG21/#resize-text): Text can be resized up to twice its default size.
- [WCAG 1.4.10](https://www.w3.org/TR/WCAG21/#reflow): If the text is wider than the viewport, scrolling is not necessary to see all the text.
- [WCAG 1.4.12](https://www.w3.org/TR/WCAG21/#text-spacing): The mentioned style properties can be adjusted without making the text unreadable.
- [WCAG 3.1.2](https://www.w3.org/TR/WCAG21/#language-of-parts): It is possible to indicate the language of the text.
- [WCAG 1.4.6](https://www.w3.org/TR/WCAG21/#contrast-enhanced): The contrast of black text on a white background is higher than 7:1.
- [WCAG 1.4.8](https://www.w3.org/TR/WCAG21/#visual-presentation): We do not meet all these requirements.

## References

- [MDN: \`<p>\`: The Paragraph element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
- [Hoe lang mag een alinea zijn? En waar hangt dat van af? - Taaladvies.net](https://taaladvies.net/lengte-van-alineas/)
`;/*@license CC0-1.0*/function o(n){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...r(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:c}),`
`,e.jsx(i,{children:m}),`
`,e.jsx(h,{}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"large-text",children:"Large text"}),`
`,e.jsx(t.p,{children:`Use this size only for the lead paragraph of a page.
It is not mandatory to use a lead paragraph, but there must be no more than 1 per page.`}),`
`,e.jsx(t.p,{children:`A lead paragraph introduces the page’s content.
Use this text to entice the reader to continue reading.`}),`
`,e.jsx(a,{of:l}),`
`,e.jsx(t.h3,{id:"small-text",children:"Small text"}),`
`,e.jsx(t.p,{children:`Use this size for auxiliary texts, captions, metadata, etc.
Keep these texts short.`}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(t.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"color"})," prop to ",e.jsx(t.code,{children:"inverse"}),` if the Paragraph sits on a dark background.
This ensures the colour of the text provides enough contrast.`]}),`
`,e.jsx(a,{of:g}),`
`,e.jsx(t.h3,{id:"with-an-icon",children:"With an icon"}),`
`,e.jsxs(t.p,{children:["Use a ",e.jsx(t.a,{href:"/docs/components-layout-row--docs",children:"Row"})," and the ",e.jsx(t.code,{children:"size"})," prop of ",e.jsx(t.a,{href:"/docs/components-media-icon--docs",children:"Icon"})," to align body text with an icon."]}),`
`,e.jsx(a,{of:x})]})}function P(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{P as default};
