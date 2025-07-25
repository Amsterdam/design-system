import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-CxbY7dAs.js";import{M as i}from"./index-BHgg25fL.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B4q2Zsfe.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";/*@license CC0-1.0*/function o(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return n.jsxs(n.Fragment,{children:[`
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

<NextLink href="/amsterdam" legacyBehavior passHref>
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
`})})]})}function x(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{x as default};
