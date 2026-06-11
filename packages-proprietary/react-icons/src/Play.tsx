import type { SVGProps } from 'react'

const SvgPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.757 20V4l12.571 8z" fill="#000" />
  </svg>
)
export default SvgPlay
