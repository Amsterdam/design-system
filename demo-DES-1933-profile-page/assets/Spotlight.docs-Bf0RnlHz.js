import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-zzQRermb.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-PfMU7bcy.js";import{n as p,r as m,t as h}from"./Spotlight.stories-hg-LkPAT.js";var g,_;function v(){return(v=e((()=>{g={spotlight:{"background-color":{$value:`{ams.color.highlight.purple}`,$extensions:{"nl.amsterdam.type":`color`}},azure:{"background-color":{$value:`{ams.color.highlight.azure}`,$extensions:{"nl.amsterdam.type":`color`}}},green:{"background-color":{$value:`{ams.color.highlight.green}`,$extensions:{"nl.amsterdam.type":`color`}}},lime:{"background-color":{$value:`{ams.color.highlight.lime}`,$extensions:{"nl.amsterdam.type":`color`}}},magenta:{"background-color":{$value:`{ams.color.highlight.magenta}`,$extensions:{"nl.amsterdam.type":`color`}}},orange:{"background-color":{$value:`{ams.color.highlight.orange}`,$extensions:{"nl.amsterdam.type":`color`}}},yellow:{"background-color":{$value:`{ams.color.highlight.yellow}`,$extensions:{"nl.amsterdam.type":`color`}}}}},_={ams:g}})))()}function y(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...l(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[`
`,`
`,`
`,`
`,(0,x.jsx)(s,{of:p}),`
`,(0,x.jsx)(o,{}),`
`,(0,x.jsx)(t,{of:p}),`
`,(0,x.jsx)(n,{}),`
`,(0,x.jsx)(i,{}),`
`,(0,x.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,x.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,x.jsxs)(r.p,{children:[`Do not position a Spotlight on the `,(0,x.jsx)(r.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),`.`]}),`
`,(0,x.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,x.jsxs)(r.p,{children:[`Use the entire width of the `,(0,x.jsx)(r.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),` container.
Wrap its content in a Grid with extra large vertical padding.`]}),`
`,(0,x.jsxs)(r.p,{children:[`Use any of the `,(0,x.jsx)(r.a,{href:`/docs/brand-design-tokens-colour--docs`,children:`highlight colours`}),` for the background.
The design system does not prescribe a meaning to any of these colours.
The default is purple.`]}),`
`,(0,x.jsxs)(r.p,{children:[`Select `,(0,x.jsx)(r.a,{href:`/docs/brand-design-tokens-colour--docs#pairing-foreground-with-background-colours`,children:`the correct colour`}),` for text and links against the background you choose.
On a dark background, set `,(0,x.jsx)(r.code,{children:`color="inverse"`}),` on every Heading, Paragraph, and Link inside the Spotlight.
On a light one, keep the default colour for headings and paragraphs, and set `,(0,x.jsx)(r.code,{children:`color="contrast"`}),` on links.`]}),`
`,(0,x.jsxs)(r.p,{children:[`Name the landmark when you use the `,(0,x.jsx)(r.code,{children:`as`}),` prop: give the heading inside the Spotlight an `,(0,x.jsx)(r.code,{children:`id`}),` and point `,(0,x.jsx)(r.code,{children:`aria-labelledby`}),` at it.
Users of assistive technology can then tell this landmark apart from the others on the page.`]}),`
`,(0,x.jsxs)(r.p,{children:[`Find a fitting setup for the `,(0,x.jsx)(r.a,{href:`/docs/pages-public-introduction--docs#how-to-size-the-grid-cells`,children:`amount and width of columns`}),`.`]}),`
`,(0,x.jsxs)(r.p,{children:[`Use the `,(0,x.jsx)(r.code,{children:`as`}),` prop to render a meaningful HTML element: `,(0,x.jsx)(r.code,{children:`as="section"`}),` for a self-contained content area, `,(0,x.jsx)(r.code,{children:`as="aside"`}),` for supporting content.`]}),`
`,(0,x.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,x.jsx)(r.h3,{id:`highlight-content`,children:`Highlight content`}),`
`,(0,x.jsx)(r.p,{children:`Use a Spotlight to direct the user’s attention to the most important or actionable content on the page.`}),`
`,(0,x.jsx)(a,{of:h}),`
`,(0,x.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,x.jsx)(r.p,{children:`A Spotlight is a background colour and nothing else: no padding, no border, no corner radius, and no width of its own.
It fills whatever contains it and takes its shape from the Grid inside it, which is why ‘How to use’ asks for the full width of the Page and for a Grid with extra large vertical padding.`}),`
`,(0,x.jsx)(r.p,{children:`In print, a Spotlight keeps its background colour instead of being flattened to save ink.`}),`
`,(0,x.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,x.jsx)(r.p,{children:`A Spotlight carries no colour that a screen reader can report, so its emphasis is entirely visual.
Whatever the highlight is meant to signal has to be in the content itself.`}),`
`,(0,x.jsxs)(r.p,{children:[`The `,(0,x.jsx)(r.code,{children:`as`}),` prop is what gives a Spotlight a place in the structure of a page: `,(0,x.jsx)(r.code,{children:`as="aside"`}),` makes it a complementary landmark, and `,(0,x.jsx)(r.code,{children:`as="section"`}),` makes it a region once it has an accessible name.
Without a name, a `,(0,x.jsx)(r.code,{children:`section`}),` groups the content in the markup but adds nothing anyone can navigate to; ‘How to use’ covers how to give it one.`]}),`
`,(0,x.jsx)(r.p,{children:`Which foreground colour to use depends on the highlight colour behind it, since the component sets only the background and leaves the text colour to the content inside it.`}),`
`,(0,x.jsx)(r.h2,{id:`see-also`,children:`See also`}),`
`,(0,x.jsxs)(r.ul,{children:[`
`,(0,x.jsxs)(r.li,{children:[(0,x.jsx)(r.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),` – contains the Spotlight.`]}),`
`,(0,x.jsxs)(r.li,{children:[(0,x.jsx)(r.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` – wraps the content of the Spotlight.`]}),`
`]}),`
`,(0,x.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,x.jsx)(f,{tokens:_})]})}function b(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;function S(){return(S=e((()=>{x=c(),u(),r(),d(),v(),m()})))()}S();export{b as default};