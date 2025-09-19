import type { SVGProps } from 'react'

const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M13 11.586V5h-2v7.414l3.293 3.293 1.414-1.414z" />
    <path
      clipRule="evenodd"
      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11m9-11a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgClock
