import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as d,C as x,G as l}from"./index.esm-DDzNsyt1.js";import{j as y}from"./exampleContent-B9pMnolB.js";import{c as g}from"./clsx-B-dksMZM.js";import{r as m}from"./index-G8LIXM5I.js";import{H as _}from"./Heading-7IbEntpa.js";import{P as w}from"./Paragraph-BDLeQ91t.js";import{I as H}from"./Image-Ci7950RD.js";const C=m.forwardRef(({children:r,className:n,size:i="level-4",...s},u)=>e.jsx(_,{...s,className:g("ams-card__heading",n),ref:u,size:i,children:r}));C.displayName="Card.Heading";try{Card.Heading.displayName="Card.Heading",Card.Heading.__docgenInfo={description:"",displayName:"Card.Heading",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'}]}},level:{defaultValue:null,description:"The hierarchical level within the document.",name:"level",required:!0,type:{name:"enum",value:[{value:"1"},{value:"3"},{value:"4"},{value:"2"}]}},size:{defaultValue:{value:"level-4"},description:"Uses larger or smaller text without changing its position in the heading hierarchy.",name:"size",required:!1,type:{name:"enum",value:[{value:'"level-1"'},{value:'"level-2"'},{value:'"level-3"'},{value:'"level-4"'},{value:'"level-5"'},{value:'"level-6"'}]}}}}}catch{}const k=m.forwardRef(({children:r,className:n,tagline:i,...s},u)=>e.jsxs("hgroup",{...s,className:g("ams-card__heading-group",n),ref:u,children:[r,e.jsx(w,{size:"small",children:i})]}));k.displayName="Card.HeadingGroup";try{Card.HeadingGroup.displayName="Card.HeadingGroup",Card.HeadingGroup.__docgenInfo={description:"",displayName:"Card.HeadingGroup",props:{tagline:{defaultValue:null,description:"A short phrase of text, e.g. to categorise the card. Displayed above the card heading.",name:"tagline",required:!0,type:{name:"string"}}}}}catch{}const f=m.forwardRef(({className:r,...n},i)=>e.jsx(H,{...n,className:g("ams-card__image",r),ref:i}));f.displayName="Card.Image";try{Card.Image.displayName="Card.Image",Card.Image.__docgenInfo={description:"",displayName:"Card.Image",props:{alt:{defaultValue:null,description:"A textual description of the content of the image.",name:"alt",required:!1,type:{name:"string"}},aspectRatio:{defaultValue:null,description:"The aspect ratio to display media content in.",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"9:16"'},{value:'"3:4"'},{value:'"1:1"'},{value:'"4:3"'},{value:'"16:9"'},{value:'"16:5"'}]}}}}}catch{}const v=m.forwardRef(({children:r,className:n,...i},s)=>e.jsx("a",{...i,className:g("ams-card__link",n),ref:s,children:r}));v.displayName="Card.Link";try{Card.Link.displayName="Card.Link",Card.Link.__docgenInfo={description:"",displayName:"Card.Link",props:{}}}catch{}const j=m.forwardRef(({children:r,className:n,...i},s)=>e.jsx("article",{...i,className:g("ams-card",n),ref:s,children:r}));j.displayName="Card";const a=Object.assign(j,{Heading:C,HeadingGroup:k,Image:f,Link:v});try{a.displayName="Card",a.__docgenInfo={description:"",displayName:"Card",props:{}}}catch{}const b=new Intl.DateTimeFormat("nl",{day:"numeric",month:"long",year:"numeric"}),G=b.format(Date.now()),h=y(),P={title:"Components/Navigation/Card",component:a,args:{style:{maxWidth:"24rem"}},argTypes:{style:{table:{disable:!0}}}},o={args:{children:[e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"/",children:h.heading})},1),e.jsx(d,{children:h.description},2)]}},t={args:{children:[e.jsx(a.HeadingGroup,{tagline:"Dossier",children:e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"/",children:"Monitor Attracties MRA"})})},1),e.jsx(d,{children:"Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam."},2)]}},c={args:{children:[e.jsx(a.Image,{alt:"",aspectRatio:"4:3",src:"https://picsum.photos/480/360"},1),e.jsx(a.HeadingGroup,{tagline:"Nieuws",children:e.jsx(a.Heading,{level:3,children:e.jsx(a.Link,{href:"/",children:"Nederlands eerste houten woonwijk komt in Zuidoost"})})},2),e.jsxs(x,{gap:"small",children:[e.jsx(d,{children:"We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark."}),e.jsx(d,{size:"small",children:G})]},3)]}},p={args:{style:void 0},parameters:{layout:"fullscreen"},render:()=>e.jsxs(l,{paddingVertical:"x-large",children:[e.jsx(l.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"#",children:"Gemeentebelastingen"})}),e.jsx(d,{children:"Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft."})]})}),e.jsx(l.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"#",children:"Parkeren + Reizen (P+R)"})}),e.jsx(d,{children:"U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad."})]})}),e.jsx(l.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"#",children:"Paspoort, ID-kaart en rijbewijs"})}),e.jsx(d,{children:"Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan."})]})}),e.jsx(l.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"#",children:"Onderwijs"})}),e.jsx(d,{children:"Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas."})]})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Card.Heading key={1} level={2}>
        <Card.Link href="/">{topTask.heading}</Card.Link>
      </Card.Heading>, <Paragraph key={2}>{topTask.description}</Paragraph>]
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Card.HeadingGroup key={1} tagline="Dossier">
        <Card.Heading level={2}>
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Card.Heading>
      </Card.HeadingGroup>, <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>]
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Card.Image alt="" aspectRatio="4:3" key={1} src="https://picsum.photos/480/360" />, <Card.HeadingGroup key={2} tagline="Nieuws">
        <Card.Heading level={3}>
          <Card.Link href="/">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
        </Card.Heading>
      </Card.HeadingGroup>, <Column gap="small" key={3}>
        <Paragraph>
          We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.
        </Paragraph>
        <Paragraph size="small">{today}</Paragraph>
      </Column>]
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    style: undefined
  },
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <Grid paddingVertical="x-large">
      <Grid.Cell span={{
      narrow: 4,
      medium: 4,
      wide: 3
    }}>
        <Card>
          <Card.Heading level={2}>
            <Card.Link href="#">Gemeentebelastingen</Card.Link>
          </Card.Heading>
          <Paragraph>
            Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.
          </Paragraph>
        </Card>
      </Grid.Cell>
      <Grid.Cell span={{
      narrow: 4,
      medium: 4,
      wide: 3
    }}>
        <Card>
          <Card.Heading level={2}>
            <Card.Link href="#">Parkeren + Reizen (P+R)</Card.Link>
          </Card.Heading>
          <Paragraph>U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.</Paragraph>
        </Card>
      </Grid.Cell>
      <Grid.Cell span={{
      narrow: 4,
      medium: 4,
      wide: 3
    }}>
        <Card>
          <Card.Heading level={2}>
            <Card.Link href="#">Paspoort, ID-kaart en rijbewijs</Card.Link>
          </Card.Heading>
          <Paragraph>Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.</Paragraph>
        </Card>
      </Grid.Cell>
      <Grid.Cell span={{
      narrow: 4,
      medium: 4,
      wide: 3
    }}>
        <Card>
          <Card.Heading level={2}>
            <Card.Link href="#">Onderwijs</Card.Link>
          </Card.Heading>
          <Paragraph>
            Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.
          </Paragraph>
        </Card>
      </Grid.Cell>
    </Grid>
}`,...p.parameters?.docs?.source}}};const L=["Default","WithTagline","WithImage","TopTasks"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:o,TopTasks:p,WithImage:c,WithTagline:t,__namedExportsOrder:L,default:P},Symbol.toStringTag,{value:"Module"}));export{S as C,p as T,t as W,c as a};
