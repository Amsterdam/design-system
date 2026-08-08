import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{G as r,u as i}from"./index.esm-BKoBEYTi.js";import{B as a,C as o,G as s,K as c,P as l,V as u,W as d,X as f,a as p,f as m,k as h,l as g,m as _,p as v,rt as y,s as b,u as x,v as S,w as C,y as w}from"./index.esm-YqlTuiCC.js";import{m as T,s as E}from"./exampleContent-DsZ2XVq0.js";import{n as D,r as O,t as k}from"./commonMeta-H_SzVJ2N.js";var A,j,M;function N(){return(N=e((()=>{T(),A=[`Cursussen en trainingen`,`Diversiteit`,`Duurzaam en milieu`,`Informatie- en participatiebijeenkomsten`,`Kunst en cultuur`,`Ontmoeting, zorg en welzijn`,`Raads- en commissievergaderingen`,`Sport en spel`,`Werk en inkomen`,`Overig`],j=[`Centrum`,`Nieuw-West`,`Noord`,`Oost`,`Stadsgebied Weesp`,`West`,`Zuid`,`Zuidoost`],M=[{title:`Open dag Stadsarchief Amsterdam`,category:`Kunst en cultuur`,date:`20 juni 2026`,district:`Centrum`,href:`#`,id:`open-dag-stadsarchief`,imageSource:E(640,360,0),isoDate:`2026-06-20`,teaser:`Ontdek eeuwenoude kaarten, foto’s en films over Amsterdam en doorzoek het archief met hulp van onze medewerkers.`,timeLabel:`10.00–16.00 uur`,venue:`Stadsarchief Amsterdam`},{title:`Inloopavond herinrichting Jan Evertsenstraat`,category:`Informatie- en participatiebijeenkomsten`,date:`23 juni 2026`,district:`West`,href:`#`,id:`inloopavond-jan-evertsenstraat`,imageSource:E(640,360,1),isoDate:`2026-06-23`,teaser:`Praat mee over de nieuwe inrichting van de straat, met meer ruimte voor groen, fietsers en voetgangers.`,timeLabel:`19.00–21.00 uur`,venue:`Huis van de Wijk De Klinker`},{title:`Commissievergadering Ruimtelijke Ordening`,category:`Raads- en commissievergaderingen`,date:`24 juni 2026`,district:`Centrum`,href:`#`,id:`commissie-ruimtelijke-ordening`,imageSource:E(640,360,2),isoDate:`2026-06-24`,teaser:`Volg het debat van de raadscommissie over ruimtelijke plannen in de stad. De vergadering is openbaar.`,timeLabel:`13.30 uur`,venue:`Stadhuis, Rooseveltzaal`},{title:`Gratis zwemles voor kinderen`,category:`Sport en spel`,date:`27 juni 2026`,district:`Nieuw-West`,href:`#`,id:`gratis-zwemles-ookmeer`,imageSource:E(640,360,3),isoDate:`2026-06-27`,teaser:`Kinderen van 5 tot 10 jaar oefenen spelenderwijs met zwemmen onder begeleiding. Aanmelden is niet nodig.`,timeLabel:`14.00–15.30 uur`,venue:`Sportcentrum Ookmeer`},{title:`Buurtmoestuin: samen zaaien en oogsten`,category:`Duurzaam en milieu`,date:`28 juni 2026`,district:`Noord`,href:`#`,id:`buurtmoestuin-buikslotermeer`,imageSource:E(640,360,4),isoDate:`2026-06-28`,teaser:`Steek de handen uit de mouwen in de buurtmoestuin en neem aan het eind van de ochtend verse groenten mee naar huis.`,timeLabel:`11.00–13.00 uur`,venue:`Buurtmoestuin Buikslotermeer`},{title:`Taalcafé voor nieuwe Amsterdammers`,category:`Diversiteit`,date:`1 juli 2026`,district:`Oost`,href:`#`,id:`taalcafe-javaplein`,imageSource:E(640,360,5),isoDate:`2026-07-01`,teaser:`Oefen op een ontspannen manier Nederlands met vrijwilligers en andere bewoners, onder het genot van een kop koffie.`,timeLabel:`15.00–17.00 uur`,venue:`OBA Javaplein`}]})))()}var P=t({Cards:()=>J,Default:()=>q,NoResults:()=>Y,__namedExportsOrder:()=>X,default:()=>K}),F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;function Z(){return(Z=e((()=>{y(),r(),D(),N(),F=n(),I=132,L=22,R=[`Sport en spel`],z=[`Noord`],B=new Intl.ListFormat(`nl`,{style:`long`,type:`conjunction`}),V=e=>B.format(e.map(e=>`‘${e}’`)),H=`${I} activiteiten gevonden.`,U=`Geen activiteiten gevonden in stadsdeel ${V(z)} met categorie ${V(R)}.`,W=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,G=({onClick:e,...t})=>(0,F.jsx)(`a`,{...t,onClick:t=>{t.preventDefault(),e?.(t)}}),K={...k,title:`Pages/Public/Events Overview Page`,parameters:O(`Indexes activities a visitor narrows down by date as well as by subject: a city events calendar, a course programme, a schedule of public meetings.`)},q={parameters:{docs:{source:{code:`<>
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
                  , 10.00–16.00 uur · Stadsarchief Amsterdam
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
</>`,language:`tsx`}}},render:()=>(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(o,{paddingTop:`large`,children:(0,F.jsx)(o.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,F.jsxs)(b,{children:[(0,F.jsx)(b.Link,{href:`#`,children:`Home`}),(0,F.jsx)(b.Link,{href:`#`,children:`Activiteiten`})]})})}),(0,F.jsxs)(`main`,{id:`inhoud`,children:[(0,F.jsx)(o,{paddingBottom:`2x-large`,children:(0,F.jsxs)(o.Cell,{className:`ams-prose`,span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,F.jsx)(C,{level:1,children:`Activiteiten in Amsterdam`}),(0,F.jsx)(u,{size:`large`,children:`Een overzicht van gemeentelijke én maatschappelijke activiteiten voor alle Amsterdammers.`}),(0,F.jsxs)(s,{children:[(0,F.jsx)(s.Input,{label:`Zoek op trefwoord`,name:`trefwoord`,placeholder:`Bijvoorbeeld: zwemles of vergadering`}),(0,F.jsx)(s.Button,{children:`Zoeken`})]})]})}),(0,F.jsxs)(o,{paddingBottom:`2x-large`,children:[(0,F.jsxs)(o.Subgrid,{"aria-labelledby":`events-filters-heading`,as:`aside`,gapVertical:`large`,span:{narrow:4,medium:3,wide:3},children:[(0,F.jsxs)(o.Cell,{span:`all`,children:[(0,F.jsx)(C,{className:`ams-visually-hidden`,id:`events-filters-heading`,level:2,children:`Filteren`}),(0,F.jsx)(x,{accessibleName:`Ga naar een dag met activiteiten`,accessibleNameId:`events-calendar`,defaultMonth:new Date(2026,5,17),linkComponent:G,linkTemplate:e=>`?datum=${W(e)}`})]}),(0,F.jsx)(o.Cell,{span:`all`,children:(0,F.jsx)(`form`,{method:`get`,children:(0,F.jsxs)(S,{children:[(0,F.jsx)(h,{htmlFor:`events-district`,children:`Stadsdeel`}),(0,F.jsxs)(c,{id:`events-district`,name:`stadsdeel`,children:[(0,F.jsx)(c.Option,{value:``,children:`Alle stadsdelen`}),j.map(e=>(0,F.jsx)(c.Option,{value:e,children:e},e))]})]})})}),(0,F.jsx)(o.Cell,{span:`all`,children:(0,F.jsxs)(`form`,{method:`get`,children:[(0,F.jsx)(w,{className:`ams-mb-m`,legend:`Categorie`,children:A.map(e=>(0,F.jsx)(v,{name:`categorie`,value:e,children:e},e))}),(0,F.jsx)(g,{type:`submit`,children:`Toon activiteiten`})]})})]}),(0,F.jsxs)(o.Subgrid,{span:{narrow:4,medium:5,wide:9},start:{narrow:1,medium:4,wide:4},children:[(0,F.jsxs)(o.Cell,{span:{narrow:4,medium:4,wide:7},children:[(0,F.jsx)(C,{className:`ams-visually-hidden`,level:2,children:`Zoekresultaten`}),(0,F.jsx)(u,{role:`status`,children:H})]}),M.map(e=>(0,F.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:9},children:(0,F.jsxs)(m,{children:[(0,F.jsx)(m.Image,{alt:``,loading:`lazy`,src:e.imageSource}),(0,F.jsxs)(m.Content,{children:[(0,F.jsxs)(m.HeadingGroup,{children:[(0,F.jsx)(m.Heading,{level:3,children:(0,F.jsx)(m.Link,{href:e.href,children:e.title})}),(0,F.jsx)(l,{size:`small`,children:`${e.category}, ${e.district}`})]}),(0,F.jsxs)(_,{gap:`small`,children:[(0,F.jsx)(u,{children:e.teaser}),(0,F.jsxs)(l,{size:`small`,children:[(0,F.jsx)(`time`,{dateTime:e.isoDate,children:e.date}),e.timeLabel?`, ${e.timeLabel}`:``,` · `,e.venue]})]})]})]})},e.id)),(0,F.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:9},children:(0,F.jsx)(a,{accessibleNameId:`events-pagination`,linkComponent:G,linkTemplate:e=>`?pagina=${e}`,page:1,totalPages:L})})]})]})]})]})},J={parameters:{docs:{source:{code:`<>
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
                  , 10.00–16.00 uur · Stadsarchief Amsterdam
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
</>`,language:`tsx`}}},render:()=>(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(o,{paddingTop:`large`,children:(0,F.jsx)(o.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,F.jsxs)(b,{children:[(0,F.jsx)(b.Link,{href:`#`,children:`Home`}),(0,F.jsx)(b.Link,{href:`#`,children:`Activiteiten`})]})})}),(0,F.jsxs)(`main`,{id:`inhoud`,children:[(0,F.jsx)(o,{paddingBottom:`2x-large`,children:(0,F.jsxs)(o.Cell,{className:`ams-prose`,span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,F.jsx)(C,{level:1,children:`Activiteiten in Amsterdam`}),(0,F.jsx)(u,{size:`large`,children:`Een overzicht van gemeentelijke én maatschappelijke activiteiten voor alle Amsterdammers.`}),(0,F.jsxs)(s,{children:[(0,F.jsx)(s.Input,{label:`Zoek op trefwoord`,name:`trefwoord`,placeholder:`Bijvoorbeeld: zwemles of vergadering`}),(0,F.jsx)(s.Button,{children:`Zoeken`})]})]})}),(0,F.jsxs)(o,{paddingBottom:`2x-large`,children:[(0,F.jsxs)(o.Subgrid,{"aria-labelledby":`events-filters-heading`,as:`aside`,gapVertical:`large`,span:{narrow:4,medium:3,wide:3},children:[(0,F.jsxs)(o.Cell,{span:`all`,children:[(0,F.jsx)(C,{className:`ams-visually-hidden`,id:`events-filters-heading`,level:2,children:`Filteren`}),(0,F.jsx)(x,{accessibleName:`Ga naar een dag met activiteiten`,accessibleNameId:`events-calendar`,defaultMonth:new Date(2026,5,17),linkComponent:G,linkTemplate:e=>`?datum=${W(e)}`})]}),(0,F.jsx)(o.Cell,{span:`all`,children:(0,F.jsx)(`form`,{method:`get`,children:(0,F.jsxs)(S,{children:[(0,F.jsx)(h,{htmlFor:`events-district`,children:`Stadsdeel`}),(0,F.jsxs)(c,{id:`events-district`,name:`stadsdeel`,children:[(0,F.jsx)(c.Option,{value:``,children:`Alle stadsdelen`}),j.map(e=>(0,F.jsx)(c.Option,{value:e,children:e},e))]})]})})}),(0,F.jsx)(o.Cell,{span:`all`,children:(0,F.jsxs)(`form`,{method:`get`,children:[(0,F.jsx)(w,{className:`ams-mb-m`,legend:`Categorie`,children:A.map(e=>(0,F.jsx)(v,{name:`categorie`,value:e,children:e},e))}),(0,F.jsx)(g,{type:`submit`,children:`Toon activiteiten`})]})})]}),(0,F.jsxs)(o.Subgrid,{span:{narrow:4,medium:5,wide:9},start:{narrow:1,medium:4,wide:4},children:[(0,F.jsxs)(o.Cell,{span:{narrow:4,medium:4,wide:7},children:[(0,F.jsx)(C,{className:`ams-visually-hidden`,level:2,children:`Zoekresultaten`}),(0,F.jsx)(u,{role:`status`,children:H})]}),M.map(e=>(0,F.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:3},children:(0,F.jsxs)(m,{children:[(0,F.jsx)(m.Image,{alt:``,loading:`lazy`,src:e.imageSource}),(0,F.jsxs)(m.Content,{children:[(0,F.jsxs)(m.HeadingGroup,{children:[(0,F.jsx)(m.Heading,{level:3,children:(0,F.jsx)(m.Link,{href:e.href,children:e.title})}),(0,F.jsx)(l,{size:`small`,children:`${e.category}, ${e.district}`})]}),(0,F.jsxs)(_,{gap:`small`,children:[(0,F.jsx)(u,{children:e.teaser}),(0,F.jsxs)(l,{size:`small`,children:[(0,F.jsx)(`time`,{dateTime:e.isoDate,children:e.date}),e.timeLabel?`, ${e.timeLabel}`:``,` · `,e.venue]})]})]})]})},e.id)),(0,F.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:9},children:(0,F.jsx)(a,{accessibleNameId:`events-pagination`,linkComponent:G,linkTemplate:e=>`?pagina=${e}`,page:1,totalPages:L})})]})]})]})]})},Y={parameters:{docs:{source:{code:`<>
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
              <Select defaultValue="Noord" id="events-district" name="stadsdeel">
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
              <Checkbox defaultChecked name="categorie" value="Sport en spel">
                Sport en spel
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
          <Paragraph className="ams-mb-m" role="status">
            {noResultsMessage}
          </Paragraph>
          {/*
           * The filters that produced the empty result, named again beside the sentence above so they can be
           * read and cleared without going back up the filter column.
           */}
          <Row alignVertical="center" aria-label="Actieve filters" as="section" gap="x-small" wrap>
            {selectedDistricts.map((district) => (
              <Badge key={district} label={\`Stadsdeel: \${district}\`} />
            ))}
            {selectedCategories.map((category) => (
              <Badge key={category} label={\`Categorie: \${category}\`} />
            ))}
            <StandaloneLink href="#" icon={CloseIcon}>
              Wis alle filters
            </StandaloneLink>
          </Row>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 7 }}>
          <Paragraph>
            Er zijn geen activiteiten die voldoen aan uw filters. Probeer een ruimere periode, of kies een ander
            stadsdeel of een andere categorie.
          </Paragraph>
        </Grid.Cell>
      </Grid.Subgrid>
    </Grid>
  </main>
</>`,language:`tsx`}}},render:()=>(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(o,{paddingTop:`large`,children:(0,F.jsx)(o.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,F.jsxs)(b,{children:[(0,F.jsx)(b.Link,{href:`#`,children:`Home`}),(0,F.jsx)(b.Link,{href:`#`,children:`Activiteiten`})]})})}),(0,F.jsxs)(`main`,{id:`inhoud`,children:[(0,F.jsx)(o,{paddingBottom:`2x-large`,children:(0,F.jsxs)(o.Cell,{className:`ams-prose`,span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,F.jsx)(C,{level:1,children:`Activiteiten in Amsterdam`}),(0,F.jsx)(u,{size:`large`,children:`Een overzicht van gemeentelijke én maatschappelijke activiteiten voor alle Amsterdammers.`}),(0,F.jsxs)(s,{children:[(0,F.jsx)(s.Input,{label:`Zoek op trefwoord`,name:`trefwoord`,placeholder:`Bijvoorbeeld: zwemles of vergadering`}),(0,F.jsx)(s.Button,{children:`Zoeken`})]})]})}),(0,F.jsxs)(o,{paddingBottom:`2x-large`,children:[(0,F.jsxs)(o.Subgrid,{"aria-labelledby":`events-filters-heading`,as:`aside`,gapVertical:`large`,span:{narrow:4,medium:3,wide:3},children:[(0,F.jsxs)(o.Cell,{span:`all`,children:[(0,F.jsx)(C,{className:`ams-visually-hidden`,id:`events-filters-heading`,level:2,children:`Filteren`}),(0,F.jsx)(x,{accessibleName:`Ga naar een dag met activiteiten`,accessibleNameId:`events-calendar`,defaultMonth:new Date(2026,5,17),linkComponent:G,linkTemplate:e=>`?datum=${W(e)}`})]}),(0,F.jsx)(o.Cell,{span:`all`,children:(0,F.jsx)(`form`,{method:`get`,children:(0,F.jsxs)(S,{children:[(0,F.jsx)(h,{htmlFor:`events-district`,children:`Stadsdeel`}),(0,F.jsxs)(c,{defaultValue:`Noord`,id:`events-district`,name:`stadsdeel`,children:[(0,F.jsx)(c.Option,{value:``,children:`Alle stadsdelen`}),j.map(e=>(0,F.jsx)(c.Option,{value:e,children:e},e))]})]})})}),(0,F.jsx)(o.Cell,{span:`all`,children:(0,F.jsxs)(`form`,{method:`get`,children:[(0,F.jsx)(w,{className:`ams-mb-m`,legend:`Categorie`,children:A.map(e=>(0,F.jsx)(v,{defaultChecked:R.includes(e),name:`categorie`,value:e,children:e},e))}),(0,F.jsx)(g,{type:`submit`,children:`Toon activiteiten`})]})})]}),(0,F.jsxs)(o.Subgrid,{span:{narrow:4,medium:5,wide:9},start:{narrow:1,medium:4,wide:4},children:[(0,F.jsxs)(o.Cell,{span:{narrow:4,medium:4,wide:7},children:[(0,F.jsx)(C,{className:`ams-visually-hidden`,level:2,children:`Zoekresultaten`}),(0,F.jsx)(u,{className:`ams-mb-m`,role:`status`,children:U}),(0,F.jsxs)(d,{alignVertical:`center`,"aria-label":`Actieve filters`,as:`section`,gap:`x-small`,wrap:!0,children:[z.map(e=>(0,F.jsx)(p,{label:`Stadsdeel: ${e}`},e)),R.map(e=>(0,F.jsx)(p,{label:`Categorie: ${e}`},e)),(0,F.jsx)(f,{href:`#`,icon:i,children:`Wis alle filters`})]})]}),(0,F.jsx)(o.Cell,{span:{narrow:4,medium:4,wide:7},children:(0,F.jsx)(u,{children:`Er zijn geen activiteiten die voldoen aan uw filters. Probeer een ruimere periode, of kies een ander stadsdeel of een andere categorie.`})})]})]})]})]})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
                  , 10.00–16.00 uur · Stadsarchief Amsterdam
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
                        {event.timeLabel ? \`, \${event.timeLabel}\` : ''} · {event.venue}
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
                  , 10.00–16.00 uur · Stadsarchief Amsterdam
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
                        {event.timeLabel ? \`, \${event.timeLabel}\` : ''} · {event.venue}
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
              <Select defaultValue="Noord" id="events-district" name="stadsdeel">
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
              <Checkbox defaultChecked name="categorie" value="Sport en spel">
                Sport en spel
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
          <Paragraph className="ams-mb-m" role="status">
            {noResultsMessage}
          </Paragraph>
          {/*
           * The filters that produced the empty result, named again beside the sentence above so they can be
           * read and cleared without going back up the filter column.
           */}
          <Row alignVertical="center" aria-label="Actieve filters" as="section" gap="x-small" wrap>
            {selectedDistricts.map((district) => (
              <Badge key={district} label={\\\`Stadsdeel: \\\${district}\\\`} />
            ))}
            {selectedCategories.map((category) => (
              <Badge key={category} label={\\\`Categorie: \\\${category}\\\`} />
            ))}
            <StandaloneLink href="#" icon={CloseIcon}>
              Wis alle filters
            </StandaloneLink>
          </Row>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 7 }}>
          <Paragraph>
            Er zijn geen activiteiten die voldoen aan uw filters. Probeer een ruimere periode, of kies een ander
            stadsdeel of een andere categorie.
          </Paragraph>
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
                  <Select defaultValue="Noord" id="events-district" name="stadsdeel">
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
                  {eventCategories.map(category => <Checkbox defaultChecked={selectedCategories.includes(category)} key={category} name="categorie" value={category}>
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
              <Paragraph className="ams-mb-m" role="status">
                {noResultsMessage}
              </Paragraph>
              {/*
               * The filters that produced the empty result, named again beside the sentence above so they can be
               * read and cleared without going back up the filter column.
               */}
              <Row alignVertical="center" aria-label="Actieve filters" as="section" gap="x-small" wrap>
                {selectedDistricts.map(district => <Badge key={district} label={\`Stadsdeel: \${district}\`} />)}
                {selectedCategories.map(category => <Badge key={category} label={\`Categorie: \${category}\`} />)}
                <StandaloneLink href="#" icon={CloseIcon}>
                  Wis alle filters
                </StandaloneLink>
              </Row>
            </Grid.Cell>
            <Grid.Cell span={{
            narrow: 4,
            medium: 4,
            wide: 7
          }}>
              <Paragraph>
                Er zijn geen activiteiten die voldoen aan uw filters. Probeer een ruimere periode, of kies een ander
                stadsdeel of een andere categorie.
              </Paragraph>
            </Grid.Cell>
          </Grid.Subgrid>
        </Grid>
      </main>
    </>
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`Cards`,`NoResults`]})))()}export{Z as n,P as t};