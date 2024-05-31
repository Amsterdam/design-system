import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{G as k,C as H,H as o,P as c}from"./index.esm-DWEUIgEW.js";import{a as d}from"./exampleContent-CRK3_7Hv.js";import{c as A}from"./clsx-B-dksMZM.js";import{r as u}from"./index-BwDkhjyp.js";const N=u.forwardRef(({children:a,className:f,label:t,active:i,...h},b)=>e.jsxs("li",{className:"ams-table-of-contents__item",children:[e.jsx("a",{...h,className:A("ams-table-of-contents__link",i&&"ams-table-of-contents__link--active",f),ref:b,children:t}),a]}));N.displayName="TableOfContents.Link";try{TableOfContents.Link.displayName="TableOfContents.Link",TableOfContents.Link.__docgenInfo={description:"",displayName:"TableOfContents.Link",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}}}}}catch{}const V=u.forwardRef(({children:a,className:f,startLevel:t,title:i,...h},b)=>(u.useEffect(()=>{const m=t&&new IntersectionObserver(p=>{p.forEach(g=>{var L,x;const j=g.target.getAttribute("id");g.intersectionRatio>0?(L=document.querySelector(`nav a[href="#${j}"]`))==null||L.classList.add("ams-table-of-contents__link--active"):(x=document.querySelector(`nav a[href="#${j}"]`))==null||x.classList.remove("ams-table-of-contents__link--active")})},{threshold:0});document.querySelectorAll(`${t}[id]`).forEach(p=>{m==null||m.observe(p)})},[t]),e.jsxs("nav",{...h,ref:b,className:A("ams-table-of-contents",f),children:[i&&e.jsx("div",{className:"ams-table-of-contents__title",children:i}),e.jsx("ol",{className:"ams-table-of-contents__list",children:a})]})));V.displayName="TableOfContents";const n=Object.assign(V,{Link:N});try{n.displayName="TableOfContents",n.__docgenInfo={description:"",displayName:"TableOfContents",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},startLevel:{defaultValue:null,description:"",name:"startLevel",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}}}}}catch{}const Z={title:"Components/Navigation/Table of Contents",component:n,args:{title:"Op deze pagina",children:[e.jsx(n.Link,{href:"#section-1",label:"Zo werkt het"},1),e.jsx(n.Link,{href:"#section-2",label:"Voorwaarden"},2),e.jsx(n.Link,{href:"#section-3",label:"Aanvragen"},3),e.jsx(n.Link,{href:"#section-4",label:"Zie ook"},4)]}},r={},s={args:{title:"Inhoudsopgave",children:[e.jsx(n.Link,{href:"#section-1",label:"Waarom is het belangrijk om helder te schrijven?"},1),e.jsx(n.Link,{href:"#section-2",label:"Schrijf in stappen",children:e.jsxs(n,{children:[e.jsx(n.Link,{href:"#section-4.1",label:"Stap 2"}),e.jsx(n.Link,{href:"#section-4.2",label:"Stap 3"}),e.jsx(n.Link,{href:"#section-4.3",label:"Stap 4"})]})},2),e.jsx(n.Link,{href:"#section-3",label:"Structuur van een heldere tekst",children:e.jsxs(n,{children:[e.jsx(n.Link,{href:"#section-3.1",label:"Opmaakeisen"}),e.jsx(n.Link,{href:"#section-3.2",label:"Tekstlengte",children:e.jsx(n,{children:e.jsx(n.Link,{href:"#section-3.2.1",label:"Boodschap en achtergronden"})})}),e.jsx(n.Link,{href:"#section-3.2",label:"Alinea's en tussenkopjes"}),e.jsx(n.Link,{href:"#section-3.2",label:"Opsommingen"})]})},3),e.jsx(n.Link,{href:"#section-4",label:"Taalgebruik in heldere taal"},4),e.jsx(n.Link,{href:"#section-5",label:"Tekstonderdelen in heldere taal"},5),e.jsx(n.Link,{href:"#section-6",label:"Moeilijke woordenboek (inclusief niet te gebruiken)"},6)]}},l={args:{startLevel:"h2",children:[e.jsx(n.Link,{href:"#section-1",label:"Zo werkt het",active:!0},1),e.jsx(n.Link,{href:"#section-2",label:"Voorwaarden"},2),e.jsx(n.Link,{href:"#section-3",label:"Aanvragen"},3),e.jsx(n.Link,{href:"#section-4",label:"Zie ook"},4)]},render:a=>e.jsxs(k,{gapVertical:"large",id:"grid-row-test",children:[e.jsx(k.Cell,{span:{narrow:4,medium:3,wide:3},start:{narrow:1,medium:6,wide:10},children:e.jsx(n,{...a,id:"grid-row-test-toc"})}),e.jsx(k.Cell,{span:{narrow:4,medium:5,wide:7},start:{narrow:1,medium:1,wide:3},children:e.jsxs(H,{gap:"medium",children:[e.jsx(o,{level:2,id:"section-1",children:"Zo werkt het"}),e.jsx(c,{children:d()}),e.jsx(o,{level:2,id:"section-2",children:"Voorwaarden"}),e.jsx(c,{children:d()}),e.jsx(o,{level:2,id:"section-3",children:"Aanvragen"}),e.jsx(c,{children:d()}),e.jsx(o,{level:2,id:"section-4",children:"Zie ook"}),e.jsx(c,{children:d()})]})})]})};var C,O,T;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(T=(O=r.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var v,_,w;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Inhoudsopgave',
    children: [<TableOfContents.Link href="#section-1" key={1} label="Waarom is het belangrijk om helder te schrijven?" />, <TableOfContents.Link href="#section-2" key={2} label="Schrijf in stappen">
        <TableOfContents>
          <TableOfContents.Link href="#section-4.1" label="Stap 2" />
          <TableOfContents.Link href="#section-4.2" label="Stap 3" />
          <TableOfContents.Link href="#section-4.3" label="Stap 4" />
        </TableOfContents>
      </TableOfContents.Link>, <TableOfContents.Link href="#section-3" key={3} label="Structuur van een heldere tekst">
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
      </TableOfContents.Link>, <TableOfContents.Link href="#section-4" key={4} label="Taalgebruik in heldere taal" />, <TableOfContents.Link href="#section-5" key={5} label="Tekstonderdelen in heldere taal" />, <TableOfContents.Link href="#section-6" key={6} label="Moeilijke woordenboek (inclusief niet te gebruiken)" />]
  }
}`,...(w=(_=s.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var y,S,P;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    startLevel: 'h2',
    children: [<TableOfContents.Link href="#section-1" key={1} label="Zo werkt het" active />, <TableOfContents.Link href="#section-2" key={2} label="Voorwaarden" />, <TableOfContents.Link href="#section-3" key={3} label="Aanvragen" />, <TableOfContents.Link href="#section-4" key={4} label="Zie ook" />]
  },
  render: args => <Grid gapVertical="large" id="grid-row-test">
      <Grid.Cell span={{
      narrow: 4,
      medium: 3,
      wide: 3
    }} start={{
      narrow: 1,
      medium: 6,
      wide: 10
    }}>
        <TableOfContents {...args} id="grid-row-test-toc" />
      </Grid.Cell>
      <Grid.Cell span={{
      narrow: 4,
      medium: 5,
      wide: 7
    }} start={{
      narrow: 1,
      medium: 1,
      wide: 3
    }}>
        <Column gap="medium">
          <Heading level={2} id="section-1">
            Zo werkt het
          </Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
          <Heading level={2} id="section-2">
            Voorwaarden
          </Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
          <Heading level={2} id="section-3">
            Aanvragen
          </Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
          <Heading level={2} id="section-4">
            Zie ook
          </Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
        </Column>
      </Grid.Cell>
    </Grid>
}`,...(P=(S=l.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const G=["Default","MultiLevel","Active"],$=Object.freeze(Object.defineProperty({__proto__:null,Active:l,Default:r,MultiLevel:s,__namedExportsOrder:G,default:Z},Symbol.toStringTag,{value:"Module"}));export{l as A,s as M,$ as T};
