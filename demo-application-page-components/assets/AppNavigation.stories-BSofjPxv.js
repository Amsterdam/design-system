import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{e as k,f as b,g as j,h as d,i as f,j as o,k as r,l,m as v,n as L,o as u,p as N}from"./index.esm-CN1rmi5g.js";import{A as n}from"./AppNavigation-CZ469oYI.js";const A={title:"Components/Navigation/App Navigation",component:n},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#dashboard",icon:k,label:"Dashboard"},1),e.jsx(n.Link,{href:"#projecten",icon:b,label:"Projecten"},2),e.jsx(n.Link,{href:"#rapportages",icon:j,label:"Rapportages"},3),e.jsx(n.Link,{href:"#analyses",icon:d,label:"Analyses"},4),e.jsx(n.Link,{href:"#instellingen",icon:f,label:"Instellingen"},5)]})}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#dashboard",icon:k,label:"Dashboard"},1),e.jsx(n.Link,{href:"#projecten",icon:b,label:"Projecten",children:e.jsxs(n.Menu,{children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:o,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:r,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:l,label:"Nader onderzoek"},"3"),e.jsx(n.Link,{href:"#projecten/maatregelen",icon:v,label:"Maatregelen"},"4"),e.jsx(n.Link,{href:"#projecten/batches",icon:L,label:"Batches"},"5"),e.jsx(n.Link,{href:"#projecten/hulp",icon:u,label:"Hulp"},"6"),e.jsx(n.Link,{href:"#projecten/beheer",icon:N,label:"Beheer"},"7")]})},2),e.jsx(n.Link,{href:"#rapportages",icon:j,label:"Rapportages",children:e.jsxs(n.Menu,{children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:o,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:r,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:l,label:"Nader onderzoek"},"3")]})},3),e.jsx(n.Link,{href:"#analyses",icon:d,label:"Analyses"},4),e.jsx(n.Link,{href:"#instellingen",icon:f,label:"Instellingen"},5)]})}};var c,t,s;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: <>
        <AppNavigation.Link href="#dashboard" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
        <AppNavigation.Link href="#projecten" icon={FolderFillIcon} key={2} label="Projecten" />
        <AppNavigation.Link href="#rapportages" icon={DocumentsFillIcon} key={3} label="Rapportages" />
        <AppNavigation.Link href="#analyses" icon={BarChartFillIcon} key={4} label="Analyses" />
        <AppNavigation.Link href="#instellingen" icon={CogwheelFillIcon} key={5} label="Instellingen" />
      </>
  }
}`,...(s=(t=a.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var p,h,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const m=["Default","WithSubNavigation"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:a,WithSubNavigation:i,__namedExportsOrder:m,default:A},Symbol.toStringTag,{value:"Module"}));export{S as A};
