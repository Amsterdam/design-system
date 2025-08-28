/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Image, Page, Paragraph, Spotlight } from '@amsterdam/design-system-react'
import { Breakout } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'
import { gridGapAndPaddingArgTypes } from '../../common'

const meta = {
  title: 'Components/Layout/Breakout',
  component: Breakout,
  argTypes: gridGapAndPaddingArgTypes,
  decorators: [
    (Story) => (
      <Page>
        <Story />
      </Page>
    ),
  ],
} satisfies Meta<typeof Breakout>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Breakout.Cell colSpan="all" has="spotlight" key={1} rowSpan={{ narrow: 2, medium: 2, wide: 1 }} rowStart={2}>
        <Spotlight color="green" />
      </Breakout.Cell>,
      <Breakout.Cell
        colSpan={{ narrow: 4, medium: 8, wide: 6 }}
        colStart={1}
        key={2}
        rowStart={{ narrow: 3, medium: 3, wide: 2 }}
      >
        <Paragraph color="inverse">
          Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt.
        </Paragraph>
      </Breakout.Cell>,
      <Breakout.Cell
        colSpan={{ narrow: 4, medium: 8, wide: 6 }}
        colStart={{ narrow: 1, medium: 1, wide: 7 }}
        has="figure"
        key={3}
        rowSpan={2}
        rowStart={1}
      >
        <Image alt="" aspectRatio="1:1" src="https://picsum.photos/960/960" />
      </Breakout.Cell>,
    ],
  },
}

export const VerticalLayout: Story = {
  args: {
    children: [
      <Breakout.Cell colSpan="all" has="spotlight" key={1} rowSpan={2} rowStart={2}>
        <Spotlight color="orange" />
      </Breakout.Cell>,
      <Breakout.Cell colSpan="all" has="figure" key={2} rowSpan={2} rowStart={1}>
        <Image alt="" src="https://picsum.photos/1440/810" />
      </Breakout.Cell>,
      <Breakout.Cell
        colSpan={{ narrow: 4, medium: 5, wide: 7 }}
        colStart={{ narrow: 1, medium: 2, wide: 3 }}
        key={3}
        rowStart={3}
      >
        <Paragraph className="ams-mb-s">
          Vertel ons in het evenementenformulier wat u wilt gaan doen. U checkt daarmee of u een vergunning nodig hebt.
        </Paragraph>
        <Paragraph>
          Daarna vraagt u de vergunning aan in hetzelfde formulier. Of doet u een gratis melding of vooraankondiging.
        </Paragraph>
      </Breakout.Cell>,
    ],
  },
}
