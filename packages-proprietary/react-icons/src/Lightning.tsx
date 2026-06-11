import type { SVGProps } from 'react'

const SvgLightning = (props: SVGProps<SVGSVGElement>) => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      clipRule="evenodd"
      d="M9.556 14.852V23l9.777-13.852h-4.889V1L4.667 14.852zm-1.03-2h3.03v3.847l3.918-5.55h-3.03V7.3z"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgLightning
