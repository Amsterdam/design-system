import{n as e}from"./chunk-zsgVPwQN.js";import{jt as t}from"./iframe-BVFWTBYJ.js";import{r as n}from"./react-CXkowX3w.js";import{c as r,f as i}from"./blocks-Sibs7h3e.js";import{t as a}from"./mdx-react-shim-CiUF8O5K.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(r,{title:`Docs/Developer Guide/Routing Libraries`}),`
`,(0,c.jsx)(t.h1,{id:`routing-libraries`,children:`Routing libraries`}),`
`,(0,c.jsx)(t.p,{children:`We provide various link components that render native anchor tags, typically without extra features.
You may need to integrate these components into a routing library for your application.
The link components in the Amsterdam Design System are designed for easy extension.`}),`
`,(0,c.jsx)(t.p,{children:`Some examples for common routing libraries:`}),`
`,(0,c.jsx)(t.h2,{id:`nextjs`,children:`Next.js`}),`
`,(0,c.jsxs)(t.p,{children:[`You can hook into the Next router using the `,(0,c.jsx)(t.code,{children:`legacyBehaviour`}),` and `,(0,c.jsx)(t.code,{children:`passHref`}),` props on the Next link component, like so:`]}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { Link } from "@amsterdam/design-system-react"
import NextLink from "next/link"

<NextLink href="/amsterdam" legacyBehavior passHref>
  <Link>Link label</Link>
</NextLink>
`})}),`
`,(0,c.jsx)(t.h2,{id:`react-router`,children:`React Router`}),`
`,(0,c.jsxs)(t.p,{children:[`React Router allows you to hook into their routing functionality with `,(0,c.jsx)(t.a,{href:`https://reactrouter.com/en/main/hooks/use-link-click-handler`,rel:`nofollow`,children:`the useLinkClickHandler hook`}),`.
You can use this hook directly on a link component, or you can write a component which adds this functionality to the link component you pass to it, like so:`]}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-jsx`,children:`import { Link } from "@amsterdam/design-system-react"
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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};