import type { SVGProps } from 'react'

const SvgStarFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m12 18-6 3.5 1-7L2.5 10 9 9l3-6.5L15 9l6.5 1-4.5 4.5 1 7z" fill="#000" />
  </svg>
)
export default SvgStarFill
