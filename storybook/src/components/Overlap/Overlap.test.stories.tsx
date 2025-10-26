/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Overlap } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { default as overlapMeta } from './Overlap.stories'

const meta = {
  ...overlapMeta,
  title: 'Components/Layout/Overlap',
} satisfies Meta<typeof Overlap>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: (
      <>
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Concertgebouw3x2.jpg/330px-Concertgebouw3x2.jpg"
        />
        <p>Overlap test</p>
      </>
    ),
  },
  tags: ['!dev', '!autodocs'],
}
