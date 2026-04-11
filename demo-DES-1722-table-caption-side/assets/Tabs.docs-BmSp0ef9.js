import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-BrayXyei.js";import{r as n}from"./react-oCAR5XSR.js";import{c as r,f as i,i as a,l as o,n as s,s as c}from"./blocks-mzHrNg6j.js";import{n as l,t as u}from"./DesignTokensTable-CJgajNVN.js";import{t as d}from"./mdx-react-shim-9Tyt82po.js";import{PreventTabsFromChanging as f,WithInitialTab as p,WithWideContent as m,n as h,t as g}from"./Tabs.stories-CidMlhez.js";var _,v=e((()=>{_=`<!-- @license CC0-1.0 -->

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
`})),y,b,x=e((()=>{y={tabs:{gap:{$value:`{ams.space.m}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},list:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`calc({ams.border.width.m} * -1)`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`{ams.color.separator}`}}},button:{color:{$value:`{ams.color.interactive.default}`,$type:`color`},cursor:{$value:`{ams.cursor.interactive}`},"font-family":{$value:`{ams.typography.font-family}`,$type:`fontFamily`},"font-size":{$value:`{ams.typography.body-text.font-size}`,$extensions:{"nl.amsterdam.type":`fontSize`}},"font-weight":{$value:`{ams.typography.body-text.font-weight}`,$type:`fontWeight`},"line-height":{$value:`{ams.typography.body-text.line-height}`,$extensions:{"nl.amsterdam.type":`lineHeight`}},"outline-offset":{$value:`calc({ams.focus.outline-offset} * -1)`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-block":{$value:`{ams.space.s}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},"padding-inline":{$value:`{ams.space.m}`,$type:`dimension`,$extensions:{"nl.amsterdam.subtype":`space`}},hover:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`calc({ams.border.width.m} * -1)`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`currentColor`}},color:{$value:`{ams.color.interactive.hover}`,$type:`color`}},selected:{"box-shadow":{$type:`shadow`,$value:{inset:!0,offsetX:{value:0,unit:`rem`},offsetY:`calc({ams.border.width.xl} * -1)`,blur:{value:0,unit:`rem`},spread:{value:0,unit:`rem`},color:`currentColor`}},"font-weight":{$value:`{ams.typography.body-text.bold.font-weight}`,$type:`fontWeight`}},disabled:{color:{$value:`{ams.color.interactive.disabled}`,$type:`color`},cursor:{$value:`{ams.cursor.disabled}`}}}}},b={ams:y}}));function S(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...n(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[`
`,`
`,`
`,`
`,(0,w.jsx)(r,{of:g}),`
`,(0,w.jsx)(c,{children:_}),`
`,(0,w.jsx)(o,{}),`
`,(0,w.jsx)(a,{}),`
`,(0,w.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,w.jsx)(t.h3,{id:`with-initial-tab`,children:`With initial tab`}),`
`,(0,w.jsx)(t.p,{children:`The first tab is active by default.
Another tab’s panel can be displayed initially as well.`}),`
`,(0,w.jsx)(s,{of:p}),`
`,(0,w.jsx)(t.h3,{id:`with-wide-content`,children:`With wide content`}),`
`,(0,w.jsx)(t.p,{children:`The Tab Buttons list and the content within the active Tab Panel will scroll horizontally when their width exceeds the available space.`}),`
`,(0,w.jsx)(s,{of:m}),`
`,(0,w.jsx)(t.h3,{id:`prevent-tabs-from-changing`,children:`Prevent tabs from changing`}),`
`,(0,w.jsxs)(t.p,{children:[`The Tab Button `,(0,w.jsx)(t.code,{children:`onChange`}),` prop can be used with `,(0,w.jsx)(t.code,{children:`event.preventDefault`}),` to stop tabs from changing when clicked.
This is helpful to keep users from switching tabs until specific conditions are met.`]}),`
`,(0,w.jsx)(t.p,{children:`You can use this click handler for example:`}),`
`,(0,w.jsx)(t.pre,{children:(0,w.jsx)(t.code,{className:`language-jsx`,children:`const handleClick = (event) => {
  // eslint-disable-next-line no-alert
  const confirmLeave = window.confirm("You have unsaved changes. Do you want to leave?");
  if (!confirmLeave) {
    event.preventDefault();
  }
};
`})}),`
`,(0,w.jsx)(s,{of:f}),`
`,(0,w.jsx)(t.h2,{id:`design-tokens`,children:`Design tokens`}),`
`,(0,w.jsx)(u,{tokens:b})]})}function C(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;e((()=>{w=t(),d(),i(),h(),v(),x(),l()}))();export{C as default};