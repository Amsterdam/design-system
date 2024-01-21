import { ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type {
  AnchorHTMLAttributes,
  ForwardedRef,
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
} from 'react'
import { Icon } from '../Icon'

type BackgroundName = 'default' | 'light' | 'dark'

export interface LinkListLinkProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
  /** The target url for the link. */
  href: string
  /**
   * An icon to display instead of the default chevron.
   * Don’t mix custom icons with chevrons in one list.
   */
  icon?: Function
  /** Whether the link sits on a dark background. */
  onBackground?: BackgroundName
  /**
   * The text size for the link.
   * Use the same size for all items in the list.
   */
  size?: 'small' | 'large'
}

interface LinkListLinkComponent
  extends ForwardRefExoticComponent<LinkListLinkProps & RefAttributes<HTMLAnchorElement>> {}

/** One link with a Link List. */
export const LinkListLink = forwardRef(
  (
    { children, className, href, icon, onBackground, size, ...restProps }: LinkListLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    return (
      <li>
        <a
          className={clsx(
            'amsterdam-link-list__link',
            onBackground && `amsterdam-link-list__link--on-background-${onBackground}`,
            size && `amsterdam-link-list__link--${size}`,
            className,
          )}
          href={href}
          ref={ref}
          {...restProps}
        >
          <Icon svg={icon ?? ChevronRightIcon} size={size === 'small' ? 'level-6' : 'level-5'} />
          {children}
        </a>
      </li>
    )
  },
) as LinkListLinkComponent

LinkListLink.displayName = 'LinkList.Link'
