import{a as e,i as t}from"./preload-helper-xPQekRTU.js";import{t as n}from"./jsx-runtime-BqsN2jGA.js";import{I as r,X as i,b as a,f as o}from"./iframe-C_NYPAKJ.js";import{qt as s,t as c}from"./src-C7ASMWCX.js";import{d as l,p as u}from"./exampleContent--bKQaizt.js";import{i as d,t as f}from"./types-CdGEi5NO.js";var p,m,h=t((()=>{p=new Intl.DateTimeFormat(`nl`,{day:`numeric`,month:`long`,year:`numeric`}),m=e=>p.format(e)})),g=e({Default:()=>x,TopTasks:()=>w,WithImage:()=>C,WithTagline:()=>S,__namedExportsOrder:()=>T,default:()=>b}),_,v,y,b,x,S,C,w,T,E=t((()=>{i(),c(),d(),u(),h(),_=n(),v=l(),y=e=>(0,_.jsx)(`div`,{style:{maxInlineSize:`24rem`},children:(0,_.jsx)(e,{})}),b={title:`Components/Navigation/Card`,component:s},x={args:{children:[(0,_.jsx)(s.Heading,{level:2,children:(0,_.jsx)(s.Link,{href:`/`,children:v.heading})},1),(0,_.jsx)(r,{children:v.description},2)]},decorators:[y]},S={args:{children:[(0,_.jsx)(s.HeadingGroup,{tagline:`Dossier`,children:(0,_.jsx)(s.Heading,{level:2,children:(0,_.jsx)(s.Link,{href:`/`,children:`Monitor Attracties MRA`})})},1),(0,_.jsx)(r,{children:`Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.`},2)]},decorators:[y]},C={args:{aspectRatio:`4:3`,date:m(Date.now()),heading:`Nederlands eerste houten woonwijk komt in Zuidoost`,imageSrc:`https://picsum.photos/480/360`,tagline:`Nieuws`,text:`We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.`},argTypes:{aspectRatio:{control:{type:`inline-radio`},options:f},date:{control:`text`},heading:{control:`text`},imageSrc:{control:`text`},tagline:{control:`text`},text:{control:`text`}},decorators:[y],render:({aspectRatio:e,date:t,heading:n,imageSrc:i,tagline:a,text:c,...l})=>(0,_.jsxs)(s,{...l,children:[(0,_.jsx)(s.Image,{alt:``,aspectRatio:e,src:i}),(0,_.jsx)(s.HeadingGroup,{tagline:a,children:(0,_.jsx)(s.Heading,{level:3,children:(0,_.jsx)(s.Link,{href:`/`,children:n})})}),(0,_.jsxs)(o,{gap:`small`,children:[(0,_.jsx)(r,{children:c}),(0,_.jsx)(r,{size:`small`,children:t})]})]})},w={args:{style:void 0},parameters:{layout:`fullscreen`},render:e=>(0,_.jsxs)(a,{paddingVertical:`x-large`,children:[(0,_.jsx)(a.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,_.jsxs)(s,{...e,children:[(0,_.jsx)(s.Heading,{level:2,children:(0,_.jsx)(s.Link,{href:`#`,children:`Gemeentebelastingen`})}),(0,_.jsx)(r,{children:`Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.`})]})}),(0,_.jsx)(a.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,_.jsxs)(s,{children:[(0,_.jsx)(s.Heading,{level:2,children:(0,_.jsx)(s.Link,{href:`#`,children:`Parkeren + Reizen (P+R)`})}),(0,_.jsx)(r,{children:`U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.`})]})}),(0,_.jsx)(a.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,_.jsxs)(s,{children:[(0,_.jsx)(s.Heading,{level:2,children:(0,_.jsx)(s.Link,{href:`#`,children:`Paspoort, ID-kaart en rijbewijs`})}),(0,_.jsx)(r,{children:`Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.`})]})}),(0,_.jsx)(a.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,_.jsxs)(s,{children:[(0,_.jsx)(s.Heading,{level:2,children:(0,_.jsx)(s.Link,{href:`#`,children:`Onderwijs`})}),(0,_.jsx)(r,{children:`Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.`})]})})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Card.Heading key={1} level={2}>
        <Card.Link href="/">{topTask.heading}</Card.Link>
      </Card.Heading>, <Paragraph key={2}>{topTask.description}</Paragraph>]
  },
  decorators: [maxInlineSizeDecorator]
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Card.HeadingGroup key={1} tagline="Dossier">
        <Card.Heading level={2}>
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Card.Heading>
      </Card.HeadingGroup>, <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>]
  },
  decorators: [maxInlineSizeDecorator]
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
  decorators: [maxInlineSizeDecorator],
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithTagline`,`WithImage`,`TopTasks`]}));E();export{x as Default,w as TopTasks,C as WithImage,S as WithTagline,T as __namedExportsOrder,b as default,E as n,g as t};