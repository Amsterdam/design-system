/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  Breadcrumb,
  Grid,
  Heading,
  MockPageBody,
  MockPageNavigation,
  Page,
  PageFooter,
  PageHeader,
  Paragraph,
} from '@amsterdam/design-system-react/src'
import {
  CogwheelIcon,
  DocumentsIcon,
  FolderIcon,
  HouseIcon,
  LineChartUpIcon,
} from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph } from '../shared/exampleContent'

const meta = {
  title: 'Components/Containers/Page',
  component: Page,
  args: {
    className: 'ams-docs-page',
  },
  argTypes: {
    className: {
      table: { disable: true },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <div className="ams-docs-item" />,
  },
}

export const Application: Story = {
  args: {
    children: (
      <>
        <MockPageNavigation>
          <MockPageNavigation.Link href="#" icon={HouseIcon} label="Dashboard" />
          <MockPageNavigation.Link href="#" icon={FolderIcon} label="Projecten" />
          <MockPageNavigation.Link href="#" icon={DocumentsIcon} label="Rapportages" />
          <MockPageNavigation.Link href="#" icon={LineChartUpIcon} label="Analyses" />
          <MockPageNavigation.Link href="#" icon={CogwheelIcon} label="Instellingen" />
        </MockPageNavigation>
        <PageHeader brandName="Application" />
        <MockPageBody as="main">
          <Grid paddingVertical="large">
            <Grid.Cell span="all">
              <Breadcrumb className="ams-mb-xs">
                <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
                <Breadcrumb.Link href="#">Projecten</Breadcrumb.Link>
              </Breadcrumb>
              <Heading className="ams-mb-s" level={2} size="level-1">
                Kerngegevens
              </Heading>
              <Heading level={1} size="level-2">
                Brug 423 opwaardering (Berlagebrug)
              </Heading>
            </Grid.Cell>
            {Array.from(Array(12).keys()).map((i) => (
              <Grid.Cell key={i} span={4}>
                <div style={{ backgroundColor: 'var(--ams-color-background)', padding: 'var(--ams-space-m)' }}>
                  <Paragraph>{exampleParagraph()}</Paragraph>
                </div>
              </Grid.Cell>
            ))}
          </Grid>
        </MockPageBody>
        <PageFooter>
          <PageFooter.Menu>
            {Array.from(Array(6).keys()).map((i) => (
              <PageFooter.MenuLink href="#" key={i}>
                Footer Menu Item {i + 1}
              </PageFooter.MenuLink>
            ))}
          </PageFooter.Menu>
        </PageFooter>
      </>
    ),
    purpose: 'application',
  },
  parameters: {
    layout: 'fullscreen',
    themes: { themeOverride: 'Compact' },
  },
}
