import type { SVGProps } from 'react'

const SvgEyeOpenFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8m15 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      fill="#202020"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgEyeOpenFill
