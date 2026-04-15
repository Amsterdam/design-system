/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Breadcrumb, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'

import type { ContentHeaderProps } from './ContentHeader'

import { formatDate } from '../../_common/formatDate'
import { ContentHeader } from './ContentHeader'

const meta = {
  title: 'Patterns/Public/Content Header',
  component: ContentHeader,
  args: {
    breadcrumb: 'Nieuws',
    date: new Date(2025, 6, 29),
    heading: 'Met korting van A naar B op de deelscooter of -bakfiets',
    lead: 'Woont of werkt u in Amsterdam? Dan maakt u tot en met oktober met korting gebruik van deelscooters en -bakfietsen. Zo kunt u de auto laten staan en de werkzaamheden in en rond de stad vermijden.',
  },
  argTypes: {
    date: { control: 'date' },
  },
} satisfies Meta<typeof ContentHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: ({ breadcrumb, date, heading, lead }: ContentHeaderProps) => (
    <>
      <Grid paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Breadcrumb>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            <Breadcrumb.Link href="#">{breadcrumb}</Breadcrumb.Link>
          </Breadcrumb>
        </Grid.Cell>
      </Grid>
      <Grid as="main" id="inhoud" paddingBottom="x-large">
        <Grid.Cell span={{ narrow: 4, medium: 7, wide: 9 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Heading className="ams-mb-s" level={1}>
            {heading}
          </Heading>
          <Paragraph className="ams-mb-xl">{formatDate(new Date(date))}</Paragraph>
          <Paragraph size="large">{lead}</Paragraph>
        </Grid.Cell>
      </Grid>
    </>
  ),
}
