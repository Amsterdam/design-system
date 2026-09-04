/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { Link, Paragraph, StandaloneLink } from '@amsterdam/design-system-react'
import { PencilIcon } from '@amsterdam/design-system-react-icons'
import { DataSummary } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as dataSummaryMeta } from './DataSummary.stories'

const meta = {
  ...dataSummaryMeta,
  title: 'Components/Text/Data Summary',
} satisfies Meta<typeof DataSummary>

export default meta

type Story = StoryObj<typeof meta>

type DataSummaryProps = ComponentProps<typeof DataSummary>

/**
 * Wrapper used by the single Chromatic ‘Test’ story:
 * - first render example is identical to the original Test story (container context will fallback to Page or none)
 * - then render example in a narrow container-query context
 */
const DataSummaryWithContainerQueryExamples = (props: DataSummaryProps) => (
  <>
    <DataSummary {...props} />

    {/* Data Summary in a narrow container */}
    <div className="ams-query-container-inline-size" style={{ inlineSize: '31.99rem' }}>
      <DataSummary {...props} />
    </div>
  </>
)

export const Test: Story = {
  args: {
    children: [
      // Label and value only
      <DataSummary.Item key={1}>
        <DataSummary.Label>Naam</DataSummary.Label>
        <DataSummary.Value>Magere Brug</DataSummary.Value>
      </DataSummary.Item>,

      // Label, value and action
      <DataSummary.Item key={2}>
        <DataSummary.Label>Bouwjaar</DataSummary.Label>
        <DataSummary.Value>1934</DataSummary.Value>
        <DataSummary.Action>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> bouwjaar</span>
          </StandaloneLink>
        </DataSummary.Action>
      </DataSummary.Item>,

      // Long label and value, which both wrap
      <DataSummary.Item key={3}>
        <DataSummary.Label>Bijzonderheden aan de constructie van de brug</DataSummary.Label>
        <DataSummary.Value>
          De brug is een dubbele ophaalbrug van Azobé-hout, met twee doorvaartopeningen en een middenpijler in de
          Amstel.
        </DataSummary.Value>
      </DataSummary.Item>,

      // Composite value
      <DataSummary.Item key={4}>
        <DataSummary.Label>Toelichting</DataSummary.Label>
        <DataSummary.Value>
          <Paragraph>De brug is afgesloten voor gemotoriseerd verkeer.</Paragraph>
          <Link href="#">Bekijk de omleidingsroute</Link>
        </DataSummary.Value>
        <DataSummary.Action>
          <StandaloneLink href="#" icon={PencilIcon}>
            Wijzigen<span className="ams-visually-hidden"> toelichting</span>
          </StandaloneLink>
        </DataSummary.Action>
      </DataSummary.Item>,
    ],
  },
  render: (args, context) => renderComponentVariants(DataSummaryWithContainerQueryExamples, { args }, context),
  tags: ['!dev', '!autodocs', '!manifest'],
}
