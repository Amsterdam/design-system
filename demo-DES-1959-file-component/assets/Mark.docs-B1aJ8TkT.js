import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,d as n,h as r,i,n as a,p as o,u as s}from"./blocks-BQKRe05W.js";import{t as c}from"./jsx-runtime-ATHzeHXA.js";import{i as l,r as u}from"./react-Dyi61YEg.js";import{n as d,t as f}from"./DesignTokensTable-CFOFErDJ.js";import{n as p,r as m,t as h}from"./Mark.stories-Bz3Oghnz.js";var g,_;function v(){return(v=e((()=>{g={mark:{"background-color":{$value:`{ams.color.highlight.yellow}`,$extensions:{"nl.amsterdam.type":`color`}}}},_={ams:g}})))()}function y(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,...l(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[`
`,`
`,`
`,`
`,(0,x.jsx)(s,{of:h}),`
`,(0,x.jsx)(o,{}),`
`,(0,x.jsx)(t,{of:h}),`
`,(0,x.jsx)(n,{}),`
`,(0,x.jsx)(i,{}),`
`,(0,x.jsx)(r.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,x.jsx)(r.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,x.jsx)(r.p,{children:`Highlight the words someone searched for in a list of results, so they can see at a glance why each result matched.`}),`
`,(0,x.jsx)(r.p,{children:`Or draw attention to a single fragment of running text that a reader should not miss, such as the question a consultation puts to residents.`}),`
`,(0,x.jsx)(r.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,x.jsxs)(r.p,{children:[`Do not reach for Mark to emphasise text in general.
A passage that carries more weight than the rest usually belongs in a `,(0,x.jsx)(r.a,{href:`/docs/components-text-heading--docs`,children:`Heading`}),` or in the lead `,(0,x.jsx)(r.a,{href:`/docs/components-text-paragraph--docs`,children:`Paragraph`}),` of the page.`]}),`
`,(0,x.jsxs)(r.p,{children:[`Do not use Mark to flag a warning, a deadline, or a change in service.
An `,(0,x.jsx)(r.a,{href:`/docs/components-feedback-alert--docs`,children:`Alert`}),` carries that meaning and announces itself to assistive technology, which a highlight does not.`]}),`
`,(0,x.jsx)(r.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,x.jsxs)(r.p,{children:[`Never let the highlight carry information by itself.
The text around it has to make sense without it, so that what the highlight shows reaches everyone, as `,(0,x.jsx)(r.a,{href:`https://www.w3.org/TR/WCAG22/#info-and-relationships`,rel:`nofollow`,children:`WCAG 1.3.1`}),` requires.`]}),`
`,(0,x.jsx)(r.h4,{id:`search-terms`,children:`Search terms`}),`
`,(0,x.jsx)(r.p,{children:`A list of search results meets that on its own: each result is meaningful without the highlight, which only speeds up scanning.`}),`
`,(0,x.jsx)(r.p,{children:`A highlight here follows the query rather than an editorial choice, so no limit applies to how many appear.
Mark every match on the page, including matches inside the heading of a result.
Ignore capitalisation and include partial matches.`}),`
`,(0,x.jsx)(r.p,{children:`Leave the labels around a result alone, such as the category it is filed under.
A full-text search does not match those, so a word that looks like a match there is not one.`}),`
`,(0,x.jsx)(r.h4,{id:`editorial-highlights`,children:`Editorial highlights`}),`
`,(0,x.jsx)(r.p,{children:`Keep an editorial highlight to one fragment per page, and to at most one sentence.
Marking a whole paragraph, or several passages at once, leaves nothing standing out.
Rewrite a heading that needs emphasis rather than highlighting part of it.`}),`
`,(0,x.jsx)(r.h2,{id:`examples`,children:`Examples`}),`
`,(0,x.jsx)(r.h3,{id:`search-results`,children:`Search results`}),`
`,(0,x.jsx)(r.p,{children:`One result of a search for ‘vergunning’, with every match highlighted in the heading as well as in the summary.
The category above the heading is a label rather than text the search matched, so the word stays unmarked there.`}),`
`,(0,x.jsxs)(r.p,{children:[`The `,(0,x.jsx)(r.a,{href:`/docs/pages-public-search-results-page--docs`,children:`Search Results Page`}),` puts this to work on a whole list of results.`]}),`
`,(0,x.jsx)(a,{of:p}),`
`,(0,x.jsx)(r.h2,{id:`design`,children:`Design`}),`
`,(0,x.jsx)(r.p,{children:`Only the background colour changes.
The size, weight, and colour of the text stay as they are, so marked words remain part of the sentence instead of becoming a style of their own.`}),`
`,(0,x.jsxs)(r.p,{children:[`The highlight is yellow, one of the `,(0,x.jsx)(r.a,{href:`/docs/brand-design-tokens-colour--docs#highlight`,children:`highlight colours`}),`.
Yellow is the lightest of them, so it keeps the most contrast with the text laid over it.`]}),`
`,(0,x.jsx)(r.p,{children:`The highlight has no padding and no rounded corners.
It follows the shape of the text exactly and breaks across lines along with it.`}),`
`,(0,x.jsx)(r.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,x.jsxs)(r.p,{children:[`A Mark renders a `,(0,x.jsx)(r.code,{children:`mark`}),` element, but most screen readers do not announce highlighted text in their default configuration.
Someone who does not see the page receives the sentence without learning which words were singled out.
The component cannot make up for that on its own, so what the highlight conveys has to be in the text as well, which ‘How to use’ covers.`]}),`
`,(0,x.jsx)(r.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,x.jsx)(f,{tokens:_})]})}function b(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;function S(){return(S=e((()=>{x=c(),u(),r(),d(),v(),m()})))()}S();export{b as default};