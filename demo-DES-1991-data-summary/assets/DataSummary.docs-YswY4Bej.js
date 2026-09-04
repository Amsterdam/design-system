import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-BQKRe05W.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-DwCPbVVp.js";import{a as p,i as m,n as h,o as g,r as _,s as v,t as y}from"./DataSummary.stories-DnR_uDy5.js";var b,x;function S(){return(S=e((()=>{b={"data-summary":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.hint":`Applies to values only; labels set their own font size. Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.hint":`Applies to values only; labels set their own line height. Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"row-gap":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`The whitespace between the separator of an item and the label of the next one. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},item:{"border-block-end":{$value:`{ams.border.width.s} solid {ams.color.separator}`,$extensions:{"nl.amsterdam.type":`border`}},"padding-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`The whitespace between the content of an item and its separator. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"vi-medium":{"column-gap":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"grid-template-columns":{$value:`minmax(0, 15rem) minmax(0, 1fr) auto`,$description:`Three columns: the label, the value, and the optional action. The action column collapses when an item has no action.`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}}},label:{"font-size":{$value:`{ams.typography.heading.4.font-size}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.heading.4.line-height}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.hint":`Only applies when the label sits above its value. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},value:{"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"row-gap":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`The whitespace between the parts of a composite value. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},action:{"margin-block-start":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`Only applies when the action sits below its value. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}},x={ams:b}})))()}function C(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(s,{of:_}),`
`,(0,T.jsx)(o,{}),`
`,(0,T.jsx)(t,{of:_}),`
`,(0,T.jsx)(n,{}),`
`,(0,T.jsx)(i,{}),`
`,(0,T.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,T.jsxs)(r.p,{children:[`The Item, Label, Value, and Action subcomponents make up a Data Summary.
An Item groups one label with its value, Label and Value render the `,(0,T.jsx)(r.code,{children:`<dt>`}),` and `,(0,T.jsx)(r.code,{children:`<dd>`}),` elements, and an Action holds the link or button that changes that value.
None of them has props of its own; the examples on this page show them in place.`]}),`
`,(0,T.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,T.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,T.jsxs)(r.ul,{children:[`
`,(0,T.jsx)(r.li,{children:`To show a set of data that a reader checks or scans, such as the details of an object, a case, or a person.`}),`
`,(0,T.jsx)(r.li,{children:`To let a reader review the answers they gave in a form before they submit it.`}),`
`]}),`
`,(0,T.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,T.jsxs)(r.ul,{children:[`
`,(0,T.jsxs)(r.li,{children:[`For data that is compared across rows or columns: use a `,(0,T.jsx)(r.a,{href:`/docs/components-containers-table--docs`,children:`Table`}),`.`]}),`
`,(0,T.jsxs)(r.li,{children:[`For terms and their meanings, such as a glossary: use a `,(0,T.jsx)(r.a,{href:`/docs/components-text-description-list--docs`,children:`Description List`}),`.`]}),`
`]}),`
`,(0,T.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,T.jsx)(r.p,{children:`Give every item a Label and a Value.
Add an Action only when the reader can change that value on the spot.`}),`
`,(0,T.jsx)(r.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,T.jsx)(r.p,{children:`Keep labels short and write them without a colon.
Write an action as the change it makes, such as ‘Wijzigen’, and add the label of its item as visually hidden text so the accessible name stays unique.`}),`
`,(0,T.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,T.jsx)(r.h3,{id:`orientation`,children:`Orientation`}),`
`,(0,T.jsx)(r.p,{children:`A label and its value sit side by side, and stack as soon as the container gets too narrow for both.
Resize the following example to see the Data Summary adapt its layout to the available width.`}),`
`,(0,T.jsx)(a,{of:p}),`
`,(0,T.jsx)(r.h3,{id:`stacked`,children:`Stacked`}),`
`,(0,T.jsx)(r.p,{children:`Set the orientation to ‘vertical’ to place every value below its label, however wide the container is.
Use this when the values are long, or when the summary sits in a narrow column of a wider page.`}),`
`,(0,T.jsx)(a,{of:g}),`
`,(0,T.jsx)(r.h3,{id:`action`,children:`Action`}),`
`,(0,T.jsx)(r.p,{children:`An item can offer an action on its value, such as a link to the step of a form where that value is entered.
The text, the icon, and the type of the action are yours to choose: pass a Standalone Link, a Link, or a Button.`}),`
`,(0,T.jsx)(r.p,{children:`Repeated actions read as a list of identical links to anyone who navigates by links alone.
Add the label of the item as visually hidden text to tell them apart.`}),`
`,(0,T.jsx)(a,{of:y}),`
`,(0,T.jsx)(r.h3,{id:`composite-value`,children:`Composite value`}),`
`,(0,T.jsx)(r.p,{children:`A value takes rich content: several lines of text, an address, a paragraph, a link, or an image.
Its parts are spaced evenly, so an address or a set of photos needs no markup of its own.`}),`
`,(0,T.jsx)(a,{of:h}),`
`,(0,T.jsx)(r.h3,{id:`form-summary`,children:`Form summary`}),`
`,(0,T.jsx)(r.p,{children:`A summary of the answers in a form is an application of Data Summary rather than a component of its own.
Combine it with a heading, an action per item that returns to the matching question, and a button that submits the form.`}),`
`,(0,T.jsx)(r.p,{children:`Group data about several people or subjects by placing a heading above each Data Summary.`}),`
`,(0,T.jsx)(a,{of:m}),`
`,(0,T.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,T.jsx)(r.p,{children:`Labels and values wrap and hyphenate, so long content stays inside the column instead of overflowing it.
Below the breakpoint every value moves under its label, which keeps a Data Summary free of horizontal scroll on narrow screens.`}),`
`,(0,T.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,T.jsx)(r.p,{children:`Items are separated by a line, which runs the full width of the summary.
The whitespace above and below that line is the same, so the line sits between two items rather than belonging to one.`}),`
`,(0,T.jsx)(r.p,{children:`Labels use heading typography and values use body text, which gives the two different line heights.
Side by side, a label therefore gets half of that difference as extra space above it, so its first line sits level with the first line of its value.`}),`
`,(0,T.jsxs)(r.p,{children:[`The column for the labels is at most `,(0,T.jsx)(r.code,{children:`15rem`}),` wide.
Labels and values sit next to each other when their `,(0,T.jsx)(r.a,{href:`/docs/utilities-css-query-container--docs`,children:`query container`}),` is wide enough (at least `,(0,T.jsx)(r.code,{children:`32rem`}),`).`]}),`
`,(0,T.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,T.jsxs)(r.p,{children:[`A Data Summary renders `,(0,T.jsx)(r.code,{children:`dl`}),`, `,(0,T.jsx)(r.code,{children:`dt`}),`, and `,(0,T.jsx)(r.code,{children:`dd`}),` elements.
These tie each label to its value in the markup instead of only through the layout, which is the kind of relationship `,(0,T.jsx)(r.a,{href:`https://www.w3.org/TR/WCAG22/#info-and-relationships`,rel:`nofollow`,children:`WCAG 1.3.1`}),` asks to be made available.
An Item renders a `,(0,T.jsx)(r.code,{children:`div`}),` around one pair, which HTML permits inside a `,(0,T.jsx)(r.code,{children:`dl`}),`.`]}),`
`,(0,T.jsxs)(r.p,{children:[`An Action renders a second `,(0,T.jsx)(r.code,{children:`dd`}),`, so its link or button is announced in the context of the label it acts on.
Give repeated actions a unique accessible name with the `,(0,T.jsx)(r.code,{children:`ams-visually-hidden`}),` helper, as `,(0,T.jsx)(r.a,{href:`https://www.w3.org/TR/WCAG22/#link-purpose-in-context`,rel:`nofollow`,children:`WCAG 2.4.4`}),` asks.
Use visually hidden text rather than `,(0,T.jsx)(r.code,{children:`aria-label`}),`, because browsers do not reliably translate that attribute.`]}),`
`,(0,T.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,T.jsxs)(r.ul,{children:[`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.a,{href:`/docs/components-text-description-list--docs`,children:`Description List`}),` – pairs terms with their meanings, without separators or actions.`]}),`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.a,{href:`/docs/components-containers-table--docs`,children:`Table`}),` – presents data that is compared across rows and columns.`]}),`
`]}),`
`,(0,T.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(f,{tokens:x})]})}function w(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;function E(){return(E=e((()=>{T=c(),u(),r(),d(),S(),v()})))()}E();export{w as default};