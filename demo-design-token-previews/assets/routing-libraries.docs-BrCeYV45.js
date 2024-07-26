import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as r}from"./index-BI1Biiay.js";import{ae as i}from"./index-N2ZS4nu0.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CgnT2Coz.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";/*@license CC0-1.0*/function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{title:"Docs/Developer Guide/Routing libraries"}),`
`,e.jsx(n.h1,{id:"routing-libraries",children:"Routing libraries"}),`
`,e.jsx(n.p,{children:`We provide various link components that render native anchor tags, typically without extra features.
You may need to integrate these components into a routing library for your application.
The link components in the Amsterdam Design System are designed for easy extension.`}),`
`,e.jsx(n.p,{children:"Some examples for common routing libraries:"}),`
`,e.jsx(n.h2,{id:"nextjs",children:"Next.js"}),`
`,e.jsxs(n.p,{children:["You can hook into the Next router using the ",e.jsx(n.code,{children:"legacyBehaviour"})," and ",e.jsx(n.code,{children:"passHref"})," props on the Next link component, like so:"]}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Link } from "@amsterdam/design-system-react"
import NextLink from "next/link"

<NextLink legacyBehavior passHref href="/amsterdam">
  <Link>Link label</Link>
</NextLink>
`})}),`
`,e.jsx(n.h2,{id:"react-router",children:"React Router"}),`
`,e.jsxs(n.p,{children:["React Router allows you to hook into their routing functionality with ",e.jsx(n.a,{href:"https://reactrouter.com/en/main/hooks/use-link-click-handler",rel:"nofollow",children:"the useLinkClickHandler hook"}),`.
You can use this hook directly on a link component, or you can write a component which adds this functionality to the link component you pass to it, like so:`]}),`
`,`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Link } from "@amsterdam/design-system-react"
import { useLinkClickHandler, useHref } from "react-router-dom"

const ReactRouterLink = ({ component, to, ...restProps }) => {
  const Tag = component
  let href = useHref(to)
  let handleClick = useLinkClickHandler(to)

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
`})})]})}function f(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{f as default};
