/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { App, AppNavigation } from '@amsterdam/design-system-react/src'
import {
  BarChartFillIcon,
  BuildingsFillIcon,
  CogwheelFillIcon,
  DocumentsFillIcon,
  FolderFillIcon,
  HouseCanalFillIcon,
  MagnifyingGlassWithEyeFillIcon,
} from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Navigation/App Navigation',
  component: AppNavigation,
  args: {
    children: (
      <>
        <AppNavigation.Link href="#" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
        <AppNavigation.Link href="#" icon={FolderFillIcon} key={2} label="Projecten" />
        <AppNavigation.Link href="#" icon={DocumentsFillIcon} key={3} label="Rapportages" />
        <AppNavigation.Link href="#" icon={BarChartFillIcon} key={4} label="Analyses" />
        <AppNavigation.Link href="#" icon={CogwheelFillIcon} key={5} label="Instellingen" />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <App>
        <Story />
      </App>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    themes: { themeOverride: 'Compact' },
    viewport: {
      defaultViewport: 'desktop',
    },
  },
} satisfies Meta<typeof AppNavigation>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Expanded: Story = {
  args: {
    expanded: true,
  },
}

export const WithSubNavigation: Story = {
  args: {
    children: (
      <>
        <AppNavigation.Link href="#" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
        <AppNavigation.Button icon={FolderFillIcon} key={2} label="Projecten" open>
          <AppNavigation.Menu>
            <AppNavigation.Link href="#" icon={BuildingsFillIcon} key="1" label="Objecten" />
            <AppNavigation.Link href="#" icon={MagnifyingGlassWithEyeFillIcon} key="2" label="Inspecties" />
            <AppNavigation.Link active href="#" icon={BuildingsFillIcon} key="1" label="Objecten" />
            <AppNavigation.Link href="#" icon={MagnifyingGlassWithEyeFillIcon} key="2" label="Inspecties" />
          </AppNavigation.Menu>
        </AppNavigation.Button>
        <AppNavigation.Link href="#" icon={DocumentsFillIcon} key={3} label="Rapportages" />
        <AppNavigation.Link href="#" icon={BarChartFillIcon} key={4} label="Analyses" />
        <AppNavigation.Link href="#" icon={CogwheelFillIcon} key={5} label="Instellingen" />
      </>
    ),
    expanded: true,
  },
}
