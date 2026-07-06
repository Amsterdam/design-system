/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { LogInIcon } from '@amsterdam/design-system-react-icons'
import { PageHeader } from '@amsterdam/design-system-react/src'
import { logoBrands } from '@amsterdam/design-system-react/src/Logo/Logo'
import { useState } from 'react'
import { expect } from 'storybook/test'

import type { PageHeaderStory } from './PageHeader.stories'

import { default as pageHeaderMeta } from './PageHeader.stories'
import * as PageHeaderStories from './PageHeader.stories'

const meta = {
  ...pageHeaderMeta,
  title: 'Components/Containers/Page Header',
} satisfies Meta<typeof PageHeader>

export default meta

type Story = StoryObj<typeof meta>

const pageHeaderStories = PageHeaderStories as Record<string, PageHeaderStory>

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

    // Open and close the mega menu with the menu button.
    await userEvent.click(menuButton)
    expect(exampleChildren).toBeVisible()
    await userEvent.click(menuButton)
    expect(exampleChildren).not.toBeVisible()

    // Reopen, then close it by clicking a link inside the mega menu (controlled close, no navigation).
    await userEvent.click(menuButton)
    expect(exampleChildren).toBeVisible()
    await userEvent.click(canvas.getByTestId('mega-menu-link'))
    expect(exampleChildren).not.toBeVisible()

    // Every link’s default is prevented, so clicking the logo never navigates the story away.
    const logoLink = pageHeader.querySelector('a')
    if (logoLink) {
      await userEvent.click(logoLink)
    }
    expect(menuButton).toBeInTheDocument()
  },
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <>
        {/* Interaction test: controlled open so a mega-menu link can close the menu instead of navigating */}
        <PageHeader
          data-testid="interaction-test"
          {...args}
          onClick={(event) => {
            // Keep any Page Header link (logo, inline menu, mega menu) from navigating, and close the menu.
            if (event.target instanceof Element && event.target.closest('a')) {
              event.preventDefault()
              setOpen(false)
            }
          }}
          onOpenChange={setOpen}
          open={open}
        >
          <ul>
            <li data-testid="children">
              <a data-testid="mega-menu-link" href="#/should-not-navigate">
                English
              </a>
            </li>
          </ul>
        </PageHeader>

        {/* All public stories, sorted by key for deterministic order */}
        {Object.keys(pageHeaderStories)
          .filter((key) => key !== '__namedExportsOrder') // This gets added by babel-plugin-named-exports-order
          .sort()
          .map((key) => {
            const story = pageHeaderStories[key]
            return story ? <PageHeader key={key} {...story.args} /> : null
          })}

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
    )
  },
  tags: ['!dev', '!autodocs'],
}
