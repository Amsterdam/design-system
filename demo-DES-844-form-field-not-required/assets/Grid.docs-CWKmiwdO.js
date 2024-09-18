import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as t}from"./index-BI1Biiay.js";import{ae as r,ak as a,al as l,am as c,an as s}from"./index-BeQtKAvZ.js";import{G as d,V as h,a as p,S as m,C as u,b as w,c as f,I as x}from"./Grid.stories-CgRG9ZIs.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-1FpoKeZJ.js";import"../sb-preview/runtime.js";import"./index-Cf-03bMR.js";import"./index-D-8MO0q_.js";import"./index-BVoBHvaS.js";import"./index-DrFu-skq.js";import"./index.esm-cwx9GElr.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bsc2owIZ.js";const j=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function i(o){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(r,{of:d}),`
`,e.jsx(a,{children:j}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.p,{children:`The pink areas represent the columns of the grid.
The gaps between the columns are transparent.`}),`
`,e.jsx(n.p,{children:`The grid has 12 columns on wide screens, so all 12 cells in the example above are in a row.
On narrow screens, you will see three rows of four columns; on medium-wide screens, one row of eight and one of four.`}),`
`,e.jsx(n.h3,{id:"vertical-margin",children:"Vertical margin"}),`
`,e.jsxs(n.p,{children:[`Unlike the horizontal margins between columns, the vertical ones above and below are adjustable.
The`,e.jsx(n.code,{children:"paddingVertical"}),", ",e.jsx(n.code,{children:"paddingTop"}),", and ",e.jsx(n.code,{children:"paddingBottom"}),` props add white space above and below the grid.
This is useful in a coloured area like `,e.jsx(n.a,{href:"/docs/components-containers-footer--docs",children:"Footer"})," or ",e.jsx(n.a,{href:"/docs/components-containers-spotlight--docs",children:"Spotlight"})," or between two consecutive grids."]}),`
`,e.jsxs(n.p,{children:["Specify a value of ",e.jsx(n.code,{children:"medium"}),` for vertical white space as wide as the horizontal.
Use `,e.jsx(n.code,{children:"small"})," for half of that width and ",e.jsx(n.code,{children:"large"})," for double."]}),`
`,e.jsx(n.p,{children:"These white spaces also shrink and grow with the window width."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"vertical-white-space",children:"Vertical white space"}),`
`,e.jsx(n.p,{children:"A grid automatically creates multiple rows if the next cell no longer fits on the current row."}),`
`,e.jsx(n.p,{children:`By default, there is as much white space between two rows as between two columns.
In some cases, more or less white space might be better.`}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"cells-spanning-columns",children:"Cells spanning columns"}),`
`,e.jsxs(n.p,{children:[`A cell defaults to spanning 1 column in the grid.
Use the `,e.jsx(n.code,{children:"span"})," prop to make a cell span more columns."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"different-widths",children:"Different widths"}),`
`,e.jsxs(n.p,{children:[`You can make the number of columns a cell spans depend on the window width.
Use the `,e.jsx(n.code,{children:"span"})," prop with 3 values for narrow, medium, and wide windows."]}),`
`,e.jsxs(n.p,{children:["With ",e.jsx(n.code,{children:"span={{ narrow: 4, medium: 6, wide: 8 }}"}),", this cell is 4 out of 4 columns wide on narrow windows, 6 out of 8 on medium windows, and 8 out of 12 on wide windows."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"full-width",children:"Full width"}),`
`,e.jsxs(n.p,{children:["To make the cell full width – whether the grid has 4, 8, or 12 columns – use ",e.jsx(n.code,{children:'span="all"'}),"."]}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(n.h3,{id:"start-position",children:"Start position"}),`
`,e.jsxs(n.p,{children:[`Each cell automatically starts in the next available position in the grid.
You usually don’t need to specify a value of 1 explicitly.
You can adjust the starting position of a cell with the `,e.jsx(n.code,{children:"start"}),` prop.
This way, you can align cells in multiple rows or place a cell in the centre of a wide grid.
It can also skip a column for more white space between cells.`]}),`
`,e.jsxs(n.p,{children:[`The starting position of a cell may also depend on the window width.
Use the `,e.jsx(n.code,{children:"start"})," prop with 3 values, just like with ",e.jsx(n.code,{children:"span"}),"."]}),`
`,e.jsxs(n.p,{children:["An example with ",e.jsx(n.code,{children:"start={2}"}),":"]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"improve-semantics",children:"Improve semantics"}),`
`,e.jsxs(n.p,{children:["By default, a Grid Cell renders a ",e.jsx(n.code,{children:"<div>"}),` element in HTML.
Use the `,e.jsx(n.code,{children:"as"})," prop to make your markup more semantic."]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure that the number of columns you assign to a cell matches the amount of columns in the grid for the respective window width."}),`
`,e.jsx(n.li,{children:"The same applies to starting a cell in a later column."}),`
`,e.jsx(n.li,{children:`If the total of both values is too large, the browser adds columns to the grid.
This is not allowed.`}),`
`]})]})}function U(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{U as default};
