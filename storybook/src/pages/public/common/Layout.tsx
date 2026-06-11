/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { PageFooter, SkipLink } from '@amsterdam/design-system-react'

import { Default as PageFooterStory } from '../../../components/PageFooter/PageFooter.stories'
import { AppHeader } from './AppHeader'

type LayoutProps = {
  readonly skipLinkLabel?: string
  readonly skipLinkTargetId?: string
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

export const Layout = ({
  children,
  skipLinkLabel = 'Direct naar inhoud',
  skipLinkTargetId = 'inhoud',
}: LayoutProps) => (
  <>
    <SkipLink href={`#${skipLinkTargetId}`}>{skipLinkLabel}</SkipLink>
    <AppHeader />
    {children}
    <PageFooter>{PageFooterStory.args?.children}</PageFooter>
  </>
)
