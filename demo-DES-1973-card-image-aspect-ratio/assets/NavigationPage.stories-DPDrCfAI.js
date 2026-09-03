import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{D as i,K as a,N as o,d as s,g as c,k as l,r as u,y as d}from"./index.esm-Cf2AflXd.js";import{C as f,S as p,X as m,nt as h,o as g}from"./index.esm-CN-jP0Dk.js";import{n as _,r as v,t as y}from"./commonMeta-DhZQf4KS.js";var b;function x(){return(x=e((()=>{a(),b=[{icon:d,label:`Overzicht`,slug:`overzicht`,subMenuItems:[{cellHeights:[64,48],label:`Samenvatting`,slug:`samenvatting`},{cellHeights:[72,40],label:`Status`,slug:`status`},{cellHeights:[56,64],label:`Kenmerken`,slug:`kenmerken`},{cellHeights:[80,32],label:`Tijdlijn`,slug:`tijdlijn`},{cellHeights:[48,56],label:`Gerelateerde projecten`,slug:`gerelateerde-projecten`}]},{icon:u,label:`Planning`,slug:`planning`,subMenuItems:[{cellHeights:[88,44],label:`Fasering`,slug:`fasering`},{cellHeights:[52,72],label:`Mijlpalen`,slug:`mijlpalen`},{cellHeights:[40,88],label:`Omleidingen`,slug:`omleidingen`},{cellHeights:[76,36],label:`Afsluitingen`,slug:`afsluitingen`},{cellHeights:[60,52],label:`Werkzaamheden`,slug:`werkzaamheden`}]},{icon:i,label:`Locatie`,slug:`locatie`,subMenuItems:[{cellHeights:[96,40],label:`Kaart`,slug:`kaart`},{cellHeights:[44,80],label:`Werkgebied`,slug:`werkgebied`},{cellHeights:[68,56],label:`Bereikbaarheid`,slug:`bereikbaarheid`},{cellHeights:[56,68],label:`Omliggende projecten`,slug:`omliggende-projecten`}]},{icon:s,label:`Documenten`,slug:`documenten`,subMenuItems:[{cellHeights:[48,92],label:`Vergunningen`,slug:`vergunningen`},{cellHeights:[84,36],label:`Tekeningen`,slug:`tekeningen`},{cellHeights:[60,60],label:`Rapporten`,slug:`rapporten`},{cellHeights:[36,76],label:`Besluiten`,slug:`besluiten`},{cellHeights:[72,48],label:`Overeenkomsten`,slug:`overeenkomsten`}]},{icon:c,label:`Financiën`,slug:`financien`,subMenuItems:[{cellHeights:[76,52],label:`Begroting`,slug:`begroting`},{cellHeights:[44,84],label:`Besteding`,slug:`besteding`},{cellHeights:[92,40],label:`Prognose`,slug:`prognose`},{cellHeights:[56,68],label:`Facturen`,slug:`facturen`},{cellHeights:[64,44],label:`Subsidies`,slug:`subsidies`}]},{icon:o,label:`Betrokkenen`,slug:`betrokkenen`,subMenuItems:[{cellHeights:[40,96],label:`Opdrachtgever`,slug:`opdrachtgever`},{cellHeights:[68,52],label:`Aannemer`,slug:`aannemer`},{cellHeights:[84,36],label:`Toezicht`,slug:`toezicht`},{cellHeights:[52,72],label:`Stakeholders`,slug:`stakeholders`},{cellHeights:[60,60],label:`Contactpersonen`,slug:`contactpersonen`}]},{icon:l,label:`Communicatie`,slug:`communicatie`,subMenuItems:[{cellHeights:[72,44],label:`Bewonersberichten`,slug:`bewonersberichten`},{cellHeights:[48,80],label:`Omgevingsmelding`,slug:`omgevingsmelding`},{cellHeights:[88,32],label:`Klachten en meldingen`,slug:`klachten-en-meldingen`},{cellHeights:[36,64],label:`Persberichten`,slug:`persberichten`},{cellHeights:[56,56],label:`Nieuwsbrieven`,slug:`nieuwsbrieven`}]}]})))()}var S=t({Default:()=>E,__namedExportsOrder:()=>D,default:()=>T}),C,w,T,E,D;function O(){return(O=e((()=>{h(),C=n(),_(),x(),w=r(),T={...y,title:`Pages/Internal/Navigation Page`,parameters:v(`Suits websites whose content is organised into a handful of main sections that each have their own subsections.`),render:()=>{let[e,t]=(0,C.useState)(b[0].slug),[n,r]=(0,C.useState)(b[0].subMenuItems[0].slug),i=(0,C.useRef)(null),a=b.find(({slug:t})=>t===e)??b[0],o=a.subMenuItems,s=o.find(({slug:e})=>e===n)??o[0],c=(e,n)=>{e.preventDefault(),t(n);let a=b.find(e=>e.slug===n)??b[0];r(a.subMenuItems[0].slug),i.current?.scrollTo({left:0})},l=(e,t)=>{e.preventDefault(),r(t)};return(0,w.jsxs)(p,{paddingVertical:`x-large`,children:[(0,w.jsxs)(p.Cell,{appearance:`transparent`,span:`all`,children:[(0,w.jsxs)(g,{children:[(0,w.jsx)(g.Link,{href:`#`,children:`Home`}),(0,w.jsx)(g.Link,{href:`#`,children:`Projecten`})]}),(0,w.jsx)(f,{level:1,children:`Naam van het project`})]}),(0,w.jsx)(p.Cell,{appearance:`flush`,rowSpan:2,span:{narrow:4,medium:2,wide:2},children:(0,w.jsx)(m,{accessibleName:`Navigatie voor dit project`,orientation:`vertical`,children:(0,w.jsx)(m.List,{children:b.map(({icon:t,label:n,slug:r})=>(0,w.jsx)(m.Link,{"aria-current":e===r?`page`:void 0,href:`/projecten/42/${r}`,icon:t,onClick:e=>c(e,r),children:n},r))})})}),(0,w.jsx)(p.Cell,{appearance:`flush`,span:{narrow:4,medium:6,wide:10},start:{narrow:1,medium:3,wide:3},children:(0,w.jsx)(m,{accessibleName:`Subnavigatie voor dit project`,children:(0,w.jsx)(m.List,{ref:i,children:o.map(({label:t,slug:r})=>(0,w.jsx)(m.Link,{"aria-current":n===r?`page`:void 0,href:`/projecten/42/${e}/${r}`,onClick:e=>l(e,r),children:t},r))})})}),(0,w.jsxs)(p.Cell,{className:`ams-prose`,span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:3,wide:3},style:{blockSize:`${s.cellHeights[0]}vb`},children:[(0,w.jsx)(f,{level:2,children:a.label}),(0,w.jsx)(f,{level:3,children:s.label})]}),(0,w.jsx)(p.Cell,{span:{narrow:4,medium:4,wide:3},start:{narrow:1,medium:3,wide:10},style:{blockSize:`${s.cellHeights[1]}vb`}})]})}},E={parameters:{docs:{source:{code:`<Grid paddingVertical="x-large">
  <Grid.Cell appearance="transparent" span="all">
    <Breadcrumb>
      <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      <Breadcrumb.Link href="#">Projecten</Breadcrumb.Link>
    </Breadcrumb>
    <Heading level={1}>Naam van het project</Heading>
  </Grid.Cell>
  {/*
   * The main project navigation. rowSpan={2} lets this one cell sit beside both the subnavigation and
   * the content below it; appearance="flush" drops the cell padding so the tabs align with the grid.
   * accessibleName labels the nav for screen readers, and aria-current="page" marks the active link.
   */}
  <Grid.Cell appearance="flush" rowSpan={2} span={{ narrow: 4, medium: 2, wide: 2 }}>
    <TabNavigation accessibleName="Navigatie voor dit project" orientation="vertical">
      <TabNavigation.List>
        {menuItems.map(({ icon, label, slug }) => (
          <TabNavigation.Link
            aria-current={currentMenuSlug === slug ? 'page' : undefined}
            href={\`/projecten/42/\${slug}\`}
            icon={icon}
            key={slug}
            onClick={(e) => handleMenuItemClick(e, slug)}
          >
            {label}
          </TabNavigation.Link>
        ))}
      </TabNavigation.List>
    </TabNavigation>
  </Grid.Cell>
  {/*
   * The subnavigation scrolls sideways when it overflows. Keep a ref to its list so selecting another
   * main menu item can reset the scroll back to the start (see handleMenuItemClick).
   */}
  <Grid.Cell appearance="flush" span={{ narrow: 4, medium: 6, wide: 10 }} start={{ narrow: 1, medium: 3, wide: 3 }}>
    <TabNavigation accessibleName="Subnavigatie voor dit project">
      <TabNavigation.List ref={subMenuListRef}>
        {subMenuItems.map(({ label, slug }) => (
          <TabNavigation.Link
            aria-current={currentSubMenuSlug === slug ? 'page' : undefined}
            href={\`/projecten/42/\${currentMenuSlug}/\${slug}\`}
            key={slug}
            onClick={(e) => handleSubMenuItemClick(e, slug)}
          >
            {label}
          </TabNavigation.Link>
        ))}
      </TabNavigation.List>
    </TabNavigation>
  </Grid.Cell>
  {/* The content area, start-aligned next to the vertical navigation. Its cells stand in for content. */}
  <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 3, wide: 3 }}>
    <Heading level={2}>{currentMenu.label}</Heading>
    <Heading level={3}>{currentSubMenu.label}</Heading>
  </Grid.Cell>
  <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }} start={{ narrow: 1, medium: 3, wide: 10 }} />
</Grid>`,language:`tsx`}}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        // Because the \`render\` of this story lives on the shared meta, its own source is nothing but these parameters,
        // and that is all the Code Panel would print. Provide the source by hand so the layout reads the way a
        // developer would write it, without the interactive state.
        code: \`<Grid paddingVertical="x-large">
  <Grid.Cell appearance="transparent" span="all">
    <Breadcrumb>
      <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      <Breadcrumb.Link href="#">Projecten</Breadcrumb.Link>
    </Breadcrumb>
    <Heading level={1}>Naam van het project</Heading>
  </Grid.Cell>
  {/*
   * The main project navigation. rowSpan={2} lets this one cell sit beside both the subnavigation and
   * the content below it; appearance="flush" drops the cell padding so the tabs align with the grid.
   * accessibleName labels the nav for screen readers, and aria-current="page" marks the active link.
   */}
  <Grid.Cell appearance="flush" rowSpan={2} span={{ narrow: 4, medium: 2, wide: 2 }}>
    <TabNavigation accessibleName="Navigatie voor dit project" orientation="vertical">
      <TabNavigation.List>
        {menuItems.map(({ icon, label, slug }) => (
          <TabNavigation.Link
            aria-current={currentMenuSlug === slug ? 'page' : undefined}
            href={\\\`/projecten/42/\\\${slug}\\\`}
            icon={icon}
            key={slug}
            onClick={(e) => handleMenuItemClick(e, slug)}
          >
            {label}
          </TabNavigation.Link>
        ))}
      </TabNavigation.List>
    </TabNavigation>
  </Grid.Cell>
  {/*
   * The subnavigation scrolls sideways when it overflows. Keep a ref to its list so selecting another
   * main menu item can reset the scroll back to the start (see handleMenuItemClick).
   */}
  <Grid.Cell appearance="flush" span={{ narrow: 4, medium: 6, wide: 10 }} start={{ narrow: 1, medium: 3, wide: 3 }}>
    <TabNavigation accessibleName="Subnavigatie voor dit project">
      <TabNavigation.List ref={subMenuListRef}>
        {subMenuItems.map(({ label, slug }) => (
          <TabNavigation.Link
            aria-current={currentSubMenuSlug === slug ? 'page' : undefined}
            href={\\\`/projecten/42/\\\${currentMenuSlug}/\\\${slug}\\\`}
            key={slug}
            onClick={(e) => handleSubMenuItemClick(e, slug)}
          >
            {label}
          </TabNavigation.Link>
        ))}
      </TabNavigation.List>
    </TabNavigation>
  </Grid.Cell>
  {/* The content area, start-aligned next to the vertical navigation. Its cells stand in for content. */}
  <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 3, wide: 3 }}>
    <Heading level={2}>{currentMenu.label}</Heading>
    <Heading level={3}>{currentSubMenu.label}</Heading>
  </Grid.Cell>
  <Grid.Cell span={{ narrow: 4, medium: 4, wide: 3 }} start={{ narrow: 1, medium: 3, wide: 10 }} />
</Grid>\`,
        language: 'tsx'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`]})))()}export{O as n,S as t};