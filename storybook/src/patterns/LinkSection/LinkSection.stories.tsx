/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid, Heading, LinkList, Paragraph, StandaloneLink } from '@amsterdam/design-system-react'

import type { LinkSectionProps } from './LinkSection'

import { exampleLinkList } from '../../_common/exampleContent'
import { LinkSection } from './LinkSection'

const linkList = exampleLinkList()

const meta = {
  title: 'Patterns/Public/Link Section',
  component: LinkSection,
  args: {
    heading: 'Richtlijnen vergunningverlening Koningsdag 2027',
    headingLevel: 2,
    linkHref: '#',
    linkText: 'Vraag een vergunning aan',
    paragraph:
      'Uw eigen buurt schoonhouden? U kunt meehelpen door alleen of samen met uw buren een afvalcontainer te adopteren. Bekijk hier hoe het werkt en hoe u zich aanmeldt als containeradoptant.',
  },
  argTypes: {
    headingLevel: {
      control: 'inline-radio',
      options: [2, 3, 4],
    },
  },
  decorators: [
    (Story) => (
      <Grid>
        <Grid.Cell span={{ narrow: 4, medium: 4, wide: 5 }} start={{ narrow: 1, medium: 1, wide: 2 }}>
          <Story />
        </Grid.Cell>
      </Grid>
    ),
  ],
} satisfies Meta<typeof LinkSection>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: ({ heading, headingLevel, linkHref, linkText, paragraph }: LinkSectionProps) => (
    <>
      <Heading className="ams-mb-s" level={headingLevel} size="level-3">
        {heading}
      </Heading>
      <Paragraph className="ams-mb-s">{paragraph}</Paragraph>
      <StandaloneLink href={linkHref}>{linkText}</StandaloneLink>
    </>
  ),
}

export const WithLinkList: Story = {
  args: {
    heading: 'Trouwen en Partnerschap',
    paragraph: '',
  },
  render: ({ heading, headingLevel, linkHref, linkText, paragraph }: LinkSectionProps) => (
    <>
      <Heading className="ams-mb-s" level={headingLevel} size="level-3">
        {heading}
      </Heading>
      <Paragraph className="ams-mb-s">{paragraph}</Paragraph>
      <LinkList>
        <LinkList.Link href={linkHref}>{linkText}</LinkList.Link>
        {linkList.map((text) => (
          <LinkList.Link href="#" key={text}>
            {text}
          </LinkList.Link>
        ))}
      </LinkList>
    </>
  ),
}

export const WithParagraphAndLinkList: Story = {
  args: {
    heading: 'Wie Amsterdam zegt, zegt kunst en cultuur',
    paragraph:
      'Van de musea en culturele broedplaatsen tot de stadsparken en de met kunst versierde gevels van de ' +
      'grachtenpanden. Kunst en cultuur is altijd en overal in Amsterdam. En het houdt niet op als de zon ' +
      'ondergaat: ook de clubscene is van culturele waarde voor de stad.',
  },
  render: ({ heading, paragraph }: LinkSectionProps) => (
    <>
      <Heading className="ams-mb-s" level={2} size="level-3">
        {heading}
      </Heading>
      <Paragraph className="ams-mb-s">{paragraph}</Paragraph>
      <LinkList>
        <LinkList.Link href="#">Huisvesting voor kunst en cultuur</LinkList.Link>
        <LinkList.Link href="#">Vrije ruimte in Amsterdam</LinkList.Link>
        <LinkList.Link href="#">De nacht heeft de toekomst</LinkList.Link>
        <LinkList.Link href="#">Kunstwerken in de stad</LinkList.Link>
        <LinkList.Link href="#">Werelderfgoed</LinkList.Link>
        <LinkList.Link href="#">Stadscuratorium</LinkList.Link>
        <LinkList.Link href="#">EIT Culture & Creativity</LinkList.Link>
      </LinkList>
    </>
  ),
}
