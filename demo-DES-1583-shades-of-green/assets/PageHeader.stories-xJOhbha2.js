import{r as f,j as e,c as t,a3 as w,G as s,a4 as r,H as v,n as R}from"./iframe-sHqOT5SN.js";import{L as D,E as Z}from"./ExampleLogo-BKgBIhzV.js";import{u as $}from"./useIsAfterBreakpoint-Bbb2Cslt.js";import{G as K}from"./Grid-Ce_Nv-Qy.js";import{I as W}from"./Icon-G-O0bEl1.js";const T=f.forwardRef(({children:a,className:n,...l},d)=>e.jsx(K.Cell,{...l,className:t("ams-page-header__grid-cell-narrow-window-only",n),hidden:!0,ref:d,children:a}));T.displayName="PageHeader.GridCellNarrowWindowOnly";try{PageHeader.GridCellNarrowWindowOnly.displayName="PageHeader.GridCellNarrowWindowOnly",PageHeader.GridCellNarrowWindowOnly.__docgenInfo={description:"",displayName:"PageHeader.GridCellNarrowWindowOnly",props:{as:{defaultValue:null,description:"The HTML tag to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"aside"'},{value:'"div"'},{value:'"footer"'},{value:'"header"'},{value:'"nav"'},{value:'"section"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}const j=a=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("path",{className:"ams-page-header__menu-icon-top",d:"M1 5h22v2H1z"}),e.jsx("path",{className:"ams-page-header__menu-icon-middle",d:"M1 11h22v2H1z"}),e.jsx("path",{className:"ams-page-header__menu-icon-bottom",d:"M1 17h22v2H1z"})]});try{j.displayName="PageHeaderMenuIcon",j.__docgenInfo={description:"",displayName:"PageHeaderMenuIcon",props:{}}}catch{}const I=f.forwardRef(({children:a,className:n,fixed:l,icon:d,...k},b)=>e.jsx("li",{className:t("ams-page-header__menu-item",l&&"ams-page-header__menu-item--fixed"),children:e.jsxs("a",{...k,className:t("ams-page-header__menu-link",n),ref:b,children:[a,d&&e.jsx(W,{svg:d})]})}));I.displayName="PageHeader.MenuLink";try{PageHeader.MenuLink.displayName="PageHeader.MenuLink",PageHeader.MenuLink.__docgenInfo={description:"",displayName:"PageHeader.MenuLink",props:{fixed:{defaultValue:null,description:"Whether the link appears in the Page Header on narrow windows.",name:"fixed",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"An icon to display at the end of the label.",name:"icon",required:!1,type:{name:"Function | ReactNode"}}}}}catch{}const G=({brandName:a,logoAccessibleName:n,logoBrand:l})=>e.jsxs(e.Fragment,{children:[e.jsx("span",{className:t(l==="amsterdam"&&!!a&&"ams-page-header__logo-container"),children:e.jsx(D,{"aria-label":n,brand:l})}),a&&e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__brand-name",children:a})]}),O=f.forwardRef(({brandName:a,children:n,className:l,logoAccessibleName:d,logoBrand:k="amsterdam",logoLink:b="/",logoLinkComponent:B=o=>e.jsx("a",{...o}),logoLinkTitle:A=`Ga naar de homepage${a?` van ${a}`:""}`,menuButtonText:y="Menu",menuButtonTextForHide:S="Verberg navigatiemenu",menuButtonTextForShow:V="Laat navigatiemenu zien",menuItems:N,navigationLabel:z="Hoofdnavigatie",noMenuButtonOnWideWindow:H,...E},q)=>{const[o,M]=f.useState(!1),F=B,x=!!n,C=x&&$("wide");return f.useEffect(()=>{H&&C&&M(!1)},[C]),e.jsxs("header",{...E,className:t("ams-page-header",l),ref:q,children:[e.jsxs(F,{className:"ams-page-header__logo-link",href:b,children:[e.jsx(G,{brandName:a,logoAccessibleName:d,logoBrand:k}),e.jsx("span",{className:"ams-visually-hidden",children:` ${A}`})]}),(x||N)&&e.jsxs("nav",{"aria-labelledby":"primary-navigation",className:"ams-page-header__navigation",children:[e.jsx("h2",{"aria-hidden":!0,className:"ams-visually-hidden",id:"primary-navigation",children:z}),e.jsx("div",{"aria-hidden":!0,className:"ams-page-header__logo-link ams-page-header__logo-link--hidden",hidden:!0,children:e.jsx(G,{brandName:a,logoBrand:k})}),e.jsxs("ul",{className:"ams-page-header__menu",children:[N,x&&e.jsx("li",{className:t("ams-page-header__mega-menu-button-item",H&&"ams-page-header__mega-menu-button-item--hide-on-wide-window"),hidden:!0,children:e.jsxs("button",{"aria-controls":"ams-page-header-mega-menu","aria-expanded":o,className:"ams-page-header__mega-menu-button",onClick:()=>M(!o),type:"button",children:[e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__mega-menu-button-label",children:y}),e.jsx("span",{className:"ams-visually-hidden",children:o?S:V}),e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__mega-menu-button-hidden-label",children:y}),e.jsx(W,{svg:e.jsx(j,{className:t("ams-page-header__menu-icon",o&&"ams-page-header__menu-icon--open")})})]})})]}),x&&e.jsx("div",{className:t("ams-page-header__mega-menu",!o&&"ams-page-header__mega-menu--closed"),id:"ams-page-header-mega-menu",children:n})]})]})});O.displayName="PageHeader";const i=Object.assign(O,{GridCellNarrowWindowOnly:T,MenuLink:I});try{i.displayName="PageHeader",i.__docgenInfo={description:"",displayName:"PageHeader",props:{brandName:{defaultValue:null,description:"The name of the application.",name:"brandName",required:!1,type:{name:"string"}},logoAccessibleName:{defaultValue:null,description:"The accessible name of the logo.",name:"logoAccessibleName",required:!1,type:{name:"string"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:'"amsterdam" | "ggd-amsterdam" | "museum-weesp" | "stadsarchief" | "stadsbank-van-lening" | "vga-verzekeringen" | LogoBrandConfig'}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkComponent:{defaultValue:{value:"(props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />"},description:"The React component to use for the logo link.",name:"logoLinkComponent",required:!1,type:{name:"ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>"}},logoLinkTitle:{defaultValue:{value:"`Ga naar de homepage${brandName ? ` van ${brandName}` : ''}`"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menuButtonText:{defaultValue:{value:"Menu"},description:"The visible text for the menu button.",name:"menuButtonText",required:!1,type:{name:"string"}},menuButtonTextForHide:{defaultValue:{value:"Verberg navigatiemenu"},description:"The text for screen readers when the button hides the menu.",name:"menuButtonTextForHide",required:!1,type:{name:"string"}},menuButtonTextForShow:{defaultValue:{value:"Laat navigatiemenu zien"},description:"The text for screen readers when the button shows the menu.",name:"menuButtonTextForShow",required:!1,type:{name:"string"}},menuItems:{defaultValue:null,description:"A slot for the menu items. Use PageHeader.MenuLink here.",name:"menuItems",required:!1,type:{name:"ReactNode"}},navigationLabel:{defaultValue:{value:"Hoofdnavigatie"},description:"The accessible label for the navigation section.",name:"navigationLabel",required:!1,type:{name:"string"}},noMenuButtonOnWideWindow:{defaultValue:null,description:"Whether the menu button is visible on wide screens.",name:"noMenuButtonOnWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const _=[[{href:"#",label:"Kaart"},{href:"#",label:"Panoramabeelden"},{href:"#",label:"Tabellen"},{href:"#",label:"Catalogus (Beta)"},{href:"#",label:"Kaarten"},{href:"#",label:"Datacatalogus"}],[{href:"#",label:"Over de organisatie"},{href:"#",label:"Over het dataplatform"}],[{href:"#",label:"Help"},{href:"#",label:"Contact"}]],P=[{href:"#",label:"Stad"},{href:"#",label:"Techniek"},{href:"#",label:"Historie"},{href:"#",label:"Duurzaamheid"}],U={title:"Components/Containers/Page Header",component:i},m={args:{brandName:"Data Amsterdam",children:e.jsxs(s,{children:[e.jsx(i.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsxs(s.Cell,{span:4,children:[e.jsx(v,{className:"ams-mb-s",level:2,size:"level-3",children:"Onderdelen"}),e.jsx(r,{children:_[0].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(s.Cell,{span:4,children:[e.jsx(v,{className:"ams-mb-s",level:2,size:"level-3",children:"Over ons"}),e.jsx(r,{children:_[1].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(s.Cell,{span:4,children:[e.jsx(v,{className:"ams-mb-s",level:2,size:"level-3",children:"Help"}),e.jsx(r,{children:_[2].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]})]}),menuItems:[e.jsx(i.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(i.MenuLink,{fixed:!0,href:"#",icon:w,children:"Zoeken"},2)]}},u={args:{children:e.jsxs(s,{children:[e.jsx(i.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsx(s.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",children:"Regular collapsible menu link"})})})]}),menuItems:[e.jsx(i.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(i.MenuLink,{fixed:!0,href:"#",icon:w,children:"Zoeken"},2)]}},c={args:{brandName:"Aan de Amsterdamse grachten",children:e.jsx(s,{children:e.jsx(s.Cell,{span:"all",children:e.jsx(r,{children:P.map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})})}),menuItems:[...P.map(({href:a,label:n})=>e.jsx(i.MenuLink,{href:a,children:n},n)),e.jsx(i.MenuLink,{fixed:!0,href:"#",icon:w,children:"Zoeken"},"Zoeken")],noMenuButtonOnWideWindow:!0}},h={args:{brandName:"Mijn Amsterdam",menuItems:e.jsx(i.MenuLink,{fixed:!0,href:"#",icon:R,children:"Inloggen"})}},g={args:{logoAccessibleName:"Gemeentelijke Gezondheidsdienst Amsterdam logo",logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de voorpagina van de GGD Amsterdam"}},p={args:{children:e.jsx(s,{children:e.jsx(s.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})})}),menuButtonText:"Alle onderwerpen",menuButtonTextForHide:"Verberg onderwerpen menu",menuButtonTextForShow:"Laat onderwerpen menu zien",navigationLabel:"Navigatie"}},L={args:{brandName:"Voorbeeld",logoBrand:{label:"Gemeente logo",svg:Z},style:{"--ams-logo-block-size":"clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem)","--ams-logo-min-block-size":"1.125rem"}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};const J=["Default","WithMovingLinks","WithoutMenuButtonOnWideWindow","WithoutMenuButton","WithCustomLogoLink","WithCustomTexts","WithCustomLogo"],ne=Object.freeze(Object.defineProperty({__proto__:null,Default:m,WithCustomLogo:L,WithCustomLogoLink:g,WithCustomTexts:p,WithMovingLinks:u,WithoutMenuButton:h,WithoutMenuButtonOnWideWindow:c,__namedExportsOrder:J,default:U},Symbol.toStringTag,{value:"Module"}));export{i as P,u as W,ne as a,c as b,h as c,g as d,p as e,L as f,U as m};
