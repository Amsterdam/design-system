/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AppNavigation } from '@amsterdam/design-system-react'
import { App } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Layout/App',
  component: App,
  args: {
    children: (
      <>
        <header
          className="ams-page-header"
          style={{ background: 'rgba(0, 149, 10, 0.4)', padding: 'var(--ams-space-l)' }}
        >
          Header
        </header>
        <div className="ams-app-navigation">
          <AppNavigation>
            <span style={{ color: 'white', padding: 'var(--ams-space-l)', rotate: '90deg' }}>Navigation</span>
          </AppNavigation>
        </div>
        <main
          className="ams-app-content"
          style={{ background: 'rgba(177, 0, 0, 0.4)', minBlockSize: '70vh', padding: 'var(--ams-space-l)' }}
        >
          Main
        </main>
        <footer
          className="ams-page-footer"
          style={{ background: 'rgba(91, 0, 71, 0.4)', padding: 'var(--ams-space-l)' }}
        >
          Footer
        </footer>
      </>
    ),
    fullscreen: false,
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof App>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Fullscreen: Story = {
  args: {
    fullscreen: true,
  },
}
