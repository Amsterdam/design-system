/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { MouseEvent } from 'react'

import { Breadcrumb, Grid, Heading, TabNavigation } from '@amsterdam/design-system-react'
import { useRef, useState } from 'react'

import { commonMeta } from '../common/config'
import { menuItems } from './menuItems'

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Detail Page',
  render: () => {
    const [currentMenuSlug, setCurrentMenuSlug] = useState(menuItems[0].slug)
    const [currentSubMenuSlug, setCurrentSubMenuSlug] = useState(menuItems[0].subMenuItems[0].slug)

    const subMenuListRef = useRef<HTMLUListElement>(null)

    const currentMenu = menuItems.find(({ slug }) => slug === currentMenuSlug) ?? menuItems[0]
    const subMenuItems = currentMenu.subMenuItems

    const handleMenuItemClick = (event: MouseEvent<HTMLAnchorElement>, menuSlug: string) => {
      event.preventDefault()
      setCurrentMenuSlug(menuSlug)

      const menu = menuItems.find((item) => item.slug === menuSlug) ?? menuItems[0]

      setCurrentSubMenuSlug(menu.subMenuItems[0].slug)
      subMenuListRef.current?.scrollTo({ left: 0 })
    }

    const handleSubMenuItemClick = (event: MouseEvent<HTMLAnchorElement>, subMenuSlug: string) => {
      event.preventDefault()
      setCurrentSubMenuSlug(subMenuSlug)
    }

    return (
      <>
        <Grid paddingVertical="x-large">
          <Grid.Cell appearance="transparent" span="all">
            <Breadcrumb>
              <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
              <Breadcrumb.Link href="#">Projecten</Breadcrumb.Link>
            </Breadcrumb>
            <Heading level={1}>Naam van het project</Heading>
          </Grid.Cell>
          <Grid.Cell
            appearance="flush"
            rowSpan={{ narrow: 1, medium: 3, wide: 2 }}
            span={{ narrow: 4, medium: 2, wide: 2 }}
          >
            <TabNavigation orientation="vertical">
              <TabNavigation.List>
                {menuItems.map(({ icon, label, slug }) => (
                  <TabNavigation.Link
                    aria-current={currentMenuSlug === slug ? 'page' : undefined}
                    href={`/projecten/42/${slug}`}
                    icon={icon}
                    key={slug}
                    onClick={(e) => handleMenuItemClick(e, slug)}
                  >
                    {label}
                  </TabNavigation.Link>
                ))}
              </TabNavigation.List>
            </TabNavigation>
          </Grid.Cell>
          <Grid.Cell
            appearance="flush"
            span={{ narrow: 4, medium: 6, wide: 10 }}
            start={{ narrow: 1, medium: 3, wide: 3 }}
          >
            <TabNavigation>
              <TabNavigation.List ref={subMenuListRef}>
                {subMenuItems.map(({ label, slug }) => (
                  <TabNavigation.Link
                    aria-current={currentSubMenuSlug === slug ? 'page' : undefined}
                    href={`/projecten/42/${currentMenuSlug}/${slug}`}
                    key={slug}
                    onClick={(e) => handleSubMenuItemClick(e, slug)}
                  >
                    {label}
                  </TabNavigation.Link>
                ))}
              </TabNavigation.List>
            </TabNavigation>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 6, wide: 7 }} style={{ blockSize: `${currentMenu.cellHeights[0]}vh` }}>
            <Heading className="ams-mb-s" level={2}>
              {currentMenu.label}
            </Heading>
            <Heading className="ams-mb-m" level={3}>
              {subMenuItems.find(({ slug }) => slug === currentSubMenuSlug)?.label}
            </Heading>
          </Grid.Cell>
          <Grid.Cell
            span={{ narrow: 4, medium: 4, wide: 3 }}
            start={{ narrow: 1, medium: 3, wide: 10 }}
            style={{ blockSize: `${currentMenu.cellHeights[1]}vh` }}
          />
        </Grid>
      </>
    )
  },
} satisfies Meta

export default meta

export const Default: StoryObj = {}
