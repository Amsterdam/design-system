/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { FormEvent } from 'react'

import { Card, Grid, Heading, Paragraph, SearchField, Skeleton } from '@amsterdam/design-system-react'
import { useEffect, useRef, useState } from 'react'

import { commonMeta } from '../common/commonMeta'

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

const cellSpan = { narrow: 4, medium: 4, wide: 4 } as const

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Loading Page',
  args: { initialPhase: 'idle' },
  // The initial phase only picks which state each story opens in; it is not a prop to configure.
  argTypes: { initialPhase: { table: { disable: true } } },
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
      <main id="inhoud">
        {/* The first Grid holds the search field instead of a breadcrumb, so it still takes the large top padding. */}
        <Grid paddingTop="large">
          <Grid.Cell span="all">
            <Heading level={1}>Zoeken op amsterdam.nl</Heading>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }}>
            <SearchField onSubmit={search}>
              <SearchField.Input defaultValue={initialQuery} label="Zoek op de website" name="search" />
              <SearchField.Button />
            </SearchField>
          </Grid.Cell>
        </Grid>

        {/*
         * Mark the whole results region busy while it loads and let it announce once, rather than once per
         * Skeleton – which would repeat the message for every card. The Skeletons are hidden from assistive
         * technologies, so this region is all a screen reader hears.
         */}
        {/* The search field is not a Breadcrumb, so this Grid keeps the regular x-large top padding. */}
        {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
        <Grid aria-busy={phase === 'loading'} paddingBottom="2x-large" paddingTop="x-large">
          <Grid.Cell span="all">
            {/*
             * Keep one status message in the DOM at all times and only change its text – from a loading
             * message to the result count – so screen readers reliably announce the update. A Loading Region
             * component to wrap this pattern is planned; until then it is plain HTML.
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
           * Mirroring the shape keeps the layout from shifting when the real content arrives.
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

const pageShell = (busy: string, status: string, results: string) => `<main id="inhoud">
  {/* The first Grid holds the search field instead of a breadcrumb, so it still takes the large top padding. */}
  <Grid paddingTop="large">
    <Grid.Cell span="all">
      <Heading level={1}>Zoeken op amsterdam.nl</Heading>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }}>
      <SearchField onSubmit={search}>
        <SearchField.Input defaultValue="woningbouw" label="Zoek op de website" name="search" />
        <SearchField.Button />
      </SearchField>
    </Grid.Cell>
  </Grid>

  {/*
   * Mark the whole results region busy while it loads and let it announce once, rather than once per
   * Skeleton – which would repeat the message for every card. The Skeletons are hidden from assistive
   * technologies, so this region is all a screen reader hears.
   */}
  {/* The search field is not a Breadcrumb, so this Grid keeps the regular x-large top padding. */}
  {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
  <Grid aria-busy={${busy}} paddingBottom="2x-large" paddingTop="x-large">
    <Grid.Cell span="all">
      {/*
       * Keep one status message in the DOM at all times and only change its text – from a loading
       * message to the result count – so screen readers reliably announce the update. A Loading Region
       * component to wrap this pattern is planned; until then it is plain HTML.
       */}
      <p className="ams-visually-hidden" role="status">${status}</p>${results}
  </Grid>
</main>`

// The Code Panel regenerates a `render` story’s source from the rendered tree, which drops JSX
// comments. Provide the source by hand so the guidance above the results region stays visible.
const idleSource = pageShell(
  'false',
  '',
  `
      <Paragraph>Klik op de zoekknop om de resultaten te laden.</Paragraph>
    </Grid.Cell>`,
)

const loadingSource = pageShell(
  'true',
  'Zoekresultaten voor ‘woningbouw’ worden geladen',
  `
    </Grid.Cell>

    {/*
     * Compose each Skeleton from the same parts, in the same Grid cell, as the Card that will replace
     * it: an image of the same aspect ratio, a heading, and two paragraph lines for the description.
     * Mirroring the shape keeps the layout from shifting when the real content arrives.
     */}
    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
      <Skeleton>
        <Skeleton.Image />
        <Skeleton.Heading />
        <Skeleton.Paragraph lines={2} />
      </Skeleton>
    </Grid.Cell>
    {/* … five more Skeleton cells, one for each result that is loading … */}`,
)

const loadedSource = pageShell(
  'false',
  '6 resultaten voor ‘woningbouw’ gevonden',
  `
      <Heading level={2} size="level-3">6 resultaten voor ‘woningbouw’</Heading>
    </Grid.Cell>

    <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }}>
      <Card>
        <Card.Image alt="" aspectRatio="16:9" src="https://picsum.photos/id/1015/640/360" />
        <Card.Heading level={3}>
          <Card.Link href="#">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
        </Card.Heading>
        <Paragraph>Een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.</Paragraph>
      </Card>
    </Grid.Cell>
    {/* … five more Cards, in the same cells the Skeletons occupied … */}`,
)

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
