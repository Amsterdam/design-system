/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid, Heading, Paragraph } from '@amsterdam/design-system-react'

import { exampleParagraph } from '../../../_common/exampleContent'
import { commonMeta } from '../common/config'

const exampleParagraph1 = exampleParagraph()
const exampleParagraph2 = exampleParagraph()

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Home Page',
  // oxlint-disable-next-line no-unused-vars
  render: (args) => (
    <Grid paddingBottom="x-large" paddingTop="large">
      <Grid.Cell appearance="transparent" span="all">
        <Heading level={1}>Titel van de pagina</Heading>
      </Grid.Cell>
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

export const Default: StoryObj = {}
