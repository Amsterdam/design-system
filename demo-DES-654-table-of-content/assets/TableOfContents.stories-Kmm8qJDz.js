import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{c}from"./clsx-B-dksMZM.js";import{r as f}from"./index-uCp2LrAq.js";const T=f.forwardRef(({children:t,className:a,label:s,...l},r)=>e.jsxs("li",{className:"ams-table-of-contents__item",children:[e.jsx("a",{...l,className:c("ams-table-of-contents__link",a),ref:r,children:s}),t]}));T.displayName="TableOfContents.Link";try{TableOfContents.Link.displayName="TableOfContents.Link",TableOfContents.Link.__docgenInfo={description:"",displayName:"TableOfContents.Link",props:{label:{defaultValue:null,description:"The text for the link.",name:"label",required:!0,type:{name:"string"}}}}}catch{}const m=f.forwardRef(({children:t,className:a,...s},l)=>e.jsx("ul",{...s,ref:l,className:c("ams-table-of-contents__list",a),children:t}));m.displayName="TableOfContents.List";try{TableOfContents.List.displayName="TableOfContents.List",TableOfContents.List.__docgenInfo={description:"",displayName:"TableOfContents.List",props:{}}}catch{}const O=f.forwardRef(({children:t,className:a,heading:s,...l},r)=>e.jsxs("nav",{...l,ref:r,className:c("ams-table-of-contents",a),children:[s&&e.jsx("div",{className:"ams-table-of-contents__heading",children:s}),t]}));O.displayName="TableOfContents";const n=Object.assign(O,{Link:T,List:m});try{n.displayName="TableOfContents",n.__docgenInfo={description:"",displayName:"TableOfContents",props:{heading:{defaultValue:null,description:"The Heading for the Table of Contents.",name:"heading",required:!1,type:{name:"string"}}}}}catch{}const C={title:"Components/Navigation/Table of Contents",component:n,args:{heading:"Op deze pagina",children:e.jsxs(n.List,{children:[e.jsx(n.Link,{href:"#section-1",label:"Zo werkt het"}),e.jsx(n.Link,{href:"#section-2",label:"Voorwaarden"}),e.jsx(n.Link,{href:"#section-3",label:"Aanvragen"}),e.jsx(n.Link,{href:"#section-4",label:"Zie ook"})]})}},i={},o={args:{heading:"Inhoudsopgave",children:e.jsxs(n.List,{children:[e.jsx(n.Link,{href:"#section-1",label:"Waarom is het belangrijk om helder te schrijven?"}),e.jsx(n.Link,{href:"#section-2",label:"Schrijf in stappen",children:e.jsxs(n.List,{children:[e.jsx(n.Link,{href:"#section-4.1",label:"Stap 2"}),e.jsx(n.Link,{href:"#section-4.2",label:"Stap 3"}),e.jsx(n.Link,{href:"#section-4.3",label:"Stap 4"})]})}),e.jsx(n.Link,{href:"#section-3",label:"Structuur van een heldere tekst",children:e.jsxs(n.List,{children:[e.jsx(n.Link,{href:"#section-3.1",label:"Opmaakeisen"}),e.jsx(n.Link,{href:"#section-3.2",label:"Tekstlengte",children:e.jsx(n.List,{children:e.jsx(n.Link,{href:"#section-3.2.1",label:"Boodschap en achtergronden"})})}),e.jsx(n.Link,{href:"#section-3.3",label:"Alinea's en tussenkopjes"}),e.jsx(n.Link,{href:"#section-3.4",label:"Opsommingen"})]})}),e.jsx(n.Link,{href:"#section-4",label:"Taalgebruik in heldere taal"}),e.jsx(n.Link,{href:"#section-5",label:"Tekstonderdelen in heldere taal"}),e.jsx(n.Link,{href:"#section-6",label:"Moeilijke woordenboek (inclusief niet te gebruiken)"})]})}};var b,d,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(h=(d=i.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var p,k,L;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    heading: 'Inhoudsopgave',
    children: <TableOfContents.List>
        <TableOfContents.Link href="#section-1" label="Waarom is het belangrijk om helder te schrijven?" />
        <TableOfContents.Link href="#section-2" label="Schrijf in stappen">
          <TableOfContents.List>
            <TableOfContents.Link href="#section-4.1" label="Stap 2" />
            <TableOfContents.Link href="#section-4.2" label="Stap 3" />
            <TableOfContents.Link href="#section-4.3" label="Stap 4" />
          </TableOfContents.List>
        </TableOfContents.Link>
        <TableOfContents.Link href="#section-3" label="Structuur van een heldere tekst">
          <TableOfContents.List>
            <TableOfContents.Link href="#section-3.1" label="Opmaakeisen" />
            <TableOfContents.Link href="#section-3.2" label="Tekstlengte">
              <TableOfContents.List>
                <TableOfContents.Link href="#section-3.2.1" label="Boodschap en achtergronden" />
              </TableOfContents.List>
            </TableOfContents.Link>
            <TableOfContents.Link href="#section-3.3" label="Alinea's en tussenkopjes" />
            <TableOfContents.Link href="#section-3.4" label="Opsommingen" />
          </TableOfContents.List>
        </TableOfContents.Link>
        <TableOfContents.Link href="#section-4" label="Taalgebruik in heldere taal" />
        <TableOfContents.Link href="#section-5" label="Tekstonderdelen in heldere taal" />
        <TableOfContents.Link href="#section-6" label="Moeilijke woordenboek (inclusief niet te gebruiken)" />
      </TableOfContents.List>
  }
}`,...(L=(k=o.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const j=["Default","MultiLevel"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:i,MultiLevel:o,__namedExportsOrder:j,default:C},Symbol.toStringTag,{value:"Module"}));export{o as M,x as T};
