import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-DDIQjgnz.js";import{t as c}from"./jsx-runtime-Bq1bXGty.js";import{i as l}from"./react-BnCtKaSV.js";import{n as u,t as d}from"./DesignTokensTable-FRg2iMkA.js";import{t as f}from"./mdx-react-shim-9RzcSRdq.js";import{InverseColour as p,LargeText as m,SmallText as h,WithIcon as g,n as _,t as v}from"./Paragraph.stories-Dcj4083g.js";var y,b,x=e((()=>{y={paragraph:{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},inverse:{color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},small:{"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},large:{"font-size":{$value:`{ams.typography.body-text.large.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.large.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"text-wrap":{$value:`balance`,$extensions:{"nl.amsterdam.type":`textWrap`}}}}},b={ams:y}}));function S(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(s,{of:v}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(t,{of:v}),`
`,(0,w.jsx)(n,{}),`
`,(0,w.jsx)(i,{}),`
`,(0,w.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,w.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,w.jsxs)(r.p,{children:[`Use `,(0,w.jsx)(r.a,{href:`/docs/utilities-css-margin--docs`,children:`Margin`}),` or `,(0,w.jsx)(r.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` to add vertical whitespace.`]}),`
`,(0,w.jsx)(r.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,w.jsx)(r.p,{children:`Group sentences that belong together into a paragraph.
Start a new paragraph when the text shifts to a different topic or has its own purpose.`}),`
`,(0,w.jsx)(r.p,{children:`Consider whether a paragraph with more than 7 sentences or 140 words would be clearer if you divide the text into two paragraphs.
Texts with not overly long paragraphs are easier to understand, and grouping makes information quicker to locate.`}),`
`,(0,w.jsx)(r.p,{children:`The large and small sizes are a visual distinction only; nothing about them is announced.
Say in the text itself whatever a size is meant to signal.`}),`
`,(0,w.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(r.h3,{id:`large-text`,children:`Large text`}),`
`,(0,w.jsx)(r.p,{children:`Use this size only for the lead paragraph of a page.
A lead paragraph is optional, but there must be no more than 1 per page.`}),`
`,(0,w.jsxs)(r.p,{children:[`A lead paragraph introduces the page’s content and encourages the reader to continue.
Its line lengths are automatically balanced to match the visual behaviour of the
`,(0,w.jsx)(r.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),` that typically precedes it.`]}),`
`,(0,w.jsx)(a,{of:m}),`
`,(0,w.jsx)(r.h3,{id:`small-text`,children:`Small text`}),`
`,(0,w.jsx)(r.p,{children:`We use a smaller font size for text in a Figure Caption and for metadata like dates or categories.`}),`
`,(0,w.jsx)(a,{of:h}),`
`,(0,w.jsx)(r.h3,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,w.jsx)(r.p,{children:`Use the inverse colour if the Paragraph sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,(0,w.jsx)(a,{of:p}),`
`,(0,w.jsx)(r.h3,{id:`with-an-icon`,children:`With an icon`}),`
`,(0,w.jsxs)(r.p,{children:[`Use a `,(0,w.jsx)(r.a,{href:`/docs/components-layout-row--docs`,children:`Row`}),` and the `,(0,w.jsx)(r.code,{children:`size`}),` prop of `,(0,w.jsx)(r.a,{href:`/docs/components-media-icon--docs`,children:`Icon`}),` to align body text with an icon.`]}),`
`,(0,w.jsx)(a,{of:g}),`
`,(0,w.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,w.jsxs)(r.p,{children:[`The large and small sizes wrap their text in a `,(0,w.jsx)(r.code,{children:`b`}),` and a `,(0,w.jsx)(r.code,{children:`small`}),` element.
Browsers render those elements bold and smaller on their own, so a lead paragraph and small print keep an appearance of their own even if the stylesheet fails to load.
Once it does load, their usual styling is switched off and the size prop alone sets the appearance, so the text does not turn bold or shrink a second time.`]}),`
`,(0,w.jsx)(r.p,{children:`Body text has the most generous line height of the three sizes, 1.6 against 1.5 for the large and small ones.
Running text is read line after line and needs that space to stay easy to follow, while the shorter lines of a lead paragraph do not.`}),`
`,(0,w.jsxs)(r.p,{children:[`A Paragraph has no vertical margins of its own.
This makes vertical rhythm a property of the layout rather than of the component, which is why `,(0,w.jsx)(r.a,{href:`/docs/utilities-css-margin--docs`,children:`Margin`}),` and `,(0,w.jsx)(r.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` provide it.`]}),`
`,(0,w.jsxs)(r.p,{children:[`Words that are too long for the line are hyphenated rather than left to overflow.
The browser decides where to split them, so the `,(0,w.jsx)(r.a,{href:`/docs/docs-developer-guide-localisation--docs#specify-the-language-for-the-entire-document`,children:`language of the document`}),` must be set correctly.`]}),`
`,(0,w.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,w.jsxs)(r.p,{children:[`A Paragraph renders a `,(0,w.jsx)(r.code,{children:`p`}),` element, so screen readers can move through running text one paragraph at a time.`]}),`
`,(0,w.jsxs)(r.p,{children:[`The `,(0,w.jsx)(r.code,{children:`b`}),` and `,(0,w.jsx)(r.code,{children:`small`}),` elements that the large and small sizes add carry no meaning of their own; both are generic in the accessibility tree.
A lead paragraph and small print are therefore a visual distinction only, and neither is announced any differently from body text.`]}),`
`,(0,w.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,w.jsxs)(r.ul,{children:[`
`,(0,w.jsxs)(r.li,{children:[(0,w.jsx)(r.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`]}),`
`,(0,w.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(d,{tokens:b})]})}function C(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=c(),f(),r(),u(),x(),_()}))();export{C as default};