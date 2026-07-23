/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid, Heading, Paragraph } from '@amsterdam/design-system-react'

import { exampleParagraph } from '#storybook/_common/exampleContent'

import { commonMeta } from '../common/commonMeta'

const exampleParagraph1 = exampleParagraph()
const exampleParagraph2 = exampleParagraph()

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Home Page',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) => (
    <Grid paddingVertical="x-large">
      {/*
       * appearance="transparent" removes the cell’s background and padding, so the page title sits directly
       * on the page instead of looking like one of the content blocks the other cells form.
       */}
      <Grid.Cell appearance="transparent" span="all">
        <Heading level={1}>Titel van de pagina</Heading>
      </Grid.Cell>
      {/*
       * This is a layout demo: the empty cells stand in for content blocks. Their blockSize only gives them
       * a height to show here – on a real page the content sets the height. What matters is the responsive
       * span: how many of the grid’s columns a cell fills at narrow, medium, and wide widths. That is what
       * makes the cells reflow into different rows as the window changes.
       */}
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }} style={{ blockSize: '12rem' }} />
      <Grid.Cell span={{ narrow: 1, medium: 3, wide: 4 }} style={{ blockSize: '10rem' }} />
      <Grid.Cell span={{ narrow: 3, medium: 3, wide: 3 }}>
        <Paragraph>{exampleParagraph1}</Paragraph>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 9 }}>
        <Paragraph>{exampleParagraph2}</Paragraph>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 2, medium: 3, wide: 6 }} style={{ blockSize: '8rem' }} />
      <Grid.Cell span={{ narrow: 2, medium: 3, wide: 6 }} style={{ blockSize: '8rem' }} />
      <Grid.Cell span={{ narrow: 3, medium: 2, wide: 4 }} style={{ blockSize: '6rem' }} />
      <Grid.Cell span={{ narrow: 1, medium: 4, wide: 4 }} style={{ blockSize: '8rem' }} />
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }} style={{ blockSize: '6rem' }} />
    </Grid>
  ),
} satisfies Meta

export default meta

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        // Because this story’s `render` takes an argument, the Code Panel rebuilds its source from the rendered tree:
        // JSX comments disappear. Provide the source by hand so the panel shows a trimmed,
        // annotated version of the page.
        code: `<Grid paddingVertical="x-large">
  {/*
   * appearance="transparent" removes the cell’s background and padding, so the page title sits directly
   * on the page instead of looking like one of the content blocks the other cells form.
   */}
  <Grid.Cell appearance="transparent" span="all">
    <Heading level={1}>Titel van de pagina</Heading>
  </Grid.Cell>
  {/*
   * This is a layout demo: the empty cells stand in for content blocks. Their blockSize only gives them
   * a height to show here – on a real page the content sets the height. What matters is the responsive
   * span: how many of the grid’s columns a cell fills at narrow, medium, and wide widths. That is what
   * makes the cells reflow into different rows as the window changes.
   */}
  <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }} style={{ blockSize: '12rem' }} />
  <Grid.Cell span={{ narrow: 1, medium: 3, wide: 4 }} style={{ blockSize: '10rem' }} />
  <Grid.Cell span={{ narrow: 3, medium: 3, wide: 3 }}>
    <Paragraph>Voorbeeldtekst in een contentblok.</Paragraph>
  </Grid.Cell>
  <Grid.Cell span={{ narrow: 4, medium: 5, wide: 9 }}>
    <Paragraph>Voorbeeldtekst in een contentblok.</Paragraph>
  </Grid.Cell>
  <Grid.Cell span={{ narrow: 2, medium: 3, wide: 6 }} style={{ blockSize: '8rem' }} />
  <Grid.Cell span={{ narrow: 2, medium: 3, wide: 6 }} style={{ blockSize: '8rem' }} />
  <Grid.Cell span={{ narrow: 3, medium: 2, wide: 4 }} style={{ blockSize: '6rem' }} />
  <Grid.Cell span={{ narrow: 1, medium: 4, wide: 4 }} style={{ blockSize: '8rem' }} />
  <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }} style={{ blockSize: '6rem' }} />
</Grid>`,
        language: 'tsx',
      },
    },
  },
}
