import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{$ as r,G as i,K as a,L as o,M as s,S as c,u as l,x as u}from"./index.esm-DG3M57w3.js";import{r as d,t as f}from"./Overlap.stories-CwHvAHdf.js";import{m as p,s as m}from"./exampleContent-DsZ2XVq0.js";import{n as h,r as g,t as _}from"./commonMeta-DhKVPrqQ.js";var v,y,b;function x(){return(x=e((()=>{p(),v={title:`Direct naar`,tasks:[{title:`Gemeentebelastingen`,description:`Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.`},{title:`Parkeren + Reizen (P+R)`,description:`U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.`},{title:`Paspoort, ID-kaart en rijbewijs`,description:`Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.`},{title:`Onderwijs`,description:`Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.`},{title:`Meldingen openbare ruimte en overlast`,description:`Ziet u op straat of in een park iets waarvan u wilt dat het gemaakt of opgeruimd wordt, dan kunt u dat bij de gemeente melden.`},{title:`Verhuizing doorgeven`,description:`Geef uw nieuwe adres door als u binnen Amsterdam of naar Amsterdam verhuist.`},{title:`Grof afval`,description:`Grof afval zijn spullen die niet in een vuilniszak passen.`},{title:`Kennisgevingen en bekendmakingen`,description:`Kennisgevingen en bekendmakingen van de gemeente Amsterdam van de laatste 8 weken.`}]},y=[{title:`Ontheffing of vergunning`,description:`Check welke ontheffing of vergunning u nodig heeft. Bijvoorbeeld een RVV, TVM, objectvergunning, nachtwerkontheffing, e-RVV, e-TVM of filmmelding. Dat regelt u allemaal met 1 formulier.`,link:`Eenvoudig regelen`},{title:`Werkzaamheden`,description:`Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden.`,link:`Alle bouw- en verkeerswerkzaamheden`}],b={title:`Nieuws`,items:[{title:`Waarom we op zoek zijn naar vleermuizen`,description:`U kunt ’s avonds ecologen in oranje hesjes tegenkomen. Zij zijn op zoek naar vleermuizen. Dat heeft te maken met het verduurzamen van woningen.`,image:m(640,360,0)},{title:`Meer aandacht voor voetgangers, een jaar lang`,description:`We gaan de veiligheid voor voetgangers verbeteren, meer ruimte maken, en lopen en wandelen stimuleren.`,image:m(640,360,1)},{title:`Nieuwe manieren om afval op te halen`,description:`Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen in het centrum.`,image:m(640,360,2)}]}})))()}var S=t({Default:()=>T,__namedExportsOrder:()=>E,default:()=>w}),C,w,T,E;function D(){return(D=e((()=>{r(),d(),h(),x(),C=n(),w={..._,title:`Pages/Public/Home Page`,parameters:g(`The entry point of a public website, offering a broad overview of its main subjects, common tasks, and recent news.`),render:e=>(0,C.jsxs)(`main`,{id:`inhoud`,children:[(0,C.jsx)(`h1`,{className:`ams-visually-hidden`,children:`Homepage van de gemeente Amsterdam`}),(0,C.jsx)(s,{children:f.args?.children}),(0,C.jsxs)(u,{gapVertical:`none`,paddingVertical:`x-large`,children:[(0,C.jsx)(u.Cell,{span:`all`,children:(0,C.jsx)(c,{className:`ams-mb-m`,level:2,size:`level-1`,children:v.title})}),(0,C.jsx)(u.Subgrid,{gapVertical:`x-large`,span:`all`,children:v.tasks.map(({title:e,description:t})=>(0,C.jsx)(u.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,C.jsxs)(l,{children:[(0,C.jsx)(l.Heading,{level:3,children:(0,C.jsx)(l.Link,{href:`#`,children:e})}),(0,C.jsx)(o,{children:t})]})},e))})]}),(0,C.jsx)(i,{children:(0,C.jsx)(u,{paddingVertical:`x-large`,children:y.map(({title:e,description:t,link:n})=>(0,C.jsxs)(u.Cell,{className:`ams-prose`,span:{narrow:4,medium:4,wide:6},children:[(0,C.jsx)(c,{color:`inverse`,level:2,size:`level-3`,children:e}),(0,C.jsx)(o,{color:`inverse`,children:t}),(0,C.jsx)(a,{color:`inverse`,href:`#`,children:n})]},e))})}),(0,C.jsxs)(u,{gapVertical:`none`,paddingBottom:`2x-large`,paddingTop:`x-large`,children:[(0,C.jsx)(u.Cell,{span:`all`,children:(0,C.jsx)(c,{className:`ams-mb-m`,level:2,size:`level-1`,children:b.title})}),(0,C.jsx)(u.Subgrid,{gapVertical:`x-large`,span:`all`,children:b.items.map(({title:e,description:t,image:n})=>(0,C.jsx)(u.Cell,{span:4,children:(0,C.jsxs)(l,{children:[(0,C.jsx)(l.Image,{alt:``,src:n}),(0,C.jsx)(l.HeadingGroup,{tagline:`Nieuws`,children:(0,C.jsx)(l.Heading,{level:3,children:(0,C.jsx)(l.Link,{href:`#`,children:e})})}),(0,C.jsx)(o,{children:t})]})},e))})]})]})},T={parameters:{docs:{source:{code:`// The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
<main id="inhoud">
  {/*
   * The homepage’s visible headings start at the section level, so give the page one visually hidden
   * h1. Screen readers still announce a page title and the heading outline keeps a single top level.
   */}
  <h1 className="ams-visually-hidden">Homepage van de gemeente Amsterdam</h1>
  {/* A hero that overlaps a full-width image with the block beneath it – see the Overlap component. */}
  <Overlap>{/* … */}</Overlap>
  {/*
   * The row gap would put an x-large below the heading, where the guidance asks for a medium at this size.
   * So the Grid gives up its gap, the heading sets the space itself, and the Subgrid puts the gap back
   * between the Cells.
   */}
  <Grid gapVertical="none" paddingVertical="x-large">
    <Grid.Cell span="all">
      {/* Second level in the outline (the hidden h1 is first), shown at the largest size. */}
      <Heading className="ams-mb-m" level={2} size="level-1">{topTaskSection.title}</Heading>
    </Grid.Cell>
    <Grid.Subgrid gapVertical="x-large" span="all">
      {/*
       * Cells flow from the left in source order, so no section here needs a start. On the wide grid the top
       * tasks fit four to a row at {{ narrow: 4, medium: 4, wide: 3 }} and three preview cards at span={4}
       * fill the row exactly; on the medium grid both drop to two per row, and on the narrow grid every cell
       * is full width. The two Spotlight blocks at {{ narrow: 4, medium: 4, wide: 6 }} sit side by side on
       * both the wide and medium grids, and stack on the narrow one.
       */}
      {topTaskSection.tasks.map(({ title, description }) => (
        <Grid.Cell key={title} span={{ narrow: 4, medium: 4, wide: 3 }}>
          <Card>
            {/* Card.Link stretches over the whole Card, so the entire Card is one clickable link. */}
            <Card.Heading level={3}>
              <Card.Link href="#">{title}</Card.Link>
            </Card.Heading>
            <Paragraph>{description}</Paragraph>
          </Card>
        </Grid.Cell>
      ))}
    </Grid.Subgrid>
  </Grid>
  {/*
   * These highlights are part of the homepage’s own content, so the Spotlight stays a plain band inside <main>.
   * On the Article Page the same band sits outside <main> as an as="aside" landmark beside the article.
   */}
  <Spotlight>
    <Grid paddingVertical="x-large">
      {spotlightSections.map(({ title, description, link }) => (
        <Grid.Cell className="ams-prose" key={title} span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2} size="level-3">{title}</Heading>
          <Paragraph color="inverse">{description}</Paragraph>
          <StandaloneLink color="inverse" href="#">{link}</StandaloneLink>
        </Grid.Cell>
      ))}
    </Grid>
  </Spotlight>
  {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
  <Grid gapVertical="none" paddingBottom="2x-large" paddingTop="x-large">
    <Grid.Cell span="all">
      <Heading className="ams-mb-m" level={2} size="level-1">{newsSection.title}</Heading>
    </Grid.Cell>
    <Grid.Subgrid gapVertical="x-large" span="all">
      {newsSection.items.map(({ title, description, image }) => (
        <Grid.Cell key={title} span={4}>
          <Card>
            {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
            <Card.Image alt="" src={image} />
            {/* Card.HeadingGroup adds a short tagline above the Card’s heading. */}
            <Card.HeadingGroup tagline="Nieuws">
              <Card.Heading level={3}>
                <Card.Link href="#">{title}</Card.Link>
              </Card.Heading>
            </Card.HeadingGroup>
            <Paragraph>{description}</Paragraph>
          </Card>
        </Grid.Cell>
      ))}
    </Grid.Subgrid>
  </Grid>
</main>`,language:`tsx`}}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        // Because this story’s \`render\` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every \`map\` is expanded. Provide the source by hand so the page reads the way a
        // developer would write it.
        code: \`// The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
<main id="inhoud">
  {/*
   * The homepage’s visible headings start at the section level, so give the page one visually hidden
   * h1. Screen readers still announce a page title and the heading outline keeps a single top level.
   */}
  <h1 className="ams-visually-hidden">Homepage van de gemeente Amsterdam</h1>
  {/* A hero that overlaps a full-width image with the block beneath it – see the Overlap component. */}
  <Overlap>{/* … */}</Overlap>
  {/*
   * The row gap would put an x-large below the heading, where the guidance asks for a medium at this size.
   * So the Grid gives up its gap, the heading sets the space itself, and the Subgrid puts the gap back
   * between the Cells.
   */}
  <Grid gapVertical="none" paddingVertical="x-large">
    <Grid.Cell span="all">
      {/* Second level in the outline (the hidden h1 is first), shown at the largest size. */}
      <Heading className="ams-mb-m" level={2} size="level-1">{topTaskSection.title}</Heading>
    </Grid.Cell>
    <Grid.Subgrid gapVertical="x-large" span="all">
      {/*
       * Cells flow from the left in source order, so no section here needs a start. On the wide grid the top
       * tasks fit four to a row at {{ narrow: 4, medium: 4, wide: 3 }} and three preview cards at span={4}
       * fill the row exactly; on the medium grid both drop to two per row, and on the narrow grid every cell
       * is full width. The two Spotlight blocks at {{ narrow: 4, medium: 4, wide: 6 }} sit side by side on
       * both the wide and medium grids, and stack on the narrow one.
       */}
      {topTaskSection.tasks.map(({ title, description }) => (
        <Grid.Cell key={title} span={{ narrow: 4, medium: 4, wide: 3 }}>
          <Card>
            {/* Card.Link stretches over the whole Card, so the entire Card is one clickable link. */}
            <Card.Heading level={3}>
              <Card.Link href="#">{title}</Card.Link>
            </Card.Heading>
            <Paragraph>{description}</Paragraph>
          </Card>
        </Grid.Cell>
      ))}
    </Grid.Subgrid>
  </Grid>
  {/*
   * These highlights are part of the homepage’s own content, so the Spotlight stays a plain band inside <main>.
   * On the Article Page the same band sits outside <main> as an as="aside" landmark beside the article.
   */}
  <Spotlight>
    <Grid paddingVertical="x-large">
      {spotlightSections.map(({ title, description, link }) => (
        <Grid.Cell className="ams-prose" key={title} span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2} size="level-3">{title}</Heading>
          <Paragraph color="inverse">{description}</Paragraph>
          <StandaloneLink color="inverse" href="#">{link}</StandaloneLink>
        </Grid.Cell>
      ))}
    </Grid>
  </Spotlight>
  {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
  <Grid gapVertical="none" paddingBottom="2x-large" paddingTop="x-large">
    <Grid.Cell span="all">
      <Heading className="ams-mb-m" level={2} size="level-1">{newsSection.title}</Heading>
    </Grid.Cell>
    <Grid.Subgrid gapVertical="x-large" span="all">
      {newsSection.items.map(({ title, description, image }) => (
        <Grid.Cell key={title} span={4}>
          <Card>
            {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
            <Card.Image alt="" src={image} />
            {/* Card.HeadingGroup adds a short tagline above the Card’s heading. */}
            <Card.HeadingGroup tagline="Nieuws">
              <Card.Heading level={3}>
                <Card.Link href="#">{title}</Card.Link>
              </Card.Heading>
            </Card.HeadingGroup>
            <Paragraph>{description}</Paragraph>
          </Card>
        </Grid.Cell>
      ))}
    </Grid.Subgrid>
  </Grid>
</main>\`,
        language: 'tsx'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`]})))()}export{D as n,S as t};