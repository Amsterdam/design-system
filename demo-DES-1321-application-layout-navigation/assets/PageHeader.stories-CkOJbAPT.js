import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{G as r,b as n,H as g}from"./index.esm-DsOKWecX.js";import{P as i}from"./PageHeader-Cjx9ZPCH.js";const k={title:"Components/Containers/Page Header",component:i},h=[[{href:"#",label:"Kaart"},{href:"#",label:"Panoramabeelden"},{href:"#",label:"Tabellen"},{href:"#",label:"Catalogus (Beta)"},{href:"#",label:"Kaarten"},{href:"#",label:"Datacatalogus"}],[{href:"#",label:"Over de organisatie"},{href:"#",label:"Over het dataplatform"}],[{href:"#",label:"Help"},{href:"#",label:"Contact"}]],s={args:{brandName:"Data Amsterdam",children:e.jsxs(r,{paddingVertical:"large",children:[e.jsx(i.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(n,{children:e.jsx(n.Link,{href:"#",lang:"en",children:"English"})})}),e.jsxs(r.Cell,{span:4,children:[e.jsx(g,{className:"ams-mb-s",level:3,children:"Onderdelen"}),e.jsx(n,{children:h[0].map(({href:l,label:a})=>e.jsx(n.Link,{href:l,children:a},a))})]}),e.jsxs(r.Cell,{span:4,children:[e.jsx(g,{className:"ams-mb-s",level:3,children:"Over ons"}),e.jsx(n,{children:h[1].map(({href:l,label:a})=>e.jsx(n.Link,{href:l,children:a},a))})]}),e.jsxs(r.Cell,{span:4,children:[e.jsx(g,{className:"ams-mb-s",level:3,children:"Help"}),e.jsx(n,{children:h[2].map(({href:l,label:a})=>e.jsx(n.Link,{href:l,children:a},a))})]})]}),menuItems:[e.jsx(i.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(i.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},2)]}},d={args:{children:e.jsxs(r,{gapVertical:"large",paddingVertical:"large",children:[e.jsx(i.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(n,{children:e.jsx(n.Link,{href:"#",lang:"en",children:"English"})})}),e.jsx(r.Cell,{span:"all",children:e.jsx(n,{children:e.jsx(n.Link,{href:"#",children:"Regular collapsible menu link"})})})]}),menuItems:[e.jsx(i.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(i.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},2)]}},c=[{href:"#",label:"Stad"},{href:"#",label:"Techniek"},{href:"#",label:"Historie"},{href:"#",label:"Duurzaamheid"}],t={args:{brandName:"Aan de Amsterdamse grachten",children:e.jsx(r,{paddingVertical:"large",children:e.jsx(r.Cell,{span:"all",children:e.jsx(n,{children:c.map(({href:l,label:a})=>e.jsx(n.Link,{href:l,children:a},a))})})}),menuItems:[...c.map(({href:l,label:a})=>e.jsx(i.MenuLink,{href:l,children:a},a)),e.jsx(i.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},"Zoeken")],noMenuButtonOnWideWindow:!0}},o={args:{brandName:"Mijn Amsterdam",menuItems:e.jsx(i.MenuLink,{fixed:!0,href:"#",children:"Inloggen"})}},L={args:{logoAccessibleName:"Gemeentelijke Gezondheidsdienst Amsterdam logo",logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de voorpagina van de GGD Amsterdam"}},m={args:{children:e.jsx(r,{paddingVertical:"large",children:e.jsx(r.Cell,{span:"all",children:e.jsx(n,{children:e.jsx(n.Link,{href:"#",lang:"en",children:"English"})})})}),menuButtonText:"Alle onderwerpen",navigationLabel:"Navigatie"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Data Amsterdam',
    children: <Grid paddingVertical="large">
        <PageHeader.GridCellNarrowWindowOnly span="all">
          <LinkList>
            <LinkList.Link href="#" lang="en">
              English
            </LinkList.Link>
          </LinkList>
        </PageHeader.GridCellNarrowWindowOnly>
        <Grid.Cell span={4}>
          <Heading className="ams-mb-s" level={3}>
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
          <Heading className="ams-mb-s" level={3}>
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
          <Heading className="ams-mb-s" level={3}>
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
      </Grid>,
    menuItems: [<PageHeader.MenuLink href="#" key={1} lang="en">
        English
      </PageHeader.MenuLink>, <PageHeader.MenuLink fixed href="#" key={2}>
        Zoeken
      </PageHeader.MenuLink>]
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Grid gapVertical="large" paddingVertical="large">
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
      </Grid>,
    menuItems: [<PageHeader.MenuLink href="#" key={1} lang="en">
        English
      </PageHeader.MenuLink>, <PageHeader.MenuLink fixed href="#" key={2}>
        Zoeken
      </PageHeader.MenuLink>]
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Aan de Amsterdamse grachten',
    children: <Grid paddingVertical="large">
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
      </Grid>,
    menuItems: [...WithoutMenuButtonOnWideWindowStoryLinks.map(({
      href,
      label
    }) => <PageHeader.MenuLink href={href} key={label}>
          {label}
        </PageHeader.MenuLink>), <PageHeader.MenuLink fixed href="#" key="Zoeken">
        Zoeken
      </PageHeader.MenuLink>],
    noMenuButtonOnWideWindow: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: <PageHeader.MenuLink fixed href="#">
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...o.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    logoAccessibleName: 'Gemeentelijke Gezondheidsdienst Amsterdam logo',
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de voorpagina van de GGD Amsterdam'
  }
}`,...L.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Grid paddingVertical="large">
        <Grid.Cell span="all">
          <LinkList>
            <LinkList.Link href="#" lang="en">
              English
            </LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>,
    menuButtonText: 'Alle onderwerpen',
    navigationLabel: 'Navigatie'
  }
}`,...m.parameters?.docs?.source}}};const u=["Default","WithMovingLinks","WithoutMenuButtonOnWideWindow","WithoutMenuButton","WithCustomLogoLink","WithCustomTexts"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithCustomLogoLink:L,WithCustomTexts:m,WithMovingLinks:d,WithoutMenuButton:o,WithoutMenuButtonOnWideWindow:t,__namedExportsOrder:u,default:k},Symbol.toStringTag,{value:"Module"}));export{b as P,d as W,t as a,o as b,L as c,m as d};
