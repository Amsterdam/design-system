/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { clsx } from 'clsx'

import type { PageHeaderProps } from './PageHeader'

import { Logo } from '../Logo'

type LogoLinkContentProps = {
  readonly brandNameFullOrShort?: PageHeaderProps['brandName'] | PageHeaderProps['brandNameShort']
  readonly brandNameShort?: PageHeaderProps['brandNameShort']
  readonly logoAccessibleName?: PageHeaderProps['logoAccessibleName']
  readonly logoBrand: PageHeaderProps['logoBrand']
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
