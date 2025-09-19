import type { SVGProps } from 'react'

const SvgEyeOpenFill = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8m15 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgEyeOpenFill
