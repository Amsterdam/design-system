import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as a}from"./index-BAvqEBP-.js";import{ae as o,aq as s,ar as r,as as l}from"./index-BSB_2SMm.js";import{P as p}from"./Pagination.stories-BraAPmOd.js";import"./index-C9rmetsa.js";import"./index-D7uoVdV3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-Cxw2gO1s.js";import"../sb-preview/runtime.js";import"./index-D-OUEn-9.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./index.esm-BEKO1F9l.js";import"./clsx-B-dksMZM.js";import"./Icon-BoBhPfLP.js";const c=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function i(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...a(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(o,{of:p}),`
`,e.jsx(s,{children:c}),`
`,e.jsx(r,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"specifying-a-link-template",children:"Specifying a link template"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"linkTemplate"})," prop to set the ",e.jsx(n.code,{children:"href"}),` attribute for the Pagination links.
Remember, if you are using URL parameters (like on a paginated search page),
make sure to include those parameters too.`]}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:"const linkTemplate = (page) => `/?pagina=${page}&categorie=video&thema=bestuur`\n\nreturn <Pagination linkTemplate={linkTemplate} />\n"})}),`
`,e.jsx(n.h3,{id:"with-a-custom-link-component",children:"With a custom link component"}),`
`,e.jsx(n.p,{children:`You can pass a custom component to render the Pagination links.
This can be used to integrate Pagination into the routing library for your application.
For example, you can use Pagination with the Next.js link component like so:`}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Pagination } from "@amsterdam/design-system-react"
import NextLink from "next/link"

const LinkComponent = (props) => (
  <NextLink legacyBehavior passHref href={props.href}>
    <a {...props} />
  </NextLink>
)

return <Pagination linkComponent={LinkComponent} />
`})})]})}function M(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{M as default};