/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Breakout } from '@amsterdam/design-system-react/src'
import { breakoutCellTags } from '@amsterdam/design-system-react/src/Breakout/BreakoutCell'

import { GridColumnsGuide } from '#storybook/_components/GridColumnsGuide/GridColumnsGuide'

const meta = {
  title: 'Components/Layout/Breakout',
  component: Breakout.Cell,
  argTypes: {
    as: {
      control: {
        labels: { undefined: 'div (default)' },
        type: 'radio',
      },
      options: [undefined, ...breakoutCellTags],
    },
    // The span and start props take a number, ‘all’, or an object of numbers per grid variant – no control expresses that.
    colSpan: {
      control: false,
    },
    colStart: {
      control: false,
    },
    // The allowed value differs per span variant – a control would mislead, the description explains it.
    has: {
      control: false,
    },
    rowSpan: {
      control: false,
    },
    rowStart: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <>
        <GridColumnsGuide />
        <Breakout paddingVertical="x-large">
          <Breakout.Cell className="_ams-item" colSpan={2} colStart={1} rowStart={1} />
          <Breakout.Cell className="_ams-item" colSpan={2} colStart={1} rowStart={2} />
          <Story />
        </Breakout>
      </>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Breakout.Cell>

export default meta

// Typing the story against a minimal meta keeps the union of BreakoutCellProps intact:
// StoryObj<typeof meta> collapses `colSpan: 'all'` and the numeric span-and-start variant
// into an impossible intersection.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cellMeta = {
  component: Breakout.Cell,
} satisfies Meta<typeof Breakout.Cell>

type CellStory = StoryObj<typeof cellMeta>

export const Cell: CellStory = {
  args: {
    className: '_ams-item--highlight',
    colSpan: 4,
    colStart: 3,
    rowSpan: 2,
    rowStart: 1,
  },
}
