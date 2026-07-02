import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{G as r,I as i,L as a,T as o}from"./index.esm-Cyk4q9Yv.js";import{E as s,J as c,v as l,y as u}from"./index.esm-C50F04_r.js";import{V as d,at as f,it as p,t as m}from"./src-R9BgDafm.js";import{d as h,l as g,s as _}from"./argTypes-J67b33k4.js";import{i as v,t as y}from"./decorators-DTCh5loV.js";import{n as b,t as x}from"./ExampleLogo-Cq0ulrHf.js";var S,C,w=t((()=>{S=[[{href:`#`,label:`Kaart`},{href:`#`,label:`Panoramabeelden`},{href:`#`,label:`Tabellen`},{href:`#`,label:`Catalogus (Beta)`},{href:`#`,label:`Kaarten`},{href:`#`,label:`Datacatalogus`}],[{href:`#`,label:`Over de organisatie`},{href:`#`,label:`Over het dataplatform`}],[{href:`#`,label:`Help`},{href:`#`,label:`Contact`}]],C=[{href:`#`,label:`Stad`},{href:`#`,label:`Techniek`},{href:`#`,label:`Historie`},{href:`#`,label:`Duurzaamheid`}]})),T=e({Default:()=>k,WithCustomLogoLink:()=>P,WithCustomTexts:()=>F,WithDifferentBranding:()=>I,WithMovingLinks:()=>A,WithShortBrandName:()=>N,WithoutMenuButton:()=>M,WithoutMenuButtonOnWideWindow:()=>j,__namedExportsOrder:()=>L,default:()=>D}),E,D,O,k,A,j,M,N,P,F,I,L,R=t((()=>{c(),r(),m(),p(),g(),y(),b(),w(),E=n(),D={title:`Components/Containers/Page Header`,component:d,argTypes:{logoBrand:{control:{labels:{undefined:`amsterdam (default)`},type:`select`},options:[void 0,...f]},logoLinkComponent:h,menuButtonIcon:{..._,control:{labels:{undefined:`default icon`},type:`select`}},menuItems:{control:!1}},decorators:[v]},O=(0,E.jsx)(l,{children:(0,E.jsx)(l.Cell,{span:`all`,children:(0,E.jsx)(s,{children:(0,E.jsx)(s.Link,{href:`#`,lang:`en`,children:`English`})})})}),k={args:{brandName:`Data Amsterdam`,children:(0,E.jsxs)(l,{children:[(0,E.jsx)(d.GridCellNarrowWindowOnly,{span:`all`,children:(0,E.jsx)(s,{children:(0,E.jsx)(s.Link,{href:`#`,lang:`en`,children:`English`})})}),(0,E.jsxs)(l.Cell,{span:4,children:[(0,E.jsx)(u,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Onderdelen`}),(0,E.jsx)(s,{children:S[0].map(({href:e,label:t})=>(0,E.jsx)(s.Link,{href:e,children:t},t))})]}),(0,E.jsxs)(l.Cell,{span:4,children:[(0,E.jsx)(u,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Over ons`}),(0,E.jsx)(s,{children:S[1].map(({href:e,label:t})=>(0,E.jsx)(s.Link,{href:e,children:t},t))})]}),(0,E.jsxs)(l.Cell,{span:4,children:[(0,E.jsx)(u,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Help`}),(0,E.jsx)(s,{children:S[2].map(({href:e,label:t})=>(0,E.jsx)(s.Link,{href:e,children:t},t))})]})]}),menuItems:[(0,E.jsx)(d.MenuLink,{href:`#`,lang:`en`,children:`English`},1),(0,E.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:a,children:`Zoeken`},2)]}},A={args:{children:(0,E.jsxs)(l,{children:[(0,E.jsx)(d.GridCellNarrowWindowOnly,{span:`all`,children:(0,E.jsx)(s,{children:(0,E.jsx)(s.Link,{href:`#`,lang:`en`,children:`English`})})}),(0,E.jsx)(l.Cell,{span:`all`,children:(0,E.jsx)(s,{children:(0,E.jsx)(s.Link,{href:`#`,children:`Regular collapsible menu link`})})})]}),menuItems:[(0,E.jsx)(d.MenuLink,{href:`#`,lang:`en`,children:`English`},1),(0,E.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:a,children:`Zoeken`},2)]}},j={args:{brandName:`Aan de Amsterdamse grachten`,children:(0,E.jsx)(l,{children:(0,E.jsx)(l.Cell,{span:`all`,children:(0,E.jsx)(s,{children:C.map(({href:e,label:t})=>(0,E.jsx)(s.Link,{href:e,children:t},t))})})}),menuItems:[...C.map(({href:e,label:t})=>(0,E.jsx)(d.MenuLink,{href:e,children:t},t)),(0,E.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:a,children:`Zoeken`},`Zoeken`)],noMenuButtonOnWideWindow:!0}},M={args:{brandName:`Mijn Amsterdam`,menuItems:(0,E.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:o,children:`Inloggen`})}},N={args:{brandName:`Amsterdam Design System`,brandNameShort:`ADS`,menuItems:(0,E.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:o,children:`Inloggen`})}},P={args:{logoAccessibleName:`Gemeentelijke Gezondheidsdienst Amsterdam logo`,logoBrand:`ggd-amsterdam`,logoLink:`https://www.ggd.amsterdam.nl/`,logoLinkTitle:`Naar de voorpagina van de GGD Amsterdam`}},F={args:{children:O,menuButtonText:`Alle onderwerpen`,menuButtonTextForHide:`Verberg onderwerpen menu`,menuButtonTextForShow:`Laat onderwerpen menu zien`,navigationLabel:`Navigatie`}},I={args:{brandName:`Voorbeeld`,children:O,logoBrand:{label:`Gemeente logo`,svg:x},menuButtonIcon:i,style:{"--ams-logo-block-size":`clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem)`,"--ams-logo-min-block-size":`1.125rem`}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Amsterdam Design System',
    brandNameShort: 'ADS',
    menuItems: <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    logoAccessibleName: 'Gemeentelijke Gezondheidsdienst Amsterdam logo',
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de voorpagina van de GGD Amsterdam'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    children: CollapsibleMenuWithOneLink,
    menuButtonText: 'Alle onderwerpen',
    menuButtonTextForHide: 'Verberg onderwerpen menu',
    menuButtonTextForShow: 'Laat onderwerpen menu zien',
    navigationLabel: 'Navigatie'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L=[`Default`,`WithMovingLinks`,`WithoutMenuButtonOnWideWindow`,`WithoutMenuButton`,`WithShortBrandName`,`WithCustomLogoLink`,`WithCustomTexts`,`WithDifferentBranding`]}));R();export{k as Default,P as WithCustomLogoLink,F as WithCustomTexts,I as WithDifferentBranding,A as WithMovingLinks,N as WithShortBrandName,M as WithoutMenuButton,j as WithoutMenuButtonOnWideWindow,L as __namedExportsOrder,D as default,R as n,T as t};