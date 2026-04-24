import{n as e}from"./chunk-jRWAZmH_.js";import{Bt as t}from"./iframe-C3ydlI2e.js";import{r as n}from"./react-BrZORa5B.js";import{c as r,f as i}from"./blocks-Bf9UI0G0.js";import{t as a}from"./mdx-react-shim-Cnvufh88.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(r,{title:`Docs/Developer Guide/Breakpoints`}),`
`,(0,c.jsx)(t.h1,{id:`breakpoints`,children:`Breakpoints`}),`
`,(0,c.jsx)(t.p,{children:`Components can change their layout at two viewport widths.`}),`
`,(0,c.jsx)(t.h2,{id:`values`,children:`Values`}),`
`,(0,c.jsx)(t.p,{children:`Variables for them are available in Sass.
Not as CSS custom properties, since those cannot be used in media queries.
They are defined in ‘rem’ units to respect changes that users may make to their default font size.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`$ams-breakpoint-medium: 37.5rem;`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`$ams-breakpoint-wide: 72.5rem;`})}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`They compute to 600 and 1.160 pixels if the root font size is 16.
The values are based on steps of 280 pixels, starting with a base of 40 pixels.
So, 600 = 40 + 2 × 280 and 1160 = 40 + 4 × 280.
To complement, the `,(0,c.jsx)(t.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),` container component sets a maximum width of 90rem, which is 1.440 pixels = 40 + 5 × 280.
For internal websites, this is 1.920 pixels.`]}),`
`,(0,c.jsx)(t.h2,{id:`where-they-work`,children:`Where they work`}),`
`,(0,c.jsx)(t.p,{children:`Our design system uses a mobile-first approach.
Components are styled for the smallest viewports and adapt fluidly to use more space if available.`}),`
`,(0,c.jsxs)(t.p,{children:[`Most importantly, our `,(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` uses these breakpoints to change its number of columns from 4 to 8 and then to 12.
This already goes a long way to make our pages usable on all kinds of devices.
It keeps the widths of the columns within a range and allows positioning content below or next to each other.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Some other components still use the breakpoints themselves to adapt their appearance further, like
`,(0,c.jsx)(t.a,{href:`/docs/components-text-description-list--docs`,children:`Description List`}),`,
`,(0,c.jsx)(t.a,{href:`/docs/components-containers-dialog--docs`,children:`Dialog`}),`,
`,(0,c.jsx)(t.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),`, and
`,(0,c.jsx)(t.a,{href:`/docs/components-containers-page-header--docs`,children:`Page Header`}),` and
`,(0,c.jsx)(t.a,{href:`/docs/components-containers-page-footer--docs`,children:`Page Footer`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`how-to-use`,children:`How to use`}),`
`,(0,c.jsx)(t.p,{children:`Reuse our breakpoints in your custom components, so that layout changes only occur on these two window widths.`}),`
`,(0,c.jsxs)(t.p,{children:[`We leave out the `,(0,c.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media#media_types`,rel:`nofollow`,children:`media type`}),` so that our media queries work for both screens and paged media.
This helps printed and PDF outputs look more like the web page.`]}),`
`,(0,c.jsx)(t.h3,{id:`with-sass`,children:`With Sass`}),`
`,(0,c.jsxs)(t.p,{children:[`Import the variables from `,(0,c.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system/blob/main/packages/css/src/common/breakpoint.scss`,rel:`nofollow`,children:`src/common/breakpoint.scss`}),` in the CSS package.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`.class {
  /* General declarations and those for narrow viewports */

  @media (min-width: $ams-breakpoint-medium) {
    /* Overrides for medium viewports */
  }

  @media (min-width: $ams-breakpoint-wide) {
    /* Overrides for wide viewports */
  }
}
`})}),`
`,(0,c.jsx)(t.h3,{id:`without-sass`,children:`Without Sass`}),`
`,(0,c.jsx)(t.p,{children:`You’ll have to copy the values into your codebase and update all instances if we change them.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`.class {
  /* General declarations and those for narrow viewports */

  @media (min-width: 37.5rem) {
    /* Overrides for medium viewports */
  }

  @media (min-width: 72.5rem) {
    /* Overrides for wide viewports */
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};