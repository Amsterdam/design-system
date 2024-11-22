import type { SVGProps } from 'react'

const SvgRadio = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <circle cx={12} cy={12} r={10} className="ams-radio__circle" />
    <circle cx={12} cy={12} r={9.5} className="ams-radio__hover-indicator" />
    <circle cx={12} cy={12} r={6} className="ams-radio__checked-indicator" />
  </svg>
)

export default SvgRadio
