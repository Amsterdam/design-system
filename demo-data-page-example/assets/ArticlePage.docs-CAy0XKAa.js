import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,h as n,p as r,u as i}from"./blocks-zzQRermb.js";import{t as a}from"./jsx-runtime-ATHzeHXA.js";import{i as o,r as s}from"./react-Dyi61YEg.js";import{n as c,t as l}from"./anatomyLabels-BfxKNLNX.js";import{n as u,t as d}from"./ArticlePage.stories-CU2AN2xN.js";import{n as f,t as p}from"./PageAnatomy-eJlzwjW6.js";function m(e){let n={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...o(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[`
`,`
`,`
`,`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(r,{}),`
`,(0,g.jsx)(t,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsx)(n.p,{children:`This schematic shows the default sections for this page type and how the grids and vertical space work.`}),`
`,(0,g.jsx)(p,{labels:l,of:d}),`
`,(0,g.jsx)(n.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,g.jsx)(n.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,g.jsx)(n.p,{children:`Use this page for a single dated article: a news item, a press release, or a blog post.`}),`
`,(0,g.jsx)(n.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,g.jsxs)(n.p,{children:[`Use a `,(0,g.jsx)(n.a,{href:`/docs/pages-public-news-overview-page--docs`,children:`News Overview Page`}),` to list several of them.
Use an `,(0,g.jsx)(n.a,{href:`/docs/pages-public-information-page--docs`,children:`Information Page`}),` for a subject that stays true rather than one that happened on a date.`]}),`
`,(0,g.jsx)(n.h2,{id:`structure`,children:`Structure`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[`The `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-breadcrumb--docs`,children:`Breadcrumb`}),` has its own `,(0,g.jsx)(n.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` to separate its `,(0,g.jsx)(n.code,{children:`nav`}),` element from the `,(0,g.jsx)(n.code,{children:`main`}),` wrapping the article content.`]}),`
`,(0,g.jsx)(n.li,{children:`The Content Header contains the title, a Metadata Paragraph with the publication date, and the lead paragraph.`}),`
`,(0,g.jsxs)(n.li,{children:[`A full-width hero `,(0,g.jsx)(n.a,{href:`/docs/components-media-image--docs`,children:`Image`}),` separates the Content Header from the body.
It uses a 16:5 aspect ratio.`]}),`
`,(0,g.jsxs)(n.li,{children:[`The body ends with a `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-link-list--docs`,children:`Link List`}),` of related articles.`]}),`
`,(0,g.jsxs)(n.li,{children:[`A `,(0,g.jsx)(n.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),` holds a newsletter call-to-action.`]}),`
`,(0,g.jsxs)(n.li,{children:[`The page closes with a Grid of `,(0,g.jsx)(n.a,{href:`/docs/components-navigation-card--docs`,children:`Cards`}),` referring to other recent news.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`layout-and-spacing`,children:`Layout and spacing`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[`The Grids use the `,(0,g.jsx)(n.a,{href:`/docs/pages-guidelines-layout-and-spacing--docs#how-to-size-the-grid-cells`,children:`recommended Cell sizes`}),`.`]}),`
`,(0,g.jsxs)(n.li,{children:[`The `,(0,g.jsx)(n.a,{href:`/docs/utilities-css-prose--docs`,children:`Prose`}),` utility class sets the vertical space within the Content Header and within the article body.
Each of those Cells carries the class; the space between them is a padding of the Grid.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(n.p,{children:[`The Breadcrumb takes a Grid above `,(0,g.jsx)(n.code,{children:`main`}),`, so its `,(0,g.jsx)(n.code,{children:`nav`}),` element stays outside the article rather than reading as part of it.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Two blocks sit outside `,(0,g.jsx)(n.code,{children:`main`}),` as well: the newsletter Spotlight and the related articles below it.
Each renders with `,(0,g.jsx)(n.code,{children:`as="aside"`}),` and is named by `,(0,g.jsx)(n.code,{children:`aria-labelledby`}),` pointing at its own heading, so both reach a screen reader as complementary landmarks that can be skipped to or past.
The headings they point at carry an `,(0,g.jsx)(n.code,{children:`id`}),` that exists only to be referenced.`]}),`
`,(0,g.jsxs)(n.p,{children:[`The hero Image and the Card images take an empty `,(0,g.jsx)(n.code,{children:`alt`}),`, because the text beside them already says what they show.`]}),`
`,(0,g.jsx)(n.h2,{id:`see-also`,children:`See also`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-public-news-overview-page--docs`,children:`News Overview Page`}),` – lists articles like this one.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/components-containers-spotlight--docs`,children:`Spotlight`}),` – the call-to-action band, and what its contents need.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.a,{href:`/docs/pages-guidelines-layout-and-spacing--docs`,children:`Layout and spacing`}),` – the values behind the section above.`]}),`
`]})]})}function h(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=a(),s(),n(),f(),c(),u()})))()}_();export{h as default};