import{r as m,j as e,c as d,G as l,$ as r,H as x}from"./iframe-Bj_Wf9T1.js";import{G as S}from"./Grid-CBmA4l1X.js";import{I as q}from"./Icon-DnxhkRcF.js";import{L as z}from"./Logo-BGDBPO_-.js";/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const R={medium:"36rem",wide:"68rem"},y=a=>{const[n,s]=m.useState(!1);return m.useLayoutEffect(()=>{if(a&&typeof window<"u"){const t=window.matchMedia(`(min-width: ${R[a]})`);t.matches!==n&&s(t.matches);const o=()=>s(t.matches);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)}},[n,a]),n};try{y.displayName="useIsAfterBreakpoint",y.__docgenInfo={description:"",displayName:"useIsAfterBreakpoint",props:{}}}catch{}const C=m.forwardRef(({children:a,className:n,...s},t)=>e.jsx(S.Cell,{...s,className:d("ams-page-header__grid-cell-narrow-window-only",n),ref:t,children:a}));C.displayName="PageHeader.GridCellNarrowWindowOnly";try{PageHeader.GridCellNarrowWindowOnly.displayName="PageHeader.GridCellNarrowWindowOnly",PageHeader.GridCellNarrowWindowOnly.__docgenInfo={description:"",displayName:"PageHeader.GridCellNarrowWindowOnly",props:{span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}},as:{defaultValue:null,description:"The HTML tag to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"aside"'},{value:'"div"'},{value:'"footer"'},{value:'"section"'},{value:'"header"'},{value:'"nav"'}]}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const b=a=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("line",{className:"ams-page-header__menu-icon-top",x1:"0",x2:"100%",y1:"50%",y2:"50%"}),e.jsx("line",{className:"ams-page-header__menu-icon-middle",x1:"0",x2:"100%",y1:"50%",y2:"50%"}),e.jsx("line",{className:"ams-page-header__menu-icon-bottom",x1:"0",x2:"100%",y1:"50%",y2:"50%"})]});try{b.displayName="PageHeaderMenuIcon",b.__docgenInfo={description:"",displayName:"PageHeaderMenuIcon",props:{}}}catch{}const W=m.forwardRef(({children:a,className:n,fixed:s,...t},o)=>e.jsx("li",{className:d("ams-page-header__menu-item",s&&"ams-page-header__menu-item--fixed"),children:e.jsx("a",{...t,className:d("ams-page-header__menu-link",n),ref:o,children:a})}));W.displayName="PageHeader.MenuLink";try{PageHeader.MenuLink.displayName="PageHeader.MenuLink",PageHeader.MenuLink.__docgenInfo={description:"",displayName:"PageHeader.MenuLink",props:{fixed:{defaultValue:null,description:"",name:"fixed",required:!1,type:{name:"boolean"}}}}}catch{}const M=({brandName:a,logoAccessibleName:n,logoBrand:s})=>e.jsxs(e.Fragment,{children:[e.jsx("span",{className:d(s==="amsterdam"&&!!a&&"ams-page-header__logo-container"),children:e.jsx(z,{"aria-label":n,brand:s})}),a&&e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__brand-name",children:a})]}),P=m.forwardRef(({brandName:a,children:n,className:s,logoAccessibleName:t,logoBrand:o="amsterdam",logoLink:O="/",logoLinkComponent:T=c=>e.jsx("a",{...c}),logoLinkTitle:A=`Ga naar de homepage${a?` van ${a}`:""}`,menuButtonText:v="Menu",menuItems:j,navigationLabel:I="Hoofdnavigatie",noMenuButtonOnWideWindow:w,...V},B)=>{const[c,N]=m.useState(!1),E=T,k=!!n,H=k&&y("wide");return m.useEffect(()=>{w&&H&&N(!1)},[H]),e.jsxs("header",{...V,className:d("ams-page-header",s),ref:B,children:[e.jsxs(E,{className:"ams-page-header__logo-link",href:O,children:[e.jsx(M,{brandName:a,logoAccessibleName:t,logoBrand:o}),e.jsx("span",{className:"ams-visually-hidden",children:` ${A}`})]}),(k||j)&&e.jsxs("nav",{"aria-labelledby":"primary-navigation",className:"ams-page-header__navigation",children:[e.jsx("h2",{"aria-hidden":!0,className:"ams-visually-hidden",id:"primary-navigation",children:I}),e.jsx("div",{"aria-hidden":!0,className:"ams-page-header__logo-link ams-page-header__logo-link--hidden",hidden:!0,children:e.jsx(M,{brandName:a,logoBrand:o})}),e.jsxs("ul",{className:"ams-page-header__menu",children:[j,k&&e.jsx("li",{className:d(w&&"ams-page-header__mega-menu-button-item--hide-on-wide-window"),children:e.jsxs("button",{"aria-controls":"ams-page-header-mega-menu","aria-expanded":c,className:"ams-page-header__mega-menu-button",onClick:()=>N(!c),type:"button",children:[e.jsx("span",{className:"ams-page-header__mega-menu-button-label",children:v}),e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__mega-menu-button-hidden-label",children:v}),e.jsx(q,{svg:e.jsx(b,{className:d("ams-page-header__menu-icon",c&&"ams-page-header__menu-icon--open")})})]})})]}),k&&e.jsx("div",{className:d("ams-page-header__mega-menu",!c&&"ams-page-header__mega-menu--closed"),id:"ams-page-header-mega-menu",children:n})]})]})});P.displayName="PageHeader";const i=Object.assign(P,{GridCellNarrowWindowOnly:C,MenuLink:W});try{i.displayName="PageHeader",i.__docgenInfo={description:"",displayName:"PageHeader",props:{brandName:{defaultValue:null,description:"The name of the application.",name:"brandName",required:!1,type:{name:"string"}},logoAccessibleName:{defaultValue:null,description:"The accessible name of the logo.",name:"logoAccessibleName",required:!1,type:{name:"string"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkComponent:{defaultValue:{value:"(props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />"},description:"The React component to use for the logo link.",name:"logoLinkComponent",required:!1,type:{name:"ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>"}},logoLinkTitle:{defaultValue:{value:"`Ga naar de homepage${brandName ? ` van ${brandName}` : ''}`"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menuButtonText:{defaultValue:{value:"Menu"},description:"The text for the menu button.",name:"menuButtonText",required:!1,type:{name:"string"}},menuItems:{defaultValue:null,description:"A slot for the menu items. Use PageHeader.MenuLink here.",name:"menuItems",required:!1,type:{name:"ReactNode"}},navigationLabel:{defaultValue:{value:"Hoofdnavigatie"},description:"The accessible label for the navigation section.",name:"navigationLabel",required:!1,type:{name:"string"}},noMenuButtonOnWideWindow:{defaultValue:null,description:"Whether the menu button is visible on wide screens.",name:"noMenuButtonOnWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const $={title:"Components/Containers/Page Header",component:i},_=[[{href:"#",label:"Kaart"},{href:"#",label:"Panoramabeelden"},{href:"#",label:"Tabellen"},{href:"#",label:"Catalogus (Beta)"},{href:"#",label:"Kaarten"},{href:"#",label:"Datacatalogus"}],[{href:"#",label:"Over de organisatie"},{href:"#",label:"Over het dataplatform"}],[{href:"#",label:"Help"},{href:"#",label:"Contact"}]],u={args:{brandName:"Data Amsterdam",children:e.jsxs(l,{paddingVertical:"large",children:[e.jsx(i.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsxs(l.Cell,{span:4,children:[e.jsx(x,{className:"ams-mb-s",level:2,size:"level-3",children:"Onderdelen"}),e.jsx(r,{children:_[0].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(l.Cell,{span:4,children:[e.jsx(x,{className:"ams-mb-s",level:2,size:"level-3",children:"Over ons"}),e.jsx(r,{children:_[1].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(l.Cell,{span:4,children:[e.jsx(x,{className:"ams-mb-s",level:2,size:"level-3",children:"Help"}),e.jsx(r,{children:_[2].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]})]}),menuItems:[e.jsx(i.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(i.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},2)]}},g={args:{children:e.jsxs(l,{gapVertical:"large",paddingVertical:"large",children:[e.jsx(i.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsx(l.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",children:"Regular collapsible menu link"})})})]}),menuItems:[e.jsx(i.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(i.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},2)]}},G=[{href:"#",label:"Stad"},{href:"#",label:"Techniek"},{href:"#",label:"Historie"},{href:"#",label:"Duurzaamheid"}],h={args:{brandName:"Aan de Amsterdamse grachten",children:e.jsx(l,{paddingVertical:"large",children:e.jsx(l.Cell,{span:"all",children:e.jsx(r,{children:G.map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})})}),menuItems:[...G.map(({href:a,label:n})=>e.jsx(i.MenuLink,{href:a,children:n},n)),e.jsx(i.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},"Zoeken")],noMenuButtonOnWideWindow:!0}},p={args:{brandName:"Mijn Amsterdam",menuItems:e.jsx(i.MenuLink,{fixed:!0,href:"#",children:"Inloggen"})}},L={args:{logoAccessibleName:"Gemeentelijke Gezondheidsdienst Amsterdam logo",logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de voorpagina van de GGD Amsterdam"}},f={args:{children:e.jsx(l,{paddingVertical:"large",children:e.jsx(l.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})})}),menuButtonText:"Alle onderwerpen",navigationLabel:"Navigatie"}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
      </PageHeader.MenuLink>, <PageHeader.MenuLink fixed href="#" key={2}>
        Zoeken
      </PageHeader.MenuLink>]
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: <PageHeader.MenuLink fixed href="#">
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...p.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    logoAccessibleName: 'Gemeentelijke Gezondheidsdienst Amsterdam logo',
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de voorpagina van de GGD Amsterdam'
  }
}`,...L.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const D=["Default","WithMovingLinks","WithoutMenuButtonOnWideWindow","WithoutMenuButton","WithCustomLogoLink","WithCustomTexts"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:u,WithCustomLogoLink:L,WithCustomTexts:f,WithMovingLinks:g,WithoutMenuButton:p,WithoutMenuButtonOnWideWindow:h,__namedExportsOrder:D,default:$},Symbol.toStringTag,{value:"Module"}));export{J as P,g as W,h as a,p as b,L as c,f as d};
