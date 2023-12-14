/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Grid, HeroImage, SearchField } from '@amsterdam/design-system-react'
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
    sizes: '(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px',
    src: 'https://picsum.photos/640/180?random=1',
    srcSet:
      'https://picsum.photos/640/180?random=1 640w, https://picsum.photos/1280/360?random=1 1280w, https://picsum.photos/1600/450?random=1 1600w',
  },
}

export const WithSearchField: Story = {
  args: {
    sizes: '(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px',
    src: 'https://picsum.photos/640/180?random=2',
    srcSet:
      'https://picsum.photos/640/180?random=2 640w, https://picsum.photos/1280/360?random=2 1280w, https://picsum.photos/1600/450?random=2 1600w',
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
