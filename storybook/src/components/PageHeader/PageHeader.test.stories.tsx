/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { PageHeader } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { expect } from 'storybook/test'

import { default as pageHeaderMeta } from './PageHeader.stories'

const meta = {
  ...pageHeaderMeta,
  title: 'Components/Containers/Page Header',
} satisfies Meta<typeof PageHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: <p data-testid="children">Children</p>,
  },
  play: async ({ canvas, userEvent }) => {
    const menuButton = canvas.getByRole('button')
    const exampleChildren = await canvas.findByTestId('children')
    await userEvent.click(menuButton)
    expect(exampleChildren).toBeVisible()
    await userEvent.click(menuButton)
    expect(exampleChildren).not.toBeVisible()
  },
  tags: ['!dev', '!autodocs'],
}
