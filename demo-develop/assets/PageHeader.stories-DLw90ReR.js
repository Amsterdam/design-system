import{j as e,c as o,r as m,at as Y,ai as M,G as i,x as r,H as j,b as B}from"./iframe-B3GK5obm.js";import{L as ee,E as ae}from"./ExampleLogo-DE_kLLAw.js";import{u as ne}from"./useViewportHasMinWidth-Cb61n52W.js";import{G as re}from"./Grid-yaRv5aSR.js";import{I as S}from"./Icon-x-S_2Mog.js";const x=({brandNameFullOrShort:a,brandNameShort:n,logoAccessibleName:t,logoBrand:l})=>e.jsxs(e.Fragment,{children:[e.jsx("span",{className:o(l==="amsterdam"&&a&&"ams-page-header__logo-container"),children:e.jsx(ee,{"aria-label":t,brand:l})}),n&&e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__brand-name-short",children:n}),a&&e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__brand-name",children:a})]});try{x.displayName="LogoLinkContent",x.__docgenInfo={description:"",displayName:"LogoLinkContent",props:{brandNameFullOrShort:{defaultValue:null,description:"",name:"brandNameFullOrShort",required:!1,type:{name:"string"}},brandNameShort:{defaultValue:null,description:"",name:"brandNameShort",required:!1,type:{name:"string"}},logoAccessibleName:{defaultValue:null,description:"",name:"logoAccessibleName",required:!1,type:{name:"string"}},logoBrand:{defaultValue:null,description:"",name:"logoBrand",required:!0,type:{name:'"amsterdam" | "amsterdam-english" | "ggd-amsterdam" | "museum-weesp" | "stadsarchief" | "stadsbank-van-lening" | "vga-verzekeringen" | LogoBrandConfig | undefined'}}}}}catch{}const A=m.forwardRef(({children:a,className:n,...t},l)=>e.jsx(re.Cell,{...t,className:o("ams-page-header__grid-cell-narrow-window-only",n),hidden:!0,ref:l,children:a}));A.displayName="PageHeader.GridCellNarrowWindowOnly";try{PageHeader.GridCellNarrowWindowOnly.displayName="PageHeader.GridCellNarrowWindowOnly",PageHeader.GridCellNarrowWindowOnly.__docgenInfo={description:"",displayName:"PageHeader.GridCellNarrowWindowOnly",props:{as:{defaultValue:null,description:"The HTML tag to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"aside"'},{value:'"div"'},{value:'"footer"'},{value:'"header"'},{value:'"nav"'},{value:'"section"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}const H=a=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("path",{className:"ams-page-header__menu-icon-top",d:"M1 5h22v2H1z"}),e.jsx("path",{className:"ams-page-header__menu-icon-middle",d:"M1 11h22v2H1z"}),e.jsx("path",{className:"ams-page-header__menu-icon-bottom",d:"M1 17h22v2H1z"})]});try{H.displayName="PageHeaderMenuIcon",H.__docgenInfo={description:"",displayName:"PageHeaderMenuIcon",props:{}}}catch{}const O=m.forwardRef(({children:a,className:n,fixed:t,icon:l,...N},_)=>e.jsx("li",{className:o("ams-page-header__menu-item",t&&"ams-page-header__menu-item--fixed"),children:e.jsxs("a",{...N,className:o("ams-page-header__menu-link",n),ref:_,children:[a,l&&e.jsx(S,{svg:l})]})}));O.displayName="PageHeader.MenuLink";try{PageHeader.MenuLink.displayName="PageHeader.MenuLink",PageHeader.MenuLink.__docgenInfo={description:"",displayName:"PageHeader.MenuLink",props:{fixed:{defaultValue:null,description:"Whether the link appears in the Page Header on narrow windows.",name:"fixed",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"An icon to display at the end of the label.",name:"icon",required:!1,type:{name:"Function | ReactNode"}}}}}catch{}const V=m.forwardRef(({brandName:a,brandNameShort:n,children:t,className:l,logoAccessibleName:N,logoBrand:_="amsterdam",logoLink:z="/",logoLinkComponent:E=d=>e.jsx("a",{...d}),logoLinkTitle:D,menuButtonIcon:F,menuButtonText:R="Menu",menuButtonTextForHide:Z="Verberg navigatiemenu",menuButtonTextForShow:$="Laat navigatiemenu zien",menuItems:C,navigationLabel:K="Hoofdnavigatie",noMenuButtonOnWideWindow:v,...U},J)=>{const[d,P]=m.useState(!1),Q=ne("wide"),G=m.useId(),b=!!t,I=b&&Q,X=E,y=a||n,W={brandNameFullOrShort:y,brandNameShort:n,logoAccessibleName:N,logoBrand:_};return m.useEffect(()=>{v&&I&&P(!1)},[I,v]),e.jsxs("header",{...U,className:o("ams-page-header",l),ref:J,children:[e.jsxs(X,{className:"ams-page-header__logo-link",href:z,children:[e.jsx(x,{...W}),e.jsx("span",{className:"ams-visually-hidden",children:D??`Ga naar de homepage${y?" van "+y:""}`})]}),(b||C)&&e.jsxs("nav",{"aria-labelledby":G,className:"ams-page-header__navigation",children:[e.jsx("h2",{"aria-hidden":!0,className:"ams-visually-hidden",id:G,children:K}),e.jsx("div",{"aria-hidden":!0,className:"ams-page-header__logo-link ams-page-header__logo-link--hidden",hidden:!0,children:e.jsx(x,{...W,logoAccessibleName:void 0})}),e.jsxs("ul",{className:"ams-page-header__menu",children:[C,b&&e.jsx("li",{className:o("ams-page-header__mega-menu-button-item",v&&"ams-page-header__mega-menu-button-item--hide-on-wide-window"),hidden:!0,children:e.jsxs("button",{"aria-controls":"ams-page-header-mega-menu","aria-expanded":d,className:"ams-page-header__mega-menu-button",onClick:()=>P(!d),type:"button",children:[e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__mega-menu-button-label",children:R}),e.jsx("span",{className:"ams-visually-hidden",children:d?Z:$}),e.jsx(S,{svg:F??e.jsx(H,{className:o("ams-page-header__menu-icon",d&&"ams-page-header__menu-icon--open")})})]})})]}),b&&e.jsx("div",{className:o("ams-page-header__mega-menu",!d&&"ams-page-header__mega-menu--closed"),id:"ams-page-header-mega-menu",children:t})]})]})});V.displayName="PageHeader";const s=Object.assign(V,{GridCellNarrowWindowOnly:A,MenuLink:O});try{s.displayName="PageHeader",s.__docgenInfo={description:"",displayName:"PageHeader",props:{brandName:{defaultValue:null,description:"The name of the application.",name:"brandName",required:!1,type:{name:"string"}},brandNameShort:{defaultValue:null,description:"A shorter form of the name of the application.\nProvide this only together with a `brandName`.",name:"brandNameShort",required:!1,type:{name:"string"}},logoAccessibleName:{defaultValue:null,description:"The accessible name of the logo.",name:"logoAccessibleName",required:!1,type:{name:"string"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:'"amsterdam" | "amsterdam-english" | "ggd-amsterdam" | "museum-weesp" | "stadsarchief" | "stadsbank-van-lening" | "vga-verzekeringen" | LogoBrandConfig'}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkComponent:{defaultValue:{value:"(props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />"},description:"The React component to use for the logo link.",name:"logoLinkComponent",required:!1,type:{name:"ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>"}},logoLinkTitle:{defaultValue:null,description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menuButtonIcon:{defaultValue:null,description:"An icon to display instead of the default icon.",name:"menuButtonIcon",required:!1,type:{name:"Function | ReactNode"}},menuButtonText:{defaultValue:{value:"Menu"},description:"The visible text for the menu button.",name:"menuButtonText",required:!1,type:{name:"string"}},menuButtonTextForHide:{defaultValue:{value:"Verberg navigatiemenu"},description:"The text for screen readers when the button hides the menu.",name:"menuButtonTextForHide",required:!1,type:{name:"string"}},menuButtonTextForShow:{defaultValue:{value:"Laat navigatiemenu zien"},description:"The text for screen readers when the button shows the menu.",name:"menuButtonTextForShow",required:!1,type:{name:"string"}},menuItems:{defaultValue:null,description:"A slot for the menu items. Use PageHeader.MenuLink here.",name:"menuItems",required:!1,type:{name:"ReactNode"}},navigationLabel:{defaultValue:{value:"Hoofdnavigatie"},description:"The accessible label for the navigation section.",name:"navigationLabel",required:!1,type:{name:"string"}},noMenuButtonOnWideWindow:{defaultValue:null,description:"Whether the menu button is visible on wide screens.",name:"noMenuButtonOnWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const w=[[{href:"#",label:"Kaart"},{href:"#",label:"Panoramabeelden"},{href:"#",label:"Tabellen"},{href:"#",label:"Catalogus (Beta)"},{href:"#",label:"Kaarten"},{href:"#",label:"Datacatalogus"}],[{href:"#",label:"Over de organisatie"},{href:"#",label:"Over het dataplatform"}],[{href:"#",label:"Help"},{href:"#",label:"Contact"}]],T=[{href:"#",label:"Stad"},{href:"#",label:"Techniek"},{href:"#",label:"Historie"},{href:"#",label:"Duurzaamheid"}],se={title:"Components/Containers/Page Header",component:s},q=e.jsx(i,{children:e.jsx(i.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})})}),u={args:{brandName:"Data Amsterdam",children:e.jsxs(i,{children:[e.jsx(s.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsxs(i.Cell,{span:4,children:[e.jsx(j,{className:"ams-mb-s",level:2,size:"level-3",children:"Onderdelen"}),e.jsx(r,{children:w[0].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(i.Cell,{span:4,children:[e.jsx(j,{className:"ams-mb-s",level:2,size:"level-3",children:"Over ons"}),e.jsx(r,{children:w[1].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(i.Cell,{span:4,children:[e.jsx(j,{className:"ams-mb-s",level:2,size:"level-3",children:"Help"}),e.jsx(r,{children:w[2].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]})]}),menuItems:[e.jsx(s.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(s.MenuLink,{fixed:!0,href:"#",icon:M,children:"Zoeken"},2)]}},c={args:{children:e.jsxs(i,{children:[e.jsx(s.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsx(i.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",children:"Regular collapsible menu link"})})})]}),menuItems:[e.jsx(s.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(s.MenuLink,{fixed:!0,href:"#",icon:M,children:"Zoeken"},2)]}},h={args:{brandName:"Aan de Amsterdamse grachten",children:e.jsx(i,{children:e.jsx(i.Cell,{span:"all",children:e.jsx(r,{children:T.map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})})}),menuItems:[...T.map(({href:a,label:n})=>e.jsx(s.MenuLink,{href:a,children:n},n)),e.jsx(s.MenuLink,{fixed:!0,href:"#",icon:M,children:"Zoeken"},"Zoeken")],noMenuButtonOnWideWindow:!0}},g={args:{brandName:"Mijn Amsterdam",menuItems:e.jsx(s.MenuLink,{fixed:!0,href:"#",icon:B,children:"Inloggen"})}},p={args:{brandName:"Amsterdam Design System",brandNameShort:"ADS",menuItems:e.jsx(s.MenuLink,{fixed:!0,href:"#",icon:B,children:"Inloggen"})}},f={args:{logoAccessibleName:"Gemeentelijke Gezondheidsdienst Amsterdam logo",logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de voorpagina van de GGD Amsterdam"}},L={args:{children:q,menuButtonText:"Alle onderwerpen",menuButtonTextForHide:"Verberg onderwerpen menu",menuButtonTextForShow:"Laat onderwerpen menu zien",navigationLabel:"Navigatie"}},k={args:{brandName:"Voorbeeld",children:q,logoBrand:{label:"Gemeente logo",svg:ae},menuButtonIcon:Y,style:{"--ams-logo-block-size":"clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem)","--ams-logo-min-block-size":"1.125rem"}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Amsterdam Design System',
    brandNameShort: 'ADS',
    menuItems: <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    logoAccessibleName: 'Gemeentelijke Gezondheidsdienst Amsterdam logo',
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de voorpagina van de GGD Amsterdam'
  }
}`,...f.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    children: CollapsibleMenuWithOneLink,
    menuButtonText: 'Alle onderwerpen',
    menuButtonTextForHide: 'Verberg onderwerpen menu',
    menuButtonTextForShow: 'Laat onderwerpen menu zien',
    navigationLabel: 'Navigatie'
  }
}`,...L.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};const ie=["Default","WithMovingLinks","WithoutMenuButtonOnWideWindow","WithoutMenuButton","WithShortBrandName","WithCustomLogoLink","WithCustomTexts","WithDifferentBranding"],ue=Object.freeze(Object.defineProperty({__proto__:null,Default:u,WithCustomLogoLink:f,WithCustomTexts:L,WithDifferentBranding:k,WithMovingLinks:c,WithShortBrandName:p,WithoutMenuButton:g,WithoutMenuButtonOnWideWindow:h,__namedExportsOrder:ie,default:se},Symbol.toStringTag,{value:"Module"}));export{s as P,c as W,ue as a,h as b,g as c,p as d,f as e,L as f,k as g,se as m};
