import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-BDsysHVl.js";import{t as i}from"./jsx-runtime-Bq1bXGty.js";import{G as a,I as o,L as s,T as c}from"./index.esm-AHCPMkhr.js";import{E as l,X as u,v as d,y as f}from"./index.esm-B4YE8xYu.js";import{W as p,ct as m,st as h,t as g}from"./src-CgfZkrsp.js";import{d as _,p as v}from"./argTypes-CQXDxDHP.js";import{n as y,t as b}from"./iconArgTypes-BcBExhD3.js";import{i as x,t as S}from"./decorators-i08pCiIh.js";import{n as C,t as w}from"./ExampleLogo-aHmE9Rxb.js";var T,E,D=t((()=>{T=[[{href:`#`,label:`Kaart`},{href:`#`,label:`Panoramabeelden`},{href:`#`,label:`Tabellen`},{href:`#`,label:`Catalogus (Beta)`},{href:`#`,label:`Kaarten`},{href:`#`,label:`Datacatalogus`}],[{href:`#`,label:`Over de organisatie`},{href:`#`,label:`Over het dataplatform`}],[{href:`#`,label:`Help`},{href:`#`,label:`Contact`}]],E=[{href:`#`,label:`Stad`},{href:`#`,label:`Techniek`},{href:`#`,label:`Historie`},{href:`#`,label:`Duurzaamheid`}]})),O=n({Default:()=>N,WithCustomLogoLink:()=>R,WithCustomTexts:()=>z,WithDifferentBranding:()=>B,WithMovingLinks:()=>P,WithShortBrandName:()=>L,WithoutMenuButton:()=>I,WithoutMenuButtonOnWideWindow:()=>F,__namedExportsOrder:()=>V,default:()=>j}),k,A,j,M,N,P,F,I,L,R,z,B,V,H=t((()=>{u(),a(),g(),h(),k=e(r()),_(),S(),y(),C(),D(),A=i(),j={title:`Components/Containers/Page Header`,component:p,argTypes:{defaultOpen:{control:!1},logoBrand:{control:{labels:{undefined:`amsterdam (default)`},type:`select`},options:[void 0,...m.filter(e=>e!==`amsterdam`)]},logoLinkComponent:v,menuButtonIcon:{...b(),control:{labels:{undefined:`default icon`},type:`select`}},menuItems:{control:!1},onOpenChange:{action:`openChange`},open:{control:!1}},decorators:[x],render:e=>{let[t,n]=(0,k.useState)(e.defaultOpen??!1);return(0,A.jsx)(p,{...e,onClick:e=>{e.target instanceof Element&&e.target.closest(`a`)&&(e.preventDefault(),n(!1))},onOpenChange:t=>{n(t),e.onOpenChange?.(t)},open:e.open??t})}},M=(0,A.jsx)(d,{children:(0,A.jsx)(d.Cell,{span:`all`,children:(0,A.jsx)(l,{children:(0,A.jsx)(l.Link,{href:`#`,lang:`en`,children:`English`})})})}),N={args:{brandName:`Data Amsterdam`,children:(0,A.jsxs)(d,{children:[(0,A.jsx)(p.GridCellNarrowWindowOnly,{span:`all`,children:(0,A.jsx)(l,{children:(0,A.jsx)(l.Link,{href:`#`,lang:`en`,children:`English`})})}),(0,A.jsxs)(d.Cell,{span:4,children:[(0,A.jsx)(f,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Onderdelen`}),(0,A.jsx)(l,{children:T[0].map(({href:e,label:t})=>(0,A.jsx)(l.Link,{href:e,children:t},t))})]}),(0,A.jsxs)(d.Cell,{span:4,children:[(0,A.jsx)(f,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Over ons`}),(0,A.jsx)(l,{children:T[1].map(({href:e,label:t})=>(0,A.jsx)(l.Link,{href:e,children:t},t))})]}),(0,A.jsxs)(d.Cell,{span:4,children:[(0,A.jsx)(f,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Help`}),(0,A.jsx)(l,{children:T[2].map(({href:e,label:t})=>(0,A.jsx)(l.Link,{href:e,children:t},t))})]})]}),menuItems:[(0,A.jsx)(p.MenuLink,{href:`#`,lang:`en`,children:`English`},1),(0,A.jsx)(p.MenuLink,{fixed:!0,href:`#`,icon:s,children:`Zoeken`},2)]}},P={args:{children:(0,A.jsxs)(d,{children:[(0,A.jsx)(p.GridCellNarrowWindowOnly,{span:`all`,children:(0,A.jsx)(l,{children:(0,A.jsx)(l.Link,{href:`#`,lang:`en`,children:`English`})})}),(0,A.jsx)(d.Cell,{span:`all`,children:(0,A.jsx)(l,{children:(0,A.jsx)(l.Link,{href:`#`,children:`Regular collapsible menu link`})})})]}),menuItems:[(0,A.jsx)(p.MenuLink,{href:`#`,lang:`en`,children:`English`},1),(0,A.jsx)(p.MenuLink,{fixed:!0,href:`#`,icon:s,children:`Zoeken`},2)]}},F={args:{brandName:`Aan de Amsterdamse grachten`,children:(0,A.jsx)(d,{children:(0,A.jsx)(d.Cell,{span:`all`,children:(0,A.jsx)(l,{children:E.map(({href:e,label:t})=>(0,A.jsx)(l.Link,{href:e,children:t},t))})})}),menuItems:[...E.map(({href:e,label:t})=>(0,A.jsx)(p.MenuLink,{href:e,children:t},t)),(0,A.jsx)(p.MenuLink,{fixed:!0,href:`#`,icon:s,children:`Zoeken`},`Zoeken`)],noMenuButtonOnWideWindow:!0}},I={args:{brandName:`Mijn Amsterdam`,menuItems:(0,A.jsx)(p.MenuLink,{fixed:!0,href:`#`,icon:c,children:`Inloggen`})}},L={args:{brandName:`Amsterdam Design System`,brandNameShort:`ADS`,menuItems:(0,A.jsx)(p.MenuLink,{fixed:!0,href:`#`,icon:c,children:`Inloggen`})}},R={args:{logoAccessibleName:`Gemeentelijke Gezondheidsdienst Amsterdam logo`,logoBrand:`ggd-amsterdam`,logoLink:`https://www.ggd.amsterdam.nl/`,logoLinkTitle:`Naar de voorpagina van de GGD Amsterdam`}},z={args:{children:M,menuButtonText:`Alle onderwerpen`,menuButtonTextForHide:`Verberg onderwerpen menu`,menuButtonTextForShow:`Laat onderwerpen menu zien`,navigationLabel:`Navigatie`}},B={args:{brandName:`Voorbeeld`,children:M,logoBrand:{label:`Gemeente logo`,svg:w},menuButtonIcon:o,style:{"--ams-logo-block-size":`clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem)`,"--ams-logo-min-block-size":`1.125rem`}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Amsterdam Design System',
    brandNameShort: 'ADS',
    menuItems: <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    logoAccessibleName: 'Gemeentelijke Gezondheidsdienst Amsterdam logo',
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de voorpagina van de GGD Amsterdam'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    children: CollapsibleMenuWithOneLink,
    menuButtonText: 'Alle onderwerpen',
    menuButtonTextForHide: 'Verberg onderwerpen menu',
    menuButtonTextForShow: 'Laat onderwerpen menu zien',
    navigationLabel: 'Navigatie'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`Default`,`WithMovingLinks`,`WithoutMenuButtonOnWideWindow`,`WithoutMenuButton`,`WithShortBrandName`,`WithCustomLogoLink`,`WithCustomTexts`,`WithDifferentBranding`]}));H();export{N as Default,R as WithCustomLogoLink,z as WithCustomTexts,B as WithDifferentBranding,P as WithMovingLinks,L as WithShortBrandName,I as WithoutMenuButton,F as WithoutMenuButtonOnWideWindow,V as __namedExportsOrder,j as default,H as n,O as t};