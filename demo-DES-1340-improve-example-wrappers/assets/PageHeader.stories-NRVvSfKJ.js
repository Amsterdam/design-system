import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./jsx-runtime-BqsN2jGA.js";import{G as r,I as i,L as a,T as o}from"./index.esm-Bo3N_Ggg.js";import{E as s,J as c,v as l,y as u}from"./index.esm-CCC_cZNy.js";import{B as d,t as f}from"./src-CArDBTAb.js";import{i as p,t as m}from"./decorators-9DFTOrJP.js";import{n as h,t as g}from"./ExampleLogo-C8opBhu2.js";var _,v,y=t((()=>{_=[[{href:`#`,label:`Kaart`},{href:`#`,label:`Panoramabeelden`},{href:`#`,label:`Tabellen`},{href:`#`,label:`Catalogus (Beta)`},{href:`#`,label:`Kaarten`},{href:`#`,label:`Datacatalogus`}],[{href:`#`,label:`Over de organisatie`},{href:`#`,label:`Over het dataplatform`}],[{href:`#`,label:`Help`},{href:`#`,label:`Contact`}]],v=[{href:`#`,label:`Stad`},{href:`#`,label:`Techniek`},{href:`#`,label:`Historie`},{href:`#`,label:`Duurzaamheid`}]})),b=e({Default:()=>w,WithCustomLogoLink:()=>k,WithCustomTexts:()=>A,WithDifferentBranding:()=>j,WithMovingLinks:()=>T,WithShortBrandName:()=>O,WithoutMenuButton:()=>D,WithoutMenuButtonOnWideWindow:()=>E,__namedExportsOrder:()=>M,default:()=>S}),x,S,C,w,T,E,D,O,k,A,j,M,N=t((()=>{c(),r(),f(),m(),h(),y(),x=n(),S={title:`Components/Containers/Page Header`,component:d,decorators:[p]},C=(0,x.jsx)(l,{children:(0,x.jsx)(l.Cell,{span:`all`,children:(0,x.jsx)(s,{children:(0,x.jsx)(s.Link,{href:`#`,lang:`en`,children:`English`})})})}),w={args:{brandName:`Data Amsterdam`,children:(0,x.jsxs)(l,{children:[(0,x.jsx)(d.GridCellNarrowWindowOnly,{span:`all`,children:(0,x.jsx)(s,{children:(0,x.jsx)(s.Link,{href:`#`,lang:`en`,children:`English`})})}),(0,x.jsxs)(l.Cell,{span:4,children:[(0,x.jsx)(u,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Onderdelen`}),(0,x.jsx)(s,{children:_[0].map(({href:e,label:t})=>(0,x.jsx)(s.Link,{href:e,children:t},t))})]}),(0,x.jsxs)(l.Cell,{span:4,children:[(0,x.jsx)(u,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Over ons`}),(0,x.jsx)(s,{children:_[1].map(({href:e,label:t})=>(0,x.jsx)(s.Link,{href:e,children:t},t))})]}),(0,x.jsxs)(l.Cell,{span:4,children:[(0,x.jsx)(u,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Help`}),(0,x.jsx)(s,{children:_[2].map(({href:e,label:t})=>(0,x.jsx)(s.Link,{href:e,children:t},t))})]})]}),menuItems:[(0,x.jsx)(d.MenuLink,{href:`#`,lang:`en`,children:`English`},1),(0,x.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:a,children:`Zoeken`},2)]}},T={args:{children:(0,x.jsxs)(l,{children:[(0,x.jsx)(d.GridCellNarrowWindowOnly,{span:`all`,children:(0,x.jsx)(s,{children:(0,x.jsx)(s.Link,{href:`#`,lang:`en`,children:`English`})})}),(0,x.jsx)(l.Cell,{span:`all`,children:(0,x.jsx)(s,{children:(0,x.jsx)(s.Link,{href:`#`,children:`Regular collapsible menu link`})})})]}),menuItems:[(0,x.jsx)(d.MenuLink,{href:`#`,lang:`en`,children:`English`},1),(0,x.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:a,children:`Zoeken`},2)]}},E={args:{brandName:`Aan de Amsterdamse grachten`,children:(0,x.jsx)(l,{children:(0,x.jsx)(l.Cell,{span:`all`,children:(0,x.jsx)(s,{children:v.map(({href:e,label:t})=>(0,x.jsx)(s.Link,{href:e,children:t},t))})})}),menuItems:[...v.map(({href:e,label:t})=>(0,x.jsx)(d.MenuLink,{href:e,children:t},t)),(0,x.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:a,children:`Zoeken`},`Zoeken`)],noMenuButtonOnWideWindow:!0}},D={args:{brandName:`Mijn Amsterdam`,menuItems:(0,x.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:o,children:`Inloggen`})}},O={args:{brandName:`Amsterdam Design System`,brandNameShort:`ADS`,menuItems:(0,x.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:o,children:`Inloggen`})}},k={args:{logoAccessibleName:`Gemeentelijke Gezondheidsdienst Amsterdam logo`,logoBrand:`ggd-amsterdam`,logoLink:`https://www.ggd.amsterdam.nl/`,logoLinkTitle:`Naar de voorpagina van de GGD Amsterdam`}},A={args:{children:C,menuButtonText:`Alle onderwerpen`,menuButtonTextForHide:`Verberg onderwerpen menu`,menuButtonTextForShow:`Laat onderwerpen menu zien`,navigationLabel:`Navigatie`}},j={args:{brandName:`Voorbeeld`,children:C,logoBrand:{label:`Gemeente logo`,svg:g},menuButtonIcon:i,style:{"--ams-logo-block-size":`clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem)`,"--ams-logo-min-block-size":`1.125rem`}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Amsterdam Design System',
    brandNameShort: 'ADS',
    menuItems: <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    logoAccessibleName: 'Gemeentelijke Gezondheidsdienst Amsterdam logo',
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de voorpagina van de GGD Amsterdam'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    children: CollapsibleMenuWithOneLink,
    menuButtonText: 'Alle onderwerpen',
    menuButtonTextForHide: 'Verberg onderwerpen menu',
    menuButtonTextForShow: 'Laat onderwerpen menu zien',
    navigationLabel: 'Navigatie'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`Default`,`WithMovingLinks`,`WithoutMenuButtonOnWideWindow`,`WithoutMenuButton`,`WithShortBrandName`,`WithCustomLogoLink`,`WithCustomTexts`,`WithDifferentBranding`]}));N();export{w as Default,k as WithCustomLogoLink,A as WithCustomTexts,j as WithDifferentBranding,T as WithMovingLinks,O as WithShortBrandName,D as WithoutMenuButton,E as WithoutMenuButtonOnWideWindow,M as __namedExportsOrder,S as default,N as n,b as t};