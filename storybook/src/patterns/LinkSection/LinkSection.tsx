/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HeadingProps } from '@amsterdam/design-system-react'
import type { HTMLAttributes } from 'react'

export type LinkSectionProps = {
  heading: string
  headingLevel: HeadingProps['level']
  linkHref: string
  linkText: string
  paragraph: string
} & HTMLAttributes<HTMLDivElement>

/** Mock component to render examples in Storybook. Not for reuse. */
export const LinkSection = (props: LinkSectionProps) => <div {...props} />
