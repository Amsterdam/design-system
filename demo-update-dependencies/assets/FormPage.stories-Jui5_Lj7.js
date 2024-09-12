import{j as e}from"./jsx-runtime-BlAj40OV.js";import{G as d,k as m,H as g,e as a,f as n,P as l,l as v,m as b,F as c,C as f,T as s,R as o,n as y,o as t,p as w,g as F}from"./index.esm-DOslqLVZ.js";import{r as C}from"./index-Cs7sjTYM.js";import{c as D}from"./config-CShJGhXt.js";const S=()=>{const[u,p]=C.useState(0);return e.jsx(d,{paddingTop:"small",paddingBottom:"medium",children:e.jsxs(d.Cell,{span:{narrow:4,medium:6,wide:8},start:{narrow:1,medium:2,wide:3},children:[e.jsx(m,{children:e.jsx(m.Link,{children:"Home"})}),e.jsx(g,{className:"ams-mb--md",children:"Contact"}),e.jsxs("form",{className:"ams-gap--md",id:"main",onSubmit:i=>i.preventDefault(),children:[e.jsxs(a,{children:[e.jsx(n,{htmlFor:"body",children:"Wat wilt u aan de gemeente vragen?"}),e.jsx(l,{id:"bodyDescription",size:"small",children:"Een duidelijke beschrijving van uw vraag helpt ons bij het behandelen."}),e.jsx(v,{"aria-describedby":"bodyDescription",id:"body",onChange:i=>p(i.target.value.length),rows:4}),e.jsx(b,{length:u,maxLength:1e3})]}),e.jsx(c,{"aria-describedby":"contactDetailsDescription",legend:"Wat zijn uw gegevens?",children:e.jsxs(f,{gap:"small",children:[e.jsx(l,{id:"contactDetailsDescription",children:"Wij hebben uw gegevens nodig om contact met u te kunnen opnemen."}),e.jsxs(a,{children:[e.jsx(n,{htmlFor:"initials",children:"Voorletters"}),e.jsx(s,{id:"initials",name:"initials"})]}),e.jsxs(a,{children:[e.jsx(n,{htmlFor:"familyName",children:"Achternaam"}),e.jsx(s,{autoComplete:"family-name",id:"familyName",name:"familyName"})]}),e.jsxs(c,{legend:"Woonplaats",children:[e.jsx(o,{name:"city",value:"amsterdam",children:"Amsterdam"}),e.jsx(o,{name:"city",value:"weesp",children:"Weesp"}),e.jsx(o,{name:"city",value:"anders",children:"Anders"})]}),e.jsxs(a,{children:[e.jsx(n,{htmlFor:"email",children:"E-mail"}),e.jsx(s,{autoComplete:"email",id:"email",name:"email"})]}),e.jsxs(y,{wrap:!0,children:[e.jsxs(a,{children:[e.jsx(n,{htmlFor:"countryCode",children:"Landnummer"}),e.jsxs(t,{id:"countryCode",name:"countryCode",children:[e.jsx(t.Option,{value:"+31",children:"Nederland +31"}),e.jsx(t.Option,{value:"+32",children:"België +32"}),e.jsx(t.Option,{value:"+33",children:"Frankrijk +33"})]})]}),e.jsxs(a,{children:[e.jsx(n,{htmlFor:"phone",children:"Telefoonnummer"}),e.jsx(s,{autoComplete:"tel",id:"phone",name:"phone"})]})]})]})}),e.jsx(w,{severity:"info",children:e.jsx(l,{children:"We bewaren uw contactgegevens voor het afhandelen van uw vraag of klacht en het verbeteren van onze dienstverlening."})}),e.jsx("div",{children:e.jsx(F,{type:"submit",children:"Versturen"})})]})]})})};/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */const k={...D,title:"Pages/Amsterdam.nl/Form Page",component:S},r={};var h,j,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(j=r.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const T=["Default"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:T,default:k},Symbol.toStringTag,{value:"Module"}));export{P as F};
