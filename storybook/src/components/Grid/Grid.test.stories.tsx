/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { GridGap } from '@amsterdam/design-system-react/src/Grid/Grid'
import type { GridSubgridGap } from '@amsterdam/design-system-react/src/Grid/GridSubgrid'
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
const half = { narrow: 2, medium: 4, wide: 6 } as const
const threeQuarters = { narrow: 3, medium: 6, wide: 9 } as const
const secondQuarter = { narrow: 2, medium: 3, wide: 4 } as const
const thirdQuarter = { narrow: 3, medium: 5, wide: 7 } as const
const fourthQuarter = { narrow: 4, medium: 7, wide: 10 } as const

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
  readonly subgridGapVertical?: GridSubgridGap
}) => (
  <Grid gapVertical={gapVertical} paddingVertical="large">
    <Grid.Cell {...item} span={quarter} />
    <Grid.Cell {...item} span={quarter} />
    <Grid.Cell {...item} span={quarter} />
    <Grid.Cell {...item} span={quarter} />
    <Grid.Cell {...item} span={quarter} />
    <Grid.Subgrid gapVertical={subgridGapVertical} span={threeQuarters} start={secondQuarter}>
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
    </Grid.Subgrid>
  </Grid>
)

/*
 * Every placement of a Subgrid puts its Cells on the columns of the page: spanning all of them, taking
 * the columns left of a start, and starting at one. All three rows line up with the reference row.
 */
const SubgridPlacementCase = () => (
  <Grid paddingVertical="large">
    <Grid.Cell {...item} span={quarter} />
    <Grid.Cell {...item} span={quarter} />
    <Grid.Cell {...item} span={quarter} />
    <Grid.Cell {...item} span={quarter} />
    <Grid.Subgrid span="all">
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
    </Grid.Subgrid>
    <Grid.Subgrid span={half}>
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
    </Grid.Subgrid>
    <Grid.Subgrid span={half} start={thirdQuarter}>
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
    </Grid.Subgrid>
  </Grid>
)

/*
 * A Subgrid spans rows of the Grid like a Cell does, so the two Cells beside it stack over the rows it
 * occupies instead of being pushed below it.
 */
const SubgridRowSpanCase = () => (
  <Grid paddingVertical="large">
    <Grid.Cell {...item} span={quarter} />
    <Grid.Subgrid rowSpan={2} span={threeQuarters} start={secondQuarter}>
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
    </Grid.Subgrid>
    <Grid.Cell {...item} span={quarter} />
  </Grid>
)

/*
 * A trailing-side sidebar that comes first in the source: automatic placement would push the wider Cells
 * after it down a row, because it never moves back a column without moving down one. A rowStart of 1 on the
 * sidebar alone keeps them level. The last case does the same for a Subgrid, which is placed as one item.
 */
const RowStartCase = () => (
  <Grid paddingVertical="large">
    <Grid.Cell {...item} rowStart={1} span={quarter} start={fourthQuarter} />
    <Grid.Cell {...item} span={threeQuarters} />
    <Grid.Cell {...item} span={threeQuarters} />
  </Grid>
)

const SubgridRowStartCase = () => (
  <Grid paddingVertical="large">
    <Grid.Cell {...item} rowStart={1} span={quarter} start={fourthQuarter} />
    <Grid.Subgrid span={threeQuarters}>
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
      {/* The reason x-large exists: the Grid drops its gap, and the Subgrid puts the regular one back. */}
      <SubgridCase gapVertical="none" subgridGapVertical="x-large" />
      <SubgridPlacementCase />
      <SubgridRowSpanCase />
      <RowStartCase />
      <SubgridRowStartCase />
    </div>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
