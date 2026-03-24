import{r as m,j as e,c as u,P as t,G as l,C as _}from"./iframe-Ct2azXav.js";import{b as w}from"./types-CjGn4A4T.js";import{m as y}from"./exampleContent-D2tKGi5u.js";import{f as H}from"./formatDate-HeD_AkCg.js";import{H as b}from"./Heading-83CX3dEJ.js";import{P as G}from"./Paragraph-3WZzKEl8.js";import{I as P}from"./Image-CEMc6DKB.js";const C=m.forwardRef(({children:r,className:n,size:i="level-3",...d},s)=>e.jsx(b,{...d,className:u("ams-card__heading",n),ref:s,size:i,children:r}));C.displayName="Card.Heading";try{Card.Heading.displayName="Card.Heading",Card.Heading.__docgenInfo={description:"",displayName:"Card.Heading",props:{color:{defaultValue:null,description:"Changes the text colour for readability on a dark background.",name:"color",required:!1,type:{name:"enum",value:[{value:'"inverse"'}]}},level:{defaultValue:null,description:"The hierarchical level within the document.",name:"level",required:!0,type:{name:"enum",value:[{value:"1"},{value:"3"},{value:"4"},{value:"2"}]}},size:{defaultValue:{value:"level-3"},description:`Uses larger or smaller text without changing its position in the heading hierarchy.
The value ‘level-6’ is deprecated. Use level 5 instead.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"level-1"'},{value:'"level-2"'},{value:'"level-3"'},{value:'"level-4"'},{value:'"level-5"'},{value:'"level-6"'}]}}}}}catch{}const k=m.forwardRef(({children:r,className:n,tagline:i,...d},s)=>e.jsxs("hgroup",{...d,className:u("ams-card__heading-group",n),ref:s,children:[r,e.jsx(G,{size:"small",children:i})]}));k.displayName="Card.HeadingGroup";try{Card.HeadingGroup.displayName="Card.HeadingGroup",Card.HeadingGroup.__docgenInfo={description:"",displayName:"Card.HeadingGroup",props:{tagline:{defaultValue:null,description:"A short phrase of text, e.g. to categorise the card. Displayed above the card heading.",name:"tagline",required:!0,type:{name:"string"}}}}}catch{}const f=m.forwardRef(({className:r,...n},i)=>e.jsx(P,{...n,className:u("ams-card__image",r),ref:i}));f.displayName="Card.Image";try{Card.Image.displayName="Card.Image",Card.Image.__docgenInfo={description:"",displayName:"Card.Image",props:{alt:{defaultValue:null,description:"A textual description of the content of the image.",name:"alt",required:!1,type:{name:"string"}},aspectRatio:{defaultValue:null,description:"The aspect ratio to display media content in.",name:"aspectRatio",required:!1,type:{name:"enum",value:[{value:'"9:16"'},{value:'"3:4"'},{value:'"1:1"'},{value:'"4:3"'},{value:'"16:9"'},{value:'"16:5"'}]}}}}}catch{}const x=m.forwardRef(({children:r,className:n,...i},d)=>e.jsx("a",{...i,className:u("ams-card__link",n),ref:d,children:r}));x.displayName="Card.Link";try{Card.Link.displayName="Card.Link",Card.Link.__docgenInfo={description:"",displayName:"Card.Link",props:{}}}catch{}const v=m.forwardRef(({children:r,className:n,...i},d)=>e.jsx("article",{...i,className:u("ams-card",n),ref:d,children:r}));v.displayName="Card";const a=Object.assign(v,{Heading:C,HeadingGroup:k,Image:f,Link:x});try{a.displayName="Card",a.__docgenInfo={description:"",displayName:"Card",props:{}}}catch{}const h=y(),L={title:"Components/Navigation/Card",component:a,args:{style:{maxWidth:"24rem"}}},o={args:{children:[e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"/",children:h.heading})},1),e.jsx(t,{children:h.description},2)]}},c={args:{children:[e.jsx(a.HeadingGroup,{tagline:"Dossier",children:e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"/",children:"Monitor Attracties MRA"})})},1),e.jsx(t,{children:"Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam."},2)]}},p={args:{aspectRatio:"4:3",date:H(Date.now()),heading:"Nederlands eerste houten woonwijk komt in Zuidoost",tagline:"Nieuws",text:"We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark."},argTypes:{aspectRatio:{control:{type:"inline-radio"},options:w},date:{control:"text"},heading:{control:"text"},tagline:{control:"text"},text:{control:"text"}},render:({aspectRatio:r,date:n,heading:i,tagline:d,text:s,...j})=>e.jsxs(a,{...j,children:[e.jsx(a.Image,{alt:"",aspectRatio:r,src:"https://picsum.photos/480/360"}),e.jsx(a.HeadingGroup,{tagline:d,children:e.jsx(a.Heading,{level:3,children:e.jsx(a.Link,{href:"/",children:i})})}),e.jsxs(_,{gap:"small",children:[e.jsx(t,{children:s}),e.jsx(t,{size:"small",children:n})]})]})},g={args:{style:void 0},parameters:{layout:"fullscreen"},render:r=>e.jsxs(l,{paddingVertical:"x-large",children:[e.jsx(l.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{...r,children:[e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"#",children:"Gemeentebelastingen"})}),e.jsx(t,{children:"Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft."})]})}),e.jsx(l.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"#",children:"Parkeren + Reizen (P+R)"})}),e.jsx(t,{children:"U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad."})]})}),e.jsx(l.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"#",children:"Paspoort, ID-kaart en rijbewijs"})}),e.jsx(t,{children:"Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan."})]})}),e.jsx(l.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(a.Heading,{level:2,children:e.jsx(a.Link,{href:"#",children:"Onderwijs"})}),e.jsx(t,{children:"Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas."})]})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Card.Heading key={1} level={2}>
        <Card.Link href="/">{topTask.heading}</Card.Link>
      </Card.Heading>, <Paragraph key={2}>{topTask.description}</Paragraph>]
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Card.HeadingGroup key={1} tagline="Dossier">
        <Card.Heading level={2}>
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Card.Heading>
      </Card.HeadingGroup>, <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>]
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    aspectRatio: '4:3',
    date: formatDate(Date.now()),
    heading: 'Nederlands eerste houten woonwijk komt in Zuidoost',
    tagline: 'Nieuws',
    text: 'We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.'
  },
  argTypes: {
    aspectRatio: {
      control: {
        type: 'inline-radio'
      },
      options: aspectRatioOptions
    },
    date: {
      control: 'text'
    },
    heading: {
      control: 'text'
    },
    tagline: {
      control: 'text'
    },
    text: {
      control: 'text'
    }
  },
  render: ({
    aspectRatio,
    date,
    heading,
    tagline,
    text,
    ...args
  }) => <Card {...args}>
      <Card.Image alt="" aspectRatio={aspectRatio} src="https://picsum.photos/480/360" />
      <Card.HeadingGroup tagline={tagline}>
        <Card.Heading level={3}>
          <Card.Link href="/">{heading}</Card.Link>
        </Card.Heading>
      </Card.HeadingGroup>
      <Column gap="small">
        <Paragraph>{text}</Paragraph>
        <Paragraph size="small">{date}</Paragraph>
      </Column>
    </Card>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    style: undefined
  },
  parameters: {
    layout: 'fullscreen'
  },
  render: args => <Grid paddingVertical="x-large">
      <Grid.Cell span={{
      narrow: 4,
      medium: 4,
      wide: 3
    }}>
        <Card {...args}>
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
}`,...g.parameters?.docs?.source}}};const N=["Default","WithTagline","WithImage","TopTasks"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:o,TopTasks:g,WithImage:p,WithTagline:c,__namedExportsOrder:N,default:L},Symbol.toStringTag,{value:"Module"}));export{a as C,g as T,c as W,M as a,p as b,L as m};
