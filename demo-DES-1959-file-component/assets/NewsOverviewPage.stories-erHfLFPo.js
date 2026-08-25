import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{B as r,C as i,G as a,K as o,P as s,V as c,_ as l,c as u,d,f,k as p,o as m,p as h,rt as g,v as _,w as v}from"./index.esm-BPDccLAo.js";import{_ as y,g as b,t as x,v as S}from"./exampleContent-DRei7MoO.js";import{n as C,r as w,t as T}from"./commonMeta-lnbF4AK7.js";import{t as E}from"./formatFieldValue-D9hm7vmg.js";var D=t({Default:()=>z,__namedExportsOrder:()=>B,default:()=>R}),O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{g(),b(),C(),O=n(),k=`tramspoor`,A=[`Achtergrond`],j=[`Centrum`,`Noord`,`Oost`],M=12,N=2,P=new Intl.ListFormat(`nl`,{style:`long`,type:`conjunction`}),F=e=>P.format(e.map(e=>`‘${e}’`)),I=j.length===1?F(j):`de stadsdelen ${F(j)}`,L=`${M} resultaten gevonden voor ‘${k}’ met soort nieuws ${F(A)} en ${I}.`,R={...T,title:`Pages/Public/News Overview Page`,parameters:w(`Lists content items that a visitor narrows down with filters: news, blogs, vacancies, activities, or search results.`)},z={parameters:{docs:{source:{code:`<>
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
        <Heading level={1}>Nieuws uit Amsterdam</Heading>
        <SearchField>
          <SearchField.Input defaultValue="tramspoor" label="Zoek in het nieuws" name="trefwoord" />
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
              <Select.Option value="nieuwste">Nieuwste eerst</Select.Option>
              <Select.Option value="oudste">Oudste eerst</Select.Option>
              <Select.Option value="relevantie">Op relevantie</Select.Option>
            </Select>
          </Field>
          <FieldSet className="ams-mb-l" legend="Soort nieuws">
            <Checkbox name="soort" value="algemeen">
              Algemeen
            </Checkbox>
            <Checkbox defaultChecked name="soort" value="achtergrond">
              Achtergrond
            </Checkbox>
            <Checkbox name="soort" value="live-blogs">
              Live blogs
            </Checkbox>
          </FieldSet>
          <FieldSet className="ams-mb-l" legend="Stadsdelen">
            <Checkbox defaultChecked name="stadsdeel" value="centrum">
              Centrum
            </Checkbox>
            {/* … one Checkbox per district … */}
          </FieldSet>
          {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
          <Button type="submit">Resultaten tonen</Button>
        </form>
      </Grid.Cell>
      {/*
       * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
       * columns of the page rather than on columns of their own. That is what lines the Cards up with the rest.
       */}
      <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
        {/* The sentence is running text, which takes at most 7 of the 12 columns, so it stops short of the Cards. */}
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
          <Heading className="ams-visually-hidden" level={2}>
            Nieuwsberichten
          </Heading>
          {/* A polite live region, so a screen reader hears the new total when the filters change. */}
          <Paragraph role="status">{resultsMessage}</Paragraph>
        </Grid.Cell>
        {/*
         * The articles are a list, so they get a Subgrid of their own: a ul with every Cell in it an li.
         * The result count above and the Pagination below stay outside it; neither is one of the articles.
         * A Subgrid inside a Subgrid still hands down the columns of the page, and takes the same row gap.
         */}
        <Grid.Subgrid as="ul" span="all">
          {/*
           * On the medium Grid a Card takes 4 of the 5 columns of the results region, leaving the last one
           * empty. That is below the width at which a Card with an image goes horizontal, so it stays vertical.
           */}
          <Grid.Cell as="li" span={{ narrow: 4, medium: 4, wide: 9 }}>
            <Card>
              {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
              <Card.Image alt="" loading="lazy" src="https://picsum.photos/id/122/640/360" />
              {/* A Card that pairs an image with a Content lays out horizontally in a cell this wide. */}
              <Card.Content>
                <Card.HeadingGroup>
                  <Card.Heading level={3}>
                    <Card.Link href="#">Berlagebrug een aantal nachten dicht</Card.Link>
                  </Card.Heading>
                  {/*
                   * The Metadata carries the facets of the article. The kind of news and the district come from
                   * different filter fields, so a Separator sets them apart; a comma would read as two kinds of news.
                   */}
                  <Metadata size="small">
                    Algemeen
                    <Metadata.Separator />
                    Centrum
                  </Metadata>
                </Card.HeadingGroup>
                <Column gap="small">
                  <Paragraph>
                    Tussen 3 juni en 21 juli leggen we het tramspoor op de Berlagebrug aan. De brug is ongeveer 12
                    nachten dicht voor gemotoriseerd verkeer en in 3 nachten voor al het verkeer.
                  </Paragraph>
                  {/* A Card takes the small size of Metadata. */}
                  <Metadata size="small">
                    {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                    <time dateTime="2023-10-20">20 oktober 2023</time>
                  </Metadata>
                </Column>
              </Card.Content>
            </Card>
          </Grid.Cell>
          {/* … one Cell per article … */}
        </Grid.Subgrid>
        {/* The Pagination takes the width of the results above it rather than that of the region. */}
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 9 }}>
          <Pagination
            accessibleNameId="paginering"
            linkTemplate={(page) => \`?pagina=\${page}\`}
            page={1}
            totalPages={2}
          />
        </Grid.Cell>
      </Grid.Subgrid>
    </Grid>
  </main>
</>`,language:`tsx`}}},render:()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(i,{paddingTop:`large`,children:(0,O.jsx)(i.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,O.jsx)(m,{children:(0,O.jsx)(m.Link,{href:`#`,children:`Home`})})})}),(0,O.jsxs)(`main`,{id:`inhoud`,children:[(0,O.jsx)(i,{paddingBottom:`2x-large`,children:(0,O.jsxs)(i.Cell,{className:`ams-prose`,span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,O.jsx)(v,{level:1,children:`Nieuws uit Amsterdam`}),(0,O.jsxs)(a,{children:[(0,O.jsx)(a.Input,{defaultValue:`tramspoor`,label:`Zoek in het nieuws`,name:`trefwoord`}),(0,O.jsx)(a.Button,{children:`Zoeken`})]})]})}),(0,O.jsxs)(i,{paddingBottom:`2x-large`,children:[(0,O.jsxs)(i.Cell,{"aria-labelledby":`sorteren-en-filteren`,as:`aside`,span:{narrow:4,medium:3,wide:3},children:[(0,O.jsx)(v,{className:`ams-visually-hidden`,id:`sorteren-en-filteren`,level:2,children:`Sorteren en filteren`}),(0,O.jsxs)(`form`,{method:`get`,children:[(0,O.jsxs)(l,{className:`ams-mb-l`,children:[(0,O.jsx)(p,{htmlFor:`sorteren`,children:`Sorteren`}),(0,O.jsxs)(o,{id:`sorteren`,name:`sorteren`,children:[(0,O.jsx)(o.Option,{value:`nieuwste`,children:`Nieuwste eerst`}),(0,O.jsx)(o.Option,{value:`oudste`,children:`Oudste eerst`}),(0,O.jsx)(o.Option,{value:`relevantie`,children:`Op relevantie`})]})]}),(0,O.jsx)(_,{className:`ams-mb-l`,legend:`Soort nieuws`,children:S.map(e=>(0,O.jsx)(f,{defaultChecked:A.includes(e),name:`soort`,value:E(e),children:e},e))}),(0,O.jsx)(_,{className:`ams-mb-l`,legend:`Stadsdelen`,children:x.map(e=>(0,O.jsx)(f,{defaultChecked:j.includes(e),name:`stadsdeel`,value:E(e),children:e},e))}),(0,O.jsx)(u,{type:`submit`,children:`Resultaten tonen`})]})]}),(0,O.jsxs)(i.Subgrid,{span:{narrow:4,medium:5,wide:9},start:{narrow:1,medium:4,wide:4},children:[(0,O.jsxs)(i.Cell,{span:{narrow:4,medium:5,wide:7},children:[(0,O.jsx)(v,{className:`ams-visually-hidden`,level:2,children:`Nieuwsberichten`}),(0,O.jsx)(c,{role:`status`,children:L})]}),(0,O.jsx)(i.Subgrid,{as:`ul`,span:`all`,children:y.map(e=>(0,O.jsx)(i.Cell,{as:`li`,span:{narrow:4,medium:4,wide:9},children:(0,O.jsxs)(d,{children:[(0,O.jsx)(d.Image,{alt:``,loading:`lazy`,src:e.imageSource}),(0,O.jsxs)(d.Content,{children:[(0,O.jsxs)(d.HeadingGroup,{children:[(0,O.jsx)(d.Heading,{level:3,children:(0,O.jsx)(d.Link,{href:`#`,children:e.title})}),(0,O.jsxs)(s,{size:`small`,children:[e.category,e.district&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(s.Separator,{}),e.district]})]})]}),(0,O.jsxs)(h,{gap:`small`,children:[(0,O.jsx)(c,{children:e.teaser}),(0,O.jsx)(s,{size:`small`,children:(0,O.jsx)(`time`,{dateTime:e.isoDate,children:e.date})})]})]})]})},e.id))}),(0,O.jsx)(i.Cell,{span:{narrow:4,medium:4,wide:9},children:(0,O.jsx)(r,{accessibleNameId:`paginering`,linkTemplate:e=>`?pagina=${e}`,page:1,totalPages:N})})]})]})]})]})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
        <Heading level={1}>Nieuws uit Amsterdam</Heading>
        <SearchField>
          <SearchField.Input defaultValue="tramspoor" label="Zoek in het nieuws" name="trefwoord" />
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
              <Select.Option value="nieuwste">Nieuwste eerst</Select.Option>
              <Select.Option value="oudste">Oudste eerst</Select.Option>
              <Select.Option value="relevantie">Op relevantie</Select.Option>
            </Select>
          </Field>
          <FieldSet className="ams-mb-l" legend="Soort nieuws">
            <Checkbox name="soort" value="algemeen">
              Algemeen
            </Checkbox>
            <Checkbox defaultChecked name="soort" value="achtergrond">
              Achtergrond
            </Checkbox>
            <Checkbox name="soort" value="live-blogs">
              Live blogs
            </Checkbox>
          </FieldSet>
          <FieldSet className="ams-mb-l" legend="Stadsdelen">
            <Checkbox defaultChecked name="stadsdeel" value="centrum">
              Centrum
            </Checkbox>
            {/* … one Checkbox per district … */}
          </FieldSet>
          {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
          <Button type="submit">Resultaten tonen</Button>
        </form>
      </Grid.Cell>
      {/*
       * A Subgrid hands the columns it spans to its own children, so the Cells inside it are placed on the
       * columns of the page rather than on columns of their own. That is what lines the Cards up with the rest.
       */}
      <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }} start={{ narrow: 1, medium: 4, wide: 4 }}>
        {/* The sentence is running text, which takes at most 7 of the 12 columns, so it stops short of the Cards. */}
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
          <Heading className="ams-visually-hidden" level={2}>
            Nieuwsberichten
          </Heading>
          {/* A polite live region, so a screen reader hears the new total when the filters change. */}
          <Paragraph role="status">{resultsMessage}</Paragraph>
        </Grid.Cell>
        {/*
         * The articles are a list, so they get a Subgrid of their own: a ul with every Cell in it an li.
         * The result count above and the Pagination below stay outside it; neither is one of the articles.
         * A Subgrid inside a Subgrid still hands down the columns of the page, and takes the same row gap.
         */}
        <Grid.Subgrid as="ul" span="all">
          {/*
           * On the medium Grid a Card takes 4 of the 5 columns of the results region, leaving the last one
           * empty. That is below the width at which a Card with an image goes horizontal, so it stays vertical.
           */}
          <Grid.Cell as="li" span={{ narrow: 4, medium: 4, wide: 9 }}>
            <Card>
              {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
              <Card.Image alt="" loading="lazy" src="https://picsum.photos/id/122/640/360" />
              {/* A Card that pairs an image with a Content lays out horizontally in a cell this wide. */}
              <Card.Content>
                <Card.HeadingGroup>
                  <Card.Heading level={3}>
                    <Card.Link href="#">Berlagebrug een aantal nachten dicht</Card.Link>
                  </Card.Heading>
                  {/*
                   * The Metadata carries the facets of the article. The kind of news and the district come from
                   * different filter fields, so a Separator sets them apart; a comma would read as two kinds of news.
                   */}
                  <Metadata size="small">
                    Algemeen
                    <Metadata.Separator />
                    Centrum
                  </Metadata>
                </Card.HeadingGroup>
                <Column gap="small">
                  <Paragraph>
                    Tussen 3 juni en 21 juli leggen we het tramspoor op de Berlagebrug aan. De brug is ongeveer 12
                    nachten dicht voor gemotoriseerd verkeer en in 3 nachten voor al het verkeer.
                  </Paragraph>
                  {/* A Card takes the small size of Metadata. */}
                  <Metadata size="small">
                    {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                    <time dateTime="2023-10-20">20 oktober 2023</time>
                  </Metadata>
                </Column>
              </Card.Content>
            </Card>
          </Grid.Cell>
          {/* … one Cell per article … */}
        </Grid.Subgrid>
        {/* The Pagination takes the width of the results above it rather than that of the region. */}
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 9 }}>
          <Pagination
            accessibleNameId="paginering"
            linkTemplate={(page) => \\\`?pagina=\\\${page}\\\`}
            page={1}
            totalPages={2}
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
            <Heading level={1}>Nieuws uit Amsterdam</Heading>
            <SearchField>
              <SearchField.Input defaultValue="tramspoor" label="Zoek in het nieuws" name="trefwoord" />
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
                  <Select.Option value="nieuwste">Nieuwste eerst</Select.Option>
                  <Select.Option value="oudste">Oudste eerst</Select.Option>
                  <Select.Option value="relevantie">Op relevantie</Select.Option>
                </Select>
              </Field>
              <FieldSet className="ams-mb-l" legend="Soort nieuws">
                {newsCategories.map(category => <Checkbox defaultChecked={selectedCategories.includes(category)} key={category} name="soort" value={formatFieldValue(category)}>
                    {category}
                  </Checkbox>)}
              </FieldSet>
              <FieldSet className="ams-mb-l" legend="Stadsdelen">
                {districts.map(district => <Checkbox defaultChecked={selectedDistricts.includes(district)} key={district} name="stadsdeel" value={formatFieldValue(district)}>
                    {district}
                  </Checkbox>)}
              </FieldSet>
              {/* The design filters as soon as a box is ticked; the button keeps the form usable without that script. */}
              <Button type="submit">Resultaten tonen</Button>
            </form>
          </Grid.Cell>
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
            {/* The sentence is running text, which takes at most 7 of the 12 columns, so it stops short of the Cards. */}
            <Grid.Cell span={{
            narrow: 4,
            medium: 5,
            wide: 7
          }}>
              <Heading className="ams-visually-hidden" level={2}>
                Nieuwsberichten
              </Heading>
              {/* A polite live region, so a screen reader hears the new total when the filters change. */}
              <Paragraph role="status">{resultsMessage}</Paragraph>
            </Grid.Cell>
            {/*
             * The articles are a list, so they get a Subgrid of their own: a ul with every Cell in it an li.
             * The result count above and the Pagination below stay outside it; neither is one of the articles.
             * A Subgrid inside a Subgrid still hands down the columns of the page, and takes the same row gap.
             */}
            <Grid.Subgrid as="ul" span="all">
              {/*
               * On the medium Grid a Card takes 4 of the 5 columns of the results region, leaving the last one
               * empty. That is below the width at which a Card with an image goes horizontal, so it stays vertical.
               */}
              {newsArticles.map(article => <Grid.Cell as="li" key={article.id} span={{
              narrow: 4,
              medium: 4,
              wide: 9
            }}>
                  <Card>
                    {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
                    <Card.Image alt="" loading="lazy" src={article.imageSource} />
                    {/* A Card that pairs an image with a Content lays out horizontally in a cell this wide. */}
                    <Card.Content>
                      <Card.HeadingGroup>
                        <Card.Heading level={3}>
                          <Card.Link href="#">{article.title}</Card.Link>
                        </Card.Heading>
                        {/*
                         * The Metadata carries the facets of the article. The kind of news and the district come
                         * from different filter fields, so a Separator sets them apart; a comma would read as two
                         * kinds of news.
                         */}
                        <Metadata size="small">
                          {article.category}
                          {/* Leave the Separator out for news that concerns the whole city, so no line ends in one. */}
                          {article.district && <>
                              <Metadata.Separator />
                              {article.district}
                            </>}
                        </Metadata>
                      </Card.HeadingGroup>
                      <Column gap="small">
                        <Paragraph>{article.teaser}</Paragraph>
                        {/* A Card takes the small size of Metadata. */}
                        <Metadata size="small">
                          {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                          <time dateTime={article.isoDate}>{article.date}</time>
                        </Metadata>
                      </Column>
                    </Card.Content>
                  </Card>
                </Grid.Cell>)}
            </Grid.Subgrid>
            {/* The Pagination takes the width of the results above it rather than that of the region. */}
            <Grid.Cell span={{
            narrow: 4,
            medium: 4,
            wide: 9
          }}>
              <Pagination accessibleNameId="paginering" linkTemplate={page => \`?pagina=\${page}\`} page={1} totalPages={totalPages} />
            </Grid.Cell>
          </Grid.Subgrid>
        </Grid>
      </main>
    </>
}`,...z.parameters?.docs?.source}}},B=[`Default`]})))()}export{V as n,D as t};