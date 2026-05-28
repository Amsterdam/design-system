import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-DDFbAEsi.js";import{r as n}from"./react-CafdquB1.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks--q5d6Q7h.js";import{n as l,t as u}from"./DesignTokensTable-BtfnAxqV.js";import{t as d}from"./mdx-react-shim-DG8Iu291.js";import{InverseColour as f,LargeText as p,SmallText as m,WithIcon as h,n as g,t as _}from"./Paragraph.stories-Cqi_3w5a.js";var v,y=e((()=>{v=`<!-- @license CC0-1.0 -->

# Paragraph

Represents a paragraph of running text, form instructions, and other standalone text fragments.

## Guidelines

- Group sentences that belong together into a paragraph.
  Start a new paragraph when the text shifts to a different topic or has its own purpose.
- Consider whether a paragraph with more than 7 sentences or 140 words would be clearer if you divide the text into two paragraphs.
  Texts with not overly long paragraphs are easier to understand, and grouping makes information quicker to locate.
- Use [Margin](/docs/utilities-css-margin--docs) or [Prose](/docs/utilities-css-prose--docs) to add vertical whitespace.

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
`})),b,x,S=e((()=>{b={paragraph:{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},inverse:{color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},small:{"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},large:{"font-size":{$value:`{ams.typography.body-text.large.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.large.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"text-wrap":{$value:`balance`,$extensions:{"nl.amsterdam.type":`textWrap`}}}}},x={ams:b}}));function C(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(r,{of:_}),`
`,(0,T.jsx)(c,{children:v}),`
`,(0,T.jsx)(o,{}),`
`,(0,T.jsx)(a,{}),`
`,(0,T.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(t.h3,{id:`large-text`,children:`Large text`}),`
`,(0,T.jsx)(t.p,{children:`Use this size only for the lead paragraph of a page.
A lead paragraph is optional, but there must be no more than 1 per page.`}),`
`,(0,T.jsxs)(t.p,{children:[`A lead paragraph introduces the page’s content and encourages the reader to continue.
Its line lengths are automatically balanced to match the visual behaviour of the
`,(0,T.jsx)(t.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),` that typically precedes it.`]}),`
`,(0,T.jsx)(s,{of:p}),`
`,(0,T.jsx)(t.h3,{id:`small-text`,children:`Small text`}),`
`,(0,T.jsx)(t.p,{children:`We use a smaller font size for text in a Figure Caption and for metadata like dates or categories.`}),`
`,(0,T.jsx)(s,{of:m}),`
`,(0,T.jsx)(t.h3,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,T.jsx)(t.p,{children:`Use the inverse colour if the Paragraph sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,(0,T.jsx)(s,{of:f}),`
`,(0,T.jsx)(t.h3,{id:`with-an-icon`,children:`With an icon`}),`
`,(0,T.jsxs)(t.p,{children:[`Use a `,(0,T.jsx)(t.a,{href:`/docs/components-layout-row--docs`,children:`Row`}),` and the `,(0,T.jsx)(t.code,{children:`size`}),` prop of `,(0,T.jsx)(t.a,{href:`/docs/components-media-icon--docs`,children:`Icon`}),` to align body text with an icon.`]}),`
`,(0,T.jsx)(s,{of:h}),`
`,(0,T.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`]}),`
`,(0,T.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(u,{tokens:x})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),d(),i(),g(),y(),S(),l()}))();export{w as default};