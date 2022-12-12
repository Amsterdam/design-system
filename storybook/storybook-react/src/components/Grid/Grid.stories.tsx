import { Grid, GridItem } from '@amsterdam/components-react/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { argTypes } from './argTypes'

import '@amsterdam/components-css/src/grid/grid.scss'

export default {
  title: 'React Components/Grid',
  id: 'grid',
  component: Grid,
  argTypes,
} as ComponentMeta<typeof Grid>

const StorybookGridStyling = { height: '100px', backgroundColor: 'aliceblue' }
const StorybookGridItemStyling = {
  backgroundColor: 'bisque',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const Template: ComponentStory<typeof GridItem> = (args) => (
  <Grid style={StorybookGridStyling}>
    <GridItem style={StorybookGridItemStyling} {...args}>
      Grid item
    </GridItem>
  </Grid>
)

export const Default = Template.bind({})
