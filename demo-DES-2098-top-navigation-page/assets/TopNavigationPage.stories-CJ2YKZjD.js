import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{H as r,K as i}from"./index.esm-AVY4e8gu.js";import{B as a,C as o,I as s,L as c,Q as l,R as u,S as d,X as f,nt as p,o as m,q as h}from"./index.esm-DQWitwGc.js";import{n as g,r as _}from"./commonMeta-BwosJvj1.js";import{f as v,g as y}from"./exampleContent-DRei7MoO.js";var b,x,S,C,w;function T(){return(T=e((()=>{b=[{href:`#dashboard`,label:`Dashboard`,slug:`dashboard`},{href:`#projecten`,label:`Projecten`,slug:`projecten`},{href:`#rapportages`,label:`Rapportages`,slug:`rapportages`},{href:`#analyses`,label:`Analyses`,slug:`analyses`},{href:`#instellingen`,label:`Instellingen`,slug:`instellingen`}],x=[{href:`#vergunninghouders`,label:`Vergunninghouders`,pages:[{href:`#vergunninghouders-2024-2025`,label:`2024/2025`,slug:`2024-2025`},{href:`#vergunninghouders-2025-2026`,label:`2025/2026`,slug:`2025-2026`},{href:`#vergunninghouders-2026-2027`,label:`2026/2027`,slug:`2026-2027`}],slug:`vergunninghouders`},{href:`#maandrapportages`,label:`Maandrapportages`,slug:`maandrapportages`},{href:`#jaarrapportages`,label:`Jaarrapportages`,slug:`jaarrapportages`}],S=`rapportages`,C=`vergunninghouders`,w=`2026-2027`})))()}var E=t({Default:()=>L,WithSectionTabs:()=>R,__namedExportsOrder:()=>z,default:()=>O}),D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{if(p(),i(),y(),g(),T(),D=n(),O={title:`Pages/Internal/Top Navigation Page`,parameters:_(`An experimental internal template with first-level navigation in a bar below the Page Header, and deeper levels in a column beside the content.`)},k=b.find(({slug:e})=>e===S),!k)throw Error(`Current top navigation item was not found in topNavigationItems.`);if(A=x.find(({slug:e})=>e===C),!A)throw Error(`Current reporting section was not found in reportingSections.`);if(j=A.pages?.find(({slug:e})=>e===w),!j)throw Error(`Current reporting page was not found in the current reporting section.`);M=v(),N=v(),P=(0,D.jsx)(d,{paddingTop:`large`,children:(0,D.jsx)(d.Cell,{appearance:`flush`,span:`all`,children:(0,D.jsx)(f,{accessibleName:`Hoofdmenu`,children:(0,D.jsx)(f.List,{children:b.map(({href:e,label:t,slug:n})=>(0,D.jsx)(f.Link,{"aria-current":n===`rapportages`?`true`:void 0,href:e,children:t},n))})})})}),F=({children:e})=>(0,D.jsxs)(s,{children:[(0,D.jsx)(h,{href:`#inhoud`,children:`Direct naar inhoud`}),(0,D.jsx)(u,{brandName:`Naam van de applicatie`,brandNameShort:`NvdA`,menuItems:(0,D.jsx)(u.MenuLink,{fixed:!0,href:`#`,icon:r,children:`Inloggen`}),navigationLabel:`Account`}),e,(0,D.jsx)(c,{children:(0,D.jsxs)(c.Menu,{children:[(0,D.jsx)(c.MenuLink,{href:`#`,children:`E-mail je vraag of feedback`}),(0,D.jsx)(c.MenuLink,{href:`#`,children:`Bekijk help en uitleg`}),(0,D.jsx)(c.MenuLink,{href:`#`,children:`Overzicht releases`})]})})]}),I=(e,t,n)=>`<Page>
  <SkipLink href="#inhoud">Direct naar inhoud</SkipLink>
  <PageHeader
    brandName="Naam van de applicatie"
    menuItems={
      <PageHeader.MenuLink fixed href="#" icon={UserAccountIcon}>
        Inloggen
      </PageHeader.MenuLink>
    }
    navigationLabel="Account"
  />
  {/* The first level of navigation. aria-current="true" marks the section of the current page. */}
  <Grid paddingTop="large">
    <Grid.Cell appearance="flush" span="all">
      <TabNavigation accessibleName="Hoofdmenu">
        <TabNavigation.List>
          <TabNavigation.Link href="#">Dashboard</TabNavigation.Link>
          <TabNavigation.Link href="#">Projecten</TabNavigation.Link>
          <TabNavigation.Link aria-current="true" href="#">
            Rapportages
          </TabNavigation.Link>
          <TabNavigation.Link href="#">Analyses</TabNavigation.Link>
          <TabNavigation.Link href="#">Instellingen</TabNavigation.Link>
        </TabNavigation.List>
      </TabNavigation>
    </Grid.Cell>
  </Grid>
  <Grid paddingVertical="x-large">
${e}
    {/* main is a Subgrid: it keeps the columns of the page, and the navigation beside it stays outside. */}
    <Grid.Subgrid as="main" gapVertical="large" id="inhoud" span={{ narrow: 4, medium: 5, wide: 7 }}>
      <Grid.Cell appearance="transparent" className="ams-prose" span="all">
        <Breadcrumb>
${t}
        </Breadcrumb>
        <Heading level={1}>${n}</Heading>
      </Grid.Cell>
      {/* The content of the page, in Cells on the same columns. */}
    </Grid.Subgrid>
  </Grid>
  <PageFooter />
</Page>`,L={parameters:{chromatic:{modes:{"320px":{viewport:320}}},docs:{source:{code:I(`    {/* The levels below the bar, for the section of the current page. Its heading names this navigation. */}
    <Grid.Cell span={{ narrow: 4, medium: 3, wide: 4 }}>
      <TableOfContents collapsible heading="Rapportages">
        <TableOfContents.List>
          <TableOfContents.Link defaultExpanded href="#" label="Vergunninghouders">
            <TableOfContents.List>
              <TableOfContents.Link href="#" label="2024/2025" />
              <TableOfContents.Link href="#" label="2025/2026" />
              <TableOfContents.Link aria-current="page" href="#" label="2026/2027" />
            </TableOfContents.List>
          </TableOfContents.Link>
          <TableOfContents.Link href="#" label="Maandrapportages" />
          <TableOfContents.Link href="#" label="Jaarrapportages" />
        </TableOfContents.List>
      </TableOfContents>
    </Grid.Cell>`,`          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Rapportages</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Vergunninghouders</Breadcrumb.Link>`,`Vergunninghouders 2026/2027`),language:`tsx`}}},render:()=>(0,D.jsxs)(F,{children:[P,(0,D.jsxs)(d,{paddingVertical:`x-large`,children:[(0,D.jsx)(d.Cell,{span:{narrow:4,medium:3,wide:4},children:(0,D.jsx)(l,{collapsible:!0,heading:k.label,children:(0,D.jsx)(l.List,{children:x.map(({href:e,label:t,pages:n,slug:r})=>(0,D.jsx)(l.Link,{defaultExpanded:r===C,href:e,label:t,children:n&&(0,D.jsx)(l.List,{children:n.map(({href:e,label:t,slug:n})=>(0,D.jsx)(l.Link,{"aria-current":n===`2026-2027`?`page`:void 0,href:e,label:t},n))})},r))})})}),(0,D.jsxs)(d.Subgrid,{as:`main`,gapVertical:`large`,id:`inhoud`,span:{narrow:4,medium:5,wide:7},children:[(0,D.jsxs)(d.Cell,{appearance:`transparent`,className:`ams-prose`,span:`all`,children:[(0,D.jsxs)(m,{children:[(0,D.jsx)(m.Link,{href:`#home`,children:`Home`}),(0,D.jsx)(m.Link,{href:`#rapportages`,children:`Rapportages`}),(0,D.jsx)(m.Link,{href:A.href,children:A.label})]}),(0,D.jsxs)(o,{level:1,children:[A.label,` `,j.label]}),(0,D.jsx)(a,{size:`large`,children:M})]}),(0,D.jsx)(d.Cell,{span:{narrow:4,medium:4,wide:5},style:{blockSize:`10rem`}}),(0,D.jsx)(d.Cell,{span:{narrow:4,medium:4,wide:7},style:{blockSize:`10rem`}}),(0,D.jsx)(d.Cell,{span:{narrow:4,medium:5,wide:8},children:(0,D.jsx)(a,{children:N})}),(0,D.jsx)(d.Cell,{span:{narrow:4,medium:3,wide:4},style:{blockSize:`8rem`}})]})]})]})},R={parameters:{chromatic:{modes:{"320px":{viewport:320}}},docs:{source:{code:I(`    {/* One level below the bar. accessibleName tells this navigation apart from the bar. */}
    <Grid.Cell appearance="flush" span={{ narrow: 4, medium: 3, wide: 4 }}>
      <TabNavigation accessibleName="Paginanavigatie binnen Rapportages" orientation="vertical">
        <TabNavigation.List>
          <TabNavigation.Link aria-current="page" href="#">
            Vergunninghouders
          </TabNavigation.Link>
          <TabNavigation.Link href="#">Maandrapportages</TabNavigation.Link>
          <TabNavigation.Link href="#">Jaarrapportages</TabNavigation.Link>
        </TabNavigation.List>
      </TabNavigation>
    </Grid.Cell>`,`          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Rapportages</Breadcrumb.Link>`,`Vergunninghouders`),language:`tsx`}}},render:()=>(0,D.jsxs)(F,{children:[P,(0,D.jsxs)(d,{paddingVertical:`x-large`,children:[(0,D.jsx)(d.Cell,{appearance:`flush`,span:{narrow:4,medium:3,wide:4},children:(0,D.jsx)(f,{accessibleName:`Paginanavigatie binnen Rapportages`,orientation:`vertical`,children:(0,D.jsx)(f.List,{children:x.map(({href:e,label:t,slug:n})=>(0,D.jsx)(f.Link,{"aria-current":n===`vergunninghouders`?`page`:void 0,href:e,children:t},n))})})}),(0,D.jsxs)(d.Subgrid,{as:`main`,gapVertical:`large`,id:`inhoud`,span:{narrow:4,medium:5,wide:7},children:[(0,D.jsxs)(d.Cell,{appearance:`transparent`,className:`ams-prose`,span:`all`,children:[(0,D.jsxs)(m,{children:[(0,D.jsx)(m.Link,{href:`#home`,children:`Home`}),(0,D.jsx)(m.Link,{href:`#rapportages`,children:`Rapportages`})]}),(0,D.jsx)(o,{level:1,children:A.label}),(0,D.jsx)(a,{size:`large`,children:M})]}),(0,D.jsx)(d.Cell,{span:{narrow:4,medium:4,wide:5},style:{blockSize:`10rem`}}),(0,D.jsx)(d.Cell,{span:{narrow:4,medium:4,wide:7},style:{blockSize:`10rem`}}),(0,D.jsx)(d.Cell,{span:{narrow:4,medium:5,wide:8},children:(0,D.jsx)(a,{children:N})}),(0,D.jsx)(d.Cell,{span:{narrow:4,medium:3,wide:4},style:{blockSize:`8rem`}})]})]})]})},z=[`Default`,`WithSectionTabs`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      modes: {
        '320px': {
          viewport: 320
        }
      }
    },
    docs: {
      source: {
        code: sourceWith(\`    {/* The levels below the bar, for the section of the current page. Its heading names this navigation. */}
    <Grid.Cell span={{ narrow: 4, medium: 3, wide: 4 }}>
      <TableOfContents collapsible heading="Rapportages">
        <TableOfContents.List>
          <TableOfContents.Link defaultExpanded href="#" label="Vergunninghouders">
            <TableOfContents.List>
              <TableOfContents.Link href="#" label="2024/2025" />
              <TableOfContents.Link href="#" label="2025/2026" />
              <TableOfContents.Link aria-current="page" href="#" label="2026/2027" />
            </TableOfContents.List>
          </TableOfContents.Link>
          <TableOfContents.Link href="#" label="Maandrapportages" />
          <TableOfContents.Link href="#" label="Jaarrapportages" />
        </TableOfContents.List>
      </TableOfContents>
    </Grid.Cell>\`, \`          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Rapportages</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Vergunninghouders</Breadcrumb.Link>\`, 'Vergunninghouders 2026/2027'),
        language: 'tsx'
      }
    }
  },
  render: () => <InternalPageShell>
      {topBar}
      <Grid paddingVertical="x-large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 3,
        wide: 4
      }}>
          <TableOfContents collapsible heading={currentTopNavigationItem.label}>
            <TableOfContents.List>
              {reportingSections.map(({
              href,
              label,
              pages,
              slug
            }) => <TableOfContents.Link defaultExpanded={slug === currentReportingSectionSlug} href={href} key={slug} label={label}>
                  {pages && <TableOfContents.List>
                      {pages.map(({
                  href: pageHref,
                  label: pageLabel,
                  slug: pageSlug
                }) => <TableOfContents.Link aria-current={pageSlug === currentReportingPageSlug ? 'page' : undefined} href={pageHref} key={pageSlug} label={pageLabel} />)}
                    </TableOfContents.List>}
                </TableOfContents.Link>)}
            </TableOfContents.List>
          </TableOfContents>
        </Grid.Cell>
        <Grid.Subgrid as="main" gapVertical="large" id="inhoud" span={{
        narrow: 4,
        medium: 5,
        wide: 7
      }}>
          <Grid.Cell appearance="transparent" className="ams-prose" span="all">
            <Breadcrumb>
              <Breadcrumb.Link href="#home">Home</Breadcrumb.Link>
              <Breadcrumb.Link href="#rapportages">Rapportages</Breadcrumb.Link>
              <Breadcrumb.Link href={currentReportingSection.href}>{currentReportingSection.label}</Breadcrumb.Link>
            </Breadcrumb>
            <Heading level={1}>
              {currentReportingSection.label} {currentReportingPage.label}
            </Heading>
            <Paragraph size="large">{exampleParagraph1}</Paragraph>
          </Grid.Cell>
          <Grid.Cell span={{
          narrow: 4,
          medium: 4,
          wide: 5
        }} style={{
          blockSize: '10rem'
        }} />
          <Grid.Cell span={{
          narrow: 4,
          medium: 4,
          wide: 7
        }} style={{
          blockSize: '10rem'
        }} />
          <Grid.Cell span={{
          narrow: 4,
          medium: 5,
          wide: 8
        }}>
            <Paragraph>{exampleParagraph2}</Paragraph>
          </Grid.Cell>
          <Grid.Cell span={{
          narrow: 4,
          medium: 3,
          wide: 4
        }} style={{
          blockSize: '8rem'
        }} />
        </Grid.Subgrid>
      </Grid>
    </InternalPageShell>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      modes: {
        '320px': {
          viewport: 320
        }
      }
    },
    docs: {
      source: {
        code: sourceWith(\`    {/* One level below the bar. accessibleName tells this navigation apart from the bar. */}
    <Grid.Cell appearance="flush" span={{ narrow: 4, medium: 3, wide: 4 }}>
      <TabNavigation accessibleName="Paginanavigatie binnen Rapportages" orientation="vertical">
        <TabNavigation.List>
          <TabNavigation.Link aria-current="page" href="#">
            Vergunninghouders
          </TabNavigation.Link>
          <TabNavigation.Link href="#">Maandrapportages</TabNavigation.Link>
          <TabNavigation.Link href="#">Jaarrapportages</TabNavigation.Link>
        </TabNavigation.List>
      </TabNavigation>
    </Grid.Cell>\`, \`          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Rapportages</Breadcrumb.Link>\`, 'Vergunninghouders'),
        language: 'tsx'
      }
    }
  },
  render: () => <InternalPageShell>
      {topBar}
      <Grid paddingVertical="x-large">
        <Grid.Cell appearance="flush" span={{
        narrow: 4,
        medium: 3,
        wide: 4
      }}>
          <TabNavigation accessibleName="Paginanavigatie binnen Rapportages" orientation="vertical">
            <TabNavigation.List>
              {reportingSections.map(({
              href,
              label,
              slug
            }) => <TabNavigation.Link aria-current={slug === currentReportingSectionSlug ? 'page' : undefined} href={href} key={slug}>
                  {label}
                </TabNavigation.Link>)}
            </TabNavigation.List>
          </TabNavigation>
        </Grid.Cell>
        <Grid.Subgrid as="main" gapVertical="large" id="inhoud" span={{
        narrow: 4,
        medium: 5,
        wide: 7
      }}>
          <Grid.Cell appearance="transparent" className="ams-prose" span="all">
            <Breadcrumb>
              <Breadcrumb.Link href="#home">Home</Breadcrumb.Link>
              <Breadcrumb.Link href="#rapportages">Rapportages</Breadcrumb.Link>
            </Breadcrumb>
            <Heading level={1}>{currentReportingSection.label}</Heading>
            <Paragraph size="large">{exampleParagraph1}</Paragraph>
          </Grid.Cell>
          <Grid.Cell span={{
          narrow: 4,
          medium: 4,
          wide: 5
        }} style={{
          blockSize: '10rem'
        }} />
          <Grid.Cell span={{
          narrow: 4,
          medium: 4,
          wide: 7
        }} style={{
          blockSize: '10rem'
        }} />
          <Grid.Cell span={{
          narrow: 4,
          medium: 5,
          wide: 8
        }}>
            <Paragraph>{exampleParagraph2}</Paragraph>
          </Grid.Cell>
          <Grid.Cell span={{
          narrow: 4,
          medium: 3,
          wide: 4
        }} style={{
          blockSize: '8rem'
        }} />
        </Grid.Subgrid>
      </Grid>
    </InternalPageShell>
}`,...R.parameters?.docs?.source}}}})))()}export{B as n,E as t};