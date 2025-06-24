/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { Children, isValidElement } from 'react'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'
import { Icon, IconProps } from '../Icon'

export type AppNavigationMenuButtonProps = {
  active?: boolean
  icon?: IconProps['svg']
  label: string
} & PropsWithChildren<HTMLAttributes<HTMLButtonElement>>

export const AppNavigationMenuButton = forwardRef(
  (
    { active, children, className, icon, label, ...restProps }: AppNavigationMenuButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    // const [submenuOpen, setSubmenuOpen] = useState(false)

    // Check if children contain an element with type 'AppNavigation.Menu'
    const hasSubMenu = Children.toArray(children).some(
      (child) => isValidElement(child) && (child.type as any)?.displayName === 'AppNavigation.Menu',
    )

    return (
      <li className={clsx('ams-app-navigation__menu-item')}>
        <button
          {...restProps}
          //   aria-expanded={hasSubMenu ? submenuOpen : undefined}
          className={clsx(
            'ams-app-navigation__menu-link',
            active && 'ams-app-navigation__menu-link--active',
            className,
          )}
          //   onClick={handleClick}
          ref={ref}
        >
          {icon && <Icon size="large" svg={icon} />}
          <span className="ams-app-navigation__menu-link-label">{label}</span>
          {hasSubMenu && <Icon className="ams-app-navigation__menu-link-chevron" size="small" svg={ChevronDownIcon} />}
        </button>
        {children}
      </li>
    )
  },
)

AppNavigationMenuButton.displayName = 'AppNavigation.MenuButton'
