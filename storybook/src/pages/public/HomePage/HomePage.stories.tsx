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
    // The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
    <main id="inhoud">
      {/*
       * The homepage’s visible headings start at the section level, so give the page one visually hidden
       * h1. Screen readers still announce a page title and the heading outline keeps a single top level.
       */}
      <h1 className="ams-visually-hidden">Homepage van de gemeente Amsterdam</h1>
      {/* A hero that overlaps a full-width image with the block beneath it – see the Overlap component. */}
      {/*
       * The hero content comes from the Overlap component’s own story: reading its args.children breaks
       * silently if that story ever switches to a render function, leaving this hero empty.
       */}
      <Overlap>{OverlapStory.args?.children}</Overlap>
      <Grid paddingVertical="x-large">
        <Grid.Cell span="all">
          {/* Second level in the outline (the hidden h1 is first), shown at the largest size. */}
          <Heading level={2} size="level-1">
            {topTaskSection.title}
          </Heading>
        </Grid.Cell>
        {/*
         * Cells flow from the left in source order, so no section here needs a start. On the wide grid the top
         * tasks fit four to a row at {{ narrow: 4, medium: 4, wide: 3 }} and three preview cards at span={4}
         * fill the row exactly; on the medium grid both drop to two per row, and on the narrow grid every cell
         * is full width. The two Spotlight blocks at {{ narrow: 4, medium: 4, wide: 6 }} sit side by side on
         * both the wide and medium grids, and stack on the narrow one.
         */}
        {topTaskSection.tasks.map(({ title, description }) => (
          <Grid.Cell key={title} span={{ narrow: 4, medium: 4, wide: 3 }}>
            <Card>
              {/* Card.Link stretches over the whole Card, so the entire Card is one clickable link. */}
              <Card.Heading level={3}>
                <Card.Link href="#">{title}</Card.Link>
              </Card.Heading>
              <Paragraph>{description}</Paragraph>
            </Card>
          </Grid.Cell>
        ))}
      </Grid>
      {/*
       * These highlights are part of the homepage’s own content, so the Spotlight stays a plain band inside <main>.
       * On the Article Page the same band sits outside <main> as an as="aside" landmark beside the article.
       */}
      <Spotlight>
        <Grid paddingVertical="x-large">
          {spotlightSections.map(({ title, description, link }) => (
            <Grid.Cell className="ams-prose" key={title} span={{ narrow: 4, medium: 4, wide: 6 }}>
              <Heading color="inverse" level={2} size="level-3">
                {title}
              </Heading>
              <Paragraph color="inverse">{description}</Paragraph>
              <StandaloneLink color="inverse" href="#">
                {link}
              </StandaloneLink>
            </Grid.Cell>
          ))}
        </Grid>
      </Spotlight>
      {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
      <Grid paddingBottom="2x-large" paddingTop="x-large">
        <Grid.Cell span="all">
          <Heading level={2} size="level-1">
            {newsSection.title}
          </Heading>
        </Grid.Cell>
        {newsSection.items.map(({ title, description, image }) => (
          <Grid.Cell key={title} span={4}>
            <Card>
              {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
              <Card.Image alt="" src={image} />
              {/* Card.HeadingGroup adds a short tagline above the Card’s heading. */}
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
        // Because this story’s `render` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear and every `map` is expanded. Provide the source by hand so the page reads the way a
        // developer would write it.
        code: `// The Skip Link in the Page Layout targets this id, so the next Tab press lands in the main content.
<main id="inhoud">
  {/*
   * The homepage’s visible headings start at the section level, so give the page one visually hidden
   * h1. Screen readers still announce a page title and the heading outline keeps a single top level.
   */}
  <h1 className="ams-visually-hidden">Homepage van de gemeente Amsterdam</h1>
  {/* A hero that overlaps a full-width image with the block beneath it – see the Overlap component. */}
  <Overlap>{/* … */}</Overlap>
  <Grid paddingVertical="x-large">
    <Grid.Cell span="all">
      {/* Second level in the outline (the hidden h1 is first), shown at the largest size. */}
      <Heading level={2} size="level-1">{topTaskSection.title}</Heading>
    </Grid.Cell>
    {/*
     * Cells flow from the left in source order, so no section here needs a start. On the wide grid the top
     * tasks fit four to a row at {{ narrow: 4, medium: 4, wide: 3 }} and three preview cards at span={4}
     * fill the row exactly; on the medium grid both drop to two per row, and on the narrow grid every cell
     * is full width. The two Spotlight blocks at {{ narrow: 4, medium: 4, wide: 6 }} sit side by side on
     * both the wide and medium grids, and stack on the narrow one.
     */}
    {topTaskSection.tasks.map(({ title, description }) => (
      <Grid.Cell key={title} span={{ narrow: 4, medium: 4, wide: 3 }}>
        <Card>
          {/* Card.Link stretches over the whole Card, so the entire Card is one clickable link. */}
          <Card.Heading level={3}>
            <Card.Link href="#">{title}</Card.Link>
          </Card.Heading>
          <Paragraph>{description}</Paragraph>
        </Card>
      </Grid.Cell>
    ))}
  </Grid>
  {/*
   * These highlights are part of the homepage’s own content, so the Spotlight stays a plain band inside <main>.
   * On the Article Page the same band sits outside <main> as an as="aside" landmark beside the article.
   */}
  <Spotlight>
    <Grid paddingVertical="x-large">
      {spotlightSections.map(({ title, description, link }) => (
        <Grid.Cell className="ams-prose" key={title} span={{ narrow: 4, medium: 4, wide: 6 }}>
          <Heading color="inverse" level={2} size="level-3">{title}</Heading>
          <Paragraph color="inverse">{description}</Paragraph>
          <StandaloneLink color="inverse" href="#">{link}</StandaloneLink>
        </Grid.Cell>
      ))}
    </Grid>
  </Spotlight>
  {/* The last Grid before the Page Footer takes a paddingBottom of 2x-large. */}
  <Grid paddingBottom="2x-large" paddingTop="x-large">
    <Grid.Cell span="all">
      <Heading level={2} size="level-1">{newsSection.title}</Heading>
    </Grid.Cell>
    {newsSection.items.map(({ title, description, image }) => (
      <Grid.Cell key={title} span={4}>
        <Card>
          {/* Screen readers skip a Card’s image, so only use a decorative one with an empty alt. */}
          <Card.Image alt="" src={image} />
          {/* Card.HeadingGroup adds a short tagline above the Card’s heading. */}
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
