import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{a as t,d as n,h as r,p as i,u as a}from"./blocks-DDIQjgnz.js";import{t as o}from"./jsx-runtime-Bq1bXGty.js";import{i as s}from"./react-BnCtKaSV.js";import{t as c}from"./mdx-react-shim-9RzcSRdq.js";import{n as l,r as u}from"./Overlap.stories-D4sH-nO2.js";function d(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[`
`,`
`,`
`,(0,p.jsx)(a,{of:l}),`
`,(0,p.jsx)(i,{}),`
`,(0,p.jsx)(t,{of:l}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(r.p,{children:`This component has no props to configure.`}),`
`,(0,p.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,p.jsx)(r.p,{children:`Use a sufficiently large image.
The aspect ratio of 32:9 is most suitable.`}),`
`,(0,p.jsxs)(r.p,{children:[`Follow `,(0,p.jsx)(r.a,{href:`/docs/components-media-image--docs`,children:`the general guidelines for images`}),`.`]}),`
`,(0,p.jsx)(r.p,{children:`Put the background first and the content that sits on top after it.
The Overlap stacks its children in the order you write them, so the last one is the one on top.`}),`
`,(0,p.jsx)(r.p,{children:`Check that text placed over an image still has enough contrast against it.
A photograph varies from one area to the next, so a colour that passes over the sky may fail a few hundred pixels along.`}),`
`,(0,p.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,p.jsx)(r.h3,{id:`hero-image-with-search-field`,children:`Hero image with Search Field`}),`
`,(0,p.jsxs)(r.p,{children:[`This allows for the use of a mood-setting image as a background.
A `,(0,p.jsx)(r.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` provides horizontal space on both sides and columns for layout.`]}),`
`,(0,p.jsx)(r.p,{children:`Note: the library does not yet offer an option to vertically centre the form.`}),`
`,(0,p.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,p.jsx)(r.p,{children:`Every child is placed in the same single cell of a grid, one on top of the other.
Nothing is taken out of the flow, so an Overlap still occupies space on the page and pushes what follows it down, which absolute positioning would not do.`}),`
`,(0,p.jsx)(r.p,{children:`The tallest child decides the height.
An image and the content over it therefore need to be a reasonable match in size, since the shorter of the two cannot stretch the container.`}),`
`,(0,p.jsxs)(r.p,{children:[`Stacking order follows the markup and nothing else.
There is no `,(0,p.jsx)(r.code,{children:`z-index`}),` to set or to fight with; moving something to the front means moving it later in the code.`]}),`
`,(0,p.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,p.jsxs)(r.p,{children:[`An Overlap renders a `,(0,p.jsx)(r.code,{children:`div`}),` and adds nothing to the accessibility tree.`]}),`
`,(0,p.jsx)(r.p,{children:`Because the stacking order is the source order, what is drawn on top is also what is read last.
The visual arrangement and the reading order cannot drift apart here, which is the usual hazard with overlapping content.`}),`
`,(0,p.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,p.jsxs)(r.ul,{children:[`
`,(0,p.jsxs)(r.li,{children:[(0,p.jsx)(r.a,{href:`/docs/components-media-image--docs`,children:`Image`}),` – typically the background of an Overlap.`]}),`
`,(0,p.jsxs)(r.li,{children:[(0,p.jsx)(r.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` – often used to position content on top of the image.`]}),`
`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=o(),c(),r(),u()}))();export{f as default};