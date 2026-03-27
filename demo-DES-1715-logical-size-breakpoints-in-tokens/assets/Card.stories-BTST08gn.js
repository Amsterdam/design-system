import{n as e,r as t}from"./chunk-BneVvdWh.js";import{t as n}from"./jsx-runtime-BrayXyei.js";import{G as r,N as i,d as a,v as o}from"./iframe-B9eLmZ9O.js";import{rt as s,t as c}from"./src-D9hPSS_O.js";import{f as l,m as u}from"./exampleContent-ChMoTaqN.js";import{n as d,t as f}from"./formatDate-BbPPSTTe.js";var p=t({Default:()=>_,TopTasks:()=>b,WithImage:()=>y,WithTagline:()=>v,__namedExportsOrder:()=>x,default:()=>g}),m,h,g,_,v,y,b,x,S=e((()=>{r(),c(),u(),d(),m=n(),h=l(),g={title:`Components/Navigation/Card`,component:s,args:{style:{maxWidth:`24rem`}}},_={args:{children:[(0,m.jsx)(s.Heading,{level:2,children:(0,m.jsx)(s.Link,{href:`/`,children:h.heading})},1),(0,m.jsx)(i,{children:h.description},2)]}},v={args:{children:[(0,m.jsx)(s.HeadingGroup,{tagline:`Dossier`,children:(0,m.jsx)(s.Heading,{level:2,children:(0,m.jsx)(s.Link,{href:`/`,children:`Monitor Attracties MRA`})})},1),(0,m.jsx)(i,{children:`Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.`},2)]}},y={args:{children:[(0,m.jsx)(s.Image,{alt:``,aspectRatio:`4:3`,src:`https://picsum.photos/480/360`},1),(0,m.jsx)(s.HeadingGroup,{tagline:`Nieuws`,children:(0,m.jsx)(s.Heading,{level:3,children:(0,m.jsx)(s.Link,{href:`/`,children:`Nederlands eerste houten woonwijk komt in Zuidoost`})})},2),(0,m.jsxs)(a,{gap:`small`,children:[(0,m.jsx)(i,{children:`We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.`}),(0,m.jsx)(i,{size:`small`,children:f(Date.now())})]},3)]}},b={args:{style:void 0},parameters:{layout:`fullscreen`},render:e=>(0,m.jsxs)(o,{paddingVertical:`x-large`,children:[(0,m.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,m.jsxs)(s,{...e,children:[(0,m.jsx)(s.Heading,{level:2,children:(0,m.jsx)(s.Link,{href:`#`,children:`Gemeentebelastingen`})}),(0,m.jsx)(i,{children:`Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.`})]})}),(0,m.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,m.jsxs)(s,{children:[(0,m.jsx)(s.Heading,{level:2,children:(0,m.jsx)(s.Link,{href:`#`,children:`Parkeren + Reizen (P+R)`})}),(0,m.jsx)(i,{children:`U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.`})]})}),(0,m.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,m.jsxs)(s,{children:[(0,m.jsx)(s.Heading,{level:2,children:(0,m.jsx)(s.Link,{href:`#`,children:`Paspoort, ID-kaart en rijbewijs`})}),(0,m.jsx)(i,{children:`Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.`})]})}),(0,m.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,m.jsxs)(s,{children:[(0,m.jsx)(s.Heading,{level:2,children:(0,m.jsx)(s.Link,{href:`#`,children:`Onderwijs`})}),(0,m.jsx)(i,{children:`Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.`})]})})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Card.Heading key={1} level={2}>
        <Card.Link href="/">{topTask.heading}</Card.Link>
      </Card.Heading>, <Paragraph key={2}>{topTask.description}</Paragraph>]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Card.HeadingGroup key={1} tagline="Dossier">
        <Card.Heading level={2}>
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Card.Heading>
      </Card.HeadingGroup>, <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithTagline`,`WithImage`,`TopTasks`]}));S();export{_ as Default,b as TopTasks,y as WithImage,v as WithTagline,x as __namedExportsOrder,g as default,S as n,p as t};