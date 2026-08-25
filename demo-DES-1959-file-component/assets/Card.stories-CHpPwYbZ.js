import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{C as r,V as i,p as a,rt as o}from"./index.esm-Ctu72FTR.js";import{n as s,t as c}from"./Card-B6lgd5_o.js";import{n as l,t as u}from"./Metadata-BpMGsuuW.js";import{n as d,r as f,t as p}from"./decorators-_oEiZUlU.js";import{i as m,t as h}from"./types-C0F630hP.js";var g,_;function v(){return(v=e((()=>{g=new Intl.DateTimeFormat(`nl`,{day:`numeric`,month:`long`,year:`numeric`}),_=e=>g.format(e)})))()}var y=t({Default:()=>S,HorizontalLayout:()=>w,TopTasks:()=>T,WithMetadata:()=>C,__namedExportsOrder:()=>E,default:()=>x}),b,x,S,C,w,T,E;function D(){return(D=e((()=>{o(),s(),l(),m(),p(),v(),b=n(),x={title:`Components/Navigation/Card`,component:c,subcomponents:{"Card.Heading":c.Heading,"Card.HeadingGroup":c.HeadingGroup,"Card.Image":c.Image,"Card.Link":c.Link}},S={args:{aspectRatio:`16:9`,category:`Nieuws`,date:_(Date.now()),heading:`Nederlands eerste houten woonwijk komt in Zuidoost`,imageSrc:`https://picsum.photos/480/360`,text:`We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.`},argTypes:{aspectRatio:{control:{type:`select`},options:h},category:{control:`text`},date:{control:`text`},heading:{control:`text`},imageSrc:{control:`text`},text:{control:`text`}},decorators:[f(),d(`24rem`)],render:({aspectRatio:e,category:t,date:n,heading:r,imageSrc:o,text:s,...l})=>(0,b.jsxs)(c,{...l,children:[(0,b.jsx)(c.Image,{alt:``,aspectRatio:e,src:o}),(0,b.jsxs)(c.Content,{children:[(0,b.jsxs)(c.HeadingGroup,{children:[(0,b.jsx)(c.Heading,{level:3,children:(0,b.jsx)(c.Link,{href:`/`,children:r})}),(0,b.jsx)(u,{size:`small`,children:t})]}),(0,b.jsxs)(a,{gap:`small`,children:[(0,b.jsx)(i,{children:s}),(0,b.jsx)(u,{size:`small`,children:n})]})]})]})},C={args:{children:[(0,b.jsxs)(c.HeadingGroup,{children:[(0,b.jsx)(c.Heading,{level:2,children:(0,b.jsx)(c.Link,{href:`/`,children:`Monitor Attracties MRA`})}),(0,b.jsx)(u,{size:`small`,children:`Dossier`})]},1),(0,b.jsx)(i,{children:`Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.`},2)]},decorators:[d(`24rem`)]},w={args:S.args,argTypes:S.argTypes,decorators:[f(void 0,{inlineSize:`56rem`,maxInlineSize:`100%`})],render:S.render},T={parameters:{layout:`fullscreen`},render:e=>(0,b.jsxs)(r,{paddingVertical:`x-large`,children:[(0,b.jsx)(r.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,b.jsxs)(c,{...e,children:[(0,b.jsx)(c.Heading,{level:2,children:(0,b.jsx)(c.Link,{href:`#`,children:`Gemeentebelastingen`})}),(0,b.jsx)(i,{children:`Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.`})]})}),(0,b.jsx)(r.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,b.jsxs)(c,{children:[(0,b.jsx)(c.Heading,{level:2,children:(0,b.jsx)(c.Link,{href:`#`,children:`Parkeren + Reizen (P+R)`})}),(0,b.jsx)(i,{children:`U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.`})]})}),(0,b.jsx)(r.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,b.jsxs)(c,{children:[(0,b.jsx)(c.Heading,{level:2,children:(0,b.jsx)(c.Link,{href:`#`,children:`Paspoort, ID-kaart en rijbewijs`})}),(0,b.jsx)(i,{children:`Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.`})]})}),(0,b.jsx)(r.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,b.jsxs)(c,{children:[(0,b.jsx)(c.Heading,{level:2,children:(0,b.jsx)(c.Link,{href:`#`,children:`Onderwijs`})}),(0,b.jsx)(i,{children:`Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.`})]})})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    aspectRatio: '16:9',
    category: 'Nieuws',
    date: formatDate(Date.now()),
    heading: 'Nederlands eerste houten woonwijk komt in Zuidoost',
    imageSrc: 'https://picsum.photos/480/360',
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
    category: {
      control: 'text'
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
    text: {
      control: 'text'
    }
  },
  // The query container keeps this Card below the width at which it would switch to a horizontal layout.
  decorators: [wrapInInlineSizeQueryContainer(), maximiseInlineSize('24rem')],
  render: ({
    aspectRatio,
    category,
    date,
    heading,
    imageSrc,
    text,
    ...args
  }) => <Card {...args}>
      <Card.Image alt="" aspectRatio={aspectRatio} src={imageSrc} />
      <Card.Content>
        <Card.HeadingGroup>
          <Card.Heading level={3}>
            <Card.Link href="/">{heading}</Card.Link>
          </Card.Heading>
          {/* The Metadata is written after the heading and displayed above it, so the heading is read first. */}
          <Metadata size="small">{category}</Metadata>
        </Card.HeadingGroup>
        <Column gap="small">
          <Paragraph>{text}</Paragraph>
          <Metadata size="small">{date}</Metadata>
        </Column>
      </Card.Content>
    </Card>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: [<Card.HeadingGroup key={1}>
        <Card.Heading level={2}>
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Card.Heading>
        <Metadata size="small">Dossier</Metadata>
      </Card.HeadingGroup>, <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>]
  },
  decorators: [maximiseInlineSize('24rem')]
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: Default.args,
  argTypes: Default.argTypes,
  decorators: [wrapInInlineSizeQueryContainer(undefined, {
    inlineSize: '56rem',
    maxInlineSize: '100%'
  })],
  render: Default.render
}`,...w.parameters?.docs?.source},description:{story:`A Card that pairs an image with a Card Content switches to a horizontal layout once its container is wider
than 36rem. Resize the container to see it change; the markup is the same in both layouts.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithMetadata`,`HorizontalLayout`,`TopTasks`]})))()}export{D as a,C as i,w as n,x as o,T as r,y as t};