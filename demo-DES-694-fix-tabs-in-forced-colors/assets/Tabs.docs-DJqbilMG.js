import{j as t}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as o}from"./index-BI1Biiay.js";import{ae as s,ak as i,al as r,an as h}from"./index-Cg1a0eYN.js";import{T as c,W as l}from"./Tabs.stories-B7PBPbAK.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CW1Ju9S5.js";import"../sb-preview/runtime.js";import"./index-BU4L-DQy.js";import"./index-D-8MO0q_.js";import"./index-nrpnv_Jx.js";import"./index-DrFu-skq.js";import"./index.esm-Dnkvjlml.js";import"./clsx-B-dksMZM.js";import"./index.esm-Bsc2owIZ.js";import"./exampleContent-hIIPvEhU.js";import"./useKeyboardFocus-CRUFsA_C.js";const p=`<!-- @license CC0-1.0 -->

# Tabs

Tabs are used to bundle related content in a compact overview within a page. Each tab has a short name, and these names indicate the relationship between the information displayed in each tab.

## How to use

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

- [W3C - Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [MDN - Tab Aria Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)
`;/*@license CC0-1.0*/function a(n){const e={code:"code",h2:"h2",h3:"h3",p:"p",...o(),...n.components};return t.jsxs(t.Fragment,{children:[`
`,`
`,t.jsx(s,{of:c}),`
`,t.jsx(i,{children:p}),`
`,t.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,t.jsx(e.h3,{id:"default",children:"Default"}),`
`,t.jsxs(e.p,{children:[`Each tab consists of a button and a panel.
A `,t.jsx(e.code,{children:"tab"})," prop with a corresponding value connects them."]}),`
`,t.jsx(r,{}),`
`,t.jsx(e.h3,{id:"with-initial-tab",children:"With Initial Tab"}),`
`,t.jsx(e.p,{children:`The first tab is active by default.
Another tab’s panel can be displayed initially as well.`}),`
`,t.jsx(h,{of:l})]})}function R(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(a,{...n})}):a(n)}export{R as default};
