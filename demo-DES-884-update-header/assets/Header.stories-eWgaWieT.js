import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{G as m,m as r,H as L}from"./index.esm-DUv-txdP.js";import{c as t}from"./clsx-B-dksMZM.js";import{r as d}from"./index-B-o1Wr-g.js";import{G as J}from"./Grid-DYi2JQVf.js";import{L as w}from"./Logo-BnxYOw7m.js";import{H as Q}from"./Heading-BMR-3CH3.js";import{I as X}from"./Icon-B6-t9cKk.js";const _=a=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",...a,children:[e.jsx("line",{x1:"0",x2:"100%",y1:"50%",y2:"50%",className:"ams-header__menu-icon-top"}),e.jsx("line",{x1:"0",x2:"100%",y1:"50%",y2:"50%",className:"ams-header__menu-icon-middle"}),e.jsx("line",{x1:"0",x2:"100%",y1:"50%",y2:"50%",className:"ams-header__menu-icon-bottom"})]});try{_.displayName="HeaderMenuIcon",_.__docgenInfo={description:"",displayName:"HeaderMenuIcon",props:{}}}catch{}const Z=d.forwardRef(({children:a,className:n,fixed:s,...i},o)=>e.jsx("li",{className:t("ams-header__menu-item",s&&"ams-header__menu-item--fixed"),children:e.jsx("a",{...i,className:t("ams-header__menu-link",n),ref:o,children:a})}));Z.displayName="Header.MenuLink";try{Header.MenuLink.displayName="Header.MenuLink",Header.MenuLink.__docgenInfo={description:"",displayName:"Header.MenuLink",props:{fixed:{defaultValue:null,description:"",name:"fixed",required:!1,type:{name:"boolean"}}}}}catch{}const $=d.forwardRef(({children:a,className:n,...s},i)=>e.jsx(J.Cell,{...s,className:t("ams-header__narrow-screen-only-grid-cell",n),ref:i,children:a}));$.displayName="Header.NarrowScreenOnlyGridCell";try{Header.NarrowScreenOnlyGridCell.displayName="Header.NarrowScreenOnlyGridCell",Header.NarrowScreenOnlyGridCell.__docgenInfo={description:"",displayName:"Header.NarrowScreenOnlyGridCell",props:{as:{defaultValue:null,description:"The HTML tag to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"main"'},{value:'"div"'},{value:'"section"'},{value:'"aside"'},{value:'"footer"'},{value:'"header"'},{value:'"nav"'}]}},span:{defaultValue:null,description:`Lets the cell span the full width of all grid variants.
The amount of grid columns the cell spans.`,name:"span",required:!1,type:{name:'"all" | GridColumnNumber | GridColumnNumbers'}},start:{defaultValue:null,description:"The index of the grid column the cell starts at.",name:"start",required:!1,type:{name:"GridColumnNumber | GridColumnNumbers"}}}}}catch{}const Y={medium:"36rem",wide:"68rem"},x=a=>{const[n,s]=d.useState(!1);return d.useLayoutEffect(()=>{if(a&&typeof window<"u"){const i=window.matchMedia(`(min-width: ${Y[a]})`);i.matches!==n&&s(i.matches);const o=()=>s(i.matches);return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)}},[n,a]),n};try{x.displayName="useIsAfterBreakpoint",x.__docgenInfo={description:"",displayName:"useIsAfterBreakpoint",props:{}}}catch{}const K=d.forwardRef(({brandName:a,className:n,children:s,logoBrand:i="amsterdam",logoLink:o="/",logoLinkTitle:P="Ga naar de homepage",menuItems:b,menuButtonText:v="Menu",navigationLabel:U="Hoofdnavigatie",noMenuButtonOnWideScreen:y,...N},F)=>{const[g,j]=d.useState(!1),H=x("wide");return d.useEffect(()=>{y&&H&&j(!1)},[H]),e.jsxs("header",{...N,ref:F,className:t("ams-header",n),children:[e.jsxs("div",{className:"ams-header__branding",children:[e.jsxs("a",{className:"ams-header__logo-link",href:o,children:[e.jsx("span",{className:"ams-visually-hidden",children:P}),e.jsx(w,{brand:i})]}),a&&e.jsx(Q,{level:1,size:"level-5",className:"ams-header__brand-name",children:a})]}),(s||b)&&e.jsxs("nav",{className:"ams-header__navigation","aria-labelledby":"primary-navigation",children:[e.jsx("h2",{id:"primary-navigation",className:"ams-visually-hidden",children:U}),e.jsxs("div",{className:"ams-header__branding ams-header__branding--hidden","aria-hidden":!0,children:[e.jsx("div",{className:"ams-header__logo-link",children:e.jsx(w,{brand:i})}),a&&e.jsx("span",{className:"ams-heading ams-heading--level-5 ams-header__brand-name",children:a})]}),e.jsxs("ul",{className:"ams-header__menu",children:[b,e.jsx("li",{className:t(y&&"ams-header__mega-menu-button-item--hide-on-wide-screen"),children:e.jsxs("button",{...N,"aria-controls":"ams-mega-menu","aria-expanded":g,className:"ams-header__mega-menu-button",onClick:()=>j(!g),type:"button",children:[e.jsx("span",{className:"ams-header__mega-menu-button-label",children:v}),e.jsx("span",{"aria-hidden":"true",className:"ams-header__mega-menu-button-hidden-label",children:v}),e.jsx(X,{svg:e.jsx(_,{className:t("ams-header__menu-icon",g&&"ams-header__menu-icon--open")}),size:"level-6"})]})})]}),s&&e.jsx("div",{className:t("ams-header__mega-menu",!g&&"ams-header__mega-menu--closed"),id:"ams-mega-menu",children:s})]})]})});K.displayName="Header";const l=Object.assign(K,{MenuLink:Z,NarrowScreenOnlyGridCell:$});try{l.displayName="Header",l.__docgenInfo={description:"",displayName:"Header",props:{brandName:{defaultValue:null,description:"The name of the application.",name:"brandName",required:!1,type:{name:"string"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkTitle:{defaultValue:{value:"Ga naar de homepage"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menuItems:{defaultValue:null,description:"A slot for the menu items. Use Header.MenuLink here.",name:"menuItems",required:!1,type:{name:"ReactNode"}},menuButtonText:{defaultValue:{value:"Menu"},description:"The text for the menu button.",name:"menuButtonText",required:!1,type:{name:"string"}},navigationLabel:{defaultValue:{value:"Hoofdnavigatie"},description:"The accessible label for the navigation section.",name:"navigationLabel",required:!1,type:{name:"string"}},noMenuButtonOnWideScreen:{defaultValue:null,description:"Whether the menu button is visible on wide screens.",name:"noMenuButtonOnWideScreen",required:!1,type:{name:"boolean"}}}}}catch{}const ee={title:"Components/Containers/Header",component:l},k=[[{label:"Kaart",href:"#"},{label:"Panoramabeelden",href:"#"},{label:"Tabellen",href:"#"},{label:"Catalogus (Beta)",href:"#"},{label:"Kaarten",href:"#"},{label:"Datacatalogus",href:"#"}],[{label:"Over de organisatie",href:"#"},{label:"Over het dataplatform",href:"#"}],[{label:"Help",href:"#"},{label:"Contact",href:"#"}]],c={args:{brandName:"Data Amsterdam",menuItems:[e.jsx(l.MenuLink,{href:"#",children:"Inloggen"},1),e.jsx(l.MenuLink,{href:"#",fixed:!0,children:"Zoeken"},2)],children:e.jsxs(m,{paddingBottom:"large",children:[e.jsx(l.NarrowScreenOnlyGridCell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",children:"Inloggen"})})}),e.jsxs(m.Cell,{span:4,children:[e.jsx(L,{level:2,size:"level-3",className:"ams-mb--sm",children:"Onderdelen"}),e.jsx(r,{children:k[0].map(({label:a,href:n})=>e.jsx(r.Link,{href:n,children:a},a))})]}),e.jsxs(m.Cell,{span:4,children:[e.jsx(L,{level:2,size:"level-3",className:"ams-mb--sm",children:"Over ons"}),e.jsx(r,{children:k[1].map(({label:a,href:n})=>e.jsx(r.Link,{href:n,children:a},a))})]}),e.jsxs(m.Cell,{span:4,children:[e.jsx(L,{level:2,size:"level-3",className:"ams-mb--sm",children:"Help"}),e.jsx(r,{children:k[2].map(({label:a,href:n})=>e.jsx(r.Link,{href:n,children:a},a))})]})]})}},M=[{label:"Stad",href:"#"},{label:"Techniek",href:"#"},{label:"Historie",href:"#"},{label:"Duurzaamheid",href:"#"}],u={args:{brandName:"Aan de Amsterdamse grachten",menuItems:[...M.map(({label:a,href:n})=>e.jsx(l.MenuLink,{href:n,children:a},a)),e.jsx(l.MenuLink,{href:"#",fixed:!0,children:"Zoeken"},"Zoeken")],noMenuButtonOnWideScreen:!0,children:e.jsx(r,{className:"ams-mb--lg",children:M.map(({label:a,href:n})=>e.jsx(r.Link,{href:n,children:a},a))})}},h={args:{brandName:"Mijn Amsterdam"}},p={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},f={args:{menuButtonText:"Hoofdmenu",navigationLabel:"Navigatie",children:e.jsx(m,{children:e.jsx(m.Cell,{span:"all",children:e.jsx(r,{children:e.jsx(r.Link,{href:"#",children:"Inloggen"})})})})}};var C,G,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    brandName: 'Data Amsterdam',
    menuItems: [<Header.MenuLink key={1} href="#">
        Inloggen
      </Header.MenuLink>, <Header.MenuLink key={2} href="#" fixed>
        Zoeken
      </Header.MenuLink>],
    children: <Grid paddingBottom="large">
        <Header.NarrowScreenOnlyGridCell span="all">
          <LinkList>
            <LinkList.Link href="#">Inloggen</LinkList.Link>
          </LinkList>
        </Header.NarrowScreenOnlyGridCell>
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
}`,...(S=(G=c.parameters)==null?void 0:G.docs)==null?void 0:S.source}}};var O,I,B;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    brandName: 'Aan de Amsterdamse grachten',
    menuItems: [...WithoutMenuButtonOnWideScreenStoryLinks.map(({
      label,
      href
    }) => <Header.MenuLink key={label} href={href}>
          {label}
        </Header.MenuLink>), <Header.MenuLink key="Zoeken" href="#" fixed>
        Zoeken
      </Header.MenuLink>],
    noMenuButtonOnWideScreen: true,
    children: <LinkList className="ams-mb--lg">
        {WithoutMenuButtonOnWideScreenStoryLinks.map(({
        label,
        href
      }) => <LinkList.Link key={label} href={href}>
            {label}
          </LinkList.Link>)}
      </LinkList>
  }
}`,...(B=(I=u.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var W,T,A;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    brandName: 'Mijn Amsterdam'
  }
}`,...(A=(T=h.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var z,q,V;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(V=(q=p.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var D,E,R;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    menuButtonText: 'Hoofdmenu',
    navigationLabel: 'Navigatie',
    children: <Grid>
        <Grid.Cell span="all">
          <LinkList>
            <LinkList.Link href="#">Inloggen</LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
  }
}`,...(R=(E=f.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const ae=["Default","WithoutMenuButtonOnWideScreen","WithoutMenuButton","WithCustomLogoLink","WithCustomTexts"],me=Object.freeze(Object.defineProperty({__proto__:null,Default:c,WithCustomLogoLink:p,WithCustomTexts:f,WithoutMenuButton:h,WithoutMenuButtonOnWideScreen:u,__namedExportsOrder:ae,default:ee},Symbol.toStringTag,{value:"Module"}));export{me as H,u as W,h as a,p as b,f as c};
