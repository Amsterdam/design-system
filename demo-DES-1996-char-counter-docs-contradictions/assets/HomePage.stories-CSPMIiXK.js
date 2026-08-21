import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{B as r,C as i,F as a,J as o,N as s,S as c,Y as l,d as u,nt as d}from"./index.esm-mqZ5dcpT.js";import{r as f,t as p}from"./Overlap.stories-BdutR97C.js";import{g as m,l as h}from"./exampleContent-DRei7MoO.js";import{n as g,r as _,t as v}from"./commonMeta-Cljjyb9Z.js";var y,b,x;function S(){return(S=e((()=>{m(),y={title:`Direct naar`,link:`Naar alle onderwerpen`,tasks:[{title:`Gemeentebelastingen`,description:`Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft.`},{title:`Parkeren + Reizen (P+R)`,description:`U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad.`},{title:`Paspoort, ID-kaart en rijbewijs`,description:`Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan.`},{title:`Onderwijs`,description:`Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas.`},{title:`Meldingen openbare ruimte en overlast`,description:`Ziet u op straat of in een park iets waarvan u wilt dat het gemaakt of opgeruimd wordt, dan kunt u dat bij de gemeente melden.`},{title:`Verhuizing doorgeven`,description:`Geef uw nieuwe adres door als u binnen Amsterdam of naar Amsterdam verhuist.`},{title:`Grof afval`,description:`Grof afval zijn spullen die niet in een vuilniszak passen.`},{title:`Kennisgevingen en bekendmakingen`,description:`Kennisgevingen en bekendmakingen van de gemeente Amsterdam van de laatste 8 weken.`}]},b=[{title:`Ontheffing of vergunning`,description:`Check welke ontheffing of vergunning u nodig heeft. Bijvoorbeeld een RVV, TVM, objectvergunning, nachtwerkontheffing, e-RVV, e-TVM of filmmelding. Dat regelt u allemaal met 1 formulier.`,link:`Eenvoudig regelen`},{title:`Werkzaamheden`,description:`Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van parken of ontwikkeling van hele gebieden.`,link:`Alle bouw- en verkeerswerkzaamheden`}],x={title:`Nieuws`,items:[{title:`Waarom we op zoek zijn naar vleermuizen`,description:`U kunt ’s avonds ecologen in oranje hesjes tegenkomen. Zij zijn op zoek naar vleermuizen. Dat heeft te maken met het verduurzamen van woningen.`,image:h(640,360,0)},{title:`Meer aandacht voor voetgangers, een jaar lang`,description:`We gaan de veiligheid voor voetgangers verbeteren, meer ruimte maken, en lopen en wandelen stimuleren.`,image:h(640,360,1)},{title:`Nieuwe manieren om afval op te halen`,description:`Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen in het centrum.`,image:h(640,360,2)}]}})))()}var C=t({Default:()=>E,__namedExportsOrder:()=>D,default:()=>T}),w,T,E,D;function O(){return(O=e((()=>{d(),f(),g(),S(),w=n(),T={...v,title:`Pages/Public/Home Page`,parameters:_(`The entry point of a public website, offering a broad overview of its main topics, common tasks, and recent news.`),render:e=>(0,w.jsxs)(`main`,{id:`inhoud`,children:[(0,w.jsx)(`h1`,{className:`ams-visually-hidden`,children:`Homepage van de gemeente Amsterdam`}),(0,w.jsx)(a,{children:p.args?.children}),(0,w.jsxs)(c,{gapVertical:`none`,paddingVertical:`x-large`,children:[(0,w.jsx)(c.Cell,{span:`all`,children:(0,w.jsx)(i,{className:`ams-mb-m`,level:2,size:`level-1`,children:y.title})}),(0,w.jsx)(c.Subgrid,{as:`ul`,className:`ams-mb-l`,gapVertical:`x-large`,span:`all`,children:y.tasks.map(({title:e,description:t})=>(0,w.jsx)(c.Cell,{as:`li`,span:{narrow:4,medium:4,wide:3},children:(0,w.jsxs)(u,{children:[(0,w.jsx)(u.Heading,{level:3,children:(0,w.jsx)(u.Link,{href:`#`,children:e})}),(0,w.jsx)(r,{children:t})]})},e))}),(0,w.jsx)(c.Cell,{span:`all`,children:(0,w.jsx)(l,{href:`#`,children:y.link})})]}),(0,w.jsx)(o,{children:(0,w.jsx)(c,{paddingVertical:`x-large`,children:b.map(({title:e,description:t,link:n})=>(0,w.jsxs)(c.Cell,{className:`ams-prose`,span:{narrow:4,medium:4,wide:6},children:[(0,w.jsx)(i,{color:`inverse`,level:2,size:`level-3`,children:e}),(0,w.jsx)(r,{color:`inverse`,children:t}),(0,w.jsx)(l,{color:`inverse`,href:`#`,children:n})]},e))})}),(0,w.jsxs)(c,{gapVertical:`none`,paddingBottom:`2x-large`,paddingTop:`x-large`,children:[(0,w.jsx)(c.Cell,{span:`all`,children:(0,w.jsx)(i,{className:`ams-mb-m`,level:2,size:`level-1`,children:x.title})}),(0,w.jsx)(c.Subgrid,{as:`ul`,gapVertical:`x-large`,span:`all`,children:x.items.map(({title:e,description:t,image:n})=>(0,w.jsx)(c.Cell,{as:`li`,span:4,children:(0,w.jsxs)(u,{children:[(0,w.jsx)(u.Image,{alt:``,src:n}),(0,w.jsxs)(u.HeadingGroup,{children:[(0,w.jsx)(u.Heading,{level:3,children:(0,w.jsx)(u.Link,{href:`#`,children:e})}),(0,w.jsx)(s,{size:`small`,children:`Nieuws`})]}),(0,w.jsx)(r,{children:t})]})},e))})]})]})},E={parameters:{docs:{source:{code:`// The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
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
   * between the Cells. The Subgrid also sets a large below itself, since the Grid no longer spaces the
   * link that follows it.
   */}
  <Grid gapVertical="none" paddingVertical="x-large">
    <Grid.Cell span="all">
      {/* Second level in the outline (the hidden h1 is first), shown at the largest size. */}
      <Heading className="ams-mb-m" level={2} size="level-1">{topTaskSection.title}</Heading>
    </Grid.Cell>
    {/*
     * A set of Cards is a list, so the Subgrid renders a ul and every Cell in it an li. A screen reader then
     * announces how many there are and which one it is on. This only works where the Subgrid holds the
     * Cards alone.
     */}
    <Grid.Subgrid as="ul" className="ams-mb-l" gapVertical="x-large" span="all">
      {/*
       * Cells flow from the left in source order, so no section here needs a start. On the wide grid the top
       * tasks fit four to a row at {{ narrow: 4, medium: 4, wide: 3 }} and three preview cards at span={4}
       * fill the row exactly; on the medium grid both drop to two per row, and on the narrow grid every cell
       * is full width. The two Spotlight blocks at {{ narrow: 4, medium: 4, wide: 6 }} sit side by side on
       * both the wide and medium grids, and stack on the narrow one.
       */}
      {topTaskSection.tasks.map(({ title, description }) => (
        <Grid.Cell as="li" key={title} span={{ narrow: 4, medium: 4, wide: 3 }}>
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
    <Grid.Cell span="all">
      <StandaloneLink href="#">{topTaskSection.link}</StandaloneLink>
    </Grid.Cell>
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
    <Grid.Subgrid as="ul" gapVertical="x-large" span="all">
      {newsSection.items.map(({ title, description, image }) => (
        <Grid.Cell as="li" key={title} span={4}>
          <Card>
            {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
            <Card.Image alt="" src={image} />
            <Card.HeadingGroup>
              <Card.Heading level={3}>
                <Card.Link href="#">{title}</Card.Link>
              </Card.Heading>
              {/* Written after the heading and displayed above it, so the heading is read first. */}
              <Metadata size="small">Nieuws</Metadata>
            </Card.HeadingGroup>
            <Paragraph>{description}</Paragraph>
          </Card>
        </Grid.Cell>
      ))}
    </Grid.Subgrid>
  </Grid>
</main>`,language:`tsx`}}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
   * between the Cells. The Subgrid also sets a large below itself, since the Grid no longer spaces the
   * link that follows it.
   */}
  <Grid gapVertical="none" paddingVertical="x-large">
    <Grid.Cell span="all">
      {/* Second level in the outline (the hidden h1 is first), shown at the largest size. */}
      <Heading className="ams-mb-m" level={2} size="level-1">{topTaskSection.title}</Heading>
    </Grid.Cell>
    {/*
     * A set of Cards is a list, so the Subgrid renders a ul and every Cell in it an li. A screen reader then
     * announces how many there are and which one it is on. This only works where the Subgrid holds the
     * Cards alone.
     */}
    <Grid.Subgrid as="ul" className="ams-mb-l" gapVertical="x-large" span="all">
      {/*
       * Cells flow from the left in source order, so no section here needs a start. On the wide grid the top
       * tasks fit four to a row at {{ narrow: 4, medium: 4, wide: 3 }} and three preview cards at span={4}
       * fill the row exactly; on the medium grid both drop to two per row, and on the narrow grid every cell
       * is full width. The two Spotlight blocks at {{ narrow: 4, medium: 4, wide: 6 }} sit side by side on
       * both the wide and medium grids, and stack on the narrow one.
       */}
      {topTaskSection.tasks.map(({ title, description }) => (
        <Grid.Cell as="li" key={title} span={{ narrow: 4, medium: 4, wide: 3 }}>
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
    <Grid.Cell span="all">
      <StandaloneLink href="#">{topTaskSection.link}</StandaloneLink>
    </Grid.Cell>
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
    <Grid.Subgrid as="ul" gapVertical="x-large" span="all">
      {newsSection.items.map(({ title, description, image }) => (
        <Grid.Cell as="li" key={title} span={4}>
          <Card>
            {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
            <Card.Image alt="" src={image} />
            <Card.HeadingGroup>
              <Card.Heading level={3}>
                <Card.Link href="#">{title}</Card.Link>
              </Card.Heading>
              {/* Written after the heading and displayed above it, so the heading is read first. */}
              <Metadata size="small">Nieuws</Metadata>
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
}`,...E.parameters?.docs?.source}}},D=[`Default`]})))()}export{O as n,C as t};