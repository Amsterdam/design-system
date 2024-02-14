import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{M as s,d as i,P as r,f as h}from"./index-LzEGn-TZ.js";import{T as c,a as b}from"./Tabs.stories-BCDCktnx.js";import{useMDXComponents as o}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-hJbA5VPS.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./index.esm-tz0i4R_N.js";import"./exampleContent-GJvLNqvD.js";const m=`# Tabs

Tabs are used to bundle related content in a compact overview within a page. Each tab has a short name, and these names indicate the relationship between the information displayed in each tab.

## How to Use

- The content of each tab is viewable independently, not in the context of one another.
- The content within each tab should have a similar structure.
- Use when there is limited visual space and content needs to be divided into sections.

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

- [W3C - Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [MDN - Tab Aria Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)
`;function a(e){const n=Object.assign({h2:"h2"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(s,{of:c}),`
`,t.jsx(i,{children:m}),`
`,t.jsx(r,{}),`
`,t.jsx(n.h2,{id:"tab",children:"Tab"}),`
`,t.jsx(h,{of:b})]})}function R(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(a,e)})):a(e)}export{R as default};
