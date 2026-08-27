import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-BQKRe05W.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-Z2X-GIus.js";import{a as p,i as m,n as h,r as g,t as _}from"./Metadata.stories-yUpkls-R.js";var v,y;function b(){return(b=e((()=>{v={metadata:{color:{$value:`{ams.color.text.secondary}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},inverse:{color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},separator:{"block-size":{$value:`0.25rem`,$type:`dimension`},"inline-size":{$value:`0.25rem`,$type:`dimension`},"margin-inline":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"vertical-align":{$value:`0.15em`,$type:`dimension`,$description:`Raises the square to the middle of the lowercase letters beside it.`}},small:{"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}}}},y={ams:v}})))()}function x(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[`
`,`
`,`
`,`
`,(0,C.jsx)(s,{of:h}),`
`,(0,C.jsx)(o,{}),`
`,(0,C.jsx)(t,{of:h}),`
`,(0,C.jsx)(n,{}),`
`,(0,C.jsx)(i,{}),`
`,(0,C.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,C.jsx)(r.p,{children:`Metadata has one subcomponent: Separator.
Put one between two kinds of metadata; a Metadata that holds a single kind needs none.`}),`
`,(0,C.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,C.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,C.jsx)(r.p,{children:`Use Metadata for the supporting facts about a piece of content: the date it was published, the categories it belongs to, or both.`}),`
`,(0,C.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,C.jsxs)(r.p,{children:[`Do not use Metadata for running text, or for a standalone fragment that says something in its own right.
That is a `,(0,C.jsx)(r.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),`.`]}),`
`,(0,C.jsxs)(r.p,{children:[`Do not use it to draw attention to a status or a count, which is what a `,(0,C.jsx)(r.a,{href:`/docs/components-feedback-badge--docs`,children:`Badge`}),` is for.`]}),`
`,(0,C.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,C.jsxs)(r.p,{children:[`Place a Metadata directly below the `,(0,C.jsx)(r.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),` of a content page, above the lead paragraph.`]}),`
`,(0,C.jsxs)(r.p,{children:[`Use the regular size there, and the small size inside a `,(0,C.jsx)(r.a,{href:`/docs/components-navigation-card--docs`,children:`Card`}),`, where the metadata sits among smaller text.`]}),`
`,(0,C.jsxs)(r.p,{children:[`Wrap a date in a `,(0,C.jsx)(r.code,{children:`time`}),` element with a `,(0,C.jsx)(r.code,{children:`dateTime`}),` attribute.
The visible date is prose, and `,(0,C.jsx)(r.code,{children:`dateTime`}),` repeats it in the machine-readable format software parses.`]}),`
`,(0,C.jsx)(r.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,C.jsx)(r.p,{children:`Separate two kinds of metadata with a Separator, and the values within one kind with a comma.
In ‘1 januari 2026’ and ‘Belastingen, Wonen, WOZ’ there are two kinds, the second of which holds three categories.`}),`
`,(0,C.jsx)(r.p,{children:`Keep every value short enough to read at a glance.
The line is scanned rather than read, and a long value in the middle of it hides the ones on either side.`}),`
`,(0,C.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,C.jsx)(r.h3,{id:`one-kind-of-metadata`,children:`One kind of metadata`}),`
`,(0,C.jsx)(r.p,{children:`A Metadata that holds only a date, or only categories, needs no Separator.`}),`
`,(0,C.jsx)(a,{of:g}),`
`,(0,C.jsx)(r.h3,{id:`small-text`,children:`Small text`}),`
`,(0,C.jsx)(r.p,{children:`Use the small size in a Card, where the metadata sits beside a teaser rather than under the title of a page.`}),`
`,(0,C.jsx)(a,{of:m}),`
`,(0,C.jsx)(r.h3,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,C.jsx)(r.p,{children:`Use the inverse colour if the Metadata sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,(0,C.jsx)(a,{of:_}),`
`,(0,C.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,C.jsx)(r.p,{children:`Metadata is set in the secondary text colour, a grey against the near-black of body text.
It sits directly under a title, where it has to be legible without competing with the words it supports.`}),`
`,(0,C.jsx)(r.p,{children:`The Separator holds an en dash, which CSS hides behind a square.
Writing the dash into the page rather than drawing it entirely in CSS is what lets the line survive: it reaches a screen reader, it comes along when the line is copied, and it still reads correctly on a page whose stylesheet failed to load.`}),`
`,(0,C.jsxs)(r.p,{children:[`The square is a smaller form of the bullet that Amsterdam Sans draws for an `,(0,C.jsx)(r.a,{href:`/docs/components-text-unordered-list--docs`,children:`Unordered List`}),`.`]}),`
`,(0,C.jsx)(r.p,{children:`The square takes its colour from the text rather than carrying one of its own, so the inverse colour needs no second value to keep in step.`}),`
`,(0,C.jsxs)(r.p,{children:[`A Metadata has no vertical margins of its own.
This makes vertical rhythm a property of the layout rather than of the component, which is why `,(0,C.jsx)(r.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` provides it.`]}),`
`,(0,C.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,C.jsxs)(r.p,{children:[`A Metadata renders a `,(0,C.jsx)(r.code,{children:`p`}),` element, so a screen reader moves through it as one paragraph.
That lets it sit in the heading group of a `,(0,C.jsx)(r.a,{href:`/docs/components-navigation-card--docs`,children:`Card`}),`, where HTML allows only a heading and paragraphs.`]}),`
`,(0,C.jsxs)(r.p,{children:[`Each Separator renders a `,(0,C.jsx)(r.code,{children:`span`}),` holding an en dash, hidden behind a square by CSS but left in the accessibility tree.
Someone who does not see the line therefore hears the same division as someone who does.
That is what `,(0,C.jsx)(r.a,{href:`https://www.w3.org/TR/WCAG22/#info-and-relationships`,rel:`nofollow`,children:`WCAG 1.3.1`}),` asks of a grouping that would otherwise exist only in the styling.`]}),`
`,(0,C.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,C.jsxs)(r.ul,{children:[`
`,(0,C.jsxs)(r.li,{children:[(0,C.jsx)(r.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),` – for running text and other standalone text fragments.`]}),`
`,(0,C.jsxs)(r.li,{children:[(0,C.jsx)(r.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`]}),`
`,(0,C.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,C.jsx)(f,{tokens:y})]})}function S(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,C.jsx)(t,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=c(),u(),r(),d(),b(),p()})))()}w();export{S as default};