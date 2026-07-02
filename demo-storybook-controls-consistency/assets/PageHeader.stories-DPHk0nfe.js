import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{G as r,I as i,L as a,T as o}from"./index.esm-Cyk4q9Yv.js";import{E as s,J as c,v as l,y as u}from"./index.esm-DUCGtZaA.js";import{V as d,at as f,it as p,t as m}from"./src-DTFagzSm.js";import{d as h,p as g}from"./argTypes-CX0Ca9AC.js";import{n as _,t as v}from"./iconArgTypes-jfUYlggz.js";import{i as y,t as b}from"./decorators-CMi_3p9J.js";import{n as x,t as S}from"./ExampleLogo-Cq0ulrHf.js";var C,w,T=t((()=>{C=[[{href:`#`,label:`Kaart`},{href:`#`,label:`Panoramabeelden`},{href:`#`,label:`Tabellen`},{href:`#`,label:`Catalogus (Beta)`},{href:`#`,label:`Kaarten`},{href:`#`,label:`Datacatalogus`}],[{href:`#`,label:`Over de organisatie`},{href:`#`,label:`Over het dataplatform`}],[{href:`#`,label:`Help`},{href:`#`,label:`Contact`}]],w=[{href:`#`,label:`Stad`},{href:`#`,label:`Techniek`},{href:`#`,label:`Historie`},{href:`#`,label:`Duurzaamheid`}]})),E=e({Default:()=>A,WithCustomLogoLink:()=>F,WithCustomTexts:()=>I,WithDifferentBranding:()=>L,WithMovingLinks:()=>j,WithShortBrandName:()=>P,WithoutMenuButton:()=>N,WithoutMenuButtonOnWideWindow:()=>M,__namedExportsOrder:()=>R,default:()=>O}),D,O,k,A,j,M,N,P,F,I,L,R,z=t((()=>{c(),r(),m(),p(),h(),b(),_(),x(),T(),D=n(),O={title:`Components/Containers/Page Header`,component:d,argTypes:{logoBrand:{control:{labels:{undefined:`amsterdam (default)`},type:`select`},options:[void 0,...f.filter(e=>e!==`amsterdam`)]},logoLinkComponent:g,menuButtonIcon:{...v(),control:{labels:{undefined:`default icon`},type:`select`}},menuItems:{control:!1}},decorators:[y]},k=(0,D.jsx)(l,{children:(0,D.jsx)(l.Cell,{span:`all`,children:(0,D.jsx)(s,{children:(0,D.jsx)(s.Link,{href:`#`,lang:`en`,children:`English`})})})}),A={args:{brandName:`Data Amsterdam`,children:(0,D.jsxs)(l,{children:[(0,D.jsx)(d.GridCellNarrowWindowOnly,{span:`all`,children:(0,D.jsx)(s,{children:(0,D.jsx)(s.Link,{href:`#`,lang:`en`,children:`English`})})}),(0,D.jsxs)(l.Cell,{span:4,children:[(0,D.jsx)(u,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Onderdelen`}),(0,D.jsx)(s,{children:C[0].map(({href:e,label:t})=>(0,D.jsx)(s.Link,{href:e,children:t},t))})]}),(0,D.jsxs)(l.Cell,{span:4,children:[(0,D.jsx)(u,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Over ons`}),(0,D.jsx)(s,{children:C[1].map(({href:e,label:t})=>(0,D.jsx)(s.Link,{href:e,children:t},t))})]}),(0,D.jsxs)(l.Cell,{span:4,children:[(0,D.jsx)(u,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Help`}),(0,D.jsx)(s,{children:C[2].map(({href:e,label:t})=>(0,D.jsx)(s.Link,{href:e,children:t},t))})]})]}),menuItems:[(0,D.jsx)(d.MenuLink,{href:`#`,lang:`en`,children:`English`},1),(0,D.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:a,children:`Zoeken`},2)]}},j={args:{children:(0,D.jsxs)(l,{children:[(0,D.jsx)(d.GridCellNarrowWindowOnly,{span:`all`,children:(0,D.jsx)(s,{children:(0,D.jsx)(s.Link,{href:`#`,lang:`en`,children:`English`})})}),(0,D.jsx)(l.Cell,{span:`all`,children:(0,D.jsx)(s,{children:(0,D.jsx)(s.Link,{href:`#`,children:`Regular collapsible menu link`})})})]}),menuItems:[(0,D.jsx)(d.MenuLink,{href:`#`,lang:`en`,children:`English`},1),(0,D.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:a,children:`Zoeken`},2)]}},M={args:{brandName:`Aan de Amsterdamse grachten`,children:(0,D.jsx)(l,{children:(0,D.jsx)(l.Cell,{span:`all`,children:(0,D.jsx)(s,{children:w.map(({href:e,label:t})=>(0,D.jsx)(s.Link,{href:e,children:t},t))})})}),menuItems:[...w.map(({href:e,label:t})=>(0,D.jsx)(d.MenuLink,{href:e,children:t},t)),(0,D.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:a,children:`Zoeken`},`Zoeken`)],noMenuButtonOnWideWindow:!0}},N={args:{brandName:`Mijn Amsterdam`,menuItems:(0,D.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:o,children:`Inloggen`})}},P={args:{brandName:`Amsterdam Design System`,brandNameShort:`ADS`,menuItems:(0,D.jsx)(d.MenuLink,{fixed:!0,href:`#`,icon:o,children:`Inloggen`})}},F={args:{logoAccessibleName:`Gemeentelijke Gezondheidsdienst Amsterdam logo`,logoBrand:`ggd-amsterdam`,logoLink:`https://www.ggd.amsterdam.nl/`,logoLinkTitle:`Naar de voorpagina van de GGD Amsterdam`}},I={args:{children:k,menuButtonText:`Alle onderwerpen`,menuButtonTextForHide:`Verberg onderwerpen menu`,menuButtonTextForShow:`Laat onderwerpen menu zien`,navigationLabel:`Navigatie`}},L={args:{brandName:`Voorbeeld`,children:k,logoBrand:{label:`Gemeente logo`,svg:S},menuButtonIcon:i,style:{"--ams-logo-block-size":`clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem)`,"--ams-logo-min-block-size":`1.125rem`}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Amsterdam Design System',
    brandNameShort: 'ADS',
    menuItems: <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    logoAccessibleName: 'Gemeentelijke Gezondheidsdienst Amsterdam logo',
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de voorpagina van de GGD Amsterdam'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    children: CollapsibleMenuWithOneLink,
    menuButtonText: 'Alle onderwerpen',
    menuButtonTextForHide: 'Verberg onderwerpen menu',
    menuButtonTextForShow: 'Laat onderwerpen menu zien',
    navigationLabel: 'Navigatie'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`Default`,`WithMovingLinks`,`WithoutMenuButtonOnWideWindow`,`WithoutMenuButton`,`WithShortBrandName`,`WithCustomLogoLink`,`WithCustomTexts`,`WithDifferentBranding`]}));z();export{A as Default,F as WithCustomLogoLink,I as WithCustomTexts,L as WithDifferentBranding,j as WithMovingLinks,P as WithShortBrandName,N as WithoutMenuButton,M as WithoutMenuButtonOnWideWindow,R as __namedExportsOrder,O as default,z as n,E as t};