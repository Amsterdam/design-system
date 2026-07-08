import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./jsx-runtime-BCDDjCIb.js";import{H as r,P as i,V as a,Y as o,c as s,k as c,v as l,y as u}from"./index.esm-DgTe_K0-.js";import{r as d,t as f}from"./Overlap.stories-CbcRfpvr.js";import{n as p,t as m}from"./config-Cy7RxLMU.js";var h,g,_,v=t((()=>{h={title:`Direct naar`,tasks:[{title:`Gemeentebelastingen`,description:`Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.`},{title:`Parkeren + Reizen (P+R)`,description:`U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.`},{title:`Paspoort, ID-kaart en rijbewijs`,description:`Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.`},{title:`Onderwijs`,description:`Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.`},{title:`Meldingen openbare ruimte en overlast`,description:`Ziet u op straat of in een park iets waarvan u wilt dat het gemaakt of opgeruimd wordt, dan kunt u dat bij de gemeente melden.`},{title:`Verhuizing doorgeven`,description:`Geef uw nieuwe adres door als u binnen Amsterdam of naar Amsterdam verhuist.`},{title:`Grof afval`,description:`Grof afval zijn spullen die niet in een vuilniszak passen.`},{title:`Kennisgevingen en bekendmakingen`,description:`Kennisgevingen en bekendmakingen van de gemeente Amsterdam van de laatste 8 weken.`}]},g=[{title:`Ontheffing of vergunning`,description:`Check welke ontheffing of vergunning u nodig heeft. Bijvoorbeeld een RVV, TVM, objectvergunning, nachtwerkontheffing, e-RVV, e-TVM of filmmelding. Dat regelt u allemaal met 1 formulier.`,link:`Eenvoudig regelen`},{title:`Werkzaamheden`,description:`Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden.`,link:`Alle bouw- en verkeerswerkzaamheden`}],_={title:`Nieuws`,items:[{title:`Waarom we op zoek zijn naar vleermuizen`,description:`U kunt ’s avonds ecologen in oranje hesjes tegenkomen. Zij zijn op zoek naar vleermuizen. Dat heeft te maken met het verduurzamen van woningen.`,image:`https://picsum.photos/640/360?random=1`},{title:`Meer aandacht voor voetgangers, een jaar lang`,description:`We gaan de veiligheid voor voetgangers verbeteren, meer ruimte maken, en lopen en wandelen stimuleren.`,image:`https://picsum.photos/640/360?random=2`},{title:`Nieuwe manieren om afval op te halen`,description:`Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen in het centrum.`,image:`https://picsum.photos/640/360?random=3`}]}})),y=e({Default:()=>S,__namedExportsOrder:()=>C,default:()=>x}),b,x,S,C,w=t((()=>{o(),d(),p(),v(),b=n(),x={...m,title:`Pages/Public/Home Page`,render:e=>(0,b.jsxs)(`main`,{id:`inhoud`,children:[(0,b.jsx)(`h1`,{className:`ams-visually-hidden`,children:`Homepage van de gemeente Amsterdam`}),(0,b.jsx)(c,{children:f.args?.children}),(0,b.jsxs)(l,{gapVertical:`large`,paddingVertical:`x-large`,children:[(0,b.jsx)(l.Cell,{span:`all`,children:(0,b.jsx)(u,{level:2,size:`level-1`,children:h.title})}),h.tasks.map(({title:e,description:t})=>(0,b.jsx)(l.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,b.jsxs)(s,{children:[(0,b.jsx)(s.Heading,{level:3,children:(0,b.jsx)(s.Link,{href:`#`,children:e})}),(0,b.jsx)(i,{children:t})]})},e))]}),(0,b.jsx)(a,{children:(0,b.jsx)(l,{paddingVertical:`x-large`,children:g.map(({title:e,description:t,link:n})=>(0,b.jsxs)(l.Cell,{span:{narrow:4,medium:4,wide:6},children:[(0,b.jsx)(u,{className:`ams-mb-s`,color:`inverse`,level:2,size:`level-3`,children:e}),(0,b.jsx)(i,{className:`ams-mb-m`,color:`inverse`,children:t}),(0,b.jsx)(r,{color:`inverse`,href:`#`,children:n})]},e))})}),(0,b.jsxs)(l,{gapVertical:`large`,paddingVertical:`x-large`,children:[(0,b.jsx)(l.Cell,{span:`all`,children:(0,b.jsx)(u,{level:2,size:`level-1`,children:_.title})}),_.items.map(({title:e,description:t,image:n})=>(0,b.jsx)(l.Cell,{span:4,children:(0,b.jsxs)(s,{children:[(0,b.jsx)(s.Image,{alt:``,src:n}),(0,b.jsx)(s.HeadingGroup,{tagline:`Nieuws`,children:(0,b.jsx)(s.Heading,{level:3,children:(0,b.jsx)(s.Link,{href:`#`,children:e})})}),(0,b.jsx)(i,{children:t})]})},e))]})]})},S={parameters:{docs:{source:{code:`<main id="inhoud">
  {/*
   * The homepage’s visible headings start at the section level, so give the page one visually hidden
   * h1. Screen readers still announce a page title and the heading outline keeps a single top level.
   */}
  <h1 className="ams-visually-hidden">Homepage van de gemeente Amsterdam</h1>
  {/* A hero that overlaps a full-width image with the block beneath it – see the Overlap component. */}
  <Overlap>{/* … */}</Overlap>
  <Grid gapVertical="large" paddingVertical="x-large">
    <Grid.Cell span="all">
      {/* Second level in the outline (the hidden h1 is first), shown at the largest size. */}
      <Heading level={2} size="level-1">{topTaskSection.title}</Heading>
    </Grid.Cell>
    {topTaskSection.tasks.map(({ title, description }) => (
      <Grid.Cell key={title} span={{ narrow: 4, medium: 4, wide: 3 }}>
        <Card>
          {/* Card.Link stretches over the whole Card, so the entire card is one clickable link. */}
          <Card.Heading level={3}>
            <Card.Link href="#">{title}</Card.Link>
          </Card.Heading>
          <Paragraph>{description}</Paragraph>
        </Card>
      </Grid.Cell>
    ))}
  </Grid>
  <Spotlight>
    <Grid paddingVertical="x-large">
      {spotlightSections.map(({ title, description, link }) => (
        <Grid.Cell key={title} span={{ narrow: 4, medium: 4, wide: 6 }}>
          {/* On the dark Spotlight, color="inverse" switches text and links to their light variant. */}
          <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">{title}</Heading>
          <Paragraph className="ams-mb-m" color="inverse">{description}</Paragraph>
          <StandaloneLink color="inverse" href="#">{link}</StandaloneLink>
        </Grid.Cell>
      ))}
    </Grid>
  </Spotlight>
  <Grid gapVertical="large" paddingVertical="x-large">
    <Grid.Cell span="all">
      <Heading level={2} size="level-1">{newsSection.title}</Heading>
    </Grid.Cell>
    {newsSection.items.map(({ title, description, image }) => (
      <Grid.Cell key={title} span={4}>
        <Card>
          <Card.Image alt="" src={image} />
          {/* Card.HeadingGroup adds a short tagline above the card’s heading. */}
          <Card.HeadingGroup tagline="Nieuws">
            <Card.Heading level={3}>
              <Card.Link href="#">{title}</Card.Link>
            </Card.Heading>
          </Card.HeadingGroup>
          <Paragraph>{description}</Paragraph>
        </Card>
      </Grid.Cell>
    ))}
  </Grid>
</main>`,language:`tsx`}}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        // The Code Panel regenerates a \`render\` story’s source from the rendered tree, which drops JSX
        // comments and expands each \`map\` into repeated blocks. Provide the source by hand so the
        // guidance stays visible and the \`map\` pattern reads the way a developer would write it.
        code: \`<main id="inhoud">
  {/*
   * The homepage’s visible headings start at the section level, so give the page one visually hidden
   * h1. Screen readers still announce a page title and the heading outline keeps a single top level.
   */}
  <h1 className="ams-visually-hidden">Homepage van de gemeente Amsterdam</h1>
  {/* A hero that overlaps a full-width image with the block beneath it – see the Overlap component. */}
  <Overlap>{/* … */}</Overlap>
  <Grid gapVertical="large" paddingVertical="x-large">
    <Grid.Cell span="all">
      {/* Second level in the outline (the hidden h1 is first), shown at the largest size. */}
      <Heading level={2} size="level-1">{topTaskSection.title}</Heading>
    </Grid.Cell>
    {topTaskSection.tasks.map(({ title, description }) => (
      <Grid.Cell key={title} span={{ narrow: 4, medium: 4, wide: 3 }}>
        <Card>
          {/* Card.Link stretches over the whole Card, so the entire card is one clickable link. */}
          <Card.Heading level={3}>
            <Card.Link href="#">{title}</Card.Link>
          </Card.Heading>
          <Paragraph>{description}</Paragraph>
        </Card>
      </Grid.Cell>
    ))}
  </Grid>
  <Spotlight>
    <Grid paddingVertical="x-large">
      {spotlightSections.map(({ title, description, link }) => (
        <Grid.Cell key={title} span={{ narrow: 4, medium: 4, wide: 6 }}>
          {/* On the dark Spotlight, color="inverse" switches text and links to their light variant. */}
          <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">{title}</Heading>
          <Paragraph className="ams-mb-m" color="inverse">{description}</Paragraph>
          <StandaloneLink color="inverse" href="#">{link}</StandaloneLink>
        </Grid.Cell>
      ))}
    </Grid>
  </Spotlight>
  <Grid gapVertical="large" paddingVertical="x-large">
    <Grid.Cell span="all">
      <Heading level={2} size="level-1">{newsSection.title}</Heading>
    </Grid.Cell>
    {newsSection.items.map(({ title, description, image }) => (
      <Grid.Cell key={title} span={4}>
        <Card>
          <Card.Image alt="" src={image} />
          {/* Card.HeadingGroup adds a short tagline above the card’s heading. */}
          <Card.HeadingGroup tagline="Nieuws">
            <Card.Heading level={3}>
              <Card.Link href="#">{title}</Card.Link>
            </Card.Heading>
          </Card.HeadingGroup>
          <Paragraph>{description}</Paragraph>
        </Card>
      </Grid.Cell>
    ))}
  </Grid>
</main>\`,
        language: 'tsx'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`]}));w();export{S as Default,C as __namedExportsOrder,x as default,w as n,y as t};