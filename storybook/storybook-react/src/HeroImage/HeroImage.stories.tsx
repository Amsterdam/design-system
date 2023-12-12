/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Grid } from '@amsterdam/design-system-react'
import { SearchField } from '@amsterdam/design-system-react'
import { HeroImage } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Media/Hero Image',
  component: HeroImage,
  args: {
    children: <SearchField />,
  },
} satisfies Meta<typeof HeroImage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/1280/360?random=1',
  },
}

export const WithSearchField: Story = {
  args: {
    src: 'https://picsum.photos/1280/360?random=2',
    children: (
      <Grid>
        <Grid.Cell span={{ narrow: 4, medium: 6, wide: 6 }} start={{ narrow: 1, medium: 2, wide: 4 }}>
          <SearchField>
            <SearchField.Input label="Zoeken" placeholder="Wat kunnen we voor u vinden?" />
            <SearchField.Button />
          </SearchField>
        </Grid.Cell>
      </Grid>
    ),
  },
}
