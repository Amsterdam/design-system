/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Blockquote,
  DescriptionList,
  Heading,
  Link,
  Mark,
  OrderedList,
  Paragraph,
  UnorderedList,
} from '@amsterdam/design-system-react/src'
import { headingLevels } from '@amsterdam/design-system-react/src/Heading/Heading'

import { loFiMeta } from './loFiMeta'

const meta = {
  ...loFiMeta,
  title: 'Modes/Lo-fi/Typography',
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

/**
 * Every text component in the Redacted Script face, so a change to the font files or to
 * `ams.typography.font-family` shows up. The three faces map to weight ranges rather than single
 * weights, so the sheet renders regular, bold and light text side by side: a wrong range collapses
 * one of them onto another face.
 */
export const Test: Story = {
  render: () => (
    <div className="_ams-tests-stack" style={{ maxInlineSize: '44rem' }}>
      {headingLevels.map((level) => (
        <Heading key={level} level={level}>
          Amsterdam Light Festival maakt de stad ook deze winter een beetje mooier
        </Heading>
      ))}
      <Paragraph size="large">
        Het waterrijke achterland van de provincie Holland was een paradijs voor vissers.
      </Paragraph>
      <Paragraph>
        Terwijl de visserij floreerde in Holland, was Amsterdam eigenlijk helemaal geen visserijstad. Toch maakten
        Amsterdammers naam in de <Mark>vishandel</Mark>. Zij speelden een <strong>cruciale rol</strong> bij het
        klaarmaken en vervoeren van haring. <Link href="#">Lees meer over de haringhandel</Link>.
      </Paragraph>
      <Paragraph size="small">Bron: Stadsarchief Amsterdam, collectie handelsgeschiedenis.</Paragraph>
      <UnorderedList>
        <UnorderedList.Item>Ervaring is niet noodzakelijk.</UnorderedList.Item>
        <UnorderedList.Item>Deze banen bieden stabiliteit en zekerheid.</UnorderedList.Item>
        <UnorderedList.Item>Er blijft altijd vraag naar werknemers in de bouw en techniek.</UnorderedList.Item>
      </UnorderedList>
      <OrderedList>
        <OrderedList.Item>Ervaring is niet noodzakelijk.</OrderedList.Item>
        <OrderedList.Item>Deze banen bieden stabiliteit en zekerheid.</OrderedList.Item>
        <OrderedList.Item>Er blijft altijd vraag naar werknemers in de bouw en techniek.</OrderedList.Item>
      </OrderedList>
      <DescriptionList>
        <DescriptionList.Term>Land</DescriptionList.Term>
        <DescriptionList.Description>Nederland</DescriptionList.Description>
        <DescriptionList.Term>Plaatsnaam</DescriptionList.Term>
        <DescriptionList.Description>Amsterdam</DescriptionList.Description>
        <DescriptionList.Description>Weesp</DescriptionList.Description>
      </DescriptionList>
      <Blockquote>
        Voor Amsterdam was de Jordaan één oproer en één fort. De Amsterdammer begreep de Jordaner niet, die zelden uit
        zijn buurt komt, soms niet uit zijn straat.
      </Blockquote>
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
