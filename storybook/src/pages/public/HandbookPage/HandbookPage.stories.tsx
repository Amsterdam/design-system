/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { MouseEvent } from 'react'

import { Grid, Heading, Paragraph, TableOfContents } from '@amsterdam/design-system-react'
import { useState } from 'react'

import type { HandbookPage } from './pages'

import { commonMeta, pageParameters } from '../common/commonMeta'
import { findAncestors, findPage, pages } from './pages'

const meta = {
  ...commonMeta,
  title: 'Pages/Public/Handbook Page',
  parameters: pageParameters(
    'Presents long-form reference material, such as a personnel handbook or policy document, ' +
      'as a set of short pages that stay easy to navigate and read.',
    {
      // Of the templates that use the shared public Page Layout, this is the only one that overrides its single
      // Skip Link: a reader may want to reach either the Table of Contents or the content. Each targetId matches
      // an id in the story below.
      skipLinks: [
        { label: 'Direct naar de inhoudsopgave', targetId: 'inhoudsopgave' },
        { label: 'Direct naar de inhoud', targetId: 'inhoud' },
      ],
    },
  ),
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
      /*
       * aria-current="page" marks the entry for the page on screen. Everything else gets undefined, which
       * drops the attribute; 'false' would be valid ARIA but leaves an explicit negative on every other link.
       */
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
        // Because this story’s `render` takes no argument, the Code Panel prints its source as written, state and
        // handlers and all. Provide the source by hand so the panel shows the markup to compose, without that
        // scaffolding.
        code: `// A snapshot of one moment: expanded and aria-current are written out here, but a real page binds them
// to state. Both handlers need the link’s own slug, so bind it per link: onClick={(event) => handleSelect(event, slug)}
// and onToggle={(expanded) => handleToggle(slug, expanded)} — onToggle receives only the new expanded state.

// One Grid for the whole page combines both rules: a paddingTop of large and a paddingBottom of 2x-large.
<Grid paddingBottom="2x-large" paddingTop="large">
  <Grid.Cell span={{ narrow: 4, medium: 3, wide: 4 }}>
    {/*
     * Controlled Table of Contents: collapsible is the capability, expanded and onToggle the state, so the
     * branch of the current page stays open as the reader moves through the document. Focus stays on the
     * activated link, though not because of preventDefault: these hrefs point at ids that exist nowhere on
     * the page, so the browser finds no fragment target and leaves focus where it is.
     */}
    {/* The two Skip Links this page declares in its meta target this id and the one on <main> below. */}
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
                {/*
                 * aria-current="page" marks the entry for the page on screen. Everything else gets undefined,
                 * which drops the attribute; 'false' would be valid ARIA but leaves an explicit negative on
                 * every other link.
                 */}
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
      // preventDefault is here because the story has no router: the handler swaps the page in local state
      // instead of letting the browser act on the href, and the hrefs (#s1, #s2-2-1) point at ids that exist
      // nowhere on this page. In a real page, keep preventDefault only if you pair it with client-side routing
      // (a history push, or a router component passed via linkComponent), and drop it if the hrefs are real
      // URLs. Copied as is, the handler does break the links: the content swaps, but the URL, the back button
      // and deep links do not follow, and because preventDefault runs unconditionally, cmd, ctrl and
      // shift-click no longer open a section in a new tab. The internal Table Page guards for those before
      // preventing the default.
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
          {/*
           * Controlled Table of Contents: collapsible is the capability, expanded and onToggle the state, so the
           * branch of the current page stays open as the reader moves through the document. Focus stays on the
           * activated link, though not because of preventDefault: these hrefs point at ids that exist nowhere on
           * the page, so the browser finds no fragment target and leaves focus where it is.
           */}
          {/* The two Skip Links this page declares in its meta target this id and the one on <main> below. */}
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
