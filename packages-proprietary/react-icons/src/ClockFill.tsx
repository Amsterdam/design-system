import type { SVGProps } from 'react'

const SvgClockFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11M11 5v7.414l3.293 3.293 1.414-1.414L13 11.586V5z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgClockFill
