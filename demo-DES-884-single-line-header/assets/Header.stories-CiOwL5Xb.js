import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as n,S as Z}from"./index.esm-CF82xt7V.js";import{l as J,j as K}from"./index.esm-DUIRolM2.js";import{c as Q}from"./clsx-B-dksMZM.js";import{r as X}from"./index-Cs7sjTYM.js";import{L as Y}from"./Logo-Co1O1cSe.js";import{H as $}from"./Heading-DUu-96hO.js";const m=X.forwardRef(({appName:a,as:q="div",className:G,logoBrand:V="amsterdam",logoLink:C="/",logoLinkTitle:F="Ga naar de homepage",menu:D,...R},U)=>e.jsxs(q,{...R,ref:U,className:Q("ams-header",G),children:[e.jsxs("div",{className:"ams-header__section",children:[e.jsxs("a",{className:"ams-header__logo-link",href:C,children:[e.jsx("span",{className:"ams-visually-hidden",children:F}),e.jsx(Y,{brand:V})]}),a&&e.jsx($,{level:1,size:"level-5",children:a})]}),e.jsx("div",{className:"ams-header__section",children:D})]}));m.displayName="Header";try{m.displayName="Header",m.__docgenInfo={description:"",displayName:"Header",props:{appName:{defaultValue:null,description:"A site-wide title for the website or application.",name:"appName",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"The HTML element to use.",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"header"'}]}},logoBrand:{defaultValue:{value:"amsterdam"},description:"The brand for which to display the logo.",name:"logoBrand",required:!1,type:{name:"enum",value:[{value:'"amsterdam"'},{value:'"ggd-amsterdam"'},{value:'"museum-weesp"'},{value:'"stadsarchief"'},{value:'"stadsbank-van-lening"'},{value:'"vga-verzekeringen"'}]}},logoLink:{defaultValue:{value:"/"},description:"The url for the link on the logo.",name:"logoLink",required:!1,type:{name:"string"}},logoLinkTitle:{defaultValue:{value:"Ga naar de homepage"},description:"The accessible text for the link on the logo.",name:"logoLinkTitle",required:!1,type:{name:"string"}},menu:{defaultValue:null,description:"A secondary menu of links and buttons. Use a Page Menu. Can include buttons to show the Mega Menu or a Search Field.",name:"menu",required:!1,type:{name:"ReactNode"}}}}}catch{}const c=e.jsx(n.Item,{children:e.jsx(n.Button,{icon:J,onClick:()=>{},children:"Menu"})}),z=e.jsx(n.Item,{children:e.jsx(n.Button,{icon:K,onClick:()=>{},children:"Zoeken"})}),O=e.jsxs(e.Fragment,{children:[e.jsx(n.Item,{rank:"secondary",children:e.jsx(n.Link,{href:"#",lang:"en",children:"English"})}),e.jsx(n.Item,{rank:"secondary",children:e.jsx(n.Link,{href:"#",children:"Mijn Amsterdam"})})]}),ee={title:"Components/Containers/Header",component:m,argTypes:{as:{control:{type:"radio",labels:{header:"header",undefined:"div"}},options:["header","div"]}},decorators:[a=>e.jsx(Z,{children:e.jsx(a,{})})]},r={},s={args:{logoBrand:"ggd-amsterdam",logoLink:"https://www.ggd.amsterdam.nl/",logoLinkTitle:"Naar de homepage van de GGD Amsterdam"}},t={args:{appName:"Onderzoek en Statistiek"}},o={args:{menu:e.jsxs(n,{alignEnd:!0,children:[e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",children:"Menu link 1"})}),e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",children:"Menu link 2"})}),e.jsx(n.Item,{children:e.jsx(n.Link,{href:"#",children:"Menu link 3"})})]})}},i={args:{menu:e.jsx(n,{alignEnd:!0,children:c})}},d={args:{menu:e.jsxs(n,{alignEnd:!0,children:[O,z,c]})}},u={args:{appName:"Onderzoek en Statistiek",menu:e.jsx(n,{alignEnd:!0,children:c})}},l={args:{appName:"Onderzoek en Statistiek",menu:e.jsxs(n,{alignEnd:!0,children:[O,z,c]})}};var p,g,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var M,k,f;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam'
  }
}`,...(f=(k=s.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var x,j,S;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek'
  }
}`,...(S=(j=t.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var v,L,P;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(P=(L=o.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var N,y,B;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    menu: <PageMenu alignEnd>{MenuButton}</PageMenu>
  }
}`,...(B=(y=i.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var _,A,b;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    menu: <PageMenu alignEnd>
        {SecondaryLinks}
        {SearchButton}
        {MenuButton}
      </PageMenu>
  }
}`,...(b=(A=d.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var E,I,W;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek',
    menu: <PageMenu alignEnd>{MenuButton}</PageMenu>
  }
}`,...(W=(I=u.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var w,T,H;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    appName: 'Onderzoek en Statistiek',
    menu: <PageMenu alignEnd>
        {SecondaryLinks}
        {SearchButton}
        {MenuButton}
      </PageMenu>
  }
}`,...(H=(T=l.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};const ne=["Default","ForSubBrand","WithAppName","WithMenu","WithMenuButton","WithMenuAndMenuButton","WithAppNameAndMenu","WithAppNameMenuAndMenuButton"],ue=Object.freeze(Object.defineProperty({__proto__:null,Default:r,ForSubBrand:s,WithAppName:t,WithAppNameAndMenu:u,WithAppNameMenuAndMenuButton:l,WithMenu:o,WithMenuAndMenuButton:d,WithMenuButton:i,__namedExportsOrder:ne,default:ee},Symbol.toStringTag,{value:"Module"}));export{s as F,ue as H,t as W,o as a,i as b,d as c,u as d,l as e};
