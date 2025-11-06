import{r as L,j as e,c as d,Z as v,G as l,$ as r,H as b,aa as q}from"./iframe-B0QkBFW6.js";import{u as z}from"./useIsAfterBreakpoint-DJ4X6sfI.js";import{G as R}from"./Grid-AhLsXjYw.js";import{I as W}from"./Icon-4KjYbDpA.js";import{L as Z}from"./Logo-AlQhpRgP.js";const P=L.forwardRef(({children:a,className:n,...s},t)=>e.jsx(R.Cell,{...s,className:d("ams-page-header__grid-cell-narrow-window-only",n),ref:t,children:a}));P.displayName="PageHeader.GridCellNarrowWindowOnly";try{PageHeader.GridCellNarrowWindowOnly.displayName="PageHeader.GridCellNarrowWindowOnly",PageHeader.GridCellNarrowWindowOnly.__docgenInfo={description:"",displayName:"PageHeader.GridCellNarrowWindowOnly",props:{as:{defaultValue:null,description:"The HTML tag to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"aside"'},{value:'"div"'},{value:'"footer"'},{value:'"header"'},{value:'"nav"'},{value:'"section"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const _=a=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("line",{className:"ams-page-header__menu-icon-top",x1:"0",x2:"100%",y1:"50%",y2:"50%"}),e.jsx("line",{className:"ams-page-header__menu-icon-middle",x1:"0",x2:"100%",y1:"50%",y2:"50%"}),e.jsx("line",{className:"ams-page-header__menu-icon-bottom",x1:"0",x2:"100%",y1:"50%",y2:"50%"})]});try{_.displayName="PageHeaderMenuIcon",_.__docgenInfo={description:"",displayName:"PageHeaderMenuIcon",props:{}}}catch{}const O=L.forwardRef(({children:a,className:n,fixed:s,icon:t,...k},x)=>e.jsx("li",{className:d("ams-page-header__menu-item",s&&"ams-page-header__menu-item--fixed"),children:e.jsxs("a",{...k,className:d("ams-page-header__menu-link",n),ref:x,children:[a,t&&e.jsx(W,{svg:t})]})}));O.displayName="PageHeader.MenuLink";try{PageHeader.MenuLink.displayName="PageHeader.MenuLink",PageHeader.MenuLink.__docgenInfo={description:"",displayName:"PageHeader.MenuLink",props:{fixed:{defaultValue:null,description:"Whether the link appears in the Page Header on narrow windows.",name:"fixed",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"An icon to display at the end of the label.",name:"icon",required:!1,type:{name:"Function | ReactNode"}}}}}catch{}const G=({brandName:a,logoAccessibleName:n,logoBrand:s})=>e.jsxs(e.Fragment,{children:[e.jsx("span",{className:d(s==="amsterdam"&&!!a&&"ams-page-header__logo-container"),children:e.jsx(Z,{"aria-label":n,brand:s})}),a&&e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__brand-name",children:a})]}),T=L.forwardRef(({brandName:a,children:n,className:s,logoAccessibleName:t,logoBrand:k="amsterdam",logoLink:x="/",logoLinkComponent:A=o=>e.jsx("a",{...o}),logoLinkTitle:I=`Ga naar de homepage${a?` van ${a}`:""}`,menuButtonText:j="Menu",menuItems:N,navigationLabel:V="Hoofdnavigatie",noMenuButtonOnWideWindow:w,...S},B)=>{const[o,H]=L.useState(!1),E=A,f=!!n,M=f&&z("wide");return L.useEffect(()=>{w&&M&&H(!1)},[M]),e.jsxs("header",{...S,className:d("ams-page-header",s),ref:B,children:[e.jsxs(E,{className:"ams-page-header__logo-link",href:x,children:[e.jsx(G,{brandName:a,logoAccessibleName:t,logoBrand:k}),e.jsx("span",{className:"ams-visually-hidden",children:` ${I}`})]}),(f||N)&&e.jsxs("nav",{"aria-labelledby":"primary-navigation",className:"ams-page-header__navigation",children:[e.jsx("h2",{"aria-hidden":!0,className:"ams-visually-hidden",id:"primary-navigation",children:V}),e.jsx("div",{"aria-hidden":!0,className:"ams-page-header__logo-link ams-page-header__logo-link--hidden",hidden:!0,children:e.jsx(G,{brandName:a,logoBrand:k})}),e.jsxs("ul",{className:"ams-page-header__menu",children:[N,f&&e.jsx("li",{className:d(w&&"ams-page-header__mega-menu-button-item--hide-on-wide-window"),children:e.jsxs("button",{"aria-controls":"ams-page-header-mega-menu","aria-expanded":o,className:"ams-page-header__mega-menu-button",onClick:()=>H(!o),type:"button",children:[e.jsx("span",{className:"ams-page-header__mega-menu-button-label",children:j}),e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__mega-menu-button-hidden-label",children:j}),e.jsx(W,{svg:e.jsx(_,{className:d("ams-page-header__menu-icon",o&&"ams-page-header__menu-icon--open")})})]})})]}),f&&e.jsx("div",{className:d("ams-page-header__mega-menu",!o&&"ams-page-header__mega-menu--closed"),id:"ams-page-header-mega-menu",children:n})]})]})});T.displayName="PageHeader";const i=Object.assign(T,{GridCellNarrowWindowOnly:P,MenuLink:O});try{i.displayName="PageHeader",i.__docgenInfo={description:"",displayName:"PageHeader",props:{brandName:{defaultValue:null,description:"The name of the application.",name:"brandName",required:!1,type:{name:"string"}},logoAccessibleName:{defaultValue:null,description:"The accessible name of the logo.",name:"logoAccessibleName",required:!1,type:{name:"string"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkComponent:{defaultValue:{value:"(props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />"},description:"The React component to use for the logo link.",name:"logoLinkComponent",required:!1,type:{name:"ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>"}},logoLinkTitle:{defaultValue:{value:"`Ga naar de homepage${brandName ? ` van ${brandName}` : ''}`"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menuButtonText:{defaultValue:{value:"Menu"},description:"The text for the menu button.",name:"menuButtonText",required:!1,type:{name:"string"}},menuItems:{defaultValue:null,description:"A slot for the menu items. Use PageHeader.MenuLink here.",name:"menuItems",required:!1,type:{name:"ReactNode"}},navigationLabel:{defaultValue:{value:"Hoofdnavigatie"},description:"The accessible label for the navigation section.",name:"navigationLabel",required:!1,type:{name:"string"}},noMenuButtonOnWideWindow:{defaultValue:null,description:"Whether the menu button is visible on wide screens.",name:"noMenuButtonOnWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const D={title:"Components/Containers/Page Header",component:i},y=[[{href:"#",label:"Kaart"},{href:"#",label:"Panoramabeelden"},{href:"#",label:"Tabellen"},{href:"#",label:"Catalogus (Beta)"},{href:"#",label:"Kaarten"},{href:"#",label:"Datacatalogus"}],[{href:"#",label:"Over de organisatie"},{href:"#",label:"Over het dataplatform"}],[{href:"#",label:"Help"},{href:"#",label:"Contact"}]],m={args:{brandName:"Data Amsterdam",children:e.jsxs(l,{paddingVertical:"large",children:[e.jsx(i.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsxs(l.Cell,{span:4,children:[e.jsx(b,{className:"ams-mb-s",level:2,size:"level-3",children:"Onderdelen"}),e.jsx(r,{children:y[0].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(l.Cell,{span:4,children:[e.jsx(b,{className:"ams-mb-s",level:2,size:"level-3",children:"Over ons"}),e.jsx(r,{children:y[1].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(l.Cell,{span:4,children:[e.jsx(b,{className:"ams-mb-s",level:2,size:"level-3",children:"Help"}),e.jsx(r,{children:y[2].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]})]}),menuItems:[e.jsx(i.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(i.MenuLink,{fixed:!0,href:"#",icon:v,children:"Zoeken"},2)]}},c={args:{children:e.jsxs(l,{gapVertical:"large",paddingVertical:"large",children:[e.jsx(i.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsx(l.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",children:"Regular collapsible menu link"})})})]}),menuItems:[e.jsx(i.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(i.MenuLink,{fixed:!0,href:"#",icon:v,children:"Zoeken"},2)]}},C=[{href:"#",label:"Stad"},{href:"#",label:"Techniek"},{href:"#",label:"Historie"},{href:"#",label:"Duurzaamheid"}],u={args:{brandName:"Aan de Amsterdamse grachten",children:e.jsx(l,{paddingVertical:"large",children:e.jsx(l.Cell,{span:"all",children:e.jsx(r,{children:C.map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})})}),menuItems:[...C.map(({href:a,label:n})=>e.jsx(i.MenuLink,{href:a,children:n},n)),e.jsx(i.MenuLink,{fixed:!0,href:"#",icon:v,children:"Zoeken"},"Zoeken")],noMenuButtonOnWideWindow:!0}},g={args:{brandName:"Mijn Amsterdam",menuItems:e.jsx(i.MenuLink,{fixed:!0,href:"#",icon:q,children:"Inloggen"})}},h={args:{logoAccessibleName:"Gemeentelijke Gezondheidsdienst Amsterdam logo",logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de voorpagina van de GGD Amsterdam"}},p={args:{children:e.jsx(l,{paddingVertical:"large",children:e.jsx(l.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})})}),menuButtonText:"Alle onderwerpen",navigationLabel:"Navigatie"}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
      </Grid>,
    menuItems: [<PageHeader.MenuLink href="#" key={1} lang="en">
        English
      </PageHeader.MenuLink>, <PageHeader.MenuLink fixed href="#" icon={SearchIcon} key={2}>
        Zoeken
      </PageHeader.MenuLink>]
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
      </PageHeader.MenuLink>, <PageHeader.MenuLink fixed href="#" icon={SearchIcon} key={2}>
        Zoeken
      </PageHeader.MenuLink>]
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
        </PageHeader.MenuLink>), <PageHeader.MenuLink fixed href="#" icon={SearchIcon} key="Zoeken">
        Zoeken
      </PageHeader.MenuLink>],
    noMenuButtonOnWideWindow: true
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    logoAccessibleName: 'Gemeentelijke Gezondheidsdienst Amsterdam logo',
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de voorpagina van de GGD Amsterdam'
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const $=["Default","WithMovingLinks","WithoutMenuButtonOnWideWindow","WithoutMenuButton","WithCustomLogoLink","WithCustomTexts"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:m,WithCustomLogoLink:h,WithCustomTexts:p,WithMovingLinks:c,WithoutMenuButton:g,WithoutMenuButtonOnWideWindow:u,__namedExportsOrder:$,default:D},Symbol.toStringTag,{value:"Module"}));export{i as P,c as W,X as a,u as b,g as c,h as d,p as e,D as m};
