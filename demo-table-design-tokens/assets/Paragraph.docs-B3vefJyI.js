import{j as e}from"./iframe-BiErRGvs.js";import{useMDXComponents as s}from"./index-BVfInj7M.js";import{M as r,f as i,P as h,h as l,i as n}from"./blocks-BzC5Qy9m.js";import{P as p,L as c,S as d,I as g,W as m}from"./Paragraph.stories-Bqa02M-j.js";import{D as x}from"./DesignTokensTable-6Gsg3hI7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bdsl2Juj.js";import"./exampleContent-Du2yH2Fl.js";import"./Paragraph-DbhmlTuN.js";import"./Row-CLhNDg_M.js";import"./Icon-Db5Tg61B.js";const u=`<!-- @license CC0-1.0 -->

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
`,w={paragraph:{color:{value:"{ams.color.text.default}"},"font-family":{value:"{ams.typography.font-family}"},"font-size":{value:"{ams.typography.body-text.font-size}"},"font-weight":{value:"{ams.typography.body-text.font-weight}"},"line-height":{value:"{ams.typography.body-text.line-height}"},inverse:{color:{value:"{ams.color.text.inverse}"}},small:{"font-size":{value:"{ams.typography.body-text.small.font-size}"},"line-height":{value:"{ams.typography.body-text.small.line-height}"}},large:{"font-size":{value:"{ams.typography.body-text.large.font-size}"},"line-height":{value:"{ams.typography.body-text.large.line-height}"},"text-wrap":{value:"balance"}}}},f={ams:w};function o(a){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...s(),...a.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(r,{of:p}),`
`,e.jsx(i,{children:u}),`
`,e.jsx(h,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"large-text",children:"Large text"}),`
`,e.jsx(t.p,{children:`Use this size only for the lead paragraph of a page.
A lead paragraph is optional, but there must be no more than 1 per page.`}),`
`,e.jsxs(t.p,{children:[`A lead paragraph introduces the page’s content and encourages the reader to continue.
Its line lengths are automatically balanced to match the visual behaviour of the
`,e.jsx(t.a,{href:"/docs/components-text-heading--docs",children:"Heading"})," that typically precedes it."]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(t.h3,{id:"small-text",children:"Small text"}),`
`,e.jsx(t.p,{children:"We use a smaller font size for text in a Figure Caption and for metadata like dates or categories."}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(t.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsx(t.p,{children:`Use the inverse colour if the Paragraph sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(t.h3,{id:"with-an-icon",children:"With an icon"}),`
`,e.jsxs(t.p,{children:["Use a ",e.jsx(t.a,{href:"/docs/components-layout-row--docs",children:"Row"})," and the ",e.jsx(t.code,{children:"size"})," prop of ",e.jsx(t.a,{href:"/docs/components-media-icon--docs",children:"Icon"})," to align body text with an icon."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(x,{tokens:f})]})}function R(a={}){const{wrapper:t}={...s(),...a.components};return t?e.jsx(t,{...a,children:e.jsx(o,{...a})}):o(a)}export{R as default};
