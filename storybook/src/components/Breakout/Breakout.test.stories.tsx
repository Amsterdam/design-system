/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spotlight } from '@amsterdam/design-system-react'
import { Breakout } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as breakoutMeta } from './Breakout.stories'

const meta = {
  ...breakoutMeta,
  title: 'Components/Layout/Breakout',
} satisfies Meta<typeof Breakout>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) =>
    renderComponentVariants({
      component: Breakout,
      args,
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
          <p>Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt.</p>
        </Breakout.Cell>,
        <Breakout.Cell
          colSpan={{ narrow: 4, medium: 8, wide: 6 }}
          colStart={{ narrow: 1, medium: 1, wide: 7 }}
          key={3}
          rowSpan={2}
          rowStart={1}
        >
          <img alt="" src="https://picsum.photos/id/122/1280/720" />
        </Breakout.Cell>,
      ],
    }),
  tags: ['!dev', '!autodocs'],
}
