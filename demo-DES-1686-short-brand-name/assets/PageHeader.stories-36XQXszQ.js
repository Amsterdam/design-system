import{r as k,j as e,c as o,ap as Y,ai as j,G as i,x as r,H as _,b as T}from"./iframe-Ccj2tZ1A.js";import{L as ee,E as ae}from"./ExampleLogo-DVyRcxCs.js";import{u as ne}from"./useViewportHasMinWidth-B-KW2bg-.js";import{G as re}from"./Grid-BcVJmjbm.js";import{I as B}from"./Icon-DjADVBM2.js";const A=k.forwardRef(({children:a,className:n,...t},l)=>e.jsx(re.Cell,{...t,className:o("ams-page-header__grid-cell-narrow-window-only",n),hidden:!0,ref:l,children:a}));A.displayName="PageHeader.GridCellNarrowWindowOnly";try{PageHeader.GridCellNarrowWindowOnly.displayName="PageHeader.GridCellNarrowWindowOnly",PageHeader.GridCellNarrowWindowOnly.__docgenInfo={description:"",displayName:"PageHeader.GridCellNarrowWindowOnly",props:{as:{defaultValue:null,description:"The HTML tag to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"aside"'},{value:'"div"'},{value:'"footer"'},{value:'"header"'},{value:'"nav"'},{value:'"section"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}const y=a=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("path",{className:"ams-page-header__menu-icon-top",d:"M1 5h22v2H1z"}),e.jsx("path",{className:"ams-page-header__menu-icon-middle",d:"M1 11h22v2H1z"}),e.jsx("path",{className:"ams-page-header__menu-icon-bottom",d:"M1 17h22v2H1z"})]});try{y.displayName="PageHeaderMenuIcon",y.__docgenInfo={description:"",displayName:"PageHeaderMenuIcon",props:{}}}catch{}const O=k.forwardRef(({children:a,className:n,fixed:t,icon:l,...x},v)=>e.jsx("li",{className:o("ams-page-header__menu-item",t&&"ams-page-header__menu-item--fixed"),children:e.jsxs("a",{...x,className:o("ams-page-header__menu-link",n),ref:v,children:[a,l&&e.jsx(B,{svg:l})]})}));O.displayName="PageHeader.MenuLink";try{PageHeader.MenuLink.displayName="PageHeader.MenuLink",PageHeader.MenuLink.__docgenInfo={description:"",displayName:"PageHeader.MenuLink",props:{fixed:{defaultValue:null,description:"Whether the link appears in the Page Header on narrow windows.",name:"fixed",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"An icon to display at the end of the label.",name:"icon",required:!1,type:{name:"Function | ReactNode"}}}}}catch{}const W=({brandName:a,brandNameShort:n,logoAccessibleName:t,logoBrand:l})=>e.jsxs(e.Fragment,{children:[e.jsx("span",{className:o(l==="amsterdam"&&(a||n)&&"ams-page-header__logo-container"),children:e.jsx(ee,{"aria-label":t,brand:l})}),n&&e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__brand-name-short",children:n}),a&&e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__brand-name",children:a})]}),S=k.forwardRef(({brandName:a,brandNameShort:n,children:t,className:l,logoAccessibleName:x,logoBrand:v="amsterdam",logoLink:z="/",logoLinkComponent:q=d=>e.jsx("a",{...d}),logoLinkTitle:E,menuButtonIcon:D,menuButtonText:F="Menu",menuButtonTextForHide:R="Verberg navigatiemenu",menuButtonTextForShow:Z="Laat navigatiemenu zien",menuItems:w,navigationLabel:$="Hoofdnavigatie",noMenuButtonOnWideWindow:M,...K},U)=>{const[d,H]=k.useState(!1),J=ne("wide"),b=!!t,C=b&&J,Q=q,P={brandName:a,brandNameShort:n,logoAccessibleName:x,logoBrand:v};k.useEffect(()=>{M&&C&&H(!1)},[C]);const X=()=>{const G=a||n;return`Ga naar de homepage${G?" van "+G:""}`};return e.jsxs("header",{...K,className:o("ams-page-header",l),ref:U,children:[e.jsxs(Q,{className:"ams-page-header__logo-link",href:z,children:[e.jsx(W,{...P}),e.jsxs("span",{className:"ams-visually-hidden",children:[" $",E??X()]})]}),(b||w)&&e.jsxs("nav",{"aria-labelledby":"primary-navigation",className:"ams-page-header__navigation",children:[e.jsx("h2",{"aria-hidden":!0,className:"ams-visually-hidden",id:"primary-navigation",children:$}),e.jsx("div",{"aria-hidden":!0,className:"ams-page-header__logo-link ams-page-header__logo-link--hidden",hidden:!0,children:e.jsx(W,{...P,logoAccessibleName:void 0})}),e.jsxs("ul",{className:"ams-page-header__menu",children:[w,b&&e.jsx("li",{className:o("ams-page-header__mega-menu-button-item",M&&"ams-page-header__mega-menu-button-item--hide-on-wide-window"),hidden:!0,children:e.jsxs("button",{"aria-controls":"ams-page-header-mega-menu","aria-expanded":d,className:"ams-page-header__mega-menu-button",onClick:()=>H(!d),type:"button",children:[e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__mega-menu-button-label",children:F}),e.jsx("span",{className:"ams-visually-hidden",children:d?R:Z}),e.jsx(B,{svg:D??e.jsx(y,{className:o("ams-page-header__menu-icon",d&&"ams-page-header__menu-icon--open")})})]})})]}),b&&e.jsx("div",{className:o("ams-page-header__mega-menu",!d&&"ams-page-header__mega-menu--closed"),id:"ams-page-header-mega-menu",children:t})]})]})});S.displayName="PageHeader";const s=Object.assign(S,{GridCellNarrowWindowOnly:A,MenuLink:O});try{s.displayName="PageHeader",s.__docgenInfo={description:"",displayName:"PageHeader",props:{brandName:{defaultValue:null,description:"The name of the application.",name:"brandName",required:!1,type:{name:"string"}},brandNameShort:{defaultValue:null,description:"A shorter form of the name of the application.",name:"brandNameShort",required:!1,type:{name:"string"}},logoAccessibleName:{defaultValue:null,description:"The accessible name of the logo.",name:"logoAccessibleName",required:!1,type:{name:"string"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:'"amsterdam" | "amsterdam-english" | "ggd-amsterdam" | "museum-weesp" | "stadsarchief" | "stadsbank-van-lening" | "vga-verzekeringen" | LogoBrandConfig'}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkComponent:{defaultValue:{value:"(props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />"},description:"The React component to use for the logo link.",name:"logoLinkComponent",required:!1,type:{name:"ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>"}},logoLinkTitle:{defaultValue:null,description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menuButtonIcon:{defaultValue:null,description:"An icon to display instead of the default icon.",name:"menuButtonIcon",required:!1,type:{name:"Function | ReactNode"}},menuButtonText:{defaultValue:{value:"Menu"},description:"The visible text for the menu button.",name:"menuButtonText",required:!1,type:{name:"string"}},menuButtonTextForHide:{defaultValue:{value:"Verberg navigatiemenu"},description:"The text for screen readers when the button hides the menu.",name:"menuButtonTextForHide",required:!1,type:{name:"string"}},menuButtonTextForShow:{defaultValue:{value:"Laat navigatiemenu zien"},description:"The text for screen readers when the button shows the menu.",name:"menuButtonTextForShow",required:!1,type:{name:"string"}},menuItems:{defaultValue:null,description:"A slot for the menu items. Use PageHeader.MenuLink here.",name:"menuItems",required:!1,type:{name:"ReactNode"}},navigationLabel:{defaultValue:{value:"Hoofdnavigatie"},description:"The accessible label for the navigation section.",name:"navigationLabel",required:!1,type:{name:"string"}},noMenuButtonOnWideWindow:{defaultValue:null,description:"Whether the menu button is visible on wide screens.",name:"noMenuButtonOnWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const N=[[{href:"#",label:"Kaart"},{href:"#",label:"Panoramabeelden"},{href:"#",label:"Tabellen"},{href:"#",label:"Catalogus (Beta)"},{href:"#",label:"Kaarten"},{href:"#",label:"Datacatalogus"}],[{href:"#",label:"Over de organisatie"},{href:"#",label:"Over het dataplatform"}],[{href:"#",label:"Help"},{href:"#",label:"Contact"}]],I=[{href:"#",label:"Stad"},{href:"#",label:"Techniek"},{href:"#",label:"Historie"},{href:"#",label:"Duurzaamheid"}],se={title:"Components/Containers/Page Header",component:s},V=e.jsx(i,{children:e.jsx(i.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})})}),m={args:{brandName:"Data Amsterdam",children:e.jsxs(i,{children:[e.jsx(s.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsxs(i.Cell,{span:4,children:[e.jsx(_,{className:"ams-mb-s",level:2,size:"level-3",children:"Onderdelen"}),e.jsx(r,{children:N[0].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(i.Cell,{span:4,children:[e.jsx(_,{className:"ams-mb-s",level:2,size:"level-3",children:"Over ons"}),e.jsx(r,{children:N[1].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(i.Cell,{span:4,children:[e.jsx(_,{className:"ams-mb-s",level:2,size:"level-3",children:"Help"}),e.jsx(r,{children:N[2].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]})]}),menuItems:[e.jsx(s.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(s.MenuLink,{fixed:!0,href:"#",icon:j,children:"Zoeken"},2)]}},u={args:{children:e.jsxs(i,{children:[e.jsx(s.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsx(i.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",children:"Regular collapsible menu link"})})})]}),menuItems:[e.jsx(s.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(s.MenuLink,{fixed:!0,href:"#",icon:j,children:"Zoeken"},2)]}},c={args:{brandName:"Aan de Amsterdamse grachten",children:e.jsx(i,{children:e.jsx(i.Cell,{span:"all",children:e.jsx(r,{children:I.map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})})}),menuItems:[...I.map(({href:a,label:n})=>e.jsx(s.MenuLink,{href:a,children:n},n)),e.jsx(s.MenuLink,{fixed:!0,href:"#",icon:j,children:"Zoeken"},"Zoeken")],noMenuButtonOnWideWindow:!0}},h={args:{brandName:"Mijn Amsterdam",menuItems:e.jsx(s.MenuLink,{fixed:!0,href:"#",icon:T,children:"Inloggen"})}},g={args:{brandName:"Amsterdam Design System",brandNameShort:"ADS",menuItems:e.jsx(s.MenuLink,{fixed:!0,href:"#",icon:T,children:"Inloggen"})}},p={args:{logoAccessibleName:"Gemeentelijke Gezondheidsdienst Amsterdam logo",logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de voorpagina van de GGD Amsterdam"}},f={args:{children:V,menuButtonText:"Alle onderwerpen",menuButtonTextForHide:"Verberg onderwerpen menu",menuButtonTextForShow:"Laat onderwerpen menu zien",navigationLabel:"Navigatie"}},L={args:{brandName:"Voorbeeld",children:V,logoBrand:{label:"Gemeente logo",svg:ae},menuButtonIcon:Y,style:{"--ams-logo-block-size":"clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem)","--ams-logo-min-block-size":"1.125rem"}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Amsterdam Design System',
    brandNameShort: 'ADS',
    menuItems: <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    logoAccessibleName: 'Gemeentelijke Gezondheidsdienst Amsterdam logo',
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de voorpagina van de GGD Amsterdam'
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: CollapsibleMenuWithOneLink,
    menuButtonText: 'Alle onderwerpen',
    menuButtonTextForHide: 'Verberg onderwerpen menu',
    menuButtonTextForShow: 'Laat onderwerpen menu zien',
    navigationLabel: 'Navigatie'
  }
}`,...f.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};const ie=["Default","WithMovingLinks","WithoutMenuButtonOnWideWindow","WithoutMenuButton","WithShortBrandName","WithCustomLogoLink","WithCustomTexts","WithDifferentBranding"],ue=Object.freeze(Object.defineProperty({__proto__:null,Default:m,WithCustomLogoLink:p,WithCustomTexts:f,WithDifferentBranding:L,WithMovingLinks:u,WithShortBrandName:g,WithoutMenuButton:h,WithoutMenuButtonOnWideWindow:c,__namedExportsOrder:ie,default:se},Symbol.toStringTag,{value:"Module"}));export{s as P,u as W,ue as a,c as b,h as c,g as d,p as e,f,L as g,se as m};
