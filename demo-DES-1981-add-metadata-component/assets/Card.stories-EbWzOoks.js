import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{M as r,f as i,tt as a,x as o,z as s}from"./index.esm-Ds-Hi7ZS.js";import{n as c,t as l}from"./Card-BNFrwvAS.js";import{n as u,r as d,t as f}from"./decorators-CC3mqUoj.js";import{i as p,t as m}from"./types-C0F630hP.js";var h,g;function _(){return(_=e((()=>{h=new Intl.DateTimeFormat(`nl`,{day:`numeric`,month:`long`,year:`numeric`}),g=e=>h.format(e)})))()}var v=t({Default:()=>x,HorizontalLayout:()=>C,TopTasks:()=>w,WithTagline:()=>S,__namedExportsOrder:()=>T,default:()=>b}),y,b,x,S,C,w,T;function E(){return(E=e((()=>{a(),c(),p(),f(),_(),y=n(),b={title:`Components/Navigation/Card`,component:l,subcomponents:{"Card.Heading":l.Heading,"Card.HeadingGroup":l.HeadingGroup,"Card.Image":l.Image,"Card.Link":l.Link}},x={args:{aspectRatio:`16:9`,date:g(Date.now()),heading:`Nederlands eerste houten woonwijk komt in Zuidoost`,imageSrc:`https://picsum.photos/480/360`,tagline:`Nieuws`,text:`We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.`},argTypes:{aspectRatio:{control:{type:`select`},options:m},date:{control:`text`},heading:{control:`text`},imageSrc:{control:`text`},tagline:{control:`text`},text:{control:`text`}},decorators:[d(),u(`24rem`)],render:({aspectRatio:e,date:t,heading:n,imageSrc:a,tagline:o,text:c,...u})=>(0,y.jsxs)(l,{...u,children:[(0,y.jsx)(l.Image,{alt:``,aspectRatio:e,src:a}),(0,y.jsxs)(l.Content,{children:[(0,y.jsx)(l.HeadingGroup,{tagline:o,children:(0,y.jsx)(l.Heading,{level:3,children:(0,y.jsx)(l.Link,{href:`/`,children:n})})}),(0,y.jsxs)(i,{gap:`small`,children:[(0,y.jsx)(s,{children:c}),(0,y.jsx)(r,{size:`small`,children:(0,y.jsx)(r.Item,{children:t})})]})]})]})},S={args:{children:[(0,y.jsx)(l.HeadingGroup,{tagline:`Dossier`,children:(0,y.jsx)(l.Heading,{level:2,children:(0,y.jsx)(l.Link,{href:`/`,children:`Monitor Attracties MRA`})})},1),(0,y.jsx)(s,{children:`Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.`},2)]},decorators:[u(`24rem`)]},C={args:x.args,argTypes:x.argTypes,decorators:[d(void 0,{inlineSize:`56rem`,maxInlineSize:`100%`})],render:x.render},w={parameters:{layout:`fullscreen`},render:e=>(0,y.jsxs)(o,{paddingVertical:`x-large`,children:[(0,y.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,y.jsxs)(l,{...e,children:[(0,y.jsx)(l.Heading,{level:2,children:(0,y.jsx)(l.Link,{href:`#`,children:`Gemeentebelastingen`})}),(0,y.jsx)(s,{children:`Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.`})]})}),(0,y.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,y.jsxs)(l,{children:[(0,y.jsx)(l.Heading,{level:2,children:(0,y.jsx)(l.Link,{href:`#`,children:`Parkeren + Reizen (P+R)`})}),(0,y.jsx)(s,{children:`U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.`})]})}),(0,y.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,y.jsxs)(l,{children:[(0,y.jsx)(l.Heading,{level:2,children:(0,y.jsx)(l.Link,{href:`#`,children:`Paspoort, ID-kaart en rijbewijs`})}),(0,y.jsx)(s,{children:`Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.`})]})}),(0,y.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,y.jsxs)(l,{children:[(0,y.jsx)(l.Heading,{level:2,children:(0,y.jsx)(l.Link,{href:`#`,children:`Onderwijs`})}),(0,y.jsx)(s,{children:`Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.`})]})})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
          <Metadata size="small">
            <Metadata.Item>{date}</Metadata.Item>
          </Metadata>
        </Column>
      </Card.Content>
    </Card>
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
  decorators: [maximiseInlineSize('24rem')]
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: Default.args,
  argTypes: Default.argTypes,
  decorators: [wrapInInlineSizeQueryContainer(undefined, {
    inlineSize: '56rem',
    maxInlineSize: '100%'
  })],
  render: Default.render
}`,...C.parameters?.docs?.source},description:{story:`A Card that pairs an image with a Card Content switches to a horizontal layout once its container is wider
than 36rem. Resize the container to see it change; the markup is the same in both layouts.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithTagline`,`HorizontalLayout`,`TopTasks`]})))()}export{E as a,S as i,C as n,b as o,w as r,v as t};