import{j as e}from"./iframe-RMwqzCzd.js";import{useMDXComponents as i}from"./index-g2PnwlIS.js";import{M as a,f as s,P as r,h as l}from"./blocks-DJIONqt2.js";import{a as p}from"./Pagination.stories-BiNewOvR.js";import{D as c}from"./DesignTokensTable-DTNttNzm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3qruZMH.js";import"./Icon-BE8ZOccK.js";import"./FontDesignToken-fiDH8YNd.js";import"./ColorSample-BFMKLB7P.js";const m=`<!-- @license CC0-1.0 -->

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
`,h={pagination:{"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"ams.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.line-height}",$type:"number"},link:{color:{$value:"{ams.links.color}",$type:"color"},gap:{$value:"{ams.space.xs}",$extensions:{"ams.type":"gap"}},"outline-offset":{$value:"{ams.focus.outline-offset}",$extensions:{"ams.type":"outlineOffset"}},"padding-inline":{$value:"{ams.space.s}",$extensions:{"ams.type":"paddingInline"}},"text-decoration-line":{$value:"{ams.links.subtle.text-decoration-line}",$extensions:{"ams.type":"textDecorationLine"}},"text-decoration-thickness":{$value:"{ams.links.text-decoration-thickness}",$extensions:{"ams.type":"textDecorationThickness"}},"text-underline-offset":{$value:"{ams.links.text-underline-offset}",$extensions:{"ams.type":"textUnderlineOffset"}},current:{"font-weight":{$value:"{ams.typography.body-text.bold.font-weight}",$type:"fontWeight"}},hover:{color:{$value:"{ams.links.hover.color}",$type:"color"},"text-decoration-line":{$value:"{ams.links.subtle.hover.text-decoration-line}",$extensions:{"ams.type":"textDecorationLine"}}}}}},d={ams:h};function o(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(a,{of:p}),`
`,e.jsx(s,{children:m}),`
`,e.jsx(r,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsx(n.h3,{id:"specifying-a-link-template",children:"Specifying a link template"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"linkTemplate"})," prop to set the ",e.jsx(n.code,{children:"href"}),` attribute for the Pagination links.
Remember to include URL parameters other than the page number,
e.g. those for a paginated search page.`]}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:"const linkTemplate = (page) => `/?pagina=${page}&categorie=video&thema=bestuur`\n\nreturn <Pagination linkTemplate={linkTemplate} />\n"})}),`
`,e.jsx(n.h3,{id:"with-a-custom-link-component",children:"With a custom link component"}),`
`,e.jsx(n.p,{children:`Pass a custom link component to use Pagination with your routing library.
Here’s an example with the Link component of Next.js:`}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Pagination } from "@amsterdam/design-system-react"
import NextLink from "next/link"

const LinkComponent = (props) => <NextLink {...props} />

return <Pagination linkComponent={LinkComponent} />
`})}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(c,{tokens:d})]})}function j(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{j as default};
