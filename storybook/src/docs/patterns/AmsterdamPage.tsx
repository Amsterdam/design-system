import { Grid, Header, Screen, SkipLink } from '@amsterdam/design-system-react'

export const AmsterdamPage = () => {
  return (
    <>
      <SkipLink href="#main">Direct naar inhoud</SkipLink>
      <Screen maxWidth="wide">
        <Grid>
          <Grid.Cell span="all">
            <Header
              title="Amsterdam Page Demo"
              menu={<button className="ams-header__menu-button">Menu</button>}
              logoLink="./"
              logoLinkTitle="Naar de homepage van gemeente Amsterdam"
            />
          </Grid.Cell>
        </Grid>
      </Screen>
    </>
  )
}
