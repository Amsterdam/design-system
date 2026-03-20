import{j as e}from"./iframe-B3GK5obm.js";import{useMDXComponents as s}from"./index-DpMQmtg4.js";import{M as i,e as r,f as l,h as c,i as a}from"./blocks-D3a36zAy.js";import{a as h,W as d,b as m,P as u}from"./Tabs.stories-BvUH0Yju.js";import{D as p}from"./DesignTokensTable-BFHKXtYT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D3tDFDCD.js";import"./exampleContent-D2tKGi5u.js";import"./useKeyboardFocus-CO72QOjh.js";import"./BorderSample-a5pv3Ajn.js";import"./formatTokenValue-BYjgZrXg.js";import"./Code-CuHyeqqD.js";import"./ColorSample-D1pxl1oy.js";import"./SpaceSample-VtC5bPLt.js";import"./TypographySample-BlFaextW.js";const f=`<!-- @license CC0-1.0 -->

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
`,b={tabs:{gap:{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},list:{"box-shadow":{$type:"shadow",$value:{inset:!0,offsetX:{value:0,unit:"rem"},offsetY:"calc({ams.border.width.m} * -1)",blur:{value:0,unit:"rem"},spread:{value:0,unit:"rem"},color:"{ams.color.separator}"}}},button:{color:{$value:"{ams.color.interactive.default}",$type:"color"},cursor:{$value:"{ams.cursor.interactive}"},"font-family":{$value:"{ams.typography.font-family}",$type:"fontFamily"},"font-size":{$value:"{ams.typography.body-text.font-size}",$extensions:{"nl.amsterdam.type":"fontSize"}},"font-weight":{$value:"{ams.typography.body-text.font-weight}",$type:"fontWeight"},"line-height":{$value:"{ams.typography.body-text.line-height}",$extensions:{"nl.amsterdam.type":"lineHeight"}},"outline-offset":{$value:"calc({ams.focus.outline-offset} * -1)",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-block":{$value:"{ams.space.s}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},"padding-inline":{$value:"{ams.space.m}",$type:"dimension",$extensions:{"nl.amsterdam.subtype":"space"}},hover:{"box-shadow":{$type:"shadow",$value:{inset:!0,offsetX:{value:0,unit:"rem"},offsetY:"calc({ams.border.width.m} * -1)",blur:{value:0,unit:"rem"},spread:{value:0,unit:"rem"},color:"currentColor"}},color:{$value:"{ams.color.interactive.hover}",$type:"color"}},selected:{"box-shadow":{$type:"shadow",$value:{inset:!0,offsetX:{value:0,unit:"rem"},offsetY:"calc({ams.border.width.xl} * -1)",blur:{value:0,unit:"rem"},spread:{value:0,unit:"rem"},color:"currentColor"}},"font-weight":{$value:"{ams.typography.body-text.bold.font-weight}",$type:"fontWeight"}},disabled:{color:{$value:"{ams.color.interactive.disabled}",$type:"color"},cursor:{$value:"{ams.cursor.disabled}"}}}}},v={ams:b};function o(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,`
`,e.jsx(i,{of:h}),`
`,e.jsx(r,{children:f}),`
`,e.jsx(l,{}),`
`,e.jsx(c,{}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(t.h3,{id:"with-initial-tab",children:"With initial tab"}),`
`,e.jsx(t.p,{children:`The first tab is active by default.
Another tab’s panel can be displayed initially as well.`}),`
`,e.jsx(a,{of:d}),`
`,e.jsx(t.h3,{id:"with-wide-content",children:"With wide content"}),`
`,e.jsx(t.p,{children:"The Tab Buttons list and the content within the active Tab Panel will scroll horizontally when their width exceeds the available space."}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(t.h3,{id:"prevent-tabs-from-changing",children:"Prevent tabs from changing"}),`
`,e.jsxs(t.p,{children:["The Tab Button ",e.jsx(t.code,{children:"onChange"})," prop can be used with ",e.jsx(t.code,{children:"event.preventDefault"}),` to stop tabs from changing when clicked.
This is helpful to keep users from switching tabs until specific conditions are met.`]}),`
`,e.jsx(t.p,{children:"You can use this click handler for example:"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const handleClick = (event) => {
  // eslint-disable-next-line no-alert
  const confirmLeave = window.confirm("You have unsaved changes. Do you want to leave?");
  if (!confirmLeave) {
    event.preventDefault();
  }
};
`})}),`
`,e.jsx(a,{of:u}),`
`,e.jsx(t.h2,{id:"design-tokens",children:"Design tokens"}),`
`,e.jsx(p,{tokens:v})]})}function R(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{R as default};
