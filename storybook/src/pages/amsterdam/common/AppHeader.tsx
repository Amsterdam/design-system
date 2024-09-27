import { Grid, Header, PageMenu } from '@amsterdam/design-system-react'
import { Alignment as PageMenuStory } from '../../../components/PageMenu/PageMenu.stories'

export const AppHeader = () => (
  <Grid>
    <Grid.Cell span="all">
      <Header links={<PageMenu alignEnd>{PageMenuStory.args?.children}</PageMenu>} onClickMenu={() => {}} />
    </Grid.Cell>
  </Grid>
)
