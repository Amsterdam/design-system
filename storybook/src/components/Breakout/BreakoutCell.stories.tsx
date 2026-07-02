/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { Breakout } from '@amsterdam/design-system-react/src'

import { GridColumnsGuide } from '#storybook/_components/GridColumnsGuide/GridColumnsGuide'

const meta = {
  title: 'Components/Layout/Breakout',
  component: Breakout.Cell,
  argTypes: {
    as: {
      control: { type: 'radio' },
      options: ['article', 'div', 'section'],
    },
    colSpan: {
      control: { max: 12, min: 1, type: 'number' },
    },
    colStart: {
      control: { max: 12, min: 1, type: 'number' },
    },
    rowSpan: {
      control: { max: 4, min: 1, type: 'number' },
    },
    rowStart: {
      control: { max: 4, min: 1, type: 'number' },
    },
  },
  decorators: [
    (Story) => (
      <>
        <GridColumnsGuide />
        <Breakout>
          <Breakout.Cell className="_ams-item" colSpan={2} colStart={1} rowStart={1}>
            <Paragraph>Cell 1</Paragraph>
          </Breakout.Cell>
          <Breakout.Cell className="_ams-item" colSpan={2} colStart={1} rowStart={2}>
            <Paragraph>Cell 2</Paragraph>
          </Breakout.Cell>
          <Story />
        </Breakout>
      </>
    ),
  ],
} satisfies Meta<typeof Breakout.Cell>

export default meta

// Typing stories against a minimal meta keeps the union of the span and start values intact.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cellMeta = {
  component: Breakout.Cell,
} satisfies Meta<typeof Breakout.Cell>

type CellStory = StoryObj<typeof cellMeta>

export const Cell: CellStory = {
  args: {
    children: <Paragraph>Cell content</Paragraph>,
    className: '_ams-item--highlight',
    colSpan: 2,
    colStart: 3,
    rowSpan: 2,
    rowStart: 1,
  },
}
