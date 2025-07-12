import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{e as c,f as t,g as s,h as p,i as h,j as o,k as r,l,m as g,n as k,o as b,p as j}from"./index.esm-DHL1Y5zj.js";import{A as n}from"./AppNavigation-j3_fSvwj.js";const d={title:"Components/Navigation/App Navigation",component:n},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#dashboard",icon:c,label:"Dashboard"},1),e.jsx(n.Link,{href:"#projecten",icon:t,label:"Projecten"},2),e.jsx(n.Link,{href:"#rapportages",icon:s,label:"Rapportages"},3),e.jsx(n.Link,{href:"#analyses",icon:p,label:"Analyses"},4),e.jsx(n.Link,{href:"#instellingen",icon:h,label:"Instellingen"},5)]})}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#dashboard",icon:c,label:"Dashboard"},1),e.jsx(n.Link,{href:"#projecten",icon:t,label:"Projecten",children:e.jsxs(n.Menu,{children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:o,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:r,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:l,label:"Nader onderzoek"},"3"),e.jsx(n.Link,{href:"#projecten/maatregelen",icon:g,label:"Maatregelen"},"4"),e.jsx(n.Link,{href:"#projecten/batches",icon:k,label:"Batches"},"5"),e.jsx(n.Link,{href:"#projecten/hulp",icon:b,label:"Hulp"},"6"),e.jsx(n.Link,{href:"#projecten/beheer",icon:j,label:"Beheer"},"7")]})},2),e.jsx(n.Link,{href:"#rapportages",icon:s,label:"Rapportages",children:e.jsxs(n.Menu,{children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:o,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:r,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:l,label:"Nader onderzoek"},"3")]})},3),e.jsx(n.Link,{href:"#analyses",icon:p,label:"Analyses"},4),e.jsx(n.Link,{href:"#instellingen",icon:h,label:"Instellingen"},5)]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <AppNavigation.Link href="#dashboard" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
        <AppNavigation.Link href="#projecten" icon={FolderFillIcon} key={2} label="Projecten" />
        <AppNavigation.Link href="#rapportages" icon={DocumentsFillIcon} key={3} label="Rapportages" />
        <AppNavigation.Link href="#analyses" icon={BarChartFillIcon} key={4} label="Analyses" />
        <AppNavigation.Link href="#instellingen" icon={CogwheelFillIcon} key={5} label="Instellingen" />
      </>
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
        <AppNavigation.Link href="#dashboard" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
        <AppNavigation.Link href="#projecten" icon={FolderFillIcon} key={2} label="Projecten">
          <AppNavigation.Menu>
            <AppNavigation.Link href="#projecten/objecten" icon={BuildingIcon} key="1" label="Objecten" />
            <AppNavigation.Link href="#projecten/inspecties" icon={SearchIcon} key="2" label="Inspecties" />
            <AppNavigation.Link href="#projecten/nader-onderzoek" icon={DocumentCheckMarkIcon} key="3" label="Nader onderzoek" />
            <AppNavigation.Link href="#projecten/maatregelen" icon={RulerIcon} key="4" label="Maatregelen" />
            <AppNavigation.Link href="#projecten/batches" icon={HandshakeIcon} key="5" label="Batches" />
            <AppNavigation.Link href="#projecten/hulp" icon={QuestionMarkCircleIcon} key="6" label="Hulp" />
            <AppNavigation.Link href="#projecten/beheer" icon={CogwheelIcon} key="7" label="Beheer" />
          </AppNavigation.Menu>
        </AppNavigation.Link>
        <AppNavigation.Link href="#rapportages" icon={DocumentsFillIcon} key={3} label="Rapportages">
          <AppNavigation.Menu>
            <AppNavigation.Link href="#projecten/objecten" icon={BuildingIcon} key="1" label="Objecten" />
            <AppNavigation.Link href="#projecten/inspecties" icon={SearchIcon} key="2" label="Inspecties" />
            <AppNavigation.Link href="#projecten/nader-onderzoek" icon={DocumentCheckMarkIcon} key="3" label="Nader onderzoek" />
          </AppNavigation.Menu>
        </AppNavigation.Link>
        <AppNavigation.Link href="#analyses" icon={BarChartFillIcon} key={4} label="Analyses" />
        <AppNavigation.Link href="#instellingen" icon={CogwheelFillIcon} key={5} label="Instellingen" />
      </>
  }
}`,...i.parameters?.docs?.source}}};const f=["Default","WithSubNavigation"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithSubNavigation:i,__namedExportsOrder:f,default:d},Symbol.toStringTag,{value:"Module"}));export{N as A};
