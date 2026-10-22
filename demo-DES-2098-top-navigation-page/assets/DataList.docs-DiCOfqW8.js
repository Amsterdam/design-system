import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-CA3ybmgw.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-CJqhHn1G.js";import{c as p,i as m,l as h,n as g,o as _,r as v,s as y,t as b}from"./DataList.stories-2oQnTcX3.js";var x,S;function C(){return(C=e((()=>{x={"data-list":{color:{$value:`{ams.color.text.default}`,$extensions:{"nl.amsterdam.type":`color`}},"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.hint":`Applies to values only; keys set their own font size. Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.hint":`Applies to values only; keys set their own line height. Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"row-gap":{$value:`{ams.data-list.item.padding-block-end}`,$extensions:{"nl.amsterdam.hint":`The whitespace between the separator of an item and the key of the next one. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"vi-medium":{"column-gap":{$value:`{ams.space.l}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"grid-template-columns":{$value:`fit-content(min(15rem, 30%)) minmax(0, 1fr) fit-content(25%)`,$description:`Three columns that every item shares: the key, the value, and the optional actions. The key column fits its content with a limit of 15rem or 30% of the list, whichever is smaller. The actions column fits its content with a limit of a quarter of the list, and collapses when no item has actions. Min-content sizing can exceed these limits.`,$extensions:{"nl.amsterdam.type":`gridTemplateColumns`}}},item:{"border-block-end":{$value:`{ams.border.width.s} solid {ams.color.separator}`,$extensions:{"nl.amsterdam.type":`border`}},"padding-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`The whitespace between the content of an item and its separator. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},key:{"font-size":{$value:`{ams.typography.heading.4.font-size}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.heading.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.heading.4.line-height}`,$extensions:{"nl.amsterdam.hint":`Must be a single value: it is used in a calculation, which two values would invalidate.`,"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"margin-block-end":{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.hint":`Only applies when the key sits above its value. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},value:{"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"margin-block-end":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.hint":`Only applies when actions follow the value and the value sits below its key. Must be a single value: it sets a longhand property, which takes only one.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}}},S={ams:x}})))()}function w(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,E.jsxs)(E.Fragment,{children:[`
`,`
`,`
`,`
`,(0,E.jsx)(s,{of:g}),`
`,(0,E.jsx)(o,{}),`
`,(0,E.jsx)(t,{of:g}),`
`,(0,E.jsx)(n,{}),`
`,(0,E.jsx)(i,{}),`
`,(0,E.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,E.jsxs)(r.p,{children:[`The Item, Key, Value, and Actions subcomponents make up a Data List.
An Item groups one key with its value, Key and Value render the `,(0,E.jsx)(r.code,{children:`<dt>`}),` and `,(0,E.jsx)(r.code,{children:`<dd>`}),` elements, and Actions holds the links or buttons that act on that value.
None of them has props of its own; the examples on this page show them in place.`]}),`
`,(0,E.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,E.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,E.jsx)(r.p,{children:`To show a set of data that a reader checks or scans, such as the details of an object, a case, or a person.`}),`
`,(0,E.jsx)(r.p,{children:`To let a reader review the answers they gave in a form before they submit it.`}),`
`,(0,E.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,E.jsxs)(r.p,{children:[`For data that is compared across rows or columns: use a `,(0,E.jsx)(r.a,{href:`/docs/components-containers-table--docs`,children:`Table`}),`.`]}),`
`,(0,E.jsxs)(r.p,{children:[`For terms and their meanings, such as a glossary: use a `,(0,E.jsx)(r.a,{href:`/docs/components-text-description-list--docs`,children:`Description List`}),`.`]}),`
`,(0,E.jsxs)(r.p,{children:[`For values to suggest while someone types in a field: despite the name, a Data List is unrelated to the HTML `,(0,E.jsxs)(r.a,{href:`https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist`,rel:`nofollow`,children:[(0,E.jsx)(r.code,{children:`datalist`}),` element`]}),`.`]}),`
`,(0,E.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,E.jsx)(r.p,{children:`Give every item a Key and a Value.
Add Actions only when the reader can change or remove that value, whether that takes them elsewhere or happens in place.
Do not nest a Data List inside another Data List.`}),`
`,(0,E.jsx)(r.h3,{id:`how-to-write`,children:`How to write`}),`
`,(0,E.jsx)(r.p,{children:`Keep keys short and write them without a colon.
Write an action as the change it makes, such as ‘Wijzigen’, and include its key in the accessible name so repeated actions stay unique.`}),`
`,(0,E.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,E.jsx)(r.h3,{id:`orientation`,children:`Orientation`}),`
`,(0,E.jsx)(r.p,{children:`A key and its value sit side by side, and stack as soon as the container gets too narrow for both.
Resize the following example to see the Data List adapt its layout to the available width.`}),`
`,(0,E.jsx)(a,{of:_}),`
`,(0,E.jsx)(r.h3,{id:`stacked`,children:`Stacked`}),`
`,(0,E.jsx)(r.p,{children:`Set the orientation to ‘vertical’ to place every value below its key, however wide the container is.
Use this when the values are long.`}),`
`,(0,E.jsx)(a,{of:y}),`
`,(0,E.jsx)(r.h3,{id:`form-flow-actions`,children:`Form flow actions`}),`
`,(0,E.jsxs)(r.p,{children:[`An item can offer one or more actions on its value.
Use a `,(0,E.jsx)(r.a,{href:`/docs/components-navigation-standalone-link--docs`,children:`Standalone Link`}),` when an action opens another page, such as returning to a question in a `,(0,E.jsx)(r.a,{href:`/docs/pages-public-form-flow--docs`,children:`Form Flow`}),`.
Do not use a link to delete an item or change the current page.`]}),`
`,(0,E.jsx)(a,{of:v}),`
`,(0,E.jsx)(r.h3,{id:`in-place-actions`,children:`In-place actions`}),`
`,(0,E.jsxs)(r.p,{children:[`Use a `,(0,E.jsx)(r.a,{href:`/docs/components-buttons-button--docs`,children:`Button`}),` for an action on the current page, such as editing in place, deleting, or adding an item.
On public websites, use a text-only tertiary Button at the end of an item.`]}),`
`,(0,E.jsxs)(r.p,{children:[`Give every action within an item the same treatment: all with an icon or all without one.
Actions renders its children directly; use a `,(0,E.jsx)(r.a,{href:`/docs/components-layout-row--docs`,children:`Row`}),` with wrapping to arrange multiple actions.
Give repeated actions unique accessible names by adding the key as visually hidden text to the visible label.`]}),`
`,(0,E.jsx)(a,{of:m}),`
`,(0,E.jsx)(r.h3,{id:`learnable-in-place-actions`,children:`Learnable in-place actions`}),`
`,(0,E.jsxs)(r.p,{children:[`Show only an icon when its meaning is immediately clear, or when frequent users of an internal application can learn it.
Otherwise, give the action a visible text label.
Our `,(0,E.jsx)(r.a,{href:`/docs/brand-assets-icons--docs#functional-icons`,children:`icon guidelines`}),` distinguish universal from learnable icons; Edit and Delete are learnable icons.
Use an `,(0,E.jsx)(r.a,{href:`/docs/components-buttons-icon-button--docs`,children:`Icon Button`}),` aligned with the surrounding text, and give its `,(0,E.jsx)(r.code,{children:`label`}),` prop a unique accessible name, such as ‘Wijzigen telefoonnummer’.`]}),`
`,(0,E.jsxs)(r.p,{children:[`Open the `,(0,E.jsx)(r.a,{href:`/story/components-containers-data-list--learnable-in-place-actions`,children:`learnable in-place actions example`}),`, which is only available in Compact Mode.
It is not embedded here because the mode also affects the other examples on this page.`]}),`
`,(0,E.jsx)(r.h3,{id:`composite-value`,children:`Composite value`}),`
`,(0,E.jsxs)(r.p,{children:[`A value takes rich content: several lines of text, an address, a paragraph, a link, or an image.
Wrap its parts in a `,(0,E.jsx)(r.a,{href:`/docs/components-layout-column--docs`,children:`Column`}),` to stack them with space between them.
Separate the lines of an address with line breaks instead.
Text with inline markup, such as a link in a sentence, needs no wrapper: it flows and wraps as a single run of text.`]}),`
`,(0,E.jsx)(a,{of:b}),`
`,(0,E.jsx)(r.h3,{id:`with-header`,children:`With header`}),`
`,(0,E.jsxs)(r.p,{children:[`Introduce a Data List with a `,(0,E.jsx)(r.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),` and an action, laid out in a `,(0,E.jsx)(r.a,{href:`/docs/components-layout-row--docs`,children:`Row`}),` above the list.
Use this when a group of data needs a title, or an action that applies to the whole group.
Use a secondary Button with an icon for a group action on the current page.
A group action that opens another page stays a Standalone Link.
Add `,(0,E.jsx)(r.code,{children:`ams-mb-s`}),` to the heading row to separate it from the list below a level 2 Heading.`]}),`
`,(0,E.jsx)(a,{of:p}),`
`,(0,E.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,E.jsx)(r.p,{children:`Keys and values wrap and hyphenate.
Below the breakpoint every value moves under its key.`}),`
`,(0,E.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,E.jsx)(r.p,{children:`Items are separated by a line between them, which runs the full width of the list.
The whitespace above and below that line is the same by default, so the line sits between two items rather than belonging to one.`}),`
`,(0,E.jsx)(r.p,{children:`Keys use heading typography and values use body text, which gives the two different line heights.
Side by side, a key therefore gets half of that difference as extra space above it, so its first line sits level with the first line of its value.`}),`
`,(0,E.jsxs)(r.p,{children:[`Keys and values sit next to each other when their `,(0,E.jsx)(r.a,{href:`/docs/utilities-css-query-container--docs`,children:`query container`}),` is wide enough (at least `,(0,E.jsx)(r.code,{children:`32rem`}),`).
All items then share the same columns, so keys, values, and actions line up across the list.
The key column fits its content with a limit of `,(0,E.jsx)(r.code,{children:`15rem`}),` or 30% of the list, whichever is smaller.
The actions column fits its content with a limit of a quarter of the list.
Min-content sizing can exceed these limits.
When no item has actions, the actions track collapses but its gutter remains.`]}),`
`,(0,E.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,E.jsxs)(r.p,{children:[`A Data List renders `,(0,E.jsx)(r.code,{children:`dl`}),`, `,(0,E.jsx)(r.code,{children:`dt`}),`, and `,(0,E.jsx)(r.code,{children:`dd`}),` elements.
This keeps each key paired with its value in the markup instead of only through the layout.`]}),`
`,(0,E.jsxs)(r.p,{children:[`Actions renders a second `,(0,E.jsx)(r.code,{children:`dd`}),` for its links and buttons.
Give repeated actions a unique accessible name that includes the key they act on.
For visible text labels, add the key with the `,(0,E.jsx)(r.code,{children:`ams-visually-hidden`}),` helper rather than `,(0,E.jsx)(r.code,{children:`aria-label`}),`, because browsers do not reliably translate that attribute.
For Icon Buttons, put the complete accessible name in the `,(0,E.jsx)(r.code,{children:`label`}),` prop.`]}),`
`,(0,E.jsx)(r.p,{children:`When you compose a heading row above a Data List, the action in that row applies to the whole group.
Include the name of the group in its accessible name, such as ‘Wijzigen Magere Brug’.`}),`
`,(0,E.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,E.jsxs)(r.ul,{children:[`
`,(0,E.jsxs)(r.li,{children:[(0,E.jsx)(r.a,{href:`/docs/components-text-description-list--docs`,children:`Description List`}),` – pairs terms with their meanings, without separators or actions.`]}),`
`,(0,E.jsxs)(r.li,{children:[(0,E.jsx)(r.a,{href:`/docs/components-containers-table--docs`,children:`Table`}),` – presents data that is compared across rows and columns.`]}),`
`]}),`
`,(0,E.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,E.jsx)(f,{tokens:S})]})}function T(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,E.jsx)(t,{...e,children:(0,E.jsx)(w,{...e})}):w(e)}var E;function D(){return(D=e((()=>{E=c(),u(),r(),d(),C(),h()})))()}D();export{T as default};