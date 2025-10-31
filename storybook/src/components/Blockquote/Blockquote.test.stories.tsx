/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Blockquote } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as blockquoteMeta } from './Blockquote.stories'

const meta = {
  ...blockquoteMeta,
  title: 'Components/Text/Blockquote',
} satisfies Meta<typeof Blockquote>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children:
      'Voor Amsterdam was de Jordaan één oproer en één fort. De Amsterdammer begreep de Jordaner niet, die zelden uit zijn buurt komt, soms niet uit zijn straat, wiens stad haar eigen plattegrond heeft, een stad in een stad.',
  },
  render: (args) => renderComponentVariants(Blockquote, { args }),
  tags: ['!dev', '!autodocs'],
}
