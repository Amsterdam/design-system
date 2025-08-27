import{j as e}from"./iframe-BOmxlOCJ.js";import{useMDXComponents as o}from"./index-CFM1kcc2.js";import{M as i,c as h,P as c,e as r,f as a}from"./blocks-BSrdrN-k.js";import{T as l,W as d,a as b,P as p}from"./Tabs.stories-RXdAgJy8.js";import"./index-xOyp-lFS.js";import"./exampleContent-B7cDFRSs.js";import"./useKeyboardFocus-BsBpr6qG.js";const f=`<!-- @license CC0-1.0 -->

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
`;/*@license CC0-1.0*/function s(t){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{of:l}),`
`,e.jsx(h,{children:f}),`
`,e.jsx(c,{}),`
`,e.jsx(r,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"with-initial-tab",children:"With initial tab"}),`
`,e.jsx(n.p,{children:`The first tab is active by default.
Another tab’s panel can be displayed initially as well.`}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(n.h3,{id:"with-wide-content",children:"With wide content"}),`
`,e.jsx(n.p,{children:"The Tab Buttons list and the content within the active Tab Panel will scroll horizontally when their width exceeds the available space."}),`
`,e.jsx(a,{of:b}),`
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
`,e.jsx(a,{of:p})]})}function T(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{T as default};
