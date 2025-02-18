import type { SVGProps } from 'react'

export const HeaderMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <line className="ams-header__menu-icon-top" x1="0" x2="100%" y1="50%" y2="50%" />
    <line className="ams-header__menu-icon-middle" x1="0" x2="100%" y1="50%" y2="50%" />
    <line className="ams-header__menu-icon-bottom" x1="0" x2="100%" y1="50%" y2="50%" />
  </svg>
)
