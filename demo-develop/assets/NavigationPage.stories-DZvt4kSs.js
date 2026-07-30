import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-Bq1bXGty.js";import{E as r,H as i,P as a,R as o,T as s,U as c,X as l,Y as u,a as d,c as f,v as p,x as m,y as h}from"./index.esm-p91PmVQ6.js";import{f as g,m as _,o as v,s as y,u as b}from"./exampleContent-CG3SyhNH.js";import{n as x,t as S}from"./commonMeta-R14tO5Oh.js";var C,w,T,E,D=e((()=>{_(),C=[{heading:`Paspoort en identiteitskaart`,links:[`Paspoort of identiteitskaart aanvragen`,`Zakenpaspoort aanvragen`,`Tweede paspoort aanvragen`,`Paspoort kwijt of gestolen`]},{heading:`Rijbewijs`,links:[`Rijbewijs aanvragen`,`Rijbewijs verlengen of categorie toevoegen`,`Rijbewijs kwijt of gestolen`,`Buitenlands rijbewijs omwisselen`]},{heading:`Trouwen en Partnerschap`,links:[`Gratis, budget en standaard ceremonie`,`Kosten`,`Meer`]},{heading:`Verhuizen`,links:[`Verhuizing doorgeven`]},{heading:`Akten, uittreksels en verklaringen`,links:[`Uittreksel BRP aanvragen`,`Geboorteakte aanvragen`,`Meer`]},{heading:`Geboorte en erkenning kinderen`,links:[`Geboorteaangifte doen`,`Kind erkennen`,`Meer`]},{heading:`Adres en inschrijving`,links:[`Opnieuw inschrijven bij de gemeente`,`Onjuiste inschrijving melden`,`Onderzoek naar inschrijving Basisregistratie Personen (BRP)`,`Briefadres aanvragen en wijzigen`]},{heading:`Persoonsgegevens`,links:[`Inzien of wijzigen van uw gegevens`,`Wie mogen mijn persoonlijke gegevens opvragen?`,`Geheimhouding persoonsgegevens`,`Voor- of achternaam wijzigen`,`Wat te doen bij identiteitsfraude`]},{heading:`Immigratie en naturalisatie`,links:[`Verhuizen naar Amsterdam vanuit het buitenland`,`Naturalisatie – Wat u moet doen om Nederlander te worden`]},{heading:`Overlijden`,links:[`Aangifte van overlijden`,`Aangifte van overlijden door uitvaartondernemers`,`Aangifte van overlijden in het buitenland`,`Begraafplaatsen en crematoria`,`Uitvaarten door de gemeente`]}],w=[{heading:`Bewoners`,links:[`Paspoort of identiteitskaart aanvragen`,`Zakenpaspoort aanvragen`,`Tweede paspoort aanvragen`,`Paspoort kwijt of gestolen`]},{heading:`Waar u kunt parkeren`,links:[`Rijbewijs aanvragen`,`Rijbewijs verlengen of categorie toevoegen`,`Rijbewijs kwijt of gestolen`]},{heading:`Bedrijven`,links:[`Paspoort of identiteitskaart aanvragen`,`Zakenpaspoort aanvragen`,`Tweede paspoort aanvragen`,`Paspoort kwijt of gestolen`]},{heading:`Parkeerboetes`,links:[`Rijbewijs aanvragen`]}],T=[{heading:`Schoon en opgeruimd`,links:[`Leen een afvalgrijper en afvalring`,`Afval op straat melden`,`Fietsnietje aanvragen`,`Openbare toiletten op de kaart`,`Rookvrije zone aanvragen`]},{heading:`Spelen en bewegen`,links:[`Peuterbadjes en zwemwater op de kaart`,`Speeltuinen op de kaart`,`Kinderboerderijen en stadsboerderijen op de kaart`,`Openbare sportplekken op de kaart`,`Denk mee over speelplekken`]},{heading:`Dieren en groen`,links:[`Dieren en groen`]},{heading:`Parken en volkstuinen`,links:[`Parken en recreatiegebieden`,`Volkstuinparken`]}],E=[{imageSource:y(480,270,0),name:`Aicha Bayraktar`,role:`Burgemeester`},{imageSource:y(480,270,1),name:`Laurens Dijkstra`,role:`Wethouder`},{imageSource:y(480,270,2),name:`Yassine El Idrissi`,role:`Wethouder`},{imageSource:y(480,270,3),name:`Lisette Janssen`,role:`Wethouder`},{imageSource:y(480,270,4),name:`Abdulaziz Farooq`,role:`Wethouder`},{imageSource:y(480,270,5),name:`Angelique Pieterse`,role:`Wethouder`},{imageSource:y(480,270,6),name:`Ruben op den Akker`,role:`Wethouder`},{imageSource:y(480,270,7),name:`Meryam Laghmani`,role:`Wethouder`},{imageSource:y(480,270,8),name:`Sebastiaan van Harinxma thoe Slooten`,role:`Wethouder`},{imageSource:y(480,270,9),name:`William Moussaoui`,role:`Wethouder`},{imageSource:y(480,270,10),name:`Nora Veldkamp`,role:`Gemeentesecretaris`,suffix:`waarnemend`}]})),O=t({Default:()=>M,SubnavigationPage:()=>I,WithImageGallery:()=>F,WithInteractiveElement:()=>P,WithTopTasks:()=>N,__namedExportsOrder:()=>L,default:()=>A}),k,A,j,M,N,P,F,I,L,R=e((()=>{l(),_(),x(),D(),k=n(),A={...S,title:`Pages/Public/Navigation Page`},j=e=>e.length===1?(0,k.jsx)(c,{href:`#`,children:e[0]}):(0,k.jsx)(r,{children:e.map(e=>(0,k.jsx)(r.Link,{href:`#`,children:e},e))}),M={parameters:{docs:{source:{code:`// getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.

<>
  {/* Public page templates keep the Breadcrumb in its own Grid above <main>, so its nav sits outside it. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
  {/*
   * The main region here is a single section, so the Grid itself is that region. When the landmark has
   * to hold several sections — more Grids, a Spotlight, a full-bleed image — wrap them in a plain
   * <main> instead. Beside a sidebar, <main> goes in its own Grid Cell.
   */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <Grid as="main" id="inhoud" paddingBottom="2x-large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Heading className="ams-mb-m" level={1}>Burgerzaken</Heading>
      <Paragraph size="large">
        Heeft u een paspoort, rijbewijs of uittreksel nodig? Of wilt u een verhuizing doorgeven of een
        geboorte aangeven? Op deze pagina vindt u alle informatie en regelzaken rondom Burgerzaken.
      </Paragraph>
    </Grid.Cell>
    {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
    {burgerzakenLinks.map(({ heading, links }, index) => (
      <Grid.Cell
        key={heading}
        span={{ narrow: 4, medium: 4, wide: 5 }}
        start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
      >
        <Heading className="ams-mb-xs" level={2} size="level-3">{heading}</Heading>
        {getLinks(links)}
      </Grid.Cell>
    ))}
  </Grid>
</>`,language:`tsx`}}},render:e=>(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(p,{paddingTop:`large`,children:(0,k.jsx)(p.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,k.jsx)(d,{children:(0,k.jsx)(d.Link,{href:`#`,children:`Home`})})})}),(0,k.jsxs)(p,{as:`main`,id:`inhoud`,paddingBottom:`2x-large`,children:[(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-m`,level:1,children:`Burgerzaken`}),(0,k.jsx)(a,{size:`large`,children:`Heeft u een paspoort, rijbewijs of uittreksel nodig? Of wilt u een verhuizing doorgeven of een geboorte aangeven? Op deze pagina vindt u alle informatie en regelzaken rondom Burgerzaken.`})]}),C.map(({heading:e,links:t},n)=>(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},start:n%2?void 0:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,level:2,size:`level-3`,children:e}),j(t)]},e))]})]})},N={parameters:{docs:{source:{code:`// getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.

<>
  {/* Public page templates keep the Breadcrumb in its own Grid above <main>, so its nav sits outside it. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <Grid as="main" id="inhoud" paddingBottom="2x-large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Heading className="ams-mb-m" level={1}>Leefomgeving</Heading>
    </Grid.Cell>
    {/* The two most important tasks get a full Card each; the groups below are plain heading + links. */}
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Card>
        <Card.Heading level={2}>
          <Card.Link href="/">Doe een melding</Card.Link>
        </Card.Heading>
        <Paragraph>
          Meld overlast van geluid of afval op straat. U kunt ook kapotte dingen melden of iets dat we
          moeten opruimen.
        </Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
      <Card>
        <Card.Heading level={2}>
          <Card.Link href="/">Kondig een demonstratie of manifestatie aan</Card.Link>
        </Card.Heading>
        <Paragraph>Een demonstratie of manifestatie meldt u vooraf bij de gemeente.</Paragraph>
      </Card>
    </Grid.Cell>
    {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
    {topTaskLinks.map(({ heading, links }, index) => (
      <Grid.Cell
        key={heading}
        span={{ narrow: 4, medium: 4, wide: 5 }}
        start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
      >
        <Heading className="ams-mb-xs" level={2} size="level-3">{heading}</Heading>
        {getLinks(links)}
      </Grid.Cell>
    ))}
  </Grid>
</>`,language:`tsx`}}},render:e=>(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(p,{paddingTop:`large`,children:(0,k.jsx)(p.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,k.jsx)(d,{children:(0,k.jsx)(d.Link,{href:`#`,children:`Home`})})})}),(0,k.jsxs)(p,{as:`main`,id:`inhoud`,paddingBottom:`2x-large`,children:[(0,k.jsx)(p.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,k.jsx)(h,{className:`ams-mb-m`,level:1,children:`Leefomgeving`})}),(0,k.jsx)(p.Cell,{span:{narrow:4,medium:4,wide:5},start:{narrow:1,medium:1,wide:2},children:(0,k.jsxs)(f,{children:[(0,k.jsx)(f.Heading,{level:2,children:(0,k.jsx)(f.Link,{href:`/`,children:`Doe een melding`})}),(0,k.jsx)(a,{children:`Meld overlast van geluid of afval op straat. U kunt ook kapotte dingen melden of iets dat we moeten opruimen.`})]})}),(0,k.jsx)(p.Cell,{span:{narrow:4,medium:4,wide:5},children:(0,k.jsxs)(f,{children:[(0,k.jsx)(f.Heading,{level:2,children:(0,k.jsx)(f.Link,{href:`/`,children:`Kondig een demonstratie of manifestatie aan`})}),(0,k.jsx)(a,{children:`Een demonstratie of manifestatie meldt u vooraf bij de gemeente.`})]})}),T.map(({heading:e,links:t},n)=>(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},start:n%2?void 0:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,level:2,size:`level-3`,children:e}),j(t)]},e))]})]})},P={parameters:{docs:{source:{code:`// getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.

<>
  {/* Public page templates keep the Breadcrumb in its own Grid above <main>, so its nav sits outside it. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/*
   * Spotlights and full-bleed images sit between the Grids, so a plain <main> wraps them all. A page that
   * is a single section can put as="main" on the Grid itself instead.
   */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-m" level={1}>Parkeren</Heading>
        <Paragraph className="ams-mb-m" size="large">
          Vind informatie over parkeervergunningen, parkeertarieven en betaald parkeren in Amsterdam.
        </Paragraph>
      </Grid.Cell>
      {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
      {parkerenLinks.map(({ heading, links }, index) => (
        <Grid.Cell
          key={heading}
          span={{ narrow: 4, medium: 4, wide: 5 }}
          start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
        >
          <Heading className="ams-mb-xs" level={2} size="level-3">{heading}</Heading>
          {getLinks(links)}
        </Grid.Cell>
      ))}
    </Grid>
    {/*
     * These bands sit inside <main>, so they stay plain <div>s; the Article Page marks its comparable
     * pull-outs as labelled asides because those sit outside its <main>, where as="aside" makes them
     * complementary landmarks.
     */}
    <Spotlight>
      <Grid paddingVertical="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading className="ams-mb-m" color="inverse" level={2} size="level-3">Parkeertarieven</Heading>
          {/* An interactive element in the page: a search field. */}
          <SearchField className="ams-mb-m">
            {/*
             * SearchField renders the label visually hidden and offers no way to show it, so the placeholder is the
             * only visible text this field can carry. It disappears on the first keystroke, so the field is then
             * unlabelled on screen. The design system advises against placeholders; this one is a compromise.
             */}
            <SearchField.Input label="Zoek op adres" placeholder="Zoek op adres" />
            <SearchField.Button />
          </SearchField>
          <LinkList>
            <LinkList.Link color="inverse" href="#">Tarieven stadsgebied Weesp</LinkList.Link>
            <LinkList.Link color="inverse" href="#">Parkeren op feestdagen</LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    {/* A last section that is not a Grid takes ams-mb-2xl instead of a Grid’s paddingBottom. */}
    {/*
     * Image always reserves its box: .ams-image sets inline-size: 100% and an aspect ratio, so the
     * layout does not shift while the file loads.
     */}
    {/* This image carries no information the text does not, so it takes an empty alt. */}
    <Image alt="" aspectRatio="16:9" className="ams-mb-2xl" src="https://picsum.photos/id/133/1440/810" />
  </main>
</>`,language:`tsx`}}},render:e=>(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(p,{paddingTop:`large`,children:(0,k.jsx)(p.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,k.jsx)(d,{children:(0,k.jsx)(d.Link,{href:`#`,children:`Home`})})})}),(0,k.jsxs)(`main`,{id:`inhoud`,children:[(0,k.jsxs)(p,{paddingBottom:`x-large`,children:[(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-m`,level:1,children:`Parkeren`}),(0,k.jsx)(a,{className:`ams-mb-m`,size:`large`,children:b()})]}),w.map(({heading:e,links:t},n)=>(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},start:n%2?void 0:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,level:2,size:`level-3`,children:e}),j(t)]},e))]}),(0,k.jsx)(i,{children:(0,k.jsx)(p,{paddingVertical:`x-large`,children:(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},start:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-m`,color:`inverse`,level:2,size:`level-3`,children:`Parkeertarieven`}),(0,k.jsxs)(o,{className:`ams-mb-m`,children:[(0,k.jsx)(o.Input,{label:`Zoek op adres`,placeholder:`Zoek op adres`}),(0,k.jsx)(o.Button,{})]}),(0,k.jsxs)(r,{children:[(0,k.jsx)(r.Link,{color:`inverse`,href:`#`,children:`Tarieven stadsgebied Weesp`}),(0,k.jsx)(r.Link,{color:`inverse`,href:`#`,children:`Parkeren op feestdagen`})]})]})})}),(0,k.jsx)(m,{alt:``,aspectRatio:`16:9`,className:`ams-mb-2xl`,src:`https://picsum.photos/id/133/1440/810`})]})]})},F={parameters:{docs:{source:{code:`<>
  {/* Public page templates keep the Breadcrumb in its own Grid above <main>, so its nav sits outside it. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Bestuur en Organisatie</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-m" level={1}>College van burgemeester en wethouders</Heading>
        <Paragraph size="large">
          Het college van burgemeester en wethouders is verantwoordelijk voor het dagelijks bestuur van de
          gemeente Amsterdam.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    {/* Outside the Grid, the image spans the full Page width: up to 90rem, centred — not the full window. */}
    {/* Image always reserves its box; aspectRatio only changes it from the default 16:9 to a banner’s 16:5. */}
    {/* This image carries no information the text does not, so it takes an empty alt. */}
    <Image alt="" aspectRatio="16:5" src="https://picsum.photos/1440/450" />
    <Grid paddingVertical="x-large">
      {/* This cell is as wide as a regular content body, but it start-aligns with the grid it introduces. */}
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
        <Heading className="ams-mb-s" level={2}>Burgemeester en wethouders</Heading>
        <Paragraph>
          Het college bestaat uit de burgemeester en 9 wethouders en wordt ambtelijk ondersteund door de
          gemeentesecretaris.
        </Paragraph>
      </Grid.Cell>
      {/*
       * The image gallery. Each card spans 4 columns; the computed start lays them out two per row on
       * medium ([1, 5]) and three per row on wide ([1, 5, 9]) screens.
       * Indexing a plain array produces a number, which is wider than the union Grid.Cell accepts, so each
       * array is marked as const to keep its elements narrow.
       */}
      {persons.map(({ imageSource, name, role, suffix }, index) => (
        <Grid.Cell
          key={name}
          span={4}
          start={{ narrow: 1, medium: ([1, 5] as const)[index % 2], wide: ([1, 5, 9] as const)[index % 3] }}
        >
          <Card>
            {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
            <Card.Image alt="" src={imageSource} />
            {/* Level 3 keeps the card under the level-2 section heading; Card.Heading supplies its own size. */}
            <Card.Heading level={3}>
              <Card.Link href="#">{\`\${role} \${name}\${suffix ? \` (\${suffix})\` : ''}\`}</Card.Link>
            </Card.Heading>
          </Card>
        </Grid.Cell>
      ))}
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-xs" level={2} size="level-3">Portefeuilleverdeling</Heading>
        <Paragraph className="ams-mb-s">
          Een alfabetisch overzicht van de portefeuilles van burgemeester en wethouders.
        </Paragraph>
        <StandaloneLink href="#">Portefeuilleverdeling</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading className="ams-mb-xs" level={2} size="level-3">Coalitieakkoord</Heading>
        <Paragraph className="ams-mb-s">
          In dit akkoord staan de plannen en visie van de coalitie PvdA, GroenLinks en D66 voor 2022-2026.
        </Paragraph>
        <StandaloneLink href="#">Coalitieakkoord en Uitvoeringsagenda</StandaloneLink>
      </Grid.Cell>
    </Grid>
    <Spotlight>
      <Grid paddingVertical="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading className="ams-mb-xs" color="inverse" level={2} size="level-3">Persberichten en nieuws</Heading>
          <LinkList className="ams-mb-m">
            <LinkList.Link color="inverse" href="#">
              Proef elektrische fietsen voor sociale huurders op Strandeiland en Centrumeiland
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">Definitief ontwerp voor nieuwe Jaap Eden IJshal</LinkList.Link>
            <LinkList.Link color="inverse" href="#">Meer persberichten</LinkList.Link>
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
          <Heading className="ams-mb-xs" color="inverse" level={2} size="level-3">Besluiten B en W</Heading>
          <LinkList className="ams-mb-m">
            <LinkList.Link color="inverse" href="#">Nieuws uit B en W 9 juli 2025</LinkList.Link>
            <LinkList.Link color="inverse" href="#">Nieuws uit B en W 2 juli 2025</LinkList.Link>
            <LinkList.Link color="inverse" href="#">Nieuws uit B en W 25 juni 2025</LinkList.Link>
            <LinkList.Link color="inverse" href="#">Meer besluiten B en W</LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large" paddingTop="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-xs" level={2} size="level-3">Pers en woordvoering</Heading>
        <Paragraph className="ams-mb-s">Voor vragen van journalisten aan de afdeling Bestuursvoorlichting.</Paragraph>
        <StandaloneLink href="#">Pers en woordvoering</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading className="ams-mb-xs" level={2} size="level-3">Meer over het college</Heading>
        <LinkList className="ams-mb-m">
          <LinkList.Link href="#">Vervangingsregeling en locoburgemeesters</LinkList.Link>
          <LinkList.Link href="#">Gedragscode</LinkList.Link>
          <LinkList.Link href="#">Declaraties en dienstreizen</LinkList.Link>
          <LinkList.Link href="#">Geschenkenregister college van B&W</LinkList.Link>
        </LinkList>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-xs" level={2} size="level-3">Contact</Heading>
        <Paragraph className="ams-mb-s">Een bericht voor het college van burgemeester en wethouders kunt u:</Paragraph>
        <UnorderedList>
          <UnorderedList.Item>sturen naar Postbus 202, 1000 AE Amsterdam</UnorderedList.Item>
          <UnorderedList.Item>afgeven bij 1 van de <Link href="#">stadsloketten</Link></UnorderedList.Item>
          <UnorderedList.Item>mailen met het <Link href="#">contactformulier</Link></UnorderedList.Item>
        </UnorderedList>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading className="ams-mb-s" level={2} size="level-3">Rechtenvrije foto’s</Heading>
        {/*
         * Image always crops to an aspect ratio: omitting aspectRatio falls back to the 16:9 default,
         * not to the file’s own ratio. This 640x360 source is already 16:9, so nothing is cropped.
         */}
        <Image alt="" src="https://picsum.photos/640/360" />
      </Grid.Cell>
    </Grid>
  </main>
</>`,language:`tsx`}}},render:e=>(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(p,{paddingTop:`large`,children:(0,k.jsx)(p.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,k.jsxs)(d,{children:[(0,k.jsx)(d.Link,{href:`#`,children:`Home`}),(0,k.jsx)(d.Link,{href:`#`,children:`Bestuur en Organisatie`})]})})}),(0,k.jsxs)(`main`,{id:`inhoud`,children:[(0,k.jsx)(p,{paddingBottom:`x-large`,children:(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-m`,level:1,children:`College van burgemeester en wethouders`}),(0,k.jsx)(a,{size:`large`,children:`Het college van burgemeester en wethouders is verantwoordelijk voor het dagelijks bestuur van de gemeente Amsterdam.`})]})}),(0,k.jsx)(m,{alt:``,aspectRatio:`16:5`,src:y(1440,450,11)}),(0,k.jsxs)(p,{paddingVertical:`x-large`,children:[(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:6,wide:7},children:[(0,k.jsx)(h,{className:`ams-mb-s`,level:2,children:`Burgemeester en wethouders`}),(0,k.jsx)(a,{children:`Het college bestaat uit de burgemeester en 9 wethouders en wordt ambtelijk ondersteund door de gemeentesecretaris.`})]}),E.map(({imageSource:e,name:t,role:n,suffix:r},i)=>(0,k.jsx)(p.Cell,{span:4,start:{narrow:1,medium:[1,5][i%2],wide:[1,5,9][i%3]},children:(0,k.jsxs)(f,{children:[(0,k.jsx)(f.Image,{alt:``,src:e}),(0,k.jsx)(f.Heading,{level:3,children:(0,k.jsx)(f.Link,{href:`#`,children:`${n} ${t}${r?` (${r})`:``}`})})]})},t)),(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},start:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,level:2,size:`level-3`,children:`Portefeuilleverdeling`}),(0,k.jsx)(a,{className:`ams-mb-s`,children:`Een alfabetisch overzicht van de portefeuilles van burgemeester en wethouders.`}),(0,k.jsx)(c,{href:`#`,children:`Portefeuilleverdeling`})]}),(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,level:2,size:`level-3`,children:`Coalitieakkoord`}),(0,k.jsx)(a,{className:`ams-mb-s`,children:`In dit akkoord staan de plannen en visie van de coalitie Pvda, GroenLinks en D66 voor 2022-2026.`}),(0,k.jsx)(c,{href:`#`,children:`Coalitieakkoord en Uitvoeringsagenda`})]})]}),(0,k.jsx)(i,{children:(0,k.jsxs)(p,{paddingVertical:`x-large`,children:[(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},start:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,color:`inverse`,level:2,size:`level-3`,children:`Persberichten en nieuws`}),(0,k.jsxs)(r,{className:`ams-mb-m`,children:[(0,k.jsx)(r.Link,{color:`inverse`,href:`#`,children:`Proef elektrische fietsen voor sociale huurders op Strandeiland en Centrumeiland`}),(0,k.jsx)(r.Link,{color:`inverse`,href:`#`,children:`Definitief ontwerp voor nieuwe Jaap Eden IJshal`}),(0,k.jsx)(r.Link,{color:`inverse`,href:`#`,children:`Meer persberichten`})]})]}),(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,color:`inverse`,level:2,size:`level-3`,children:`Besluiten B en W`}),(0,k.jsxs)(r,{className:`ams-mb-m`,children:[(0,k.jsx)(r.Link,{color:`inverse`,href:`#`,children:`Nieuws uit B en W 9 juli 2025`}),(0,k.jsx)(r.Link,{color:`inverse`,href:`#`,children:`Nieuws uit B en W 2 juli 2025`}),(0,k.jsx)(r.Link,{color:`inverse`,href:`#`,children:`Nieuws uit B en W 25 juni 2025`}),(0,k.jsx)(r.Link,{color:`inverse`,href:`#`,children:`Meer besluiten B en W`})]})]})]})}),(0,k.jsxs)(p,{paddingBottom:`2x-large`,paddingTop:`x-large`,children:[(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},start:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,level:2,size:`level-3`,children:`Pers en woordvoering`}),(0,k.jsx)(a,{className:`ams-mb-s`,children:`Voor vragen van journalisten aan de afdeling Bestuursvoorlichting.`}),(0,k.jsx)(c,{href:`#`,children:`Pers en woordvoering`})]}),(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,level:2,size:`level-3`,children:`Meer over het college`}),(0,k.jsxs)(r,{className:`ams-mb-m`,children:[(0,k.jsx)(r.Link,{href:`#`,children:`Vervangingsregeling en locoburgemeesters`}),(0,k.jsx)(r.Link,{href:`#`,children:`Gedragscode`}),(0,k.jsx)(r.Link,{href:`#`,children:`Declaraties en dienstreizen`}),(0,k.jsx)(r.Link,{href:`#`,children:`Geschenkenregister college van B&W`})]})]}),(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},start:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,level:2,size:`level-3`,children:`Contact`}),(0,k.jsx)(a,{className:`ams-mb-s`,children:`Een bericht voor het college van burgemeester en wethouders kunt u:`}),(0,k.jsxs)(u,{children:[(0,k.jsx)(u.Item,{children:`sturen naar Postbus 202, 1000 AE Amsterdam`}),(0,k.jsxs)(u.Item,{children:[`afgeven bij 1 van de `,(0,k.jsx)(s,{href:`#`,children:`stadsloketten`})]}),(0,k.jsxs)(u.Item,{children:[`mailen met het `,(0,k.jsx)(s,{href:`#`,children:`contactformulier`})]})]})]}),(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},children:[(0,k.jsx)(h,{className:`ams-mb-s`,level:2,size:`level-3`,children:`Rechtenvrije foto’s`}),(0,k.jsx)(m,{alt:``,src:y(640,360,12)})]})]})]})]})},I={parameters:{docs:{source:{code:`// getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.

<>
  {/* Public page templates keep the Breadcrumb in its own Grid above <main>, so its nav sits outside it. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Onderwerp</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-m" level={1}>Onderwerp</Heading>
        <Paragraph size="large">
          Amsterdam wil een nieuwe traditie starten om met oud en nieuw naar een centrale nieuwjaarsviering
          te gaan in plaats van zelf vuurwerk af te steken.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    {/* Outside the Grid, the image spans the full Page width: up to 90rem, centred — not the full window. */}
    {/* Image always reserves its box; aspectRatio only changes it from the default 16:9 to a banner’s 16:5. */}
    {/* This image carries no information the text does not, so it takes an empty alt. */}
    <Image alt="" aspectRatio="16:5" src="https://picsum.photos/1440/450" />
    <Grid paddingVertical="x-large">
      {/* This cell is as wide as a regular content body, but it start-aligns with the grid it introduces. */}
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        {/*
         * This page nests one level deeper than the other navigation pages: level-2 section titles with
         * level-3 groups under them. Those headings each want the size of their own level, so they set
         * no size. The Spotlight headings below are the exception: they stay level={2} in the outline
         * but take size="level-3", as Link Sections do.
         */}
        <Heading className="ams-mb-s" level={2}>L2 Paragraaf titel</Heading>
        <Paragraph>Voorbeeldtekst bij dit onderwerp.</Paragraph>
      </Grid.Cell>
      {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
      {burgerzakenLinks.slice(0, 6).map(({ heading, links }, index) => (
        <Grid.Cell
          key={heading}
          span={{ narrow: 4, medium: 4, wide: 5 }}
          start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
        >
          <Heading className="ams-mb-xs" level={3}>{heading}</Heading>
          {getLinks(links)}
        </Grid.Cell>
      ))}
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-xs" level={3}>Titel</Heading>
        <Paragraph className="ams-mb-m">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        <StandaloneLink href="#">Lees meer</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading className="ams-mb-xs" level={3}>Titel</Heading>
        <Paragraph className="ams-mb-m">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        <StandaloneLink href="#">Lees meer</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-xs" level={3}>Titel</Heading>
        <Paragraph className="ams-mb-m">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        <StandaloneLink href="#">Lees meer</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading className="ams-mb-xs" level={3}>Titel</Heading>
        <Paragraph className="ams-mb-m">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        <StandaloneLink href="#">Lees meer</StandaloneLink>
      </Grid.Cell>
    </Grid>
    <Spotlight color="magenta">
      <Grid paddingVertical="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading className="ams-mb-xs" color="inverse" level={2} size="level-3">Titel</Heading>
          <Paragraph color="inverse">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
          <Heading className="ams-mb-xs" color="inverse" level={2} size="level-3">Titel</Heading>
          <Paragraph color="inverse">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large" paddingTop="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-s" level={2}>L2 Paragraaf titel</Heading>
        <Paragraph>Voorbeeldtekst bij dit onderwerp.</Paragraph>
      </Grid.Cell>
      {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
      {burgerzakenLinks.slice(4, 8).map(({ heading, links }, index) => (
        <Grid.Cell
          key={heading}
          span={{ narrow: 4, medium: 4, wide: 5 }}
          start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
        >
          <Heading className="ams-mb-xs" level={3}>{heading}</Heading>
          {getLinks(links)}
        </Grid.Cell>
      ))}
    </Grid>
  </main>
</>`,language:`tsx`}}},render:e=>(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(p,{paddingTop:`large`,children:(0,k.jsx)(p.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,k.jsxs)(d,{children:[(0,k.jsx)(d.Link,{href:`#`,children:`Home`}),(0,k.jsx)(d.Link,{href:`#`,children:`Onderwerp`})]})})}),(0,k.jsxs)(`main`,{id:`inhoud`,children:[(0,k.jsx)(p,{paddingBottom:`x-large`,children:(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-m`,level:1,children:v()}),(0,k.jsx)(a,{size:`large`,children:`Amsterdam wil een nieuwe traditie starten om met oud en nieuw naar een centrale nieuwjaarsviering te gaan in plaats van zelf vuurwerk af te steken.`})]})}),(0,k.jsx)(m,{alt:``,aspectRatio:`16:5`,src:y(1440,450)}),(0,k.jsxs)(p,{paddingVertical:`x-large`,children:[(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-s`,level:2,children:`L2 Paragraaf titel`}),(0,k.jsx)(a,{children:b()})]}),C.slice(0,6).map(({heading:e,links:t},n)=>(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},start:n%2?void 0:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,level:3,children:e}),j(t)]},e)),(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},start:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,level:3,children:v()}),(0,k.jsx)(a,{className:`ams-mb-m`,children:b()}),(0,k.jsx)(c,{href:`#`,children:g()})]}),(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,level:3,children:v()}),(0,k.jsx)(a,{className:`ams-mb-m`,children:b()}),(0,k.jsx)(c,{href:`#`,children:g()})]}),(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},start:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,level:3,children:v()}),(0,k.jsx)(a,{className:`ams-mb-m`,children:b()}),(0,k.jsx)(c,{href:`#`,children:g()})]}),(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,level:3,children:v()}),(0,k.jsx)(a,{className:`ams-mb-m`,children:b()}),(0,k.jsx)(c,{href:`#`,children:g()})]})]}),(0,k.jsx)(i,{color:`magenta`,children:(0,k.jsxs)(p,{paddingVertical:`x-large`,children:[(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},start:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,color:`inverse`,level:2,size:`level-3`,children:v()}),(0,k.jsx)(a,{color:`inverse`,children:b()})]}),(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,color:`inverse`,level:2,size:`level-3`,children:v()}),(0,k.jsx)(a,{color:`inverse`,children:b()})]})]})}),(0,k.jsxs)(p,{paddingBottom:`2x-large`,paddingTop:`x-large`,children:[(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-s`,level:2,children:`L2 Paragraaf titel`}),(0,k.jsx)(a,{children:b()})]}),C.slice(4,8).map(({heading:e,links:t},n)=>(0,k.jsxs)(p.Cell,{span:{narrow:4,medium:4,wide:5},start:n%2?void 0:{narrow:1,medium:1,wide:2},children:[(0,k.jsx)(h,{className:`ams-mb-xs`,level:3,children:e}),j(t)]},e))]})]})]})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        // Because this story’s \`render\` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every \`map\` is expanded. Provide the source by hand so the \`map\` and \`getLinks\`
        // patterns read the way a developer would write them.
        code: \`// getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.

<>
  {/* Public page templates keep the Breadcrumb in its own Grid above <main>, so its nav sits outside it. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
  {/*
   * The main region here is a single section, so the Grid itself is that region. When the landmark has
   * to hold several sections — more Grids, a Spotlight, a full-bleed image — wrap them in a plain
   * <main> instead. Beside a sidebar, <main> goes in its own Grid Cell.
   */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <Grid as="main" id="inhoud" paddingBottom="2x-large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Heading className="ams-mb-m" level={1}>Burgerzaken</Heading>
      <Paragraph size="large">
        Heeft u een paspoort, rijbewijs of uittreksel nodig? Of wilt u een verhuizing doorgeven of een
        geboorte aangeven? Op deze pagina vindt u alle informatie en regelzaken rondom Burgerzaken.
      </Paragraph>
    </Grid.Cell>
    {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
    {burgerzakenLinks.map(({ heading, links }, index) => (
      <Grid.Cell
        key={heading}
        span={{ narrow: 4, medium: 4, wide: 5 }}
        start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
      >
        <Heading className="ams-mb-xs" level={2} size="level-3">{heading}</Heading>
        {getLinks(links)}
      </Grid.Cell>
    ))}
  </Grid>
</>\`,
        language: 'tsx'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args =>
  // getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.
  <>
      {/* Public page templates keep the Breadcrumb in its own Grid above <main>, so its nav sits outside it. */}
      <Grid paddingTop="large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 7,
        wide: 9
      }} start={{
        narrow: 1,
        medium: 1,
        wide: 2
      }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
      {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
      {/*
       * The main region here is a single section, so the Grid itself is that region. When the landmark has
       * to hold several sections — more Grids, a Spotlight, a full-bleed image — wrap them in a plain
       * <main> instead. Beside a sidebar, <main> goes in its own Grid Cell.
       */}
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <Grid as="main" id="inhoud" paddingBottom="2x-large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 7,
        wide: 9
      }} start={{
        narrow: 1,
        medium: 1,
        wide: 2
      }}>
          <Heading className="ams-mb-m" level={1}>
            Burgerzaken
          </Heading>
          <Paragraph size="large">
            Heeft u een paspoort, rijbewijs of uittreksel nodig? Of wilt u een verhuizing doorgeven of een geboorte
            aangeven? Op deze pagina vindt u alle informatie en regelzaken rondom Burgerzaken.
          </Paragraph>
        </Grid.Cell>
        {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
        {burgerzakenLinks.map(({
        heading,
        links
      }, index) => <Grid.Cell key={heading} span={{
        narrow: 4,
        medium: 4,
        wide: 5
      }} start={index % 2 ? undefined : {
        narrow: 1,
        medium: 1,
        wide: 2
      }}>
            <Heading className="ams-mb-xs" level={2} size="level-3">
              {heading}
            </Heading>
            {getLinks(links)}
          </Grid.Cell>)}
      </Grid>
    </>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        // Because this story’s \`render\` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every \`map\` is expanded. Provide the source by hand so the \`map\` and \`getLinks\`
        // patterns read the way a developer would write them.
        code: \`// getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.

<>
  {/* Public page templates keep the Breadcrumb in its own Grid above <main>, so its nav sits outside it. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <Grid as="main" id="inhoud" paddingBottom="2x-large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Heading className="ams-mb-m" level={1}>Leefomgeving</Heading>
    </Grid.Cell>
    {/* The two most important tasks get a full Card each; the groups below are plain heading + links. */}
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Card>
        <Card.Heading level={2}>
          <Card.Link href="/">Doe een melding</Card.Link>
        </Card.Heading>
        <Paragraph>
          Meld overlast van geluid of afval op straat. U kunt ook kapotte dingen melden of iets dat we
          moeten opruimen.
        </Paragraph>
      </Card>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
      <Card>
        <Card.Heading level={2}>
          <Card.Link href="/">Kondig een demonstratie of manifestatie aan</Card.Link>
        </Card.Heading>
        <Paragraph>Een demonstratie of manifestatie meldt u vooraf bij de gemeente.</Paragraph>
      </Card>
    </Grid.Cell>
    {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
    {topTaskLinks.map(({ heading, links }, index) => (
      <Grid.Cell
        key={heading}
        span={{ narrow: 4, medium: 4, wide: 5 }}
        start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
      >
        <Heading className="ams-mb-xs" level={2} size="level-3">{heading}</Heading>
        {getLinks(links)}
      </Grid.Cell>
    ))}
  </Grid>
</>\`,
        language: 'tsx'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args =>
  // getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.
  <>
      {/* Public page templates keep the Breadcrumb in its own Grid above <main>, so its nav sits outside it. */}
      <Grid paddingTop="large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 7,
        wide: 9
      }} start={{
        narrow: 1,
        medium: 1,
        wide: 2
      }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
      {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <Grid as="main" id="inhoud" paddingBottom="2x-large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 7,
        wide: 9
      }} start={{
        narrow: 1,
        medium: 1,
        wide: 2
      }}>
          <Heading className="ams-mb-m" level={1}>
            Leefomgeving
          </Heading>
        </Grid.Cell>
        {/* The two most important tasks get a full Card each; the groups below are plain heading + links. */}
        <Grid.Cell span={{
        narrow: 4,
        medium: 4,
        wide: 5
      }} start={{
        narrow: 1,
        medium: 1,
        wide: 2
      }}>
          <Card>
            <Card.Heading level={2}>
              <Card.Link href="/">Doe een melding</Card.Link>
            </Card.Heading>
            <Paragraph>
              Meld overlast van geluid of afval op straat. U kunt ook kapotte dingen melden of iets dat we moeten
              opruimen.
            </Paragraph>
          </Card>
        </Grid.Cell>
        <Grid.Cell span={{
        narrow: 4,
        medium: 4,
        wide: 5
      }}>
          <Card>
            <Card.Heading level={2}>
              <Card.Link href="/">Kondig een demonstratie of manifestatie aan</Card.Link>
            </Card.Heading>
            <Paragraph>Een demonstratie of manifestatie meldt u vooraf bij de gemeente.</Paragraph>
          </Card>
        </Grid.Cell>
        {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
        {topTaskLinks.map(({
        heading,
        links
      }, index) => <Grid.Cell key={heading} span={{
        narrow: 4,
        medium: 4,
        wide: 5
      }} start={index % 2 ? undefined : {
        narrow: 1,
        medium: 1,
        wide: 2
      }}>
            <Heading className="ams-mb-xs" level={2} size="level-3">
              {heading}
            </Heading>
            {getLinks(links)}
          </Grid.Cell>)}
      </Grid>
    </>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        // Because this story’s \`render\` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every \`map\` is expanded. Provide the source by hand so the \`map\` and \`getLinks\`
        // patterns read the way a developer would write them.
        code: \`// getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.

<>
  {/* Public page templates keep the Breadcrumb in its own Grid above <main>, so its nav sits outside it. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/*
   * Spotlights and full-bleed images sit between the Grids, so a plain <main> wraps them all. A page that
   * is a single section can put as="main" on the Grid itself instead.
   */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-m" level={1}>Parkeren</Heading>
        <Paragraph className="ams-mb-m" size="large">
          Vind informatie over parkeervergunningen, parkeertarieven en betaald parkeren in Amsterdam.
        </Paragraph>
      </Grid.Cell>
      {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
      {parkerenLinks.map(({ heading, links }, index) => (
        <Grid.Cell
          key={heading}
          span={{ narrow: 4, medium: 4, wide: 5 }}
          start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
        >
          <Heading className="ams-mb-xs" level={2} size="level-3">{heading}</Heading>
          {getLinks(links)}
        </Grid.Cell>
      ))}
    </Grid>
    {/*
     * These bands sit inside <main>, so they stay plain <div>s; the Article Page marks its comparable
     * pull-outs as labelled asides because those sit outside its <main>, where as="aside" makes them
     * complementary landmarks.
     */}
    <Spotlight>
      <Grid paddingVertical="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading className="ams-mb-m" color="inverse" level={2} size="level-3">Parkeertarieven</Heading>
          {/* An interactive element in the page: a search field. */}
          <SearchField className="ams-mb-m">
            {/*
             * SearchField renders the label visually hidden and offers no way to show it, so the placeholder is the
             * only visible text this field can carry. It disappears on the first keystroke, so the field is then
             * unlabelled on screen. The design system advises against placeholders; this one is a compromise.
             */}
            <SearchField.Input label="Zoek op adres" placeholder="Zoek op adres" />
            <SearchField.Button />
          </SearchField>
          <LinkList>
            <LinkList.Link color="inverse" href="#">Tarieven stadsgebied Weesp</LinkList.Link>
            <LinkList.Link color="inverse" href="#">Parkeren op feestdagen</LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    {/* A last section that is not a Grid takes ams-mb-2xl instead of a Grid’s paddingBottom. */}
    {/*
     * Image always reserves its box: .ams-image sets inline-size: 100% and an aspect ratio, so the
     * layout does not shift while the file loads.
     */}
    {/* This image carries no information the text does not, so it takes an empty alt. */}
    <Image alt="" aspectRatio="16:9" className="ams-mb-2xl" src="https://picsum.photos/id/133/1440/810" />
  </main>
</>\`,
        language: 'tsx'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args =>
  // getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.
  <>
      {/* Public page templates keep the Breadcrumb in its own Grid above <main>, so its nav sits outside it. */}
      <Grid paddingTop="large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 7,
        wide: 9
      }} start={{
        narrow: 1,
        medium: 1,
        wide: 2
      }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
      {/*
       * Spotlights and full-bleed images sit between the Grids, so a plain <main> wraps them all. A page that
       * is a single section can put as="main" on the Grid itself instead.
       */}
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <main id="inhoud">
        <Grid paddingBottom="x-large">
          <Grid.Cell span={{
          narrow: 4,
          medium: 7,
          wide: 9
        }} start={{
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
            <Heading className="ams-mb-m" level={1}>
              Parkeren
            </Heading>
            <Paragraph className="ams-mb-m" size="large">
              {exampleParagraph()}
            </Paragraph>
          </Grid.Cell>
          {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
          {parkerenLinks.map(({
          heading,
          links
        }, index) => <Grid.Cell key={heading} span={{
          narrow: 4,
          medium: 4,
          wide: 5
        }} start={index % 2 ? undefined : {
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
              <Heading className="ams-mb-xs" level={2} size="level-3">
                {heading}
              </Heading>
              {getLinks(links)}
            </Grid.Cell>)}
        </Grid>
        {/*
         * These bands sit inside <main>, so they stay plain <div>s; the Article Page marks its comparable
         * pull-outs as labelled asides because those sit outside its <main>, where as="aside" makes them
         * complementary landmarks.
         */}
        <Spotlight>
          <Grid paddingVertical="x-large">
            <Grid.Cell span={{
            narrow: 4,
            medium: 4,
            wide: 5
          }} start={{
            narrow: 1,
            medium: 1,
            wide: 2
          }}>
              <Heading className="ams-mb-m" color="inverse" level={2} size="level-3">
                Parkeertarieven
              </Heading>
              {/* An interactive element in the page: a search field. */}
              <SearchField className="ams-mb-m">
                {/*
                 * SearchField renders the label visually hidden and offers no way to show it, so the placeholder is the
                 * only visible text this field can carry. It disappears on the first keystroke, so the field is then
                 * unlabelled on screen. The design system advises against placeholders; this one is a compromise.
                 */}
                <SearchField.Input label="Zoek op adres" placeholder="Zoek op adres" />
                <SearchField.Button />
              </SearchField>
              <LinkList>
                <LinkList.Link color="inverse" href="#">
                  Tarieven stadsgebied Weesp
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Parkeren op feestdagen
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
          </Grid>
        </Spotlight>
        {/* A last section that is not a Grid takes ams-mb-2xl instead of a Grid’s paddingBottom. */}
        {/*
         * Image always reserves its box: .ams-image sets inline-size: 100% and an aspect ratio, so the
         * layout does not shift while the file loads.
         */}
        {/* This image carries no information the text does not, so it takes an empty alt. */}
        <Image alt="" aspectRatio="16:9" className="ams-mb-2xl" src="https://picsum.photos/id/133/1440/810" />
      </main>
    </>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        // Because this story’s \`render\` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every \`map\` is expanded. Provide the source by hand so the \`map\` and \`getLinks\`
        // patterns read the way a developer would write them.
        code: \`<>
  {/* Public page templates keep the Breadcrumb in its own Grid above <main>, so its nav sits outside it. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Bestuur en Organisatie</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-m" level={1}>College van burgemeester en wethouders</Heading>
        <Paragraph size="large">
          Het college van burgemeester en wethouders is verantwoordelijk voor het dagelijks bestuur van de
          gemeente Amsterdam.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    {/* Outside the Grid, the image spans the full Page width: up to 90rem, centred — not the full window. */}
    {/* Image always reserves its box; aspectRatio only changes it from the default 16:9 to a banner’s 16:5. */}
    {/* This image carries no information the text does not, so it takes an empty alt. */}
    <Image alt="" aspectRatio="16:5" src="https://picsum.photos/1440/450" />
    <Grid paddingVertical="x-large">
      {/* This cell is as wide as a regular content body, but it start-aligns with the grid it introduces. */}
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }}>
        <Heading className="ams-mb-s" level={2}>Burgemeester en wethouders</Heading>
        <Paragraph>
          Het college bestaat uit de burgemeester en 9 wethouders en wordt ambtelijk ondersteund door de
          gemeentesecretaris.
        </Paragraph>
      </Grid.Cell>
      {/*
       * The image gallery. Each card spans 4 columns; the computed start lays them out two per row on
       * medium ([1, 5]) and three per row on wide ([1, 5, 9]) screens.
       * Indexing a plain array produces a number, which is wider than the union Grid.Cell accepts, so each
       * array is marked as const to keep its elements narrow.
       */}
      {persons.map(({ imageSource, name, role, suffix }, index) => (
        <Grid.Cell
          key={name}
          span={4}
          start={{ narrow: 1, medium: ([1, 5] as const)[index % 2], wide: ([1, 5, 9] as const)[index % 3] }}
        >
          <Card>
            {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
            <Card.Image alt="" src={imageSource} />
            {/* Level 3 keeps the card under the level-2 section heading; Card.Heading supplies its own size. */}
            <Card.Heading level={3}>
              <Card.Link href="#">{\\\`\\\${role} \\\${name}\\\${suffix ? \\\` (\\\${suffix})\\\` : ''}\\\`}</Card.Link>
            </Card.Heading>
          </Card>
        </Grid.Cell>
      ))}
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-xs" level={2} size="level-3">Portefeuilleverdeling</Heading>
        <Paragraph className="ams-mb-s">
          Een alfabetisch overzicht van de portefeuilles van burgemeester en wethouders.
        </Paragraph>
        <StandaloneLink href="#">Portefeuilleverdeling</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading className="ams-mb-xs" level={2} size="level-3">Coalitieakkoord</Heading>
        <Paragraph className="ams-mb-s">
          In dit akkoord staan de plannen en visie van de coalitie PvdA, GroenLinks en D66 voor 2022-2026.
        </Paragraph>
        <StandaloneLink href="#">Coalitieakkoord en Uitvoeringsagenda</StandaloneLink>
      </Grid.Cell>
    </Grid>
    <Spotlight>
      <Grid paddingVertical="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading className="ams-mb-xs" color="inverse" level={2} size="level-3">Persberichten en nieuws</Heading>
          <LinkList className="ams-mb-m">
            <LinkList.Link color="inverse" href="#">
              Proef elektrische fietsen voor sociale huurders op Strandeiland en Centrumeiland
            </LinkList.Link>
            <LinkList.Link color="inverse" href="#">Definitief ontwerp voor nieuwe Jaap Eden IJshal</LinkList.Link>
            <LinkList.Link color="inverse" href="#">Meer persberichten</LinkList.Link>
          </LinkList>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
          <Heading className="ams-mb-xs" color="inverse" level={2} size="level-3">Besluiten B en W</Heading>
          <LinkList className="ams-mb-m">
            <LinkList.Link color="inverse" href="#">Nieuws uit B en W 9 juli 2025</LinkList.Link>
            <LinkList.Link color="inverse" href="#">Nieuws uit B en W 2 juli 2025</LinkList.Link>
            <LinkList.Link color="inverse" href="#">Nieuws uit B en W 25 juni 2025</LinkList.Link>
            <LinkList.Link color="inverse" href="#">Meer besluiten B en W</LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large" paddingTop="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-xs" level={2} size="level-3">Pers en woordvoering</Heading>
        <Paragraph className="ams-mb-s">Voor vragen van journalisten aan de afdeling Bestuursvoorlichting.</Paragraph>
        <StandaloneLink href="#">Pers en woordvoering</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading className="ams-mb-xs" level={2} size="level-3">Meer over het college</Heading>
        <LinkList className="ams-mb-m">
          <LinkList.Link href="#">Vervangingsregeling en locoburgemeesters</LinkList.Link>
          <LinkList.Link href="#">Gedragscode</LinkList.Link>
          <LinkList.Link href="#">Declaraties en dienstreizen</LinkList.Link>
          <LinkList.Link href="#">Geschenkenregister college van B&W</LinkList.Link>
        </LinkList>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-xs" level={2} size="level-3">Contact</Heading>
        <Paragraph className="ams-mb-s">Een bericht voor het college van burgemeester en wethouders kunt u:</Paragraph>
        <UnorderedList>
          <UnorderedList.Item>sturen naar Postbus 202, 1000 AE Amsterdam</UnorderedList.Item>
          <UnorderedList.Item>afgeven bij 1 van de <Link href="#">stadsloketten</Link></UnorderedList.Item>
          <UnorderedList.Item>mailen met het <Link href="#">contactformulier</Link></UnorderedList.Item>
        </UnorderedList>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading className="ams-mb-s" level={2} size="level-3">Rechtenvrije foto’s</Heading>
        {/*
         * Image always crops to an aspect ratio: omitting aspectRatio falls back to the 16:9 default,
         * not to the file’s own ratio. This 640x360 source is already 16:9, so nothing is cropped.
         */}
        <Image alt="" src="https://picsum.photos/640/360" />
      </Grid.Cell>
    </Grid>
  </main>
</>\`,
        language: 'tsx'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args => <>
      {/* Public page templates keep the Breadcrumb in its own Grid above <main>, so its nav sits outside it. */}
      <Grid paddingTop="large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 7,
        wide: 9
      }} start={{
        narrow: 1,
        medium: 1,
        wide: 2
      }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Bestuur en Organisatie</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <main id="inhoud">
        <Grid paddingBottom="x-large">
          <Grid.Cell span={{
          narrow: 4,
          medium: 7,
          wide: 9
        }} start={{
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
            <Heading className="ams-mb-m" level={1}>
              College van burgemeester en wethouders
            </Heading>
            <Paragraph size="large">
              Het college van burgemeester en wethouders is verantwoordelijk voor het dagelijks bestuur van de gemeente
              Amsterdam.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        {/* Outside the Grid, the image spans the full Page width: up to 90rem, centred — not the full window. */}
        {/* Image always reserves its box; aspectRatio only changes it from the default 16:9 to a banner’s 16:5. */}
        {/* This image carries no information the text does not, so it takes an empty alt. */}
        <Image alt="" aspectRatio="16:5" src={exampleImageSource(1440, 450, 11)} />
        <Grid paddingVertical="x-large">
          {/* This cell is as wide as a regular content body, but it start-aligns with the grid it introduces. */}
          <Grid.Cell span={{
          narrow: 4,
          medium: 6,
          wide: 7
        }}>
            <Heading className="ams-mb-s" level={2}>
              Burgemeester en wethouders
            </Heading>
            <Paragraph>
              Het college bestaat uit de burgemeester en 9 wethouders en wordt ambtelijk ondersteund door de
              gemeentesecretaris.
            </Paragraph>
          </Grid.Cell>
          {/*
           * The image gallery. Each card spans 4 columns; the computed start lays them out two per row on
           * medium ([1, 5]) and three per row on wide ([1, 5, 9]) screens.
           * Indexing a plain array produces a number, which is wider than the union Grid.Cell accepts, so each
           * array is marked as const to keep its elements narrow.
           */}
          {persons.map(({
          imageSource,
          name,
          role,
          suffix
        }, index) => <Grid.Cell key={name} span={4} start={{
          narrow: 1,
          medium: ([1, 5] as const)[index % 2],
          wide: ([1, 5, 9] as const)[index % 3]
        }}>
              <Card>
                {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
                <Card.Image alt="" src={imageSource} />
                {/* Level 3 keeps the card under the level-2 section heading; Card.Heading supplies its own size. */}
                <Card.Heading level={3}>
                  <Card.Link href="#">{\`\${role} \${name}\${suffix ? \` (\${suffix})\` : ''}\`}</Card.Link>
                </Card.Heading>
              </Card>
            </Grid.Cell>)}
          <Grid.Cell span={{
          narrow: 4,
          medium: 4,
          wide: 5
        }} start={{
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
            <Heading className="ams-mb-xs" level={2} size="level-3">
              Portefeuilleverdeling
            </Heading>
            <Paragraph className="ams-mb-s">
              Een alfabetisch overzicht van de portefeuilles van burgemeester en wethouders.
            </Paragraph>
            <StandaloneLink href="#">Portefeuilleverdeling</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell span={{
          narrow: 4,
          medium: 4,
          wide: 5
        }}>
            <Heading className="ams-mb-xs" level={2} size="level-3">
              Coalitieakkoord
            </Heading>
            <Paragraph className="ams-mb-s">
              In dit akkoord staan de plannen en visie van de coalitie Pvda, GroenLinks en D66 voor 2022-2026.
            </Paragraph>
            <StandaloneLink href="#">Coalitieakkoord en Uitvoeringsagenda</StandaloneLink>
          </Grid.Cell>
        </Grid>
        <Spotlight>
          <Grid paddingVertical="x-large">
            <Grid.Cell span={{
            narrow: 4,
            medium: 4,
            wide: 5
          }} start={{
            narrow: 1,
            medium: 1,
            wide: 2
          }}>
              <Heading className="ams-mb-xs" color="inverse" level={2} size="level-3">
                Persberichten en nieuws
              </Heading>
              <LinkList className="ams-mb-m">
                <LinkList.Link color="inverse" href="#">
                  Proef elektrische fietsen voor sociale huurders op Strandeiland en Centrumeiland
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Definitief ontwerp voor nieuwe Jaap Eden IJshal
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Meer persberichten
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
            <Grid.Cell span={{
            narrow: 4,
            medium: 4,
            wide: 5
          }}>
              <Heading className="ams-mb-xs" color="inverse" level={2} size="level-3">
                Besluiten B en W
              </Heading>
              <LinkList className="ams-mb-m">
                <LinkList.Link color="inverse" href="#">
                  Nieuws uit B en W 9 juli 2025
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Nieuws uit B en W 2 juli 2025
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Nieuws uit B en W 25 juni 2025
                </LinkList.Link>
                <LinkList.Link color="inverse" href="#">
                  Meer besluiten B en W
                </LinkList.Link>
              </LinkList>
            </Grid.Cell>
          </Grid>
        </Spotlight>
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large" paddingTop="x-large">
          <Grid.Cell span={{
          narrow: 4,
          medium: 4,
          wide: 5
        }} start={{
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
            <Heading className="ams-mb-xs" level={2} size="level-3">
              Pers en woordvoering
            </Heading>
            <Paragraph className="ams-mb-s">
              Voor vragen van journalisten aan de afdeling Bestuursvoorlichting.
            </Paragraph>
            <StandaloneLink href="#">Pers en woordvoering</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell span={{
          narrow: 4,
          medium: 4,
          wide: 5
        }}>
            <Heading className="ams-mb-xs" level={2} size="level-3">
              Meer over het college
            </Heading>
            <LinkList className="ams-mb-m">
              <LinkList.Link href="#">Vervangingsregeling en locoburgemeesters</LinkList.Link>
              <LinkList.Link href="#">Gedragscode</LinkList.Link>
              <LinkList.Link href="#">Declaraties en dienstreizen</LinkList.Link>
              <LinkList.Link href="#">Geschenkenregister college van B&W</LinkList.Link>
            </LinkList>
          </Grid.Cell>
          <Grid.Cell span={{
          narrow: 4,
          medium: 4,
          wide: 5
        }} start={{
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
            <Heading className="ams-mb-xs" level={2} size="level-3">
              Contact
            </Heading>
            <Paragraph className="ams-mb-s">
              Een bericht voor het college van burgemeester en wethouders kunt u:
            </Paragraph>
            <UnorderedList>
              <UnorderedList.Item>sturen naar Postbus 202, 1000 AE Amsterdam</UnorderedList.Item>
              <UnorderedList.Item>
                afgeven bij 1 van de <Link href="#">stadsloketten</Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                mailen met het <Link href="#">contactformulier</Link>
              </UnorderedList.Item>
            </UnorderedList>
          </Grid.Cell>
          <Grid.Cell span={{
          narrow: 4,
          medium: 4,
          wide: 5
        }}>
            <Heading className="ams-mb-s" level={2} size="level-3">
              Rechtenvrije foto’s
            </Heading>
            {/*
             * Image always crops to an aspect ratio: omitting aspectRatio falls back to the 16:9 default,
             * not to the file’s own ratio. This 640x360 source is already 16:9, so nothing is cropped.
             */}
            <Image alt="" src={exampleImageSource(640, 360, 12)} />
          </Grid.Cell>
        </Grid>
      </main>
    </>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        // Because this story’s \`render\` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every \`map\` is expanded. Provide the source by hand so the \`map\` and \`getLinks\`
        // patterns read the way a developer would write them.
        code: \`// getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.

<>
  {/* Public page templates keep the Breadcrumb in its own Grid above <main>, so its nav sits outside it. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Onderwerp</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    <Grid paddingBottom="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-m" level={1}>Onderwerp</Heading>
        <Paragraph size="large">
          Amsterdam wil een nieuwe traditie starten om met oud en nieuw naar een centrale nieuwjaarsviering
          te gaan in plaats van zelf vuurwerk af te steken.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    {/* Outside the Grid, the image spans the full Page width: up to 90rem, centred — not the full window. */}
    {/* Image always reserves its box; aspectRatio only changes it from the default 16:9 to a banner’s 16:5. */}
    {/* This image carries no information the text does not, so it takes an empty alt. */}
    <Image alt="" aspectRatio="16:5" src="https://picsum.photos/1440/450" />
    <Grid paddingVertical="x-large">
      {/* This cell is as wide as a regular content body, but it start-aligns with the grid it introduces. */}
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        {/*
         * This page nests one level deeper than the other navigation pages: level-2 section titles with
         * level-3 groups under them. Those headings each want the size of their own level, so they set
         * no size. The Spotlight headings below are the exception: they stay level={2} in the outline
         * but take size="level-3", as Link Sections do.
         */}
        <Heading className="ams-mb-s" level={2}>L2 Paragraaf titel</Heading>
        <Paragraph>Voorbeeldtekst bij dit onderwerp.</Paragraph>
      </Grid.Cell>
      {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
      {burgerzakenLinks.slice(0, 6).map(({ heading, links }, index) => (
        <Grid.Cell
          key={heading}
          span={{ narrow: 4, medium: 4, wide: 5 }}
          start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
        >
          <Heading className="ams-mb-xs" level={3}>{heading}</Heading>
          {getLinks(links)}
        </Grid.Cell>
      ))}
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-xs" level={3}>Titel</Heading>
        <Paragraph className="ams-mb-m">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        <StandaloneLink href="#">Lees meer</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading className="ams-mb-xs" level={3}>Titel</Heading>
        <Paragraph className="ams-mb-m">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        <StandaloneLink href="#">Lees meer</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-xs" level={3}>Titel</Heading>
        <Paragraph className="ams-mb-m">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        <StandaloneLink href="#">Lees meer</StandaloneLink>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
        <Heading className="ams-mb-xs" level={3}>Titel</Heading>
        <Paragraph className="ams-mb-m">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        <StandaloneLink href="#">Lees meer</StandaloneLink>
      </Grid.Cell>
    </Grid>
    <Spotlight color="magenta">
      <Grid paddingVertical="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading className="ams-mb-xs" color="inverse" level={2} size="level-3">Titel</Heading>
          <Paragraph color="inverse">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }}>
          <Heading className="ams-mb-xs" color="inverse" level={2} size="level-3">Titel</Heading>
          <Paragraph color="inverse">Voorbeeldtekst bij dit onderwerp.</Paragraph>
        </Grid.Cell>
      </Grid>
    </Spotlight>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large" paddingTop="x-large">
      <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading className="ams-mb-s" level={2}>L2 Paragraaf titel</Heading>
        <Paragraph>Voorbeeldtekst bij dit onderwerp.</Paragraph>
      </Grid.Cell>
      {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
      {burgerzakenLinks.slice(4, 8).map(({ heading, links }, index) => (
        <Grid.Cell
          key={heading}
          span={{ narrow: 4, medium: 4, wide: 5 }}
          start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
        >
          <Heading className="ams-mb-xs" level={3}>{heading}</Heading>
          {getLinks(links)}
        </Grid.Cell>
      ))}
    </Grid>
  </main>
</>\`,
        language: 'tsx'
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: args =>
  // getLinks shows a single StandaloneLink when a group has one link, or a LinkList when it has several.
  <>
      {/* Public page templates keep the Breadcrumb in its own Grid above <main>, so its nav sits outside it. */}
      <Grid paddingTop="large">
        <Grid.Cell span={{
        narrow: 4,
        medium: 7,
        wide: 9
      }} start={{
        narrow: 1,
        medium: 1,
        wide: 2
      }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Onderwerp</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <main id="inhoud">
        <Grid paddingBottom="x-large">
          <Grid.Cell span={{
          narrow: 4,
          medium: 7,
          wide: 9
        }} start={{
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
            <Heading className="ams-mb-m" level={1}>
              {exampleHeading()}
            </Heading>
            <Paragraph size="large">
              Amsterdam wil een nieuwe traditie starten om met oud en nieuw naar een centrale nieuwjaarsviering te gaan
              in plaats van zelf vuurwerk af te steken.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        {/* Outside the Grid, the image spans the full Page width: up to 90rem, centred — not the full window. */}
        {/* Image always reserves its box; aspectRatio only changes it from the default 16:9 to a banner’s 16:5. */}
        {/* This image carries no information the text does not, so it takes an empty alt. */}
        <Image alt="" aspectRatio="16:5" src={exampleImageSource(1440, 450)} />
        <Grid paddingVertical="x-large">
          {/* This cell is as wide as a regular content body, but it start-aligns with the grid it introduces. */}
          <Grid.Cell span={{
          narrow: 4,
          medium: 6,
          wide: 7
        }} start={{
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
            {/*
             * This page nests one level deeper than the other navigation pages: level-2 section titles with
             * level-3 groups under them. Those headings each want the size of their own level, so they set
             * no size. The Spotlight headings below are the exception: they stay level={2} in the outline
             * but take size="level-3", as Link Sections do.
             */}
            <Heading className="ams-mb-s" level={2}>
              L2 Paragraaf titel
            </Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
          </Grid.Cell>
          {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
          {burgerzakenLinks.slice(0, 6).map(({
          heading,
          links
        }, index) => <Grid.Cell key={heading} span={{
          narrow: 4,
          medium: 4,
          wide: 5
        }} start={index % 2 ? undefined : {
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
              <Heading className="ams-mb-xs" level={3}>
                {heading}
              </Heading>
              {getLinks(links)}
            </Grid.Cell>)}
          <Grid.Cell span={{
          narrow: 4,
          medium: 4,
          wide: 5
        }} start={{
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
            <Heading className="ams-mb-xs" level={3}>
              {exampleHeading()}
            </Heading>
            <Paragraph className="ams-mb-m">{exampleParagraph()}</Paragraph>
            <StandaloneLink href="#">{exampleStandaloneLink()}</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell span={{
          narrow: 4,
          medium: 4,
          wide: 5
        }}>
            <Heading className="ams-mb-xs" level={3}>
              {exampleHeading()}
            </Heading>
            <Paragraph className="ams-mb-m">{exampleParagraph()}</Paragraph>
            <StandaloneLink href="#">{exampleStandaloneLink()}</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell span={{
          narrow: 4,
          medium: 4,
          wide: 5
        }} start={{
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
            <Heading className="ams-mb-xs" level={3}>
              {exampleHeading()}
            </Heading>
            <Paragraph className="ams-mb-m">{exampleParagraph()}</Paragraph>
            <StandaloneLink href="#">{exampleStandaloneLink()}</StandaloneLink>
          </Grid.Cell>
          <Grid.Cell span={{
          narrow: 4,
          medium: 4,
          wide: 5
        }}>
            <Heading className="ams-mb-xs" level={3}>
              {exampleHeading()}
            </Heading>
            <Paragraph className="ams-mb-m">{exampleParagraph()}</Paragraph>
            <StandaloneLink href="#">{exampleStandaloneLink()}</StandaloneLink>
          </Grid.Cell>
        </Grid>
        <Spotlight color="magenta">
          <Grid paddingVertical="x-large">
            <Grid.Cell span={{
            narrow: 4,
            medium: 4,
            wide: 5
          }} start={{
            narrow: 1,
            medium: 1,
            wide: 2
          }}>
              <Heading className="ams-mb-xs" color="inverse" level={2} size="level-3">
                {exampleHeading()}
              </Heading>
              <Paragraph color="inverse">{exampleParagraph()}</Paragraph>
            </Grid.Cell>
            <Grid.Cell span={{
            narrow: 4,
            medium: 4,
            wide: 5
          }}>
              <Heading className="ams-mb-xs" color="inverse" level={2} size="level-3">
                {exampleHeading()}
              </Heading>
              <Paragraph color="inverse">{exampleParagraph()}</Paragraph>
            </Grid.Cell>
          </Grid>
        </Spotlight>
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large" paddingTop="x-large">
          <Grid.Cell span={{
          narrow: 4,
          medium: 6,
          wide: 7
        }} start={{
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
            <Heading className="ams-mb-s" level={2}>
              L2 Paragraaf titel
            </Heading>
            <Paragraph>{exampleParagraph()}</Paragraph>
          </Grid.Cell>
          {/* start pins the even-indexed cells to the content column; odd-indexed cells fall in beside them. */}
          {burgerzakenLinks.slice(4, 8).map(({
          heading,
          links
        }, index) => <Grid.Cell key={heading} span={{
          narrow: 4,
          medium: 4,
          wide: 5
        }} start={index % 2 ? undefined : {
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
              <Heading className="ams-mb-xs" level={3}>
                {heading}
              </Heading>
              {getLinks(links)}
            </Grid.Cell>)}
        </Grid>
      </main>
    </>
}`,...I.parameters?.docs?.source}}},L=[`Default`,`WithTopTasks`,`WithInteractiveElement`,`WithImageGallery`,`SubnavigationPage`]}));R();export{M as Default,I as SubnavigationPage,F as WithImageGallery,P as WithInteractiveElement,N as WithTopTasks,L as __namedExportsOrder,A as default,R as n,O as t};