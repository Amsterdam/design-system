/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import {
  ButtonHTMLAttributes,
  Children,
  ForwardedRef,
  forwardRef,
  isValidElement,
  PropsWithChildren,
  useState,
} from 'react'
import { Icon, IconProps } from '../Icon'

export type AppNavigationButtonProps = {
  active?: boolean
  icon?: IconProps['svg']
  label: string
  open?: boolean
} & PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export const AppNavigationButton = forwardRef(
  (
    { active, children, className, icon, label, open = false, ...restProps }: AppNavigationButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const [submenuOpen, setSubmenuOpen] = useState(open)

    // Check if children contain an element with type 'AppNavigation.Menu'
    const hasSubMenu = Children.toArray(children).some(
      (child) => isValidElement(child) && (child.type as any)?.displayName === 'AppNavigation.Menu',
    )

    return (
      <li className={clsx('ams-app-navigation__menu-item', submenuOpen && 'ams-app-navigation__menu-item--open')}>
        <button
          {...restProps}
          aria-expanded={submenuOpen ? 'true' : 'false'}
          className={clsx('ams-app-navigation__button', active && 'ams-app-navigation__button--active', className)}
          onClick={() => setSubmenuOpen(!submenuOpen)}
          ref={ref}
        >
          {icon && <Icon size="large" svg={icon} />}
          <span className="ams-app-navigation__label">{label}</span>
          {hasSubMenu && <Icon className="ams-app-navigation__chevron" size="small" svg={ChevronDownIcon} />}
        </button>
        {children}
      </li>
    )
  },
)

AppNavigationButton.displayName = 'AppNavigation.Button'
