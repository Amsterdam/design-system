import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{G as r,b as n,H as g}from"./index.esm-BlQyhDhc.js";import{P as i}from"./PageHeader-w0Zybdgk.js";const S={title:"Components/Containers/Page Header",component:i},h=[[{href:"#",label:"Kaart"},{href:"#",label:"Panoramabeelden"},{href:"#",label:"Tabellen"},{href:"#",label:"Catalogus (Beta)"},{href:"#",label:"Kaarten"},{href:"#",label:"Datacatalogus"}],[{href:"#",label:"Over de organisatie"},{href:"#",label:"Over het dataplatform"}],[{href:"#",label:"Help"},{href:"#",label:"Contact"}]],s={args:{brandName:"Data Amsterdam",children:e.jsxs(r,{paddingVertical:"large",children:[e.jsx(i.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(n,{children:e.jsx(n.Link,{href:"#",lang:"en",children:"English"})})}),e.jsxs(r.Cell,{span:4,children:[e.jsx(g,{className:"ams-mb-s",level:3,children:"Onderdelen"}),e.jsx(n,{children:h[0].map(({href:l,label:a})=>e.jsx(n.Link,{href:l,children:a},a))})]}),e.jsxs(r.Cell,{span:4,children:[e.jsx(g,{className:"ams-mb-s",level:3,children:"Over ons"}),e.jsx(n,{children:h[1].map(({href:l,label:a})=>e.jsx(n.Link,{href:l,children:a},a))})]}),e.jsxs(r.Cell,{span:4,children:[e.jsx(g,{className:"ams-mb-s",level:3,children:"Help"}),e.jsx(n,{children:h[2].map(({href:l,label:a})=>e.jsx(n.Link,{href:l,children:a},a))})]})]}),menuItems:[e.jsx(i.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(i.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},2)]}},d={args:{children:e.jsxs(r,{gapVertical:"large",paddingVertical:"large",children:[e.jsx(i.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(n,{children:e.jsx(n.Link,{href:"#",lang:"en",children:"English"})})}),e.jsx(r.Cell,{span:"all",children:e.jsx(n,{children:e.jsx(n.Link,{href:"#",children:"Regular collapsible menu link"})})})]}),menuItems:[e.jsx(i.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(i.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},2)]}},c=[{href:"#",label:"Stad"},{href:"#",label:"Techniek"},{href:"#",label:"Historie"},{href:"#",label:"Duurzaamheid"}],t={args:{brandName:"Aan de Amsterdamse grachten",children:e.jsx(r,{paddingVertical:"large",children:e.jsx(r.Cell,{span:"all",children:e.jsx(n,{children:c.map(({href:l,label:a})=>e.jsx(n.Link,{href:l,children:a},a))})})}),menuItems:[...c.map(({href:l,label:a})=>e.jsx(i.MenuLink,{href:l,children:a},a)),e.jsx(i.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},"Zoeken")],noMenuButtonOnWideWindow:!0}},o={args:{brandName:"Mijn Amsterdam",menuItems:e.jsx(i.MenuLink,{fixed:!0,href:"#",children:"Inloggen"})}},L={args:{logoAccessibleName:"Gemeentelijke Gezondheidsdienst Amsterdam logo",logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de voorpagina van de GGD Amsterdam"}},m={args:{children:e.jsx(r,{paddingVertical:"large",children:e.jsx(r.Cell,{span:"all",children:e.jsx(n,{children:e.jsx(n.Link,{href:"#",lang:"en",children:"English"})})})}),menuButtonText:"Alle onderwerpen",navigationLabel:"Navigatie"}};var k,u,p;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,x,b;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(x=d.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var j,G,M;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(M=(G=t.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var W,H,C;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: <PageHeader.MenuLink fixed href="#">
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...(C=(H=o.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var w,y,P;L.parameters={...L.parameters,docs:{...(w=L.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    logoAccessibleName: 'Gemeentelijke Gezondheidsdienst Amsterdam logo',
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de voorpagina van de GGD Amsterdam'
  }
}`,...(P=(y=L.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var N,O,v;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(v=(O=m.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};const A=["Default","WithMovingLinks","WithoutMenuButtonOnWideWindow","WithoutMenuButton","WithCustomLogoLink","WithCustomTexts"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithCustomLogoLink:L,WithCustomTexts:m,WithMovingLinks:d,WithoutMenuButton:o,WithoutMenuButtonOnWideWindow:t,__namedExportsOrder:A,default:S},Symbol.toStringTag,{value:"Module"}));export{V as P,d as W,t as a,o as b,L as c,m as d};
