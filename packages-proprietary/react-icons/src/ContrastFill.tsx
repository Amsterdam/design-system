import type { SVGProps } from 'react'

const SvgContrastFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12m11 9a9 9 0 1 1 0-18z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgContrastFill
