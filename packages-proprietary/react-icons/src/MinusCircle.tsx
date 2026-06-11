import type { SVGProps } from 'react'

const SvgMinusCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18 11H6v2h12z" fill="#000" />
    <path
      clipRule="evenodd"
      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11m9-11a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
)
export default SvgMinusCircle
