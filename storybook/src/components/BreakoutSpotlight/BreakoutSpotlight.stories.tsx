/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AspectRatio, Image, Paragraph, Screen, Spotlight } from '@amsterdam/design-system-react'
import { BreakoutSpotlight } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Layout/Breakout Spotlight',
  component: BreakoutSpotlight,
  decorators: [
    (Story) => (
      <Screen>
        <Story />
      </Screen>
    ),
  ],
} satisfies Meta<typeof BreakoutSpotlight>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <BreakoutSpotlight.Cell colSpan="all" has="spotlight" rowSpan={{ medium: 2, narrow: 2, wide: 1 }} rowStart={2}>
        <Spotlight />
      </BreakoutSpotlight.Cell>,
      <BreakoutSpotlight.Cell
        colSpan={{ medium: 8, narrow: 4, wide: 6 }}
        colStart={1}
        rowStart={{ medium: 3, narrow: 3, wide: 2 }}
      >
        <Paragraph inverseColor>
          Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt.
        </Paragraph>
      </BreakoutSpotlight.Cell>,
      <BreakoutSpotlight.Cell
        colSpan={{ medium: 8, narrow: 4, wide: 6 }}
        colStart={{ medium: 1, narrow: 1, wide: 7 }}
        has="figure"
        rowSpan={2}
        rowStart={1}
      >
        <AspectRatio ratio="square">
          <Image alt="" src="https://picsum.photos/960/960" />
        </AspectRatio>
      </BreakoutSpotlight.Cell>,
    ],
  },
}

export const VerticalLayout: Story = {
  args: {
    children: [
      <BreakoutSpotlight.Cell colSpan="all" has="figure" rowSpan={2} rowStart={1}>
        <AspectRatio ratio="x-wide">
          <Image alt="" src="https://picsum.photos/1600/900" />
        </AspectRatio>
      </BreakoutSpotlight.Cell>,
      <BreakoutSpotlight.Cell colSpan="all" has="spotlight" rowSpan={2} rowStart={2}>
        <Spotlight />
      </BreakoutSpotlight.Cell>,
      <BreakoutSpotlight.Cell
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
      </BreakoutSpotlight.Cell>,
    ],
  },
}
