/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { Button, Column, Heading, Link, Paragraph, Row, StandaloneLink } from '@amsterdam/design-system-react'
import { EditIcon } from '@amsterdam/design-system-react-icons'
import { DataList } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as dataListMeta, InternalActions } from './DataList.stories'

const meta = {
  ...dataListMeta,
  title: 'Components/Containers/Data List',
} satisfies Meta<typeof DataList>

export default meta

type Story = StoryObj<typeof meta>

type DataListProps = ComponentProps<typeof DataList>

/**
 * Wrapper used by the single Chromatic ‘Test’ story:
 * - first render example is identical to the original Test story (container context will fallback to Page or none)
 * - then render example in a narrow container-query context
 * - then render example in the narrowest container that still places keys and values side by side
 * - then a list without actions, a heading row above a list, and the internal actions with the Compact Mode class
 */
const DataListWithContainerQueryExamples = (props: DataListProps) => {
  return (
    <Column>
      <DataList {...props} />

      {/* Data List in a narrow container */}
      <div className="ams-query-container-inline-size" style={{ inlineSize: '31.99rem' }}>
        <DataList {...props} />
      </div>

      {/* Data List in the narrowest horizontal container */}
      <div className="ams-query-container-inline-size" style={{ inlineSize: '32rem' }}>
        <DataList {...props} />
      </div>
      <DataList {...props}>
        <DataList.Item>
          <DataList.Key>Naam</DataList.Key>
          <DataList.Value>Magere Brug</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Key>Type</DataList.Key>
          <DataList.Value>Ophaalbrug</DataList.Value>
        </DataList.Item>
      </DataList>
      <section>
        <Row align="between" alignVertical="center" className="ams-mb-s" wrap>
          <Heading level={2}>Magere Brug</Heading>
          <Button icon={EditIcon} iconBefore variant="secondary">
            Wijzigen<span className="ams-visually-hidden"> Magere Brug</span>
          </Button>
        </Row>
        <DataList {...props} />
      </section>
      <Column className="ams-theme--compact">
        <DataList {...props} {...InternalActions.args} />
      </Column>
    </Column>
  )
}

export const Test: Story = {
  args: {
    children: [
      // Key and value only
      <DataList.Item key={1}>
        <DataList.Key>Naam</DataList.Key>
        <DataList.Value>Magere Brug</DataList.Value>
      </DataList.Item>,

      // Key, value and one action
      <DataList.Item key={2}>
        <DataList.Key>Bouwjaar</DataList.Key>
        <DataList.Value>1934</DataList.Value>
        <DataList.Actions>
          <StandaloneLink href="#" icon={EditIcon}>
            Wijzigen<span className="ams-visually-hidden"> bouwjaar</span>
          </StandaloneLink>
        </DataList.Actions>
      </DataList.Item>,

      // Long key and value, which both wrap
      <DataList.Item key={3}>
        <DataList.Key>Bijzonderheden aan de constructie van de brug</DataList.Key>
        <DataList.Value>
          De brug is een dubbele ophaalbrug van Azobé-hout, met twee doorvaartopeningen en een middenpijler in de
          Amstel.
        </DataList.Value>
      </DataList.Item>,

      // Composite value
      <DataList.Item key={4}>
        <DataList.Key>Toelichting</DataList.Key>
        <DataList.Value>
          <Column gap="small">
            <Paragraph>De brug is afgesloten voor gemotoriseerd verkeer.</Paragraph>
            <Link href="#">Bekijk de omleidingsroute</Link>
          </Column>
        </DataList.Value>
        <DataList.Actions>
          <StandaloneLink href="#" icon={EditIcon}>
            Wijzigen<span className="ams-visually-hidden"> toelichting</span>
          </StandaloneLink>
        </DataList.Actions>
      </DataList.Item>,

      // Two actions
      <DataList.Item key={5}>
        <DataList.Key>Foto</DataList.Key>
        <DataList.Value>brug-voorzijde.jpg</DataList.Value>
        <DataList.Actions>
          <Row wrap>
            <Button variant="tertiary">
              Wijzigen<span className="ams-visually-hidden"> foto</span>
            </Button>
            <Button variant="tertiary">
              Verwijderen<span className="ams-visually-hidden"> foto</span>
            </Button>
          </Row>
        </DataList.Actions>
      </DataList.Item>,

      // Two actions beside a value without break opportunities
      <DataList.Item key={6}>
        <DataList.Key>Telefoonnummer</DataList.Key>
        <DataList.Value>0612345678</DataList.Value>
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
      <DataList.Item key={7}>
        <DataList.Key>Bereikbaarheid</DataList.Key>
        <DataList.Value>
          De brug is afgesloten voor gemotoriseerd verkeer. Fietsers en voetgangers kunnen er wel overheen.
        </DataList.Value>
        <DataList.Actions>
          <Row wrap>
            <Button variant="tertiary">
              Wijzigen<span className="ams-visually-hidden"> bereikbaarheid</span>
            </Button>
            <Button variant="tertiary">
              Verwijderen<span className="ams-visually-hidden"> bereikbaarheid</span>
            </Button>
          </Row>
        </DataList.Actions>
      </DataList.Item>,
    ],
  },
  render: (args, context) => renderComponentVariants(DataListWithContainerQueryExamples, { args }, context),
  tags: ['!dev', '!autodocs', '!manifest'],
}
