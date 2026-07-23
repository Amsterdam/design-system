/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { MouseEvent } from 'react'

import { Grid, Heading, Paragraph, TableOfContents } from '@amsterdam/design-system-react'
import { useState } from 'react'

import type { HandbookPage } from './pages'

import { commonMeta } from '../common/commonMeta'
import { findAncestors, findPage, pages } from './pages'

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Handbook Page',
  parameters: {
    ...commonMeta.parameters,
    skipLinks: [
      { label: 'Direct naar de inhoudsopgave', targetId: 'inhoudsopgave' },
      { label: 'Direct naar de inhoud', targetId: 'inhoud' },
    ],
  },
} satisfies Meta

export default meta

const initialSlug = 's2-2-1'

/** The slugs whose branches are open when a page is the current one: its ancestors, plus the page itself if it has children. */
const branchFor = (slug: string) => {
  const slugs = new Set(findAncestors(slug) ?? [])

  if (findPage(slug)?.children) {
    slugs.add(slug)
  }

  return slugs
}

type RenderTocOptions = {
  currentSlug: string
  expandedSlugs: Set<string>
  onSelect: (event: MouseEvent<HTMLAnchorElement>, slug: string) => void
  onToggle: (slug: string, expanded: boolean) => void
}

const renderTocList = (list: Array<HandbookPage>, options: RenderTocOptions) => (
  <TableOfContents.List>
    {list.map((page) => (
      <TableOfContents.Link
        aria-current={page.slug === options.currentSlug ? 'page' : undefined}
        expanded={options.expandedSlugs.has(page.slug)}
        href={`#${page.slug}`}
        key={page.slug}
        label={page.heading}
        onClick={(event) => options.onSelect(event, page.slug)}
        onToggle={(expanded) => options.onToggle(page.slug, expanded)}
      >
        {page.children && renderTocList(page.children, options)}
      </TableOfContents.Link>
    ))}
  </TableOfContents.List>
)

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        // A `render` without arguments prints the story’s own source, including its state and handlers.
        // Provide the source by hand so the panel shows the markup to compose, without that scaffolding.
        code: `// handleSelect sets the current page; handleToggle opens and closes a branch. Both keep the Table of Contents controlled.

// One Grid for the whole page combines both rules: a paddingTop of large and a paddingBottom of 2x-large.
<Grid paddingBottom="2x-large" paddingTop="large">
  <Grid.Cell span={{ narrow: 4, medium: 3, wide: 4 }}>
    <TableOfContents collapsible heading="Inhoudsopgave" id="inhoudsopgave">
      <TableOfContents.List>
        <TableOfContents.Link href="#s1" label="Inleiding" onClick={handleSelect} />
        <TableOfContents.Link
          expanded
          href="#s2"
          label="Vaststellen en waarderen van functies"
          onClick={handleSelect}
          onToggle={handleToggle}
        >
          <TableOfContents.List>
            <TableOfContents.Link href="#s2-1" label="Algemeen" onClick={handleSelect} />
            <TableOfContents.Link
              expanded
              href="#s2-2"
              label="Waardering van functies"
              onClick={handleSelect}
              onToggle={handleToggle}
            >
              <TableOfContents.List>
                <TableOfContents.Link aria-current="page" href="#s2-2-1" label="Methode" onClick={handleSelect} />
                <TableOfContents.Link href="#s2-2-2" label="Procedure" onClick={handleSelect} />
                {/* … a Bezwaar page … */}
              </TableOfContents.List>
            </TableOfContents.Link>
            {/* … a Herwaardering branch with its own pages … */}
          </TableOfContents.List>
        </TableOfContents.Link>
        {/* … Salaristoelagen, with two pages, and Vergoedingen … */}
      </TableOfContents.List>
    </TableOfContents>
  </Grid.Cell>
  <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
    <main className="ams-prose" id="inhoud">
      <Heading level={1}>Methode</Heading>
      <Paragraph size="large">
        We gebruiken de HR21-systematiek om functies objectief en vergelijkbaar te waarderen.
      </Paragraph>
      <Paragraph>
        De methode kent punten toe aan gezichtspunten zoals kennis, zelfstandigheid, contacten en afbreukrisico.
        De som van de punten bepaalt de indeling in een salarisschaal. Deze werkwijze is landelijk afgestemd.
      </Paragraph>
    </main>
  </Grid.Cell>
</Grid>`,
        language: 'tsx',
      },
    },
  },
  render: () => {
    const [currentSlug, setCurrentSlug] = useState(initialSlug)
    const [expandedSlugs, setExpandedSlugs] = useState(() => branchFor(initialSlug))

    const handleSelect = (event: MouseEvent<HTMLAnchorElement>, slug: string) => {
      event.preventDefault()
      setCurrentSlug(slug)
      setExpandedSlugs((slugs) => new Set([...slugs, ...branchFor(slug)]))
    }

    const handleToggle = (slug: string, expanded: boolean) => {
      setExpandedSlugs((slugs) => {
        const nextSlugs = new Set(slugs)

        if (expanded) {
          nextSlugs.add(slug)
        } else {
          nextSlugs.delete(slug)
        }

        return nextSlugs
      })
    }

    const currentPage = findPage(currentSlug) ?? pages[0]

    return (
      /* One Grid for the whole page combines both rules: a paddingTop of large and a paddingBottom of 2x-large. */
      <Grid paddingBottom="2x-large" paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 3, wide: 4 }}>
          <TableOfContents collapsible heading="Inhoudsopgave" id="inhoudsopgave">
            {renderTocList(pages, { currentSlug, expandedSlugs, onSelect: handleSelect, onToggle: handleToggle })}
          </TableOfContents>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
          <main className="ams-prose" id="inhoud">
            <Heading level={1}>{currentPage.heading}</Heading>
            <Paragraph size="large">{currentPage.lead}</Paragraph>
            <Paragraph>{currentPage.body}</Paragraph>
          </main>
        </Grid.Cell>
      </Grid>
    )
  },
}
