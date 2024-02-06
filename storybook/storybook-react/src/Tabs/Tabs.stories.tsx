/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Tabs } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  args: {
    children: [
      <Tabs.List key="list">
        <Tabs.Link label="Gegevens" href="#" selected />
        <Tabs.Link label="Aanslagen" href="#" />
        <Tabs.Link label="Documenten" href="#" />
        <Tabs.Link label="Acties" href="#" isDisabled />
      </Tabs.List>,
    ],
  },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
