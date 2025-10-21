/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextArea } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as textAreaMeta } from './TextArea.stories'

const meta = {
  ...textAreaMeta,
  title: 'Components/Forms/Text Area',
} satisfies Meta<typeof TextArea>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  parameters: {
    pseudo: { hover: ['.hover'] },
  },
  render: (args) => getVariants({ component: TextArea, args, variants: ['default', 'disabled', 'hovered'] }),
  tags: ['!dev', '!autodocs'],
}
