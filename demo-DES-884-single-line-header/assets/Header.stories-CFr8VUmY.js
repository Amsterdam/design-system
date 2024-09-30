import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as a}from"./index.esm-D2p-Q9mV.js";import{l as F,k as u}from"./index.esm-CsAWJJ2G.js";import{c as R}from"./clsx-B-dksMZM.js";import{r as U}from"./index-Cs7sjTYM.js";import{L as J}from"./Logo-Co1O1cSe.js";import{H as K}from"./Heading-DUu-96hO.js";import{B as Q}from"./Button-fZZcNY7w.js";import{I as X}from"./Icon-msbkstIT.js";const c=U.forwardRef(({appName:m,className:q,links:p,logoBrand:G="amsterdam",logoLink:I="/",logoLinkTitle:V="Ga naar de homepage",onClickMenu:g,...Z},D)=>e.jsxs("header",{...Z,className:R("ams-header",q),ref:D,children:[e.jsxs("div",{className:"ams-header__section",children:[e.jsxs("a",{className:"ams-header__logo-link",href:I,children:[e.jsx("span",{className:"ams-visually-hidden",children:V}),e.jsx(J,{brand:G})]}),m&&e.jsx(K,{level:1,size:"level-6",children:m})]}),e.jsxs("div",{className:"ams-header__section",children:[p&&e.jsx("div",{className:"ams-header__links",children:p}),g&&e.jsxs(Q,{className:"ams-header__menu-button",onClick:g,variant:"tertiary",children:["Menu ",e.jsx(X,{svg:F,size:"level-6"})]})]})]}));c.displayName="Header";try{c.displayName="Header",c.__docgenInfo={description:"",displayName:"Header",props:{appName:{defaultValue:null,description:"The name of the application.",name:"appName",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"The list of menu links. Use a Page Menu here.",name:"links",required:!1,type:{name:"ReactNode"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkTitle:{defaultValue:{value:"Ga naar de homepage"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},onClickMenu:{defaultValue:null,description:"Provide a callback that toggles the visibility of a Mega Menu.",name:"onClickMenu",required:!1,type:{name:"(() => void)"}}}}}catch{}const Y={title:"Components/Containers/Header",component:c},n={},r={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},s={args:{appName:"Onderzoek en Statistiek"}},o={args:{links:e.jsxs(a,{alignEnd:!0,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:u,children:"Zoeken"})]})}},t={args:{onClickMenu:()=>{}}},i={args:{links:e.jsxs(a,{alignEnd:!0,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:u,children:"Zoeken"})]}),onClickMenu:()=>{}}},d={args:{appName:"Onderzoek en Statistiek",onClickMenu:()=>{}}},l={args:{appName:"Onderzoek en Statistiek",links:e.jsxs(a,{alignEnd:!0,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:u,children:"Zoeken"})]}),onClickMenu:()=>{}}};var h,k,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(k=n.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var M,L,j;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(j=(L=r.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var v,x,P;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek'
  }
}`,...(P=(x=s.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var N,S,_;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    links: <PageMenu alignEnd>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu>
  }
}`,...(_=(S=o.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var A,C,y;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    onClickMenu: () => {}
  }
}`,...(y=(C=t.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var B,b,W;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    links: <PageMenu alignEnd>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu>,
    onClickMenu: () => {}
  }
}`,...(W=(b=i.parameters)==null?void 0:b.docs)==null?void 0:W.source}}};var z,T,w;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek',
    onClickMenu: () => {}
  }
}`,...(w=(T=d.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var E,H,O;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek',
    links: <PageMenu alignEnd>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu>,
    onClickMenu: () => {}
  }
}`,...(O=(H=l.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const $=["Default","ForSubBrand","WithAppName","WithLinks","WithMenuButton","WithLinksAndMenuButton","WithAppNameAndMenuButton","WithAppNameLinksAndMenuButton"],le=Object.freeze(Object.defineProperty({__proto__:null,Default:n,ForSubBrand:r,WithAppName:s,WithAppNameAndMenuButton:d,WithAppNameLinksAndMenuButton:l,WithLinks:o,WithLinksAndMenuButton:i,WithMenuButton:t,__namedExportsOrder:$,default:Y},Symbol.toStringTag,{value:"Module"}));export{r as F,le as H,s as W,t as a,o as b,i as c,d,l as e};
