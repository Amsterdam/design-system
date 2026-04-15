/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Accordion,
  Alert,
  Blockquote,
  Breadcrumb,
  Breakout,
  CallToActionLink,
  Card,
  Figure,
  Grid,
  Heading,
  Image,
  ImageSlider,
  LinkList,
  OrderedList,
  Paragraph,
  Spotlight,
  StandaloneLink,
  Table,
  UnorderedList,
} from '@amsterdam/design-system-react'
import { createContext, useContext } from 'react'

import {
  exampleAccordionHeading,
  exampleCaption,
  exampleHeading,
  exampleLinkList,
  exampleOrderedList,
  exampleParagraph,
  exampleQuote,
  exampleStandaloneLink,
  exampleTopTask,
  exampleUnorderedList,
} from '../../../_common/exampleContent'
import { formatDate } from '../../../_common/formatDate'
import { commonMeta } from '../common/config'
import { heroImage, picsum, sliderImages } from './data'

type SpacingResearchArgs = { showMarkers: boolean }

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Spacing Research',
  args: { showMarkers: true },
  argTypes: {
    showMarkers: {
      control: 'boolean',
      name: 'Show size markers',
    },
  },
} satisfies Meta<SpacingResearchArgs>

export default meta

type Story = StoryObj<SpacingResearchArgs>

// Appends " (size)" on a coloured background so the applied spacing class is visible inline in each story.
const sizeColors: Record<string, string> = {
  xs: '#4a90d980',
  s: '#ec646480',
  m: '#ec3e9680',
  l: '#f6a62380',
  xl: '#f8e71c80',
  '2xl': '#bed20080',
}

const ShowMarkersContext = createContext(true)

const mark = (size: string) => <Mark size={size} />

const Mark = ({ size }: { size: string }) => {
  if (!useContext(ShowMarkersContext)) return null

  return (
    <>
      {' '}
      <span style={{ backgroundColor: sizeColors[size], padding: '0 0.5ch' }}>({size})</span>
    </>
  )
}

const headerCell = {
  span: { narrow: 4, medium: 7, wide: 9 } as const,
  start: { narrow: 1, medium: 1, wide: 2 } as const,
}

const bodyCell = {
  span: { narrow: 4, medium: 6, wide: 7 } as const,
  start: { narrow: 1, medium: 2, wide: 3 } as const,
}

const BreadcrumbRow = ({ trail = ['Home', 'Nieuws'] }: { trail?: string[] }) => (
  <Grid paddingTop="large">
    <Grid.Cell {...headerCell}>
      <Breadcrumb>
        {trail.map((label) => (
          <Breadcrumb.Link href="#" key={label}>
            {label}
          </Breadcrumb.Link>
        ))}
      </Breadcrumb>
    </Grid.Cell>
  </Grid>
)

// Content page header: Heading 1 + date Paragraph + Lead Paragraph, all in one Grid Cell.
const ContentPageHeader = ({
  date = new Date('2026-04-10'),
  heading,
  lead,
  trail,
}: {
  date?: Date
  heading: string
  lead: string
  trail?: string[]
}) => (
  <>
    <BreadcrumbRow trail={trail} />
    <Grid paddingBottom="x-large">
      <Grid.Cell {...headerCell}>
        <Heading className="ams-mb-s" level={1}>
          {heading}
          {mark('s')}
        </Heading>
        <Paragraph className="ams-mb-xl">
          {formatDate(date)}
          {mark('xl')}
        </Paragraph>
        <Paragraph size="large">{lead}</Paragraph>
      </Grid.Cell>
    </Grid>
  </>
)

// Singular page header: Heading 1 + Lead Paragraph, no date.
const SingularPageHeader = ({
  heading,
  lead,
  trail = ['Home'],
}: {
  heading: string
  lead: string
  trail?: string[]
}) => (
  <>
    <BreadcrumbRow trail={trail} />
    <Grid paddingBottom="x-large">
      <Grid.Cell {...headerCell}>
        <Heading className="ams-mb-m" level={1}>
          {heading}
          {mark('m')}
        </Heading>
        <Paragraph size="large">{lead}</Paragraph>
      </Grid.Cell>
    </Grid>
  </>
)

const OList = ({ marker }: { marker?: string }) => (
  <OrderedList>
    {exampleOrderedList().map((text, index, arr) => (
      <OrderedList.Item key={text}>
        {text}
        {marker && index === arr.length - 1 ? mark(marker) : null}
      </OrderedList.Item>
    ))}
  </OrderedList>
)

const SampleTable = ({ marker }: { marker?: string }) => (
  <Table>
    <Table.Caption>
      <Heading level={3}>Kosten voor de aanvraag{marker ? mark(marker) : ''}</Heading>
    </Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Normale levertijd</Table.HeaderCell>
        <Table.HeaderCell>Spoed</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Paspoort</Table.Cell>
        <Table.Cell>€ 77,85</Table.Cell>
        <Table.Cell>€ 130,80</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>ID-kaart</Table.Cell>
        <Table.Cell>€ 70,35</Table.Cell>
        <Table.Cell>€ 123,30</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

const InlineFigure = ({ marker, seed }: { marker?: string; seed: string | number }) => (
  <Figure>
    <Image alt="" aspectRatio="16:9" src={picsum(seed, 1280, 720)} />
    <Figure.Caption>
      {exampleCaption()}
      {marker ? mark(marker) : ''}
    </Figure.Caption>
  </Figure>
)

// 1. Content page — heading staircase
export const ContentHeadingStaircase: Story = {
  render: ({ showMarkers }) => (
    <ShowMarkersContext.Provider value={showMarkers}>
      <ContentPageHeader
        heading="Erfgoed van de Week | Het wonderkind van de Amsterdamse School"
        lead="Een korte lead om de pagina te openen en door te geleiden naar de eerste sectie."
      />
      <Image {...heroImage('staircase')} aspectRatio="16:5" />
      <Grid paddingVertical="x-large">
        <Grid.Cell {...bodyCell}>
          <Heading className="ams-mb-s" level={2}>
            Heading 2 introduceert een sectie{mark('s')}
          </Heading>
          <Paragraph className="ams-mb-xl">
            {exampleParagraph()}
            {mark('xl')}
          </Paragraph>

          <Heading className="ams-mb-m" level={2}>
            Direct gevolgd door Heading 3{mark('m')}
          </Heading>
          <Heading className="ams-mb-xs" level={3}>
            Heading 3 met body eronder{mark('xs')}
          </Heading>
          <Paragraph className="ams-mb-l">
            {exampleParagraph()}
            {mark('l')}
          </Paragraph>

          <Heading className="ams-mb-m" level={3}>
            Heading 3 gevolgd door Heading 4{mark('m')}
          </Heading>
          <Heading level={4}>Heading 4 met body eronder</Heading>
          <Paragraph className="ams-mb-xl">
            {exampleParagraph()}
            {mark('xl')}
          </Paragraph>

          <Heading className="ams-mb-s" level={2}>
            Tweede Heading 2{mark('s')}
          </Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
        </Grid.Cell>
      </Grid>
    </ShowMarkersContext.Provider>
  ),
}

// 2. Content page — flow passages
export const ContentFlowPassages: Story = {
  render: ({ showMarkers }) => (
    <ShowMarkersContext.Provider value={showMarkers}>
      <ContentPageHeader heading="Werkzaamheden in de stad" lead={exampleParagraph()} />
      <Image {...heroImage('flow')} aspectRatio="16:5" />
      <Grid paddingVertical="x-large">
        <Grid.Cell {...bodyCell}>
          <Heading className="ams-mb-s" level={2}>
            Wat gaan we doen?{mark('s')}
          </Heading>
          <Paragraph className="ams-mb-m">
            {exampleParagraph()}
            {mark('m')}
          </Paragraph>
          <UnorderedList className="ams-mb-m">
            {exampleUnorderedList().map((text, index, arr) => (
              <UnorderedList.Item key={text}>
                {text}
                {index === arr.length - 1 ? mark('m') : null}
              </UnorderedList.Item>
            ))}
          </UnorderedList>
          <Paragraph className="ams-mb-m">
            {exampleParagraph()}
            {mark('m')}
          </Paragraph>
          <div className="ams-mb-xl">
            <OList marker="xl" />
          </div>

          <Heading className="ams-mb-s" level={2}>
            Meer informatie{mark('s')}
          </Heading>
          <Paragraph className="ams-mb-m">
            {exampleParagraph()}
            {mark('m')}
          </Paragraph>
          <LinkList className="ams-mb-m">
            {exampleLinkList().map((text, index, arr) => (
              <LinkList.Link href="#" key={text}>
                {text}
                {index === arr.length - 1 ? mark('m') : null}
              </LinkList.Link>
            ))}
          </LinkList>
          <Paragraph className="ams-mb-m">
            {exampleParagraph()}
            {mark('m')}
          </Paragraph>
          <StandaloneLink className="ams-mb-m" href="#">
            {exampleStandaloneLink()}
            {mark('m')}
          </StandaloneLink>
          <br />
          <CallToActionLink href="#">Start de aanvraag</CallToActionLink>
        </Grid.Cell>
      </Grid>
    </ShowMarkersContext.Provider>
  ),
}

// 3. Content page — feature interludes
export const ContentFeatureInterludes: Story = {
  render: ({ showMarkers }) => (
    <ShowMarkersContext.Provider value={showMarkers}>
      <ContentPageHeader heading="Een stille gracht, een luide stad" lead={exampleParagraph()} />
      <Image {...heroImage('feature')} aspectRatio="16:5" />
      <Grid paddingVertical="x-large">
        <Grid.Cell {...bodyCell}>
          <Heading className="ams-mb-s" level={2}>
            Citaten, beelden en cijfers{mark('s')}
          </Heading>
          <Paragraph className="ams-mb-l">
            {exampleParagraph()}
            {mark('l')}
          </Paragraph>
          <Blockquote className="ams-mb-l">
            {exampleQuote()}
            {mark('l')}
          </Blockquote>
          <Paragraph className="ams-mb-l">
            {exampleParagraph()}
            {mark('l')}
          </Paragraph>
          <div className="ams-mb-l">
            <InlineFigure marker="l" seed="feature-a" />
          </div>
          <Paragraph className="ams-mb-l">
            {exampleParagraph()}
            {mark('l')}
          </Paragraph>
          <div className="ams-mb-l">
            <SampleTable marker="l" />
          </div>
          <Blockquote className="ams-mb-l">
            {exampleQuote()}
            {mark('l')}
          </Blockquote>
          <div className="ams-mb-l">
            <InlineFigure marker="l" seed="feature-b" />
          </div>
          <SampleTable />
        </Grid.Cell>
      </Grid>
    </ShowMarkersContext.Provider>
  ),
}

// 4. Content page — realistic long-read
export const ContentMixedArticle: Story = {
  render: ({ showMarkers }) => (
    <ShowMarkersContext.Provider value={showMarkers}>
      <ContentPageHeader heading={exampleHeading()} lead={exampleParagraph()} />
      <Image {...heroImage('mixed')} aspectRatio="16:5" />
      <Grid paddingVertical="x-large">
        <Grid.Cell {...bodyCell}>
          <Heading className="ams-mb-s" level={2}>
            Introductie{mark('s')}
          </Heading>
          <Paragraph className="ams-mb-m">
            {exampleParagraph()}
            {mark('m')}
          </Paragraph>
          <Paragraph className="ams-mb-l">
            {exampleParagraph()}
            {mark('l')}
          </Paragraph>
          <Blockquote className="ams-mb-l">
            {exampleQuote()}
            {mark('l')}
          </Blockquote>
          <Paragraph className="ams-mb-m">
            {exampleParagraph()}
            {mark('m')}
          </Paragraph>
          <UnorderedList className="ams-mb-l">
            {exampleUnorderedList().map((text, index, arr) => (
              <UnorderedList.Item key={text}>
                {text}
                {index === arr.length - 1 ? mark('l') : null}
              </UnorderedList.Item>
            ))}
          </UnorderedList>
          <div className="ams-mb-l">
            <InlineFigure marker="l" seed="mixed-a" />
          </div>

          <Heading className="ams-mb-xs" level={3}>
            Een subsectie met detail{mark('xs')}
          </Heading>
          <Paragraph className="ams-mb-m">
            {exampleParagraph()}
            {mark('m')}
          </Paragraph>
          <OrderedList className="ams-mb-m">
            {exampleOrderedList().map((text, index, arr) => (
              <OrderedList.Item key={text}>
                {text}
                {index === arr.length - 1 ? mark('m') : null}
              </OrderedList.Item>
            ))}
          </OrderedList>
          <Paragraph className="ams-mb-l">
            {exampleParagraph()}
            {mark('l')}
          </Paragraph>
          <div className="ams-mb-l">
            <SampleTable marker="l" />
          </div>

          <Heading level={4}>Kleine kop</Heading>
          <Paragraph className="ams-mb-m">
            {exampleParagraph()}
            {mark('m')}
          </Paragraph>
          <StandaloneLink className="ams-mb-m" href="#">
            {exampleStandaloneLink()}
            {mark('m')}
          </StandaloneLink>
          <br />
          <CallToActionLink href="#">Vraag aan</CallToActionLink>
        </Grid.Cell>
      </Grid>
    </ShowMarkersContext.Provider>
  ),
}

// 5. Content page — own-cell neighbours
export const ContentOwnCellNeighbours: Story = {
  render: ({ showMarkers }) => (
    <ShowMarkersContext.Provider value={showMarkers}>
      <ContentPageHeader heading="Componenten in hun eigen Grid Cell" lead={exampleParagraph()} />
      <Grid paddingBottom="x-large">
        <Grid.Cell span="all">
          <Alert heading="Let op" headingLevel={2}>
            <Paragraph>
              Tijdens de werkzaamheden geldt een korte verkeersstop. Volg de aanwijzingen van de verkeersregelaars op.
            </Paragraph>
          </Alert>
        </Grid.Cell>
        <Grid.Cell {...bodyCell}>
          <Heading className="ams-mb-s" level={2}>
            Tussen de eigen-Cel componenten{mark('s')}
          </Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
        </Grid.Cell>
        <Grid.Cell span="all">
          <ImageSlider controls images={sliderImages} />
        </Grid.Cell>
        <Grid.Cell {...bodyCell}>
          <Paragraph>{exampleParagraph()}</Paragraph>
        </Grid.Cell>
        <Grid.Cell span="all">
          <Accordion headingLevel={3}>
            <Accordion.Section label={exampleAccordionHeading()}>
              <Paragraph>{exampleParagraph()}</Paragraph>
            </Accordion.Section>
            <Accordion.Section label={exampleAccordionHeading()}>
              <Paragraph>{exampleParagraph()}</Paragraph>
            </Accordion.Section>
          </Accordion>
        </Grid.Cell>
      </Grid>
      <Breakout className="ams-mb-xl">
        <Breakout.Cell colSpan="all" has="spotlight" key={1} rowSpan={{ narrow: 2, medium: 2, wide: 1 }} rowStart={2}>
          <Spotlight color="green" />
        </Breakout.Cell>
        <Breakout.Cell
          colSpan={{ narrow: 4, medium: 8, wide: 6 }}
          colStart={1}
          key={2}
          rowStart={{ narrow: 3, medium: 3, wide: 2 }}
        >
          <Paragraph color="inverse">{exampleParagraph()}</Paragraph>
        </Breakout.Cell>
        <Breakout.Cell
          colSpan={{ narrow: 4, medium: 8, wide: 6 }}
          colStart={{ narrow: 1, medium: 1, wide: 7 }}
          has="figure"
          key={3}
          rowSpan={2}
          rowStart={1}
        >
          <Image alt="" aspectRatio="1:1" src={picsum('breakout', 960, 960)} />
        </Breakout.Cell>
      </Breakout>
      <Grid paddingVertical="x-large">
        <Grid.Cell {...bodyCell}>
          <Heading className="ams-mb-s" level={2}>
            Na het Breakout-blok{mark('s')}
          </Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
        </Grid.Cell>
      </Grid>
      <Spotlight>
        <Grid paddingVertical="x-large">
          <Grid.Cell {...bodyCell}>
            <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
              Blijf op de hoogte{mark('s')}
            </Heading>
            <Paragraph className="ams-mb-m" color="inverse">
              {exampleParagraph()}
              {mark('m')}
            </Paragraph>
            <StandaloneLink color="inverse" href="#">
              {exampleStandaloneLink()}
            </StandaloneLink>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <Grid paddingVertical="x-large">
        <Grid.Cell {...bodyCell}>
          <Heading className="ams-mb-s" level={2}>
            Meer lezen{mark('s')}
          </Heading>
          <Paragraph>{exampleParagraph()}</Paragraph>
        </Grid.Cell>
      </Grid>
    </ShowMarkersContext.Provider>
  ),
}

// 6. Singular page — wide link blocks
export const SingularLinkBlocksWide: Story = {
  render: ({ showMarkers }) => (
    <ShowMarkersContext.Provider value={showMarkers}>
      <SingularPageHeader heading="Werk en inkomen" lead={exampleParagraph()} />
      <Grid paddingBottom="x-large">
        {[1, 2, 3, 4].map((n) => (
          <Grid.Cell key={n} span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading className="ams-mb-s" level={2} size="level-3">
              {exampleHeading()}
              {mark('s')}
            </Heading>
            <Paragraph className="ams-mb-m">
              {exampleParagraph()}
              {mark('m')}
            </Paragraph>
            <LinkList className="ams-mb-m">
              {exampleLinkList().map((text, index, arr) => (
                <LinkList.Link href="#" key={text}>
                  {text}
                  {index === arr.length - 1 ? mark('m') : null}
                </LinkList.Link>
              ))}
            </LinkList>
            <StandaloneLink href="#">{exampleStandaloneLink()}</StandaloneLink>
          </Grid.Cell>
        ))}
      </Grid>
      <Spotlight>
        <Grid paddingVertical="x-large">
          {[1, 2].map((n) => (
            <Grid.Cell key={n} span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
                {exampleHeading()}
                {mark('s')}
              </Heading>
              <Paragraph className="ams-mb-m" color="inverse">
                {exampleParagraph()}
                {mark('m')}
              </Paragraph>
              <StandaloneLink color="inverse" href="#">
                {exampleStandaloneLink()}
              </StandaloneLink>
            </Grid.Cell>
          ))}
        </Grid>
      </Spotlight>
      <Grid paddingVertical="x-large">
        {[1, 2].map((n) => (
          <Grid.Cell key={n} span={{ narrow: 4, medium: 4, wide: 6 }}>
            <Heading className="ams-mb-s" level={2} size="level-3">
              {exampleHeading()}
              {mark('s')}
            </Heading>
            <Paragraph className="ams-mb-m">
              {exampleParagraph()}
              {mark('m')}
            </Paragraph>
            <StandaloneLink href="#">{exampleStandaloneLink()}</StandaloneLink>
          </Grid.Cell>
        ))}
      </Grid>
    </ShowMarkersContext.Provider>
  ),
}

// 7. Singular page — navigation overview
export const SingularNavigationOverview: Story = {
  render: ({ showMarkers }) => (
    <ShowMarkersContext.Provider value={showMarkers}>
      <Grid paddingTop="large">
        <Grid.Cell {...headerCell}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <Grid paddingBottom="x-large">
        <Grid.Cell {...headerCell}>
          <Heading className="ams-mb-m" level={1}>
            Parkeren{mark('m')}
          </Heading>
          <Paragraph size="large">{exampleParagraph()}</Paragraph>
        </Grid.Cell>
        {[0, 1, 2, 3].map((index) => (
          <Grid.Cell
            key={index}
            span={{ narrow: 4, medium: 4, wide: 5 }}
            start={index % 2 ? undefined : { narrow: 1, medium: 1, wide: 2 }}
          >
            <Heading className="ams-mb-s" level={2} size="level-3">
              {exampleHeading()}
              {mark('s')}
            </Heading>
            <LinkList>
              {exampleLinkList().map((text) => (
                <LinkList.Link href="#" key={text}>
                  {text}
                </LinkList.Link>
              ))}
            </LinkList>
          </Grid.Cell>
        ))}
        <Grid.Cell span="all">
          <Heading level={2} size="level-1">
            Topic taken
          </Heading>
        </Grid.Cell>
        {[1, 2, 3, 4].map((n) => {
          const t = exampleTopTask()
          return (
            <Grid.Cell key={n} span={{ narrow: 4, medium: 4, wide: 3 }}>
              <Card>
                <Card.Heading level={3}>
                  <Card.Link href="#">{t.heading}</Card.Link>
                </Card.Heading>
                <Paragraph>{t.description}</Paragraph>
              </Card>
            </Grid.Cell>
          )
        })}
      </Grid>
    </ShowMarkersContext.Provider>
  ),
}

// 8. Singular page — Home-style mix
export const SingularHomeMix: Story = {
  render: ({ showMarkers }) => (
    <ShowMarkersContext.Provider value={showMarkers}>
      <main id="inhoud">
        <h1 className="ams-visually-hidden">Homepage</h1>
        <Grid paddingVertical="x-large">
          <Grid.Cell {...bodyCell}>
            <Heading className="ams-mb-s" level={2}>
              Welkom in Amsterdam{mark('s')}
            </Heading>
            <Paragraph className="ams-mb-m" size="large">
              {exampleParagraph()}
              {mark('m')}
            </Paragraph>
            <CallToActionLink href="#">Ontdek de stad</CallToActionLink>
          </Grid.Cell>
        </Grid>
        <Grid gapVertical="large" paddingVertical="x-large">
          <Grid.Cell span="all">
            <Heading level={2} size="level-1">
              Top taken
            </Heading>
          </Grid.Cell>
          {[1, 2, 3, 4].map((n) => {
            const t = exampleTopTask()
            return (
              <Grid.Cell key={n} span={{ narrow: 4, medium: 4, wide: 3 }}>
                <Card>
                  <Card.Heading level={3}>
                    <Card.Link href="#">{t.heading}</Card.Link>
                  </Card.Heading>
                  <Paragraph>{t.description}</Paragraph>
                </Card>
              </Grid.Cell>
            )
          })}
        </Grid>
        <Spotlight color="green">
          <Grid paddingVertical="x-large">
            {[1, 2].map((n) => (
              <Grid.Cell key={n} span={{ narrow: 4, medium: 4, wide: 6 }}>
                <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
                  {exampleHeading()}
                  {mark('s')}
                </Heading>
                <Paragraph className="ams-mb-m" color="inverse">
                  {exampleParagraph()}
                  {mark('m')}
                </Paragraph>
                <StandaloneLink color="inverse" href="#">
                  {exampleStandaloneLink()}
                </StandaloneLink>
              </Grid.Cell>
            ))}
          </Grid>
        </Spotlight>
        <Grid gapVertical="large" paddingVertical="x-large">
          <Grid.Cell span="all">
            <Heading level={2} size="level-1">
              Nieuws
            </Heading>
          </Grid.Cell>
          {[1, 2, 3].map((n) => (
            <Grid.Cell key={n} span={4}>
              <Card>
                <Card.Image alt="" src={picsum(`home-news-${n}`, 640, 360)} />
                <Card.HeadingGroup tagline="Nieuws">
                  <Card.Heading level={3}>
                    <Card.Link href="#">{exampleHeading()}</Card.Link>
                  </Card.Heading>
                </Card.HeadingGroup>
                <Paragraph>{exampleParagraph()}</Paragraph>
              </Card>
            </Grid.Cell>
          ))}
        </Grid>
      </main>
    </ShowMarkersContext.Provider>
  ),
}
