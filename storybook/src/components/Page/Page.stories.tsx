/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid, Heading, Menu, PageFooter, PageHeader, SkipLink } from '@amsterdam/design-system-react'
import { SettingsFillIcon } from '@amsterdam/design-system-react-icons'
import { Page } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Page',
  component: Page,
  args: {
    lang: 'nl', // Mimic what we do in preview.tsx, where the decorator doesn’t render a Page for stories of Page.
  },
  argTypes: {
    className: {
      table: { disable: true },
    },
    hasMenu: {
      description:
        'This prop updates automatically to prevent an invalid appearance: a Menu can only be used in Compact Mode.',
      table: { readonly: true },
    },
    lang: {
      table: { disable: true }, // It’s best practice to set this attribute on the `html` element, so let’s not highlight it here.
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
    children: [
      <PageHeader brandName="Page Header" key="header" noMenuButtonOnWideWindow />,
      <main id="inhoud" key="main">
        <PageBody />
      </main>,
      <PageFooter key="footer">
        <PageFooter.Menu>
          <PageFooter.MenuLink href="/">Page Footer</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>,
    ],
  },
}

export const WithMenu: Story = {
  args: {
    children: <PageBody />,
    hasMenu: true,
    lang: 'nl',
  },
  globals: {
    theme: 'Compact',
  },
  render: ({ children, ...args }) => (
    <Page {...args}>
      <SkipLink className="ams-page__area--skip-link" href="#inhoud">
        Direct naar inhoud
      </SkipLink>
      <PageHeader brandName="Page Header" className="ams-page__area--header" noMenuButtonOnWideWindow>
        <Menu>
          <Menu.Link href="#" icon={<SettingsFillIcon />}>
            Menu item
          </Menu.Link>
        </Menu>
      </PageHeader>
      <Menu className="ams-page__area--menu" inWideWindow>
        <Menu.Link href="#" icon={<SettingsFillIcon />}>
          Menu item
        </Menu.Link>
      </Menu>
      <main className="ams-page__area--body" id="inhoud">
        {children}
      </main>
      <PageFooter className="ams-page__area--footer">
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
