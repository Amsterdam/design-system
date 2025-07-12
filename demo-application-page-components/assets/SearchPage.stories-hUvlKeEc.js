import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{d as u,G,e as I,f as S,j as v,k as f,l as y,m as D,n as O,o as H,p as P,g as _,h as F,i as C}from"./index.esm-DHL1Y5zj.js";import{G as N,C as s,m as t,B as o,R as b,F as x,d as k,t as m,g as w,H as V,h as A,n as p,s as r,u as W,e as Q}from"./index.esm-ZQaGvWOv.js";import{r as z}from"./index-G8LIXM5I.js";import{c as q,L}from"./config-CuNgh5Zm.js";import{A as n}from"./AppNavigation-j3_fSvwj.js";const U="_select_zvoxl_9",Z="_search_field_zvoxl_14",J="_filters_zvoxl_18",K="_toggle_filters_zvoxl_26",X="_filters_menu_zvoxl_32",Y="_filters_menu_actions_zvoxl_48",c={select:U,search_field:Z,filters:J,toggle_filters:K,filters_menu:X,filters_menu_actions:Y},$=()=>{const[i,R]=z.useState([]);z.useEffect(()=>{(async()=>{try{const E=(await(await fetch("https://api.data.amsterdam.nl/v1/subsidies/openbaar_subsidieregister/")).json())._embedded.openbaar_subsidieregister.map((l,T)=>({aanvrager:l.aanvrager||"-",bedragAangevraagd:Intl.NumberFormat("nl-NL",{currency:"EUR",style:"currency"}).format(l.bedragAangevraagd)||0,dossiernummer:l.dossiernummer||T,id:l.id||"#",projectnaam:l.projectnaam||"-",publicatiedatum:l.publicatiedatumVerleningsbesluit||"-"}));R(E)}catch(M){console.error("Error fetching Subsidies:",M)}})()},[]);const B=Array.from(new Set(i.map(a=>a.aanvrager)));return e.jsxs(e.Fragment,{children:[e.jsxs(N,{paddingBottom:"x-large",paddingTop:"large",children:[e.jsx(N.Cell,{as:"aside",className:c.filters,span:{narrow:4,medium:3,wide:3},children:e.jsxs(s,{gap:"large",children:[e.jsx(t,{legend:"Filters",children:e.jsxs(s,{gap:"small",children:[e.jsx("div",{children:e.jsx(o,{icon:u,type:"button",variant:"secondary",children:"Filter 1"})}),e.jsx("div",{children:e.jsx(o,{icon:u,type:"button",variant:"secondary",children:"Actief Filter"})}),e.jsx("div",{children:e.jsx(o,{type:"button",variant:"tertiary",children:"Alle filters wissen"})})]})}),e.jsx(t,{legend:"Datum",children:e.jsxs(b,{wrap:!0,children:[e.jsxs(x,{children:[e.jsx(k,{htmlFor:"input-b1",children:"Van"}),e.jsx(m,{})]}),e.jsxs(x,{children:[e.jsx(k,{htmlFor:"input-b1",children:"Tot"}),e.jsx(m,{})]})]})}),e.jsx(t,{legend:"Aanvragers",children:e.jsx(s,{gap:"x-small",children:B.map(a=>e.jsx(w,{name:"aanvrager",value:a,children:a},a))})})]})}),e.jsx(N.Cell,{span:{narrow:4,medium:5,wide:9},children:e.jsxs(s,{gap:"large",children:[e.jsx(V,{level:2,children:"Zoeken"}),e.jsxs(b,{align:"between",className:"ams-mb-m",wrap:!0,children:[e.jsxs(A,{className:c.search_field,children:[e.jsx(A.Input,{name:"search-box",onChange:function(){},size:42,value:""}),e.jsx(A.Button,{})]}),e.jsxs(p,{className:c.select,children:[e.jsx(p.Option,{children:"Sorteren"}),e.jsx(p.Option,{value:"option1",children:"Optie 1"}),e.jsx(p.Option,{value:"option2",children:"Optie 2"}),e.jsx(p.Option,{value:"option3",children:"Optie 3"})]}),e.jsx(o,{className:c.toggle_filters,icon:G,popoverTarget:"filters",type:"button",variant:"secondary",children:"Filters"})]}),e.jsxs(r,{className:"ams-mb-m",width:"100%",children:[e.jsx(r.Header,{children:e.jsxs(r.Row,{children:[e.jsx(r.HeaderCell,{children:"Projectnaam"}),e.jsx(r.HeaderCell,{children:"Dossiernummer"}),e.jsx(r.HeaderCell,{children:"Aanvrager"}),e.jsx(r.HeaderCell,{children:"Bedrag"})]})}),e.jsx(r.Body,{children:i.map(a=>e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:a.projectnaam}),e.jsx(r.Cell,{children:a.dossiernummer}),e.jsx(r.Cell,{children:a.aanvrager}),e.jsx(r.Cell,{children:a.bedragAangevraagd})]},a.id))})]}),e.jsx(b,{align:"center",children:e.jsx(W,{linkTemplate:()=>"#",maxVisiblePages:7,page:1,totalPages:10})})]})})]}),e.jsxs("div",{className:c.filters_menu,id:"filters",popover:"auto",children:[e.jsxs(s,{gap:"large",children:[e.jsx(t,{legend:"Filters",children:e.jsxs(s,{gap:"small",children:[e.jsx("div",{children:e.jsx(o,{icon:u,type:"button",variant:"secondary",children:"Filter 1"})}),e.jsx("div",{children:e.jsx(o,{icon:u,type:"button",variant:"secondary",children:"Actief Filter"})}),e.jsx("div",{children:e.jsx(o,{type:"button",variant:"tertiary",children:"Alle filters wissen"})})]})}),e.jsx(t,{legend:"Datum",children:e.jsxs(b,{wrap:!0,children:[e.jsxs(x,{children:[e.jsx(k,{htmlFor:"input-b1",children:"Van"}),e.jsx(m,{})]}),e.jsxs(x,{children:[e.jsx(k,{htmlFor:"input-b1",children:"Tot"}),e.jsx(m,{})]})]})}),e.jsx(t,{legend:"Aanvragers",children:e.jsx(s,{gap:"x-small",children:B.map(a=>e.jsx(w,{name:"aanvrager",value:a,children:a},a))})})]}),e.jsx(Q,{className:c.filters_menu_actions,children:e.jsx(o,{children:"Opslaan"})})]})]})},ee={...q,title:"Pages/Application/Search",component:$},d={decorators:[i=>e.jsx(L,{children:e.jsx(i,{})})]},h={decorators:[i=>e.jsx(L,{navItems:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#dashboard",icon:I,label:"Dashboard"},1),e.jsx(n.Button,{icon:S,label:"Projecten",popoverTarget:"projecten-menu",children:e.jsxs(n.Menu,{id:"projecten-menu",popover:"auto",children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:v,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:f,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:y,label:"Nader onderzoek"},"3"),e.jsx(n.Link,{href:"#projecten/maatregelen",icon:D,label:"Maatregelen"},"4"),e.jsx(n.Link,{href:"#projecten/batches",icon:O,label:"Batches"},"5"),e.jsx(n.Link,{href:"#projecten/hulp",icon:H,label:"Hulp"},"6"),e.jsx(n.Link,{href:"#projecten/beheer",icon:P,label:"Beheer"},"7")]})},2),e.jsx(n.Button,{icon:_,label:"Rapportages",popoverTarget:"rapportages-menu",children:e.jsxs(n.Menu,{id:"rapportages-menu",popover:"auto",children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:v,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:f,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:y,label:"Nader onderzoek"},"3")]})},3),e.jsx(n.Link,{href:"#analyses",icon:F,label:"Analyses"},4),e.jsx(n.Link,{href:"#instellingen",icon:C,label:"Instellingen"},5)]}),children:e.jsx(i,{})})]},j={decorators:[i=>e.jsx(L,{expandable:!0,navItems:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#dashboard",icon:I,label:"Dashboard"},1),e.jsx(n.Link,{href:"#projecten",icon:S,label:"Projecten"},2),e.jsx(n.Link,{href:"#rapportages",icon:_,label:"Rapportages"},3),e.jsx(n.Link,{href:"#analyses",icon:F,label:"Analyses"},4),e.jsx(n.Link,{href:"#instellingen",icon:C,label:"Instellingen"},5)]}),children:e.jsx(i,{})})]},g={decorators:[i=>e.jsx(L,{navExpanded:!0,navItems:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#dashboard",icon:I,label:"Dashboard"},1),e.jsx(n.Link,{href:"#projecten",icon:S,label:"Projecten",children:e.jsxs(n.Menu,{children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:v,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:f,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:y,label:"Nader onderzoek"},"3"),e.jsx(n.Link,{href:"#projecten/maatregelen",icon:D,label:"Maatregelen"},"4"),e.jsx(n.Link,{href:"#projecten/batches",icon:O,label:"Batches"},"5"),e.jsx(n.Link,{href:"#projecten/hulp",icon:H,label:"Hulp"},"6"),e.jsx(n.Link,{href:"#projecten/beheer",icon:P,label:"Beheer"},"7")]})},2),e.jsx(n.Link,{href:"#rapportages",icon:_,label:"Rapportages",children:e.jsxs(n.Menu,{children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:v,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:f,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:y,label:"Nader onderzoek"},"3")]})},3),e.jsx(n.Link,{href:"#analyses",icon:F,label:"Analyses"},4),e.jsx(n.Link,{href:"#instellingen",icon:C,label:"Instellingen"},5)]}),children:e.jsx(i,{})})]};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Layout>
        <Story />
      </Layout>]
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Layout navItems={<>
            <AppNavigation.Link href="#dashboard" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
            <AppNavigation.Button icon={FolderFillIcon} key={2} label="Projecten" popoverTarget="projecten-menu">
              <AppNavigation.Menu id="projecten-menu" popover="auto">
                <AppNavigation.Link href="#projecten/objecten" icon={BuildingIcon} key="1" label="Objecten" />
                <AppNavigation.Link href="#projecten/inspecties" icon={SearchIcon} key="2" label="Inspecties" />
                <AppNavigation.Link href="#projecten/nader-onderzoek" icon={DocumentCheckMarkIcon} key="3" label="Nader onderzoek" />
                <AppNavigation.Link href="#projecten/maatregelen" icon={RulerIcon} key="4" label="Maatregelen" />
                <AppNavigation.Link href="#projecten/batches" icon={HandshakeIcon} key="5" label="Batches" />
                <AppNavigation.Link href="#projecten/hulp" icon={QuestionMarkCircleIcon} key="6" label="Hulp" />
                <AppNavigation.Link href="#projecten/beheer" icon={CogwheelIcon} key="7" label="Beheer" />
              </AppNavigation.Menu>
            </AppNavigation.Button>
            <AppNavigation.Button icon={DocumentsFillIcon} key={3} label="Rapportages" popoverTarget="rapportages-menu">
              <AppNavigation.Menu id="rapportages-menu" popover="auto">
                <AppNavigation.Link href="#projecten/objecten" icon={BuildingIcon} key="1" label="Objecten" />
                <AppNavigation.Link href="#projecten/inspecties" icon={SearchIcon} key="2" label="Inspecties" />
                <AppNavigation.Link href="#projecten/nader-onderzoek" icon={DocumentCheckMarkIcon} key="3" label="Nader onderzoek" />
              </AppNavigation.Menu>
            </AppNavigation.Button>
            <AppNavigation.Link href="#analyses" icon={BarChartFillIcon} key={4} label="Analyses" />
            <AppNavigation.Link href="#instellingen" icon={CogwheelFillIcon} key={5} label="Instellingen" />
          </>}>
        <Story />
      </Layout>]
}`,...h.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Layout expandable navItems={<>
            <AppNavigation.Link href="#dashboard" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
            <AppNavigation.Link href="#projecten" icon={FolderFillIcon} key={2} label="Projecten" />
            <AppNavigation.Link href="#rapportages" icon={DocumentsFillIcon} key={3} label="Rapportages" />
            <AppNavigation.Link href="#analyses" icon={BarChartFillIcon} key={4} label="Analyses" />
            <AppNavigation.Link href="#instellingen" icon={CogwheelFillIcon} key={5} label="Instellingen" />
          </>}>
        <Story />
      </Layout>]
}`,...j.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Layout navExpanded navItems={<>
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
          </>}>
        <Story />
      </Layout>]
}`,...g.parameters?.docs?.source}}};const ne=["Default","WithSubNavigationPopover","Expandable","ExpandedWithSubNavigation"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Expandable:j,ExpandedWithSubNavigation:g,WithSubNavigationPopover:h,__namedExportsOrder:ne,default:ee},Symbol.toStringTag,{value:"Module"}));export{ce as S};
