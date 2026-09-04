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
  StandaloneLink,
} from '@amsterdam/design-system-react'
import { PencilIcon } from '@amsterdam/design-system-react-icons'
import { DataSummary } from '@amsterdam/design-system-react/src'
import { dataSummaryOrientations } from '@amsterdam/design-system-react/src/DataSummary/DataSummary'

import { wrapInInlineSizeQueryContainer } from '#storybook/_common/decorators'

const meta = {
  title: 'Components/Text/Data Summary',
  component: DataSummary,
  args: {
    children: [
      <DataSummary.Item key={1}>
        <DataSummary.Label>Naam</DataSummary.Label>
        <DataSummary.Value>Magere Brug</DataSummary.Value>
      </DataSummary.Item>,
      <DataSummary.Item key={2}>
        <DataSummary.Label>Type</DataSummary.Label>
        <DataSummary.Value>Ophaalbrug</DataSummary.Value>
      </DataSummary.Item>,
      <DataSummary.Item key={3}>
        <DataSummary.Label>Bouwjaar</DataSummary.Label>
        <DataSummary.Value>1934</DataSummary.Value>
      </DataSummary.Item>,
      <DataSummary.Item key={4}>
        <DataSummary.Label>Ligging</DataSummary.Label>
        <DataSummary.Value>Over de Amstel, tussen de Kerkstraat en de Nieuwe Kerkstraat</DataSummary.Value>
      </DataSummary.Item>,
    ],
  },
  argTypes: {
    orientation: {
      control: {
        labels: { undefined: 'horizontal (default)' },
        type: 'radio',
      },
      options: [undefined, ...dataSummaryOrientations.filter((orientation) => orientation !== 'horizontal')],
    },
  },
  decorators: [wrapInInlineSizeQueryContainer()],
} satisfies Meta<typeof DataSummary>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Orientation: Story = {
  args: {
    children: [
      <DataSummary.Item key={1}>
        <DataSummary.Label>Naam</DataSummary.Label>
        <DataSummary.Value>Magere Brug</DataSummary.Value>
      </DataSummary.Item>,
      <DataSummary.Item key={2}>
        <DataSummary.Label>Type</DataSummary.Label>
        <DataSummary.Value>Ophaalbrug</DataSummary.Value>
      </DataSummary.Item>,
      <DataSummary.Item key={3}>
        <DataSummary.Label>Bouwjaar</DataSummary.Label>
        <DataSummary.Value>1934</DataSummary.Value>
      </DataSummary.Item>,
    ],
  },
  decorators: [wrapInInlineSizeQueryContainer('_ams-resize-horizontal', { inlineSize: '18rem' })],
}

export const Stacked: Story = {
  args: {
    orientation: 'vertical',
  },
}

export const Action: Story = {
  args: {
    children: [
      <DataSummary.Item key={1}>
        <DataSummary.Label>Voornaam</DataSummary.Label>
        <DataSummary.Value>Johan</DataSummary.Value>
        <DataSummary.Action>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> voornaam</span>
          </StandaloneLink>
        </DataSummary.Action>
      </DataSummary.Item>,
      <DataSummary.Item key={2}>
        <DataSummary.Label>Achternaam</DataSummary.Label>
        <DataSummary.Value>Cruijff</DataSummary.Value>
        <DataSummary.Action>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> achternaam</span>
          </StandaloneLink>
        </DataSummary.Action>
      </DataSummary.Item>,
      <DataSummary.Item key={3}>
        <DataSummary.Label>Burgerservicenummer</DataSummary.Label>
        <DataSummary.Value>123456782</DataSummary.Value>
      </DataSummary.Item>,
    ],
  },
}

export const CompositeValue: Story = {
  args: {
    children: [
      <DataSummary.Item key={1}>
        <DataSummary.Label>Adres</DataSummary.Label>
        <DataSummary.Value>
          <span>Amstel 1</span>
          <span>1011 PN Amsterdam</span>
        </DataSummary.Value>
      </DataSummary.Item>,
      <DataSummary.Item key={2}>
        <DataSummary.Label>Toelichting</DataSummary.Label>
        <DataSummary.Value>
          <Paragraph>
            De brug is afgesloten voor gemotoriseerd verkeer. Fietsers en voetgangers kunnen er wel overheen.
          </Paragraph>
          <Link href="#">Bekijk de omleidingsroute</Link>
        </DataSummary.Value>
      </DataSummary.Item>,
      <DataSummary.Item key={3}>
        <DataSummary.Label>Foto’s</DataSummary.Label>
        <DataSummary.Value>
          <Image alt="De Magere Brug over de Amstel" aspectRatio="4:3" src="https://picsum.photos/id/164/1280/960" />
          <Image alt="De leuning van de Magere Brug" aspectRatio="4:3" src="https://picsum.photos/id/122/1280/960" />
        </DataSummary.Value>
      </DataSummary.Item>,
    ],
  },
}

export const FormSummary: Story = {
  args: {
    children: [
      <DataSummary.Item key={1}>
        <DataSummary.Label>Naam</DataSummary.Label>
        <DataSummary.Value>Johan Cruijff</DataSummary.Value>
        <DataSummary.Action>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> naam</span>
          </StandaloneLink>
        </DataSummary.Action>
      </DataSummary.Item>,
      <DataSummary.Item key={2}>
        <DataSummary.Label>E-mailadres</DataSummary.Label>
        <DataSummary.Value>j.cruijff@voorbeeld.nl</DataSummary.Value>
        <DataSummary.Action>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> e-mailadres</span>
          </StandaloneLink>
        </DataSummary.Action>
      </DataSummary.Item>,
      <DataSummary.Item key={3}>
        <DataSummary.Label>Onderwerp</DataSummary.Label>
        <DataSummary.Value>Melding over de openbare ruimte</DataSummary.Value>
        <DataSummary.Action>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> onderwerp</span>
          </StandaloneLink>
        </DataSummary.Action>
      </DataSummary.Item>,
    ],
  },
  render: (args) => (
    <Column>
      <Heading level={2}>Controleer uw gegevens</Heading>
      <DataSummary {...args} />
      <ActionGroup>
        <Button>Verzenden</Button>
      </ActionGroup>
    </Column>
  ),
}
