import type { SVGProps } from 'react'

const SvgLightningFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path clipRule="evenodd" d="M9.556 14.852V23l9.777-13.852h-4.889V1L4.667 14.852z" fill="#000" fillRule="evenodd" />
  </svg>
)
export default SvgLightningFill
