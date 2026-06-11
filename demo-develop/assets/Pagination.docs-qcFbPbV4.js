import{n as e}from"./chunk-DnJy8xQt.js";import{Wt as t}from"./iframe-C1sqtiEi.js";import{r as n}from"./react-BGXIIzpj.js";import{a as r,f as i,i as a,l as o,m as s,u as c}from"./blocks-DzvX9zqo.js";import{n as l,t as u}from"./DesignTokensTable-C2HZSYDX.js";import{t as d}from"./mdx-react-shim-MeF5-N3m.js";import{n as f,t as p}from"./Pagination.stories-x6u25Fep.js";var m,h,g=e((()=>{m={pagination:{"font-family":{$value:`{ams.typography.font-family}`,$extensions:{"nl.amsterdam.type":`fontFamily`}},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.subtype":`lineHeight`,"nl.amsterdam.type":`number`}},link:{color:{$value:`{ams.links.color}`,$extensions:{"nl.amsterdam.type":`color`}},gap:{$value:`{ams.space.xs}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"outline-offset":{$value:`{ams.focus.outline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"padding-inline":{$value:`{ams.space.s}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-decoration-line":{$value:`{ams.links.subtle.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}},"text-decoration-thickness":{$value:`{ams.links.text-decoration-thickness}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},"text-underline-offset":{$value:`{ams.links.text-underline-offset}`,$extensions:{"nl.amsterdam.subtype":`space`,"nl.amsterdam.type":`dimension`}},current:{"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$extensions:{"nl.amsterdam.type":`fontWeight`}}},hover:{color:{$value:`{ams.links.hover.color}`,$extensions:{"nl.amsterdam.type":`color`}},"text-decoration-line":{$value:`{ams.links.subtle.hover.text-decoration-line}`,$extensions:{"nl.amsterdam.type":`textDecorationLine`}}}}}},h={ams:m}}));function _(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[`
`,`
`,`
`,`
`,(0,y.jsx)(o,{of:p}),`
`,(0,y.jsx)(i,{}),`
`,(0,y.jsx)(r,{of:p}),`
`,(0,y.jsx)(c,{}),`
`,(0,y.jsx)(a,{}),`
`,(0,y.jsx)(t.h2,{id:`usage-guidelines`,children:`Usage guidelines`}),`
`,(0,y.jsx)(t.h3,{id:`when-to-use`,children:`When to use`}),`
`,(0,y.jsx)(t.p,{children:`Use Pagination only when an overview list is too long to display on a single page.
Place Pagination below the overview list.`}),`
`,(0,y.jsx)(t.p,{children:`Pagination can be combined with a count at the top of the page indicating “Page # of ##.”`}),`
`,(0,y.jsx)(t.h3,{id:`when-not-to-use`,children:`When not to use`}),`
`,(0,y.jsx)(t.p,{children:`Pagination should not be displayed if there is only one page.`}),`
`,(0,y.jsx)(t.h3,{id:`how-to-use`,children:`How to use`}),`
`,(0,y.jsx)(t.p,{children:`Make sure that the visible and accessible labels for the 'previous' and 'next' buttons convey the same meaning at all times – e.g. don't update one and forget the other.`}),`
`,(0,y.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,y.jsx)(t.h3,{id:`specifying-a-link-template`,children:`Specifying a link template`}),`
`,(0,y.jsxs)(t.p,{children:[`Use the `,(0,y.jsx)(t.code,{children:`linkTemplate`}),` prop to set the `,(0,y.jsx)(t.code,{children:`href`}),` attribute for the Pagination links.
Remember to include URL parameters other than the page number,
e.g. those for a paginated search page.`]}),`
`,`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`const linkTemplate = (page) => \`/?pagina=\${page}&categorie=video&thema=bestuur\`

return <Pagination linkTemplate={linkTemplate} />
`})}),`
`,(0,y.jsx)(t.h3,{id:`with-a-custom-link-component`,children:`With a custom link component`}),`
`,(0,y.jsx)(t.p,{children:`Pass a custom link component to use Pagination with your routing library.
Here’s an example with the Link component of Next.js:`}),`
`,`
`,(0,y.jsx)(t.pre,{children:(0,y.jsx)(t.code,{className:`language-tsx`,children:`import { Pagination } from "@amsterdam/design-system-react"
import NextLink from "next/link"

const LinkComponent = (props) => <NextLink {...props} />

return <Pagination linkComponent={LinkComponent} />
`})}),`
`,(0,y.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,y.jsx)(t.p,{children:`Start a page with an overview list at the top after changing the page.
Redirect users to the first page if they enter a URL with a page number that doesn’t exist.`}),`
`,(0,y.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,y.jsx)(u,{tokens:h})]})}function v(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,y.jsx)(t,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;e((()=>{y=t(),d(),s(),f(),g(),l()}))();export{v as default};