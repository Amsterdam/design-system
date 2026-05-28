/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { DescriptionList } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as descriptionListMeta } from './DescriptionList.stories'

const meta = {
  ...descriptionListMeta,
  title: 'Components/Text/Description List',
} satisfies Meta<typeof DescriptionList>

export default meta

type Story = StoryObj<typeof meta>

type DescriptionListProps = ComponentProps<typeof DescriptionList>

/**
 * Wrapper used by the single Chromatic "Test" story:
 * - first render example is identical to the original Test story (container context will fallback to Page or none)
 * - then render example in a narrow container-query context
 */
const DescriptionListWithContainerQueryExamples = (props: DescriptionListProps) => (
  <>
    <DescriptionList {...props} />

    {/* Description list in a narrow container */}
    <div className="ams-query-container-inline-size" style={{ inlineSize: '31.99rem' }}>
      <DescriptionList {...props} />
    </div>
  </>
)

export const Test: Story = {
  args: {
    children: [
      // 1:1
      <DescriptionList.Term key={1}>Land</DescriptionList.Term>,
      <DescriptionList.Description key={2}>Nederland</DescriptionList.Description>,

      // 1:n
      <DescriptionList.Term key={3}>Plaatsnaam</DescriptionList.Term>,
      <DescriptionList.Description key={4}>Amsterdam</DescriptionList.Description>,
      <DescriptionList.Description key={5}>Weesp</DescriptionList.Description>,

      // n:1
      <DescriptionList.Section key={6}>
        <DescriptionList.Term>Voornaam</DescriptionList.Term>
        <DescriptionList.Term>Achternaam</DescriptionList.Term>
        <DescriptionList.Description>Johan Cruijff</DescriptionList.Description>
      </DescriptionList.Section>,

      // n:m
      <DescriptionList.Section key={7}>
        <DescriptionList.Term>Stadsdeel</DescriptionList.Term>
        <DescriptionList.Term>Stadsgebied</DescriptionList.Term>
        <DescriptionList.Description>Centrum</DescriptionList.Description>
        <DescriptionList.Description>Oost</DescriptionList.Description>
        <DescriptionList.Description>Nieuw-West</DescriptionList.Description>
        <DescriptionList.Description>Weesp</DescriptionList.Description>
      </DescriptionList.Section>,
    ],
  },
  render: (args, context) => renderComponentVariants(DescriptionListWithContainerQueryExamples, { args }, context),
  tags: ['!dev', '!autodocs'],
}
