import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as T,G as E,H as F,i}from"./index.esm-DgAShxbQ.js";import{M as $}from"./MegaMenuListCategory-EjYItpUq.js";import{m as K}from"./index.esm-Dp89hN-D.js";import{c as u}from"./clsx-B-dksMZM.js";import{r as m}from"./index-Cs7sjTYM.js";import{L as w}from"./Logo-Co1O1cSe.js";import{I as R}from"./Icon-msbkstIT.js";import{G as Z}from"./Grid-BG79T_nl.js";import{L as z}from"./LinkList-C38dP5S5.js";import{H as q}from"./Heading-DUu-96hO.js";const g=m.createContext({open:!1,setOpen:()=>{}}),h=({children:n})=>{const[a,r]=m.useState(!1);return e.jsx(g.Provider,{value:{open:a,setOpen:r},children:n})};try{h.displayName="MegaMenuNavigationContextProvider",h.__docgenInfo={description:"",displayName:"MegaMenuNavigationContextProvider",props:{}}}catch{}const J=({children:n,label:a="Hoofdnavigatie"})=>e.jsxs("nav",{className:"ams-header__navigation-lite","aria-labelledby":"primary-navigation",children:[e.jsx("h2",{id:"primary-navigation",className:"ams-visually-hidden",children:a}),n]}),W=({children:n})=>e.jsx("ul",{className:"ams-header__menu",children:n}),k=({children:n,secondary:a,...r})=>e.jsx("li",{className:u(a&&"ams-header__menu-item--secondary"),children:e.jsx("a",{...r,className:"ams-header__menu-link",children:n})}),Q=({children:n,logoBrand:a="amsterdam",appName:r,label:s="Hoofdnavigatie"})=>e.jsxs("nav",{className:"ams-mega-menu-navigation","aria-labelledby":"primary-navigation",children:[e.jsx("h2",{id:"primary-navigation",className:"ams-visually-hidden",children:s}),e.jsxs("div",{className:"ams-header__section","aria-hidden":!0,style:{opacity:0},children:[e.jsx("div",{className:"ams-header__logo-link",children:e.jsx(w,{brand:a})}),r&&e.jsx("span",{className:"ams-heading ams-heading--level-5 ams-header__app-name",children:r})]}),e.jsx(h,{children:n})]}),U=({children:n,...a})=>{const{open:r,setOpen:s}=m.useContext(g);return e.jsx("li",{children:e.jsxs("button",{...a,type:"button",className:"ams-page-menu__button","aria-controls":"ams-mega-menu","aria-expanded":r,onClick:()=>s(!r),children:[e.jsx("span",{className:"ams-visually-hidden",children:r?"Verberg ":"Toon "}),n,e.jsx(R,{svg:K,size:"level-6"})]})})},X=({children:n})=>{const{open:a}=m.useContext(g);return e.jsx(Z,{className:u("ams-mega-menu",!a&&"ams-mega-menu--closed"),id:"ams-mega-menu",paddingBottom:"large",children:n})},Y=({children:n})=>e.jsx(z,{className:"ams-mega-menu__secondary-link-list",children:n}),p=({children:n,...a})=>e.jsx(z.Link,{...a,children:n}),c=m.forwardRef(({appName:n,children:a,className:r,hasMegaMenu:s,logoBrand:A="amsterdam",logoLink:D="/",logoLinkTitle:V="Ga naar de homepage",...P},I)=>e.jsxs("header",{...P,ref:I,className:u("ams-header",s&&"ams-header--has-mega-menu",r),children:[e.jsxs("div",{className:"ams-header__section",children:[e.jsxs("a",{className:"ams-header__logo-link",href:D,children:[e.jsx("span",{className:"ams-visually-hidden",children:V}),e.jsx(w,{brand:A})]}),n&&e.jsx(q,{className:"ams-header__app-name",level:1,size:"level-5",children:n})]}),a]}));c.displayName="Header";try{c.displayName="Header",c.__docgenInfo={description:"",displayName:"Header",props:{label:{defaultValue:{value:"Hoofdnavigatie"},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}const ee={title:"Components/Containers/Header",component:c,decorators:[n=>e.jsx(T,{children:e.jsx(n,{})})]},t={},d={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},o={args:{appName:"Onderzoek en Statistiek"}},l={args:{appName:"Onderzoek en Statistiek",children:e.jsx(J,{children:e.jsxs(W,{children:[e.jsx(k,{href:"#",children:"Menu link 1"}),e.jsx(k,{href:"#",children:"Menu link 2"}),e.jsx(k,{href:"#",children:"Menu link 3"})]})})}},L={args:{appName:"Onderzoek en Statistiek",hasMegaMenu:!0},render:n=>e.jsx(c,{...n,children:e.jsxs(Q,{appName:n.appName,logoBrand:n.logoBrand,children:[e.jsxs(W,{children:[e.jsx(k,{href:"#",secondary:!0,children:"Menu link 1"}),e.jsx(k,{href:"#",secondary:!0,children:"Menu link 2"}),e.jsx(U,{children:"Menu"})]}),e.jsx(X,{children:e.jsxs(E.Cell,{span:"all",children:[e.jsxs(Y,{children:[e.jsx(p,{href:"#",children:"Menu link 1"}),e.jsx(p,{href:"#",children:"Menu link 2"})]}),e.jsx(F,{level:1,size:"level-2",children:"Alle onderwerpen"}),e.jsx($,{children:e.jsxs(i,{children:[e.jsx(i.Link,{href:"#",children:"Afval"}),e.jsx(i.Link,{href:"#",children:"Bestuur en organisatie"}),e.jsx(i.Link,{href:"#",children:"Bouw- en verkeersprojecten"}),e.jsx(i.Link,{href:"#",children:"Burgerzaken"}),e.jsx(i.Link,{href:"#",children:"Diversiteit"}),e.jsx(i.Link,{href:"#",children:"Gemeentebelastingen"}),e.jsx(i.Link,{href:"#",children:"Gezondheidsdienst (GGD)"}),e.jsx(i.Link,{href:"#",children:"Kunst en cultuur"}),e.jsx(i.Link,{href:"#",children:"Ondernemen"}),e.jsx(i.Link,{href:"#",children:"Onderwijs en jeugd"}),e.jsx(i.Link,{href:"#",children:"Parkeren"}),e.jsx(i.Link,{href:"#",children:"Sport"}),e.jsx(i.Link,{href:"#",children:"Stadsdelen"}),e.jsx(i.Link,{href:"#",children:"Subsidies"}),e.jsx(i.Link,{href:"#",children:"Vacatures"}),e.jsx(i.Link,{href:"#",children:"Verkeer en vervoer"}),e.jsx(i.Link,{href:"#",children:"Vrije tijd"}),e.jsx(i.Link,{href:"#",children:"Werk aan de weg"}),e.jsx(i.Link,{href:"#",children:"Werk en inkomen"}),e.jsx(i.Link,{href:"#",children:"Wonen en leefomgeving"}),e.jsx(i.Link,{href:"#",children:"Zorg en ondersteuning"})]})})]})})]})})};var M,f,j;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:"{}",...(j=(f=t.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var x,v,N;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(N=(v=d.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var _,y,H;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek'
  }
}`,...(H=(y=o.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var S,b,G;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek',
    children: <HeaderNavigation>
        <HeaderMenu>
          <HeaderMenuLink href="#">Menu link 1</HeaderMenuLink>
          <HeaderMenuLink href="#">Menu link 2</HeaderMenuLink>
          <HeaderMenuLink href="#">Menu link 3</HeaderMenuLink>
        </HeaderMenu>
      </HeaderNavigation>
  }
}`,...(G=(b=l.parameters)==null?void 0:b.docs)==null?void 0:G.source}}};var B,C,O;L.parameters={...L.parameters,docs:{...(B=L.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek',
    hasMegaMenu: true
  },
  render: args => <Header {...args}>
      <MegaMenuNavigation appName={args.appName} logoBrand={args.logoBrand}>
        <HeaderMenu>
          <HeaderMenuLink href="#" secondary>
            Menu link 1
          </HeaderMenuLink>
          <HeaderMenuLink href="#" secondary>
            Menu link 2
          </HeaderMenuLink>
          <MegaMenuButton>Menu</MegaMenuButton>
        </HeaderMenu>
        <MegaMenuNavigationMenu>
          <Grid.Cell span="all">
            <MegaMenuSecondaryLinkList>
              <MegaMenuSecondaryLinkListLink href="#">Menu link 1</MegaMenuSecondaryLinkListLink>
              <MegaMenuSecondaryLinkListLink href="#">Menu link 2</MegaMenuSecondaryLinkListLink>
            </MegaMenuSecondaryLinkList>
            <Heading level={1} size="level-2">
              Alle onderwerpen
            </Heading>
            <MegaMenuListCategory>
              <LinkList>
                <LinkList.Link href="#">Afval</LinkList.Link>
                <LinkList.Link href="#">Bestuur en organisatie</LinkList.Link>
                <LinkList.Link href="#">Bouw- en verkeersprojecten</LinkList.Link>
                <LinkList.Link href="#">Burgerzaken</LinkList.Link>
                <LinkList.Link href="#">Diversiteit</LinkList.Link>
                <LinkList.Link href="#">Gemeentebelastingen</LinkList.Link>
                <LinkList.Link href="#">Gezondheidsdienst (GGD)</LinkList.Link>
                <LinkList.Link href="#">Kunst en cultuur</LinkList.Link>
                <LinkList.Link href="#">Ondernemen</LinkList.Link>
                <LinkList.Link href="#">Onderwijs en jeugd</LinkList.Link>
                <LinkList.Link href="#">Parkeren</LinkList.Link>
                <LinkList.Link href="#">Sport</LinkList.Link>
                <LinkList.Link href="#">Stadsdelen</LinkList.Link>
                <LinkList.Link href="#">Subsidies</LinkList.Link>
                <LinkList.Link href="#">Vacatures</LinkList.Link>
                <LinkList.Link href="#">Verkeer en vervoer</LinkList.Link>
                <LinkList.Link href="#">Vrije tijd</LinkList.Link>
                <LinkList.Link href="#">Werk aan de weg</LinkList.Link>
                <LinkList.Link href="#">Werk en inkomen</LinkList.Link>
                <LinkList.Link href="#">Wonen en leefomgeving</LinkList.Link>
                <LinkList.Link href="#">Zorg en ondersteuning</LinkList.Link>
              </LinkList>
            </MegaMenuListCategory>
          </Grid.Cell>
        </MegaMenuNavigationMenu>
      </MegaMenuNavigation>
    </Header>
}`,...(O=(C=L.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const ne=["Default","ForSubBrand","WithAppName","WithMenu","WithMegaMenu"],me=Object.freeze(Object.defineProperty({__proto__:null,Default:t,ForSubBrand:d,WithAppName:o,WithMegaMenu:L,WithMenu:l,__namedExportsOrder:ne,default:ee},Symbol.toStringTag,{value:"Module"}));export{d as F,me as H,o as W,l as a,L as b};
