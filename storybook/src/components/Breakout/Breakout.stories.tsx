/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AspectRatio, Breakout, Image, Paragraph, Screen, Spotlight } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph } from '../shared/exampleContent'

const paragraph = exampleParagraph()

const meta = {
  title: 'Components/Layout/Breakout',
  component: Breakout,
  decorators: [
    (Story) => (
      <Screen>
        <Story />
      </Screen>
    ),
  ],
} satisfies Meta<typeof Breakout>

export default meta

const cellMeta = {
  component: Breakout.Cell,
  argTypes: {
    as: {
      control: { type: 'radio' },
      options: ['article', 'div', 'section'],
    },
    className: {
      table: { disable: true },
    },
    colSpan: {
      control: { type: 'number', min: 1, max: 12 },
    },
    colStart: {
      control: { type: 'number', min: 1, max: 12 },
    },
    coverGap: { type: 'boolean' },
    rowSpan: {
      control: { type: 'number', min: 1, max: 4 },
    },
    rowStart: {
      control: { type: 'number', min: 1, max: 4 },
    },
  },
} satisfies Meta<typeof Breakout.Cell>

type Story = StoryObj<typeof meta>
type CellStory = StoryObj<typeof cellMeta>

const CellStoryTemplate: CellStory = {
  render: ({ children, ...args }) => <Breakout.Cell {...args}>{children}</Breakout.Cell>,
}

export const Default: Story = {
  args: {
    children: [
      <Breakout.Cell colSpan="all" coverGap rowSpan={{ medium: 2, narrow: 2, wide: 1 }} rowStart={2}>
        <Spotlight style={{ height: '100%' }} />
      </Breakout.Cell>,
      <Breakout.Cell
        colSpan={{ medium: 8, narrow: 4, wide: 6 }}
        colStart={1}
        rowStart={{ medium: 3, narrow: 3, wide: 2 }}
      >
        <Paragraph inverseColor>{paragraph}</Paragraph>
      </Breakout.Cell>,
      <Breakout.Cell
        colSpan={{ medium: 8, narrow: 4, wide: 6 }}
        colStart={{ medium: 1, narrow: 1, wide: 7 }}
        rowSpan={2}
        rowStart={1}
        style={{ alignSelf: 'end' }}
      >
        <AspectRatio ratio="square">
          <Image alt="" src="https://picsum.photos/960/960" />
        </AspectRatio>
      </Breakout.Cell>,
    ],
  },
}

export const MediaOnTop: Story = {
  args: {
    children: [
      <Breakout.Cell colSpan="all" rowSpan={2} rowStart={1}>
        <AspectRatio ratio="x-wide">
          <Image alt="" src="https://picsum.photos/1600/900" />
        </AspectRatio>
      </Breakout.Cell>,
      <Breakout.Cell colSpan="all" coverGap rowSpan={2} rowStart={2}>
        <Spotlight style={{ height: '100%' }} />
      </Breakout.Cell>,
      <Breakout.Cell
        colSpan={{ medium: 6, narrow: 4, wide: 8 }}
        colStart={{ medium: 2, narrow: 1, wide: 3 }}
        rowStart={3}
      >
        <Paragraph inverseColor>{paragraph}</Paragraph>
      </Breakout.Cell>,
    ],
  },
}

export const CoverGap: CellStory = {
  ...CellStoryTemplate,
  args: {
    className: 'ams-docs-item ams-docs-item--highlight',
    coverGap: true,
    colSpan: 'all',
  },
  decorators: [
    (Story) => (
      <Screen>
        <Breakout>
          <Breakout.Cell className="ams-docs-item" colSpan={{ narrow: 2, medium: 4, wide: 6 }} />
          <Breakout.Cell className="ams-docs-item" colSpan={{ narrow: 2, medium: 4, wide: 6 }} />
          <Story />
          <Breakout.Cell className="ams-docs-item" colSpan={{ narrow: 2, medium: 4, wide: 6 }} />
          <Breakout.Cell className="ams-docs-item" colSpan={{ narrow: 2, medium: 4, wide: 6 }} />
        </Breakout>
      </Screen>
    ),
  ],
}
