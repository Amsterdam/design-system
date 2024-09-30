/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react'
import { Grid } from '../Grid'
import { Heading } from '../Heading'
import { Logo } from '../Logo'
import type { LogoBrand } from '../Logo'

export type HeaderProps = {
  /** The name of the application. */
  appName?: string
  /** The list of menu links. Use a Page Menu here. */
  links?: ReactNode
  /** The name of the brand for which to display the logo. */
  logoBrand?: LogoBrand
  /** The url for the link on the logo. */
  logoLink?: string
  /** The accessible text for the link on the logo. */
  logoLinkTitle?: string
} & HTMLAttributes<HTMLElement>

export const Header = forwardRef(
  (
    {
      appName,
      children,
      className,
      links,
      logoBrand = 'amsterdam',
      logoLink = '/',
      logoLinkTitle = 'Ga naar de homepage',
      ...restProps
    }: HeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <Grid as="header" gapVertical="none">
      <Grid.Cell {...restProps} className={clsx('ams-header', className)} ref={ref} span="all">
        <div className="ams-header__section">
          <a className="ams-header__logo-link" href={logoLink}>
            <span className="ams-visually-hidden">{logoLinkTitle}</span>
            <Logo brand={logoBrand} />
          </a>
          {appName && (
            <Heading level={1} size="level-6">
              {appName}
            </Heading>
          )}
        </div>
        <div className="ams-header__section">{links && <div className="ams-header__links">{links}</div>}</div>
      </Grid.Cell>
      {children}
    </Grid>
  ),
)

Header.displayName = 'Header'
