/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { SVGProps } from 'react'

export const PageHeaderMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path className="ams-page-header__menu-icon-top" d="M23 5H1v2h22z" />
    <path className="ams-page-header__menu-icon-middle" d="M23 11H1v2h22z" />
    <path className="ams-page-header__menu-icon-bottom" d="M1 17h22v2H1z" />
  </svg>
)
