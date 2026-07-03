import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,f as i,g as a,i as o,m as s,o as c,s as l}from"./iframe-BaqeAV5C.js";import{n as u,t as d}from"./DesignTokensTable-N7HQsc6M.js";import{t as f}from"./mdx-react-shim-BNy3I0Ot.js";import{Heading as p,Image as m,List as h,Paragraph as g,Table as _,n as v,t as y}from"./Skeleton.stories-D7xOfHda.js";var b,x,S=e((()=>{b={skeleton:{"background-color":{$value:`#d1d1d1`,$description:`A neutral grey that stands in for the content being loaded.`,$extensions:{"nl.amsterdam.type":`color`}},gap:{$value:`{ams.space.s}`,$description:`The space between the parts composed inside a Skeleton, e.g. an image, a heading and a paragraph.`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},heading:{"font-size":{$value:`{ams.heading.2.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"inline-size":{$value:`55%`,$description:`Represents a heading of a few words that does not span the full width.`,$extensions:{"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.heading.2.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},image:{"aspect-ratio":{$value:`{ams.image.aspect-ratio}`,$extensions:{"nl.amsterdam.type":`aspectRatio`}}},"last-line":{"inline-size":{$value:`67%`,$description:`The last line of a paragraph is usually not full width.`,$extensions:{"nl.amsterdam.type":`dimension`}}},line:{"font-size":{$value:`{ams.paragraph.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.paragraph.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},list:{gap:{$value:`{ams.unordered-list.gap}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},item:{"column-gap":{$value:{value:.5,unit:`rem`},$type:`dimension`,$extensions:{"nl.amsterdam.hint":`Together with the item padding and the marker width, starts the line at the 2.5rem text indent of Unordered List.`,"nl.amsterdam.subtype":`space`}},"padding-inline-start":{$value:`{ams.unordered-list.item.margin-inline-start}`,$extensions:{"nl.amsterdam.hint":`Starts the marker where the marker of Unordered List renders.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},line:{alternate:{"inline-size":{$value:`45%`,$description:`Even list items are shorter, approximating natural variation in item lengths.`,$extensions:{"nl.amsterdam.type":`dimension`}}},"inline-size":{$value:`60%`,$description:`List items are usually shorter than full lines of text.`,$extensions:{"nl.amsterdam.type":`dimension`}}},marker:{"block-size":{$value:{value:.375,unit:`rem`},$type:`dimension`,$extensions:{"nl.amsterdam.hint":`Approximates the size of the bullet of Unordered List.`}},"inline-size":{$value:{value:.375,unit:`rem`},$type:`dimension`,$extensions:{"nl.amsterdam.hint":`Approximates the size of the bullet of Unordered List.`}}}},table:{cell:{"padding-block":{$value:`{ams.table.cell.padding-block}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.table.cell.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},header:{line:{"inline-size":{$value:`50%`,$description:`Header cells usually contain a short term.`,$extensions:{"nl.amsterdam.type":`dimension`}}}},line:{alternate:{"inline-size":{$value:`65%`,$description:`Even columns are shorter, approximating natural variation in cell contents.`,$extensions:{"nl.amsterdam.type":`dimension`}}},"inline-size":{$value:`80%`,$description:`Cell contents usually do not span the full column width.`,$extensions:{"nl.amsterdam.type":`dimension`}}},row:{"border-block-end":{$value:`{ams.table.cell.border-block-end}`,$extensions:{"nl.amsterdam.type":`border`}}}}}},x={ams:b}}));function C(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(r,{of:y}),`
`,(0,T.jsx)(s,{}),`
`,(0,T.jsx)(l,{of:y}),`
`,(0,T.jsx)(i,{}),`
`,(0,T.jsx)(t.p,{children:`The Skeleton container takes only the parts you compose inside it and hides them from assistive technologies.
Each part has its own options, documented under Subcomponents.`}),`
`,(0,T.jsx)(t.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,T.jsxs)(t.p,{children:[`Compose a Skeleton from its parts: Skeleton.Image, Skeleton.Heading, Skeleton.Paragraph, Skeleton.List, and Skeleton.Table.
Skeleton.Image is a single block; the others render one or more lines, sized to the text they stand in for.
Set the `,(0,T.jsx)(t.code,{children:`lines`}),`, `,(0,T.jsx)(t.code,{children:`rows`}),`, and `,(0,T.jsx)(t.code,{children:`columns`}),` props to approximate the amount of content you expect.`]}),`
`,(0,T.jsx)(t.h3,{id:`skeletonheading`,children:`Skeleton.Heading`}),`
`,(0,T.jsxs)(t.p,{children:[`Lines the size of a Heading.
Set `,(0,T.jsx)(t.code,{children:`lines`}),` above one for a heading that wraps onto several lines.`]}),`
`,(0,T.jsx)(o,{of:p}),`
`,(0,T.jsx)(c,{of:p}),`
`,(0,T.jsx)(t.h3,{id:`skeletonparagraph`,children:`Skeleton.Paragraph`}),`
`,(0,T.jsx)(t.p,{children:`Lines the size of body text.
The last line is shorter, approximating the ragged end of a paragraph.`}),`
`,(0,T.jsx)(o,{of:g}),`
`,(0,T.jsx)(c,{of:g}),`
`,(0,T.jsx)(t.h3,{id:`skeletonlist`,children:`Skeleton.List`}),`
`,(0,T.jsx)(t.p,{children:`Body-text lines, each with a marker, indented like an Unordered List.`}),`
`,(0,T.jsx)(o,{of:h}),`
`,(0,T.jsx)(c,{of:h}),`
`,(0,T.jsx)(t.h3,{id:`skeletontable`,children:`Skeleton.Table`}),`
`,(0,T.jsx)(t.p,{children:`A grid of cells with a header row.`}),`
`,(0,T.jsx)(o,{of:_}),`
`,(0,T.jsx)(c,{of:_}),`
`,(0,T.jsx)(t.h3,{id:`skeletonimage`,children:`Skeleton.Image`}),`
`,(0,T.jsx)(t.p,{children:`A block with the aspect ratio of an Image.`}),`
`,(0,T.jsx)(o,{of:m}),`
`,(0,T.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,T.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,T.jsx)(t.p,{children:`Show a Skeleton while loading content that takes a noticeable time to arrive – roughly between 1 and 10 seconds.
Compose the parts to mirror the content to come, so the grey blocks prepare users for the page structure and waiting feels shorter.`}),`
`,(0,T.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,T.jsx)(t.p,{children:`Do not show a Skeleton for waits shorter than about a second: a flash of grey blocks is more distracting than helpful.
For a process with a known duration or progress, such as a file upload, show actual progress information instead.
Never use a Skeleton for content that is already available – render that content immediately.
Avoid combining it with other loading indicators in the same view.`}),`
`,(0,T.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,T.jsx)(t.p,{children:`Nest the parts you need inside a Skeleton, in the order the real content will appear.
Match the number of lines, rows, and columns to the expected content, so replacing the Skeleton barely shifts the layout.`}),`
`,(0,T.jsxs)(t.p,{children:[`The Skeleton is hidden from assistive technologies.
You must announce the loading state in another way to meet `,(0,T.jsx)(t.a,{href:`https://www.w3.org/TR/WCAG22/#status-messages`,rel:`nofollow`,children:`WCAG 4.1.3`}),`.
Provide a status message outside the loading region and mark that region with `,(0,T.jsx)(t.code,{children:`aria-busy`}),`:`]}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-html`,children:`<div class="ams-visually-hidden" role="status">De zoekresultaten worden geladen</div>
<section aria-busy="true">
  <!-- Skeleton -->
</section>
`})}),`
`,(0,T.jsxs)(t.p,{children:[`When the content has loaded, set `,(0,T.jsx)(t.code,{children:`aria-busy`}),` to `,(0,T.jsx)(t.code,{children:`false`}),` and update or clear the status message.`]}),`
`,(0,T.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,T.jsx)(t.p,{children:`The dimensions of the lines derive from the design tokens of the text they mimic: Skeleton.Heading follows Heading 2, and the other parts follow body text.
Each line is exactly as tall as its line of text, so a part occupies the same height as the content it stands in for and the layout barely shifts once that content arrives.`}),`
`,(0,T.jsx)(t.p,{children:`Line lengths vary deterministically – a shorter last paragraph line, alternating list and table widths.
This looks natural yet renders identically on every request, which keeps server-side rendering consistent and visual regression tests stable.`}),`
`,(0,T.jsx)(t.h2,{id:`design`,children:`Design`}),`
`,(0,T.jsx)(t.p,{children:`The blocks use a single neutral grey that reads as a quiet backdrop rather than content.
The space between composed parts is a generic gap rather than the exact margins of any one component, keeping the Skeleton reusable in any layout.
This first version is intentionally static; a subtle loading animation may be added later.`}),`
`,(0,T.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,T.jsxs)(t.p,{children:[`The Skeleton container renders with `,(0,T.jsx)(t.code,{children:`aria-hidden="true"`}),` by default, so screen readers skip the grey blocks.
Announcing the loading state is the responsibility of the application – see ‘How to use’.
In forced colours mode, the blocks remain visible through the system colour for disabled text.`]}),`
`,(0,T.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),`, `,(0,T.jsx)(t.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),`, and `,(0,T.jsx)(t.a,{href:`/docs/components-containers-table--docs`,children:`Table`}),`, the components a Skeleton stands in for.`]}),`
`]}),`
`,(0,T.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(d,{tokens:x})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),f(),a(),u(),S(),v()}))();export{w as default};