/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AspectRatio, Image, Paragraph, Screen, Spotlight } from '@amsterdam/design-system-react'
import { Breakout } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

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

type Story = StoryObj<typeof meta>

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
        <Paragraph inverseColor>
          Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt.
        </Paragraph>
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
        <Paragraph className="ams-mb--sm" inverseColor>
          Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt.
        </Paragraph>
        <Paragraph inverseColor>
          Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging.
        </Paragraph>
      </Breakout.Cell>,
    ],
  },
}