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

/*
 * A Subgrid that is a list is indistinguishable from one that is not: markers or an indent in the first row
 * mean the list reset is gone. The second list sits inside a plain Subgrid, the arrangement of a page where
 * the set is only part of a wider region, and its rows must still line up with the reference row above.
 */
const ListCase = () => (
  <Grid paddingVertical="large">
    <Grid.Subgrid as="ul" span="all">
      <Grid.Cell {...item} as="li" span={quarter} />
      <Grid.Cell {...item} as="li" span={quarter} />
      <Grid.Cell {...item} as="li" span={quarter} />
      <Grid.Cell {...item} as="li" span={quarter} />
    </Grid.Subgrid>
    <Grid.Subgrid span="all">
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
    </Grid.Subgrid>
    <Grid.Subgrid span={threeQuarters} start={secondQuarter}>
      <Grid.Cell {...item} span={quarter} />
      <Grid.Subgrid as="ol" span="all">
        <Grid.Cell {...item} as="li" span={quarter} />
        <Grid.Cell {...item} as="li" span={quarter} />
        <Grid.Cell {...item} as="li" span={quarter} />
      </Grid.Subgrid>
      <Grid.Cell {...item} span={quarter} />
    </Grid.Subgrid>
  </Grid>
)

/*
 * A Grid can be the list itself. Unlike a Subgrid it keeps its inline padding, the gutter of the page, which
 * the list reset would zero: these Cells must line up with those of every other case rather than sit further
 * out. The Grid below it is the reference.
 */
const GridListCase = () => (
  <>
    <Grid as="ul" paddingVertical="large">
      <Grid.Cell {...item} as="li" span={quarter} />
      <Grid.Cell {...item} as="li" span={quarter} />
      <Grid.Cell {...item} as="li" span={quarter} />
      <Grid.Cell {...item} as="li" span={quarter} />
    </Grid>
    <Grid paddingVertical="large">
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
      <Grid.Cell {...item} span={quarter} />
    </Grid>
  </>
)

export const Test: Story = {
  args: {
    // Empty Cells leave every variant blank, so the gaps and paddings they differ in have nothing to measure.
    children: [<Grid.Cell key={1} {...item} span="all" />, <Grid.Cell key={2} {...item} span="all" />],
  },
  render: (args, context) => (
    <div className="_ams-tests-stack">
      <p>Gaps and paddings</p>
      {renderComponentVariants(Grid, { args }, context)}
      <p>Subgrid</p>
      <SubgridCase />
      <p>Subgrid in a Grid without a row gap</p>
      <SubgridCase gapVertical="none" />
      <p>Subgrid with a 2x-large row gap</p>
      <SubgridCase subgridGapVertical="2x-large" />
      {/* The reason x-large exists: the Grid drops its gap, and the Subgrid puts the regular one back. */}
      <p>Subgrid restoring the x-large row gap</p>
      <SubgridCase gapVertical="none" subgridGapVertical="x-large" />
      <p>Subgrid placement</p>
      <SubgridPlacementCase />
      <p>Subgrid spanning two rows</p>
      <SubgridRowSpanCase />
      <p>Row start</p>
      <RowStartCase />
      <p>Row start for a Subgrid</p>
      <SubgridRowStartCase />
      <p>Subgrid as a list</p>
      <ListCase />
      <p>Grid as a list</p>
      <GridListCase />
    </div>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
