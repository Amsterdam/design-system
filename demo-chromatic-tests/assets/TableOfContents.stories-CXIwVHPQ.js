import{r as c,j as e,c as f}from"./iframe-C4FfhB-2.js";import{H as k}from"./Heading-B-TU64tD.js";const b=c.forwardRef(({children:t,className:a,label:s,...l},r)=>e.jsxs("li",{className:"ams-table-of-contents__item",children:[e.jsx("a",{...l,className:f("ams-table-of-contents__link",a),ref:r,children:s}),t]}));b.displayName="TableOfContents.Link";try{TableOfContents.Link.displayName="TableOfContents.Link",TableOfContents.Link.__docgenInfo={description:"",displayName:"TableOfContents.Link",props:{label:{defaultValue:null,description:"The text for the link.",name:"label",required:!0,type:{name:"string"}}}}}catch{}const d=c.forwardRef(({children:t,className:a,...s},l)=>e.jsx("ul",{...s,className:f("ams-table-of-contents__list",a),ref:l,children:t}));d.displayName="TableOfContents.List";try{TableOfContents.List.displayName="TableOfContents.List",TableOfContents.List.__docgenInfo={description:"",displayName:"TableOfContents.List",props:{}}}catch{}const h=c.forwardRef(({children:t,className:a,heading:s,headingLevel:l=2,...r},p)=>e.jsxs("nav",{...r,className:f("ams-table-of-contents",a),ref:p,children:[s&&e.jsx(k,{className:"ams-table-of-contents__heading",level:l,size:"level-3",children:s}),t]}));h.displayName="TableOfContents";const n=Object.assign(h,{Link:b,List:d});try{n.displayName="TableOfContents",n.__docgenInfo={description:"",displayName:"TableOfContents",props:{heading:{defaultValue:null,description:"The text for the Heading.",name:"heading",required:!1,type:{name:"string"}},headingLevel:{defaultValue:{value:"2"},description:`The hierarchical level of the Heading within the document.
Visually, it always has the size of a level 3 Heading.`,name:"headingLevel",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}}}}}catch{}const L={title:"Components/Navigation/Table of Contents",component:n,args:{children:e.jsxs(n.List,{children:[e.jsx(n.Link,{href:"#section-1",label:"Zo werkt het"}),e.jsx(n.Link,{href:"#section-2",label:"Voorwaarden"}),e.jsx(n.Link,{href:"#section-3",label:"Aanvragen"}),e.jsx(n.Link,{href:"#section-4",label:"Zie ook"})]}),heading:"Op deze pagina"}},i={},o={args:{children:e.jsxs(n.List,{children:[e.jsx(n.Link,{href:"#section-1",label:"Waarom is het belangrijk om helder te schrijven?"}),e.jsx(n.Link,{href:"#section-2",label:"Schrijf in stappen",children:e.jsxs(n.List,{children:[e.jsx(n.Link,{href:"#section-2.1",label:"Stap 2"}),e.jsx(n.Link,{href:"#section-2.2",label:"Stap 3"}),e.jsx(n.Link,{href:"#section-2.3",label:"Stap 4"})]})}),e.jsx(n.Link,{href:"#section-3",label:"Structuur van een heldere tekst",children:e.jsxs(n.List,{children:[e.jsx(n.Link,{href:"#section-3.1",label:"Opmaakeisen"}),e.jsx(n.Link,{href:"#section-3.2",label:"Tekstlengte",children:e.jsx(n.List,{children:e.jsx(n.Link,{href:"#section-3.2.1",label:"Boodschap en achtergronden"})})}),e.jsx(n.Link,{href:"#section-3.3",label:"Alinea's en tussenkopjes"}),e.jsx(n.Link,{href:"#section-3.4",label:"Opsommingen"})]})}),e.jsx(n.Link,{href:"#section-4",label:"Taalgebruik in heldere taal"}),e.jsx(n.Link,{href:"#section-5",label:"Tekstonderdelen in heldere taal"}),e.jsx(n.Link,{href:"#section-6",label:"Moeilijke woordenboek (inclusief niet te gebruiken)"})]}),heading:"Inhoudsopgave"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <TableOfContents.List>
        <TableOfContents.Link href="#section-1" label="Waarom is het belangrijk om helder te schrijven?" />
        <TableOfContents.Link href="#section-2" label="Schrijf in stappen">
          <TableOfContents.List>
            <TableOfContents.Link href="#section-2.1" label="Stap 2" />
            <TableOfContents.Link href="#section-2.2" label="Stap 3" />
            <TableOfContents.Link href="#section-2.3" label="Stap 4" />
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
      </TableOfContents.List>,
    heading: 'Inhoudsopgave'
  }
}`,...o.parameters?.docs?.source}}};const m=["Default","MultipleLevels"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:i,MultipleLevels:o,__namedExportsOrder:m,default:L},Symbol.toStringTag,{value:"Module"}));export{o as M,O as T};
