import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{G as s,a as n,H as h}from"./index.esm-Dc4dH97g.js";import{P as r}from"./PageHeader-CihQ526n.js";const B={title:"Components/Containers/Page Header",component:r},g=[[{href:"#",label:"Kaart"},{href:"#",label:"Panoramabeelden"},{href:"#",label:"Tabellen"},{href:"#",label:"Catalogus (Beta)"},{href:"#",label:"Kaarten"},{href:"#",label:"Datacatalogus"}],[{href:"#",label:"Over de organisatie"},{href:"#",label:"Over het dataplatform"}],[{href:"#",label:"Help"},{href:"#",label:"Contact"}]],l={args:{brandName:"Data Amsterdam",children:e.jsxs(s,{paddingBottom:"2x-large",children:[e.jsx(r.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(n,{children:e.jsx(n.Link,{href:"#",lang:"en",children:"English"})})}),e.jsxs(s.Cell,{span:4,children:[e.jsx(h,{className:"ams-mb-s",level:3,children:"Onderdelen"}),e.jsx(n,{children:g[0].map(({href:i,label:a})=>e.jsx(n.Link,{href:i,children:a},a))})]}),e.jsxs(s.Cell,{span:4,children:[e.jsx(h,{className:"ams-mb-s",level:3,children:"Over ons"}),e.jsx(n,{children:g[1].map(({href:i,label:a})=>e.jsx(n.Link,{href:i,children:a},a))})]}),e.jsxs(s.Cell,{span:4,children:[e.jsx(h,{className:"ams-mb-s",level:3,children:"Help"}),e.jsx(n,{children:g[2].map(({href:i,label:a})=>e.jsx(n.Link,{href:i,children:a},a))})]})]}),menuItems:[e.jsx(r.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(r.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},2)]}},t={args:{children:e.jsxs(s,{gapVertical:"large",paddingBottom:"2x-large",children:[e.jsx(r.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(n,{children:e.jsx(n.Link,{href:"#",lang:"en",children:"English"})})}),e.jsx(s.Cell,{span:"all",children:e.jsx(n,{children:e.jsx(n.Link,{href:"#",children:"Regular collapsible menu link"})})})]}),menuItems:[e.jsx(r.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(r.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},2)]}},c=[{href:"#",label:"Stad"},{href:"#",label:"Techniek"},{href:"#",label:"Historie"},{href:"#",label:"Duurzaamheid"}],d={args:{brandName:"Aan de Amsterdamse grachten",children:e.jsx(n,{className:"ams-mb-l",children:c.map(({href:i,label:a})=>e.jsx(n.Link,{href:i,children:a},a))}),menuItems:[...c.map(({href:i,label:a})=>e.jsx(r.MenuLink,{href:i,children:a},a)),e.jsx(r.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},"Zoeken")],noMenuButtonOnWideWindow:!0}},o={args:{brandName:"Mijn Amsterdam",menuItems:e.jsx(r.MenuLink,{fixed:!0,href:"#",children:"Inloggen"})}},m={args:{logoAccessibleName:"Gemeentelijke Gezondheidsdienst Amsterdam logo",logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de voorpagina van de GGD Amsterdam"}},L={args:{children:e.jsx(s,{children:e.jsx(s.Cell,{span:"all",children:e.jsx(n,{children:e.jsx(n.Link,{href:"#",lang:"en",children:"English"})})})}),menuButtonText:"Alle onderwerpen",navigationLabel:"Navigatie"}};var k,u,p;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    brandName: 'Data Amsterdam',
    children: <Grid paddingBottom="2x-large">
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
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,x,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <Grid gapVertical="large" paddingBottom="2x-large">
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
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var j,M,W;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    brandName: 'Aan de Amsterdamse grachten',
    children: <LinkList className="ams-mb-l">
        {WithoutMenuButtonOnWideWindowStoryLinks.map(({
        href,
        label
      }) => <LinkList.Link href={href} key={label}>
            {label}
          </LinkList.Link>)}
      </LinkList>,
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
}`,...(W=(M=d.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var H,G,C;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: <PageHeader.MenuLink fixed href="#">
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...(C=(G=o.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};var w,N,y;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    logoAccessibleName: 'Gemeentelijke Gezondheidsdienst Amsterdam logo',
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de voorpagina van de GGD Amsterdam'
  }
}`,...(y=(N=m.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var P,O,v;L.parameters={...L.parameters,docs:{...(P=L.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: <Grid>
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
}`,...(v=(O=L.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};const S=["Default","WithMovingLinks","WithoutMenuButtonOnWideWindow","WithoutMenuButton","WithCustomLogoLink","WithCustomTexts"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:l,WithCustomLogoLink:m,WithCustomTexts:L,WithMovingLinks:t,WithoutMenuButton:o,WithoutMenuButtonOnWideWindow:d,__namedExportsOrder:S,default:B},Symbol.toStringTag,{value:"Module"}));export{T as P,t as W,d as a,o as b,m as c,L as d};
