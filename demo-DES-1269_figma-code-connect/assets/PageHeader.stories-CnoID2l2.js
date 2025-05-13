import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{G as t,r,H as x}from"./index.esm-ChGGnQRO.js";import{c as d}from"./clsx-B-dksMZM.js";import{r as o}from"./index-G8LIXM5I.js";import{G as ae}from"./Grid-BHIDbP7U.js";import{I as ne}from"./Icon-BBW_x4VP.js";import{L as re}from"./Logo-BA54JLDd.js";const F=o.forwardRef(({children:a,className:n,...l},s)=>e.jsx(ae.Cell,{...l,className:d("ams-page-header__grid-cell-narrow-window-only",n),ref:s,children:a}));F.displayName="PageHeader.GridCellNarrowWindowOnly";try{PageHeader.GridCellNarrowWindowOnly.displayName="PageHeader.GridCellNarrowWindowOnly",PageHeader.GridCellNarrowWindowOnly.__docgenInfo={description:"",displayName:"PageHeader.GridCellNarrowWindowOnly",props:{as:{defaultValue:null,description:"The HTML tag to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"div"'},{value:'"section"'},{value:'"aside"'},{value:'"footer"'},{value:'"header"'},{value:'"nav"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const y=a=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("line",{className:"ams-page-header__menu-icon-top",x1:"0",x2:"100%",y1:"50%",y2:"50%"}),e.jsx("line",{className:"ams-page-header__menu-icon-middle",x1:"0",x2:"100%",y1:"50%",y2:"50%"}),e.jsx("line",{className:"ams-page-header__menu-icon-bottom",x1:"0",x2:"100%",y1:"50%",y2:"50%"})]});try{y.displayName="PageHeaderMenuIcon",y.__docgenInfo={description:"",displayName:"PageHeaderMenuIcon",props:{}}}catch{}const U=o.forwardRef(({children:a,className:n,fixed:l,...s},m)=>e.jsx("li",{className:d("ams-page-header__menu-item",l&&"ams-page-header__menu-item--fixed"),children:e.jsx("a",{...s,className:d("ams-page-header__menu-link",n),ref:m,children:a})}));U.displayName="PageHeader.MenuLink";try{PageHeader.MenuLink.displayName="PageHeader.MenuLink",PageHeader.MenuLink.__docgenInfo={description:"",displayName:"PageHeader.MenuLink",props:{fixed:{defaultValue:null,description:"",name:"fixed",required:!1,type:{name:"boolean"}}}}}catch{}/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const ie={medium:"36rem",wide:"68rem"},b=a=>{const[n,l]=o.useState(!1);return o.useLayoutEffect(()=>{if(a&&typeof window<"u"){const s=window.matchMedia(`(min-width: ${ie[a]})`);s.matches!==n&&l(s.matches);const m=()=>l(s.matches);return window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)}},[n,a]),n};try{b.displayName="useIsAfterBreakpoint",b.__docgenInfo={description:"",displayName:"useIsAfterBreakpoint",props:{}}}catch{}const M=({brandName:a,logoBrand:n})=>e.jsxs(e.Fragment,{children:[e.jsx("span",{className:d(n==="amsterdam"&&!!a&&"ams-page-header__logo-container"),children:e.jsx(re,{brand:n})}),a&&e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__brand-name",children:a})]}),J=o.forwardRef(({brandName:a,children:n,className:l,logoBrand:s="amsterdam",logoLink:m="/",logoLinkTitle:Q="Ga naar de homepage",menuButtonText:w="Menu",menuItems:j,navigationLabel:X="Hoofdnavigatie",noMenuButtonOnWideWindow:N,...Y},ee)=>{const[f,v]=o.useState(!1),k=!!n,H=k&&b("wide");return o.useEffect(()=>{N&&H&&v(!1)},[H]),e.jsxs("header",{...Y,className:d("ams-page-header",l),ref:ee,children:[e.jsxs("a",{className:"ams-page-header__logo-link",href:m,children:[e.jsx("span",{className:"ams-visually-hidden",children:Q}),e.jsx(M,{brandName:a,logoBrand:s})]}),(k||j)&&e.jsxs("nav",{"aria-labelledby":"primary-navigation",className:"ams-page-header__navigation",children:[e.jsx("h2",{className:"ams-visually-hidden",id:"primary-navigation",children:X}),e.jsx("div",{className:"ams-page-header__logo-link ams-page-header__logo-link--hidden",children:e.jsx(M,{brandName:a,logoBrand:s})}),e.jsxs("ul",{className:"ams-page-header__menu",children:[j,k&&e.jsx("li",{className:d(N&&"ams-page-header__mega-menu-button-item--hide-on-wide-window"),children:e.jsxs("button",{"aria-controls":"ams-page-header-mega-menu","aria-expanded":f,className:"ams-page-header__mega-menu-button",onClick:()=>v(!f),type:"button",children:[e.jsx("span",{className:"ams-page-header__mega-menu-button-label",children:w}),e.jsx("span",{"aria-hidden":"true",className:"ams-page-header__mega-menu-button-hidden-label",children:w}),e.jsx(ne,{svg:e.jsx(y,{className:d("ams-page-header__menu-icon",f&&"ams-page-header__menu-icon--open")})})]})})]}),k&&e.jsx("div",{className:d("ams-page-header__mega-menu",!f&&"ams-page-header__mega-menu--closed"),id:"ams-page-header-mega-menu",children:n})]})]})});J.displayName="PageHeader";const i=Object.assign(J,{GridCellNarrowWindowOnly:F,MenuLink:U});try{i.displayName="PageHeader",i.__docgenInfo={description:"",displayName:"PageHeader",props:{brandName:{defaultValue:null,description:"The name of the application.",name:"brandName",required:!1,type:{name:"string"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkTitle:{defaultValue:{value:"Ga naar de homepage"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menuButtonText:{defaultValue:{value:"Menu"},description:"The text for the menu button.",name:"menuButtonText",required:!1,type:{name:"string"}},menuItems:{defaultValue:null,description:"A slot for the menu items. Use PageHeader.MenuLink here.",name:"menuItems",required:!1,type:{name:"ReactNode"}},navigationLabel:{defaultValue:{value:"Hoofdnavigatie"},description:"The accessible label for the navigation section.",name:"navigationLabel",required:!1,type:{name:"string"}},noMenuButtonOnWideWindow:{defaultValue:null,description:"Whether the menu button is visible on wide screens.",name:"noMenuButtonOnWideWindow",required:!1,type:{name:"boolean"}}}}}catch{}const se={title:"Components/Containers/Page Header",component:i},_=[[{href:"#",label:"Kaart"},{href:"#",label:"Panoramabeelden"},{href:"#",label:"Tabellen"},{href:"#",label:"Catalogus (Beta)"},{href:"#",label:"Kaarten"},{href:"#",label:"Datacatalogus"}],[{href:"#",label:"Over de organisatie"},{href:"#",label:"Over het dataplatform"}],[{href:"#",label:"Help"},{href:"#",label:"Contact"}]],u={args:{brandName:"Data Amsterdam",children:e.jsxs(t,{paddingBottom:"2x-large",children:[e.jsx(i.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsxs(t.Cell,{span:4,children:[e.jsx(x,{className:"ams-mb-s",level:3,children:"Onderdelen"}),e.jsx(r,{children:_[0].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(t.Cell,{span:4,children:[e.jsx(x,{className:"ams-mb-s",level:3,children:"Over ons"}),e.jsx(r,{children:_[1].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(t.Cell,{span:4,children:[e.jsx(x,{className:"ams-mb-s",level:3,children:"Help"}),e.jsx(r,{children:_[2].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]})]}),menuItems:[e.jsx(i.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(i.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},2)]}},c={args:{children:e.jsxs(t,{gapVertical:"large",paddingBottom:"2x-large",children:[e.jsx(i.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsx(t.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",children:"Regular collapsible menu link"})})})]}),menuItems:[e.jsx(i.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(i.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},2)]}},W=[{href:"#",label:"Stad"},{href:"#",label:"Techniek"},{href:"#",label:"Historie"},{href:"#",label:"Duurzaamheid"}],h={args:{brandName:"Aan de Amsterdamse grachten",children:e.jsx(r,{className:"ams-mb-l",children:W.map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))}),menuItems:[...W.map(({href:a,label:n})=>e.jsx(i.MenuLink,{href:a,children:n},n)),e.jsx(i.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},"Zoeken")],noMenuButtonOnWideWindow:!0}},g={args:{brandName:"Mijn Amsterdam",menuItems:e.jsx(i.MenuLink,{fixed:!0,href:"#",children:"Inloggen"})}},p={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},L={args:{children:e.jsx(t,{children:e.jsx(t.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})})}),menuButtonText:"Alle onderwerpen",navigationLabel:"Navigatie"}};var P,C,G;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    brandName: 'Data Amsterdam',
    children: <Grid paddingBottom="2x-large">
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
}`,...(G=(C=u.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var O,B,I;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: <Grid gapVertical="large" paddingBottom="2x-large">
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
}`,...(I=(B=c.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var T,S,E;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    brandName: 'Aan de Amsterdamse grachten',
    children: <LinkList className="ams-mb-l">
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
    }) => <PageHeader.MenuLink href={href} key={label}>
          {label}
        </PageHeader.MenuLink>), <PageHeader.MenuLink fixed href="#" key="Zoeken">
        Zoeken
      </PageHeader.MenuLink>],
    noMenuButtonOnWideWindow: true
  }
}`,...(E=(S=h.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var A,V,q;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: <PageHeader.MenuLink fixed href="#">
        Inloggen
      </PageHeader.MenuLink>
  }
}`,...(q=(V=g.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var D,R,Z;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(Z=(R=p.parameters)==null?void 0:R.docs)==null?void 0:Z.source}}};var z,$,K;L.parameters={...L.parameters,docs:{...(z=L.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
    navigationLabel: 'Navigatie'
  }
}`,...(K=($=L.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};const le=["Default","WithMovingLinks","WithoutMenuButtonOnWideWindow","WithoutMenuButton","WithCustomLogoLink","WithCustomTexts"],ge=Object.freeze(Object.defineProperty({__proto__:null,Default:u,WithCustomLogoLink:p,WithCustomTexts:L,WithMovingLinks:c,WithoutMenuButton:g,WithoutMenuButtonOnWideWindow:h,__namedExportsOrder:le,default:se},Symbol.toStringTag,{value:"Module"}));export{ge as P,c as W,h as a,g as b,p as c,L as d};
