import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{G as d,m as r,H as k}from"./index.esm-E1_k6DlJ.js";import{c as t}from"./clsx-B-dksMZM.js";import{r as o}from"./index-C0MU9AHG.js";import{G as ae}from"./Grid-ZcS4-HR7.js";import{H as ne}from"./Heading-BQPWrcoF.js";import{I as re}from"./Icon-plsGHcLz.js";import{L as M}from"./Logo-Dz7UPqVs.js";const U=o.forwardRef(({children:a,className:n,...l},i)=>e.jsx(ae.Cell,{...l,className:t("ams-header__grid-cell-narrow-window-only",n),ref:i,children:a}));U.displayName="Header.GridCellNarrowWindowOnly";try{Header.GridCellNarrowWindowOnly.displayName="Header.GridCellNarrowWindowOnly",Header.GridCellNarrowWindowOnly.__docgenInfo={description:"",displayName:"Header.GridCellNarrowWindowOnly",props:{as:{defaultValue:null,description:"The HTML tag to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"aside"'},{value:'"div"'},{value:'"footer"'},{value:'"section"'},{value:'"header"'},{value:'"nav"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}const _=a=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("line",{className:"ams-header__menu-icon-top",x1:"0",x2:"100%",y1:"50%",y2:"50%"}),e.jsx("line",{className:"ams-header__menu-icon-middle",x1:"0",x2:"100%",y1:"50%",y2:"50%"}),e.jsx("line",{className:"ams-header__menu-icon-bottom",x1:"0",x2:"100%",y1:"50%",y2:"50%"})]});try{_.displayName="HeaderMenuIcon",_.__docgenInfo={description:"",displayName:"HeaderMenuIcon",props:{}}}catch{}const J=o.forwardRef(({children:a,className:n,fixed:l,...i},m)=>e.jsx("li",{className:t("ams-header__menu-item",l&&"ams-header__menu-item--fixed"),children:e.jsx("a",{...i,className:t("ams-header__menu-link",n),ref:m,children:a})}));J.displayName="Header.MenuLink";try{Header.MenuLink.displayName="Header.MenuLink",Header.MenuLink.__docgenInfo={description:"",displayName:"Header.MenuLink",props:{fixed:{defaultValue:null,description:"",name:"fixed",required:!1,type:{name:"boolean"}}}}}catch{}const se={medium:"36rem",wide:"68rem"},y=a=>{const[n,l]=o.useState(!1);return o.useLayoutEffect(()=>{if(a&&typeof window<"u"){const i=window.matchMedia(`(min-width: ${se[a]})`);i.matches!==n&&l(i.matches);const m=()=>l(i.matches);return window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)}},[n,a]),n};try{y.displayName="useIsAfterBreakpoint",y.__docgenInfo={description:"",displayName:"useIsAfterBreakpoint",props:{}}}catch{}const W=({hasBrandName:a,logoBrand:n})=>e.jsxs(e.Fragment,{children:[e.jsx(M,{brand:n,className:t(n==="amsterdam"&&a&&"ams-header__logo")}),n==="amsterdam"&&a&&e.jsx(M,{brand:"amsterdam-emblem-only",className:"ams-header__logo--emblem-only"})]}),Q=o.forwardRef(({brandName:a,children:n,className:l,logoBrand:i="amsterdam",logoLink:m="/",logoLinkTitle:X="Ga naar de homepage",menuButtonText:b="Menu",menuItems:v,navigationLabel:Y="Hoofdnavigatie",noMenuButtonOnWideWindow:j,...N},ee)=>{const[f,w]=o.useState(!1),H=y("wide");return o.useEffect(()=>{j&&H&&w(!1)},[H]),e.jsxs("header",{...N,className:t("ams-header",l),ref:ee,children:[e.jsxs("div",{className:"ams-header__branding",children:[e.jsxs("a",{className:"ams-header__logo-link",href:m,children:[e.jsx("span",{className:"ams-visually-hidden",children:X}),e.jsx(W,{hasBrandName:!!a,logoBrand:i})]}),a&&e.jsx(ne,{className:"ams-header__brand-name",level:1,size:"level-5",children:a})]}),(n||v)&&e.jsxs("nav",{"aria-labelledby":"primary-navigation",className:"ams-header__navigation",children:[e.jsx("h2",{className:"ams-visually-hidden",id:"primary-navigation",children:Y}),e.jsxs("div",{"aria-hidden":!0,className:"ams-header__branding ams-header__branding--hidden",children:[e.jsx("div",{className:"ams-header__logo-link",children:e.jsx(W,{hasBrandName:!!a,logoBrand:i})}),a&&e.jsx("span",{className:"ams-heading ams-heading--level-5 ams-header__brand-name",children:a})]}),e.jsxs("ul",{className:"ams-header__menu",children:[v,n&&e.jsx("li",{className:t(j&&"ams-header__mega-menu-button-item--hide-on-wide-window"),children:e.jsxs("button",{...N,"aria-controls":"ams-mega-menu","aria-expanded":f,className:"ams-header__mega-menu-button",onClick:()=>w(!f),type:"button",children:[e.jsx("span",{className:"ams-header__mega-menu-button-label",children:b}),e.jsx("span",{"aria-hidden":"true",className:"ams-header__mega-menu-button-hidden-label",children:b}),e.jsx(re,{size:"level-5",svg:e.jsx(_,{className:t("ams-header__menu-icon",f&&"ams-header__menu-icon--open")})})]})})]}),n&&e.jsx("div",{className:t("ams-header__mega-menu",!f&&"ams-header__mega-menu--closed"),id:"ams-mega-menu",children:n})]})]})});Q.displayName="Header";const s=Object.assign(Q,{GridCellNarrowWindowOnly:U,MenuLink:J});try{s.displayName="Header",s.__docgenInfo={description:"",displayName:"Header",props:{brandName:{defaultValue:null,description:"The name of the application.",name:"brandName",required:!1,type:{name:"string"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkTitle:{defaultValue:{value:"Ga naar de homepage"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menuButtonText:{defaultValue:{value:"Menu"},description:"The text for the menu button.",name:"menuButtonText",required:!1,type:{name:"string"}},menuItems:{defaultValue:null,description:"A slot for the menu items. Use Header.MenuLink here.",name:"menuItems",required:!1,type:{name:"ReactNode"}},navigationLabel:{defaultValue:{value:"Hoofdnavigatie"},description:"The accessible label for the navigation section.",name:"navigationLabel",required:!1,type:{name:"string"}},noMenuButtonOnWideWindow:{defaultValue:null,description:"Whether the menu button is visible on wide screens.",name:"noMenuButtonOnWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const ie={title:"Components/Containers/Header",component:s},x=[[{href:"#",label:"Kaart"},{href:"#",label:"Panoramabeelden"},{href:"#",label:"Tabellen"},{href:"#",label:"Catalogus (Beta)"},{href:"#",label:"Kaarten"},{href:"#",label:"Datacatalogus"}],[{href:"#",label:"Over de organisatie"},{href:"#",label:"Over het dataplatform"}],[{href:"#",label:"Help"},{href:"#",label:"Contact"}]],u={args:{brandName:"Data Amsterdam",children:e.jsxs(d,{paddingBottom:"large",children:[e.jsx(s.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsxs(d.Cell,{span:4,children:[e.jsx(k,{className:"ams-mb--sm",level:2,size:"level-3",children:"Onderdelen"}),e.jsx(r,{children:x[0].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(d.Cell,{span:4,children:[e.jsx(k,{className:"ams-mb--sm",level:2,size:"level-3",children:"Over ons"}),e.jsx(r,{children:x[1].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(d.Cell,{span:4,children:[e.jsx(k,{className:"ams-mb--sm",level:2,size:"level-3",children:"Help"}),e.jsx(r,{children:x[2].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]})]}),menuItems:[e.jsx(s.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(s.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},2)]}},c={args:{children:e.jsxs(d,{gapVertical:"small",paddingBottom:"large",children:[e.jsx(s.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsx(d.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",children:"Regular collapsible menu link"})})})]}),menuItems:[e.jsx(s.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(s.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},2)]}},C=[{href:"#",label:"Stad"},{href:"#",label:"Techniek"},{href:"#",label:"Historie"},{href:"#",label:"Duurzaamheid"}],h={args:{brandName:"Aan de Amsterdamse grachten",children:e.jsx(r,{className:"ams-mb--lg",children:C.map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))}),menuItems:[...C.map(({href:a,label:n})=>e.jsx(s.MenuLink,{href:a,children:n},n)),e.jsx(s.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},"Zoeken")],noMenuButtonOnWideWindow:!0}},p={args:{brandName:"Mijn Amsterdam",menuItems:e.jsx(s.MenuLink,{fixed:!0,href:"#",children:"Inloggen"})}},g={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},L={args:{children:e.jsx(d,{children:e.jsx(d.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})})}),menuButtonText:"Hoofdmenu",navigationLabel:"Navigatie"}};var G,O,B;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    brandName: 'Data Amsterdam',
    children: <Grid paddingBottom="large">
        <Header.GridCellNarrowWindowOnly span="all">
          <LinkList>
            <LinkList.Link href="#" lang="en">
              English
            </LinkList.Link>
          </LinkList>
        </Header.GridCellNarrowWindowOnly>
        <Grid.Cell span={4}>
          <Heading className="ams-mb--sm" level={2} size="level-3">
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
          <Heading className="ams-mb--sm" level={2} size="level-3">
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
          <Heading className="ams-mb--sm" level={2} size="level-3">
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
    menuItems: [<Header.MenuLink href="#" key={1} lang="en">
        English
      </Header.MenuLink>, <Header.MenuLink fixed href="#" key={2}>
        Zoeken
      </Header.MenuLink>]
  }
}`,...(B=(O=u.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var I,T,S;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: <Grid gapVertical="small" paddingBottom="large">
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
      </Grid>,
    menuItems: [<Header.MenuLink href="#" key={1} lang="en">
        English
      </Header.MenuLink>, <Header.MenuLink fixed href="#" key={2}>
        Zoeken
      </Header.MenuLink>]
  }
}`,...(S=(T=c.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var E,A,V;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    brandName: 'Aan de Amsterdamse grachten',
    children: <LinkList className="ams-mb--lg">
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
    }) => <Header.MenuLink href={href} key={label}>
          {label}
        </Header.MenuLink>), <Header.MenuLink fixed href="#" key="Zoeken">
        Zoeken
      </Header.MenuLink>],
    noMenuButtonOnWideWindow: true
  }
}`,...(V=(A=h.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var z,q,D;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: <Header.MenuLink fixed href="#">
        Inloggen
      </Header.MenuLink>
  }
}`,...(D=(q=p.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var R,Z,$;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var K,F,P;L.parameters={...L.parameters,docs:{...(K=L.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
    menuButtonText: 'Hoofdmenu',
    navigationLabel: 'Navigatie'
  }
}`,...(P=(F=L.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};const le=["Default","WithMovingLinks","WithoutMenuButtonOnWideWindow","WithoutMenuButton","WithCustomLogoLink","WithCustomTexts"],ge=Object.freeze(Object.defineProperty({__proto__:null,Default:u,WithCustomLogoLink:g,WithCustomTexts:L,WithMovingLinks:c,WithoutMenuButton:p,WithoutMenuButtonOnWideWindow:h,__namedExportsOrder:le,default:ie},Symbol.toStringTag,{value:"Module"}));export{ge as H,c as W,h as a,p as b,g as c,L as d};
