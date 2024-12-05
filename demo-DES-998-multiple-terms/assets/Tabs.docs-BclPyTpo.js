import{j as t}from"./jsx-runtime-j_jdvEMj.js";import{useMDXComponents as o}from"./index-BSj771as.js";import{ae as s,aq as i,ar as r,at as h}from"./index-VJpAeK4P.js";import{T as c,W as l}from"./Tabs.stories-CVaGcQHM.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-NBfZUwQQ.js";import"../sb-preview/runtime.js";import"./index-DolzVqEf.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./index.esm-BGuGr81K.js";import"./clsx-B-dksMZM.js";import"./index.esm-DE9QoVc-.js";import"./exampleContent-hIIPvEhU.js";import"./useKeyboardFocus-CRUFsA_C.js";const p=`<!-- @license CC0-1.0 -->

# Tabs

Tabs are used to bundle related content in a compact overview within a page. Each tab has a short name, and these names indicate the relationship between the information displayed in each tab.

## Guidelines

- The content of each tab is viewable independently, not in the context of one another.
- The content within each tab should have a similar structure.
- Use when there is limited visual space and content needs to be divided into sections.
- Each tab consists of a button and a panel.
  A \`tab\` prop with a corresponding value connects them.

You can navigate tabs with your keyboard:

| key            | element                                        |
| :------------- | :--------------------------------------------- |
| Enter or Space | Open or close the tab that has the focus       |
| Tab            | Go to the next element that can have focus     |
| Shift + Tab    | Go to the next element that can have focus     |
| Left arrow     | If the tabs have focus: go to the previous tab |
| Right arrow    | If the tabs have focus: go to the next tab     |
| Home           | If the tabs have focus: go to the first tab    |
| End            | If the tabs have focus, go to the last tab     |

### Caution

Do not use tabs if the content in each tab functions just as well on separate pages.

## References

- [W3C - Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [MDN - Tab Aria Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)
`;/*@license CC0-1.0*/function a(e){const n={h2:"h2",h3:"h3",p:"p",...o(),...e.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,t.jsx(s,{of:c}),`
`,t.jsx(i,{children:p}),`
`,t.jsx(r,{}),`
`,t.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(n.h3,{id:"with-initial-tab",children:"With initial tab"}),`
`,t.jsx(n.p,{children:`The first tab is active by default.
Another tab’s panel can be displayed initially as well.`}),`
`,t.jsx(h,{of:l})]})}function R(e={}){const{wrapper:n}={...o(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(a,{...e})}):a(e)}export{R as default};
