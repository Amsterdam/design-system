import{r as L,j as e,c as t,a2 as y,G as s,a3 as r,H as b,ab as F}from"./iframe-GOum9R8J.js";import{u as R}from"./useIsAfterBreakpoint-n8fqZ7ZI.js";import{G as D}from"./Grid-Dx3WoYzi.js";import{I as W}from"./Icon-BHrg1NrQ.js";import{L as Z}from"./Logo-DyuiG_Q6.js";const P=L.forwardRef(({children:a,className:n,...l},o)=>e.jsx(D.Cell,{...l,className:t("ams-page-header__grid-cell-narrow-window-only",n),hidden:!0,ref:o,children:a}));P.displayName="PageHeader.GridCellNarrowWindowOnly";try{PageHeader.GridCellNarrowWindowOnly.displayName="PageHeader.GridCellNarrowWindowOnly",PageHeader.GridCellNarrowWindowOnly.__docgenInfo={description:"",displayName:"PageHeader.GridCellNarrowWindowOnly",props:{as:{defaultValue:null,description:"The HTML tag to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"aside"'},{value:'"div"'},{value:'"footer"'},{value:'"header"'},{value:'"nav"'},{value:'"section"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}const _=a=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("path",{className:"ams-page-header__menu-icon-top",d:"M1 5h22v2H1z"}),e.jsx("path",{className:"ams-page-header__menu-icon-middle",d:"M1 11h22v2H1z"}),e.jsx("path",{className:"ams-page-header__menu-icon-bottom",d:"M1 17h22v2H1z"})]});try{_.displayName="PageHeaderMenuIcon",_.__docgenInfo={description:"",displayName:"PageHeaderMenuIcon",props:{}}}catch{}const T=L.forwardRef(({children:a,className:n,fixed:l,icon:o,...f},x)=>e.jsx("li",{className:t("ams-page-header__menu-item",l&&"ams-page-header__menu-item--fixed"),children:e.jsxs("a",{...f,className:t("ams-page-header__menu-link",n),ref:x,children:[a,o&&e.jsx(W,{svg:o})]})}));T.displayName="PageHeader.MenuLink";try{PageHeader.MenuLink.displayName="PageHeader.MenuLink",PageHeader.MenuLink.__docgenInfo={description:"",displayName:"PageHeader.MenuLink",props:{fixed:{defaultValue:null,description:"Whether the link appears in the Page Header on narrow windows.",name:"fixed",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"An icon to display at the end of the label.",name:"icon",required:!1,type:{name:"Function | ReactNode"}}}}}catch{}const G=({brandName:a,logoAccessibleName:n,logoBrand:l})=>e.jsxs(e.Fragment,{children:[e.jsx("span",{className:t(l==="amsterdam"&&!!a&&"ams-page-header__logo-container"),children:e.jsx(Z,{"aria-label":n,brand:l})}),a&&e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__brand-name",children:a})]}),O=L.forwardRef(({brandName:a,children:n,className:l,logoAccessibleName:o,logoBrand:f="amsterdam",logoLink:x="/",logoLinkComponent:S=d=>e.jsx("a",{...d}),logoLinkTitle:B=`Ga naar de homepage${a?` van ${a}`:""}`,menuButtonText:j="Menu",menuButtonTextForHide:A="Verberg navigatiemenu",menuButtonTextForShow:I="Laat navigatiemenu zien",menuItems:w,navigationLabel:V="Hoofdnavigatie",noMenuButtonOnWideWindow:N,...q},z)=>{const[d,H]=L.useState(!1),E=S,k=!!n,M=k&&R("wide");return L.useEffect(()=>{N&&M&&H(!1)},[M]),e.jsxs("header",{...q,className:t("ams-page-header",l),ref:z,children:[e.jsxs(E,{className:"ams-page-header__logo-link",href:x,children:[e.jsx(G,{brandName:a,logoAccessibleName:o,logoBrand:f}),e.jsx("span",{className:"ams-visually-hidden",children:` ${B}`})]}),(k||w)&&e.jsxs("nav",{"aria-labelledby":"primary-navigation",className:"ams-page-header__navigation",children:[e.jsx("h2",{"aria-hidden":!0,className:"ams-visually-hidden",id:"primary-navigation",children:V}),e.jsx("div",{"aria-hidden":!0,className:"ams-page-header__logo-link ams-page-header__logo-link--hidden",hidden:!0,children:e.jsx(G,{brandName:a,logoBrand:f})}),e.jsxs("ul",{className:"ams-page-header__menu",children:[w,k&&e.jsx("li",{className:t("ams-page-header__mega-menu-button-item",N&&"ams-page-header__mega-menu-button-item--hide-on-wide-window"),hidden:!0,children:e.jsxs("button",{"aria-controls":"ams-page-header-mega-menu","aria-expanded":d,className:"ams-page-header__mega-menu-button",onClick:()=>H(!d),type:"button",children:[e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__mega-menu-button-label",children:j}),e.jsx("span",{className:"ams-visually-hidden",children:d?A:I}),e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__mega-menu-button-hidden-label",children:j}),e.jsx(W,{svg:e.jsx(_,{className:t("ams-page-header__menu-icon",d&&"ams-page-header__menu-icon--open")})})]})})]}),k&&e.jsx("div",{className:t("ams-page-header__mega-menu",!d&&"ams-page-header__mega-menu--closed"),id:"ams-page-header-mega-menu",children:n})]})]})});O.displayName="PageHeader";const i=Object.assign(O,{GridCellNarrowWindowOnly:P,MenuLink:T});try{i.displayName="PageHeader",i.__docgenInfo={description:"",displayName:"PageHeader",props:{brandName:{defaultValue:null,description:"The name of the application.",name:"brandName",required:!1,type:{name:"string"}},logoAccessibleName:{defaultValue:null,description:"The accessible name of the logo.",name:"logoAccessibleName",required:!1,type:{name:"string"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkComponent:{defaultValue:{value:"(props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />"},description:"The React component to use for the logo link.",name:"logoLinkComponent",required:!1,type:{name:"ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>"}},logoLinkTitle:{defaultValue:{value:"`Ga naar de homepage${brandName ? ` van ${brandName}` : ''}`"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menuButtonText:{defaultValue:{value:"Menu"},description:"The visible text for the menu button.",name:"menuButtonText",required:!1,type:{name:"string"}},menuButtonTextForHide:{defaultValue:{value:"Verberg navigatiemenu"},description:"The text for screen readers when the button hides the menu.",name:"menuButtonTextForHide",required:!1,type:{name:"string"}},menuButtonTextForShow:{defaultValue:{value:"Laat navigatiemenu zien"},description:"The text for screen readers when the button shows the menu.",name:"menuButtonTextForShow",required:!1,type:{name:"string"}},menuItems:{defaultValue:null,description:"A slot for the menu items. Use PageHeader.MenuLink here.",name:"menuItems",required:!1,type:{name:"ReactNode"}},navigationLabel:{defaultValue:{value:"Hoofdnavigatie"},description:"The accessible label for the navigation section.",name:"navigationLabel",required:!1,type:{name:"string"}},noMenuButtonOnWideWindow:{defaultValue:null,description:"Whether the menu button is visible on wide screens.",name:"noMenuButtonOnWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const $={title:"Components/Containers/Page Header",component:i},v=[[{href:"#",label:"Kaart"},{href:"#",label:"Panoramabeelden"},{href:"#",label:"Tabellen"},{href:"#",label:"Catalogus (Beta)"},{href:"#",label:"Kaarten"},{href:"#",label:"Datacatalogus"}],[{href:"#",label:"Over de organisatie"},{href:"#",label:"Over het dataplatform"}],[{href:"#",label:"Help"},{href:"#",label:"Contact"}]],m={args:{brandName:"Data Amsterdam",children:e.jsxs(s,{children:[e.jsx(i.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsxs(s.Cell,{span:4,children:[e.jsx(b,{className:"ams-mb-s",level:2,size:"level-3",children:"Onderdelen"}),e.jsx(r,{children:v[0].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(s.Cell,{span:4,children:[e.jsx(b,{className:"ams-mb-s",level:2,size:"level-3",children:"Over ons"}),e.jsx(r,{children:v[1].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(s.Cell,{span:4,children:[e.jsx(b,{className:"ams-mb-s",level:2,size:"level-3",children:"Help"}),e.jsx(r,{children:v[2].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]})]}),menuItems:[e.jsx(i.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(i.MenuLink,{fixed:!0,href:"#",icon:y,children:"Zoeken"},2)]}},u={args:{children:e.jsxs(s,{children:[e.jsx(i.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsx(s.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",children:"Regular collapsible menu link"})})})]}),menuItems:[e.jsx(i.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(i.MenuLink,{fixed:!0,href:"#",icon:y,children:"Zoeken"},2)]}},C=[{href:"#",label:"Stad"},{href:"#",label:"Techniek"},{href:"#",label:"Historie"},{href:"#",label:"Duurzaamheid"}],c={args:{brandName:"Aan de Amsterdamse grachten",children:e.jsx(s,{children:e.jsx(s.Cell,{span:"all",children:e.jsx(r,{children:C.map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})})}),menuItems:[...C.map(({href:a,label:n})=>e.jsx(i.MenuLink,{href:a,children:n},n)),e.jsx(i.MenuLink,{fixed:!0,href:"#",icon:y,children:"Zoeken"},"Zoeken")],noMenuButtonOnWideWindow:!0}},h={args:{brandName:"Mijn Amsterdam",menuItems:e.jsx(i.MenuLink,{fixed:!0,href:"#",icon:F,children:"Inloggen"})}},g={args:{logoAccessibleName:"Gemeentelijke Gezondheidsdienst Amsterdam logo",logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de voorpagina van de GGD Amsterdam"}},p={args:{children:e.jsx(s,{children:e.jsx(s.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})})}),menuButtonText:"Alle onderwerpen",menuButtonTextForHide:"Sluit onderwerpen menu",menuButtonTextForShow:"Toon onderwerpen menu",navigationLabel:"Navigatie"}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    menuButtonTextForHide: 'Sluit onderwerpen menu',
    menuButtonTextForShow: 'Toon onderwerpen menu',
    navigationLabel: 'Navigatie'
  }
}`,...p.parameters?.docs?.source}}};const K=["Default","WithMovingLinks","WithoutMenuButtonOnWideWindow","WithoutMenuButton","WithCustomLogoLink","WithCustomTexts"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:m,WithCustomLogoLink:g,WithCustomTexts:p,WithMovingLinks:u,WithoutMenuButton:h,WithoutMenuButtonOnWideWindow:c,__namedExportsOrder:K,default:$},Symbol.toStringTag,{value:"Module"}));export{i as P,u as W,ee as a,c as b,h as c,g as d,p as e,$ as m};
