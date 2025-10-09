/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { type MenuProps } from '@amsterdam/design-system-react'
import { Grid, Heading, Menu, PageFooter, PageHeader } from '@amsterdam/design-system-react'
import { DocumentsIcon, PieChartIcon, SettingsIcon } from '@amsterdam/design-system-react-icons'
import { Page } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'

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
    layout: {
      control: {
        labels: { undefined: 'website (default)' },
      },
      options: [undefined, 'application'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>

export default meta

type Story = StoryObj<typeof meta>

const PageBody = () => (
  <Grid paddingBottom="x-large">
    <Grid.Cell span="all">
      <Heading level={1}>Page Body</Heading>
    </Grid.Cell>
  </Grid>
)

export const Default: Story = {
  args: {
    children: (
      <>
        <PageHeader brandName="Page Header" noMenuButtonOnWideWindow />
        <main id="inhoud">
          <PageBody />
        </main>
        <PageFooter>
          <PageFooter.Menu>
            <PageFooter.MenuLink href="/">Page Footer</PageFooter.MenuLink>
          </PageFooter.Menu>
        </PageFooter>
      </>
    ),
  },
}

// TODO Reuse Menu story?
const MenuWithItems = (props: MenuProps) => (
  <Menu {...props}>
    <Menu.Link color="inverse" href="#" icon={<PieChartIcon />}>
      Menu item 1
    </Menu.Link>
    <Menu.Link color="inverse" href="#" icon={<DocumentsIcon />}>
      Menu item 2
    </Menu.Link>
    <Menu.Link color="inverse" href="#" icon={<SettingsIcon />}>
      Voorbereidingswerkzaamheden
    </Menu.Link>
  </Menu>
)

export const ForApplications: Story = {
  args: {
    children: <PageBody />,
    lang: 'nl',
    layout: 'application',
  },
  globals: {
    // TODO theme: 'Compact',
  },
  render: ({ children, ...args }) => (
    <Page {...args}>
      <MenuWithItems />
      <PageHeader brandName="Page Header" noMenuButtonOnWideWindow>
        <MenuWithItems narrow />
      </PageHeader>
      <main id="inhoud">{children}</main>
      <PageFooter>
        <Heading className="ams-visually-hidden" level={2}>
          Over deze website
        </Heading>
        <PageFooter.Menu>
          <PageFooter.MenuLink href="/">Page Footer</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>
    </Page>
  ),
}
