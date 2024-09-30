import{j as e}from"./jsx-runtime-BlAj40OV.js";import{S as F,c as a}from"./index.esm-BmVHhNQk.js";import{l as R,k as u}from"./index.esm-CsAWJJ2G.js";import{c as U}from"./clsx-B-dksMZM.js";import{r as J}from"./index-Cs7sjTYM.js";import{L as K}from"./Logo-Co1O1cSe.js";import{H as Q}from"./Heading-DUu-96hO.js";import{B as X}from"./Button-fZZcNY7w.js";import{I as Y}from"./Icon-msbkstIT.js";const m=J.forwardRef(({appName:n,className:q,links:p,logoBrand:G="amsterdam",logoLink:I="/",logoLinkTitle:V="Ga naar de homepage",onClickMenu:g,...Z},D)=>e.jsxs("header",{...Z,className:U("ams-header",q),ref:D,children:[e.jsxs("div",{className:"ams-header__section",children:[e.jsxs("a",{className:"ams-header__logo-link",href:I,children:[e.jsx("span",{className:"ams-visually-hidden",children:V}),e.jsx(K,{brand:G})]}),n&&e.jsx(Q,{level:1,size:"level-5",children:n})]}),e.jsxs("div",{className:"ams-header__section",children:[p&&e.jsx("div",{className:"ams-header__links",children:p}),g&&e.jsxs(X,{className:"ams-header__menu-button",onClick:g,variant:"tertiary",children:["Menu ",e.jsx(Y,{svg:R,size:"level-5"})]})]})]}));m.displayName="Header";try{m.displayName="Header",m.__docgenInfo={description:"",displayName:"Header",props:{appName:{defaultValue:null,description:"The name of the application.",name:"appName",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"The list of menu links. Use a Page Menu here.",name:"links",required:!1,type:{name:"ReactNode"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkTitle:{defaultValue:{value:"Ga naar de homepage"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},onClickMenu:{defaultValue:null,description:"Provide a callback that toggles the visibility of a Mega Menu.",name:"onClickMenu",required:!1,type:{name:"(() => void)"}}}}}catch{}const $={title:"Components/Containers/Header",component:m,decorators:[n=>e.jsx(F,{children:e.jsx(n,{})})]},r={},s={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},o={args:{appName:"Onderzoek en Statistiek"}},t={args:{links:e.jsxs(a,{alignEnd:!0,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:u,children:"Zoeken"})]})}},i={args:{onClickMenu:()=>{}}},d={args:{links:e.jsxs(a,{alignEnd:!0,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:u,children:"Zoeken"})]}),onClickMenu:()=>{}}},l={args:{appName:"Onderzoek en Statistiek",onClickMenu:()=>{}}},c={args:{appName:"Onderzoek en Statistiek",links:e.jsxs(a,{alignEnd:!0,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:u,children:"Zoeken"})]}),onClickMenu:()=>{}}};var h,k,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(k=r.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var M,L,j;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(j=(L=s.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var x,v,P;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek'
  }
}`,...(P=(v=o.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var S,N,_;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    links: <PageMenu alignEnd>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu>
  }
}`,...(_=(N=t.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var A,C,y;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    onClickMenu: () => {}
  }
}`,...(y=(C=i.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var B,b,W;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(b=d.parameters)==null?void 0:b.docs)==null?void 0:W.source}}};var z,T,w;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek',
    onClickMenu: () => {}
  }
}`,...(w=(T=l.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var E,H,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(H=c.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const ee=["Default","ForSubBrand","WithAppName","WithLinks","WithMenuButton","WithLinksAndMenuButton","WithAppNameAndMenuButton","WithAppNameLinksAndMenuButton"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ForSubBrand:s,WithAppName:o,WithAppNameAndMenuButton:l,WithAppNameLinksAndMenuButton:c,WithLinks:t,WithLinksAndMenuButton:d,WithMenuButton:i,__namedExportsOrder:ee,default:$},Symbol.toStringTag,{value:"Module"}));export{s as F,ce as H,o as W,i as a,t as b,d as c,l as d,c as e};
