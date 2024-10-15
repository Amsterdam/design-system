import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as n}from"./index.esm-hIOIqyn_.js";import{j as c}from"./index.esm-BBV4ZYo5.js";import{c as F}from"./clsx-B-dksMZM.js";import{r as R}from"./index-Cs7sjTYM.js";import{L as U}from"./Logo-Co1O1cSe.js";import{H as J}from"./Heading-DUu-96hO.js";const d=R.forwardRef(({appName:l,className:O,links:g,logoBrand:q="amsterdam",logoLink:G="/",logoLinkTitle:V="Ga naar de homepage",menu:p,...Z},D)=>e.jsx(e.Fragment,{children:e.jsxs("header",{...Z,ref:D,className:F("ams-header",O),children:[e.jsxs("a",{href:G,className:"ams-header__logo-link",children:[e.jsx("span",{className:"ams-visually-hidden",children:V}),e.jsx(U,{brand:q})]}),g&&e.jsx("div",{className:"ams-header__links",children:g}),p&&e.jsx("div",{className:"ams-header__menu",children:p}),l&&e.jsx("div",{className:"ams-header__app-name",children:e.jsx(J,{level:1,size:"level-3",className:"ams-header__app-name-heading",children:l})})]})}));d.displayName="Header";try{d.displayName="Header",d.__docgenInfo={description:"",displayName:"Header",props:{appName:{defaultValue:null,description:"The name of the application.",name:"appName",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"The list of menu links. Use a Page Menu here.",name:"links",required:!1,type:{name:"ReactNode"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkTitle:{defaultValue:{value:"Ga naar de homepage"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menu:{defaultValue:null,description:"A button to toggle the visibility of a Mega Menu.",name:"menu",required:!1,type:{name:"ReactNode"}}}}}catch{}const K={title:"Components/Containers/Header",component:d},a={},t={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},r={args:{appName:"Onderzoek en Statistiek"}},s={args:{links:e.jsxs(n,{alignEnd:!0,children:[e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",children:"Contact"})}),e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",children:"Mijn Amsterdam"})}),e.jsx(n.Item,{children:e.jsx(n.Button,{icon:c,onClick:()=>{},children:"Zoeken"})})]})}},o={args:{menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}},i={args:{links:e.jsxs(n,{alignEnd:!0,children:[e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",children:"Contact"})}),e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",children:"Mijn Amsterdam"})}),e.jsx(n.Item,{children:e.jsx(n.Button,{icon:c,onClick:()=>{},children:"Zoeken"})})]}),menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}},m={args:{appName:"Onderzoek en Statistiek",menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}},u={args:{appName:"Onderzoek en Statistiek",links:e.jsxs(n,{alignEnd:!0,children:[e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",children:"Contact"})}),e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",children:"Mijn Amsterdam"})}),e.jsx(n.Item,{children:e.jsx(n.Button,{icon:c,onClick:()=>{},children:"Zoeken"})})]}),menu:e.jsx("button",{className:"ams-header__menu-button",children:"Menu"})}};var h,k,M;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(M=(k=a.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var f,j,P;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(P=(j=t.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var x,_,N;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek'
  }
}`,...(N=(_=r.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var L,b,I;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    links: <PageMenu alignEnd>
        <PageMenu.Item>
          <PageMenu.Link href="#">Contact</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Button icon={SearchIcon} onClick={() => {}}>
            Zoeken
          </PageMenu.Button>
        </PageMenu.Item>
      </PageMenu>
  }
}`,...(I=(b=s.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var v,S,B;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    menu: <button className="ams-header__menu-button">Menu</button>
  }
}`,...(B=(S=o.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var A,y,C;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    links: <PageMenu alignEnd>
        <PageMenu.Item>
          <PageMenu.Link href="#">Contact</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Button icon={SearchIcon} onClick={() => {}}>
            Zoeken
          </PageMenu.Button>
        </PageMenu.Item>
      </PageMenu>,
    menu: <button className="ams-header__menu-button">Menu</button>
  }
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var W,T,w;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek',
    menu: <button className="ams-header__menu-button">Menu</button>
  }
}`,...(w=(T=m.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var z,E,H;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek',
    links: <PageMenu alignEnd>
        <PageMenu.Item>
          <PageMenu.Link href="#">Contact</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Button icon={SearchIcon} onClick={() => {}}>
            Zoeken
          </PageMenu.Button>
        </PageMenu.Item>
      </PageMenu>,
    menu: <button className="ams-header__menu-button">Menu</button>
  }
}`,...(H=(E=u.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const Q=["Default","ForSubBrand","WithAppName","WithLinks","WithMenuButton","WithLinksAndMenuButton","WithAppNameAndMenuButton","WithAppNameLinksAndMenuButton"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:a,ForSubBrand:t,WithAppName:r,WithAppNameAndMenuButton:m,WithAppNameLinksAndMenuButton:u,WithLinks:s,WithLinksAndMenuButton:i,WithMenuButton:o,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{t as F,re as H,r as W,o as a,s as b,i as c,m as d,u as e};
