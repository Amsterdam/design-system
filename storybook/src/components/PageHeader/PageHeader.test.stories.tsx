/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { PageHeader } from '@amsterdam/design-system-react/src'
import { expect } from 'storybook/test'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as pageHeaderMeta } from './PageHeader.stories'

const meta = {
  ...pageHeaderMeta,
  title: 'Components/Containers/Page Header',
} satisfies Meta<typeof PageHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    brandName: 'Data Amsterdam',
    children: <p>test</p>,
    menuItems: [
      <PageHeader.MenuLink href="#" key="1" lang="en">
        English
      </PageHeader.MenuLink>,
      <PageHeader.MenuLink fixed href="#" key="2">
        Zoeken
      </PageHeader.MenuLink>,
    ],
  },
  play: async ({ canvas, userEvent }) => {
    const pageHeader = await canvas.findByTestId('interaction-test')
    const menuButton = pageHeader.querySelector('button')
    const exampleChildren = await canvas.findByTestId('children')

    if (!menuButton) return

    await userEvent.click(menuButton)
    expect(exampleChildren).toBeVisible()
    await userEvent.click(menuButton)
    expect(exampleChildren).not.toBeVisible()
  },
  render: (args) => (
    <>
      <PageHeader data-testid="interaction-test" {...args}>
        <ul>
          <li data-testid="children">English</li>
        </ul>
      </PageHeader>
      {renderComponentVariants(PageHeader, { args })}
    </>
  ),
  tags: ['!dev', '!autodocs'],
}
