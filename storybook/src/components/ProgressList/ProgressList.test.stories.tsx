/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ProgressList } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as progressListMeta } from './ProgressList.stories'

const meta = {
  ...progressListMeta,
  title: 'Components/Containers/Progress List',
} satisfies Meta<typeof ProgressList>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(ProgressList, { args }),
  tags: ['!dev', '!autodocs'],
}
