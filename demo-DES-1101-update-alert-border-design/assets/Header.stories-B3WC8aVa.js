import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{G as d,m as r,H as k}from"./index.esm-CgetgHQ1.js";import{c as t}from"./clsx-B-dksMZM.js";import{r as o}from"./index-D7uoVdV3.js";import{G as ee}from"./Grid-BNLu_M1m.js";import{L as M}from"./Logo-C81konWM.js";import{H as ae}from"./Heading-Tli780WN.js";import{I as ne}from"./Icon-BoBhPfLP.js";const U=o.forwardRef(({children:a,className:n,...s},l)=>e.jsx(ee.Cell,{...s,className:t("ams-header__grid-cell-narrow-window-only",n),ref:l,children:a}));U.displayName="Header.GridCellNarrowWindowOnly";try{Header.GridCellNarrowWindowOnly.displayName="Header.GridCellNarrowWindowOnly",Header.GridCellNarrowWindowOnly.__docgenInfo={description:"",displayName:"Header.GridCellNarrowWindowOnly",props:{as:{defaultValue:null,description:"The HTML tag to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"div"'},{value:'"section"'},{value:'"aside"'},{value:'"footer"'},{value:'"header"'},{value:'"nav"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}const _=a=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",...a,children:[e.jsx("line",{x1:"0",x2:"100%",y1:"50%",y2:"50%",className:"ams-header__menu-icon-top"}),e.jsx("line",{x1:"0",x2:"100%",y1:"50%",y2:"50%",className:"ams-header__menu-icon-middle"}),e.jsx("line",{x1:"0",x2:"100%",y1:"50%",y2:"50%",className:"ams-header__menu-icon-bottom"})]});try{_.displayName="HeaderMenuIcon",_.__docgenInfo={description:"",displayName:"HeaderMenuIcon",props:{}}}catch{}const F=o.forwardRef(({children:a,className:n,fixed:s,...l},m)=>e.jsx("li",{className:t("ams-header__menu-item",s&&"ams-header__menu-item--fixed"),children:e.jsx("a",{...l,className:t("ams-header__menu-link",n),ref:m,children:a})}));F.displayName="Header.MenuLink";try{Header.MenuLink.displayName="Header.MenuLink",Header.MenuLink.__docgenInfo={description:"",displayName:"Header.MenuLink",props:{fixed:{defaultValue:null,description:"",name:"fixed",required:!1,type:{name:"boolean"}}}}}catch{}const re={medium:"36rem",wide:"68rem"},y=a=>{const[n,s]=o.useState(!1);return o.useLayoutEffect(()=>{if(a&&typeof window<"u"){const l=window.matchMedia(`(min-width: ${re[a]})`);l.matches!==n&&s(l.matches);const m=()=>s(l.matches);return window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)}},[n,a]),n};try{y.displayName="useIsAfterBreakpoint",y.__docgenInfo={description:"",displayName:"useIsAfterBreakpoint",props:{}}}catch{}const J=o.forwardRef(({brandName:a,className:n,children:s,logoBrand:l="amsterdam",logoLink:m="/",logoLinkTitle:Q="Ga naar de homepage",menuItems:b,menuButtonText:v="Menu",navigationLabel:X="Hoofdnavigatie",noMenuButtonOnWideWindow:N,...j},Y)=>{const[f,w]=o.useState(!1),H=y("wide");return o.useEffect(()=>{N&&H&&w(!1)},[H]),e.jsxs("header",{...j,ref:Y,className:t("ams-header",n),children:[e.jsxs("div",{className:"ams-header__branding",children:[e.jsxs("a",{className:"ams-header__logo-link",href:m,children:[e.jsx("span",{className:"ams-visually-hidden",children:Q}),e.jsx(M,{brand:l})]}),a&&e.jsx(ae,{level:1,size:"level-5",className:"ams-header__brand-name",children:a})]}),(s||b)&&e.jsxs("nav",{className:"ams-header__navigation","aria-labelledby":"primary-navigation",children:[e.jsx("h2",{id:"primary-navigation",className:"ams-visually-hidden",children:X}),e.jsxs("div",{className:"ams-header__branding ams-header__branding--hidden","aria-hidden":!0,children:[e.jsx("div",{className:"ams-header__logo-link",children:e.jsx(M,{brand:l})}),a&&e.jsx("span",{className:"ams-heading ams-heading--level-5 ams-header__brand-name",children:a})]}),e.jsxs("ul",{className:"ams-header__menu",children:[b,s&&e.jsx("li",{className:t(N&&"ams-header__mega-menu-button-item--hide-on-wide-window"),children:e.jsxs("button",{...j,"aria-controls":"ams-mega-menu","aria-expanded":f,className:"ams-header__mega-menu-button",onClick:()=>w(!f),type:"button",children:[e.jsx("span",{className:"ams-header__mega-menu-button-label",children:v}),e.jsx("span",{"aria-hidden":"true",className:"ams-header__mega-menu-button-hidden-label",children:v}),e.jsx(ne,{svg:e.jsx(_,{className:t("ams-header__menu-icon",f&&"ams-header__menu-icon--open")}),size:"level-5"})]})})]}),s&&e.jsx("div",{className:t("ams-header__mega-menu",!f&&"ams-header__mega-menu--closed"),id:"ams-mega-menu",children:s})]})]})});J.displayName="Header";const i=Object.assign(J,{GridCellNarrowWindowOnly:U,MenuLink:F});try{i.displayName="Header",i.__docgenInfo={description:"",displayName:"Header",props:{brandName:{defaultValue:null,description:"The name of the application.",name:"brandName",required:!1,type:{name:"string"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkTitle:{defaultValue:{value:"Ga naar de homepage"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menuItems:{defaultValue:null,description:"A slot for the menu items. Use Header.MenuLink here.",name:"menuItems",required:!1,type:{name:"ReactNode"}},menuButtonText:{defaultValue:{value:"Menu"},description:"The text for the menu button.",name:"menuButtonText",required:!1,type:{name:"string"}},navigationLabel:{defaultValue:{value:"Hoofdnavigatie"},description:"The accessible label for the navigation section.",name:"navigationLabel",required:!1,type:{name:"string"}},noMenuButtonOnWideWindow:{defaultValue:null,description:"Whether the menu button is visible on wide screens.",name:"noMenuButtonOnWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const ie={title:"Components/Containers/Header",component:i},x=[[{label:"Kaart",href:"#"},{label:"Panoramabeelden",href:"#"},{label:"Tabellen",href:"#"},{label:"Catalogus (Beta)",href:"#"},{label:"Kaarten",href:"#"},{label:"Datacatalogus",href:"#"}],[{label:"Over de organisatie",href:"#"},{label:"Over het dataplatform",href:"#"}],[{label:"Help",href:"#"},{label:"Contact",href:"#"}]],u={args:{brandName:"Data Amsterdam",menuItems:[e.jsx(i.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(i.MenuLink,{href:"#",fixed:!0,children:"Zoeken"},2)],children:e.jsxs(d,{paddingBottom:"large",children:[e.jsx(i.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsxs(d.Cell,{span:4,children:[e.jsx(k,{level:2,size:"level-3",className:"ams-mb--sm",children:"Onderdelen"}),e.jsx(r,{children:x[0].map(({label:a,href:n})=>e.jsx(r.Link,{href:n,children:a},a))})]}),e.jsxs(d.Cell,{span:4,children:[e.jsx(k,{level:2,size:"level-3",className:"ams-mb--sm",children:"Over ons"}),e.jsx(r,{children:x[1].map(({label:a,href:n})=>e.jsx(r.Link,{href:n,children:a},a))})]}),e.jsxs(d.Cell,{span:4,children:[e.jsx(k,{level:2,size:"level-3",className:"ams-mb--sm",children:"Help"}),e.jsx(r,{children:x[2].map(({label:a,href:n})=>e.jsx(r.Link,{href:n,children:a},a))})]})]})}},c={args:{menuItems:[e.jsx(i.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(i.MenuLink,{href:"#",fixed:!0,children:"Zoeken"},2)],children:e.jsxs(d,{paddingBottom:"large",gapVertical:"small",children:[e.jsx(i.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsx(d.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",children:"Regular collapsible menu link"})})})]})}},W=[{label:"Stad",href:"#"},{label:"Techniek",href:"#"},{label:"Historie",href:"#"},{label:"Duurzaamheid",href:"#"}],h={args:{brandName:"Aan de Amsterdamse grachten",menuItems:[...W.map(({label:a,href:n})=>e.jsx(i.MenuLink,{href:n,children:a},a)),e.jsx(i.MenuLink,{href:"#",fixed:!0,children:"Zoeken"},"Zoeken")],noMenuButtonOnWideWindow:!0,children:e.jsx(r,{className:"ams-mb--lg",children:W.map(({label:a,href:n})=>e.jsx(r.Link,{href:n,children:a},a))})}},p={args:{brandName:"Mijn Amsterdam",menuItems:e.jsx(i.MenuLink,{fixed:!0,href:"#",children:"Inloggen"})}},g={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},L={args:{menuButtonText:"Hoofdmenu",navigationLabel:"Navigatie",children:e.jsx(d,{children:e.jsx(d.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})})})}};var G,C,O;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    brandName: 'Data Amsterdam',
    menuItems: [<Header.MenuLink key={1} href="#" lang="en">
        English
      </Header.MenuLink>, <Header.MenuLink key={2} href="#" fixed>
        Zoeken
      </Header.MenuLink>],
    children: <Grid paddingBottom="large">
        <Header.GridCellNarrowWindowOnly span="all">
          <LinkList>
            <LinkList.Link href="#" lang="en">
              English
            </LinkList.Link>
          </LinkList>
        </Header.GridCellNarrowWindowOnly>
        <Grid.Cell span={4}>
          <Heading level={2} size="level-3" className="ams-mb--sm">
            Onderdelen
          </Heading>
          <LinkList>
            {defaultStoryLinks[0].map(({
            label,
            href
          }) => <LinkList.Link key={label} href={href}>
                {label}
              </LinkList.Link>)}
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span={4}>
          <Heading level={2} size="level-3" className="ams-mb--sm">
            Over ons
          </Heading>
          <LinkList>
            {defaultStoryLinks[1].map(({
            label,
            href
          }) => <LinkList.Link key={label} href={href}>
                {label}
              </LinkList.Link>)}
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span={4}>
          <Heading level={2} size="level-3" className="ams-mb--sm">
            Help
          </Heading>
          <LinkList>
            {defaultStoryLinks[2].map(({
            label,
            href
          }) => <LinkList.Link key={label} href={href}>
                {label}
              </LinkList.Link>)}
          </LinkList>
        </Grid.Cell>
      </Grid>
  }
}`,...(O=(C=u.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var B,I,T;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    menuItems: [<Header.MenuLink key={1} href="#" lang="en">
        English
      </Header.MenuLink>, <Header.MenuLink key={2} href="#" fixed>
        Zoeken
      </Header.MenuLink>],
    children: <Grid paddingBottom="large" gapVertical="small">
        <Header.GridCellNarrowWindowOnly span="all">
          <LinkList>
            <LinkList.Link href="#" lang="en">
              English
            </LinkList.Link>
          </LinkList>
        </Header.GridCellNarrowWindowOnly>
        <Grid.Cell span="all">
          <LinkList>
            <LinkList.Link href="#">Regular collapsible menu link</LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
  }
}`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var S,E,A;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    brandName: 'Aan de Amsterdamse grachten',
    menuItems: [...WithoutMenuButtonOnWideWindowStoryLinks.map(({
      label,
      href
    }) => <Header.MenuLink key={label} href={href}>
          {label}
        </Header.MenuLink>), <Header.MenuLink key="Zoeken" href="#" fixed>
        Zoeken
      </Header.MenuLink>],
    noMenuButtonOnWideWindow: true,
    children: <LinkList className="ams-mb--lg">
        {WithoutMenuButtonOnWideWindowStoryLinks.map(({
        label,
        href
      }) => <LinkList.Link key={label} href={href}>
            {label}
          </LinkList.Link>)}
      </LinkList>
  }
}`,...(A=(E=h.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var V,z,q;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: <Header.MenuLink fixed href="#">
        Inloggen
      </Header.MenuLink>
  }
}`,...(q=(z=p.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var D,R,Z;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(Z=(R=g.parameters)==null?void 0:R.docs)==null?void 0:Z.source}}};var $,K,P;L.parameters={...L.parameters,docs:{...($=L.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    menuButtonText: 'Hoofdmenu',
    navigationLabel: 'Navigatie',
    children: <Grid>
        <Grid.Cell span="all">
          <LinkList>
            <LinkList.Link href="#" lang="en">
              English
            </LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
  }
}`,...(P=(K=L.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const se=["Default","WithMovingLinks","WithoutMenuButtonOnWideWindow","WithoutMenuButton","WithCustomLogoLink","WithCustomTexts"],pe=Object.freeze(Object.defineProperty({__proto__:null,Default:u,WithCustomLogoLink:g,WithCustomTexts:L,WithMovingLinks:c,WithoutMenuButton:p,WithoutMenuButtonOnWideWindow:h,__namedExportsOrder:se,default:ie},Symbol.toStringTag,{value:"Module"}));export{pe as H,c as W,h as a,p as b,g as c,L as d};
