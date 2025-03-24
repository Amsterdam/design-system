import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-CxbY7dAs.js";import{M as s,h,P as r,i as c,j as a}from"./index-BRfIpl-h.js";import{T as l,W as p,a as d}from"./Tabs.stories-Cl6GD2wO.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CUmWprPw.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-7Wth_iok.js";import"./clsx-B-dksMZM.js";import"./index.esm-DvoLfDtE.js";import"./exampleContent-PGFPgakh.js";import"./useKeyboardFocus-nadMEUdd.js";const b=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function o(n){const e={h2:"h2",h3:"h3",p:"p",...i(),...n.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,t.jsx(s,{of:l}),`
`,t.jsx(h,{children:b}),`
`,t.jsx(r,{}),`
`,t.jsx(c,{}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(e.h3,{id:"with-initial-tab",children:"With initial tab"}),`
`,t.jsx(e.p,{children:`The first tab is active by default.
Another tab’s panel can be displayed initially as well.`}),`
`,t.jsx(a,{of:p}),`
`,t.jsx(e.h3,{id:"with-wide-content",children:"With wide content"}),`
`,t.jsx(e.p,{children:"The Tab Buttons list and the content within the active Tab Panel will scroll horizontally when their width exceeds the available space."}),`
`,t.jsx(a,{of:d})]})}function R(n={}){const{wrapper:e}={...i(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{R as default};
