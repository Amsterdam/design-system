/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { clsx } from 'clsx'

import type { PageHeaderProps } from './PageHeader'

import { Logo } from '../Logo'

type LogoLinkContentProps = {
  brandNameFullOrShort?: PageHeaderProps['brandName'] | PageHeaderProps['brandNameShort']
  brandNameShort?: PageHeaderProps['brandNameShort']
  logoAccessibleName?: PageHeaderProps['logoAccessibleName']
  logoBrand: PageHeaderProps['logoBrand']
}

export const LogoLinkContent = ({
  brandNameFullOrShort,
  brandNameShort,
  logoAccessibleName,
  logoBrand,
}: LogoLinkContentProps) => (
  <>
    <span className={clsx(logoBrand === 'amsterdam' && brandNameFullOrShort && 'ams-page-header__logo-container')}>
      <Logo aria-label={logoAccessibleName} brand={logoBrand} />
    </span>
    {brandNameShort && (
      <span aria-hidden="true" className="ams-page-header__brand-name-short">
        {brandNameShort}
      </span>
    )}
    {brandNameFullOrShort && (
      <span aria-hidden="true" className="ams-page-header__brand-name">
        {brandNameFullOrShort}
      </span>
    )}
  </>
)
