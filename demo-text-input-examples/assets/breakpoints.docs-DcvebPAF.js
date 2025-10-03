import{j as e}from"./iframe-BNuRO1Ex.js";import{useMDXComponents as t}from"./index-CCS45RU-.js";import{M as i}from"./blocks-CGVdgP8P.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DTdIdc8Z.js";/*@license CC0-1.0*/function o(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{title:"Docs/Developer Guide/Breakpoints"}),`
`,e.jsx(n.h1,{id:"breakpoints",children:"Breakpoints"}),`
`,e.jsx(n.p,{children:"Components can change their layout at two viewport widths."}),`
`,e.jsx(n.h2,{id:"values",children:"Values"}),`
`,e.jsx(n.p,{children:`Variables for them are available in Sass.
Not as CSS custom properties, since those cannot be used in media queries.
They are defined in ‘rem’ units to respect changes that users may make to their default font size.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"$ams-breakpoint-medium: 37.5rem;"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"$ams-breakpoint-wide: 72.5rem;"})}),`
`]}),`
`,e.jsxs(n.p,{children:[`They compute to 600 and 1.160 pixels if the root font size is 16.
The values are based on steps of 280 pixels, starting with a base of 40 pixels.
So, 600 = 40 + 2 × 280 and 1160 = 40 + 4 × 280.
To complement, the `,e.jsx(n.a,{href:"/docs/components-containers-page--docs",children:"Page"})," container component sets a maximum width of 90rem, which is 1.140 pixels = 40 + 5 × 280."]}),`
`,e.jsx(n.h2,{id:"where-they-work",children:"Where they work"}),`
`,e.jsx(n.p,{children:`Our design system uses a mobile-first approach.
Components are styled for the smallest viewports and adapt fluidly to use more space if available.`}),`
`,e.jsxs(n.p,{children:["Most importantly, our ",e.jsx(n.a,{href:"/docs/components-layout-grid--docs",children:"Grid"}),` uses these breakpoints to change its number of columns from 4 to 8 and then to 12.
This already goes a long way to make our pages usable on all kinds of devices.
It keeps the widths of the columns within a range and allows positioning content below or next to each other.`]}),`
`,e.jsxs(n.p,{children:[`Some other components still use the breakpoints themselves to adapt their appearance further, like
`,e.jsx(n.a,{href:"/docs/components-text-description-list--docs",children:"Description List"}),`,
`,e.jsx(n.a,{href:"/docs/components-containers-dialog--docs",children:"Dialog"}),`,
`,e.jsx(n.a,{href:"/docs/components-navigation-menu--docs",children:"Menu"}),`, and
`,e.jsx(n.a,{href:"/docs/components-containers-page-header--docs",children:"Page Header"}),` and
`,e.jsx(n.a,{href:"/docs/components-containers-page-footer--docs",children:"Page Footer"}),"."]}),`
`,e.jsx(n.h2,{id:"how-to-use",children:"How to use"}),`
`,e.jsx(n.p,{children:"Reuse our breakpoints in your custom components, so that layout changes only occur on these two window widths."}),`
`,e.jsx(n.h3,{id:"with-sass",children:"With Sass"}),`
`,e.jsxs(n.p,{children:["Import the variables from ",e.jsx(n.a,{href:"https://github.com/Amsterdam/design-system/blob/main/packages/css/src/common/breakpoint.scss",rel:"nofollow",children:"src/common/breakpoint.scss"})," in the CSS package."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.class {
  /* General declarations and those for narrow viewports */

  @media screen and (min-width: $ams-breakpoint-medium) {
    /* Overrides for medium viewports */
  }

  @media screen and (min-width: $ams-breakpoint-wide) {
    /* Overrides for wide viewports */
  }
}
`})}),`
`,e.jsx(n.h3,{id:"without-sass",children:"Without Sass"}),`
`,e.jsx(n.p,{children:"You’ll have to copy the values into your codebase and update all instances if we change them."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.class {
  /* General declarations and those for narrow viewports */

  @media screen and (min-width: 37.5rem) {
    /* Overrides for medium viewports */
  }

  @media screen and (min-width: 72.5rem) {
    /* Overrides for wide viewports */
  }
}
`})})]})}function l(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{l as default};
