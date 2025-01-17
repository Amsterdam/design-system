/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import { FooterBottomLink } from './FooterBottomLink'
import { Grid } from '../Grid'
import { Heading } from '../Heading'

export type FooterProps = {
  /** A slot for the bottom links. Use Footer.BottomLink here. */
  bottomLinks?: ReactNode
  /** The title for the bottom section for screen readers. */
  bottomTitle?: string
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

const FooterRoot = forwardRef(
  ({ bottomLinks, bottomTitle, children, className, ...restProps }: FooterProps, ref: ForwardedRef<HTMLElement>) => (
    <footer {...restProps} ref={ref} className={clsx('ams-footer', className)}>
      <div className="ams-footer__top">{children}</div>
      {bottomLinks && (
        <div className="ams-footer__bottom">
          {bottomTitle && (
            <Heading className="ams-visually-hidden" level={2}>
              {bottomTitle}
            </Heading>
          )}
          <Grid paddingVertical="small">
            <Grid.Cell span="all">
              <ul className="ams-footer__bottom-links">{bottomLinks}</ul>
            </Grid.Cell>
          </Grid>
        </div>
      )}
    </footer>
  ),
)

FooterRoot.displayName = 'Footer'

export const Footer = Object.assign(FooterRoot, { BottomLink: FooterBottomLink })
