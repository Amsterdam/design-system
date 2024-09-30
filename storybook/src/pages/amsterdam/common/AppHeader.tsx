import { Grid, Header, PageMenu, SearchField } from '@amsterdam/design-system-react'
import { MenuIcon, SearchIcon } from '@amsterdam/design-system-react-icons'
import { useState } from 'react'
import { Default as MegaMenuStory } from '../../../components/MegaMenu/MegaMenu.stories'

export const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  return (
    <Header
      menu={
        <PageMenu alignEnd>
          <PageMenu.Link href="#">Contact</PageMenu.Link>
          <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
          <PageMenu.Button icon={SearchIcon} onClick={() => setShowSearch(!showSearch)}>
            Zoeken
          </PageMenu.Button>
          <PageMenu.Button icon={MenuIcon} onClick={() => setShowMenu(!showMenu)}>
            Menu
          </PageMenu.Button>
        </PageMenu>
      }
    >
      {showMenu && (
        <Grid.Cell span="all">
          <div style={{ paddingBlockEnd: 'var(--ams-space-grid-md)' }}>{MegaMenuStory.args?.children}</div>
        </Grid.Cell>
      )}
      {showSearch && (
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 8 }} start={{ narrow: 1, medium: 2, wide: 3 }}>
          <div style={{ paddingBlockEnd: 'var(--ams-space-grid-md)', paddingBlockStart: 'var(--ams-space-grid-sm)' }}>
            <SearchField onSubmit={(e) => e.preventDefault()}>
              <SearchField.Input label="Zoeken" placeholder="Wat kunnen we voor u vinden?" />
              <SearchField.Button />
            </SearchField>
          </div>
        </Grid.Cell>
      )}
    </Header>
  )
}
