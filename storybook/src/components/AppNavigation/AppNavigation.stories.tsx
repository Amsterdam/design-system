/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { App, AppNavigation } from '@amsterdam/design-system-react/src'
import {
  BarChartFillIcon,
  CogwheelFillIcon,
  CogwheelIcon,
  DocumentCheckMarkIcon,
  DocumentsFillIcon,
  EuroCoinsFillIcon,
  FolderIcon,
  HandWithEuroCoinIcon,
  HouseCanalFillIcon,
  SearchIcon,
  SpeechBalloonQuestionMarkIcon,
  WalletIcon,
} from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Navigation/App Navigation',
  component: AppNavigation,
  args: {
    children: (
      <>
        <AppNavigation.Link href="#" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
        <AppNavigation.Link href="#" icon={EuroCoinsFillIcon} key={2} label="Subsidies" />
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
      themes: { themeOverride: 'Compact' },
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
        <AppNavigation.Button aria-controls="subsidies-menu" icon={EuroCoinsFillIcon} key={2} label="Subsidies">
          <AppNavigation.Menu id="subsidies-menu">
            <AppNavigation.Link href="#" icon={WalletIcon} key="1" label="Initiatieven" />
            <AppNavigation.Link href="#" icon={HandWithEuroCoinIcon} key="2" label="Initiatiefnemers" />
            <AppNavigation.Link href="#" icon={FolderIcon} key="3" label="Dossiers" />
            <AppNavigation.Link href="#" icon={SpeechBalloonQuestionMarkIcon} key="4" label="Hulp" />
            <AppNavigation.Link href="#" icon={CogwheelIcon} key="5" label="Beheer" />
          </AppNavigation.Menu>
        </AppNavigation.Button>
        <AppNavigation.Button aria-controls="reports-menu" icon={DocumentsFillIcon} key={3} label="Rapportages">
          <AppNavigation.Menu id="reports-menu">
            <AppNavigation.Link href="#" icon={SearchIcon} key="1" label="Inspecties" />
            <AppNavigation.Link href="#" icon={DocumentCheckMarkIcon} key="2" label="Nader onderzoek" />
          </AppNavigation.Menu>
        </AppNavigation.Button>
        <AppNavigation.Link href="#" icon={BarChartFillIcon} key={4} label="Analyses" />
        <AppNavigation.Link href="#" icon={CogwheelFillIcon} key={5} label="Instellingen" />
      </>
    ),
    expanded: true,
  },
}

export const WithActiveItem: Story = {
  args: {
    children: (
      <>
        <AppNavigation.Link href="#" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
        <AppNavigation.Link active href="#" icon={EuroCoinsFillIcon} key={2} label="Subsidies" />
        <AppNavigation.Link href="#" icon={DocumentsFillIcon} key={3} label="Rapportages" />
        <AppNavigation.Link href="#" icon={BarChartFillIcon} key={4} label="Analyses" />
        <AppNavigation.Link href="#" icon={CogwheelFillIcon} key={5} label="Instellingen" />
      </>
    ),
  },
}

export const WithActiveSubNavigationItem: Story = {
  args: {
    children: (
      <>
        <AppNavigation.Link href="#" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
        <AppNavigation.Button aria-controls="subsidies-menu" icon={EuroCoinsFillIcon} key={2} label="Subsidies" open>
          <AppNavigation.Menu id="subsidies-menu">
            <AppNavigation.Link href="#" icon={WalletIcon} key="1" label="Initiatieven" />
            <AppNavigation.Link href="#" icon={HandWithEuroCoinIcon} key="2" label="Initiatiefnemers" />
            <AppNavigation.Link active href="#" icon={FolderIcon} key="3" label="Dossiers" />
            <AppNavigation.Link href="#" icon={SpeechBalloonQuestionMarkIcon} key="4" label="Hulp" />
            <AppNavigation.Link href="#" icon={CogwheelIcon} key="5" label="Beheer" />
          </AppNavigation.Menu>
        </AppNavigation.Button>
        <AppNavigation.Button aria-controls="reports-menu" icon={DocumentsFillIcon} key={3} label="Rapportages">
          <AppNavigation.Menu id="reports-menu">
            <AppNavigation.Link href="#" icon={SearchIcon} key="1" label="Inspecties" />
            <AppNavigation.Link href="#" icon={DocumentCheckMarkIcon} key="2" label="Nader onderzoek" />
          </AppNavigation.Menu>
        </AppNavigation.Button>
        <AppNavigation.Link href="#" icon={BarChartFillIcon} key={4} label="Analyses" />
        <AppNavigation.Link href="#" icon={CogwheelFillIcon} key={5} label="Instellingen" />
      </>
    ),
    expanded: true,
  },
}
