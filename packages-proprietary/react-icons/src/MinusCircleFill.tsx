import type { SVGProps } from 'react'

const SvgMinusCircleFill = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11m-5-1H6v2h12z"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgMinusCircleFill
