/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { DescriptionList, Grid, Heading } from '@amsterdam/design-system-react'

import { commonMeta } from '../common/config'

const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Detail Page',
} satisfies Meta

export default meta

/**
 * This exact element is rendered in both cells of the page.
 * Grid Cell establishes a query container: the Description List bases its orientation
 * on the width of the cell it sits in, not on the width of the window.
 */
const addressDetails = (
  <DescriptionList>
    <DescriptionList.Term>Straat</DescriptionList.Term>
    <DescriptionList.Description>Sarphatistraat</DescriptionList.Description>
    <DescriptionList.Term>Huisnummer</DescriptionList.Term>
    <DescriptionList.Description>24F</DescriptionList.Description>
    <DescriptionList.Term>Postcode</DescriptionList.Term>
    <DescriptionList.Description>1018 GK</DescriptionList.Description>
    <DescriptionList.Term>Gebruiksdoel</DescriptionList.Term>
    <DescriptionList.Description>Woonfunctie</DescriptionList.Description>
    <DescriptionList.Term>Bouwjaar</DescriptionList.Term>
    <DescriptionList.Description>1813</DescriptionList.Description>
    <DescriptionList.Term>Oppervlakte</DescriptionList.Term>
    <DescriptionList.Description>73 m²</DescriptionList.Description>
    <DescriptionList.Term>Aantal kamers</DescriptionList.Term>
    <DescriptionList.Description>2</DescriptionList.Description>
    <DescriptionList.Term>Status</DescriptionList.Term>
    <DescriptionList.Description>Verblijfsobject in gebruik</DescriptionList.Description>
    <DescriptionList.Term>Omschrijving</DescriptionList.Term>
    <DescriptionList.Description>
      Woning op de tweede verdieping van een tussengebouw uit het begin van de negentiende eeuw, in de Sarphatistrook in
      stadsdeel Centrum. Het verblijfsobject bestaat uit twee kamers op één bouwlaag en heeft een woonfunctie. Bij de
      laatste opname, in februari 2020, zijn geen bijzonderheden vastgesteld.
    </DescriptionList.Description>
  </DescriptionList>
)

export const Default: StoryObj = {
  render: () => (
    <Grid paddingBottom="x-large" paddingTop="large">
      <Grid.Cell appearance="transparent" span="all">
        <Heading level={1}>Sarphatistraat 24F</Heading>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 9 }}>
        <Heading className="ams-mb-m" level={2}>
          Gegevens van dit adres
        </Heading>
        {addressDetails}
      </Grid.Cell>
      <Grid.Cell as="aside" span={{ narrow: 4, medium: 3, wide: 3 }}>
        <Heading className="ams-mb-m" level={2}>
          Dezelfde gegevens in een smalle cel
        </Heading>
        {addressDetails}
      </Grid.Cell>
    </Grid>
  ),
}
