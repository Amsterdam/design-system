/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { TableOfContents } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants/renderComponentVariants'
import { default as tableOfContentsMeta } from './TableOfContents.stories'

const meta = {
  ...tableOfContentsMeta,
  title: 'Components/TableOfContents',
} satisfies Meta<typeof TableOfContents>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(TableOfContents, { args }),
  tags: ['!dev', '!autodocs'],
}
