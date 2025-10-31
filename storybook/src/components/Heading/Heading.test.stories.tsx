/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Heading } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as headingMeta } from './Heading.stories'

const meta = {
  ...headingMeta,
  title: 'Components/Text/Heading',
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: 'Amsterdam Light Festival maakt de stad ook deze winter een beetje mooier',
  },
  render: (args) => renderComponentVariants(Heading, { args }),
  tags: ['!dev', '!autodocs'],
}
