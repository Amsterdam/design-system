import{r as g,j as e,c as m,P as d,C as _,G as l}from"./iframe-BMmcCAtw.js";import{f as w}from"./common-DrnyCu3t.js";import{k as x}from"./exampleContent-DRope23M.js";import{H as y}from"./Heading-D942HoTR.js";import{P as H}from"./Paragraph-BUSxS5ti.js";import{I as b}from"./Image-BhzyH_eO.js";const C=g.forwardRef(({children:r,className:n,size:i="level-3",...s},h)=>e.jsx(y,{...s,className:m("ams-card__heading",n),ref:h,size:i,children:r}));C.displayName="Card.Heading";try{Card.Heading.displayName="Card.Heading",Card.Heading.__docgenInfo={description:"",displayName:"Card.Heading",props:{level:{defaultValue:null,description:"The hierarchical level within the document.",name:"level",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},size:{defaultValue:{value:"level-3"},description:`Uses larger or smaller text without changing its position in the heading hierarchy.
The value ‘level-6’ is deprecated. Use level 5 instead.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"level-1"'},{value:'"level-2"'},{value:'"level-3"'},{value:'"level-4"'},{value:'"level-5"'},{value:'"level-6"'}]}}}}}catch{}const k=g.forwardRef(({children:r,className:n,tagline:i,...s},h)=>e.jsxs("hgroup",{...s,className:m("ams-card__heading-group",n),ref:h,children:[r,e.jsx(H,{size:"small",children:i})]}));k.displayName="Card.HeadingGroup";try{Card.HeadingGroup.displayName="Card.HeadingGroup",Card.HeadingGroup.__docgenInfo={description:"",displayName:"Card.HeadingGroup",props:{tagline:{defaultValue:null,description:"A short phrase of text, e.g. to categorise the card. Displayed above the card heading.",name:"tagline",required:!0,type:{name:"string"}}}}}catch{}const f=g.forwardRef(({className:r,...n},i)=>e.jsx(b,{...n,className:m("ams-card__image",r),ref:i}));f.displayName="Card.Image";try{Card.Image.displayName="Card.Image",Card.Image.__docgenInfo={description:"",displayName:"Card.Image",props:{aspectRatio:{defaultValue:null,description:"The aspect ratio to display media content in.",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"9:16"'},{value:'"3:4"'},{value:'"1:1"'},{value:'"4:3"'},{value:'"16:9"'},{value:'"16:5"'}]}}}}}catch{}const v=g.forwardRef(({children:r,className:n,...i},s)=>e.jsx("a",{...i,className:m("ams-card__link",n),ref:s,children:r}));v.displayName="Card.Link";try{Card.Link.displayName="Card.Link",Card.Link.__docgenInfo={description:"",displayName:"Card.Link",props:{}}}catch{}const j=g.forwardRef(({children:r,className:n,...i},s)=>e.jsx("article",{...i,className:m("ams-card",n),ref:s,children:r}));j.displayName="Card";const a=Object.assign(j,{Heading:C,HeadingGroup:k,Image:f,Link:v});try{a.displayName="Card",a.__docgenInfo={description:"",displayName:"Card",props:{}}}catch{}const u=x(),G={title:"Components/Navigation/Card",component:a,args:{style:{maxWidth:"24rem"}},argTypes:{style:{table:{disable:!0}}}},o={args:{children:[e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"/",children:u.heading})},1),e.jsx(d,{children:u.description},2)]}},t={args:{children:[e.jsx(a.HeadingGroup,{tagline:"Dossier",children:e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"/",children:"Monitor Attracties MRA"})})},1),e.jsx(d,{children:"Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam."},2)]}},c={args:{children:[e.jsx(a.Image,{alt:"",aspectRatio:"4:3",src:"https://picsum.photos/480/360"},1),e.jsx(a.HeadingGroup,{tagline:"Nieuws",children:e.jsx(a.Heading,{level:3,children:e.jsx(a.Link,{href:"/",children:"Nederlands eerste houten woonwijk komt in Zuidoost"})})},2),e.jsxs(_,{gap:"small",children:[e.jsx(d,{children:"We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark."}),e.jsx(d,{size:"small",children:w(Date.now())})]},3)]}},p={args:{style:void 0},parameters:{layout:"fullscreen"},render:()=>e.jsxs(l,{paddingVertical:"x-large",children:[e.jsx(l.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"#",children:"Gemeentebelastingen"})}),e.jsx(d,{children:"Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft."})]})}),e.jsx(l.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"#",children:"Parkeren + Reizen (P+R)"})}),e.jsx(d,{children:"U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad."})]})}),e.jsx(l.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"#",children:"Paspoort, ID-kaart en rijbewijs"})}),e.jsx(d,{children:"Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan."})]})}),e.jsx(l.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"#",children:"Onderwijs"})}),e.jsx(d,{children:"Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas."})]})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
        <Paragraph size="small">{formatDate(Date.now())}</Paragraph>
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
}`,...p.parameters?.docs?.source}}};const P=["Default","WithTagline","WithImage","TopTasks"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:o,TopTasks:p,WithImage:c,WithTagline:t,__namedExportsOrder:P,default:G},Symbol.toStringTag,{value:"Module"}));export{D as C,p as T,t as W,c as a};
