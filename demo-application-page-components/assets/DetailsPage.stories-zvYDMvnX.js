import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{e as S,f as C,j as b,k,l as f,m as w,n as z,o as R,p as H,g as F,h as B,i as D}from"./index.esm-DHL1Y5zj.js";import{p as P,q as M,B as m,G as L,H as A,P as E,r as s,D as N,s as i,L as O,C as T,e as U}from"./index.esm-ZQaGvWOv.js";import{a as I}from"./index-Br0BFi8U.js";import{r as x}from"./index-G8LIXM5I.js";import{c as V,L as v}from"./config-CuNgh5Zm.js";import{A as n}from"./AppNavigation-j3_fSvwj.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./App-DofgP5JU.js";import"./PageHeader-Dt-cCvxI.js";import"./Grid-BHIDbP7U.js";import"./paddingClasses-BhwbQ8nP.js";import"./Icon-BBW_x4VP.js";import"./Logo-BXVw7-MZ.js";import"./IconButton-C_jGsPjB.js";const G=()=>{const a=x.useRef(null),[l,d]=x.useState(null),o=()=>{a.current&&d(a.current.files)},c=p=>{if(l){const t=new DataTransfer;Array.from(l).forEach((r,y)=>{y!==p&&t.items.add(r)}),a.current&&(a.current.files=t.files),d(t.files)}};return e.jsxs("div",{style:{maxInlineSize:"50ch"},children:[e.jsx(P,{multiple:!0,onChange:o,ref:a}),l&&e.jsx(M,{children:Array.from(l).map((p,t)=>e.jsx(M.Item,{file:p,onDelete:()=>c(t)},t))}),Array.from(l||[]).length>0&&e.jsx(m,{children:"Opslaan"})]})},W=()=>{const[a,l]=x.useState(null);x.useEffect(()=>{(async()=>{try{const c=Math.floor(Math.random()*50),r=await(await fetch(`https://api.data.amsterdam.nl/v1/subsidies/openbaar_subsidieregister/${c}`)).json(),y={aanvrager:r.aanvrager||"-",bedragAangevraagd:Intl.NumberFormat("nl-NL",{currency:"EUR",style:"currency"}).format(r.bedragAangevraagd)||"-",bedragVastgesteld:Intl.NumberFormat("nl-NL",{currency:"EUR",style:"currency"}).format(r.bedragVastgesteld)||"-",bedragVerleend:Intl.NumberFormat("nl-NL",{currency:"EUR",style:"currency"}).format(r.bedragVerleend)||"-",beleidsterrein:r.beleidsterrein||"-",datumOverzicht:r.datumOverzicht||"-",dossiernummer:r.dossiernummer||"-",id:r.id||"#",organisatieonderdeel:r.organisatieonderdeel||"-",projectnaam:r.projectnaam||"-",publicatiedatumVaststellingsbesluit:r.publicatiedatumVaststellingsbesluit||"-",publicatiedatumVerleningsbesluit:r.publicatiedatumVerleningsbesluit||"-",regelingnaam:r.regelingnaam||"-",subsidiejaar:r.subsidiejaar||0,typePeriodiciteit:r.typePeriodiciteit||"-"};l(y)}catch(c){console.error("Error fetching Subsidy:",c)}})()},[]);const d=[{date:"11-01-2025",downloadURL:"#",filename:"Projectspecificatie.pdf",id:1,kind:"Document"},{date:"11-01-2025",downloadURL:"#",filename:"Aanmeldingsformulier.docx",id:2,kind:"Document"},{date:"11-01-2025",downloadURL:"#",filename:"Overzicht.xlsx",id:3,kind:"Spreadsheet"}];return e.jsx(e.Fragment,{children:e.jsxs(L,{paddingBottom:"x-large",paddingTop:"large",children:[e.jsxs(L.Cell,{span:{narrow:4,medium:8,wide:12},children:[e.jsx(A,{level:1,children:a?.projectnaam??"Laden..."}),e.jsx(E,{size:"large",children:a?.dossiernummer})]}),e.jsx(L.Cell,{span:{narrow:4,medium:8,wide:12},children:e.jsxs(s,{onTabChange:function(){},children:[e.jsxs(s.List,{children:[e.jsx(s.Button,{"aria-controls":"Gegevens",children:"Gegevens"}),e.jsx(s.Button,{"aria-controls":"Documenten",children:"Documenten"}),e.jsx(s.Button,{"aria-controls":"Acties",children:"Acties"})]}),e.jsx(s.Panel,{id:"Gegevens",children:e.jsx(N,{termsWidth:"medium",children:a&&Object.entries(a).map(([o,c])=>{const p=o.replace(/([A-Z])/g," $1").replace(/^./,t=>t.toUpperCase());return e.jsxs(e.Fragment,{children:[e.jsx(N.Term,{children:p}),e.jsx(N.Description,{children:c})]})})})}),e.jsx(s.Panel,{id:"Documenten",children:e.jsxs(i,{className:"ams-mb-m",width:"100%",children:[e.jsx(i.Header,{children:e.jsxs(i.Row,{children:[e.jsx(i.HeaderCell,{children:"Bestandsnaam"}),e.jsx(i.HeaderCell,{children:"Datum"}),e.jsx(i.HeaderCell,{children:"Soort"}),e.jsx(i.HeaderCell,{children:"Acties"})]})}),e.jsx(i.Body,{children:d.map(o=>e.jsxs(i.Row,{children:[e.jsx(i.Cell,{children:o.filename}),e.jsx(i.Cell,{children:o.date}),e.jsx(i.Cell,{children:o.kind}),e.jsx(i.Cell,{children:e.jsx(O,{href:o.downloadURL,children:"Download"})})]},o.id))})]})}),e.jsx(s.Panel,{id:"Acties",children:e.jsxs(T,{gap:"large",children:[e.jsx(A,{level:2,children:"Object Acties"}),e.jsx("div",{children:e.jsxs(U,{children:[e.jsx(m,{onClick:I("Actie 1 uitgevoerd"),variant:"primary",children:"Actie 1"}),e.jsx(m,{onClick:I("Actie 1 uitgevoerd"),variant:"secondary",children:"Actie 2"}),e.jsx(m,{disabled:!0,onClick:I("Actie 1 uitgevoerd"),variant:"secondary",children:"Actie 3"})]})}),e.jsx(A,{level:2,children:"Upload"}),e.jsx(G,{})]})})]})})]})})},ce={...V,title:"Pages/Application/Details",component:W},h={decorators:[a=>e.jsx(v,{children:e.jsx(a,{})})]},j={decorators:[a=>e.jsx(v,{navItems:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#dashboard",icon:S,label:"Dashboard"},1),e.jsx(n.Button,{icon:C,label:"Projecten",popoverTarget:"projecten-menu",children:e.jsxs(n.Menu,{id:"projecten-menu",popover:"auto",children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:b,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:k,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:f,label:"Nader onderzoek"},"3"),e.jsx(n.Link,{href:"#projecten/maatregelen",icon:w,label:"Maatregelen"},"4"),e.jsx(n.Link,{href:"#projecten/batches",icon:z,label:"Batches"},"5"),e.jsx(n.Link,{href:"#projecten/hulp",icon:R,label:"Hulp"},"6"),e.jsx(n.Link,{href:"#projecten/beheer",icon:H,label:"Beheer"},"7")]})},2),e.jsx(n.Button,{icon:F,label:"Rapportages",popoverTarget:"rapportages-menu",children:e.jsxs(n.Menu,{id:"rapportages-menu",popover:"auto",children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:b,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:k,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:f,label:"Nader onderzoek"},"3")]})},3),e.jsx(n.Link,{href:"#analyses",icon:B,label:"Analyses"},4),e.jsx(n.Link,{href:"#instellingen",icon:D,label:"Instellingen"},5)]}),children:e.jsx(a,{})})]},g={decorators:[a=>e.jsx(v,{expandable:!0,navItems:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#dashboard",icon:S,label:"Dashboard"},1),e.jsx(n.Link,{href:"#projecten",icon:C,label:"Projecten"},2),e.jsx(n.Link,{href:"#rapportages",icon:F,label:"Rapportages"},3),e.jsx(n.Link,{href:"#analyses",icon:B,label:"Analyses"},4),e.jsx(n.Link,{active:!0,href:"#instellingen",icon:D,label:"Instellingen"},5)]}),children:e.jsx(a,{})})]},u={decorators:[a=>e.jsx(v,{navExpanded:!0,navItems:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#dashboard",icon:S,label:"Dashboard"},1),e.jsx(n.Link,{href:"#projecten",icon:C,label:"Projecten",children:e.jsxs(n.Menu,{children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:b,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:k,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:f,label:"Nader onderzoek"},"3"),e.jsx(n.Link,{href:"#projecten/maatregelen",icon:w,label:"Maatregelen"},"4"),e.jsx(n.Link,{href:"#projecten/batches",icon:z,label:"Batches"},"5"),e.jsx(n.Link,{href:"#projecten/hulp",icon:R,label:"Hulp"},"6"),e.jsx(n.Link,{href:"#projecten/beheer",icon:H,label:"Beheer"},"7")]})},2),e.jsx(n.Link,{href:"#rapportages",icon:F,label:"Rapportages",children:e.jsxs(n.Menu,{children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:b,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:k,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:f,label:"Nader onderzoek"},"3")]})},3),e.jsx(n.Link,{href:"#analyses",icon:B,label:"Analyses"},4),e.jsx(n.Link,{active:!0,href:"#instellingen",icon:D,label:"Instellingen"},5)]}),children:e.jsx(a,{})})]};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Layout>
        <Story />
      </Layout>]
}`,...h.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Layout expandable navItems={<>
            <AppNavigation.Link href="#dashboard" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
            <AppNavigation.Link href="#projecten" icon={FolderFillIcon} key={2} label="Projecten" />
            <AppNavigation.Link href="#rapportages" icon={DocumentsFillIcon} key={3} label="Rapportages" />
            <AppNavigation.Link href="#analyses" icon={BarChartFillIcon} key={4} label="Analyses" />
            <AppNavigation.Link active href="#instellingen" icon={CogwheelFillIcon} key={5} label="Instellingen" />
          </>}>
        <Story />
      </Layout>]
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
            <AppNavigation.Link active href="#instellingen" icon={CogwheelFillIcon} key={5} label="Instellingen" />
          </>}>
        <Story />
      </Layout>]
}`,...u.parameters?.docs?.source}}};const pe=["Default","WithSubNavigationPopover","Expandable","ExpandedWithSubNavigation"];export{h as Default,g as Expandable,u as ExpandedWithSubNavigation,j as WithSubNavigationPopover,pe as __namedExportsOrder,ce as default};
