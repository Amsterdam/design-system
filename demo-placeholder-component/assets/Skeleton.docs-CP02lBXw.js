import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,f as i,g as a,i as o,m as s,o as c,s as l}from"./iframe-DqTjtmRg.js";import{n as u,t as d}from"./DesignTokensTable-BGNONP2m.js";import{t as f}from"./mdx-react-shim-DhNfHiwX.js";import{Card as p,Heading as m,List as h,Table as g,n as _,t as v}from"./Skeleton.stories-jxCvhOzy.js";var y,b,x=e((()=>{y={skeleton:{"background-color":{$value:`#d1d1d1`,$description:`A neutral grey that stands in for the content being loaded.`,$extensions:{"nl.amsterdam.type":`color`}},card:{heading:{"font-size":{$value:`{ams.heading.3.font-size}`,$description:`The heading of a Card uses size level 3 by default.`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.heading.3.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"margin-block-end":{$value:`{ams.card.heading.margin-block-end}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},image:{"aspect-ratio":{$value:`{ams.image.aspect-ratio}`,$extensions:{"nl.amsterdam.type":`aspectRatio`}},"margin-block-end":{$value:`{ams.card.image.margin-block-end}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}}},heading:{"font-size":{$value:`{ams.heading.2.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"inline-size":{$value:`55%`,$description:`Represents a heading of a few words that does not span the full width.`,$extensions:{"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.heading.2.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},"last-line":{"inline-size":{$value:`67%`,$description:`The last line of a paragraph is usually not full width.`,$extensions:{"nl.amsterdam.type":`dimension`}}},line:{"font-size":{$value:`{ams.paragraph.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.paragraph.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},list:{gap:{$value:`{ams.unordered-list.gap}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},item:{"column-gap":{$value:{value:.5,unit:`rem`},$type:`dimension`,$extensions:{"nl.amsterdam.hint":`Together with the item padding and the marker width, starts the line at the 2.5rem text indent of Unordered List.`,"nl.amsterdam.subtype":`space`}},"padding-inline-start":{$value:`{ams.unordered-list.item.margin-inline-start}`,$extensions:{"nl.amsterdam.hint":`Starts the marker where the marker of Unordered List renders.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},line:{alternate:{"inline-size":{$value:`45%`,$description:`Even list items are shorter, approximating natural variation in item lengths.`,$extensions:{"nl.amsterdam.type":`dimension`}}},"inline-size":{$value:`60%`,$description:`List items are usually shorter than full lines of text.`,$extensions:{"nl.amsterdam.type":`dimension`}}},marker:{"block-size":{$value:{value:.375,unit:`rem`},$type:`dimension`,$extensions:{"nl.amsterdam.hint":`Approximates the size of the bullet of Unordered List.`}},"inline-size":{$value:{value:.375,unit:`rem`},$type:`dimension`,$extensions:{"nl.amsterdam.hint":`Approximates the size of the bullet of Unordered List.`}}}},table:{cell:{"padding-block":{$value:`{ams.table.cell.padding-block}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.table.cell.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},header:{line:{"inline-size":{$value:`50%`,$description:`Header cells usually contain a short term.`,$extensions:{"nl.amsterdam.type":`dimension`}}}},line:{alternate:{"inline-size":{$value:`65%`,$description:`Even columns are shorter, approximating natural variation in cell contents.`,$extensions:{"nl.amsterdam.type":`dimension`}}},"inline-size":{$value:`80%`,$description:`Cell contents usually do not span the full column width.`,$extensions:{"nl.amsterdam.type":`dimension`}}},row:{"border-block-end":{$value:`{ams.table.cell.border-block-end}`,$extensions:{"nl.amsterdam.type":`border`}}}}}},b={ams:y}}));function S(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(r,{of:v}),`
`,(0,w.jsx)(s,{}),`
`,(0,w.jsx)(l,{of:v}),`
`,(0,w.jsx)(i,{}),`
`,(0,w.jsx)(c,{}),`
`,(0,w.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,w.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,w.jsx)(t.p,{children:`Show a Skeleton while loading content that takes a noticeable time to arrive – roughly between 1 and 10 seconds.
Use it when you know the shape of the expected content, so the grey blocks can approximate it.
This makes waiting feel shorter and prepares users for the page structure.`}),`
`,(0,w.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,w.jsx)(t.p,{children:`Do not show a Skeleton for waits shorter than about a second: a flash of grey blocks is more distracting than helpful.
For a process with a known duration or progress, such as a file upload, show actual progress information instead.
Never use a Skeleton for content that is already available – render that content immediately.
Avoid combining it with other loading indicators in the same view.`}),`
`,(0,w.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,w.jsxs)(t.p,{children:[`Choose the appearance that matches the component the Skeleton stands in for: a Card, a Heading of level 2, an Unordered List, a Paragraph, or a Table.
Set `,(0,w.jsx)(t.code,{children:`lines`}),`, `,(0,w.jsx)(t.code,{children:`rows`}),`, and `,(0,w.jsx)(t.code,{children:`columns`}),` to approximate the amount of content you expect.
Render the Skeleton in the same container as the content that will replace it, so both are equally wide.`]}),`
`,(0,w.jsxs)(t.p,{children:[`The Skeleton itself is hidden from assistive technologies.
You must announce the loading state in another way to meet `,(0,w.jsx)(t.a,{href:`https://www.w3.org/TR/WCAG22/#status-messages`,rel:`nofollow`,children:`WCAG 4.1.3`}),`.
Provide a status message outside the loading region and mark that region with `,(0,w.jsx)(t.code,{children:`aria-busy`}),`:`]}),`
`,(0,w.jsx)(t.pre,{children:(0,w.jsx)(t.code,{className:`language-html`,children:`<div class="ams-visually-hidden" role="status">De zoekresultaten worden geladen</div>
<section aria-busy="true">
  <!-- Skeletons -->
</section>
`})}),`
`,(0,w.jsxs)(t.p,{children:[`When the content has loaded, set `,(0,w.jsx)(t.code,{children:`aria-busy`}),` to `,(0,w.jsx)(t.code,{children:`false`}),` and update or clear the status message.`]}),`
`,(0,w.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(t.h3,{id:`card`,children:`Card`}),`
`,(0,w.jsx)(t.p,{children:`Stands in for a Card, with an image, a heading, and a few lines of text.`}),`
`,(0,w.jsx)(o,{of:p}),`
`,(0,w.jsx)(t.h3,{id:`heading`,children:`Heading`}),`
`,(0,w.jsx)(t.p,{children:`Stands in for a Heading, sized to a level 2 heading.`}),`
`,(0,w.jsx)(o,{of:m}),`
`,(0,w.jsx)(t.h3,{id:`list`,children:`List`}),`
`,(0,w.jsx)(t.p,{children:`Stands in for an Unordered List, with a marker and a shorter line for each item.`}),`
`,(0,w.jsx)(o,{of:h}),`
`,(0,w.jsx)(t.h3,{id:`table`,children:`Table`}),`
`,(0,w.jsx)(t.p,{children:`Stands in for a Table, with a header row and evenly divided columns.`}),`
`,(0,w.jsx)(o,{of:g}),`
`,(0,w.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,w.jsx)(t.p,{children:`The dimensions of the blocks derive from the design tokens of the components they mimic.
Replacing a Skeleton with the real content therefore barely shifts the layout.`}),`
`,(0,w.jsx)(t.p,{children:`Line lengths vary deterministically – for example, the last line of a paragraph is shorter, and list items alternate in length.
This looks natural yet renders identically on every request, which keeps server-side rendering consistent and visual regression tests stable.`}),`
`,(0,w.jsx)(t.h2,{id:`design`,children:`Design`}),`
`,(0,w.jsx)(t.p,{children:`The blocks use a single neutral grey that reads as a quiet backdrop rather than content.
This first version is intentionally static; a subtle loading animation may be added later.`}),`
`,(0,w.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,w.jsxs)(t.p,{children:[`The component is decorative and renders with `,(0,w.jsx)(t.code,{children:`aria-hidden="true"`}),` by default, so screen readers skip the grey blocks.
Announcing the loading state is the responsibility of the application – see ‘How to use’.
In forced colours mode, the blocks remain visible through the system colour for disabled text.`]}),`
`,(0,w.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(d,{tokens:b})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),f(),a(),u(),x(),_()}))();export{C as default};