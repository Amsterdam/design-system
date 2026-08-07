/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spotlight } from '@amsterdam/design-system-react'
import { Breakout } from '@amsterdam/design-system-react/src'
import { gridGaps } from '@amsterdam/design-system-react/src/Grid/Grid'

import { default as breakoutMeta } from './Breakout.stories'

const meta = {
  ...breakoutMeta,
  title: 'Components/Layout/Breakout',
} satisfies Meta<typeof Breakout>

export default meta

type Story = StoryObj<typeof meta>

/** Mirrors gridGaps in packages/react/src/Grid/Grid.tsx, preceded by the default. Each gap is cancelled by its own offset. */
const gaps = [undefined, ...gridGaps] as const

export const Test: Story = {
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
        <p>Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt.</p>
      </Breakout.Cell>,
      <Breakout.Cell
        colSpan={{ narrow: 4, medium: 8, wide: 6 }}
        colStart={{ narrow: 1, medium: 1, wide: 7 }}
        key={3}
        rowSpan={2}
        rowStart={1}
      >
        <img alt="" src="https://picsum.photos/id/122/200/300" />
      </Breakout.Cell>,
    ],
  },
  /*
   * One composition rather than every variant of every prop. A Breakout takes the gaps, paddings and tags of a
   * Grid, which snapshots all of them, so only what a Breakout does with them is worth a picture of its own:
   * a figure that widens past its columns, and a Spotlight that reaches exactly into the gap around it.
   */
  render: (args) => (
    <>
      <p>A figure and a Spotlight breaking out</p>
      <Breakout {...args} />
      <p>Each row gap, cancelled by its own offset</p>
      <div className="_ams-tests-stack">
        {gaps.map((gap) => (
          // The vertical padding is the largest one, so each Spotlight escapes into its own Breakout
          // instead of into the one above or below it.
          <Breakout gapVertical={gap} key={gap ?? 'default'} paddingVertical="2x-large">
            <Breakout.Cell colSpan="all" has="spotlight" rowSpan={2} rowStart={1}>
              <Spotlight color="green" />
            </Breakout.Cell>
            <Breakout.Cell colSpan="all" rowStart={1}>
              <p style={{ color: 'white' }}>{`gapVertical: ${gap ?? 'x-large (default)'}`}</p>
            </Breakout.Cell>
            <Breakout.Cell colSpan="all" rowStart={2}>
              <p style={{ color: 'white' }}>De Spotlight reikt precies tot de gap boven en onder deze tekst.</p>
            </Breakout.Cell>
          </Breakout>
        ))}
      </div>
    </>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
