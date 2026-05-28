import{n as e}from"./chunk-DnJy8xQt.js";import{Vt as t}from"./iframe-DEWGIgx-.js";import{r as n}from"./react-B_PO4iDy.js";import{c as r,f as i,i as a,l as o,s}from"./blocks-C3uEiC5p.js";import{n as c,t as l}from"./DesignTokensTable-C8Bjms3m.js";import{t as u}from"./mdx-react-shim-CpII5z4k.js";import{n as d,t as f}from"./Pagination.stories-BVwXQpRf.js";var p,m=e((()=>{p=`<!-- @license CC0-1.0 -->

# Pagination

Pagination is a navigation element used to navigate between multiple pages of overview lists.
This is commonly used for search results or a list of news articles.
In cases where overview lists are too long to display on a single page, pagination can provide a clearer and more functional way to divide the content across multiple pages.
Pagination indicates the current page and allows users to navigate to other pages.

## Guidelines

- Use pagination only when an overview list is too long to display on a single page.
- Place pagination below the overview list.
- Pagination should not be displayed if there is only one page.
- Redirect users to the first page if they enter a URL with a page number that doesn’t exist.
- Pagination can be combined with a count at the top of the page indicating “Page # of ##.”
- Start a page with an overview list at the top after changing the page.
- Make sure that the visible and accessible labels for the ‘previous’ and ‘next’ buttons convey the same meaning at all times – e.g. don’t update one and forget the other.

## Relevant WCAG rules

Pagination is an interactive element, and the [general requirements and guidelines for interactivity](/docs/docs-developer-guide-interactivity--docs) apply.
`})),h,g,_=e((()=>{h={pagination:{"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},link:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},current:{"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}},hover:{color:{$value:`{ams.links.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}}}},g={ams:h}}));function v(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[`
`,`
`,`
`,`
`,(0,b.jsx)(r,{of:f}),`
`,(0,b.jsx)(s,{children:p}),`
`,(0,b.jsx)(o,{}),`
`,(0,b.jsx)(a,{}),`
`,(0,b.jsx)(t.h2,{id:`how-to-use`,children:`How to use`}),`
`,(0,b.jsx)(t.h3,{id:`specifying-a-link-template`,children:`Specifying a link template`}),`
`,(0,b.jsxs)(t.p,{children:[`Use the `,(0,b.jsx)(t.code,{children:`linkTemplate`}),` prop to set the `,(0,b.jsx)(t.code,{children:`href`}),` attribute for the Pagination links.
Remember to include URL parameters other than the page number,
e.g. those for a paginated search page.`]}),`
`,`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`const linkTemplate = (page) => \`/?pagina=\${page}&categorie=video&thema=bestuur\`

return <Pagination linkTemplate={linkTemplate} />
`})}),`
`,(0,b.jsx)(t.h3,{id:`with-a-custom-link-component`,children:`With a custom link component`}),`
`,(0,b.jsx)(t.p,{children:`Pass a custom link component to use Pagination with your routing library.
Here’s an example with the Link component of Next.js:`}),`
`,`
`,(0,b.jsx)(t.pre,{children:(0,b.jsx)(t.code,{className:`language-tsx`,children:`import { Pagination } from "@amsterdam/design-system-react"
import NextLink from "next/link"

const LinkComponent = (props) => <NextLink {...props} />

return <Pagination linkComponent={LinkComponent} />
`})}),`
`,(0,b.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,b.jsx)(l,{tokens:g})]})}function y(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,b.jsx)(t,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;e((()=>{b=t(),u(),i(),d(),m(),_(),c()}))();export{y as default};