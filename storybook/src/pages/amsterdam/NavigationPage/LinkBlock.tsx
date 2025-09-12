import type { HeadingProps } from '@amsterdam/design-system-react'

import { Heading, LinkList, Paragraph, StandaloneLink } from '@amsterdam/design-system-react'

type LinkBlockProps = {
  heading: string
  headingLevel?: HeadingProps['level']
  introduction?: string
  links: string[]
}

export const LinkBlock = ({ heading, headingLevel = 3, introduction, links }: LinkBlockProps) => (
  <>
    <Heading className="ams-mb-s" level={headingLevel} size={headingLevel === 3 ? undefined : 'level-3'}>
      {heading}
    </Heading>
    {introduction && <Paragraph className="ams-mb-s">{introduction}</Paragraph>}
    {links.length === 1 ? (
      <StandaloneLink href="#">{links[0]}</StandaloneLink>
    ) : (
      <LinkList>
        {links.map((link) => (
          <LinkList.Link href="#" key={link}>
            {link}
          </LinkList.Link>
        ))}
      </LinkList>
    )}
  </>
)
