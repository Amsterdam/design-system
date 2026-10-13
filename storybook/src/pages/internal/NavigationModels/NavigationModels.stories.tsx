/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid, Heading, LinkList, Paragraph, TableOfContents } from '@amsterdam/design-system-react'

import { exampleParagraph } from '#storybook/_common/exampleContent'

import { commonMeta, pageParameters } from '../common/commonMeta'
import { navigationItems } from '../common/navigationItems'

const summary = exampleParagraph()
const details = exampleParagraph()

// The examples in the page body read the same links as the Menu, so both always offer the same pages.
const currentSection = navigationItems.find(({ id }) => id === 'rapportages')

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Navigation Models',
  parameters: pageParameters(
    'Experimental internal navigation models that use the same links and page body, and differ in navigation only.',
    { currentPageId: 'rapportages-vergunninghouders' },
  ),
  render: () => (
    <Grid paddingVertical="x-large">
      <Grid.Cell appearance="transparent" span="all">
        <Heading level={1}>Vergunninghouders 2026/2027</Heading>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }}>
        <Paragraph>{summary}</Paragraph>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 3, wide: 4 }}>
        <Paragraph>{details}</Paragraph>
      </Grid.Cell>
    </Grid>
  ),
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

// The application keeps the Menu wide: there is no button to narrow it. Every submenu is open, and stays open.
export const AlwaysWideOpenSubmenus: Story = {
  parameters: {
    navigation: {
      headerMenu: {
        navigationDepth: 2,
      },
      wideMenu: {
        expanded: true,
        navigationDepth: 2,
      },
    },
  },
}

// The application keeps the Menu wide: there is no button to narrow it.
// `collapsibleSubmenus` leaves the Menu itself alone: each submenu gets a button to show and hide it.
export const AlwaysWideCollapsibleSubmenus: Story = {
  parameters: {
    navigation: {
      headerMenu: {
        collapsibleSubmenus: true,
        navigationDepth: 2,
      },
      wideMenu: {
        collapsibleSubmenus: true,
        expanded: true,
        navigationDepth: 2,
      },
    },
  },
}

// `expandable` gives the Menu a button to widen and narrow it.
// `collapsibleSubmenus` gives each submenu a button of its own.
export const WidenedByUser: Story = {
  parameters: {
    chromatic: {
      modes: {
        '1160px': { viewport: 1160 },
        '1920px': { viewport: 1920 },
      },
    },
    navigation: {
      headerMenu: {
        collapsibleSubmenus: true,
        navigationDepth: 2,
      },
      wideMenu: {
        collapsibleSubmenus: true,
        expandable: true,
        expandForCurrentSubmenu: true,
        navigationDepth: 2,
      },
    },
  },
}

// The Menu shows the first level only, so the links of the current section move into the page.
// A page the Menu has no link to marks its section there, and itself in the Table of Contents.
export const NarrowWithTableOfContents: Story = {
  parameters: {
    currentSectionId: 'rapportages',
  },
  render: () => (
    <Grid paddingVertical="x-large">
      <Grid.Cell appearance="transparent" span="all">
        <Heading level={1}>Vergunninghouders 2026/2027</Heading>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 3, wide: 4 }}>
        {/* The heading names the section, which gives this navigation a name of its own next to the Menu. */}
        <TableOfContents heading={currentSection?.text}>
          <TableOfContents.List>
            {currentSection?.submenu?.map(({ href, id, text }) => (
              <TableOfContents.Link
                aria-current={id === 'rapportages-vergunninghouders' ? 'page' : undefined}
                href={href}
                key={id}
                label={text}
              />
            ))}
          </TableOfContents.List>
        </TableOfContents>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }}>
        <Paragraph>{summary}</Paragraph>
      </Grid.Cell>
    </Grid>
  ),
}

// The Menu shows the first level only, and its link leads to this page, which lists the pages of the section.
export const NarrowWithSectionOverview: Story = {
  parameters: {
    currentPageId: 'rapportages',
  },
  render: () => (
    <Grid paddingVertical="x-large">
      <Grid.Cell appearance="transparent" span="all">
        <Heading level={1}>{currentSection?.text}</Heading>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }}>
        <LinkList>
          {currentSection?.submenu?.map(({ href, id, text }) => (
            <LinkList.Link href={href} key={id}>
              {text}
            </LinkList.Link>
          ))}
        </LinkList>
      </Grid.Cell>
    </Grid>
  ),
}
