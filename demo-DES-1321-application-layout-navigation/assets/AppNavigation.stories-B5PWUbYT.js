import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{e as l,f as t,g as c,h as p,i as h,j as u,k as d,l as g,m as k,n as b,o as v,p as m}from"./index.esm-BuHuBT3Q.js";import{A as n,a as A}from"./App-CetBVkgE.js";const x={title:"Components/Navigation/App Navigation",component:n,args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#",icon:l,label:"Dashboard"},1),e.jsx(n.Link,{href:"#",icon:t,label:"Subsidies"},2),e.jsx(n.Link,{href:"#",icon:c,label:"Rapportages"},3),e.jsx(n.Link,{href:"#",icon:p,label:"Analyses"},4),e.jsx(n.Link,{href:"#",icon:h,label:"Instellingen"},5)]})},decorators:[f=>e.jsx(A,{children:e.jsx(f,{})})],parameters:{layout:"fullscreen",themes:{themeOverride:"Compact"},viewport:{defaultViewport:"desktop",themes:{themeOverride:"Compact"}}}},i={},a={args:{expanded:!0}},o={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#",icon:l,label:"Dashboard"},1),e.jsx(n.Button,{"aria-controls":"subsidies-menu",icon:t,label:"Subsidies",children:e.jsxs(n.Menu,{id:"subsidies-menu",children:[e.jsx(n.Link,{href:"#",icon:u,label:"Initiatieven"},"1"),e.jsx(n.Link,{href:"#",icon:d,label:"Initiatiefnemers"},"2"),e.jsx(n.Link,{href:"#",icon:g,label:"Dossiers"},"3"),e.jsx(n.Link,{href:"#",icon:k,label:"Hulp"},"4"),e.jsx(n.Link,{href:"#",icon:b,label:"Beheer"},"5")]})},2),e.jsx(n.Button,{"aria-controls":"reports-menu",icon:c,label:"Rapportages",children:e.jsxs(n.Menu,{id:"reports-menu",children:[e.jsx(n.Link,{href:"#",icon:v,label:"Inspecties"},"1"),e.jsx(n.Link,{href:"#",icon:m,label:"Nader onderzoek"},"2")]})},3),e.jsx(n.Link,{href:"#",icon:p,label:"Analyses"},4),e.jsx(n.Link,{href:"#",icon:h,label:"Instellingen"},5)]}),expanded:!0}},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#",icon:l,label:"Dashboard"},1),e.jsx(n.Link,{active:!0,href:"#",icon:t,label:"Subsidies"},2),e.jsx(n.Link,{href:"#",icon:c,label:"Rapportages"},3),e.jsx(n.Link,{href:"#",icon:p,label:"Analyses"},4),e.jsx(n.Link,{href:"#",icon:h,label:"Instellingen"},5)]})}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#",icon:l,label:"Dashboard"},1),e.jsx(n.Button,{"aria-controls":"subsidies-menu",icon:t,label:"Subsidies",open:!0,children:e.jsxs(n.Menu,{id:"subsidies-menu",children:[e.jsx(n.Link,{href:"#",icon:u,label:"Initiatieven"},"1"),e.jsx(n.Link,{href:"#",icon:d,label:"Initiatiefnemers"},"2"),e.jsx(n.Link,{active:!0,href:"#",icon:g,label:"Dossiers"},"3"),e.jsx(n.Link,{href:"#",icon:k,label:"Hulp"},"4"),e.jsx(n.Link,{href:"#",icon:b,label:"Beheer"},"5")]})},2),e.jsx(n.Button,{"aria-controls":"reports-menu",icon:c,label:"Rapportages",children:e.jsxs(n.Menu,{id:"reports-menu",children:[e.jsx(n.Link,{href:"#",icon:v,label:"Inspecties"},"1"),e.jsx(n.Link,{href:"#",icon:m,label:"Nader onderzoek"},"2")]})},3),e.jsx(n.Link,{href:"#",icon:p,label:"Analyses"},4),e.jsx(n.Link,{href:"#",icon:h,label:"Instellingen"},5)]}),expanded:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <AppNavigation.Link href="#" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
        <AppNavigation.Button aria-controls="subsidies-menu" icon={EuroCoinsFillIcon} key={2} label="Subsidies">
          <AppNavigation.Menu id="subsidies-menu">
            <AppNavigation.Link href="#" icon={WalletIcon} key="1" label="Initiatieven" />
            <AppNavigation.Link href="#" icon={HandWithEuroCoinIcon} key="2" label="Initiatiefnemers" />
            <AppNavigation.Link href="#" icon={FolderIcon} key="3" label="Dossiers" />
            <AppNavigation.Link href="#" icon={SpeechBalloonQuestionMarkIcon} key="4" label="Hulp" />
            <AppNavigation.Link href="#" icon={CogwheelIcon} key="5" label="Beheer" />
          </AppNavigation.Menu>
        </AppNavigation.Button>
        <AppNavigation.Button aria-controls="reports-menu" icon={DocumentsFillIcon} key={3} label="Rapportages">
          <AppNavigation.Menu id="reports-menu">
            <AppNavigation.Link href="#" icon={SearchIcon} key="1" label="Inspecties" />
            <AppNavigation.Link href="#" icon={DocumentCheckMarkIcon} key="2" label="Nader onderzoek" />
          </AppNavigation.Menu>
        </AppNavigation.Button>
        <AppNavigation.Link href="#" icon={BarChartFillIcon} key={4} label="Analyses" />
        <AppNavigation.Link href="#" icon={CogwheelFillIcon} key={5} label="Instellingen" />
      </>,
    expanded: true
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <AppNavigation.Link href="#" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
        <AppNavigation.Link active href="#" icon={EuroCoinsFillIcon} key={2} label="Subsidies" />
        <AppNavigation.Link href="#" icon={DocumentsFillIcon} key={3} label="Rapportages" />
        <AppNavigation.Link href="#" icon={BarChartFillIcon} key={4} label="Analyses" />
        <AppNavigation.Link href="#" icon={CogwheelFillIcon} key={5} label="Instellingen" />
      </>
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <AppNavigation.Link href="#" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
        <AppNavigation.Button aria-controls="subsidies-menu" icon={EuroCoinsFillIcon} key={2} label="Subsidies" open>
          <AppNavigation.Menu id="subsidies-menu">
            <AppNavigation.Link href="#" icon={WalletIcon} key="1" label="Initiatieven" />
            <AppNavigation.Link href="#" icon={HandWithEuroCoinIcon} key="2" label="Initiatiefnemers" />
            <AppNavigation.Link active href="#" icon={FolderIcon} key="3" label="Dossiers" />
            <AppNavigation.Link href="#" icon={SpeechBalloonQuestionMarkIcon} key="4" label="Hulp" />
            <AppNavigation.Link href="#" icon={CogwheelIcon} key="5" label="Beheer" />
          </AppNavigation.Menu>
        </AppNavigation.Button>
        <AppNavigation.Button aria-controls="reports-menu" icon={DocumentsFillIcon} key={3} label="Rapportages">
          <AppNavigation.Menu id="reports-menu">
            <AppNavigation.Link href="#" icon={SearchIcon} key="1" label="Inspecties" />
            <AppNavigation.Link href="#" icon={DocumentCheckMarkIcon} key="2" label="Nader onderzoek" />
          </AppNavigation.Menu>
        </AppNavigation.Button>
        <AppNavigation.Link href="#" icon={BarChartFillIcon} key={4} label="Analyses" />
        <AppNavigation.Link href="#" icon={CogwheelFillIcon} key={5} label="Instellingen" />
      </>,
    expanded: true
  }
}`,...s.parameters?.docs?.source}}};const L=["Default","Expanded","WithSubNavigation","WithActiveItem","WithActiveSubNavigationItem"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Expanded:a,WithActiveItem:r,WithActiveSubNavigationItem:s,WithSubNavigation:o,__namedExportsOrder:L,default:x},Symbol.toStringTag,{value:"Module"}));export{y as A};
