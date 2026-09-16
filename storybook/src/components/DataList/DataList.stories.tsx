/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  ActionGroup,
  Button,
  Column,
  Heading,
  Image,
  Link,
  Paragraph,
  Row,
  StandaloneLink,
} from '@amsterdam/design-system-react'
import { PencilIcon, TrashBinIcon } from '@amsterdam/design-system-react-icons'
import { DataList, DataListHeader } from '@amsterdam/design-system-react/src'
import { dataListOrientations, dataListTermsWidths } from '@amsterdam/design-system-react/src/DataList/DataList'

import { wrapInInlineSizeQueryContainer } from '#storybook/_common/decorators'

const meta = {
  title: 'Components/Containers/Data List',
  component: DataList,
  args: {
    children: [
      <DataList.Item key={1}>
        <DataList.Label>Naam</DataList.Label>
        <DataList.Value>Magere Brug</DataList.Value>
      </DataList.Item>,
      <DataList.Item key={2}>
        <DataList.Label>Type</DataList.Label>
        <DataList.Value>Ophaalbrug</DataList.Value>
      </DataList.Item>,
      <DataList.Item key={3}>
        <DataList.Label>Bouwjaar</DataList.Label>
        <DataList.Value>1934</DataList.Value>
      </DataList.Item>,
      <DataList.Item key={4}>
        <DataList.Label>Ligging</DataList.Label>
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
      options: [undefined, ...dataListOrientations.filter((orientation) => orientation !== 'horizontal')],
    },
    termsWidth: {
      control: {
        labels: { undefined: 'default' },
        type: 'radio',
      },
      options: [undefined, ...dataListTermsWidths],
    },
  },
  decorators: [wrapInInlineSizeQueryContainer()],
  subcomponents: {
    'DataList.Actions': DataList.Actions,
    'DataList.Item': DataList.Item,
    'DataList.Label': DataList.Label,
    'DataList.Value': DataList.Value,
    DataListHeader,
  },
} satisfies Meta<typeof DataList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Orientation: Story = {
  args: {
    children: [
      <DataList.Item key={1}>
        <DataList.Label>Naam</DataList.Label>
        <DataList.Value>Magere Brug</DataList.Value>
      </DataList.Item>,
      <DataList.Item key={2}>
        <DataList.Label>Type</DataList.Label>
        <DataList.Value>Ophaalbrug</DataList.Value>
      </DataList.Item>,
      <DataList.Item key={3}>
        <DataList.Label>Bouwjaar</DataList.Label>
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
        <DataList.Label>Voornaam</DataList.Label>
        <DataList.Value>Johan</DataList.Value>
        <DataList.Actions>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> voornaam</span>
          </StandaloneLink>
        </DataList.Actions>
      </DataList.Item>,
      <DataList.Item key={2}>
        <DataList.Label>Achternaam</DataList.Label>
        <DataList.Value>Cruijff</DataList.Value>
        <DataList.Actions>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> achternaam</span>
          </StandaloneLink>
        </DataList.Actions>
      </DataList.Item>,
      <DataList.Item key={3}>
        <DataList.Label>Telefoonnummer</DataList.Label>
        <DataList.Value>06 12345678</DataList.Value>
        <DataList.Actions>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> telefoonnummer</span>
          </StandaloneLink>
          <StandaloneLink href="#" icon={TrashBinIcon}>
            Verwijderen<span className="ams-visually-hidden"> telefoonnummer</span>
          </StandaloneLink>
        </DataList.Actions>
      </DataList.Item>,
      <DataList.Item key={4}>
        <DataList.Label>Burgerservicenummer</DataList.Label>
        <DataList.Value>123456782</DataList.Value>
      </DataList.Item>,
    ],
  },
}

export const CompositeValue: Story = {
  args: {
    children: [
      <DataList.Item key={1}>
        <DataList.Label>Adres</DataList.Label>
        <DataList.Value>
          <span>Amstel 1</span>
          <span>1011 PN Amsterdam</span>
        </DataList.Value>
      </DataList.Item>,
      <DataList.Item key={2}>
        <DataList.Label>Toelichting</DataList.Label>
        <DataList.Value>
          <Paragraph>
            De brug is afgesloten voor gemotoriseerd verkeer. Fietsers en voetgangers kunnen er wel overheen.
          </Paragraph>
          <Link href="#">Bekijk de omleidingsroute</Link>
        </DataList.Value>
      </DataList.Item>,
      <DataList.Item key={3}>
        <DataList.Label>Foto’s</DataList.Label>
        <DataList.Value>
          <Image alt="De Magere Brug over de Amstel" aspectRatio="4:3" src="https://picsum.photos/id/164/1280/960" />
          <Image alt="De leuning van de Magere Brug" aspectRatio="4:3" src="https://picsum.photos/id/122/1280/960" />
        </DataList.Value>
      </DataList.Item>,
    ],
  },
}

export const Header: Story = {
  render: (args) => (
    <>
      <DataListHeader>
        <Row align="between" alignVertical="end" wrap>
          <Heading level={2}>Magere Brug</Heading>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> Magere Brug</span>
          </StandaloneLink>
        </Row>
      </DataListHeader>
      <DataList {...args} />
    </>
  ),
}

const people = [
  { address: ['Amstel 1', '1011 PN Amsterdam'], birthDate: '5 januari 1978', name: 'Sara Philipsen' },
  { address: ['Weesperplein 8', '1018 XA Amsterdam'], birthDate: '12 maart 1981', name: 'Kees de Vries' },
]

export const FormReview: Story = {
  render: (args) => (
    <Column gap="x-large">
      {people.map(({ address, birthDate, name }, index) => {
        const person = `persoon ${index + 1}`

        // Wrap each header and its list, so the gap of the Column falls between groups rather than inside them.
        return (
          <div key={name}>
            <DataListHeader>
              <Row align="between" alignVertical="end" wrap>
                <Heading level={2}>Persoon {index + 1}</Heading>
                <Button icon={TrashBinIcon} iconBefore variant="secondary">
                  Verwijderen<span className="ams-visually-hidden"> {person}</span>
                </Button>
              </Row>
            </DataListHeader>
            <DataList {...args}>
              <DataList.Item>
                <DataList.Label>Naam</DataList.Label>
                <DataList.Value>{name}</DataList.Value>
                <DataList.Actions>
                  <StandaloneLink href="#" icon={PencilIcon}>
                    Wijzigen<span className="ams-visually-hidden"> naam van {person}</span>
                  </StandaloneLink>
                </DataList.Actions>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Geboortedatum</DataList.Label>
                <DataList.Value>{birthDate}</DataList.Value>
                <DataList.Actions>
                  <StandaloneLink href="#" icon={PencilIcon}>
                    Wijzigen<span className="ams-visually-hidden"> geboortedatum van {person}</span>
                  </StandaloneLink>
                </DataList.Actions>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label>Adres</DataList.Label>
                <DataList.Value>
                  {address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </DataList.Value>
                <DataList.Actions>
                  <StandaloneLink href="#" icon={PencilIcon}>
                    Wijzigen<span className="ams-visually-hidden"> adres van {person}</span>
                  </StandaloneLink>
                </DataList.Actions>
              </DataList.Item>
            </DataList>
          </div>
        )
      })}
      <Row>
        <ActionGroup>
          <Button>Verzenden</Button>
        </ActionGroup>
      </Row>
    </Column>
  ),
}
