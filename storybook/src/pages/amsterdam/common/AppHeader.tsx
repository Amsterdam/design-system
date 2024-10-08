/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Header, PageMenu, SearchField } from '@amsterdam/design-system-react'
import { MenuIcon, SearchIcon } from '@amsterdam/design-system-react-icons'
import { useMemo, useState } from 'react'
import { Default as MegaMenuStory } from '../../../components/MegaMenu/MegaMenu.stories'

type Feature = 'menu' | 'search'

export const AppHeader = () => {
  const [visibleFeature, setVisibleFeature] = useState<Feature | undefined>(undefined)

  const toggleFeature = (feature: Feature) =>
    setVisibleFeature((currentFeature) => (feature === currentFeature ? undefined : feature))

  const visibilityClass = (feature: Feature) => (feature === visibleFeature ? null : 'ams-visually-hidden')

  const HeaderMenu = useMemo(
    () => (
      <PageMenu alignEnd>
        <PageMenu.Item rank="secondary">
          <PageMenu.Link href="#">English</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item rank="secondary">
          <PageMenu.Link href="#">Contact</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Button icon={SearchIcon} onClick={() => toggleFeature('search')}>
            Zoeken
          </PageMenu.Button>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Button icon={MenuIcon} onClick={() => toggleFeature('menu')}>
            Menu
          </PageMenu.Button>
        </PageMenu.Item>
      </PageMenu>
    ),
    [toggleFeature],
  )

  const Menu = () => (
    <Grid as="nav" className={visibilityClass('menu')} paddingBottom="large">
      <Grid.Cell span="all">{MegaMenuStory.args?.children}</Grid.Cell>
    </Grid>
  )

  const Search = () =>
    visibleFeature === 'search' && (
      <Grid paddingBottom="medium">
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <SearchField onSubmit={(e) => e.preventDefault()}>
            <SearchField.Input label="Zoeken" placeholder="Wat kunnen we voor u vinden?" />
            <SearchField.Button />
          </SearchField>
        </Grid.Cell>
      </Grid>
    )

  return (
    <>
      <Grid paddingVertical="medium">
        <Grid.Cell span="all">
          <Header menu={HeaderMenu} />
        </Grid.Cell>
      </Grid>
      <Menu />
      <Search />
    </>
  )
}
