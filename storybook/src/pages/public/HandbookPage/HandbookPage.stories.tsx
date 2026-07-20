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
      <Grid paddingBottom="2x-large" paddingTop="x-large">
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
