import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./jsx-runtime-BqsN2jGA.js";import{J as r,P as i,u as a,v as o}from"./index.esm-G20QXLNo.js";import{qt as s,t as c}from"./src-DqRX3ghB.js";import{d as l,p as u}from"./exampleContent--bKQaizt.js";import{n as d,t as f}from"./decorators-CjD6-inJ.js";import{i as p,t as m}from"./types-CdGEi5NO.js";var h,g,_=t((()=>{h=new Intl.DateTimeFormat(`nl`,{day:`numeric`,month:`long`,year:`numeric`}),g=e=>h.format(e)})),v=e({Default:()=>S,TopTasks:()=>T,WithImage:()=>w,WithTagline:()=>C,__namedExportsOrder:()=>E,default:()=>x}),y,b,x,S,C,w,T,E,D=t((()=>{r(),c(),p(),f(),u(),_(),y=n(),b=l(),x={title:`Components/Navigation/Card`,component:s},S={args:{children:[(0,y.jsx)(s.Heading,{level:2,children:(0,y.jsx)(s.Link,{href:`/`,children:b.heading})},1),(0,y.jsx)(i,{children:b.description},2)]},decorators:[d(`24rem`)]},C={args:{children:[(0,y.jsx)(s.HeadingGroup,{tagline:`Dossier`,children:(0,y.jsx)(s.Heading,{level:2,children:(0,y.jsx)(s.Link,{href:`/`,children:`Monitor Attracties MRA`})})},1),(0,y.jsx)(i,{children:`Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.`},2)]},decorators:[d(`24rem`)]},w={args:{aspectRatio:`4:3`,date:g(Date.now()),heading:`Nederlands eerste houten woonwijk komt in Zuidoost`,imageSrc:`https://picsum.photos/480/360`,tagline:`Nieuws`,text:`We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.`},argTypes:{aspectRatio:{control:{type:`inline-radio`},options:m},date:{control:`text`},heading:{control:`text`},imageSrc:{control:`text`},tagline:{control:`text`},text:{control:`text`}},decorators:[d(`24rem`)],render:({aspectRatio:e,date:t,heading:n,imageSrc:r,tagline:o,text:c,...l})=>(0,y.jsxs)(s,{...l,children:[(0,y.jsx)(s.Image,{alt:``,aspectRatio:e,src:r}),(0,y.jsx)(s.HeadingGroup,{tagline:o,children:(0,y.jsx)(s.Heading,{level:3,children:(0,y.jsx)(s.Link,{href:`/`,children:n})})}),(0,y.jsxs)(a,{gap:`small`,children:[(0,y.jsx)(i,{children:c}),(0,y.jsx)(i,{size:`small`,children:t})]})]})},T={args:{style:void 0},parameters:{layout:`fullscreen`},render:e=>(0,y.jsxs)(o,{paddingVertical:`x-large`,children:[(0,y.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,y.jsxs)(s,{...e,children:[(0,y.jsx)(s.Heading,{level:2,children:(0,y.jsx)(s.Link,{href:`#`,children:`Gemeentebelastingen`})}),(0,y.jsx)(i,{children:`Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.`})]})}),(0,y.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,y.jsxs)(s,{children:[(0,y.jsx)(s.Heading,{level:2,children:(0,y.jsx)(s.Link,{href:`#`,children:`Parkeren + Reizen (P+R)`})}),(0,y.jsx)(i,{children:`U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.`})]})}),(0,y.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,y.jsxs)(s,{children:[(0,y.jsx)(s.Heading,{level:2,children:(0,y.jsx)(s.Link,{href:`#`,children:`Paspoort, ID-kaart en rijbewijs`})}),(0,y.jsx)(i,{children:`Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.`})]})}),(0,y.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,y.jsxs)(s,{children:[(0,y.jsx)(s.Heading,{level:2,children:(0,y.jsx)(s.Link,{href:`#`,children:`Onderwijs`})}),(0,y.jsx)(i,{children:`Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.`})]})})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Card.Heading key={1} level={2}>
        <Card.Link href="/">{topTask.heading}</Card.Link>
      </Card.Heading>, <Paragraph key={2}>{topTask.description}</Paragraph>]
  },
  decorators: [maximiseInlineSize('24rem')]
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Card.HeadingGroup key={1} tagline="Dossier">
        <Card.Heading level={2}>
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Card.Heading>
      </Card.HeadingGroup>, <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>]
  },
  decorators: [maximiseInlineSize('24rem')]
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    aspectRatio: '4:3',
    date: formatDate(Date.now()),
    heading: 'Nederlands eerste houten woonwijk komt in Zuidoost',
    imageSrc: 'https://picsum.photos/480/360',
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
    imageSrc: {
      control: 'text'
    },
    tagline: {
      control: 'text'
    },
    text: {
      control: 'text'
    }
  },
  decorators: [maximiseInlineSize('24rem')],
  render: ({
    aspectRatio,
    date,
    heading,
    imageSrc,
    tagline,
    text,
    ...args
  }) => <Card {...args}>
      <Card.Image alt="" aspectRatio={aspectRatio} src={imageSrc} />
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithTagline`,`WithImage`,`TopTasks`]}));D();export{S as Default,T as TopTasks,w as WithImage,C as WithTagline,E as __namedExportsOrder,x as default,D as n,v as t};