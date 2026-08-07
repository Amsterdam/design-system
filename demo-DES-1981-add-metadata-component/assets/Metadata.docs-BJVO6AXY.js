import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-BlJ-wYB0.js";import{i as p,n as m,r as h,t as g}from"./Metadata.stories-DuvqthuB.js";var _,v;function y(){return(y=e((()=>{_={metadata:{color:{$value:`{ams.color.text.secondary}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},inverse:{color:{$value:`{ams.color.text.inverse}`,$extensions:{"nl.amsterdam.type":`color`}}},separator:{"block-size":{$value:`0.25rem`,$type:`dimension`},"inline-size":{$value:`0.25rem`,$type:`dimension`},"margin-inline":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"vertical-align":{$value:`0.15em`,$type:`dimension`,$description:`Raises the square to the middle of the lowercase letters beside it.`}},small:{"font-size":{$value:`{ams.typography.body-text.small.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.small.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}}}},v={ams:_}})))()}function b(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[`
`,`
`,`
`,`
`,(0,S.jsx)(s,{of:m}),`
`,(0,S.jsx)(o,{}),`
`,(0,S.jsx)(t,{of:m}),`
`,(0,S.jsx)(n,{}),`
`,(0,S.jsx)(i,{}),`
`,(0,S.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,S.jsx)(r.p,{children:`Metadata has one subcomponent: Item.
Each Item holds one kind of metadata, and the component draws a separator between them.`}),`
`,(0,S.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,S.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,S.jsx)(r.p,{children:`Use Metadata for the supporting facts about a piece of content: the date it was published, the categories it belongs to, or both.`}),`
`,(0,S.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,S.jsxs)(r.p,{children:[`Do not use Metadata for running text, or for a standalone fragment that says something in its own right.
That is a `,(0,S.jsx)(r.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),`.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Do not use it to draw attention to a status or a count, which is what a `,(0,S.jsx)(r.a,{href:`/docs/components-feedback-badge--docs`,children:`Badge`}),` is for.`]}),`
`,(0,S.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,S.jsxs)(r.p,{children:[`Place a Metadata directly below the `,(0,S.jsx)(r.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),` of a content page, above the lead paragraph.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Use the regular size there, and the small size inside a `,(0,S.jsx)(r.a,{href:`/docs/components-navigation-card--docs`,children:`Card`}),`, where the metadata sits among smaller text.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Wrap a date in a `,(0,S.jsx)(r.code,{children:`time`}),` element with a `,(0,S.jsx)(r.code,{children:`dateTime`}),` attribute.
The visible date is prose, and `,(0,S.jsx)(r.code,{children:`dateTime`}),` repeats it in the machine-readable format software parses.`]}),`
`,(0,S.jsx)(r.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,S.jsx)(r.p,{children:`Give each kind of metadata its own Item, and separate the values within one kind with a comma.
In ‘1 januari 2026’ and ‘Belastingen, Wonen, WOZ’ there are two kinds, the second of which holds three categories.`}),`
`,(0,S.jsx)(r.p,{children:`Keep every value short enough to read at a glance.
The line is scanned rather than read, and a long value in the middle of it hides the ones on either side.`}),`
`,(0,S.jsxs)(r.p,{children:[`The separator is not read aloud, so say in the words themselves whatever the grouping is meant to convey.
Anything a reader can only get from the way the line is divided is unavailable to someone who does not see it, which is what `,(0,S.jsx)(r.a,{href:`https://www.w3.org/TR/WCAG22/#info-and-relationships`,rel:`nofollow`,children:`WCAG 1.3.1`}),` asks you to avoid.`]}),`
`,(0,S.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,S.jsx)(r.h3,{id:`small-text`,children:`Small text`}),`
`,(0,S.jsx)(r.p,{children:`Use the small size in a Card, where the metadata sits beside a teaser rather than under the title of a page.`}),`
`,(0,S.jsx)(a,{of:h}),`
`,(0,S.jsx)(r.h3,{id:`inverse-colour`,children:`Inverse colour`}),`
`,(0,S.jsx)(r.p,{children:`Use the inverse colour if the Metadata sits on a dark background.
This ensures the colour of the text provides enough contrast.`}),`
`,(0,S.jsx)(a,{of:g}),`
`,(0,S.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,S.jsx)(r.p,{children:`Metadata is set in the secondary text colour, a grey against the near-black of body text.
It sits directly under a title, where it has to be legible without competing with the words it supports.`}),`
`,(0,S.jsxs)(r.p,{children:[`The separator is drawn by CSS, so it can never be forgotten or typed differently from one page to the next.
It is a square, the shape Amsterdam Sans gives the bullet character that marks an `,(0,S.jsx)(r.a,{href:`/docs/components-text-unordered-list--docs`,children:`Unordered List`}),`, but a much smaller one: set as text at the size the typeface draws it, that character would be far heavier than the words on either side of it.`]}),`
`,(0,S.jsx)(r.p,{children:`The square takes its colour from the text rather than carrying one of its own, so the inverse colour needs no second value to keep in step.`}),`
`,(0,S.jsxs)(r.p,{children:[`A Metadata has no vertical margins of its own.
This makes vertical rhythm a property of the layout rather than of the component, which is why `,(0,S.jsx)(r.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` provides it.`]}),`
`,(0,S.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,S.jsxs)(r.p,{children:[`A Metadata renders a `,(0,S.jsx)(r.code,{children:`p`}),` element, so a screen reader moves through it as one paragraph.`]}),`
`,(0,S.jsxs)(r.p,{children:[`Each Item renders a `,(0,S.jsx)(r.code,{children:`span`}),`, which is generic in the accessibility tree, and the separators are backgrounds on empty pseudo-elements.
Nothing therefore marks one kind of metadata off from the next for anyone who does not see the line: it is announced as a single run of text.`]}),`
`,(0,S.jsxs)(r.p,{children:[`A list would carry that grouping, the way an `,(0,S.jsx)(r.a,{href:`/docs/components-text-unordered-list--docs`,children:`Unordered List`}),` does.
A Metadata renders a paragraph instead because it has to be able to sit in the heading group of a `,(0,S.jsx)(r.a,{href:`/docs/components-navigation-card--docs`,children:`Card`}),`, where HTML allows only a heading and paragraphs.
The grouping is therefore visual, and ‘How to write’ covers what that asks of the wording.`]}),`
`,(0,S.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,S.jsxs)(r.ul,{children:[`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),` – for running text and other standalone text fragments.`]}),`
`,(0,S.jsxs)(r.li,{children:[(0,S.jsx)(r.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` – applies the recommended vertical spacing for editorial content.`]}),`
`]}),`
`,(0,S.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,S.jsx)(f,{tokens:v})]})}function x(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;function C(){return(C=e((()=>{S=c(),u(),r(),d(),y(),p()})))()}C();export{x as default};