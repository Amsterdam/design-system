/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { CSSProperties } from 'react'

import { Grid, Heading, LinkList } from '@amsterdam/design-system-react'
import { LogInIcon, SearchIcon } from '@amsterdam/design-system-react-icons'
import { PageHeader } from '@amsterdam/design-system-react/src'
import { logoBrands } from '@amsterdam/design-system-react/src/Logo/Logo'
import { expect } from 'storybook/test'

import ExampleLogo from '../Logo/ExampleLogo'
import { default as pageHeaderMeta } from './PageHeader.stories'

const meta = {
  ...pageHeaderMeta,
  title: 'Components/Containers/Page Header',
} satisfies Meta<typeof PageHeader>

export default meta

type Story = StoryObj<typeof meta>

const defaultStoryLinks = [
  [
    { href: '#', label: 'Kaart' },
    { href: '#', label: 'Panoramabeelden' },
    { href: '#', label: 'Tabellen' },
    { href: '#', label: 'Catalogus (Beta)' },
    { href: '#', label: 'Kaarten' },
    { href: '#', label: 'Datacatalogus' },
  ],
  [
    { href: '#', label: 'Over de organisatie' },
    { href: '#', label: 'Over het dataplatform' },
  ],
  [
    { href: '#', label: 'Help' },
    { href: '#', label: 'Contact' },
  ],
]

const WithoutMenuButtonOnWideWindowStoryLinks = [
  { href: '#', label: 'Stad' },
  { href: '#', label: 'Techniek' },
  { href: '#', label: 'Historie' },
  { href: '#', label: 'Duurzaamheid' },
]

export const Test: Story = {
  args: {
    brandName: 'Data Amsterdam',
    children: <p>test</p>,
    menuItems: [
      <PageHeader.MenuLink href="#" key="1" lang="en">
        English
      </PageHeader.MenuLink>,
      <PageHeader.MenuLink fixed href="#" key="2">
        Zoeken
      </PageHeader.MenuLink>,
    ],
  },
  play: async ({ canvas, userEvent }) => {
    const pageHeader = await canvas.findByTestId('interaction-test')
    const menuButton = pageHeader.querySelector('button')
    const exampleChildren = await canvas.findByTestId('children')

    if (!menuButton) return

    await userEvent.click(menuButton)
    expect(exampleChildren).toBeVisible()
    await userEvent.click(menuButton)
    expect(exampleChildren).not.toBeVisible()
  },
  render: (args) => (
    <>
      {/* Interaction test */}
      <PageHeader data-testid="interaction-test" {...args}>
        <ul>
          <li data-testid="children">English</li>
        </ul>
      </PageHeader>

      {/* Default */}
      <PageHeader {...args}>
        <Grid>
          <PageHeader.GridCellNarrowWindowOnly span="all">
            <LinkList>
              <LinkList.Link href="#" lang="en">
                English
              </LinkList.Link>
            </LinkList>
          </PageHeader.GridCellNarrowWindowOnly>
          <Grid.Cell span={4}>
            <Heading className="ams-mb-s" level={2} size="level-3">
              Onderdelen
            </Heading>
            <LinkList>
              {defaultStoryLinks[0].map(({ href, label }) => (
                <LinkList.Link href={href} key={label}>
                  {label}
                </LinkList.Link>
              ))}
            </LinkList>
          </Grid.Cell>
          <Grid.Cell span={4}>
            <Heading className="ams-mb-s" level={2} size="level-3">
              Over ons
            </Heading>
            <LinkList>
              {defaultStoryLinks[1].map(({ href, label }) => (
                <LinkList.Link href={href} key={label}>
                  {label}
                </LinkList.Link>
              ))}
            </LinkList>
          </Grid.Cell>
          <Grid.Cell span={4}>
            <Heading className="ams-mb-s" level={2} size="level-3">
              Help
            </Heading>
            <LinkList>
              {defaultStoryLinks[2].map(({ href, label }) => (
                <LinkList.Link href={href} key={label}>
                  {label}
                </LinkList.Link>
              ))}
            </LinkList>
          </Grid.Cell>
        </Grid>
      </PageHeader>

      {/* With moving links */}
      <PageHeader {...args}>
        <Grid>
          <PageHeader.GridCellNarrowWindowOnly span="all">
            <LinkList>
              <LinkList.Link href="#" lang="en">
                English
              </LinkList.Link>
            </LinkList>
          </PageHeader.GridCellNarrowWindowOnly>
          <Grid.Cell span="all">
            <LinkList>
              <LinkList.Link href="#">Regular collapsible menu link</LinkList.Link>
            </LinkList>
          </Grid.Cell>
        </Grid>
      </PageHeader>

      {/* Without menu button on wide window */}
      <PageHeader
        brandName="Aan de Amsterdamse grachten"
        menuItems={[
          ...WithoutMenuButtonOnWideWindowStoryLinks.map(({ href, label }) => (
            <PageHeader.MenuLink href={href} key={label}>
              {label}
            </PageHeader.MenuLink>
          )),
          <PageHeader.MenuLink fixed href="#" icon={SearchIcon} key="Zoeken">
            Zoeken
          </PageHeader.MenuLink>,
        ]}
        noMenuButtonOnWideWindow
      >
        <Grid>
          <Grid.Cell span="all">
            <LinkList>
              {WithoutMenuButtonOnWideWindowStoryLinks.map(({ href, label }) => (
                <LinkList.Link href={href} key={label}>
                  {label}
                </LinkList.Link>
              ))}
            </LinkList>
          </Grid.Cell>
        </Grid>
      </PageHeader>

      {/* Without menu button */}
      <PageHeader
        brandName="Mijn Amsterdam"
        menuItems={
          <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
            Inloggen
          </PageHeader.MenuLink>
        }
      />

      {/* With custom logo link */}
      <PageHeader
        logoAccessibleName="Gemeentelijke Gezondheidsdienst Amsterdam logo"
        logoBrand="ggd-amsterdam"
        logoLink="https://www.ggd.amsterdam.nl/"
        logoLinkTitle="Naar de voorpagina van de GGD Amsterdam"
      />

      {/* With custom texts */}
      <PageHeader menuButtonText="Alle onderwerpen" navigationLabel="Navigatie">
        <Grid>
          <Grid.Cell span="all">
            <LinkList>
              <LinkList.Link href="#" lang="en">
                English
              </LinkList.Link>
            </LinkList>
          </Grid.Cell>
        </Grid>
      </PageHeader>

      {/* With custom logo */}
      <PageHeader
        brandName="Voorbeeld"
        logoBrand={{
          label: 'Gemeente logo',
          svg: ExampleLogo,
        }}
        style={
          {
            '--ams-logo-block-size': 'clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem)',
            '--ams-logo-min-block-size': '1.125rem',
          } as CSSProperties
        }
      />

      {/* All logo brands */}
      {logoBrands.map((brand) => (
        <PageHeader
          brandName="Voorbeeld"
          key={brand}
          logoBrand={brand}
          menuItems={
            <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
              Inloggen
            </PageHeader.MenuLink>
          }
        />
      ))}
    </>
  ),
  tags: ['!dev', '!autodocs'],
}
