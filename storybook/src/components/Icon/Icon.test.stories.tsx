/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Icon } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as iconMeta } from './Icon.stories'

const meta = {
  ...iconMeta,
  title: 'Components/Media/Icon',
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(Icon, { args }),
  tags: ['!dev', '!autodocs'],
}
