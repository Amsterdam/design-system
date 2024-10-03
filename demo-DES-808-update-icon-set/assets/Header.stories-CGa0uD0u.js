import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as a}from"./index.esm-CXluMf0O.js";import{m as z,k as l}from"./index.esm-CSB4iEQ9.js";import{c as O}from"./clsx-B-dksMZM.js";import{r as U}from"./index-Cs7sjTYM.js";import{L as J}from"./Logo-Co1O1cSe.js";import{H as K}from"./Heading-DUu-96hO.js";const u=U.forwardRef(({appName:c,className:V,links:p,logoBrand:Z="amsterdam",logoLink:I="/",logoLinkTitle:D="Ga naar de homepage",menu:g,...F},R)=>e.jsx(e.Fragment,{children:e.jsxs("header",{...F,ref:R,className:O("ams-header",V),children:[e.jsxs("a",{href:I,className:"ams-header__logo-link",children:[e.jsx("span",{className:"ams-visually-hidden",children:D}),e.jsx(J,{brand:Z})]}),p&&e.jsx("div",{className:"ams-header__links",children:p}),g&&e.jsx("div",{className:"ams-header__menu",children:g}),c&&e.jsx("div",{className:"ams-header__app-name",children:e.jsx(K,{level:1,size:"level-3",className:"ams-header__app-name-heading",children:c})})]})}));u.displayName="Header";try{u.displayName="Header",u.__docgenInfo={description:"",displayName:"Header",props:{appName:{defaultValue:null,description:"The name of the application.",name:"appName",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"The list of menu links. Use a Page Menu here.",name:"links",required:!1,type:{name:"ReactNode"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkTitle:{defaultValue:{value:"Ga naar de homepage"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menu:{defaultValue:null,description:"A button to toggle the visibility of a Mega Menu.",name:"menu",required:!1,type:{name:"ReactNode"}}}}}catch{}const Q={title:"Components/Containers/Header",component:u},n={},r={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},s={args:{appName:"Aan de Amsterdamse grachten"}},t={args:{links:e.jsxs(a,{alignEnd:!0,wrap:!1,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",icon:z,children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:l,children:"Zoeken"})]})}},o={args:{menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}},i={args:{links:e.jsxs(a,{alignEnd:!0,wrap:!1,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:l,children:"Zoeken"})]}),menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}},m={args:{appName:"Aan de Amsterdamse grachten",menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}},d={args:{appName:"Aan de Amsterdamse grachten",links:e.jsxs(a,{alignEnd:!0,wrap:!1,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:l,children:"Zoeken"})]}),menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}};var h,k,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(k=n.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var M,L,_;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(_=(L=r.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var N,j,A;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    appName: 'Aan de Amsterdamse grachten'
  }
}`,...(A=(j=s.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var b,x,P;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    links: <PageMenu alignEnd wrap={false}>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#" icon={NewUserLineIcon}>
          Mijn Amsterdam
        </PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu>
  }
}`,...(P=(x=t.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var v,S,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    menu: <button className="ams-header__menu-button">Menu</button>
  }
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var y,B,W;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const X=["Default","ForSubBrand","WithAppName","WithLinks","WithMenuButton","WithLinksAndMenuButton","WithAppNameAndMenuButton","WithAppNameLinksAndMenuButton"],te=Object.freeze(Object.defineProperty({__proto__:null,Default:n,ForSubBrand:r,WithAppName:s,WithAppNameAndMenuButton:m,WithAppNameLinksAndMenuButton:d,WithLinks:t,WithLinksAndMenuButton:i,WithMenuButton:o,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{r as F,te as H,s as W,o as a,t as b,i as c,m as d,d as e};
