/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Button,
  Column,
  Heading,
  IconButton,
  Image,
  Link,
  Paragraph,
  Row,
  StandaloneLink,
} from '@amsterdam/design-system-react'
import { DeleteIcon, EditIcon } from '@amsterdam/design-system-react-icons'
import { DataList } from '@amsterdam/design-system-react/src'
import { dataListOrientations } from '@amsterdam/design-system-react/src/DataList/DataList'

import { wrapInInlineSizeQueryContainer } from '#storybook/_common/decorators'

const meta = {
  title: 'Components/Containers/Data List',
  component: DataList,
  args: {
    children: [
      <DataList.Item key={1}>
        <DataList.Key>Naam</DataList.Key>
        <DataList.Value>Magere Brug</DataList.Value>
      </DataList.Item>,
      <DataList.Item key={2}>
        <DataList.Key>Type</DataList.Key>
        <DataList.Value>Ophaalbrug</DataList.Value>
      </DataList.Item>,
      <DataList.Item key={3}>
        <DataList.Key>Bouwjaar</DataList.Key>
        <DataList.Value>1934</DataList.Value>
      </DataList.Item>,
      <DataList.Item key={4}>
        <DataList.Key>Ligging</DataList.Key>
        <DataList.Value>Over de Amstel, tussen de Kerkstraat en de Nieuwe Kerkstraat</DataList.Value>
      </DataList.Item>,
    ],
  },
  argTypes: {
    orientation: {
      control: {
        labels: { undefined: 'horizontal (default)' },
        type: 'radio',
      },
      options: [undefined, ...dataListOrientations],
    },
  },
  decorators: [wrapInInlineSizeQueryContainer()],
  subcomponents: {
    'DataList.Actions': DataList.Actions,
    'DataList.Item': DataList.Item,
    'DataList.Key': DataList.Key,
    'DataList.Value': DataList.Value,
  },
} satisfies Meta<typeof DataList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Orientation: Story = {
  args: {
    children: [
      <DataList.Item key={1}>
        <DataList.Key>Naam</DataList.Key>
        <DataList.Value>Magere Brug</DataList.Value>
      </DataList.Item>,
      <DataList.Item key={2}>
        <DataList.Key>Type</DataList.Key>
        <DataList.Value>Ophaalbrug</DataList.Value>
      </DataList.Item>,
      <DataList.Item key={3}>
        <DataList.Key>Bouwjaar</DataList.Key>
        <DataList.Value>1934</DataList.Value>
      </DataList.Item>,
    ],
  },
  decorators: [wrapInInlineSizeQueryContainer('_ams-resize-horizontal', { inlineSize: '18rem' })],
}

export const Stacked: Story = {
  args: {
    orientation: 'vertical',
  },
}

export const Actions: Story = {
  args: {
    children: [
      <DataList.Item key={1}>
        <DataList.Key>Voornaam</DataList.Key>
        <DataList.Value>Johan</DataList.Value>
        <DataList.Actions>
          <Button variant="tertiary">
            Wijzigen<span className="ams-visually-hidden"> voornaam</span>
          </Button>
        </DataList.Actions>
      </DataList.Item>,
      <DataList.Item key={2}>
        <DataList.Key>Achternaam</DataList.Key>
        <DataList.Value>Cruijff</DataList.Value>
        <DataList.Actions>
          <Button variant="tertiary">
            Wijzigen<span className="ams-visually-hidden"> achternaam</span>
          </Button>
        </DataList.Actions>
      </DataList.Item>,
      <DataList.Item key={3}>
        <DataList.Key>Telefoonnummer</DataList.Key>
        <DataList.Value>06 12345678</DataList.Value>
        <DataList.Actions>
          <Row wrap>
            <Button variant="tertiary">
              Wijzigen<span className="ams-visually-hidden"> telefoonnummer</span>
            </Button>
            <Button variant="tertiary">
              Verwijderen<span className="ams-visually-hidden"> telefoonnummer</span>
            </Button>
          </Row>
        </DataList.Actions>
      </DataList.Item>,
      <DataList.Item key={4}>
        <DataList.Key>Burgerservicenummer</DataList.Key>
        <DataList.Value>123456782</DataList.Value>
      </DataList.Item>,
    ],
  },
}

export const CompositeValue: Story = {
  args: {
    children: [
      <DataList.Item key={1}>
        <DataList.Key>Adres</DataList.Key>
        <DataList.Value>
          Amstel 1
          <br />
          1011 PN Amsterdam
        </DataList.Value>
      </DataList.Item>,
      <DataList.Item key={2}>
        <DataList.Key>Toelichting</DataList.Key>
        <DataList.Value>
          <Column gap="small">
            <Paragraph>
              De brug is afgesloten voor gemotoriseerd verkeer. Fietsers en voetgangers kunnen er wel overheen.
            </Paragraph>
            <Link href="#">Bekijk de omleidingsroute</Link>
          </Column>
        </DataList.Value>
      </DataList.Item>,
      <DataList.Item key={3}>
        <DataList.Key>Foto’s</DataList.Key>
        <DataList.Value>
          <Column gap="small">
            <Image alt="De Magere Brug over de Amstel" aspectRatio="4:3" src="https://picsum.photos/id/164/1280/960" />
            <Image alt="De leuning van de Magere Brug" aspectRatio="4:3" src="https://picsum.photos/id/122/1280/960" />
          </Column>
        </DataList.Value>
      </DataList.Item>,
    ],
  },
}

export const WithHeader: Story = {
  render: (args) => (
    <>
      <Row align="between" alignVertical="center" className="ams-mb-s" wrap>
        <Heading level={2}>Magere Brug</Heading>
        <Button icon={EditIcon} iconBefore variant="secondary">
          Wijzigen<span className="ams-visually-hidden"> Magere Brug</span>
        </Button>
      </Row>
      <DataList {...args} />
    </>
  ),
}

export const Navigation: Story = {
  args: {
    children: (
      <DataList.Item>
        <DataList.Key>Telefoonnummer</DataList.Key>
        <DataList.Value>06 12345678</DataList.Value>
        <DataList.Actions>
          <StandaloneLink href="#" icon={EditIcon}>
            Wijzigen<span className="ams-visually-hidden"> telefoonnummer</span>
          </StandaloneLink>
        </DataList.Actions>
      </DataList.Item>
    ),
  },
}

export const InternalActions: Story = {
  args: {
    children: (
      <DataList.Item>
        <DataList.Key>Telefoonnummer</DataList.Key>
        <DataList.Value>06 12345678</DataList.Value>
        <DataList.Actions>
          <Row alignVertical="center" wrap>
            <IconButton label="Wijzigen telefoonnummer" svg={EditIcon} />
            <IconButton label="Verwijderen telefoonnummer" svg={DeleteIcon} />
          </Row>
        </DataList.Actions>
      </DataList.Item>
    ),
  },
  parameters: {
    themes: { options: ['Compact', 'Compact Lo-fi'] },
  },
}
