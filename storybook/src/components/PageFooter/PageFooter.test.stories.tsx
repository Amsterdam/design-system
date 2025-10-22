/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { PageFooter } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { default as pageFooterMeta } from './PageFooter.stories'

const meta = {
  ...pageFooterMeta,
  title: 'Components/Containers/Page Footer',
} satisfies Meta<typeof PageFooter>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: <div className="ams-docs-item" />,
  },
  tags: ['!dev', '!autodocs'],
}
