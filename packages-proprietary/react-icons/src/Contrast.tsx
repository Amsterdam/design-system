import type { SVGProps } from 'react'
const SvgContrast = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
    <path
      fillRule="evenodd"
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11m-11 9a9 9 0 1 0 0-18z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgContrast
