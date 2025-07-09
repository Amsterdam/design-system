import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{e as s,f as t,g as c,h as p,i as g,j as l,k as r}from"./index.esm-BXPVASbn.js";import{A as n,a as h}from"./App-DXryVNEQ.js";const u={title:"Components/Navigation/App Navigation",component:n,args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#",icon:s,label:"Dashboard"},1),e.jsx(n.Link,{href:"#",icon:t,label:"Projecten"},2),e.jsx(n.Link,{href:"#",icon:c,label:"Rapportages"},3),e.jsx(n.Link,{href:"#",icon:p,label:"Analyses"},4),e.jsx(n.Link,{href:"#",icon:g,label:"Instellingen"},5)]})},decorators:[d=>e.jsx(h,{children:e.jsx(d,{})})],parameters:{layout:"fullscreen",themes:{themeOverride:"Compact"},viewport:{defaultViewport:"desktop",themes:{themeOverride:"Compact"}}}},a={},i={args:{expanded:!0}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#",icon:s,label:"Dashboard"},1),e.jsx(n.Button,{icon:t,label:"Projecten",open:!0,children:e.jsxs(n.Menu,{children:[e.jsx(n.Link,{href:"#",icon:l,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#",icon:r,label:"Inspecties"},"2"),e.jsx(n.Link,{active:!0,href:"#",icon:l,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#",icon:r,label:"Inspecties"},"2")]})},2),e.jsx(n.Link,{href:"#",icon:c,label:"Rapportages"},3),e.jsx(n.Link,{href:"#",icon:p,label:"Analyses"},4),e.jsx(n.Link,{href:"#",icon:g,label:"Instellingen"},5)]}),expanded:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <AppNavigation.Link href="#" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
        <AppNavigation.Button icon={FolderFillIcon} key={2} label="Projecten" open>
          <AppNavigation.Menu>
            <AppNavigation.Link href="#" icon={BuildingsFillIcon} key="1" label="Objecten" />
            <AppNavigation.Link href="#" icon={MagnifyingGlassWithEyeFillIcon} key="2" label="Inspecties" />
            <AppNavigation.Link active href="#" icon={BuildingsFillIcon} key="1" label="Objecten" />
            <AppNavigation.Link href="#" icon={MagnifyingGlassWithEyeFillIcon} key="2" label="Inspecties" />
          </AppNavigation.Menu>
        </AppNavigation.Button>
        <AppNavigation.Link href="#" icon={DocumentsFillIcon} key={3} label="Rapportages" />
        <AppNavigation.Link href="#" icon={BarChartFillIcon} key={4} label="Analyses" />
        <AppNavigation.Link href="#" icon={CogwheelFillIcon} key={5} label="Instellingen" />
      </>,
    expanded: true
  }
}`,...o.parameters?.docs?.source}}};const b=["Default","Expanded","WithSubNavigation"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Expanded:i,WithSubNavigation:o,__namedExportsOrder:b,default:u},Symbol.toStringTag,{value:"Module"}));export{j as A};
