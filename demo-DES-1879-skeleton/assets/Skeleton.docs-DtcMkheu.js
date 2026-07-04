import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,f as i,g as a,i as o,m as s,o as c,s as l}from"./iframe-DUEt-zCi.js";import{n as u,t as d}from"./DesignTokensTable-C1kV-Zj8.js";import{t as f}from"./mdx-react-shim-BBVMf67n.js";import{Heading as p,Image as m,List as h,Paragraph as g,Table as _,n as v,t as y}from"./Skeleton.stories-D46Z82mi.js";var b,x,S=e((()=>{b={skeleton:{animation:{$value:`ams-skeleton-run 2.2s linear infinite`,$description:"The loading animation, as a CSS `animation` shorthand referencing a keyframes name. Override this token to give the Skeleton a different animation – point it at your own `@keyframes` – or set it to `none` to switch the animation off."},"background-color":{$value:`#d1d1d1`,$description:`A neutral grey that stands in for the content being loaded.`,$extensions:{"nl.amsterdam.type":`color`}},gap:{$value:`{ams.space.s}`,$description:`The space between the parts composed inside a Skeleton, e.g. an image, a heading and a paragraph.`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},heading:{"font-size":{$value:`{ams.heading.2.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"inline-size":{$value:`60%`,$description:`A heading is usually a few words that do not span the full width.`,$extensions:{"nl.amsterdam.type":`dimension`}},"line-height":{$value:`{ams.heading.2.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"last-line":{"inline-size":{$value:`70%`,$description:`The last (or single) line of a heading is shorter than the rest.`,$extensions:{"nl.amsterdam.type":`dimension`}}}},image:{"aspect-ratio":{$value:`{ams.image.aspect-ratio}`,$extensions:{"nl.amsterdam.type":`aspectRatio`}}},line:{"font-size":{$value:`{ams.paragraph.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.paragraph.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},"last-line":{"inline-size":{$value:`50%`,$description:`The last (or single) line is shorter than the rest.`,$extensions:{"nl.amsterdam.type":`dimension`}}}},list:{gap:{$value:`{ams.unordered-list.gap}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},item:{"column-gap":{$value:{value:.5,unit:`rem`},$type:`dimension`,$extensions:{"nl.amsterdam.hint":`Together with the item padding and the marker width, starts the line at the 2.5rem text indent of Unordered List.`,"nl.amsterdam.subtype":`space`}},"padding-inline-start":{$value:`{ams.unordered-list.item.margin-inline-start}`,$extensions:{"nl.amsterdam.hint":`Starts the marker where the marker of Unordered List renders.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},line:{alternate:{"inline-size":{$value:`50%`,$description:`The second item in each set of three, approximating natural variation in item lengths.`,$extensions:{"nl.amsterdam.type":`dimension`}}},average:{"inline-size":{$value:`60%`,$description:`The third item in each set of three: the average of the other two.`,$extensions:{"nl.amsterdam.type":`dimension`}}},"inline-size":{$value:`70%`,$description:`The first item in each set of three.`,$extensions:{"nl.amsterdam.type":`dimension`}}},marker:{"block-size":{$value:{value:.375,unit:`rem`},$type:`dimension`,$extensions:{"nl.amsterdam.hint":`Approximates the size of the bullet of Unordered List.`}},"inline-size":{$value:{value:.375,unit:`rem`},$type:`dimension`,$extensions:{"nl.amsterdam.hint":`Approximates the size of the bullet of Unordered List.`}}}},paragraph:{line:{alternate:{"inline-size":{$value:`80%`,$description:`The narrowest of the three paragraph line widths.`,$extensions:{"nl.amsterdam.type":`dimension`}}},average:{"inline-size":{$value:`90%`,$description:`The average of the other two paragraph line widths.`,$extensions:{"nl.amsterdam.type":`dimension`}}},"inline-size":{$value:`100%`,$description:`The widest paragraph line, spanning the full column.`,$extensions:{"nl.amsterdam.type":`dimension`}}}},table:{cell:{"padding-block":{$value:`{ams.table.cell.padding-block}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.table.cell.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},header:{line:{"inline-size":{$value:`50%`,$description:`Header cells usually contain a short term.`,$extensions:{"nl.amsterdam.type":`dimension`}}}},line:{alternate:{"inline-size":{$value:`70%`,$description:`One of three cell widths, rotated per row so cells vary down a column too; all are wider than the header.`,$extensions:{"nl.amsterdam.type":`dimension`}}},average:{"inline-size":{$value:`80%`,$description:`The average of the other two cell widths.`,$extensions:{"nl.amsterdam.type":`dimension`}}},"inline-size":{$value:`90%`,$description:`The widest cell width.`,$extensions:{"nl.amsterdam.type":`dimension`}}},row:{"border-block-end":{$value:`{ams.table.cell.border-block-end}`,$extensions:{"nl.amsterdam.type":`border`}}}}}},x={ams:b}}));function C(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(r,{of:y}),`
`,(0,T.jsx)(s,{}),`
`,(0,T.jsx)(l,{of:y}),`
`,(0,T.jsx)(i,{}),`
`,(0,T.jsx)(t.p,{children:`The Skeleton container takes only the parts you compose inside it and hides them from assistive technologies.
Each part has its own options, documented under Subcomponents.`}),`
`,(0,T.jsx)(t.p,{children:`The container itself has no props to configure.`}),`
`,(0,T.jsx)(t.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,T.jsxs)(t.p,{children:[`Compose a Skeleton from its parts: Skeleton.Image, Skeleton.Heading, Skeleton.Paragraph, Skeleton.List, and Skeleton.Table.
Skeleton.Image is a single block; the others render one or more lines, sized to the text they stand in for.
Set the `,(0,T.jsx)(t.code,{children:`lines`}),`, `,(0,T.jsx)(t.code,{children:`rows`}),`, and `,(0,T.jsx)(t.code,{children:`columns`}),` props to approximate the amount of content you expect.`]}),`
`,(0,T.jsx)(t.h3,{id:`heading`,children:`Heading`}),`
`,(0,T.jsxs)(t.p,{children:[`Lines the size of a Heading.
Set `,(0,T.jsx)(t.code,{children:`lines`}),` above one for a heading that wraps onto several lines.`]}),`
`,(0,T.jsx)(o,{of:p}),`
`,(0,T.jsx)(c,{of:p}),`
`,(0,T.jsx)(t.h3,{id:`paragraph`,children:`Paragraph`}),`
`,(0,T.jsx)(t.p,{children:`Lines the size of body text.
Their lengths vary in sets of three, and the last line is shorter, approximating the ragged end of a paragraph.`}),`
`,(0,T.jsx)(o,{of:g}),`
`,(0,T.jsx)(c,{of:g}),`
`,(0,T.jsx)(t.h3,{id:`list`,children:`List`}),`
`,(0,T.jsx)(t.p,{children:`Body-text lines, each with a marker, indented like an Unordered List.`}),`
`,(0,T.jsx)(o,{of:h}),`
`,(0,T.jsx)(c,{of:h}),`
`,(0,T.jsx)(t.h3,{id:`table`,children:`Table`}),`
`,(0,T.jsx)(t.p,{children:`A grid of cells with a header row.`}),`
`,(0,T.jsx)(o,{of:_}),`
`,(0,T.jsx)(c,{of:_}),`
`,(0,T.jsx)(t.h3,{id:`image`,children:`Image`}),`
`,(0,T.jsxs)(t.p,{children:[`A block that stands in for an image.
Set the `,(0,T.jsx)(t.code,{children:`aspectRatio`}),` prop to match the image that will replace it; it defaults to 16:9.`]}),`
`,(0,T.jsx)(o,{of:m}),`
`,(0,T.jsx)(c,{of:m}),`
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
Match the number of lines, rows, and columns to the expected content, so replacing the Skeleton barely shifts the layout.
Render a Skeleton only while its content is loading, and replace it with the content – or an empty or error state – as soon as that content arrives.`}),`
`,(0,T.jsxs)(t.p,{children:[`A Skeleton is decorative and hidden from assistive technologies, so it stays silent on its own.
Announcing the loading state is the job of the region that holds the content, not of each Skeleton – otherwise a list of ten Skeletons would announce ten times.
Mark that region with `,(0,T.jsx)(t.code,{children:`aria-busy`}),` while it loads, and give it a single, always-present status message whose text changes from a loading message to the result:`]}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-html`,children:`<section aria-busy="true">
  <p class="ams-visually-hidden" role="status">Zoekresultaten worden geladen</p>
  <!-- ten Skeletons while loading -->
</section>
`})}),`
`,(0,T.jsxs)(t.p,{children:[`When the content has loaded, replace the Skeletons with it, set `,(0,T.jsx)(t.code,{children:`aria-busy`}),` to `,(0,T.jsx)(t.code,{children:`false`}),`, and change the status message – for example to ‘10 resultaten gevonden’.
A Loading Region component that wraps this pattern is planned.`]}),`
`,(0,T.jsx)(t.h4,{id:`customising-the-animation`,children:`Customising the animation`}),`
`,(0,T.jsxs)(t.p,{children:[`The animation is set through one custom property, `,(0,T.jsx)(t.code,{children:`--ams-skeleton-animation`}),`, which holds a CSS `,(0,T.jsx)(t.code,{children:`animation`}),` shorthand.
Override it to suit your theme: change the duration or timing function to adjust the pace, point it at your own `,(0,T.jsx)(t.code,{children:`@keyframes`}),` to replace the motion, or set it to `,(0,T.jsx)(t.code,{children:`none`}),` to switch it off.
Users who prefer reduced motion never see the animation, whatever you set it to.`]}),`
`,(0,T.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,T.jsx)(t.p,{children:`The dimensions of the lines derive from the design tokens of the text they mimic: Skeleton.Heading follows Heading 2, and the other parts follow body text.
Each line is exactly as tall as its line of text, so a part occupies the same height as the content it stands in for and the layout barely shifts once that content arrives.`}),`
`,(0,T.jsx)(t.p,{children:`Line lengths vary deterministically – paragraph lines in sets of three with a shorter last line, alternating list and table widths.
This looks natural yet renders identically on every request, which keeps server-side rendering consistent and visual regression tests stable.`}),`
`,(0,T.jsx)(t.h2,{id:`design`,children:`Design`}),`
`,(0,T.jsx)(t.p,{children:`The blocks use a single neutral grey that reads as a quiet backdrop rather than content.
The space between composed parts is a generic gap rather than the exact margins of any one component, keeping the Skeleton reusable in any layout.`}),`
`,(0,T.jsx)(t.p,{children:`A subtle animation signals that loading is under way.
Rather than a shimmer or a pulse, a deterministically scattered band of small translucent squares – four shades that lighten and darken whatever colour shows through – runs across each block from left to right, pauses briefly, and then repeats.
Its leading edge is ragged and its gaps widen behind it, so the band trails off like a comet tail; the rows line up with the text height, and the scatter is fixed rather than random, so the motif stays recognisable on every request.
The whole animation sits behind a single design token, so a theme can point it at its own keyframes or switch it off.`}),`
`,(0,T.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,T.jsxs)(t.p,{children:[`A Skeleton renders with `,(0,T.jsx)(t.code,{children:`aria-hidden="true"`}),`, so screen readers skip the grey blocks entirely.
Because the loading announcement belongs to the region that is loading rather than to each block, the Skeleton stays silent; the application announces the state once for the region, as shown under ‘How to use’, to meet `,(0,T.jsx)(t.a,{href:`https://www.w3.org/TR/WCAG22/#status-messages`,rel:`nofollow`,children:`WCAG 4.1.3`}),`.
A Loading Region component to encapsulate that pattern is planned.
The animation runs only for users who have not asked for reduced motion; everyone else sees the static blocks.
In forced colours mode, the blocks remain visible through the system colour for disabled text, and the animation is dropped because its shades would not survive the colour override.`]}),`
`,(0,T.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,T.jsxs)(t.ul,{children:[`
`,(0,T.jsxs)(t.li,{children:[(0,T.jsx)(t.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),`, `,(0,T.jsx)(t.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),`, and `,(0,T.jsx)(t.a,{href:`/docs/components-containers-table--docs`,children:`Table`}),`, the components a Skeleton stands in for.`]}),`
`]}),`
`,(0,T.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(d,{tokens:x})]})}function w(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=t(),f(),a(),u(),S(),v()}))();export{w as default};