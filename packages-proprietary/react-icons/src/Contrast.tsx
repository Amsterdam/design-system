import type { SVGProps } from 'react'

const SvgContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11m-11 9a9 9 0 1 0 0-18z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgContrast
