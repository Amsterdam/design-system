/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { FormEvent } from 'react'

import { Card, Grid, Heading, Paragraph, SearchField, Skeleton } from '@amsterdam/design-system-react'
import { useEffect, useRef, useState } from 'react'

import { commonMeta, pageParameters } from '../common/commonMeta'

const initialQuery = 'woningbouw'

const results = [
  {
    description: 'Een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.',
    heading: 'Nederlands eerste houten woonwijk komt in Zuidoost',
    imageSrc: 'https://picsum.photos/id/1015/640/360',
  },
  {
    description: 'De komende jaren bouwt de gemeente duizenden nieuwe woningen in stadsdeel Noord.',
    heading: 'Meer betaalbare woningen in Noord',
    imageSrc: 'https://picsum.photos/id/1016/640/360',
  },
  {
    description: 'Havenstad groeit uit tot een gemengd stadsgebied met ruimte om te wonen en te werken.',
    heading: 'Woningbouwplannen Havenstad',
    imageSrc: 'https://picsum.photos/id/1029/640/360',
  },
  {
    description: 'Bekijk hoe u zich inschrijft en wat de wachttijden zijn voor een sociale huurwoning.',
    heading: 'Sneller een sociale huurwoning',
    imageSrc: 'https://picsum.photos/id/1039/640/360',
  },
  {
    description: 'Subsidies en advies om uw huis te isoleren en van het gas af te gaan.',
    heading: 'Verduurzaam uw woning',
    imageSrc: 'https://picsum.photos/id/1043/640/360',
  },
  {
    description: 'Op het Zeeburgereiland verrijst een hoogstedelijke buurt met hoge woontorens.',
    heading: 'Nieuwbouw in de Sluisbuurt',
    imageSrc: 'https://picsum.photos/id/1044/640/360',
  },
]

type Phase = 'idle' | 'loaded' | 'loading'

type LoadingPageArgs = { readonly initialPhase: Phase }

// The Skeletons and the Cards share one span, so the placeholders cannot drift from the cells they stand in for.
const cellSpan = { narrow: 4, medium: 4, wide: 4 } as const

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Loading Page',
  args: { initialPhase: 'idle' },
  // The initial phase only picks which state each story opens in; it is not a prop to configure.
  argTypes: { initialPhase: { table: { disable: true } } },
  parameters: pageParameters(
    'Shows how a search results page behaves while it fetches content, ' +
      'keeping the layout stable as placeholders make way for the real results.',
  ),
  render: ({ initialPhase }: LoadingPageArgs) => {
    const [phase, setPhase] = useState<Phase>(initialPhase)
    const [query, setQuery] = useState(initialQuery)
    const loadedTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

    // Clear a pending swap if the story unmounts, so it never updates state after it is gone.
    useEffect(
      () => () => {
        if (loadedTimeout.current) {
          clearTimeout(loadedTimeout.current)
        }
      },
      [],
    )

    const search = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const value = new FormData(event.currentTarget).get('search')
      if (typeof value === 'string' && value.trim()) {
        setQuery(value.trim())
      }

      // Show the placeholders, then swap in the results after a short delay. Clear any pending swap first,
      // so a second search cannot flip an earlier one to loaded while this one is still loading.
      if (loadedTimeout.current) {
        clearTimeout(loadedTimeout.current)
      }
      setPhase('loading')
      loadedTimeout.current = setTimeout(() => setPhase('loaded'), 3000)
    }

    const status =
      phase === 'loading'
        ? `Zoekresultaten voor ‘${query}’ worden geladen`
        : phase === 'loaded'
          ? `${results.length} resultaten voor ‘${query}’ gevonden`
          : ''

    return (
      // The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
      // The Content Header and the results are each their own section, so a plain <main> wraps them both.
      <main id="inhoud">
        {/* This page opens with its title rather than a Breadcrumb, so this Grid takes the large top padding. */}
        <Grid paddingTop="large">
          {/*
           * The Content Header takes half the grid on wide screens rather than the documented Cell, so the search
           * input does not stretch to an unusable length. It takes three quarters of the grid at medium and the
           * full width at narrow. The title follows that width, because search is not a content page.
           */}
          {/* ams-prose sets the vertical rhythm between the title and the search field. */}
          <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 6 }}>
            <Heading level={1}>Zoeken op amsterdam.nl</Heading>
            <SearchField onSubmit={search}>
              <SearchField.Input defaultValue={initialQuery} label="Zoek op de website" name="search" />
              <SearchField.Button />
            </SearchField>
          </Grid.Cell>
        </Grid>

        {/*
         * Mark the whole results region busy while it loads and let it announce once, rather than once per
         * Skeleton – which would repeat the message for every card. The Skeletons are hidden from assistive
         * technologies, so this region is all a screen reader hears. Be aware that aria-busy="true" also
         * permits assistive technology to hold back updates from the live region below and deliver them as
         * one atomic update once it turns false. The ARIA spec allows this rather than requiring it, so not
         * every screen reader does.
         */}
        {/* Both Grids have the default background colour, so this one takes a paddingTop of 2x-large. */}
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid aria-busy={phase === 'loading'} paddingBottom="2x-large" paddingTop="2x-large">
          <Grid.Cell span="all">
            {/*
             * Keep one status message in the DOM at all times and only change its text – from a loading message
             * to the result count. A live region inserted together with its text is announced inconsistently
             * across screen readers and browsers, so an always-present region is the more robust pattern. No
             * component wraps this pattern yet, so the Grid carries the busy state and the message is a visually
             * hidden <p>.
             */}
            <p className="ams-visually-hidden" role="status">
              {status}
            </p>
            {phase === 'idle' && <Paragraph>Klik op de zoekknop om de resultaten te laden.</Paragraph>}
            {phase === 'loaded' && (
              <Heading level={2} size="level-3">{`${results.length} resultaten voor ‘${query}’`}</Heading>
            )}
          </Grid.Cell>

          {/*
           * Compose each Skeleton from the same parts, in the same Grid cell, as the Card that will replace
           * it: an image of the same aspect ratio, a heading, and two paragraph lines for the description.
           * Mirroring the shape keeps the layout shift small, but does not remove it: Skeleton.Heading is
           * fixed to the Heading 2 size while this Card’s heading is level-3, the Skeleton spaces all its
           * parts alike where the Card sets a smaller margin below its heading, and real headings and
           * descriptions wrap onto more lines in these narrow cells than the placeholders show.
           */}
          {phase === 'loading' &&
            results.map((_, index) => (
              <Grid.Cell key={index} span={cellSpan}>
                <Skeleton>
                  <Skeleton.Image />
                  <Skeleton.Heading />
                  <Skeleton.Paragraph lines={2} />
                </Skeleton>
              </Grid.Cell>
            ))}

          {phase === 'loaded' &&
            results.map((result) => (
              <Grid.Cell key={result.heading} span={cellSpan}>
                <Card>
                  {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
                  <Card.Image alt="" aspectRatio="16:9" src={result.imageSrc} />
                  <Card.Heading level={3}>
                    <Card.Link href="#">{result.heading}</Card.Link>
                  </Card.Heading>
                  <Paragraph>{result.description}</Paragraph>
                </Card>
              </Grid.Cell>
            ))}
        </Grid>
      </main>
    )
  },
} satisfies Meta<LoadingPageArgs>

export default meta

type Story = StoryObj<typeof meta>

type PageSourceOptions = {
  busy: string
  extraCells?: string
  status: string
  statusCell?: string
}

const pageShell = ({ busy, extraCells = '', status, statusCell = '' }: PageSourceOptions) =>
  `// The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
// The Content Header and the results are each their own section, so a plain <main> wraps them both.
<main id="inhoud">
  {/* This page opens with its title rather than a Breadcrumb, so this Grid takes the large top padding. */}
  <Grid paddingTop="large">
    {/*
     * The Content Header takes half the grid on wide screens rather than the documented Cell, so the search
     * input does not stretch to an unusable length. It takes three quarters of the grid at medium and the
     * full width at narrow. The title follows that width, because search is not a content page.
     */}
    {/* ams-prose sets the vertical rhythm between the title and the search field. */}
    <Grid.Cell className="ams-prose" span={{ narrow: 4, medium: 6, wide: 6 }}>
      <Heading level={1}>Zoeken op amsterdam.nl</Heading>
      <SearchField onSubmit={search}>
        <SearchField.Input defaultValue="woningbouw" label="Zoek op de website" name="search" />
        <SearchField.Button />
      </SearchField>
    </Grid.Cell>
  </Grid>

  {/*
   * Mark the whole results region busy while it loads and let it announce once, rather than once per
   * Skeleton – which would repeat the message for every card. The Skeletons are hidden from assistive
   * technologies, so this region is all a screen reader hears. Be aware that aria-busy="true" also
   * permits assistive technology to hold back updates from the live region below and deliver them as
   * one atomic update once it turns false. The ARIA spec allows this rather than requiring it, so not
   * every screen reader does.
   */}
  {/* Both Grids have the default background colour, so this one takes a paddingTop of 2x-large. */}
  {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
  <Grid aria-busy={${busy}} paddingBottom="2x-large" paddingTop="2x-large">
    <Grid.Cell span="all">
      {/*
       * Keep one status message in the DOM at all times and only change its text – from a loading message
       * to the result count. A live region inserted together with its text is announced inconsistently
       * across screen readers and browsers, so an always-present region is the more robust pattern. No
       * component wraps this pattern yet, so the Grid carries the busy state and the message is a visually
       * hidden <p>.
       */}
      <p className="ams-visually-hidden" role="status">${status}</p>${statusCell}
    </Grid.Cell>${extraCells}
  </Grid>
</main>`

// Because these stories’ `render` takes an argument, the Code Panel rebuilds their source from the rendered tree:
// JSX comments disappear and every `map` is expanded. Provide the source by hand so each story shows its own phase as
// plain markup, without the state that switches between them.
const idleSource = pageShell({
  busy: 'false',
  status: '',
  statusCell: `
      <Paragraph>Klik op de zoekknop om de resultaten te laden.</Paragraph>`,
})

const loadingSource = pageShell({
  busy: 'true',
  extraCells: `

    {/*
     * Compose each Skeleton from the same parts, in the same Grid cell, as the Card that will replace
     * it: an image of the same aspect ratio, a heading, and two paragraph lines for the description.
     * Mirroring the shape keeps the layout shift small, but does not remove it: Skeleton.Heading is
     * fixed to the Heading 2 size while this Card’s heading is level-3, the Skeleton spaces all its
     * parts alike where the Card sets a smaller margin below its heading, and real headings and
     * descriptions wrap onto more lines in these narrow cells than the placeholders show.
     */}
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
      <Skeleton>
        <Skeleton.Image />
        <Skeleton.Heading />
        <Skeleton.Paragraph lines={2} />
      </Skeleton>
    </Grid.Cell>
    {/* … five more Skeleton cells, one for each result that is loading … */}`,
  status: 'Zoekresultaten voor ‘woningbouw’ worden geladen',
})

const loadedSource = pageShell({
  busy: 'false',
  extraCells: `

    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
      <Card>
        {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
        <Card.Image alt="" aspectRatio="16:9" src="https://picsum.photos/id/1015/640/360" />
        <Card.Heading level={3}>
          <Card.Link href="#">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
        </Card.Heading>
        <Paragraph>Een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.</Paragraph>
      </Card>
    </Grid.Cell>
    {/* … five more Cards, in the same cells the Skeletons occupied … */}`,
  status: '6 resultaten voor ‘woningbouw’ gevonden',
  statusCell: `
      <Heading level={2} size="level-3">6 resultaten voor ‘woningbouw’</Heading>`,
})

export const Default: Story = {
  parameters: { docs: { source: { code: idleSource, language: 'tsx' } } },
}

export const Loading: Story = {
  args: { initialPhase: 'loading' },
  parameters: { docs: { source: { code: loadingSource, language: 'tsx' } } },
}

export const Loaded: Story = {
  args: { initialPhase: 'loaded' },
  parameters: { docs: { source: { code: loadedSource, language: 'tsx' } } },
}
