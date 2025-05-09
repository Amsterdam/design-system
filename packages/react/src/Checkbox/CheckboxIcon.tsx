/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { SVGProps } from 'react'

const SvgCheckbox = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect className="ams-checkbox__rectangle" height="22" strokeWidth="2" width="22" x="1" y="1" />
    <rect className="ams-checkbox__hover-indicator" height="20" strokeWidth="1" width="20" x="2" y="2" />
    <path className="ams-checkbox__checked-indicator" d="M3.251 13.017L8.554 18.761L20.749 5.239" strokeWidth="3" />
    <line className="ams-checkbox__indeterminate-indicator" strokeWidth="3" x1="4" x2="20" y1="12" y2="12" />
  </svg>
)

export default SvgCheckbox
