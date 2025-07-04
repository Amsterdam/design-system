/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AppNavigation } from '@amsterdam/design-system-react/src'
import {
  BarChartFillIcon,
  BuildingIcon,
  CogwheelFillIcon,
  CogwheelIcon,
  DocumentCheckMarkIcon,
  DocumentsFillIcon,
  FolderFillIcon,
  HandshakeIcon,
  HouseCanalFillIcon,
  QuestionMarkCircleIcon,
  RulerIcon,
  SearchIcon,
} from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'
import { SearchPage } from './SearchPage'
import { Layout } from '../common/Layout'
import { commonMeta } from '../common/config'

const meta = {
  ...commonMeta,
  title: 'Pages/Application/Search',
  component: SearchPage,
} satisfies Meta<typeof SearchPage>

export default meta

export const Default: StoryObj = {
  decorators: [
    (Story) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
}

export const WithSubNavigation: StoryObj = {
  decorators: [
    (Story) => (
      <Layout
        navExpanded
        navItems={
          <>
            <AppNavigation.Link active href="#dashboard" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
            <AppNavigation.Button icon={FolderFillIcon} key={2} label="Projecten">
              <AppNavigation.Menu>
                <AppNavigation.Link href="#projecten/objecten" icon={BuildingIcon} key="1" label="Objecten" />
                <AppNavigation.Link href="#projecten/inspecties" icon={SearchIcon} key="2" label="Inspecties" />
                <AppNavigation.Link
                  href="#projecten/nader-onderzoek"
                  icon={DocumentCheckMarkIcon}
                  key="3"
                  label="Nader onderzoek"
                />
                <AppNavigation.Link href="#projecten/maatregelen" icon={RulerIcon} key="4" label="Maatregelen" />
                <AppNavigation.Link href="#projecten/batches" icon={HandshakeIcon} key="5" label="Batches" />
                <AppNavigation.Link href="#projecten/hulp" icon={QuestionMarkCircleIcon} key="6" label="Hulp" />
                <AppNavigation.Link href="#projecten/beheer" icon={CogwheelIcon} key="7" label="Beheer" />
              </AppNavigation.Menu>
            </AppNavigation.Button>
            <AppNavigation.Link href="#rapportages" icon={DocumentsFillIcon} key={3} label="Rapportages" />
            <AppNavigation.Link href="#analyses" icon={BarChartFillIcon} key={4} label="Analyses" />
            <AppNavigation.Link href="#instellingen" icon={CogwheelFillIcon} key={5} label="Instellingen" />
          </>
        }
      >
        <Story />
      </Layout>
    ),
  ],
}
