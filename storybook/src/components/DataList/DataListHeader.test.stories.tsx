/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button, Column, Heading, Row, StandaloneLink } from '@amsterdam/design-system-react'
import { PencilIcon, TrashBinIcon } from '@amsterdam/design-system-react-icons'
import { DataList, DataListHeader } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Data List Header',
  component: DataListHeader,
} satisfies Meta<typeof DataListHeader>

export default meta

type Story = StoryObj<typeof meta>

const dataList = (
  <DataList>
    <DataList.Item>
      <DataList.Label>Naam</DataList.Label>
      <DataList.Value>Sara Philipsen</DataList.Value>
      <DataList.Actions>
        <StandaloneLink href="#" icon={PencilIcon}>
          Wijzigen<span className="ams-visually-hidden"> naam</span>
        </StandaloneLink>
      </DataList.Actions>
    </DataList.Item>
  </DataList>
)

export const Test: Story = {
  // Data List Header has no props to vary, so this lists its compositions by hand.
  render: () => (
    <Column gap="x-large">
      {/* Heading only */}
      <div>
        <DataListHeader>
          <Heading level={2}>Persoon 1</Heading>
        </DataListHeader>
        {dataList}
      </div>

      {/* Heading and one action */}
      <div>
        <DataListHeader>
          <Row align="between" alignVertical="end" wrap>
            <Heading level={2}>Persoon 2</Heading>
            <Button icon={TrashBinIcon} iconBefore variant="secondary">
              Verwijderen<span className="ams-visually-hidden"> persoon 2</span>
            </Button>
          </Row>
        </DataListHeader>
        {dataList}
      </div>
    </Column>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
