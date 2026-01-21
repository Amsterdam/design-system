/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { CSSProperties } from 'react'

import { Grid, Heading, LinkList } from '@amsterdam/design-system-react'
import { LogInIcon, PlusIcon, SearchIcon } from '@amsterdam/design-system-react-icons'
import { PageHeader } from '@amsterdam/design-system-react/src'

import ExampleLogo from '../Logo/ExampleLogo'
import { collapsibleMenuItems, headerMenuItems } from './content'

const meta = {
  title: 'Components/Containers/Page Header',
  component: PageHeader,
} satisfies Meta<typeof PageHeader>

export default meta

export type PageHeaderStory = StoryObj<typeof meta>

export const Default: PageHeaderStory = {
  args: {
    brandName: 'Data Amsterdam',
    children: (
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
            {collapsibleMenuItems[0].map(({ href, label }) => (
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
            {collapsibleMenuItems[1].map(({ href, label }) => (
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
            {collapsibleMenuItems[2].map(({ href, label }) => (
              <LinkList.Link href={href} key={label}>
                {label}
              </LinkList.Link>
            ))}
          </LinkList>
        </Grid.Cell>
      </Grid>
    ),
    menuItems: [
      <PageHeader.MenuLink href="#" key={1} lang="en">
        English
      </PageHeader.MenuLink>,
      <PageHeader.MenuLink fixed href="#" icon={SearchIcon} key={2}>
        Zoeken
      </PageHeader.MenuLink>,
    ],
  },
}

export const WithMovingLinks: PageHeaderStory = {
  args: {
    children: (
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
    ),
    menuItems: [
      <PageHeader.MenuLink href="#" key={1} lang="en">
        English
      </PageHeader.MenuLink>,
      <PageHeader.MenuLink fixed href="#" icon={SearchIcon} key={2}>
        Zoeken
      </PageHeader.MenuLink>,
    ],
  },
}

export const WithoutMenuButtonOnWideWindow: PageHeaderStory = {
  args: {
    brandName: 'Aan de Amsterdamse grachten',
    children: (
      <Grid>
        <Grid.Cell span="all">
          <LinkList>
            {headerMenuItems.map(({ href, label }) => (
              <LinkList.Link href={href} key={label}>
                {label}
              </LinkList.Link>
            ))}
          </LinkList>
        </Grid.Cell>
      </Grid>
    ),
    menuItems: [
      ...headerMenuItems.map(({ href, label }) => (
        <PageHeader.MenuLink href={href} key={label}>
          {label}
        </PageHeader.MenuLink>
      )),
      <PageHeader.MenuLink fixed href="#" icon={SearchIcon} key="Zoeken">
        Zoeken
      </PageHeader.MenuLink>,
    ],
    noMenuButtonOnWideWindow: true,
  },
}

export const WithoutMenuButton: PageHeaderStory = {
  args: {
    brandName: 'Mijn Amsterdam',
    menuItems: (
      <PageHeader.MenuLink fixed href="#" icon={LogInIcon}>
        Inloggen
      </PageHeader.MenuLink>
    ),
  },
}

export const WithCustomLogoLink: PageHeaderStory = {
  args: {
    logoAccessibleName: 'Gemeentelijke Gezondheidsdienst Amsterdam logo',
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de voorpagina van de GGD Amsterdam',
  },
}

export const WithCustomTexts: PageHeaderStory = {
  args: {
    children: (
      <Grid>
        <Grid.Cell span="all">
          <LinkList>
            <LinkList.Link href="#" lang="en">
              English
            </LinkList.Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
    ),
    menuButtonText: 'Alle onderwerpen',
    menuButtonTextForHide: 'Verberg onderwerpen menu',
    menuButtonTextForShow: 'Laat onderwerpen menu zien',
    navigationLabel: 'Navigatie',
  },
}

export const WithCustomMenuButtonIcon: PageHeaderStory = {
  args: {
    children: 'Test',
    menuButtonIcon: PlusIcon,
  },
}

export const WithCustomLogo: PageHeaderStory = {
  args: {
    brandName: 'Voorbeeld',
    logoBrand: {
      label: 'Gemeente logo',
      svg: ExampleLogo,
    },
    style: {
      '--ams-logo-block-size': 'clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem)',
      '--ams-logo-min-block-size': '1.125rem',
    } as CSSProperties,
  },
}
