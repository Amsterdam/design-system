/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AspectRatio, Breakout, Heading, Image, Paragraph, Screen, Spotlight } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph } from '../shared/exampleContent'

const meta = {
  title: 'Components/Containers/Breakout',
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

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <Breakout.Cell colSpan="all" coverGap rowSpan={{ medium: 2, narrow: 2, wide: 1 }} rowStart={2}>
          <Spotlight style={{ height: '100%' }} />
        </Breakout.Cell>
        <Breakout.Cell
          colSpan={{ medium: 8, narrow: 4, wide: 6 }}
          colStart={1}
          rowStart={{ medium: 3, narrow: 3, wide: 2 }}
        >
          <Paragraph inverseColor>{exampleParagraph()}</Paragraph>
        </Breakout.Cell>
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
        </Breakout.Cell>
      </>
    ),
  },
}

export const MapOnTop: Story = {
  args: {
    children: (
      <>
        <Breakout.Cell colSpan="all" rowSpan={2} rowStart={1}>
          <AspectRatio ratio="x-wide">
            <Image alt="" src="https://picsum.photos/1600/900" />
          </AspectRatio>
        </Breakout.Cell>
        <Breakout.Cell colSpan="all" coverGap rowSpan={2} rowStart={2}>
          <Spotlight style={{ height: '100%' }} />
        </Breakout.Cell>
        <Breakout.Cell
          colSpan={{ medium: 6, narrow: 4, wide: 8 }}
          colStart={{ medium: 2, narrow: 1, wide: 3 }}
          rowStart={3}
        >
          <Heading className="ams-mb--xs" inverseColor level={2}>
            Heading
          </Heading>
          <Paragraph inverseColor>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, amet consequatur! Necessitatibus veniam
            libero nobis dignissimos dolorum repellat alias dolores minima labore a maxime nihil error aut, omnis ullam
            sint autem non?
          </Paragraph>
        </Breakout.Cell>
      </>
    ),
  },
}
