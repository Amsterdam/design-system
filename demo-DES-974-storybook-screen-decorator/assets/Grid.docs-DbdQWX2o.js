import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{useMDXComponents as i}from"./index-BSj771as.js";import{ae as a,aq as r,ar as l,as as c,at as s}from"./index-C9ne_B96.js";import{G as d,V as h,a as p,S as m,b as u,c as x,d as g,I as w}from"./Grid.stories-BVP2LLAU.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-pCahJwZA.js";import"../sb-preview/runtime.js";import"./index-DolzVqEf.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./paddingClasses-C5gheHLv.js";const j=`<!-- @license CC0-1.0 -->

# Grid

Divides the screen into columns to align the elements of a page.

## Guidelines

- Every page should use the grid as the foundation for its layout.
  It is placed directly within the [Screen](/docs/components-layout-screen--docs).
- A [Footer](/docs/components-containers-footer--docs) and a [Spotlight](/docs/components-containers-spotlight--docs) are slightly wider than the grid.
  You close one instance of the grid before these components.
  Inside and optionally after them, you start a new one.
  Multiple instances of the grid component are possible on a page, but the columns of all grids must align precisely.
- Within the grid, you create cells containing the desired content.
  A cell often spans multiple columns of the grid.
- The Gap utility classes must not be used on the Grid component.

## Design

The [design choices](/docs/brand-design-tokens-grid--docs) are described in the general documentation.
`;/*@license CC0-1.0*/function t(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:d}),`
`,e.jsx(r,{children:j}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.p,{children:`The grey strokes in the examples on this page indicate the columns of the grid.
The gaps between the columns are white – note that they can be wider than the columns.
Pink boxes represent cells on the grid.`}),`
`,e.jsx(n.h3,{id:"vertical-padding",children:"Vertical padding"}),`
`,e.jsxs(n.p,{children:["Add white space above and below the grid through the ",e.jsx(n.code,{children:"padding…"}),` props.
This is useful on a coloured background, like `,e.jsx(n.a,{href:"/docs/components-containers-footer--docs",children:"Footer"})," or ",e.jsx(n.a,{href:"/docs/components-containers-spotlight--docs",children:"Spotlight"}),`, or between two consecutive grids.
Specify a value of `,e.jsx(n.code,{children:"medium"}),` for vertical white space as wide as the horizontal.
Use `,e.jsx(n.code,{children:"small"})," for half that width and ",e.jsx(n.code,{children:"large"}),` for double.
This padding is responsive as well.`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"vertical-gap",children:"Vertical gap"}),`
`,e.jsxs(n.p,{children:[`A grid automatically creates a new row if the next cell doesn’t fit the current one.
White space between rows is as wide as that between columns.
Use the `,e.jsx(n.code,{children:"verticalGap"})," prop to make it larger, smaller, or even remove it."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"span-columns",children:"Span columns"}),`
`,e.jsxs(n.p,{children:[`A cell defaults to spanning 1 column in the grid.
Use the `,e.jsx(n.code,{children:"span"})," prop to make a cell span more columns."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"span-responsively",children:"Span responsively"}),`
`,e.jsxs(n.p,{children:[`You can make the number of columns a cell spans depend on the window width.
Use the `,e.jsx(n.code,{children:"span"}),` prop with 3 values for narrow, medium, and wide windows.
E.g. `,e.jsx(n.code,{children:"span={{ narrow: 4, medium: 6, wide: 8 }}"})," makes the cell span all 4 columns on narrow windows, 6 of the 8 on medium windows, and 8 of the 12 on wide windows."]}),`
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
`,e.jsxs(n.p,{children:["By default, a Grid Cell renders a ",e.jsx(n.code,{children:"<div>"}),` element in HTML.
Use the `,e.jsx(n.code,{children:"as"})," prop to make your markup more semantic."]}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(n.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure that the number of columns you assign to a cell matches the amount of columns in the grid for the respective window width."}),`
`,e.jsx(n.li,{children:"The same applies to starting a cell in a later column."}),`
`,e.jsx(n.li,{children:`If the total of both values is too large, the browser adds columns to the grid.
This is not allowed.`}),`
`]})]})}function U(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{U as default};
