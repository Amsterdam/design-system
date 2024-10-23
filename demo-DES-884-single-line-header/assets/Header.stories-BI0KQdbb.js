import{j as e}from"./jsx-runtime-BlAj40OV.js";import{d as a,S as Y}from"./index.esm-DMpIl1xy.js";import{l as R,d as ee}from"./index.esm-CBAebPiM.js";import{c as ne}from"./clsx-B-dksMZM.js";import{r as j}from"./index-Cs7sjTYM.js";import{L as x}from"./Logo-Co1O1cSe.js";import{H as f}from"./Heading-DUu-96hO.js";import{P as s}from"./PageMenu-C310ZVKQ.js";import{G as M}from"./Grid-CsHNJ6m8.js";import{M as ae}from"./MegaMenu-BXb-vWV9.js";import{L as n}from"./LinkList-DTt0RDEF.js";const g=j.forwardRef(({appName:r,className:Z,logoBrand:k="amsterdam",logoLink:$="/",logoLinkTitle:K="Ga naar de homepage",...U},J)=>{const[h,Q]=j.useState(!1),X=()=>{Q(!h)};return e.jsxs(e.Fragment,{children:[e.jsxs("header",{...U,ref:J,className:ne("ams-header",Z),children:[e.jsxs("div",{className:"ams-header__section",children:[e.jsxs("a",{className:"ams-header__logo-link",href:$,children:[e.jsx("span",{className:"ams-visually-hidden",children:K}),e.jsx(x,{brand:k})]}),r&&e.jsx(f,{className:"ams-header__app-name",level:1,size:"level-5",children:r})]}),e.jsxs("nav",{className:"ams-header__navigation","aria-labelledby":"primary-navigation",children:[e.jsx("h2",{id:"primary-navigation",className:"ams-visually-hidden",children:"Hoofdnavigatie"}),e.jsxs("div",{className:"ams-header__section","aria-hidden":!0,style:{opacity:0},children:[e.jsx("div",{className:"ams-header__logo-link",children:e.jsx(x,{brand:k})}),r&&e.jsx("span",{className:"ams-heading ams-heading--level-5 ams-header__app-name",children:r})]}),e.jsxs(s,{alignEnd:!0,className:"ams-header__page-menu",children:[e.jsx(s.Item,{rank:"secondary",children:e.jsx(s.Link,{href:"#",lang:"en",children:"English"})}),e.jsx(s.Item,{rank:"secondary",children:e.jsx(s.Link,{href:"#",children:"Mijn Amsterdam"})}),e.jsx(s.Item,{children:e.jsxs(s.Button,{icon:R,onClick:X,"aria-expanded":h,"aria-controls":"ams-mega-menu",children:[e.jsx("span",{className:"ams-visually-hidden",children:`${h?"Verberg":"Toon"} `}),"Menu"]})})]}),e.jsx(M,{className:h?"":"ams-header__mega-menu--closed",paddingBottom:"large",style:{width:"100%",pointerEvents:"auto"},id:"ams-mega-menu",children:e.jsxs(M.Cell,{span:"all",children:[e.jsx(f,{level:1,size:"level-2",children:"Alle onderwerpen"}),e.jsx(ae.ListCategory,{children:e.jsxs(n,{children:[e.jsx(n.Link,{href:"#",children:"Afval"}),e.jsx(n.Link,{href:"#",children:"Bestuur en organisatie"}),e.jsx(n.Link,{href:"#",children:"Bouw- en verkeersprojecten"}),e.jsx(n.Link,{href:"#",children:"Burgerzaken"}),e.jsx(n.Link,{href:"#",children:"Diversiteit"}),e.jsx(n.Link,{href:"#",children:"Gemeentebelastingen"}),e.jsx(n.Link,{href:"#",children:"Gezondheidsdienst (GGD)"}),e.jsx(n.Link,{href:"#",children:"Kunst en cultuur"}),e.jsx(n.Link,{href:"#",children:"Ondernemen"}),e.jsx(n.Link,{href:"#",children:"Onderwijs en jeugd"}),e.jsx(n.Link,{href:"#",children:"Parkeren"}),e.jsx(n.Link,{href:"#",children:"Sport"}),e.jsx(n.Link,{href:"#",children:"Stadsdelen"}),e.jsx(n.Link,{href:"#",children:"Subsidies"}),e.jsx(n.Link,{href:"#",children:"Vacatures"}),e.jsx(n.Link,{href:"#",children:"Verkeer en vervoer"}),e.jsx(n.Link,{href:"#",children:"Vrije tijd"}),e.jsx(n.Link,{href:"#",children:"Werk aan de weg"}),e.jsx(n.Link,{href:"#",children:"Werk en inkomen"}),e.jsx(n.Link,{href:"#",children:"Wonen en leefomgeving"}),e.jsx(n.Link,{href:"#",children:"Zorg en ondersteuning"})]})})]})})]})]}),e.jsx("p",{children:"hallo"})]})});g.displayName="Header";try{g.displayName="Header",g.__docgenInfo={description:"",displayName:"Header",props:{appName:{defaultValue:null,description:"A site-wide title for the website or application.",name:"appName",required:!1,type:{name:"string"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkTitle:{defaultValue:{value:"Ga naar de homepage"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menu:{defaultValue:null,description:"A secondary menu of links and buttons. Use a Page Menu. Can include buttons to show the Mega Menu or a Search Field.",name:"menu",required:!1,type:{name:"ReactNode"}}}}}catch{}const p=e.jsx(a.Item,{children:e.jsx(a.Button,{icon:R,onClick:()=>{},children:"Menu"})}),re=e.jsx(a.Item,{children:e.jsx(a.Button,{icon:ee,onClick:()=>{},children:"Zoeken"})}),se=e.jsxs(e.Fragment,{children:[e.jsx(a.Item,{rank:"secondary",children:e.jsx(a.Link,{href:"#",lang:"en",children:"English"})}),e.jsx(a.Item,{rank:"secondary",children:e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"})})]}),ie={title:"Components/Containers/Header",component:g,decorators:[r=>e.jsx(Y,{children:e.jsx(r,{})})]},i={},t={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},o={args:{appName:"Onderzoek en Statistiek"}},d={args:{menu:e.jsxs(a,{alignEnd:!0,children:[e.jsx(a.Item,{children:e.jsx(a.Link,{href:"#",children:"Menu link 1"})}),e.jsx(a.Item,{children:e.jsx(a.Link,{href:"#",children:"Menu link 2"})}),e.jsx(a.Item,{children:e.jsx(a.Link,{href:"#",children:"Menu link 3"})})]})}},l={args:{menu:e.jsx(a,{alignEnd:!0,children:p})}},c={args:{menu:e.jsxs(a,{alignEnd:!0,children:[se,re,p]})}},m={args:{appName:"Onderzoek en Statistiek",menu:e.jsx(a,{alignEnd:!0,children:p})}},u={args:{appName:"Onderzoek en Statistiek"}};var L,v,S;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:"{}",...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var _,y,N;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(N=(y=t.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var P,B,A;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek'
  }
}`,...(A=(B=o.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var b,w,I;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    menu: <PageMenu alignEnd>
        <PageMenu.Item>
          <PageMenu.Link href="#">Menu link 1</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Link href="#">Menu link 2</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Link href="#">Menu link 3</PageMenu.Link>
        </PageMenu.Item>
      </PageMenu>
  }
}`,...(I=(w=d.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var W,E,z;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    menu: <PageMenu alignEnd>{MenuButton}</PageMenu>
  }
}`,...(z=(E=l.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var G,O,H;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    menu: <PageMenu alignEnd>
        {SecondaryLinks}
        {SearchButton}
        {MenuButton}
      </PageMenu>
  }
}`,...(H=(O=c.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var C,T,V;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek',
    menu: <PageMenu alignEnd>{MenuButton}</PageMenu>
  }
}`,...(V=(T=m.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var D,F,q;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek'
  }
}`,...(q=(F=u.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};const te=["Default","ForSubBrand","WithAppName","WithMenu","WithMenuButton","WithMenuAndMenuButton","WithAppNameAndMenu","WithAppNameMenuAndMenuButton"],xe=Object.freeze(Object.defineProperty({__proto__:null,Default:i,ForSubBrand:t,WithAppName:o,WithAppNameAndMenu:m,WithAppNameMenuAndMenuButton:u,WithMenu:d,WithMenuAndMenuButton:c,WithMenuButton:l,__namedExportsOrder:te,default:ie},Symbol.toStringTag,{value:"Module"}));export{t as F,xe as H,o as W,d as a,l as b,c,m as d,u as e};
