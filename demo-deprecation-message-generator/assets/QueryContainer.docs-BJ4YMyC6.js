import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-BqsN2jGA.js";import{E as n,c as r,l as i,m as a,u as o}from"./blocks-DkkOzZX7.js";import{t as s}from"./mdx-react-shim-Da_GZRDL.js";import{n as c,t as l}from"./QueryContainer.stories-BOWFPOVP.js";var u,d=e((()=>{u=`<!-- @license CC0-1.0 -->

# Query Container

Allows elements to adjust their appearance to the size or state of a containing element.

Container queries in CSS are an alternative to media queries.
They work with a designated ancestor instead of the viewport.
This is the ‘container that can be queried’.
Elements can change their appearance based on a characteristic of that container.

## Class names

One option is currently available:

- \`ams-query-container-inline-size\` lets elements query the width of the container.

## Guidelines

### Inline size

- Generally, you won’t need this class.
  [Grid Cell](/docs/components-layout-grid--docs), [Dialog](/docs/components-containers-dialog--docs) and [Page](/docs/components-containers-page--docs) are default query containers for inline size.
  Since they all share the same container name, container queries refer to the closest of these ancestors.
  In practice, almost all elements sit in at least one of these containers.
- However, if an element lacks any of them, the conditional styles will not activate.
  To allow the container query to trigger, add this utility class to a suitable ancestor:

\`\`\`html
<div class="ams-query-container-inline-size">
  <div class="my-component">…</div>
</div>
\`\`\`

\`\`\`css
.my-component {
  /* Base styles that apply at any width. */

  @container ams-query-container-inline-size (min-inline-size: 40rem) {
    /* Styles to apply if the container is 40rem wide or more. */
  }
}
\`\`\`
`}));function f(e){let t={a:`a`,h2:`h2`,li:`li`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[`
`,`
`,`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(r,{children:u}),`
`,(0,m.jsx)(o,{}),`
`,(0,m.jsx)(t.h2,{id:`see-also`,children:`See also`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries`,rel:`nofollow`,children:`CSS container queries`}),` – Learn more about how to use container queries in CSS.`]}),`
`]})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),s(),a(),d(),c()}))();export{p as default};