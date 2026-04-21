/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { MouseEvent } from 'react'

import {
  Breadcrumb,
  Field,
  FieldSet,
  Grid,
  Heading,
  Label,
  Select,
  TabNavigation,
  TextInput,
} from '@amsterdam/design-system-react'
import { useRef, useState } from 'react'

import { commonMeta } from '../common/config'
import { menuItems } from './menuItems'

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Navigation Page',
  render: () => {
    const [currentMenuSlug, setCurrentMenuSlug] = useState(menuItems[0].slug)
    const [currentSubMenuSlug, setCurrentSubMenuSlug] = useState(menuItems[0].subMenuItems[0].slug)

    const subMenuListRef = useRef<HTMLUListElement>(null)

    const currentMenu = menuItems.find(({ slug }) => slug === currentMenuSlug) ?? menuItems[0]
    const subMenuItems = currentMenu.subMenuItems
    const currentSubMenu = subMenuItems.find(({ slug }) => slug === currentSubMenuSlug) ?? subMenuItems[0]

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
      <Grid paddingVertical="x-large">
        <Grid.Cell appearance="transparent" span="all">
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">Projecten</Breadcrumb.Link>
          </Breadcrumb>
          <Heading level={1}>Naam van het project</Heading>
        </Grid.Cell>
        <Grid.Cell appearance="flush" rowSpan={2} span={{ narrow: 4, medium: 2, wide: 2 }}>
          <TabNavigation accessibleName="Navigatie voor dit project" orientation="vertical">
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
          <TabNavigation accessibleName="Subnavigatie voor dit project">
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
        <Grid.Cell
          span={{ narrow: 4, medium: 6, wide: 7 }}
          start={{ narrow: 1, medium: 3, wide: 3 }}
          style={{ blockSize: `${currentSubMenu.cellHeights[0]}vb` }}
        >
          <Heading className="ams-mb-s" level={2}>
            {currentMenu.label}
          </Heading>
          <Heading className="ams-mb-m" level={3}>
            {currentSubMenu.label}
          </Heading>
          <FieldSet legend="Test Inline size">
            <Field>
              <Label htmlFor="input1">Wat is uw Voornaam?</Label>
              <TextInput id="input1" size={32} />
            </Field>
            <Field>
              <Label htmlFor="input2">Wat is uw achternaam?</Label>
              <TextInput id="input2" size={64} />
            </Field>
            <Field>
              <Label htmlFor="input3">Hoe mogen wij u aanspreken?</Label>
              <Select id="input3">
                <Select.Option value="heer">De heer</Select.Option>
                <Select.Option value="mevrouw">Mevrouw</Select.Option>
                <Select.Option value="anders">Anders</Select.Option>
              </Select>
            </Field>
          </FieldSet>
        </Grid.Cell>
        <Grid.Cell
          span={{ narrow: 4, medium: 4, wide: 3 }}
          start={{ narrow: 1, medium: 3, wide: 10 }}
          style={{ blockSize: `${currentSubMenu.cellHeights[1]}vb` }}
        />
      </Grid>
    )
  },
} satisfies Meta

export default meta

export const Default: StoryObj = {}
