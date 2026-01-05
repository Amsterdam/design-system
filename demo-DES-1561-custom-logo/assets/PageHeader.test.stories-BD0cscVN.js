import{j as e,G as r,n as a,H as o,o as k,p as h}from"./iframe-CNuf34Hs.js";import{l as u,E as p}from"./ExampleLogo-B6gvpCqv.js";import{m as x,P as n}from"./PageHeader.stories-VWMNtB12.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsAfterBreakpoint-6zWmTE1P.js";import"./Grid-Bpynmn0a.js";import"./gridCellClasses-DKw8XbSK.js";import"./Icon-qsWOFVGV.js";const{expect:c}=__STORYBOOK_MODULE_TEST__,y={...x,title:"Components/Containers/Page Header"},m=[[{href:"#",label:"Kaart"},{href:"#",label:"Panoramabeelden"},{href:"#",label:"Tabellen"},{href:"#",label:"Catalogus (Beta)"},{href:"#",label:"Kaarten"},{href:"#",label:"Datacatalogus"}],[{href:"#",label:"Over de organisatie"},{href:"#",label:"Over het dataplatform"}],[{href:"#",label:"Help"},{href:"#",label:"Contact"}]],L=[{href:"#",label:"Stad"},{href:"#",label:"Techniek"},{href:"#",label:"Historie"},{href:"#",label:"Duurzaamheid"}],t={args:{brandName:"Data Amsterdam",children:e.jsx("p",{children:"test"}),menuItems:[e.jsx(n.MenuLink,{href:"#",lang:"en",children:"English"},"1"),e.jsx(n.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},"2")]},play:async({canvas:s,userEvent:i})=>{const d=(await s.findByTestId("interaction-test")).querySelector("button"),g=await s.findByTestId("children");d&&(await i.click(d),c(g).toBeVisible(),await i.click(d),c(g).not.toBeVisible())},render:s=>e.jsxs(e.Fragment,{children:[e.jsx(n,{"data-testid":"interaction-test",...s,children:e.jsx("ul",{children:e.jsx("li",{"data-testid":"children",children:"English"})})}),e.jsx(n,{...s,children:e.jsxs(r,{children:[e.jsx(n.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(a,{children:e.jsx(a.Link,{href:"#",lang:"en",children:"English"})})}),e.jsxs(r.Cell,{span:4,children:[e.jsx(o,{className:"ams-mb-s",level:2,size:"level-3",children:"Onderdelen"}),e.jsx(a,{children:m[0].map(({href:i,label:l})=>e.jsx(a.Link,{href:i,children:l},l))})]}),e.jsxs(r.Cell,{span:4,children:[e.jsx(o,{className:"ams-mb-s",level:2,size:"level-3",children:"Over ons"}),e.jsx(a,{children:m[1].map(({href:i,label:l})=>e.jsx(a.Link,{href:i,children:l},l))})]}),e.jsxs(r.Cell,{span:4,children:[e.jsx(o,{className:"ams-mb-s",level:2,size:"level-3",children:"Help"}),e.jsx(a,{children:m[2].map(({href:i,label:l})=>e.jsx(a.Link,{href:i,children:l},l))})]})]})}),e.jsx(n,{...s,children:e.jsxs(r,{children:[e.jsx(n.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(a,{children:e.jsx(a.Link,{href:"#",lang:"en",children:"English"})})}),e.jsx(r.Cell,{span:"all",children:e.jsx(a,{children:e.jsx(a.Link,{href:"#",children:"Regular collapsible menu link"})})})]})}),e.jsx(n,{brandName:"Aan de Amsterdamse grachten",menuItems:[...L.map(({href:i,label:l})=>e.jsx(n.MenuLink,{href:i,children:l},l)),e.jsx(n.MenuLink,{fixed:!0,href:"#",icon:k,children:"Zoeken"},"Zoeken")],noMenuButtonOnWideWindow:!0,children:e.jsx(r,{children:e.jsx(r.Cell,{span:"all",children:e.jsx(a,{children:L.map(({href:i,label:l})=>e.jsx(a.Link,{href:i,children:l},l))})})})}),e.jsx(n,{brandName:"Mijn Amsterdam",menuItems:e.jsx(n.MenuLink,{fixed:!0,href:"#",icon:h,children:"Inloggen"})}),e.jsx(n,{logoAccessibleName:"Gemeentelijke Gezondheidsdienst Amsterdam logo",logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de voorpagina van de GGD Amsterdam"}),e.jsx(n,{menuButtonText:"Alle onderwerpen",navigationLabel:"Navigatie",children:e.jsx(r,{children:e.jsx(r.Cell,{span:"all",children:e.jsx(a,{children:e.jsx(a.Link,{href:"#",lang:"en",children:"English"})})})})}),e.jsx(n,{brandName:"Voorbeeld",logoBrand:{label:"Gemeente logo",svg:p},style:{"--ams-logo-block-size":"clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem)","--ams-logo-min-block-size":"1.125rem"}}),u.map(i=>e.jsx(n,{brandName:"Voorbeeld",logoBrand:i,menuItems:e.jsx(n.MenuLink,{fixed:!0,href:"#",icon:h,children:"Inloggen"})},i))]}),tags:["!dev","!autodocs"]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Data Amsterdam',
    children: <p>test</p>,
    menuItems: [<PageHeader.MenuLink href="#" key="1" lang="en">
        English
      </PageHeader.MenuLink>, <PageHeader.MenuLink fixed href="#" key="2">
        Zoeken
      </PageHeader.MenuLink>]
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    const pageHeader = await canvas.findByTestId('interaction-test');
    const menuButton = pageHeader.querySelector('button');
    const exampleChildren = await canvas.findByTestId('children');
    if (!menuButton) return;
    await userEvent.click(menuButton);
    expect(exampleChildren).toBeVisible();
    await userEvent.click(menuButton);
    expect(exampleChildren).not.toBeVisible();
  },
  render: args => <>
      {/* Interaction test */}
      <PageHeader data-testid="interaction-test" {...args}>
        <ul>
          <li data-testid="children">English</li>
        </ul>
      </PageHeader>

      {/* Default */}
      <PageHeader {...args}>
        <Grid>
          <PageHeader.GridCellNarrowWindowOnly span="all">
            <LinkList>
              <LinkList.Link href="#" lang="en">
                English
              </LinkList.Link>
            </LinkList>
          </PageHeader.GridCellNarrowWindowOnly>
          <Grid.Cell span={4}>
            <Heading className="ams-mb-s" level={2} size="level-3">
              Onderdelen
            </Heading>
            <LinkList>
              {defaultStoryLinks[0].map(({
              href,
              label
            }) => <LinkList.Link href={href} key={label}>
                  {label}
                </LinkList.Link>)}
            </LinkList>
          </Grid.Cell>
          <Grid.Cell span={4}>
            <Heading className="ams-mb-s" level={2} size="level-3">
              Over ons
            </Heading>
            <LinkList>
              {defaultStoryLinks[1].map(({
              href,
              label
            }) => <LinkList.Link href={href} key={label}>
                  {label}
                </LinkList.Link>)}
            </LinkList>
          </Grid.Cell>
          <Grid.Cell span={4}>
            <Heading className="ams-mb-s" level={2} size="level-3">
              Help
            </Heading>
            <LinkList>
              {defaultStoryLinks[2].map(({
              href,
              label
            }) => <LinkList.Link href={href} key={label}>
                  {label}
                </LinkList.Link>)}
            </LinkList>
          </Grid.Cell>
        </Grid>
      </PageHeader>

      {/* With moving links */}
      <PageHeader {...args}>
        <Grid>
          <PageHeader.GridCellNarrowWindowOnly span="all">
            <LinkList>
              <LinkList.Link href="#" lang="en">
                English
              </LinkList.Link>
            </LinkList>
          </PageHeader.GridCellNarrowWindowOnly>
          <Grid.Cell span="all">
            <LinkList>
              <LinkList.Link href="#">Regular collapsible menu link</LinkList.Link>
            </LinkList>
          </Grid.Cell>
        </Grid>
      </PageHeader>

      {/* Without menu button on wide window */}
      <PageHeader brandName="Aan de Amsterdamse grachten" menuItems={[...WithoutMenuButtonOnWideWindowStoryLinks.map(({
      href,
      label
    }) => <PageHeader.MenuLink href={href} key={label}>
              {label}
            </PageHeader.MenuLink>), <PageHeader.MenuLink fixed href="#" icon={SearchIcon} key="Zoeken">
            Zoeken
          </PageHeader.MenuLink>]} noMenuButtonOnWideWindow>
        <Grid>
          <Grid.Cell span="all">
            <LinkList>
              {WithoutMenuButtonOnWideWindowStoryLinks.map(({
              href,
              label
            }) => <LinkList.Link href={href} key={label}>
                  {label}
                </LinkList.Link>)}
            </LinkList>
          </Grid.Cell>
        </Grid>
      </PageHeader>

      {/* Without menu button */}
      <PageHeader brandName="Mijn Amsterdam" menuItems={<PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
            Inloggen
          </PageHeader.MenuLink>} />

      {/* With custom logo link */}
      <PageHeader logoAccessibleName="Gemeentelijke Gezondheidsdienst Amsterdam logo" logoBrand="ggd-amsterdam" logoLink="https://www.ggd.amsterdam.nl/" logoLinkTitle="Naar de voorpagina van de GGD Amsterdam" />

      {/* With custom texts */}
      <PageHeader menuButtonText="Alle onderwerpen" navigationLabel="Navigatie">
        <Grid>
          <Grid.Cell span="all">
            <LinkList>
              <LinkList.Link href="#" lang="en">
                English
              </LinkList.Link>
            </LinkList>
          </Grid.Cell>
        </Grid>
      </PageHeader>

      {/* With custom logo */}
      <PageHeader brandName="Voorbeeld" logoBrand={{
      label: 'Gemeente logo',
      svg: ExampleLogo
    }} style={{
      '--ams-logo-block-size': 'clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem)',
      '--ams-logo-min-block-size': '1.125rem'
    } as CSSProperties} />

      {/* All logo brands */}
      {logoBrands.map(brand => <PageHeader brandName="Voorbeeld" key={brand} logoBrand={brand} menuItems={<PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
              Inloggen
            </PageHeader.MenuLink>} />)}
    </>,
  tags: ['!dev', '!autodocs']
}`,...t.parameters?.docs?.source}}};const C=["Test"];export{t as Test,C as __namedExportsOrder,y as default};
