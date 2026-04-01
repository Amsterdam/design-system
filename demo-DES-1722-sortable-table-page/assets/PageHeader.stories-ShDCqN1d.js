import{n as e,r as t}from"./chunk-BneVvdWh.js";import{t as n}from"./jsx-runtime-BrayXyei.js";import{D as r,I as i,O as a,y as o}from"./index.esm-Dj7-3sXk.js";import{E as s,K as c,v as l,y as u}from"./iframe-IRU7POLu.js";import{S as d,t as f}from"./src-7L3Caia7.js";import{n as p,t as m}from"./ExampleLogo-Ba_1s4eF.js";var h,g,_=e((()=>{h=[[{href:`#`,label:`Kaart`},{href:`#`,label:`Panoramabeelden`},{href:`#`,label:`Tabellen`},{href:`#`,label:`Catalogus (Beta)`},{href:`#`,label:`Kaarten`},{href:`#`,label:`Datacatalogus`}],[{href:`#`,label:`Over de organisatie`},{href:`#`,label:`Over het dataplatform`}],[{href:`#`,label:`Help`},{href:`#`,label:`Contact`}]],g=[{href:`#`,label:`Stad`},{href:`#`,label:`Techniek`},{href:`#`,label:`Historie`},{href:`#`,label:`Duurzaamheid`}]})),v=t({Default:()=>S,WithCustomLogoLink:()=>D,WithCustomTexts:()=>O,WithDifferentBranding:()=>k,WithMovingLinks:()=>C,WithShortBrandName:()=>E,WithoutMenuButton:()=>T,WithoutMenuButtonOnWideWindow:()=>w,__namedExportsOrder:()=>A,default:()=>b}),y,b,x,S,C,w,T,E,D,O,k,A,j=e((()=>{c(),i(),f(),p(),_(),y=n(),b={title:`Components/Containers/Page Header`,component:d},x=(0,y.jsx)(l,{children:(0,y.jsx)(l.Cell,{span:`all`,children:(0,y.jsx)(s,{children:(0,y.jsx)(s.Link,{href:`#`,lang:`en`,children:`English`})})})}),S={args:{brandName:`Data Amsterdam`,children:(0,y.jsxs)(l,{children:[(0,y.jsx)(d.GridCellNarrowWindowOnly,{span:`all`,children:(0,y.jsx)(s,{children:(0,y.jsx)(s.Link,{href:`#`,lang:`en`,children:`English`})})}),(0,y.jsxs)(l.Cell,{span:4,children:[(0,y.jsx)(u,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Onderdelen`}),(0,y.jsx)(s,{children:h[0].map(({href:e,label:t})=>(0,y.jsx)(s.Link,{href:e,children:t},t))})]}),(0,y.jsxs)(l.Cell,{span:4,children:[(0,y.jsx)(u,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Over ons`}),(0,y.jsx)(s,{children:h[1].map(({href:e,label:t})=>(0,y.jsx)(s.Link,{href:e,children:t},t))})]}),(0,y.jsxs)(l.Cell,{span:4,children:[(0,y.jsx)(u,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Help`}),(0,y.jsx)(s,{children:h[2].map(({href:e,label:t})=>(0,y.jsx)(s.Link,{href:e,children:t},t))})]})]}),menuItems:[(0,y.jsx)(d.MenuLink,{href:`#`,lang:`en`,children:`English`},1),(0,y.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:a,children:`Zoeken`},2)]}},C={args:{children:(0,y.jsxs)(l,{children:[(0,y.jsx)(d.GridCellNarrowWindowOnly,{span:`all`,children:(0,y.jsx)(s,{children:(0,y.jsx)(s.Link,{href:`#`,lang:`en`,children:`English`})})}),(0,y.jsx)(l.Cell,{span:`all`,children:(0,y.jsx)(s,{children:(0,y.jsx)(s.Link,{href:`#`,children:`Regular collapsible menu link`})})})]}),menuItems:[(0,y.jsx)(d.MenuLink,{href:`#`,lang:`en`,children:`English`},1),(0,y.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:a,children:`Zoeken`},2)]}},w={args:{brandName:`Aan de Amsterdamse grachten`,children:(0,y.jsx)(l,{children:(0,y.jsx)(l.Cell,{span:`all`,children:(0,y.jsx)(s,{children:g.map(({href:e,label:t})=>(0,y.jsx)(s.Link,{href:e,children:t},t))})})}),menuItems:[...g.map(({href:e,label:t})=>(0,y.jsx)(d.MenuLink,{href:e,children:t},t)),(0,y.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:a,children:`Zoeken`},`Zoeken`)],noMenuButtonOnWideWindow:!0}},T={args:{brandName:`Mijn Amsterdam`,menuItems:(0,y.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:o,children:`Inloggen`})}},E={args:{brandName:`Amsterdam Design System`,brandNameShort:`ADS`,menuItems:(0,y.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:o,children:`Inloggen`})}},D={args:{logoAccessibleName:`Gemeentelijke Gezondheidsdienst Amsterdam logo`,logoBrand:`ggd-amsterdam`,logoLink:`https://www.ggd.amsterdam.nl/`,logoLinkTitle:`Naar de voorpagina van de GGD Amsterdam`}},O={args:{children:x,menuButtonText:`Alle onderwerpen`,menuButtonTextForHide:`Verberg onderwerpen menu`,menuButtonTextForShow:`Laat onderwerpen menu zien`,navigationLabel:`Navigatie`}},k={args:{brandName:`Voorbeeld`,children:x,logoBrand:{label:`Gemeente logo`,svg:m},menuButtonIcon:r,style:{"--ams-logo-block-size":`clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem)`,"--ams-logo-min-block-size":`1.125rem`}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Data Amsterdam',
    children: <Grid>
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
            {collapsibleMenuItems[0].map(({
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
            {collapsibleMenuItems[1].map(({
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
            {collapsibleMenuItems[2].map(({
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
      </PageHeader.MenuLink>, <PageHeader.MenuLink fixed href="#" icon={SearchIcon} key={2}>
        Zoeken
      </PageHeader.MenuLink>]
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Grid>
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
      </PageHeader.MenuLink>, <PageHeader.MenuLink fixed href="#" icon={SearchIcon} key={2}>
        Zoeken
      </PageHeader.MenuLink>]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Aan de Amsterdamse grachten',
    children: <Grid>
        <Grid.Cell span="all">
          <LinkList>
            {headerMenuItems.map(({
            href,
            label
          }) => <LinkList.Link href={href} key={label}>
                {label}
              </LinkList.Link>)}
          </LinkList>
        </Grid.Cell>
      </Grid>,
    menuItems: [...headerMenuItems.map(({
      href,
      label
    }) => <PageHeader.MenuLink href={href} key={label}>
          {label}
        </PageHeader.MenuLink>), <PageHeader.MenuLink fixed href="#" icon={SearchIcon} key="Zoeken">
        Zoeken
      </PageHeader.MenuLink>],
    noMenuButtonOnWideWindow: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Amsterdam Design System',
    brandNameShort: 'ADS',
    menuItems: <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    logoAccessibleName: 'Gemeentelijke Gezondheidsdienst Amsterdam logo',
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de voorpagina van de GGD Amsterdam'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: CollapsibleMenuWithOneLink,
    menuButtonText: 'Alle onderwerpen',
    menuButtonTextForHide: 'Verberg onderwerpen menu',
    menuButtonTextForShow: 'Laat onderwerpen menu zien',
    navigationLabel: 'Navigatie'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Voorbeeld',
    children: CollapsibleMenuWithOneLink,
    logoBrand: {
      label: 'Gemeente logo',
      svg: ExampleLogo
    },
    menuButtonIcon: PlusIcon,
    style: {
      '--ams-logo-block-size': 'clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem)',
      '--ams-logo-min-block-size': '1.125rem'
    } as CSSProperties
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithMovingLinks`,`WithoutMenuButtonOnWideWindow`,`WithoutMenuButton`,`WithShortBrandName`,`WithCustomLogoLink`,`WithCustomTexts`,`WithDifferentBranding`]}));j();export{S as Default,D as WithCustomLogoLink,O as WithCustomTexts,k as WithDifferentBranding,C as WithMovingLinks,E as WithShortBrandName,T as WithoutMenuButton,w as WithoutMenuButtonOnWideWindow,A as __namedExportsOrder,b as default,j as n,v as t};