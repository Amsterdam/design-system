import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-BIKInQVV.js";import{t as c}from"./jsx-runtime-Bq1bXGty.js";import{i as l}from"./react-BnCtKaSV.js";import{n as u,t as d}from"./DesignTokensTable-coE-xUfm.js";import{t as f}from"./mdx-react-shim-9RzcSRdq.js";import{Heading as p,Image as m,List as h,Paragraph as g,Table as _,n as v,t as y}from"./Skeleton.stories-DL4reKGA.js";var b,x,S=e((()=>{b={skeleton:{animation:{$value:`ams-skeleton-heartbeat 1.6s ease-in-out infinite`,$description:"The loading animation, as a CSS `animation` shorthand referencing a keyframes name. Override this token to give the Skeleton a different animation – change the duration or timing function to adjust the pace, point it at your own `@keyframes`, or set it to `none` to switch the animation off."},"background-color":{$value:`#d1d1d1`,$description:`A neutral grey that stands in for the content being loaded.`,$extensions:{"nl.amsterdam.type":`color`}},gap:{$value:`{ams.space.s}`,$description:`The space between the parts composed inside a Skeleton, e.g. an image, a heading and a paragraph.`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},heading:{"font-size":{$value:`{ams.heading.2.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.heading.2.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},odd:{"inline-size":{$value:`85%`,$description:`The width of a heading’s first and other odd-numbered lines.`,$extensions:{"nl.amsterdam.type":`dimension`}}},even:{"inline-size":{$value:`65%`,$description:`The width of a heading’s second and other even-numbered lines.`,$extensions:{"nl.amsterdam.type":`dimension`}}},last:{"inline-size":{$value:`45%`,$description:`The width of a heading’s last line, unless it is the only line.`,$extensions:{"nl.amsterdam.type":`dimension`}}}},image:{"aspect-ratio":{$value:`{ams.image.aspect-ratio}`,$extensions:{"nl.amsterdam.type":`aspectRatio`}}},line:{"font-size":{$value:`{ams.paragraph.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"line-height":{$value:`{ams.paragraph.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}}},list:{gap:{$value:`{ams.unordered-list.gap}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},odd:{"inline-size":{$value:`70%`,$description:`The width of a list’s first and other odd-numbered lines.`,$extensions:{"nl.amsterdam.type":`dimension`}}},even:{"inline-size":{$value:`40%`,$description:`The width of a list’s second and other even-numbered lines.`,$extensions:{"nl.amsterdam.type":`dimension`}}},last:{"inline-size":{$value:`60%`,$description:`The width of a list’s last line, unless it is the only line.`,$extensions:{"nl.amsterdam.type":`dimension`}}},item:{"column-gap":{$value:{value:.5,unit:`rem`},$type:`dimension`,$extensions:{"nl.amsterdam.hint":`Together with the item padding and the marker width, starts the line at the 2.5rem text indent of Unordered List.`,"nl.amsterdam.subtype":`space`}},"padding-inline-start":{$value:`{ams.unordered-list.item.margin-inline-start}`,$extensions:{"nl.amsterdam.hint":`Starts the marker where the marker of Unordered List renders.`,"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},marker:{"block-size":{$value:{value:.375,unit:`rem`},$type:`dimension`,$extensions:{"nl.amsterdam.hint":`Approximates the size of the bullet of Unordered List.`}},"inline-size":{$value:{value:.375,unit:`rem`},$type:`dimension`,$extensions:{"nl.amsterdam.hint":`Approximates the size of the bullet of Unordered List.`}}}}},paragraph:{odd:{"inline-size":{$value:`95%`,$description:`The width of a paragraph’s first and other odd-numbered lines.`,$extensions:{"nl.amsterdam.type":`dimension`}}},even:{"inline-size":{$value:`75%`,$description:`The width of a paragraph’s second and other even-numbered lines.`,$extensions:{"nl.amsterdam.type":`dimension`}}},last:{"inline-size":{$value:`55%`,$description:`The width of a paragraph’s last line, unless it is the only line.`,$extensions:{"nl.amsterdam.type":`dimension`}}}},table:{odd:{"inline-size":{$value:`90%`,$description:`The wider of the two widths a table alternates its cells between.`,$extensions:{"nl.amsterdam.type":`dimension`}}},even:{"inline-size":{$value:`70%`,$description:`The narrower of the two widths a table alternates its cells between.`,$extensions:{"nl.amsterdam.type":`dimension`}}},cell:{"padding-block":{$value:`{ams.table.cell.padding-block}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.table.cell.padding-inline}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}}},row:{"border-block-end":{$value:`{ams.table.cell.border-block-end}`,$extensions:{"nl.amsterdam.type":`border`}}}}}},x={ams:b}}));function C(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...l(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[`
`,`
`,`
`,`
`,(0,T.jsx)(s,{of:y}),`
`,(0,T.jsx)(o,{}),`
`,(0,T.jsx)(t,{of:y}),`
`,(0,T.jsx)(n,{}),`
`,(0,T.jsx)(r.p,{children:`The Skeleton container takes only the parts you compose inside it and hides them from assistive technologies.
Each part has its own options, documented under Subcomponents.`}),`
`,(0,T.jsx)(r.p,{children:`The container itself has no props to configure.`}),`
`,(0,T.jsx)(r.h2,{id:`subcomponents`,children:`Subcomponents`}),`
`,(0,T.jsxs)(r.p,{children:[`Compose a Skeleton from its parts: Skeleton.Image, Skeleton.Heading, Skeleton.Paragraph, Skeleton.List, and Skeleton.Table.
Skeleton.Image is a single block; the others render one or more lines, sized to the text they stand in for.
Set the `,(0,T.jsx)(r.code,{children:`lines`}),`, `,(0,T.jsx)(r.code,{children:`rows`}),`, and `,(0,T.jsx)(r.code,{children:`columns`}),` props to approximate the amount of content you expect.`]}),`
`,(0,T.jsx)(r.h3,{id:`heading`,children:`Heading`}),`
`,(0,T.jsxs)(r.p,{children:[`Lines the size of a Heading.
Set `,(0,T.jsx)(r.code,{children:`lines`}),` above one for a heading that wraps onto several lines.`]}),`
`,(0,T.jsx)(a,{of:p}),`
`,(0,T.jsx)(i,{of:p}),`
`,(0,T.jsx)(r.h3,{id:`paragraph`,children:`Paragraph`}),`
`,(0,T.jsx)(r.p,{children:`Lines the size of body text.
Their lengths alternate between two widths, and the last line of a multi-line paragraph is shorter, approximating its ragged end.`}),`
`,(0,T.jsx)(a,{of:g}),`
`,(0,T.jsx)(i,{of:g}),`
`,(0,T.jsx)(r.h3,{id:`list`,children:`List`}),`
`,(0,T.jsx)(r.p,{children:`Body-text lines, each with a marker, indented like an Unordered List.`}),`
`,(0,T.jsx)(a,{of:h}),`
`,(0,T.jsx)(i,{of:h}),`
`,(0,T.jsx)(r.h3,{id:`table`,children:`Table`}),`
`,(0,T.jsx)(r.p,{children:`A grid of cells.`}),`
`,(0,T.jsx)(a,{of:_}),`
`,(0,T.jsx)(i,{of:_}),`
`,(0,T.jsx)(r.h3,{id:`image`,children:`Image`}),`
`,(0,T.jsxs)(r.p,{children:[`A block that stands in for an image.
Set the `,(0,T.jsx)(r.code,{children:`aspectRatio`}),` prop to match the image that will replace it; it defaults to 16:9.`]}),`
`,(0,T.jsx)(a,{of:m}),`
`,(0,T.jsx)(i,{of:m}),`
`,(0,T.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,T.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,T.jsx)(r.p,{children:`Show a Skeleton while loading content that takes a noticeable time to arrive – roughly between 1 and 10 seconds.
Compose the parts to mirror the content to come, so the grey blocks prepare users for the page structure and waiting feels shorter.`}),`
`,(0,T.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,T.jsx)(r.p,{children:`Do not show a Skeleton for waits shorter than about a second: a flash of grey blocks is more distracting than helpful.
For a process with a known duration or progress, such as a file upload, show actual progress information instead.
Never use a Skeleton for content that is already available – render that content immediately.
Avoid combining it with other loading indicators in the same view.`}),`
`,(0,T.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,T.jsx)(r.p,{children:`Nest the parts you need inside a Skeleton, in the order the real content will appear.
Match the number of lines, rows, and columns to the expected content, so replacing the Skeleton barely shifts the layout.
Render a Skeleton only while its content is loading, and replace it with the content – or an empty or error state – as soon as that content arrives.`}),`
`,(0,T.jsxs)(r.p,{children:[`A Skeleton is decorative and hidden from assistive technologies, so it stays silent on its own.
Announcing the loading state is the job of the region that holds the content, not of each Skeleton – otherwise a list of ten Skeletons would announce ten times.
Mark that region with `,(0,T.jsx)(r.code,{children:`aria-busy`}),` while it loads, and give it a single, always-present status message whose text changes from a loading message to the result:`]}),`
`,(0,T.jsx)(r.pre,{children:(0,T.jsx)(r.code,{className:`language-html`,children:`<section aria-busy="true">
  <p class="ams-visually-hidden" role="status">Zoekresultaten worden geladen</p>
  <!-- ten Skeletons while loading -->
</section>
`})}),`
`,(0,T.jsxs)(r.p,{children:[`When the content has loaded, replace the Skeletons with it, set `,(0,T.jsx)(r.code,{children:`aria-busy`}),` to `,(0,T.jsx)(r.code,{children:`false`}),`, and change the status message – for example to ‘10 resultaten gevonden’.
A Loading Region component that wraps this pattern is planned.`]}),`
`,(0,T.jsx)(r.h4,{id:`customising-the-animation`,children:`Customising the animation`}),`
`,(0,T.jsxs)(r.p,{children:[`The animation is set through one custom property, `,(0,T.jsx)(r.code,{children:`--ams-skeleton-animation`}),`, which holds a CSS `,(0,T.jsx)(r.code,{children:`animation`}),` shorthand.
Override it to suit your theme: change the duration or timing function to adjust the pace, point it at your own `,(0,T.jsx)(r.code,{children:`@keyframes`}),` to replace the motion, or set it to `,(0,T.jsx)(r.code,{children:`none`}),` to switch it off.
Users who prefer reduced motion never see the animation, whatever you set it to.`]}),`
`,(0,T.jsx)(r.h2,{id:`features`,children:`Features`}),`
`,(0,T.jsx)(r.p,{children:`The dimensions of the lines derive from the design tokens of the text they mimic: Skeleton.Heading follows Heading 2, and the other parts follow body text.
Each line is exactly as tall as its line of text, so a part occupies the same height as the content it stands in for and the layout barely shifts once that content arrives.`}),`
`,(0,T.jsx)(r.p,{children:`Line lengths vary deterministically: within each part the lines – or, in a table, the cells across each row – alternate between two widths, and any part with more than one ends on a shorter last one.
This looks natural yet renders identically on every request, which keeps server-side rendering consistent and visual regression tests stable.`}),`
`,(0,T.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,T.jsx)(r.p,{children:`The blocks use a single neutral grey that reads as a quiet backdrop rather than content.
The space between composed parts is a generic gap rather than the exact margins of any one component, keeping the Skeleton reusable in any layout.`}),`
`,(0,T.jsx)(r.p,{children:`A calm heartbeat signals that loading is under way.
Two quick beats in succession – the second softer than the first – fade the blocks to a lighter shade and back, then a longer rest holds them at full strength before the next pair.
The rhythm reassures without demanding attention, closer to a resting heartbeat than a busy shimmer.
It sits behind a single design token, so a theme can retime it, point it at its own keyframes, or switch it off.`}),`
`,(0,T.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,T.jsxs)(r.p,{children:[`A Skeleton renders with `,(0,T.jsx)(r.code,{children:`aria-hidden="true"`}),`, so screen readers skip the grey blocks entirely.
Because the loading announcement belongs to the region that is loading rather than to each block, the Skeleton stays silent; the application announces the state once for the region, as shown under ‘How to use’, to meet `,(0,T.jsx)(r.a,{href:`https://www.w3.org/TR/WCAG22/#status-messages`,rel:`nofollow`,children:`WCAG 4.1.3`}),`.
A Loading Region component to encapsulate that pattern is planned.
The animation runs only for users who have not asked for reduced motion; everyone else sees the static blocks.
In forced colours mode, the blocks remain visible through the system colour for disabled text.`]}),`
`,(0,T.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,T.jsxs)(r.ul,{children:[`
`,(0,T.jsxs)(r.li,{children:[(0,T.jsx)(r.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),`, `,(0,T.jsx)(r.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),`, and `,(0,T.jsx)(r.a,{href:`/docs/components-containers-table--docs`,children:`Table`}),`, the components a Skeleton stands in for.`]}),`
`]}),`
`,(0,T.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,T.jsx)(d,{tokens:x})]})}function w(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;e((()=>{T=c(),f(),r(),u(),S(),v()}))();export{w as default};