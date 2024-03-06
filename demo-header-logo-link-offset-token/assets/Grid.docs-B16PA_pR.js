import{j as e}from"./jsx-runtime-CKrituN3.js";import{M as a,d as r,P as l,f as s}from"./index-BTfsgR0X.js";import{G as d,V as c,a as h,S as p,C as m,b as u,c as w,d as f}from"./Grid.stories-Cu3pG8gS.js";import{useMDXComponents as t}from"./index-DI5IigMn.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CFSn4qcv.js";import"../sb-preview/runtime.js";import"./index-BtM5VmRH.js";import"./index-Bw8VTzHM.js";import"./index-Cmc67Rxs.js";import"./index-DrFu-skq.js";import"./index.esm-CSvQH6Sq.js";const x=`<!-- @license CC0-1.0 -->

# Grid

Divides the screen into columns to align the elements of a page.

## Usage

Every page should use the grid as the foundation for its layout.
It is placed directly within the [Screen](/docs/components-layout-screen--docs).

A [Footer](/docs/components-containers-footer--docs) and a [Spotlight](/docs/components-containers-spotlight--docs) are slightly wider than the grid.
You close one instance of the grid before these components.
Inside and optionally after them, you start a new one.
Multiple instances of the grid component are possible on a page, but the columns of all grids must align precisely.

Within the grid, you create cells containing the desired content.
A cell often spans multiple columns of the grid.

## Design

The [design choices](/docs/docs-design-guidelines-grid--docs) are described in the design guidelines.
`;function i(o){const n=Object.assign({h2:"h2",p:"p",h3:"h3",code:"code",a:"a"},t(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(r,{children:x}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.p,{children:`The pink areas below represent the columns of the grid.
The spaces in between are white.`}),`
`,e.jsx(n.p,{children:`The grid has 12 columns on wide screens, so all 12 cells in this example are in a row.
On narrow screens, you will see three rows of four columns; on medium-wide screens, one row of eight and one of four.`}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h3,{id:"vertical-margin",children:"Vertical Margin"}),`
`,e.jsxs(n.p,{children:[`Unlike the horizontal margins between columns, the vertical ones above and below are adjustable.
The`,e.jsx(n.code,{children:"paddingVertical"}),", ",e.jsx(n.code,{children:"paddingTop"}),", and ",e.jsx(n.code,{children:"paddingBottom"}),` props add white space above and below the grid.
This is useful in a coloured area like `,e.jsx(n.a,{href:"/docs/components-containers-footer--docs",children:"Footer"})," or ",e.jsx(n.a,{href:"/docs/components-containers-spotlight--docs",children:"Spotlight"})," or between two consecutive grids."]}),`
`,e.jsxs(n.p,{children:["Specify a value of ",e.jsx(n.code,{children:"medium"}),` for vertical white space as wide as the horizontal.
Use `,e.jsx(n.code,{children:"small"})," for half of that width and ",e.jsx(n.code,{children:"large"})," for double."]}),`
`,e.jsx(n.p,{children:"These white spaces also shrink and grow with the window width."}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"vertical-white-space",children:"Vertical White Space"}),`
`,e.jsx(n.p,{children:"A grid automatically creates multiple rows if the next cell no longer fits on the current row."}),`
`,e.jsx(n.p,{children:`By default, there is as much white space between two rows as between two columns.
In some cases, more or less white space might be better.`}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"cells-spanning-columns",children:"Cells Spanning Columns"}),`
`,e.jsxs(n.p,{children:[`A cell defaults to spanning 1 column in the grid.
Use the `,e.jsx(n.code,{children:"span"})," prop to make a cell span more columns."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"different-widths",children:"Different Widths"}),`
`,e.jsxs(n.p,{children:[`You can make the number of columns a cell spans depend on the window width.
Use the `,e.jsx(n.code,{children:"span"})," prop with 3 values for narrow, medium, and wide windows."]}),`
`,e.jsxs(n.p,{children:["With ",e.jsx(n.code,{children:"span={{ narrow: 4, medium: 6, wide: 8 }}"}),", this cell is 4 out of 4 columns wide on narrow windows, 6 out of 8 on medium windows, and 8 out of 12 on wide windows."]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"full-width",children:"Full Width"}),`
`,e.jsxs(n.p,{children:["To make the cell full width – whether the grid has 4, 8, or 12 columns – use ",e.jsx(n.code,{children:'span="all"'}),"."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"start-position",children:"Start Position"}),`
`,e.jsxs(n.p,{children:[`Each cell automatically starts in the next available position in the grid.
You usually don’t need to specify a value of 1 explicitly.
You can adjust the starting position of a cell with the `,e.jsx(n.code,{children:"start"}),` prop.
This way, you can align cells in multiple rows or place a cell in the centre of a wide grid.
It can also skip a column for more white space between cells.`]}),`
`,e.jsxs(n.p,{children:[`The starting position of a cell may also depend on the window width.
Use the `,e.jsx(n.code,{children:"start"})," prop with 3 values, just like with ",e.jsx(n.code,{children:"span"}),"."]}),`
`,e.jsxs(n.p,{children:["An example with ",e.jsx(n.code,{children:"start={2}"}),":"]}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(n.h3,{id:"use-another-html-element",children:"Use Another HTML Element"}),`
`,e.jsxs(n.p,{children:["By default, a Grid Cell renders a ",e.jsx(n.code,{children:"<div>"}),`.
Use the `,e.jsx(n.code,{children:"as"})," prop to make your markup more semantic."]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsx(n.p,{children:`Ensure that the number of columns you assign to a cell matches the amount of columns in the grid for the respective window width.
The same applies to starting a cell in a later column.
If the total of both values is too large, the browser adds columns to the grid.
This is not allowed.`})]})}function D(o={}){const{wrapper:n}=Object.assign({},t(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(i,o)})):i(o)}export{D as default};
