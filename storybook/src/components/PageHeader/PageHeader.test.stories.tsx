/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { LogInIcon } from '@amsterdam/design-system-react-icons'
import { PageHeader } from '@amsterdam/design-system-react/src'
import { logoBrands } from '@amsterdam/design-system-react/src/Logo/Logo'
import { expect } from 'storybook/test'

import type { PageHeaderStory } from './PageHeader.stories'

import { default as pageHeaderMeta } from './PageHeader.stories'
import * as PageHeaderStories from './PageHeader.stories'

const pageHeaderStories = PageHeaderStories as Record<string, PageHeaderStory>

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
      {/* Interaction test */}
      <PageHeader data-testid="interaction-test" {...args}>
        <ul>
          <li data-testid="children">English</li>
        </ul>
      </PageHeader>

      {/* All existing public stories */}
      {Object.entries(pageHeaderStories).map(([key, { args }]) => (
        <PageHeader key={key} {...args} />
      ))}

      {/* All logo brands */}
      {logoBrands.map((brand) => (
        <PageHeader
          brandName="Voorbeeld"
          key={brand}
          logoBrand={brand}
          menuItems={
            <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
              Inloggen
            </PageHeader.MenuLink>
          }
        />
      ))}
    </>
  ),
}
