import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{B as r,C as i,G as a,N as o,O as s,S as c,W as l,_ as u,c as d,d as f,f as p,j as m,nt as h,o as g,p as _,v,z as y}from"./index.esm-B8SoeWcJ.js";import{b,g as x,y as S}from"./exampleContent-DRei7MoO.js";import{n as C,r as w,t as T}from"./commonMeta-Baf4WPUH.js";import{t as E}from"./formatFieldValue-D9hm7vmg.js";var D=t({Default:()=>P,__namedExportsOrder:()=>F,default:()=>N}),O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{h(),x(),C(),O=n(),k=`veiligheid`,A=62,j=8,M=e=>{let t=RegExp(`(${k.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)})`,`gi`);return e.split(t).map((e,t)=>t%2==1?(0,O.jsx)(m,{children:e},t):e)},N={...T,title:`Pages/Public/Search Results Page`,parameters:w(`Presents what a visitor finds after searching the site: a column of filters beside the results, with the term still in the field so the search can be refined.`)},P={parameters:{docs:{source:{code:`<>
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
            <Checkbox name="soort" value="nieuwsbericht">
              Nieuwsbericht
            </Checkbox>
            {/* … one Checkbox per topic … */}
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
</>`,language:`tsx`}}},render:()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{paddingTop:`large`,children:(0,O.jsx)(c.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,O.jsx)(g,{children:(0,O.jsx)(g.Link,{href:`#`,children:`Home`})})})}),(0,O.jsxs)(`main`,{id:`inhoud`,children:[(0,O.jsx)(c,{paddingBottom:`2x-large`,children:(0,O.jsxs)(c.Cell,{className:`ams-prose`,span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,O.jsx)(i,{level:1,children:`Zoeken`}),(0,O.jsxs)(l,{children:[(0,O.jsx)(l.Input,{defaultValue:k,label:`Zoek op amsterdam.nl`,name:`trefwoord`}),(0,O.jsx)(l.Button,{children:`Zoeken`})]})]})}),(0,O.jsxs)(c,{paddingBottom:`2x-large`,children:[(0,O.jsxs)(c.Cell,{"aria-labelledby":`sorteren-en-filteren`,as:`aside`,span:{narrow:4,medium:3,wide:3},children:[(0,O.jsx)(i,{className:`ams-visually-hidden`,id:`sorteren-en-filteren`,level:2,children:`Sorteren en filteren`}),(0,O.jsxs)(`form`,{method:`get`,children:[(0,O.jsxs)(u,{className:`ams-mb-l`,children:[(0,O.jsx)(s,{htmlFor:`sorteren`,children:`Sorteren`}),(0,O.jsxs)(a,{id:`sorteren`,name:`sorteren`,children:[(0,O.jsx)(a.Option,{value:`relevantie`,children:`Op relevantie`}),(0,O.jsx)(a.Option,{value:`nieuwste`,children:`Nieuwste eerst`})]})]}),(0,O.jsx)(v,{className:`ams-mb-l`,legend:`Soort artikel`,children:b.map(e=>(0,O.jsx)(p,{name:`soort`,value:E(e),children:e},e))}),(0,O.jsx)(d,{type:`submit`,children:`Resultaten tonen`})]})]}),(0,O.jsxs)(c.Subgrid,{span:{narrow:4,medium:5,wide:9},start:{narrow:1,medium:4,wide:4},children:[(0,O.jsxs)(c.Cell,{span:{narrow:4,medium:5,wide:7},children:[(0,O.jsx)(i,{className:`ams-visually-hidden`,level:2,children:`Zoekresultaten`}),(0,O.jsxs)(r,{role:`status`,children:[A,` resultaten gevonden voor ‘`,k,`’`]})]}),(0,O.jsx)(c.Subgrid,{as:`ul`,span:`all`,children:S.map(e=>(0,O.jsx)(c.Cell,{as:`li`,span:{narrow:4,medium:5,wide:7},children:(0,O.jsxs)(f,{children:[(0,O.jsxs)(f.HeadingGroup,{children:[(0,O.jsx)(f.Heading,{level:3,children:(0,O.jsx)(f.Link,{href:`#`,children:M(e.title)})}),(0,O.jsx)(o,{size:`small`,children:e.section})]}),(0,O.jsxs)(_,{gap:`small`,children:[(0,O.jsx)(r,{children:M(e.teaser)}),(0,O.jsx)(o,{size:`small`,children:(0,O.jsx)(`time`,{dateTime:e.isoDate,children:e.date})})]})]})},e.id))}),(0,O.jsx)(c.Cell,{span:{narrow:4,medium:5,wide:7},children:(0,O.jsx)(y,{accessibleNameId:`paginering`,linkTemplate:e=>`?pagina=${e}`,page:1,totalPages:j})})]})]})]})]})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
            <Checkbox name="soort" value="nieuwsbericht">
              Nieuwsbericht
            </Checkbox>
            {/* … one Checkbox per topic … */}
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
                {searchTopics.map(topic => <Checkbox key={topic} name="soort" value={formatFieldValue(topic)}>
                    {topic}
                  </Checkbox>)}
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
}`,...P.parameters?.docs?.source}}},F=[`Default`]})))()}export{I as n,D as t};