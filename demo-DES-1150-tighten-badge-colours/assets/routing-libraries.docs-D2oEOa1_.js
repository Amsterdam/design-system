import{j as n}from"./jsx-runtime-z8MfsBtr.js";import{useMDXComponents as r}from"./index-BAvqEBP-.js";import{M as i}from"./index-CI0oWRWb.js";import"./index-C9rmetsa.js";import"./index-D7uoVdV3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CNkXDWVL.js";import"./index-D-OUEn-9.js";import"./index-Cu4lwwaE.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";/*@license CC0-1.0*/function o(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(i,{title:"Docs/Developer Guide/Routing libraries"}),`
`,n.jsx(e.h1,{id:"routing-libraries",children:"Routing libraries"}),`
`,n.jsx(e.p,{children:`We provide various link components that render native anchor tags, typically without extra features.
You may need to integrate these components into a routing library for your application.
The link components in the Amsterdam Design System are designed for easy extension.`}),`
`,n.jsx(e.p,{children:"Some examples for common routing libraries:"}),`
`,n.jsx(e.h2,{id:"nextjs",children:"Next.js"}),`
`,n.jsxs(e.p,{children:["You can hook into the Next router using the ",n.jsx(e.code,{children:"legacyBehaviour"})," and ",n.jsx(e.code,{children:"passHref"})," props on the Next link component, like so:"]}),`
`,`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Link } from "@amsterdam/design-system-react"
import NextLink from "next/link"

<NextLink legacyBehavior passHref href="/amsterdam">
  <Link>Link label</Link>
</NextLink>
`})}),`
`,n.jsx(e.h2,{id:"react-router",children:"React Router"}),`
`,n.jsxs(e.p,{children:["React Router allows you to hook into their routing functionality with ",n.jsx(e.a,{href:"https://reactrouter.com/en/main/hooks/use-link-click-handler",rel:"nofollow",children:"the useLinkClickHandler hook"}),`.
You can use this hook directly on a link component, or you can write a component which adds this functionality to the link component you pass to it, like so:`]}),`
`,`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Link } from "@amsterdam/design-system-react"
import { useHref, useLinkClickHandler } from "react-router-dom"

const ReactRouterLink = ({ component, to, ...restProps }) => {
  const Tag = component
  const href = useHref(to)
  const handleClick = useLinkClickHandler(to)

  return (
    <Tag
      href={href}
      onClick={(event) => {
        handleClick(event)
      }}
      {...restProps}
    />
  )
}

<ReactRouterLink component={Link} to="/amsterdam">
  Link label
</ReactRouterLink>
`})})]})}function f(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{f as default};
