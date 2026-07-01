import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-BCDDjCIb.js";import{b as n,d as r,g as i}from"./iframe-d91q8Bqg.js";import{t as a}from"./mdx-react-shim-B0BCGjQ9.js";function o(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[`
`,`
`,(0,c.jsx)(r,{title:`Docs/Developer Guide/Responsive design`}),`
`,(0,c.jsx)(t.h1,{id:`responsive-design`,children:`Responsive design`}),`
`,(0,c.jsx)(t.p,{children:`Components can adapt their layout or appearance to the available space.`}),`
`,(0,c.jsx)(t.p,{children:`We use two techniques for this:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`A media query applies styles when the browser window (the viewport) reaches a certain width; these widths are called breakpoints.`}),`
`,(0,c.jsx)(t.li,{children:`A container query does the same, but measures the width of a parent element instead of the window.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`adapt-to-the-width-of-the-window`,children:`Adapt to the width of the window`}),`
`,(0,c.jsx)(t.p,{children:`Components can change their layout at two viewport widths.`}),`
`,(0,c.jsx)(t.h3,{id:`our-two-breakpoints`,children:`Our two breakpoints`}),`
`,(0,c.jsx)(t.p,{children:`Variables for these breakpoints are available in Sass.
Not as CSS custom properties, since those cannot be used in media queries.
They are defined in ‘rem’ units to respect changes that users may make to their default font size.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`$ams-breakpoint-medium: 37.5rem;`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.code,{children:`$ams-breakpoint-wide: 72.5rem;`})}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`They compute to 600 and 1160 pixels if the root font size is 16.
The values are based on steps of 280 pixels, starting with a base of 40 pixels.
So, 600 = 40 + 2 × 280 and 1160 = 40 + 4 × 280.`}),`
`,(0,c.jsxs)(t.p,{children:[`To complement these, the `,(0,c.jsx)(t.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),` container component sets a maximum width of `,(0,c.jsx)(t.code,{children:`90rem`}),`, which is 1440 pixels = 40 + 5 × 280.
For internal websites, this is `,(0,c.jsx)(t.code,{children:`120rem`}),` or 1920 pixels.`]}),`
`,(0,c.jsx)(t.h3,{id:`usage-across-the-design-system`,children:`Usage across the design system`}),`
`,(0,c.jsx)(t.p,{children:`Our design system uses a mobile-first approach.
Components are styled for the smallest viewports and adapt fluidly to use more space if available.`}),`
`,(0,c.jsxs)(t.p,{children:[`Most importantly, our `,(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid`}),` uses these breakpoints to change its number of columns from 4 to 8 and then to 12.
This already goes a long way to make our pages usable on all kinds of devices.
It keeps the widths of the columns within a range and allows positioning content below or next to each other.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Some other components still use the breakpoints themselves to adapt their appearance further, like
`,(0,c.jsx)(t.a,{href:`/docs/components-layout-breakout--docs`,children:`Breakout`}),`,
`,(0,c.jsx)(t.a,{href:`/docs/components-containers-dialog--docs`,children:`Dialog`}),`,
`,(0,c.jsx)(t.a,{href:`/docs/components-media-image-slider--docs`,children:`Image Slider`}),`,
`,(0,c.jsx)(t.a,{href:`/docs/components-navigation-menu--docs`,children:`Menu`}),`,
`,(0,c.jsx)(t.a,{href:`/docs/components-containers-page-header--docs`,children:`Page Header`}),` and
`,(0,c.jsx)(t.a,{href:`/docs/components-containers-page-footer--docs`,children:`Page Footer`}),`,
`,(0,c.jsx)(t.a,{href:`/docs/components-containers-progress-list--docs`,children:`Progress List`}),`, and
`,(0,c.jsx)(t.a,{href:`/docs/components-navigation-tab-navigation--docs`,children:`Tab Navigation`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`use-them-in-your-own-components`,children:`Use them in your own components`}),`
`,(0,c.jsx)(t.p,{children:`Reuse our breakpoints in your custom components, so that layout changes only occur on these two window widths.`}),`
`,(0,c.jsxs)(t.p,{children:[`We leave out the `,(0,c.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media#media_types`,rel:`nofollow`,children:`media type`}),` so that our media queries work for both screens and paged media.
This helps printed and PDF outputs look more like the web page.`]}),`
`,(0,c.jsx)(t.h4,{id:`with-sass`,children:`With Sass`}),`
`,(0,c.jsxs)(t.p,{children:[`Import the variables from `,(0,c.jsx)(t.a,{href:`https://github.com/Amsterdam/design-system/blob/main/packages/css/src/common/breakpoint.scss`,rel:`nofollow`,children:`src/common/breakpoint.scss`}),` in the CSS package.
Use `,(0,c.jsx)(t.code,{children:`min-width`}),` for the media query.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`.my-component {
  /* General declarations and those for narrow viewports */

  @media (min-width: $ams-breakpoint-medium) {
    /* Overrides for medium viewports */
  }

  @media (min-width: $ams-breakpoint-wide) {
    /* Overrides for wide viewports */
  }
}
`})}),`
`,(0,c.jsx)(t.h4,{id:`without-sass`,children:`Without Sass`}),`
`,(0,c.jsx)(t.p,{children:`You’ll have to copy the values into your codebase and update all instances if we change them.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`.my-component {
  /* General declarations and those for narrow viewports */

  @media (min-width: 37.5rem) {
    /* Overrides for medium viewports */
  }

  @media (min-width: 72.5rem) {
    /* Overrides for wide viewports */
  }
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`adapt-to-the-width-of-a-container`,children:`Adapt to the width of a container`}),`
`,(0,c.jsx)(t.p,{children:`Container queries let a component adapt to the width of its container rather than the viewport.
This is useful when a component is placed in different layout contexts – for example, inside a narrow dialog versus a wide page column.`}),`
`,(0,c.jsx)(t.h3,{id:`the-utility-class`,children:`The utility class`}),`
`,(0,c.jsxs)(t.p,{children:[`We provide a utility class to establish an `,(0,c.jsx)(t.a,{href:`/docs/utilities-css-query-container--docs`,children:`inline-size query container`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`.ams-query-container-inline-size
`})}),`
`,(0,c.jsx)(t.p,{children:`Apply it to any element to register it as a named container that descendant components can query.`}),`
`,(0,c.jsx)(t.h3,{id:`usage-across-the-design-system-1`,children:`Usage across the design system`}),`
`,(0,c.jsx)(t.p,{children:`Several of our core container components already establish an inline-size query container:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-page--docs`,children:`Page`}),` – so content inside can respond to the page’s available width independently of the viewport.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/components-containers-dialog--docs`,children:`Dialog`}),` – so components inside the dialog can adapt to its width, which varies from the viewport.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:`/docs/components-layout-grid--docs`,children:`Grid Cell`}),` – so content inside a cell can respond to its column width rather than the full grid width.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`All three share the same container name (`,(0,c.jsx)(t.code,{children:`ams-query-container-inline-size`}),`), so a single `,(0,c.jsx)(t.code,{children:`@container`}),` rule applies consistently no matter which of them is the nearest ancestor.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Components that live inside a query container can adapt their own layout too.
`,(0,c.jsx)(t.a,{href:`/docs/components-text-description-list--docs`,children:`Description List`}),` switches between a stacked and a side-by-side layout based on the width of its container.`]}),`
`,(0,c.jsx)(t.h3,{id:`use-it-in-your-own-components`,children:`Use it in your own components`}),`
`,(0,c.jsxs)(t.p,{children:[`Write `,(0,c.jsx)(t.code,{children:`@container`}),` rules in your CSS to style elements based on their container’s inline size.
Choose the width that best fits the component – container queries don’t need to use our two breakpoint values.
Use `,(0,c.jsx)(t.code,{children:`min-inline-size`}),` and the range syntax for the media query.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`.my-component {
  /* Styles for narrow containers */

  @container ams-query-container-inline-size (inline-size >= 32rem) {
    /* Overrides for wider containers */
  }
}
`})}),`
`,(0,c.jsx)(t.p,{children:`If your component can appear both inside and outside one of these named containers, omit the container name to query the nearest ancestor of any kind.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`.my-component {
  @container (inline-size >= 37.5rem) {
    /* Styles when any ancestor container is at least 600px wide */
  }
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),i()}))();export{s as default};