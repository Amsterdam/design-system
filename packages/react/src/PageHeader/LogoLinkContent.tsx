/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { clsx } from 'clsx'

import type { LogoBrand } from '../Logo'
import type { LogoBrandConfig } from '../Logo/Logo'

import { Logo } from '../Logo'

export const LogoLinkContent = ({
  brandNameFullOrShort,
  brandNameShort,
  logoAccessibleName,
  logoBrand,
}: {
  brandNameFullOrShort?: string
  brandNameShort?: string
  logoAccessibleName?: string
  logoBrand: LogoBrand | LogoBrandConfig
}) => (
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
