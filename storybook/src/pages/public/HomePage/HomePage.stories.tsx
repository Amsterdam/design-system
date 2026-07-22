/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card, Grid, Heading, Overlap, Paragraph, Spotlight, StandaloneLink } from '@amsterdam/design-system-react'

import { Default as OverlapStory } from '../../../components/Overlap/Overlap.stories'
import { commonMeta } from '../common/commonMeta'
import { newsSection, spotlightSections, topTaskSection } from './data'

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Home Page',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args: unknown) => (
    <main id="inhoud">
      <h1 className="ams-visually-hidden">Homepage van de gemeente Amsterdam</h1>
      <Overlap>{OverlapStory.args?.children}</Overlap>
      <Grid gapVertical="large" paddingVertical="x-large">
        <Grid.Cell span="all">
          <Heading level={2} size="level-1">
            {topTaskSection.title}
          </Heading>
        </Grid.Cell>
        {topTaskSection.tasks.map(({ title, description }) => (
          <Grid.Cell key={title} span={{ narrow: 4, medium: 4, wide: 3 }}>
            <Card>
              <Card.Heading level={3}>
                <Card.Link href="#">{title}</Card.Link>
              </Card.Heading>
              <Paragraph>{description}</Paragraph>
            </Card>
          </Grid.Cell>
        ))}
      </Grid>
      <Spotlight>
        <Grid paddingVertical="x-large">
          {spotlightSections.map(({ title, description, link }) => (
            <Grid.Cell key={title} span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">
                {title}
              </Heading>
              <Paragraph className="ams-mb-m" color="inverse">
                {description}
              </Paragraph>
              <StandaloneLink color="inverse" href="#">
                {link}
              </StandaloneLink>
            </Grid.Cell>
          ))}
        </Grid>
      </Spotlight>
      <Grid gapVertical="large" paddingVertical="x-large">
        <Grid.Cell span="all">
          <Heading level={2} size="level-1">
            {newsSection.title}
          </Heading>
        </Grid.Cell>
        {newsSection.items.map(({ title, description, image }) => (
          <Grid.Cell key={title} span={4}>
            <Card>
              <Card.Image alt="" src={image} />
              <Card.HeadingGroup tagline="Nieuws">
                <Card.Heading level={3}>
                  <Card.Link href="#">{title}</Card.Link>
                </Card.Heading>
              </Card.HeadingGroup>
              <Paragraph>{description}</Paragraph>
            </Card>
          </Grid.Cell>
        ))}
      </Grid>
    </main>
  ),
} satisfies Meta

export default meta

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        // The Code Panel regenerates a `render` story’s source from the rendered tree, which drops JSX
        // comments and expands each `map` into repeated blocks. Provide the source by hand so the
        // guidance stays visible and the `map` pattern reads the way a developer would write it.
        code: `<main id="inhoud">
  {/*
   * The homepage’s visible headings start at the section level, so give the page one visually hidden
   * h1. Screen readers still announce a page title and the heading outline keeps a single top level.
   */}
  <h1 className="ams-visually-hidden">Homepage van de gemeente Amsterdam</h1>
  {/* A hero that overlaps a full-width image with the block beneath it – see the Overlap component. */}
  <Overlap>{/* … */}</Overlap>
  <Grid gapVertical="large" paddingVertical="x-large">
    <Grid.Cell span="all">
      {/* Second level in the outline (the hidden h1 is first), shown at the largest size. */}
      <Heading level={2} size="level-1">{topTaskSection.title}</Heading>
    </Grid.Cell>
    {topTaskSection.tasks.map(({ title, description }) => (
      <Grid.Cell key={title} span={{ narrow: 4, medium: 4, wide: 3 }}>
        <Card>
          {/* Card.Link stretches over the whole Card, so the entire card is one clickable link. */}
          <Card.Heading level={3}>
            <Card.Link href="#">{title}</Card.Link>
          </Card.Heading>
          <Paragraph>{description}</Paragraph>
        </Card>
      </Grid.Cell>
    ))}
  </Grid>
  <Spotlight>
    <Grid paddingVertical="x-large">
      {spotlightSections.map(({ title, description, link }) => (
        <Grid.Cell key={title} span={{ narrow: 4, medium: 4, wide: 6 }}>
          {/* On the dark Spotlight, color="inverse" switches text and links to their light variant. */}
          <Heading className="ams-mb-s" color="inverse" level={2} size="level-3">{title}</Heading>
          <Paragraph className="ams-mb-m" color="inverse">{description}</Paragraph>
          <StandaloneLink color="inverse" href="#">{link}</StandaloneLink>
        </Grid.Cell>
      ))}
    </Grid>
  </Spotlight>
  <Grid gapVertical="large" paddingVertical="x-large">
    <Grid.Cell span="all">
      <Heading level={2} size="level-1">{newsSection.title}</Heading>
    </Grid.Cell>
    {newsSection.items.map(({ title, description, image }) => (
      <Grid.Cell key={title} span={4}>
        <Card>
          <Card.Image alt="" src={image} />
          {/* Card.HeadingGroup adds a short tagline above the card’s heading. */}
          <Card.HeadingGroup tagline="Nieuws">
            <Card.Heading level={3}>
              <Card.Link href="#">{title}</Card.Link>
            </Card.Heading>
          </Card.HeadingGroup>
          <Paragraph>{description}</Paragraph>
        </Card>
      </Grid.Cell>
    ))}
  </Grid>
</main>`,
        language: 'tsx',
      },
    },
  },
}
