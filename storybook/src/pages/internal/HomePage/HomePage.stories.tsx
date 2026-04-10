/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid, Heading } from '@amsterdam/design-system-react'
import { Paragraph } from '@amsterdam/design-system-react/dist/src'

import { exampleParagraph } from '../../../_common/exampleContent'
import { commonMeta } from '../common/config'

const exampleParagraph1 = exampleParagraph()
const exampleParagraph2 = exampleParagraph()

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Home Page',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (args) => (
    <Grid paddingBottom="x-large" paddingTop="large">
      <Grid.Cell appearance="transparent" span="all">
        <Heading level={1}>Titel van de pagina</Heading>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }} style={{ height: '12rem' }} />
      <Grid.Cell span={{ narrow: 1, medium: 3, wide: 4 }} style={{ height: '10rem' }} />
      <Grid.Cell span={{ narrow: 3, medium: 3, wide: 3 }}>
        <Paragraph>{exampleParagraph1}</Paragraph>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 9 }}>
        <Paragraph>{exampleParagraph2}</Paragraph>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 2, medium: 3, wide: 6 }} style={{ height: '8rem' }} />
      <Grid.Cell span={{ narrow: 2, medium: 3, wide: 6 }} style={{ height: '8rem' }} />
      <Grid.Cell span={{ narrow: 3, medium: 2, wide: 4 }} style={{ height: '6rem' }} />
      <Grid.Cell span={{ narrow: 1, medium: 4, wide: 4 }} style={{ height: '8rem' }} />
      <Grid.Cell span={{ narrow: 4, medium: 4, wide: 4 }} style={{ height: '6rem' }} />
    </Grid>
  ),
} satisfies Meta

export default meta

export const Default: StoryObj = {}
