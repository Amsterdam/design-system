import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{c as p}from"./clsx-B-dksMZM.js";import{r as m}from"./index-BwDkhjyp.js";const u=m.forwardRef(({children:t,className:o,label:l,active:i,...r},O)=>e.jsxs("li",{className:"ams-table-of-contents__item",children:[e.jsx("a",{...r,className:p("ams-table-of-contents__link",i&&"ams-table-of-contents__link--active",o),ref:O,children:l}),t]}));u.displayName="TableOfContents.Link";try{TableOfContents.Link.displayName="TableOfContents.Link",TableOfContents.Link.__docgenInfo={description:"",displayName:"TableOfContents.Link",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}}}}}catch{}const L=m.forwardRef(({children:t,className:o,title:l,...i},r)=>e.jsxs("nav",{...i,ref:r,className:p("ams-table-of-contents",o),children:[l&&e.jsx("div",{className:"ams-table-of-contents__title",children:l}),e.jsx("ol",{className:"ams-table-of-contents__list",children:t})]}));L.displayName="TableOfContents";const n=Object.assign(L,{Link:u});try{n.displayName="TableOfContents",n.__docgenInfo={description:"",displayName:"TableOfContents",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const T={title:"Components/Navigation/Table of Contents",component:n,args:{title:"Op deze pagina",children:[e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#section-1",label:"Zo werkt het"}),e.jsx(n.Link,{href:"#section-2",label:"Voorwaarden"}),e.jsx(n.Link,{href:"#section-4",label:"Aanvragen"}),e.jsx(n.Link,{href:"#section-4",label:"Zie ook"})]})]}},a={},s={args:{title:"Inhoudsopgave",children:[e.jsxs(e.Fragment,{children:[e.jsx(n.Link,{href:"#section-1",label:"Waarom is het belangrijk om helder te schrijven?"}),e.jsx(n.Link,{href:"#section-2",label:"Schrijf in stappen",children:e.jsxs(n,{children:[e.jsx(n.Link,{href:"#section-4.1",label:"Stap 2"}),e.jsx(n.Link,{href:"#section-4.2",label:"Stap 3"}),e.jsx(n.Link,{href:"#section-4.3",label:"Stap 4"})]})}),e.jsx(n.Link,{href:"#section-3",label:"Structuur van een heldere tekst",active:!0,children:e.jsxs(n,{children:[e.jsx(n.Link,{href:"#section-3.1",label:"Opmaakeisen"}),e.jsx(n.Link,{href:"#section-3.2",label:"Tekstlengte",children:e.jsx(n,{children:e.jsx(n.Link,{href:"#section-3.2.1",label:"Boodschap en achtergronden"})})}),e.jsx(n.Link,{href:"#section-3.2",label:"Alinea's en tussenkopjes"}),e.jsx(n.Link,{href:"#section-3.2",label:"Opsommingen"})]})}),e.jsx(n.Link,{href:"#section-4",label:"Taalgebruik in heldere taal"}),e.jsx(n.Link,{href:"#section-5",label:"Tekstonderdelen in heldere taal"}),e.jsx(n.Link,{href:"#section-6",label:"Moeilijke woordenboek (inclusief niet te gebruiken)"})]})]}};var c,f,b;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var d,h,k;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Inhoudsopgave',
    children: [<>
        <TableOfContents.Link href="#section-1" label="Waarom is het belangrijk om helder te schrijven?" />
        <TableOfContents.Link href="#section-2" label="Schrijf in stappen">
          <TableOfContents>
            <TableOfContents.Link href="#section-4.1" label="Stap 2" />
            <TableOfContents.Link href="#section-4.2" label="Stap 3" />
            <TableOfContents.Link href="#section-4.3" label="Stap 4" />
          </TableOfContents>
        </TableOfContents.Link>
        <TableOfContents.Link href="#section-3" label="Structuur van een heldere tekst" active>
          <TableOfContents>
            <TableOfContents.Link href="#section-3.1" label="Opmaakeisen" />
            <TableOfContents.Link href="#section-3.2" label="Tekstlengte">
              <TableOfContents>
                <TableOfContents.Link href="#section-3.2.1" label="Boodschap en achtergronden" />
              </TableOfContents>
            </TableOfContents.Link>
            <TableOfContents.Link href="#section-3.2" label="Alinea's en tussenkopjes" />
            <TableOfContents.Link href="#section-3.2" label="Opsommingen" />
          </TableOfContents>
        </TableOfContents.Link>
        <TableOfContents.Link href="#section-4" label="Taalgebruik in heldere taal" />
        <TableOfContents.Link href="#section-5" label="Tekstonderdelen in heldere taal" />
        <TableOfContents.Link href="#section-6" label="Moeilijke woordenboek (inclusief niet te gebruiken)" />
      </>]
  }
}`,...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const j=["Default","MultiLevel"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:a,MultiLevel:s,__namedExportsOrder:j,default:T},Symbol.toStringTag,{value:"Module"}));export{_ as T};
