/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { GridGap } from '@amsterdam/design-system-react/src/Grid/Grid'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as gridMeta } from './Grid.stories'

const meta = {
  ...gridMeta,
  title: 'Components/Layout/Grid',
} satisfies Meta<typeof Grid>

export default meta

type Story = StoryObj<typeof meta>

const item = { className: '_ams-item', style: { blockSize: '3rem' } }
const quarter = { narrow: 1, medium: 2, wide: 3 } as const

/*
 * The first row sits on the columns of the page. The Cells of the Subgrid below it must line up with
 * it, since a Subgrid hands the columns it spans to its children. Its rows take the gap of the Grid,
 * so the gap inside the Subgrid must match the one between the two rows of the page.
 */
const SubgridCase = ({
  gapVertical,
  subgridGapVertical,
}: {
  readonly gapVertical?: GridGap
  readonly subgridGapVertical?: GridGap
}) => (
  <Grid gapVertical={gapVertical} paddingVertical="large">
    <Grid.Cell {...item} span={quarter} />
    <Grid.Cell {...item} span={quarter} />
    <Grid.Cell {...item} span={quarter} />
    <Grid.Cell {...item} span={quarter} />
    <Grid.Cell {...item} span={quarter} />
    <Grid.Subgrid
      gapVertical={subgridGapVertical}
      span={{ narrow: 3, medium: 6, wide: 9 }}
      start={{ narrow: 2, medium: 3, wide: 4 }}
    >
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
    </Grid.Subgrid>
  </Grid>
)

export const Test: Story = {
  args: {
    children: [<Grid.Cell key={1} span="all" />, <Grid.Cell key={2} span="all" />],
  },
  render: (args, context) => (
    <div className="_ams-tests-stack">
      {renderComponentVariants(Grid, { args }, context)}
      <SubgridCase />
      <SubgridCase gapVertical="none" />
      <SubgridCase subgridGapVertical="2x-large" />
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
