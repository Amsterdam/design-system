import type { SVGProps } from 'react'

export const HeaderMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <line x1="0" x2="100%" y1="50%" y2="50%" className="ams-header__menu-icon-top" />
    <line x1="0" x2="100%" y1="50%" y2="50%" className="ams-header__menu-icon-middle" />
    <line x1="0" x2="100%" y1="50%" y2="50%" className="ams-header__menu-icon-bottom" />
  </svg>
)
