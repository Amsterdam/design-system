import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-ATHzeHXA.js";import{B as r,E as i,F as a,I as o,Q as s,V as c,b as l,d as u,g as d,h as f,l as p,o as m,s as h,u as g,x as _}from"./index.esm-cAj_xdzm.js";import{m as v,s as y}from"./exampleContent-DsZ2XVq0.js";import{n as b,t as x}from"./commonMeta-DY3-Fz6j.js";var S,C,w;function T(){return(T=e((()=>{v(),S=[`Algemeen`,`Achtergrond`,`Live blogs`],C=[`Centrum`,`Noord`,`Oost`,`Zuid`,`Zuidoost`,`West`,`Nieuw-West`,`Weesp`],w=[{title:`Berlagebrug een aantal nachten dicht`,category:`Algemeen, Centrum, Werkzaamheden`,date:`20 oktober 2023`,id:`berlagebrug`,imageSource:y(640,360,0),isoDate:`2023-10-20`,teaser:`Tussen 3 juni en 21 juli leggen we het tramspoor op de Berlagebrug aan. De brug is ongeveer 12 nachten dicht voor gemotoriseerd verkeer en in 3 nachten voor al het verkeer.`},{title:`Het allereerste beroepsbrandweerkorps van Nederland bestaat 150 jaar`,category:`Achtergrond`,date:`18 oktober 2023`,id:`brandweerkorps`,imageSource:y(640,360,1),isoDate:`2023-10-18`,teaser:`In de zomer van 1874 werd het allereerste beroepsbrandweerkorps van Nederland opgericht: de huidige Brandweer Amsterdam-Amstelland.`},{title:`Noorderpark wordt groener en beter toegankelijk`,category:`Algemeen, Noord`,date:`16 oktober 2023`,id:`noorderpark`,imageSource:y(640,360,2),isoDate:`2023-10-16`,teaser:`Het Noorderpark krijgt meer schaduw, ruimere wandelpaden en een speelveld dat ook bij regen bruikbaar blijft. De werkzaamheden beginnen na de zomer.`},{title:`Zuidoost viert 750 jaar Amsterdam: vraag subsidie aan voor uw initiatief`,category:`Algemeen, Zuidoost`,date:`13 oktober 2023`,id:`zuidoost-subsidie`,imageSource:y(640,360,3),isoDate:`2023-10-13`,teaser:`Bewoners en organisaties in Zuidoost kunnen tot 1 december subsidie aanvragen voor een buurtinitiatief dat bijdraagt aan de viering van 750 jaar Amsterdam.`},{title:`Live blog: werkzaamheden aan kades en bruggen`,category:`Live blogs`,date:`11 oktober 2023`,id:`kades-bruggen`,imageSource:y(640,360,4),isoDate:`2023-10-11`,teaser:`We vernieuwen de komende jaren honderden kilometers kade en honderden bruggen. In dit live blog houden we bij welke werkzaamheden er deze week starten.`},{title:`Erfgoed van de week: het wonderkind van de Amsterdamse School`,category:`Achtergrond, West`,date:`9 oktober 2023`,id:`amsterdamse-school`,imageSource:y(640,360,5),isoDate:`2023-10-09`,teaser:`De woningblokken in de Spaarndammerbuurt gelden als het hoogtepunt van de Amsterdamse School. Honderd jaar later wonen er nog steeds Amsterdammers.`}]})))()}var E=t({Default:()=>R,__namedExportsOrder:()=>z,default:()=>L}),D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{s(),b(),T(),D=n(),O=`tramspoor`,k=[`Achtergrond`],A=[`Centrum`,`Noord`,`Oost`],j=12,M=2,N=new Intl.ListFormat(`nl`,{style:`long`,type:`conjunction`}),P=e=>N.format(e.map(e=>`‘${e}’`)),F=A.length===1?P(A):`de stadsdelen ${P(A)}`,I=`${j} resultaten gevonden voor ‘${O}’ met soort nieuws ${P(k)} en ${F}.`,L={...x,title:`Pages/Public/News Overview Page`},R={parameters:{docs:{source:{code:`<>
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
            <Column gap="x-small">
              <Checkbox name="soort" value="algemeen">
                Algemeen
              </Checkbox>
              <Checkbox defaultChecked name="soort" value="achtergrond">
                Achtergrond
              </Checkbox>
              <Checkbox name="soort" value="live blogs">
                Live blogs
              </Checkbox>
            </Column>
          </FieldSet>
          <FieldSet className="ams-mb-l" legend="Stadsdelen">
            <Column gap="x-small">
              <Checkbox defaultChecked name="stadsdeel" value="centrum">
                Centrum
              </Checkbox>
              {/* … one Checkbox per district … */}
            </Column>
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
         * On the medium Grid a Card takes 4 of the 5 columns of the results region, leaving the last one
         * empty. That is below the width at which a Card with an image goes horizontal, so it stays vertical.
         */}
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 9 }}>
          <Card>
            {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
            <Card.Image alt="" loading="lazy" src="https://picsum.photos/id/122/640/360" />
            {/* A Card that pairs an image with a Content lays out horizontally in a cell this wide. */}
            <Card.Content>
              <Card.HeadingGroup tagline="Algemeen, Centrum, Werkzaamheden">
                <Card.Heading level={3}>
                  <Card.Link href="#">Berlagebrug een aantal nachten dicht</Card.Link>
                </Card.Heading>
              </Card.HeadingGroup>
              <Column gap="small">
                <Paragraph>
                  Tussen 3 juni en 21 juli leggen we het tramspoor op de Berlagebrug aan. De brug is ongeveer 12
                  nachten dicht voor gemotoriseerd verkeer en in 3 nachten voor al het verkeer.
                </Paragraph>
                <Paragraph size="small">
                  {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                  <time dateTime="2023-10-20">20 oktober 2023</time>
                </Paragraph>
              </Column>
            </Card.Content>
          </Card>
        </Grid.Cell>
        {/* … one Cell per article … */}
        <Grid.Cell span="all">
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
</>`,language:`tsx`}}},render:()=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(l,{paddingTop:`large`,children:(0,D.jsx)(l.Cell,{span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:(0,D.jsx)(m,{children:(0,D.jsx)(m.Link,{href:`#`,children:`Home`})})})}),(0,D.jsxs)(`main`,{id:`inhoud`,children:[(0,D.jsx)(l,{paddingBottom:`2x-large`,children:(0,D.jsxs)(l.Cell,{className:`ams-prose`,span:{narrow:4,medium:7,wide:9},start:{narrow:1,medium:1,wide:2},children:[(0,D.jsx)(_,{level:1,children:`Nieuws uit Amsterdam`}),(0,D.jsxs)(r,{children:[(0,D.jsx)(r.Input,{defaultValue:`tramspoor`,label:`Zoek in het nieuws`,name:`trefwoord`}),(0,D.jsx)(r.Button,{children:`Zoeken`})]})]})}),(0,D.jsxs)(l,{paddingBottom:`2x-large`,children:[(0,D.jsxs)(l.Cell,{"aria-labelledby":`sorteren-en-filteren`,as:`aside`,span:{narrow:4,medium:3,wide:3},children:[(0,D.jsx)(_,{className:`ams-visually-hidden`,id:`sorteren-en-filteren`,level:2,children:`Sorteren en filteren`}),(0,D.jsxs)(`form`,{method:`get`,children:[(0,D.jsxs)(f,{className:`ams-mb-l`,children:[(0,D.jsx)(i,{htmlFor:`sorteren`,children:`Sorteren`}),(0,D.jsxs)(c,{id:`sorteren`,name:`sorteren`,children:[(0,D.jsx)(c.Option,{value:`nieuwste`,children:`Nieuwste eerst`}),(0,D.jsx)(c.Option,{value:`oudste`,children:`Oudste eerst`}),(0,D.jsx)(c.Option,{value:`relevantie`,children:`Op relevantie`})]})]}),(0,D.jsx)(d,{className:`ams-mb-l`,legend:`Soort nieuws`,children:(0,D.jsx)(u,{gap:`x-small`,children:S.map(e=>(0,D.jsx)(g,{defaultChecked:k.includes(e),name:`soort`,value:e.toLowerCase(),children:e},e))})}),(0,D.jsx)(d,{className:`ams-mb-l`,legend:`Stadsdelen`,children:(0,D.jsx)(u,{gap:`x-small`,children:C.map(e=>(0,D.jsx)(g,{defaultChecked:A.includes(e),name:`stadsdeel`,value:e.toLowerCase(),children:e},e))})}),(0,D.jsx)(h,{type:`submit`,children:`Resultaten tonen`})]})]}),(0,D.jsxs)(l.Subgrid,{span:{narrow:4,medium:5,wide:9},start:{narrow:1,medium:4,wide:4},children:[(0,D.jsxs)(l.Cell,{span:{narrow:4,medium:5,wide:7},children:[(0,D.jsx)(_,{className:`ams-visually-hidden`,level:2,children:`Nieuwsberichten`}),(0,D.jsx)(o,{role:`status`,children:I})]}),w.map(e=>(0,D.jsx)(l.Cell,{span:{narrow:4,medium:4,wide:9},children:(0,D.jsxs)(p,{children:[(0,D.jsx)(p.Image,{alt:``,loading:`lazy`,src:e.imageSource}),(0,D.jsxs)(p.Content,{children:[(0,D.jsx)(p.HeadingGroup,{tagline:e.category,children:(0,D.jsx)(p.Heading,{level:3,children:(0,D.jsx)(p.Link,{href:`#`,children:e.title})})}),(0,D.jsxs)(u,{gap:`small`,children:[(0,D.jsx)(o,{children:e.teaser}),(0,D.jsx)(o,{size:`small`,children:(0,D.jsx)(`time`,{dateTime:e.isoDate,children:e.date})})]})]})]})},e.id)),(0,D.jsx)(l.Cell,{span:`all`,children:(0,D.jsx)(a,{accessibleNameId:`paginering`,linkTemplate:e=>`?pagina=${e}`,page:1,totalPages:M})})]})]})]})]})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
            <Column gap="x-small">
              <Checkbox name="soort" value="algemeen">
                Algemeen
              </Checkbox>
              <Checkbox defaultChecked name="soort" value="achtergrond">
                Achtergrond
              </Checkbox>
              <Checkbox name="soort" value="live blogs">
                Live blogs
              </Checkbox>
            </Column>
          </FieldSet>
          <FieldSet className="ams-mb-l" legend="Stadsdelen">
            <Column gap="x-small">
              <Checkbox defaultChecked name="stadsdeel" value="centrum">
                Centrum
              </Checkbox>
              {/* … one Checkbox per district … */}
            </Column>
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
         * On the medium Grid a Card takes 4 of the 5 columns of the results region, leaving the last one
         * empty. That is below the width at which a Card with an image goes horizontal, so it stays vertical.
         */}
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 9 }}>
          <Card>
            {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
            <Card.Image alt="" loading="lazy" src="https://picsum.photos/id/122/640/360" />
            {/* A Card that pairs an image with a Content lays out horizontally in a cell this wide. */}
            <Card.Content>
              <Card.HeadingGroup tagline="Algemeen, Centrum, Werkzaamheden">
                <Card.Heading level={3}>
                  <Card.Link href="#">Berlagebrug een aantal nachten dicht</Card.Link>
                </Card.Heading>
              </Card.HeadingGroup>
              <Column gap="small">
                <Paragraph>
                  Tussen 3 juni en 21 juli leggen we het tramspoor op de Berlagebrug aan. De brug is ongeveer 12
                  nachten dicht voor gemotoriseerd verkeer en in 3 nachten voor al het verkeer.
                </Paragraph>
                <Paragraph size="small">
                  {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                  <time dateTime="2023-10-20">20 oktober 2023</time>
                </Paragraph>
              </Column>
            </Card.Content>
          </Card>
        </Grid.Cell>
        {/* … one Cell per article … */}
        <Grid.Cell span="all">
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
                <Column gap="x-small">
                  {newsCategories.map(category => <Checkbox defaultChecked={selectedCategories.includes(category)} key={category} name="soort" value={category.toLowerCase()}>
                      {category}
                    </Checkbox>)}
                </Column>
              </FieldSet>
              <FieldSet className="ams-mb-l" legend="Stadsdelen">
                <Column gap="x-small">
                  {newsDistricts.map(district => <Checkbox defaultChecked={selectedDistricts.includes(district)} key={district} name="stadsdeel" value={district.toLowerCase()}>
                      {district}
                    </Checkbox>)}
                </Column>
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
             * On the medium Grid a Card takes 4 of the 5 columns of the results region, leaving the last one
             * empty. That is below the width at which a Card with an image goes horizontal, so it stays vertical.
             */}
            {newsArticles.map(article => <Grid.Cell key={article.id} span={{
            narrow: 4,
            medium: 4,
            wide: 9
          }}>
                <Card>
                  {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
                  <Card.Image alt="" loading="lazy" src={article.imageSource} />
                  {/* A Card that pairs an image with a Content lays out horizontally in a cell this wide. */}
                  <Card.Content>
                    <Card.HeadingGroup tagline={article.category}>
                      <Card.Heading level={3}>
                        <Card.Link href="#">{article.title}</Card.Link>
                      </Card.Heading>
                    </Card.HeadingGroup>
                    <Column gap="small">
                      <Paragraph>{article.teaser}</Paragraph>
                      <Paragraph size="small">
                        {/* The visible date is prose; dateTime repeats it in the machine-readable format software parses. */}
                        <time dateTime={article.isoDate}>{article.date}</time>
                      </Paragraph>
                    </Column>
                  </Card.Content>
                </Card>
              </Grid.Cell>)}
            <Grid.Cell span="all">
              <Pagination accessibleNameId="paginering" linkTemplate={page => \`?pagina=\${page}\`} page={1} totalPages={totalPages} />
            </Grid.Cell>
          </Grid.Subgrid>
        </Grid>
      </main>
    </>
}`,...R.parameters?.docs?.source}}},z=[`Default`]})))()}export{B as n,E as t};