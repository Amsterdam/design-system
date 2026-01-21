import{r as k,j as e,c as t,ag as Z,a3 as w,G as i,a4 as r,H as _,o as $}from"./iframe-3VTdCX99.js";import{L as K,E as U}from"./ExampleLogo-DXYgWVo3.js";import{u as J}from"./useIsAfterBreakpoint-BlbJ3E4G.js";import{G as Q}from"./Grid-yiWIPj7t.js";import{I}from"./Icon-D3YgQN-B.js";const T=k.forwardRef(({children:a,className:n,...l},d)=>e.jsx(Q.Cell,{...l,className:t("ams-page-header__grid-cell-narrow-window-only",n),hidden:!0,ref:d,children:a}));T.displayName="PageHeader.GridCellNarrowWindowOnly";try{PageHeader.GridCellNarrowWindowOnly.displayName="PageHeader.GridCellNarrowWindowOnly",PageHeader.GridCellNarrowWindowOnly.__docgenInfo={description:"",displayName:"PageHeader.GridCellNarrowWindowOnly",props:{as:{defaultValue:null,description:"The HTML tag to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"aside"'},{value:'"div"'},{value:'"footer"'},{value:'"header"'},{value:'"nav"'},{value:'"section"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}const y=a=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("path",{className:"ams-page-header__menu-icon-top",d:"M1 5h22v2H1z"}),e.jsx("path",{className:"ams-page-header__menu-icon-middle",d:"M1 11h22v2H1z"}),e.jsx("path",{className:"ams-page-header__menu-icon-bottom",d:"M1 17h22v2H1z"})]});try{y.displayName="PageHeaderMenuIcon",y.__docgenInfo={description:"",displayName:"PageHeaderMenuIcon",props:{}}}catch{}const B=k.forwardRef(({children:a,className:n,fixed:l,icon:d,...x},v)=>e.jsx("li",{className:t("ams-page-header__menu-item",l&&"ams-page-header__menu-item--fixed"),children:e.jsxs("a",{...x,className:t("ams-page-header__menu-link",n),ref:v,children:[a,d&&e.jsx(I,{svg:d})]})}));B.displayName="PageHeader.MenuLink";try{PageHeader.MenuLink.displayName="PageHeader.MenuLink",PageHeader.MenuLink.__docgenInfo={description:"",displayName:"PageHeader.MenuLink",props:{fixed:{defaultValue:null,description:"Whether the link appears in the Page Header on narrow windows.",name:"fixed",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"An icon to display at the end of the label.",name:"icon",required:!1,type:{name:"Function | ReactNode"}}}}}catch{}const P=({brandName:a,logoAccessibleName:n,logoBrand:l})=>e.jsxs(e.Fragment,{children:[e.jsx("span",{className:t(l==="amsterdam"&&!!a&&"ams-page-header__logo-container"),children:e.jsx(K,{"aria-label":n,brand:l})}),a&&e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__brand-name",children:a})]}),O=k.forwardRef(({brandName:a,children:n,className:l,logoAccessibleName:d,logoBrand:x="amsterdam",logoLink:v="/",logoLinkComponent:A=o=>e.jsx("a",{...o}),logoLinkTitle:S=`Ga naar de homepage${a?` van ${a}`:""}`,menuButtonIcon:V,menuButtonText:N="Menu",menuButtonTextForHide:z="Verberg navigatiemenu",menuButtonTextForShow:E="Laat navigatiemenu zien",menuItems:H,navigationLabel:q="Hoofdnavigatie",noMenuButtonOnWideWindow:M,...F},R)=>{const[o,C]=k.useState(!1),D=A,b=!!n,G=b&&J("wide");return k.useEffect(()=>{M&&G&&C(!1)},[G]),e.jsxs("header",{...F,className:t("ams-page-header",l),ref:R,children:[e.jsxs(D,{className:"ams-page-header__logo-link",href:v,children:[e.jsx(P,{brandName:a,logoAccessibleName:d,logoBrand:x}),e.jsx("span",{className:"ams-visually-hidden",children:` ${S}`})]}),(b||H)&&e.jsxs("nav",{"aria-labelledby":"primary-navigation",className:"ams-page-header__navigation",children:[e.jsx("h2",{"aria-hidden":!0,className:"ams-visually-hidden",id:"primary-navigation",children:q}),e.jsx("div",{"aria-hidden":!0,className:"ams-page-header__logo-link ams-page-header__logo-link--hidden",hidden:!0,children:e.jsx(P,{brandName:a,logoBrand:x})}),e.jsxs("ul",{className:"ams-page-header__menu",children:[H,b&&e.jsx("li",{className:t("ams-page-header__mega-menu-button-item",M&&"ams-page-header__mega-menu-button-item--hide-on-wide-window"),hidden:!0,children:e.jsxs("button",{"aria-controls":"ams-page-header-mega-menu","aria-expanded":o,className:"ams-page-header__mega-menu-button",onClick:()=>C(!o),type:"button",children:[e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__mega-menu-button-label",children:N}),e.jsx("span",{className:"ams-visually-hidden",children:o?z:E}),e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__mega-menu-button-hidden-label",children:N}),e.jsx(I,{svg:V??e.jsx(y,{className:t("ams-page-header__menu-icon",o&&"ams-page-header__menu-icon--open")})})]})})]}),b&&e.jsx("div",{className:t("ams-page-header__mega-menu",!o&&"ams-page-header__mega-menu--closed"),id:"ams-page-header-mega-menu",children:n})]})]})});O.displayName="PageHeader";const s=Object.assign(O,{GridCellNarrowWindowOnly:T,MenuLink:B});try{s.displayName="PageHeader",s.__docgenInfo={description:"",displayName:"PageHeader",props:{brandName:{defaultValue:null,description:"The name of the application.",name:"brandName",required:!1,type:{name:"string"}},logoAccessibleName:{defaultValue:null,description:"The accessible name of the logo.",name:"logoAccessibleName",required:!1,type:{name:"string"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:'"amsterdam" | "ggd-amsterdam" | "museum-weesp" | "stadsarchief" | "stadsbank-van-lening" | "vga-verzekeringen" | LogoBrandConfig'}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkComponent:{defaultValue:{value:"(props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />"},description:"The React component to use for the logo link.",name:"logoLinkComponent",required:!1,type:{name:"ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>"}},logoLinkTitle:{defaultValue:{value:"`Ga naar de homepage${brandName ? ` van ${brandName}` : ''}`"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menuButtonIcon:{defaultValue:null,description:"An icon to display instead of the default icon.",name:"menuButtonIcon",required:!1,type:{name:"Function | ReactNode"}},menuButtonText:{defaultValue:{value:"Menu"},description:"The visible text for the menu button.",name:"menuButtonText",required:!1,type:{name:"string"}},menuButtonTextForHide:{defaultValue:{value:"Verberg navigatiemenu"},description:"The text for screen readers when the button hides the menu.",name:"menuButtonTextForHide",required:!1,type:{name:"string"}},menuButtonTextForShow:{defaultValue:{value:"Laat navigatiemenu zien"},description:"The text for screen readers when the button shows the menu.",name:"menuButtonTextForShow",required:!1,type:{name:"string"}},menuItems:{defaultValue:null,description:"A slot for the menu items. Use PageHeader.MenuLink here.",name:"menuItems",required:!1,type:{name:"ReactNode"}},navigationLabel:{defaultValue:{value:"Hoofdnavigatie"},description:"The accessible label for the navigation section.",name:"navigationLabel",required:!1,type:{name:"string"}},noMenuButtonOnWideWindow:{defaultValue:null,description:"Whether the menu button is visible on wide screens.",name:"noMenuButtonOnWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const j=[[{href:"#",label:"Kaart"},{href:"#",label:"Panoramabeelden"},{href:"#",label:"Tabellen"},{href:"#",label:"Catalogus (Beta)"},{href:"#",label:"Kaarten"},{href:"#",label:"Datacatalogus"}],[{href:"#",label:"Over de organisatie"},{href:"#",label:"Over het dataplatform"}],[{href:"#",label:"Help"},{href:"#",label:"Contact"}]],W=[{href:"#",label:"Stad"},{href:"#",label:"Techniek"},{href:"#",label:"Historie"},{href:"#",label:"Duurzaamheid"}],X={title:"Components/Containers/Page Header",component:s},m={args:{brandName:"Data Amsterdam",children:e.jsxs(i,{children:[e.jsx(s.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsxs(i.Cell,{span:4,children:[e.jsx(_,{className:"ams-mb-s",level:2,size:"level-3",children:"Onderdelen"}),e.jsx(r,{children:j[0].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(i.Cell,{span:4,children:[e.jsx(_,{className:"ams-mb-s",level:2,size:"level-3",children:"Over ons"}),e.jsx(r,{children:j[1].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(i.Cell,{span:4,children:[e.jsx(_,{className:"ams-mb-s",level:2,size:"level-3",children:"Help"}),e.jsx(r,{children:j[2].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]})]}),menuItems:[e.jsx(s.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(s.MenuLink,{fixed:!0,href:"#",icon:w,children:"Zoeken"},2)]}},u={args:{children:e.jsxs(i,{children:[e.jsx(s.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsx(i.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",children:"Regular collapsible menu link"})})})]}),menuItems:[e.jsx(s.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(s.MenuLink,{fixed:!0,href:"#",icon:w,children:"Zoeken"},2)]}},c={args:{brandName:"Aan de Amsterdamse grachten",children:e.jsx(i,{children:e.jsx(i.Cell,{span:"all",children:e.jsx(r,{children:W.map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})})}),menuItems:[...W.map(({href:a,label:n})=>e.jsx(s.MenuLink,{href:a,children:n},n)),e.jsx(s.MenuLink,{fixed:!0,href:"#",icon:w,children:"Zoeken"},"Zoeken")],noMenuButtonOnWideWindow:!0}},h={args:{brandName:"Mijn Amsterdam",menuItems:e.jsx(s.MenuLink,{fixed:!0,href:"#",icon:$,children:"Inloggen"})}},g={args:{logoAccessibleName:"Gemeentelijke Gezondheidsdienst Amsterdam logo",logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de voorpagina van de GGD Amsterdam"}},p={args:{children:e.jsx(i,{children:e.jsx(i.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})})}),menuButtonText:"Alle onderwerpen",menuButtonTextForHide:"Verberg onderwerpen menu",menuButtonTextForShow:"Laat onderwerpen menu zien",navigationLabel:"Navigatie"}},L={args:{children:"Test",menuButtonIcon:Z}},f={args:{brandName:"Voorbeeld",logoBrand:{label:"Gemeente logo",svg:U},style:{"--ams-logo-block-size":"clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem)","--ams-logo-min-block-size":"1.125rem"}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    logoAccessibleName: 'Gemeentelijke Gezondheidsdienst Amsterdam logo',
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de voorpagina van de GGD Amsterdam'
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    menuButtonTextForHide: 'Verberg onderwerpen menu',
    menuButtonTextForShow: 'Laat onderwerpen menu zien',
    navigationLabel: 'Navigatie'
  }
}`,...p.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Test',
    menuButtonIcon: PlusIcon
  }
}`,...L.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    brandName: 'Voorbeeld',
    logoBrand: {
      label: 'Gemeente logo',
      svg: ExampleLogo
    },
    style: {
      '--ams-logo-block-size': 'clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem)',
      '--ams-logo-min-block-size': '1.125rem'
    } as CSSProperties
  }
}`,...f.parameters?.docs?.source}}};const Y=["Default","WithMovingLinks","WithoutMenuButtonOnWideWindow","WithoutMenuButton","WithCustomLogoLink","WithCustomTexts","WithCustomMenuButtonIcon","WithCustomLogo"],ie=Object.freeze(Object.defineProperty({__proto__:null,Default:m,WithCustomLogo:f,WithCustomLogoLink:g,WithCustomMenuButtonIcon:L,WithCustomTexts:p,WithMovingLinks:u,WithoutMenuButton:h,WithoutMenuButtonOnWideWindow:c,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{s as P,u as W,ie as a,c as b,h as c,g as d,p as e,L as f,f as g,X as m};
