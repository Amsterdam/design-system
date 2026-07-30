import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{P as r,X as i,u as a,v as o}from"./index.esm-CpDCtynu.js";import{in as s,t as c}from"./src-DiwpI6rq.js";import{n as l,r as u,t as d}from"./decorators-Bc6E1LMh.js";import{i as f,t as p}from"./types-Upr6OxRk.js";var m,h,g=e((()=>{m=new Intl.DateTimeFormat(`nl`,{day:`numeric`,month:`long`,year:`numeric`}),h=e=>m.format(e)})),_=t({Default:()=>b,HorizontalLayout:()=>S,TopTasks:()=>C,WithTagline:()=>x,__namedExportsOrder:()=>w,default:()=>y}),v,y,b,x,S,C,w,T=e((()=>{i(),c(),f(),d(),g(),v=n(),y={title:`Components/Navigation/Card`,component:s},b={args:{aspectRatio:`16:9`,date:h(Date.now()),heading:`Nederlands eerste houten woonwijk komt in Zuidoost`,imageSrc:`https://picsum.photos/480/360`,tagline:`Nieuws`,text:`We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.`},argTypes:{aspectRatio:{control:{type:`select`},options:p},date:{control:`text`},heading:{control:`text`},imageSrc:{control:`text`},tagline:{control:`text`},text:{control:`text`}},decorators:[u(),l(`24rem`)],render:({aspectRatio:e,date:t,heading:n,imageSrc:i,tagline:o,text:c,...l})=>(0,v.jsxs)(s,{...l,children:[(0,v.jsx)(s.Image,{alt:``,aspectRatio:e,src:i}),(0,v.jsxs)(s.Content,{children:[(0,v.jsx)(s.HeadingGroup,{tagline:o,children:(0,v.jsx)(s.Heading,{level:3,children:(0,v.jsx)(s.Link,{href:`/`,children:n})})}),(0,v.jsxs)(a,{gap:`small`,children:[(0,v.jsx)(r,{children:c}),(0,v.jsx)(r,{size:`small`,children:t})]})]})]})},x={args:{children:[(0,v.jsx)(s.HeadingGroup,{tagline:`Dossier`,children:(0,v.jsx)(s.Heading,{level:2,children:(0,v.jsx)(s.Link,{href:`/`,children:`Monitor Attracties MRA`})})},1),(0,v.jsx)(r,{children:`Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.`},2)]},decorators:[l(`24rem`)]},S={args:b.args,argTypes:b.argTypes,decorators:[u(void 0,{inlineSize:`56rem`,maxInlineSize:`100%`})],render:b.render},C={args:{style:void 0},parameters:{layout:`fullscreen`},render:e=>(0,v.jsxs)(o,{paddingVertical:`x-large`,children:[(0,v.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,v.jsxs)(s,{...e,children:[(0,v.jsx)(s.Heading,{level:2,children:(0,v.jsx)(s.Link,{href:`#`,children:`Gemeentebelastingen`})}),(0,v.jsx)(r,{children:`Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.`})]})}),(0,v.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,v.jsxs)(s,{children:[(0,v.jsx)(s.Heading,{level:2,children:(0,v.jsx)(s.Link,{href:`#`,children:`Parkeren + Reizen (P+R)`})}),(0,v.jsx)(r,{children:`U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.`})]})}),(0,v.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,v.jsxs)(s,{children:[(0,v.jsx)(s.Heading,{level:2,children:(0,v.jsx)(s.Link,{href:`#`,children:`Paspoort, ID-kaart en rijbewijs`})}),(0,v.jsx)(r,{children:`Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.`})]})}),(0,v.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,v.jsxs)(s,{children:[(0,v.jsx)(s.Heading,{level:2,children:(0,v.jsx)(s.Link,{href:`#`,children:`Onderwijs`})}),(0,v.jsx)(r,{children:`Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.`})]})})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    aspectRatio: '16:9',
    date: formatDate(Date.now()),
    heading: 'Nederlands eerste houten woonwijk komt in Zuidoost',
    imageSrc: 'https://picsum.photos/480/360',
    tagline: 'Nieuws',
    text: 'We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.'
  },
  // These argTypes describe flattened args specific to this composed story; the meta cannot provide them.
  argTypes: {
    aspectRatio: {
      control: {
        type: 'select'
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
  // The query container keeps this Card below the width at which it would switch to a horizontal layout.
  decorators: [wrapInInlineSizeQueryContainer(), maximiseInlineSize('24rem')],
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
      <Card.Content>
        <Card.HeadingGroup tagline={tagline}>
          <Card.Heading level={3}>
            <Card.Link href="/">{heading}</Card.Link>
          </Card.Heading>
        </Card.HeadingGroup>
        <Column gap="small">
          <Paragraph>{text}</Paragraph>
          <Paragraph size="small">{date}</Paragraph>
        </Column>
      </Card.Content>
    </Card>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: Default.args,
  argTypes: Default.argTypes,
  decorators: [wrapInInlineSizeQueryContainer(undefined, {
    inlineSize: '56rem',
    maxInlineSize: '100%'
  })],
  render: Default.render
}`,...S.parameters?.docs?.source},description:{story:`A Card that pairs an image with a Card Content switches to a horizontal layout once its container is wider
than 36rem. Resize the container to see it change; the markup is the same in both layouts.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithTagline`,`HorizontalLayout`,`TopTasks`]}));T();export{b as Default,S as HorizontalLayout,C as TopTasks,x as WithTagline,w as __namedExportsOrder,y as default,T as n,_ as t};