/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AspectRatio, Breakout, Heading, Image, Paragraph, Spotlight } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph } from '../shared/exampleContent'

const meta = {
  title: 'Components/Containers/Breakout',
  component: Breakout,
} satisfies Meta<typeof Breakout>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <Breakout.Cell coverGap rowStart={2} rowSpan={{ narrow: 2, medium: 2, wide: 1 }} span="all">
          <Spotlight style={{ height: '100%' }} />
        </Breakout.Cell>
        <Breakout.Cell rowStart={{ narrow: 3, medium: 3, wide: 2 }} start={1} span={{ narrow: 4, medium: 8, wide: 6 }}>
          <Paragraph inverseColor>{exampleParagraph()}</Paragraph>
        </Breakout.Cell>
        <Breakout.Cell
          rowSpan={2}
          rowStart={1}
          span={{ narrow: 4, medium: 8, wide: 6 }}
          start={{ narrow: 1, medium: 1, wide: 7 }}
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
        <Breakout.Cell rowStart={1} rowSpan={2} span="all">
          <AspectRatio ratio="x-wide">
            <Image alt="" src="https://picsum.photos/1600/900" />
          </AspectRatio>
        </Breakout.Cell>
        <Breakout.Cell coverGap rowStart={2} rowSpan={2} span="all">
          <Spotlight style={{ height: '100%' }} />
        </Breakout.Cell>
        <Breakout.Cell rowStart={3} start={{ narrow: 1, medium: 2, wide: 3 }} span={{ narrow: 4, medium: 6, wide: 8 }}>
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
