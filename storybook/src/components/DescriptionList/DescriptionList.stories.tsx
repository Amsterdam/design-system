/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Link, Paragraph, UnorderedList } from '@amsterdam/design-system-react'
import { DescriptionList } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Text/Description List',
  component: DescriptionList,
  args: {
    children: [
      <DescriptionList.Term key={1}>Het hoger onderwijs</DescriptionList.Term>,
      <DescriptionList.Description key={2}>Het hbo en wo</DescriptionList.Description>,
      <DescriptionList.Term key={3}>Het mbo en hoger onderwijs</DescriptionList.Term>,
      <DescriptionList.Description key={4}>Het vervolgonderwijs</DescriptionList.Description>,
      <DescriptionList.Term key={5}>Laagopgeleid</DescriptionList.Term>,
      <DescriptionList.Description key={6}>Praktisch opgeleid</DescriptionList.Description>,
      <DescriptionList.Term key={7}>Hoogopgeleid</DescriptionList.Term>,
      <DescriptionList.Description key={8}>Theoretisch opgeleid</DescriptionList.Description>,
      <DescriptionList.Term key={9}>Opleidingsniveau</DescriptionList.Term>,
      <DescriptionList.Description key={10}>Onderwijsrichting</DescriptionList.Description>,
    ],
    inverseColor: false,
  },
  argTypes: {
    termsWidth: {
      control: {
        type: 'radio',
        labels: { undefined: 'auto', sm: 'small', md: 'medium', lg: 'large' },
      },
      options: [undefined, 'sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof DescriptionList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const MultipleDescriptions: Story = {
  args: {
    children: [
      <DescriptionList.Term key={1}>Blinde, slechtziende</DescriptionList.Term>,
      <DescriptionList.Description key={2}>Persoon met een visuele beperking</DescriptionList.Description>,
      <DescriptionList.Description key={3}>Persoon met een visuele handicap</DescriptionList.Description>,
      <DescriptionList.Description key={4}>Persoon die blind is</DescriptionList.Description>,
      <DescriptionList.Description key={5}>Persoon die slechtziend is</DescriptionList.Description>,
    ],
  },
}

export const MultipleTerms: Story = {
  args: {
    termsWidth: 'md',
    children: [
      <DescriptionList.Term key={1}>Achternaam</DescriptionList.Term>,
      <DescriptionList.Description key={2}>
        De naam die een persoon van zijn of haar ouders krijgt
      </DescriptionList.Description>,
      <DescriptionList.Section key={3}>
        <DescriptionList.Term key={3.1}>Voornaam</DescriptionList.Term>
        <DescriptionList.Term key={3.2}>Roepnaam</DescriptionList.Term>
        <DescriptionList.Term key={3.3}>Bijnaam</DescriptionList.Term>
        <DescriptionList.Description key={3.4} style={{ gridRow: '1 / 4' }}>
          De naam waarmee een persoon wordt aangesproken
        </DescriptionList.Description>
      </DescriptionList.Section>,
      <DescriptionList.Term key={4}>Geboortedatum</DescriptionList.Term>,
      <DescriptionList.Description key={5}>De datum waarop een persoon is geboren</DescriptionList.Description>,
    ],
  },
}

export const RichDescription: Story = {
  render: (args) => (
    <DescriptionList {...args}>
      <DescriptionList.Term key={1}>Amsterdam Light Festival</DescriptionList.Term>
      <DescriptionList.Description key={2}>
        <Paragraph className="ams-mb--sm" inverseColor={args.inverseColor}>
          Een jaarlijks evenement waarbij kunstenaars van over de hele wereld hun{' '}
          <strong>creatieve lichtinstallaties</strong> tonen. De kunstwerken zijn verspreid over de stad en zijn zowel
          vanaf het water als vanaf de kant te bewonderen.
        </Paragraph>
        <UnorderedList inverseColor={args.inverseColor}>
          <UnorderedList.Item>Kleed je warm aan, want de meeste exposities zijn buiten.</UnorderedList.Item>
          <UnorderedList.Item>Er zijn begeleide boottochten en wandelroutes beschikbaar.</UnorderedList.Item>
          <UnorderedList.Item>
            Voor de volledige lijst met exposities kun je{' '}
            <Link href="#" inverseColor={args.inverseColor}>
              de festivalbrochure downloaden
            </Link>
            .
          </UnorderedList.Item>
        </UnorderedList>
      </DescriptionList.Description>
    </DescriptionList>
  ),
}

export const InverseColour: Story = {
  args: {
    inverseColor: true,
  },
}
