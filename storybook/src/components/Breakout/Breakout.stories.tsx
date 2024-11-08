/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Image, Paragraph, Screen, Spotlight } from '@amsterdam/design-system-react'
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
      <Breakout.Cell colSpan="all" has="spotlight" rowSpan={{ medium: 2, narrow: 2, wide: 1 }} rowStart={2}>
        <Spotlight />
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
        has="figure"
        rowSpan={2}
        rowStart={1}
      >
        <Image alt="" src="https://picsum.photos/960/960" aspectRatio="square" />
      </Breakout.Cell>,
    ],
  },
}

export const VerticalLayout: Story = {
  args: {
    children: [
      <Breakout.Cell colSpan="all" has="figure" rowSpan={2} rowStart={1}>
        <Image alt="" src="https://picsum.photos/1600/900" />
      </Breakout.Cell>,
      <Breakout.Cell colSpan="all" has="spotlight" rowSpan={2} rowStart={2}>
        <Spotlight />
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
