import{j as e}from"./jsx-runtime-BlAj40OV.js";import{b as a}from"./index.esm-CE-F5WZS.js";import{j as c}from"./index.esm-Bsc2owIZ.js";import{c as z}from"./clsx-B-dksMZM.js";import{r as O}from"./index-Cs7sjTYM.js";import{L as U}from"./Logo-Co1O1cSe.js";import{H as J}from"./Heading-DUu-96hO.js";const u=O.forwardRef(({appName:l,className:V,links:p,logoBrand:Z="amsterdam",logoLink:D="/",logoLinkTitle:F="Ga naar de homepage",menu:g,...I},R)=>e.jsx(e.Fragment,{children:e.jsxs("header",{...I,ref:R,className:z("ams-header",V),children:[e.jsxs("a",{href:D,className:"ams-header__logo-link",children:[e.jsx("span",{className:"ams-visually-hidden",children:F}),e.jsx(U,{brand:Z})]}),p&&e.jsx("div",{className:"ams-header__links",children:p}),g&&e.jsx("div",{className:"ams-header__menu",children:g}),l&&e.jsx("div",{className:"ams-header__app-name",children:e.jsx(J,{level:1,size:"level-3",className:"ams-header__app-name-heading",children:l})})]})}));u.displayName="Header";try{u.displayName="Header",u.__docgenInfo={description:"",displayName:"Header",props:{appName:{defaultValue:null,description:"The name of the application.",name:"appName",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"The list of menu links. Use a Page Menu here.",name:"links",required:!1,type:{name:"ReactNode"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkTitle:{defaultValue:{value:"Ga naar de homepage"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menu:{defaultValue:null,description:"A button to toggle the visibility of a Mega Menu.",name:"menu",required:!1,type:{name:"ReactNode"}}}}}catch{}const K={title:"Components/Containers/Header",component:u},n={},r={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},s={args:{appName:"Aan de Amsterdamse grachten"}},t={args:{links:e.jsxs(a,{alignEnd:!0,wrap:!1,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:c,children:"Zoeken"})]})}},o={args:{menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}},i={args:{links:e.jsxs(a,{alignEnd:!0,wrap:!1,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:c,children:"Zoeken"})]}),menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}},m={args:{appName:"Aan de Amsterdamse grachten",menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}},d={args:{appName:"Aan de Amsterdamse grachten",links:e.jsxs(a,{alignEnd:!0,wrap:!1,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:c,children:"Zoeken"})]}),menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}};var h,k,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(k=n.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var M,L,_;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(_=(L=r.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var j,N,b;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    appName: 'Aan de Amsterdamse grachten'
  }
}`,...(b=(N=s.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var A,x,P;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    links: <PageMenu alignEnd wrap={false}>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu>
  }
}`,...(P=(x=t.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var v,S,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    menu: <button className="ams-header__menu-button">Menu</button>
  }
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var w,B,W;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    links: <PageMenu alignEnd wrap={false}>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu>,
    menu: <button className="ams-header__menu-button">Menu</button>
  }
}`,...(W=(B=i.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var T,E,H;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    appName: 'Aan de Amsterdamse grachten',
    menu: <button className="ams-header__menu-button">Menu</button>
  }
}`,...(H=(E=m.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var C,q,G;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    appName: 'Aan de Amsterdamse grachten',
    links: <PageMenu alignEnd wrap={false}>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu>,
    menu: <button className="ams-header__menu-button">Menu</button>
  }
}`,...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Q=["Default","ForSubBrand","WithAppName","WithLinks","WithMenuButton","WithLinksAndMenuButton","WithAppNameAndMenuButton","WithAppNameLinksAndMenuButton"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:n,ForSubBrand:r,WithAppName:s,WithAppNameAndMenuButton:m,WithAppNameLinksAndMenuButton:d,WithLinks:t,WithLinksAndMenuButton:i,WithMenuButton:o,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{r as F,se as H,s as W,o as a,t as b,i as c,m as d,d as e};
