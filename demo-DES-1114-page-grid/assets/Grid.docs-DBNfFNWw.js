import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-CxbY7dAs.js";import{M as a,h as r,P as l,i as d,j as o}from"./index-D3wxoJwg.js";import{G as c,V as h,a as p,S as m,b as u,c as w,d as x,I as g}from"./Grid.stories-CgF5M7fR.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B-Lybw1J.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Grid-D0HUEsWS.js";import"./clsx-B-dksMZM.js";import"./paddingClasses-C5gheHLv.js";const f=`<!-- @license CC0-1.0 -->

# Grid

Divides the screen into columns to align the elements of a page.

## Guidelines

- Every page uses the Grid component as the foundation for its layout.
  It is a direct child of [Screen](/docs/components-layout-screen--docs).
- The Grid provides 4, 8, or 12 columns, depending on the width of the window.
  Its children are \`Grid.Cell\` components that define how many columns of the Grid they span, and optionally at which grid line they start.
- The Cell component accepts values for the narrow, medium and wide variations of the Grid: 4, 8 and 12 columns.
  Configure these three values for every Cell.
- Multiple instances of a Grid are possible on a page.
  This allows interjecting e.g. a [Spotlight](/docs/components-containers-spotlight--docs), [Breakout](/docs/components-layout-breakout--docs) or full width [Image](/docs/components-media-image--docs) which ‘bleed out’ of the Grid.
- Grids must not be nested.
  The component is currently intended for the full width of the page only.
- The Gap utility classes must not be used on the Grid component.

## Design

The [design choices](/docs/brand-design-tokens-grid--docs) are described in the general documentation.
`;/*@license CC0-1.0*/function t(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(r,{children:f}),`
`,e.jsx(l,{}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.p,{children:`The grey strokes in the examples on this page indicate the columns of the grid.
The gaps between the columns are white – note that they can be wider than the columns.
Pink boxes represent cells on the grid.`}),`
`,e.jsx(n.h3,{id:"vertical-padding",children:"Vertical padding"}),`
`,e.jsxs(n.p,{children:["Add white space above and below the grid through the ",e.jsx(n.code,{children:"padding…"}),` props.
This is useful on a coloured background, like `,e.jsx(n.a,{href:"/docs/components-containers-page-footer--docs",children:"Page Footer"})," or ",e.jsx(n.a,{href:"/docs/components-containers-spotlight--docs",children:"Spotlight"}),`, or between two consecutive grids.
Specify a value of `,e.jsx(n.code,{children:"medium"}),` to get horizontal white space that is as wide as the vertical gap between columns.
This padding is responsive as well.`]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h3,{id:"vertical-gap",children:"Vertical gap"}),`
`,e.jsxs(n.p,{children:[`A grid automatically creates a new row if the next cell doesn’t fit the current one.
White space between rows is as wide as that between columns.
Use the `,e.jsx(n.code,{children:"verticalGap"})," prop to make it larger, smaller, or even remove it."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h3,{id:"span-columns",children:"Span columns"}),`
`,e.jsxs(n.p,{children:[`A cell defaults to spanning 1 column in the grid.
Use the `,e.jsx(n.code,{children:"span"})," prop to make a cell span more columns."]}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(n.h3,{id:"span-responsively",children:"Span responsively"}),`
`,e.jsxs(n.p,{children:[`You can make the number of columns a cell spans depend on the window width.
Use the `,e.jsx(n.code,{children:"span"}),` prop with 3 values for narrow, medium, and wide windows.
E.g. `,e.jsx(n.code,{children:"span={{ narrow: 4, medium: 6, wide: 8 }}"})," makes the cell span all 4 columns on narrow windows, 6 of the 8 on medium windows, and 8 of the 12 on wide windows."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(n.h3,{id:"span-all-columns",children:"Span all columns"}),`
`,e.jsxs(n.p,{children:["To stretch the cell to all columns of the grid – whether that are 4, 8, or 12 – use ",e.jsx(n.code,{children:'span="all"'}),"."]}),`
`,e.jsx(o,{of:w}),`
`,e.jsx(n.h3,{id:"start-position",children:"Start position"}),`
`,e.jsxs(n.p,{children:[`Each cell automatically starts in the next available position in the grid.
Adjust the starting position of a cell with the `,e.jsx(n.code,{children:"start"}),` prop.
This way, you can align cells in multiple rows or center a cell horizontally.
It can also skip a column for more white space between cells.`]}),`
`,e.jsxs(n.p,{children:[`The starting position of a cell may also depend on the window width.
Use the `,e.jsx(n.code,{children:"start"})," prop with 3 values, e.g. ",e.jsx(n.code,{children:"start={{ narrow: 2, medium: 4, wide: 6 }}"}),"."]}),`
`,e.jsx(o,{of:x}),`
`,e.jsx(n.h3,{id:"improve-semantics",children:"Improve semantics"}),`
`,e.jsxs(n.p,{children:["By default, both Grid and Grid Cell render a ",e.jsx(n.code,{children:"<div>"}),` element in HTML.
Use the `,e.jsx(n.code,{children:"as"})," prop on either to make your markup more semantic."]}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(n.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure that the number of columns you assign to a cell matches the amount of columns in the grid for the respective window width."}),`
`,e.jsx(n.li,{children:"The same applies to starting a cell in a later column."}),`
`,e.jsx(n.li,{children:`If the total of both values is too large, the browser adds columns to the grid.
This is not allowed.`}),`
`]})]})}function P(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{P as default};
