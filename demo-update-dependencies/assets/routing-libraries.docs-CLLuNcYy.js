import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{l as n,m as r,v as i}from"./iframe-BiQFe7tC.js";import{t as a}from"./mdx-react-shim-DAXAwESm.js";function o(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(n,{title:`Docs/Developer Guide/Routing Libraries`}),`
`,(0,c.jsx)(t.h1,{id:`routing-libraries`,children:`Routing libraries`}),`
`,(0,c.jsxs)(t.p,{children:[`Our link components render a native anchor (`,(0,c.jsx)(t.code,{children:`<a>`}),`) by default.
To integrate a routing library such as Next.js or React Router, pass its link component.`]}),`
`,(0,c.jsx)(t.h2,{id:`nextjs`,children:`Next.js`}),`
`,(0,c.jsxs)(t.p,{children:[`Modern Next.js link components render their own anchor and accept a `,(0,c.jsx)(t.code,{children:`className`}),` and children.
You can pass `,(0,c.jsx)(t.code,{children:`NextLink`}),` directly as the `,(0,c.jsx)(t.code,{children:`linkComponent`}),` and give the `,(0,c.jsx)(t.code,{children:`href`}),` to the design system component, which passes it through:`]}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { Link } from "@amsterdam/design-system-react"
import NextLink from "next/link"

<Link href="/amsterdam" linkComponent={NextLink}>
  Link label
</Link>
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`NextLink`}),` is a stable, module-level reference, so the link is not remounted on every render.
This replaces the deprecated `,(0,c.jsx)(t.code,{children:`legacyBehavior`}),` and `,(0,c.jsx)(t.code,{children:`passHref`}),` props, which are no longer needed.`]}),`
`,(0,c.jsx)(t.h2,{id:`react-router`,children:`React Router`}),`
`,(0,c.jsxs)(t.p,{children:[`For React Router, wrap `,(0,c.jsx)(t.a,{href:`https://reactrouter.com/en/main/hooks/use-link-click-handler`,rel:`nofollow`,children:`the useLinkClickHandler hook`}),` in a hook that returns a link component, like so:`]}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-jsx`,children:`import { Link } from "@amsterdam/design-system-react"
import { useCallback } from "react"
import { useHref, useLinkClickHandler } from "react-router-dom"

const useReactRouterLink = (to) => {
  const href = useHref(to)
  const handleClick = useLinkClickHandler(to)

  return useCallback(
    function ReactRouterLink({ onClick, ...props }) {
      return (
        <a
          {...props}
          href={href}
          onClick={(event) => {
            onClick?.(event)
            if (!event.defaultPrevented) handleClick(event)
          }}
        />
      )
    },
    [href, handleClick],
  )
}

const Example = () => {
  const linkComponent = useReactRouterLink("/amsterdam")

  return <Link linkComponent={linkComponent}>Link label</Link>
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`useCallback`}),` keeps the component reference stable across renders, so the link is not remounted.
Composing `,(0,c.jsx)(t.code,{children:`onClick`}),` preserves any handler passed to the design system component, and the `,(0,c.jsx)(t.code,{children:`defaultPrevented`}),` check lets that handler opt out of client-side navigation when needed.`]}),`
`,(0,c.jsx)(t.h2,{id:`good-to-know`,children:`Good to know`}),`
`,(0,c.jsxs)(t.p,{children:[`The design system components keep their own styling, class names, and structure, and only swap the underlying anchor for the component you provide.
Any anchor attributes like `,(0,c.jsx)(t.code,{children:`href`}),`, `,(0,c.jsx)(t.code,{children:`target`}),`, and `,(0,c.jsx)(t.code,{children:`data-*`}),` are passed straight through to your `,(0,c.jsx)(t.code,{children:`linkComponent`}),`.
So in most cases you can pass the routing library’s link component directly, without writing a wrapper.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Provide a `,(0,c.jsx)(t.em,{children:`stable`}),` `,(0,c.jsx)(t.code,{children:`linkComponent`}),`: one that is defined at module level, or one created with `,(0,c.jsx)(t.code,{children:`useCallback`}),`.
Defining it inline (for example `,(0,c.jsx)(t.code,{children:`linkComponent={(props) => <NextLink {...props} />}`}),`) would create a new component type on every render, which forces React to unmount and remount the link, losing focus and other state in the process.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Refs are forwarded only to a plain anchor – the default, or `,(0,c.jsx)(t.code,{children:`linkComponent="a"`}),` – not to any other `,(0,c.jsx)(t.code,{children:`linkComponent`}),`.
If you need a ref to a custom link component, set it on that component directly.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),r()}))();export{s as default};