import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{useMDXComponents as o}from"./index-CRbi4mQH.js";import{M as s,d as i,P as h,e as p,f as a}from"./index-BBXGU_rJ.js";import{P as l,L as d,S as c,I as g}from"./Paragraph.stories-3bJuJSHR.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Bb_yw8w_.js";import"../sb-preview/runtime.js";import"./index-BOkhicXD.js";import"./index-DXimoRZY.js";import"./index-B8K4vdXH.js";import"./index-DrFu-skq.js";import"./decorators-CMqafKrE.js";import"./exampleContent-CRK3_7Hv.js";import"./Paragraph-DpVlyIEJ.js";import"./clsx-B-dksMZM.js";const m=`<!-- @license CC0-1.0 -->

# Paragraph

Represents a paragraph of running text, form instructions, and other standalone text fragments.

## Guidelines

- Group sentences that belong together into a paragraph.
  Start a new paragraph when the text shifts to a different topic or has its own purpose.
- Consider whether a paragraph with more than 7 sentences or 140 words would be clearer if you divide the text into two paragraphs.
  Texts with not overly long paragraphs are easier to understand, and grouping makes information quicker to locate.

## Relevant WCAG Rules

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
`;/*@license CC0-1.0*/function r(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",...o(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:l}),`
`,e.jsx(i,{children:m}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"default",children:"Default"}),`
`,e.jsx(h,{}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h3,{id:"large",children:"Large"}),`
`,e.jsx(t.p,{children:`Use this size only for the introductory text of a page.
It is not mandatory to use an introductory text, and there should be a maximum of 1 per page.`}),`
`,e.jsx(t.p,{children:`An introductory text is a concise description of the page’s content.
Use this text to entice the reader to continue reading.`}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(t.h3,{id:"small",children:"Small"}),`
`,e.jsx(t.p,{children:`Use this size for auxiliary texts, captions, metadata, etc.
Keep these texts short.`}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(t.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"inverseColor"}),` prop if the Paragraph sits on a dark background.
This ensures the colour of the text provides enough contrast.`]}),`
`,e.jsx(a,{of:g})]})}function z(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{z as default};
