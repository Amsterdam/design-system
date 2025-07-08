/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { App, AppNavigation, Grid, PageFooter, PageHeader, Paragraph, SkipLink } from '@amsterdam/design-system-react'
import {
  BarChartFillIcon,
  CogwheelFillIcon,
  DocumentsFillIcon,
  FolderFillIcon,
  HouseCanalFillIcon,
} from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'
import Map from './Map/Map'

const meta = {
  title: 'Components/Containers/App',
  component: App,
  args: {
    fullscreen: false,
  },
  parameters: {
    layout: 'fullscreen',
    themes: { themeOverride: 'Compact' },
  },
} satisfies Meta<typeof App>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <SkipLink href="#main">Direct naar inhoud</SkipLink>
        <App.Header
          appName="Application"
          appNavigation={[
            <PageHeader.MenuLink href="#" key="1">
              Inloggen
            </PageHeader.MenuLink>,
          ]}
        />
        <AppNavigation aria-label="Main">
          <AppNavigation.Link href="#dashboard" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
          <AppNavigation.Link href="#projecten" icon={FolderFillIcon} key={2} label="Projecten" />
          <AppNavigation.Link href="#rapportages" icon={DocumentsFillIcon} key={3} label="Rapportages" />
          <AppNavigation.Link href="#analyses" icon={BarChartFillIcon} key={4} label="Analyses" />
          <AppNavigation.Link href="#instellingen" icon={CogwheelFillIcon} key={5} label="Instellingen" />
        </AppNavigation>
        <main className="ams-app-content" id="main">
          <Grid>
            <Grid.Cell span="all">
              <Paragraph>This is where the main content of your application goes.</Paragraph>
            </Grid.Cell>
          </Grid>
        </main>
        <PageFooter>
          <PageFooter.Menu>
            <PageFooter.MenuLink href="#">Over deze site</PageFooter.MenuLink>
            <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
            <PageFooter.MenuLink href="#">Cookies</PageFooter.MenuLink>
          </PageFooter.Menu>
        </PageFooter>
      </>
    ),
  },
}

export const Fullscreen: Story = {
  args: {
    children: (
      <>
        <SkipLink href="#main">Direct naar inhoud</SkipLink>
        <App.Header
          appName="Application"
          appNavigation={[
            <PageHeader.MenuLink href="#" key="1">
              Inloggen
            </PageHeader.MenuLink>,
          ]}
        />
        <AppNavigation aria-label="Main">
          <AppNavigation.Link href="#dashboard" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
          <AppNavigation.Link href="#projecten" icon={FolderFillIcon} key={2} label="Projecten" />
          <AppNavigation.Link href="#rapportages" icon={DocumentsFillIcon} key={3} label="Rapportages" />
          <AppNavigation.Link href="#analyses" icon={BarChartFillIcon} key={4} label="Analyses" />
          <AppNavigation.Link href="#instellingen" icon={CogwheelFillIcon} key={5} label="Instellingen" />
        </AppNavigation>
        <main className="ams-app-content" id="main" style={{ background: 'var(--ams-docs-grey)' }}>
          <div className="ams-docs-map-container">
            <Map scrollWheelZoom />
          </div>
        </main>
      </>
    ),
    fullscreen: true,
  },
}
