import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as o}from"./index-1Ha5aU2j.js";import{M as s,e as i,P as r,h}from"./index-CF0FeXOA.js";import{T as c,W as l}from"./Tabs.stories-xC6_oCGp.js";import"./index-yBjzXJbu.js";import"./index-C0MU9AHG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-D9dd94Ic.js";import"./index-IE9ObSwG.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./index.esm-DnZEN8Ye.js";import"./clsx-B-dksMZM.js";import"./index.esm-DvoLfDtE.js";import"./exampleContent-fW-Djhm4.js";import"./useKeyboardFocus-nadMEUdd.js";const p=`<!-- @license CC0-1.0 -->

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
