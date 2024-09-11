import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as s}from"./index-BI1Biiay.js";import{ae as a,ak as r,al as h,am as l,an as n}from"./index-D4uENuxf.js";import{S as c,B as m,D as p,a as d,G as x,M as u,O as g,P as j,Y as f,b as w,I as k}from"./Spotlight.stories-2ye7xP56.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CA03KuAh.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./exampleContent-Gq_MSqYX.js";import"./Spotlight-IssvtslZ.js";import"./clsx-B-dksMZM.js";import"./Screen-Bi3gjHLv.js";import"./Grid-oysH5Ptt.js";import"./Blockquote-BfzaxJPz.js";import"./Paragraph-BWS5kDPY.js";import"./AspectRatio-Cd0KgYDn.js";import"./Image-CVzrCme5.js";const b=`<!-- @license CC0-1.0 -->

# Spotlight

Emphasizes a section on a page through a distinctive background colour.

## Guidelines

- Refer to [this overview on Stijlweb](https://amsterdam.nl/stijlweb/basiselementen/kleuren/#PagCls_15671872) to determine whether you can use black or white text on the background colour of your choice.

## Relevant WCAG requirements

- [WCAG 1.4.3](https://www.w3.org/TR/WCAG21/#contrast-minimum): Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;

## References

- [Color and contrast accessibility](https://web.dev/articles/color-and-contrast-accessibility)
`;/*@license CC0-1.0*/function i(o){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",...s(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(a,{of:c}),`
`,e.jsx(r,{children:b}),`
`,e.jsx(h,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"blue",children:"Blue"}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h3,{id:"dark-blue",children:"Dark Blue"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(t.h3,{id:"dark-green",children:"Dark Green"}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(t.h3,{id:"green",children:"Green"}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(t.h3,{id:"magenta",children:"Magenta"}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(t.h3,{id:"orange",children:"Orange"}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(t.h3,{id:"purple",children:"Purple"}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(t.h3,{id:"yellow",children:"Yellow"}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(t.h3,{id:"stick-out-content",children:"Stick out content"}),`
`,e.jsx(t.p,{children:`Having an image stick out of a Spotlight adds playfulness to the design.
It also prevents a large empty area in the Spotlight.`}),`
`,e.jsx(t.p,{children:`This composition can be achieved with a Grid of two rows and two columns.
The Spotlight occupies the two bottom cells, but it is empty – the text is separated into the bottom left cell.
Additionally, the cell containing the Spotlight expands to cover the adjacent gaps and margins.
The image is placed in the two cells to the right.
The extent to which the image sticks out of the Spotlight depends on the aspect ratio of the image, the length of the text, and the width of the window.`}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:[`Note: the Spotlight isn’t very wide on this page.
And due to how Storybook works, the Grid in the example may incorrectly use 12 columns.
Both circumstances prevent the image from sticking out if the example text is long.
The `,e.jsx(t.a,{href:"?path=/story/components-containers-spotlight--stick-out",children:"separate page"})," for this example shows this composition better."]})}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(t.h3,{id:"improve-semantics",children:"Improve semantics"}),`
`,e.jsxs(t.p,{children:["By default, a Spotlight renders a ",e.jsx(t.code,{children:"<div>"}),` element in HTML.
Use the `,e.jsx(t.code,{children:"as"})," prop to make your markup more semantic."]}),`
`,e.jsx(n,{of:k})]})}function q(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{q as default};
