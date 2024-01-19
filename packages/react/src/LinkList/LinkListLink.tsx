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
  href: string
  icon?: Function
  onBackground?: BackgroundName
  size?: 'small' | 'large'
}

interface LinkListLinkComponent
  extends ForwardRefExoticComponent<LinkListLinkProps & RefAttributes<HTMLAnchorElement>> {}

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
