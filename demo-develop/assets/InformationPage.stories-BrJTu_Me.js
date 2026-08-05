import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{$ as r,J as i,L as a,O as o,S as s,o as c,t as l,v as u,w as d,x as f}from"./index.esm-CBuq2lmM.js";import{n as p,r as m,t as h}from"./commonMeta-Di4iQjug.js";var g=t({Default:()=>y,WithTable:()=>b,__namedExportsOrder:()=>x,default:()=>v}),_,v,y,b,x;function S(){return(S=e((()=>{r(),p(),_=n(),v={...h,title:`Pages/Public/Information Page`,parameters:m(`Explains a subject in full: its background, the rules that apply, and what they mean for a reader who wants to understand something rather than arrange it.`)},y={parameters:{docs:{source:{code:`<>
  {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Parken en groen</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Evenementen in parken</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      {/* The title spans the wide intro column. The taxonomy tags below it are a Metadata Paragraph. */}
      {/* ams-prose sets the vertical rhythm between the elements of this Content Header. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Natuurbescherming bij evenementen in parken en groengebieden</Heading>
        <Paragraph>Evenementen, Natuur en groen, Vergunningen</Paragraph>
      </Grid.Cell>
      {/*
       * The lead paragraph and the lead image take the side-by-side Cell sizes, so the pair reaches a
       * column further than the Content Header Cell above it. Both stack on the narrow grid.
       */}
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Paragraph size="large">
          De Wet Natuurbescherming verbiedt festivals in het broedseizoen niet. Festivalorganisatoren moeten wel
          extra maatregelen nemen om de planten en dieren in het park te beschermen. Volgens een natuurtoets door
          een adviesbureau voldoet de festivalorganisator aan de eisen van de natuurbeschermingswet. Het stadsdeel
          verleent de vergunning.
        </Paragraph>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 5, wide: 7 }}>
        {/*
         * Image always reserves its box; aspectRatio only changes it from the default 16:9 to 4:3. This one
         * sits in the first screenful, so it is not lazy-loaded: that would delay the largest image in the
         * viewport.
         */}
        {/* This image carries no information the text does not, so it takes an empty alt. */}
        <Image alt="" aspectRatio="4:3" src="https://picsum.photos/id/1015/640/480" />
      </Grid.Cell>
    </Grid>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      {/* The body sits in a narrower cell, indented one column on wider screens, for a comfortable reading measure. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading level={2}>Regels tijdens het broedseizoen</Heading>
        <Paragraph>
          Van half maart tot half juli broeden veel vogels in de parken. In die periode gelden extra regels voor
          geluid, verlichting en de opbouw van podia.
        </Paragraph>
        {/* The Accordion’s headings sit one level below the section heading above it, so headingLevel is 3 here. */}
        <Accordion headingLevel={3}>
          <Accordion.Section label="Wanneer is het broedseizoen?">
            <Paragraph>
              Het broedseizoen loopt globaal van 15 maart tot 15 juli. De precieze periode verschilt per vogelsoort
              en per jaar. Een ecoloog bepaalt bij elk evenement of er op dat moment nesten in gebruik zijn.
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="Welke maatregelen neemt een organisator?">
            <Paragraph>
              Denk aan het weren van geluid richting bosschages, het uitschakelen van schijnwerpers na
              zonsondergang, en het vrijhouden van een zone rond nestbomen. De maatregelen staan in het ecologisch
              werkprotocol bij de vergunning.
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="Wat staat er in een natuurtoets?">
            <Paragraph>
              Een adviesbureau onderzoekt welke beschermde planten en dieren in het gebied voorkomen. De natuurtoets
              beschrijft de verwachte effecten van het evenement en de maatregelen die nodig zijn om schade te
              voorkomen.
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="Wie controleert de afspraken?">
            <Paragraph>
              Toezichthouders van de gemeente controleren voor, tijdens en na het evenement. Bij overtredingen kan
              het stadsdeel het evenement stilleggen of de vergunning voor een volgend jaar weigeren.
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="Waar meldt u schade aan groen?">
            <Paragraph>
              Ziet u schade aan bomen, struiken of oevers? Meld dit via het formulier Melding openbare ruimte.
              Vermeld de locatie en voeg zo mogelijk een foto toe.
            </Paragraph>
          </Accordion.Section>
        </Accordion>

        <Heading level={2}>Onderzoek naar planten en dieren</Heading>
        <Paragraph>
          Voor elk groot evenement in een park laat de organisator een natuurtoets uitvoeren. Het onderzoek brengt
          in kaart welke soorten er leven en hoe kwetsbaar zij zijn. De uitkomsten bepalen waar podia, hekken en
          horeca mogen staan.
        </Paragraph>
        {/* An image within the body column is as wide as the text above it. */}
        <Image alt="" loading="lazy" src="https://picsum.photos/id/1016/1280/720" />

        <Heading level={2}>Bezwaar maken tegen een vergunning</Heading>
        <Paragraph>
          Bent u het niet eens met een verleende vergunning? Dan kunt u binnen 6 weken na de bekendmaking bezwaar
          maken. De termijn begint op de dag na de publicatie in het Gemeenteblad.
        </Paragraph>
        <Paragraph>
          Een bezwaar schorst de vergunning niet. Wilt u dat het evenement voorlopig niet doorgaat, dan vraagt u de
          rechtbank daarnaast om een voorlopige voorziening.
        </Paragraph>
        <Heading level={3}>Wat zet u in uw bezwaarschrift?</Heading>
        <Paragraph>
          Beschrijf om welke vergunning het gaat, waarom u het er niet mee eens bent, en wat u anders zou willen
          zien. Vermeld ook uw naam, adres en de datum.
        </Paragraph>
        <Paragraph>
          U ontvangt een bevestiging van ontvangst. Daarna nodigt de bezwaarcommissie u uit voor een hoorzitting.
          Binnen 12 weken volgt een beslissing op uw bezwaar.
        </Paragraph>
      </Grid.Cell>
    </Grid>
  </main>
</>`,language:`tsx`}}},render:()=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(f,{paddingTop:`large`,children:(0,_.jsx)(f.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,_.jsxs)(c,{children:[(0,_.jsx)(c.Link,{href:`#`,children:`Home`}),(0,_.jsx)(c.Link,{href:`#`,children:`Parken en groen`}),(0,_.jsx)(c.Link,{href:`#`,children:`Evenementen in parken`})]})})}),(0,_.jsxs)(`main`,{id:`inhoud`,children:[(0,_.jsxs)(f,{paddingBottom:`2x-large`,children:[(0,_.jsxs)(f.Cell,{className:`ams-prose`,span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,_.jsx)(s,{level:1,children:`Natuurbescherming bij evenementen in parken en groengebieden`}),(0,_.jsx)(a,{children:`Evenementen, Natuur en groen, Vergunningen`})]}),(0,_.jsx)(f.Cell,{span:{narrow:4,medium:4,wide:5},start:{narrow:1,medium:1,wide:2},children:(0,_.jsx)(a,{size:`large`,children:`De Wet Natuurbescherming verbiedt festivals in het broedseizoen niet. Festivalorganisatoren moeten wel extra maatregelen nemen om de planten en dieren in het park te beschermen. Volgens een natuurtoets door een adviesbureau voldoet de festivalorganisator aan de eisen van de natuurbeschermingswet. Het stadsdeel verleent de vergunning.`})}),(0,_.jsx)(f.Cell,{span:{narrow:4,medium:4,wide:5},start:{narrow:1,medium:5,wide:7},children:(0,_.jsx)(d,{alt:``,aspectRatio:`4:3`,src:`https://picsum.photos/id/1015/640/480`})})]}),(0,_.jsx)(f,{paddingBottom:`2x-large`,children:(0,_.jsxs)(f.Cell,{className:`ams-prose`,span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,_.jsx)(s,{level:2,children:`Regels tijdens het broedseizoen`}),(0,_.jsx)(a,{children:`Van half maart tot half juli broeden veel vogels in de parken. In die periode gelden extra regels voor geluid, verlichting en de opbouw van podia.`}),(0,_.jsxs)(l,{headingLevel:3,children:[(0,_.jsx)(l.Section,{label:`Wanneer is het broedseizoen?`,children:(0,_.jsx)(a,{children:`Het broedseizoen loopt globaal van 15 maart tot 15 juli. De precieze periode verschilt per vogelsoort en per jaar. Een ecoloog bepaalt bij elk evenement of er op dat moment nesten in gebruik zijn.`})}),(0,_.jsx)(l.Section,{label:`Welke maatregelen neemt een organisator?`,children:(0,_.jsx)(a,{children:`Denk aan het weren van geluid richting bosschages, het uitschakelen van schijnwerpers na zonsondergang, en het vrijhouden van een zone rond nestbomen. De maatregelen staan in het ecologisch werkprotocol bij de vergunning.`})}),(0,_.jsx)(l.Section,{label:`Wat staat er in een natuurtoets?`,children:(0,_.jsx)(a,{children:`Een adviesbureau onderzoekt welke beschermde planten en dieren in het gebied voorkomen. De natuurtoets beschrijft de verwachte effecten van het evenement en de maatregelen die nodig zijn om schade te voorkomen.`})}),(0,_.jsx)(l.Section,{label:`Wie controleert de afspraken?`,children:(0,_.jsx)(a,{children:`Toezichthouders van de gemeente controleren voor, tijdens en na het evenement. Bij overtredingen kan het stadsdeel het evenement stilleggen of de vergunning voor een volgend jaar weigeren.`})}),(0,_.jsx)(l.Section,{label:`Waar meldt u schade aan groen?`,children:(0,_.jsx)(a,{children:`Ziet u schade aan bomen, struiken of oevers? Meld dit via het formulier Melding openbare ruimte. Vermeld de locatie en voeg zo mogelijk een foto toe.`})})]}),(0,_.jsx)(s,{level:2,children:`Onderzoek naar planten en dieren`}),(0,_.jsx)(a,{children:`Voor elk groot evenement in een park laat de organisator een natuurtoets uitvoeren. Het onderzoek brengt in kaart welke soorten er leven en hoe kwetsbaar zij zijn. De uitkomsten bepalen waar podia, hekken en horeca mogen staan.`}),(0,_.jsx)(d,{alt:``,loading:`lazy`,src:`https://picsum.photos/id/1016/1280/720`}),(0,_.jsx)(s,{level:2,children:`Bezwaar maken tegen een vergunning`}),(0,_.jsx)(a,{children:`Bent u het niet eens met een verleende vergunning? Dan kunt u binnen 6 weken na de bekendmaking bezwaar maken. De termijn begint op de dag na de publicatie in het Gemeenteblad.`}),(0,_.jsx)(a,{children:`Een bezwaar schorst de vergunning niet. Wilt u dat het evenement voorlopig niet doorgaat, dan vraagt u de rechtbank daarnaast om een voorlopige voorziening.`}),(0,_.jsx)(s,{level:3,children:`Wat zet u in uw bezwaarschrift?`}),(0,_.jsx)(a,{children:`Beschrijf om welke vergunning het gaat, waarom u het er niet mee eens bent, en wat u anders zou willen zien. Vermeld ook uw naam, adres en de datum.`}),(0,_.jsx)(a,{children:`U ontvangt een bevestiging van ontvangst. Daarna nodigt de bezwaarcommissie u uit voor een hoorzitting. Binnen 12 weken volgt een beslissing op uw bezwaar.`})]})})]})]})},b={parameters:{docs:{source:{code:`<>
  {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Belastingen</Breadcrumb.Link>
        <Breadcrumb.Link href="#">WOZ-waarde</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      {/* Without an image beside it, the lead paragraph stays in the Content Header Cell with the title and the metadata. */}
      {/* ams-prose sets the vertical rhythm between the elements of this Content Header. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Landelijk vastgestelde gegevens voor de WOZ-waarde van uw woning</Heading>
        <Paragraph>
          {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
          <time dateTime="2026-01-01">1 januari 2026</time> – Belastingen, Wonen, WOZ
        </Paragraph>
        <Paragraph size="large">
          De gemeente stelt elk jaar de WOZ-waarde van uw woning vast. Welke gegevens daarbij horen en hoe zij
          worden vastgelegd, is landelijk bepaald. Zo betekent een gegeven in Amsterdam hetzelfde als in elke andere
          gemeente.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    <Grid paddingBottom="x-large">
      {/* The body sits in a narrower cell, indented one column on wider screens, for a comfortable reading measure. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading level={2}>Hoe de WOZ-waarde tot stand komt</Heading>
        <Paragraph>
          De WOZ-waarde is de waarde die uw woning op de peildatum zou opbrengen bij verkoop. De peildatum ligt
          altijd een jaar voor het belastingjaar, zodat de gemeente verkoopcijfers van een heel jaar kan gebruiken.
        </Paragraph>
        <Paragraph>
          Voor de vergelijking gebruikt de gemeente woningen die in dezelfde periode zijn verkocht en die op uw
          woning lijken in type, grootte, bouwjaar en ligging. Verschillen tussen die woningen en de uwe worden
          verrekend.
        </Paragraph>
        <Heading level={3}>Niet eens met de waarde</Heading>
        <Paragraph>
          Bekijk eerst het taxatieverslag. Daarin staat welke woningen zijn vergeleken en welke kenmerken zijn
          gebruikt. Klopt een kenmerk niet, geef dat dan aan ons door.
        </Paragraph>
        <Paragraph>
          Bent u het daarna nog niet eens met de waarde? Maak dan binnen 6 weken na de dagtekening van de aanslag
          bezwaar. U hoeft daar geen bureau voor in te schakelen.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      {/*
       * A Table sizes to its content and scrolls once it outgrows its cell, so give it a wider cell than the reading
       * column.
       */}
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        {/* A Figure groups the table with the sources it came from. The Figure supplies the space between them. */}
        <Figure>
          <Table>
            <Table.Caption>
              <Heading level={2}>Landelijk vastgestelde gegevens WOZ</Heading>
            </Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Gegeven</Table.HeaderCell>
                <Table.HeaderCell>Omschrijving</Table.HeaderCell>
                <Table.HeaderCell>Eenheid</Table.HeaderCell>
                <Table.HeaderCell>Verplicht</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                {/* A row header names the row, so screen readers announce it with each cell that follows. */}
                <Table.HeaderCell scope="row">WOZ-waarde</Table.HeaderCell>
                <Table.Cell>Vastgestelde waarde van de woning</Table.Cell>
                <Table.Cell>Euro</Table.Cell>
                <Table.Cell>Ja</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell scope="row">Objectnummer</Table.HeaderCell>
                <Table.Cell>Uniek nummer van het WOZ-object</Table.Cell>
                <Table.Cell>Tekst</Table.Cell>
                <Table.Cell>Ja</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell scope="row">Grondoppervlakte</Table.HeaderCell>
                <Table.Cell>Oppervlakte van het perceel</Table.Cell>
                <Table.Cell>m²</Table.Cell>
                <Table.Cell>Ja</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell scope="row">Woonoppervlakte</Table.HeaderCell>
                <Table.Cell>Gebruiksoppervlakte volgens de BAG</Table.Cell>
                <Table.Cell>m²</Table.Cell>
                <Table.Cell>Nee</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell scope="row">Bouwjaar</Table.HeaderCell>
                <Table.Cell>Jaar waarin het object is gebouwd</Table.Cell>
                <Table.Cell>Jaartal</Table.Cell>
                <Table.Cell>Nee</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell scope="row">Gebruiksdoel</Table.HeaderCell>
                <Table.Cell>Functie van het object volgens de BAG</Table.Cell>
                <Table.Cell>Tekst</Table.Cell>
                <Table.Cell>Ja</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          {/* Write any sources as one sentence, so the Figure Caption presents them in its small caption text. */}
          <Figure.Caption>
            Bronnen: <Link href="#">Catalogus Basisregistratie WOZ</Link> en{' '}
            <Link href="#">Gegevenswoordenboek WOZ</Link>.
          </Figure.Caption>
        </Figure>
      </Grid.Cell>
    </Grid>
  </main>
</>`,language:`tsx`}}},render:()=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(f,{paddingTop:`large`,children:(0,_.jsx)(f.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,_.jsxs)(c,{children:[(0,_.jsx)(c.Link,{href:`#`,children:`Home`}),(0,_.jsx)(c.Link,{href:`#`,children:`Belastingen`}),(0,_.jsx)(c.Link,{href:`#`,children:`WOZ-waarde`})]})})}),(0,_.jsxs)(`main`,{id:`inhoud`,children:[(0,_.jsx)(f,{paddingBottom:`2x-large`,children:(0,_.jsxs)(f.Cell,{className:`ams-prose`,span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,_.jsx)(s,{level:1,children:`Landelijk vastgestelde gegevens voor de WOZ-waarde van uw woning`}),(0,_.jsxs)(a,{children:[(0,_.jsx)(`time`,{dateTime:`2026-01-01`,children:`1 januari 2026`}),` – Belastingen, Wonen, WOZ`]}),(0,_.jsx)(a,{size:`large`,children:`De gemeente stelt elk jaar de WOZ-waarde van uw woning vast. Welke gegevens daarbij horen en hoe zij worden vastgelegd, is landelijk bepaald. Zo betekent een gegeven in Amsterdam hetzelfde als in elke andere gemeente.`})]})}),(0,_.jsx)(f,{paddingBottom:`x-large`,children:(0,_.jsxs)(f.Cell,{className:`ams-prose`,span:{narrow:4,medium:6,wide:7},start:{narrow:1,medium:2,wide:3},children:[(0,_.jsx)(s,{level:2,children:`Hoe de WOZ-waarde tot stand komt`}),(0,_.jsx)(a,{children:`De WOZ-waarde is de waarde die uw woning op de peildatum zou opbrengen bij verkoop. De peildatum ligt altijd een jaar voor het belastingjaar, zodat de gemeente verkoopcijfers van een heel jaar kan gebruiken.`}),(0,_.jsx)(a,{children:`Voor de vergelijking gebruikt de gemeente woningen die in dezelfde periode zijn verkocht en die op uw woning lijken in type, grootte, bouwjaar en ligging. Verschillen tussen die woningen en de uwe worden verrekend.`}),(0,_.jsx)(s,{level:3,children:`Niet eens met de waarde`}),(0,_.jsx)(a,{children:`Bekijk eerst het taxatieverslag. Daarin staat welke woningen zijn vergeleken en welke kenmerken zijn gebruikt. Klopt een kenmerk niet, geef dat dan aan ons door.`}),(0,_.jsx)(a,{children:`Bent u het daarna nog niet eens met de waarde? Maak dan binnen 6 weken na de dagtekening van de aanslag bezwaar. U hoeft daar geen bureau voor in te schakelen.`})]})}),(0,_.jsx)(f,{paddingBottom:`2x-large`,children:(0,_.jsx)(f.Cell,{span:{narrow:4,medium:8,wide:10},start:{narrow:1,medium:1,wide:2},children:(0,_.jsxs)(u,{children:[(0,_.jsxs)(i,{children:[(0,_.jsx)(i.Caption,{children:(0,_.jsx)(s,{level:2,children:`Landelijk vastgestelde gegevens WOZ`})}),(0,_.jsx)(i.Header,{children:(0,_.jsxs)(i.Row,{children:[(0,_.jsx)(i.HeaderCell,{children:`Gegeven`}),(0,_.jsx)(i.HeaderCell,{children:`Omschrijving`}),(0,_.jsx)(i.HeaderCell,{children:`Eenheid`}),(0,_.jsx)(i.HeaderCell,{children:`Verplicht`})]})}),(0,_.jsxs)(i.Body,{children:[(0,_.jsxs)(i.Row,{children:[(0,_.jsx)(i.HeaderCell,{scope:`row`,children:`WOZ-waarde`}),(0,_.jsx)(i.Cell,{children:`Vastgestelde waarde van de woning`}),(0,_.jsx)(i.Cell,{children:`Euro`}),(0,_.jsx)(i.Cell,{children:`Ja`})]}),(0,_.jsxs)(i.Row,{children:[(0,_.jsx)(i.HeaderCell,{scope:`row`,children:`Objectnummer`}),(0,_.jsx)(i.Cell,{children:`Uniek nummer van het WOZ-object`}),(0,_.jsx)(i.Cell,{children:`Tekst`}),(0,_.jsx)(i.Cell,{children:`Ja`})]}),(0,_.jsxs)(i.Row,{children:[(0,_.jsx)(i.HeaderCell,{scope:`row`,children:`Grondoppervlakte`}),(0,_.jsx)(i.Cell,{children:`Oppervlakte van het perceel`}),(0,_.jsx)(i.Cell,{children:`m²`}),(0,_.jsx)(i.Cell,{children:`Ja`})]}),(0,_.jsxs)(i.Row,{children:[(0,_.jsx)(i.HeaderCell,{scope:`row`,children:`Woonoppervlakte`}),(0,_.jsx)(i.Cell,{children:`Gebruiksoppervlakte volgens de BAG`}),(0,_.jsx)(i.Cell,{children:`m²`}),(0,_.jsx)(i.Cell,{children:`Nee`})]}),(0,_.jsxs)(i.Row,{children:[(0,_.jsx)(i.HeaderCell,{scope:`row`,children:`Bouwjaar`}),(0,_.jsx)(i.Cell,{children:`Jaar waarin het object is gebouwd`}),(0,_.jsx)(i.Cell,{children:`Jaartal`}),(0,_.jsx)(i.Cell,{children:`Nee`})]}),(0,_.jsxs)(i.Row,{children:[(0,_.jsx)(i.HeaderCell,{scope:`row`,children:`Gebruiksdoel`}),(0,_.jsx)(i.Cell,{children:`Functie van het object volgens de BAG`}),(0,_.jsx)(i.Cell,{children:`Tekst`}),(0,_.jsx)(i.Cell,{children:`Ja`})]})]})]}),(0,_.jsxs)(u.Caption,{children:[`Bronnen: `,(0,_.jsx)(o,{href:`#`,children:`Catalogus Basisregistratie WOZ`}),` en`,` `,(0,_.jsx)(o,{href:`#`,children:`Gegevenswoordenboek WOZ`}),`.`]})]})})})]})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        // Because this story’s \`render\` takes no argument, the Code Panel prints its source as written, the story
        // wrapper and its types included. Provide the source by hand so the panel shows the markup to compose,
        // without that scaffolding.
        code: \`<>
  {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Parken en groen</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Evenementen in parken</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      {/* The title spans the wide intro column. The taxonomy tags below it are a Metadata Paragraph. */}
      {/* ams-prose sets the vertical rhythm between the elements of this Content Header. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Natuurbescherming bij evenementen in parken en groengebieden</Heading>
        <Paragraph>Evenementen, Natuur en groen, Vergunningen</Paragraph>
      </Grid.Cell>
      {/*
       * The lead paragraph and the lead image take the side-by-side Cell sizes, so the pair reaches a
       * column further than the Content Header Cell above it. Both stack on the narrow grid.
       */}
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Paragraph size="large">
          De Wet Natuurbescherming verbiedt festivals in het broedseizoen niet. Festivalorganisatoren moeten wel
          extra maatregelen nemen om de planten en dieren in het park te beschermen. Volgens een natuurtoets door
          een adviesbureau voldoet de festivalorganisator aan de eisen van de natuurbeschermingswet. Het stadsdeel
          verleent de vergunning.
        </Paragraph>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 5, wide: 7 }}>
        {/*
         * Image always reserves its box; aspectRatio only changes it from the default 16:9 to 4:3. This one
         * sits in the first screenful, so it is not lazy-loaded: that would delay the largest image in the
         * viewport.
         */}
        {/* This image carries no information the text does not, so it takes an empty alt. */}
        <Image alt="" aspectRatio="4:3" src="https://picsum.photos/id/1015/640/480" />
      </Grid.Cell>
    </Grid>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      {/* The body sits in a narrower cell, indented one column on wider screens, for a comfortable reading measure. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading level={2}>Regels tijdens het broedseizoen</Heading>
        <Paragraph>
          Van half maart tot half juli broeden veel vogels in de parken. In die periode gelden extra regels voor
          geluid, verlichting en de opbouw van podia.
        </Paragraph>
        {/* The Accordion’s headings sit one level below the section heading above it, so headingLevel is 3 here. */}
        <Accordion headingLevel={3}>
          <Accordion.Section label="Wanneer is het broedseizoen?">
            <Paragraph>
              Het broedseizoen loopt globaal van 15 maart tot 15 juli. De precieze periode verschilt per vogelsoort
              en per jaar. Een ecoloog bepaalt bij elk evenement of er op dat moment nesten in gebruik zijn.
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="Welke maatregelen neemt een organisator?">
            <Paragraph>
              Denk aan het weren van geluid richting bosschages, het uitschakelen van schijnwerpers na
              zonsondergang, en het vrijhouden van een zone rond nestbomen. De maatregelen staan in het ecologisch
              werkprotocol bij de vergunning.
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="Wat staat er in een natuurtoets?">
            <Paragraph>
              Een adviesbureau onderzoekt welke beschermde planten en dieren in het gebied voorkomen. De natuurtoets
              beschrijft de verwachte effecten van het evenement en de maatregelen die nodig zijn om schade te
              voorkomen.
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="Wie controleert de afspraken?">
            <Paragraph>
              Toezichthouders van de gemeente controleren voor, tijdens en na het evenement. Bij overtredingen kan
              het stadsdeel het evenement stilleggen of de vergunning voor een volgend jaar weigeren.
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="Waar meldt u schade aan groen?">
            <Paragraph>
              Ziet u schade aan bomen, struiken of oevers? Meld dit via het formulier Melding openbare ruimte.
              Vermeld de locatie en voeg zo mogelijk een foto toe.
            </Paragraph>
          </Accordion.Section>
        </Accordion>

        <Heading level={2}>Onderzoek naar planten en dieren</Heading>
        <Paragraph>
          Voor elk groot evenement in een park laat de organisator een natuurtoets uitvoeren. Het onderzoek brengt
          in kaart welke soorten er leven en hoe kwetsbaar zij zijn. De uitkomsten bepalen waar podia, hekken en
          horeca mogen staan.
        </Paragraph>
        {/* An image within the body column is as wide as the text above it. */}
        <Image alt="" loading="lazy" src="https://picsum.photos/id/1016/1280/720" />

        <Heading level={2}>Bezwaar maken tegen een vergunning</Heading>
        <Paragraph>
          Bent u het niet eens met een verleende vergunning? Dan kunt u binnen 6 weken na de bekendmaking bezwaar
          maken. De termijn begint op de dag na de publicatie in het Gemeenteblad.
        </Paragraph>
        <Paragraph>
          Een bezwaar schorst de vergunning niet. Wilt u dat het evenement voorlopig niet doorgaat, dan vraagt u de
          rechtbank daarnaast om een voorlopige voorziening.
        </Paragraph>
        <Heading level={3}>Wat zet u in uw bezwaarschrift?</Heading>
        <Paragraph>
          Beschrijf om welke vergunning het gaat, waarom u het er niet mee eens bent, en wat u anders zou willen
          zien. Vermeld ook uw naam, adres en de datum.
        </Paragraph>
        <Paragraph>
          U ontvangt een bevestiging van ontvangst. Daarna nodigt de bezwaarcommissie u uit voor een hoorzitting.
          Binnen 12 weken volgt een beslissing op uw bezwaar.
        </Paragraph>
      </Grid.Cell>
    </Grid>
  </main>
</>\`,
        language: 'tsx'
      }
    }
  },
  render: () => <>
      {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
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
            <Breadcrumb.Link href="#">Parken en groen</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Evenementen in parken</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <main id="inhoud">
        {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          {/* The title spans the wide intro column. The taxonomy tags below it are a Metadata Paragraph. */}
          {/* ams-prose sets the vertical rhythm between the elements of this Content Header. */}
          <Grid.Cell className="ams-prose" span={{
          narrow: 4,
          medium: 7,
          wide: 9
        }} start={{
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
            <Heading level={1}>Natuurbescherming bij evenementen in parken en groengebieden</Heading>
            <Paragraph>Evenementen, Natuur en groen, Vergunningen</Paragraph>
          </Grid.Cell>
          {/*
           * The lead paragraph and the lead image take the side-by-side Cell sizes, so the pair reaches a
           * column further than the Content Header Cell above it. Both stack on the narrow grid.
           */}
          <Grid.Cell span={{
          narrow: 4,
          medium: 4,
          wide: 5
        }} start={{
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
            <Paragraph size="large">
              De Wet Natuurbescherming verbiedt festivals in het broedseizoen niet. Festivalorganisatoren moeten wel
              extra maatregelen nemen om de planten en dieren in het park te beschermen. Volgens een natuurtoets door
              een adviesbureau voldoet de festivalorganisator aan de eisen van de natuurbeschermingswet. Het stadsdeel
              verleent de vergunning.
            </Paragraph>
          </Grid.Cell>
          <Grid.Cell span={{
          narrow: 4,
          medium: 4,
          wide: 5
        }} start={{
          narrow: 1,
          medium: 5,
          wide: 7
        }}>
            {/*
             * Image always reserves its box; aspectRatio only changes it from the default 16:9 to 4:3. This one
             * sits in the first screenful, so it is not lazy-loaded: that would delay the largest image in the
             * viewport.
             */}
            {/* This image carries no information the text does not, so it takes an empty alt. */}
            <Image alt="" aspectRatio="4:3" src="https://picsum.photos/id/1015/640/480" />
          </Grid.Cell>
        </Grid>
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          {/* The body sits in a narrower cell, indented one column on wider screens, for a comfortable reading measure. */}
          <Grid.Cell className="ams-prose" span={{
          narrow: 4,
          medium: 6,
          wide: 7
        }} start={{
          narrow: 1,
          medium: 2,
          wide: 3
        }}>
            <Heading level={2}>Regels tijdens het broedseizoen</Heading>
            <Paragraph>
              Van half maart tot half juli broeden veel vogels in de parken. In die periode gelden extra regels voor
              geluid, verlichting en de opbouw van podia.
            </Paragraph>
            {/* The Accordion’s headings sit one level below the section heading above it, so headingLevel is 3 here. */}
            <Accordion headingLevel={3}>
              <Accordion.Section label="Wanneer is het broedseizoen?">
                <Paragraph>
                  Het broedseizoen loopt globaal van 15 maart tot 15 juli. De precieze periode verschilt per vogelsoort
                  en per jaar. Een ecoloog bepaalt bij elk evenement of er op dat moment nesten in gebruik zijn.
                </Paragraph>
              </Accordion.Section>
              <Accordion.Section label="Welke maatregelen neemt een organisator?">
                <Paragraph>
                  Denk aan het weren van geluid richting bosschages, het uitschakelen van schijnwerpers na
                  zonsondergang, en het vrijhouden van een zone rond nestbomen. De maatregelen staan in het ecologisch
                  werkprotocol bij de vergunning.
                </Paragraph>
              </Accordion.Section>
              <Accordion.Section label="Wat staat er in een natuurtoets?">
                <Paragraph>
                  Een adviesbureau onderzoekt welke beschermde planten en dieren in het gebied voorkomen. De natuurtoets
                  beschrijft de verwachte effecten van het evenement en de maatregelen die nodig zijn om schade te
                  voorkomen.
                </Paragraph>
              </Accordion.Section>
              <Accordion.Section label="Wie controleert de afspraken?">
                <Paragraph>
                  Toezichthouders van de gemeente controleren voor, tijdens en na het evenement. Bij overtredingen kan
                  het stadsdeel het evenement stilleggen of de vergunning voor een volgend jaar weigeren.
                </Paragraph>
              </Accordion.Section>
              <Accordion.Section label="Waar meldt u schade aan groen?">
                <Paragraph>
                  Ziet u schade aan bomen, struiken of oevers? Meld dit via het formulier Melding openbare ruimte.
                  Vermeld de locatie en voeg zo mogelijk een foto toe.
                </Paragraph>
              </Accordion.Section>
            </Accordion>

            <Heading level={2}>Onderzoek naar planten en dieren</Heading>
            <Paragraph>
              Voor elk groot evenement in een park laat de organisator een natuurtoets uitvoeren. Het onderzoek brengt
              in kaart welke soorten er leven en hoe kwetsbaar zij zijn. De uitkomsten bepalen waar podia, hekken en
              horeca mogen staan.
            </Paragraph>
            {/* An image within the body column is as wide as the text above it. */}
            <Image alt="" loading="lazy" src="https://picsum.photos/id/1016/1280/720" />

            <Heading level={2}>Bezwaar maken tegen een vergunning</Heading>
            <Paragraph>
              Bent u het niet eens met een verleende vergunning? Dan kunt u binnen 6 weken na de bekendmaking bezwaar
              maken. De termijn begint op de dag na de publicatie in het Gemeenteblad.
            </Paragraph>
            <Paragraph>
              Een bezwaar schorst de vergunning niet. Wilt u dat het evenement voorlopig niet doorgaat, dan vraagt u de
              rechtbank daarnaast om een voorlopige voorziening.
            </Paragraph>
            <Heading level={3}>Wat zet u in uw bezwaarschrift?</Heading>
            <Paragraph>
              Beschrijf om welke vergunning het gaat, waarom u het er niet mee eens bent, en wat u anders zou willen
              zien. Vermeld ook uw naam, adres en de datum.
            </Paragraph>
            <Paragraph>
              U ontvangt een bevestiging van ontvangst. Daarna nodigt de bezwaarcommissie u uit voor een hoorzitting.
              Binnen 12 weken volgt een beslissing op uw bezwaar.
            </Paragraph>
          </Grid.Cell>
        </Grid>
      </main>
    </>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        // Because this story’s \`render\` takes no argument, the Code Panel prints its source as written, the story
        // wrapper and its types included. Provide the source by hand so the panel shows the markup to compose,
        // without that scaffolding.
        code: \`<>
  {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Belastingen</Breadcrumb.Link>
        <Breadcrumb.Link href="#">WOZ-waarde</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
  {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
  <main id="inhoud">
    {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      {/* Without an image beside it, the lead paragraph stays in the Content Header Cell with the title and the metadata. */}
      {/* ams-prose sets the vertical rhythm between the elements of this Content Header. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Landelijk vastgestelde gegevens voor de WOZ-waarde van uw woning</Heading>
        <Paragraph>
          {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
          <time dateTime="2026-01-01">1 januari 2026</time> – Belastingen, Wonen, WOZ
        </Paragraph>
        <Paragraph size="large">
          De gemeente stelt elk jaar de WOZ-waarde van uw woning vast. Welke gegevens daarbij horen en hoe zij
          worden vastgelegd, is landelijk bepaald. Zo betekent een gegeven in Amsterdam hetzelfde als in elke andere
          gemeente.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    <Grid paddingBottom="x-large">
      {/* The body sits in a narrower cell, indented one column on wider screens, for a comfortable reading measure. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 7 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
        <Heading level={2}>Hoe de WOZ-waarde tot stand komt</Heading>
        <Paragraph>
          De WOZ-waarde is de waarde die uw woning op de peildatum zou opbrengen bij verkoop. De peildatum ligt
          altijd een jaar voor het belastingjaar, zodat de gemeente verkoopcijfers van een heel jaar kan gebruiken.
        </Paragraph>
        <Paragraph>
          Voor de vergelijking gebruikt de gemeente woningen die in dezelfde periode zijn verkocht en die op uw
          woning lijken in type, grootte, bouwjaar en ligging. Verschillen tussen die woningen en de uwe worden
          verrekend.
        </Paragraph>
        <Heading level={3}>Niet eens met de waarde</Heading>
        <Paragraph>
          Bekijk eerst het taxatieverslag. Daarin staat welke woningen zijn vergeleken en welke kenmerken zijn
          gebruikt. Klopt een kenmerk niet, geef dat dan aan ons door.
        </Paragraph>
        <Paragraph>
          Bent u het daarna nog niet eens met de waarde? Maak dan binnen 6 weken na de dagtekening van de aanslag
          bezwaar. U hoeft daar geen bureau voor in te schakelen.
        </Paragraph>
      </Grid.Cell>
    </Grid>
    {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      {/*
       * A Table sizes to its content and scrolls once it outgrows its cell, so give it a wider cell than the reading
       * column.
       */}
      <Grid.Cell span={{ narrow: 4, medium: 8, wide: 10 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        {/* A Figure groups the table with the sources it came from. The Figure supplies the space between them. */}
        <Figure>
          <Table>
            <Table.Caption>
              <Heading level={2}>Landelijk vastgestelde gegevens WOZ</Heading>
            </Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Gegeven</Table.HeaderCell>
                <Table.HeaderCell>Omschrijving</Table.HeaderCell>
                <Table.HeaderCell>Eenheid</Table.HeaderCell>
                <Table.HeaderCell>Verplicht</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                {/* A row header names the row, so screen readers announce it with each cell that follows. */}
                <Table.HeaderCell scope="row">WOZ-waarde</Table.HeaderCell>
                <Table.Cell>Vastgestelde waarde van de woning</Table.Cell>
                <Table.Cell>Euro</Table.Cell>
                <Table.Cell>Ja</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell scope="row">Objectnummer</Table.HeaderCell>
                <Table.Cell>Uniek nummer van het WOZ-object</Table.Cell>
                <Table.Cell>Tekst</Table.Cell>
                <Table.Cell>Ja</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell scope="row">Grondoppervlakte</Table.HeaderCell>
                <Table.Cell>Oppervlakte van het perceel</Table.Cell>
                <Table.Cell>m²</Table.Cell>
                <Table.Cell>Ja</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell scope="row">Woonoppervlakte</Table.HeaderCell>
                <Table.Cell>Gebruiksoppervlakte volgens de BAG</Table.Cell>
                <Table.Cell>m²</Table.Cell>
                <Table.Cell>Nee</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell scope="row">Bouwjaar</Table.HeaderCell>
                <Table.Cell>Jaar waarin het object is gebouwd</Table.Cell>
                <Table.Cell>Jaartal</Table.Cell>
                <Table.Cell>Nee</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell scope="row">Gebruiksdoel</Table.HeaderCell>
                <Table.Cell>Functie van het object volgens de BAG</Table.Cell>
                <Table.Cell>Tekst</Table.Cell>
                <Table.Cell>Ja</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          {/* Write any sources as one sentence, so the Figure Caption presents them in its small caption text. */}
          <Figure.Caption>
            Bronnen: <Link href="#">Catalogus Basisregistratie WOZ</Link> en{' '}
            <Link href="#">Gegevenswoordenboek WOZ</Link>.
          </Figure.Caption>
        </Figure>
      </Grid.Cell>
    </Grid>
  </main>
</>\`,
        language: 'tsx'
      }
    }
  },
  render: () => <>
      {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
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
            <Breadcrumb.Link href="#">Belastingen</Breadcrumb.Link>
            <Breadcrumb.Link href="#">WOZ-waarde</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
      {/* The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content. */}
      <main id="inhoud">
        {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          {/* Without an image beside it, the lead paragraph stays in the Content Header Cell with the title and the metadata. */}
          {/* ams-prose sets the vertical rhythm between the elements of this Content Header. */}
          <Grid.Cell className="ams-prose" span={{
          narrow: 4,
          medium: 7,
          wide: 9
        }} start={{
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
            <Heading level={1}>Landelijk vastgestelde gegevens voor de WOZ-waarde van uw woning</Heading>
            <Paragraph>
              {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
              <time dateTime="2026-01-01">1 januari 2026</time> – Belastingen, Wonen, WOZ
            </Paragraph>
            <Paragraph size="large">
              De gemeente stelt elk jaar de WOZ-waarde van uw woning vast. Welke gegevens daarbij horen en hoe zij
              worden vastgelegd, is landelijk bepaald. Zo betekent een gegeven in Amsterdam hetzelfde als in elke andere
              gemeente.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        <Grid paddingBottom="x-large">
          {/* The body sits in a narrower cell, indented one column on wider screens, for a comfortable reading measure. */}
          <Grid.Cell className="ams-prose" span={{
          narrow: 4,
          medium: 6,
          wide: 7
        }} start={{
          narrow: 1,
          medium: 2,
          wide: 3
        }}>
            <Heading level={2}>Hoe de WOZ-waarde tot stand komt</Heading>
            <Paragraph>
              De WOZ-waarde is de waarde die uw woning op de peildatum zou opbrengen bij verkoop. De peildatum ligt
              altijd een jaar voor het belastingjaar, zodat de gemeente verkoopcijfers van een heel jaar kan gebruiken.
            </Paragraph>
            <Paragraph>
              Voor de vergelijking gebruikt de gemeente woningen die in dezelfde periode zijn verkocht en die op uw
              woning lijken in type, grootte, bouwjaar en ligging. Verschillen tussen die woningen en de uwe worden
              verrekend.
            </Paragraph>
            <Heading level={3}>Niet eens met de waarde</Heading>
            <Paragraph>
              Bekijk eerst het taxatieverslag. Daarin staat welke woningen zijn vergeleken en welke kenmerken zijn
              gebruikt. Klopt een kenmerk niet, geef dat dan aan ons door.
            </Paragraph>
            <Paragraph>
              Bent u het daarna nog niet eens met de waarde? Maak dan binnen 6 weken na de dagtekening van de aanslag
              bezwaar. U hoeft daar geen bureau voor in te schakelen.
            </Paragraph>
          </Grid.Cell>
        </Grid>
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          {/* A Table sizes to its content and scrolls once it outgrows its cell, so give it a wider cell than the reading column. */}
          <Grid.Cell span={{
          narrow: 4,
          medium: 8,
          wide: 10
        }} start={{
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
            {/* A Figure groups the table with the sources it came from. The Figure supplies the space between them. */}
            <Figure>
              <Table>
                <Table.Caption>
                  <Heading level={2}>Landelijk vastgestelde gegevens WOZ</Heading>
                </Table.Caption>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Gegeven</Table.HeaderCell>
                    <Table.HeaderCell>Omschrijving</Table.HeaderCell>
                    <Table.HeaderCell>Eenheid</Table.HeaderCell>
                    <Table.HeaderCell>Verplicht</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    {/* A row header names the row, so screen readers announce it with each cell that follows. */}
                    <Table.HeaderCell scope="row">WOZ-waarde</Table.HeaderCell>
                    <Table.Cell>Vastgestelde waarde van de woning</Table.Cell>
                    <Table.Cell>Euro</Table.Cell>
                    <Table.Cell>Ja</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell scope="row">Objectnummer</Table.HeaderCell>
                    <Table.Cell>Uniek nummer van het WOZ-object</Table.Cell>
                    <Table.Cell>Tekst</Table.Cell>
                    <Table.Cell>Ja</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell scope="row">Grondoppervlakte</Table.HeaderCell>
                    <Table.Cell>Oppervlakte van het perceel</Table.Cell>
                    <Table.Cell>m²</Table.Cell>
                    <Table.Cell>Ja</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell scope="row">Woonoppervlakte</Table.HeaderCell>
                    <Table.Cell>Gebruiksoppervlakte volgens de BAG</Table.Cell>
                    <Table.Cell>m²</Table.Cell>
                    <Table.Cell>Nee</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell scope="row">Bouwjaar</Table.HeaderCell>
                    <Table.Cell>Jaar waarin het object is gebouwd</Table.Cell>
                    <Table.Cell>Jaartal</Table.Cell>
                    <Table.Cell>Nee</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell scope="row">Gebruiksdoel</Table.HeaderCell>
                    <Table.Cell>Functie van het object volgens de BAG</Table.Cell>
                    <Table.Cell>Tekst</Table.Cell>
                    <Table.Cell>Ja</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              {/* Write any sources as one sentence, so the Figure Caption presents them in its small caption text. */}
              <Figure.Caption>
                Bronnen: <Link href="#">Catalogus Basisregistratie WOZ</Link> en{' '}
                <Link href="#">Gegevenswoordenboek WOZ</Link>.
              </Figure.Caption>
            </Figure>
          </Grid.Cell>
        </Grid>
      </main>
    </>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithTable`]})))()}export{S as n,g as t};