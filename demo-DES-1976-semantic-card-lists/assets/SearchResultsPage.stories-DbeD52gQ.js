import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{$ as r,D as i,H as a,I as o,L as s,S as c,V as l,_ as u,c as d,d as f,f as p,g as m,o as h,u as g,x as _}from"./index.esm-Bj9mh-oy.js";import{n as v,r as y,t as b}from"./commonMeta-QArnXOc7.js";var x,S;function C(){return(C=e((()=>{x=[`Nieuwsbericht`,`Beleid en regels`,`Product of dienst`],S=[{title:`Top 400/600`,date:`1 juli 2023`,id:`top400-600`,isoDate:`2023-07-01`,section:`Actiecentrum Veiligheid en Zorg`,teaser:`Om de stad veiliger te maken coördineert de gemeente, samen met haar maatschappelijke partners, vanuit het Actiecentrum Veiligheid en Zorg verschillende aanpakken op het snijvlak van veiligheid, zorg en het sociaal domein.`},{title:`Treiteraanpak bij ernstige overlast in de buurt`,date:`24 juni 2023`,id:`treiteraanpak`,isoDate:`2023-06-24`,section:`Actiecentrum Veiligheid en Zorg`,teaser:`Bewoners die stelselmatig worden lastiggevallen door buurtgenoten kunnen een melding doen. De gemeente, de politie en de woningcorporatie bekijken samen welke maatregelen nodig zijn.`},{title:`Keurmerk Veilig Ondernemen aanvragen`,date:`19 juni 2023`,id:`veilig-ondernemen`,isoDate:`2023-06-19`,section:`Ondernemen`,teaser:`Ondernemers in winkelgebieden kunnen meedoen aan het Keurmerk Veilig Ondernemen. Deelnemers maken samen met de politie en de brandweer afspraken over veiligheid op straat.`},{title:`Een buurtpreventieteam beginnen`,date:`12 juni 2023`,id:`buurtpreventie`,isoDate:`2023-06-12`,section:`Wonen en leefomgeving`,teaser:`Een buurtpreventieteam bestaat uit bewoners die samen met de wijkagent letten op wat er in de straat gebeurt. De gemeente ondersteunt nieuwe teams met training en materiaal.`},{title:`Cameratoezicht in de openbare ruimte`,date:`5 juni 2023`,id:`cameratoezicht`,isoDate:`2023-06-05`,section:`Beleid en regels`,teaser:`De burgemeester kan cameratoezicht instellen op plekken waar de openbare orde structureel onder druk staat. De beelden worden na 28 dagen verwijderd.`},{title:`Meldpunt Zorg en Woonoverlast`,date:`30 mei 2023`,id:`meldpunt-zorg`,isoDate:`2023-05-30`,section:`Zorg en ondersteuning`,teaser:`Maakt u zich zorgen over een buurtgenoot die verward gedrag vertoont? Bij Meldpunt Zorg en Woonoverlast kunt u dat melden, ook anoniem.`}]})))()}var w=t({Default:()=>A,__namedExportsOrder:()=>j,default:()=>k}),T,E,D,O,k,A,j;function M(){return(M=e((()=>{r(),v(),C(),T=n(),E=`veiligheid`,D=62,O=8,k={...b,title:`Pages/Public/Search Results Page`,parameters:y(`Presents what a visitor finds after searching the site: a column of filters beside the results, with the term still in the field so the search can be refined.`)},A={parameters:{docs:{source:{code:`<>
  {/* Keep the breadcrumb in its own Grid above <main>, so it sits outside the main content region. */}
  <Grid paddingTop="large">
    <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  <main id="inhoud">
    {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
    {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      {/* ams-prose sets the vertical rhythm between the title and the search field. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Zoeken</Heading>
        {/* Search Field renders its own form with role=search, so it needs no form around it. */}
        <SearchField>
          <SearchField.Input defaultValue="veiligheid" label="Zoek op amsterdam.nl" name="trefwoord" />
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
      <Grid.Cell aria-labelledby="sorteren-en-filteren" as="aside" span={{ narrow: 4, medium: 3, wide: 3 }}>
        <Heading className="ams-visually-hidden" id="sorteren-en-filteren" level={2}>
          Sorteren en filteren
        </Heading>
        <form method="get">
          <Field className="ams-mb-l">
            <Label htmlFor="sorteren">Sorteren</Label>
            <Select id="sorteren" name="sorteren">
              <Select.Option value="relevantie">Op relevantie</Select.Option>
              <Select.Option value="nieuwste">Nieuwste eerst</Select.Option>
            </Select>
          </Field>
          <FieldSet className="ams-mb-l" legend="Soort artikel">
            <Column gap="x-small">
              <Checkbox name="soort" value="nieuwsbericht">
                Nieuwsbericht
              </Checkbox>
              {/* … one Checkbox per topic … */}
            </Column>
          </FieldSet>
          {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
          <Button type="submit">Resultaten tonen</Button>
        </form>
      </Grid.Cell>
      {/*
       * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
       * columns of the page rather than on columns of their own.
       */}
      <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
        {/* Prose takes at most 7 of the 12 columns, so on the wide grid these Cells stop short of the 9 beside the filters. */}
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
          <Heading className="ams-visually-hidden" level={2}>
            Zoekresultaten
          </Heading>
          {/* A polite live region, so a screen reader hears the new total when the search or the filters change. */}
          <Paragraph role="status">62 resultaten gevonden voor ‘veiligheid’</Paragraph>
        </Grid.Cell>
        {/*
         * The results are a list, so they get a Subgrid of their own: a ul with every Cell in it an li.
         * The result count above and the Pagination below stay outside it; neither is one of the results.
         * A Subgrid inside a Subgrid still hands down the columns of the page, and takes the same row gap.
         */}
        <Grid.Subgrid as="ul" span="all">
          <Grid.Cell as="li" span={{ narrow: 4, medium: 5, wide: 7 }}>
            {/* A search result has no image, so this Card needs no Card Content and stays vertical at any width. */}
            <Card>
              <Card.HeadingGroup tagline="Actiecentrum Veiligheid en Zorg">
                <Card.Heading level={3}>
                  <Card.Link href="#">Top 400/600</Card.Link>
                </Card.Heading>
              </Card.HeadingGroup>
              <Column gap="small">
                <Paragraph>
                  Om de stad veiliger te maken coördineert de gemeente, samen met haar maatschappelijke partners,
                  vanuit het Actiecentrum Veiligheid en Zorg verschillende aanpakken op het snijvlak van veiligheid,
                  zorg en het sociaal domein.
                </Paragraph>
                <Paragraph size="small">
                  {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                  <time dateTime="2023-07-01">1 juli 2023</time>
                </Paragraph>
              </Column>
            </Card>
          </Grid.Cell>
          {/* … one Cell per result … */}
        </Grid.Subgrid>
        {/* The Pagination takes the width of the results above it rather than that of the region. */}
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
          <Pagination accessibleNameId="paginering" linkTemplate={(page) => \`?pagina=\${page}\`} page={1} totalPages={8} />
        </Grid.Cell>
      </Grid.Subgrid>
    </Grid>
  </main>
</>`,language:`tsx`}}},render:()=>(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(_,{paddingTop:`large`,children:(0,T.jsx)(_.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,T.jsx)(h,{children:(0,T.jsx)(h.Link,{href:`#`,children:`Home`})})})}),(0,T.jsxs)(`main`,{id:`inhoud`,children:[(0,T.jsx)(_,{paddingBottom:`2x-large`,children:(0,T.jsxs)(_.Cell,{className:`ams-prose`,span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,T.jsx)(c,{level:1,children:`Zoeken`}),(0,T.jsxs)(l,{children:[(0,T.jsx)(l.Input,{defaultValue:E,label:`Zoek op amsterdam.nl`,name:`trefwoord`}),(0,T.jsx)(l.Button,{children:`Zoeken`})]})]})}),(0,T.jsxs)(_,{paddingBottom:`2x-large`,children:[(0,T.jsxs)(_.Cell,{"aria-labelledby":`sorteren-en-filteren`,as:`aside`,span:{narrow:4,medium:3,wide:3},children:[(0,T.jsx)(c,{className:`ams-visually-hidden`,id:`sorteren-en-filteren`,level:2,children:`Sorteren en filteren`}),(0,T.jsxs)(`form`,{method:`get`,children:[(0,T.jsxs)(m,{className:`ams-mb-l`,children:[(0,T.jsx)(i,{htmlFor:`sorteren`,children:`Sorteren`}),(0,T.jsxs)(a,{id:`sorteren`,name:`sorteren`,children:[(0,T.jsx)(a.Option,{value:`relevantie`,children:`Op relevantie`}),(0,T.jsx)(a.Option,{value:`nieuwste`,children:`Nieuwste eerst`})]})]}),(0,T.jsx)(u,{className:`ams-mb-l`,legend:`Soort artikel`,children:(0,T.jsx)(p,{gap:`x-small`,children:x.map(e=>(0,T.jsx)(f,{name:`soort`,value:e.toLowerCase(),children:e},e))})}),(0,T.jsx)(d,{type:`submit`,children:`Resultaten tonen`})]})]}),(0,T.jsxs)(_.Subgrid,{span:{narrow:4,medium:5,wide:9},start:{narrow:1,medium:4,wide:4},children:[(0,T.jsxs)(_.Cell,{span:{narrow:4,medium:5,wide:7},children:[(0,T.jsx)(c,{className:`ams-visually-hidden`,level:2,children:`Zoekresultaten`}),(0,T.jsxs)(s,{role:`status`,children:[D,` resultaten gevonden voor ‘`,E,`’`]})]}),(0,T.jsx)(_.Subgrid,{as:`ul`,span:`all`,children:S.map(e=>(0,T.jsx)(_.Cell,{as:`li`,span:{narrow:4,medium:5,wide:7},children:(0,T.jsxs)(g,{children:[(0,T.jsx)(g.HeadingGroup,{tagline:e.section,children:(0,T.jsx)(g.Heading,{level:3,children:(0,T.jsx)(g.Link,{href:`#`,children:e.title})})}),(0,T.jsxs)(p,{gap:`small`,children:[(0,T.jsx)(s,{children:e.teaser}),(0,T.jsx)(s,{size:`small`,children:(0,T.jsx)(`time`,{dateTime:e.isoDate,children:e.date})})]})]})},e.id))}),(0,T.jsx)(_.Cell,{span:{narrow:4,medium:5,wide:7},children:(0,T.jsx)(o,{accessibleNameId:`paginering`,linkTemplate:e=>`?pagina=${e}`,page:1,totalPages:O})})]})]})]})]})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
  <main id="inhoud">
    {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
    {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
    <Grid paddingBottom="2x-large">
      {/* ams-prose sets the vertical rhythm between the title and the search field. */}
      <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
        <Heading level={1}>Zoeken</Heading>
        {/* Search Field renders its own form with role=search, so it needs no form around it. */}
        <SearchField>
          <SearchField.Input defaultValue="veiligheid" label="Zoek op amsterdam.nl" name="trefwoord" />
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
      <Grid.Cell aria-labelledby="sorteren-en-filteren" as="aside" span={{ narrow: 4, medium: 3, wide: 3 }}>
        <Heading className="ams-visually-hidden" id="sorteren-en-filteren" level={2}>
          Sorteren en filteren
        </Heading>
        <form method="get">
          <Field className="ams-mb-l">
            <Label htmlFor="sorteren">Sorteren</Label>
            <Select id="sorteren" name="sorteren">
              <Select.Option value="relevantie">Op relevantie</Select.Option>
              <Select.Option value="nieuwste">Nieuwste eerst</Select.Option>
            </Select>
          </Field>
          <FieldSet className="ams-mb-l" legend="Soort artikel">
            <Column gap="x-small">
              <Checkbox name="soort" value="nieuwsbericht">
                Nieuwsbericht
              </Checkbox>
              {/* … one Checkbox per topic … */}
            </Column>
          </FieldSet>
          {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
          <Button type="submit">Resultaten tonen</Button>
        </form>
      </Grid.Cell>
      {/*
       * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
       * columns of the page rather than on columns of their own.
       */}
      <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
        {/* Prose takes at most 7 of the 12 columns, so on the wide grid these Cells stop short of the 9 beside the filters. */}
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
          <Heading className="ams-visually-hidden" level={2}>
            Zoekresultaten
          </Heading>
          {/* A polite live region, so a screen reader hears the new total when the search or the filters change. */}
          <Paragraph role="status">62 resultaten gevonden voor ‘veiligheid’</Paragraph>
        </Grid.Cell>
        {/*
         * The results are a list, so they get a Subgrid of their own: a ul with every Cell in it an li.
         * The result count above and the Pagination below stay outside it; neither is one of the results.
         * A Subgrid inside a Subgrid still hands down the columns of the page, and takes the same row gap.
         */}
        <Grid.Subgrid as="ul" span="all">
          <Grid.Cell as="li" span={{ narrow: 4, medium: 5, wide: 7 }}>
            {/* A search result has no image, so this Card needs no Card Content and stays vertical at any width. */}
            <Card>
              <Card.HeadingGroup tagline="Actiecentrum Veiligheid en Zorg">
                <Card.Heading level={3}>
                  <Card.Link href="#">Top 400/600</Card.Link>
                </Card.Heading>
              </Card.HeadingGroup>
              <Column gap="small">
                <Paragraph>
                  Om de stad veiliger te maken coördineert de gemeente, samen met haar maatschappelijke partners,
                  vanuit het Actiecentrum Veiligheid en Zorg verschillende aanpakken op het snijvlak van veiligheid,
                  zorg en het sociaal domein.
                </Paragraph>
                <Paragraph size="small">
                  {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                  <time dateTime="2023-07-01">1 juli 2023</time>
                </Paragraph>
              </Column>
            </Card>
          </Grid.Cell>
          {/* … one Cell per result … */}
        </Grid.Subgrid>
        {/* The Pagination takes the width of the results above it rather than that of the region. */}
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
          <Pagination accessibleNameId="paginering" linkTemplate={(page) => \\\`?pagina=\\\${page}\\\`} page={1} totalPages={8} />
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
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <main id="inhoud">
        {/* The Grid after the Breadcrumb has no paddingTop, so the breadcrumb and the page title read as one block. */}
        {/* Both this Grid and the one below it have the default background colour, so this Grid takes a paddingBottom of 2x-large. */}
        <Grid paddingBottom="2x-large">
          {/* ams-prose sets the vertical rhythm between the title and the search field. */}
          <Grid.Cell className="ams-prose" span={{
          narrow: 4,
          medium: 7,
          wide: 9
        }} start={{
          narrow: 1,
          medium: 1,
          wide: 2
        }}>
            <Heading level={1}>Zoeken</Heading>
            {/* Search Field renders its own form with role=search, so it needs no form around it. */}
            <SearchField>
              <SearchField.Input defaultValue={searchTerm} label="Zoek op amsterdam.nl" name="trefwoord" />
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
          <Grid.Cell aria-labelledby="sorteren-en-filteren" as="aside" span={{
          narrow: 4,
          medium: 3,
          wide: 3
        }}>
            <Heading className="ams-visually-hidden" id="sorteren-en-filteren" level={2}>
              Sorteren en filteren
            </Heading>
            <form method="get">
              <Field className="ams-mb-l">
                <Label htmlFor="sorteren">Sorteren</Label>
                <Select id="sorteren" name="sorteren">
                  <Select.Option value="relevantie">Op relevantie</Select.Option>
                  <Select.Option value="nieuwste">Nieuwste eerst</Select.Option>
                </Select>
              </Field>
              <FieldSet className="ams-mb-l" legend="Soort artikel">
                <Column gap="x-small">
                  {searchTopics.map(topic => <Checkbox key={topic} name="soort" value={topic.toLowerCase()}>
                      {topic}
                    </Checkbox>)}
                </Column>
              </FieldSet>
              {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
              <Button type="submit">Resultaten tonen</Button>
            </form>
          </Grid.Cell>
          {/*
           * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
           * columns of the page rather than on columns of their own.
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
            {/* Prose takes at most 7 of the 12 columns, so on the wide grid these Cells stop short of the 9 beside the filters. */}
            <Grid.Cell span={{
            narrow: 4,
            medium: 5,
            wide: 7
          }}>
              <Heading className="ams-visually-hidden" level={2}>
                Zoekresultaten
              </Heading>
              {/* A polite live region, so a screen reader hears the new total when the search or the filters change. */}
              <Paragraph role="status">
                {totalResults} resultaten gevonden voor ‘{searchTerm}’
              </Paragraph>
            </Grid.Cell>
            {/*
             * The results are a list, so they get a Subgrid of their own: a ul with every Cell in it an li.
             * The result count above and the Pagination below stay outside it; neither is one of the results.
             * A Subgrid inside a Subgrid still hands down the columns of the page, and takes the same row gap.
             */}
            <Grid.Subgrid as="ul" span="all">
              {searchResults.map(result => <Grid.Cell as="li" key={result.id} span={{
              narrow: 4,
              medium: 5,
              wide: 7
            }}>
                  {/* A search result has no image, so this Card needs no Card Content and stays vertical at any width. */}
                  <Card>
                    <Card.HeadingGroup tagline={result.section}>
                      <Card.Heading level={3}>
                        <Card.Link href="#">{result.title}</Card.Link>
                      </Card.Heading>
                    </Card.HeadingGroup>
                    <Column gap="small">
                      <Paragraph>{result.teaser}</Paragraph>
                      <Paragraph size="small">
                        {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                        <time dateTime={result.isoDate}>{result.date}</time>
                      </Paragraph>
                    </Column>
                  </Card>
                </Grid.Cell>)}
            </Grid.Subgrid>
            {/* The Pagination takes the width of the results above it rather than that of the region. */}
            <Grid.Cell span={{
            narrow: 4,
            medium: 5,
            wide: 7
          }}>
              <Pagination accessibleNameId="paginering" linkTemplate={page => \`?pagina=\${page}\`} page={1} totalPages={totalPages} />
            </Grid.Cell>
          </Grid.Subgrid>
        </Grid>
      </main>
    </>
}`,...A.parameters?.docs?.source}}},j=[`Default`]})))()}export{M as n,w as t};