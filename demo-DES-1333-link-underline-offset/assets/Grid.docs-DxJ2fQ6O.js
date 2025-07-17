import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-CxbY7dAs.js";import{M as a,e as r,P as d,f as l,h as s}from"./index-BpQUrHza.js";import{G as c,V as h,a as p,S as m,b as u,c as x,d as g,I as w}from"./Grid.stories-B80Odnul.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-DebObWJ7.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";import"./common-DYX7ZGrz.js";import"./Grid-VHIB_U50.js";import"./clsx-B-dksMZM.js";import"./paddingClasses-BhwbQ8nP.js";const f=`<!-- @license CC0-1.0 -->

# Grid

Divides the screen into columns to align the elements of a page.

## Guidelines

- Every page uses the Grid component as the foundation for its layout.
  It is a direct child of the [Page](/docs/components-containers-page--docs) container.
- The Grid provides 4, 8, or 12 columns, depending on the width of the window.
- Its children are \`Grid.Cell\` components that define how many columns they span, and optionally where they start.
  Both its \`span\` and \`start\` properties accept a single value, or separate values for the narrow, medium and wide variations of the Grid.
- A single page can have several Grids.
  This allows mixing a Grid with a [Spotlight](/docs/components-containers-spotlight--docs), [Breakout](/docs/components-layout-breakout--docs) or full width [Image](/docs/components-media-image--docs) which ‘bleed out’ of the main layout.
- Grids must not be nested.
  The component is currently intended for the full width of the page only.
- The Gap utility classes must not be used on the Grid component.

## Design

The [design choices](/docs/brand-design-tokens-grid--docs) are described in the general documentation.
`;/*@license CC0-1.0*/function t(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(r,{children:f}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.p,{children:`The grey strokes in the examples on this page indicate the columns of the grid.
The gaps between the columns are white – note that they can be wider than the columns.
Pink boxes represent cells on the grid.`}),`
`,e.jsx(n.h3,{id:"vertical-padding",children:"Vertical padding"}),`
`,e.jsxs(n.p,{children:["Add white space above and below the grid through the ",e.jsx(n.code,{children:"padding…"}),` props.
Their options match the design tokens for `,e.jsx(n.a,{href:"/docs/brand-design-tokens-space--docs",children:"Space"}),`.
This is useful in a container with a coloured background, like `,e.jsx(n.a,{href:"/docs/components-containers-page-footer--docs",children:"Page Footer"})," or ",e.jsx(n.a,{href:"/docs/components-containers-spotlight--docs",children:"Spotlight"}),`, or between two consecutive grids.
Specify a value of `,e.jsx(n.code,{children:"x-large"}),` to get the same size as the vertical gap between columns.
Like the other features of the grid, this padding is responsive.`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"vertical-gap",children:"Vertical gap"}),`
`,e.jsxs(n.p,{children:[`A grid automatically creates a new row if the next cell doesn’t fit the current one.
White space between rows is as wide as that between columns, which is `,e.jsx(n.code,{children:"x-large"}),`.
Use the `,e.jsx(n.code,{children:"verticalGap"}),` prop to adjust to remove it.
Its options match the design tokens for `,e.jsx(n.a,{href:"/docs/brand-design-tokens-space--docs",children:"Space"}),"."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"span-columns",children:"Span columns"}),`
`,e.jsxs(n.p,{children:[`A cell defaults to spanning 1 column in the grid.
Use the `,e.jsx(n.code,{children:"span"})," prop to make a cell span more columns."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"span-responsively",children:"Span responsively"}),`
`,e.jsxs(n.p,{children:[`You can make the number of columns a cell spans depend on the window width.
Use the `,e.jsx(n.code,{children:"span"}),` prop with 3 values for narrow, medium, and wide windows.
E.g. `,e.jsx(n.code,{children:"span={{ narrow: 4, medium: 5, wide: 7 }}"})," makes the cell span all 4 columns on narrow windows, 5 of the 8 on medium windows, and 7 of the 12 on wide windows."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"span-all-columns",children:"Span all columns"}),`
`,e.jsxs(n.p,{children:["To stretch the cell to all columns of the grid – whether that are 4, 8, or 12 – use ",e.jsx(n.code,{children:'span="all"'}),"."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"start-position",children:"Start position"}),`
`,e.jsxs(n.p,{children:[`Each cell automatically starts in the next available position in the grid.
Adjust the starting position of a cell with the `,e.jsx(n.code,{children:"start"}),` prop.
This way, you can align cells in multiple rows or center a cell horizontally.
It can also skip a column for more white space between cells.`]}),`
`,e.jsxs(n.p,{children:[`The starting position of a cell may also depend on the window width.
Use the `,e.jsx(n.code,{children:"start"})," prop with 3 values, e.g. ",e.jsx(n.code,{children:"start={{ narrow: 2, medium: 4, wide: 6 }}"}),"."]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h3,{id:"improve-semantics",children:"Improve semantics"}),`
`,e.jsxs(n.p,{children:["By default, both Grid and Grid Cell render a ",e.jsx(n.code,{children:"<div>"}),` element in HTML.
Use the `,e.jsx(n.code,{children:"as"})," prop on either to make your markup more semantic."]}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(n.h2,{id:"caution",children:"Caution"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure that the number of columns you assign to a cell matches the amount of columns in the grid for the respective window width."}),`
`,e.jsx(n.li,{children:"The same applies to starting a cell in a later column."}),`
`,e.jsx(n.li,{children:`If the total of both values is too large, the browser adds columns to the grid.
This is not allowed.`}),`
`]})]})}function U(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{U as default};
