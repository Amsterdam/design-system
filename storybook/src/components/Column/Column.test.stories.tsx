/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Column } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as columnMeta } from './Column.stories'

const meta = {
  ...columnMeta,
  title: 'Components/Layout/Column',
} satisfies Meta<typeof Column>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) =>
    renderComponentVariants({
      component: Column,
      args,
      wrapperType: 'grid',
    }),
  tags: ['!dev', '!autodocs'],
}
