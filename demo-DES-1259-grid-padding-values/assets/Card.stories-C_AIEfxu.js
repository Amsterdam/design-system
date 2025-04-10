import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{H as i,P as n,I as R,G as o}from"./index.esm-CP897uy_.js";import{i as T}from"./exampleContent-PGFPgakh.js";import{c as m}from"./clsx-B-dksMZM.js";import{r as h}from"./index-G8LIXM5I.js";import{P as I}from"./Paragraph-BDLeQ91t.js";const H=h.forwardRef(({children:r,className:s,tagline:d,...l},N)=>e.jsxs("hgroup",{...l,className:m("ams-card__heading-group",s),ref:N,children:[r,e.jsx(I,{size:"small",children:d})]}));H.displayName="Card.HeadingGroup";try{Card.HeadingGroup.displayName="Card.HeadingGroup",Card.HeadingGroup.__docgenInfo={description:"",displayName:"Card.HeadingGroup",props:{tagline:{defaultValue:null,description:"A short phrase of text, e.g. to categorise the card. Displayed above the card heading.",name:"tagline",required:!0,type:{name:"string"}}}}}catch{}const P=h.forwardRef(({children:r,className:s,...d},l)=>e.jsx("a",{...d,className:m("ams-card__link",s),ref:l,children:r}));P.displayName="Card.Link";try{Card.Link.displayName="Card.Link",Card.Link.__docgenInfo={description:"",displayName:"Card.Link",props:{}}}catch{}const L=h.forwardRef(({children:r,className:s,...d},l)=>e.jsx("article",{...d,className:m("ams-card",s),ref:l,children:r}));L.displayName="Card";const a=Object.assign(L,{HeadingGroup:H,Link:P});try{a.displayName="Card",a.__docgenInfo={description:"",displayName:"Card",props:{}}}catch{}const D=new Intl.DateTimeFormat("nl",{day:"numeric",month:"long",year:"numeric"}),M=D.format(Date.now()),u=T(),S={title:"Components/Navigation/Card",component:a,args:{style:{maxWidth:"24rem"}},argTypes:{style:{table:{disable:!0}}}},t={args:{children:[e.jsx(i,{level:1,size:"level-4",children:e.jsx(a.Link,{href:"/",children:u.heading})},1),e.jsx(n,{children:u.description},2)]}},c={args:{children:[e.jsx(a.HeadingGroup,{tagline:"Dossier",children:e.jsx(i,{level:1,size:"level-4",children:e.jsx(a.Link,{href:"/",children:"Monitor Attracties MRA"})})},1),e.jsx(n,{children:"Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam."},2)]}},p={args:{children:[e.jsx(R,{alt:"",aspectRatio:"4:3",src:"https://picsum.photos/480/360"},1),e.jsx(a.HeadingGroup,{tagline:"Nieuws",children:e.jsx(i,{level:1,size:"level-4",children:e.jsx(a.Link,{href:"/",children:"Nederlands eerste houten woonwijk komt in Zuidoost"})})},2),e.jsx(n,{children:"We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark."},3),e.jsx(n,{size:"small",children:M},4)]}},g={args:{style:void 0},parameters:{layout:"fullscreen"},render:()=>e.jsxs(o,{paddingVertical:"x-large",children:[e.jsx(o.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(i,{level:2,size:"level-4",children:e.jsx(a.Link,{href:"#",children:"Gemeentebelastingen"})}),e.jsx(n,{size:"small",children:"Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft."})]})}),e.jsx(o.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(i,{level:3,size:"level-4",children:e.jsx(a.Link,{href:"#",children:"Parkeren + Reizen (P+R)"})}),e.jsx(n,{size:"small",children:"U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad."})]})}),e.jsx(o.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(i,{level:3,size:"level-4",children:e.jsx(a.Link,{href:"#",children:"Paspoort, ID-kaart en rijbewijs"})}),e.jsx(n,{size:"small",children:"Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan."})]})}),e.jsx(o.Cell,{span:{narrow:4,medium:4,wide:3},children:e.jsxs(a,{children:[e.jsx(i,{level:3,size:"level-4",children:e.jsx(a.Link,{href:"#",children:"Onderwijs"})}),e.jsx(n,{size:"small",children:"Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas."})]})})]})};var k,j,C;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: [<Heading key={1} level={1} size="level-4">
        <Card.Link href="/">{topTask.heading}</Card.Link>
      </Heading>, <Paragraph key={2}>{topTask.description}</Paragraph>]
  }
}`,...(C=(j=t.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var f,w,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: [<Card.HeadingGroup key={1} tagline="Dossier">
        <Heading level={1} size="level-4">
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Heading>
      </Card.HeadingGroup>, <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>]
  }
}`,...(x=(w=c.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var v,z,y;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: [<Image alt="" aspectRatio="4:3" key={1} src="https://picsum.photos/480/360" />, <Card.HeadingGroup key={2} tagline="Nieuws">
        <Heading level={1} size="level-4">
          <Card.Link href="/">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
        </Heading>
      </Card.HeadingGroup>, <Paragraph key={3}>
        We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.
      </Paragraph>, <Paragraph key={4} size="small">
        {today}
      </Paragraph>]
  }
}`,...(y=(z=p.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var _,b,G;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
          <Heading level={2} size="level-4">
            <Card.Link href="#">Gemeentebelastingen</Card.Link>
          </Heading>
          <Paragraph size="small">
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
          <Heading level={3} size="level-4">
            <Card.Link href="#">Parkeren + Reizen (P+R)</Card.Link>
          </Heading>
          <Paragraph size="small">
            U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.
          </Paragraph>
        </Card>
      </Grid.Cell>
      <Grid.Cell span={{
      narrow: 4,
      medium: 4,
      wide: 3
    }}>
        <Card>
          <Heading level={3} size="level-4">
            <Card.Link href="#">Paspoort, ID-kaart en rijbewijs</Card.Link>
          </Heading>
          <Paragraph size="small">Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.</Paragraph>
        </Card>
      </Grid.Cell>
      <Grid.Cell span={{
      narrow: 4,
      medium: 4,
      wide: 3
    }}>
        <Card>
          <Heading level={3} size="level-4">
            <Card.Link href="#">Onderwijs</Card.Link>
          </Heading>
          <Paragraph size="small">
            Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.
          </Paragraph>
        </Card>
      </Grid.Cell>
    </Grid>
}`,...(G=(b=g.parameters)==null?void 0:b.docs)==null?void 0:G.source}}};const O=["Default","WithTagline","WithImage","TopTasks"],U=Object.freeze(Object.defineProperty({__proto__:null,Default:t,TopTasks:g,WithImage:p,WithTagline:c,__namedExportsOrder:O,default:S},Symbol.toStringTag,{value:"Module"}));export{U as C,g as T,c as W,p as a};
