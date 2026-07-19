/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { PropsWithChildren } from 'react'

import { PageFooter, SkipLink } from '@amsterdam/design-system-react'

import { PageFooterContent } from '../../../components/PageFooter/PageFooterContent'
import { AppHeader } from './AppHeader'

type SkipLinkItem = {
  readonly label: string
  readonly targetId: string
}

type LayoutProps = PropsWithChildren<{
  readonly skipLinks?: ReadonlyArray<SkipLinkItem>
}>

export const Layout = ({
  children,
  skipLinks = [{ label: 'Direct naar inhoud', targetId: 'inhoud' }],
}: LayoutProps) => (
  <>
    {skipLinks.map(({ label, targetId }) => (
      <SkipLink href={`#${targetId}`} key={targetId}>
        {label}
      </SkipLink>
    ))}
    <AppHeader />
    {children}
    <PageFooter>
      <PageFooterContent />
    </PageFooter>
  </>
)
