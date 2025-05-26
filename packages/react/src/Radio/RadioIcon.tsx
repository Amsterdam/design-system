/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { SVGProps } from 'react'

const SvgRadio = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle className="ams-radio__circle" cx={12} cy={12} fill="none" r={10} stroke="black" strokeWidth="2px" />
    <circle
      className="ams-radio__hover-indicator"
      cx={12}
      cy={12}
      fill="none"
      r={9.5}
      stroke="black"
      strokeWidth="3px"
    />
    <circle className="ams-radio__checked-indicator" cx={12} cy={12} r={6} />
  </svg>
)

export default SvgRadio
