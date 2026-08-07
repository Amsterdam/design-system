import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{A as r,D as i,M as a,R as o,S as s,U as c,W as l,_ as u,c as d,d as f,f as p,g as m,o as h,tt as g,u as _,x as v,z as y}from"./index.esm-BEvdO-tF.js";import{n as b,r as x,t as S}from"./commonMeta-5cNV4-WO.js";var C,w;function T(){return(T=e((()=>{C=[`Nieuwsbericht`,`Beleid en regels`,`Product of dienst`],w=[{title:`Top 400/600`,date:`1 juli 2023`,id:`top400-600`,isoDate:`2023-07-01`,section:`Actiecentrum Veiligheid en Zorg`,teaser:`Om de stad veiliger te maken coördineert de gemeente, samen met haar maatschappelijke partners, vanuit het Actiecentrum Veiligheid en Zorg verschillende aanpakken op het snijvlak van veiligheid, zorg en het sociaal domein.`},{title:`Treiteraanpak bij ernstige overlast in de buurt`,date:`24 juni 2023`,id:`treiteraanpak`,isoDate:`2023-06-24`,section:`Actiecentrum Veiligheid en Zorg`,teaser:`Bewoners die stelselmatig worden lastiggevallen door buurtgenoten kunnen een melding doen. De gemeente, de politie en de woningcorporatie bekijken samen welke maatregelen nodig zijn om de veiligheid te herstellen.`},{title:`Keurmerk Veilig Ondernemen aanvragen`,date:`19 juni 2023`,id:`veilig-ondernemen`,isoDate:`2023-06-19`,section:`Ondernemen`,teaser:`Ondernemers in winkelgebieden kunnen meedoen aan het Keurmerk Veilig Ondernemen. Deelnemers maken samen met de politie en de brandweer afspraken over veiligheid op straat.`},{title:`Veiligheid in de straat met een buurtpreventieteam`,date:`12 juni 2023`,id:`buurtpreventie`,isoDate:`2023-06-12`,section:`Wonen en leefomgeving`,teaser:`Een buurtpreventieteam bestaat uit bewoners die samen met de wijkagent letten op de veiligheid in hun straat. De gemeente ondersteunt nieuwe teams met training en materiaal.`},{title:`Cameratoezicht en veiligheid in de openbare ruimte`,date:`5 juni 2023`,id:`cameratoezicht`,isoDate:`2023-06-05`,section:`Beleid en regels`,teaser:`Veiligheid en openbare orde staan op sommige plekken structureel onder druk. Daar kan de burgemeester cameratoezicht instellen. De beelden worden na 28 dagen verwijderd.`},{title:`Meldpunt Zorg en Woonoverlast`,date:`30 mei 2023`,id:`meldpunt-zorg`,isoDate:`2023-05-30`,section:`Zorg en ondersteuning`,teaser:`Maakt u zich zorgen over een buurtgenoot die verward gedrag vertoont? Bij Meldpunt Zorg en Woonoverlast kunt u dat melden, ook anoniem.`}]})))()}var E=t({Default:()=>N,__namedExportsOrder:()=>P,default:()=>M}),D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{g(),b(),T(),D=n(),O=`veiligheid`,k=62,A=8,j=e=>{let t=RegExp(`(${O.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)})`,`gi`);return e.split(t).map((e,t)=>t%2==1?(0,D.jsx)(r,{children:e},t):e)},M={...S,title:`Pages/Public/Search Results Page`,parameters:x(`Presents what a visitor finds after searching the site: a column of filters beside the results, with the term still in the field so the search can be refined.`)},N={parameters:{docs:{source:{code:`<>
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
              {/*
               * Every match is marked, in the title of a result as well as in its teaser; this title holds none.
               * The Metadata names the category rather than text the search matched, so nothing in it is marked.
               */}
              <Card.HeadingGroup>
                <Card.Heading level={3}>
                  <Card.Link href="#">Top 400/600</Card.Link>
                </Card.Heading>
                <Metadata size="small">Actiecentrum Veiligheid en Zorg</Metadata>
              </Card.HeadingGroup>
              <Column gap="small">
                <Paragraph>
                  Om de stad veiliger te maken coördineert de gemeente, samen met haar maatschappelijke partners,
                  vanuit het Actiecentrum <Mark>Veiligheid</Mark> en Zorg verschillende aanpakken op het snijvlak
                  van <Mark>veiligheid</Mark>, zorg en het sociaal domein.
                </Paragraph>
                {/* A Card takes the small size of Metadata. */}
                <Metadata size="small">
                  {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                  <time dateTime="2023-07-01">1 juli 2023</time>
                </Metadata>
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
</>`,language:`tsx`}}},render:()=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(v,{paddingTop:`large`,children:(0,D.jsx)(v.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,D.jsx)(h,{children:(0,D.jsx)(h.Link,{href:`#`,children:`Home`})})})}),(0,D.jsxs)(`main`,{id:`inhoud`,children:[(0,D.jsx)(v,{paddingBottom:`2x-large`,children:(0,D.jsxs)(v.Cell,{className:`ams-prose`,span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,D.jsx)(s,{level:1,children:`Zoeken`}),(0,D.jsxs)(c,{children:[(0,D.jsx)(c.Input,{defaultValue:O,label:`Zoek op amsterdam.nl`,name:`trefwoord`}),(0,D.jsx)(c.Button,{children:`Zoeken`})]})]})}),(0,D.jsxs)(v,{paddingBottom:`2x-large`,children:[(0,D.jsxs)(v.Cell,{"aria-labelledby":`sorteren-en-filteren`,as:`aside`,span:{narrow:4,medium:3,wide:3},children:[(0,D.jsx)(s,{className:`ams-visually-hidden`,id:`sorteren-en-filteren`,level:2,children:`Sorteren en filteren`}),(0,D.jsxs)(`form`,{method:`get`,children:[(0,D.jsxs)(m,{className:`ams-mb-l`,children:[(0,D.jsx)(i,{htmlFor:`sorteren`,children:`Sorteren`}),(0,D.jsxs)(l,{id:`sorteren`,name:`sorteren`,children:[(0,D.jsx)(l.Option,{value:`relevantie`,children:`Op relevantie`}),(0,D.jsx)(l.Option,{value:`nieuwste`,children:`Nieuwste eerst`})]})]}),(0,D.jsx)(u,{className:`ams-mb-l`,legend:`Soort artikel`,children:(0,D.jsx)(p,{gap:`x-small`,children:C.map(e=>(0,D.jsx)(f,{name:`soort`,value:e.toLowerCase(),children:e},e))})}),(0,D.jsx)(d,{type:`submit`,children:`Resultaten tonen`})]})]}),(0,D.jsxs)(v.Subgrid,{span:{narrow:4,medium:5,wide:9},start:{narrow:1,medium:4,wide:4},children:[(0,D.jsxs)(v.Cell,{span:{narrow:4,medium:5,wide:7},children:[(0,D.jsx)(s,{className:`ams-visually-hidden`,level:2,children:`Zoekresultaten`}),(0,D.jsxs)(y,{role:`status`,children:[k,` resultaten gevonden voor ‘`,O,`’`]})]}),(0,D.jsx)(v.Subgrid,{as:`ul`,span:`all`,children:w.map(e=>(0,D.jsx)(v.Cell,{as:`li`,span:{narrow:4,medium:5,wide:7},children:(0,D.jsxs)(_,{children:[(0,D.jsxs)(_.HeadingGroup,{children:[(0,D.jsx)(_.Heading,{level:3,children:(0,D.jsx)(_.Link,{href:`#`,children:j(e.title)})}),(0,D.jsx)(a,{size:`small`,children:e.section})]}),(0,D.jsxs)(p,{gap:`small`,children:[(0,D.jsx)(y,{children:j(e.teaser)}),(0,D.jsx)(a,{size:`small`,children:(0,D.jsx)(`time`,{dateTime:e.isoDate,children:e.date})})]})]})},e.id))}),(0,D.jsx)(v.Cell,{span:{narrow:4,medium:5,wide:7},children:(0,D.jsx)(o,{accessibleNameId:`paginering`,linkTemplate:e=>`?pagina=${e}`,page:1,totalPages:A})})]})]})]})]})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
              {/*
               * Every match is marked, in the title of a result as well as in its teaser; this title holds none.
               * The Metadata names the category rather than text the search matched, so nothing in it is marked.
               */}
              <Card.HeadingGroup>
                <Card.Heading level={3}>
                  <Card.Link href="#">Top 400/600</Card.Link>
                </Card.Heading>
                <Metadata size="small">Actiecentrum Veiligheid en Zorg</Metadata>
              </Card.HeadingGroup>
              <Column gap="small">
                <Paragraph>
                  Om de stad veiliger te maken coördineert de gemeente, samen met haar maatschappelijke partners,
                  vanuit het Actiecentrum <Mark>Veiligheid</Mark> en Zorg verschillende aanpakken op het snijvlak
                  van <Mark>veiligheid</Mark>, zorg en het sociaal domein.
                </Paragraph>
                {/* A Card takes the small size of Metadata. */}
                <Metadata size="small">
                  {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                  <time dateTime="2023-07-01">1 juli 2023</time>
                </Metadata>
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
                    {/*
                     * Every match is marked, in the title of a result as well as in its teaser.
                     * The Metadata names the category rather than text the search matched, so nothing in it is marked.
                     */}
                    <Card.HeadingGroup>
                      <Card.Heading level={3}>
                        <Card.Link href="#">{markSearchTerm(result.title)}</Card.Link>
                      </Card.Heading>
                      <Metadata size="small">{result.section}</Metadata>
                    </Card.HeadingGroup>
                    <Column gap="small">
                      <Paragraph>{markSearchTerm(result.teaser)}</Paragraph>
                      {/* A Card takes the small size of Metadata. */}
                      <Metadata size="small">
                        {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                        <time dateTime={result.isoDate}>{result.date}</time>
                      </Metadata>
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
}`,...N.parameters?.docs?.source}}},P=[`Default`]})))()}export{F as n,E as t};