import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{t as r}from"./jsx-runtime-ATHzeHXA.js";import{G as i,I as a,L as o,T as s}from"./index.esm-BKoBEYTi.js";import{O as c,Q as l,b as u,x as d}from"./index.esm-CsrjTdnj.js";import{n as f,r as p}from"./Logo-BuGJWxfB.js";import{n as m,t as h}from"./PageHeader-BFUjzeBw.js";import{i as g,t as _}from"./decorators-Bl_lpXos.js";import{d as v,p as y}from"./argTypes-CTYEle7b.js";import{n as b,t as x}from"./iconArgTypes-CoU157b8.js";import{n as S,t as C}from"./ExampleLogo--H79rocE.js";var w,T;function E(){return(E=e((()=>{w=[[{href:`#`,label:`Kaart`},{href:`#`,label:`Panoramabeelden`},{href:`#`,label:`Tabellen`},{href:`#`,label:`Catalogus (Beta)`},{href:`#`,label:`Kaarten`},{href:`#`,label:`Datacatalogus`}],[{href:`#`,label:`Over de organisatie`},{href:`#`,label:`Over het dataplatform`}],[{href:`#`,label:`Help`},{href:`#`,label:`Contact`}]],T=[{href:`#`,label:`Stad`},{href:`#`,label:`Techniek`},{href:`#`,label:`Historie`},{href:`#`,label:`Duurzaamheid`}]})))()}var D=t({Default:()=>M,WithCustomLogoLink:()=>L,WithCustomTexts:()=>R,WithDifferentBranding:()=>z,WithMovingLinks:()=>N,WithShortBrandName:()=>I,WithoutMenuButton:()=>F,WithoutMenuButtonOnWideWindow:()=>P,__namedExportsOrder:()=>B,default:()=>A}),O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{l(),i(),m(),f(),O=n(),v(),_(),b(),S(),E(),k=r(),A={title:`Components/Containers/Page Header`,component:h,argTypes:{defaultOpen:{control:!1},logoBrand:{control:{labels:{undefined:`amsterdam (default)`},type:`select`},options:[void 0,...p.filter(e=>e!==`amsterdam`)]},logoLinkComponent:y,menuButtonIcon:{...x(),control:{labels:{undefined:`default icon`},type:`select`}},menuItems:{control:!1},onOpenChange:{action:`openChange`},open:{control:!1}},decorators:[g],parameters:{layout:`fullscreen`},render:e=>{let[t,n]=(0,O.useState)(e.defaultOpen??!1);return(0,k.jsx)(h,{...e,onClick:e=>{e.target instanceof Element&&e.target.closest(`a`)&&(e.preventDefault(),n(!1))},onOpenChange:t=>{n(t),e.onOpenChange?.(t)},open:e.open??t})}},j=(0,k.jsx)(u,{children:(0,k.jsx)(u.Cell,{span:`all`,children:(0,k.jsx)(c,{children:(0,k.jsx)(c.Link,{href:`#`,lang:`en`,children:`English`})})})}),M={args:{brandName:`Data Amsterdam`,children:(0,k.jsxs)(u,{children:[(0,k.jsx)(h.GridCellNarrowWindowOnly,{span:`all`,children:(0,k.jsx)(c,{children:(0,k.jsx)(c.Link,{href:`#`,lang:`en`,children:`English`})})}),(0,k.jsxs)(u.Cell,{className:`ams-prose`,span:4,children:[(0,k.jsx)(d,{level:2,size:`level-3`,children:`Onderdelen`}),(0,k.jsx)(c,{children:w[0].map(({href:e,label:t})=>(0,k.jsx)(c.Link,{href:e,children:t},t))})]}),(0,k.jsxs)(u.Cell,{className:`ams-prose`,span:4,children:[(0,k.jsx)(d,{level:2,size:`level-3`,children:`Over ons`}),(0,k.jsx)(c,{children:w[1].map(({href:e,label:t})=>(0,k.jsx)(c.Link,{href:e,children:t},t))})]}),(0,k.jsxs)(u.Cell,{className:`ams-prose`,span:4,children:[(0,k.jsx)(d,{level:2,size:`level-3`,children:`Help`}),(0,k.jsx)(c,{children:w[2].map(({href:e,label:t})=>(0,k.jsx)(c.Link,{href:e,children:t},t))})]})]}),menuItems:[(0,k.jsx)(h.MenuLink,{href:`#`,lang:`en`,children:`English`},1),(0,k.jsx)(h.MenuLink,{fixed:!0,href:`#`,icon:o,children:`Zoeken`},2)]}},N={args:{children:(0,k.jsxs)(u,{children:[(0,k.jsx)(h.GridCellNarrowWindowOnly,{span:`all`,children:(0,k.jsx)(c,{children:(0,k.jsx)(c.Link,{href:`#`,lang:`en`,children:`English`})})}),(0,k.jsx)(u.Cell,{span:`all`,children:(0,k.jsx)(c,{children:(0,k.jsx)(c.Link,{href:`#`,children:`Regular collapsible menu link`})})})]}),menuItems:[(0,k.jsx)(h.MenuLink,{href:`#`,lang:`en`,children:`English`},1),(0,k.jsx)(h.MenuLink,{fixed:!0,href:`#`,icon:o,children:`Zoeken`},2)]}},P={args:{brandName:`Aan de Amsterdamse grachten`,children:(0,k.jsx)(u,{children:(0,k.jsx)(u.Cell,{span:`all`,children:(0,k.jsx)(c,{children:T.map(({href:e,label:t})=>(0,k.jsx)(c.Link,{href:e,children:t},t))})})}),menuItems:[...T.map(({href:e,label:t})=>(0,k.jsx)(h.MenuLink,{href:e,children:t},t)),(0,k.jsx)(h.MenuLink,{fixed:!0,href:`#`,icon:o,children:`Zoeken`},`Zoeken`)],noMenuButtonOnWideWindow:!0}},F={args:{brandName:`Mijn Amsterdam`,menuItems:(0,k.jsx)(h.MenuLink,{fixed:!0,href:`#`,icon:s,children:`Inloggen`})}},I={args:{brandName:`Amsterdam Design System`,brandNameShort:`ADS`,menuItems:(0,k.jsx)(h.MenuLink,{fixed:!0,href:`#`,icon:s,children:`Inloggen`})}},L={args:{logoAccessibleName:`Gemeentelijke Gezondheidsdienst Amsterdam logo`,logoBrand:`ggd-amsterdam`,logoLink:`https://www.ggd.amsterdam.nl/`,logoLinkTitle:`Naar de voorpagina van de GGD Amsterdam`}},R={args:{children:j,menuButtonText:`Alle onderwerpen`,menuButtonTextForHide:`Verberg onderwerpen menu`,menuButtonTextForShow:`Laat onderwerpen menu zien`,navigationLabel:`Navigatie`}},z={args:{brandName:`Voorbeeld`,children:j,logoBrand:{label:`Gemeente logo`,svg:C},menuButtonIcon:a,style:{"--ams-logo-block-size":`clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem)`,"--ams-logo-min-block-size":`1.125rem`}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
        {/* ams-prose sets the vertical rhythm between the heading and the links of each section. */}
        <Grid.Cell className="ams-prose" span={4}>
          <Heading level={2} size="level-3">
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
        <Grid.Cell className="ams-prose" span={4}>
          <Heading level={2} size="level-3">
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
        <Grid.Cell className="ams-prose" span={4}>
          <Heading level={2} size="level-3">
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Amsterdam Design System',
    brandNameShort: 'ADS',
    menuItems: <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    logoAccessibleName: 'Gemeentelijke Gezondheidsdienst Amsterdam logo',
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de voorpagina van de GGD Amsterdam'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    children: CollapsibleMenuWithOneLink,
    menuButtonText: 'Alle onderwerpen',
    menuButtonTextForHide: 'Verberg onderwerpen menu',
    menuButtonTextForShow: 'Laat onderwerpen menu zien',
    navigationLabel: 'Navigatie'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B=[`Default`,`WithMovingLinks`,`WithoutMenuButtonOnWideWindow`,`WithoutMenuButton`,`WithShortBrandName`,`WithCustomLogoLink`,`WithCustomTexts`,`WithDifferentBranding`]})))()}export{N as a,P as c,z as i,V as l,L as n,I as o,R as r,F as s,D as t,A as u};