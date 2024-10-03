import { Grid, Header, PageMenu, SearchField } from '@amsterdam/design-system-react'
import { MenuIcon, SearchIcon } from '@amsterdam/design-system-react-icons'
import { useState } from 'react'
import { MultipleCategories as MegaMenuStory } from '../../../components/MegaMenu/MegaMenu.stories'

export const AppHeader = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false)
  const [showSearchField, setShowSearchField] = useState(false)

  return (
    <Grid paddingVertical="medium">
      <Grid.Cell span="all">
        <Header
          menu={
            <PageMenu alignEnd>
              <PageMenu.Item rank="secondary">
                <PageMenu.Link href="#">English</PageMenu.Link>
              </PageMenu.Item>
              <PageMenu.Item rank="secondary">
                <PageMenu.Link href="#">Contact</PageMenu.Link>
              </PageMenu.Item>
              <PageMenu.Item>
                <PageMenu.Button
                  icon={SearchIcon}
                  onClick={() => {
                    setShowMegaMenu(false)
                    setShowSearchField(!showSearchField)
                  }}
                >
                  Zoeken
                </PageMenu.Button>
              </PageMenu.Item>
              <PageMenu.Item>
                <PageMenu.Button
                  icon={MenuIcon}
                  onClick={() => {
                    setShowSearchField(false)
                    setShowMegaMenu(!showMegaMenu)
                  }}
                >
                  Menu
                </PageMenu.Button>
              </PageMenu.Item>
            </PageMenu>
          }
        />
      </Grid.Cell>
      {showMegaMenu && <Grid.Cell span="all">{MegaMenuStory.args?.children}</Grid.Cell>}
      {showSearchField && (
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <SearchField onSubmit={(e) => e.preventDefault()}>
            <SearchField.Input label="Zoeken" placeholder="Wat kunnen we voor u vinden?" />
            <SearchField.Button />
          </SearchField>
        </Grid.Cell>
      )}
    </Grid>
  )
}
