import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-CxbY7dAs.js";import{M as s,e as h,P as r,f as c,h as a}from"./index-bIJLQtFh.js";import{T as l,W as d,a as p,P as b}from"./Tabs.stories-CumXw-MX.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-BdS_F1i8.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";import"./index.esm-r0Mi5W58.js";import"./clsx-B-dksMZM.js";import"./index.esm-CVKOIKGq.js";import"./exampleContent-r-zRGsZY.js";import"./useKeyboardFocus-BsBpr6qG.js";const m=`<!-- @license CC0-1.0 -->

# Tabs

Tabs are used to bundle related content in a compact overview within a page. Each tab has a short name, and these names indicate the relationship between the information displayed in each tab.

## Guidelines

- The content of each tab is viewable independently, not in the context of one another.
- The content within each tab should have a similar structure.
- Use when there is limited visual space and content needs to be divided into sections.
- Each tab consists of a button and a panel.
  The button has an \`aria-controls\` attribute that matches the \`id\` of the associated panel.

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
`;/*@license CC0-1.0*/function o(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...i(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{of:l}),`
`,e.jsx(h,{children:m}),`
`,e.jsx(r,{}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-initial-tab",children:"With initial tab"}),`
`,e.jsx(n.p,{children:`The first tab is active by default.
Another tab’s panel can be displayed initially as well.`}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(n.h3,{id:"with-wide-content",children:"With wide content"}),`
`,e.jsx(n.p,{children:"The Tab Buttons list and the content within the active Tab Panel will scroll horizontally when their width exceeds the available space."}),`
`,e.jsx(a,{of:p}),`
`,e.jsx(n.h3,{id:"prevent-tabs-from-changing",children:"Prevent tabs from changing"}),`
`,e.jsxs(n.p,{children:["The Tab Button ",e.jsx(n.code,{children:"onChange"})," prop can be used with ",e.jsx(n.code,{children:"event.preventDefault"}),` to stop tabs from changing when clicked.
This is helpful to keep users from switching tabs until specific conditions are met.`]}),`
`,e.jsx(n.p,{children:"You can use this click handler for example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const handleClick = (event) => {
  // eslint-disable-next-line no-alert
  const confirmLeave = window.confirm("You have unsaved changes. Do you want to leave?");
  if (!confirmLeave) {
    event.preventDefault();
  }
};
`})}),`
`,e.jsx(a,{of:b})]})}function R(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{R as default};
