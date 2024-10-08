import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as n,S as U}from"./index.esm-WIcDzDa5.js";import{l as Z,j as J}from"./index.esm-DUIRolM2.js";import{c as K}from"./clsx-B-dksMZM.js";import{r as Q}from"./index-Cs7sjTYM.js";import{L as X}from"./Logo-Co1O1cSe.js";import{H as Y}from"./Heading-DUu-96hO.js";const l=Q.forwardRef(({appName:a,className:G,logoBrand:q="amsterdam",logoLink:C="/",logoLinkTitle:F="Ga naar de homepage",menu:V,...D},R)=>e.jsxs("header",{...D,ref:R,className:K("ams-header",G),children:[e.jsxs("div",{className:"ams-header__section",children:[e.jsxs("a",{className:"ams-header__logo-link",href:C,children:[e.jsx("span",{className:"ams-visually-hidden",children:F}),e.jsx(X,{brand:q})]}),a&&e.jsx(Y,{className:"ams-header__app-name",level:1,size:"level-5",children:a})]}),e.jsx("div",{className:"ams-header__section",children:V})]}));l.displayName="Header";try{l.displayName="Header",l.__docgenInfo={description:"",displayName:"Header",props:{appName:{defaultValue:null,description:"A site-wide title for the website or application.",name:"appName",required:!1,type:{name:"string"}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkTitle:{defaultValue:{value:"Ga naar de homepage"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menu:{defaultValue:null,description:"A secondary menu of links and buttons. Use a Page Menu. Can include buttons to show the Mega Menu or a Search Field.",name:"menu",required:!1,type:{name:"ReactNode"}}}}}catch{}const c=e.jsx(n.Item,{children:e.jsx(n.Button,{icon:Z,onClick:()=>{},children:"Menu"})}),O=e.jsx(n.Item,{children:e.jsx(n.Button,{icon:J,onClick:()=>{},children:"Zoeken"})}),T=e.jsxs(e.Fragment,{children:[e.jsx(n.Item,{rank:"secondary",children:e.jsx(n.Link,{href:"#",lang:"en",children:"English"})}),e.jsx(n.Item,{rank:"secondary",children:e.jsx(n.Link,{href:"#",children:"Mijn Amsterdam"})})]}),$={title:"Components/Containers/Header",component:l,decorators:[a=>e.jsx(U,{children:e.jsx(a,{})})]},r={},s={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},t={args:{appName:"Onderzoek en Statistiek"}},o={args:{menu:e.jsxs(n,{alignEnd:!0,children:[e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",children:"Menu link 1"})}),e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",children:"Menu link 2"})}),e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",children:"Menu link 3"})})]})}},i={args:{menu:e.jsx(n,{alignEnd:!0,children:c})}},d={args:{menu:e.jsxs(n,{alignEnd:!0,children:[T,O,c]})}},u={args:{appName:"Onderzoek en Statistiek",menu:e.jsx(n,{alignEnd:!0,children:c})}},m={args:{appName:"Onderzoek en Statistiek",menu:e.jsxs(n,{alignEnd:!0,children:[T,O,c]})}};var g,p,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var M,k,f;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var x,j,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek'
  }
}`,...(S=(j=t.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var N,P,L;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(L=(P=o.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var v,B,_;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    menu: <PageMenu alignEnd>{MenuButton}</PageMenu>
  }
}`,...(_=(B=i.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var y,A,E;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    menu: <PageMenu alignEnd>
        {SecondaryLinks}
        {SearchButton}
        {MenuButton}
      </PageMenu>
  }
}`,...(E=(A=d.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var I,b,W;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek',
    menu: <PageMenu alignEnd>{MenuButton}</PageMenu>
  }
}`,...(W=(b=u.parameters)==null?void 0:b.docs)==null?void 0:W.source}}};var w,z,H;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek',
    menu: <PageMenu alignEnd>
        {SecondaryLinks}
        {SearchButton}
        {MenuButton}
      </PageMenu>
  }
}`,...(H=(z=m.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const ee=["Default","ForSubBrand","WithAppName","WithMenu","WithMenuButton","WithMenuAndMenuButton","WithAppNameAndMenu","WithAppNameMenuAndMenuButton"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ForSubBrand:s,WithAppName:t,WithAppNameAndMenu:u,WithAppNameMenuAndMenuButton:m,WithMenu:o,WithMenuAndMenuButton:d,WithMenuButton:i,__namedExportsOrder:ee,default:$},Symbol.toStringTag,{value:"Module"}));export{s as F,de as H,t as W,o as a,i as b,d as c,u as d,m as e};
