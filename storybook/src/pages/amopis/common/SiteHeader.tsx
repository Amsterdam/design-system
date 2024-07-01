import { Avatar, Grid, Header } from '@amsterdam/design-system-react'

const getRandomLetter = () => Math.floor(Math.random() * 26) + 65
const generateInitials = (): string => String.fromCharCode(...[getRandomLetter(), getRandomLetter()])

export const SiteHeader = () => (
  <Grid>
    <Grid.Cell span="all">
      <Header
        appName="Amopis"
        links={<Avatar label={generateInitials()} />}
        logoLink="amopis"
        logoLinkTitle="Naar de homepage van Amopis"
      />
    </Grid.Cell>
  </Grid>
)
