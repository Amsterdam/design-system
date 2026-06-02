/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { MouseEvent } from 'react'

import { Grid, Heading, Paragraph, SkipLink, TableOfContents } from '@amsterdam/design-system-react'
import { useState } from 'react'

import type { HandbookPage } from './pages'

import { commonMeta } from '../common/config'
import { findAncestors, findPage, pages } from './pages'

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Handbook Page',
} satisfies Meta

export default meta

type RenderTocOptions = {
  currentSlug: string
  expandedSlugs: Set<string>
  onSelect: (event: MouseEvent<HTMLAnchorElement>, slug: string) => void
}

const renderTocList = (list: Array<HandbookPage>, options: RenderTocOptions) => (
  <TableOfContents.List>
    {list.map((page) => (
      <TableOfContents.Link
        aria-current={page.slug === options.currentSlug ? 'page' : undefined}
        defaultExpanded={options.expandedSlugs.has(page.slug)}
        href={`#${page.slug}`}
        key={page.slug}
        label={page.heading}
        onClick={(event) => options.onSelect(event, page.slug)}
      >
        {page.children && renderTocList(page.children, options)}
      </TableOfContents.Link>
    ))}
  </TableOfContents.List>
)

export const Default: StoryObj = {
  render: () => {
    const [currentSlug, setCurrentSlug] = useState('s2-2-1')

    const handleSelect = (event: MouseEvent<HTMLAnchorElement>, slug: string) => {
      event.preventDefault()
      setCurrentSlug(slug)
    }

    const currentPage = findPage(currentSlug) ?? pages[0]
    const expandedSlugs = new Set(findAncestors(currentSlug) ?? [])

    return (
      <>
        <SkipLink href={`#${currentPage.slug}`}>Inhoudsopgave overslaan</SkipLink>
        <Grid id="inhoud" paddingVertical="x-large">
          <Grid.Cell span={{ narrow: 4, medium: 3, wide: 4 }}>
            <TableOfContents collapsible heading="Inhoudsopgave" key={currentSlug}>
              {renderTocList(pages, { currentSlug, expandedSlugs, onSelect: handleSelect })}
            </TableOfContents>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 5, wide: 7 }}>
            <main className="ams-prose" id={currentPage.slug}>
              <Heading level={1}>{currentPage.heading}</Heading>
              <Paragraph size="large">{currentPage.lead}</Paragraph>
              <Paragraph>{currentPage.body}</Paragraph>
            </main>
          </Grid.Cell>
        </Grid>
      </>
    )
  },
}
