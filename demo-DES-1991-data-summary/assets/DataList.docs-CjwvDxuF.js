import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-BFa-eblR.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-CaHuDZF6.js";import{a as p,c as m,i as h,n as g,o as _,r as v,s as y,t as b}from"./DataList.stories-AoRyxZ1K.js";var x,S;function C(){return(C=e((()=>{x={"data-list-header":{"border-block-end":{$value:`{ams.border.width.m} solid {ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`border`}},"margin-block-end":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.hint":`The whitespace between the line and a Data List that follows. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`The whitespace between the content of the header and its line. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},S={ams:x}})))()}var w,T;function E(){return(E=e((()=>{w={"data-list":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.hint":`Applies to values only; labels set their own font size. Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.hint":`Applies to values only; labels set their own line height. Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"row-gap":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`The whitespace between the separator of an item and the label of the next one. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},item:{"border-block-end":{$value:`{ams.border.width.s} solid {ams.color.separator}`,$extensions:{"nl.amsterdam.type":`border`}},"padding-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`The whitespace between the content of an item and its separator. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"vi-medium":{"column-gap":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"grid-template-columns":{$value:`minmax(0, 15rem) minmax(0, 1fr) auto`,$description:`Three columns: the label, the value, and the optional actions. The actions column collapses when an item has none.`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}},narrow:{"grid-template-columns":{$value:`minmax(0, 1fr) minmax(0, 4fr) auto`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}},medium:{"grid-template-columns":{$value:`minmax(0, 1fr) minmax(0, 2fr) auto`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}},wide:{"grid-template-columns":{$value:`minmax(0, 1fr) minmax(0, 1fr) auto`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}}}},label:{"font-size":{$value:`{ams.typography.heading.4.font-size}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.heading.4.line-height}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.hint":`Only applies when the label sits above its value. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},value:{"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}},actions:{"margin-block-start":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`Only applies when the actions sit below their value. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}},T={ams:w}})))()}function D(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,k.jsxs)(k.Fragment,{children:[`
`,`
`,`
`,`
`,(0,k.jsx)(s,{of:v}),`
`,(0,k.jsx)(o,{}),`
`,(0,k.jsx)(t,{of:v}),`
`,(0,k.jsx)(n,{}),`
`,(0,k.jsx)(i,{}),`
`,(0,k.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,k.jsxs)(r.p,{children:[`The Item, Label, Value, and Actions subcomponents make up a Data List.
An Item groups one label with its value, Label and Value render the `,(0,k.jsx)(r.code,{children:`<dt>`}),` and `,(0,k.jsx)(r.code,{children:`<dd>`}),` elements, and Actions holds the links or buttons that act on that value.
None of them has props of its own; the examples on this page show them in place.`]}),`
`,(0,k.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,k.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,k.jsxs)(r.ul,{children:[`
`,(0,k.jsx)(r.li,{children:`To show a set of data that a reader checks or scans, such as the details of an object, a case, or a person.`}),`
`,(0,k.jsx)(r.li,{children:`To let a reader review the answers they gave in a form before they submit it.`}),`
`]}),`
`,(0,k.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,k.jsxs)(r.ul,{children:[`
`,(0,k.jsxs)(r.li,{children:[`For data that is compared across rows or columns: use a `,(0,k.jsx)(r.a,{href:`/docs/components-containers-table--docs`,children:`Table`}),`.`]}),`
`,(0,k.jsxs)(r.li,{children:[`For terms and their meanings, such as a glossary: use a `,(0,k.jsx)(r.a,{href:`/docs/components-text-description-list--docs`,children:`Description List`}),`.`]}),`
`,(0,k.jsxs)(r.li,{children:[`For values to suggest while someone types in a field: despite the name, a Data List is unrelated to the HTML `,(0,k.jsxs)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist`,rel:`nofollow`,children:[(0,k.jsx)(r.code,{children:`datalist`}),` element`]}),`.`]}),`
`]}),`
`,(0,k.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,k.jsx)(r.p,{children:`Give every item a Label and a Value.
Add Actions only when the reader can change or remove that value, whether that takes them elsewhere or happens in place.`}),`
`,(0,k.jsx)(r.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,k.jsx)(r.p,{children:`Keep labels short and write them without a colon.
Write an action as the change it makes, such as ‘Wijzigen’, and add the label of its item as visually hidden text so the accessible name stays unique.`}),`
`,(0,k.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,k.jsx)(r.h3,{id:`orientation`,children:`Orientation`}),`
`,(0,k.jsx)(r.p,{children:`A label and its value sit side by side, and stack as soon as the container gets too narrow for both.
Resize the following example to see the Data List adapt its layout to the available width.`}),`
`,(0,k.jsx)(a,{of:_}),`
`,(0,k.jsx)(r.h3,{id:`stacked`,children:`Stacked`}),`
`,(0,k.jsx)(r.p,{children:`Set the orientation to ‘vertical’ to place every value below its label, however wide the container is.
Use this when the values are long, or when the list sits in a narrow column of a wider page.`}),`
`,(0,k.jsx)(a,{of:y}),`
`,(0,k.jsx)(r.h3,{id:`actions`,children:`Actions`}),`
`,(0,k.jsxs)(r.p,{children:[`An item can offer one or more actions on its value, such as a link to the step of a form where that value is entered or a button that opens a dialog to edit the value directly.
The text, the icon, and the type of each action are yours to choose: pass Standalone Links, Links, or Buttons.
An `,(0,k.jsx)(r.a,{href:`/docs/components-layout-action-group--docs`,children:`Action Group`}),` lays them out, so links and buttons line up and wrap when they run out of room.`]}),`
`,(0,k.jsx)(r.p,{children:`Repeated actions read as a list of identical links to anyone who navigates by links alone.
Add the label of the item as visually hidden text to tell them apart.`}),`
`,(0,k.jsx)(a,{of:b}),`
`,(0,k.jsx)(r.h3,{id:`composite-value`,children:`Composite value`}),`
`,(0,k.jsxs)(r.p,{children:[`A value takes rich content: several lines of text, an address, a paragraph, a link, or an image.
Wrap its parts in a `,(0,k.jsx)(r.a,{href:`/docs/components-layout-column--docs`,children:`Column`}),` to stack them with space between them.
Text with inline markup, such as a link in a sentence, stays on one line.`]}),`
`,(0,k.jsx)(a,{of:g}),`
`,(0,k.jsx)(r.h3,{id:`header`,children:`Header`}),`
`,(0,k.jsxs)(r.p,{children:[`Introduce a Data List with a Data List Header, which draws a line below its content and sets the space to the list.
Place a `,(0,k.jsx)(r.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),` in it, at the level that fits the document outline.
Add at most one action next to it, and use a `,(0,k.jsx)(r.a,{href:`/docs/components-layout-row--docs`,children:`Row`}),` to place the two side by side.`]}),`
`,(0,k.jsx)(a,{of:p}),`
`,(0,k.jsx)(r.h3,{id:`form-review`,children:`Form review`}),`
`,(0,k.jsx)(r.p,{children:`A summary of the answers in a form is an application of Data List rather than a component of its own.
Combine it with an action per item that returns to the matching question, and a button that submits the form.`}),`
`,(0,k.jsx)(r.p,{children:`Group data about several people or subjects by placing a Data List Header above each Data List.
Its action then applies to the whole group, such as removing a person.`}),`
`,(0,k.jsx)(a,{of:h}),`
`,(0,k.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,k.jsx)(r.p,{children:`Labels and values wrap and hyphenate, so long content stays inside the column instead of overflowing it.
Below the breakpoint every value moves under its label, which keeps a Data List free of horizontal scroll on narrow screens.`}),`
`,(0,k.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,k.jsx)(r.p,{children:`Items are separated by a line, which runs the full width of the list.
The whitespace above and below that line is the same, so the line sits between two items rather than belonging to one.`}),`
`,(0,k.jsx)(r.p,{children:`Several actions sit next to each other, with a thin line between each pair.
They do not wrap onto a new line, so a line never starts a row; in a narrow column their labels wrap instead.`}),`
`,(0,k.jsx)(r.p,{children:`A Data List Header draws a thicker, darker line below its content, and adds space below itself when a Data List follows.`}),`
`,(0,k.jsx)(r.p,{children:`Labels use heading typography and values use body text, which gives the two different line heights.
Side by side, a label therefore gets half of that difference as extra space above it, so its first line sits level with the first line of its value.`}),`
`,(0,k.jsxs)(r.p,{children:[`By default the column for the labels is at most `,(0,k.jsx)(r.code,{children:`15rem`}),` wide.
Set `,(0,k.jsx)(r.code,{children:`termsWidth`}),` to `,(0,k.jsx)(r.code,{children:`narrow`}),`, `,(0,k.jsx)(r.code,{children:`medium`}),`, or `,(0,k.jsx)(r.code,{children:`wide`}),` when a ratio between labels and values serves the content better.
Labels and values sit next to each other when their `,(0,k.jsx)(r.a,{href:`/docs/utilities-css-query-container--docs`,children:`query container`}),` is wide enough (at least `,(0,k.jsx)(r.code,{children:`32rem`}),`).`]}),`
`,(0,k.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,k.jsxs)(r.p,{children:[`A Data List renders `,(0,k.jsx)(r.code,{children:`dl`}),`, `,(0,k.jsx)(r.code,{children:`dt`}),`, and `,(0,k.jsx)(r.code,{children:`dd`}),` elements.
These tie each label to its value in the markup instead of only through the layout, which is the kind of relationship `,(0,k.jsx)(r.a,{href:`https://www.w3.org/TR/WCAG22/#info-and-relationships`,rel:`nofollow`,children:`WCAG 1.3.1`}),` asks to be made available.
An Item renders a `,(0,k.jsx)(r.code,{children:`div`}),` around one pair, which HTML permits inside a `,(0,k.jsx)(r.code,{children:`dl`}),`.`]}),`
`,(0,k.jsxs)(r.p,{children:[`Actions renders a second `,(0,k.jsx)(r.code,{children:`dd`}),`, so its links and buttons are announced in the context of the label they act on.
Give repeated actions a unique accessible name with the `,(0,k.jsx)(r.code,{children:`ams-visually-hidden`}),` helper, as `,(0,k.jsx)(r.a,{href:`https://www.w3.org/TR/WCAG22/#link-purpose-in-context`,rel:`nofollow`,children:`WCAG 2.4.4`}),` asks.
Use visually hidden text rather than `,(0,k.jsx)(r.code,{children:`aria-label`}),`, because browsers do not reliably translate that attribute.`]}),`
`,(0,k.jsxs)(r.p,{children:[`A Data List Header renders a `,(0,k.jsx)(r.code,{children:`div`}),`, so it adds no landmark and its Heading stays part of the page outline.
The action in a header applies to the whole group, so give it the name of that group as visually hidden text, such as ‘Verwijderen persoon 1’.`]}),`
`,(0,k.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,k.jsxs)(r.ul,{children:[`
`,(0,k.jsxs)(r.li,{children:[(0,k.jsx)(r.a,{href:`/docs/components-text-description-list--docs`,children:`Description List`}),` – pairs terms with their meanings, without separators or actions.`]}),`
`,(0,k.jsxs)(r.li,{children:[(0,k.jsx)(r.a,{href:`/docs/components-containers-table--docs`,children:`Table`}),` – presents data that is compared across rows and columns.`]}),`
`]}),`
`,(0,k.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,`
`,(0,k.jsx)(f,{tokens:{ams:{...T.ams,...S.ams}}})]})}function O(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,k.jsx)(t,{...e,children:(0,k.jsx)(D,{...e})}):D(e)}var k;function A(){return(A=e((()=>{k=c(),u(),r(),d(),C(),E(),m()})))()}A();export{O as default};