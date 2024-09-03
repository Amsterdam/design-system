import{j as e}from"./jsx-runtime-BlAj40OV.js";import{b as a}from"./index.esm-BMw-7xS-.js";import{j as c}from"./index.esm-Bsc2owIZ.js";import{c as O}from"./clsx-B-dksMZM.js";import{r as F}from"./index-Cs7sjTYM.js";import{L as U}from"./Logo-Co1O1cSe.js";import{H as J}from"./Heading-DUu-96hO.js";const l=F.forwardRef(({appName:u,className:Z,links:p,logoBrand:B="amsterdam",logoLink:D="/",logoLinkTitle:I="Ga naar de homepage",menu:g,...R},z)=>e.jsx(e.Fragment,{children:e.jsxs("header",{...R,ref:z,className:O("ams-header",Z),children:[e.jsxs("a",{href:D,className:"ams-header__logo-link",children:[e.jsx("span",{className:"ams-visually-hidden",children:I}),e.jsx(U,{brand:B})]}),p&&e.jsx("div",{className:"ams-header__links",children:p}),g&&e.jsx("div",{className:"ams-header__menu",children:g}),u&&e.jsx("div",{className:"ams-header__app-name",children:e.jsx(J,{level:1,size:"level-3",className:"ams-header__app-name-heading",children:u})})]})}));l.displayName="Header";try{l.displayName="Header",l.__docgenInfo={description:"",displayName:"Header",props:{appName:{defaultValue:null,description:"The name of the application.",name:"appName",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"The list of menu links. Use a Page Menu here.",name:"links",required:!1,type:{name:"ReactNode"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkTitle:{defaultValue:{value:"Ga naar de homepage"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menu:{defaultValue:null,description:"A button to toggle the visibility of a Mega Menu.",name:"menu",required:!1,type:{name:"ReactNode"}}}}}catch{}const K={title:"Components/Containers/Header",component:l},n={},r={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},s={args:{appName:"Aan de Amsterdamse grachten"}},t={args:{links:e.jsxs(a,{alignEnd:!0,wrap:!1,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:c,children:"Zoeken"})]})}},o={args:{menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}},i={args:{links:e.jsxs(a,{alignEnd:!0,wrap:!1,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:c,children:"Zoeken"})]}),menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}},m={args:{appName:"Aan de Amsterdamse grachten",menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}},d={args:{appName:"Aan de Amsterdamse grachten",links:e.jsxs(a,{alignEnd:!0,wrap:!1,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:c,children:"Zoeken"})]}),menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}};var h,f,k;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var M,L,_;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(_=(L=r.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var j,N,A;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    appName: 'Aan de Amsterdamse grachten'
  }
}`,...(A=(N=s.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var x,b,P;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    links: <PageMenu alignEnd wrap={false}>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu>
  }
}`,...(P=(b=t.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var v,y,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    menu: <button className="ams-header__menu-button">Menu</button>
  }
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var w,W,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(T=(W=i.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var E,H,C;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    appName: 'Aan de Amsterdamse grachten',
    menu: <button className="ams-header__menu-button">Menu</button>
  }
}`,...(C=(H=m.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var V,q,G;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Q=["Default","WithLogoVariant","WithAppName","WithLinks","WithMenu","WithLinksAndMenu","WithAppNameAndMenu","WithAppNameLinksAndMenu"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithAppName:s,WithAppNameAndMenu:m,WithAppNameLinksAndMenu:d,WithLinks:t,WithLinksAndMenu:i,WithLogoVariant:r,WithMenu:o,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{se as H,r as W,s as a,o as b,t as c,i as d,m as e,d as f};
