/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { Column, Link, Paragraph, StandaloneLink } from '@amsterdam/design-system-react'
import { PencilIcon, TrashBinIcon } from '@amsterdam/design-system-react-icons'
import { DataList } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as dataListMeta } from './DataList.stories'

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
 */
const DataListWithContainerQueryExamples = (props: DataListProps) => (
  <>
    <DataList {...props} />

    {/* Data List in a narrow container */}
    <div className="ams-query-container-inline-size" style={{ inlineSize: '31.99rem' }}>
      <DataList {...props} />
    </div>
  </>
)

export const Test: Story = {
  args: {
    children: [
      // Label and value only
      <DataList.Item key={1}>
        <DataList.Label>Naam</DataList.Label>
        <DataList.Value>Magere Brug</DataList.Value>
      </DataList.Item>,

      // Label, value and one action
      <DataList.Item key={2}>
        <DataList.Label>Bouwjaar</DataList.Label>
        <DataList.Value>1934</DataList.Value>
        <DataList.Actions>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> bouwjaar</span>
          </StandaloneLink>
        </DataList.Actions>
      </DataList.Item>,

      // Long label and value, which both wrap
      <DataList.Item key={3}>
        <DataList.Label>Bijzonderheden aan de constructie van de brug</DataList.Label>
        <DataList.Value>
          De brug is een dubbele ophaalbrug van Azobé-hout, met twee doorvaartopeningen en een middenpijler in de
          Amstel.
        </DataList.Value>
      </DataList.Item>,

      // Composite value
      <DataList.Item key={4}>
        <DataList.Label>Toelichting</DataList.Label>
        <DataList.Value>
          <Column gap="small">
            <Paragraph>De brug is afgesloten voor gemotoriseerd verkeer.</Paragraph>
            <Link href="#">Bekijk de omleidingsroute</Link>
          </Column>
        </DataList.Value>
        <DataList.Actions>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> toelichting</span>
          </StandaloneLink>
        </DataList.Actions>
      </DataList.Item>,

      // Two actions, separated by a line
      <DataList.Item key={5}>
        <DataList.Label>Foto</DataList.Label>
        <DataList.Value>brug-voorzijde.jpg</DataList.Value>
        <DataList.Actions>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> foto</span>
          </StandaloneLink>
          <StandaloneLink href="#" icon={TrashBinIcon}>
            Verwijderen<span className="ams-visually-hidden"> foto</span>
          </StandaloneLink>
        </DataList.Actions>
      </DataList.Item>,
    ],
  },
  render: (args, context) => renderComponentVariants(DataListWithContainerQueryExamples, { args }, context),
  tags: ['!dev', '!autodocs', '!manifest'],
}
