/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { PropsWithChildren } from 'react'

import {
  Breadcrumb,
  Grid,
  Heading,
  Page,
  PageFooter,
  PageHeader,
  Paragraph,
  SkipLink,
  TableOfContents,
  TabNavigation,
} from '@amsterdam/design-system-react'
import { UserAccountIcon } from '@amsterdam/design-system-react-icons'

import { exampleParagraph } from '#storybook/_common/exampleContent'

import { pageParameters } from '../common/commonMeta'
import {
  currentReportingPageSlug,
  currentReportingSectionSlug,
  currentTopNavigationSlug,
  reportingSections,
  topNavigationItems,
} from './navigationItems'

const meta = {
  title: 'Pages/Internal/Top Navigation Page',
  parameters: pageParameters(
    'An experimental internal template with first-level navigation in a bar below the Page Header, ' +
      'and deeper levels in a column beside the content.',
  ),
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const currentTopNavigationItem = topNavigationItems.find(({ slug }) => slug === currentTopNavigationSlug)
if (!currentTopNavigationItem) {
  throw new Error('Current top navigation item was not found in topNavigationItems.')
}

const currentReportingSection = reportingSections.find(({ slug }) => slug === currentReportingSectionSlug)
if (!currentReportingSection) {
  throw new Error('Current reporting section was not found in reportingSections.')
}

const currentReportingPage = currentReportingSection.pages?.find(({ slug }) => slug === currentReportingPageSlug)
if (!currentReportingPage) {
  throw new Error('Current reporting page was not found in the current reporting section.')
}

const exampleParagraph1 = exampleParagraph()
const exampleParagraph2 = exampleParagraph()

const topBar = (
  <Grid paddingTop="large">
    <Grid.Cell appearance="flush" span="all">
      <TabNavigation accessibleName="Hoofdmenu">
        <TabNavigation.List>
          {topNavigationItems.map(({ href, label, slug }) => (
            <TabNavigation.Link
              aria-current={slug === currentTopNavigationSlug ? 'true' : undefined}
              href={href}
              key={slug}
            >
              {label}
            </TabNavigation.Link>
          ))}
        </TabNavigation.List>
      </TabNavigation>
    </Grid.Cell>
  </Grid>
)

const InternalPageShell = ({ children }: PropsWithChildren) => (
  <Page>
    <SkipLink href="#inhoud">Direct naar inhoud</SkipLink>
    <PageHeader
      brandName="Naam van de applicatie"
      brandNameShort="NvdA"
      menuItems={
        <PageHeader.MenuLink fixed href="#" icon={UserAccountIcon}>
          Inloggen
        </PageHeader.MenuLink>
      }
      navigationLabel="Account"
    />
    {children}
    <PageFooter>
      <PageFooter.Menu>
        <PageFooter.MenuLink href="#">E-mail je vraag of feedback</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Bekijk help en uitleg</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Overzicht releases</PageFooter.MenuLink>
      </PageFooter.Menu>
    </PageFooter>
  </Page>
)

// The stories render through a shell, a shared bar and data, and the Code Panel would print all of that as written.
// This builds the source by hand instead, so the panel shows the page the way a developer would write it.
const sourceWith = (sectionNavigation: string, breadcrumbLinks: string, heading: string) => `<Page>
  <SkipLink href="#inhoud">Direct naar inhoud</SkipLink>
  <PageHeader
    brandName="Naam van de applicatie"
    menuItems={
      <PageHeader.MenuLink fixed href="#" icon={UserAccountIcon}>
        Inloggen
      </PageHeader.MenuLink>
    }
    navigationLabel="Account"
  />
  {/* The first level of navigation. aria-current="true" marks the section of the current page. */}
  <Grid paddingTop="large">
    <Grid.Cell appearance="flush" span="all">
      <TabNavigation accessibleName="Hoofdmenu">
        <TabNavigation.List>
          <TabNavigation.Link href="#">Dashboard</TabNavigation.Link>
          <TabNavigation.Link href="#">Projecten</TabNavigation.Link>
          <TabNavigation.Link aria-current="true" href="#">
            Rapportages
          </TabNavigation.Link>
          <TabNavigation.Link href="#">Analyses</TabNavigation.Link>
          <TabNavigation.Link href="#">Instellingen</TabNavigation.Link>
        </TabNavigation.List>
      </TabNavigation>
    </Grid.Cell>
  </Grid>
  <Grid paddingVertical="x-large">
${sectionNavigation}
    {/* main is a Subgrid: it keeps the columns of the page, and the navigation beside it stays outside. */}
    <Grid.Subgrid as="main" gapVertical="large" id="inhoud" span={{ narrow: 4, medium: 5, wide: 7 }}>
      <Grid.Cell appearance="transparent" className="ams-prose" span="all">
        <Breadcrumb>
${breadcrumbLinks}
        </Breadcrumb>
        <Heading level={1}>${heading}</Heading>
      </Grid.Cell>
      {/* The content of the page, in Cells on the same columns. */}
    </Grid.Subgrid>
  </Grid>
  <PageFooter />
</Page>`

export const Default: Story = {
  parameters: {
    chromatic: { modes: { '320px': { viewport: 320 } } },
    docs: {
      source: {
        code: sourceWith(
          `    {/* The levels below the bar, for the section of the current page. Its heading names this navigation. */}
    <Grid.Cell span={{ narrow: 4, medium: 3, wide: 4 }}>
      <TableOfContents collapsible heading="Rapportages">
        <TableOfContents.List>
          <TableOfContents.Link defaultExpanded href="#" label="Vergunninghouders">
            <TableOfContents.List>
              <TableOfContents.Link href="#" label="2024/2025" />
              <TableOfContents.Link href="#" label="2025/2026" />
              <TableOfContents.Link aria-current="page" href="#" label="2026/2027" />
            </TableOfContents.List>
          </TableOfContents.Link>
          <TableOfContents.Link href="#" label="Maandrapportages" />
          <TableOfContents.Link href="#" label="Jaarrapportages" />
        </TableOfContents.List>
      </TableOfContents>
    </Grid.Cell>`,
          `          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Rapportages</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Vergunninghouders</Breadcrumb.Link>`,
          'Vergunninghouders 2026/2027',
        ),
        language: 'tsx',
      },
    },
  },
  render: () => (
    <InternalPageShell>
      {topBar}
      <Grid paddingVertical="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 3, wide: 4 }}>
          <TableOfContents collapsible heading={currentTopNavigationItem.label}>
            <TableOfContents.List>
              {reportingSections.map(({ href, label, pages, slug }) => (
                <TableOfContents.Link
                  defaultExpanded={slug === currentReportingSectionSlug}
                  href={href}
                  key={slug}
                  label={label}
                >
                  {pages && (
                    <TableOfContents.List>
                      {pages.map(({ href: pageHref, label: pageLabel, slug: pageSlug }) => (
                        <TableOfContents.Link
                          aria-current={pageSlug === currentReportingPageSlug ? 'page' : undefined}
                          href={pageHref}
                          key={pageSlug}
                          label={pageLabel}
                        />
                      ))}
                    </TableOfContents.List>
                  )}
                </TableOfContents.Link>
              ))}
            </TableOfContents.List>
          </TableOfContents>
        </Grid.Cell>
        <Grid.Subgrid as="main" gapVertical="large" id="inhoud" span={{ narrow: 4, medium: 5, wide: 7 }}>
          <Grid.Cell appearance="transparent" className="ams-prose" span="all">
            <Breadcrumb>
              <Breadcrumb.Link href="#home">Home</Breadcrumb.Link>
              <Breadcrumb.Link href="#rapportages">Rapportages</Breadcrumb.Link>
              <Breadcrumb.Link href={currentReportingSection.href}>{currentReportingSection.label}</Breadcrumb.Link>
            </Breadcrumb>
            <Heading level={1}>
              {currentReportingSection.label} {currentReportingPage.label}
            </Heading>
            <Paragraph size="large">{exampleParagraph1}</Paragraph>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} style={{ blockSize: '10rem' }} />
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 7 }} style={{ blockSize: '10rem' }} />
          <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }}>
            <Paragraph>{exampleParagraph2}</Paragraph>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 3, wide: 4 }} style={{ blockSize: '8rem' }} />
        </Grid.Subgrid>
      </Grid>
    </InternalPageShell>
  ),
}

export const WithSectionTabs: Story = {
  parameters: {
    chromatic: { modes: { '320px': { viewport: 320 } } },
    docs: {
      source: {
        code: sourceWith(
          `    {/* One level below the bar. accessibleName tells this navigation apart from the bar. */}
    <Grid.Cell appearance="flush" span={{ narrow: 4, medium: 3, wide: 4 }}>
      <TabNavigation accessibleName="Paginanavigatie binnen Rapportages" orientation="vertical">
        <TabNavigation.List>
          <TabNavigation.Link aria-current="page" href="#">
            Vergunninghouders
          </TabNavigation.Link>
          <TabNavigation.Link href="#">Maandrapportages</TabNavigation.Link>
          <TabNavigation.Link href="#">Jaarrapportages</TabNavigation.Link>
        </TabNavigation.List>
      </TabNavigation>
    </Grid.Cell>`,
          `          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          <Breadcrumb.Link href="#">Rapportages</Breadcrumb.Link>`,
          'Vergunninghouders',
        ),
        language: 'tsx',
      },
    },
  },
  render: () => (
    <InternalPageShell>
      {topBar}
      <Grid paddingVertical="x-large">
        <Grid.Cell appearance="flush" span={{ narrow: 4, medium: 3, wide: 4 }}>
          <TabNavigation accessibleName="Paginanavigatie binnen Rapportages" orientation="vertical">
            <TabNavigation.List>
              {reportingSections.map(({ href, label, slug }) => (
                <TabNavigation.Link
                  aria-current={slug === currentReportingSectionSlug ? 'page' : undefined}
                  href={href}
                  key={slug}
                >
                  {label}
                </TabNavigation.Link>
              ))}
            </TabNavigation.List>
          </TabNavigation>
        </Grid.Cell>
        <Grid.Subgrid as="main" gapVertical="large" id="inhoud" span={{ narrow: 4, medium: 5, wide: 7 }}>
          <Grid.Cell appearance="transparent" className="ams-prose" span="all">
            <Breadcrumb>
              <Breadcrumb.Link href="#home">Home</Breadcrumb.Link>
              <Breadcrumb.Link href="#rapportages">Rapportages</Breadcrumb.Link>
            </Breadcrumb>
            <Heading level={1}>{currentReportingSection.label}</Heading>
            <Paragraph size="large">{exampleParagraph1}</Paragraph>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} style={{ blockSize: '10rem' }} />
          <Grid.Cell span={{ narrow: 4, medium: 4, wide: 7 }} style={{ blockSize: '10rem' }} />
          <Grid.Cell span={{ narrow: 4, medium: 5, wide: 8 }}>
            <Paragraph>{exampleParagraph2}</Paragraph>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 3, wide: 4 }} style={{ blockSize: '8rem' }} />
        </Grid.Subgrid>
      </Grid>
    </InternalPageShell>
  ),
}
