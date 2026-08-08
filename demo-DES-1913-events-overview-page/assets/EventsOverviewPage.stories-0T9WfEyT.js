import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{B as r,C as i,G as a,N as o,O as s,S as c,W as l,_ as u,c as d,d as f,f as p,l as m,nt as h,o as g,p as _,v,z as y}from"./index.esm-DDqQ3cq-.js";import{m as b,s as x}from"./exampleContent-DsZ2XVq0.js";import{n as S,r as C,t as w}from"./commonMeta-BgToeELS.js";var T,E,D;function O(){return(O=e((()=>{b(),T=[`Cursussen en trainingen`,`Diversiteit`,`Duurzaam en milieu`,`Informatie- en participatiebijeenkomsten`,`Kunst en cultuur`,`Ontmoeting, zorg en welzijn`,`Raads- en commissievergaderingen`,`Sport en spel`,`Werk en inkomen`,`Overig`],E=[`Centrum`,`Nieuw-West`,`Noord`,`Oost`,`Stadsgebied Weesp`,`West`,`Zuid`,`Zuidoost`],D=[{title:`Open dag Stadsarchief Amsterdam`,category:`Kunst en cultuur`,date:`20 juni 2026`,district:`Centrum`,href:`#`,id:`open-dag-stadsarchief`,imageSource:x(640,360,0),isoDate:`2026-06-20`,teaser:`Ontdek eeuwenoude kaarten, foto’s en films over Amsterdam en doorzoek het archief met hulp van onze medewerkers.`,timeLabel:`10.00–16.00 uur`,venue:`Stadsarchief Amsterdam`},{title:`Inloopavond herinrichting Jan Evertsenstraat`,category:`Informatie- en participatiebijeenkomsten`,date:`23 juni 2026`,district:`West`,href:`#`,id:`inloopavond-jan-evertsenstraat`,imageSource:x(640,360,1),isoDate:`2026-06-23`,teaser:`Praat mee over de nieuwe inrichting van de straat, met meer ruimte voor groen, fietsers en voetgangers.`,timeLabel:`19.00–21.00 uur`,venue:`Huis van de Wijk De Klinker`},{title:`Commissievergadering Ruimtelijke Ordening`,category:`Raads- en commissievergaderingen`,date:`24 juni 2026`,district:`Centrum`,href:`#`,id:`commissie-ruimtelijke-ordening`,imageSource:x(640,360,2),isoDate:`2026-06-24`,teaser:`Volg het debat van de raadscommissie over ruimtelijke plannen in de stad. De vergadering is openbaar.`,timeLabel:`13.30 uur`,venue:`Stadhuis, Rooseveltzaal`},{title:`Gratis zwemles voor kinderen`,category:`Sport en spel`,date:`27 juni 2026`,district:`Nieuw-West`,href:`#`,id:`gratis-zwemles-ookmeer`,imageSource:x(640,360,3),isoDate:`2026-06-27`,teaser:`Kinderen van 5 tot 10 jaar oefenen spelenderwijs met zwemmen onder begeleiding. Aanmelden is niet nodig.`,timeLabel:`14.00–15.30 uur`,venue:`Sportcentrum Ookmeer`},{title:`Buurtmoestuin: samen zaaien en oogsten`,category:`Duurzaam en milieu`,date:`28 juni 2026`,district:`Noord`,href:`#`,id:`buurtmoestuin-buikslotermeer`,imageSource:x(640,360,4),isoDate:`2026-06-28`,teaser:`Steek de handen uit de mouwen in de buurtmoestuin en neem aan het eind van de ochtend verse groenten mee naar huis.`,timeLabel:`11.00–13.00 uur`,venue:`Buurtmoestuin Buikslotermeer`},{title:`Taalcafé voor nieuwe Amsterdammers`,category:`Diversiteit`,date:`1 juli 2026`,district:`Oost`,href:`#`,id:`taalcafe-javaplein`,imageSource:x(640,360,5),isoDate:`2026-07-01`,teaser:`Oefen op een ontspannen manier Nederlands met vrijwilligers en andere bewoners, onder het genot van een kop koffie.`,timeLabel:`15.00–17.00 uur`,venue:`OBA Javaplein`}]})))()}var k=t({CardGrid:()=>R,Default:()=>L,__namedExportsOrder:()=>z,default:()=>I}),A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{h(),S(),O(),A=n(),j=132,M=22,N=`${j} activiteiten gevonden.`,P=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,F=({onClick:e,...t})=>(0,A.jsx)(`a`,{...t,onClick:t=>{t.preventDefault(),e?.(t)}}),I={...w,title:`Pages/Public/Events Overview Page`,parameters:C(`Indexes activities a visitor narrows down by date as well as by subject: a city events calendar, a course programme, a schedule of public meetings.`)},L={parameters:{docs:{source:{code:`<>
  {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Activiteiten</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  <main id="inhoud">
    {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
    {/*
     * Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of
     * 2x-large.
     */}
    <Grid paddingBottom="2x-large">
      {/* ams-prose sets the vertical rhythm between the title, the lead, and the search below it. */}
      <Grid.Cell
        className="ams-prose"
        span={{ narrow: 4, medium: 7, wide: 9 }}
        start={{ narrow: 1, medium: 1, wide: 2 }}
      >
        <Heading level={1}>Activiteiten in Amsterdam</Heading>
        <Paragraph size="large">
          Een overzicht van gemeentelijke én maatschappelijke activiteiten voor alle Amsterdammers.
        </Paragraph>
        {/* Search Field renders its own form with role=search, so it needs no form around it. */}
        <SearchField>
          <SearchField.Input
            label="Zoek op trefwoord"
            name="trefwoord"
            placeholder="Bijvoorbeeld: zwemles of vergadering"
          />
          <SearchField.Button>Zoeken</SearchField.Button>
        </SearchField>
      </Grid.Cell>
    </Grid>
    {/*
     * Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off.
     * The last Grid before the Page Footer takes a paddingBottom of 2x-large.
     */}
    <Grid paddingBottom="2x-large">
      {/*
       * The filter column comes first in source, so it precedes the results in the reading and tab order.
       * It only sits beside them from the medium grid up; on narrow screens it spans the full width above them.
       */}
      {/* A Subgrid rather than a Cell, so every control sits in a Cell of its own and the row gap spaces them. */}
      <Grid.Subgrid
        aria-labelledby="events-filters-heading"
        as="aside"
        gapVertical="large"
        span={{ narrow: 4, medium: 3, wide: 3 }}
      >
        <Grid.Cell span="all">
          <Heading className="ams-visually-hidden" id="events-filters-heading" level={2}>Filteren</Heading>
          {/*
           * The Calendar is date navigation rather than a date input: every day links to the activities on it,
           * which suits someone asking what is on next Saturday.
           */}
          <Calendar
            accessibleName="Ga naar een dag met activiteiten"
            accessibleNameId="events-calendar"
            /*
             * The month the listing starts in. Without it a Calendar opens on the current month, which would
             * put the visual test on a different month every month.
             */
            defaultMonth={new Date(2026, 5, 17)}
            /*
             * Calendar renders plain anchors from linkTemplate; linkComponent lets you pass your router’s link.
             * Here a small wrapper keeps navigation inside Storybook rather than reloading the iframe – see
             * PreventNavigationLink.
             */
            linkComponent={PreventNavigationLink}
            linkTemplate={(date) => \`?datum=\${formatIsoDate(date)}\`}
          />
        </Grid.Cell>
        <Grid.Cell span="all">
          {/* A Cell of its own means a form of its own: a form element cannot span the Cells of a Subgrid. */}
          <form method="get">
            <Field>
              <Label htmlFor="events-district">Stadsdeel</Label>
              <Select id="events-district" name="stadsdeel">
                <Select.Option value="">Alle stadsdelen</Select.Option>
                <Select.Option value="Centrum">Centrum</Select.Option>
                {/* … one Option per district … */}
              </Select>
            </Field>
          </form>
        </Grid.Cell>
        <Grid.Cell span="all">
          <form method="get">
            {/* A Field Set spaces its own children, so the Checkboxes inside one need no margin. */}
            <FieldSet className="ams-mb-m" legend="Categorie">
              <Checkbox name="categorie" value="Cursussen en trainingen">
                Cursussen en trainingen
              </Checkbox>
              {/* … one Checkbox per category … */}
            </FieldSet>
            {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
            <Button type="submit">Toon activiteiten</Button>
          </form>
        </Grid.Cell>
      </Grid.Subgrid>
      {/*
       * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
       * columns of the page rather than on columns of their own. That is what lines the Cards up with the rest.
       */}
      <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
        {/*
         * The result count takes the width of the results below it, capped at the 7 columns a reading measure takes.
         */}
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 7 }}>
          <Heading className="ams-visually-hidden" level={2}>Zoekresultaten</Heading>
          {/* A polite live region, so a screen reader hears the new total when the search or the filters change. */}
          <Paragraph role="status">{resultsMessage}</Paragraph>
        </Grid.Cell>
        {/*
         * On the medium grid a Card takes 4 of the 5 columns of the results region, leaving the last one
         * empty. That is below the width at which a Card with an image goes horizontal, so it stays vertical.
         */}
        <Grid.Cell key="open-dag-stadsarchief" span={{ narrow: 4, medium: 4, wide: 9 }}>
          <Card>
            {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
            <Card.Image alt="" loading="lazy" src="https://picsum.photos/id/1048/640/360" />
            {/* A Card that pairs an image with a Content lays out horizontally in a cell this wide. */}
            <Card.Content>
              <Card.HeadingGroup>
                <Card.Heading level={3}>
                  <Card.Link href="#">Open dag Stadsarchief Amsterdam</Card.Link>
                </Card.Heading>
                {/* The Metadata carries the facets of the activity, comma separated. */}
                <Metadata size="small">Kunst en cultuur, Centrum</Metadata>
              </Card.HeadingGroup>
              <Column gap="small">
                <Paragraph>Ontdek eeuwenoude kaarten, foto’s en films over Amsterdam.</Paragraph>
                {/* When and where, below the description. A Card takes the small size of Metadata. */}
                <Metadata size="small">
                  {/*
                   * The visible date is prose; dateTime repeats it in the machine-readable format software parses.
                   */}
                  <time dateTime="2026-06-20">20 juni 2026</time>
                  {/* The day, the time and the place are three kinds of metadata, so a Separator sits between them. */}
                  <Metadata.Separator />
                  10.00–16.00 uur
                  <Metadata.Separator />
                  Stadsarchief Amsterdam
                </Metadata>
              </Column>
            </Card.Content>
          </Card>
        </Grid.Cell>
        {/* … one Cell per activity … */}
        {/* The Pagination takes the width of the results above it rather than that of the region. */}
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 9 }}>
          <Pagination
            accessibleNameId="events-pagination"
            linkComponent={PreventNavigationLink}
            linkTemplate={(page) => \`?pagina=\${page}\`}
            page={1}
            totalPages={totalPages}
          />
        </Grid.Cell>
      </Grid.Subgrid>
    </Grid>
  </main>
</>`,language:`tsx`}}},render:()=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(c,{paddingTop:`large`,children:(0,A.jsx)(c.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,A.jsxs)(g,{children:[(0,A.jsx)(g.Link,{href:`#`,children:`Home`}),(0,A.jsx)(g.Link,{href:`#`,children:`Activiteiten`})]})})}),(0,A.jsxs)(`main`,{id:`inhoud`,children:[(0,A.jsx)(c,{paddingBottom:`2x-large`,children:(0,A.jsxs)(c.Cell,{className:`ams-prose`,span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,A.jsx)(i,{level:1,children:`Activiteiten in Amsterdam`}),(0,A.jsx)(r,{size:`large`,children:`Een overzicht van gemeentelijke én maatschappelijke activiteiten voor alle Amsterdammers.`}),(0,A.jsxs)(l,{children:[(0,A.jsx)(l.Input,{label:`Zoek op trefwoord`,name:`trefwoord`,placeholder:`Bijvoorbeeld: zwemles of vergadering`}),(0,A.jsx)(l.Button,{children:`Zoeken`})]})]})}),(0,A.jsxs)(c,{paddingBottom:`2x-large`,children:[(0,A.jsxs)(c.Subgrid,{"aria-labelledby":`events-filters-heading`,as:`aside`,gapVertical:`large`,span:{narrow:4,medium:3,wide:3},children:[(0,A.jsxs)(c.Cell,{span:`all`,children:[(0,A.jsx)(i,{className:`ams-visually-hidden`,id:`events-filters-heading`,level:2,children:`Filteren`}),(0,A.jsx)(m,{accessibleName:`Ga naar een dag met activiteiten`,accessibleNameId:`events-calendar`,defaultMonth:new Date(2026,5,17),linkComponent:F,linkTemplate:e=>`?datum=${P(e)}`})]}),(0,A.jsx)(c.Cell,{span:`all`,children:(0,A.jsx)(`form`,{method:`get`,children:(0,A.jsxs)(u,{children:[(0,A.jsx)(s,{htmlFor:`events-district`,children:`Stadsdeel`}),(0,A.jsxs)(a,{id:`events-district`,name:`stadsdeel`,children:[(0,A.jsx)(a.Option,{value:``,children:`Alle stadsdelen`}),E.map(e=>(0,A.jsx)(a.Option,{value:e,children:e},e))]})]})})}),(0,A.jsx)(c.Cell,{span:`all`,children:(0,A.jsxs)(`form`,{method:`get`,children:[(0,A.jsx)(v,{className:`ams-mb-m`,legend:`Categorie`,children:T.map(e=>(0,A.jsx)(p,{name:`categorie`,value:e,children:e},e))}),(0,A.jsx)(d,{type:`submit`,children:`Toon activiteiten`})]})})]}),(0,A.jsxs)(c.Subgrid,{span:{narrow:4,medium:5,wide:9},start:{narrow:1,medium:4,wide:4},children:[(0,A.jsxs)(c.Cell,{span:{narrow:4,medium:4,wide:7},children:[(0,A.jsx)(i,{className:`ams-visually-hidden`,level:2,children:`Zoekresultaten`}),(0,A.jsx)(r,{role:`status`,children:N})]}),D.map(e=>(0,A.jsx)(c.Cell,{span:{narrow:4,medium:4,wide:9},children:(0,A.jsxs)(f,{children:[(0,A.jsx)(f.Image,{alt:``,loading:`lazy`,src:e.imageSource}),(0,A.jsxs)(f.Content,{children:[(0,A.jsxs)(f.HeadingGroup,{children:[(0,A.jsx)(f.Heading,{level:3,children:(0,A.jsx)(f.Link,{href:e.href,children:e.title})}),(0,A.jsx)(o,{size:`small`,children:`${e.category}, ${e.district}`})]}),(0,A.jsxs)(_,{gap:`small`,children:[(0,A.jsx)(r,{children:e.teaser}),(0,A.jsxs)(o,{size:`small`,children:[(0,A.jsx)(`time`,{dateTime:e.isoDate,children:e.date}),e.timeLabel&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(o.Separator,{}),e.timeLabel]}),(0,A.jsx)(o.Separator,{}),e.venue]})]})]})]})},e.id)),(0,A.jsx)(c.Cell,{span:{narrow:4,medium:4,wide:9},children:(0,A.jsx)(y,{accessibleNameId:`events-pagination`,linkComponent:F,linkTemplate:e=>`?pagina=${e}`,page:1,totalPages:M})})]})]})]})]})},R={parameters:{docs:{source:{code:`<>
  {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Activiteiten</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  <main id="inhoud">
    {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
    {/*
     * Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of
     * 2x-large.
     */}
    <Grid paddingBottom="2x-large">
      {/* ams-prose sets the vertical rhythm between the title, the lead, and the search below it. */}
      <Grid.Cell
        className="ams-prose"
        span={{ narrow: 4, medium: 7, wide: 9 }}
        start={{ narrow: 1, medium: 1, wide: 2 }}
      >
        <Heading level={1}>Activiteiten in Amsterdam</Heading>
        <Paragraph size="large">
          Een overzicht van gemeentelijke én maatschappelijke activiteiten voor alle Amsterdammers.
        </Paragraph>
        {/* Search Field renders its own form with role=search, so it needs no form around it. */}
        <SearchField>
          <SearchField.Input
            label="Zoek op trefwoord"
            name="trefwoord"
            placeholder="Bijvoorbeeld: zwemles of vergadering"
          />
          <SearchField.Button>Zoeken</SearchField.Button>
        </SearchField>
      </Grid.Cell>
    </Grid>
    {/*
     * Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off.
     * The last Grid before the Page Footer takes a paddingBottom of 2x-large.
     */}
    <Grid paddingBottom="2x-large">
      {/*
       * The filter column comes first in source, so it precedes the results in the reading and tab order.
       * It only sits beside them from the medium grid up; on narrow screens it spans the full width above them.
       */}
      {/* A Subgrid rather than a Cell, so every control sits in a Cell of its own and the row gap spaces them. */}
      <Grid.Subgrid
        aria-labelledby="events-filters-heading"
        as="aside"
        gapVertical="large"
        span={{ narrow: 4, medium: 3, wide: 3 }}
      >
        <Grid.Cell span="all">
          <Heading className="ams-visually-hidden" id="events-filters-heading" level={2}>Filteren</Heading>
          {/*
           * The Calendar is date navigation rather than a date input: every day links to the activities on it,
           * which suits someone asking what is on next Saturday.
           */}
          <Calendar
            accessibleName="Ga naar een dag met activiteiten"
            accessibleNameId="events-calendar"
            /*
             * The month the listing starts in. Without it a Calendar opens on the current month, which would
             * put the visual test on a different month every month.
             */
            defaultMonth={new Date(2026, 5, 17)}
            /*
             * Calendar renders plain anchors from linkTemplate; linkComponent lets you pass your router’s link.
             * Here a small wrapper keeps navigation inside Storybook rather than reloading the iframe – see
             * PreventNavigationLink.
             */
            linkComponent={PreventNavigationLink}
            linkTemplate={(date) => \`?datum=\${formatIsoDate(date)}\`}
          />
        </Grid.Cell>
        <Grid.Cell span="all">
          {/* A Cell of its own means a form of its own: a form element cannot span the Cells of a Subgrid. */}
          <form method="get">
            <Field>
              <Label htmlFor="events-district">Stadsdeel</Label>
              <Select id="events-district" name="stadsdeel">
                <Select.Option value="">Alle stadsdelen</Select.Option>
                <Select.Option value="Centrum">Centrum</Select.Option>
                {/* … one Option per district … */}
              </Select>
            </Field>
          </form>
        </Grid.Cell>
        <Grid.Cell span="all">
          <form method="get">
            {/* A Field Set spaces its own children, so the Checkboxes inside one need no margin. */}
            <FieldSet className="ams-mb-m" legend="Categorie">
              <Checkbox name="categorie" value="Cursussen en trainingen">
                Cursussen en trainingen
              </Checkbox>
              {/* … one Checkbox per category … */}
            </FieldSet>
            {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
            <Button type="submit">Toon activiteiten</Button>
          </form>
        </Grid.Cell>
      </Grid.Subgrid>
      {/*
       * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
       * columns of the page rather than on columns of their own. That is what lines the Cards up with the rest.
       */}
      <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
        {/*
         * The result count takes the width of the results below it, capped at the 7 columns a reading measure takes.
         */}
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 7 }}>
          <Heading className="ams-visually-hidden" level={2}>Zoekresultaten</Heading>
          {/* A polite live region, so a screen reader hears the new total when the search or the filters change. */}
          <Paragraph role="status">{resultsMessage}</Paragraph>
        </Grid.Cell>
        {/*
         * Three columns of the nine the results span, so the Cards tile three to a row on the wide grid.
         * That is narrower than the width at which a Card with an image goes horizontal, so each one stays
         * vertical and its image spans the full width of the Card.
         */}
        <Grid.Cell key="open-dag-stadsarchief" span={{ narrow: 4, medium: 4, wide: 3 }}>
          <Card>
            {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
            <Card.Image alt="" loading="lazy" src="https://picsum.photos/id/1048/640/360" />
            <Card.Content>
              <Card.HeadingGroup>
                <Card.Heading level={3}>
                  <Card.Link href="#">Open dag Stadsarchief Amsterdam</Card.Link>
                </Card.Heading>
                {/* The Metadata carries the facets of the activity, comma separated. */}
                <Metadata size="small">Kunst en cultuur, Centrum</Metadata>
              </Card.HeadingGroup>
              <Column gap="small">
                <Paragraph>Ontdek eeuwenoude kaarten, foto’s en films over Amsterdam.</Paragraph>
                {/* When and where, below the description. A Card takes the small size of Metadata. */}
                <Metadata size="small">
                  {/*
                   * The visible date is prose; dateTime repeats it in the machine-readable format software parses.
                   */}
                  <time dateTime="2026-06-20">20 juni 2026</time>
                  {/* The day, the time and the place are three kinds of metadata, so a Separator sits between them. */}
                  <Metadata.Separator />
                  10.00–16.00 uur
                  <Metadata.Separator />
                  Stadsarchief Amsterdam
                </Metadata>
              </Column>
            </Card.Content>
          </Card>
        </Grid.Cell>
        {/* … one Cell per activity … */}
        {/* The Pagination takes the width of the results above it rather than that of the region. */}
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 9 }}>
          <Pagination
            accessibleNameId="events-pagination"
            linkComponent={PreventNavigationLink}
            linkTemplate={(page) => \`?pagina=\${page}\`}
            page={1}
            totalPages={totalPages}
          />
        </Grid.Cell>
      </Grid.Subgrid>
    </Grid>
  </main>
</>`,language:`tsx`}}},render:()=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(c,{paddingTop:`large`,children:(0,A.jsx)(c.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,A.jsxs)(g,{children:[(0,A.jsx)(g.Link,{href:`#`,children:`Home`}),(0,A.jsx)(g.Link,{href:`#`,children:`Activiteiten`})]})})}),(0,A.jsxs)(`main`,{id:`inhoud`,children:[(0,A.jsx)(c,{paddingBottom:`2x-large`,children:(0,A.jsxs)(c.Cell,{className:`ams-prose`,span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,A.jsx)(i,{level:1,children:`Activiteiten in Amsterdam`}),(0,A.jsx)(r,{size:`large`,children:`Een overzicht van gemeentelijke én maatschappelijke activiteiten voor alle Amsterdammers.`}),(0,A.jsxs)(l,{children:[(0,A.jsx)(l.Input,{label:`Zoek op trefwoord`,name:`trefwoord`,placeholder:`Bijvoorbeeld: zwemles of vergadering`}),(0,A.jsx)(l.Button,{children:`Zoeken`})]})]})}),(0,A.jsxs)(c,{paddingBottom:`2x-large`,children:[(0,A.jsxs)(c.Subgrid,{"aria-labelledby":`events-filters-heading`,as:`aside`,gapVertical:`large`,span:{narrow:4,medium:3,wide:3},children:[(0,A.jsxs)(c.Cell,{span:`all`,children:[(0,A.jsx)(i,{className:`ams-visually-hidden`,id:`events-filters-heading`,level:2,children:`Filteren`}),(0,A.jsx)(m,{accessibleName:`Ga naar een dag met activiteiten`,accessibleNameId:`events-calendar`,defaultMonth:new Date(2026,5,17),linkComponent:F,linkTemplate:e=>`?datum=${P(e)}`})]}),(0,A.jsx)(c.Cell,{span:`all`,children:(0,A.jsx)(`form`,{method:`get`,children:(0,A.jsxs)(u,{children:[(0,A.jsx)(s,{htmlFor:`events-district`,children:`Stadsdeel`}),(0,A.jsxs)(a,{id:`events-district`,name:`stadsdeel`,children:[(0,A.jsx)(a.Option,{value:``,children:`Alle stadsdelen`}),E.map(e=>(0,A.jsx)(a.Option,{value:e,children:e},e))]})]})})}),(0,A.jsx)(c.Cell,{span:`all`,children:(0,A.jsxs)(`form`,{method:`get`,children:[(0,A.jsx)(v,{className:`ams-mb-m`,legend:`Categorie`,children:T.map(e=>(0,A.jsx)(p,{name:`categorie`,value:e,children:e},e))}),(0,A.jsx)(d,{type:`submit`,children:`Toon activiteiten`})]})})]}),(0,A.jsxs)(c.Subgrid,{span:{narrow:4,medium:5,wide:9},start:{narrow:1,medium:4,wide:4},children:[(0,A.jsxs)(c.Cell,{span:{narrow:4,medium:4,wide:7},children:[(0,A.jsx)(i,{className:`ams-visually-hidden`,level:2,children:`Zoekresultaten`}),(0,A.jsx)(r,{role:`status`,children:N})]}),D.map(e=>(0,A.jsx)(c.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,A.jsxs)(f,{children:[(0,A.jsx)(f.Image,{alt:``,loading:`lazy`,src:e.imageSource}),(0,A.jsxs)(f.Content,{children:[(0,A.jsxs)(f.HeadingGroup,{children:[(0,A.jsx)(f.Heading,{level:3,children:(0,A.jsx)(f.Link,{href:e.href,children:e.title})}),(0,A.jsx)(o,{size:`small`,children:`${e.category}, ${e.district}`})]}),(0,A.jsxs)(_,{gap:`small`,children:[(0,A.jsx)(r,{children:e.teaser}),(0,A.jsxs)(o,{size:`small`,children:[(0,A.jsx)(`time`,{dateTime:e.isoDate,children:e.date}),e.timeLabel&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(o.Separator,{}),e.timeLabel]}),(0,A.jsx)(o.Separator,{}),e.venue]})]})]})]})},e.id)),(0,A.jsx)(c.Cell,{span:{narrow:4,medium:4,wide:9},children:(0,A.jsx)(y,{accessibleNameId:`events-pagination`,linkComponent:F,linkTemplate:e=>`?pagina=${e}`,page:1,totalPages:M})})]})]})]})]})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
        <Breadcrumb.Link href="#">Activiteiten</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  <main id="inhoud">
    {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
    {/*
     * Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of
     * 2x-large.
     */}
    <Grid paddingBottom="2x-large">
      {/* ams-prose sets the vertical rhythm between the title, the lead, and the search below it. */}
      <Grid.Cell
        className="ams-prose"
        span={{ narrow: 4, medium: 7, wide: 9 }}
        start={{ narrow: 1, medium: 1, wide: 2 }}
      >
        <Heading level={1}>Activiteiten in Amsterdam</Heading>
        <Paragraph size="large">
          Een overzicht van gemeentelijke én maatschappelijke activiteiten voor alle Amsterdammers.
        </Paragraph>
        {/* Search Field renders its own form with role=search, so it needs no form around it. */}
        <SearchField>
          <SearchField.Input
            label="Zoek op trefwoord"
            name="trefwoord"
            placeholder="Bijvoorbeeld: zwemles of vergadering"
          />
          <SearchField.Button>Zoeken</SearchField.Button>
        </SearchField>
      </Grid.Cell>
    </Grid>
    {/*
     * Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off.
     * The last Grid before the Page Footer takes a paddingBottom of 2x-large.
     */}
    <Grid paddingBottom="2x-large">
      {/*
       * The filter column comes first in source, so it precedes the results in the reading and tab order.
       * It only sits beside them from the medium grid up; on narrow screens it spans the full width above them.
       */}
      {/* A Subgrid rather than a Cell, so every control sits in a Cell of its own and the row gap spaces them. */}
      <Grid.Subgrid
        aria-labelledby="events-filters-heading"
        as="aside"
        gapVertical="large"
        span={{ narrow: 4, medium: 3, wide: 3 }}
      >
        <Grid.Cell span="all">
          <Heading className="ams-visually-hidden" id="events-filters-heading" level={2}>Filteren</Heading>
          {/*
           * The Calendar is date navigation rather than a date input: every day links to the activities on it,
           * which suits someone asking what is on next Saturday.
           */}
          <Calendar
            accessibleName="Ga naar een dag met activiteiten"
            accessibleNameId="events-calendar"
            /*
             * The month the listing starts in. Without it a Calendar opens on the current month, which would
             * put the visual test on a different month every month.
             */
            defaultMonth={new Date(2026, 5, 17)}
            /*
             * Calendar renders plain anchors from linkTemplate; linkComponent lets you pass your router’s link.
             * Here a small wrapper keeps navigation inside Storybook rather than reloading the iframe – see
             * PreventNavigationLink.
             */
            linkComponent={PreventNavigationLink}
            linkTemplate={(date) => \\\`?datum=\\\${formatIsoDate(date)}\\\`}
          />
        </Grid.Cell>
        <Grid.Cell span="all">
          {/* A Cell of its own means a form of its own: a form element cannot span the Cells of a Subgrid. */}
          <form method="get">
            <Field>
              <Label htmlFor="events-district">Stadsdeel</Label>
              <Select id="events-district" name="stadsdeel">
                <Select.Option value="">Alle stadsdelen</Select.Option>
                <Select.Option value="Centrum">Centrum</Select.Option>
                {/* … one Option per district … */}
              </Select>
            </Field>
          </form>
        </Grid.Cell>
        <Grid.Cell span="all">
          <form method="get">
            {/* A Field Set spaces its own children, so the Checkboxes inside one need no margin. */}
            <FieldSet className="ams-mb-m" legend="Categorie">
              <Checkbox name="categorie" value="Cursussen en trainingen">
                Cursussen en trainingen
              </Checkbox>
              {/* … one Checkbox per category … */}
            </FieldSet>
            {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
            <Button type="submit">Toon activiteiten</Button>
          </form>
        </Grid.Cell>
      </Grid.Subgrid>
      {/*
       * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
       * columns of the page rather than on columns of their own. That is what lines the Cards up with the rest.
       */}
      <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
        {/*
         * The result count takes the width of the results below it, capped at the 7 columns a reading measure takes.
         */}
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 7 }}>
          <Heading className="ams-visually-hidden" level={2}>Zoekresultaten</Heading>
          {/* A polite live region, so a screen reader hears the new total when the search or the filters change. */}
          <Paragraph role="status">{resultsMessage}</Paragraph>
        </Grid.Cell>
        {/*
         * On the medium grid a Card takes 4 of the 5 columns of the results region, leaving the last one
         * empty. That is below the width at which a Card with an image goes horizontal, so it stays vertical.
         */}
        <Grid.Cell key="open-dag-stadsarchief" span={{ narrow: 4, medium: 4, wide: 9 }}>
          <Card>
            {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
            <Card.Image alt="" loading="lazy" src="https://picsum.photos/id/1048/640/360" />
            {/* A Card that pairs an image with a Content lays out horizontally in a cell this wide. */}
            <Card.Content>
              <Card.HeadingGroup>
                <Card.Heading level={3}>
                  <Card.Link href="#">Open dag Stadsarchief Amsterdam</Card.Link>
                </Card.Heading>
                {/* The Metadata carries the facets of the activity, comma separated. */}
                <Metadata size="small">Kunst en cultuur, Centrum</Metadata>
              </Card.HeadingGroup>
              <Column gap="small">
                <Paragraph>Ontdek eeuwenoude kaarten, foto’s en films over Amsterdam.</Paragraph>
                {/* When and where, below the description. A Card takes the small size of Metadata. */}
                <Metadata size="small">
                  {/*
                   * The visible date is prose; dateTime repeats it in the machine-readable format software parses.
                   */}
                  <time dateTime="2026-06-20">20 juni 2026</time>
                  {/* The day, the time and the place are three kinds of metadata, so a Separator sits between them. */}
                  <Metadata.Separator />
                  10.00–16.00 uur
                  <Metadata.Separator />
                  Stadsarchief Amsterdam
                </Metadata>
              </Column>
            </Card.Content>
          </Card>
        </Grid.Cell>
        {/* … one Cell per activity … */}
        {/* The Pagination takes the width of the results above it rather than that of the region. */}
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 9 }}>
          <Pagination
            accessibleNameId="events-pagination"
            linkComponent={PreventNavigationLink}
            linkTemplate={(page) => \\\`?pagina=\\\${page}\\\`}
            page={1}
            totalPages={totalPages}
          />
        </Grid.Cell>
      </Grid.Subgrid>
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
            <Breadcrumb.Link href="#">Activiteiten</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <main id="inhoud">
        {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
        {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          {/* ams-prose sets the vertical rhythm between the title, the lead, and the search below it. */}
          <Grid.Cell className="ams-prose" span={{
          narrow: 4,
          medium: 7,
          wide: 9
        }} start={{
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
            <Heading level={1}>Activiteiten in Amsterdam</Heading>
            <Paragraph size="large">
              Een overzicht van gemeentelijke én maatschappelijke activiteiten voor alle Amsterdammers.
            </Paragraph>
            {/* Search Field renders its own form with role=search, so it needs no form around it. */}
            <SearchField>
              <SearchField.Input label="Zoek op trefwoord" name="trefwoord" placeholder="Bijvoorbeeld: zwemles of vergadering" />
              <SearchField.Button>Zoeken</SearchField.Button>
            </SearchField>
          </Grid.Cell>
        </Grid>
        {/*
         * Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off.
         * The last Grid before the Page Footer takes a paddingBottom of 2x-large.
         */}
        <Grid paddingBottom="2x-large">
          {/*
           * The filter column comes first in source, so it precedes the results in the reading and tab order.
           * It only sits beside them from the medium grid up; on narrow screens it spans the full width above them.
           */}
          {/* A Subgrid rather than a Cell, so every control sits in a Cell of its own and the row gap spaces them. */}
          <Grid.Subgrid aria-labelledby="events-filters-heading" as="aside" gapVertical="large" span={{
          narrow: 4,
          medium: 3,
          wide: 3
        }}>
            <Grid.Cell span="all">
              <Heading className="ams-visually-hidden" id="events-filters-heading" level={2}>
                Filteren
              </Heading>
              {/*
               * The Calendar is date navigation rather than a date input: every day links to the activities on it,
               * which suits someone asking what is on next Saturday.
               */}
              <Calendar accessibleName="Ga naar een dag met activiteiten" accessibleNameId="events-calendar"
            /*
             * The month the listing starts in. Without it a Calendar opens on the current month, which would
             * put the visual test on a different month every month.
             */ defaultMonth={new Date(2026, 5, 17)}
            /*
             * Calendar renders plain anchors from linkTemplate; linkComponent lets you pass your router’s link.
             * Here a small wrapper keeps navigation inside Storybook rather than reloading the iframe – see
             * PreventNavigationLink.
             */ linkComponent={PreventNavigationLink} linkTemplate={date => \`?datum=\${formatIsoDate(date)}\`} />
            </Grid.Cell>
            <Grid.Cell span="all">
              {/* A Cell of its own means a form of its own: a form element cannot span the Cells of a Subgrid. */}
              <form method="get">
                <Field>
                  <Label htmlFor="events-district">Stadsdeel</Label>
                  <Select id="events-district" name="stadsdeel">
                    <Select.Option value="">Alle stadsdelen</Select.Option>
                    {eventDistricts.map(district => <Select.Option key={district} value={district}>
                        {district}
                      </Select.Option>)}
                  </Select>
                </Field>
              </form>
            </Grid.Cell>
            <Grid.Cell span="all">
              <form method="get">
                {/* A Field Set spaces its own children, so the Checkboxes inside one need no margin. */}
                <FieldSet className="ams-mb-m" legend="Categorie">
                  {eventCategories.map(category => <Checkbox key={category} name="categorie" value={category}>
                      {category}
                    </Checkbox>)}
                </FieldSet>
                {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
                <Button type="submit">Toon activiteiten</Button>
              </form>
            </Grid.Cell>
          </Grid.Subgrid>
          {/*
           * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
           * columns of the page rather than on columns of their own. That is what lines the Cards up with the rest.
           */}
          <Grid.Subgrid span={{
          narrow: 4,
          medium: 5,
          wide: 9
        }} start={{
          narrow: 1,
          medium: 4,
          wide: 4
        }}>
            {/* The result count takes the width of the results below it, capped at the 7 columns a reading measure takes. */}
            <Grid.Cell span={{
            narrow: 4,
            medium: 4,
            wide: 7
          }}>
              <Heading className="ams-visually-hidden" level={2}>
                Zoekresultaten
              </Heading>
              {/* A polite live region, so a screen reader hears the new total when the search or the filters change. */}
              <Paragraph role="status">{resultsMessage}</Paragraph>
            </Grid.Cell>
            {/*
             * On the medium grid a Card takes 4 of the 5 columns of the results region, leaving the last one
             * empty. That is below the width at which a Card with an image goes horizontal, so it stays vertical.
             */}
            {eventItems.map(event => <Grid.Cell key={event.id} span={{
            narrow: 4,
            medium: 4,
            wide: 9
          }}>
                <Card>
                  {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
                  <Card.Image alt="" loading="lazy" src={event.imageSource} />
                  {/* A Card that pairs an image with a Content lays out horizontally in a cell this wide. */}
                  <Card.Content>
                    <Card.HeadingGroup>
                      <Card.Heading level={3}>
                        <Card.Link href={event.href}>{event.title}</Card.Link>
                      </Card.Heading>
                      {/* The Metadata carries the facets of the activity, comma separated. */}
                      <Metadata size="small">{\`\${event.category}, \${event.district}\`}</Metadata>
                    </Card.HeadingGroup>
                    <Column gap="small">
                      <Paragraph>{event.teaser}</Paragraph>
                      {/* When and where, below the description. A Card takes the small size of Metadata. */}
                      <Metadata size="small">
                        {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                        <time dateTime={event.isoDate}>{event.date}</time>
                        {/* The day, the time and the place are three kinds of metadata, so a Separator sits between them. */}
                        {event.timeLabel && <>
                            <Metadata.Separator />
                            {event.timeLabel}
                          </>}
                        <Metadata.Separator />
                        {event.venue}
                      </Metadata>
                    </Column>
                  </Card.Content>
                </Card>
              </Grid.Cell>)}
            {/* The Pagination takes the width of the results above it rather than that of the region. */}
            <Grid.Cell span={{
            narrow: 4,
            medium: 4,
            wide: 9
          }}>
              <Pagination accessibleNameId="events-pagination" linkComponent={PreventNavigationLink} linkTemplate={page => \`?pagina=\${page}\`} page={1} totalPages={totalPages} />
            </Grid.Cell>
          </Grid.Subgrid>
        </Grid>
      </main>
    </>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
        <Breadcrumb.Link href="#">Activiteiten</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  <main id="inhoud">
    {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
    {/*
     * Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of
     * 2x-large.
     */}
    <Grid paddingBottom="2x-large">
      {/* ams-prose sets the vertical rhythm between the title, the lead, and the search below it. */}
      <Grid.Cell
        className="ams-prose"
        span={{ narrow: 4, medium: 7, wide: 9 }}
        start={{ narrow: 1, medium: 1, wide: 2 }}
      >
        <Heading level={1}>Activiteiten in Amsterdam</Heading>
        <Paragraph size="large">
          Een overzicht van gemeentelijke én maatschappelijke activiteiten voor alle Amsterdammers.
        </Paragraph>
        {/* Search Field renders its own form with role=search, so it needs no form around it. */}
        <SearchField>
          <SearchField.Input
            label="Zoek op trefwoord"
            name="trefwoord"
            placeholder="Bijvoorbeeld: zwemles of vergadering"
          />
          <SearchField.Button>Zoeken</SearchField.Button>
        </SearchField>
      </Grid.Cell>
    </Grid>
    {/*
     * Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off.
     * The last Grid before the Page Footer takes a paddingBottom of 2x-large.
     */}
    <Grid paddingBottom="2x-large">
      {/*
       * The filter column comes first in source, so it precedes the results in the reading and tab order.
       * It only sits beside them from the medium grid up; on narrow screens it spans the full width above them.
       */}
      {/* A Subgrid rather than a Cell, so every control sits in a Cell of its own and the row gap spaces them. */}
      <Grid.Subgrid
        aria-labelledby="events-filters-heading"
        as="aside"
        gapVertical="large"
        span={{ narrow: 4, medium: 3, wide: 3 }}
      >
        <Grid.Cell span="all">
          <Heading className="ams-visually-hidden" id="events-filters-heading" level={2}>Filteren</Heading>
          {/*
           * The Calendar is date navigation rather than a date input: every day links to the activities on it,
           * which suits someone asking what is on next Saturday.
           */}
          <Calendar
            accessibleName="Ga naar een dag met activiteiten"
            accessibleNameId="events-calendar"
            /*
             * The month the listing starts in. Without it a Calendar opens on the current month, which would
             * put the visual test on a different month every month.
             */
            defaultMonth={new Date(2026, 5, 17)}
            /*
             * Calendar renders plain anchors from linkTemplate; linkComponent lets you pass your router’s link.
             * Here a small wrapper keeps navigation inside Storybook rather than reloading the iframe – see
             * PreventNavigationLink.
             */
            linkComponent={PreventNavigationLink}
            linkTemplate={(date) => \\\`?datum=\\\${formatIsoDate(date)}\\\`}
          />
        </Grid.Cell>
        <Grid.Cell span="all">
          {/* A Cell of its own means a form of its own: a form element cannot span the Cells of a Subgrid. */}
          <form method="get">
            <Field>
              <Label htmlFor="events-district">Stadsdeel</Label>
              <Select id="events-district" name="stadsdeel">
                <Select.Option value="">Alle stadsdelen</Select.Option>
                <Select.Option value="Centrum">Centrum</Select.Option>
                {/* … one Option per district … */}
              </Select>
            </Field>
          </form>
        </Grid.Cell>
        <Grid.Cell span="all">
          <form method="get">
            {/* A Field Set spaces its own children, so the Checkboxes inside one need no margin. */}
            <FieldSet className="ams-mb-m" legend="Categorie">
              <Checkbox name="categorie" value="Cursussen en trainingen">
                Cursussen en trainingen
              </Checkbox>
              {/* … one Checkbox per category … */}
            </FieldSet>
            {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
            <Button type="submit">Toon activiteiten</Button>
          </form>
        </Grid.Cell>
      </Grid.Subgrid>
      {/*
       * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
       * columns of the page rather than on columns of their own. That is what lines the Cards up with the rest.
       */}
      <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
        {/*
         * The result count takes the width of the results below it, capped at the 7 columns a reading measure takes.
         */}
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 7 }}>
          <Heading className="ams-visually-hidden" level={2}>Zoekresultaten</Heading>
          {/* A polite live region, so a screen reader hears the new total when the search or the filters change. */}
          <Paragraph role="status">{resultsMessage}</Paragraph>
        </Grid.Cell>
        {/*
         * Three columns of the nine the results span, so the Cards tile three to a row on the wide grid.
         * That is narrower than the width at which a Card with an image goes horizontal, so each one stays
         * vertical and its image spans the full width of the Card.
         */}
        <Grid.Cell key="open-dag-stadsarchief" span={{ narrow: 4, medium: 4, wide: 3 }}>
          <Card>
            {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
            <Card.Image alt="" loading="lazy" src="https://picsum.photos/id/1048/640/360" />
            <Card.Content>
              <Card.HeadingGroup>
                <Card.Heading level={3}>
                  <Card.Link href="#">Open dag Stadsarchief Amsterdam</Card.Link>
                </Card.Heading>
                {/* The Metadata carries the facets of the activity, comma separated. */}
                <Metadata size="small">Kunst en cultuur, Centrum</Metadata>
              </Card.HeadingGroup>
              <Column gap="small">
                <Paragraph>Ontdek eeuwenoude kaarten, foto’s en films over Amsterdam.</Paragraph>
                {/* When and where, below the description. A Card takes the small size of Metadata. */}
                <Metadata size="small">
                  {/*
                   * The visible date is prose; dateTime repeats it in the machine-readable format software parses.
                   */}
                  <time dateTime="2026-06-20">20 juni 2026</time>
                  {/* The day, the time and the place are three kinds of metadata, so a Separator sits between them. */}
                  <Metadata.Separator />
                  10.00–16.00 uur
                  <Metadata.Separator />
                  Stadsarchief Amsterdam
                </Metadata>
              </Column>
            </Card.Content>
          </Card>
        </Grid.Cell>
        {/* … one Cell per activity … */}
        {/* The Pagination takes the width of the results above it rather than that of the region. */}
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 9 }}>
          <Pagination
            accessibleNameId="events-pagination"
            linkComponent={PreventNavigationLink}
            linkTemplate={(page) => \\\`?pagina=\\\${page}\\\`}
            page={1}
            totalPages={totalPages}
          />
        </Grid.Cell>
      </Grid.Subgrid>
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
            <Breadcrumb.Link href="#">Activiteiten</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <main id="inhoud">
        {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
        {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          {/* ams-prose sets the vertical rhythm between the title, the lead, and the search below it. */}
          <Grid.Cell className="ams-prose" span={{
          narrow: 4,
          medium: 7,
          wide: 9
        }} start={{
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
            <Heading level={1}>Activiteiten in Amsterdam</Heading>
            <Paragraph size="large">
              Een overzicht van gemeentelijke én maatschappelijke activiteiten voor alle Amsterdammers.
            </Paragraph>
            {/* Search Field renders its own form with role=search, so it needs no form around it. */}
            <SearchField>
              <SearchField.Input label="Zoek op trefwoord" name="trefwoord" placeholder="Bijvoorbeeld: zwemles of vergadering" />
              <SearchField.Button>Zoeken</SearchField.Button>
            </SearchField>
          </Grid.Cell>
        </Grid>
        {/*
         * Two adjacent Grids add their touching paddings together, so this one leaves its paddingTop off.
         * The last Grid before the Page Footer takes a paddingBottom of 2x-large.
         */}
        <Grid paddingBottom="2x-large">
          {/*
           * The filter column comes first in source, so it precedes the results in the reading and tab order.
           * It only sits beside them from the medium grid up; on narrow screens it spans the full width above them.
           */}
          {/* A Subgrid rather than a Cell, so every control sits in a Cell of its own and the row gap spaces them. */}
          <Grid.Subgrid aria-labelledby="events-filters-heading" as="aside" gapVertical="large" span={{
          narrow: 4,
          medium: 3,
          wide: 3
        }}>
            <Grid.Cell span="all">
              <Heading className="ams-visually-hidden" id="events-filters-heading" level={2}>
                Filteren
              </Heading>
              {/*
               * The Calendar is date navigation rather than a date input: every day links to the activities on it,
               * which suits someone asking what is on next Saturday.
               */}
              <Calendar accessibleName="Ga naar een dag met activiteiten" accessibleNameId="events-calendar"
            /*
             * The month the listing starts in. Without it a Calendar opens on the current month, which would
             * put the visual test on a different month every month.
             */ defaultMonth={new Date(2026, 5, 17)}
            /*
             * Calendar renders plain anchors from linkTemplate; linkComponent lets you pass your router’s link.
             * Here a small wrapper keeps navigation inside Storybook rather than reloading the iframe – see
             * PreventNavigationLink.
             */ linkComponent={PreventNavigationLink} linkTemplate={date => \`?datum=\${formatIsoDate(date)}\`} />
            </Grid.Cell>
            <Grid.Cell span="all">
              {/* A Cell of its own means a form of its own: a form element cannot span the Cells of a Subgrid. */}
              <form method="get">
                <Field>
                  <Label htmlFor="events-district">Stadsdeel</Label>
                  <Select id="events-district" name="stadsdeel">
                    <Select.Option value="">Alle stadsdelen</Select.Option>
                    {eventDistricts.map(district => <Select.Option key={district} value={district}>
                        {district}
                      </Select.Option>)}
                  </Select>
                </Field>
              </form>
            </Grid.Cell>
            <Grid.Cell span="all">
              <form method="get">
                {/* A Field Set spaces its own children, so the Checkboxes inside one need no margin. */}
                <FieldSet className="ams-mb-m" legend="Categorie">
                  {eventCategories.map(category => <Checkbox key={category} name="categorie" value={category}>
                      {category}
                    </Checkbox>)}
                </FieldSet>
                {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
                <Button type="submit">Toon activiteiten</Button>
              </form>
            </Grid.Cell>
          </Grid.Subgrid>
          {/*
           * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
           * columns of the page rather than on columns of their own. That is what lines the Cards up with the rest.
           */}
          <Grid.Subgrid span={{
          narrow: 4,
          medium: 5,
          wide: 9
        }} start={{
          narrow: 1,
          medium: 4,
          wide: 4
        }}>
            {/* The result count takes the width of the results below it, capped at the 7 columns a reading measure takes. */}
            <Grid.Cell span={{
            narrow: 4,
            medium: 4,
            wide: 7
          }}>
              <Heading className="ams-visually-hidden" level={2}>
                Zoekresultaten
              </Heading>
              {/* A polite live region, so a screen reader hears the new total when the search or the filters change. */}
              <Paragraph role="status">{resultsMessage}</Paragraph>
            </Grid.Cell>
            {/*
             * Three columns of the nine the results span, so the Cards tile three to a row on the wide grid.
             * That is narrower than the width at which a Card with an image goes horizontal, so each one stays
             * vertical and its image spans the full width of the Card.
             */}
            {eventItems.map(event => <Grid.Cell key={event.id} span={{
            narrow: 4,
            medium: 4,
            wide: 3
          }}>
                <Card>
                  {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
                  <Card.Image alt="" loading="lazy" src={event.imageSource} />
                  <Card.Content>
                    <Card.HeadingGroup>
                      <Card.Heading level={3}>
                        <Card.Link href={event.href}>{event.title}</Card.Link>
                      </Card.Heading>
                      {/* The Metadata carries the facets of the activity, comma separated. */}
                      <Metadata size="small">{\`\${event.category}, \${event.district}\`}</Metadata>
                    </Card.HeadingGroup>
                    <Column gap="small">
                      <Paragraph>{event.teaser}</Paragraph>
                      {/* When and where, below the description. A Card takes the small size of Metadata. */}
                      <Metadata size="small">
                        {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                        <time dateTime={event.isoDate}>{event.date}</time>
                        {/* The day, the time and the place are three kinds of metadata, so a Separator sits between them. */}
                        {event.timeLabel && <>
                            <Metadata.Separator />
                            {event.timeLabel}
                          </>}
                        <Metadata.Separator />
                        {event.venue}
                      </Metadata>
                    </Column>
                  </Card.Content>
                </Card>
              </Grid.Cell>)}
            {/* The Pagination takes the width of the results above it rather than that of the region. */}
            <Grid.Cell span={{
            narrow: 4,
            medium: 4,
            wide: 9
          }}>
              <Pagination accessibleNameId="events-pagination" linkComponent={PreventNavigationLink} linkTemplate={page => \`?pagina=\${page}\`} page={1} totalPages={totalPages} />
            </Grid.Cell>
          </Grid.Subgrid>
        </Grid>
      </main>
    </>
}`,...R.parameters?.docs?.source}}},z=[`Default`,`CardGrid`]})))()}export{B as n,k as t};