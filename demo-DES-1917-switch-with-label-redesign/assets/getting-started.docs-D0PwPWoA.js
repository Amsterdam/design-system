import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{h as t,u as n}from"./blocks-msKSRvUz.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{i,r as a}from"./react-Dyi61YEg.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(n,{title:`Docs/Guidelines/Getting started`}),`
`,(0,c.jsx)(t.h1,{id:`getting-started`,children:`Getting started`}),`
`,(0,c.jsx)(t.p,{children:`The design system ships as five npm packages, so you install the ones you need and import their stylesheets alongside the components.
Two things in your document – a class name on the body and a viewport meta tag – make those components behave as designed.`}),`
`,(0,c.jsx)(t.h2,{id:`installing`,children:`Installing`}),`
`,(0,c.jsx)(t.p,{children:`Get the packages you need from npm.
These are all 5 of them:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`npm install @amsterdam/design-system-assets @amsterdam/design-system-css @amsterdam/design-system-react @amsterdam/design-system-react-icons @amsterdam/design-system-tokens
`})}),`
`,(0,c.jsx)(t.p,{children:`Import the components and stylesheets you need, for example:`}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { Paragraph } from "@amsterdam/design-system-react"

import "@amsterdam/design-system-assets/font/index.css"
import "@amsterdam/design-system-css/dist/index.css"
import "@amsterdam/design-system-tokens/dist/index.css"

function App() {
  return <Paragraph>Hello, world!</Paragraph>
}

export default App
`})}),`
`,(0,c.jsx)(t.h2,{id:`setting-up-the-document`,children:`Setting up the document`}),`
`,(0,c.jsxs)(t.p,{children:[`Add the `,(0,c.jsx)(t.code,{children:`ams-body`}),` `,(0,c.jsx)(t.a,{href:`/docs/utilities-css-body--docs`,children:`class name`}),` to your document’s `,(0,c.jsx)(t.code,{children:`<body>`}),` tag.
This removes white space that the browser might add.
In Compact Mode, it also sets the background color to match the Page component seamlessly.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Declare the viewport in your document’s `,(0,c.jsx)(t.code,{children:`<head>`}),`.`]}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-html`,children:`<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`width=device-width, initial-scale=1`}),` makes the layout follow the width of the device.
`,(0,c.jsx)(t.code,{children:`viewport-fit=cover`}),` lets the page use the whole screen on a device with a display cutout, such as a notch or a camera housing.
Without it, browsers reserve the area around the cutout, which leaves inert bands beside the page in landscape.`]}),`
`,(0,c.jsxs)(t.p,{children:[`With it, `,(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),`, `,(0,c.jsx)(t.a,{href:`/docs/components-containers-page-header--docs`,children:`Page Header`}),`, `,(0,c.jsx)(t.a,{href:`/docs/components-containers-page-footer--docs`,children:`Page Footer`}),` and `,(0,c.jsx)(t.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),` hold their content clear of a cutout at the sides of the screen, and Page Footer also clears the home indicator along the bottom.
They use whichever is larger: the space they already use, or the inset the device reports.
A device without a cutout reports no inset, so nothing about your layout changes there.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Nothing reserves space at the top yet.
A browser reports no inset there, because its own toolbar already occupies that space, but a web app that sets `,(0,c.jsx)(t.code,{children:`display: standalone`}),` in its `,(0,c.jsx)(t.a,{href:`/docs/docs-guidelines-web-app--docs`,children:`web manifest`}),` does.
Such an app has to hold its own header clear of the cutout until the design system does.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Don’t add `,(0,c.jsx)(t.code,{children:`maximum-scale`}),` or `,(0,c.jsx)(t.code,{children:`user-scalable=no`}),` to the viewport.
Both stop people from zooming in, which fails `,(0,c.jsx)(t.a,{href:`https://www.w3.org/TR/WCAG22/#resize-text`,rel:`nofollow`,children:`WCAG 1.4.4`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`reset-styles`,children:`Reset styles`}),`
`,(0,c.jsx)(t.p,{children:`We don’t have a separate, global reset stylesheet.
This follows from our component-based architecture: every component overwrites user agent styles on the elements they render.
You shouldn’t need a reset stylesheet.`}),`
`,(0,c.jsx)(t.h2,{id:`compact-mode`,children:`Compact Mode`}),`
`,(0,c.jsxs)(t.p,{children:[`If you use `,(0,c.jsx)(t.a,{href:`/docs/docs-guidelines-modes--docs#density`,children:`Compact Mode`}),`,
import the stylesheets in this order – the compact tokens override the spacious ones.`]}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`import "@amsterdam/design-system-tokens/dist/index.css"
import "@amsterdam/design-system-tokens/dist/compact.css"
`})}),`
`,(0,c.jsx)(t.h2,{id:`lo-fi-mode`,children:`Lo-fi Mode`}),`
`,(0,c.jsxs)(t.p,{children:[`If you use `,(0,c.jsx)(t.a,{href:`/docs/docs-guidelines-modes--docs#fidelity`,children:`Lo-fi Mode`}),`,
import its token overrides after the main stylesheet as well, together with its font.`]}),`
`,`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`import "@amsterdam/design-system-tokens/dist/index.css"
import "@amsterdam/design-system-tokens/dist/lo-fi.css"
import "@amsterdam/design-system-assets/font/lo-fi/index.css"
`})}),`
`,(0,c.jsx)(t.h2,{id:`contributing`,children:`Contributing`}),`
`,(0,c.jsxs)(t.p,{children:[`You’re welcome to contribute to this project.
Check our `,(0,c.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system/blob/develop/CONTRIBUTING.md`,rel:`nofollow`,children:`Contributing guidelines`}),` when you start.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};