/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { App } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Containers/App',
  component: App,
  args: {
    children: (
      <>
        <header className="ams-page-header" style={{ background: 'rgba(0, 149, 10, 0.4)' }}></header>
        <div className="ams-app-navigation"></div>
        <main className="ams-app-content" style={{ background: 'rgba(177, 0, 0, 0.4)' }}></main>
        <footer className="ams-page-footer" style={{ background: 'rgba(91, 0, 71, 0.4)' }}>
          footer
        </footer>
      </>
    ),
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof App>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
