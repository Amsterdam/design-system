import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{G as t,m as r,H as x}from"./index.esm-C_Wfrlbm.js";import{c as d}from"./clsx-B-dksMZM.js";import{r as o}from"./index-C0MU9AHG.js";import{G as le}from"./Grid-ZcS4-HR7.js";import{H as te}from"./Heading-YmEnH81o.js";import{I as de}from"./Icon-plsGHcLz.js";import{L as C}from"./Logo-Dz7UPqVs.js";const ee=o.forwardRef(({children:a,className:n,...l},i)=>e.jsx(le.Cell,{...l,className:d("ams-header__grid-cell-narrow-window-only",n),ref:i,children:a}));ee.displayName="Header.GridCellNarrowWindowOnly";try{Header.GridCellNarrowWindowOnly.displayName="Header.GridCellNarrowWindowOnly",Header.GridCellNarrowWindowOnly.__docgenInfo={description:"",displayName:"Header.GridCellNarrowWindowOnly",props:{as:{defaultValue:null,description:"The HTML tag to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"aside"'},{value:'"div"'},{value:'"footer"'},{value:'"section"'},{value:'"header"'},{value:'"nav"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}const v=a=>e.jsxs("svg",{"aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...a,children:[e.jsx("line",{className:"ams-header__menu-icon-top",x1:"0",x2:"100%",y1:"50%",y2:"50%"}),e.jsx("line",{className:"ams-header__menu-icon-middle",x1:"0",x2:"100%",y1:"50%",y2:"50%"}),e.jsx("line",{className:"ams-header__menu-icon-bottom",x1:"0",x2:"100%",y1:"50%",y2:"50%"})]});try{v.displayName="HeaderMenuIcon",v.__docgenInfo={description:"",displayName:"HeaderMenuIcon",props:{}}}catch{}const ae=o.forwardRef(({children:a,className:n,fixed:l,...i},m)=>e.jsx("li",{className:d("ams-header__menu-item",l&&"ams-header__menu-item--fixed"),children:e.jsx("a",{...i,className:d("ams-header__menu-link",n),ref:m,children:a})}));ae.displayName="Header.MenuLink";try{Header.MenuLink.displayName="Header.MenuLink",Header.MenuLink.__docgenInfo={description:"",displayName:"Header.MenuLink",props:{fixed:{defaultValue:null,description:"",name:"fixed",required:!1,type:{name:"boolean"}}}}}catch{}const oe={medium:"36rem",wide:"68rem"},b=a=>{const[n,l]=o.useState(!1);return o.useLayoutEffect(()=>{if(a&&typeof window<"u"){const i=window.matchMedia(`(min-width: ${oe[a]})`);i.matches!==n&&l(i.matches);const m=()=>l(i.matches);return window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)}},[n,a]),n};try{b.displayName="useIsAfterBreakpoint",b.__docgenInfo={description:"",displayName:"useIsAfterBreakpoint",props:{}}}catch{}const G=({logoBrand:a,responsiveLogo:n})=>e.jsxs(e.Fragment,{children:[e.jsx(C,{brand:a,className:d(a==="amsterdam"&&n&&"ams-header__logo")}),a==="amsterdam"&&n&&e.jsx(C,{brand:"amsterdam-emblem-only",className:"ams-header__logo--emblem-only"})]}),ne=o.forwardRef(({brandName:a,children:n,className:l,logoBrand:i="amsterdam",logoLink:m="/",logoLinkTitle:re="Ga naar de homepage",menuButtonText:y="Menu",menuItems:j,navigationLabel:se="Hoofdnavigatie",noMenuButtonOnWideWindow:N,responsiveLogo:w=!0,...H},ie)=>{const[k,M]=o.useState(!1),W=b("wide");return o.useEffect(()=>{N&&W&&M(!1)},[W]),e.jsxs("header",{...H,className:d("ams-header",l),ref:ie,children:[e.jsxs("div",{className:"ams-header__branding",children:[e.jsxs("a",{className:"ams-header__logo-link",href:m,children:[e.jsx("span",{className:"ams-visually-hidden",children:re}),e.jsx(G,{logoBrand:i,responsiveLogo:w})]}),a&&e.jsx(te,{className:"ams-header__brand-name",level:1,size:"level-5",children:a})]}),(n||j)&&e.jsxs("nav",{"aria-labelledby":"primary-navigation",className:"ams-header__navigation",children:[e.jsx("h2",{className:"ams-visually-hidden",id:"primary-navigation",children:se}),e.jsxs("div",{"aria-hidden":!0,className:"ams-header__branding ams-header__branding--hidden",children:[e.jsx("div",{className:"ams-header__logo-link",children:e.jsx(G,{logoBrand:i,responsiveLogo:w})}),a&&e.jsx("span",{className:"ams-heading ams-heading--level-5 ams-header__brand-name",children:a})]}),e.jsxs("ul",{className:"ams-header__menu",children:[j,n&&e.jsx("li",{className:d(N&&"ams-header__mega-menu-button-item--hide-on-wide-window"),children:e.jsxs("button",{...H,"aria-controls":"ams-mega-menu","aria-expanded":k,className:"ams-header__mega-menu-button",onClick:()=>M(!k),type:"button",children:[e.jsx("span",{className:"ams-header__mega-menu-button-label",children:y}),e.jsx("span",{"aria-hidden":"true",className:"ams-header__mega-menu-button-hidden-label",children:y}),e.jsx(de,{size:"level-5",svg:e.jsx(v,{className:d("ams-header__menu-icon",k&&"ams-header__menu-icon--open")})})]})})]}),n&&e.jsx("div",{className:d("ams-header__mega-menu",!k&&"ams-header__mega-menu--closed"),id:"ams-mega-menu",children:n})]})]})});ne.displayName="Header";const s=Object.assign(ne,{GridCellNarrowWindowOnly:ee,MenuLink:ae});try{s.displayName="Header",s.__docgenInfo={description:"",displayName:"Header",props:{brandName:{defaultValue:null,description:"The name of the application.",name:"brandName",required:!1,type:{name:"string"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkTitle:{defaultValue:{value:"Ga naar de homepage"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menuButtonText:{defaultValue:{value:"Menu"},description:"The text for the menu button.",name:"menuButtonText",required:!1,type:{name:"string"}},menuItems:{defaultValue:null,description:"A slot for the menu items. Use Header.MenuLink here.",name:"menuItems",required:!1,type:{name:"ReactNode"}},navigationLabel:{defaultValue:{value:"Hoofdnavigatie"},description:"The accessible label for the navigation section.",name:"navigationLabel",required:!1,type:{name:"string"}},noMenuButtonOnWideWindow:{defaultValue:null,description:"Whether the menu button is visible on wide screens.",name:"noMenuButtonOnWideWindow",required:!1,type:{name:"boolean"}},responsiveLogo:{defaultValue:{value:"true"},description:"Whether the Amsterdam logo should be responsive.",name:"responsiveLogo",required:!1,type:{name:"boolean"}}}}}catch{}const me={title:"Components/Containers/Header",component:s},_=[[{href:"#",label:"Kaart"},{href:"#",label:"Panoramabeelden"},{href:"#",label:"Tabellen"},{href:"#",label:"Catalogus (Beta)"},{href:"#",label:"Kaarten"},{href:"#",label:"Datacatalogus"}],[{href:"#",label:"Over de organisatie"},{href:"#",label:"Over het dataplatform"}],[{href:"#",label:"Help"},{href:"#",label:"Contact"}]],u={args:{brandName:"Data Amsterdam",children:e.jsxs(t,{paddingBottom:"large",children:[e.jsx(s.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsxs(t.Cell,{span:4,children:[e.jsx(x,{className:"ams-mb--sm",level:2,size:"level-3",children:"Onderdelen"}),e.jsx(r,{children:_[0].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(t.Cell,{span:4,children:[e.jsx(x,{className:"ams-mb--sm",level:2,size:"level-3",children:"Over ons"}),e.jsx(r,{children:_[1].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]}),e.jsxs(t.Cell,{span:4,children:[e.jsx(x,{className:"ams-mb--sm",level:2,size:"level-3",children:"Help"}),e.jsx(r,{children:_[2].map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))})]})]}),menuItems:[e.jsx(s.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(s.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},2)]}},c={args:{children:e.jsxs(t,{gapVertical:"small",paddingBottom:"large",children:[e.jsx(s.GridCellNarrowWindowOnly,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})}),e.jsx(t.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",children:"Regular collapsible menu link"})})})]}),menuItems:[e.jsx(s.MenuLink,{href:"#",lang:"en",children:"English"},1),e.jsx(s.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},2)]}},O=[{href:"#",label:"Stad"},{href:"#",label:"Techniek"},{href:"#",label:"Historie"},{href:"#",label:"Duurzaamheid"}],h={args:{brandName:"Aan de Amsterdamse grachten",children:e.jsx(r,{className:"ams-mb--lg",children:O.map(({href:a,label:n})=>e.jsx(r.Link,{href:a,children:n},n))}),menuItems:[...O.map(({href:a,label:n})=>e.jsx(s.MenuLink,{href:a,children:n},n)),e.jsx(s.MenuLink,{fixed:!0,href:"#",children:"Zoeken"},"Zoeken")],noMenuButtonOnWideWindow:!0}},p={args:{brandName:"Mijn Amsterdam",menuItems:e.jsx(s.MenuLink,{fixed:!0,href:"#",children:"Inloggen"})}},g={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},L={args:{children:e.jsx(t,{children:e.jsx(t.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",lang:"en",children:"English"})})})}),menuButtonText:"Hoofdmenu",navigationLabel:"Navigatie"}},f={args:{responsiveLogo:!1},parameters:{docs:{source:{code:"<Header responsiveLogo={false} />"}}}};var I,B,T;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(T=(B=u.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var S,A,E;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var V,q,z;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(z=(q=h.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var R,D,Z;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: <Header.MenuLink fixed href="#">
        Inloggen
      </Header.MenuLink>
  }
}`,...(Z=(D=p.parameters)==null?void 0:D.docs)==null?void 0:Z.source}}};var $,K,F;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(F=(K=g.parameters)==null?void 0:K.docs)==null?void 0:F.source}}};var P,U,J;L.parameters={...L.parameters,docs:{...(P=L.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(J=(U=L.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    responsiveLogo: false
  },
  parameters: {
    docs: {
      source: {
        code: '<Header responsiveLogo={false} />' // Storybook removes boolean props set to \`false\`, which it should not here.
      }
    }
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ue=["Default","WithMovingLinks","WithoutMenuButtonOnWideWindow","WithoutMenuButton","WithCustomLogoLink","WithCustomTexts","WithoutResponsiveAmsterdamLogo"],_e=Object.freeze(Object.defineProperty({__proto__:null,Default:u,WithCustomLogoLink:g,WithCustomTexts:L,WithMovingLinks:c,WithoutMenuButton:p,WithoutMenuButtonOnWideWindow:h,WithoutResponsiveAmsterdamLogo:f,__namedExportsOrder:ue,default:me},Symbol.toStringTag,{value:"Module"}));export{_e as H,c as W,h as a,p as b,g as c,L as d,f as e};
