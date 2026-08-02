/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid } from '@amsterdam/design-system-react/src'
import { gridCellTags } from '@amsterdam/design-system-react/src/Grid/GridCell'

import { asArgType } from '#storybook/_common/argTypes'
import { GridColumnsGuide } from '#storybook/_components/GridColumnsGuide/GridColumnsGuide'

const meta = {
  title: 'Components/Layout/Grid',
  component: Grid.Subgrid,
  argTypes: {
    as: asArgType(gridCellTags),
    gapVertical: {
      control: {
        labels: { undefined: 'inherit (default)' },
        type: 'radio',
      },
      options: [undefined, 'none', 'large', 'x-large', '2x-large'],
    },
  },
  decorators: [
    (Story) => (
      <>
        <GridColumnsGuide />
        <Grid paddingVertical="x-large">
          <Story />
        </Grid>
      </>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Grid.Subgrid>

export default meta

// Typing stories against a minimal meta keeps the union of `span` and `start` values intact.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const subgridMeta = {
  component: Grid.Subgrid,
} satisfies Meta<typeof Grid.Subgrid>

type SubgridStory = StoryObj<typeof subgridMeta>

/**
 * A Subgrid hands the columns it spans to its children, so a Cell inside it is placed on the columns of
 * the page rather than on columns of its own. Here a sidebar takes 3 columns and the Subgrid the other 9;
 * the Cells inside it line up with the column guide.
 */
export const Subgrid: SubgridStory = {
  render: (args) => (
    <>
      <Grid.Cell className="_ams-item" span={{ narrow: 4, medium: 2, wide: 3 }} style={{ blockSize: '16rem' }} />
      <Grid.Subgrid {...args} span={{ narrow: 4, medium: 6, wide: 9 }} start={{ narrow: 1, medium: 3, wide: 4 }}>
        <Grid.Cell className="_ams-item" span="all" style={{ blockSize: '6rem' }} />
        <Grid.Cell className="_ams-item" span={{ narrow: 4, medium: 2, wide: 3 }} />
        <Grid.Cell className="_ams-item" span={{ narrow: 4, medium: 2, wide: 3 }} />
        <Grid.Cell className="_ams-item" span={{ narrow: 4, medium: 2, wide: 3 }} />
        <Grid.Cell className="_ams-item" span={{ narrow: 4, medium: 2, wide: 3 }} />
        <Grid.Cell className="_ams-item" span={{ narrow: 4, medium: 2, wide: 3 }} />
        <Grid.Cell className="_ams-item" span={{ narrow: 4, medium: 2, wide: 3 }} />
      </Grid.Subgrid>
    </>
  ),
}
