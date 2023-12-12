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
      <Grid paddingVertical="medium">
        <Grid.Cell fullWidth>
          <SearchField style={{ marginInline: 'auto', maxWidth: '32rem' }}>
            <SearchField.Input label="Zoeken" placeholder="Wat kunnen we voor u vinden?" />
            <SearchField.Button />
          </SearchField>
        </Grid.Cell>
      </Grid>
    ),
  },
}
