import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as a}from"./index.esm-DE3b3BSv.js";import{l as R,k as c}from"./index.esm-CEsU34Sr.js";import{c as U}from"./clsx-B-dksMZM.js";import{r as F}from"./index-Cs7sjTYM.js";import{L as J}from"./Logo-RiaSfymH.js";import{H as K}from"./Heading-DUu-96hO.js";import{B as Q}from"./Button-fZZcNY7w.js";import{I as X}from"./Icon-msbkstIT.js";const d=F.forwardRef(({appName:l,className:V,links:p,logoBrand:q="amsterdam",logoLink:B="/",logoLinkTitle:G="Ga naar de homepage",menu:I,...Z},D)=>e.jsxs("header",{...Z,className:U("ams-header",V),ref:D,children:[e.jsxs("a",{className:"ams-header__logo-link",href:B,children:[e.jsx("span",{className:"ams-visually-hidden",children:G}),e.jsx(J,{brand:q})]}),l&&e.jsx(K,{className:"ams-header__app-name",level:1,size:"level-6",children:l}),p&&e.jsx("div",{className:"ams-header__links",children:p}),I&&e.jsxs(Q,{className:"ams-header__menu-button",variant:"tertiary",children:[e.jsx("span",{className:"ams-header__menu-button__label",children:"Menu"}),e.jsx(X,{svg:R,size:"level-6"})]})]}));d.displayName="Header";try{d.displayName="Header",d.__docgenInfo={description:"",displayName:"Header",props:{appName:{defaultValue:null,description:"The name of the application.",name:"appName",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"The list of menu links. Use a Page Menu here.",name:"links",required:!1,type:{name:"ReactNode"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"narrow"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkTitle:{defaultValue:{value:"Ga naar de homepage"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menu:{defaultValue:null,description:"A button to toggle the visibility of a Mega Menu.",name:"menu",required:!1,type:{name:"ReactNode"}}}}}catch{}const Y={title:"Components/Containers/Header",component:d},n={},r={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},s={args:{appName:"Onderzoek en Statistiek"}},t={args:{links:e.jsxs(a,{alignEnd:!0,wrap:!1,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:c,children:"Zoeken"})]})}},o={args:{menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}},i={args:{links:e.jsxs(a,{alignEnd:!0,wrap:!1,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:c,children:"Zoeken"})]}),menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}},m={args:{appName:"Onderzoek en Statistiek",menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}},u={args:{appName:"Onderzoek en Statistiek",links:e.jsxs(a,{alignEnd:!0,wrap:!1,children:[e.jsx(a.Link,{href:"#",children:"Contact"}),e.jsx(a.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(a.Link,{href:"#",icon:c,children:"Zoeken"})]}),menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}};var g,h,k;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var f,M,L;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(L=(M=r.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var _,j,N;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek'
  }
}`,...(N=(j=s.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var b,x,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    links: <PageMenu alignEnd wrap={false}>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu>
  }
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var P,S,A;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    menu: <button className="ams-header__menu-button">Menu</button>
  }
}`,...(A=(S=o.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var y,w,W;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(W=(w=i.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var z,T,E;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek',
    menu: <button className="ams-header__menu-button">Menu</button>
  }
}`,...(E=(T=m.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var H,O,C;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek',
    links: <PageMenu alignEnd wrap={false}>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu>,
    menu: <button className="ams-header__menu-button">Menu</button>
  }
}`,...(C=(O=u.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};const $=["Default","WithLogoVariant","WithAppName","WithLinks","WithMenu","WithLinksAndMenu","WithAppNameAndMenu","WithAppNameLinksAndMenu"],ue=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithAppName:s,WithAppNameAndMenu:m,WithAppNameLinksAndMenu:u,WithLinks:t,WithLinksAndMenu:i,WithLogoVariant:r,WithMenu:o,__namedExportsOrder:$,default:Y},Symbol.toStringTag,{value:"Module"}));export{ue as H,r as W,s as a,o as b,t as c,i as d,m as e,u as f};
