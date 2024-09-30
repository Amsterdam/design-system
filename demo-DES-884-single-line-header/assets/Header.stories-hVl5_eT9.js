import{j as e}from"./jsx-runtime-BlAj40OV.js";import{b as n,S as U}from"./index.esm-Bk-vRxsa.js";import{l as J,j as C}from"./index.esm-DUIRolM2.js";import{c as K}from"./clsx-B-dksMZM.js";import{r as Q}from"./index-Cs7sjTYM.js";import{G as g}from"./Grid-RzuAzVQR.js";import{L as X}from"./Logo-Co1O1cSe.js";import{H as Y}from"./Heading-DUu-96hO.js";const l=Q.forwardRef(({appName:a,children:G,className:V,logoBrand:q="amsterdam",logoLink:D="/",logoLinkTitle:Z="Ga naar de homepage",menu:F,...I},R)=>e.jsxs(g,{as:"header",paddingVertical:"medium",children:[e.jsxs(g.Cell,{...I,className:K("ams-header",V),ref:R,span:"all",children:[e.jsxs("div",{className:"ams-header__section",children:[e.jsxs("a",{className:"ams-header__logo-link",href:D,children:[e.jsx("span",{className:"ams-visually-hidden",children:Z}),e.jsx(X,{brand:q})]}),a&&e.jsx(Y,{level:1,size:"level-6",children:a})]}),e.jsx("div",{className:"ams-header__section",children:F})]}),G]}));l.displayName="Header";try{l.displayName="Header",l.__docgenInfo={description:"",displayName:"Header",props:{appName:{defaultValue:null,description:"The name of the application.",name:"appName",required:!1,type:{name:"string"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The name of the brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkTitle:{defaultValue:{value:"Ga naar de homepage"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menu:{defaultValue:null,description:"A menu for in the header. Use a Page Menu.",name:"menu",required:!1,type:{name:"ReactNode"}}}}}catch{}const c=e.jsx(n.Button,{icon:J,onClick:()=>{},children:"Menu"}),$={title:"Components/Containers/Header",component:l,decorators:[a=>e.jsx(U,{children:e.jsx(a,{})})]},r={},s={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},t={args:{appName:"Onderzoek en Statistiek"}},o={args:{menu:e.jsxs(n,{alignEnd:!0,children:[e.jsx(n.Link,{href:"#",children:"Menu link 1"}),e.jsx(n.Link,{href:"#",children:"Menu link 2"}),e.jsx(n.Link,{href:"#",children:"Menu link 3"})]})}},i={args:{menu:e.jsx(n,{alignEnd:!0,children:c})}},d={args:{menu:e.jsxs(n,{alignEnd:!0,children:[e.jsx(n.Link,{href:"#",children:"Contact"}),e.jsx(n.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(n.Link,{href:"#",icon:C,children:"Zoeken"}),c]})}},u={args:{appName:"Onderzoek en Statistiek",menu:e.jsx(n,{alignEnd:!0,children:c})}},m={args:{appName:"Onderzoek en Statistiek",menu:e.jsxs(n,{alignEnd:!0,children:[e.jsx(n.Link,{href:"#",children:"Contact"}),e.jsx(n.Link,{href:"#",children:"Mijn Amsterdam"}),e.jsx(n.Link,{href:"#",icon:C,children:"Zoeken"}),c]})}};var p,h,k;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(k=(h=r.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var M,f,L;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(L=(f=s.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var j,x,P;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek'
  }
}`,...(P=(x=t.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var S,N,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    menu: <PageMenu alignEnd>
        <PageMenu.Link href="#">Menu link 1</PageMenu.Link>
        <PageMenu.Link href="#">Menu link 2</PageMenu.Link>
        <PageMenu.Link href="#">Menu link 3</PageMenu.Link>
      </PageMenu>
  }
}`,...(v=(N=o.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var _,A,B;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    menu: <PageMenu alignEnd>{MenuButton}</PageMenu>
  }
}`,...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var y,E,W;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    menu: <PageMenu alignEnd>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
        {MenuButton}
      </PageMenu>
  }
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var b,w,z;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek',
    menu: <PageMenu alignEnd>{MenuButton}</PageMenu>
  }
}`,...(z=(w=u.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var H,O,T;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek',
    menu: <PageMenu alignEnd>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
        {MenuButton}
      </PageMenu>
  }
}`,...(T=(O=m.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const ee=["Default","ForSubBrand","WithAppName","WithMenu","WithMenuButton","WithMenuAndMenuButton","WithAppNameAndMenu","WithAppNameMenuAndMenuButton"],ue=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ForSubBrand:s,WithAppName:t,WithAppNameAndMenu:u,WithAppNameMenuAndMenuButton:m,WithMenu:o,WithMenuAndMenuButton:d,WithMenuButton:i,__namedExportsOrder:ee,default:$},Symbol.toStringTag,{value:"Module"}));export{s as F,ue as H,t as W,o as a,i as b,d as c,u as d,m as e};
