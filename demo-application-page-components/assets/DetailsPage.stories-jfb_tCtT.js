import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as y,s as A,t as d,u as h,v as j,w as z,x as w,y as R,z as H,A as N,B as I,C as S}from"./index.esm-otMAvRTs.js";import{p as Y,q as P,B as v,G as F,H as B,P as ee,r as l,D as M,s as r,L as ne,C as ae,e as ie}from"./index.esm-jw7804OD.js";import{a as D}from"./index-B-lxVbXh.js";import{r as L}from"./index-G8LIXM5I.js";import{c as re,L as g}from"./config-5IPC2OA9.js";import{A as n}from"./AppNavigation-b7-1Kk7N.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./App-DofgP5JU.js";import"./PageHeader-CihQ526n.js";import"./Grid-BHIDbP7U.js";import"./paddingClasses-BhwbQ8nP.js";import"./Icon-BBW_x4VP.js";import"./Logo-BXVw7-MZ.js";import"./IconButton-B03Z-Dvm.js";const oe=()=>{const a=L.useRef(null),[c,k]=L.useState(null),o=()=>{a.current&&k(a.current.files)},s=p=>{if(c){const t=new DataTransfer;Array.from(c).forEach((i,C)=>{C!==p&&t.items.add(i)}),a.current&&(a.current.files=t.files),k(t.files)}};return e.jsxs("div",{style:{maxInlineSize:"50ch"},children:[e.jsx(Y,{multiple:!0,onChange:o,ref:a}),c&&e.jsx(P,{children:Array.from(c).map((p,t)=>e.jsx(P.Item,{file:p,onDelete:()=>s(t)},t))}),Array.from(c||[]).length>0&&e.jsx(v,{children:"Opslaan"})]})},te=()=>{const[a,c]=L.useState(null);L.useEffect(()=>{(async()=>{try{const s=Math.floor(Math.random()*50),i=await(await fetch(`https://api.data.amsterdam.nl/v1/subsidies/openbaar_subsidieregister/${s}`)).json();console.log("Fetched Subsidy:",i);const C={aanvrager:i.aanvrager||"-",bedragAangevraagd:Intl.NumberFormat("nl-NL",{currency:"EUR",style:"currency"}).format(i.bedragAangevraagd)||"-",bedragVastgesteld:Intl.NumberFormat("nl-NL",{currency:"EUR",style:"currency"}).format(i.bedragVastgesteld)||"-",bedragVerleend:Intl.NumberFormat("nl-NL",{currency:"EUR",style:"currency"}).format(i.bedragVerleend)||"-",beleidsterrein:i.beleidsterrein||"-",datumOverzicht:i.datumOverzicht||"-",dossiernummer:i.dossiernummer||"-",id:i.id||"#",organisatieonderdeel:i.organisatieonderdeel||"-",projectnaam:i.projectnaam||"-",publicatiedatumVaststellingsbesluit:i.publicatiedatumVaststellingsbesluit||"-",publicatiedatumVerleningsbesluit:i.publicatiedatumVerleningsbesluit||"-",regelingnaam:i.regelingnaam||"-",subsidiejaar:i.subsidiejaar||0,typePeriodiciteit:i.typePeriodiciteit||"-"};c(C)}catch(s){console.error("Error fetching Subsidy:",s)}})()},[]);const k=[{date:"11-01-2025",downloadURL:"#",filename:"Projectspecificatie.pdf",id:1,kind:"Document"},{date:"11-01-2025",downloadURL:"#",filename:"Aanmeldingsformulier.docx",id:2,kind:"Document"},{date:"11-01-2025",downloadURL:"#",filename:"Overzicht.xlsx",id:3,kind:"Spreadsheet"}];return e.jsx(e.Fragment,{children:e.jsxs(F,{paddingBottom:"x-large",paddingTop:"large",children:[e.jsxs(F.Cell,{span:{narrow:4,medium:8,wide:12},children:[e.jsx(B,{level:1,children:(a==null?void 0:a.projectnaam)??"Laden..."}),e.jsx(ee,{size:"large",children:a==null?void 0:a.dossiernummer})]}),e.jsx(F.Cell,{span:{narrow:4,medium:8,wide:12},children:e.jsxs(l,{onTabChange:function(){},children:[e.jsxs(l.List,{children:[e.jsx(l.Button,{"aria-controls":"Gegevens",children:"Gegevens"}),e.jsx(l.Button,{"aria-controls":"Documenten",children:"Documenten"}),e.jsx(l.Button,{"aria-controls":"Acties",children:"Acties"})]}),e.jsx(l.Panel,{id:"Gegevens",children:e.jsx(M,{termsWidth:"medium",children:a&&Object.entries(a).map(([o,s])=>{const p=o.replace(/([A-Z])/g," $1").replace(/^./,t=>t.toUpperCase());return e.jsxs(e.Fragment,{children:[e.jsx(M.Term,{children:p}),e.jsx(M.Description,{children:s})]})})})}),e.jsx(l.Panel,{id:"Documenten",children:e.jsxs(r,{className:"ams-mb-m",width:"100%",children:[e.jsx(r.Header,{children:e.jsxs(r.Row,{children:[e.jsx(r.HeaderCell,{children:"Bestandsnaam"}),e.jsx(r.HeaderCell,{children:"Datum"}),e.jsx(r.HeaderCell,{children:"Soort"}),e.jsx(r.HeaderCell,{children:"Acties"})]})}),e.jsx(r.Body,{children:k.map(o=>e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:o.filename}),e.jsx(r.Cell,{children:o.date}),e.jsx(r.Cell,{children:o.kind}),e.jsx(r.Cell,{children:e.jsx(ne,{href:o.downloadURL,children:"Download"})})]},o.id))})]})}),e.jsx(l.Panel,{id:"Acties",children:e.jsxs(ae,{gap:"large",children:[e.jsx(B,{level:2,children:"Object Acties"}),e.jsx("div",{children:e.jsxs(ie,{children:[e.jsx(v,{onClick:D("Actie 1 uitgevoerd"),variant:"primary",children:"Actie 1"}),e.jsx(v,{onClick:D("Actie 1 uitgevoerd"),variant:"secondary",children:"Actie 2"}),e.jsx(v,{disabled:!0,onClick:D("Actie 1 uitgevoerd"),variant:"secondary",children:"Actie 3"})]})}),e.jsx(B,{level:2,children:"Upload"}),e.jsx(oe,{})]})})]})})]})})},Ne={...re,title:"Pages/Application/Details",component:te},b={decorators:[a=>e.jsx(g,{children:e.jsx(a,{})})]},u={decorators:[a=>e.jsx(g,{navItems:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#dashboard",icon:y,label:"Dashboard"},1),e.jsx(n.Button,{icon:A,label:"Projecten",popoverTarget:"projecten-menu",children:e.jsxs(n.Menu,{id:"projecten-menu",popover:"auto",children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:d,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:h,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:j,label:"Nader onderzoek"},"3"),e.jsx(n.Link,{href:"#projecten/maatregelen",icon:z,label:"Maatregelen"},"4"),e.jsx(n.Link,{href:"#projecten/batches",icon:w,label:"Batches"},"5"),e.jsx(n.Link,{href:"#projecten/hulp",icon:R,label:"Hulp"},"6"),e.jsx(n.Link,{href:"#projecten/beheer",icon:H,label:"Beheer"},"7")]})},2),e.jsx(n.Button,{icon:N,label:"Rapportages",popoverTarget:"rapportages-menu",children:e.jsxs(n.Menu,{id:"rapportages-menu",popover:"auto",children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:d,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:h,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:j,label:"Nader onderzoek"},"3")]})},3),e.jsx(n.Link,{href:"#analyses",icon:I,label:"Analyses"},4),e.jsx(n.Link,{href:"#instellingen",icon:S,label:"Instellingen"},5)]}),children:e.jsx(a,{})})]},m={decorators:[a=>e.jsx(g,{expandable:!0,navItems:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#dashboard",icon:y,label:"Dashboard"},1),e.jsx(n.Link,{href:"#projecten",icon:A,label:"Projecten"},2),e.jsx(n.Link,{href:"#rapportages",icon:N,label:"Rapportages"},3),e.jsx(n.Link,{href:"#analyses",icon:I,label:"Analyses"},4),e.jsx(n.Link,{active:!0,href:"#instellingen",icon:S,label:"Instellingen"},5)]}),children:e.jsx(a,{})})]},f={decorators:[a=>e.jsx(g,{expandable:!0,navItems:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#dashboard",icon:y,label:"Dashboard"},1),e.jsx(n.Link,{href:"#projecten",icon:A,label:"Projecten",children:e.jsxs(n.Menu,{children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:d,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:h,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:j,label:"Nader onderzoek"},"3"),e.jsx(n.Link,{href:"#projecten/maatregelen",icon:z,label:"Maatregelen"},"4"),e.jsx(n.Link,{href:"#projecten/batches",icon:w,label:"Batches"},"5"),e.jsx(n.Link,{href:"#projecten/hulp",icon:R,label:"Hulp"},"6"),e.jsx(n.Link,{href:"#projecten/beheer",icon:H,label:"Beheer"},"7")]})},2),e.jsx(n.Link,{href:"#rapportages",icon:N,label:"Rapportages",children:e.jsxs(n.Menu,{children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:d,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:h,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:j,label:"Nader onderzoek"},"3")]})},3),e.jsx(n.Link,{href:"#analyses",icon:I,label:"Analyses"},4),e.jsx(n.Link,{active:!0,href:"#instellingen",icon:S,label:"Instellingen"},5)]}),children:e.jsx(a,{})})]},x={decorators:[a=>e.jsx(g,{navExpanded:!0,navItems:e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#dashboard",icon:y,label:"Dashboard"},1),e.jsx(n.Link,{href:"#projecten",icon:A,label:"Projecten",children:e.jsxs(n.Menu,{children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:d,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:h,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:j,label:"Nader onderzoek"},"3"),e.jsx(n.Link,{href:"#projecten/maatregelen",icon:z,label:"Maatregelen"},"4"),e.jsx(n.Link,{href:"#projecten/batches",icon:w,label:"Batches"},"5"),e.jsx(n.Link,{href:"#projecten/hulp",icon:R,label:"Hulp"},"6"),e.jsx(n.Link,{href:"#projecten/beheer",icon:H,label:"Beheer"},"7")]})},2),e.jsx(n.Link,{href:"#rapportages",icon:N,label:"Rapportages",children:e.jsxs(n.Menu,{children:[e.jsx(n.Link,{href:"#projecten/objecten",icon:d,label:"Objecten"},"1"),e.jsx(n.Link,{href:"#projecten/inspecties",icon:h,label:"Inspecties"},"2"),e.jsx(n.Link,{href:"#projecten/nader-onderzoek",icon:j,label:"Nader onderzoek"},"3")]})},3),e.jsx(n.Link,{href:"#analyses",icon:I,label:"Analyses"},4),e.jsx(n.Link,{active:!0,href:"#instellingen",icon:S,label:"Instellingen"},5)]}),children:e.jsx(a,{})})]};var O,E,T;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  decorators: [Story => <Layout>
        <Story />
      </Layout>]
}`,...(T=(E=b.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var U,V,W;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(W=(V=u.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var G,Q,_;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  decorators: [Story => <Layout expandable navItems={<>
            <AppNavigation.Link href="#dashboard" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
            <AppNavigation.Link href="#projecten" icon={FolderFillIcon} key={2} label="Projecten" />
            <AppNavigation.Link href="#rapportages" icon={DocumentsFillIcon} key={3} label="Rapportages" />
            <AppNavigation.Link href="#analyses" icon={BarChartFillIcon} key={4} label="Analyses" />
            <AppNavigation.Link active href="#instellingen" icon={CogwheelFillIcon} key={5} label="Instellingen" />
          </>}>
        <Story />
      </Layout>]
}`,...(_=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};var $,q,K;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  decorators: [Story => <Layout expandable navItems={<>
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
}`,...(K=(q=f.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var X,Z,J;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};const Ie=["Default","WithSubNavigationPopover","Expandable","ExpandableWithSubNavigation","ExpandedWithSubNavigation"];export{b as Default,m as Expandable,f as ExpandableWithSubNavigation,x as ExpandedWithSubNavigation,u as WithSubNavigationPopover,Ie as __namedExportsOrder,Ne as default};
